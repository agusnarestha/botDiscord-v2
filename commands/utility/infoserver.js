const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'infoserver',
    description: 'Info Server', 
    
    execute(message, args){

        const embed = new MessageEmbed()
            .setTitle('SERVER INFO')
            .setColor(0xff0000)
            .setDescription('Welcome Gamers!!!')
            .setThumbnail(message.guild.iconURL({dynamic: true, size: 512}))
            .addField("**MEMBER COUNT**", `${message.guild.memberCount}`, true)
        message.channel.send(embed);
    }
}