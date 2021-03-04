module.exports ={
    name: 'delete',
    description: 'Deletes Message', //Optional
    execute(message, args) {
        const amount = parseInt(args[0]) + 1;

        if (isNaN(amount)) {
            return message.channel.send('Masukkan nilai')
        } else if (amount <= 1 || amount > 100) {
            return message.channel.send('Kamu hanya bisa menghapus dari 1 sampai 99.')
        }

        message.channel.bulkDelete(amount, true).catch(err => {
            console.error(err);
            message.channel.send('Terjadi error pada saat menghapus pesan.')
        })
    }
}