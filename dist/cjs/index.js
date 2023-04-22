"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Switcher = exports.Select = exports.Icon = exports.Modal = exports.Input = exports.Button = void 0;
// This file is used to export all the components from the library
var button_1 = require("./application/features/button-component/button");
Object.defineProperty(exports, "Button", { enumerable: true, get: function () { return __importDefault(button_1).default; } });
var input_1 = require("./application/features/input-component/input");
Object.defineProperty(exports, "Input", { enumerable: true, get: function () { return __importDefault(input_1).default; } });
var modal_1 = require("./application/features/modal-component/modal");
Object.defineProperty(exports, "Modal", { enumerable: true, get: function () { return __importDefault(modal_1).default; } });
var icon_1 = require("./application/features/icon-component/icon");
Object.defineProperty(exports, "Icon", { enumerable: true, get: function () { return __importDefault(icon_1).default; } });
var select_1 = require("./application/features/select-component/select");
Object.defineProperty(exports, "Select", { enumerable: true, get: function () { return __importDefault(select_1).default; } });
var switcher_1 = require("./application/features/switcher-component/switcher");
Object.defineProperty(exports, "Switcher", { enumerable: true, get: function () { return __importDefault(switcher_1).default; } });
//# sourceMappingURL=index.js.map