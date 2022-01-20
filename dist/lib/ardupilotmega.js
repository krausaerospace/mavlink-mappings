"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemInfo = exports.SetMagOffsets = exports.SensorOffsets = exports.OsdParamConfigError = exports.OsdParamConfigType = exports.TrackerMode = exports.RoverMode = exports.SubMode = exports.CopterMode = exports.PlaneMode = exports.DeepstallStage = exports.DeviceOpBustype = exports.MavRemoteLogDataBlockStatuses = exports.MavRemoteLogDataBlockCommands = exports.PidTuningAxis = exports.EkfStatusFlags = exports.LedControlPattern = exports.MavCmdDoAuxFunctionSwitchLevel = exports.GoproBurstRate = exports.GoproModel = exports.GoproCharging = exports.GoproProtuneExposure = exports.GoproProtuneSharpness = exports.GoproProtuneGain = exports.GoproProtuneColour = exports.GoproProtuneWhiteBalance = exports.GoproPhotoResolution = exports.GoproVideoSettingsFlags = exports.GoproFieldOfView = exports.GoproFrameRate = exports.GoproResolution = exports.GoproCaptureMode = exports.GoproCommand = exports.GoproRequestStatus = exports.GoproHeartbeatFlags = exports.GoproHeartbeatStatus = exports.GimbalAxisCalibrationRequired = exports.GimbalAxisCalibrationStatus = exports.GimbalAxis = exports.MavModeGimbal = exports.CameraFeedbackFlags = exports.CameraStatusTypes = exports.RallyFlags = exports.LimitModule = exports.LimitsState = exports.ScriptingCmd = exports.MavCmd = exports.SpeedType = exports.HeadingType = exports.AccelcalVehiclePos = void 0;
exports.AdapTuning = exports.DeviceOpWriteReply = exports.DeviceOpWrite = exports.DeviceOpReadReply = exports.DeviceOpRead = exports.Rpm = exports.GoproSetResponse = exports.GoproSetRequest = exports.GoproGetResponse = exports.GoproGetRequest = exports.GoproHeartbeat = exports.GimbalTorqueCmdReport = exports.GimbalControl = exports.GimbalReport = exports.Deepstall = exports.PidTuning = exports.EkfStatusReport = exports.MagCalProgress = exports.LedControl = exports.RemoteLogBlockStatus = exports.RemoteLogDataBlock = exports.AutopilotVersionRequest = exports.Ahrs3 = exports.Battery2 = exports.CameraFeedback = exports.CameraStatus = exports.Ahrs2 = exports.CompassMotStatus = exports.RallyFetchPoint = exports.RallyPoint = exports.AirspeedAutocal = exports.RangeFinder = exports.Data96 = exports.Data64 = exports.Data32 = exports.Data16 = exports.Wind = exports.LimitsStatus = exports.Radio = exports.HwStatus = exports.SimState = exports.Ahrs = exports.FenceFetchPoint = exports.FencePoint = exports.MountStatus = exports.MountControl = exports.MountConfigure = exports.DigicamControl = exports.DigicamConfigure = exports.ApAdc = void 0;
exports.REGISTRY = exports.WaterDepth = exports.ObstacleDistance3d = exports.OsdParamShowConfigReply = exports.OsdParamShowConfig = exports.OsdParamConfigReply = exports.OsdParamConfig = exports.EscTelemetry9To12 = exports.EscTelemetry5To8 = exports.EscTelemetry1To4 = exports.AoaSsa = exports.VisionPositionDelta = void 0;
const mavlink_1 = require("./mavlink");
/**
 * ACCELCAL_VEHICLE_POS
 */
var AccelcalVehiclePos;
(function (AccelcalVehiclePos) {
    AccelcalVehiclePos[AccelcalVehiclePos["LEVEL"] = 1] = "LEVEL";
    AccelcalVehiclePos[AccelcalVehiclePos["LEFT"] = 2] = "LEFT";
    AccelcalVehiclePos[AccelcalVehiclePos["RIGHT"] = 3] = "RIGHT";
    AccelcalVehiclePos[AccelcalVehiclePos["NOSEDOWN"] = 4] = "NOSEDOWN";
    AccelcalVehiclePos[AccelcalVehiclePos["NOSEUP"] = 5] = "NOSEUP";
    AccelcalVehiclePos[AccelcalVehiclePos["BACK"] = 6] = "BACK";
    AccelcalVehiclePos[AccelcalVehiclePos["SUCCESS"] = 16777215] = "SUCCESS";
    AccelcalVehiclePos[AccelcalVehiclePos["FAILED"] = 16777216] = "FAILED";
})(AccelcalVehiclePos = exports.AccelcalVehiclePos || (exports.AccelcalVehiclePos = {}));
/**
 * HEADING_TYPE
 */
var HeadingType;
(function (HeadingType) {
    HeadingType[HeadingType["COURSE_OVER_GROUND"] = 0] = "COURSE_OVER_GROUND";
    HeadingType[HeadingType["HEADING"] = 1] = "HEADING";
})(HeadingType = exports.HeadingType || (exports.HeadingType = {}));
/**
 * SPEED_TYPE
 */
var SpeedType;
(function (SpeedType) {
    SpeedType[SpeedType["AIRSPEED"] = 0] = "AIRSPEED";
    SpeedType[SpeedType["GROUNDSPEED"] = 1] = "GROUNDSPEED";
})(SpeedType = exports.SpeedType || (exports.SpeedType = {}));
/**
 * MAV_CMD
 */
var MavCmd;
(function (MavCmd) {
    MavCmd[MavCmd["DO_SET_RESUME_REPEAT_DIST"] = 215] = "DO_SET_RESUME_REPEAT_DIST";
    MavCmd[MavCmd["DO_SPRAYER"] = 216] = "DO_SPRAYER";
    MavCmd[MavCmd["DO_SEND_SCRIPT_MESSAGE"] = 217] = "DO_SEND_SCRIPT_MESSAGE";
    MavCmd[MavCmd["DO_AUX_FUNCTION"] = 218] = "DO_AUX_FUNCTION";
    /**
     * Mission command to wait for an altitude or downwards vertical speed. This is meant for high altitude
     * balloon launches, allowing the aircraft to be idle until either an altitude is reached or a negative
     * vertical speed is reached (indicating early balloon burst). The wiggle time is how often to wiggle
     * the control surfaces to prevent them seizing up.
     */
    MavCmd[MavCmd["NAV_ALTITUDE_WAIT"] = 83] = "NAV_ALTITUDE_WAIT";
    MavCmd[MavCmd["POWER_OFF_INITIATED"] = 42000] = "POWER_OFF_INITIATED";
    MavCmd[MavCmd["SOLO_BTN_FLY_CLICK"] = 42001] = "SOLO_BTN_FLY_CLICK";
    MavCmd[MavCmd["SOLO_BTN_FLY_HOLD"] = 42002] = "SOLO_BTN_FLY_HOLD";
    MavCmd[MavCmd["SOLO_BTN_PAUSE_CLICK"] = 42003] = "SOLO_BTN_PAUSE_CLICK";
    /**
     * Magnetometer calibration based on fixed position in earth field given by inclination, declination
     * and intensity.
     */
    MavCmd[MavCmd["FIXED_MAG_CAL"] = 42004] = "FIXED_MAG_CAL";
    MavCmd[MavCmd["FIXED_MAG_CAL_FIELD"] = 42005] = "FIXED_MAG_CAL_FIELD";
    MavCmd[MavCmd["DO_START_MAG_CAL"] = 42424] = "DO_START_MAG_CAL";
    MavCmd[MavCmd["DO_ACCEPT_MAG_CAL"] = 42425] = "DO_ACCEPT_MAG_CAL";
    MavCmd[MavCmd["DO_CANCEL_MAG_CAL"] = 42426] = "DO_CANCEL_MAG_CAL";
    /**
     * Used when doing accelerometer calibration. When sent to the GCS tells it what position to put the
     * vehicle in. When sent to the vehicle says what position the vehicle is in.
     */
    MavCmd[MavCmd["ACCELCAL_VEHICLE_POS"] = 42429] = "ACCELCAL_VEHICLE_POS";
    MavCmd[MavCmd["DO_SEND_BANNER"] = 42428] = "DO_SEND_BANNER";
    MavCmd[MavCmd["SET_FACTORY_TEST_MODE"] = 42427] = "SET_FACTORY_TEST_MODE";
    MavCmd[MavCmd["GIMBAL_RESET"] = 42501] = "GIMBAL_RESET";
    MavCmd[MavCmd["GIMBAL_AXIS_CALIBRATION_STATUS"] = 42502] = "GIMBAL_AXIS_CALIBRATION_STATUS";
    MavCmd[MavCmd["GIMBAL_REQUEST_AXIS_CALIBRATION"] = 42503] = "GIMBAL_REQUEST_AXIS_CALIBRATION";
    MavCmd[MavCmd["GIMBAL_FULL_RESET"] = 42505] = "GIMBAL_FULL_RESET";
    MavCmd[MavCmd["FLASH_BOOTLOADER"] = 42650] = "FLASH_BOOTLOADER";
    MavCmd[MavCmd["BATTERY_RESET"] = 42651] = "BATTERY_RESET";
    MavCmd[MavCmd["DEBUG_TRAP"] = 42700] = "DEBUG_TRAP";
    MavCmd[MavCmd["SCRIPTING"] = 42701] = "SCRIPTING";
    /**
     * Change flight speed at a given rate. This slews the vehicle at a controllable rate between it's
     * previous speed and the new one. (affects GUIDED only. Outside GUIDED, aircraft ignores these
     * commands. Designed for onboard companion-computer command-and-control, not normally operator/GCS
     * control.)
     */
    MavCmd[MavCmd["GUIDED_CHANGE_SPEED"] = 43000] = "GUIDED_CHANGE_SPEED";
    /**
     * Change target altitude at a given rate. This slews the vehicle at a controllable rate between it's
     * previous altitude and the new one. (affects GUIDED only. Outside GUIDED, aircraft ignores these
     * commands. Designed for onboard companion-computer command-and-control, not normally operator/GCS
     * control.)
     */
    MavCmd[MavCmd["GUIDED_CHANGE_ALTITUDE"] = 43001] = "GUIDED_CHANGE_ALTITUDE";
    /**
     * Change to target heading at a given rate, overriding previous heading/s. This slews the vehicle at a
     * controllable rate between it's previous heading and the new one. (affects GUIDED only. Exiting
     * GUIDED returns aircraft to normal behaviour defined elsewhere. Designed for onboard
     * companion-computer command-and-control, not normally operator/GCS control.)
     */
    MavCmd[MavCmd["GUIDED_CHANGE_HEADING"] = 43002] = "GUIDED_CHANGE_HEADING";
})(MavCmd = exports.MavCmd || (exports.MavCmd = {}));
/**
 * SCRIPTING_CMD
 */
var ScriptingCmd;
(function (ScriptingCmd) {
    ScriptingCmd[ScriptingCmd["REPL_START"] = 0] = "REPL_START";
    ScriptingCmd[ScriptingCmd["REPL_STOP"] = 1] = "REPL_STOP";
})(ScriptingCmd = exports.ScriptingCmd || (exports.ScriptingCmd = {}));
/**
 * LIMITS_STATE
 */
var LimitsState;
(function (LimitsState) {
    LimitsState[LimitsState["INIT"] = 0] = "INIT";
    LimitsState[LimitsState["DISABLED"] = 1] = "DISABLED";
    LimitsState[LimitsState["ENABLED"] = 2] = "ENABLED";
    LimitsState[LimitsState["TRIGGERED"] = 3] = "TRIGGERED";
    LimitsState[LimitsState["RECOVERING"] = 4] = "RECOVERING";
    LimitsState[LimitsState["RECOVERED"] = 5] = "RECOVERED";
})(LimitsState = exports.LimitsState || (exports.LimitsState = {}));
/**
 * LIMIT_MODULE
 */
var LimitModule;
(function (LimitModule) {
    LimitModule[LimitModule["GPSLOCK"] = 1] = "GPSLOCK";
    LimitModule[LimitModule["GEOFENCE"] = 2] = "GEOFENCE";
    LimitModule[LimitModule["ALTITUDE"] = 4] = "ALTITUDE";
})(LimitModule = exports.LimitModule || (exports.LimitModule = {}));
/**
 * Flags in RALLY_POINT message.
 */
var RallyFlags;
(function (RallyFlags) {
    RallyFlags[RallyFlags["FAVORABLE_WIND"] = 1] = "FAVORABLE_WIND";
    /**
     * Flag set when plane is to immediately descend to break altitude and land without GCS intervention.
     * Flag not set when plane is to loiter at Rally point until commanded to land.
     */
    RallyFlags[RallyFlags["LAND_IMMEDIATELY"] = 2] = "LAND_IMMEDIATELY";
})(RallyFlags = exports.RallyFlags || (exports.RallyFlags = {}));
/**
 * CAMERA_STATUS_TYPES
 */
var CameraStatusTypes;
(function (CameraStatusTypes) {
    CameraStatusTypes[CameraStatusTypes["HEARTBEAT"] = 0] = "HEARTBEAT";
    CameraStatusTypes[CameraStatusTypes["TRIGGER"] = 1] = "TRIGGER";
    CameraStatusTypes[CameraStatusTypes["DISCONNECT"] = 2] = "DISCONNECT";
    CameraStatusTypes[CameraStatusTypes["ERROR"] = 3] = "ERROR";
    CameraStatusTypes[CameraStatusTypes["LOWBATT"] = 4] = "LOWBATT";
    CameraStatusTypes[CameraStatusTypes["LOWSTORE"] = 5] = "LOWSTORE";
    CameraStatusTypes[CameraStatusTypes["LOWSTOREV"] = 6] = "LOWSTOREV";
})(CameraStatusTypes = exports.CameraStatusTypes || (exports.CameraStatusTypes = {}));
/**
 * CAMERA_FEEDBACK_FLAGS
 */
var CameraFeedbackFlags;
(function (CameraFeedbackFlags) {
    CameraFeedbackFlags[CameraFeedbackFlags["PHOTO"] = 0] = "PHOTO";
    CameraFeedbackFlags[CameraFeedbackFlags["VIDEO"] = 1] = "VIDEO";
    CameraFeedbackFlags[CameraFeedbackFlags["BADEXPOSURE"] = 2] = "BADEXPOSURE";
    CameraFeedbackFlags[CameraFeedbackFlags["CLOSEDLOOP"] = 3] = "CLOSEDLOOP";
    /**
     * Open loop camera, an image trigger has been requested but we can't know for sure it has successfully
     * taken a picture.
     */
    CameraFeedbackFlags[CameraFeedbackFlags["OPENLOOP"] = 4] = "OPENLOOP";
})(CameraFeedbackFlags = exports.CameraFeedbackFlags || (exports.CameraFeedbackFlags = {}));
/**
 * MAV_MODE_GIMBAL
 */
var MavModeGimbal;
(function (MavModeGimbal) {
    MavModeGimbal[MavModeGimbal["UNINITIALIZED"] = 0] = "UNINITIALIZED";
    MavModeGimbal[MavModeGimbal["CALIBRATING_PITCH"] = 1] = "CALIBRATING_PITCH";
    MavModeGimbal[MavModeGimbal["CALIBRATING_ROLL"] = 2] = "CALIBRATING_ROLL";
    MavModeGimbal[MavModeGimbal["CALIBRATING_YAW"] = 3] = "CALIBRATING_YAW";
    /**
     * Gimbal has finished calibrating and initializing, but is relaxed pending reception of first rate
     * command from copter.
     */
    MavModeGimbal[MavModeGimbal["INITIALIZED"] = 4] = "INITIALIZED";
    MavModeGimbal[MavModeGimbal["ACTIVE"] = 5] = "ACTIVE";
    /**
     * Gimbal is relaxed because it missed more than 10 expected rate command messages in a row. Gimbal
     * will move back to active mode when it receives a new rate command.
     */
    MavModeGimbal[MavModeGimbal["RATE_CMD_TIMEOUT"] = 6] = "RATE_CMD_TIMEOUT";
})(MavModeGimbal = exports.MavModeGimbal || (exports.MavModeGimbal = {}));
/**
 * GIMBAL_AXIS
 */
var GimbalAxis;
(function (GimbalAxis) {
    GimbalAxis[GimbalAxis["YAW"] = 0] = "YAW";
    GimbalAxis[GimbalAxis["PITCH"] = 1] = "PITCH";
    GimbalAxis[GimbalAxis["ROLL"] = 2] = "ROLL";
})(GimbalAxis = exports.GimbalAxis || (exports.GimbalAxis = {}));
/**
 * GIMBAL_AXIS_CALIBRATION_STATUS
 */
var GimbalAxisCalibrationStatus;
(function (GimbalAxisCalibrationStatus) {
    GimbalAxisCalibrationStatus[GimbalAxisCalibrationStatus["IN_PROGRESS"] = 0] = "IN_PROGRESS";
    GimbalAxisCalibrationStatus[GimbalAxisCalibrationStatus["SUCCEEDED"] = 1] = "SUCCEEDED";
    GimbalAxisCalibrationStatus[GimbalAxisCalibrationStatus["FAILED"] = 2] = "FAILED";
})(GimbalAxisCalibrationStatus = exports.GimbalAxisCalibrationStatus || (exports.GimbalAxisCalibrationStatus = {}));
/**
 * GIMBAL_AXIS_CALIBRATION_REQUIRED
 */
var GimbalAxisCalibrationRequired;
(function (GimbalAxisCalibrationRequired) {
    GimbalAxisCalibrationRequired[GimbalAxisCalibrationRequired["UNKNOWN"] = 0] = "UNKNOWN";
    GimbalAxisCalibrationRequired[GimbalAxisCalibrationRequired["TRUE"] = 1] = "TRUE";
    GimbalAxisCalibrationRequired[GimbalAxisCalibrationRequired["FALSE"] = 2] = "FALSE";
})(GimbalAxisCalibrationRequired = exports.GimbalAxisCalibrationRequired || (exports.GimbalAxisCalibrationRequired = {}));
/**
 * GOPRO_HEARTBEAT_STATUS
 */
var GoproHeartbeatStatus;
(function (GoproHeartbeatStatus) {
    GoproHeartbeatStatus[GoproHeartbeatStatus["DISCONNECTED"] = 0] = "DISCONNECTED";
    GoproHeartbeatStatus[GoproHeartbeatStatus["INCOMPATIBLE"] = 1] = "INCOMPATIBLE";
    GoproHeartbeatStatus[GoproHeartbeatStatus["CONNECTED"] = 2] = "CONNECTED";
    GoproHeartbeatStatus[GoproHeartbeatStatus["ERROR"] = 3] = "ERROR";
})(GoproHeartbeatStatus = exports.GoproHeartbeatStatus || (exports.GoproHeartbeatStatus = {}));
/**
 * GOPRO_HEARTBEAT_FLAGS
 */
var GoproHeartbeatFlags;
(function (GoproHeartbeatFlags) {
    GoproHeartbeatFlags[GoproHeartbeatFlags["RECORDING"] = 1] = "RECORDING";
})(GoproHeartbeatFlags = exports.GoproHeartbeatFlags || (exports.GoproHeartbeatFlags = {}));
/**
 * GOPRO_REQUEST_STATUS
 */
var GoproRequestStatus;
(function (GoproRequestStatus) {
    GoproRequestStatus[GoproRequestStatus["SUCCESS"] = 0] = "SUCCESS";
    GoproRequestStatus[GoproRequestStatus["FAILED"] = 1] = "FAILED";
})(GoproRequestStatus = exports.GoproRequestStatus || (exports.GoproRequestStatus = {}));
/**
 * GOPRO_COMMAND
 */
var GoproCommand;
(function (GoproCommand) {
    GoproCommand[GoproCommand["POWER"] = 0] = "POWER";
    GoproCommand[GoproCommand["CAPTURE_MODE"] = 1] = "CAPTURE_MODE";
    GoproCommand[GoproCommand["SHUTTER"] = 2] = "SHUTTER";
    GoproCommand[GoproCommand["BATTERY"] = 3] = "BATTERY";
    GoproCommand[GoproCommand["MODEL"] = 4] = "MODEL";
    GoproCommand[GoproCommand["VIDEO_SETTINGS"] = 5] = "VIDEO_SETTINGS";
    GoproCommand[GoproCommand["LOW_LIGHT"] = 6] = "LOW_LIGHT";
    GoproCommand[GoproCommand["PHOTO_RESOLUTION"] = 7] = "PHOTO_RESOLUTION";
    GoproCommand[GoproCommand["PHOTO_BURST_RATE"] = 8] = "PHOTO_BURST_RATE";
    GoproCommand[GoproCommand["PROTUNE"] = 9] = "PROTUNE";
    GoproCommand[GoproCommand["PROTUNE_WHITE_BALANCE"] = 10] = "PROTUNE_WHITE_BALANCE";
    GoproCommand[GoproCommand["PROTUNE_COLOUR"] = 11] = "PROTUNE_COLOUR";
    GoproCommand[GoproCommand["PROTUNE_GAIN"] = 12] = "PROTUNE_GAIN";
    GoproCommand[GoproCommand["PROTUNE_SHARPNESS"] = 13] = "PROTUNE_SHARPNESS";
    GoproCommand[GoproCommand["PROTUNE_EXPOSURE"] = 14] = "PROTUNE_EXPOSURE";
    GoproCommand[GoproCommand["TIME"] = 15] = "TIME";
    GoproCommand[GoproCommand["CHARGING"] = 16] = "CHARGING";
})(GoproCommand = exports.GoproCommand || (exports.GoproCommand = {}));
/**
 * GOPRO_CAPTURE_MODE
 */
var GoproCaptureMode;
(function (GoproCaptureMode) {
    GoproCaptureMode[GoproCaptureMode["VIDEO"] = 0] = "VIDEO";
    GoproCaptureMode[GoproCaptureMode["PHOTO"] = 1] = "PHOTO";
    GoproCaptureMode[GoproCaptureMode["BURST"] = 2] = "BURST";
    GoproCaptureMode[GoproCaptureMode["TIME_LAPSE"] = 3] = "TIME_LAPSE";
    GoproCaptureMode[GoproCaptureMode["MULTI_SHOT"] = 4] = "MULTI_SHOT";
    GoproCaptureMode[GoproCaptureMode["PLAYBACK"] = 5] = "PLAYBACK";
    GoproCaptureMode[GoproCaptureMode["SETUP"] = 6] = "SETUP";
    GoproCaptureMode[GoproCaptureMode["UNKNOWN"] = 255] = "UNKNOWN";
})(GoproCaptureMode = exports.GoproCaptureMode || (exports.GoproCaptureMode = {}));
/**
 * GOPRO_RESOLUTION
 */
var GoproResolution;
(function (GoproResolution) {
    GoproResolution[GoproResolution["GOPRO_RESOLUTION_480p"] = 0] = "GOPRO_RESOLUTION_480p";
    GoproResolution[GoproResolution["GOPRO_RESOLUTION_720p"] = 1] = "GOPRO_RESOLUTION_720p";
    GoproResolution[GoproResolution["GOPRO_RESOLUTION_960p"] = 2] = "GOPRO_RESOLUTION_960p";
    GoproResolution[GoproResolution["GOPRO_RESOLUTION_1080p"] = 3] = "GOPRO_RESOLUTION_1080p";
    GoproResolution[GoproResolution["GOPRO_RESOLUTION_1440p"] = 4] = "GOPRO_RESOLUTION_1440p";
    GoproResolution[GoproResolution["GOPRO_RESOLUTION_2_7k_17_9"] = 5] = "GOPRO_RESOLUTION_2_7k_17_9";
    GoproResolution[GoproResolution["GOPRO_RESOLUTION_2_7k_16_9"] = 6] = "GOPRO_RESOLUTION_2_7k_16_9";
    GoproResolution[GoproResolution["GOPRO_RESOLUTION_2_7k_4_3"] = 7] = "GOPRO_RESOLUTION_2_7k_4_3";
    GoproResolution[GoproResolution["GOPRO_RESOLUTION_4k_16_9"] = 8] = "GOPRO_RESOLUTION_4k_16_9";
    GoproResolution[GoproResolution["GOPRO_RESOLUTION_4k_17_9"] = 9] = "GOPRO_RESOLUTION_4k_17_9";
    GoproResolution[GoproResolution["GOPRO_RESOLUTION_720p_SUPERVIEW"] = 10] = "GOPRO_RESOLUTION_720p_SUPERVIEW";
    GoproResolution[GoproResolution["GOPRO_RESOLUTION_1080p_SUPERVIEW"] = 11] = "GOPRO_RESOLUTION_1080p_SUPERVIEW";
    GoproResolution[GoproResolution["GOPRO_RESOLUTION_2_7k_SUPERVIEW"] = 12] = "GOPRO_RESOLUTION_2_7k_SUPERVIEW";
    GoproResolution[GoproResolution["GOPRO_RESOLUTION_4k_SUPERVIEW"] = 13] = "GOPRO_RESOLUTION_4k_SUPERVIEW";
})(GoproResolution = exports.GoproResolution || (exports.GoproResolution = {}));
/**
 * GOPRO_FRAME_RATE
 */
var GoproFrameRate;
(function (GoproFrameRate) {
    GoproFrameRate[GoproFrameRate["GOPRO_FRAME_RATE_12"] = 0] = "GOPRO_FRAME_RATE_12";
    GoproFrameRate[GoproFrameRate["GOPRO_FRAME_RATE_15"] = 1] = "GOPRO_FRAME_RATE_15";
    GoproFrameRate[GoproFrameRate["GOPRO_FRAME_RATE_24"] = 2] = "GOPRO_FRAME_RATE_24";
    GoproFrameRate[GoproFrameRate["GOPRO_FRAME_RATE_25"] = 3] = "GOPRO_FRAME_RATE_25";
    GoproFrameRate[GoproFrameRate["GOPRO_FRAME_RATE_30"] = 4] = "GOPRO_FRAME_RATE_30";
    GoproFrameRate[GoproFrameRate["GOPRO_FRAME_RATE_48"] = 5] = "GOPRO_FRAME_RATE_48";
    GoproFrameRate[GoproFrameRate["GOPRO_FRAME_RATE_50"] = 6] = "GOPRO_FRAME_RATE_50";
    GoproFrameRate[GoproFrameRate["GOPRO_FRAME_RATE_60"] = 7] = "GOPRO_FRAME_RATE_60";
    GoproFrameRate[GoproFrameRate["GOPRO_FRAME_RATE_80"] = 8] = "GOPRO_FRAME_RATE_80";
    GoproFrameRate[GoproFrameRate["GOPRO_FRAME_RATE_90"] = 9] = "GOPRO_FRAME_RATE_90";
    GoproFrameRate[GoproFrameRate["GOPRO_FRAME_RATE_100"] = 10] = "GOPRO_FRAME_RATE_100";
    GoproFrameRate[GoproFrameRate["GOPRO_FRAME_RATE_120"] = 11] = "GOPRO_FRAME_RATE_120";
    GoproFrameRate[GoproFrameRate["GOPRO_FRAME_RATE_240"] = 12] = "GOPRO_FRAME_RATE_240";
    GoproFrameRate[GoproFrameRate["GOPRO_FRAME_RATE_12_5"] = 13] = "GOPRO_FRAME_RATE_12_5";
})(GoproFrameRate = exports.GoproFrameRate || (exports.GoproFrameRate = {}));
/**
 * GOPRO_FIELD_OF_VIEW
 */
var GoproFieldOfView;
(function (GoproFieldOfView) {
    GoproFieldOfView[GoproFieldOfView["WIDE"] = 0] = "WIDE";
    GoproFieldOfView[GoproFieldOfView["MEDIUM"] = 1] = "MEDIUM";
    GoproFieldOfView[GoproFieldOfView["NARROW"] = 2] = "NARROW";
})(GoproFieldOfView = exports.GoproFieldOfView || (exports.GoproFieldOfView = {}));
/**
 * GOPRO_VIDEO_SETTINGS_FLAGS
 */
var GoproVideoSettingsFlags;
(function (GoproVideoSettingsFlags) {
    GoproVideoSettingsFlags[GoproVideoSettingsFlags["MODE"] = 1] = "MODE";
})(GoproVideoSettingsFlags = exports.GoproVideoSettingsFlags || (exports.GoproVideoSettingsFlags = {}));
/**
 * GOPRO_PHOTO_RESOLUTION
 */
var GoproPhotoResolution;
(function (GoproPhotoResolution) {
    GoproPhotoResolution[GoproPhotoResolution["GOPRO_PHOTO_RESOLUTION_5MP_MEDIUM"] = 0] = "GOPRO_PHOTO_RESOLUTION_5MP_MEDIUM";
    GoproPhotoResolution[GoproPhotoResolution["GOPRO_PHOTO_RESOLUTION_7MP_MEDIUM"] = 1] = "GOPRO_PHOTO_RESOLUTION_7MP_MEDIUM";
    GoproPhotoResolution[GoproPhotoResolution["GOPRO_PHOTO_RESOLUTION_7MP_WIDE"] = 2] = "GOPRO_PHOTO_RESOLUTION_7MP_WIDE";
    GoproPhotoResolution[GoproPhotoResolution["GOPRO_PHOTO_RESOLUTION_10MP_WIDE"] = 3] = "GOPRO_PHOTO_RESOLUTION_10MP_WIDE";
    GoproPhotoResolution[GoproPhotoResolution["GOPRO_PHOTO_RESOLUTION_12MP_WIDE"] = 4] = "GOPRO_PHOTO_RESOLUTION_12MP_WIDE";
})(GoproPhotoResolution = exports.GoproPhotoResolution || (exports.GoproPhotoResolution = {}));
/**
 * GOPRO_PROTUNE_WHITE_BALANCE
 */
var GoproProtuneWhiteBalance;
(function (GoproProtuneWhiteBalance) {
    GoproProtuneWhiteBalance[GoproProtuneWhiteBalance["AUTO"] = 0] = "AUTO";
    GoproProtuneWhiteBalance[GoproProtuneWhiteBalance["GOPRO_PROTUNE_WHITE_BALANCE_3000K"] = 1] = "GOPRO_PROTUNE_WHITE_BALANCE_3000K";
    GoproProtuneWhiteBalance[GoproProtuneWhiteBalance["GOPRO_PROTUNE_WHITE_BALANCE_5500K"] = 2] = "GOPRO_PROTUNE_WHITE_BALANCE_5500K";
    GoproProtuneWhiteBalance[GoproProtuneWhiteBalance["GOPRO_PROTUNE_WHITE_BALANCE_6500K"] = 3] = "GOPRO_PROTUNE_WHITE_BALANCE_6500K";
    GoproProtuneWhiteBalance[GoproProtuneWhiteBalance["RAW"] = 4] = "RAW";
})(GoproProtuneWhiteBalance = exports.GoproProtuneWhiteBalance || (exports.GoproProtuneWhiteBalance = {}));
/**
 * GOPRO_PROTUNE_COLOUR
 */
var GoproProtuneColour;
(function (GoproProtuneColour) {
    GoproProtuneColour[GoproProtuneColour["STANDARD"] = 0] = "STANDARD";
    GoproProtuneColour[GoproProtuneColour["NEUTRAL"] = 1] = "NEUTRAL";
})(GoproProtuneColour = exports.GoproProtuneColour || (exports.GoproProtuneColour = {}));
/**
 * GOPRO_PROTUNE_GAIN
 */
var GoproProtuneGain;
(function (GoproProtuneGain) {
    GoproProtuneGain[GoproProtuneGain["GOPRO_PROTUNE_GAIN_400"] = 0] = "GOPRO_PROTUNE_GAIN_400";
    GoproProtuneGain[GoproProtuneGain["GOPRO_PROTUNE_GAIN_800"] = 1] = "GOPRO_PROTUNE_GAIN_800";
    GoproProtuneGain[GoproProtuneGain["GOPRO_PROTUNE_GAIN_1600"] = 2] = "GOPRO_PROTUNE_GAIN_1600";
    GoproProtuneGain[GoproProtuneGain["GOPRO_PROTUNE_GAIN_3200"] = 3] = "GOPRO_PROTUNE_GAIN_3200";
    GoproProtuneGain[GoproProtuneGain["GOPRO_PROTUNE_GAIN_6400"] = 4] = "GOPRO_PROTUNE_GAIN_6400";
})(GoproProtuneGain = exports.GoproProtuneGain || (exports.GoproProtuneGain = {}));
/**
 * GOPRO_PROTUNE_SHARPNESS
 */
var GoproProtuneSharpness;
(function (GoproProtuneSharpness) {
    GoproProtuneSharpness[GoproProtuneSharpness["LOW"] = 0] = "LOW";
    GoproProtuneSharpness[GoproProtuneSharpness["MEDIUM"] = 1] = "MEDIUM";
    GoproProtuneSharpness[GoproProtuneSharpness["HIGH"] = 2] = "HIGH";
})(GoproProtuneSharpness = exports.GoproProtuneSharpness || (exports.GoproProtuneSharpness = {}));
/**
 * GOPRO_PROTUNE_EXPOSURE
 */
var GoproProtuneExposure;
(function (GoproProtuneExposure) {
    GoproProtuneExposure[GoproProtuneExposure["NEG_5_0"] = 0] = "NEG_5_0";
    GoproProtuneExposure[GoproProtuneExposure["NEG_4_5"] = 1] = "NEG_4_5";
    GoproProtuneExposure[GoproProtuneExposure["NEG_4_0"] = 2] = "NEG_4_0";
    GoproProtuneExposure[GoproProtuneExposure["NEG_3_5"] = 3] = "NEG_3_5";
    GoproProtuneExposure[GoproProtuneExposure["NEG_3_0"] = 4] = "NEG_3_0";
    GoproProtuneExposure[GoproProtuneExposure["NEG_2_5"] = 5] = "NEG_2_5";
    GoproProtuneExposure[GoproProtuneExposure["NEG_2_0"] = 6] = "NEG_2_0";
    GoproProtuneExposure[GoproProtuneExposure["NEG_1_5"] = 7] = "NEG_1_5";
    GoproProtuneExposure[GoproProtuneExposure["NEG_1_0"] = 8] = "NEG_1_0";
    GoproProtuneExposure[GoproProtuneExposure["NEG_0_5"] = 9] = "NEG_0_5";
    GoproProtuneExposure[GoproProtuneExposure["ZERO"] = 10] = "ZERO";
    GoproProtuneExposure[GoproProtuneExposure["POS_0_5"] = 11] = "POS_0_5";
    GoproProtuneExposure[GoproProtuneExposure["POS_1_0"] = 12] = "POS_1_0";
    GoproProtuneExposure[GoproProtuneExposure["POS_1_5"] = 13] = "POS_1_5";
    GoproProtuneExposure[GoproProtuneExposure["POS_2_0"] = 14] = "POS_2_0";
    GoproProtuneExposure[GoproProtuneExposure["POS_2_5"] = 15] = "POS_2_5";
    GoproProtuneExposure[GoproProtuneExposure["POS_3_0"] = 16] = "POS_3_0";
    GoproProtuneExposure[GoproProtuneExposure["POS_3_5"] = 17] = "POS_3_5";
    GoproProtuneExposure[GoproProtuneExposure["POS_4_0"] = 18] = "POS_4_0";
    GoproProtuneExposure[GoproProtuneExposure["POS_4_5"] = 19] = "POS_4_5";
    GoproProtuneExposure[GoproProtuneExposure["POS_5_0"] = 20] = "POS_5_0";
})(GoproProtuneExposure = exports.GoproProtuneExposure || (exports.GoproProtuneExposure = {}));
/**
 * GOPRO_CHARGING
 */
var GoproCharging;
(function (GoproCharging) {
    GoproCharging[GoproCharging["DISABLED"] = 0] = "DISABLED";
    GoproCharging[GoproCharging["ENABLED"] = 1] = "ENABLED";
})(GoproCharging = exports.GoproCharging || (exports.GoproCharging = {}));
/**
 * GOPRO_MODEL
 */
var GoproModel;
(function (GoproModel) {
    GoproModel[GoproModel["UNKNOWN"] = 0] = "UNKNOWN";
    GoproModel[GoproModel["HERO_3_PLUS_SILVER"] = 1] = "HERO_3_PLUS_SILVER";
    GoproModel[GoproModel["HERO_3_PLUS_BLACK"] = 2] = "HERO_3_PLUS_BLACK";
    GoproModel[GoproModel["HERO_4_SILVER"] = 3] = "HERO_4_SILVER";
    GoproModel[GoproModel["HERO_4_BLACK"] = 4] = "HERO_4_BLACK";
})(GoproModel = exports.GoproModel || (exports.GoproModel = {}));
/**
 * GOPRO_BURST_RATE
 */
var GoproBurstRate;
(function (GoproBurstRate) {
    GoproBurstRate[GoproBurstRate["GOPRO_BURST_RATE_3_IN_1_SECOND"] = 0] = "GOPRO_BURST_RATE_3_IN_1_SECOND";
    GoproBurstRate[GoproBurstRate["GOPRO_BURST_RATE_5_IN_1_SECOND"] = 1] = "GOPRO_BURST_RATE_5_IN_1_SECOND";
    GoproBurstRate[GoproBurstRate["GOPRO_BURST_RATE_10_IN_1_SECOND"] = 2] = "GOPRO_BURST_RATE_10_IN_1_SECOND";
    GoproBurstRate[GoproBurstRate["GOPRO_BURST_RATE_10_IN_2_SECOND"] = 3] = "GOPRO_BURST_RATE_10_IN_2_SECOND";
    GoproBurstRate[GoproBurstRate["GOPRO_BURST_RATE_10_IN_3_SECOND"] = 4] = "GOPRO_BURST_RATE_10_IN_3_SECOND";
    GoproBurstRate[GoproBurstRate["GOPRO_BURST_RATE_30_IN_1_SECOND"] = 5] = "GOPRO_BURST_RATE_30_IN_1_SECOND";
    GoproBurstRate[GoproBurstRate["GOPRO_BURST_RATE_30_IN_2_SECOND"] = 6] = "GOPRO_BURST_RATE_30_IN_2_SECOND";
    GoproBurstRate[GoproBurstRate["GOPRO_BURST_RATE_30_IN_3_SECOND"] = 7] = "GOPRO_BURST_RATE_30_IN_3_SECOND";
    GoproBurstRate[GoproBurstRate["GOPRO_BURST_RATE_30_IN_6_SECOND"] = 8] = "GOPRO_BURST_RATE_30_IN_6_SECOND";
})(GoproBurstRate = exports.GoproBurstRate || (exports.GoproBurstRate = {}));
/**
 * MAV_CMD_DO_AUX_FUNCTION_SWITCH_LEVEL
 */
var MavCmdDoAuxFunctionSwitchLevel;
(function (MavCmdDoAuxFunctionSwitchLevel) {
    MavCmdDoAuxFunctionSwitchLevel[MavCmdDoAuxFunctionSwitchLevel["LOW"] = 0] = "LOW";
    MavCmdDoAuxFunctionSwitchLevel[MavCmdDoAuxFunctionSwitchLevel["MIDDLE"] = 1] = "MIDDLE";
    MavCmdDoAuxFunctionSwitchLevel[MavCmdDoAuxFunctionSwitchLevel["HIGH"] = 2] = "HIGH";
})(MavCmdDoAuxFunctionSwitchLevel = exports.MavCmdDoAuxFunctionSwitchLevel || (exports.MavCmdDoAuxFunctionSwitchLevel = {}));
/**
 * LED_CONTROL_PATTERN
 */
var LedControlPattern;
(function (LedControlPattern) {
    LedControlPattern[LedControlPattern["OFF"] = 0] = "OFF";
    LedControlPattern[LedControlPattern["FIRMWAREUPDATE"] = 1] = "FIRMWAREUPDATE";
    LedControlPattern[LedControlPattern["CUSTOM"] = 255] = "CUSTOM";
})(LedControlPattern = exports.LedControlPattern || (exports.LedControlPattern = {}));
/**
 * Flags in EKF_STATUS message.
 */
var EkfStatusFlags;
(function (EkfStatusFlags) {
    EkfStatusFlags[EkfStatusFlags["ATTITUDE"] = 1] = "ATTITUDE";
    EkfStatusFlags[EkfStatusFlags["VELOCITY_HORIZ"] = 2] = "VELOCITY_HORIZ";
    EkfStatusFlags[EkfStatusFlags["VELOCITY_VERT"] = 4] = "VELOCITY_VERT";
    EkfStatusFlags[EkfStatusFlags["POS_HORIZ_REL"] = 8] = "POS_HORIZ_REL";
    EkfStatusFlags[EkfStatusFlags["POS_HORIZ_ABS"] = 16] = "POS_HORIZ_ABS";
    EkfStatusFlags[EkfStatusFlags["POS_VERT_ABS"] = 32] = "POS_VERT_ABS";
    EkfStatusFlags[EkfStatusFlags["POS_VERT_AGL"] = 64] = "POS_VERT_AGL";
    EkfStatusFlags[EkfStatusFlags["CONST_POS_MODE"] = 128] = "CONST_POS_MODE";
    EkfStatusFlags[EkfStatusFlags["PRED_POS_HORIZ_REL"] = 256] = "PRED_POS_HORIZ_REL";
    EkfStatusFlags[EkfStatusFlags["PRED_POS_HORIZ_ABS"] = 512] = "PRED_POS_HORIZ_ABS";
    EkfStatusFlags[EkfStatusFlags["UNINITIALIZED"] = 1024] = "UNINITIALIZED";
})(EkfStatusFlags = exports.EkfStatusFlags || (exports.EkfStatusFlags = {}));
/**
 * PID_TUNING_AXIS
 */
var PidTuningAxis;
(function (PidTuningAxis) {
    PidTuningAxis[PidTuningAxis["ROLL"] = 1] = "ROLL";
    PidTuningAxis[PidTuningAxis["PITCH"] = 2] = "PITCH";
    PidTuningAxis[PidTuningAxis["YAW"] = 3] = "YAW";
    PidTuningAxis[PidTuningAxis["ACCZ"] = 4] = "ACCZ";
    PidTuningAxis[PidTuningAxis["STEER"] = 5] = "STEER";
    PidTuningAxis[PidTuningAxis["LANDING"] = 6] = "LANDING";
})(PidTuningAxis = exports.PidTuningAxis || (exports.PidTuningAxis = {}));
/**
 * Special ACK block numbers control activation of dataflash log streaming.
 */
var MavRemoteLogDataBlockCommands;
(function (MavRemoteLogDataBlockCommands) {
    MavRemoteLogDataBlockCommands[MavRemoteLogDataBlockCommands["STOP"] = 2147483645] = "STOP";
    MavRemoteLogDataBlockCommands[MavRemoteLogDataBlockCommands["START"] = 2147483646] = "START";
})(MavRemoteLogDataBlockCommands = exports.MavRemoteLogDataBlockCommands || (exports.MavRemoteLogDataBlockCommands = {}));
/**
 * Possible remote log data block statuses.
 */
var MavRemoteLogDataBlockStatuses;
(function (MavRemoteLogDataBlockStatuses) {
    MavRemoteLogDataBlockStatuses[MavRemoteLogDataBlockStatuses["NACK"] = 0] = "NACK";
    MavRemoteLogDataBlockStatuses[MavRemoteLogDataBlockStatuses["ACK"] = 1] = "ACK";
})(MavRemoteLogDataBlockStatuses = exports.MavRemoteLogDataBlockStatuses || (exports.MavRemoteLogDataBlockStatuses = {}));
/**
 * Bus types for device operations.
 */
var DeviceOpBustype;
(function (DeviceOpBustype) {
    DeviceOpBustype[DeviceOpBustype["I2C"] = 0] = "I2C";
    DeviceOpBustype[DeviceOpBustype["SPI"] = 1] = "SPI";
})(DeviceOpBustype = exports.DeviceOpBustype || (exports.DeviceOpBustype = {}));
/**
 * Deepstall flight stage.
 */
var DeepstallStage;
(function (DeepstallStage) {
    DeepstallStage[DeepstallStage["FLY_TO_LANDING"] = 0] = "FLY_TO_LANDING";
    DeepstallStage[DeepstallStage["ESTIMATE_WIND"] = 1] = "ESTIMATE_WIND";
    DeepstallStage[DeepstallStage["WAIT_FOR_BREAKOUT"] = 2] = "WAIT_FOR_BREAKOUT";
    DeepstallStage[DeepstallStage["FLY_TO_ARC"] = 3] = "FLY_TO_ARC";
    DeepstallStage[DeepstallStage["ARC"] = 4] = "ARC";
    DeepstallStage[DeepstallStage["APPROACH"] = 5] = "APPROACH";
    DeepstallStage[DeepstallStage["LAND"] = 6] = "LAND";
})(DeepstallStage = exports.DeepstallStage || (exports.DeepstallStage = {}));
/**
 * A mapping of plane flight modes for custom_mode field of heartbeat.
 */
var PlaneMode;
(function (PlaneMode) {
    PlaneMode[PlaneMode["MANUAL"] = 0] = "MANUAL";
    PlaneMode[PlaneMode["CIRCLE"] = 1] = "CIRCLE";
    PlaneMode[PlaneMode["STABILIZE"] = 2] = "STABILIZE";
    PlaneMode[PlaneMode["TRAINING"] = 3] = "TRAINING";
    PlaneMode[PlaneMode["ACRO"] = 4] = "ACRO";
    PlaneMode[PlaneMode["FLY_BY_WIRE_A"] = 5] = "FLY_BY_WIRE_A";
    PlaneMode[PlaneMode["FLY_BY_WIRE_B"] = 6] = "FLY_BY_WIRE_B";
    PlaneMode[PlaneMode["CRUISE"] = 7] = "CRUISE";
    PlaneMode[PlaneMode["AUTOTUNE"] = 8] = "AUTOTUNE";
    PlaneMode[PlaneMode["AUTO"] = 10] = "AUTO";
    PlaneMode[PlaneMode["RTL"] = 11] = "RTL";
    PlaneMode[PlaneMode["LOITER"] = 12] = "LOITER";
    PlaneMode[PlaneMode["TAKEOFF"] = 13] = "TAKEOFF";
    PlaneMode[PlaneMode["AVOID_ADSB"] = 14] = "AVOID_ADSB";
    PlaneMode[PlaneMode["GUIDED"] = 15] = "GUIDED";
    PlaneMode[PlaneMode["INITIALIZING"] = 16] = "INITIALIZING";
    PlaneMode[PlaneMode["QSTABILIZE"] = 17] = "QSTABILIZE";
    PlaneMode[PlaneMode["QHOVER"] = 18] = "QHOVER";
    PlaneMode[PlaneMode["QLOITER"] = 19] = "QLOITER";
    PlaneMode[PlaneMode["QLAND"] = 20] = "QLAND";
    PlaneMode[PlaneMode["QRTL"] = 21] = "QRTL";
    PlaneMode[PlaneMode["QAUTOTUNE"] = 22] = "QAUTOTUNE";
    PlaneMode[PlaneMode["QACRO"] = 23] = "QACRO";
    PlaneMode[PlaneMode["THERMAL"] = 24] = "THERMAL";
})(PlaneMode = exports.PlaneMode || (exports.PlaneMode = {}));
/**
 * A mapping of copter flight modes for custom_mode field of heartbeat.
 */
var CopterMode;
(function (CopterMode) {
    CopterMode[CopterMode["STABILIZE"] = 0] = "STABILIZE";
    CopterMode[CopterMode["ACRO"] = 1] = "ACRO";
    CopterMode[CopterMode["ALT_HOLD"] = 2] = "ALT_HOLD";
    CopterMode[CopterMode["AUTO"] = 3] = "AUTO";
    CopterMode[CopterMode["GUIDED"] = 4] = "GUIDED";
    CopterMode[CopterMode["LOITER"] = 5] = "LOITER";
    CopterMode[CopterMode["RTL"] = 6] = "RTL";
    CopterMode[CopterMode["CIRCLE"] = 7] = "CIRCLE";
    CopterMode[CopterMode["LAND"] = 9] = "LAND";
    CopterMode[CopterMode["DRIFT"] = 11] = "DRIFT";
    CopterMode[CopterMode["SPORT"] = 13] = "SPORT";
    CopterMode[CopterMode["FLIP"] = 14] = "FLIP";
    CopterMode[CopterMode["AUTOTUNE"] = 15] = "AUTOTUNE";
    CopterMode[CopterMode["POSHOLD"] = 16] = "POSHOLD";
    CopterMode[CopterMode["BRAKE"] = 17] = "BRAKE";
    CopterMode[CopterMode["THROW"] = 18] = "THROW";
    CopterMode[CopterMode["AVOID_ADSB"] = 19] = "AVOID_ADSB";
    CopterMode[CopterMode["GUIDED_NOGPS"] = 20] = "GUIDED_NOGPS";
    CopterMode[CopterMode["SMART_RTL"] = 21] = "SMART_RTL";
    CopterMode[CopterMode["FLOWHOLD"] = 22] = "FLOWHOLD";
    CopterMode[CopterMode["FOLLOW"] = 23] = "FOLLOW";
    CopterMode[CopterMode["ZIGZAG"] = 24] = "ZIGZAG";
    CopterMode[CopterMode["SYSTEMID"] = 25] = "SYSTEMID";
    CopterMode[CopterMode["AUTOROTATE"] = 26] = "AUTOROTATE";
})(CopterMode = exports.CopterMode || (exports.CopterMode = {}));
/**
 * A mapping of sub flight modes for custom_mode field of heartbeat.
 */
var SubMode;
(function (SubMode) {
    SubMode[SubMode["STABILIZE"] = 0] = "STABILIZE";
    SubMode[SubMode["ACRO"] = 1] = "ACRO";
    SubMode[SubMode["ALT_HOLD"] = 2] = "ALT_HOLD";
    SubMode[SubMode["AUTO"] = 3] = "AUTO";
    SubMode[SubMode["GUIDED"] = 4] = "GUIDED";
    SubMode[SubMode["CIRCLE"] = 7] = "CIRCLE";
    SubMode[SubMode["SURFACE"] = 9] = "SURFACE";
    SubMode[SubMode["POSHOLD"] = 16] = "POSHOLD";
    SubMode[SubMode["MANUAL"] = 19] = "MANUAL";
})(SubMode = exports.SubMode || (exports.SubMode = {}));
/**
 * A mapping of rover flight modes for custom_mode field of heartbeat.
 */
var RoverMode;
(function (RoverMode) {
    RoverMode[RoverMode["MANUAL"] = 0] = "MANUAL";
    RoverMode[RoverMode["ACRO"] = 1] = "ACRO";
    RoverMode[RoverMode["STEERING"] = 3] = "STEERING";
    RoverMode[RoverMode["HOLD"] = 4] = "HOLD";
    RoverMode[RoverMode["LOITER"] = 5] = "LOITER";
    RoverMode[RoverMode["FOLLOW"] = 6] = "FOLLOW";
    RoverMode[RoverMode["SIMPLE"] = 7] = "SIMPLE";
    RoverMode[RoverMode["AUTO"] = 10] = "AUTO";
    RoverMode[RoverMode["RTL"] = 11] = "RTL";
    RoverMode[RoverMode["SMART_RTL"] = 12] = "SMART_RTL";
    RoverMode[RoverMode["GUIDED"] = 15] = "GUIDED";
    RoverMode[RoverMode["INITIALIZING"] = 16] = "INITIALIZING";
})(RoverMode = exports.RoverMode || (exports.RoverMode = {}));
/**
 * A mapping of antenna tracker flight modes for custom_mode field of heartbeat.
 */
var TrackerMode;
(function (TrackerMode) {
    TrackerMode[TrackerMode["MANUAL"] = 0] = "MANUAL";
    TrackerMode[TrackerMode["STOP"] = 1] = "STOP";
    TrackerMode[TrackerMode["SCAN"] = 2] = "SCAN";
    TrackerMode[TrackerMode["SERVO_TEST"] = 3] = "SERVO_TEST";
    TrackerMode[TrackerMode["AUTO"] = 10] = "AUTO";
    TrackerMode[TrackerMode["INITIALIZING"] = 16] = "INITIALIZING";
})(TrackerMode = exports.TrackerMode || (exports.TrackerMode = {}));
/**
 * The type of parameter for the OSD parameter editor.
 */
var OsdParamConfigType;
(function (OsdParamConfigType) {
    OsdParamConfigType[OsdParamConfigType["NONE"] = 0] = "NONE";
    OsdParamConfigType[OsdParamConfigType["SERIAL_PROTOCOL"] = 1] = "SERIAL_PROTOCOL";
    OsdParamConfigType[OsdParamConfigType["SERVO_FUNCTION"] = 2] = "SERVO_FUNCTION";
    OsdParamConfigType[OsdParamConfigType["AUX_FUNCTION"] = 3] = "AUX_FUNCTION";
    OsdParamConfigType[OsdParamConfigType["FLIGHT_MODE"] = 4] = "FLIGHT_MODE";
    OsdParamConfigType[OsdParamConfigType["FAILSAFE_ACTION"] = 5] = "FAILSAFE_ACTION";
    OsdParamConfigType[OsdParamConfigType["FAILSAFE_ACTION_1"] = 6] = "FAILSAFE_ACTION_1";
    OsdParamConfigType[OsdParamConfigType["FAILSAFE_ACTION_2"] = 7] = "FAILSAFE_ACTION_2";
    OsdParamConfigType[OsdParamConfigType["NUM_TYPES"] = 8] = "NUM_TYPES";
})(OsdParamConfigType = exports.OsdParamConfigType || (exports.OsdParamConfigType = {}));
/**
 * The error type for the OSD parameter editor.
 */
var OsdParamConfigError;
(function (OsdParamConfigError) {
    OsdParamConfigError[OsdParamConfigError["SUCCESS"] = 0] = "SUCCESS";
    OsdParamConfigError[OsdParamConfigError["INVALID_SCREEN"] = 1] = "INVALID_SCREEN";
    OsdParamConfigError[OsdParamConfigError["INVALID_PARAMETER_INDEX"] = 2] = "INVALID_PARAMETER_INDEX";
    OsdParamConfigError[OsdParamConfigError["INVALID_PARAMETER"] = 3] = "INVALID_PARAMETER";
})(OsdParamConfigError = exports.OsdParamConfigError || (exports.OsdParamConfigError = {}));
/**
 * Offsets and calibrations values for hardware sensors. This makes it easier to debug the calibration
 * process.
 */
class SensorOffsets extends mavlink_1.MavLinkData {
}
exports.SensorOffsets = SensorOffsets;
SensorOffsets.MSG_ID = 150;
SensorOffsets.MSG_NAME = 'SENSOR_OFFSETS';
SensorOffsets.PAYLOAD_LENGTH = 42;
SensorOffsets.MAGIC_NUMBER = 134;
SensorOffsets.FIELDS = [
    new mavlink_1.MavLinkPacketField('mag_declination', 'magDeclination', 0, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('raw_press', 'rawPress', 4, false, 4, 'int32_t', ''),
    new mavlink_1.MavLinkPacketField('raw_temp', 'rawTemp', 8, false, 4, 'int32_t', ''),
    new mavlink_1.MavLinkPacketField('gyro_cal_x', 'gyroCalX', 12, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('gyro_cal_y', 'gyroCalY', 16, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('gyro_cal_z', 'gyroCalZ', 20, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('accel_cal_x', 'accelCalX', 24, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('accel_cal_y', 'accelCalY', 28, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('accel_cal_z', 'accelCalZ', 32, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('mag_ofs_x', 'magOfsX', 36, false, 2, 'int16_t', ''),
    new mavlink_1.MavLinkPacketField('mag_ofs_y', 'magOfsY', 38, false, 2, 'int16_t', ''),
    new mavlink_1.MavLinkPacketField('mag_ofs_z', 'magOfsZ', 40, false, 2, 'int16_t', ''),
];
/**
 * Set the magnetometer offsets
 *
 * @deprecated since 2014-07, replaced by MAV_CMD_PREFLIGHT_SET_SENSOR_OFFSETS
 */
class SetMagOffsets extends mavlink_1.MavLinkData {
}
exports.SetMagOffsets = SetMagOffsets;
SetMagOffsets.MSG_ID = 151;
SetMagOffsets.MSG_NAME = 'SET_MAG_OFFSETS';
SetMagOffsets.PAYLOAD_LENGTH = 8;
SetMagOffsets.MAGIC_NUMBER = 219;
SetMagOffsets.FIELDS = [
    new mavlink_1.MavLinkPacketField('mag_ofs_x', 'magOfsX', 0, false, 2, 'int16_t', ''),
    new mavlink_1.MavLinkPacketField('mag_ofs_y', 'magOfsY', 2, false, 2, 'int16_t', ''),
    new mavlink_1.MavLinkPacketField('mag_ofs_z', 'magOfsZ', 4, false, 2, 'int16_t', ''),
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 6, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 7, false, 1, 'uint8_t', ''),
];
/**
 * State of APM memory.
 */
class MemInfo extends mavlink_1.MavLinkData {
}
exports.MemInfo = MemInfo;
MemInfo.MSG_ID = 152;
MemInfo.MSG_NAME = 'MEMINFO';
MemInfo.PAYLOAD_LENGTH = 8;
MemInfo.MAGIC_NUMBER = 208;
MemInfo.FIELDS = [
    new mavlink_1.MavLinkPacketField('brkval', 'brkval', 0, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('freemem', 'freemem', 2, false, 2, 'uint16_t', 'bytes'),
    new mavlink_1.MavLinkPacketField('freemem32', 'freemem32', 4, true, 4, 'uint32_t', 'bytes'),
];
/**
 * Raw ADC output.
 */
class ApAdc extends mavlink_1.MavLinkData {
}
exports.ApAdc = ApAdc;
ApAdc.MSG_ID = 153;
ApAdc.MSG_NAME = 'AP_ADC';
ApAdc.PAYLOAD_LENGTH = 12;
ApAdc.MAGIC_NUMBER = 188;
ApAdc.FIELDS = [
    new mavlink_1.MavLinkPacketField('adc1', 'adc1', 0, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('adc2', 'adc2', 2, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('adc3', 'adc3', 4, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('adc4', 'adc4', 6, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('adc5', 'adc5', 8, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('adc6', 'adc6', 10, false, 2, 'uint16_t', ''),
];
/**
 * Configure on-board Camera Control System.
 */
class DigicamConfigure extends mavlink_1.MavLinkData {
}
exports.DigicamConfigure = DigicamConfigure;
DigicamConfigure.MSG_ID = 154;
DigicamConfigure.MSG_NAME = 'DIGICAM_CONFIGURE';
DigicamConfigure.PAYLOAD_LENGTH = 15;
DigicamConfigure.MAGIC_NUMBER = 84;
DigicamConfigure.FIELDS = [
    new mavlink_1.MavLinkPacketField('extra_value', 'extraValue', 0, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('shutter_speed', 'shutterSpeed', 4, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 6, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 7, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('mode', 'mode', 8, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('aperture', 'aperture', 9, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('iso', 'iso', 10, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('exposure_type', 'exposureType', 11, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('command_id', 'commandId', 12, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('engine_cut_off', 'engineCutOff', 13, false, 1, 'uint8_t', 'ds'),
    new mavlink_1.MavLinkPacketField('extra_param', 'extraParam', 14, false, 1, 'uint8_t', ''),
];
/**
 * Control on-board Camera Control System to take shots.
 */
class DigicamControl extends mavlink_1.MavLinkData {
}
exports.DigicamControl = DigicamControl;
DigicamControl.MSG_ID = 155;
DigicamControl.MSG_NAME = 'DIGICAM_CONTROL';
DigicamControl.PAYLOAD_LENGTH = 13;
DigicamControl.MAGIC_NUMBER = 22;
DigicamControl.FIELDS = [
    new mavlink_1.MavLinkPacketField('extra_value', 'extraValue', 0, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 4, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 5, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('session', 'session', 6, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('zoom_pos', 'zoomPos', 7, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('zoom_step', 'zoomStep', 8, false, 1, 'int8_t', ''),
    new mavlink_1.MavLinkPacketField('focus_lock', 'focusLock', 9, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('shot', 'shot', 10, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('command_id', 'commandId', 11, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('extra_param', 'extraParam', 12, false, 1, 'uint8_t', ''),
];
/**
 * Message to configure a camera mount, directional antenna, etc.
 */
class MountConfigure extends mavlink_1.MavLinkData {
}
exports.MountConfigure = MountConfigure;
MountConfigure.MSG_ID = 156;
MountConfigure.MSG_NAME = 'MOUNT_CONFIGURE';
MountConfigure.PAYLOAD_LENGTH = 6;
MountConfigure.MAGIC_NUMBER = 19;
MountConfigure.FIELDS = [
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 0, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 1, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('mount_mode', 'mountMode', 2, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('stab_roll', 'stabRoll', 3, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('stab_pitch', 'stabPitch', 4, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('stab_yaw', 'stabYaw', 5, false, 1, 'uint8_t', ''),
];
/**
 * Message to control a camera mount, directional antenna, etc.
 */
class MountControl extends mavlink_1.MavLinkData {
}
exports.MountControl = MountControl;
MountControl.MSG_ID = 157;
MountControl.MSG_NAME = 'MOUNT_CONTROL';
MountControl.PAYLOAD_LENGTH = 15;
MountControl.MAGIC_NUMBER = 21;
MountControl.FIELDS = [
    new mavlink_1.MavLinkPacketField('input_a', 'inputA', 0, false, 4, 'int32_t', ''),
    new mavlink_1.MavLinkPacketField('input_b', 'inputB', 4, false, 4, 'int32_t', ''),
    new mavlink_1.MavLinkPacketField('input_c', 'inputC', 8, false, 4, 'int32_t', ''),
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 12, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 13, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('save_position', 'savePosition', 14, false, 1, 'uint8_t', ''),
];
/**
 * Message with some status from APM to GCS about camera or antenna mount.
 */
class MountStatus extends mavlink_1.MavLinkData {
}
exports.MountStatus = MountStatus;
MountStatus.MSG_ID = 158;
MountStatus.MSG_NAME = 'MOUNT_STATUS';
MountStatus.PAYLOAD_LENGTH = 14;
MountStatus.MAGIC_NUMBER = 134;
MountStatus.FIELDS = [
    new mavlink_1.MavLinkPacketField('pointing_a', 'pointingA', 0, false, 4, 'int32_t', 'cdeg'),
    new mavlink_1.MavLinkPacketField('pointing_b', 'pointingB', 4, false, 4, 'int32_t', 'cdeg'),
    new mavlink_1.MavLinkPacketField('pointing_c', 'pointingC', 8, false, 4, 'int32_t', 'cdeg'),
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 12, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 13, false, 1, 'uint8_t', ''),
];
/**
 * A fence point. Used to set a point when from GCS -> MAV. Also used to return a point from MAV ->
 * GCS.
 */
class FencePoint extends mavlink_1.MavLinkData {
}
exports.FencePoint = FencePoint;
FencePoint.MSG_ID = 160;
FencePoint.MSG_NAME = 'FENCE_POINT';
FencePoint.PAYLOAD_LENGTH = 12;
FencePoint.MAGIC_NUMBER = 78;
FencePoint.FIELDS = [
    new mavlink_1.MavLinkPacketField('lat', 'lat', 0, false, 4, 'float', 'deg'),
    new mavlink_1.MavLinkPacketField('lng', 'lng', 4, false, 4, 'float', 'deg'),
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 8, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 9, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('idx', 'idx', 10, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('count', 'count', 11, false, 1, 'uint8_t', ''),
];
/**
 * Request a current fence point from MAV.
 */
class FenceFetchPoint extends mavlink_1.MavLinkData {
}
exports.FenceFetchPoint = FenceFetchPoint;
FenceFetchPoint.MSG_ID = 161;
FenceFetchPoint.MSG_NAME = 'FENCE_FETCH_POINT';
FenceFetchPoint.PAYLOAD_LENGTH = 3;
FenceFetchPoint.MAGIC_NUMBER = 68;
FenceFetchPoint.FIELDS = [
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 0, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 1, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('idx', 'idx', 2, false, 1, 'uint8_t', ''),
];
/**
 * Status of DCM attitude estimator.
 */
class Ahrs extends mavlink_1.MavLinkData {
}
exports.Ahrs = Ahrs;
Ahrs.MSG_ID = 163;
Ahrs.MSG_NAME = 'AHRS';
Ahrs.PAYLOAD_LENGTH = 28;
Ahrs.MAGIC_NUMBER = 127;
Ahrs.FIELDS = [
    new mavlink_1.MavLinkPacketField('omegaIx', 'omegaIx', 0, false, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('omegaIy', 'omegaIy', 4, false, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('omegaIz', 'omegaIz', 8, false, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('accel_weight', 'accelWeight', 12, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('renorm_val', 'renormVal', 16, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('error_rp', 'errorRp', 20, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('error_yaw', 'errorYaw', 24, false, 4, 'float', ''),
];
/**
 * Status of simulation environment, if used.
 */
class SimState extends mavlink_1.MavLinkData {
}
exports.SimState = SimState;
SimState.MSG_ID = 164;
SimState.MSG_NAME = 'SIMSTATE';
SimState.PAYLOAD_LENGTH = 44;
SimState.MAGIC_NUMBER = 154;
SimState.FIELDS = [
    new mavlink_1.MavLinkPacketField('roll', 'roll', 0, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('pitch', 'pitch', 4, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('yaw', 'yaw', 8, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('xacc', 'xacc', 12, false, 4, 'float', 'm/s/s'),
    new mavlink_1.MavLinkPacketField('yacc', 'yacc', 16, false, 4, 'float', 'm/s/s'),
    new mavlink_1.MavLinkPacketField('zacc', 'zacc', 20, false, 4, 'float', 'm/s/s'),
    new mavlink_1.MavLinkPacketField('xgyro', 'xgyro', 24, false, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('ygyro', 'ygyro', 28, false, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('zgyro', 'zgyro', 32, false, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('lat', 'lat', 36, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('lng', 'lng', 40, false, 4, 'int32_t', 'degE7'),
];
/**
 * Status of key hardware.
 */
class HwStatus extends mavlink_1.MavLinkData {
}
exports.HwStatus = HwStatus;
HwStatus.MSG_ID = 165;
HwStatus.MSG_NAME = 'HWSTATUS';
HwStatus.PAYLOAD_LENGTH = 3;
HwStatus.MAGIC_NUMBER = 21;
HwStatus.FIELDS = [
    new mavlink_1.MavLinkPacketField('Vcc', 'Vcc', 0, false, 2, 'uint16_t', 'mV'),
    new mavlink_1.MavLinkPacketField('I2Cerr', 'I2Cerr', 2, false, 1, 'uint8_t', ''),
];
/**
 * Status generated by radio.
 */
class Radio extends mavlink_1.MavLinkData {
}
exports.Radio = Radio;
Radio.MSG_ID = 166;
Radio.MSG_NAME = 'RADIO';
Radio.PAYLOAD_LENGTH = 9;
Radio.MAGIC_NUMBER = 21;
Radio.FIELDS = [
    new mavlink_1.MavLinkPacketField('rxerrors', 'rxerrors', 0, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('fixed', 'fixed', 2, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('rssi', 'rssi', 4, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('remrssi', 'remrssi', 5, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('txbuf', 'txbuf', 6, false, 1, 'uint8_t', '%'),
    new mavlink_1.MavLinkPacketField('noise', 'noise', 7, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('remnoise', 'remnoise', 8, false, 1, 'uint8_t', ''),
];
/**
 * Status of AP_Limits. Sent in extended status stream when AP_Limits is enabled.
 */
class LimitsStatus extends mavlink_1.MavLinkData {
}
exports.LimitsStatus = LimitsStatus;
LimitsStatus.MSG_ID = 167;
LimitsStatus.MSG_NAME = 'LIMITS_STATUS';
LimitsStatus.PAYLOAD_LENGTH = 22;
LimitsStatus.MAGIC_NUMBER = 144;
LimitsStatus.FIELDS = [
    new mavlink_1.MavLinkPacketField('last_trigger', 'lastTrigger', 0, false, 4, 'uint32_t', 'ms'),
    new mavlink_1.MavLinkPacketField('last_action', 'lastAction', 4, false, 4, 'uint32_t', 'ms'),
    new mavlink_1.MavLinkPacketField('last_recovery', 'lastRecovery', 8, false, 4, 'uint32_t', 'ms'),
    new mavlink_1.MavLinkPacketField('last_clear', 'lastClear', 12, false, 4, 'uint32_t', 'ms'),
    new mavlink_1.MavLinkPacketField('breach_count', 'breachCount', 16, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('limits_state', 'limitsState', 18, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('mods_enabled', 'modsEnabled', 19, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('mods_required', 'modsRequired', 20, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('mods_triggered', 'modsTriggered', 21, false, 1, 'uint8_t', ''),
];
/**
 * Wind estimation.
 */
class Wind extends mavlink_1.MavLinkData {
}
exports.Wind = Wind;
Wind.MSG_ID = 168;
Wind.MSG_NAME = 'WIND';
Wind.PAYLOAD_LENGTH = 12;
Wind.MAGIC_NUMBER = 1;
Wind.FIELDS = [
    new mavlink_1.MavLinkPacketField('direction', 'direction', 0, false, 4, 'float', 'deg'),
    new mavlink_1.MavLinkPacketField('speed', 'speed', 4, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('speed_z', 'speedZ', 8, false, 4, 'float', 'm/s'),
];
/**
 * Data packet, size 16.
 */
class Data16 extends mavlink_1.MavLinkData {
}
exports.Data16 = Data16;
Data16.MSG_ID = 169;
Data16.MSG_NAME = 'DATA16';
Data16.PAYLOAD_LENGTH = 18;
Data16.MAGIC_NUMBER = 234;
Data16.FIELDS = [
    new mavlink_1.MavLinkPacketField('type', 'type', 0, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('len', 'len', 1, false, 1, 'uint8_t', 'bytes'),
    new mavlink_1.MavLinkPacketField('data', 'data', 2, false, 1, 'uint8_t[]', '', 16),
];
/**
 * Data packet, size 32.
 */
class Data32 extends mavlink_1.MavLinkData {
}
exports.Data32 = Data32;
Data32.MSG_ID = 170;
Data32.MSG_NAME = 'DATA32';
Data32.PAYLOAD_LENGTH = 34;
Data32.MAGIC_NUMBER = 73;
Data32.FIELDS = [
    new mavlink_1.MavLinkPacketField('type', 'type', 0, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('len', 'len', 1, false, 1, 'uint8_t', 'bytes'),
    new mavlink_1.MavLinkPacketField('data', 'data', 2, false, 1, 'uint8_t[]', '', 32),
];
/**
 * Data packet, size 64.
 */
class Data64 extends mavlink_1.MavLinkData {
}
exports.Data64 = Data64;
Data64.MSG_ID = 171;
Data64.MSG_NAME = 'DATA64';
Data64.PAYLOAD_LENGTH = 66;
Data64.MAGIC_NUMBER = 181;
Data64.FIELDS = [
    new mavlink_1.MavLinkPacketField('type', 'type', 0, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('len', 'len', 1, false, 1, 'uint8_t', 'bytes'),
    new mavlink_1.MavLinkPacketField('data', 'data', 2, false, 1, 'uint8_t[]', '', 64),
];
/**
 * Data packet, size 96.
 */
class Data96 extends mavlink_1.MavLinkData {
}
exports.Data96 = Data96;
Data96.MSG_ID = 172;
Data96.MSG_NAME = 'DATA96';
Data96.PAYLOAD_LENGTH = 98;
Data96.MAGIC_NUMBER = 22;
Data96.FIELDS = [
    new mavlink_1.MavLinkPacketField('type', 'type', 0, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('len', 'len', 1, false, 1, 'uint8_t', 'bytes'),
    new mavlink_1.MavLinkPacketField('data', 'data', 2, false, 1, 'uint8_t[]', '', 96),
];
/**
 * Rangefinder reporting.
 */
class RangeFinder extends mavlink_1.MavLinkData {
}
exports.RangeFinder = RangeFinder;
RangeFinder.MSG_ID = 173;
RangeFinder.MSG_NAME = 'RANGEFINDER';
RangeFinder.PAYLOAD_LENGTH = 8;
RangeFinder.MAGIC_NUMBER = 83;
RangeFinder.FIELDS = [
    new mavlink_1.MavLinkPacketField('distance', 'distance', 0, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('voltage', 'voltage', 4, false, 4, 'float', 'V'),
];
/**
 * Airspeed auto-calibration.
 */
class AirspeedAutocal extends mavlink_1.MavLinkData {
}
exports.AirspeedAutocal = AirspeedAutocal;
AirspeedAutocal.MSG_ID = 174;
AirspeedAutocal.MSG_NAME = 'AIRSPEED_AUTOCAL';
AirspeedAutocal.PAYLOAD_LENGTH = 48;
AirspeedAutocal.MAGIC_NUMBER = 167;
AirspeedAutocal.FIELDS = [
    new mavlink_1.MavLinkPacketField('vx', 'vx', 0, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('vy', 'vy', 4, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('vz', 'vz', 8, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('diff_pressure', 'diffPressure', 12, false, 4, 'float', 'Pa'),
    new mavlink_1.MavLinkPacketField('EAS2TAS', 'EAS2TAS', 16, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('ratio', 'ratio', 20, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('state_x', 'stateX', 24, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('state_y', 'stateY', 28, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('state_z', 'stateZ', 32, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('Pax', 'Pax', 36, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('Pby', 'Pby', 40, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('Pcz', 'Pcz', 44, false, 4, 'float', ''),
];
/**
 * A rally point. Used to set a point when from GCS -> MAV. Also used to return a point from MAV ->
 * GCS.
 */
class RallyPoint extends mavlink_1.MavLinkData {
}
exports.RallyPoint = RallyPoint;
RallyPoint.MSG_ID = 175;
RallyPoint.MSG_NAME = 'RALLY_POINT';
RallyPoint.PAYLOAD_LENGTH = 19;
RallyPoint.MAGIC_NUMBER = 138;
RallyPoint.FIELDS = [
    new mavlink_1.MavLinkPacketField('lat', 'lat', 0, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('lng', 'lng', 4, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('alt', 'alt', 8, false, 2, 'int16_t', 'm'),
    new mavlink_1.MavLinkPacketField('break_alt', 'breakAlt', 10, false, 2, 'int16_t', 'm'),
    new mavlink_1.MavLinkPacketField('land_dir', 'landDir', 12, false, 2, 'uint16_t', 'cdeg'),
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 14, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 15, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('idx', 'idx', 16, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('count', 'count', 17, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('flags', 'flags', 18, false, 1, 'uint8_t', ''),
];
/**
 * Request a current rally point from MAV. MAV should respond with a RALLY_POINT message. MAV should
 * not respond if the request is invalid.
 */
class RallyFetchPoint extends mavlink_1.MavLinkData {
}
exports.RallyFetchPoint = RallyFetchPoint;
RallyFetchPoint.MSG_ID = 176;
RallyFetchPoint.MSG_NAME = 'RALLY_FETCH_POINT';
RallyFetchPoint.PAYLOAD_LENGTH = 3;
RallyFetchPoint.MAGIC_NUMBER = 234;
RallyFetchPoint.FIELDS = [
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 0, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 1, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('idx', 'idx', 2, false, 1, 'uint8_t', ''),
];
/**
 * Status of compassmot calibration.
 */
class CompassMotStatus extends mavlink_1.MavLinkData {
}
exports.CompassMotStatus = CompassMotStatus;
CompassMotStatus.MSG_ID = 177;
CompassMotStatus.MSG_NAME = 'COMPASSMOT_STATUS';
CompassMotStatus.PAYLOAD_LENGTH = 20;
CompassMotStatus.MAGIC_NUMBER = 240;
CompassMotStatus.FIELDS = [
    new mavlink_1.MavLinkPacketField('current', 'current', 0, false, 4, 'float', 'A'),
    new mavlink_1.MavLinkPacketField('CompensationX', 'CompensationX', 4, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('CompensationY', 'CompensationY', 8, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('CompensationZ', 'CompensationZ', 12, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('throttle', 'throttle', 16, false, 2, 'uint16_t', 'd%'),
    new mavlink_1.MavLinkPacketField('interference', 'interference', 18, false, 2, 'uint16_t', '%'),
];
/**
 * Status of secondary AHRS filter if available.
 */
class Ahrs2 extends mavlink_1.MavLinkData {
}
exports.Ahrs2 = Ahrs2;
Ahrs2.MSG_ID = 178;
Ahrs2.MSG_NAME = 'AHRS2';
Ahrs2.PAYLOAD_LENGTH = 24;
Ahrs2.MAGIC_NUMBER = 47;
Ahrs2.FIELDS = [
    new mavlink_1.MavLinkPacketField('roll', 'roll', 0, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('pitch', 'pitch', 4, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('yaw', 'yaw', 8, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('altitude', 'altitude', 12, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('lat', 'lat', 16, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('lng', 'lng', 20, false, 4, 'int32_t', 'degE7'),
];
/**
 * Camera Event.
 */
class CameraStatus extends mavlink_1.MavLinkData {
}
exports.CameraStatus = CameraStatus;
CameraStatus.MSG_ID = 179;
CameraStatus.MSG_NAME = 'CAMERA_STATUS';
CameraStatus.PAYLOAD_LENGTH = 29;
CameraStatus.MAGIC_NUMBER = 189;
CameraStatus.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_usec', 'timeUsec', 0, false, 8, 'uint64_t', 'us'),
    new mavlink_1.MavLinkPacketField('p1', 'p1', 8, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('p2', 'p2', 12, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('p3', 'p3', 16, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('p4', 'p4', 20, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('img_idx', 'imgIdx', 24, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 26, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('cam_idx', 'camIdx', 27, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('event_id', 'eventId', 28, false, 1, 'uint8_t', ''),
];
/**
 * Camera Capture Feedback.
 */
class CameraFeedback extends mavlink_1.MavLinkData {
}
exports.CameraFeedback = CameraFeedback;
CameraFeedback.MSG_ID = 180;
CameraFeedback.MSG_NAME = 'CAMERA_FEEDBACK';
CameraFeedback.PAYLOAD_LENGTH = 47;
CameraFeedback.MAGIC_NUMBER = 52;
CameraFeedback.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_usec', 'timeUsec', 0, false, 8, 'uint64_t', 'us'),
    new mavlink_1.MavLinkPacketField('lat', 'lat', 8, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('lng', 'lng', 12, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('alt_msl', 'altMsl', 16, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('alt_rel', 'altRel', 20, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('roll', 'roll', 24, false, 4, 'float', 'deg'),
    new mavlink_1.MavLinkPacketField('pitch', 'pitch', 28, false, 4, 'float', 'deg'),
    new mavlink_1.MavLinkPacketField('yaw', 'yaw', 32, false, 4, 'float', 'deg'),
    new mavlink_1.MavLinkPacketField('foc_len', 'focLen', 36, false, 4, 'float', 'mm'),
    new mavlink_1.MavLinkPacketField('img_idx', 'imgIdx', 40, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 42, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('cam_idx', 'camIdx', 43, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('flags', 'flags', 44, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('completed_captures', 'completedCaptures', 45, true, 2, 'uint16_t', ''),
];
/**
 * 2nd Battery status
 *
 * @deprecated since 2017-04, replaced by BATTERY_STATUS
 */
class Battery2 extends mavlink_1.MavLinkData {
}
exports.Battery2 = Battery2;
Battery2.MSG_ID = 181;
Battery2.MSG_NAME = 'BATTERY2';
Battery2.PAYLOAD_LENGTH = 4;
Battery2.MAGIC_NUMBER = 174;
Battery2.FIELDS = [
    new mavlink_1.MavLinkPacketField('voltage', 'voltage', 0, false, 2, 'uint16_t', 'mV'),
    new mavlink_1.MavLinkPacketField('current_battery', 'currentBattery', 2, false, 2, 'int16_t', 'cA'),
];
/**
 * Status of third AHRS filter if available. This is for ANU research group (Ali and Sean).
 */
class Ahrs3 extends mavlink_1.MavLinkData {
}
exports.Ahrs3 = Ahrs3;
Ahrs3.MSG_ID = 182;
Ahrs3.MSG_NAME = 'AHRS3';
Ahrs3.PAYLOAD_LENGTH = 40;
Ahrs3.MAGIC_NUMBER = 229;
Ahrs3.FIELDS = [
    new mavlink_1.MavLinkPacketField('roll', 'roll', 0, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('pitch', 'pitch', 4, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('yaw', 'yaw', 8, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('altitude', 'altitude', 12, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('lat', 'lat', 16, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('lng', 'lng', 20, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('v1', 'v1', 24, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('v2', 'v2', 28, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('v3', 'v3', 32, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('v4', 'v4', 36, false, 4, 'float', ''),
];
/**
 * Request the autopilot version from the system/component.
 */
class AutopilotVersionRequest extends mavlink_1.MavLinkData {
}
exports.AutopilotVersionRequest = AutopilotVersionRequest;
AutopilotVersionRequest.MSG_ID = 183;
AutopilotVersionRequest.MSG_NAME = 'AUTOPILOT_VERSION_REQUEST';
AutopilotVersionRequest.PAYLOAD_LENGTH = 2;
AutopilotVersionRequest.MAGIC_NUMBER = 85;
AutopilotVersionRequest.FIELDS = [
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 0, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 1, false, 1, 'uint8_t', ''),
];
/**
 * Send a block of log data to remote location.
 */
class RemoteLogDataBlock extends mavlink_1.MavLinkData {
}
exports.RemoteLogDataBlock = RemoteLogDataBlock;
RemoteLogDataBlock.MSG_ID = 184;
RemoteLogDataBlock.MSG_NAME = 'REMOTE_LOG_DATA_BLOCK';
RemoteLogDataBlock.PAYLOAD_LENGTH = 206;
RemoteLogDataBlock.MAGIC_NUMBER = 159;
RemoteLogDataBlock.FIELDS = [
    new mavlink_1.MavLinkPacketField('seqno', 'seqno', 0, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 4, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 5, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('data', 'data', 6, false, 1, 'uint8_t[]', '', 200),
];
/**
 * Send Status of each log block that autopilot board might have sent.
 */
class RemoteLogBlockStatus extends mavlink_1.MavLinkData {
}
exports.RemoteLogBlockStatus = RemoteLogBlockStatus;
RemoteLogBlockStatus.MSG_ID = 185;
RemoteLogBlockStatus.MSG_NAME = 'REMOTE_LOG_BLOCK_STATUS';
RemoteLogBlockStatus.PAYLOAD_LENGTH = 7;
RemoteLogBlockStatus.MAGIC_NUMBER = 186;
RemoteLogBlockStatus.FIELDS = [
    new mavlink_1.MavLinkPacketField('seqno', 'seqno', 0, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 4, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 5, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('status', 'status', 6, false, 1, 'uint8_t', ''),
];
/**
 * Control vehicle LEDs.
 */
class LedControl extends mavlink_1.MavLinkData {
}
exports.LedControl = LedControl;
LedControl.MSG_ID = 186;
LedControl.MSG_NAME = 'LED_CONTROL';
LedControl.PAYLOAD_LENGTH = 29;
LedControl.MAGIC_NUMBER = 72;
LedControl.FIELDS = [
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 0, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 1, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('instance', 'instance', 2, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('pattern', 'pattern', 3, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('custom_len', 'customLen', 4, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('custom_bytes', 'customBytes', 5, false, 1, 'uint8_t[]', '', 24),
];
/**
 * Reports progress of compass calibration.
 */
class MagCalProgress extends mavlink_1.MavLinkData {
}
exports.MagCalProgress = MagCalProgress;
MagCalProgress.MSG_ID = 191;
MagCalProgress.MSG_NAME = 'MAG_CAL_PROGRESS';
MagCalProgress.PAYLOAD_LENGTH = 27;
MagCalProgress.MAGIC_NUMBER = 92;
MagCalProgress.FIELDS = [
    new mavlink_1.MavLinkPacketField('direction_x', 'directionX', 0, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('direction_y', 'directionY', 4, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('direction_z', 'directionZ', 8, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('compass_id', 'compassId', 12, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('cal_mask', 'calMask', 13, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('cal_status', 'calStatus', 14, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('attempt', 'attempt', 15, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('completion_pct', 'completionPct', 16, false, 1, 'uint8_t', '%'),
    new mavlink_1.MavLinkPacketField('completion_mask', 'completionMask', 17, false, 1, 'uint8_t[]', '', 10),
];
/**
 * EKF Status message including flags and variances.
 */
class EkfStatusReport extends mavlink_1.MavLinkData {
}
exports.EkfStatusReport = EkfStatusReport;
EkfStatusReport.MSG_ID = 193;
EkfStatusReport.MSG_NAME = 'EKF_STATUS_REPORT';
EkfStatusReport.PAYLOAD_LENGTH = 26;
EkfStatusReport.MAGIC_NUMBER = 71;
EkfStatusReport.FIELDS = [
    new mavlink_1.MavLinkPacketField('velocity_variance', 'velocityVariance', 0, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('pos_horiz_variance', 'posHorizVariance', 4, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('pos_vert_variance', 'posVertVariance', 8, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('compass_variance', 'compassVariance', 12, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('terrain_alt_variance', 'terrainAltVariance', 16, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('flags', 'flags', 20, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('airspeed_variance', 'airspeedVariance', 22, true, 4, 'float', ''),
];
/**
 * PID tuning information.
 */
class PidTuning extends mavlink_1.MavLinkData {
}
exports.PidTuning = PidTuning;
PidTuning.MSG_ID = 194;
PidTuning.MSG_NAME = 'PID_TUNING';
PidTuning.PAYLOAD_LENGTH = 25;
PidTuning.MAGIC_NUMBER = 98;
PidTuning.FIELDS = [
    new mavlink_1.MavLinkPacketField('desired', 'desired', 0, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('achieved', 'achieved', 4, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('FF', 'FF', 8, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('P', 'P', 12, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('I', 'I', 16, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('D', 'D', 20, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('axis', 'axis', 24, false, 1, 'uint8_t', ''),
];
/**
 * Deepstall path planning.
 */
class Deepstall extends mavlink_1.MavLinkData {
}
exports.Deepstall = Deepstall;
Deepstall.MSG_ID = 195;
Deepstall.MSG_NAME = 'DEEPSTALL';
Deepstall.PAYLOAD_LENGTH = 37;
Deepstall.MAGIC_NUMBER = 120;
Deepstall.FIELDS = [
    new mavlink_1.MavLinkPacketField('landing_lat', 'landingLat', 0, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('landing_lon', 'landingLon', 4, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('path_lat', 'pathLat', 8, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('path_lon', 'pathLon', 12, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('arc_entry_lat', 'arcEntryLat', 16, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('arc_entry_lon', 'arcEntryLon', 20, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('altitude', 'altitude', 24, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('expected_travel_distance', 'expectedTravelDistance', 28, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('cross_track_error', 'crossTrackError', 32, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('stage', 'stage', 36, false, 1, 'uint8_t', ''),
];
/**
 * 3 axis gimbal measurements.
 */
class GimbalReport extends mavlink_1.MavLinkData {
}
exports.GimbalReport = GimbalReport;
GimbalReport.MSG_ID = 200;
GimbalReport.MSG_NAME = 'GIMBAL_REPORT';
GimbalReport.PAYLOAD_LENGTH = 42;
GimbalReport.MAGIC_NUMBER = 134;
GimbalReport.FIELDS = [
    new mavlink_1.MavLinkPacketField('delta_time', 'deltaTime', 0, false, 4, 'float', 's'),
    new mavlink_1.MavLinkPacketField('delta_angle_x', 'deltaAngleX', 4, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('delta_angle_y', 'deltaAngleY', 8, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('delta_angle_z', 'deltaAngleZ', 12, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('delta_velocity_x', 'deltaVelocityX', 16, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('delta_velocity_y', 'deltaVelocityY', 20, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('delta_velocity_z', 'deltaVelocityZ', 24, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('joint_roll', 'jointRoll', 28, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('joint_el', 'jointEl', 32, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('joint_az', 'jointAz', 36, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 40, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 41, false, 1, 'uint8_t', ''),
];
/**
 * Control message for rate gimbal.
 */
class GimbalControl extends mavlink_1.MavLinkData {
}
exports.GimbalControl = GimbalControl;
GimbalControl.MSG_ID = 201;
GimbalControl.MSG_NAME = 'GIMBAL_CONTROL';
GimbalControl.PAYLOAD_LENGTH = 14;
GimbalControl.MAGIC_NUMBER = 205;
GimbalControl.FIELDS = [
    new mavlink_1.MavLinkPacketField('demanded_rate_x', 'demandedRateX', 0, false, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('demanded_rate_y', 'demandedRateY', 4, false, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('demanded_rate_z', 'demandedRateZ', 8, false, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 12, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 13, false, 1, 'uint8_t', ''),
];
/**
 * 100 Hz gimbal torque command telemetry.
 */
class GimbalTorqueCmdReport extends mavlink_1.MavLinkData {
}
exports.GimbalTorqueCmdReport = GimbalTorqueCmdReport;
GimbalTorqueCmdReport.MSG_ID = 214;
GimbalTorqueCmdReport.MSG_NAME = 'GIMBAL_TORQUE_CMD_REPORT';
GimbalTorqueCmdReport.PAYLOAD_LENGTH = 8;
GimbalTorqueCmdReport.MAGIC_NUMBER = 69;
GimbalTorqueCmdReport.FIELDS = [
    new mavlink_1.MavLinkPacketField('rl_torque_cmd', 'rlTorqueCmd', 0, false, 2, 'int16_t', ''),
    new mavlink_1.MavLinkPacketField('el_torque_cmd', 'elTorqueCmd', 2, false, 2, 'int16_t', ''),
    new mavlink_1.MavLinkPacketField('az_torque_cmd', 'azTorqueCmd', 4, false, 2, 'int16_t', ''),
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 6, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 7, false, 1, 'uint8_t', ''),
];
/**
 * Heartbeat from a HeroBus attached GoPro.
 */
class GoproHeartbeat extends mavlink_1.MavLinkData {
}
exports.GoproHeartbeat = GoproHeartbeat;
GoproHeartbeat.MSG_ID = 215;
GoproHeartbeat.MSG_NAME = 'GOPRO_HEARTBEAT';
GoproHeartbeat.PAYLOAD_LENGTH = 3;
GoproHeartbeat.MAGIC_NUMBER = 101;
GoproHeartbeat.FIELDS = [
    new mavlink_1.MavLinkPacketField('status', 'status', 0, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('capture_mode', 'captureMode', 1, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('flags', 'flags', 2, false, 1, 'uint8_t', ''),
];
/**
 * Request a GOPRO_COMMAND response from the GoPro.
 */
class GoproGetRequest extends mavlink_1.MavLinkData {
}
exports.GoproGetRequest = GoproGetRequest;
GoproGetRequest.MSG_ID = 216;
GoproGetRequest.MSG_NAME = 'GOPRO_GET_REQUEST';
GoproGetRequest.PAYLOAD_LENGTH = 3;
GoproGetRequest.MAGIC_NUMBER = 50;
GoproGetRequest.FIELDS = [
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 0, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 1, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('cmd_id', 'cmdId', 2, false, 1, 'uint8_t', ''),
];
/**
 * Response from a GOPRO_COMMAND get request.
 */
class GoproGetResponse extends mavlink_1.MavLinkData {
}
exports.GoproGetResponse = GoproGetResponse;
GoproGetResponse.MSG_ID = 217;
GoproGetResponse.MSG_NAME = 'GOPRO_GET_RESPONSE';
GoproGetResponse.PAYLOAD_LENGTH = 6;
GoproGetResponse.MAGIC_NUMBER = 202;
GoproGetResponse.FIELDS = [
    new mavlink_1.MavLinkPacketField('cmd_id', 'cmdId', 0, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('status', 'status', 1, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('value', 'value', 2, false, 1, 'uint8_t[]', '', 4),
];
/**
 * Request to set a GOPRO_COMMAND with a desired.
 */
class GoproSetRequest extends mavlink_1.MavLinkData {
}
exports.GoproSetRequest = GoproSetRequest;
GoproSetRequest.MSG_ID = 218;
GoproSetRequest.MSG_NAME = 'GOPRO_SET_REQUEST';
GoproSetRequest.PAYLOAD_LENGTH = 7;
GoproSetRequest.MAGIC_NUMBER = 17;
GoproSetRequest.FIELDS = [
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 0, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 1, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('cmd_id', 'cmdId', 2, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('value', 'value', 3, false, 1, 'uint8_t[]', '', 4),
];
/**
 * Response from a GOPRO_COMMAND set request.
 */
class GoproSetResponse extends mavlink_1.MavLinkData {
}
exports.GoproSetResponse = GoproSetResponse;
GoproSetResponse.MSG_ID = 219;
GoproSetResponse.MSG_NAME = 'GOPRO_SET_RESPONSE';
GoproSetResponse.PAYLOAD_LENGTH = 2;
GoproSetResponse.MAGIC_NUMBER = 162;
GoproSetResponse.FIELDS = [
    new mavlink_1.MavLinkPacketField('cmd_id', 'cmdId', 0, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('status', 'status', 1, false, 1, 'uint8_t', ''),
];
/**
 * RPM sensor output.
 */
class Rpm extends mavlink_1.MavLinkData {
}
exports.Rpm = Rpm;
Rpm.MSG_ID = 226;
Rpm.MSG_NAME = 'RPM';
Rpm.PAYLOAD_LENGTH = 8;
Rpm.MAGIC_NUMBER = 207;
Rpm.FIELDS = [
    new mavlink_1.MavLinkPacketField('rpm1', 'rpm1', 0, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('rpm2', 'rpm2', 4, false, 4, 'float', ''),
];
/**
 * Read registers for a device.
 */
class DeviceOpRead extends mavlink_1.MavLinkData {
}
exports.DeviceOpRead = DeviceOpRead;
DeviceOpRead.MSG_ID = 11000;
DeviceOpRead.MSG_NAME = 'DEVICE_OP_READ';
DeviceOpRead.PAYLOAD_LENGTH = 52;
DeviceOpRead.MAGIC_NUMBER = 134;
DeviceOpRead.FIELDS = [
    new mavlink_1.MavLinkPacketField('request_id', 'requestId', 0, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 4, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 5, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('bustype', 'bustype', 6, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('bus', 'bus', 7, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('address', 'address', 8, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('busname', 'busname', 9, false, 1, 'char[]', '', 40),
    new mavlink_1.MavLinkPacketField('regstart', 'regstart', 49, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('count', 'count', 50, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('bank', 'bank', 51, true, 1, 'uint8_t', ''),
];
/**
 * Read registers reply.
 */
class DeviceOpReadReply extends mavlink_1.MavLinkData {
}
exports.DeviceOpReadReply = DeviceOpReadReply;
DeviceOpReadReply.MSG_ID = 11001;
DeviceOpReadReply.MSG_NAME = 'DEVICE_OP_READ_REPLY';
DeviceOpReadReply.PAYLOAD_LENGTH = 136;
DeviceOpReadReply.MAGIC_NUMBER = 15;
DeviceOpReadReply.FIELDS = [
    new mavlink_1.MavLinkPacketField('request_id', 'requestId', 0, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('result', 'result', 4, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('regstart', 'regstart', 5, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('count', 'count', 6, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('data', 'data', 7, false, 1, 'uint8_t[]', '', 128),
    new mavlink_1.MavLinkPacketField('bank', 'bank', 135, true, 1, 'uint8_t', ''),
];
/**
 * Write registers for a device.
 */
class DeviceOpWrite extends mavlink_1.MavLinkData {
}
exports.DeviceOpWrite = DeviceOpWrite;
DeviceOpWrite.MSG_ID = 11002;
DeviceOpWrite.MSG_NAME = 'DEVICE_OP_WRITE';
DeviceOpWrite.PAYLOAD_LENGTH = 180;
DeviceOpWrite.MAGIC_NUMBER = 234;
DeviceOpWrite.FIELDS = [
    new mavlink_1.MavLinkPacketField('request_id', 'requestId', 0, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 4, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 5, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('bustype', 'bustype', 6, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('bus', 'bus', 7, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('address', 'address', 8, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('busname', 'busname', 9, false, 1, 'char[]', '', 40),
    new mavlink_1.MavLinkPacketField('regstart', 'regstart', 49, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('count', 'count', 50, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('data', 'data', 51, false, 1, 'uint8_t[]', '', 128),
    new mavlink_1.MavLinkPacketField('bank', 'bank', 179, true, 1, 'uint8_t', ''),
];
/**
 * Write registers reply.
 */
class DeviceOpWriteReply extends mavlink_1.MavLinkData {
}
exports.DeviceOpWriteReply = DeviceOpWriteReply;
DeviceOpWriteReply.MSG_ID = 11003;
DeviceOpWriteReply.MSG_NAME = 'DEVICE_OP_WRITE_REPLY';
DeviceOpWriteReply.PAYLOAD_LENGTH = 5;
DeviceOpWriteReply.MAGIC_NUMBER = 64;
DeviceOpWriteReply.FIELDS = [
    new mavlink_1.MavLinkPacketField('request_id', 'requestId', 0, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('result', 'result', 4, false, 1, 'uint8_t', ''),
];
/**
 * Adaptive Controller tuning information.
 */
class AdapTuning extends mavlink_1.MavLinkData {
}
exports.AdapTuning = AdapTuning;
AdapTuning.MSG_ID = 11010;
AdapTuning.MSG_NAME = 'ADAP_TUNING';
AdapTuning.PAYLOAD_LENGTH = 49;
AdapTuning.MAGIC_NUMBER = 46;
AdapTuning.FIELDS = [
    new mavlink_1.MavLinkPacketField('desired', 'desired', 0, false, 4, 'float', 'deg/s'),
    new mavlink_1.MavLinkPacketField('achieved', 'achieved', 4, false, 4, 'float', 'deg/s'),
    new mavlink_1.MavLinkPacketField('error', 'error', 8, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('theta', 'theta', 12, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('omega', 'omega', 16, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('sigma', 'sigma', 20, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('theta_dot', 'thetaDot', 24, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('omega_dot', 'omegaDot', 28, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('sigma_dot', 'sigmaDot', 32, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('f', 'f', 36, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('f_dot', 'fDot', 40, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('u', 'u', 44, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('axis', 'axis', 48, false, 1, 'uint8_t', ''),
];
/**
 * Camera vision based attitude and position deltas.
 */
class VisionPositionDelta extends mavlink_1.MavLinkData {
}
exports.VisionPositionDelta = VisionPositionDelta;
VisionPositionDelta.MSG_ID = 11011;
VisionPositionDelta.MSG_NAME = 'VISION_POSITION_DELTA';
VisionPositionDelta.PAYLOAD_LENGTH = 44;
VisionPositionDelta.MAGIC_NUMBER = 106;
VisionPositionDelta.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_usec', 'timeUsec', 0, false, 8, 'uint64_t', 'us'),
    new mavlink_1.MavLinkPacketField('time_delta_usec', 'timeDeltaUsec', 8, false, 8, 'uint64_t', 'us'),
    new mavlink_1.MavLinkPacketField('angle_delta', 'angleDelta', 16, false, 4, 'float[]', 'rad', 3),
    new mavlink_1.MavLinkPacketField('position_delta', 'positionDelta', 28, false, 4, 'float[]', 'm', 3),
    new mavlink_1.MavLinkPacketField('confidence', 'confidence', 40, false, 4, 'float', '%'),
];
/**
 * Angle of Attack and Side Slip Angle.
 */
class AoaSsa extends mavlink_1.MavLinkData {
}
exports.AoaSsa = AoaSsa;
AoaSsa.MSG_ID = 11020;
AoaSsa.MSG_NAME = 'AOA_SSA';
AoaSsa.PAYLOAD_LENGTH = 16;
AoaSsa.MAGIC_NUMBER = 205;
AoaSsa.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_usec', 'timeUsec', 0, false, 8, 'uint64_t', 'us'),
    new mavlink_1.MavLinkPacketField('AOA', 'AOA', 8, false, 4, 'float', 'deg'),
    new mavlink_1.MavLinkPacketField('SSA', 'SSA', 12, false, 4, 'float', 'deg'),
];
/**
 * ESC Telemetry Data for ESCs 1 to 4, matching data sent by BLHeli ESCs.
 */
class EscTelemetry1To4 extends mavlink_1.MavLinkData {
}
exports.EscTelemetry1To4 = EscTelemetry1To4;
EscTelemetry1To4.MSG_ID = 11030;
EscTelemetry1To4.MSG_NAME = 'ESC_TELEMETRY_1_TO_4';
EscTelemetry1To4.PAYLOAD_LENGTH = 44;
EscTelemetry1To4.MAGIC_NUMBER = 144;
EscTelemetry1To4.FIELDS = [
    new mavlink_1.MavLinkPacketField('voltage', 'voltage', 0, false, 2, 'uint16_t[]', 'cV', 4),
    new mavlink_1.MavLinkPacketField('current', 'current', 8, false, 2, 'uint16_t[]', 'cA', 4),
    new mavlink_1.MavLinkPacketField('totalcurrent', 'totalcurrent', 16, false, 2, 'uint16_t[]', 'mAh', 4),
    new mavlink_1.MavLinkPacketField('rpm', 'rpm', 24, false, 2, 'uint16_t[]', 'rpm', 4),
    new mavlink_1.MavLinkPacketField('count', 'count', 32, false, 2, 'uint16_t[]', '', 4),
    new mavlink_1.MavLinkPacketField('temperature', 'temperature', 40, false, 1, 'uint8_t[]', 'degC', 4),
];
/**
 * ESC Telemetry Data for ESCs 5 to 8, matching data sent by BLHeli ESCs.
 */
class EscTelemetry5To8 extends mavlink_1.MavLinkData {
}
exports.EscTelemetry5To8 = EscTelemetry5To8;
EscTelemetry5To8.MSG_ID = 11031;
EscTelemetry5To8.MSG_NAME = 'ESC_TELEMETRY_5_TO_8';
EscTelemetry5To8.PAYLOAD_LENGTH = 44;
EscTelemetry5To8.MAGIC_NUMBER = 133;
EscTelemetry5To8.FIELDS = [
    new mavlink_1.MavLinkPacketField('voltage', 'voltage', 0, false, 2, 'uint16_t[]', 'cV', 4),
    new mavlink_1.MavLinkPacketField('current', 'current', 8, false, 2, 'uint16_t[]', 'cA', 4),
    new mavlink_1.MavLinkPacketField('totalcurrent', 'totalcurrent', 16, false, 2, 'uint16_t[]', 'mAh', 4),
    new mavlink_1.MavLinkPacketField('rpm', 'rpm', 24, false, 2, 'uint16_t[]', 'rpm', 4),
    new mavlink_1.MavLinkPacketField('count', 'count', 32, false, 2, 'uint16_t[]', '', 4),
    new mavlink_1.MavLinkPacketField('temperature', 'temperature', 40, false, 1, 'uint8_t[]', 'degC', 4),
];
/**
 * ESC Telemetry Data for ESCs 9 to 12, matching data sent by BLHeli ESCs.
 */
class EscTelemetry9To12 extends mavlink_1.MavLinkData {
}
exports.EscTelemetry9To12 = EscTelemetry9To12;
EscTelemetry9To12.MSG_ID = 11032;
EscTelemetry9To12.MSG_NAME = 'ESC_TELEMETRY_9_TO_12';
EscTelemetry9To12.PAYLOAD_LENGTH = 44;
EscTelemetry9To12.MAGIC_NUMBER = 85;
EscTelemetry9To12.FIELDS = [
    new mavlink_1.MavLinkPacketField('voltage', 'voltage', 0, false, 2, 'uint16_t[]', 'cV', 4),
    new mavlink_1.MavLinkPacketField('current', 'current', 8, false, 2, 'uint16_t[]', 'cA', 4),
    new mavlink_1.MavLinkPacketField('totalcurrent', 'totalcurrent', 16, false, 2, 'uint16_t[]', 'mAh', 4),
    new mavlink_1.MavLinkPacketField('rpm', 'rpm', 24, false, 2, 'uint16_t[]', 'rpm', 4),
    new mavlink_1.MavLinkPacketField('count', 'count', 32, false, 2, 'uint16_t[]', '', 4),
    new mavlink_1.MavLinkPacketField('temperature', 'temperature', 40, false, 1, 'uint8_t[]', 'degC', 4),
];
/**
 * Configure an OSD parameter slot.
 */
class OsdParamConfig extends mavlink_1.MavLinkData {
}
exports.OsdParamConfig = OsdParamConfig;
OsdParamConfig.MSG_ID = 11033;
OsdParamConfig.MSG_NAME = 'OSD_PARAM_CONFIG';
OsdParamConfig.PAYLOAD_LENGTH = 37;
OsdParamConfig.MAGIC_NUMBER = 195;
OsdParamConfig.FIELDS = [
    new mavlink_1.MavLinkPacketField('request_id', 'requestId', 0, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('min_value', 'minValue', 4, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('max_value', 'maxValue', 8, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('increment', 'increment', 12, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 16, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 17, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('osd_screen', 'osdScreen', 18, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('osd_index', 'osdIndex', 19, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('param_id', 'paramId', 20, false, 1, 'char[]', '', 16),
    new mavlink_1.MavLinkPacketField('config_type', 'configType', 36, false, 1, 'uint8_t', ''),
];
/**
 * Configure OSD parameter reply.
 */
class OsdParamConfigReply extends mavlink_1.MavLinkData {
}
exports.OsdParamConfigReply = OsdParamConfigReply;
OsdParamConfigReply.MSG_ID = 11034;
OsdParamConfigReply.MSG_NAME = 'OSD_PARAM_CONFIG_REPLY';
OsdParamConfigReply.PAYLOAD_LENGTH = 5;
OsdParamConfigReply.MAGIC_NUMBER = 79;
OsdParamConfigReply.FIELDS = [
    new mavlink_1.MavLinkPacketField('request_id', 'requestId', 0, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('result', 'result', 4, false, 1, 'uint8_t', ''),
];
/**
 * Read a configured an OSD parameter slot.
 */
class OsdParamShowConfig extends mavlink_1.MavLinkData {
}
exports.OsdParamShowConfig = OsdParamShowConfig;
OsdParamShowConfig.MSG_ID = 11035;
OsdParamShowConfig.MSG_NAME = 'OSD_PARAM_SHOW_CONFIG';
OsdParamShowConfig.PAYLOAD_LENGTH = 8;
OsdParamShowConfig.MAGIC_NUMBER = 128;
OsdParamShowConfig.FIELDS = [
    new mavlink_1.MavLinkPacketField('request_id', 'requestId', 0, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 4, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 5, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('osd_screen', 'osdScreen', 6, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('osd_index', 'osdIndex', 7, false, 1, 'uint8_t', ''),
];
/**
 * Read configured OSD parameter reply.
 */
class OsdParamShowConfigReply extends mavlink_1.MavLinkData {
}
exports.OsdParamShowConfigReply = OsdParamShowConfigReply;
OsdParamShowConfigReply.MSG_ID = 11036;
OsdParamShowConfigReply.MSG_NAME = 'OSD_PARAM_SHOW_CONFIG_REPLY';
OsdParamShowConfigReply.PAYLOAD_LENGTH = 34;
OsdParamShowConfigReply.MAGIC_NUMBER = 177;
OsdParamShowConfigReply.FIELDS = [
    new mavlink_1.MavLinkPacketField('request_id', 'requestId', 0, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('min_value', 'minValue', 4, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('max_value', 'maxValue', 8, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('increment', 'increment', 12, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('result', 'result', 16, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('param_id', 'paramId', 17, false, 1, 'char[]', '', 16),
    new mavlink_1.MavLinkPacketField('config_type', 'configType', 33, false, 1, 'uint8_t', ''),
];
/**
 * Obstacle located as a 3D vector.
 */
class ObstacleDistance3d extends mavlink_1.MavLinkData {
}
exports.ObstacleDistance3d = ObstacleDistance3d;
ObstacleDistance3d.MSG_ID = 11037;
ObstacleDistance3d.MSG_NAME = 'OBSTACLE_DISTANCE_3D';
ObstacleDistance3d.PAYLOAD_LENGTH = 28;
ObstacleDistance3d.MAGIC_NUMBER = 130;
ObstacleDistance3d.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_boot_ms', 'timeBootMs', 0, false, 4, 'uint32_t', 'ms'),
    new mavlink_1.MavLinkPacketField('x', 'x', 4, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('y', 'y', 8, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('z', 'z', 12, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('min_distance', 'minDistance', 16, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('max_distance', 'maxDistance', 20, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('obstacle_id', 'obstacleId', 24, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('sensor_type', 'sensorType', 26, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('frame', 'frame', 27, false, 1, 'uint8_t', ''),
];
/**
 * Water depth
 */
class WaterDepth extends mavlink_1.MavLinkData {
}
exports.WaterDepth = WaterDepth;
WaterDepth.MSG_ID = 11038;
WaterDepth.MSG_NAME = 'WATER_DEPTH';
WaterDepth.PAYLOAD_LENGTH = 38;
WaterDepth.MAGIC_NUMBER = 47;
WaterDepth.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_boot_ms', 'timeBootMs', 0, false, 4, 'uint32_t', 'ms'),
    new mavlink_1.MavLinkPacketField('lat', 'lat', 4, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('lng', 'lng', 8, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('alt', 'alt', 12, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('roll', 'roll', 16, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('pitch', 'pitch', 20, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('yaw', 'yaw', 24, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('distance', 'distance', 28, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('temperature', 'temperature', 32, false, 4, 'float', 'degC'),
    new mavlink_1.MavLinkPacketField('id', 'id', 36, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('healthy', 'healthy', 37, false, 1, 'uint8_t', ''),
];
exports.REGISTRY = {
    150: SensorOffsets,
    151: SetMagOffsets,
    152: MemInfo,
    153: ApAdc,
    154: DigicamConfigure,
    155: DigicamControl,
    156: MountConfigure,
    157: MountControl,
    158: MountStatus,
    160: FencePoint,
    161: FenceFetchPoint,
    163: Ahrs,
    164: SimState,
    165: HwStatus,
    166: Radio,
    167: LimitsStatus,
    168: Wind,
    169: Data16,
    170: Data32,
    171: Data64,
    172: Data96,
    173: RangeFinder,
    174: AirspeedAutocal,
    175: RallyPoint,
    176: RallyFetchPoint,
    177: CompassMotStatus,
    178: Ahrs2,
    179: CameraStatus,
    180: CameraFeedback,
    181: Battery2,
    182: Ahrs3,
    183: AutopilotVersionRequest,
    184: RemoteLogDataBlock,
    185: RemoteLogBlockStatus,
    186: LedControl,
    191: MagCalProgress,
    193: EkfStatusReport,
    194: PidTuning,
    195: Deepstall,
    200: GimbalReport,
    201: GimbalControl,
    214: GimbalTorqueCmdReport,
    215: GoproHeartbeat,
    216: GoproGetRequest,
    217: GoproGetResponse,
    218: GoproSetRequest,
    219: GoproSetResponse,
    226: Rpm,
    11000: DeviceOpRead,
    11001: DeviceOpReadReply,
    11002: DeviceOpWrite,
    11003: DeviceOpWriteReply,
    11010: AdapTuning,
    11011: VisionPositionDelta,
    11020: AoaSsa,
    11030: EscTelemetry1To4,
    11031: EscTelemetry5To8,
    11032: EscTelemetry9To12,
    11033: OsdParamConfig,
    11034: OsdParamConfigReply,
    11035: OsdParamShowConfig,
    11036: OsdParamShowConfigReply,
    11037: ObstacleDistance3d,
    11038: WaterDepth,
};
