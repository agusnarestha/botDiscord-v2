module.exports = (client) => {

    // Welcome Message Command
      const welcomechannelId = '' //Channel You Want to Send The Welcome Message
      const targetChannelId = `` //Channel For Rules
  
      client.on('guildMemberAdd', (member) => {
          console.log(member)
          
          const welocmemessage = ` <@${member.id}> Welcome To Our Server,
  Please Read ${member.guild.channels.cache.get(targetChannelId).toString()}
  Have A Nice Time!`
          const channel = member.guild.channels.cache.get(welcomechannelId)
          channel.send(welocmemessage)
      })
  }