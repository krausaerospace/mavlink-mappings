"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COMMANDS = exports.REGISTRY = exports.QshotDoConfigureCommand = exports.Storm32DoGimbalActionCommand = exports.Storm32DoGimbalManagerSetupCommand = exports.Storm32DoGimbalManagerControlPitchyawCommand = exports.ComponentPrearmStatus = exports.Storm32GimbalManagerCorrectRoll = exports.Storm32GimbalManagerControlPitchyaw = exports.Storm32GimbalManagerControl = exports.Storm32GimbalManagerStatus = exports.Storm32GimbalManagerInformation = exports.Storm32GimbalDeviceControl = exports.Storm32GimbalDeviceStatus = exports.MavCmd = exports.MavQshotMode = exports.MavStorm32GimbalAction = exports.MavStorm32GimbalManagerProfile = exports.MavStorm32GimbalManagerSetupFlags = exports.MavStorm32GimbalManagerClient = exports.MavStorm32GimbalManagerFlags = exports.MavStorm32GimbalManagerCapFlags = exports.MavStorm32GimbalDeviceErrorFlags = exports.MavStorm32GimbalDeviceFlags = exports.MavStorm32GimbalDeviceCapFlags = exports.MavStorm32CameraPrearmFlags = exports.MavStorm32GimbalPrearmFlags = exports.MavStorm32TunnelPayloadType = void 0;
const mavlink_1 = require("./mavlink");
const common_1 = require("./common");
/**
 * MAV_STORM32_TUNNEL_PAYLOAD_TYPE
 */
var MavStorm32TunnelPayloadType;
(function (MavStorm32TunnelPayloadType) {
    /**
     * Registered for STorM32 gimbal controller.
     */
    MavStorm32TunnelPayloadType[MavStorm32TunnelPayloadType["STORM32_CH1_IN"] = 200] = "STORM32_CH1_IN";
    /**
     * Registered for STorM32 gimbal controller.
     */
    MavStorm32TunnelPayloadType[MavStorm32TunnelPayloadType["STORM32_CH1_OUT"] = 201] = "STORM32_CH1_OUT";
    /**
     * Registered for STorM32 gimbal controller.
     */
    MavStorm32TunnelPayloadType[MavStorm32TunnelPayloadType["STORM32_CH2_IN"] = 202] = "STORM32_CH2_IN";
    /**
     * Registered for STorM32 gimbal controller.
     */
    MavStorm32TunnelPayloadType[MavStorm32TunnelPayloadType["STORM32_CH2_OUT"] = 203] = "STORM32_CH2_OUT";
    /**
     * Registered for STorM32 gimbal controller.
     */
    MavStorm32TunnelPayloadType[MavStorm32TunnelPayloadType["STORM32_CH3_IN"] = 204] = "STORM32_CH3_IN";
    /**
     * Registered for STorM32 gimbal controller.
     */
    MavStorm32TunnelPayloadType[MavStorm32TunnelPayloadType["STORM32_CH3_OUT"] = 205] = "STORM32_CH3_OUT";
    /**
     * Registered for STorM32 gimbal controller.
     */
    MavStorm32TunnelPayloadType[MavStorm32TunnelPayloadType["STORM32_RESERVED6"] = 206] = "STORM32_RESERVED6";
    /**
     * Registered for STorM32 gimbal controller.
     */
    MavStorm32TunnelPayloadType[MavStorm32TunnelPayloadType["STORM32_RESERVED7"] = 207] = "STORM32_RESERVED7";
    /**
     * Registered for STorM32 gimbal controller.
     */
    MavStorm32TunnelPayloadType[MavStorm32TunnelPayloadType["STORM32_RESERVED8"] = 208] = "STORM32_RESERVED8";
    /**
     * Registered for STorM32 gimbal controller.
     */
    MavStorm32TunnelPayloadType[MavStorm32TunnelPayloadType["STORM32_RESERVED9"] = 209] = "STORM32_RESERVED9";
})(MavStorm32TunnelPayloadType = exports.MavStorm32TunnelPayloadType || (exports.MavStorm32TunnelPayloadType = {}));
/**
 * STorM32 gimbal prearm check flags.
 */
var MavStorm32GimbalPrearmFlags;
(function (MavStorm32GimbalPrearmFlags) {
    /**
     * STorM32 gimbal is in normal state.
     */
    MavStorm32GimbalPrearmFlags[MavStorm32GimbalPrearmFlags["IS_NORMAL"] = 1] = "IS_NORMAL";
    /**
     * The IMUs are healthy and working normally.
     */
    MavStorm32GimbalPrearmFlags[MavStorm32GimbalPrearmFlags["IMUS_WORKING"] = 2] = "IMUS_WORKING";
    /**
     * The motors are active and working normally.
     */
    MavStorm32GimbalPrearmFlags[MavStorm32GimbalPrearmFlags["MOTORS_WORKING"] = 4] = "MOTORS_WORKING";
    /**
     * The encoders are healthy and working normally.
     */
    MavStorm32GimbalPrearmFlags[MavStorm32GimbalPrearmFlags["ENCODERS_WORKING"] = 8] = "ENCODERS_WORKING";
    /**
     * A battery voltage is applied and is in range.
     */
    MavStorm32GimbalPrearmFlags[MavStorm32GimbalPrearmFlags["VOLTAGE_OK"] = 16] = "VOLTAGE_OK";
    /**
     * ???.
     */
    MavStorm32GimbalPrearmFlags[MavStorm32GimbalPrearmFlags["VIRTUALCHANNELS_RECEIVING"] = 32] = "VIRTUALCHANNELS_RECEIVING";
    /**
     * Mavlink messages are being received.
     */
    MavStorm32GimbalPrearmFlags[MavStorm32GimbalPrearmFlags["MAVLINK_RECEIVING"] = 64] = "MAVLINK_RECEIVING";
    /**
     * The STorM32Link data indicates QFix.
     */
    MavStorm32GimbalPrearmFlags[MavStorm32GimbalPrearmFlags["STORM32LINK_QFIX"] = 128] = "STORM32LINK_QFIX";
    /**
     * The STorM32Link is working.
     */
    MavStorm32GimbalPrearmFlags[MavStorm32GimbalPrearmFlags["STORM32LINK_WORKING"] = 256] = "STORM32LINK_WORKING";
    /**
     * The camera has been found and is connected.
     */
    MavStorm32GimbalPrearmFlags[MavStorm32GimbalPrearmFlags["CAMERA_CONNECTED"] = 512] = "CAMERA_CONNECTED";
    /**
     * The signal on the AUX0 input pin is low.
     */
    MavStorm32GimbalPrearmFlags[MavStorm32GimbalPrearmFlags["AUX0_LOW"] = 1024] = "AUX0_LOW";
    /**
     * The signal on the AUX1 input pin is low.
     */
    MavStorm32GimbalPrearmFlags[MavStorm32GimbalPrearmFlags["AUX1_LOW"] = 2048] = "AUX1_LOW";
    /**
     * The NTLogger is working normally.
     */
    MavStorm32GimbalPrearmFlags[MavStorm32GimbalPrearmFlags["NTLOGGER_WORKING"] = 4096] = "NTLOGGER_WORKING";
})(MavStorm32GimbalPrearmFlags = exports.MavStorm32GimbalPrearmFlags || (exports.MavStorm32GimbalPrearmFlags = {}));
/**
 * STorM32 camera prearm check flags.
 */
var MavStorm32CameraPrearmFlags;
(function (MavStorm32CameraPrearmFlags) {
    /**
     * The camera has been found and is connected.
     */
    MavStorm32CameraPrearmFlags[MavStorm32CameraPrearmFlags["CONNECTED"] = 1] = "CONNECTED";
})(MavStorm32CameraPrearmFlags = exports.MavStorm32CameraPrearmFlags || (exports.MavStorm32CameraPrearmFlags = {}));
/**
 * Gimbal device capability flags.
 */
var MavStorm32GimbalDeviceCapFlags;
(function (MavStorm32GimbalDeviceCapFlags) {
    /**
     * Gimbal device supports a retracted position.
     */
    MavStorm32GimbalDeviceCapFlags[MavStorm32GimbalDeviceCapFlags["HAS_RETRACT"] = 1] = "HAS_RETRACT";
    /**
     * Gimbal device supports a horizontal, forward looking position, stabilized. Can also be used to reset
     * the gimbal's orientation.
     */
    MavStorm32GimbalDeviceCapFlags[MavStorm32GimbalDeviceCapFlags["HAS_NEUTRAL"] = 2] = "HAS_NEUTRAL";
    /**
     * Gimbal device supports rotating around roll axis.
     */
    MavStorm32GimbalDeviceCapFlags[MavStorm32GimbalDeviceCapFlags["HAS_ROLL_AXIS"] = 4] = "HAS_ROLL_AXIS";
    /**
     * Gimbal device supports to follow a roll angle relative to the vehicle.
     */
    MavStorm32GimbalDeviceCapFlags[MavStorm32GimbalDeviceCapFlags["HAS_ROLL_FOLLOW"] = 8] = "HAS_ROLL_FOLLOW";
    /**
     * Gimbal device supports locking to an roll angle (generally that's the default).
     */
    MavStorm32GimbalDeviceCapFlags[MavStorm32GimbalDeviceCapFlags["HAS_ROLL_LOCK"] = 16] = "HAS_ROLL_LOCK";
    /**
     * Gimbal device supports rotating around pitch axis.
     */
    MavStorm32GimbalDeviceCapFlags[MavStorm32GimbalDeviceCapFlags["HAS_PITCH_AXIS"] = 32] = "HAS_PITCH_AXIS";
    /**
     * Gimbal device supports to follow a pitch angle relative to the vehicle.
     */
    MavStorm32GimbalDeviceCapFlags[MavStorm32GimbalDeviceCapFlags["HAS_PITCH_FOLLOW"] = 64] = "HAS_PITCH_FOLLOW";
    /**
     * Gimbal device supports locking to an pitch angle (generally that's the default).
     */
    MavStorm32GimbalDeviceCapFlags[MavStorm32GimbalDeviceCapFlags["HAS_PITCH_LOCK"] = 128] = "HAS_PITCH_LOCK";
    /**
     * Gimbal device supports rotating around yaw axis.
     */
    MavStorm32GimbalDeviceCapFlags[MavStorm32GimbalDeviceCapFlags["HAS_YAW_AXIS"] = 256] = "HAS_YAW_AXIS";
    /**
     * Gimbal device supports to follow a yaw angle relative to the vehicle (generally that's the default).
     */
    MavStorm32GimbalDeviceCapFlags[MavStorm32GimbalDeviceCapFlags["HAS_YAW_FOLLOW"] = 512] = "HAS_YAW_FOLLOW";
    /**
     * Gimbal device supports locking to a heading angle.
     */
    MavStorm32GimbalDeviceCapFlags[MavStorm32GimbalDeviceCapFlags["HAS_YAW_LOCK"] = 1024] = "HAS_YAW_LOCK";
    /**
     * Gimbal device supports yawing/panning infinitely (e.g. using a slip ring).
     */
    MavStorm32GimbalDeviceCapFlags[MavStorm32GimbalDeviceCapFlags["HAS_INFINITE_YAW"] = 2048] = "HAS_INFINITE_YAW";
    /**
     * Gimbal device supports absolute yaw angles (this usually requires support by an autopilot, and can
     * be dynamic, i.e., go on and off during runtime).
     */
    MavStorm32GimbalDeviceCapFlags[MavStorm32GimbalDeviceCapFlags["HAS_ABSOLUTE_YAW"] = 65536] = "HAS_ABSOLUTE_YAW";
    /**
     * Gimbal device supports control via an RC input signal.
     */
    MavStorm32GimbalDeviceCapFlags[MavStorm32GimbalDeviceCapFlags["HAS_RC"] = 131072] = "HAS_RC";
})(MavStorm32GimbalDeviceCapFlags = exports.MavStorm32GimbalDeviceCapFlags || (exports.MavStorm32GimbalDeviceCapFlags = {}));
/**
 * Flags for gimbal device operation. Used for setting and reporting, unless specified otherwise.
 * Settings which are in violation of the capability flags are ignored by the gimbal device.
 */
var MavStorm32GimbalDeviceFlags;
(function (MavStorm32GimbalDeviceFlags) {
    /**
     * Retracted safe position (no stabilization), takes presedence over NEUTRAL flag. If supported by the
     * gimbal, the angles in the retracted position can be set in addition.
     */
    MavStorm32GimbalDeviceFlags[MavStorm32GimbalDeviceFlags["RETRACT"] = 1] = "RETRACT";
    /**
     * Neutral position (horizontal, forward looking, with stabiliziation).
     */
    MavStorm32GimbalDeviceFlags[MavStorm32GimbalDeviceFlags["NEUTRAL"] = 2] = "NEUTRAL";
    /**
     * Lock roll angle to absolute angle relative to horizon (not relative to drone). This is generally the
     * default.
     */
    MavStorm32GimbalDeviceFlags[MavStorm32GimbalDeviceFlags["ROLL_LOCK"] = 4] = "ROLL_LOCK";
    /**
     * Lock pitch angle to absolute angle relative to horizon (not relative to drone). This is generally
     * the default.
     */
    MavStorm32GimbalDeviceFlags[MavStorm32GimbalDeviceFlags["PITCH_LOCK"] = 8] = "PITCH_LOCK";
    /**
     * Lock yaw angle to absolute angle relative to earth (not relative to drone). When the YAW_ABSOLUTE
     * flag is set, the quaternion is in the Earth frame with the x-axis pointing North (yaw absolute),
     * else it is in the Earth frame rotated so that the x-axis is pointing forward (yaw relative to
     * vehicle).
     */
    MavStorm32GimbalDeviceFlags[MavStorm32GimbalDeviceFlags["YAW_LOCK"] = 16] = "YAW_LOCK";
    /**
     * Gimbal device can accept absolute yaw angle input. This flag cannot be set, is only for reporting
     * (attempts to set it are rejected by the gimbal device).
     */
    MavStorm32GimbalDeviceFlags[MavStorm32GimbalDeviceFlags["CAN_ACCEPT_YAW_ABSOLUTE"] = 256] = "CAN_ACCEPT_YAW_ABSOLUTE";
    /**
     * Yaw angle is absolute (is only accepted if CAN_ACCEPT_YAW_ABSOLUTE is set). If this flag is set, the
     * quaternion is in the Earth frame with the x-axis pointing North (yaw absolute), else it is in the
     * Earth frame rotated so that the x-axis is pointing forward (yaw relative to vehicle).
     */
    MavStorm32GimbalDeviceFlags[MavStorm32GimbalDeviceFlags["YAW_ABSOLUTE"] = 512] = "YAW_ABSOLUTE";
    /**
     * RC control. The RC input signal fed to the gimbal device exclusively controls the gimbal's
     * orientation. Overrides RC_MIXED flag if that is also set.
     */
    MavStorm32GimbalDeviceFlags[MavStorm32GimbalDeviceFlags["RC_EXCLUSIVE"] = 1024] = "RC_EXCLUSIVE";
    /**
     * RC control. The RC input signal fed to the gimbal device is mixed into the gimbal's orientation. Is
     * overriden by RC_EXCLUSIVE flag if that is also set.
     */
    MavStorm32GimbalDeviceFlags[MavStorm32GimbalDeviceFlags["RC_MIXED"] = 2048] = "RC_MIXED";
    /**
     * UINT16_MAX = ignore.
     */
    MavStorm32GimbalDeviceFlags[MavStorm32GimbalDeviceFlags["NONE"] = 65535] = "NONE";
})(MavStorm32GimbalDeviceFlags = exports.MavStorm32GimbalDeviceFlags || (exports.MavStorm32GimbalDeviceFlags = {}));
/**
 * Gimbal device error and condition flags (0 means no error or other condition).
 */
var MavStorm32GimbalDeviceErrorFlags;
(function (MavStorm32GimbalDeviceErrorFlags) {
    /**
     * Gimbal device is limited by hardware roll limit.
     */
    MavStorm32GimbalDeviceErrorFlags[MavStorm32GimbalDeviceErrorFlags["AT_ROLL_LIMIT"] = 1] = "AT_ROLL_LIMIT";
    /**
     * Gimbal device is limited by hardware pitch limit.
     */
    MavStorm32GimbalDeviceErrorFlags[MavStorm32GimbalDeviceErrorFlags["AT_PITCH_LIMIT"] = 2] = "AT_PITCH_LIMIT";
    /**
     * Gimbal device is limited by hardware yaw limit.
     */
    MavStorm32GimbalDeviceErrorFlags[MavStorm32GimbalDeviceErrorFlags["AT_YAW_LIMIT"] = 4] = "AT_YAW_LIMIT";
    /**
     * There is an error with the gimbal device's encoders.
     */
    MavStorm32GimbalDeviceErrorFlags[MavStorm32GimbalDeviceErrorFlags["ENCODER_ERROR"] = 8] = "ENCODER_ERROR";
    /**
     * There is an error with the gimbal device's power source.
     */
    MavStorm32GimbalDeviceErrorFlags[MavStorm32GimbalDeviceErrorFlags["POWER_ERROR"] = 16] = "POWER_ERROR";
    /**
     * There is an error with the gimbal device's motors.
     */
    MavStorm32GimbalDeviceErrorFlags[MavStorm32GimbalDeviceErrorFlags["MOTOR_ERROR"] = 32] = "MOTOR_ERROR";
    /**
     * There is an error with the gimbal device's software.
     */
    MavStorm32GimbalDeviceErrorFlags[MavStorm32GimbalDeviceErrorFlags["SOFTWARE_ERROR"] = 64] = "SOFTWARE_ERROR";
    /**
     * There is an error with the gimbal device's communication.
     */
    MavStorm32GimbalDeviceErrorFlags[MavStorm32GimbalDeviceErrorFlags["COMMS_ERROR"] = 128] = "COMMS_ERROR";
    /**
     * Gimbal device is currently calibrating (not an error).
     */
    MavStorm32GimbalDeviceErrorFlags[MavStorm32GimbalDeviceErrorFlags["CALIBRATION_RUNNING"] = 256] = "CALIBRATION_RUNNING";
    /**
     * Gimbal device is not assigned to a gimbal manager (not an error).
     */
    MavStorm32GimbalDeviceErrorFlags[MavStorm32GimbalDeviceErrorFlags["NO_MANAGER"] = 32768] = "NO_MANAGER";
})(MavStorm32GimbalDeviceErrorFlags = exports.MavStorm32GimbalDeviceErrorFlags || (exports.MavStorm32GimbalDeviceErrorFlags = {}));
/**
 * Gimbal manager capability flags.
 */
var MavStorm32GimbalManagerCapFlags;
(function (MavStorm32GimbalManagerCapFlags) {
    /**
     * The gimbal manager supports several profiles.
     */
    MavStorm32GimbalManagerCapFlags[MavStorm32GimbalManagerCapFlags["HAS_PROFILES"] = 1] = "HAS_PROFILES";
    /**
     * The gimbal manager supports changing the gimbal manager during run time, i.e. can be
     * enabled/disabled.
     */
    MavStorm32GimbalManagerCapFlags[MavStorm32GimbalManagerCapFlags["SUPPORTS_CHANGE"] = 2] = "SUPPORTS_CHANGE";
})(MavStorm32GimbalManagerCapFlags = exports.MavStorm32GimbalManagerCapFlags || (exports.MavStorm32GimbalManagerCapFlags = {}));
/**
 * Flags for gimbal manager operation. Used for setting and reporting, unless specified otherwise. If a
 * setting is accepted by the gimbal manger, is reported in the STORM32_GIMBAL_MANAGER_STATUS message.
 */
var MavStorm32GimbalManagerFlags;
(function (MavStorm32GimbalManagerFlags) {
    /**
     * 0 = ignore.
     */
    MavStorm32GimbalManagerFlags[MavStorm32GimbalManagerFlags["NONE"] = 0] = "NONE";
    /**
     * Request to set RC input to active, or report RC input is active. Implies RC mixed. RC exclusive is
     * achieved by setting all clients to inactive.
     */
    MavStorm32GimbalManagerFlags[MavStorm32GimbalManagerFlags["RC_ACTIVE"] = 1] = "RC_ACTIVE";
    /**
     * Request to set onboard/companion computer client to active, or report this client is active.
     */
    MavStorm32GimbalManagerFlags[MavStorm32GimbalManagerFlags["CLIENT_ONBOARD_ACTIVE"] = 2] = "CLIENT_ONBOARD_ACTIVE";
    /**
     * Request to set autopliot client to active, or report this client is active.
     */
    MavStorm32GimbalManagerFlags[MavStorm32GimbalManagerFlags["CLIENT_AUTOPILOT_ACTIVE"] = 4] = "CLIENT_AUTOPILOT_ACTIVE";
    /**
     * Request to set GCS client to active, or report this client is active.
     */
    MavStorm32GimbalManagerFlags[MavStorm32GimbalManagerFlags["CLIENT_GCS_ACTIVE"] = 8] = "CLIENT_GCS_ACTIVE";
    /**
     * Request to set camera client to active, or report this client is active.
     */
    MavStorm32GimbalManagerFlags[MavStorm32GimbalManagerFlags["CLIENT_CAMERA_ACTIVE"] = 16] = "CLIENT_CAMERA_ACTIVE";
    /**
     * Request to set GCS2 client to active, or report this client is active.
     */
    MavStorm32GimbalManagerFlags[MavStorm32GimbalManagerFlags["CLIENT_GCS2_ACTIVE"] = 32] = "CLIENT_GCS2_ACTIVE";
    /**
     * Request to set camera2 client to active, or report this client is active.
     */
    MavStorm32GimbalManagerFlags[MavStorm32GimbalManagerFlags["CLIENT_CAMERA2_ACTIVE"] = 64] = "CLIENT_CAMERA2_ACTIVE";
    /**
     * Request to set custom client to active, or report this client is active.
     */
    MavStorm32GimbalManagerFlags[MavStorm32GimbalManagerFlags["CLIENT_CUSTOM_ACTIVE"] = 128] = "CLIENT_CUSTOM_ACTIVE";
    /**
     * Request to set custom2 client to active, or report this client is active.
     */
    MavStorm32GimbalManagerFlags[MavStorm32GimbalManagerFlags["CLIENT_CUSTOM2_ACTIVE"] = 256] = "CLIENT_CUSTOM2_ACTIVE";
    /**
     * Request supervision. This flag is only for setting, it is not reported.
     */
    MavStorm32GimbalManagerFlags[MavStorm32GimbalManagerFlags["SET_SUPERVISON"] = 512] = "SET_SUPERVISON";
    /**
     * Release supervision. This flag is only for setting, it is not reported.
     */
    MavStorm32GimbalManagerFlags[MavStorm32GimbalManagerFlags["SET_RELEASE"] = 1024] = "SET_RELEASE";
})(MavStorm32GimbalManagerFlags = exports.MavStorm32GimbalManagerFlags || (exports.MavStorm32GimbalManagerFlags = {}));
/**
 * Gimbal manager client ID. In a prioritizing profile, the priorities are determined by the
 * implementation; they could e.g. be custom1 > onboard > GCS > autopilot/camera > GCS2 > custom2.
 */
var MavStorm32GimbalManagerClient;
(function (MavStorm32GimbalManagerClient) {
    /**
     * For convenience.
     */
    MavStorm32GimbalManagerClient[MavStorm32GimbalManagerClient["NONE"] = 0] = "NONE";
    /**
     * This is the onboard/companion computer client.
     */
    MavStorm32GimbalManagerClient[MavStorm32GimbalManagerClient["ONBOARD"] = 1] = "ONBOARD";
    /**
     * This is the autopilot client.
     */
    MavStorm32GimbalManagerClient[MavStorm32GimbalManagerClient["AUTOPILOT"] = 2] = "AUTOPILOT";
    /**
     * This is the GCS client.
     */
    MavStorm32GimbalManagerClient[MavStorm32GimbalManagerClient["GCS"] = 3] = "GCS";
    /**
     * This is the camera client.
     */
    MavStorm32GimbalManagerClient[MavStorm32GimbalManagerClient["CAMERA"] = 4] = "CAMERA";
    /**
     * This is the GCS2 client.
     */
    MavStorm32GimbalManagerClient[MavStorm32GimbalManagerClient["GCS2"] = 5] = "GCS2";
    /**
     * This is the camera2 client.
     */
    MavStorm32GimbalManagerClient[MavStorm32GimbalManagerClient["CAMERA2"] = 6] = "CAMERA2";
    /**
     * This is the custom client.
     */
    MavStorm32GimbalManagerClient[MavStorm32GimbalManagerClient["CUSTOM"] = 7] = "CUSTOM";
    /**
     * This is the custom2 client.
     */
    MavStorm32GimbalManagerClient[MavStorm32GimbalManagerClient["CUSTOM2"] = 8] = "CUSTOM2";
})(MavStorm32GimbalManagerClient = exports.MavStorm32GimbalManagerClient || (exports.MavStorm32GimbalManagerClient = {}));
/**
 * Flags for gimbal manager set up. Used for setting and reporting, unless specified otherwise.
 */
var MavStorm32GimbalManagerSetupFlags;
(function (MavStorm32GimbalManagerSetupFlags) {
    /**
     * Enable gimbal manager. This flag is only for setting, is not reported.
     */
    MavStorm32GimbalManagerSetupFlags[MavStorm32GimbalManagerSetupFlags["ENABLE"] = 16384] = "ENABLE";
    /**
     * Disable gimbal manager. This flag is only for setting, is not reported.
     */
    MavStorm32GimbalManagerSetupFlags[MavStorm32GimbalManagerSetupFlags["DISABLE"] = 32768] = "DISABLE";
})(MavStorm32GimbalManagerSetupFlags = exports.MavStorm32GimbalManagerSetupFlags || (exports.MavStorm32GimbalManagerSetupFlags = {}));
/**
 * Gimbal manager profiles. Only standard profiles are defined. Any implementation can define it's own
 * profile in addition, and should use enum values > 16.
 */
var MavStorm32GimbalManagerProfile;
(function (MavStorm32GimbalManagerProfile) {
    /**
     * Default profile. Implementation specific.
     */
    MavStorm32GimbalManagerProfile[MavStorm32GimbalManagerProfile["DEFAULT"] = 0] = "DEFAULT";
    /**
     * Custom profile. Configurable profile according to the STorM32 definition. Is configured with
     * STORM32_GIMBAL_MANAGER_PROFIL.
     */
    MavStorm32GimbalManagerProfile[MavStorm32GimbalManagerProfile["CUSTOM"] = 1] = "CUSTOM";
    /**
     * Default cooperative profile. Uses STorM32 custom profile with default settings to achieve
     * cooperative behavior.
     */
    MavStorm32GimbalManagerProfile[MavStorm32GimbalManagerProfile["COOPERATIVE"] = 2] = "COOPERATIVE";
    /**
     * Default exclusive profile. Uses STorM32 custom profile with default settings to achieve exclusive
     * behavior.
     */
    MavStorm32GimbalManagerProfile[MavStorm32GimbalManagerProfile["EXCLUSIVE"] = 3] = "EXCLUSIVE";
    /**
     * Default priority profile with cooperative behavior for equal priority. Uses STorM32 custom profile
     * with default settings to achieve priority-based behavior.
     */
    MavStorm32GimbalManagerProfile[MavStorm32GimbalManagerProfile["PRIORITY_COOPERATIVE"] = 4] = "PRIORITY_COOPERATIVE";
    /**
     * Default priority profile with exclusive behavior for equal priority. Uses STorM32 custom profile
     * with default settings to achieve priority-based behavior.
     */
    MavStorm32GimbalManagerProfile[MavStorm32GimbalManagerProfile["PRIORITY_EXCLUSIVE"] = 5] = "PRIORITY_EXCLUSIVE";
})(MavStorm32GimbalManagerProfile = exports.MavStorm32GimbalManagerProfile || (exports.MavStorm32GimbalManagerProfile = {}));
/**
 * Gimbal actions.
 */
var MavStorm32GimbalAction;
(function (MavStorm32GimbalAction) {
    /**
     * Trigger the gimbal device to recenter the gimbal.
     */
    MavStorm32GimbalAction[MavStorm32GimbalAction["RECENTER"] = 1] = "RECENTER";
    /**
     * Trigger the gimbal device to run a calibration.
     */
    MavStorm32GimbalAction[MavStorm32GimbalAction["CALIBRATION"] = 2] = "CALIBRATION";
    /**
     * Trigger gimbal device to (re)discover the gimbal manager during run time.
     */
    MavStorm32GimbalAction[MavStorm32GimbalAction["DISCOVER_MANAGER"] = 3] = "DISCOVER_MANAGER";
})(MavStorm32GimbalAction = exports.MavStorm32GimbalAction || (exports.MavStorm32GimbalAction = {}));
/**
 * Enumeration of possible shot modes.
 */
var MavQshotMode;
(function (MavQshotMode) {
    /**
     * Undefined shot mode. Can be used to determine if qshots should be used or not.
     */
    MavQshotMode[MavQshotMode["UNDEFINED"] = 0] = "UNDEFINED";
    /**
     * Start normal gimbal operation. Is usally used to return back from a shot.
     */
    MavQshotMode[MavQshotMode["DEFAULT"] = 1] = "DEFAULT";
    /**
     * Load and keep safe gimbal position and stop stabilization.
     */
    MavQshotMode[MavQshotMode["GIMBAL_RETRACT"] = 2] = "GIMBAL_RETRACT";
    /**
     * Load neutral gimbal position and keep it while stabilizing.
     */
    MavQshotMode[MavQshotMode["GIMBAL_NEUTRAL"] = 3] = "GIMBAL_NEUTRAL";
    /**
     * Start mission with gimbal control.
     */
    MavQshotMode[MavQshotMode["GIMBAL_MISSION"] = 4] = "GIMBAL_MISSION";
    /**
     * Start RC gimbal control.
     */
    MavQshotMode[MavQshotMode["GIMBAL_RC_CONTROL"] = 5] = "GIMBAL_RC_CONTROL";
    /**
     * Start gimbal tracking the point specified by Lat, Lon, Alt.
     */
    MavQshotMode[MavQshotMode["POI_TARGETING"] = 6] = "POI_TARGETING";
    /**
     * Start gimbal tracking the system with specified system ID.
     */
    MavQshotMode[MavQshotMode["SYSID_TARGETING"] = 7] = "SYSID_TARGETING";
    /**
     * Start 2-point cable cam quick shot.
     */
    MavQshotMode[MavQshotMode["CABLECAM_2POINT"] = 8] = "CABLECAM_2POINT";
    /**
     * Start gimbal tracking the home location.
     */
    MavQshotMode[MavQshotMode["HOME_TARGETING"] = 9] = "HOME_TARGETING";
})(MavQshotMode = exports.MavQshotMode || (exports.MavQshotMode = {}));
/**
 * MAV_CMD
 */
var MavCmd;
(function (MavCmd) {
    /**
     * Command to a gimbal manager to control the gimbal tilt and pan angles. It is possible to set
     * combinations of the values below. E.g. an angle as well as a desired angular rate can be used to get
     * to this angle at a certain angular rate, or an angular rate only will result in continuous turning.
     * NaN is to be used to signal unset. A gimbal device is never to react to this command.
     * @param1 Pitch angle[deg] (min: -180, max: 180) Pitch/tilt angle (positive: tilt up, NaN to be ignored).
     * @param2 Yaw angle[deg] (min: -180, max: 180) Yaw/pan angle (positive: pan to the right, the frame is determined by the STORM32_GIMBAL_DEVICE_FLAGS_YAW_ABSOLUTE flag, NaN to be ignored).
     * @param3 Pitch rate[deg/s] Pitch/tilt rate (positive: tilt up, NaN to be ignored).
     * @param4 Yaw rate[deg/s] Yaw/pan rate (positive: pan to the right, the frame is determined by the STORM32_GIMBAL_DEVICE_FLAGS_YAW_ABSOLUTE flag, NaN to be ignored).
     * @param5 Gimbal device flags Gimbal device flags.
     * @param6 Gimbal manager flags Gimbal manager flags.
     * @param7 Gimbal ID and client ID Gimbal ID of the gimbal manager to address (component ID or 1-6 for non-MAVLink gimbal, 0 for all gimbals, send command multiple times for more than one but not all gimbals). The client is copied into bits 8-15.
     */
    MavCmd[MavCmd["STORM32_DO_GIMBAL_MANAGER_CONTROL_PITCHYAW"] = 60002] = "STORM32_DO_GIMBAL_MANAGER_CONTROL_PITCHYAW";
    /**
     * Command to configure a gimbal manager. A gimbal device is never to react to this command. The
     * selected profile is reported in the STORM32_GIMBAL_MANAGER_STATUS message.
     * @param1 Profile Gimbal manager profile (0 = default).
     * @param2 Setup flags Gimbal manager setup flags (0 = none).
     * @param7 Gimbal ID Gimbal ID of the gimbal manager to address (component ID or 1-6 for non-MAVLink gimbal, 0 for all gimbals). Send command multiple times for more than one but not all gimbals.
     */
    MavCmd[MavCmd["STORM32_DO_GIMBAL_MANAGER_SETUP"] = 60010] = "STORM32_DO_GIMBAL_MANAGER_SETUP";
    /**
     * Command to initiate gimbal actions. Usually performed by the gimbal device, but some can also be
     * done by the gimbal manager. It is hence best to broadcast this command.
     * @param1 Action Gimbal action to initiate (0 = none).
     * @param7 Gimbal ID Gimbal ID of the gimbal to address (component ID or 1-6 for non-MAVLink gimbal, 0 for all gimbals). Send command multiple times for more than one but not all gimbals.
     */
    MavCmd[MavCmd["STORM32_DO_GIMBAL_ACTION"] = 60011] = "STORM32_DO_GIMBAL_ACTION";
    /**
     * Command to set the shot manager mode.
     * @param1 Mode Set shot mode.
     * @param2 Shot state or command Set shot state or command. The allowed values are specific to the selected shot mode.
     */
    MavCmd[MavCmd["QSHOT_DO_CONFIGURE"] = 60020] = "QSHOT_DO_CONFIGURE";
})(MavCmd = exports.MavCmd || (exports.MavCmd = {}));
/**
 * Message reporting the current status of a gimbal device. This message should be broadcasted by a
 * gimbal device component at a low regular rate (e.g. 4 Hz). For higher rates it should be emitted
 * with a target.
 */
class Storm32GimbalDeviceStatus extends mavlink_1.MavLinkData {
    constructor() {
        super();
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.timeBootMs = 0;
        this.flags = MavStorm32GimbalDeviceFlags[Object.keys(MavStorm32GimbalDeviceFlags)[0]];
        this.q = [];
        this.angularVelocityX = 0;
        this.angularVelocityY = 0;
        this.angularVelocityZ = 0;
        this.yawAbsolute = 0;
        this.failureFlags = common_1.GimbalDeviceErrorFlags[Object.keys(common_1.GimbalDeviceErrorFlags)[0]];
    }
}
exports.Storm32GimbalDeviceStatus = Storm32GimbalDeviceStatus;
Storm32GimbalDeviceStatus.MSG_ID = 60001;
Storm32GimbalDeviceStatus.MSG_NAME = 'STORM32_GIMBAL_DEVICE_STATUS';
Storm32GimbalDeviceStatus.PAYLOAD_LENGTH = 42;
Storm32GimbalDeviceStatus.MAGIC_NUMBER = 186;
Storm32GimbalDeviceStatus.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_boot_ms', 'timeBootMs', 0, false, 4, 'uint32_t', 'ms'),
    new mavlink_1.MavLinkPacketField('q', 'q', 4, false, 4, 'float[]', '', 4),
    new mavlink_1.MavLinkPacketField('angular_velocity_x', 'angularVelocityX', 20, false, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('angular_velocity_y', 'angularVelocityY', 24, false, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('angular_velocity_z', 'angularVelocityZ', 28, false, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('yaw_absolute', 'yawAbsolute', 32, false, 4, 'float', 'deg'),
    new mavlink_1.MavLinkPacketField('flags', 'flags', 36, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('failure_flags', 'failureFlags', 38, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 40, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 41, false, 1, 'uint8_t', ''),
];
/**
 * Message to a gimbal device to control its attitude. This message is to be sent from the gimbal
 * manager to the gimbal device. Angles and rates can be set to NaN according to use case.
 */
class Storm32GimbalDeviceControl extends mavlink_1.MavLinkData {
    constructor() {
        super();
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.flags = MavStorm32GimbalDeviceFlags[Object.keys(MavStorm32GimbalDeviceFlags)[0]];
        this.q = [];
        this.angularVelocityX = 0;
        this.angularVelocityY = 0;
        this.angularVelocityZ = 0;
    }
}
exports.Storm32GimbalDeviceControl = Storm32GimbalDeviceControl;
Storm32GimbalDeviceControl.MSG_ID = 60002;
Storm32GimbalDeviceControl.MSG_NAME = 'STORM32_GIMBAL_DEVICE_CONTROL';
Storm32GimbalDeviceControl.PAYLOAD_LENGTH = 32;
Storm32GimbalDeviceControl.MAGIC_NUMBER = 69;
Storm32GimbalDeviceControl.FIELDS = [
    new mavlink_1.MavLinkPacketField('q', 'q', 0, false, 4, 'float[]', '', 4),
    new mavlink_1.MavLinkPacketField('angular_velocity_x', 'angularVelocityX', 16, false, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('angular_velocity_y', 'angularVelocityY', 20, false, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('angular_velocity_z', 'angularVelocityZ', 24, false, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('flags', 'flags', 28, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 30, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 31, false, 1, 'uint8_t', ''),
];
/**
 * Information about a gimbal manager. This message should be requested by a ground station using
 * MAV_CMD_REQUEST_MESSAGE. It mirrors some fields of the STORM32_GIMBAL_DEVICE_INFORMATION message,
 * but not all. If the additional information is desired, also STORM32_GIMBAL_DEVICE_INFORMATION should
 * be requested.
 */
class Storm32GimbalManagerInformation extends mavlink_1.MavLinkData {
    constructor() {
        super();
        this.gimbalId = 0;
        this.deviceCapFlags = MavStorm32GimbalDeviceCapFlags[Object.keys(MavStorm32GimbalDeviceCapFlags)[0]];
        this.managerCapFlags = MavStorm32GimbalManagerCapFlags[Object.keys(MavStorm32GimbalManagerCapFlags)[0]];
        this.rollMin = 0;
        this.rollMax = 0;
        this.pitchMin = 0;
        this.pitchMax = 0;
        this.yawMin = 0;
        this.yawMax = 0;
    }
}
exports.Storm32GimbalManagerInformation = Storm32GimbalManagerInformation;
Storm32GimbalManagerInformation.MSG_ID = 60010;
Storm32GimbalManagerInformation.MSG_NAME = 'STORM32_GIMBAL_MANAGER_INFORMATION';
Storm32GimbalManagerInformation.PAYLOAD_LENGTH = 33;
Storm32GimbalManagerInformation.MAGIC_NUMBER = 208;
Storm32GimbalManagerInformation.FIELDS = [
    new mavlink_1.MavLinkPacketField('device_cap_flags', 'deviceCapFlags', 0, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('manager_cap_flags', 'managerCapFlags', 4, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('roll_min', 'rollMin', 8, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('roll_max', 'rollMax', 12, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('pitch_min', 'pitchMin', 16, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('pitch_max', 'pitchMax', 20, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('yaw_min', 'yawMin', 24, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('yaw_max', 'yawMax', 28, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('gimbal_id', 'gimbalId', 32, false, 1, 'uint8_t', ''),
];
/**
 * Message reporting the current status of a gimbal manager. This message should be broadcast at a low
 * regular rate (e.g. 1 Hz, may be increase momentarily to e.g. 5 Hz for a period of 1 sec after a
 * change).
 */
class Storm32GimbalManagerStatus extends mavlink_1.MavLinkData {
    constructor() {
        super();
        this.gimbalId = 0;
        this.supervisor = MavStorm32GimbalManagerClient[Object.keys(MavStorm32GimbalManagerClient)[0]];
        this.deviceFlags = MavStorm32GimbalDeviceFlags[Object.keys(MavStorm32GimbalDeviceFlags)[0]];
        this.managerFlags = MavStorm32GimbalManagerFlags[Object.keys(MavStorm32GimbalManagerFlags)[0]];
        this.profile = MavStorm32GimbalManagerProfile[Object.keys(MavStorm32GimbalManagerProfile)[0]];
    }
}
exports.Storm32GimbalManagerStatus = Storm32GimbalManagerStatus;
Storm32GimbalManagerStatus.MSG_ID = 60011;
Storm32GimbalManagerStatus.MSG_NAME = 'STORM32_GIMBAL_MANAGER_STATUS';
Storm32GimbalManagerStatus.PAYLOAD_LENGTH = 7;
Storm32GimbalManagerStatus.MAGIC_NUMBER = 183;
Storm32GimbalManagerStatus.FIELDS = [
    new mavlink_1.MavLinkPacketField('device_flags', 'deviceFlags', 0, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('manager_flags', 'managerFlags', 2, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('gimbal_id', 'gimbalId', 4, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('supervisor', 'supervisor', 5, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('profile', 'profile', 6, false, 1, 'uint8_t', ''),
];
/**
 * Message to a gimbal manager to control the gimbal attitude. Angles and rates can be set to NaN
 * according to use case. A gimbal device is never to react to this message.
 */
class Storm32GimbalManagerControl extends mavlink_1.MavLinkData {
    constructor() {
        super();
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.gimbalId = 0;
        this.client = MavStorm32GimbalManagerClient[Object.keys(MavStorm32GimbalManagerClient)[0]];
        this.deviceFlags = MavStorm32GimbalDeviceFlags[Object.keys(MavStorm32GimbalDeviceFlags)[0]];
        this.managerFlags = MavStorm32GimbalManagerFlags[Object.keys(MavStorm32GimbalManagerFlags)[0]];
        this.q = [];
        this.angularVelocityX = 0;
        this.angularVelocityY = 0;
        this.angularVelocityZ = 0;
    }
}
exports.Storm32GimbalManagerControl = Storm32GimbalManagerControl;
Storm32GimbalManagerControl.MSG_ID = 60012;
Storm32GimbalManagerControl.MSG_NAME = 'STORM32_GIMBAL_MANAGER_CONTROL';
Storm32GimbalManagerControl.PAYLOAD_LENGTH = 36;
Storm32GimbalManagerControl.MAGIC_NUMBER = 99;
Storm32GimbalManagerControl.FIELDS = [
    new mavlink_1.MavLinkPacketField('q', 'q', 0, false, 4, 'float[]', '', 4),
    new mavlink_1.MavLinkPacketField('angular_velocity_x', 'angularVelocityX', 16, false, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('angular_velocity_y', 'angularVelocityY', 20, false, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('angular_velocity_z', 'angularVelocityZ', 24, false, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('device_flags', 'deviceFlags', 28, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('manager_flags', 'managerFlags', 30, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 32, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 33, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('gimbal_id', 'gimbalId', 34, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('client', 'client', 35, false, 1, 'uint8_t', ''),
];
/**
 * Message to a gimbal manager to control the gimbal tilt and pan angles. Angles and rates can be set
 * to NaN according to use case. A gimbal device is never to react to this message.
 */
class Storm32GimbalManagerControlPitchyaw extends mavlink_1.MavLinkData {
    constructor() {
        super();
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.gimbalId = 0;
        this.client = MavStorm32GimbalManagerClient[Object.keys(MavStorm32GimbalManagerClient)[0]];
        this.deviceFlags = MavStorm32GimbalDeviceFlags[Object.keys(MavStorm32GimbalDeviceFlags)[0]];
        this.managerFlags = MavStorm32GimbalManagerFlags[Object.keys(MavStorm32GimbalManagerFlags)[0]];
        this.pitch = 0;
        this.yaw = 0;
        this.pitchRate = 0;
        this.yawRate = 0;
    }
}
exports.Storm32GimbalManagerControlPitchyaw = Storm32GimbalManagerControlPitchyaw;
Storm32GimbalManagerControlPitchyaw.MSG_ID = 60013;
Storm32GimbalManagerControlPitchyaw.MSG_NAME = 'STORM32_GIMBAL_MANAGER_CONTROL_PITCHYAW';
Storm32GimbalManagerControlPitchyaw.PAYLOAD_LENGTH = 24;
Storm32GimbalManagerControlPitchyaw.MAGIC_NUMBER = 129;
Storm32GimbalManagerControlPitchyaw.FIELDS = [
    new mavlink_1.MavLinkPacketField('pitch', 'pitch', 0, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('yaw', 'yaw', 4, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('pitch_rate', 'pitchRate', 8, false, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('yaw_rate', 'yawRate', 12, false, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('device_flags', 'deviceFlags', 16, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('manager_flags', 'managerFlags', 18, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 20, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 21, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('gimbal_id', 'gimbalId', 22, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('client', 'client', 23, false, 1, 'uint8_t', ''),
];
/**
 * Message to a gimbal manager to correct the gimbal roll angle. This message is typically used to
 * manually correct for a tilted horizon in operation. A gimbal device is never to react to this
 * message.
 */
class Storm32GimbalManagerCorrectRoll extends mavlink_1.MavLinkData {
    constructor() {
        super();
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.gimbalId = 0;
        this.client = MavStorm32GimbalManagerClient[Object.keys(MavStorm32GimbalManagerClient)[0]];
        this.roll = 0;
    }
}
exports.Storm32GimbalManagerCorrectRoll = Storm32GimbalManagerCorrectRoll;
Storm32GimbalManagerCorrectRoll.MSG_ID = 60014;
Storm32GimbalManagerCorrectRoll.MSG_NAME = 'STORM32_GIMBAL_MANAGER_CORRECT_ROLL';
Storm32GimbalManagerCorrectRoll.PAYLOAD_LENGTH = 8;
Storm32GimbalManagerCorrectRoll.MAGIC_NUMBER = 134;
Storm32GimbalManagerCorrectRoll.FIELDS = [
    new mavlink_1.MavLinkPacketField('roll', 'roll', 0, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 4, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 5, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('gimbal_id', 'gimbalId', 6, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('client', 'client', 7, false, 1, 'uint8_t', ''),
];
/**
 * Message reporting the status of the prearm checks. The flags are component specific.
 */
class ComponentPrearmStatus extends mavlink_1.MavLinkData {
    constructor() {
        super();
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.enabledFlags = 0;
        this.failFlags = 0;
    }
}
exports.ComponentPrearmStatus = ComponentPrearmStatus;
ComponentPrearmStatus.MSG_ID = 60025;
ComponentPrearmStatus.MSG_NAME = 'COMPONENT_PREARM_STATUS';
ComponentPrearmStatus.PAYLOAD_LENGTH = 10;
ComponentPrearmStatus.MAGIC_NUMBER = 20;
ComponentPrearmStatus.FIELDS = [
    new mavlink_1.MavLinkPacketField('enabled_flags', 'enabledFlags', 0, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('fail_flags', 'failFlags', 4, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 8, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 9, false, 1, 'uint8_t', ''),
];
const common_2 = require("./common");
/**
 * Command to a gimbal manager to control the gimbal tilt and pan angles. It is possible to set
 * combinations of the values below. E.g. an angle as well as a desired angular rate can be used to get
 * to this angle at a certain angular rate, or an angular rate only will result in continuous turning.
 * NaN is to be used to signal unset. A gimbal device is never to react to this command.
 */
class Storm32DoGimbalManagerControlPitchyawCommand extends common_2.CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.STORM32_DO_GIMBAL_MANAGER_CONTROL_PITCHYAW;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Pitch/tilt angle (positive: tilt up, NaN to be ignored).
     *
     * @units deg
     * @min: -180
     * @max: 180
     */
    get pitchAngle() {
        return this._param1;
    }
    set pitchAngle(value) {
        this._param1 = value;
    }
    /**
     * Yaw/pan angle (positive: pan to the right, the frame is determined by the
     * STORM32_GIMBAL_DEVICE_FLAGS_YAW_ABSOLUTE flag, NaN to be ignored).
     *
     * @units deg
     * @min: -180
     * @max: 180
     */
    get yawAngle() {
        return this._param2;
    }
    set yawAngle(value) {
        this._param2 = value;
    }
    /**
     * Pitch/tilt rate (positive: tilt up, NaN to be ignored).
     *
     * @units deg/s
     */
    get pitchRate() {
        return this._param3;
    }
    set pitchRate(value) {
        this._param3 = value;
    }
    /**
     * Yaw/pan rate (positive: pan to the right, the frame is determined by the
     * STORM32_GIMBAL_DEVICE_FLAGS_YAW_ABSOLUTE flag, NaN to be ignored).
     *
     * @units deg/s
     */
    get yawRate() {
        return this._param4;
    }
    set yawRate(value) {
        this._param4 = value;
    }
    /**
     * Gimbal device flags.
     */
    get gimbalDeviceFlags() {
        return this._param5;
    }
    set gimbalDeviceFlags(value) {
        this._param5 = value;
    }
    /**
     * Gimbal manager flags.
     */
    get gimbalManagerFlags() {
        return this._param6;
    }
    set gimbalManagerFlags(value) {
        this._param6 = value;
    }
    /**
     * Gimbal ID of the gimbal manager to address (component ID or 1-6 for non-MAVLink gimbal, 0 for all
     * gimbals, send command multiple times for more than one but not all gimbals). The client is copied
     * into bits 8-15.
     */
    get gimbalIdAndClientId() {
        return this._param7;
    }
    set gimbalIdAndClientId(value) {
        this._param7 = value;
    }
}
exports.Storm32DoGimbalManagerControlPitchyawCommand = Storm32DoGimbalManagerControlPitchyawCommand;
/**
 * Command to configure a gimbal manager. A gimbal device is never to react to this command. The
 * selected profile is reported in the STORM32_GIMBAL_MANAGER_STATUS message.
 */
class Storm32DoGimbalManagerSetupCommand extends common_2.CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.STORM32_DO_GIMBAL_MANAGER_SETUP;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Gimbal manager profile (0 = default).
     */
    get profile() {
        return this._param1;
    }
    set profile(value) {
        this._param1 = value;
    }
    /**
     * Gimbal manager setup flags (0 = none).
     */
    get setupFlags() {
        return this._param2;
    }
    set setupFlags(value) {
        this._param2 = value;
    }
    /**
     * Gimbal ID of the gimbal manager to address (component ID or 1-6 for non-MAVLink gimbal, 0 for all
     * gimbals). Send command multiple times for more than one but not all gimbals.
     */
    get gimbalId() {
        return this._param7;
    }
    set gimbalId(value) {
        this._param7 = value;
    }
}
exports.Storm32DoGimbalManagerSetupCommand = Storm32DoGimbalManagerSetupCommand;
/**
 * Command to initiate gimbal actions. Usually performed by the gimbal device, but some can also be
 * done by the gimbal manager. It is hence best to broadcast this command.
 */
class Storm32DoGimbalActionCommand extends common_2.CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.STORM32_DO_GIMBAL_ACTION;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Gimbal action to initiate (0 = none).
     */
    get action() {
        return this._param1;
    }
    set action(value) {
        this._param1 = value;
    }
    /**
     * Gimbal ID of the gimbal to address (component ID or 1-6 for non-MAVLink gimbal, 0 for all gimbals).
     * Send command multiple times for more than one but not all gimbals.
     */
    get gimbalId() {
        return this._param7;
    }
    set gimbalId(value) {
        this._param7 = value;
    }
}
exports.Storm32DoGimbalActionCommand = Storm32DoGimbalActionCommand;
/**
 * Command to set the shot manager mode.
 */
class QshotDoConfigureCommand extends common_2.CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.QSHOT_DO_CONFIGURE;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Set shot mode.
     */
    get mode() {
        return this._param1;
    }
    set mode(value) {
        this._param1 = value;
    }
    /**
     * Set shot state or command. The allowed values are specific to the selected shot mode.
     */
    get shotStateOrCommand() {
        return this._param2;
    }
    set shotStateOrCommand(value) {
        this._param2 = value;
    }
}
exports.QshotDoConfigureCommand = QshotDoConfigureCommand;
exports.REGISTRY = {
    60001: Storm32GimbalDeviceStatus,
    60002: Storm32GimbalDeviceControl,
    60010: Storm32GimbalManagerInformation,
    60011: Storm32GimbalManagerStatus,
    60012: Storm32GimbalManagerControl,
    60013: Storm32GimbalManagerControlPitchyaw,
    60014: Storm32GimbalManagerCorrectRoll,
    60025: ComponentPrearmStatus,
};
exports.COMMANDS = {
    [MavCmd.STORM32_DO_GIMBAL_MANAGER_CONTROL_PITCHYAW]: Storm32DoGimbalManagerControlPitchyawCommand,
    [MavCmd.STORM32_DO_GIMBAL_MANAGER_SETUP]: Storm32DoGimbalManagerSetupCommand,
    [MavCmd.STORM32_DO_GIMBAL_ACTION]: Storm32DoGimbalActionCommand,
    [MavCmd.QSHOT_DO_CONFIGURE]: QshotDoConfigureCommand,
};
//# sourceMappingURL=storm32.js.map