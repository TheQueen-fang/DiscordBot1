const{ REST, Routes } =require('discord.js');

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
  {
    name: 'create',
    description:'Create a new short URL'
  }
];

const rest = new REST({ version: '10' }).setToken('MTE4MTk1MzU3ODQxMjI3Nzg3Mw.GmhjwH.CHIFcZglYCZ5T4-j6-Pwt3ftYNaw7HBGLnVIRM');



(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands('1181953578412277873'), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();

