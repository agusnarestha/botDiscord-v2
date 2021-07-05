const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'player',
    description: 'Find Player By ID',
    usage: 'player <account_id>',
    guildOnly: true,
    execute(message, args){
        const request = require('request');

        request(`https://api.opendota.com/api/players/${args}`, function(error, response, body){
            if(!error && response.statusCode === 200){
                request(`https://api.opendota.com/api/players/${args}/wl`, function(err, resp, bdy){
                    if(!error && response.statusCode === 200){
                        const player = JSON.parse(body);
                        const wl = JSON.parse(bdy)

                        const embed = new MessageEmbed()
                            .setColor('#0099ff')
                            .setTitle(`${player['profile']['personaname']}`)
                            .setURL(`${player['profile']['profileurl']}`)
                            .setAuthor('Dota Player Profile')
                            .setDescription(`Description`)
                            .setThumbnail(`${player['profile']['avatarmedium']}`)
                            .addFields(
                                { name: 'Country', value: `${player['profile']['loccountrycode']}` },
                                { name: 'Estimated MMR', value: `${player['mmr_estimate']['estimate']}` },
                                { name: 'Last Login', value: `${player['profile']['last_login']}` },
                                { name: 'Total Win', value: `${wl['win']}`, inline: true },
                                { name: 'Total Lose', value: `${wl['lose']}`, inline: true },
                            )
                            .setImage(`${player['profile']['avatarfull']}`)
                            .setTimestamp()
                        message.channel.send(embed);
                    }
                })
            }
        })
    },
}