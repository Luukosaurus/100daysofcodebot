const dailyreminder = require("../../repeating/daily reminder")
const bijhouden = require("../../repeating/bijhuider");
const telaat = require("../../repeating/telaat");
const bijnatelaat = require("../../repeating/bijnatelaat");
module.exports = (client, Discord) =>{
    console.log("hello world");
    dailyreminder(client,Discord)
    bijhouden(client,Discord)
    telaat(client,Discord)
    bijnatelaat(client,Discord)
}