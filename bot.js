const Discord = require('discord.js');

const client = new Discord.Client();


client.on('message', message => {
 var mention = message.mentions.members.first();
   var chan = message.member.voiceChannel;
	var chan2 = mention.voiceChannel;
  if (message.content.startsWith("+move")) {
   if(!message.member.roles.find(role => role.name === "IDK-Move")) return message.reply("__**``ĮDK-Move`` ليس لديك رول**__");
   if (!mention) return message.reply("__**العضو غير محدد**__");
   if (!chan2) return message.reply("__**العضو غير مجود في في قناة صوتية**__");
    console.log('hi')
    let log = message.guild.channels.find( channel => channel.name === "move-log");
    log.send('**`' + message.author.username + '`** ** Moved ** **`' + mention.displayName + '`** ** From ** __**' +  chan2 +'**__ **To** __**' + chan + '**__');
    mention.setVoiceChannel(chan)
   
  }

});
//////////////////////////////////////////////////////////////////////


client.login(process.env.BOT_TOKEN);
