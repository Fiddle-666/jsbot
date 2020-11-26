const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;

client.on('ready', () => {
  console.log('Ling online');
});

client.on('message', (message) => {
  if(message.content === '/링') {
    message.reply('네 무엇을 도와드릴까요?');
  }
});

client.login(token);