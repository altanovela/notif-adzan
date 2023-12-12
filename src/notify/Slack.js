/**
 * msteams.js
 * Used to Send Notification to MS Teams
 * 
 * author : rio.bastian
 * created : 2023-12-11 15:58
 */
var request = require('sync-request');
var constn  = require('.././constant');
var format  = require('string-format');
var Channel = require('../api/Channel');

class Slack extends Channel {

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
        var resn = request('POST', constn.SLACK_CHWEB_HOOK, {
            json: { "text" : message }
        });
    }

    /**
     * Message Formatter
     * @param {*} adzanTimes 
     * @param {*} adzanLabel 
     */
    msgformat(adzanTimes, adzanLabel){
        return format(
                '<!channel>{0}'+
                'Assalamualaikum, Ikhwan fillah,.{0}'+
                '*{1}* menit lagi masuk waktu {2}, yuk siap siap sholat.{0}'+
                'Waktu *{2}* hari ini pukul *{3}:{4} WIB.*', 
                '\n', constn.REMIND_IN_MINUTE, adzanLabel, 
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