module.exports = (client, Discord , message) =>{
    prefix = "!"
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    const c = client.commands.get(command) || client.commands.find(a => a.aliases && a.aliases.includes(command))
    if (c) c.execute(client,message, args , Discord);

    if (message.content.includes("https://") || message.content.includes("http://") || message.content.includes("www.")) {
        if(message.content.includes("nitro") || message.content.includes("Nitro")){
			message.delete(1);
			message.channel.send(`${message.author} Het is niet toegestaan om het woord "nitro" te gebruiken in combinatie met een link`)
		}
    }
}