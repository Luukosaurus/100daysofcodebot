const fs = require("fs");
const cron = require('cron');
module.exports = async (client,Discord) => {
    const guild = client.guilds.cache.get("1006290401734434847")
    const remindtime = 6
    scheduledMessage = new cron.CronJob('00 00 7 * * *', async () => {
        var today = new Date()
        var start = new Date("08/7/2022");
        var dezedag = Math.floor((today[Symbol.toPrimitive]('number') - start[Symbol.toPrimitive]('number'))/86400000)
        const channel = guild.channels.cache.get("1006327689881337907")
        channel.messages.fetch().then(async (messages) => {
            channel.bulkDelete(5)
        })
        const Reminder = new Discord.EmbedBuilder()
        .setColor("#46FF00")
        .setTitle("Dagelijkse reminder ")
        .setDescription(`Vergeet niet vandaag je dag ${dezedag} les te doen`)
        .setFooter({
            text: `reageer met ✅ als je klaar bent met dag ${dezedag}`
        });
        const message = await channel.send({embeds:[Reminder]})
        message.react("✅")
    })
    scheduledMessage.start()
}