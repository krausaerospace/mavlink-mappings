"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REGISTRY = exports.UalbertaSysStatus = exports.RadioCalibration = exports.NavFilterBias = exports.UalbertaPilotMode = exports.UalbertaNavMode = exports.UalbertaAutopilotMode = void 0;
const mavlink_1 = require("./mavlink");
/**
 * Available autopilot modes for ualberta uav
 */
var UalbertaAutopilotMode;
(function (UalbertaAutopilotMode) {
    /**
     * Raw input pulse widts sent to output
     */
    UalbertaAutopilotMode[UalbertaAutopilotMode["MANUAL_DIRECT"] = 1] = "MANUAL_DIRECT";
    /**
     * Inputs are normalized using calibration, the converted back to raw pulse widths for output
     */
    UalbertaAutopilotMode[UalbertaAutopilotMode["MANUAL_SCALED"] = 2] = "MANUAL_SCALED";
    /**
     * dfsdfs
     */
    UalbertaAutopilotMode[UalbertaAutopilotMode["AUTO_PID_ATT"] = 3] = "AUTO_PID_ATT";
    /**
     * dfsfds
     */
    UalbertaAutopilotMode[UalbertaAutopilotMode["AUTO_PID_VEL"] = 4] = "AUTO_PID_VEL";
    /**
     * dfsdfsdfs
     */
    UalbertaAutopilotMode[UalbertaAutopilotMode["AUTO_PID_POS"] = 5] = "AUTO_PID_POS";
})(UalbertaAutopilotMode = exports.UalbertaAutopilotMode || (exports.UalbertaAutopilotMode = {}));
/**
 * Navigation filter mode
 */
var UalbertaNavMode;
(function (UalbertaNavMode) {
    UalbertaNavMode[UalbertaNavMode["AHRS_INIT"] = 1] = "AHRS_INIT";
    /**
     * AHRS mode
     */
    UalbertaNavMode[UalbertaNavMode["AHRS"] = 2] = "AHRS";
    /**
     * INS/GPS initialization mode
     */
    UalbertaNavMode[UalbertaNavMode["INS_GPS_INIT"] = 3] = "INS_GPS_INIT";
    /**
     * INS/GPS mode
     */
    UalbertaNavMode[UalbertaNavMode["INS_GPS"] = 4] = "INS_GPS";
})(UalbertaNavMode = exports.UalbertaNavMode || (exports.UalbertaNavMode = {}));
/**
 * Mode currently commanded by pilot
 */
var UalbertaPilotMode;
(function (UalbertaPilotMode) {
    /**
     * sdf
     */
    UalbertaPilotMode[UalbertaPilotMode["MANUAL"] = 1] = "MANUAL";
    /**
     * dfs
     */
    UalbertaPilotMode[UalbertaPilotMode["AUTO"] = 2] = "AUTO";
    /**
     * Rotomotion mode
     */
    UalbertaPilotMode[UalbertaPilotMode["ROTO"] = 3] = "ROTO";
})(UalbertaPilotMode = exports.UalbertaPilotMode || (exports.UalbertaPilotMode = {}));
/**
 * Accelerometer and Gyro biases from the navigation filter
 */
class NavFilterBias extends mavlink_1.MavLinkData {
    constructor() {
        super();
        this.usec = BigInt(0);
        this.accel0 = 0;
        this.accel1 = 0;
        this.accel2 = 0;
        this.gyro0 = 0;
        this.gyro1 = 0;
        this.gyro2 = 0;
    }
}
exports.NavFilterBias = NavFilterBias;
NavFilterBias.MSG_ID = 220;
NavFilterBias.MSG_NAME = 'NAV_FILTER_BIAS';
NavFilterBias.PAYLOAD_LENGTH = 32;
NavFilterBias.MAGIC_NUMBER = 34;
NavFilterBias.FIELDS = [
    new mavlink_1.MavLinkPacketField('usec', 'usec', 0, false, 8, 'uint64_t', ''),
    new mavlink_1.MavLinkPacketField('accel_0', 'accel0', 8, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('accel_1', 'accel1', 12, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('accel_2', 'accel2', 16, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('gyro_0', 'gyro0', 20, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('gyro_1', 'gyro1', 24, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('gyro_2', 'gyro2', 28, false, 4, 'float', ''),
];
/**
 * Complete set of calibration parameters for the radio
 */
class RadioCalibration extends mavlink_1.MavLinkData {
    constructor() {
        super();
        this.aileron = [];
        this.elevator = [];
        this.rudder = [];
        this.gyro = [];
        this.pitch = [];
        this.throttle = [];
    }
}
exports.RadioCalibration = RadioCalibration;
RadioCalibration.MSG_ID = 221;
RadioCalibration.MSG_NAME = 'RADIO_CALIBRATION';
RadioCalibration.PAYLOAD_LENGTH = 42;
RadioCalibration.MAGIC_NUMBER = 71;
RadioCalibration.FIELDS = [
    new mavlink_1.MavLinkPacketField('aileron', 'aileron', 0, false, 2, 'uint16_t[]', '', 3),
    new mavlink_1.MavLinkPacketField('elevator', 'elevator', 6, false, 2, 'uint16_t[]', '', 3),
    new mavlink_1.MavLinkPacketField('rudder', 'rudder', 12, false, 2, 'uint16_t[]', '', 3),
    new mavlink_1.MavLinkPacketField('gyro', 'gyro', 18, false, 2, 'uint16_t[]', '', 2),
    new mavlink_1.MavLinkPacketField('pitch', 'pitch', 22, false, 2, 'uint16_t[]', '', 5),
    new mavlink_1.MavLinkPacketField('throttle', 'throttle', 32, false, 2, 'uint16_t[]', '', 5),
];
/**
 * System status specific to ualberta uav
 */
class UalbertaSysStatus extends mavlink_1.MavLinkData {
    constructor() {
        super();
        this.mode = 0;
        this.navMode = 0;
        this.pilot = 0;
    }
}
exports.UalbertaSysStatus = UalbertaSysStatus;
UalbertaSysStatus.MSG_ID = 222;
UalbertaSysStatus.MSG_NAME = 'UALBERTA_SYS_STATUS';
UalbertaSysStatus.PAYLOAD_LENGTH = 3;
UalbertaSysStatus.MAGIC_NUMBER = 15;
UalbertaSysStatus.FIELDS = [
    new mavlink_1.MavLinkPacketField('mode', 'mode', 0, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('nav_mode', 'navMode', 1, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('pilot', 'pilot', 2, false, 1, 'uint8_t', ''),
];
exports.REGISTRY = {
    220: NavFilterBias,
    221: RadioCalibration,
    222: UalbertaSysStatus,
};
//# sourceMappingURL=ualberta.js.map