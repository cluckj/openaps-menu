# openaps-menu

This is the repository holding the menu-based software code, which you may choose to add to an Explorer HAT or other screen-based rig in order to visualize and enter information into a Pi-based #OpenAPS rig.

See [here](https://github.com/EnhancedRadioDevices/Explorer-HAT) for more details on the Explorer HAT hardware.

You can set your preferred auto-updating status screen using the following setting in your `~/myopenaps/preferences.json`:

`"status_screen": "bigbgstatus"` will display the big BG status screen (no graph).

`"status_screen": "off"` will turn the auto-updating screen off.


By default, the auto-updating status script will invert the display about 50% of the time, to prevent burn-in on the OLED screen. You can turn this off with the following setting in your `~/myopenaps/preferences.json`:

`"wearOLEDevenly": "off"`

Or you can have it invert the display from 8pm to 8am with:

`"wearOLEDevenly": "nightandday"`

If your screen is partially broken (or you just want to disable it), you can turn it off with the following setting in your `~/myopenaps/preferences.json`:

`"disable_screen": true`

You will need to power down your rig entirely (disconnect USB power, and toggle the HAT switch) for this preference to take effect.

## Example screen outputs (Note: these are examples. The latest code may yield different menu items and screen displays)

### Status screen:

![Status screen](https://github.com/openaps/openaps-menu/blob/master/images/status.JPG)

### Graph:

![Graph visual on screen](https://github.com/openaps/openaps-menu/blob/master/images/graph.JPG)





