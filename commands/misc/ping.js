module.exports = {
    commands: 'ping',
    callback: (message, arguments, text, client) => {
      message.reply('Calculating ping...').then((resultMessage) => {
        const ping = resultMessage.createdTimestamp - message.createdTimestamp
  
        resultMessage.edit(`Bot latency: ${ping}, API Latency: ${message.client.ws.ping}`)
        // // message.channel.send(`🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`)
      })
    },
  }