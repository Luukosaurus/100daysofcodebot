const fs = require('fs');
module.exports = async (client,Discord) => {
    const guild = client.guilds.cache.get("1006290401734434847")
    const channel = guild.channels.cache.get("1006327689881337907")
    channel.messages.fetch().then(async (messages) => {
        console.log("nooo")
        client.on("messageReactionAdd", async (reaction,user) => {
            if (user.bot) return;
            console.log("yeaaa")
            const thischannel = reaction.message.channel
            if(thischannel.id == "1006327689881337907"){
                if(reaction.emoji.name = "✅")
                {
                    var today = new Date()
                    var start = new Date("08/7/2022");
                    var dezedag = Math.floor((today[Symbol.toPrimitive]('number') - start[Symbol.toPrimitive]('number'))/86400000)
            
                    fs.readFile(`./opslag/lesnrs.json`, "utf8", (err, jsonString) => {
                        if (err) {
                            console.log("File read failed:", err);
                            return;
                        }
                        const lesnrs = JSON.parse(jsonString)
                        lesnrs[user.id] = dezedag
                        newlesnrsinfo  = JSON.stringify(lesnrs,null,2)
                        fs.writeFile(`./opslag/lesnrs.json`, newlesnrsinfo,function (err) {
                            if (err) {console.log(err)};
                        });
                    })
                }
            }
        })
    })
}