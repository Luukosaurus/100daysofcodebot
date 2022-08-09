const fs = require("fs");
module.exports = {
    name: 'progress',
    aliases: ["progressie","voortgang","les"],
    description: "geef je progressie aan met een command",
    execute(client, message, args, Discord){
        if(args.length == 0) return;
        var tagged = message.mentions.users.first();
        if(args[0] == "set"){
            fs.readFile(`./opslag/lesnrs.json`, "utf8", (err, jsonString) => {
                if (err) {
                    console.log("File read failed:", err);
                    return;
                }
                const lesnrs = JSON.parse(jsonString)
                lesnrs[message.author.id] = parseInt(args[1])
                newlesnrsinfo  = JSON.stringify(lesnrs,null,2)
                fs.writeFile(`./opslag/lesnrs.json`, newlesnrsinfo,function (err) {
                    if (err) {console.log(err)};
                });
                message.channel.send(`Je hebt ingesteld dat je les ${args[1]} af hebt`)
            })
        } else if(tagged){
            fs.readFile(`./opslag/lesnrs.json`, "utf8", (err, jsonString) => {
                if (err) {
                    console.log("File read failed:", err);
                    return;
                }
                const lesnrs = JSON.parse(jsonString)
                tagged =  message.guild.members.cache.get(tagged.id)
                message.channel.send(tagged.user.username + " is bij les " +lesnrs[tagged.id])
            })
        } else if(args[0] == "all"){
            fs.readFile(`./opslag/lesnrs.json`, "utf8", (err, jsonString) => {
                if (err) {
                    console.log("File read failed:", err);
                    return;
                }
                const lesnrs = JSON.parse(jsonString)
                var text = ""
                for(var i = 0; i < Object.keys(lesnrs).length; i++){
                    userid = Object.keys(lesnrs)[i]
                    userlvl = Object.values(lesnrs)[i]
                    user = message.guild.members.cache.get(userid)
                    text += `${user.user.username} is bij les ${userlvl}\n`
                }
                message.channel.send(text)
            })
        }
    }
}