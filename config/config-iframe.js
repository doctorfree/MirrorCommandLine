/* Magic Mirror Config
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * Modified by Ron Record http://ronrecord.com
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
    address: "0.0.0.0", // Address to listen on, can be:
    port: 8080,
    ipWhitelist: [
        "127.0.0.1",
        "10.0.1.44", // Mac Mini
        "10.0.1.51", // Mac Pro
        "10.0.1.85", // Raspberry Pi MagicMirror
        "10.0.1.69", // iPad Air
        "10.0.1.76", // iPhone Max Xs
        "::ffff:127.0.0.1",
        "::1",
    ],

    language: "en",
    timeFormat: 12,
    units: "imperial",
    
    modules: [
        {
            module: "alert",
        },
        // {
        //     module: "updatenotification",
        //     position: "top_bar"
        // },
        {
            module: 'MMM-Remote-Control',
            config: {
                apiKey: 'xxx_Remote-Control-API-Key_xxxxx'
            }
        },
        // {
        //     module: "mmm-hue-lights",
        //     position: "bottom_bar",
        //     config: {
        //         bridgeIp: "10.0.1.20",
        //         displayType: "grid",
        //         minimalGrid: false,
        //         updateInterval: 180000,
        //         user: "xxxxxxxxxx_Hue-Hub-User_xxxxxxxxxxxxxxxx",
        //     }
        // },
        // {
        //     module: 'MMM-Solar',
        //     position: "top_bar",
        //     config: {
        //         apiKey: "xxxxxx_Solar-API-Key_xxxxxxxxxxx",
        //         userId: "Solar-USER-ID",
        //         systemId: "Solar-System-ID",
        //         basicHeader: "true",
        //     }
        // },
        {
            module: 'MMM-iFrame',
            position: 'fullscreen_below',
            config: {
                url: [
                      "https://www.youtube.com/embed/ZFBoN7yIMZw?autoplay=1&amp;controls=0&amp;start=40",
                      "https://www.youtube.com/embed/95FxKgcgjN0?autoplay=1&amp;controls=0",
                      "https://www.youtube.com/embed/jVD67pMdv9k?autoplay=1&amp;controls=0&amp;start=40",
                      "https://www.youtube.com/embed/gdJjc6l6iII?autoplay=1&amp;controls=0&amp;start=40",
                      "https://www.youtube.com/embed/t6jlhqNxRYk?autoplay=1&amp;controls=0&amp;start=40",
                      "https://www.youtube.com/embed/zfgE_Bxears?autoplay=1&amp;controls=0",
                     ],
                updateInterval: 10 * 60 * 1000, // rotate URLs every 10 minutes
                width: "1920", // width of iframe
                height: "1080", // height of iframe
                frameWidth: "1920"
            }
        },
        // {
        //     module: "MMM-Volume",
        //     position: "bottom_center", // It is meaningless. but you should set.
        //     config: {
        //       usePresetScript: "ALSA", // "ALSA" is supported by default.
        //       volumeOnStart: 50,
        //     }
        // },
    ]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
