        {
            module: 'MMM-TelegramBot',
            config: {
              telegramAPIKey : 'xxxxxx_Your-Telegram-API-Key_xxxxxxxxxxxxxxxxx',
              allowedUser : ['Your-Telegram-Username'],
              adminChatId : Your-Telegram-Chat-ID,
              useWelcomeMessage: false,
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
              customCommands: [
                {
                  command: 'myReboot',
                  description: "Executes custom MagicMirror `reboot` command",
                  callback: (command, handler, self) => {
                      var exec = "/usr/local/bin/reboot"
                      handler.reply("TEXT", "Executing command: " + exec)
                      var sessionId = Date.now() + "_" + self.commonSession.size
                      if (exec) {
                        self.commonSession.set(sessionId, handler)
                        self.sendSocketNotification("SHELL", {
                          session: sessionId,
                          exec: exec
                        })
                      }
                  },
                },
                {
                  command: 'myShutdown',
                  description: "Executes custom MagicMirror `shutdown` command",
                  callback: (command, handler, self) => {
                      var exec = "/usr/local/bin/shutdown"
                      handler.reply("TEXT", "Executing command: " + exec)
                      var sessionId = Date.now() + "_" + self.commonSession.size
                      if (exec) {
                        self.commonSession.set(sessionId, handler)
                        self.sendSocketNotification("SHELL", {
                          session: sessionId,
                          exec: exec
                        })
                      }
                  },
                },
                {
                  command: 'mirror',
                  description: "Executes MagicMirror `mirror` command\nTry `/mirror status`.",
                  callback: (command, handler, self) => {
                      if (handler.args) {
                        var exec = "mirror -D " + handler.args
                      } else {
                        var exec = "mirror -D status"
                      }
                      handler.reply("TEXT", "Executing command: " + exec)
                      var sessionId = Date.now() + "_" + self.commonSession.size
                      if (exec) {
                        self.commonSession.set(sessionId, handler)
                        self.sendSocketNotification("SHELL", {
                          session: sessionId,
                          exec: exec
                        })
                      }
                  },
                },
              ],
            },
        },
