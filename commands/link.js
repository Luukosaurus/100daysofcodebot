const fs = require("fs");
module.exports = {
    name: 'link',
    aliases: ["url"],
    description: "Voeg een link toe aan je naam",
    async execute(client, message, args, Discord){
        if(args.length == 0) return;
        var tagged = message.mentions.users.first();
        fs.readFile(`./opslag/gebruikerlinks.json`, "utf8", (err, jsonString) => {
            if (err) {
                console.log("File read failed:", err);
                return;
            }
            const linkinfo = JSON.parse(jsonString)
            if (args[0] == "add"){
                userlink = args[1]
                linkinfo[message.author.id] = userlink
                newlinkinfo  = JSON.stringify(linkinfo,null,2)
                fs.writeFile(`./opslag/gebruikerlinks.json`, newlinkinfo,function (err) {
                    if (err) {console.log(err)};
                });
                message.reply("Je portfolio is toegevoegd")
            }else if(tagged){
                tagged =  message.guild.members.cache.get(tagged.id)
                message.channel.send("De link van het portfolio van " + tagged.user.username + " is " + linkinfo[tagged.id])
            }
        })
    }
}