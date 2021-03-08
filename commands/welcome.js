module.exports = (client) => {

    // Welcome Message Command
      const welcomechannelId = '700697889743306824' //Channel ID Welcome
      const targetChannelId = `795465232951541800` //Channel ID Rules and Roles
  
      client.on('guildMemberAdd', (member) => {
          console.log(member)
          
          const welcomemessage = ` <@${member.id}> Welcome To Our Server,
  Please Read ${member.guild.channels.cache.get(targetChannelId).toString()}
  Have A Nice Time!`
          const channel = member.guild.channels.cache.get(welcomechannelId)
          channel.send(welcomemessage)
      })
  }