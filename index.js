//const { Client } = require("discord.js");

const { Client, GatewayIntentBits } = new require('discord.js');


const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent]
});


client.on('messageCreate', message => {
  //gives a lot content about user like who create etc etc
  //console.log(message)
  //gives the content of msg
  //console.log(message.content);

  //to stop recursion
  if (message.author.bot) { return; }
  if (message.content.startsWith('create')) {
    const url = message.content.split('create')[1];
    return message.reply(
      {
        content:'Generating short ID for'+ url,
      }
    )
  }
  message.reply(
    {
      content:"Hi From Bot",
    }
  )
});
client.on('interactionCreate', (interaction) => {
 // console.log(interaction);
  interaction.reply('Pong');
});

client.login(
  "MTE4MTk1MzU3ODQxMjI3Nzg3Mw.GmhjwH.CHIFcZglYCZ5T4-j6-Pwt3ftYNaw7HBGLnVIRM"
)