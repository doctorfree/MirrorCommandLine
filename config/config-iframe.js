/* Magic Mirror Config
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * Modified by Ron Record http://ronrecord.com
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://docs.magicmirror.builders/configuration/introduction.html
 *
 */

var config = {
    address: "0.0.0.0", // Address to listen on, can be:
    port: 8080,
    ipWhitelist: [
        "0.0.0.0",
        "127.0.0.1",
        "AA.A.A.AA", // Mac Mini
        "BB.B.B.BBB", // iPad
        "CC.C.C.CC", // Mac Pro
        "DD.D.D.DDD", // Mac Pro over Tunnelblick
        "EE.E.E.EE", // Roon Core
        "FF.F.F.FF", // Mac Pro
        "GG.G.G.GG", // Ropieee
        "MM.M.M.MM", // Raspberry Pi MagicMirror
        "HH.H.H.HH", // Raspberry Pi 400
        "II.I.I.II", // iPad Air
        "JJ.J.J.JJ", // iPhone 12 Mini
        "::ffff:127.0.0.1",
        "::1",
    ],

    customCss: "css/custom-mirrorcommand.css",
    language: "en",
    timeFormat: 12,
    units: "imperial",
    electronOptions: {
        x: 0, // __X_OFFSET__ Do Not Remove
        y: 0, // __Y_OFFSET__ Do Not Remove
        webPreferences: {
          webviewTag: true,
          contextIsolation: false,
          enableRemoteModule: true
        }
    },
    
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
                apiKey: 'xxx_Remote-Control-API-Key_xxxxx',
                customCommand: {
                    shutdownCommand: '/usr/local/bin/myshutdown',
                    rebootCommand: '/usr/local/bin/myreboot',
                    monitorOnCommand: 'vcgencmd display_power 1',
                    monitorOffCommand: 'vcgencmd display_power 0',
                    screenshotCommand: '/usr/local/bin/mirror screenshot',
                    rotateScreenRight: '/usr/local/bin/mirror rotate right',
                    rotateScreenLeft: '/usr/local/bin/mirror rotate left',
                    rotateScreenNormal: '/usr/local/bin/mirror rotate normal',
                    rotateScreenInverted: '/usr/local/bin/mirror rotate inverted',
                    playVideo: '/usr/local/bin/mirror playvideo',
                    pauseVideo: '/usr/local/bin/mirror pausevideo',
                    replayVideo: '/usr/local/bin/mirror replayvideo',
                    nextVideo: '/usr/local/bin/mirror nextvideo',
                    hideVideo: '/usr/local/bin/mirror hidevideo',
                    showVideo: '/usr/local/bin/mirror showvideo',
                    // Shell command to return status of monitor,
                    // must return either "HDMI" or "true" if screen is on
                    // "TV is Off" or "false" if it is off to be recognized
                    // monitorStatusCommand: '/usr/local/bin/mirror screen status',
                },
                showModuleApiMenu: true,
                secureEndpoints: true,
                customMenu: "custom_menu.json",
                // classes: {} // Optional, See "Custom Classes" below
            }
        },
        {
            module: 'MMM-iFrame',
            position: 'fullscreen_below',
            config: {
                url: [
                      "https://www.youtube.com/embed/ZFBoN7yIMZw?autoplay=1&amp;controls=0&amp;start=40",
                      "https://www.youtube.com/embed/jVD67pMdv9k?autoplay=1&amp;controls=0&amp;start=40",
                      "https://www.youtube.com/embed/gdJjc6l6iII?autoplay=1&amp;controls=0&amp;start=40",
                      "https://www.youtube.com/embed/t6jlhqNxRYk?autoplay=1&amp;controls=0&amp;start=40",
                      "https://www.youtube.com/embed/zfgE_Bxears?autoplay=1&amp;controls=0",
                     ],
                     // "https://www.youtube.com/embed/95FxKgcgjN0?autoplay=1&amp;controls=0",
                updateInterval: 10 * 60 * 1000, // rotate URLs every 10 minutes
                width: "__WIDTH__", // __SET_Q_WIDTH__ Do Not Remove
                height: "__HEIGHT__", // __SET_Q_HEIGHT__ Do Not Remove
                frameWidth: "__WIDTH__", // __SET_FRM_WIDTH__ Do Not Remove
            }
        },
        {
            module: 'MMM-TelegramCommands'
        },
        {
            module: 'MMM-TelegramBot',
            config: {
              allowedUser : ['Your-Telegram-Username'],
              adminChatId : 0000000000,
              useWelcomeMessage: true,
              verbose: false,
              favourites: [
                  "/hideip",
                  "/showip",
                  "/hideOffline",
                  "/showOffline",
                  "/myReboot",
                  "/myShutdown"
              ],
              screenshotScript: "scrot",
              detailOption: {},
            },
        },
        {
            module: "EXT-Detector",
            position: "bottom_left",
            configDeepMerge: true,
            config: {
              debug: false,
              useIcon: false,
              touchOnly: false,
              detectors: [
                {
                  detector: "Porcupine",
                  Model: "computer",
                  Sensitivity: null
                },
                {
                  detector: "Porcupine",
                  Model: "ok google",
                  Sensitivity: null
                },
                {
                  detector: "Porcupine",
                  Model: "hey google",
                  Sensitivity: null
                }
              ]
            }
        },
        {
            module: "MMM-GoogleAssistant",
            position: "bottom_left",
            configDeepMerge: true,
            config: {
              debug: false,
              stopCommand: "stop",
              assistantConfig: {
                lang: "en-US",
                latitude: 36.970019,
                longitude: -122.042212,
                deviceRegistred: false
              },
              responseConfig: {
                useFullscreen: false,
                responseOutputCSS: "response_output.css",
                screenOutputTimer: 5000,
                useChime: true,
                confirmationChime: true
              },
              recipes: [
                "myReboot-Restart-Shutdown.js",
                "RoonCommand.js",
                "MirrorCommand.js"
              ]
            }
        },
    ]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
