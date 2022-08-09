const fs = require('fs');
const cron = require('cron');
module.exports = async (client,Discord) => {
    uitschelder = new cron.CronJob('00 59 23 * * *', async () => {
        fs.readFile(`./opslag/lesnrs.json`, "utf8", (err, jsonString) => {
            const general = client.channels.cache.get("1006291230478573668")
            var today = new Date()
            var start = new Date("08/7/2022");
            var dezedag = Math.floor((today[Symbol.toPrimitive]('number') - start[Symbol.toPrimitive]('number'))/86400000)
            if (err) {
                console.log("File read failed:", err);
                return;
            }
            const lesnrs = JSON.parse(jsonString)
            for(var i = 0; i < Object.keys(lesnrs).length; i++){
                userid = Object.keys(lesnrs)[i]
                userlvl = Object.values(lesnrs)[i]
                console.log(userid + ":"+ userlvl +":"+ dezedag)
                if(dezedag > userlvl){
                    general.send("Hallo, slaap je <@" + userid + ">? Waar blijft die kaulo opdracht. Je had hem vandaag al moeten inleveren")
                }
            }
        })
    })
    uitschelder.start()
}