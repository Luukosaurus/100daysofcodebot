const fs = require('fs');
const cron = require('cron');
module.exports = async (client,Discord) => {
    const guild = client.guilds.cache.get("1006290401734434847")
    vijfuurreminder = new cron.CronJob('00 00 17 * * *', async () => {
        sendreminder()
    })
    vijfuurreminder.start()
    achtuurreminder = new cron.CronJob('00 00 20 * * *', async () => {
        sendreminder()
    })
    achtuurreminder.start()
    tienuurreminder = new cron.CronJob('00 00 22 * * *', async () => {
        sendreminder()
    })
    tienuurreminder.start()
    function sendreminder(){
        fs.readFile(`./opslag/lesnrs.json`, "utf8", (err, jsonString) => {
            const general = client.channels.cache.get("1006290402682351650")
            var today = new Date()
            var start = new Date("08/7/2022");
            var dezedag = Math.floor((today[Symbol.toPrimitive]('number')-3600000 - start[Symbol.toPrimitive]('number'))/86400000)
            if (err) {
                console.log("File read failed:", err);
                return;
            }
            const lesnrs = JSON.parse(jsonString)
            for(var i = 0; i < Object.keys(lesnrs).length; i++){
                userid = Object.keys(lesnrs)[i]
                userlvl = Object.values(lesnrs)[i]
                if(dezedag > userlvl){
                    const user = guild.members.cache.get(userid)
                    user.send("Vergeet niet je les van vandaag af te ronden.\nAls je klaar bent druk dan op de ✅ in de reminder channel.")
                }
            }
        })
    }
}