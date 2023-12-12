/**
 * msteams.js
 * Used to Send Notification to Slack
 * 
 * author : rio.bastian
 * created : 2019-02-14 11:40
 */
var request = require('sync-request');
var constn  = require('.././constant');
var format  = require('string-format');
var Channel = require('../api/Channel');

class MsTeams extends Channel {
    /*
     * Default Constructor
     */
    constructor(){
      super();
    }

    /**
     * Slack Notification Procedure
     * @param {*} message 
     */
    call(message){
        console.log(new Date() + " " + message);
        var resn = request('POST', constn.MSTEAMS_CHWEB_HOOK, {
            json: {
                "type": "message",
                "attachments": [
                  {
                    "contentType": "application/vnd.microsoft.card.adaptive",
                    "content": {
                      "type": "AdaptiveCard",
                      "body": [
                        {
                          "type": "TextBlock",
                          "text": message
                        }
                      ],
                      "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
                      "version": "1.0"
                    }
                  }
                ]
            }
        });
    }

    /**
     * Message Formatter
     * @param {*} adzanTimes 
     * @param {*} adzanLabel 
     */
    msgformat(adzanTimes, adzanLabel){
        return format(
                '{0} {1} {2} {3}', 
                constn.REMIND_IN_MINUTE, adzanLabel, 
                adzanTimes.hours, adzanTimes.minutes);
    }

    /**
     * Notify generated Message to Slack
     * @param {*} adzanTimes 
     * @param {*} adzanLabel 
     */
    notify(adzanTimes, adzanLabel){
        this.call(
            this.msgformat(
                adzanTimes, adzanLabel));
    }
}

// Expose the Class
module.exports = MsTeams;