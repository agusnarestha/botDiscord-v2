module.exports = {
    name: 'ping',
    description: 'Simple Ping Command', 
    execute(message, args){
        message.channel.send('Pong!')
    }
}