const { Player } = require('discord-player');
const { Client, GatewayIntentBits } = require('discord.js'); //Important to declare because in Discord v14 needs it to connect into the Discord Api

global.client = new Client({
    intents: [
        GatewayIntentBits.Guilds,   //Guild = server
        GatewayIntentBits.GuildMembers, //These guild declarations allow permissions for the bot essentially 
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.MessageContent
    ],
   disableMentions: 'everyone',
});

client.config = require('./config'); //the configuration hold important info for the bot to work such as the TOKEN

global.player = new Player(client, client.config.opt.discordPlayer);

require('./src/loader'); //Under Contruction 
require('./src/events');

client.login(client.config.app.token); //Logs the bot into the server
