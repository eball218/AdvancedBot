module.exports = {
    commands: 'purge',
    callback: (message, arguments, text, client) => {
        if (message.member.hasPermission('Bots')) {
            message.channel.messages.fetch().then((results) => {
                message.channel.bulkDelete(results)        
            })
        }
    }
}