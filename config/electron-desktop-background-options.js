    // These Electron Options place MagicMirror on the desktop background
    // It's an application running as your desktop wallpaper!
    electronOptions: {
        x: 0, // __X_OFFSET__ Do Not Remove
        y: 0, // __Y_OFFSET__ Do Not Remove
	    width: __WIDTH__,
	    height: __HEIGHT__,
	    fullscreen:  false,
	    backgroundColor: '#00000000',
	    titleBarStyle: 'none',
	    frame: false,
	    type: 'desktop',
	    hasShadow: false,
	    transparent: true,
	    resizable:   false,
    },
    electronSwitches: ["enable-transparent-visuals"],
    // Comment out the above two config settings to run MagicMirror normally
