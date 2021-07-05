const { MessageEmbed } = require('discord.js')
const moment = require('moment')
moment.locale('ENG')

module.exports ={
    name: 'infouser',
    description: 'Info User',
    aliases: ['infouser', 'userinfo'],
    execute(message, args){

        const member = message.mentions.members.first() || message.member
        
        const status = {
            online: '🟢:- Online',
            idle: '🟡:- Idle',
            dnd: '🔴:- DND',
            offline: '⚫:- Offline'
        }

        const embed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`User Info Of ${member.user.username}`, member.user.displayAvatarURL())
        .setThumbnail(member.user.displayAvatarURL({dynamic: true, size: 512}))
        .addField('**User-Name**', `${member.user.username}#${member.user.discriminator}`)
        .addField('**User ID**', `${member.id}`)
        .addField('**Status**', `${status[member.presence.status]}`)
        .addField('**Account Created**', `${moment.utc(member.user.createdAt).format('LLLL')}`)
        .addField('**Joined Server**', `${moment.utc(member.joinedAt).format('LLLL')}`)
        .addField('**VC**', member.voice.channel ? member.voice.channel.name + `(ChannelID : ${member.voice.channel.id})` : 'Not In A VC')
        .addField('**Roles**', `${member.roles.cache.map(role => role.toString())}`, true)
        
        message.channel.send(embed)
    }
}