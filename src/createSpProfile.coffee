###

# after-registration-hook - Samepage part

1. create user profile in 'profiles/'
2. invite new user to Sampage
3. change new profile ownership to new user

###

util = require 'util'
{ SamepageClient } = require __dirname + '/SamepageClient'

exports.createSpProfile = (profileData, finalCallback) ->

  userId = null
  pageId = null

  targetEmail = profileData.email
  pageData = profileData.pageData

  spClient = new SamepageClient

  # 10. the end
  logoutCallback = (err, data) ->
    throw err if err?
    finalCallback null, null

  # 9. logout
  addMemberCB = (err, data) ->
    throw err if err?
    spClient.logout logoutCallback

  # 8. add user to attendee group
  addUserCB = (err, data) ->
    throw err if err?

    params =
      groupId: process.env.SP_GROUP
      list: [userId]

    spClient.apiCall 'Groups.addMemberList', params, addMemberCB

  # 7. add user ownership
  overrideCB = (err, data) ->
    throw err if err?

    result = data.result

    params =
      id: pageId
      members:
        id: userId
        role: 'Admin'

    spClient.apiCall 'Members.add', params, addUserCB

  # 6. override permissions
  usersCallback = (err, data) ->
    throw err if err?

    result = data.result
    for user in result.list

      if user.emailAddress is targetEmail
        userId = user.id

    if userId is null
      throw new Error "User doesn't exist."

    params =
      id: pageId

    spClient.apiCall 'Members.override', params, overrideCB

  # 5. get user-id
  inviteCB = (err, data) ->
    throw err if err?
    spClient.apiCall 'Users.get', {}, usersCallback

  # 4. invite user
  mkTextCallback = (err, data) ->
    throw err if err?

    inviteOptions =
      message: "Welcome to Czech Hackathon portal!"
      emails: [targetEmail]

    spClient.apiCall 'User.invite', inviteOptions, inviteCB

  # 3. make page content
  mkPageCallback = (err, data) ->
    throw err if err?

    pageId = data.result.item.id

    createParams =
      type: 'TextNote',
      name: 'About me'
      value:
        text: pageData.text
      pid: pageId # parent id

    spClient.apiCall 'Items.create', createParams, mkTextCallback

  # 2. create page
  loginCallback = (err, data) ->
    throw err if err?

    createParams =
      type: 'Page'
      name: pageData.name
      pid: process.env.SP_PAGE_ID # parent id, -1 ~ root

    spClient.apiCall 'Items.create', createParams, mkPageCallback

  # 1. log-in
  spClient.login
    organizationId: process.env.SP_ORGANIZATION
    username: process.env.SP_USERNAME
    password: process.env.SP_PASSWORD
    callback: loginCallback
