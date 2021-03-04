const Discord = require('discord.js');
const client = new Discord.Client();

client.commands = new Discord.Collection();
const fs = require('fs');
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for(const file of commandFiles){
    const command = require(`./commands/${file}`)
    client.commands.set(command.name, command) 
}

const { prefix, token } = require('./config.json')

client.once('ready', () => {
    console.log('Bot Berjalan...')
})
    
    //Below Auto-Changing Status
    setInterval(() => {
        const statuses = [
            `Patuhi Protokol Kesehatan`,
            `Jaga Jarak`,
            `Pakai Masker`,
        ]

        const status = statuses[Math.floor(Math.random() * statuses.length)]
        client.user.setActivity(status, { type: "WATCHING"}) 
    }, 2000)

client.on('message', message => {
    if(!message.content.startsWith(prefix)||message.author.bot) return

    const args = message.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase()

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args)
    } else if(command === 'badut'){
        client.commands.get('badut').execute(message, args)
    } else if(command === 'infoserver'){
        client.commands.get('infoserver').execute(message, args)
    } else if(command === 'infoserver'){
        client.commands.get('infoserver').execute(message, args)
    } 
})


client.login(token)