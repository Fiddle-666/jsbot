const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;
const welcomeChannelName = "일반";
const welcomeChannelComment = "어서오세요. ';규칙' 명령어을 사용하여 LOL서버의 규칙을 확인해 주세요.";

client.on('ready', () => {
  console.log('Ling online');
});

client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  const newUser = member.user;
  const welcomeChannel = guild.channels.find(channel => channel.name == welcomeChannelName);

  welcomeChannel.send(`<@${newUser.id}> ${welcomeChannelComment}\n`);
});

client.on('message', (message) => {
  if(message.content === ';링') {
    message.reply('네 무엇을 도와드릴까요?');
  }
});

client.on('message', (message) => {
  if(message,content === ';규칙') {
    message.reply('1. 밤 늦게 채팅치지 마세요. 2.아무나 초대하지 마세요.');
  }
});

client.login(token);
