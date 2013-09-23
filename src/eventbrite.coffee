###

# EventBrite after-registration-hook

fetch information about current order (attendee)
and pass them to Samepage part

###

util = require 'util'
Eventbrite = require 'eventbrite'
{ createSpProfile } = require(__dirname + '/createSpProfile')

ebClient = Eventbrite
  app_key: process.env.EB_APP_KEY
  user_key: process.env.EB_USER_KEY

exports.run = (options) ->

  console.log options # log EID and OID
  orderId = options.oid

  callback = (err, data) ->

    if err?
      console.log err
      return

    options = null
    for att in data.attendees

      attendee = att.attendee

      if attendee.order_id.toString() is orderId

        pageText = null
        for ans in attendee.answers
          answer = ans.answer

          text = "#{answer.question}: #{answer.answer_text}"

          if pageText is null
            pageText = text
          else
            pageText += "<br />\n" + text

        profileOptions =
          email: attendee.email
          pageData:
            name: "#{attendee.first_name} #{attendee.last_name}"
            text: pageText

        dummyCallback = ->
        createSpProfile profileOptions, dummyCallback

  ebClient.event_list_attendees {id: options.eid}, callback
