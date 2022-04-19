'use strict';

var obsidian = require('obsidian');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

const modifiers = /^(CommandOrControl|CmdOrCtrl|Command|Cmd|Control|Ctrl|AltGr|Option|Alt|Shift|Super)/i;
const keyCodes = /^(Plus|Space|Tab|Backspace|Delete|Insert|Return|Enter|Up|Down|Left|Right|Home|End|PageUp|PageDown|Escape|Esc|VolumeUp|VolumeDown|VolumeMute|MediaNextTrack|MediaPreviousTrack|MediaStop|MediaPlayPause|PrintScreen|F24|F23|F22|F21|F20|F19|F18|F17|F16|F15|F14|F13|F12|F11|F10|F9|F8|F7|F6|F5|F4|F3|F2|F1|[0-9A-Z)!@#$%^&*(:+<_>?~{|}";=,\-./`[\\\]'])/i;
const UNSUPPORTED = {};

function _command(accelerator, event, modifier) {
	if (process.platform !== 'darwin') {
		return UNSUPPORTED;
	}

	if (event.metaKey) {
		throw new Error('Double `Command` modifier specified.');
	}

	return {
		event: Object.assign({}, event, {metaKey: true}),
		accelerator: accelerator.slice(modifier.length)
	};
}

function _super(accelerator, event, modifier) {
	if (event.metaKey) {
		throw new Error('Double `Super` modifier specified.');
	}

	return {
		event: Object.assign({}, event, {metaKey: true}),
		accelerator: accelerator.slice(modifier.length)
	};
}

function _commandorcontrol(accelerator, event, modifier) {
	if (process.platform === 'darwin') {
		if (event.metaKey) {
			throw new Error('Double `Command` modifier specified.');
		}

		return {
			event: Object.assign({}, event, {metaKey: true}),
			accelerator: accelerator.slice(modifier.length)
		};
	}

	if (event.ctrlKey) {
		throw new Error('Double `Control` modifier specified.');
	}

	return {
		event: Object.assign({}, event, {ctrlKey: true}),
		accelerator: accelerator.slice(modifier.length)
	};
}

function _alt(accelerator, event, modifier) {
	if (modifier === 'option' && process.platform !== 'darwin') {
		return UNSUPPORTED;
	}

	if (event.altKey) {
		throw new Error('Double `Alt` modifier specified.');
	}

	return {
		event: Object.assign({}, event, {altKey: true}),
		accelerator: accelerator.slice(modifier.length)
	};
}

function _shift(accelerator, event, modifier) {
	if (event.shiftKey) {
		throw new Error('Double `Shift` modifier specified.');
	}

	return {
		event: Object.assign({}, event, {shiftKey: true}),
		accelerator: accelerator.slice(modifier.length)
	};
}

function _control(accelerator, event, modifier) {
	if (event.ctrlKey) {
		throw new Error('Double `Control` modifier specified.');
	}

	return {
		event: Object.assign({}, event, {ctrlKey: true}),
		accelerator: accelerator.slice(modifier.length)
	};
}

function reduceModifier({accelerator, event}, modifier) {
	switch (modifier) {
		case 'command':
		case 'cmd': {
			return _command(accelerator, event, modifier);
		}

		case 'super': {
			return _super(accelerator, event, modifier);
		}

		case 'control':
		case 'ctrl': {
			return _control(accelerator, event, modifier);
		}

		case 'commandorcontrol':
		case 'cmdorctrl': {
			return _commandorcontrol(accelerator, event, modifier);
		}

		case 'option':
		case 'altgr':
		case 'alt': {
			return _alt(accelerator, event, modifier);
		}

		case 'shift': {
			return _shift(accelerator, event, modifier);
		}

		default:
			console.error(modifier);
	}
}

function reducePlus({accelerator, event}) {
	return {
		event,
		accelerator: accelerator.trim().slice(1)
	};
}

const virtualKeyCodes = {
	0: 'Digit0',
	1: 'Digit1',
	2: 'Digit2',
	3: 'Digit3',
	4: 'Digit4',
	5: 'Digit5',
	6: 'Digit6',
	7: 'Digit7',
	8: 'Digit8',
	9: 'Digit9',
	'-': 'Minus',
	'=': 'Equal',
	Q: 'KeyQ',
	W: 'KeyW',
	E: 'KeyE',
	R: 'KeyR',
	T: 'KeyT',
	Y: 'KeyY',
	U: 'KeyU',
	I: 'KeyI',
	O: 'KeyO',
	P: 'KeyP',
	'[': 'BracketLeft',
	']': 'BracketRight',
	A: 'KeyA',
	S: 'KeyS',
	D: 'KeyD',
	F: 'KeyF',
	G: 'KeyG',
	H: 'KeyH',
	J: 'KeyJ',
	K: 'KeyK',
	L: 'KeyL',
	';': 'Semicolon',
	'\'': 'Quote',
	'`': 'Backquote',
	'/': 'Backslash',
	Z: 'KeyZ',
	X: 'KeyX',
	C: 'KeyC',
	V: 'KeyV',
	B: 'KeyB',
	N: 'KeyN',
	M: 'KeyM',
	',': 'Comma',
	'.': 'Period',
	'\\': 'Slash',
	' ': 'Space'
};

function reduceKey({accelerator, event}, key) {
	if (key.length > 1 || event.key) {
		throw new Error(`Unvalid keycode \`${key}\`.`);
	}

	const code =
		key.toUpperCase() in virtualKeyCodes ?
			virtualKeyCodes[key.toUpperCase()] :
			null;

	return {
		event: Object.assign({}, event, {key}, code ? {code} : null),
		accelerator: accelerator.trim().slice(key.length)
	};
}

const domKeys = Object.assign(Object.create(null), {
	plus: 'Add',
	space: 'Space',
	tab: 'Tab',
	backspace: 'Backspace',
	delete: 'Delete',
	insert: 'Insert',
	return: 'Return',
	enter: 'Return',
	up: 'ArrowUp',
	down: 'ArrowDown',
	left: 'ArrowLeft',
	right: 'ArrowRight',
	home: 'Home',
	end: 'End',
	pageup: 'PageUp',
	pagedown: 'PageDown',
	escape: 'Escape',
	esc: 'Escape',
	volumeup: 'AudioVolumeUp',
	volumedown: 'AudioVolumeDown',
	volumemute: 'AudioVolumeMute',
	medianexttrack: 'MediaTrackNext',
	mediaprevioustrack: 'MediaTrackPrevious',
	mediastop: 'MediaStop',
	mediaplaypause: 'MediaPlayPause',
	printscreen: 'PrintScreen'
});

// Add function keys
for (let i = 1; i <= 24; i++) {
	domKeys[`f${i}`] = `F${i}`;
}

function reduceCode({accelerator, event}, {code, key}) {
	if (event.code) {
		throw new Error(`Duplicated keycode \`${key}\`.`);
	}

	return {
		event: Object.assign({}, event, {key}, code ? {code} : null),
		accelerator: accelerator.trim().slice((key && key.length) || 0)
	};
}

/**
 * This function transform an Electron Accelerator string into
 * a DOM KeyboardEvent object.
 *
 * @param  {string} accelerator an Electron Accelerator string, e.g. `Ctrl+C` or `Shift+Space`.
 * @return {object} a DOM KeyboardEvent object derivate from the `accelerator` argument.
 */
function toKeyEvent(accelerator) {
	let state = {accelerator, event: {}};
	while (state.accelerator !== '') {
		const modifierMatch = state.accelerator.match(modifiers);
		if (modifierMatch) {
			const modifier = modifierMatch[0].toLowerCase();
			state = reduceModifier(state, modifier);
			if (state === UNSUPPORTED) {
				return {unsupportedKeyForPlatform: true};
			}
		} else if (state.accelerator.trim()[0] === '+') {
			state = reducePlus(state);
		} else {
			const codeMatch = state.accelerator.match(keyCodes);
			if (codeMatch) {
				const code = codeMatch[0].toLowerCase();
				if (code in domKeys) {
					state = reduceCode(state, {
						code: domKeys[code],
						key: code
					});
				} else {
					state = reduceKey(state, code);
				}
			} else {
				throw new Error(`Unvalid accelerator: "${state.accelerator}"`);
			}
		}
	}

	return state.event;
}

var keyboardeventFromElectronAccelerator = {
	UNSUPPORTED,
	reduceModifier,
	reducePlus,
	reduceKey,
	reduceCode,
	toKeyEvent
};

var DEFAULT_SETTINGS = {
    vimrcFileName: ".obsidian.vimrc",
    displayChord: false,
    displayVimMode: false,
    fixedNormalModeLayout: false,
    capturedKeyboardMap: {}
};
// NOTE: to future maintainers, please make sure all mapping commands are included in this array.
var mappingCommands = [
    "map",
    "nmap",
    "noremap",
];
function sleep(ms) {
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
}
var VimrcPlugin = /** @class */ (function (_super) {
    __extends(VimrcPlugin, _super);
    function VimrcPlugin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.codeMirrorVimObject = null;
        _this.editorMode = null;
        _this.initialized = false;
        _this.lastYankBuffer = new Array(0);
        _this.lastSystemClipboard = "";
        _this.yankToSystemClipboard = false;
        _this.currentKeyChord = [];
        _this.vimChordStatusBar = null;
        _this.vimStatusBar = null;
        _this.currentVimStatus = "\uD83D\uDFE2" /* normal */;
        _this.customVimKeybinds = {};
        _this.currentSelection = null;
        _this.isInsertMode = false;
        return _this;
    }
    VimrcPlugin.prototype.captureKeyboardLayout = function () {
        return __awaiter(this, void 0, void 0, function () {
            var keyMap, layout, doneIterating;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        keyMap = {};
                        return [4 /*yield*/, navigator.keyboard.getLayoutMap()];
                    case 1:
                        layout = _a.sent();
                        doneIterating = new Promise(function (resolve, reject) {
                            var counted = 0;
                            layout.forEach(function (value, index) {
                                keyMap[index] = value;
                                counted += 1;
                                if (counted === layout.size)
                                    resolve();
                            });
                        });
                        return [4 /*yield*/, doneIterating];
                    case 2:
                        _a.sent();
                        new obsidian.Notice('Keyboard layout captured');
                        return [2 /*return*/, keyMap];
                }
            });
        });
    };
    VimrcPlugin.prototype.initialize = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_b) {
                if (this.initialized)
                    return [2 /*return*/];
                // Determine if we have the legacy Obsidian editor (CM5) or the new one (CM6).
                // This is only available after Obsidian is fully loaded, so we do it as part of the `file-open` event.
                if ('editor:toggle-source' in this.app.commands.editorCommands) {
                    this.codeMirrorVimObject = (_a = window.CodeMirrorAdapter) === null || _a === void 0 ? void 0 : _a.Vim;
                    this.editorMode = 'cm6';
                    console.log('Vimrc plugin: using CodeMirror 6 mode');
                }
                else {
                    this.codeMirrorVimObject = CodeMirror.Vim;
                    this.editorMode = 'cm5';
                    console.log('Vimrc plugin: using CodeMirror 5 mode');
                }
                this.registerDomEvent(document, 'click', function () {
                    _this.captureYankBuffer();
                });
                this.registerDomEvent(document, 'keyup', function () {
                    _this.captureYankBuffer();
                });
                this.registerDomEvent(document, 'focusin', function () {
                    _this.captureYankBuffer();
                });
                this.initialized = true;
                return [2 /*return*/];
            });
        });
    };
    VimrcPlugin.prototype.onload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadSettings()];
                    case 1:
                        _a.sent();
                        this.addSettingTab(new SettingsTab(this.app, this));
                        this.app.workspace.on('file-open', function (file) { return __awaiter(_this, void 0, void 0, function () {
                            var VIMRC_FILE_NAME;
                            var _this = this;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!!this.initialized) return [3 /*break*/, 2];
                                        return [4 /*yield*/, this.initialize()];
                                    case 1:
                                        _a.sent();
                                        _a.label = 2;
                                    case 2:
                                        VIMRC_FILE_NAME = this.settings.vimrcFileName;
                                        this.app.vault.adapter.read(VIMRC_FILE_NAME).
                                            then(function (lines) { return _this.readVimInit(lines); }).
                                            catch(function (error) { console.log('Error loading vimrc file', VIMRC_FILE_NAME, 'from the vault root', error); });
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    VimrcPlugin.prototype.loadSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadData()];
                    case 1:
                        data = _a.sent();
                        this.settings = Object.assign({}, DEFAULT_SETTINGS, data);
                        return [2 /*return*/];
                }
            });
        });
    };
    VimrcPlugin.prototype.saveSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.saveData(this.settings)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    VimrcPlugin.prototype.logVimModeChange = function (modeObj) {
        this.isInsertMode = modeObj.mode === 'insert';
        switch (modeObj.mode) {
            case "insert":
                this.currentVimStatus = "\uD83D\uDFE0" /* insert */;
                break;
            case "normal":
                this.currentVimStatus = "\uD83D\uDFE2" /* normal */;
                break;
            case "visual":
                this.currentVimStatus = "\uD83D\uDFE1" /* visual */;
                break;
            case "replace":
                this.currentVimStatus = "\uD83D\uDD34" /* replace */;
                break;
        }
        if (this.settings.displayVimMode)
            this.vimStatusBar.setText(this.currentVimStatus);
    };
    VimrcPlugin.prototype.onunload = function () {
        console.log('unloading Vimrc plugin (but Vim commands that were already loaded will still work)');
    };
    VimrcPlugin.prototype.getActiveView = function () {
        return this.app.workspace.getActiveViewOfType(obsidian.MarkdownView);
    };
    VimrcPlugin.prototype.getCodeMirror = function (view) {
        var _a, _b, _c, _d;
        // For CM6 this actually returns an instance of the object named CodeMirror from cm_adapter of codemirror_vim
        if (this.editorMode == 'cm6')
            return (_c = (_b = (_a = view.sourceMode) === null || _a === void 0 ? void 0 : _a.cmEditor) === null || _b === void 0 ? void 0 : _b.cm) === null || _c === void 0 ? void 0 : _c.cm;
        else
            return (_d = view.sourceMode) === null || _d === void 0 ? void 0 : _d.cmEditor;
    };
    VimrcPlugin.prototype.readVimInit = function (vimCommands) {
        var _this = this;
        var view = this.getActiveView();
        if (view) {
            var cmEditor = this.getCodeMirror(view);
            if (cmEditor && !this.codeMirrorVimObject.loadedVimrc) {
                this.defineBasicCommands(this.codeMirrorVimObject);
                this.defineSendKeys(this.codeMirrorVimObject);
                this.defineObCommand(this.codeMirrorVimObject);
                this.defineCmCommand(this.codeMirrorVimObject);
                this.defineSurround(this.codeMirrorVimObject);
                // Record the position of selections
                CodeMirror.on(cmEditor, "cursorActivity", function (cm) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        this.currentSelection = cm.listSelections();
                        return [2 /*return*/];
                    });
                }); });
                vimCommands.split("\n").forEach(function (line, index, arr) {
                    if (line.trim().length > 0 && line.trim()[0] != '"') {
                        var split = line.split(" ");
                        if (mappingCommands.includes(split[0])) {
                            // Have to do this because "vim-command-done" event doesn't actually work properly, or something.
                            this.customVimKeybinds[split[1]] = true;
                        }
                        this.codeMirrorVimObject.handleEx(cmEditor, line);
                    }
                }.bind(this) // Faster than an arrow function. https://stackoverflow.com/questions/50375440/binding-vs-arrow-function-for-react-onclick-event
                );
                this.prepareChordDisplay();
                this.prepareVimModeDisplay();
                // Make sure that we load it just once per CodeMirror instance.
                // This is supposed to work because the Vim state is kept at the keymap level, hopefully
                // there will not be bugs caused by operations that are kept at the object level instead
                this.codeMirrorVimObject.loadedVimrc = true;
            }
            if (cmEditor) {
                cmEditor.on('vim-mode-change', function (modeObj) {
                    if (modeObj)
                        _this.logVimModeChange(modeObj);
                });
                this.defineFixedLayout(cmEditor);
            }
        }
    };
    VimrcPlugin.prototype.defineBasicCommands = function (vimObject) {
        var _this = this;
        vimObject.defineOption('clipboard', '', 'string', ['clip'], function (value, cm) {
            if (value) {
                if (value.trim() == 'unnamed' || value.trim() == 'unnamedplus') {
                    if (!_this.yankToSystemClipboard) {
                        _this.yankToSystemClipboard = true;
                        console.log("Vim is now set to yank to system clipboard.");
                    }
                }
                else {
                    throw new Error("Unrecognized clipboard option, supported are 'unnamed' and 'unnamedplus' (and they do the same)");
                }
            }
        });
        vimObject.defineOption('tabstop', 4, 'number', [], function (value, cm) {
            if (value && cm) {
                cm.setOption('tabSize', value);
            }
        });
        vimObject.defineEx('iunmap', '', function (cm, params) {
            if (params.argString.trim()) {
                _this.codeMirrorVimObject.unmap(params.argString.trim(), 'insert');
            }
        });
        vimObject.defineEx('noremap', '', function (cm, params) {
            var _a;
            if (!((_a = params === null || params === void 0 ? void 0 : params.args) === null || _a === void 0 ? void 0 : _a.length)) {
                throw new Error('Invalid mapping: noremap');
            }
            if (params.argString.trim()) {
                _this.codeMirrorVimObject.noremap.apply(_this.codeMirrorVimObject, params.args);
            }
        });
        // Allow the user to register an Ex command
        vimObject.defineEx('exmap', '', function (cm, params) {
            var _a;
            if (((_a = params === null || params === void 0 ? void 0 : params.args) === null || _a === void 0 ? void 0 : _a.length) && params.args.length < 2) {
                throw new Error("exmap requires at least 2 parameters: [name] [actions...]");
            }
            var commandName = params.args[0];
            params.args.shift();
            var commandContent = params.args.join(' ');
            // The content of the user's Ex command is just the remaining parameters of the exmap command
            _this.codeMirrorVimObject.defineEx(commandName, '', function (cm, params) {
                _this.codeMirrorVimObject.handleEx(cm, commandContent);
            });
        });
    };
    VimrcPlugin.prototype.defineSendKeys = function (vimObject) {
        var _this = this;
        vimObject.defineEx('sendkeys', '', function (cm, params) { return __awaiter(_this, void 0, void 0, function () {
            var allGood, events, _i, _a, key, delay, keyEvent, _b, events_1;
            var _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!((_c = params === null || params === void 0 ? void 0 : params.args) === null || _c === void 0 ? void 0 : _c.length)) {
                            console.log(params);
                            throw new Error("The sendkeys command requires a list of keys, e.g. sendKeys Ctrl+p a b Enter");
                        }
                        allGood = true;
                        events = [];
                        _i = 0, _a = params.args;
                        _d.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 5];
                        key = _a[_i];
                        if (!key.startsWith('wait')) return [3 /*break*/, 3];
                        delay = key.slice(4);
                        return [4 /*yield*/, sleep(delay * 1000)];
                    case 2:
                        _d.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        keyEvent = null;
                        try {
                            keyEvent = new KeyboardEvent('keydown', keyboardeventFromElectronAccelerator.toKeyEvent(key));
                            events.push(keyEvent);
                        }
                        catch (e) {
                            allGood = false;
                            throw new Error("Key '" + key + "' couldn't be read as an Electron Accelerator");
                        }
                        if (allGood) {
                            for (_b = 0, events_1 = events; _b < events_1.length; _b++) {
                                keyEvent = events_1[_b];
                                window.postMessage(JSON.parse(JSON.stringify(keyEvent)), '*');
                            }
                            // view.containerEl.dispatchEvent(keyEvent);
                        }
                        _d.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 1];
                    case 5: return [2 /*return*/];
                }
            });
        }); });
    };
    VimrcPlugin.prototype.defineObCommand = function (vimObject) {
        var _this = this;
        vimObject.defineEx('obcommand', '', function (cm, params) { return __awaiter(_this, void 0, void 0, function () {
            var availableCommands, view, editor, command, callback, checkCallback, editorCallback, editorCheckCallback;
            var _a;
            return __generator(this, function (_b) {
                availableCommands = this.app.commands.commands;
                if (!((_a = params === null || params === void 0 ? void 0 : params.args) === null || _a === void 0 ? void 0 : _a.length) || params.args.length != 1) {
                    console.log("Available commands: " + Object.keys(availableCommands).join('\n'));
                    throw new Error("obcommand requires exactly 1 parameter");
                }
                view = this.getActiveView();
                editor = view.editor;
                command = params.args[0];
                if (command in availableCommands) {
                    callback = availableCommands[command].callback;
                    checkCallback = availableCommands[command].checkCallback;
                    editorCallback = availableCommands[command].editorCallback;
                    editorCheckCallback = availableCommands[command].editorCheckCallback;
                    if (editorCheckCallback)
                        editorCheckCallback(false, editor, view);
                    else if (editorCallback)
                        editorCallback(editor, view);
                    else if (checkCallback)
                        checkCallback(false);
                    else if (callback)
                        callback();
                    else
                        throw new Error("Command " + command + " doesn't have an Obsidian callback");
                }
                else
                    throw new Error("Command " + command + " was not found, try 'obcommand' with no params to see in the developer console what's available");
                return [2 /*return*/];
            });
        }); });
    };
    VimrcPlugin.prototype.defineCmCommand = function (vimObject) {
        var _this = this;
        vimObject.defineEx('cmcommand', '', function (cm, params) { return __awaiter(_this, void 0, void 0, function () {
            var cmEditor;
            var _a;
            return __generator(this, function (_b) {
                if (!((_a = params === null || params === void 0 ? void 0 : params.args) === null || _a === void 0 ? void 0 : _a.length) || params.args.length != 1) {
                    throw new Error("cmcommand requires exactly 1 parameter");
                }
                if (this.editorMode === 'cm5') {
                    cmEditor = this.getCodeMirror(this.getActiveView());
                    cmEditor.execCommand(params.args[0]);
                }
                else
                    throw new Error('cmcommand currently only works on the legacy CM5 editor');
                return [2 /*return*/];
            });
        }); });
    };
    VimrcPlugin.prototype.defineSurround = function (vimObject) {
        var _this = this;
        // Function to surround selected text or highlighted word.
        var surroundFunc = function (params) {
            if (_this.editorMode === 'cm6')
                throw new Error("surround is not yet supported in the new editor. To be added soon.");
            var editor = _this.getActiveView().editor;
            if (!params.length) {
                throw new Error("surround requires exactly 2 parameters: prefix and postfix text.");
            }
            var newArgs = params.join(" ").match(/(\\.|[^\s\\\\]+)+/g);
            if (newArgs.length != 2) {
                throw new Error("surround requires exactly 2 parameters: prefix and postfix text.");
            }
            var beginning = newArgs[0].replace("\\\\", "\\").replace("\\ ", " "); // Get the beginning surround text
            var ending = newArgs[1].replace("\\\\", "\\").replace("\\ ", " "); // Get the ending surround text
            var currentSelections = _this.currentSelection;
            var chosenSelection = currentSelections[0];
            if (_this.currentSelection && currentSelections.length > 1) {
                console.log("WARNING: Multiple selections in surround. Attempt to select matching cursor. (obsidian-vimrc-support)");
                var cursorPos = editor.getCursor();
                for (var _i = 0, currentSelections_1 = currentSelections; _i < currentSelections_1.length; _i++) {
                    var selection = currentSelections_1[_i];
                    if (selection.head.line == cursorPos.line && selection.head.ch == cursorPos.ch) {
                        console.log("RESOLVED: Selection matching cursor found. (obsidian-vimrc-support)");
                        chosenSelection = selection;
                        break;
                    }
                }
            }
            if (JSON.stringify(chosenSelection.anchor) === JSON.stringify(chosenSelection.head)) {
                // No range of selected text, so select word.
                var line = editor.getLine(chosenSelection.anchor.line);
                if (line.length === 0)
                    throw new Error("can't surround on an empty line");
                // Go to the beginning of the word
                var wordStart = chosenSelection.anchor.ch;
                for (; wordStart >= 0; wordStart--)
                    if (line[wordStart].match(/\s/))
                        break;
                wordStart++;
                var wordEnd = chosenSelection.anchor.ch;
                for (; wordEnd < line.length; wordEnd++)
                    if (line[wordEnd].match(/\s/))
                        break;
                var word = line.substring(wordStart, wordEnd);
                chosenSelection.anchor.ch = wordStart;
                chosenSelection.head.ch = wordEnd;
                chosenSelection = {
                    anchor: { line: chosenSelection.anchor.line, ch: wordStart },
                    head: { line: chosenSelection.head.line, ch: wordEnd }
                };
            }
            var currText = editor.getRange(chosenSelection.anchor, chosenSelection.head);
            editor.replaceRange(beginning + currText + ending, chosenSelection.anchor, chosenSelection.head);
        };
        vimObject.defineEx("surround", "", function (cm, params) { surroundFunc(params.args); });
        vimObject.defineEx("pasteinto", "", function (cm, params) {
            // Using the register for when this.yankToSystemClipboard == false
            surroundFunc(['[',
                '](' + vimObject.getRegisterController().getRegister('yank').keyBuffer + ")"]);
        });
        var editor = this.getActiveView().editor;
        // Handle the surround dialog input
        var surroundDialogCallback = function (value) {
            if ((/^\[+$/).test(value)) { // check for 1-inf [ and match them with ]
                surroundFunc([value, "]".repeat(value.length)]);
            }
            else if ((/^\(+$/).test(value)) { // check for 1-inf ( and match them with )
                surroundFunc([value, ")".repeat(value.length)]);
            }
            else if ((/^\{+$/).test(value)) { // check for 1-inf { and match them with }
                surroundFunc([value, "}".repeat(value.length)]);
            }
            else { // Else, just put it before and after.
                surroundFunc([value, value]);
            }
        };
        vimObject.defineOperator("surroundOperator", function () {
            var p = "<span>Surround with: <input type='text'></span>";
            CodeMirror.openDialog(p, surroundDialogCallback, { bottom: true, selectValueOnOpen: false });
        });
        vimObject.mapCommand("<A-y>s", "operator", "surroundOperator");
    };
    VimrcPlugin.prototype.captureYankBuffer = function () {
        var _this = this;
        if (this.yankToSystemClipboard) {
            var currentBuffer = this.codeMirrorVimObject.getRegisterController().getRegister('yank').keyBuffer;
            if (currentBuffer != this.lastYankBuffer) {
                if (this.lastYankBuffer.length > 0 && currentBuffer.length > 0 && currentBuffer[0]) {
                    navigator.clipboard.writeText(currentBuffer[0]);
                    navigator.clipboard.readText().then(function (value) { _this.lastSystemClipboard = value; });
                }
                this.lastYankBuffer = currentBuffer;
                return;
            }
            var currentClipboard = navigator.clipboard.readText().then(function (value) {
                if (value != _this.lastSystemClipboard) {
                    var yankRegister = _this.codeMirrorVimObject.getRegisterController().getRegister('yank');
                    yankRegister.setText(value);
                    _this.lastYankBuffer = yankRegister.keyBuffer;
                    _this.lastSystemClipboard = value;
                }
            });
        }
    };
    VimrcPlugin.prototype.prepareChordDisplay = function () {
        var _this = this;
        if (this.settings.displayChord) {
            // Add status bar item
            this.vimChordStatusBar = this.addStatusBarItem();
            // Move vimChordStatusBar to the leftmost position and center it.
            var parent_1 = this.vimChordStatusBar.parentElement;
            this.vimChordStatusBar.parentElement.insertBefore(this.vimChordStatusBar, parent_1.firstChild);
            this.vimChordStatusBar.style.marginRight = "auto";
            var cmEditor = this.getCodeMirror(this.getActiveView());
            // See https://codemirror.net/doc/manual.html#vimapi_events for events.
            CodeMirror.on(cmEditor, "vim-keypress", function (vimKey) { return __awaiter(_this, void 0, void 0, function () {
                var tempS, _i, _a, s;
                return __generator(this, function (_b) {
                    if (vimKey != "<Esc>") { // TODO figure out what to actually look for to exit commands.
                        this.currentKeyChord.push(vimKey);
                        if (this.customVimKeybinds[this.currentKeyChord.join("")] != undefined) { // Custom key chord exists.
                            this.currentKeyChord = [];
                        }
                    }
                    else {
                        this.currentKeyChord = [];
                    }
                    tempS = "";
                    for (_i = 0, _a = this.currentKeyChord; _i < _a.length; _i++) {
                        s = _a[_i];
                        tempS += " " + s;
                    }
                    if (tempS != "") {
                        tempS += "-";
                    }
                    this.vimChordStatusBar.setText(tempS);
                    return [2 /*return*/];
                });
            }); });
            CodeMirror.on(cmEditor, "vim-command-done", function (reason) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.vimChordStatusBar.setText("");
                    this.currentKeyChord = [];
                    return [2 /*return*/];
                });
            }); });
        }
    };
    VimrcPlugin.prototype.prepareVimModeDisplay = function () {
        if (this.settings.displayVimMode) {
            this.vimStatusBar = this.addStatusBarItem(); // Add status bar item
            this.vimStatusBar.setText("\uD83D\uDFE2" /* normal */); // Init the vimStatusBar with normal mode
        }
    };
    VimrcPlugin.prototype.defineFixedLayout = function (cm) {
        var _this = this;
        cm.on('keydown', function (instance, ev) {
            if (_this.settings.fixedNormalModeLayout) {
                var keyMap = _this.settings.capturedKeyboardMap;
                if (!_this.isInsertMode && !ev.shiftKey &&
                    ev.code in keyMap && ev.key != keyMap[ev.code]) {
                    _this.codeMirrorVimObject.handleKey(instance, keyMap[ev.code], 'mapping');
                    ev.preventDefault();
                    return false;
                }
            }
        });
    };
    return VimrcPlugin;
}(obsidian.Plugin));
var SettingsTab = /** @class */ (function (_super) {
    __extends(SettingsTab, _super);
    function SettingsTab(app, plugin) {
        var _this = _super.call(this, app, plugin) || this;
        _this.plugin = plugin;
        return _this;
    }
    SettingsTab.prototype.display = function () {
        var _this = this;
        var containerEl = this.containerEl;
        containerEl.empty();
        containerEl.createEl('h2', { text: 'Vimrc Settings' });
        new obsidian.Setting(containerEl)
            .setName('Vimrc file name')
            .setDesc('Relative to vault directory (requires restart)')
            .addText(function (text) {
            text.setPlaceholder(DEFAULT_SETTINGS.vimrcFileName);
            text.setValue(_this.plugin.settings.vimrcFileName || DEFAULT_SETTINGS.vimrcFileName);
            text.onChange(function (value) {
                _this.plugin.settings.vimrcFileName = value;
                _this.plugin.saveSettings();
            });
        });
        new obsidian.Setting(containerEl)
            .setName('Vim chord display')
            .setDesc('Displays the current chord until completion. Ex: "<Space> f-" (requires restart)')
            .addToggle(function (toggle) {
            toggle.setValue(_this.plugin.settings.displayChord || DEFAULT_SETTINGS.displayChord);
            toggle.onChange(function (value) {
                _this.plugin.settings.displayChord = value;
                _this.plugin.saveSettings();
            });
        });
        new obsidian.Setting(containerEl)
            .setName('Vim mode display')
            .setDesc('Displays the current vim mode (requires restart)')
            .addToggle(function (toggle) {
            toggle.setValue(_this.plugin.settings.displayVimMode || DEFAULT_SETTINGS.displayVimMode);
            toggle.onChange(function (value) {
                _this.plugin.settings.displayVimMode = value;
                _this.plugin.saveSettings();
            });
        });
        new obsidian.Setting(containerEl)
            .setName('Use a fixed keyboard layout for Normal mode')
            .setDesc('Define a keyboard layout to always use when in Normal mode, regardless of the input language (experimental).')
            .addButton(function (button) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                button.setButtonText('Capture current layout');
                button.onClick(function () { return __awaiter(_this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _a = this.plugin.settings;
                                return [4 /*yield*/, this.plugin.captureKeyboardLayout()];
                            case 1:
                                _a.capturedKeyboardMap = _b.sent();
                                this.plugin.saveSettings();
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        }); })
            .addToggle(function (toggle) {
            toggle.setValue(_this.plugin.settings.fixedNormalModeLayout || DEFAULT_SETTINGS.fixedNormalModeLayout);
            toggle.onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            this.plugin.settings.fixedNormalModeLayout = value;
                            if (!(value && Object.keys(this.plugin.settings.capturedKeyboardMap).length === 0)) return [3 /*break*/, 2];
                            _a = this.plugin.settings;
                            return [4 /*yield*/, this.plugin.captureKeyboardLayout()];
                        case 1:
                            _a.capturedKeyboardMap = _b.sent();
                            _b.label = 2;
                        case 2:
                            this.plugin.saveSettings();
                            return [2 /*return*/];
                    }
                });
            }); });
        });
    };
    return SettingsTab;
}(obsidian.PluginSettingTab));

module.exports = VimrcPlugin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm5vZGVfbW9kdWxlcy9rZXlib2FyZGV2ZW50LWZyb20tZWxlY3Ryb24tYWNjZWxlcmF0b3IvaW5kZXguanMiLCJtYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2NyZWF0ZUJpbmRpbmcgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIG8pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHByaXZhdGVNYXApIHtcclxuICAgIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBnZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgcHJpdmF0ZU1hcCwgdmFsdWUpIHtcclxuICAgIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBzZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlTWFwLnNldChyZWNlaXZlciwgdmFsdWUpO1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcbiIsImNvbnN0IG1vZGlmaWVycyA9IC9eKENvbW1hbmRPckNvbnRyb2x8Q21kT3JDdHJsfENvbW1hbmR8Q21kfENvbnRyb2x8Q3RybHxBbHRHcnxPcHRpb258QWx0fFNoaWZ0fFN1cGVyKS9pO1xuY29uc3Qga2V5Q29kZXMgPSAvXihQbHVzfFNwYWNlfFRhYnxCYWNrc3BhY2V8RGVsZXRlfEluc2VydHxSZXR1cm58RW50ZXJ8VXB8RG93bnxMZWZ0fFJpZ2h0fEhvbWV8RW5kfFBhZ2VVcHxQYWdlRG93bnxFc2NhcGV8RXNjfFZvbHVtZVVwfFZvbHVtZURvd258Vm9sdW1lTXV0ZXxNZWRpYU5leHRUcmFja3xNZWRpYVByZXZpb3VzVHJhY2t8TWVkaWFTdG9wfE1lZGlhUGxheVBhdXNlfFByaW50U2NyZWVufEYyNHxGMjN8RjIyfEYyMXxGMjB8RjE5fEYxOHxGMTd8RjE2fEYxNXxGMTR8RjEzfEYxMnxGMTF8RjEwfEY5fEY4fEY3fEY2fEY1fEY0fEYzfEYyfEYxfFswLTlBLVopIUAjJCVeJiooOis8Xz4/fnt8fVwiOz0sXFwtLi9gW1xcXFxcXF0nXSkvaTtcbmNvbnN0IFVOU1VQUE9SVEVEID0ge307XG5cbmZ1bmN0aW9uIF9jb21tYW5kKGFjY2VsZXJhdG9yLCBldmVudCwgbW9kaWZpZXIpIHtcblx0aWYgKHByb2Nlc3MucGxhdGZvcm0gIT09ICdkYXJ3aW4nKSB7XG5cdFx0cmV0dXJuIFVOU1VQUE9SVEVEO1xuXHR9XG5cblx0aWYgKGV2ZW50Lm1ldGFLZXkpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ0RvdWJsZSBgQ29tbWFuZGAgbW9kaWZpZXIgc3BlY2lmaWVkLicpO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRldmVudDogT2JqZWN0LmFzc2lnbih7fSwgZXZlbnQsIHttZXRhS2V5OiB0cnVlfSksXG5cdFx0YWNjZWxlcmF0b3I6IGFjY2VsZXJhdG9yLnNsaWNlKG1vZGlmaWVyLmxlbmd0aClcblx0fTtcbn1cblxuZnVuY3Rpb24gX3N1cGVyKGFjY2VsZXJhdG9yLCBldmVudCwgbW9kaWZpZXIpIHtcblx0aWYgKGV2ZW50Lm1ldGFLZXkpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ0RvdWJsZSBgU3VwZXJgIG1vZGlmaWVyIHNwZWNpZmllZC4nKTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0ZXZlbnQ6IE9iamVjdC5hc3NpZ24oe30sIGV2ZW50LCB7bWV0YUtleTogdHJ1ZX0pLFxuXHRcdGFjY2VsZXJhdG9yOiBhY2NlbGVyYXRvci5zbGljZShtb2RpZmllci5sZW5ndGgpXG5cdH07XG59XG5cbmZ1bmN0aW9uIF9jb21tYW5kb3Jjb250cm9sKGFjY2VsZXJhdG9yLCBldmVudCwgbW9kaWZpZXIpIHtcblx0aWYgKHByb2Nlc3MucGxhdGZvcm0gPT09ICdkYXJ3aW4nKSB7XG5cdFx0aWYgKGV2ZW50Lm1ldGFLZXkpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignRG91YmxlIGBDb21tYW5kYCBtb2RpZmllciBzcGVjaWZpZWQuJyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdGV2ZW50OiBPYmplY3QuYXNzaWduKHt9LCBldmVudCwge21ldGFLZXk6IHRydWV9KSxcblx0XHRcdGFjY2VsZXJhdG9yOiBhY2NlbGVyYXRvci5zbGljZShtb2RpZmllci5sZW5ndGgpXG5cdFx0fTtcblx0fVxuXG5cdGlmIChldmVudC5jdHJsS2V5KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdEb3VibGUgYENvbnRyb2xgIG1vZGlmaWVyIHNwZWNpZmllZC4nKTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0ZXZlbnQ6IE9iamVjdC5hc3NpZ24oe30sIGV2ZW50LCB7Y3RybEtleTogdHJ1ZX0pLFxuXHRcdGFjY2VsZXJhdG9yOiBhY2NlbGVyYXRvci5zbGljZShtb2RpZmllci5sZW5ndGgpXG5cdH07XG59XG5cbmZ1bmN0aW9uIF9hbHQoYWNjZWxlcmF0b3IsIGV2ZW50LCBtb2RpZmllcikge1xuXHRpZiAobW9kaWZpZXIgPT09ICdvcHRpb24nICYmIHByb2Nlc3MucGxhdGZvcm0gIT09ICdkYXJ3aW4nKSB7XG5cdFx0cmV0dXJuIFVOU1VQUE9SVEVEO1xuXHR9XG5cblx0aWYgKGV2ZW50LmFsdEtleSkge1xuXHRcdHRocm93IG5ldyBFcnJvcignRG91YmxlIGBBbHRgIG1vZGlmaWVyIHNwZWNpZmllZC4nKTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0ZXZlbnQ6IE9iamVjdC5hc3NpZ24oe30sIGV2ZW50LCB7YWx0S2V5OiB0cnVlfSksXG5cdFx0YWNjZWxlcmF0b3I6IGFjY2VsZXJhdG9yLnNsaWNlKG1vZGlmaWVyLmxlbmd0aClcblx0fTtcbn1cblxuZnVuY3Rpb24gX3NoaWZ0KGFjY2VsZXJhdG9yLCBldmVudCwgbW9kaWZpZXIpIHtcblx0aWYgKGV2ZW50LnNoaWZ0S2V5KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdEb3VibGUgYFNoaWZ0YCBtb2RpZmllciBzcGVjaWZpZWQuJyk7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGV2ZW50OiBPYmplY3QuYXNzaWduKHt9LCBldmVudCwge3NoaWZ0S2V5OiB0cnVlfSksXG5cdFx0YWNjZWxlcmF0b3I6IGFjY2VsZXJhdG9yLnNsaWNlKG1vZGlmaWVyLmxlbmd0aClcblx0fTtcbn1cblxuZnVuY3Rpb24gX2NvbnRyb2woYWNjZWxlcmF0b3IsIGV2ZW50LCBtb2RpZmllcikge1xuXHRpZiAoZXZlbnQuY3RybEtleSkge1xuXHRcdHRocm93IG5ldyBFcnJvcignRG91YmxlIGBDb250cm9sYCBtb2RpZmllciBzcGVjaWZpZWQuJyk7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGV2ZW50OiBPYmplY3QuYXNzaWduKHt9LCBldmVudCwge2N0cmxLZXk6IHRydWV9KSxcblx0XHRhY2NlbGVyYXRvcjogYWNjZWxlcmF0b3Iuc2xpY2UobW9kaWZpZXIubGVuZ3RoKVxuXHR9O1xufVxuXG5mdW5jdGlvbiByZWR1Y2VNb2RpZmllcih7YWNjZWxlcmF0b3IsIGV2ZW50fSwgbW9kaWZpZXIpIHtcblx0c3dpdGNoIChtb2RpZmllcikge1xuXHRcdGNhc2UgJ2NvbW1hbmQnOlxuXHRcdGNhc2UgJ2NtZCc6IHtcblx0XHRcdHJldHVybiBfY29tbWFuZChhY2NlbGVyYXRvciwgZXZlbnQsIG1vZGlmaWVyKTtcblx0XHR9XG5cblx0XHRjYXNlICdzdXBlcic6IHtcblx0XHRcdHJldHVybiBfc3VwZXIoYWNjZWxlcmF0b3IsIGV2ZW50LCBtb2RpZmllcik7XG5cdFx0fVxuXG5cdFx0Y2FzZSAnY29udHJvbCc6XG5cdFx0Y2FzZSAnY3RybCc6IHtcblx0XHRcdHJldHVybiBfY29udHJvbChhY2NlbGVyYXRvciwgZXZlbnQsIG1vZGlmaWVyKTtcblx0XHR9XG5cblx0XHRjYXNlICdjb21tYW5kb3Jjb250cm9sJzpcblx0XHRjYXNlICdjbWRvcmN0cmwnOiB7XG5cdFx0XHRyZXR1cm4gX2NvbW1hbmRvcmNvbnRyb2woYWNjZWxlcmF0b3IsIGV2ZW50LCBtb2RpZmllcik7XG5cdFx0fVxuXG5cdFx0Y2FzZSAnb3B0aW9uJzpcblx0XHRjYXNlICdhbHRncic6XG5cdFx0Y2FzZSAnYWx0Jzoge1xuXHRcdFx0cmV0dXJuIF9hbHQoYWNjZWxlcmF0b3IsIGV2ZW50LCBtb2RpZmllcik7XG5cdFx0fVxuXG5cdFx0Y2FzZSAnc2hpZnQnOiB7XG5cdFx0XHRyZXR1cm4gX3NoaWZ0KGFjY2VsZXJhdG9yLCBldmVudCwgbW9kaWZpZXIpO1xuXHRcdH1cblxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRjb25zb2xlLmVycm9yKG1vZGlmaWVyKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZWR1Y2VQbHVzKHthY2NlbGVyYXRvciwgZXZlbnR9KSB7XG5cdHJldHVybiB7XG5cdFx0ZXZlbnQsXG5cdFx0YWNjZWxlcmF0b3I6IGFjY2VsZXJhdG9yLnRyaW0oKS5zbGljZSgxKVxuXHR9O1xufVxuXG5jb25zdCB2aXJ0dWFsS2V5Q29kZXMgPSB7XG5cdDA6ICdEaWdpdDAnLFxuXHQxOiAnRGlnaXQxJyxcblx0MjogJ0RpZ2l0MicsXG5cdDM6ICdEaWdpdDMnLFxuXHQ0OiAnRGlnaXQ0Jyxcblx0NTogJ0RpZ2l0NScsXG5cdDY6ICdEaWdpdDYnLFxuXHQ3OiAnRGlnaXQ3Jyxcblx0ODogJ0RpZ2l0OCcsXG5cdDk6ICdEaWdpdDknLFxuXHQnLSc6ICdNaW51cycsXG5cdCc9JzogJ0VxdWFsJyxcblx0UTogJ0tleVEnLFxuXHRXOiAnS2V5VycsXG5cdEU6ICdLZXlFJyxcblx0UjogJ0tleVInLFxuXHRUOiAnS2V5VCcsXG5cdFk6ICdLZXlZJyxcblx0VTogJ0tleVUnLFxuXHRJOiAnS2V5SScsXG5cdE86ICdLZXlPJyxcblx0UDogJ0tleVAnLFxuXHQnWyc6ICdCcmFja2V0TGVmdCcsXG5cdCddJzogJ0JyYWNrZXRSaWdodCcsXG5cdEE6ICdLZXlBJyxcblx0UzogJ0tleVMnLFxuXHREOiAnS2V5RCcsXG5cdEY6ICdLZXlGJyxcblx0RzogJ0tleUcnLFxuXHRIOiAnS2V5SCcsXG5cdEo6ICdLZXlKJyxcblx0SzogJ0tleUsnLFxuXHRMOiAnS2V5TCcsXG5cdCc7JzogJ1NlbWljb2xvbicsXG5cdCdcXCcnOiAnUXVvdGUnLFxuXHQnYCc6ICdCYWNrcXVvdGUnLFxuXHQnLyc6ICdCYWNrc2xhc2gnLFxuXHRaOiAnS2V5WicsXG5cdFg6ICdLZXlYJyxcblx0QzogJ0tleUMnLFxuXHRWOiAnS2V5VicsXG5cdEI6ICdLZXlCJyxcblx0TjogJ0tleU4nLFxuXHRNOiAnS2V5TScsXG5cdCcsJzogJ0NvbW1hJyxcblx0Jy4nOiAnUGVyaW9kJyxcblx0J1xcXFwnOiAnU2xhc2gnLFxuXHQnICc6ICdTcGFjZSdcbn07XG5cbmZ1bmN0aW9uIHJlZHVjZUtleSh7YWNjZWxlcmF0b3IsIGV2ZW50fSwga2V5KSB7XG5cdGlmIChrZXkubGVuZ3RoID4gMSB8fCBldmVudC5rZXkpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoYFVudmFsaWQga2V5Y29kZSBcXGAke2tleX1cXGAuYCk7XG5cdH1cblxuXHRjb25zdCBjb2RlID1cblx0XHRrZXkudG9VcHBlckNhc2UoKSBpbiB2aXJ0dWFsS2V5Q29kZXMgP1xuXHRcdFx0dmlydHVhbEtleUNvZGVzW2tleS50b1VwcGVyQ2FzZSgpXSA6XG5cdFx0XHRudWxsO1xuXG5cdHJldHVybiB7XG5cdFx0ZXZlbnQ6IE9iamVjdC5hc3NpZ24oe30sIGV2ZW50LCB7a2V5fSwgY29kZSA/IHtjb2RlfSA6IG51bGwpLFxuXHRcdGFjY2VsZXJhdG9yOiBhY2NlbGVyYXRvci50cmltKCkuc2xpY2Uoa2V5Lmxlbmd0aClcblx0fTtcbn1cblxuY29uc3QgZG9tS2V5cyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShudWxsKSwge1xuXHRwbHVzOiAnQWRkJyxcblx0c3BhY2U6ICdTcGFjZScsXG5cdHRhYjogJ1RhYicsXG5cdGJhY2tzcGFjZTogJ0JhY2tzcGFjZScsXG5cdGRlbGV0ZTogJ0RlbGV0ZScsXG5cdGluc2VydDogJ0luc2VydCcsXG5cdHJldHVybjogJ1JldHVybicsXG5cdGVudGVyOiAnUmV0dXJuJyxcblx0dXA6ICdBcnJvd1VwJyxcblx0ZG93bjogJ0Fycm93RG93bicsXG5cdGxlZnQ6ICdBcnJvd0xlZnQnLFxuXHRyaWdodDogJ0Fycm93UmlnaHQnLFxuXHRob21lOiAnSG9tZScsXG5cdGVuZDogJ0VuZCcsXG5cdHBhZ2V1cDogJ1BhZ2VVcCcsXG5cdHBhZ2Vkb3duOiAnUGFnZURvd24nLFxuXHRlc2NhcGU6ICdFc2NhcGUnLFxuXHRlc2M6ICdFc2NhcGUnLFxuXHR2b2x1bWV1cDogJ0F1ZGlvVm9sdW1lVXAnLFxuXHR2b2x1bWVkb3duOiAnQXVkaW9Wb2x1bWVEb3duJyxcblx0dm9sdW1lbXV0ZTogJ0F1ZGlvVm9sdW1lTXV0ZScsXG5cdG1lZGlhbmV4dHRyYWNrOiAnTWVkaWFUcmFja05leHQnLFxuXHRtZWRpYXByZXZpb3VzdHJhY2s6ICdNZWRpYVRyYWNrUHJldmlvdXMnLFxuXHRtZWRpYXN0b3A6ICdNZWRpYVN0b3AnLFxuXHRtZWRpYXBsYXlwYXVzZTogJ01lZGlhUGxheVBhdXNlJyxcblx0cHJpbnRzY3JlZW46ICdQcmludFNjcmVlbidcbn0pO1xuXG4vLyBBZGQgZnVuY3Rpb24ga2V5c1xuZm9yIChsZXQgaSA9IDE7IGkgPD0gMjQ7IGkrKykge1xuXHRkb21LZXlzW2BmJHtpfWBdID0gYEYke2l9YDtcbn1cblxuZnVuY3Rpb24gcmVkdWNlQ29kZSh7YWNjZWxlcmF0b3IsIGV2ZW50fSwge2NvZGUsIGtleX0pIHtcblx0aWYgKGV2ZW50LmNvZGUpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoYER1cGxpY2F0ZWQga2V5Y29kZSBcXGAke2tleX1cXGAuYCk7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGV2ZW50OiBPYmplY3QuYXNzaWduKHt9LCBldmVudCwge2tleX0sIGNvZGUgPyB7Y29kZX0gOiBudWxsKSxcblx0XHRhY2NlbGVyYXRvcjogYWNjZWxlcmF0b3IudHJpbSgpLnNsaWNlKChrZXkgJiYga2V5Lmxlbmd0aCkgfHwgMClcblx0fTtcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIHRyYW5zZm9ybSBhbiBFbGVjdHJvbiBBY2NlbGVyYXRvciBzdHJpbmcgaW50b1xuICogYSBET00gS2V5Ym9hcmRFdmVudCBvYmplY3QuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSBhY2NlbGVyYXRvciBhbiBFbGVjdHJvbiBBY2NlbGVyYXRvciBzdHJpbmcsIGUuZy4gYEN0cmwrQ2Agb3IgYFNoaWZ0K1NwYWNlYC5cbiAqIEByZXR1cm4ge29iamVjdH0gYSBET00gS2V5Ym9hcmRFdmVudCBvYmplY3QgZGVyaXZhdGUgZnJvbSB0aGUgYGFjY2VsZXJhdG9yYCBhcmd1bWVudC5cbiAqL1xuZnVuY3Rpb24gdG9LZXlFdmVudChhY2NlbGVyYXRvcikge1xuXHRsZXQgc3RhdGUgPSB7YWNjZWxlcmF0b3IsIGV2ZW50OiB7fX07XG5cdHdoaWxlIChzdGF0ZS5hY2NlbGVyYXRvciAhPT0gJycpIHtcblx0XHRjb25zdCBtb2RpZmllck1hdGNoID0gc3RhdGUuYWNjZWxlcmF0b3IubWF0Y2gobW9kaWZpZXJzKTtcblx0XHRpZiAobW9kaWZpZXJNYXRjaCkge1xuXHRcdFx0Y29uc3QgbW9kaWZpZXIgPSBtb2RpZmllck1hdGNoWzBdLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRzdGF0ZSA9IHJlZHVjZU1vZGlmaWVyKHN0YXRlLCBtb2RpZmllcik7XG5cdFx0XHRpZiAoc3RhdGUgPT09IFVOU1VQUE9SVEVEKSB7XG5cdFx0XHRcdHJldHVybiB7dW5zdXBwb3J0ZWRLZXlGb3JQbGF0Zm9ybTogdHJ1ZX07XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChzdGF0ZS5hY2NlbGVyYXRvci50cmltKClbMF0gPT09ICcrJykge1xuXHRcdFx0c3RhdGUgPSByZWR1Y2VQbHVzKHN0YXRlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgY29kZU1hdGNoID0gc3RhdGUuYWNjZWxlcmF0b3IubWF0Y2goa2V5Q29kZXMpO1xuXHRcdFx0aWYgKGNvZGVNYXRjaCkge1xuXHRcdFx0XHRjb25zdCBjb2RlID0gY29kZU1hdGNoWzBdLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRcdGlmIChjb2RlIGluIGRvbUtleXMpIHtcblx0XHRcdFx0XHRzdGF0ZSA9IHJlZHVjZUNvZGUoc3RhdGUsIHtcblx0XHRcdFx0XHRcdGNvZGU6IGRvbUtleXNbY29kZV0sXG5cdFx0XHRcdFx0XHRrZXk6IGNvZGVcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzdGF0ZSA9IHJlZHVjZUtleShzdGF0ZSwgY29kZSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihgVW52YWxpZCBhY2NlbGVyYXRvcjogXCIke3N0YXRlLmFjY2VsZXJhdG9yfVwiYCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHN0YXRlLmV2ZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0VU5TVVBQT1JURUQsXG5cdHJlZHVjZU1vZGlmaWVyLFxuXHRyZWR1Y2VQbHVzLFxuXHRyZWR1Y2VLZXksXG5cdHJlZHVjZUNvZGUsXG5cdHRvS2V5RXZlbnRcbn07XG4iLCJpbXBvcnQgKiBhcyBrZXlGcm9tQWNjZWxlcmF0b3IgZnJvbSAna2V5Ym9hcmRldmVudC1mcm9tLWVsZWN0cm9uLWFjY2VsZXJhdG9yJztcclxuaW1wb3J0IHsgRWRpdG9yLCBFZGl0b3JTZWxlY3Rpb24sIE5vdGljZSwgQXBwLCBNYXJrZG93blZpZXcsIFBsdWdpbiwgUGx1Z2luU2V0dGluZ1RhYiwgU2V0dGluZywgVEZpbGUgfSBmcm9tICdvYnNpZGlhbic7XHJcblxyXG5kZWNsYXJlIGNvbnN0IENvZGVNaXJyb3I6IGFueTtcclxuXHJcbmludGVyZmFjZSBTZXR0aW5ncyB7XHJcblx0dmltcmNGaWxlTmFtZTogc3RyaW5nLFxyXG5cdGRpc3BsYXlDaG9yZDogYm9vbGVhbixcclxuXHRkaXNwbGF5VmltTW9kZTogYm9vbGVhbixcclxuXHRmaXhlZE5vcm1hbE1vZGVMYXlvdXQ6IGJvb2xlYW4sXHJcblx0Y2FwdHVyZWRLZXlib2FyZE1hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPlxyXG59XHJcblxyXG5jb25zdCBERUZBVUxUX1NFVFRJTkdTOiBTZXR0aW5ncyA9IHtcclxuXHR2aW1yY0ZpbGVOYW1lOiBcIi5vYnNpZGlhbi52aW1yY1wiLFxyXG5cdGRpc3BsYXlDaG9yZDogZmFsc2UsXHJcblx0ZGlzcGxheVZpbU1vZGU6IGZhbHNlLFxyXG5cdGZpeGVkTm9ybWFsTW9kZUxheW91dDogZmFsc2UsXHJcblx0Y2FwdHVyZWRLZXlib2FyZE1hcDoge31cclxufVxyXG5cclxuY29uc3QgZW51bSB2aW1TdGF0dXMge1xyXG5cdG5vcm1hbCA9IFwi8J+folwiLFxyXG5cdGluc2VydCA9IFwi8J+foFwiLFxyXG5cdHJlcGxhY2UgPSBcIvCflLRcIixcclxuXHR2aXN1YWwgPSBcIvCfn6FcIlxyXG59XHJcblxyXG4vLyBOT1RFOiB0byBmdXR1cmUgbWFpbnRhaW5lcnMsIHBsZWFzZSBtYWtlIHN1cmUgYWxsIG1hcHBpbmcgY29tbWFuZHMgYXJlIGluY2x1ZGVkIGluIHRoaXMgYXJyYXkuXHJcbmNvbnN0IG1hcHBpbmdDb21tYW5kczogU3RyaW5nW10gPSBbXHJcblx0XCJtYXBcIixcclxuXHRcIm5tYXBcIixcclxuXHRcIm5vcmVtYXBcIixcclxuXVxyXG5cclxuZnVuY3Rpb24gc2xlZXAobXM6IG51bWJlcikge1xyXG5cdHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmltcmNQbHVnaW4gZXh0ZW5kcyBQbHVnaW4ge1xyXG5cdHNldHRpbmdzOiBTZXR0aW5ncztcclxuXHJcblx0cHJpdmF0ZSBjb2RlTWlycm9yVmltT2JqZWN0OiBhbnkgPSBudWxsO1xyXG5cdHByaXZhdGUgZWRpdG9yTW9kZTogJ2NtNScgfCAnY202JyA9IG51bGw7XHJcblx0cHJpdmF0ZSBpbml0aWFsaXplZCA9IGZhbHNlO1xyXG5cclxuXHRwcml2YXRlIGxhc3RZYW5rQnVmZmVyID0gbmV3IEFycmF5PHN0cmluZz4oMCk7XHJcblx0cHJpdmF0ZSBsYXN0U3lzdGVtQ2xpcGJvYXJkID0gXCJcIjtcclxuXHRwcml2YXRlIHlhbmtUb1N5c3RlbUNsaXBib2FyZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cdHByaXZhdGUgY3VycmVudEtleUNob3JkOiBhbnkgPSBbXTtcclxuXHRwcml2YXRlIHZpbUNob3JkU3RhdHVzQmFyOiBIVE1MRWxlbWVudCA9IG51bGw7XHJcblx0cHJpdmF0ZSB2aW1TdGF0dXNCYXI6IEhUTUxFbGVtZW50ID0gbnVsbDtcclxuXHRwcml2YXRlIGN1cnJlbnRWaW1TdGF0dXM6IHZpbVN0YXR1cyA9IHZpbVN0YXR1cy5ub3JtYWw7XHJcblx0cHJpdmF0ZSBjdXN0b21WaW1LZXliaW5kczogeyBbbmFtZTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge307XHJcblx0cHJpdmF0ZSBjdXJyZW50U2VsZWN0aW9uOiBbRWRpdG9yU2VsZWN0aW9uXSA9IG51bGw7XHJcblx0cHJpdmF0ZSBpc0luc2VydE1vZGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblx0YXN5bmMgY2FwdHVyZUtleWJvYXJkTGF5b3V0KCkge1xyXG5cdFx0Ly8gVGhpcyBpcyBleHBlcmltZW50YWwgQVBJIGFuZCBpdCBtaWdodCBicmVhayBhdCBzb21lIHBvaW50OlxyXG5cdFx0Ly8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0tleWJvYXJkTGF5b3V0TWFwXHJcblx0XHRsZXQga2V5TWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge307XHJcblx0XHRsZXQgbGF5b3V0ID0gYXdhaXQgKG5hdmlnYXRvciBhcyBhbnkpLmtleWJvYXJkLmdldExheW91dE1hcCgpO1xyXG5cdFx0bGV0IGRvbmVJdGVyYXRpbmcgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRcdGxldCBjb3VudGVkID0gMDtcclxuXHRcdFx0bGF5b3V0LmZvckVhY2goKHZhbHVlOiBhbnksIGluZGV4OiBhbnkpID0+IHtcclxuXHRcdFx0XHRrZXlNYXBbaW5kZXhdID0gdmFsdWU7XHJcblx0XHRcdFx0Y291bnRlZCArPSAxO1xyXG5cdFx0XHRcdGlmIChjb3VudGVkID09PSBsYXlvdXQuc2l6ZSlcclxuXHRcdFx0XHRcdHJlc29sdmUoKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHRcdGF3YWl0IGRvbmVJdGVyYXRpbmc7XHJcblx0XHRuZXcgTm90aWNlKCdLZXlib2FyZCBsYXlvdXQgY2FwdHVyZWQnKTtcclxuXHRcdHJldHVybiBrZXlNYXA7XHJcblx0fVxyXG5cclxuXHRhc3luYyBpbml0aWFsaXplKCkge1xyXG5cdFx0aWYgKHRoaXMuaW5pdGlhbGl6ZWQpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHQvLyBEZXRlcm1pbmUgaWYgd2UgaGF2ZSB0aGUgbGVnYWN5IE9ic2lkaWFuIGVkaXRvciAoQ001KSBvciB0aGUgbmV3IG9uZSAoQ002KS5cclxuXHRcdC8vIFRoaXMgaXMgb25seSBhdmFpbGFibGUgYWZ0ZXIgT2JzaWRpYW4gaXMgZnVsbHkgbG9hZGVkLCBzbyB3ZSBkbyBpdCBhcyBwYXJ0IG9mIHRoZSBgZmlsZS1vcGVuYCBldmVudC5cclxuXHRcdGlmICgnZWRpdG9yOnRvZ2dsZS1zb3VyY2UnIGluICh0aGlzLmFwcCBhcyBhbnkpLmNvbW1hbmRzLmVkaXRvckNvbW1hbmRzKSB7XHJcblx0XHRcdHRoaXMuY29kZU1pcnJvclZpbU9iamVjdCA9ICh3aW5kb3cgYXMgYW55KS5Db2RlTWlycm9yQWRhcHRlcj8uVmltO1xyXG5cdFx0XHR0aGlzLmVkaXRvck1vZGUgPSAnY202JztcclxuXHRcdFx0Y29uc29sZS5sb2coJ1ZpbXJjIHBsdWdpbjogdXNpbmcgQ29kZU1pcnJvciA2IG1vZGUnKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuY29kZU1pcnJvclZpbU9iamVjdCA9IENvZGVNaXJyb3IuVmltO1xyXG5cdFx0XHR0aGlzLmVkaXRvck1vZGUgPSAnY201JztcclxuXHRcdFx0Y29uc29sZS5sb2coJ1ZpbXJjIHBsdWdpbjogdXNpbmcgQ29kZU1pcnJvciA1IG1vZGUnKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnJlZ2lzdGVyRG9tRXZlbnQoZG9jdW1lbnQsICdjbGljaycsICgpID0+IHtcclxuXHRcdFx0dGhpcy5jYXB0dXJlWWFua0J1ZmZlcigpO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLnJlZ2lzdGVyRG9tRXZlbnQoZG9jdW1lbnQsICdrZXl1cCcsICgpID0+IHtcclxuXHRcdFx0dGhpcy5jYXB0dXJlWWFua0J1ZmZlcigpO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLnJlZ2lzdGVyRG9tRXZlbnQoZG9jdW1lbnQsICdmb2N1c2luJywgKCkgPT4ge1xyXG5cdFx0XHR0aGlzLmNhcHR1cmVZYW5rQnVmZmVyKCk7XHJcblx0XHR9KVxyXG5cclxuXHRcdHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgb25sb2FkKCkge1xyXG5cdFx0YXdhaXQgdGhpcy5sb2FkU2V0dGluZ3MoKTtcclxuXHRcdHRoaXMuYWRkU2V0dGluZ1RhYihuZXcgU2V0dGluZ3NUYWIodGhpcy5hcHAsIHRoaXMpKVxyXG5cclxuXHRcdHRoaXMuYXBwLndvcmtzcGFjZS5vbignZmlsZS1vcGVuJywgYXN5bmMgKGZpbGU6IFRGaWxlKSA9PiB7XHJcblx0XHRcdGlmICghdGhpcy5pbml0aWFsaXplZClcclxuXHRcdFx0XHRhd2FpdCB0aGlzLmluaXRpYWxpemUoKTtcclxuXHRcdFx0Y29uc3QgVklNUkNfRklMRV9OQU1FID0gdGhpcy5zZXR0aW5ncy52aW1yY0ZpbGVOYW1lO1xyXG5cdFx0XHR0aGlzLmFwcC52YXVsdC5hZGFwdGVyLnJlYWQoVklNUkNfRklMRV9OQU1FKS5cclxuXHRcdFx0XHR0aGVuKChsaW5lcykgPT4gdGhpcy5yZWFkVmltSW5pdChsaW5lcykpLlxyXG5cdFx0XHRcdGNhdGNoKGVycm9yID0+IHsgY29uc29sZS5sb2coJ0Vycm9yIGxvYWRpbmcgdmltcmMgZmlsZScsIFZJTVJDX0ZJTEVfTkFNRSwgJ2Zyb20gdGhlIHZhdWx0IHJvb3QnLCBlcnJvcikgfSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIGxvYWRTZXR0aW5ncygpIHtcclxuXHRcdGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLmxvYWREYXRhKCk7XHJcblx0XHR0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9TRVRUSU5HUywgZGF0YSk7XHJcblx0fVxyXG5cclxuXHRhc3luYyBzYXZlU2V0dGluZ3MoKSB7XHJcblx0XHRhd2FpdCB0aGlzLnNhdmVEYXRhKHRoaXMuc2V0dGluZ3MpO1xyXG5cdH1cclxuXHJcblx0bG9nVmltTW9kZUNoYW5nZShtb2RlT2JqOiBhbnkpIHtcclxuXHRcdHRoaXMuaXNJbnNlcnRNb2RlID0gbW9kZU9iai5tb2RlID09PSAnaW5zZXJ0JztcclxuXHRcdHN3aXRjaCAobW9kZU9iai5tb2RlKSB7XHJcblx0XHRcdGNhc2UgXCJpbnNlcnRcIjpcclxuXHRcdFx0XHR0aGlzLmN1cnJlbnRWaW1TdGF0dXMgPSB2aW1TdGF0dXMuaW5zZXJ0O1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIFwibm9ybWFsXCI6XHJcblx0XHRcdFx0dGhpcy5jdXJyZW50VmltU3RhdHVzID0gdmltU3RhdHVzLm5vcm1hbDtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBcInZpc3VhbFwiOlxyXG5cdFx0XHRcdHRoaXMuY3VycmVudFZpbVN0YXR1cyA9IHZpbVN0YXR1cy52aXN1YWw7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgXCJyZXBsYWNlXCI6XHJcblx0XHRcdFx0dGhpcy5jdXJyZW50VmltU3RhdHVzID0gdmltU3RhdHVzLnJlcGxhY2U7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5zZXR0aW5ncy5kaXNwbGF5VmltTW9kZSlcclxuXHRcdFx0dGhpcy52aW1TdGF0dXNCYXIuc2V0VGV4dCh0aGlzLmN1cnJlbnRWaW1TdGF0dXMpO1xyXG5cdH1cclxuXHJcblx0b251bmxvYWQoKSB7XHJcblx0XHRjb25zb2xlLmxvZygndW5sb2FkaW5nIFZpbXJjIHBsdWdpbiAoYnV0IFZpbSBjb21tYW5kcyB0aGF0IHdlcmUgYWxyZWFkeSBsb2FkZWQgd2lsbCBzdGlsbCB3b3JrKScpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBnZXRBY3RpdmVWaWV3KCk6IE1hcmtkb3duVmlldyB7XHJcblx0XHRyZXR1cm4gdGhpcy5hcHAud29ya3NwYWNlLmdldEFjdGl2ZVZpZXdPZlR5cGUoTWFya2Rvd25WaWV3KTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgZ2V0Q29kZU1pcnJvcih2aWV3OiBNYXJrZG93blZpZXcpOiBDb2RlTWlycm9yLkVkaXRvciB7XHJcblx0XHQvLyBGb3IgQ002IHRoaXMgYWN0dWFsbHkgcmV0dXJucyBhbiBpbnN0YW5jZSBvZiB0aGUgb2JqZWN0IG5hbWVkIENvZGVNaXJyb3IgZnJvbSBjbV9hZGFwdGVyIG9mIGNvZGVtaXJyb3JfdmltXHJcblx0XHRpZiAodGhpcy5lZGl0b3JNb2RlID09ICdjbTYnKVxyXG5cdFx0XHRyZXR1cm4gKHZpZXcgYXMgYW55KS5zb3VyY2VNb2RlPy5jbUVkaXRvcj8uY20/LmNtO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gKHZpZXcgYXMgYW55KS5zb3VyY2VNb2RlPy5jbUVkaXRvcjtcclxuXHR9XHJcblxyXG5cdHJlYWRWaW1Jbml0KHZpbUNvbW1hbmRzOiBzdHJpbmcpIHtcclxuXHRcdGxldCB2aWV3ID0gdGhpcy5nZXRBY3RpdmVWaWV3KCk7XHJcblx0XHRpZiAodmlldykge1xyXG5cdFx0XHR2YXIgY21FZGl0b3IgPSB0aGlzLmdldENvZGVNaXJyb3Iodmlldyk7XHJcblx0XHRcdGlmIChjbUVkaXRvciAmJiAhdGhpcy5jb2RlTWlycm9yVmltT2JqZWN0LmxvYWRlZFZpbXJjKSB7XHJcblx0XHRcdFx0dGhpcy5kZWZpbmVCYXNpY0NvbW1hbmRzKHRoaXMuY29kZU1pcnJvclZpbU9iamVjdCk7XHJcblx0XHRcdFx0dGhpcy5kZWZpbmVTZW5kS2V5cyh0aGlzLmNvZGVNaXJyb3JWaW1PYmplY3QpO1xyXG5cdFx0XHRcdHRoaXMuZGVmaW5lT2JDb21tYW5kKHRoaXMuY29kZU1pcnJvclZpbU9iamVjdCk7XHJcblx0XHRcdFx0dGhpcy5kZWZpbmVDbUNvbW1hbmQodGhpcy5jb2RlTWlycm9yVmltT2JqZWN0KTtcclxuXHRcdFx0XHR0aGlzLmRlZmluZVN1cnJvdW5kKHRoaXMuY29kZU1pcnJvclZpbU9iamVjdCk7XHJcblxyXG5cdFx0XHRcdC8vIFJlY29yZCB0aGUgcG9zaXRpb24gb2Ygc2VsZWN0aW9uc1xyXG5cdFx0XHRcdENvZGVNaXJyb3Iub24oY21FZGl0b3IsIFwiY3Vyc29yQWN0aXZpdHlcIiwgYXN5bmMgKGNtOiBhbnkpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuY3VycmVudFNlbGVjdGlvbiA9IGNtLmxpc3RTZWxlY3Rpb25zKClcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0dmltQ29tbWFuZHMuc3BsaXQoXCJcXG5cIikuZm9yRWFjaChcclxuXHRcdFx0XHRcdGZ1bmN0aW9uIChsaW5lOiBzdHJpbmcsIGluZGV4OiBudW1iZXIsIGFycjogW3N0cmluZ10pIHtcclxuXHRcdFx0XHRcdFx0aWYgKGxpbmUudHJpbSgpLmxlbmd0aCA+IDAgJiYgbGluZS50cmltKClbMF0gIT0gJ1wiJykge1xyXG5cdFx0XHRcdFx0XHRcdGxldCBzcGxpdCA9IGxpbmUuc3BsaXQoXCIgXCIpXHJcblx0XHRcdFx0XHRcdFx0aWYgKG1hcHBpbmdDb21tYW5kcy5pbmNsdWRlcyhzcGxpdFswXSkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdC8vIEhhdmUgdG8gZG8gdGhpcyBiZWNhdXNlIFwidmltLWNvbW1hbmQtZG9uZVwiIGV2ZW50IGRvZXNuJ3QgYWN0dWFsbHkgd29yayBwcm9wZXJseSwgb3Igc29tZXRoaW5nLlxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5jdXN0b21WaW1LZXliaW5kc1tzcGxpdFsxXV0gPSB0cnVlXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdHRoaXMuY29kZU1pcnJvclZpbU9iamVjdC5oYW5kbGVFeChjbUVkaXRvciwgbGluZSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0uYmluZCh0aGlzKSAvLyBGYXN0ZXIgdGhhbiBhbiBhcnJvdyBmdW5jdGlvbi4gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNTAzNzU0NDAvYmluZGluZy12cy1hcnJvdy1mdW5jdGlvbi1mb3ItcmVhY3Qtb25jbGljay1ldmVudFxyXG5cdFx0XHRcdClcclxuXHJcblx0XHRcdFx0dGhpcy5wcmVwYXJlQ2hvcmREaXNwbGF5KCk7XHJcblx0XHRcdFx0dGhpcy5wcmVwYXJlVmltTW9kZURpc3BsYXkoKTtcclxuXHJcblx0XHRcdFx0Ly8gTWFrZSBzdXJlIHRoYXQgd2UgbG9hZCBpdCBqdXN0IG9uY2UgcGVyIENvZGVNaXJyb3IgaW5zdGFuY2UuXHJcblx0XHRcdFx0Ly8gVGhpcyBpcyBzdXBwb3NlZCB0byB3b3JrIGJlY2F1c2UgdGhlIFZpbSBzdGF0ZSBpcyBrZXB0IGF0IHRoZSBrZXltYXAgbGV2ZWwsIGhvcGVmdWxseVxyXG5cdFx0XHRcdC8vIHRoZXJlIHdpbGwgbm90IGJlIGJ1Z3MgY2F1c2VkIGJ5IG9wZXJhdGlvbnMgdGhhdCBhcmUga2VwdCBhdCB0aGUgb2JqZWN0IGxldmVsIGluc3RlYWRcclxuXHRcdFx0XHR0aGlzLmNvZGVNaXJyb3JWaW1PYmplY3QubG9hZGVkVmltcmMgPSB0cnVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoY21FZGl0b3IpIHtcclxuXHRcdFx0XHRjbUVkaXRvci5vbigndmltLW1vZGUtY2hhbmdlJywgKG1vZGVPYmo6IGFueSkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKG1vZGVPYmopXHJcblx0XHRcdFx0XHRcdHRoaXMubG9nVmltTW9kZUNoYW5nZShtb2RlT2JqKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHR0aGlzLmRlZmluZUZpeGVkTGF5b3V0KGNtRWRpdG9yKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZGVmaW5lQmFzaWNDb21tYW5kcyh2aW1PYmplY3Q6IGFueSkge1xyXG5cdFx0dmltT2JqZWN0LmRlZmluZU9wdGlvbignY2xpcGJvYXJkJywgJycsICdzdHJpbmcnLCBbJ2NsaXAnXSwgKHZhbHVlOiBzdHJpbmcsIGNtOiBhbnkpID0+IHtcclxuXHRcdFx0aWYgKHZhbHVlKSB7XHJcblx0XHRcdFx0aWYgKHZhbHVlLnRyaW0oKSA9PSAndW5uYW1lZCcgfHwgdmFsdWUudHJpbSgpID09ICd1bm5hbWVkcGx1cycpIHtcclxuXHRcdFx0XHRcdGlmICghdGhpcy55YW5rVG9TeXN0ZW1DbGlwYm9hcmQpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy55YW5rVG9TeXN0ZW1DbGlwYm9hcmQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIlZpbSBpcyBub3cgc2V0IHRvIHlhbmsgdG8gc3lzdGVtIGNsaXBib2FyZC5cIik7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlVucmVjb2duaXplZCBjbGlwYm9hcmQgb3B0aW9uLCBzdXBwb3J0ZWQgYXJlICd1bm5hbWVkJyBhbmQgJ3VubmFtZWRwbHVzJyAoYW5kIHRoZXkgZG8gdGhlIHNhbWUpXCIpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHR2aW1PYmplY3QuZGVmaW5lT3B0aW9uKCd0YWJzdG9wJywgNCwgJ251bWJlcicsIFtdLCAodmFsdWU6IG51bWJlciwgY206IGFueSkgPT4ge1xyXG5cdFx0XHRpZiAodmFsdWUgJiYgY20pIHtcclxuXHRcdFx0XHRjbS5zZXRPcHRpb24oJ3RhYlNpemUnLCB2YWx1ZSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdHZpbU9iamVjdC5kZWZpbmVFeCgnaXVubWFwJywgJycsIChjbTogYW55LCBwYXJhbXM6IGFueSkgPT4ge1xyXG5cdFx0XHRpZiAocGFyYW1zLmFyZ1N0cmluZy50cmltKCkpIHtcclxuXHRcdFx0XHR0aGlzLmNvZGVNaXJyb3JWaW1PYmplY3QudW5tYXAocGFyYW1zLmFyZ1N0cmluZy50cmltKCksICdpbnNlcnQnKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0dmltT2JqZWN0LmRlZmluZUV4KCdub3JlbWFwJywgJycsIChjbTogYW55LCBwYXJhbXM6IGFueSkgPT4ge1xyXG5cdFx0XHRpZiAoIXBhcmFtcz8uYXJncz8ubGVuZ3RoKSB7XHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIG1hcHBpbmc6IG5vcmVtYXAnKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHBhcmFtcy5hcmdTdHJpbmcudHJpbSgpKSB7XHJcblx0XHRcdFx0dGhpcy5jb2RlTWlycm9yVmltT2JqZWN0Lm5vcmVtYXAuYXBwbHkodGhpcy5jb2RlTWlycm9yVmltT2JqZWN0LCBwYXJhbXMuYXJncyk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vIEFsbG93IHRoZSB1c2VyIHRvIHJlZ2lzdGVyIGFuIEV4IGNvbW1hbmRcclxuXHRcdHZpbU9iamVjdC5kZWZpbmVFeCgnZXhtYXAnLCAnJywgKGNtOiBhbnksIHBhcmFtczogYW55KSA9PiB7XHJcblx0XHRcdGlmIChwYXJhbXM/LmFyZ3M/Lmxlbmd0aCAmJiBwYXJhbXMuYXJncy5sZW5ndGggPCAyKSB7XHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGBleG1hcCByZXF1aXJlcyBhdCBsZWFzdCAyIHBhcmFtZXRlcnM6IFtuYW1lXSBbYWN0aW9ucy4uLl1gKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRsZXQgY29tbWFuZE5hbWUgPSBwYXJhbXMuYXJnc1swXTtcclxuXHRcdFx0cGFyYW1zLmFyZ3Muc2hpZnQoKTtcclxuXHRcdFx0bGV0IGNvbW1hbmRDb250ZW50ID0gcGFyYW1zLmFyZ3Muam9pbignICcpO1xyXG5cdFx0XHQvLyBUaGUgY29udGVudCBvZiB0aGUgdXNlcidzIEV4IGNvbW1hbmQgaXMganVzdCB0aGUgcmVtYWluaW5nIHBhcmFtZXRlcnMgb2YgdGhlIGV4bWFwIGNvbW1hbmRcclxuXHRcdFx0dGhpcy5jb2RlTWlycm9yVmltT2JqZWN0LmRlZmluZUV4KGNvbW1hbmROYW1lLCAnJywgKGNtOiBhbnksIHBhcmFtczogYW55KSA9PiB7XHJcblx0XHRcdFx0dGhpcy5jb2RlTWlycm9yVmltT2JqZWN0LmhhbmRsZUV4KGNtLCBjb21tYW5kQ29udGVudCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRkZWZpbmVTZW5kS2V5cyh2aW1PYmplY3Q6IGFueSkge1xyXG5cdFx0dmltT2JqZWN0LmRlZmluZUV4KCdzZW5ka2V5cycsICcnLCBhc3luYyAoY206IGFueSwgcGFyYW1zOiBhbnkpID0+IHtcclxuXHRcdFx0aWYgKCFwYXJhbXM/LmFyZ3M/Lmxlbmd0aCkge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHBhcmFtcyk7XHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGBUaGUgc2VuZGtleXMgY29tbWFuZCByZXF1aXJlcyBhIGxpc3Qgb2Yga2V5cywgZS5nLiBzZW5kS2V5cyBDdHJsK3AgYSBiIEVudGVyYCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGxldCBhbGxHb29kID0gdHJ1ZTtcclxuXHRcdFx0bGV0IGV2ZW50czogS2V5Ym9hcmRFdmVudFtdID0gW107XHJcblx0XHRcdGZvciAoY29uc3Qga2V5IG9mIHBhcmFtcy5hcmdzKSB7XHJcblx0XHRcdFx0aWYgKGtleS5zdGFydHNXaXRoKCd3YWl0JykpIHtcclxuXHRcdFx0XHRcdGNvbnN0IGRlbGF5ID0ga2V5LnNsaWNlKDQpO1xyXG5cdFx0XHRcdFx0YXdhaXQgc2xlZXAoZGVsYXkgKiAxMDAwKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRsZXQga2V5RXZlbnQ6IEtleWJvYXJkRXZlbnQgPSBudWxsO1xyXG5cdFx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdFx0a2V5RXZlbnQgPSBuZXcgS2V5Ym9hcmRFdmVudCgna2V5ZG93bicsIGtleUZyb21BY2NlbGVyYXRvci50b0tleUV2ZW50KGtleSkpO1xyXG5cdFx0XHRcdFx0XHRldmVudHMucHVzaChrZXlFdmVudCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRjYXRjaCAoZSkge1xyXG5cdFx0XHRcdFx0XHRhbGxHb29kID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihgS2V5ICcke2tleX0nIGNvdWxkbid0IGJlIHJlYWQgYXMgYW4gRWxlY3Ryb24gQWNjZWxlcmF0b3JgKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmIChhbGxHb29kKSB7XHJcblx0XHRcdFx0XHRcdGZvciAoa2V5RXZlbnQgb2YgZXZlbnRzKVxyXG5cdFx0XHRcdFx0XHRcdHdpbmRvdy5wb3N0TWVzc2FnZShKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGtleUV2ZW50KSksICcqJyk7XHJcblx0XHRcdFx0XHRcdC8vIHZpZXcuY29udGFpbmVyRWwuZGlzcGF0Y2hFdmVudChrZXlFdmVudCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGRlZmluZU9iQ29tbWFuZCh2aW1PYmplY3Q6IGFueSkge1xyXG5cdFx0dmltT2JqZWN0LmRlZmluZUV4KCdvYmNvbW1hbmQnLCAnJywgYXN5bmMgKGNtOiBhbnksIHBhcmFtczogYW55KSA9PiB7XHJcblx0XHRcdGNvbnN0IGF2YWlsYWJsZUNvbW1hbmRzID0gKHRoaXMuYXBwIGFzIGFueSkuY29tbWFuZHMuY29tbWFuZHM7XHJcblx0XHRcdGlmICghcGFyYW1zPy5hcmdzPy5sZW5ndGggfHwgcGFyYW1zLmFyZ3MubGVuZ3RoICE9IDEpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhgQXZhaWxhYmxlIGNvbW1hbmRzOiAke09iamVjdC5rZXlzKGF2YWlsYWJsZUNvbW1hbmRzKS5qb2luKCdcXG4nKX1gKVxyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihgb2Jjb21tYW5kIHJlcXVpcmVzIGV4YWN0bHkgMSBwYXJhbWV0ZXJgKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRsZXQgdmlldyA9IHRoaXMuZ2V0QWN0aXZlVmlldygpO1xyXG5cdFx0XHRsZXQgZWRpdG9yID0gdmlldy5lZGl0b3I7XHJcblx0XHRcdGNvbnN0IGNvbW1hbmQgPSBwYXJhbXMuYXJnc1swXTtcclxuXHRcdFx0aWYgKGNvbW1hbmQgaW4gYXZhaWxhYmxlQ29tbWFuZHMpIHtcclxuXHRcdFx0XHRsZXQgY2FsbGJhY2sgPSBhdmFpbGFibGVDb21tYW5kc1tjb21tYW5kXS5jYWxsYmFjaztcclxuXHRcdFx0XHRsZXQgY2hlY2tDYWxsYmFjayA9IGF2YWlsYWJsZUNvbW1hbmRzW2NvbW1hbmRdLmNoZWNrQ2FsbGJhY2s7XHJcblx0XHRcdFx0bGV0IGVkaXRvckNhbGxiYWNrID0gYXZhaWxhYmxlQ29tbWFuZHNbY29tbWFuZF0uZWRpdG9yQ2FsbGJhY2s7XHJcblx0XHRcdFx0bGV0IGVkaXRvckNoZWNrQ2FsbGJhY2sgPSBhdmFpbGFibGVDb21tYW5kc1tjb21tYW5kXS5lZGl0b3JDaGVja0NhbGxiYWNrO1xyXG5cdFx0XHRcdGlmIChlZGl0b3JDaGVja0NhbGxiYWNrKVxyXG5cdFx0XHRcdFx0ZWRpdG9yQ2hlY2tDYWxsYmFjayhmYWxzZSwgZWRpdG9yLCB2aWV3KTtcclxuXHRcdFx0XHRlbHNlIGlmIChlZGl0b3JDYWxsYmFjaylcclxuXHRcdFx0XHRcdGVkaXRvckNhbGxiYWNrKGVkaXRvciwgdmlldyk7XHJcblx0XHRcdFx0ZWxzZSBpZiAoY2hlY2tDYWxsYmFjaylcclxuXHRcdFx0XHRcdGNoZWNrQ2FsbGJhY2soZmFsc2UpO1xyXG5cdFx0XHRcdGVsc2UgaWYgKGNhbGxiYWNrKVxyXG5cdFx0XHRcdFx0Y2FsbGJhY2soKTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoYENvbW1hbmQgJHtjb21tYW5kfSBkb2Vzbid0IGhhdmUgYW4gT2JzaWRpYW4gY2FsbGJhY2tgKTtcclxuXHRcdFx0fSBlbHNlXHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGBDb21tYW5kICR7Y29tbWFuZH0gd2FzIG5vdCBmb3VuZCwgdHJ5ICdvYmNvbW1hbmQnIHdpdGggbm8gcGFyYW1zIHRvIHNlZSBpbiB0aGUgZGV2ZWxvcGVyIGNvbnNvbGUgd2hhdCdzIGF2YWlsYWJsZWApO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRkZWZpbmVDbUNvbW1hbmQodmltT2JqZWN0OiBhbnkpIHtcclxuXHRcdHZpbU9iamVjdC5kZWZpbmVFeCgnY21jb21tYW5kJywgJycsIGFzeW5jIChjbTogYW55LCBwYXJhbXM6IGFueSkgPT4ge1xyXG5cdFx0XHRpZiAoIXBhcmFtcz8uYXJncz8ubGVuZ3RoIHx8IHBhcmFtcy5hcmdzLmxlbmd0aCAhPSAxKSB7XHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGBjbWNvbW1hbmQgcmVxdWlyZXMgZXhhY3RseSAxIHBhcmFtZXRlcmApO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh0aGlzLmVkaXRvck1vZGUgPT09ICdjbTUnKSB7XHJcblx0XHRcdFx0bGV0IGNtRWRpdG9yID0gdGhpcy5nZXRDb2RlTWlycm9yKHRoaXMuZ2V0QWN0aXZlVmlldygpKTtcclxuXHRcdFx0XHRjbUVkaXRvci5leGVjQ29tbWFuZChwYXJhbXMuYXJnc1swXSk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignY21jb21tYW5kIGN1cnJlbnRseSBvbmx5IHdvcmtzIG9uIHRoZSBsZWdhY3kgQ001IGVkaXRvcicpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRkZWZpbmVTdXJyb3VuZCh2aW1PYmplY3Q6IGFueSkge1xyXG5cdFx0Ly8gRnVuY3Rpb24gdG8gc3Vycm91bmQgc2VsZWN0ZWQgdGV4dCBvciBoaWdobGlnaHRlZCB3b3JkLlxyXG5cdFx0dmFyIHN1cnJvdW5kRnVuYyA9IChwYXJhbXM6IHN0cmluZ1tdKSA9PiB7XHJcblx0XHRcdGlmICh0aGlzLmVkaXRvck1vZGUgPT09ICdjbTYnKVxyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcInN1cnJvdW5kIGlzIG5vdCB5ZXQgc3VwcG9ydGVkIGluIHRoZSBuZXcgZWRpdG9yLiBUbyBiZSBhZGRlZCBzb29uLlwiKTtcclxuXHRcdFx0dmFyIGVkaXRvciA9IHRoaXMuZ2V0QWN0aXZlVmlldygpLmVkaXRvcjtcclxuXHRcdFx0aWYgKCFwYXJhbXMubGVuZ3RoKSB7XHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwic3Vycm91bmQgcmVxdWlyZXMgZXhhY3RseSAyIHBhcmFtZXRlcnM6IHByZWZpeCBhbmQgcG9zdGZpeCB0ZXh0LlwiKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRsZXQgbmV3QXJncyA9IHBhcmFtcy5qb2luKFwiIFwiKS5tYXRjaCgvKFxcXFwufFteXFxzXFxcXFxcXFxdKykrL2cpO1xyXG5cdFx0XHRpZiAobmV3QXJncy5sZW5ndGggIT0gMikge1xyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcInN1cnJvdW5kIHJlcXVpcmVzIGV4YWN0bHkgMiBwYXJhbWV0ZXJzOiBwcmVmaXggYW5kIHBvc3RmaXggdGV4dC5cIik7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdGxldCBiZWdpbm5pbmcgPSBuZXdBcmdzWzBdLnJlcGxhY2UoXCJcXFxcXFxcXFwiLCBcIlxcXFxcIikucmVwbGFjZShcIlxcXFwgXCIsIFwiIFwiKTsgLy8gR2V0IHRoZSBiZWdpbm5pbmcgc3Vycm91bmQgdGV4dFxyXG5cdFx0XHRsZXQgZW5kaW5nID0gbmV3QXJnc1sxXS5yZXBsYWNlKFwiXFxcXFxcXFxcIiwgXCJcXFxcXCIpLnJlcGxhY2UoXCJcXFxcIFwiLCBcIiBcIik7IC8vIEdldCB0aGUgZW5kaW5nIHN1cnJvdW5kIHRleHRcclxuXHJcblx0XHRcdGxldCBjdXJyZW50U2VsZWN0aW9ucyA9IHRoaXMuY3VycmVudFNlbGVjdGlvbjtcclxuXHRcdFx0dmFyIGNob3NlblNlbGVjdGlvbiA9IGN1cnJlbnRTZWxlY3Rpb25zWzBdO1xyXG5cdFx0XHRpZiAodGhpcy5jdXJyZW50U2VsZWN0aW9uICYmIGN1cnJlbnRTZWxlY3Rpb25zLmxlbmd0aCA+IDEpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIldBUk5JTkc6IE11bHRpcGxlIHNlbGVjdGlvbnMgaW4gc3Vycm91bmQuIEF0dGVtcHQgdG8gc2VsZWN0IG1hdGNoaW5nIGN1cnNvci4gKG9ic2lkaWFuLXZpbXJjLXN1cHBvcnQpXCIpXHJcblx0XHRcdFx0Y29uc3QgY3Vyc29yUG9zID0gZWRpdG9yLmdldEN1cnNvcigpO1xyXG5cdFx0XHRcdGZvciAoY29uc3Qgc2VsZWN0aW9uIG9mIGN1cnJlbnRTZWxlY3Rpb25zKSB7XHJcblx0XHRcdFx0XHRpZiAoc2VsZWN0aW9uLmhlYWQubGluZSA9PSBjdXJzb3JQb3MubGluZSAmJiBzZWxlY3Rpb24uaGVhZC5jaCA9PSBjdXJzb3JQb3MuY2gpIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJSRVNPTFZFRDogU2VsZWN0aW9uIG1hdGNoaW5nIGN1cnNvciBmb3VuZC4gKG9ic2lkaWFuLXZpbXJjLXN1cHBvcnQpXCIpXHJcblx0XHRcdFx0XHRcdGNob3NlblNlbGVjdGlvbiA9IHNlbGVjdGlvbjtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChKU09OLnN0cmluZ2lmeShjaG9zZW5TZWxlY3Rpb24uYW5jaG9yKSA9PT0gSlNPTi5zdHJpbmdpZnkoY2hvc2VuU2VsZWN0aW9uLmhlYWQpKSB7XHJcblx0XHRcdFx0Ly8gTm8gcmFuZ2Ugb2Ygc2VsZWN0ZWQgdGV4dCwgc28gc2VsZWN0IHdvcmQuXHJcblx0XHRcdFx0dmFyIGxpbmUgPSBlZGl0b3IuZ2V0TGluZShjaG9zZW5TZWxlY3Rpb24uYW5jaG9yLmxpbmUpO1xyXG5cdFx0XHRcdGlmIChsaW5lLmxlbmd0aCA9PT0gMClcclxuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcImNhbid0IHN1cnJvdW5kIG9uIGFuIGVtcHR5IGxpbmVcIik7XHJcblx0XHRcdFx0Ly8gR28gdG8gdGhlIGJlZ2lubmluZyBvZiB0aGUgd29yZFxyXG5cdFx0XHRcdGxldCB3b3JkU3RhcnQgPSBjaG9zZW5TZWxlY3Rpb24uYW5jaG9yLmNoO1xyXG5cdFx0XHRcdGZvciAoIDsgd29yZFN0YXJ0ID49IDAgOyB3b3JkU3RhcnQtLSlcclxuXHRcdFx0XHRcdGlmIChsaW5lW3dvcmRTdGFydF0ubWF0Y2goL1xccy8pKVxyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR3b3JkU3RhcnQrKztcclxuXHRcdFx0XHRsZXQgd29yZEVuZCA9IGNob3NlblNlbGVjdGlvbi5hbmNob3IuY2g7XHJcblx0XHRcdFx0Zm9yICggOyB3b3JkRW5kIDwgbGluZS5sZW5ndGggOyB3b3JkRW5kKyspXHJcblx0XHRcdFx0XHRpZiAobGluZVt3b3JkRW5kXS5tYXRjaCgvXFxzLykpXHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdHZhciB3b3JkID0gbGluZS5zdWJzdHJpbmcod29yZFN0YXJ0LCB3b3JkRW5kKTtcclxuXHRcdFx0XHRjaG9zZW5TZWxlY3Rpb24uYW5jaG9yLmNoID0gd29yZFN0YXJ0O1xyXG5cdFx0XHRcdGNob3NlblNlbGVjdGlvbi5oZWFkLmNoID0gd29yZEVuZDtcclxuXHRcdFx0XHRjaG9zZW5TZWxlY3Rpb24gPSB7XHJcblx0XHRcdFx0XHRhbmNob3I6IHtsaW5lOiBjaG9zZW5TZWxlY3Rpb24uYW5jaG9yLmxpbmUsIGNoOiB3b3JkU3RhcnR9LFxyXG5cdFx0XHRcdFx0aGVhZDoge2xpbmU6IGNob3NlblNlbGVjdGlvbi5oZWFkLmxpbmUsIGNoOiB3b3JkRW5kfVxyXG5cdFx0XHRcdH07XHJcblx0XHRcdH1cclxuXHRcdFx0bGV0IGN1cnJUZXh0ID0gZWRpdG9yLmdldFJhbmdlKGNob3NlblNlbGVjdGlvbi5hbmNob3IsIGNob3NlblNlbGVjdGlvbi5oZWFkKTtcclxuXHRcdFx0ZWRpdG9yLnJlcGxhY2VSYW5nZShiZWdpbm5pbmcgKyBjdXJyVGV4dCArIGVuZGluZywgY2hvc2VuU2VsZWN0aW9uLmFuY2hvciwgY2hvc2VuU2VsZWN0aW9uLmhlYWQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZpbU9iamVjdC5kZWZpbmVFeChcInN1cnJvdW5kXCIsIFwiXCIsIChjbTogYW55LCBwYXJhbXM6IGFueSkgPT4geyBzdXJyb3VuZEZ1bmMocGFyYW1zLmFyZ3MpOyB9KTtcclxuXHJcblx0XHR2aW1PYmplY3QuZGVmaW5lRXgoXCJwYXN0ZWludG9cIiwgXCJcIiwgKGNtOiBhbnksIHBhcmFtczogYW55KSA9PiB7XHJcblx0XHRcdC8vIFVzaW5nIHRoZSByZWdpc3RlciBmb3Igd2hlbiB0aGlzLnlhbmtUb1N5c3RlbUNsaXBib2FyZCA9PSBmYWxzZVxyXG5cdFx0XHRzdXJyb3VuZEZ1bmMoXHJcblx0XHRcdFx0WydbJyxcclxuXHRcdFx0XHQgJ10oJyArIHZpbU9iamVjdC5nZXRSZWdpc3RlckNvbnRyb2xsZXIoKS5nZXRSZWdpc3RlcigneWFuaycpLmtleUJ1ZmZlciArIFwiKVwiXSk7XHJcblx0XHR9KVxyXG5cclxuXHRcdHZhciBlZGl0b3IgPSB0aGlzLmdldEFjdGl2ZVZpZXcoKS5lZGl0b3I7XHJcblx0XHQvLyBIYW5kbGUgdGhlIHN1cnJvdW5kIGRpYWxvZyBpbnB1dFxyXG5cdFx0dmFyIHN1cnJvdW5kRGlhbG9nQ2FsbGJhY2sgPSAodmFsdWU6IHN0cmluZykgPT4ge1xyXG5cdFx0XHRpZiAoKC9eXFxbKyQvKS50ZXN0KHZhbHVlKSkgeyAvLyBjaGVjayBmb3IgMS1pbmYgWyBhbmQgbWF0Y2ggdGhlbSB3aXRoIF1cclxuXHRcdFx0XHRzdXJyb3VuZEZ1bmMoW3ZhbHVlLCBcIl1cIi5yZXBlYXQodmFsdWUubGVuZ3RoKV0pXHJcblx0XHRcdH0gZWxzZSBpZiAoKC9eXFwoKyQvKS50ZXN0KHZhbHVlKSkgeyAvLyBjaGVjayBmb3IgMS1pbmYgKCBhbmQgbWF0Y2ggdGhlbSB3aXRoIClcclxuXHRcdFx0XHRzdXJyb3VuZEZ1bmMoW3ZhbHVlLCBcIilcIi5yZXBlYXQodmFsdWUubGVuZ3RoKV0pXHJcblx0XHRcdH0gZWxzZSBpZiAoKC9eXFx7KyQvKS50ZXN0KHZhbHVlKSkgeyAvLyBjaGVjayBmb3IgMS1pbmYgeyBhbmQgbWF0Y2ggdGhlbSB3aXRoIH1cclxuXHRcdFx0XHRzdXJyb3VuZEZ1bmMoW3ZhbHVlLCBcIn1cIi5yZXBlYXQodmFsdWUubGVuZ3RoKV0pXHJcblx0XHRcdH0gZWxzZSB7IC8vIEVsc2UsIGp1c3QgcHV0IGl0IGJlZm9yZSBhbmQgYWZ0ZXIuXHJcblx0XHRcdFx0c3Vycm91bmRGdW5jKFt2YWx1ZSwgdmFsdWVdKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0dmltT2JqZWN0LmRlZmluZU9wZXJhdG9yKFwic3Vycm91bmRPcGVyYXRvclwiLCAoKSA9PiB7XHJcblx0XHRcdGxldCBwID0gXCI8c3Bhbj5TdXJyb3VuZCB3aXRoOiA8aW5wdXQgdHlwZT0ndGV4dCc+PC9zcGFuPlwiXHJcblx0XHRcdENvZGVNaXJyb3Iub3BlbkRpYWxvZyhwLCBzdXJyb3VuZERpYWxvZ0NhbGxiYWNrLCB7IGJvdHRvbTogdHJ1ZSwgc2VsZWN0VmFsdWVPbk9wZW46IGZhbHNlIH0pXHJcblx0XHR9KVxyXG5cclxuXHJcblx0XHR2aW1PYmplY3QubWFwQ29tbWFuZChcIjxBLXk+c1wiLCBcIm9wZXJhdG9yXCIsIFwic3Vycm91bmRPcGVyYXRvclwiKVxyXG5cclxuXHR9XHJcblxyXG5cdGNhcHR1cmVZYW5rQnVmZmVyKCkge1xyXG5cdFx0aWYgKHRoaXMueWFua1RvU3lzdGVtQ2xpcGJvYXJkKSB7XHJcblx0XHRcdGxldCBjdXJyZW50QnVmZmVyID0gdGhpcy5jb2RlTWlycm9yVmltT2JqZWN0LmdldFJlZ2lzdGVyQ29udHJvbGxlcigpLmdldFJlZ2lzdGVyKCd5YW5rJykua2V5QnVmZmVyO1xyXG5cdFx0XHRpZiAoY3VycmVudEJ1ZmZlciAhPSB0aGlzLmxhc3RZYW5rQnVmZmVyKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMubGFzdFlhbmtCdWZmZXIubGVuZ3RoID4gMCAmJiBjdXJyZW50QnVmZmVyLmxlbmd0aCA+IDAgJiYgY3VycmVudEJ1ZmZlclswXSkge1xyXG5cdFx0XHRcdFx0bmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoY3VycmVudEJ1ZmZlclswXSk7XHJcblx0XHRcdFx0XHRuYXZpZ2F0b3IuY2xpcGJvYXJkLnJlYWRUZXh0KCkudGhlbigodmFsdWUpID0+IHsgdGhpcy5sYXN0U3lzdGVtQ2xpcGJvYXJkID0gdmFsdWU7IH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLmxhc3RZYW5rQnVmZmVyID0gY3VycmVudEJ1ZmZlcjtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHRcdFx0bGV0IGN1cnJlbnRDbGlwYm9hcmQgPSBuYXZpZ2F0b3IuY2xpcGJvYXJkLnJlYWRUZXh0KCkudGhlbigodmFsdWUpID0+IHtcclxuXHRcdFx0XHRpZiAodmFsdWUgIT0gdGhpcy5sYXN0U3lzdGVtQ2xpcGJvYXJkKSB7XHJcblx0XHRcdFx0XHRsZXQgeWFua1JlZ2lzdGVyID0gdGhpcy5jb2RlTWlycm9yVmltT2JqZWN0LmdldFJlZ2lzdGVyQ29udHJvbGxlcigpLmdldFJlZ2lzdGVyKCd5YW5rJylcclxuXHRcdFx0XHRcdHlhbmtSZWdpc3Rlci5zZXRUZXh0KHZhbHVlKTtcclxuXHRcdFx0XHRcdHRoaXMubGFzdFlhbmtCdWZmZXIgPSB5YW5rUmVnaXN0ZXIua2V5QnVmZmVyO1xyXG5cdFx0XHRcdFx0dGhpcy5sYXN0U3lzdGVtQ2xpcGJvYXJkID0gdmFsdWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJlcGFyZUNob3JkRGlzcGxheSgpIHtcclxuXHRcdGlmICh0aGlzLnNldHRpbmdzLmRpc3BsYXlDaG9yZCkge1xyXG5cdFx0XHQvLyBBZGQgc3RhdHVzIGJhciBpdGVtXHJcblx0XHRcdHRoaXMudmltQ2hvcmRTdGF0dXNCYXIgPSB0aGlzLmFkZFN0YXR1c0Jhckl0ZW0oKTtcclxuXHJcblx0XHRcdC8vIE1vdmUgdmltQ2hvcmRTdGF0dXNCYXIgdG8gdGhlIGxlZnRtb3N0IHBvc2l0aW9uIGFuZCBjZW50ZXIgaXQuXHJcblx0XHRcdGxldCBwYXJlbnQgPSB0aGlzLnZpbUNob3JkU3RhdHVzQmFyLnBhcmVudEVsZW1lbnQ7XHJcblx0XHRcdHRoaXMudmltQ2hvcmRTdGF0dXNCYXIucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUodGhpcy52aW1DaG9yZFN0YXR1c0JhciwgcGFyZW50LmZpcnN0Q2hpbGQpO1xyXG5cdFx0XHR0aGlzLnZpbUNob3JkU3RhdHVzQmFyLnN0eWxlLm1hcmdpblJpZ2h0ID0gXCJhdXRvXCI7XHJcblxyXG5cdFx0XHRsZXQgY21FZGl0b3IgPSB0aGlzLmdldENvZGVNaXJyb3IodGhpcy5nZXRBY3RpdmVWaWV3KCkpO1xyXG5cdFx0XHQvLyBTZWUgaHR0cHM6Ly9jb2RlbWlycm9yLm5ldC9kb2MvbWFudWFsLmh0bWwjdmltYXBpX2V2ZW50cyBmb3IgZXZlbnRzLlxyXG5cdFx0XHRDb2RlTWlycm9yLm9uKGNtRWRpdG9yLCBcInZpbS1rZXlwcmVzc1wiLCBhc3luYyAodmltS2V5OiBhbnkpID0+IHtcclxuXHRcdFx0XHRpZiAodmltS2V5ICE9IFwiPEVzYz5cIikgeyAvLyBUT0RPIGZpZ3VyZSBvdXQgd2hhdCB0byBhY3R1YWxseSBsb29rIGZvciB0byBleGl0IGNvbW1hbmRzLlxyXG5cdFx0XHRcdFx0dGhpcy5jdXJyZW50S2V5Q2hvcmQucHVzaCh2aW1LZXkpO1xyXG5cdFx0XHRcdFx0aWYgKHRoaXMuY3VzdG9tVmltS2V5YmluZHNbdGhpcy5jdXJyZW50S2V5Q2hvcmQuam9pbihcIlwiKV0gIT0gdW5kZWZpbmVkKSB7IC8vIEN1c3RvbSBrZXkgY2hvcmQgZXhpc3RzLlxyXG5cdFx0XHRcdFx0XHR0aGlzLmN1cnJlbnRLZXlDaG9yZCA9IFtdO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLmN1cnJlbnRLZXlDaG9yZCA9IFtdO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gQnVpbGQga2V5Y2hvcmQgdGV4dFxyXG5cdFx0XHRcdGxldCB0ZW1wUyA9IFwiXCI7XHJcblx0XHRcdFx0Zm9yIChjb25zdCBzIG9mIHRoaXMuY3VycmVudEtleUNob3JkKSB7XHJcblx0XHRcdFx0XHR0ZW1wUyArPSBcIiBcIiArIHM7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmICh0ZW1wUyAhPSBcIlwiKSB7XHJcblx0XHRcdFx0XHR0ZW1wUyArPSBcIi1cIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy52aW1DaG9yZFN0YXR1c0Jhci5zZXRUZXh0KHRlbXBTKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdENvZGVNaXJyb3Iub24oY21FZGl0b3IsIFwidmltLWNvbW1hbmQtZG9uZVwiLCBhc3luYyAocmVhc29uOiBhbnkpID0+IHsgLy8gUmVzZXQgZGlzcGxheVxyXG5cdFx0XHRcdHRoaXMudmltQ2hvcmRTdGF0dXNCYXIuc2V0VGV4dChcIlwiKTtcclxuXHRcdFx0XHR0aGlzLmN1cnJlbnRLZXlDaG9yZCA9IFtdO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByZXBhcmVWaW1Nb2RlRGlzcGxheSgpIHtcclxuXHRcdGlmICh0aGlzLnNldHRpbmdzLmRpc3BsYXlWaW1Nb2RlKSB7XHJcblx0XHRcdHRoaXMudmltU3RhdHVzQmFyID0gdGhpcy5hZGRTdGF0dXNCYXJJdGVtKCkgLy8gQWRkIHN0YXR1cyBiYXIgaXRlbVxyXG5cdFx0XHR0aGlzLnZpbVN0YXR1c0Jhci5zZXRUZXh0KHZpbVN0YXR1cy5ub3JtYWwpIC8vIEluaXQgdGhlIHZpbVN0YXR1c0JhciB3aXRoIG5vcm1hbCBtb2RlXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRkZWZpbmVGaXhlZExheW91dChjbTogQ29kZU1pcnJvci5FZGl0b3IpIHtcclxuXHRcdGNtLm9uKCdrZXlkb3duJywgKGluc3RhbmNlOiBDb2RlTWlycm9yLkVkaXRvciwgZXY6IEtleWJvYXJkRXZlbnQpID0+IHtcclxuXHRcdFx0aWYgKHRoaXMuc2V0dGluZ3MuZml4ZWROb3JtYWxNb2RlTGF5b3V0KSB7XHJcblx0XHRcdFx0Y29uc3Qga2V5TWFwID0gdGhpcy5zZXR0aW5ncy5jYXB0dXJlZEtleWJvYXJkTWFwO1xyXG5cdFx0XHRcdGlmICghdGhpcy5pc0luc2VydE1vZGUgJiYgIWV2LnNoaWZ0S2V5ICYmXHJcblx0XHRcdFx0XHRldi5jb2RlIGluIGtleU1hcCAmJiBldi5rZXkgIT0ga2V5TWFwW2V2LmNvZGVdKSB7XHJcblx0XHRcdFx0XHR0aGlzLmNvZGVNaXJyb3JWaW1PYmplY3QuaGFuZGxlS2V5KGluc3RhbmNlLCBrZXlNYXBbZXYuY29kZV0sICdtYXBwaW5nJyk7XHJcblx0XHRcdFx0XHRldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcblxyXG5jbGFzcyBTZXR0aW5nc1RhYiBleHRlbmRzIFBsdWdpblNldHRpbmdUYWIge1xyXG5cdHBsdWdpbjogVmltcmNQbHVnaW47XHJcblxyXG5cdGNvbnN0cnVjdG9yKGFwcDogQXBwLCBwbHVnaW46IFZpbXJjUGx1Z2luKSB7XHJcblx0XHRzdXBlcihhcHAsIHBsdWdpbik7XHJcblx0XHR0aGlzLnBsdWdpbiA9IHBsdWdpbjtcclxuXHR9XHJcblxyXG5cdGRpc3BsYXkoKTogdm9pZCB7XHJcblx0XHRsZXQgeyBjb250YWluZXJFbCB9ID0gdGhpcztcclxuXHJcblx0XHRjb250YWluZXJFbC5lbXB0eSgpO1xyXG5cclxuXHRcdGNvbnRhaW5lckVsLmNyZWF0ZUVsKCdoMicsIHsgdGV4dDogJ1ZpbXJjIFNldHRpbmdzJyB9KTtcclxuXHJcblx0XHRuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuXHRcdFx0LnNldE5hbWUoJ1ZpbXJjIGZpbGUgbmFtZScpXHJcblx0XHRcdC5zZXREZXNjKCdSZWxhdGl2ZSB0byB2YXVsdCBkaXJlY3RvcnkgKHJlcXVpcmVzIHJlc3RhcnQpJylcclxuXHRcdFx0LmFkZFRleHQoKHRleHQpID0+IHtcclxuXHRcdFx0XHR0ZXh0LnNldFBsYWNlaG9sZGVyKERFRkFVTFRfU0VUVElOR1MudmltcmNGaWxlTmFtZSk7XHJcblx0XHRcdFx0dGV4dC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy52aW1yY0ZpbGVOYW1lIHx8IERFRkFVTFRfU0VUVElOR1MudmltcmNGaWxlTmFtZSk7XHJcblx0XHRcdFx0dGV4dC5vbkNoYW5nZSh2YWx1ZSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnBsdWdpbi5zZXR0aW5ncy52aW1yY0ZpbGVOYW1lID0gdmFsdWU7XHJcblx0XHRcdFx0XHR0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuXHRcdFx0LnNldE5hbWUoJ1ZpbSBjaG9yZCBkaXNwbGF5JylcclxuXHRcdFx0LnNldERlc2MoJ0Rpc3BsYXlzIHRoZSBjdXJyZW50IGNob3JkIHVudGlsIGNvbXBsZXRpb24uIEV4OiBcIjxTcGFjZT4gZi1cIiAocmVxdWlyZXMgcmVzdGFydCknKVxyXG5cdFx0XHQuYWRkVG9nZ2xlKCh0b2dnbGUpID0+IHtcclxuXHRcdFx0XHR0b2dnbGUuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuZGlzcGxheUNob3JkIHx8IERFRkFVTFRfU0VUVElOR1MuZGlzcGxheUNob3JkKTtcclxuXHRcdFx0XHR0b2dnbGUub25DaGFuZ2UodmFsdWUgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5wbHVnaW4uc2V0dGluZ3MuZGlzcGxheUNob3JkID0gdmFsdWU7XHJcblx0XHRcdFx0XHR0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuXHRcdFx0LnNldE5hbWUoJ1ZpbSBtb2RlIGRpc3BsYXknKVxyXG5cdFx0XHQuc2V0RGVzYygnRGlzcGxheXMgdGhlIGN1cnJlbnQgdmltIG1vZGUgKHJlcXVpcmVzIHJlc3RhcnQpJylcclxuXHRcdFx0LmFkZFRvZ2dsZSgodG9nZ2xlKSA9PiB7XHJcblx0XHRcdFx0dG9nZ2xlLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmRpc3BsYXlWaW1Nb2RlIHx8IERFRkFVTFRfU0VUVElOR1MuZGlzcGxheVZpbU1vZGUpO1xyXG5cdFx0XHRcdHRvZ2dsZS5vbkNoYW5nZSh2YWx1ZSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnBsdWdpbi5zZXR0aW5ncy5kaXNwbGF5VmltTW9kZSA9IHZhbHVlO1xyXG5cdFx0XHRcdFx0dGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0bmV3IFNldHRpbmcoY29udGFpbmVyRWwpXHJcblx0XHRcdC5zZXROYW1lKCdVc2UgYSBmaXhlZCBrZXlib2FyZCBsYXlvdXQgZm9yIE5vcm1hbCBtb2RlJylcclxuXHRcdFx0LnNldERlc2MoJ0RlZmluZSBhIGtleWJvYXJkIGxheW91dCB0byBhbHdheXMgdXNlIHdoZW4gaW4gTm9ybWFsIG1vZGUsIHJlZ2FyZGxlc3Mgb2YgdGhlIGlucHV0IGxhbmd1YWdlIChleHBlcmltZW50YWwpLicpXHJcblx0XHRcdC5hZGRCdXR0b24oYXN5bmMgKGJ1dHRvbikgPT4ge1xyXG5cdFx0XHRcdGJ1dHRvbi5zZXRCdXR0b25UZXh0KCdDYXB0dXJlIGN1cnJlbnQgbGF5b3V0Jyk7XHJcblx0XHRcdFx0YnV0dG9uLm9uQ2xpY2soYXN5bmMgKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5wbHVnaW4uc2V0dGluZ3MuY2FwdHVyZWRLZXlib2FyZE1hcCA9IGF3YWl0IHRoaXMucGx1Z2luLmNhcHR1cmVLZXlib2FyZExheW91dCgpO1xyXG5cdFx0XHRcdFx0dGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pXHJcblx0XHRcdC5hZGRUb2dnbGUoKHRvZ2dsZSkgPT4ge1xyXG5cdFx0XHRcdHRvZ2dsZS5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5maXhlZE5vcm1hbE1vZGVMYXlvdXQgfHwgREVGQVVMVF9TRVRUSU5HUy5maXhlZE5vcm1hbE1vZGVMYXlvdXQpO1xyXG5cdFx0XHRcdHRvZ2dsZS5vbkNoYW5nZShhc3luYyB2YWx1ZSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnBsdWdpbi5zZXR0aW5ncy5maXhlZE5vcm1hbE1vZGVMYXlvdXQgPSB2YWx1ZTtcclxuXHRcdFx0XHRcdGlmICh2YWx1ZSAmJiBPYmplY3Qua2V5cyh0aGlzLnBsdWdpbi5zZXR0aW5ncy5jYXB0dXJlZEtleWJvYXJkTWFwKS5sZW5ndGggPT09IDApXHJcblx0XHRcdFx0XHRcdHRoaXMucGx1Z2luLnNldHRpbmdzLmNhcHR1cmVkS2V5Ym9hcmRNYXAgPSBhd2FpdCB0aGlzLnBsdWdpbi5jYXB0dXJlS2V5Ym9hcmRMYXlvdXQoKTtcclxuXHRcdFx0XHRcdHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KVxyXG5cdH1cclxufVxyXG4iXSwibmFtZXMiOlsiTm90aWNlIiwiTWFya2Rvd25WaWV3Iiwia2V5RnJvbUFjY2VsZXJhdG9yLnRvS2V5RXZlbnQiLCJQbHVnaW4iLCJTZXR0aW5nIiwiUGx1Z2luU2V0dGluZ1RhYiJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxhQUFhLEdBQUcsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ25DLElBQUksYUFBYSxHQUFHLE1BQU0sQ0FBQyxjQUFjO0FBQ3pDLFNBQVMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFlBQVksS0FBSyxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUNwRixRQUFRLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUMxRyxJQUFJLE9BQU8sYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMvQixDQUFDLENBQUM7QUFDRjtBQUNPLFNBQVMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDaEMsSUFBSSxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3hCLElBQUksU0FBUyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUFFO0FBQzNDLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLEtBQUssSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN6RixDQUFDO0FBdUNEO0FBQ08sU0FBUyxTQUFTLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFO0FBQzdELElBQUksU0FBUyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsT0FBTyxLQUFLLFlBQVksQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxVQUFVLE9BQU8sRUFBRSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFO0FBQ2hILElBQUksT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxDQUFDLEVBQUUsVUFBVSxPQUFPLEVBQUUsTUFBTSxFQUFFO0FBQy9ELFFBQVEsU0FBUyxTQUFTLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtBQUNuRyxRQUFRLFNBQVMsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtBQUN0RyxRQUFRLFNBQVMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUMsRUFBRTtBQUN0SCxRQUFRLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxVQUFVLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUM5RSxLQUFLLENBQUMsQ0FBQztBQUNQLENBQUM7QUFDRDtBQUNPLFNBQVMsV0FBVyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUU7QUFDM0MsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3JILElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLE9BQU8sTUFBTSxLQUFLLFVBQVUsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLFdBQVcsRUFBRSxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDN0osSUFBSSxTQUFTLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxPQUFPLFVBQVUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUN0RSxJQUFJLFNBQVMsSUFBSSxDQUFDLEVBQUUsRUFBRTtBQUN0QixRQUFRLElBQUksQ0FBQyxFQUFFLE1BQU0sSUFBSSxTQUFTLENBQUMsaUNBQWlDLENBQUMsQ0FBQztBQUN0RSxRQUFRLE9BQU8sQ0FBQyxFQUFFLElBQUk7QUFDdEIsWUFBWSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN6SyxZQUFZLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDcEQsWUFBWSxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDekIsZ0JBQWdCLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLE1BQU07QUFDOUMsZ0JBQWdCLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQztBQUN4RSxnQkFBZ0IsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUztBQUNqRSxnQkFBZ0IsS0FBSyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsU0FBUztBQUNqRSxnQkFBZ0I7QUFDaEIsb0JBQW9CLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUU7QUFDaEksb0JBQW9CLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUU7QUFDMUcsb0JBQW9CLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRTtBQUN6RixvQkFBb0IsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFO0FBQ3ZGLG9CQUFvQixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQzFDLG9CQUFvQixDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsU0FBUztBQUMzQyxhQUFhO0FBQ2IsWUFBWSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDdkMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO0FBQ2xFLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztBQUN6RixLQUFLO0FBQ0w7O0FDdkdBLE1BQU0sU0FBUyxHQUFHLHNGQUFzRixDQUFDO0FBQ3pHLE1BQU0sUUFBUSxHQUFHLHlWQUF5VixDQUFDO0FBQzNXLE1BQU0sV0FBVyxHQUFHLEVBQUUsQ0FBQztBQUN2QjtBQUNBLFNBQVMsUUFBUSxDQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFO0FBQ2hELENBQUMsSUFBSSxPQUFPLENBQUMsUUFBUSxLQUFLLFFBQVEsRUFBRTtBQUNwQyxFQUFFLE9BQU8sV0FBVyxDQUFDO0FBQ3JCLEVBQUU7QUFDRjtBQUNBLENBQUMsSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFO0FBQ3BCLEVBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO0FBQzFELEVBQUU7QUFDRjtBQUNBLENBQUMsT0FBTztBQUNSLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNsRCxFQUFFLFdBQVcsRUFBRSxXQUFXLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7QUFDakQsRUFBRSxDQUFDO0FBQ0gsQ0FBQztBQUNEO0FBQ0EsU0FBUyxNQUFNLENBQUMsV0FBVyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUU7QUFDOUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUU7QUFDcEIsRUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7QUFDeEQsRUFBRTtBQUNGO0FBQ0EsQ0FBQyxPQUFPO0FBQ1IsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ2xELEVBQUUsV0FBVyxFQUFFLFdBQVcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztBQUNqRCxFQUFFLENBQUM7QUFDSCxDQUFDO0FBQ0Q7QUFDQSxTQUFTLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFO0FBQ3pELENBQUMsSUFBSSxPQUFPLENBQUMsUUFBUSxLQUFLLFFBQVEsRUFBRTtBQUNwQyxFQUFFLElBQUksS0FBSyxDQUFDLE9BQU8sRUFBRTtBQUNyQixHQUFHLE1BQU0sSUFBSSxLQUFLLENBQUMsc0NBQXNDLENBQUMsQ0FBQztBQUMzRCxHQUFHO0FBQ0g7QUFDQSxFQUFFLE9BQU87QUFDVCxHQUFHLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDbkQsR0FBRyxXQUFXLEVBQUUsV0FBVyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO0FBQ2xELEdBQUcsQ0FBQztBQUNKLEVBQUU7QUFDRjtBQUNBLENBQUMsSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFO0FBQ3BCLEVBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO0FBQzFELEVBQUU7QUFDRjtBQUNBLENBQUMsT0FBTztBQUNSLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNsRCxFQUFFLFdBQVcsRUFBRSxXQUFXLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7QUFDakQsRUFBRSxDQUFDO0FBQ0gsQ0FBQztBQUNEO0FBQ0EsU0FBUyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUU7QUFDNUMsQ0FBQyxJQUFJLFFBQVEsS0FBSyxRQUFRLElBQUksT0FBTyxDQUFDLFFBQVEsS0FBSyxRQUFRLEVBQUU7QUFDN0QsRUFBRSxPQUFPLFdBQVcsQ0FBQztBQUNyQixFQUFFO0FBQ0Y7QUFDQSxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtBQUNuQixFQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsa0NBQWtDLENBQUMsQ0FBQztBQUN0RCxFQUFFO0FBQ0Y7QUFDQSxDQUFDLE9BQU87QUFDUixFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDakQsRUFBRSxXQUFXLEVBQUUsV0FBVyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO0FBQ2pELEVBQUUsQ0FBQztBQUNILENBQUM7QUFDRDtBQUNBLFNBQVMsTUFBTSxDQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFO0FBQzlDLENBQUMsSUFBSSxLQUFLLENBQUMsUUFBUSxFQUFFO0FBQ3JCLEVBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO0FBQ3hELEVBQUU7QUFDRjtBQUNBLENBQUMsT0FBTztBQUNSLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNuRCxFQUFFLFdBQVcsRUFBRSxXQUFXLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7QUFDakQsRUFBRSxDQUFDO0FBQ0gsQ0FBQztBQUNEO0FBQ0EsU0FBUyxRQUFRLENBQUMsV0FBVyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUU7QUFDaEQsQ0FBQyxJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUU7QUFDcEIsRUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7QUFDMUQsRUFBRTtBQUNGO0FBQ0EsQ0FBQyxPQUFPO0FBQ1IsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ2xELEVBQUUsV0FBVyxFQUFFLFdBQVcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztBQUNqRCxFQUFFLENBQUM7QUFDSCxDQUFDO0FBQ0Q7QUFDQSxTQUFTLGNBQWMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsRUFBRSxRQUFRLEVBQUU7QUFDeEQsQ0FBQyxRQUFRLFFBQVE7QUFDakIsRUFBRSxLQUFLLFNBQVMsQ0FBQztBQUNqQixFQUFFLEtBQUssS0FBSyxFQUFFO0FBQ2QsR0FBRyxPQUFPLFFBQVEsQ0FBQyxXQUFXLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQ2pELEdBQUc7QUFDSDtBQUNBLEVBQUUsS0FBSyxPQUFPLEVBQUU7QUFDaEIsR0FBRyxPQUFPLE1BQU0sQ0FBQyxXQUFXLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQy9DLEdBQUc7QUFDSDtBQUNBLEVBQUUsS0FBSyxTQUFTLENBQUM7QUFDakIsRUFBRSxLQUFLLE1BQU0sRUFBRTtBQUNmLEdBQUcsT0FBTyxRQUFRLENBQUMsV0FBVyxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztBQUNqRCxHQUFHO0FBQ0g7QUFDQSxFQUFFLEtBQUssa0JBQWtCLENBQUM7QUFDMUIsRUFBRSxLQUFLLFdBQVcsRUFBRTtBQUNwQixHQUFHLE9BQU8saUJBQWlCLENBQUMsV0FBVyxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztBQUMxRCxHQUFHO0FBQ0g7QUFDQSxFQUFFLEtBQUssUUFBUSxDQUFDO0FBQ2hCLEVBQUUsS0FBSyxPQUFPLENBQUM7QUFDZixFQUFFLEtBQUssS0FBSyxFQUFFO0FBQ2QsR0FBRyxPQUFPLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQzdDLEdBQUc7QUFDSDtBQUNBLEVBQUUsS0FBSyxPQUFPLEVBQUU7QUFDaEIsR0FBRyxPQUFPLE1BQU0sQ0FBQyxXQUFXLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQy9DLEdBQUc7QUFDSDtBQUNBLEVBQUU7QUFDRixHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDM0IsRUFBRTtBQUNGLENBQUM7QUFDRDtBQUNBLFNBQVMsVUFBVSxDQUFDLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxFQUFFO0FBQzFDLENBQUMsT0FBTztBQUNSLEVBQUUsS0FBSztBQUNQLEVBQUUsV0FBVyxFQUFFLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQzFDLEVBQUUsQ0FBQztBQUNILENBQUM7QUFDRDtBQUNBLE1BQU0sZUFBZSxHQUFHO0FBQ3hCLENBQUMsQ0FBQyxFQUFFLFFBQVE7QUFDWixDQUFDLENBQUMsRUFBRSxRQUFRO0FBQ1osQ0FBQyxDQUFDLEVBQUUsUUFBUTtBQUNaLENBQUMsQ0FBQyxFQUFFLFFBQVE7QUFDWixDQUFDLENBQUMsRUFBRSxRQUFRO0FBQ1osQ0FBQyxDQUFDLEVBQUUsUUFBUTtBQUNaLENBQUMsQ0FBQyxFQUFFLFFBQVE7QUFDWixDQUFDLENBQUMsRUFBRSxRQUFRO0FBQ1osQ0FBQyxDQUFDLEVBQUUsUUFBUTtBQUNaLENBQUMsQ0FBQyxFQUFFLFFBQVE7QUFDWixDQUFDLEdBQUcsRUFBRSxPQUFPO0FBQ2IsQ0FBQyxHQUFHLEVBQUUsT0FBTztBQUNiLENBQUMsQ0FBQyxFQUFFLE1BQU07QUFDVixDQUFDLENBQUMsRUFBRSxNQUFNO0FBQ1YsQ0FBQyxDQUFDLEVBQUUsTUFBTTtBQUNWLENBQUMsQ0FBQyxFQUFFLE1BQU07QUFDVixDQUFDLENBQUMsRUFBRSxNQUFNO0FBQ1YsQ0FBQyxDQUFDLEVBQUUsTUFBTTtBQUNWLENBQUMsQ0FBQyxFQUFFLE1BQU07QUFDVixDQUFDLENBQUMsRUFBRSxNQUFNO0FBQ1YsQ0FBQyxDQUFDLEVBQUUsTUFBTTtBQUNWLENBQUMsQ0FBQyxFQUFFLE1BQU07QUFDVixDQUFDLEdBQUcsRUFBRSxhQUFhO0FBQ25CLENBQUMsR0FBRyxFQUFFLGNBQWM7QUFDcEIsQ0FBQyxDQUFDLEVBQUUsTUFBTTtBQUNWLENBQUMsQ0FBQyxFQUFFLE1BQU07QUFDVixDQUFDLENBQUMsRUFBRSxNQUFNO0FBQ1YsQ0FBQyxDQUFDLEVBQUUsTUFBTTtBQUNWLENBQUMsQ0FBQyxFQUFFLE1BQU07QUFDVixDQUFDLENBQUMsRUFBRSxNQUFNO0FBQ1YsQ0FBQyxDQUFDLEVBQUUsTUFBTTtBQUNWLENBQUMsQ0FBQyxFQUFFLE1BQU07QUFDVixDQUFDLENBQUMsRUFBRSxNQUFNO0FBQ1YsQ0FBQyxHQUFHLEVBQUUsV0FBVztBQUNqQixDQUFDLElBQUksRUFBRSxPQUFPO0FBQ2QsQ0FBQyxHQUFHLEVBQUUsV0FBVztBQUNqQixDQUFDLEdBQUcsRUFBRSxXQUFXO0FBQ2pCLENBQUMsQ0FBQyxFQUFFLE1BQU07QUFDVixDQUFDLENBQUMsRUFBRSxNQUFNO0FBQ1YsQ0FBQyxDQUFDLEVBQUUsTUFBTTtBQUNWLENBQUMsQ0FBQyxFQUFFLE1BQU07QUFDVixDQUFDLENBQUMsRUFBRSxNQUFNO0FBQ1YsQ0FBQyxDQUFDLEVBQUUsTUFBTTtBQUNWLENBQUMsQ0FBQyxFQUFFLE1BQU07QUFDVixDQUFDLEdBQUcsRUFBRSxPQUFPO0FBQ2IsQ0FBQyxHQUFHLEVBQUUsUUFBUTtBQUNkLENBQUMsSUFBSSxFQUFFLE9BQU87QUFDZCxDQUFDLEdBQUcsRUFBRSxPQUFPO0FBQ2IsQ0FBQyxDQUFDO0FBQ0Y7QUFDQSxTQUFTLFNBQVMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsRUFBRSxHQUFHLEVBQUU7QUFDOUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxHQUFHLEVBQUU7QUFDbEMsRUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDakQsRUFBRTtBQUNGO0FBQ0EsQ0FBQyxNQUFNLElBQUk7QUFDWCxFQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxlQUFlO0FBQ3RDLEdBQUcsZUFBZSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUNyQyxHQUFHLElBQUksQ0FBQztBQUNSO0FBQ0EsQ0FBQyxPQUFPO0FBQ1IsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQzlELEVBQUUsV0FBVyxFQUFFLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztBQUNuRCxFQUFFLENBQUM7QUFDSCxDQUFDO0FBQ0Q7QUFDQSxNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDbkQsQ0FBQyxJQUFJLEVBQUUsS0FBSztBQUNaLENBQUMsS0FBSyxFQUFFLE9BQU87QUFDZixDQUFDLEdBQUcsRUFBRSxLQUFLO0FBQ1gsQ0FBQyxTQUFTLEVBQUUsV0FBVztBQUN2QixDQUFDLE1BQU0sRUFBRSxRQUFRO0FBQ2pCLENBQUMsTUFBTSxFQUFFLFFBQVE7QUFDakIsQ0FBQyxNQUFNLEVBQUUsUUFBUTtBQUNqQixDQUFDLEtBQUssRUFBRSxRQUFRO0FBQ2hCLENBQUMsRUFBRSxFQUFFLFNBQVM7QUFDZCxDQUFDLElBQUksRUFBRSxXQUFXO0FBQ2xCLENBQUMsSUFBSSxFQUFFLFdBQVc7QUFDbEIsQ0FBQyxLQUFLLEVBQUUsWUFBWTtBQUNwQixDQUFDLElBQUksRUFBRSxNQUFNO0FBQ2IsQ0FBQyxHQUFHLEVBQUUsS0FBSztBQUNYLENBQUMsTUFBTSxFQUFFLFFBQVE7QUFDakIsQ0FBQyxRQUFRLEVBQUUsVUFBVTtBQUNyQixDQUFDLE1BQU0sRUFBRSxRQUFRO0FBQ2pCLENBQUMsR0FBRyxFQUFFLFFBQVE7QUFDZCxDQUFDLFFBQVEsRUFBRSxlQUFlO0FBQzFCLENBQUMsVUFBVSxFQUFFLGlCQUFpQjtBQUM5QixDQUFDLFVBQVUsRUFBRSxpQkFBaUI7QUFDOUIsQ0FBQyxjQUFjLEVBQUUsZ0JBQWdCO0FBQ2pDLENBQUMsa0JBQWtCLEVBQUUsb0JBQW9CO0FBQ3pDLENBQUMsU0FBUyxFQUFFLFdBQVc7QUFDdkIsQ0FBQyxjQUFjLEVBQUUsZ0JBQWdCO0FBQ2pDLENBQUMsV0FBVyxFQUFFLGFBQWE7QUFDM0IsQ0FBQyxDQUFDLENBQUM7QUFDSDtBQUNBO0FBQ0EsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUM5QixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM1QixDQUFDO0FBQ0Q7QUFDQSxTQUFTLFVBQVUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRTtBQUN2RCxDQUFDLElBQUksS0FBSyxDQUFDLElBQUksRUFBRTtBQUNqQixFQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsQ0FBQyxxQkFBcUIsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNwRCxFQUFFO0FBQ0Y7QUFDQSxDQUFDLE9BQU87QUFDUixFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7QUFDOUQsRUFBRSxXQUFXLEVBQUUsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztBQUNqRSxFQUFFLENBQUM7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsVUFBVSxDQUFDLFdBQVcsRUFBRTtBQUNqQyxDQUFDLElBQUksS0FBSyxHQUFHLENBQUMsV0FBVyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN0QyxDQUFDLE9BQU8sS0FBSyxDQUFDLFdBQVcsS0FBSyxFQUFFLEVBQUU7QUFDbEMsRUFBRSxNQUFNLGFBQWEsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUMzRCxFQUFFLElBQUksYUFBYSxFQUFFO0FBQ3JCLEdBQUcsTUFBTSxRQUFRLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ25ELEdBQUcsS0FBSyxHQUFHLGNBQWMsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDM0MsR0FBRyxJQUFJLEtBQUssS0FBSyxXQUFXLEVBQUU7QUFDOUIsSUFBSSxPQUFPLENBQUMseUJBQXlCLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDN0MsSUFBSTtBQUNKLEdBQUcsTUFBTSxJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFO0FBQ2xELEdBQUcsS0FBSyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM3QixHQUFHLE1BQU07QUFDVCxHQUFHLE1BQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3ZELEdBQUcsSUFBSSxTQUFTLEVBQUU7QUFDbEIsSUFBSSxNQUFNLElBQUksR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDNUMsSUFBSSxJQUFJLElBQUksSUFBSSxPQUFPLEVBQUU7QUFDekIsS0FBSyxLQUFLLEdBQUcsVUFBVSxDQUFDLEtBQUssRUFBRTtBQUMvQixNQUFNLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDO0FBQ3pCLE1BQU0sR0FBRyxFQUFFLElBQUk7QUFDZixNQUFNLENBQUMsQ0FBQztBQUNSLEtBQUssTUFBTTtBQUNYLEtBQUssS0FBSyxHQUFHLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDcEMsS0FBSztBQUNMLElBQUksTUFBTTtBQUNWLElBQUksTUFBTSxJQUFJLEtBQUssQ0FBQyxDQUFDLHNCQUFzQixFQUFFLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNuRSxJQUFJO0FBQ0osR0FBRztBQUNILEVBQUU7QUFDRjtBQUNBLENBQUMsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDO0FBQ3BCLENBQUM7QUFDRDtBQUNBLHdDQUFjLEdBQUc7QUFDakIsQ0FBQyxXQUFXO0FBQ1osQ0FBQyxjQUFjO0FBQ2YsQ0FBQyxVQUFVO0FBQ1gsQ0FBQyxTQUFTO0FBQ1YsQ0FBQyxVQUFVO0FBQ1gsQ0FBQyxVQUFVO0FBQ1gsQ0FBQzs7QUN0UkQsSUFBTSxnQkFBZ0IsR0FBYTtJQUNsQyxhQUFhLEVBQUUsaUJBQWlCO0lBQ2hDLFlBQVksRUFBRSxLQUFLO0lBQ25CLGNBQWMsRUFBRSxLQUFLO0lBQ3JCLHFCQUFxQixFQUFFLEtBQUs7SUFDNUIsbUJBQW1CLEVBQUUsRUFBRTtDQUN2QixDQUFBO0FBU0Q7QUFDQSxJQUFNLGVBQWUsR0FBYTtJQUNqQyxLQUFLO0lBQ0wsTUFBTTtJQUNOLFNBQVM7Q0FDVCxDQUFBO0FBRUQsU0FBUyxLQUFLLENBQUMsRUFBVTtJQUN4QixPQUFPLElBQUksT0FBTyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsVUFBVSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsR0FBQSxDQUFDLENBQUM7QUFDeEQsQ0FBQzs7SUFFd0MsK0JBQU07SUFBL0M7UUFBQSxxRUEyZEM7UUF4ZFEseUJBQW1CLEdBQVEsSUFBSSxDQUFDO1FBQ2hDLGdCQUFVLEdBQWtCLElBQUksQ0FBQztRQUNqQyxpQkFBVyxHQUFHLEtBQUssQ0FBQztRQUVwQixvQkFBYyxHQUFHLElBQUksS0FBSyxDQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLHlCQUFtQixHQUFHLEVBQUUsQ0FBQztRQUN6QiwyQkFBcUIsR0FBWSxLQUFLLENBQUM7UUFDdkMscUJBQWUsR0FBUSxFQUFFLENBQUM7UUFDMUIsdUJBQWlCLEdBQWdCLElBQUksQ0FBQztRQUN0QyxrQkFBWSxHQUFnQixJQUFJLENBQUM7UUFDakMsc0JBQWdCLCtCQUErQjtRQUMvQyx1QkFBaUIsR0FBZ0MsRUFBRSxDQUFDO1FBQ3BELHNCQUFnQixHQUFzQixJQUFJLENBQUM7UUFDM0Msa0JBQVksR0FBWSxLQUFLLENBQUM7O0tBMmN0QztJQXpjTSwyQ0FBcUIsR0FBM0I7Ozs7Ozt3QkFHSyxNQUFNLEdBQTJCLEVBQUUsQ0FBQzt3QkFDM0IscUJBQU8sU0FBaUIsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLEVBQUE7O3dCQUF6RCxNQUFNLEdBQUcsU0FBZ0Q7d0JBQ3pELGFBQWEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNOzRCQUMvQyxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUM7NEJBQ2hCLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFVLEVBQUUsS0FBVTtnQ0FDckMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQztnQ0FDdEIsT0FBTyxJQUFJLENBQUMsQ0FBQztnQ0FDYixJQUFJLE9BQU8sS0FBSyxNQUFNLENBQUMsSUFBSTtvQ0FDMUIsT0FBTyxFQUFFLENBQUM7NkJBQ1gsQ0FBQyxDQUFDO3lCQUNILENBQUMsQ0FBQzt3QkFDSCxxQkFBTSxhQUFhLEVBQUE7O3dCQUFuQixTQUFtQixDQUFDO3dCQUNwQixJQUFJQSxlQUFNLENBQUMsMEJBQTBCLENBQUMsQ0FBQzt3QkFDdkMsc0JBQU8sTUFBTSxFQUFDOzs7O0tBQ2Q7SUFFSyxnQ0FBVSxHQUFoQjs7Ozs7Z0JBQ0MsSUFBSSxJQUFJLENBQUMsV0FBVztvQkFDbkIsc0JBQU87OztnQkFJUixJQUFJLHNCQUFzQixJQUFLLElBQUksQ0FBQyxHQUFXLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRTtvQkFDeEUsSUFBSSxDQUFDLG1CQUFtQixTQUFJLE1BQWMsQ0FBQyxpQkFBaUIsMENBQUUsR0FBRyxDQUFDO29CQUNsRSxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztvQkFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO2lCQUNyRDtxQkFBTTtvQkFDTixJQUFJLENBQUMsbUJBQW1CLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQztvQkFDMUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7b0JBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUNBQXVDLENBQUMsQ0FBQztpQkFDckQ7Z0JBRUQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUU7b0JBQ3hDLEtBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2lCQUN6QixDQUFDLENBQUM7Z0JBQ0gsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUU7b0JBQ3hDLEtBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2lCQUN6QixDQUFDLENBQUM7Z0JBQ0gsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUU7b0JBQzFDLEtBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2lCQUN6QixDQUFDLENBQUE7Z0JBRUYsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7Ozs7S0FDeEI7SUFFSyw0QkFBTSxHQUFaOzs7Ozs0QkFDQyxxQkFBTSxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUE7O3dCQUF6QixTQUF5QixDQUFDO3dCQUMxQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQTt3QkFFbkQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxVQUFPLElBQVc7Ozs7Ozs2Q0FDaEQsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFqQix3QkFBaUI7d0NBQ3BCLHFCQUFNLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBQTs7d0NBQXZCLFNBQXVCLENBQUM7Ozt3Q0FDbkIsZUFBZSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDO3dDQUNwRCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQzs0Q0FDM0MsSUFBSSxDQUFDLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBQSxDQUFDOzRDQUN4QyxLQUFLLENBQUMsVUFBQSxLQUFLLElBQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsRUFBRSxlQUFlLEVBQUUscUJBQXFCLEVBQUUsS0FBSyxDQUFDLENBQUEsRUFBRSxDQUFDLENBQUM7Ozs7NkJBQzVHLENBQUMsQ0FBQzs7Ozs7S0FDSDtJQUVLLGtDQUFZLEdBQWxCOzs7Ozs0QkFDYyxxQkFBTSxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUE7O3dCQUE1QixJQUFJLEdBQUcsU0FBcUI7d0JBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUM7Ozs7O0tBQzFEO0lBRUssa0NBQVksR0FBbEI7Ozs7NEJBQ0MscUJBQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUE7O3dCQUFsQyxTQUFrQyxDQUFDOzs7OztLQUNuQztJQUVELHNDQUFnQixHQUFoQixVQUFpQixPQUFZO1FBQzVCLElBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLElBQUksS0FBSyxRQUFRLENBQUM7UUFDOUMsUUFBUSxPQUFPLENBQUMsSUFBSTtZQUNuQixLQUFLLFFBQVE7Z0JBQ1osSUFBSSxDQUFDLGdCQUFnQiwrQkFBb0I7Z0JBQ3pDLE1BQU07WUFDUCxLQUFLLFFBQVE7Z0JBQ1osSUFBSSxDQUFDLGdCQUFnQiwrQkFBb0I7Z0JBQ3pDLE1BQU07WUFDUCxLQUFLLFFBQVE7Z0JBQ1osSUFBSSxDQUFDLGdCQUFnQiwrQkFBb0I7Z0JBQ3pDLE1BQU07WUFDUCxLQUFLLFNBQVM7Z0JBQ2IsSUFBSSxDQUFDLGdCQUFnQixnQ0FBcUI7Z0JBQzFDLE1BQU07U0FHUDtRQUNELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjO1lBQy9CLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0tBQ2xEO0lBRUQsOEJBQVEsR0FBUjtRQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0ZBQW9GLENBQUMsQ0FBQztLQUNsRztJQUVPLG1DQUFhLEdBQXJCO1FBQ0MsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQ0MscUJBQVksQ0FBQyxDQUFDO0tBQzVEO0lBRU8sbUNBQWEsR0FBckIsVUFBc0IsSUFBa0I7OztRQUV2QyxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksS0FBSztZQUMzQix5QkFBUSxJQUFZLENBQUMsVUFBVSwwQ0FBRSxRQUFRLDBDQUFFLEVBQUUsMENBQUUsRUFBRSxDQUFDOztZQUVsRCxhQUFRLElBQVksQ0FBQyxVQUFVLDBDQUFFLFFBQVEsQ0FBQztLQUMzQztJQUVELGlDQUFXLEdBQVgsVUFBWSxXQUFtQjtRQUEvQixpQkE4Q0M7UUE3Q0EsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ2hDLElBQUksSUFBSSxFQUFFO1lBQ1QsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN4QyxJQUFJLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUU7Z0JBQ3RELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztnQkFDbkQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztnQkFDOUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztnQkFDL0MsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztnQkFDL0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQzs7Z0JBRzlDLFVBQVUsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLGdCQUFnQixFQUFFLFVBQU8sRUFBTzs7d0JBQ3ZELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUMsY0FBYyxFQUFFLENBQUE7OztxQkFDM0MsQ0FBQyxDQUFDO2dCQUVILFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUM5QixVQUFVLElBQVksRUFBRSxLQUFhLEVBQUUsR0FBYTtvQkFDbkQsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFO3dCQUNwRCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO3dCQUMzQixJQUFJLGVBQWUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7OzRCQUV2QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFBO3lCQUN2Qzt3QkFDRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztxQkFDbEQ7aUJBQ0QsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2lCQUNaLENBQUE7Z0JBRUQsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDOzs7O2dCQUs3QixJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQzthQUM1QztZQUVELElBQUksUUFBUSxFQUFFO2dCQUNiLFFBQVEsQ0FBQyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsVUFBQyxPQUFZO29CQUMzQyxJQUFJLE9BQU87d0JBQ1YsS0FBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUNoQyxDQUFDLENBQUM7Z0JBQ0gsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ2pDO1NBQ0Q7S0FDRDtJQUVELHlDQUFtQixHQUFuQixVQUFvQixTQUFjO1FBQWxDLGlCQWlEQztRQWhEQSxTQUFTLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsVUFBQyxLQUFhLEVBQUUsRUFBTztZQUNsRixJQUFJLEtBQUssRUFBRTtnQkFDVixJQUFJLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxTQUFTLElBQUksS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLGFBQWEsRUFBRTtvQkFDL0QsSUFBSSxDQUFDLEtBQUksQ0FBQyxxQkFBcUIsRUFBRTt3QkFDaEMsS0FBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQzt3QkFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDO3FCQUMzRDtpQkFDRDtxQkFBTTtvQkFDTixNQUFNLElBQUksS0FBSyxDQUFDLGlHQUFpRyxDQUFDLENBQUE7aUJBQ2xIO2FBQ0Q7U0FDRCxDQUFDLENBQUM7UUFFSCxTQUFTLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxVQUFDLEtBQWEsRUFBRSxFQUFPO1lBQ3pFLElBQUksS0FBSyxJQUFJLEVBQUUsRUFBRTtnQkFDaEIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDL0I7U0FDRCxDQUFDLENBQUM7UUFFSCxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsVUFBQyxFQUFPLEVBQUUsTUFBVztZQUNyRCxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQzVCLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQzthQUNsRTtTQUNELENBQUMsQ0FBQztRQUVILFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLEVBQUUsRUFBRSxVQUFDLEVBQU8sRUFBRSxNQUFXOztZQUN0RCxJQUFJLFFBQUMsTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLElBQUksMENBQUUsTUFBTSxDQUFBLEVBQUU7Z0JBQzFCLE1BQU0sSUFBSSxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQzthQUM1QztZQUVELElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDNUIsS0FBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLG1CQUFtQixFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM5RTtTQUNELENBQUMsQ0FBQzs7UUFHSCxTQUFTLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxFQUFFLEVBQUUsVUFBQyxFQUFPLEVBQUUsTUFBVzs7WUFDcEQsSUFBSSxPQUFBLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxJQUFJLDBDQUFFLE1BQU0sS0FBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ25ELE1BQU0sSUFBSSxLQUFLLENBQUMsMkRBQTJELENBQUMsQ0FBQzthQUM3RTtZQUNELElBQUksV0FBVyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNwQixJQUFJLGNBQWMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzs7WUFFM0MsS0FBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsRUFBRSxFQUFFLFVBQUMsRUFBTyxFQUFFLE1BQVc7Z0JBQ3ZFLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLGNBQWMsQ0FBQyxDQUFDO2FBQ3RELENBQUMsQ0FBQztTQUNILENBQUMsQ0FBQztLQUNIO0lBRUQsb0NBQWMsR0FBZCxVQUFlLFNBQWM7UUFBN0IsaUJBZ0NDO1FBL0JBLFNBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLEVBQUUsRUFBRSxVQUFPLEVBQU8sRUFBRSxNQUFXOzs7Ozs7d0JBQzdELElBQUksUUFBQyxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsSUFBSSwwQ0FBRSxNQUFNLENBQUEsRUFBRTs0QkFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQzs0QkFDcEIsTUFBTSxJQUFJLEtBQUssQ0FBQyw4RUFBOEUsQ0FBQyxDQUFDO3lCQUNoRzt3QkFFRyxPQUFPLEdBQUcsSUFBSSxDQUFDO3dCQUNmLE1BQU0sR0FBb0IsRUFBRSxDQUFDOzhCQUNKLEVBQVgsS0FBQSxNQUFNLENBQUMsSUFBSTs7OzhCQUFYLGNBQVcsQ0FBQTt3QkFBbEIsR0FBRzs2QkFDVCxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUF0Qix3QkFBc0I7d0JBQ25CLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUMzQixxQkFBTSxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxFQUFBOzt3QkFBekIsU0FBeUIsQ0FBQzs7O3dCQUd0QixRQUFRLEdBQWtCLElBQUksQ0FBQzt3QkFDbkMsSUFBSTs0QkFDSCxRQUFRLEdBQUcsSUFBSSxhQUFhLENBQUMsU0FBUyxFQUFFQywrQ0FBNkIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDOzRCQUM1RSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3lCQUN0Qjt3QkFDRCxPQUFPLENBQUMsRUFBRTs0QkFDVCxPQUFPLEdBQUcsS0FBSyxDQUFDOzRCQUNoQixNQUFNLElBQUksS0FBSyxDQUFDLFVBQVEsR0FBRyxrREFBK0MsQ0FBQyxDQUFDO3lCQUM1RTt3QkFDRCxJQUFJLE9BQU8sRUFBRTs0QkFDWixXQUF1QixFQUFOLGlCQUFNLEVBQU4sb0JBQU0sRUFBTixJQUFNO2dDQUFsQixRQUFRLGVBQUE7Z0NBQ1osTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQzs2QkFBQTs7eUJBRS9EOzs7d0JBbkJlLElBQVcsQ0FBQTs7Ozs7YUFzQjdCLENBQUMsQ0FBQztLQUNIO0lBRUQscUNBQWUsR0FBZixVQUFnQixTQUFjO1FBQTlCLGlCQTRCQztRQTNCQSxTQUFTLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxFQUFFLEVBQUUsVUFBTyxFQUFPLEVBQUUsTUFBVzs7OztnQkFDeEQsaUJBQWlCLEdBQUksSUFBSSxDQUFDLEdBQVcsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO2dCQUM5RCxJQUFJLFFBQUMsTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLElBQUksMENBQUUsTUFBTSxDQUFBLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO29CQUNyRCxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF1QixNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBRyxDQUFDLENBQUE7b0JBQy9FLE1BQU0sSUFBSSxLQUFLLENBQUMsd0NBQXdDLENBQUMsQ0FBQztpQkFDMUQ7Z0JBQ0csSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDNUIsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQ25CLE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixJQUFJLE9BQU8sSUFBSSxpQkFBaUIsRUFBRTtvQkFDN0IsUUFBUSxHQUFHLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQztvQkFDL0MsYUFBYSxHQUFHLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDLGFBQWEsQ0FBQztvQkFDekQsY0FBYyxHQUFHLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDLGNBQWMsQ0FBQztvQkFDM0QsbUJBQW1CLEdBQUcsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUMsbUJBQW1CLENBQUM7b0JBQ3pFLElBQUksbUJBQW1CO3dCQUN0QixtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO3lCQUNyQyxJQUFJLGNBQWM7d0JBQ3RCLGNBQWMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7eUJBQ3pCLElBQUksYUFBYTt3QkFDckIsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO3lCQUNqQixJQUFJLFFBQVE7d0JBQ2hCLFFBQVEsRUFBRSxDQUFDOzt3QkFFWCxNQUFNLElBQUksS0FBSyxDQUFDLGFBQVcsT0FBTyx1Q0FBb0MsQ0FBQyxDQUFDO2lCQUN6RTs7b0JBQ0EsTUFBTSxJQUFJLEtBQUssQ0FBQyxhQUFXLE9BQU8sb0dBQWlHLENBQUMsQ0FBQzs7O2FBQ3RJLENBQUMsQ0FBQztLQUNIO0lBRUQscUNBQWUsR0FBZixVQUFnQixTQUFjO1FBQTlCLGlCQVlDO1FBWEEsU0FBUyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsRUFBRSxFQUFFLFVBQU8sRUFBTyxFQUFFLE1BQVc7Ozs7Z0JBQzlELElBQUksUUFBQyxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsSUFBSSwwQ0FBRSxNQUFNLENBQUEsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7b0JBQ3JELE1BQU0sSUFBSSxLQUFLLENBQUMsd0NBQXdDLENBQUMsQ0FBQztpQkFDMUQ7Z0JBQ0QsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLEtBQUssRUFBRTtvQkFDMUIsUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7b0JBQ3hELFFBQVEsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNyQzs7b0JBRUEsTUFBTSxJQUFJLEtBQUssQ0FBQyx5REFBeUQsQ0FBQyxDQUFDOzs7YUFDNUUsQ0FBQyxDQUFDO0tBQ0g7SUFFRCxvQ0FBYyxHQUFkLFVBQWUsU0FBYztRQUE3QixpQkF3RkM7O1FBdEZBLElBQUksWUFBWSxHQUFHLFVBQUMsTUFBZ0I7WUFDbkMsSUFBSSxLQUFJLENBQUMsVUFBVSxLQUFLLEtBQUs7Z0JBQzVCLE1BQU0sSUFBSSxLQUFLLENBQUMsb0VBQW9FLENBQUMsQ0FBQztZQUN2RixJQUFJLE1BQU0sR0FBRyxLQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsTUFBTSxDQUFDO1lBQ3pDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO2dCQUNuQixNQUFNLElBQUksS0FBSyxDQUFDLGtFQUFrRSxDQUFDLENBQUM7YUFDcEY7WUFDRCxJQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBQzNELElBQUksT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7Z0JBQ3hCLE1BQU0sSUFBSSxLQUFLLENBQUMsa0VBQWtFLENBQUMsQ0FBQzthQUNwRjtZQUVELElBQUksU0FBUyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDckUsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztZQUVsRSxJQUFJLGlCQUFpQixHQUFHLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQztZQUM5QyxJQUFJLGVBQWUsR0FBRyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzQyxJQUFJLEtBQUksQ0FBQyxnQkFBZ0IsSUFBSSxpQkFBaUIsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUMxRCxPQUFPLENBQUMsR0FBRyxDQUFDLHVHQUF1RyxDQUFDLENBQUE7Z0JBQ3BILElBQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDckMsS0FBd0IsVUFBaUIsRUFBakIsdUNBQWlCLEVBQWpCLCtCQUFpQixFQUFqQixJQUFpQixFQUFFO29CQUF0QyxJQUFNLFNBQVMsMEJBQUE7b0JBQ25CLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksU0FBUyxDQUFDLElBQUksSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxTQUFTLENBQUMsRUFBRSxFQUFFO3dCQUMvRSxPQUFPLENBQUMsR0FBRyxDQUFDLHFFQUFxRSxDQUFDLENBQUE7d0JBQ2xGLGVBQWUsR0FBRyxTQUFTLENBQUM7d0JBQzVCLE1BQU07cUJBQ047aUJBQ0Q7YUFDRDtZQUNELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQUU7O2dCQUVwRixJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3ZELElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDO29CQUNwQixNQUFNLElBQUksS0FBSyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7O2dCQUVwRCxJQUFJLFNBQVMsR0FBRyxlQUFlLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztnQkFDMUMsT0FBUSxTQUFTLElBQUksQ0FBQyxFQUFHLFNBQVMsRUFBRTtvQkFDbkMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQzt3QkFDOUIsTUFBTTtnQkFDUixTQUFTLEVBQUUsQ0FBQztnQkFDWixJQUFJLE9BQU8sR0FBRyxlQUFlLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztnQkFDeEMsT0FBUSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRyxPQUFPLEVBQUU7b0JBQ3hDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7d0JBQzVCLE1BQU07Z0JBQ1IsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQzlDLGVBQWUsQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFHLFNBQVMsQ0FBQztnQkFDdEMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsT0FBTyxDQUFDO2dCQUNsQyxlQUFlLEdBQUc7b0JBQ2pCLE1BQU0sRUFBRSxFQUFDLElBQUksRUFBRSxlQUFlLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFDO29CQUMxRCxJQUFJLEVBQUUsRUFBQyxJQUFJLEVBQUUsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBQztpQkFDcEQsQ0FBQzthQUNGO1lBQ0QsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3RSxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQVMsR0FBRyxRQUFRLEdBQUcsTUFBTSxFQUFFLGVBQWUsQ0FBQyxNQUFNLEVBQUUsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2pHLENBQUE7UUFFRCxTQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxFQUFFLEVBQUUsVUFBQyxFQUFPLEVBQUUsTUFBVyxJQUFPLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFN0YsU0FBUyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsRUFBRSxFQUFFLFVBQUMsRUFBTyxFQUFFLE1BQVc7O1lBRXhELFlBQVksQ0FDWCxDQUFDLEdBQUc7Z0JBQ0gsSUFBSSxHQUFHLFNBQVMsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNqRixDQUFDLENBQUE7UUFFRixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsTUFBTSxDQUFDOztRQUV6QyxJQUFJLHNCQUFzQixHQUFHLFVBQUMsS0FBYTtZQUMxQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDMUIsWUFBWSxDQUFDLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQTthQUMvQztpQkFBTSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDakMsWUFBWSxDQUFDLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQTthQUMvQztpQkFBTSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDakMsWUFBWSxDQUFDLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQTthQUMvQztpQkFBTTtnQkFDTixZQUFZLENBQUMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQTthQUM1QjtTQUNELENBQUE7UUFFRCxTQUFTLENBQUMsY0FBYyxDQUFDLGtCQUFrQixFQUFFO1lBQzVDLElBQUksQ0FBQyxHQUFHLGlEQUFpRCxDQUFBO1lBQ3pELFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLHNCQUFzQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFBO1NBQzVGLENBQUMsQ0FBQTtRQUdGLFNBQVMsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxrQkFBa0IsQ0FBQyxDQUFBO0tBRTlEO0lBRUQsdUNBQWlCLEdBQWpCO1FBQUEsaUJBb0JDO1FBbkJBLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFO1lBQy9CLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDbkcsSUFBSSxhQUFhLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtnQkFDekMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUNuRixTQUFTLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDaEQsU0FBUyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxLQUFLLElBQU8sS0FBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztpQkFDdEY7Z0JBQ0QsSUFBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUM7Z0JBQ3BDLE9BQU87YUFDUDtZQUNELElBQUksZ0JBQWdCLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxLQUFLO2dCQUNoRSxJQUFJLEtBQUssSUFBSSxLQUFJLENBQUMsbUJBQW1CLEVBQUU7b0JBQ3RDLElBQUksWUFBWSxHQUFHLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtvQkFDdkYsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDNUIsS0FBSSxDQUFDLGNBQWMsR0FBRyxZQUFZLENBQUMsU0FBUyxDQUFDO29CQUM3QyxLQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDO2lCQUNqQzthQUNELENBQUMsQ0FBQTtTQUNGO0tBQ0Q7SUFFRCx5Q0FBbUIsR0FBbkI7UUFBQSxpQkFxQ0M7UUFwQ0EsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRTs7WUFFL0IsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDOztZQUdqRCxJQUFJLFFBQU0sR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDO1lBQ2xELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxRQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDN0YsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDO1lBRWxELElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7O1lBRXhELFVBQVUsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLGNBQWMsRUFBRSxVQUFPLE1BQVc7OztvQkFDekQsSUFBSSxNQUFNLElBQUksT0FBTyxFQUFFO3dCQUN0QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDbEMsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxTQUFTLEVBQUU7NEJBQ3ZFLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO3lCQUMxQjtxQkFDRDt5QkFBTTt3QkFDTixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztxQkFDMUI7b0JBR0csS0FBSyxHQUFHLEVBQUUsQ0FBQztvQkFDZixXQUFvQyxFQUFwQixLQUFBLElBQUksQ0FBQyxlQUFlLEVBQXBCLGNBQW9CLEVBQXBCLElBQW9CLEVBQUU7d0JBQTNCLENBQUM7d0JBQ1gsS0FBSyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7cUJBQ2pCO29CQUNELElBQUksS0FBSyxJQUFJLEVBQUUsRUFBRTt3QkFDaEIsS0FBSyxJQUFJLEdBQUcsQ0FBQztxQkFDYjtvQkFDRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7aUJBQ3RDLENBQUMsQ0FBQztZQUNILFVBQVUsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLGtCQUFrQixFQUFFLFVBQU8sTUFBVzs7b0JBQzdELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQ25DLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDOzs7aUJBQzFCLENBQUMsQ0FBQztTQUNIO0tBQ0Q7SUFFRCwyQ0FBcUIsR0FBckI7UUFDQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUE7WUFDM0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLDZCQUFrQixDQUFBO1NBQzNDO0tBQ0Q7SUFFRCx1Q0FBaUIsR0FBakIsVUFBa0IsRUFBcUI7UUFBdkMsaUJBWUM7UUFYQSxFQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFDLFFBQTJCLEVBQUUsRUFBaUI7WUFDL0QsSUFBSSxLQUFJLENBQUMsUUFBUSxDQUFDLHFCQUFxQixFQUFFO2dCQUN4QyxJQUFNLE1BQU0sR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDO2dCQUNqRCxJQUFJLENBQUMsS0FBSSxDQUFDLFlBQVksSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRO29CQUNyQyxFQUFFLENBQUMsSUFBSSxJQUFJLE1BQU0sSUFBSSxFQUFFLENBQUMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ2hELEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7b0JBQ3pFLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFDcEIsT0FBTyxLQUFLLENBQUM7aUJBQ2I7YUFDRDtTQUNELENBQUMsQ0FBQztLQUNIO0lBQ0Ysa0JBQUM7QUFBRCxDQTNkQSxDQUF5Q0MsZUFBTSxHQTJkOUM7QUFFRDtJQUEwQiwrQkFBZ0I7SUFHekMscUJBQVksR0FBUSxFQUFFLE1BQW1CO1FBQXpDLFlBQ0Msa0JBQU0sR0FBRyxFQUFFLE1BQU0sQ0FBQyxTQUVsQjtRQURBLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDOztLQUNyQjtJQUVELDZCQUFPLEdBQVA7UUFBQSxpQkE0REM7UUEzRE0sSUFBQSxXQUFXLEdBQUssSUFBSSxZQUFULENBQVU7UUFFM0IsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRXBCLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLENBQUMsQ0FBQztRQUV2RCxJQUFJQyxnQkFBTyxDQUFDLFdBQVcsQ0FBQzthQUN0QixPQUFPLENBQUMsaUJBQWlCLENBQUM7YUFDMUIsT0FBTyxDQUFDLGdEQUFnRCxDQUFDO2FBQ3pELE9BQU8sQ0FBQyxVQUFDLElBQUk7WUFDYixJQUFJLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3BELElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsYUFBYSxJQUFJLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3BGLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBQSxLQUFLO2dCQUNsQixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO2dCQUMzQyxLQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQzNCLENBQUMsQ0FBQTtTQUNGLENBQUMsQ0FBQztRQUVKLElBQUlBLGdCQUFPLENBQUMsV0FBVyxDQUFDO2FBQ3RCLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQzthQUM1QixPQUFPLENBQUMsa0ZBQWtGLENBQUM7YUFDM0YsU0FBUyxDQUFDLFVBQUMsTUFBTTtZQUNqQixNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFlBQVksSUFBSSxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNwRixNQUFNLENBQUMsUUFBUSxDQUFDLFVBQUEsS0FBSztnQkFDcEIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztnQkFDMUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUMzQixDQUFDLENBQUE7U0FDRixDQUFDLENBQUM7UUFFSixJQUFJQSxnQkFBTyxDQUFDLFdBQVcsQ0FBQzthQUN0QixPQUFPLENBQUMsa0JBQWtCLENBQUM7YUFDM0IsT0FBTyxDQUFDLGtEQUFrRCxDQUFDO2FBQzNELFNBQVMsQ0FBQyxVQUFDLE1BQU07WUFDakIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxjQUFjLElBQUksZ0JBQWdCLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDeEYsTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFBLEtBQUs7Z0JBQ3BCLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7Z0JBQzVDLEtBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDM0IsQ0FBQyxDQUFBO1NBQ0YsQ0FBQyxDQUFDO1FBRUosSUFBSUEsZ0JBQU8sQ0FBQyxXQUFXLENBQUM7YUFDdEIsT0FBTyxDQUFDLDZDQUE2QyxDQUFDO2FBQ3RELE9BQU8sQ0FBQyw4R0FBOEcsQ0FBQzthQUN2SCxTQUFTLENBQUMsVUFBTyxNQUFNOzs7Z0JBQ3ZCLE1BQU0sQ0FBQyxhQUFhLENBQUMsd0JBQXdCLENBQUMsQ0FBQztnQkFDL0MsTUFBTSxDQUFDLE9BQU8sQ0FBQzs7Ozs7Z0NBQ2QsS0FBQSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQTtnQ0FBdUIscUJBQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxFQUFBOztnQ0FBcEYsR0FBcUIsbUJBQW1CLEdBQUcsU0FBeUMsQ0FBQztnQ0FDckYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQzs7OztxQkFDM0IsQ0FBQyxDQUFDOzs7YUFDSCxDQUFDO2FBQ0QsU0FBUyxDQUFDLFVBQUMsTUFBTTtZQUNqQixNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLHFCQUFxQixJQUFJLGdCQUFnQixDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDdEcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFNLEtBQUs7Ozs7OzRCQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLENBQUM7a0NBQy9DLEtBQUssSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQSxFQUEzRSx3QkFBMkU7NEJBQzlFLEtBQUEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUE7NEJBQXVCLHFCQUFNLElBQUksQ0FBQyxNQUFNLENBQUMscUJBQXFCLEVBQUUsRUFBQTs7NEJBQXBGLEdBQXFCLG1CQUFtQixHQUFHLFNBQXlDLENBQUM7Ozs0QkFDdEYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQzs7OztpQkFDM0IsQ0FBQyxDQUFDO1NBQ0gsQ0FBQyxDQUFBO0tBQ0g7SUFDRixrQkFBQztBQUFELENBckVBLENBQTBCQyx5QkFBZ0I7Ozs7In0=
