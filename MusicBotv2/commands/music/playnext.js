//Playnext command
//When user enters '/playnext' it will play the next song you want within Discord.

const { ApplicationCommandOptionType } = require('discord.js');
const { QueryType } = require('discord-player');

module.exports = {
    name: 'playnext', //command
    description: "song you want to playnext", //what the command does
    voiceChannel: true,
    options: [
        {
            name: 'song',
            description: 'the song you want to playnext', 
            type: ApplicationCommandOptionType.String,
            required: true,
        }
    ],

    async execute({ inter }) {
	await inter.deferReply();
        const queue = player.getQueue(inter.guildId);
	
	    //if there is not music playing
        if (!queue || !queue.playing) return inter.editReply({ content: `No music currently playing ${inter.member}... try again ? ❌`, ephemeral: true });

        const song = inter.options.getString('song');

        const res = await player.search(song, {
            requestedBy: inter.member, //when it searches for the song
            searchEngine: QueryType.AUTO
        });
	
	    //when it cant find the track
        if (!res || !res.tracks.length) return inter.editReply({ content: `No results found ${inter.member}... try again ? ❌`, ephemeral: true });

       if (res.playlist) return inter.editReply({ content: `This command dose not support playlist's ${inter.member}... try again ? ❌`, ephemeral: true });

        queue.insert(res.tracks[0], 0)
	
	    //when it plays the track
        await inter.editReply({ content:`Track has been inserted into the queue... it will play next 🎧`});

    }
}
