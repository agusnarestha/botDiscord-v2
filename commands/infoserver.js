const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'infoserver',
    description: 'Info Server', 
    
    callback: (message, args, text) => {

        const embed = new MessageEmbed()
            .setTitle('SERVER INFO')
            .setColor(0xff0000)
            .setDescription('Welcome Gamers!!!')
            .setThumbnail(message.guild.iconURL)
            .addField("**MEMBER COUNT**", `${message.guild.memberCount}`, true)
            .setFooter(`Gusnar BOT`);
        message.channel.send(embed);
    }
}