module.exports = {
    app: {
        token: 'xxxxxxx',
        playing: 'C, R, B',
        global: true,
        guild: 'xxxxxxx'
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
