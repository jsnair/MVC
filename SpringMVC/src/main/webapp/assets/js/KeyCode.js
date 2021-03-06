/**
 * Created with IntelliJ IDEA.
 * User: ASHISH
 * Date: 15/8/12
 * Time: 12:15 PM
 * To change this template use File | Settings | File Templates.
 */
define("KeyCode", ["jquery"],
    function ($, lang) {
        "use strict";
        (function ($, undefined) {
            $.bancs= $.bancs||{};//TODO keycode instance should not be added to $.bancs
            $.extend($.bancs, {
                keyCode:{
                    ALT:18,
                    BACKSPACE:8,
                    CAPS_LOCK:20,
                    COMMA:188,
                    COMMAND:91,
                    COMMAND_LEFT:91, // COMMAND
                    COMMAND_RIGHT:93,
                    CONTROL:17,
                    DELETE:46,
                    DOWN:40,
                    END:35,
                    ENTER:13,
                    ESCAPE:27,
                    HOME:36,
                    INSERT:45,
                    LEFT:37,
                    MENU:93, // COMMAND_RIGHT
                    NUMPAD_ADD:107,
                    NUMPAD_DECIMAL:110,
                    NUMPAD_DIVIDE:111,
                    NUMPAD_ENTER:108,
                    NUMPAD_MULTIPLY:106,
                    NUMPAD_SUBTRACT:109,
                    PAGE_DOWN:34,
                    PAGE_UP:33,
                    PERIOD:190,
                    RIGHT:39,
                    SHIFT:16,
                    SPACE:32,
                    TAB:9,
                    UP:38,
                    WINDOWS:91 // COMMAND
                }
            });
        })($);
    });
