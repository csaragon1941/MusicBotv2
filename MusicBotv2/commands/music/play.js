//Play Command
// When the user input '/play' into the discord server when bot is online. It pulls music from YouTube Api with the user input.

const { QueryType } = require('discord-player');
const { ApplicationCommandOptionType } = require('discord.js');
module.exports = {
    name: 'play', //command to run
    description: "play a song!", //description
    voiceChannel: true,
    options: [
        {
            name: 'song',
            description: 'the song you want to play',
            type: ApplicationCommandOptionType.String,
            required: true,
        }
    ],

    async execute({ inter }) {
	await inter.deferReply();
        const song = inter.options.getString('song');
        const res = await player.search(song, {
            requestedBy: inter.member,	//located which user requested and searches song requested
            searchEngine: QueryType.AUTO
        });
	//if the bot cant find the song
        if (!res || !res.tracks.length) return inter.editReply({ content: `No results found ${inter.member}... try again ? ❌`, ephemeral: true });

        const queue = await player.createQueue(inter.guild, {
            metadata: inter.channel,
            spotifyBridge: client.config.opt.spotifyBridge,
            initialVolume: client.config.opt.defaultvolume,
            leaveOnEnd: client.config.opt.leaveOnEnd
        });

        try {
            if (!queue.connection) await queue.connect(inter.member.voice.channel);
        } catch {
            await player.deleteQueue(inter.guildId);
            return inter.editReply({ content: `I can't join the voice channel ${inter.member}... try again ? ❌`, ephemeral: true});
		//if the user is not in a voice channel. This is required to hear the music.
        }

       await inter.editReply({ content:`Loading your ${res.playlist ? 'playlist' : 'track'}... 🎧`}); //when it finds the song and plays the track

        res.playlist ? queue.addTracks(res.tracks) : queue.addTrack(res.tracks[0]);

        if (!queue.playing) await queue.play();
    },
};
