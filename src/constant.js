/**
 * slack.js
 * Used to Collecting Constant
 * 
 * author : rio.bastian
 * created : 2019-02-14 11:40
 */
module.exports = Object.freeze({
    // Constant, Minutes before sending notification
    REMIND_IN_MINUTE   : process.env.REMIND_IN_MINUTE,
    // Millisecond number in 1 minute
    MILIS_PER_MINUTE   : process.env.MILIS_PER_MINUTE,
    // Constant, Slack Channel Web Hook
    SLACK_CHWEB_HOOK   : process.env.SLACK_CHWEB_HOOK,
    MSTEAMS_CHWEB_HOOK : process.env.MSTEAMS_CHWEB_HOOK, 
    // Adzan Location Country
    LOCATION_COUNTRY   : process.env.LOCATION_COUNTRY,
    // Adzan Location City
    LOCATION_CITY      : process.env.LOCATION_CITY
});