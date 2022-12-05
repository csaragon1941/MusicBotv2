module.exports = {
    app: {
        token: 'xxxxxxx', //Enter Token from your Discord Developers Portal
        playing: 'C, R, B',
        global: true,
        guild: 'xxxxxxx'    //Enter the Guild ID found within the Discord Server
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
