"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.storm32 = exports.ualberta = exports.development = exports.asluav = exports.icarous = exports.uavionix = exports.ardupilotmega = exports.common = exports.minimal = void 0;
__exportStar(require("mavlink-mappings-gen"), exports);
__exportStar(require("./lib/types"), exports);
__exportStar(require("./lib/mavlink"), exports);
__exportStar(require("./lib/magic-numbers"), exports);
exports.minimal = require("./lib/minimal");
exports.common = require("./lib/common");
exports.ardupilotmega = require("./lib/ardupilotmega");
exports.uavionix = require("./lib/uavionix");
exports.icarous = require("./lib/icarous");
exports.asluav = require("./lib/asluav");
exports.development = require("./lib/development");
exports.ualberta = require("./lib/ualberta");
exports.storm32 = require("./lib/storm32");
//# sourceMappingURL=index.js.map