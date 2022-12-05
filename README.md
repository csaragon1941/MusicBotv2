# MusicBot - v2.0
This a Discord Music Bot made to accept multiple commands that pertain to playing music within Discord. Some commands included in this program are:
* /play
* /playnext
* /ping
* /pause
* /help

## Description

This is the third iteration of the Discord Music Bot made using Visual Studio Code on MacOS(Intel Core i5) with the language JavaScript. This Bot is made to execute basic functions within Discord so you can play music!

## Getting Started

### Dependencies

* node.js
* discord.js
* discord-player
* ms
* opusscript

```
//Intalling Packages in the Terminal

npm i node.js
npm i discord.js
npm i discord-player
npm i ms
npm i opusscript
```


### Configuration - config.js
Make sure you include  put your **guid_id** *(found within server settings)* and the bot **token** *(from the discord developers website)*

```
module.exports = {
    app: {
        token: 'xxxxxx',
        playing: 'C, R, B',
        global: true,
        guild: 'xxxxxx'
    },

    opt: {
        DJ: {
            enabled: true,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        leaveOnEnd: true,
        loopMessage: false,
        spotifyBridge: true,
        defaultvolume: 75,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};

```

### Executing program

To get the Bot online, after the token, guild_id , and packages are installed, type ***node main.js*** in the terminal to turn the bot online. Once the bot is online, go into Discord to check the status of the Bot. If the Bot is online, you are able to enter slash commands into the Discord server. Have fun!


## Help

```
node:internal/modules/cjs/loader:998
  throw err;
  ^
  
  // Make sure that you are in the file directory within the terminal
        Ex. cd discord-bot-terminal
```  
 

## Authors

Christina Aragon
[csaragon1941](https://github.com/csaragon1941)

Blake Smith
[bjsmith21](https://github.com/bjsmith21)

Rose Meyers
[RoseMeyers](https://github.com/RoseMeyers)

## Version History

* 2.0
    * Various bug fixes and optimizations
    * Imports of Basic functions
* 1.0
    * Initial Release
    * Server connectivity test code

## Discord Development

Go to the ***OAuth2 URL Generator*** -> Within ***Scopes*** Select: ***bot , applications.command*** -> Within ***Bot Permissions*** Select: ***Administrator***

Go to the ***"Bot"*** Section and turn on ***Presence Intent , Server Members Intent , Message Content Intent***

**P.S If you want to add the bot to a different server, you must kick the bot out of its initial server and must repeat the processes up above. After, Re-Run the code**

