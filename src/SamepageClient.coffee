http = require("https")

class SamepageClient

  constructor: (@samepageHost = "samepage.io")->
    @organizationId = null
    @username = null
    @password = null
    @session =
      xToken: null
      sessionId: null

  login: (options = {}) ->
    if options?
      @organizationId = options.organizationId if options.organizationId?
      @username = options.username if options.username?
      @password = options.password if options.password?

    if @organizationId is null
      throw new Error 'missing organizationId'

    if @username is null
      throw new Error 'missing username'

    if @password is null
      throw new Error 'missing password'

    if not options.callback?
      options.callback = ->

    loginOptions =
      loginName: @username
      password: @password

    @apiCall 'Login', loginOptions, options.callback

  logout: (callback) ->
    if not callback?
      callback = (err, data) ->
        throw err if err?

    @apiCall 'Logout', {}, callback

  apiCall: (method, params, callback) ->
    if not method?
      throw new Error 'method argument missing'

    if not callback?
      callback = ->

    headers =
      "Content-type": "text/json"

    postData =
      method: method
      jsonrpc: "2.0"

    if params?
      postData.params = params
    else
      postData.params = {}

    urlPath = '/'

    # organizationId must be empty when calling login method
    if method isnt "Login"
      urlPath += @organizationId + '/'

    urlPath += "server/data?method=" + method

    if @session.xToken?
      headers["X-Token"] = @session.xToken
      headers["Cookie"] = "SESSION_WORKSPACE=" + @session.sessionId

    postOptions =
      port: 443
      host: @samepageHost
      path: urlPath
      method: "POST"
      headers: headers

    request = http.request(postOptions, (response) =>
      data = ""
      response.on "data", (chunk) ->
        data += chunk

      response.on "end", =>
        jsonData = JSON.parse(data)

        if method is "Login"
          # In case of login method, save session variables needed for subsequent calls
          m = JSON.stringify(response.headers["set-cookie"]).match(/SESSION_WORKSPACE=([^;]*)/)
          @session.xToken = jsonData.result.token
          @session.sessionId = m[1]

        callback null, jsonData

    )
    request.on "error", (err) ->
      console.log "Error", err

    # post the data
    request.write JSON.stringify(postData)
    request.end()

exports.SamepageClient = SamepageClient
