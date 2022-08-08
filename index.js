require("dotenv").config();
const Discord = require('discord.js');
const client = new Discord.Client({intents: [
    Discord.GatewayIntentBits.DirectMessages,
    Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.GuildBans,
    Discord.GatewayIntentBits.GuildMessages,
    Discord.GatewayIntentBits.MessageContent,
  ]});
client.commands = new Discord.Collection();
client.events - new Discord.Collection();

["command_handler", "event_handler"].forEach(handler =>{
    require(`./handlers/${handler}`)(client ,Discord);
})

client.login(process.env.TOKEN);