const fs = require('fs');
const cron = require('cron');
module.exports = async (client,Discord) => {
    uitschelder = new cron.CronJob('00 59 23 * * *', async () => {
        fs.readFile(`./opslag/lesnrs.json`, "utf8", (err, jsonString) => {
            const general = client.channels.cache.get("1006290402682351650")
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
                    randommessage(userid,userlvl,dezedag,general)
                }
            }
        })
    })
    uitschelder.start()
    function randommessage(userid, userlvl ,dezedag ,general){
        if(userid == 586531267139600388){
            messagenr = getRandomInt(13)
        }else{
            messagenr = getRandomInt(11)
        }if(messagenr == 0){
            general.send("<@" + userid + "> Ga je opdracht nog inleveren of hoe zit het?")
        }else if(messagenr == 1){
            general.send("Wauw, nu al aan het opgeven <@" + userid + ">? Lever die kkr opdracht in")
        }else if(messagenr == 2){
            general.send("Hallo <@" + userid + ">, slaap je? Waar blijft die kaulo opdracht. Je had hem vandaag al moeten inleveren")
        }else if(messagenr == 3){
            general.send("Een rustdag? Okay prima dubbele opdrachten morgen dan <@" + userid + ">")
        }else if(messagenr == 4){
            general.send("Wat ga je achterlopen? Ik dacht je ging dit afmaken of ga je liever stoppen? <@" + userid + ">")
        }else if(messagenr == 5){
            general.send("Ey we zijn hier met 4, iedereen heeft ingeleverd behalve jij <@" + userid + ">. Fix je shit of je doet gewoon niet meer mee.")
        }else if(messagenr == 6){
            general.send("Tering mongool lever je opdracht in, het is max 1-2 uurtjes <@" + userid + ">")
        }else if(messagenr == 7){
            general.send("je vind 1-2 uur al te lang om aan een opdracht te werken? Wauw <@" + userid + ">. Regel je shit en lever het in.")
        }else if(messagenr == 8){
            general.send("Oh dus je gaat niet inleveren? Waarom <@" + userid + ">? Wil je niet beter worden?")
        }else if(messagenr == 9){
            general.send("Hallo <@" + userid + ">, inleveren. Nu?")
        }else if(messagenr == 10){
            general.send("Schiet op met je kaulo opdracht <@" + userid + ">, het is allemaal niet zo moeilijk")
        }else if(messagenr == 11){
            general.send("Dus je levert niet je werk op, dan ga je het maar zelf betalen <@" + userid + ">")
        }else if(messagenr == 12){
            general.send("<@" + userid + ">, je hebt de grootste mond. Eindstand je levert niet je opdracht op, ik ben oprecht teleurgesteld in je")
        }
    }
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
}