const dailyreminder = require("../../repeating/daily reminder")
const bijhouden = require("../../repeating/bijhuider")
module.exports = (client, Discord) =>{
    console.log("hello world");
    dailyreminder(client,Discord)
    bijhouden(client,Discord)
}