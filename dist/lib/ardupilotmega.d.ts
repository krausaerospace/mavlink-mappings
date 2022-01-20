import { int8_t, uint8_t, int16_t, uint16_t, int32_t, uint32_t, uint64_t, float } from './types';
import { MavLinkPacketRegistry, MavLinkPacketField, MavLinkData } from './mavlink';
import { MavMountMode, MavDistanceSensor, MavFrame, MagCalStatus } from './common';
/**
 * ACCELCAL_VEHICLE_POS
 */
export declare enum AccelcalVehiclePos {
    'LEVEL' = 1,
    'LEFT' = 2,
    'RIGHT' = 3,
    'NOSEDOWN' = 4,
    'NOSEUP' = 5,
    'BACK' = 6,
    'SUCCESS' = 16777215,
    'FAILED' = 16777216
}
/**
 * HEADING_TYPE
 */
export declare enum HeadingType {
    'COURSE_OVER_GROUND' = 0,
    'HEADING' = 1
}
/**
 * SPEED_TYPE
 */
export declare enum SpeedType {
    'AIRSPEED' = 0,
    'GROUNDSPEED' = 1
}
/**
 * MAV_CMD
 */
export declare enum MavCmd {
    'DO_SET_RESUME_REPEAT_DIST' = 215,
    'DO_SPRAYER' = 216,
    'DO_SEND_SCRIPT_MESSAGE' = 217,
    'DO_AUX_FUNCTION' = 218,
    /**
     * Mission command to wait for an altitude or downwards vertical speed. This is meant for high altitude
     * balloon launches, allowing the aircraft to be idle until either an altitude is reached or a negative
     * vertical speed is reached (indicating early balloon burst). The wiggle time is how often to wiggle
     * the control surfaces to prevent them seizing up.
     */
    'NAV_ALTITUDE_WAIT' = 83,
    'POWER_OFF_INITIATED' = 42000,
    'SOLO_BTN_FLY_CLICK' = 42001,
    'SOLO_BTN_FLY_HOLD' = 42002,
    'SOLO_BTN_PAUSE_CLICK' = 42003,
    /**
     * Magnetometer calibration based on fixed position in earth field given by inclination, declination
     * and intensity.
     */
    'FIXED_MAG_CAL' = 42004,
    'FIXED_MAG_CAL_FIELD' = 42005,
    'DO_START_MAG_CAL' = 42424,
    'DO_ACCEPT_MAG_CAL' = 42425,
    'DO_CANCEL_MAG_CAL' = 42426,
    /**
     * Used when doing accelerometer calibration. When sent to the GCS tells it what position to put the
     * vehicle in. When sent to the vehicle says what position the vehicle is in.
     */
    'ACCELCAL_VEHICLE_POS' = 42429,
    'DO_SEND_BANNER' = 42428,
    'SET_FACTORY_TEST_MODE' = 42427,
    'GIMBAL_RESET' = 42501,
    'GIMBAL_AXIS_CALIBRATION_STATUS' = 42502,
    'GIMBAL_REQUEST_AXIS_CALIBRATION' = 42503,
    'GIMBAL_FULL_RESET' = 42505,
    'FLASH_BOOTLOADER' = 42650,
    'BATTERY_RESET' = 42651,
    'DEBUG_TRAP' = 42700,
    'SCRIPTING' = 42701,
    /**
     * Change flight speed at a given rate. This slews the vehicle at a controllable rate between it's
     * previous speed and the new one. (affects GUIDED only. Outside GUIDED, aircraft ignores these
     * commands. Designed for onboard companion-computer command-and-control, not normally operator/GCS
     * control.)
     */
    'GUIDED_CHANGE_SPEED' = 43000,
    /**
     * Change target altitude at a given rate. This slews the vehicle at a controllable rate between it's
     * previous altitude and the new one. (affects GUIDED only. Outside GUIDED, aircraft ignores these
     * commands. Designed for onboard companion-computer command-and-control, not normally operator/GCS
     * control.)
     */
    'GUIDED_CHANGE_ALTITUDE' = 43001,
    /**
     * Change to target heading at a given rate, overriding previous heading/s. This slews the vehicle at a
     * controllable rate between it's previous heading and the new one. (affects GUIDED only. Exiting
     * GUIDED returns aircraft to normal behaviour defined elsewhere. Designed for onboard
     * companion-computer command-and-control, not normally operator/GCS control.)
     */
    'GUIDED_CHANGE_HEADING' = 43002
}
/**
 * SCRIPTING_CMD
 */
export declare enum ScriptingCmd {
    'REPL_START' = 0,
    'REPL_STOP' = 1
}
/**
 * LIMITS_STATE
 */
export declare enum LimitsState {
    'INIT' = 0,
    'DISABLED' = 1,
    'ENABLED' = 2,
    'TRIGGERED' = 3,
    'RECOVERING' = 4,
    'RECOVERED' = 5
}
/**
 * LIMIT_MODULE
 */
export declare enum LimitModule {
    'GPSLOCK' = 1,
    'GEOFENCE' = 2,
    'ALTITUDE' = 4
}
/**
 * Flags in RALLY_POINT message.
 */
export declare enum RallyFlags {
    'FAVORABLE_WIND' = 1,
    /**
     * Flag set when plane is to immediately descend to break altitude and land without GCS intervention.
     * Flag not set when plane is to loiter at Rally point until commanded to land.
     */
    'LAND_IMMEDIATELY' = 2
}
/**
 * CAMERA_STATUS_TYPES
 */
export declare enum CameraStatusTypes {
    'HEARTBEAT' = 0,
    'TRIGGER' = 1,
    'DISCONNECT' = 2,
    'ERROR' = 3,
    'LOWBATT' = 4,
    'LOWSTORE' = 5,
    'LOWSTOREV' = 6
}
/**
 * CAMERA_FEEDBACK_FLAGS
 */
export declare enum CameraFeedbackFlags {
    'PHOTO' = 0,
    'VIDEO' = 1,
    'BADEXPOSURE' = 2,
    'CLOSEDLOOP' = 3,
    /**
     * Open loop camera, an image trigger has been requested but we can't know for sure it has successfully
     * taken a picture.
     */
    'OPENLOOP' = 4
}
/**
 * MAV_MODE_GIMBAL
 */
export declare enum MavModeGimbal {
    'UNINITIALIZED' = 0,
    'CALIBRATING_PITCH' = 1,
    'CALIBRATING_ROLL' = 2,
    'CALIBRATING_YAW' = 3,
    /**
     * Gimbal has finished calibrating and initializing, but is relaxed pending reception of first rate
     * command from copter.
     */
    'INITIALIZED' = 4,
    'ACTIVE' = 5,
    /**
     * Gimbal is relaxed because it missed more than 10 expected rate command messages in a row. Gimbal
     * will move back to active mode when it receives a new rate command.
     */
    'RATE_CMD_TIMEOUT' = 6
}
/**
 * GIMBAL_AXIS
 */
export declare enum GimbalAxis {
    'YAW' = 0,
    'PITCH' = 1,
    'ROLL' = 2
}
/**
 * GIMBAL_AXIS_CALIBRATION_STATUS
 */
export declare enum GimbalAxisCalibrationStatus {
    'IN_PROGRESS' = 0,
    'SUCCEEDED' = 1,
    'FAILED' = 2
}
/**
 * GIMBAL_AXIS_CALIBRATION_REQUIRED
 */
export declare enum GimbalAxisCalibrationRequired {
    'UNKNOWN' = 0,
    'TRUE' = 1,
    'FALSE' = 2
}
/**
 * GOPRO_HEARTBEAT_STATUS
 */
export declare enum GoproHeartbeatStatus {
    'DISCONNECTED' = 0,
    'INCOMPATIBLE' = 1,
    'CONNECTED' = 2,
    'ERROR' = 3
}
/**
 * GOPRO_HEARTBEAT_FLAGS
 */
export declare enum GoproHeartbeatFlags {
    'RECORDING' = 1
}
/**
 * GOPRO_REQUEST_STATUS
 */
export declare enum GoproRequestStatus {
    'SUCCESS' = 0,
    'FAILED' = 1
}
/**
 * GOPRO_COMMAND
 */
export declare enum GoproCommand {
    'POWER' = 0,
    'CAPTURE_MODE' = 1,
    'SHUTTER' = 2,
    'BATTERY' = 3,
    'MODEL' = 4,
    'VIDEO_SETTINGS' = 5,
    'LOW_LIGHT' = 6,
    'PHOTO_RESOLUTION' = 7,
    'PHOTO_BURST_RATE' = 8,
    'PROTUNE' = 9,
    'PROTUNE_WHITE_BALANCE' = 10,
    'PROTUNE_COLOUR' = 11,
    'PROTUNE_GAIN' = 12,
    'PROTUNE_SHARPNESS' = 13,
    'PROTUNE_EXPOSURE' = 14,
    'TIME' = 15,
    'CHARGING' = 16
}
/**
 * GOPRO_CAPTURE_MODE
 */
export declare enum GoproCaptureMode {
    'VIDEO' = 0,
    'PHOTO' = 1,
    'BURST' = 2,
    'TIME_LAPSE' = 3,
    'MULTI_SHOT' = 4,
    'PLAYBACK' = 5,
    'SETUP' = 6,
    'UNKNOWN' = 255
}
/**
 * GOPRO_RESOLUTION
 */
export declare enum GoproResolution {
    'GOPRO_RESOLUTION_480p' = 0,
    'GOPRO_RESOLUTION_720p' = 1,
    'GOPRO_RESOLUTION_960p' = 2,
    'GOPRO_RESOLUTION_1080p' = 3,
    'GOPRO_RESOLUTION_1440p' = 4,
    'GOPRO_RESOLUTION_2_7k_17_9' = 5,
    'GOPRO_RESOLUTION_2_7k_16_9' = 6,
    'GOPRO_RESOLUTION_2_7k_4_3' = 7,
    'GOPRO_RESOLUTION_4k_16_9' = 8,
    'GOPRO_RESOLUTION_4k_17_9' = 9,
    'GOPRO_RESOLUTION_720p_SUPERVIEW' = 10,
    'GOPRO_RESOLUTION_1080p_SUPERVIEW' = 11,
    'GOPRO_RESOLUTION_2_7k_SUPERVIEW' = 12,
    'GOPRO_RESOLUTION_4k_SUPERVIEW' = 13
}
/**
 * GOPRO_FRAME_RATE
 */
export declare enum GoproFrameRate {
    'GOPRO_FRAME_RATE_12' = 0,
    'GOPRO_FRAME_RATE_15' = 1,
    'GOPRO_FRAME_RATE_24' = 2,
    'GOPRO_FRAME_RATE_25' = 3,
    'GOPRO_FRAME_RATE_30' = 4,
    'GOPRO_FRAME_RATE_48' = 5,
    'GOPRO_FRAME_RATE_50' = 6,
    'GOPRO_FRAME_RATE_60' = 7,
    'GOPRO_FRAME_RATE_80' = 8,
    'GOPRO_FRAME_RATE_90' = 9,
    'GOPRO_FRAME_RATE_100' = 10,
    'GOPRO_FRAME_RATE_120' = 11,
    'GOPRO_FRAME_RATE_240' = 12,
    'GOPRO_FRAME_RATE_12_5' = 13
}
/**
 * GOPRO_FIELD_OF_VIEW
 */
export declare enum GoproFieldOfView {
    'WIDE' = 0,
    'MEDIUM' = 1,
    'NARROW' = 2
}
/**
 * GOPRO_VIDEO_SETTINGS_FLAGS
 */
export declare enum GoproVideoSettingsFlags {
    'MODE' = 1
}
/**
 * GOPRO_PHOTO_RESOLUTION
 */
export declare enum GoproPhotoResolution {
    'GOPRO_PHOTO_RESOLUTION_5MP_MEDIUM' = 0,
    'GOPRO_PHOTO_RESOLUTION_7MP_MEDIUM' = 1,
    'GOPRO_PHOTO_RESOLUTION_7MP_WIDE' = 2,
    'GOPRO_PHOTO_RESOLUTION_10MP_WIDE' = 3,
    'GOPRO_PHOTO_RESOLUTION_12MP_WIDE' = 4
}
/**
 * GOPRO_PROTUNE_WHITE_BALANCE
 */
export declare enum GoproProtuneWhiteBalance {
    'AUTO' = 0,
    'GOPRO_PROTUNE_WHITE_BALANCE_3000K' = 1,
    'GOPRO_PROTUNE_WHITE_BALANCE_5500K' = 2,
    'GOPRO_PROTUNE_WHITE_BALANCE_6500K' = 3,
    'RAW' = 4
}
/**
 * GOPRO_PROTUNE_COLOUR
 */
export declare enum GoproProtuneColour {
    'STANDARD' = 0,
    'NEUTRAL' = 1
}
/**
 * GOPRO_PROTUNE_GAIN
 */
export declare enum GoproProtuneGain {
    'GOPRO_PROTUNE_GAIN_400' = 0,
    'GOPRO_PROTUNE_GAIN_800' = 1,
    'GOPRO_PROTUNE_GAIN_1600' = 2,
    'GOPRO_PROTUNE_GAIN_3200' = 3,
    'GOPRO_PROTUNE_GAIN_6400' = 4
}
/**
 * GOPRO_PROTUNE_SHARPNESS
 */
export declare enum GoproProtuneSharpness {
    'LOW' = 0,
    'MEDIUM' = 1,
    'HIGH' = 2
}
/**
 * GOPRO_PROTUNE_EXPOSURE
 */
export declare enum GoproProtuneExposure {
    'NEG_5_0' = 0,
    'NEG_4_5' = 1,
    'NEG_4_0' = 2,
    'NEG_3_5' = 3,
    'NEG_3_0' = 4,
    'NEG_2_5' = 5,
    'NEG_2_0' = 6,
    'NEG_1_5' = 7,
    'NEG_1_0' = 8,
    'NEG_0_5' = 9,
    'ZERO' = 10,
    'POS_0_5' = 11,
    'POS_1_0' = 12,
    'POS_1_5' = 13,
    'POS_2_0' = 14,
    'POS_2_5' = 15,
    'POS_3_0' = 16,
    'POS_3_5' = 17,
    'POS_4_0' = 18,
    'POS_4_5' = 19,
    'POS_5_0' = 20
}
/**
 * GOPRO_CHARGING
 */
export declare enum GoproCharging {
    'DISABLED' = 0,
    'ENABLED' = 1
}
/**
 * GOPRO_MODEL
 */
export declare enum GoproModel {
    'UNKNOWN' = 0,
    'HERO_3_PLUS_SILVER' = 1,
    'HERO_3_PLUS_BLACK' = 2,
    'HERO_4_SILVER' = 3,
    'HERO_4_BLACK' = 4
}
/**
 * GOPRO_BURST_RATE
 */
export declare enum GoproBurstRate {
    'GOPRO_BURST_RATE_3_IN_1_SECOND' = 0,
    'GOPRO_BURST_RATE_5_IN_1_SECOND' = 1,
    'GOPRO_BURST_RATE_10_IN_1_SECOND' = 2,
    'GOPRO_BURST_RATE_10_IN_2_SECOND' = 3,
    'GOPRO_BURST_RATE_10_IN_3_SECOND' = 4,
    'GOPRO_BURST_RATE_30_IN_1_SECOND' = 5,
    'GOPRO_BURST_RATE_30_IN_2_SECOND' = 6,
    'GOPRO_BURST_RATE_30_IN_3_SECOND' = 7,
    'GOPRO_BURST_RATE_30_IN_6_SECOND' = 8
}
/**
 * MAV_CMD_DO_AUX_FUNCTION_SWITCH_LEVEL
 */
export declare enum MavCmdDoAuxFunctionSwitchLevel {
    'LOW' = 0,
    'MIDDLE' = 1,
    'HIGH' = 2
}
/**
 * LED_CONTROL_PATTERN
 */
export declare enum LedControlPattern {
    'OFF' = 0,
    'FIRMWAREUPDATE' = 1,
    'CUSTOM' = 255
}
/**
 * Flags in EKF_STATUS message.
 */
export declare enum EkfStatusFlags {
    'ATTITUDE' = 1,
    'VELOCITY_HORIZ' = 2,
    'VELOCITY_VERT' = 4,
    'POS_HORIZ_REL' = 8,
    'POS_HORIZ_ABS' = 16,
    'POS_VERT_ABS' = 32,
    'POS_VERT_AGL' = 64,
    'CONST_POS_MODE' = 128,
    'PRED_POS_HORIZ_REL' = 256,
    'PRED_POS_HORIZ_ABS' = 512,
    'UNINITIALIZED' = 1024
}
/**
 * PID_TUNING_AXIS
 */
export declare enum PidTuningAxis {
    'ROLL' = 1,
    'PITCH' = 2,
    'YAW' = 3,
    'ACCZ' = 4,
    'STEER' = 5,
    'LANDING' = 6
}
/**
 * Special ACK block numbers control activation of dataflash log streaming.
 */
export declare enum MavRemoteLogDataBlockCommands {
    'STOP' = 2147483645,
    'START' = 2147483646
}
/**
 * Possible remote log data block statuses.
 */
export declare enum MavRemoteLogDataBlockStatuses {
    'NACK' = 0,
    'ACK' = 1
}
/**
 * Bus types for device operations.
 */
export declare enum DeviceOpBustype {
    'I2C' = 0,
    'SPI' = 1
}
/**
 * Deepstall flight stage.
 */
export declare enum DeepstallStage {
    'FLY_TO_LANDING' = 0,
    'ESTIMATE_WIND' = 1,
    'WAIT_FOR_BREAKOUT' = 2,
    'FLY_TO_ARC' = 3,
    'ARC' = 4,
    'APPROACH' = 5,
    'LAND' = 6
}
/**
 * A mapping of plane flight modes for custom_mode field of heartbeat.
 */
export declare enum PlaneMode {
    'MANUAL' = 0,
    'CIRCLE' = 1,
    'STABILIZE' = 2,
    'TRAINING' = 3,
    'ACRO' = 4,
    'FLY_BY_WIRE_A' = 5,
    'FLY_BY_WIRE_B' = 6,
    'CRUISE' = 7,
    'AUTOTUNE' = 8,
    'AUTO' = 10,
    'RTL' = 11,
    'LOITER' = 12,
    'TAKEOFF' = 13,
    'AVOID_ADSB' = 14,
    'GUIDED' = 15,
    'INITIALIZING' = 16,
    'QSTABILIZE' = 17,
    'QHOVER' = 18,
    'QLOITER' = 19,
    'QLAND' = 20,
    'QRTL' = 21,
    'QAUTOTUNE' = 22,
    'QACRO' = 23,
    'THERMAL' = 24
}
/**
 * A mapping of copter flight modes for custom_mode field of heartbeat.
 */
export declare enum CopterMode {
    'STABILIZE' = 0,
    'ACRO' = 1,
    'ALT_HOLD' = 2,
    'AUTO' = 3,
    'GUIDED' = 4,
    'LOITER' = 5,
    'RTL' = 6,
    'CIRCLE' = 7,
    'LAND' = 9,
    'DRIFT' = 11,
    'SPORT' = 13,
    'FLIP' = 14,
    'AUTOTUNE' = 15,
    'POSHOLD' = 16,
    'BRAKE' = 17,
    'THROW' = 18,
    'AVOID_ADSB' = 19,
    'GUIDED_NOGPS' = 20,
    'SMART_RTL' = 21,
    'FLOWHOLD' = 22,
    'FOLLOW' = 23,
    'ZIGZAG' = 24,
    'SYSTEMID' = 25,
    'AUTOROTATE' = 26
}
/**
 * A mapping of sub flight modes for custom_mode field of heartbeat.
 */
export declare enum SubMode {
    'STABILIZE' = 0,
    'ACRO' = 1,
    'ALT_HOLD' = 2,
    'AUTO' = 3,
    'GUIDED' = 4,
    'CIRCLE' = 7,
    'SURFACE' = 9,
    'POSHOLD' = 16,
    'MANUAL' = 19
}
/**
 * A mapping of rover flight modes for custom_mode field of heartbeat.
 */
export declare enum RoverMode {
    'MANUAL' = 0,
    'ACRO' = 1,
    'STEERING' = 3,
    'HOLD' = 4,
    'LOITER' = 5,
    'FOLLOW' = 6,
    'SIMPLE' = 7,
    'AUTO' = 10,
    'RTL' = 11,
    'SMART_RTL' = 12,
    'GUIDED' = 15,
    'INITIALIZING' = 16
}
/**
 * A mapping of antenna tracker flight modes for custom_mode field of heartbeat.
 */
export declare enum TrackerMode {
    'MANUAL' = 0,
    'STOP' = 1,
    'SCAN' = 2,
    'SERVO_TEST' = 3,
    'AUTO' = 10,
    'INITIALIZING' = 16
}
/**
 * The type of parameter for the OSD parameter editor.
 */
export declare enum OsdParamConfigType {
    'NONE' = 0,
    'SERIAL_PROTOCOL' = 1,
    'SERVO_FUNCTION' = 2,
    'AUX_FUNCTION' = 3,
    'FLIGHT_MODE' = 4,
    'FAILSAFE_ACTION' = 5,
    'FAILSAFE_ACTION_1' = 6,
    'FAILSAFE_ACTION_2' = 7,
    'NUM_TYPES' = 8
}
/**
 * The error type for the OSD parameter editor.
 */
export declare enum OsdParamConfigError {
    'SUCCESS' = 0,
    'INVALID_SCREEN' = 1,
    'INVALID_PARAMETER_INDEX' = 2,
    'INVALID_PARAMETER' = 3
}
/**
 * Offsets and calibrations values for hardware sensors. This makes it easier to debug the calibration
 * process.
 */
export declare class SensorOffsets extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Magnetometer X offset.
     */
    magOfsX: int16_t;
    /**
     * Magnetometer Y offset.
     */
    magOfsY: int16_t;
    /**
     * Magnetometer Z offset.
     */
    magOfsZ: int16_t;
    /**
     * Magnetic declination.
     * Units: rad
     */
    magDeclination: float;
    /**
     * Raw pressure from barometer.
     */
    rawPress: int32_t;
    /**
     * Raw temperature from barometer.
     */
    rawTemp: int32_t;
    /**
     * Gyro X calibration.
     */
    gyroCalX: float;
    /**
     * Gyro Y calibration.
     */
    gyroCalY: float;
    /**
     * Gyro Z calibration.
     */
    gyroCalZ: float;
    /**
     * Accel X calibration.
     */
    accelCalX: float;
    /**
     * Accel Y calibration.
     */
    accelCalY: float;
    /**
     * Accel Z calibration.
     */
    accelCalZ: float;
}
/**
 * Set the magnetometer offsets
 *
 * @deprecated since 2014-07, replaced by MAV_CMD_PREFLIGHT_SET_SENSOR_OFFSETS
 */
export declare class SetMagOffsets extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * System ID.
     */
    targetSystem: uint8_t;
    /**
     * Component ID.
     */
    targetComponent: uint8_t;
    /**
     * Magnetometer X offset.
     */
    magOfsX: int16_t;
    /**
     * Magnetometer Y offset.
     */
    magOfsY: int16_t;
    /**
     * Magnetometer Z offset.
     */
    magOfsZ: int16_t;
}
/**
 * State of APM memory.
 */
export declare class MemInfo extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Heap top.
     */
    brkval: uint16_t;
    /**
     * Free memory.
     * Units: bytes
     */
    freemem: uint16_t;
    /**
     * Free memory (32 bit).
     * Units: bytes
     */
    freemem32: uint32_t;
}
/**
 * Raw ADC output.
 */
export declare class ApAdc extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * ADC output 1.
     */
    adc1: uint16_t;
    /**
     * ADC output 2.
     */
    adc2: uint16_t;
    /**
     * ADC output 3.
     */
    adc3: uint16_t;
    /**
     * ADC output 4.
     */
    adc4: uint16_t;
    /**
     * ADC output 5.
     */
    adc5: uint16_t;
    /**
     * ADC output 6.
     */
    adc6: uint16_t;
}
/**
 * Configure on-board Camera Control System.
 */
export declare class DigicamConfigure extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * System ID.
     */
    targetSystem: uint8_t;
    /**
     * Component ID.
     */
    targetComponent: uint8_t;
    /**
     * Mode enumeration from 1 to N //P, TV, AV, M, etc. (0 means ignore).
     */
    mode: uint8_t;
    /**
     * Divisor number //e.g. 1000 means 1/1000 (0 means ignore).
     */
    shutterSpeed: uint16_t;
    /**
     * F stop number x 10 //e.g. 28 means 2.8 (0 means ignore).
     */
    aperture: uint8_t;
    /**
     * ISO enumeration from 1 to N //e.g. 80, 100, 200, Etc (0 means ignore).
     */
    iso: uint8_t;
    /**
     * Exposure type enumeration from 1 to N (0 means ignore).
     */
    exposureType: uint8_t;
    /**
     * Command Identity (incremental loop: 0 to 255). //A command sent multiple times will be executed or
     * pooled just once.
     */
    commandId: uint8_t;
    /**
     * Main engine cut-off time before camera trigger (0 means no cut-off).
     * Units: ds
     */
    engineCutOff: uint8_t;
    /**
     * Extra parameters enumeration (0 means ignore).
     */
    extraParam: uint8_t;
    /**
     * Correspondent value to given extra_param.
     */
    extraValue: float;
}
/**
 * Control on-board Camera Control System to take shots.
 */
export declare class DigicamControl extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * System ID.
     */
    targetSystem: uint8_t;
    /**
     * Component ID.
     */
    targetComponent: uint8_t;
    /**
     * 0: stop, 1: start or keep it up //Session control e.g. show/hide lens.
     */
    session: uint8_t;
    /**
     * 1 to N //Zoom's absolute position (0 means ignore).
     */
    zoomPos: uint8_t;
    /**
     * -100 to 100 //Zooming step value to offset zoom from the current position.
     */
    zoomStep: int8_t;
    /**
     * 0: unlock focus or keep unlocked, 1: lock focus or keep locked, 3: re-lock focus.
     */
    focusLock: uint8_t;
    /**
     * 0: ignore, 1: shot or start filming.
     */
    shot: uint8_t;
    /**
     * Command Identity (incremental loop: 0 to 255)//A command sent multiple times will be executed or
     * pooled just once.
     */
    commandId: uint8_t;
    /**
     * Extra parameters enumeration (0 means ignore).
     */
    extraParam: uint8_t;
    /**
     * Correspondent value to given extra_param.
     */
    extraValue: float;
}
/**
 * Message to configure a camera mount, directional antenna, etc.
 */
export declare class MountConfigure extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * System ID.
     */
    targetSystem: uint8_t;
    /**
     * Component ID.
     */
    targetComponent: uint8_t;
    /**
     * Mount operating mode.
     */
    mountMode: MavMountMode;
    /**
     * (1 = yes, 0 = no).
     */
    stabRoll: uint8_t;
    /**
     * (1 = yes, 0 = no).
     */
    stabPitch: uint8_t;
    /**
     * (1 = yes, 0 = no).
     */
    stabYaw: uint8_t;
}
/**
 * Message to control a camera mount, directional antenna, etc.
 */
export declare class MountControl extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * System ID.
     */
    targetSystem: uint8_t;
    /**
     * Component ID.
     */
    targetComponent: uint8_t;
    /**
     * Pitch (centi-degrees) or lat (degE7), depending on mount mode.
     */
    inputA: int32_t;
    /**
     * Roll (centi-degrees) or lon (degE7) depending on mount mode.
     */
    inputB: int32_t;
    /**
     * Yaw (centi-degrees) or alt (cm) depending on mount mode.
     */
    inputC: int32_t;
    /**
     * If "1" it will save current trimmed position on EEPROM (just valid for NEUTRAL and LANDING).
     */
    savePosition: uint8_t;
}
/**
 * Message with some status from APM to GCS about camera or antenna mount.
 */
export declare class MountStatus extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * System ID.
     */
    targetSystem: uint8_t;
    /**
     * Component ID.
     */
    targetComponent: uint8_t;
    /**
     * Pitch.
     * Units: cdeg
     */
    pointingA: int32_t;
    /**
     * Roll.
     * Units: cdeg
     */
    pointingB: int32_t;
    /**
     * Yaw.
     * Units: cdeg
     */
    pointingC: int32_t;
}
/**
 * A fence point. Used to set a point when from GCS -> MAV. Also used to return a point from MAV ->
 * GCS.
 */
export declare class FencePoint extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * System ID.
     */
    targetSystem: uint8_t;
    /**
     * Component ID.
     */
    targetComponent: uint8_t;
    /**
     * Point index (first point is 1, 0 is for return point).
     */
    idx: uint8_t;
    /**
     * Total number of points (for sanity checking).
     */
    count: uint8_t;
    /**
     * Latitude of point.
     * Units: deg
     */
    lat: float;
    /**
     * Longitude of point.
     * Units: deg
     */
    lng: float;
}
/**
 * Request a current fence point from MAV.
 */
export declare class FenceFetchPoint extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * System ID.
     */
    targetSystem: uint8_t;
    /**
     * Component ID.
     */
    targetComponent: uint8_t;
    /**
     * Point index (first point is 1, 0 is for return point).
     */
    idx: uint8_t;
}
/**
 * Status of DCM attitude estimator.
 */
export declare class Ahrs extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * X gyro drift estimate.
     * Units: rad/s
     */
    omegaIx: float;
    /**
     * Y gyro drift estimate.
     * Units: rad/s
     */
    omegaIy: float;
    /**
     * Z gyro drift estimate.
     * Units: rad/s
     */
    omegaIz: float;
    /**
     * Average accel_weight.
     */
    accelWeight: float;
    /**
     * Average renormalisation value.
     */
    renormVal: float;
    /**
     * Average error_roll_pitch value.
     */
    errorRp: float;
    /**
     * Average error_yaw value.
     */
    errorYaw: float;
}
/**
 * Status of simulation environment, if used.
 */
export declare class SimState extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Roll angle.
     * Units: rad
     */
    roll: float;
    /**
     * Pitch angle.
     * Units: rad
     */
    pitch: float;
    /**
     * Yaw angle.
     * Units: rad
     */
    yaw: float;
    /**
     * X acceleration.
     * Units: m/s/s
     */
    xacc: float;
    /**
     * Y acceleration.
     * Units: m/s/s
     */
    yacc: float;
    /**
     * Z acceleration.
     * Units: m/s/s
     */
    zacc: float;
    /**
     * Angular speed around X axis.
     * Units: rad/s
     */
    xgyro: float;
    /**
     * Angular speed around Y axis.
     * Units: rad/s
     */
    ygyro: float;
    /**
     * Angular speed around Z axis.
     * Units: rad/s
     */
    zgyro: float;
    /**
     * Latitude.
     * Units: degE7
     */
    lat: int32_t;
    /**
     * Longitude.
     * Units: degE7
     */
    lng: int32_t;
}
/**
 * Status of key hardware.
 */
export declare class HwStatus extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Board voltage.
     * Units: mV
     */
    Vcc: uint16_t;
    /**
     * I2C error count.
     */
    I2Cerr: uint8_t;
}
/**
 * Status generated by radio.
 */
export declare class Radio extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Local signal strength.
     */
    rssi: uint8_t;
    /**
     * Remote signal strength.
     */
    remrssi: uint8_t;
    /**
     * How full the tx buffer is.
     * Units: %
     */
    txbuf: uint8_t;
    /**
     * Background noise level.
     */
    noise: uint8_t;
    /**
     * Remote background noise level.
     */
    remnoise: uint8_t;
    /**
     * Receive errors.
     */
    rxerrors: uint16_t;
    /**
     * Count of error corrected packets.
     */
    fixed: uint16_t;
}
/**
 * Status of AP_Limits. Sent in extended status stream when AP_Limits is enabled.
 */
export declare class LimitsStatus extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * State of AP_Limits.
     */
    limitsState: LimitsState;
    /**
     * Time (since boot) of last breach.
     * Units: ms
     */
    lastTrigger: uint32_t;
    /**
     * Time (since boot) of last recovery action.
     * Units: ms
     */
    lastAction: uint32_t;
    /**
     * Time (since boot) of last successful recovery.
     * Units: ms
     */
    lastRecovery: uint32_t;
    /**
     * Time (since boot) of last all-clear.
     * Units: ms
     */
    lastClear: uint32_t;
    /**
     * Number of fence breaches.
     */
    breachCount: uint16_t;
    /**
     * AP_Limit_Module bitfield of enabled modules.
     */
    modsEnabled: LimitModule;
    /**
     * AP_Limit_Module bitfield of required modules.
     */
    modsRequired: LimitModule;
    /**
     * AP_Limit_Module bitfield of triggered modules.
     */
    modsTriggered: LimitModule;
}
/**
 * Wind estimation.
 */
export declare class Wind extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Wind direction (that wind is coming from).
     * Units: deg
     */
    direction: float;
    /**
     * Wind speed in ground plane.
     * Units: m/s
     */
    speed: float;
    /**
     * Vertical wind speed.
     * Units: m/s
     */
    speedZ: float;
}
/**
 * Data packet, size 16.
 */
export declare class Data16 extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Data type.
     */
    type: uint8_t;
    /**
     * Data length.
     * Units: bytes
     */
    len: uint8_t;
    /**
     * Raw data.
     */
    data: uint8_t[];
}
/**
 * Data packet, size 32.
 */
export declare class Data32 extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Data type.
     */
    type: uint8_t;
    /**
     * Data length.
     * Units: bytes
     */
    len: uint8_t;
    /**
     * Raw data.
     */
    data: uint8_t[];
}
/**
 * Data packet, size 64.
 */
export declare class Data64 extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Data type.
     */
    type: uint8_t;
    /**
     * Data length.
     * Units: bytes
     */
    len: uint8_t;
    /**
     * Raw data.
     */
    data: uint8_t[];
}
/**
 * Data packet, size 96.
 */
export declare class Data96 extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Data type.
     */
    type: uint8_t;
    /**
     * Data length.
     * Units: bytes
     */
    len: uint8_t;
    /**
     * Raw data.
     */
    data: uint8_t[];
}
/**
 * Rangefinder reporting.
 */
export declare class RangeFinder extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Distance.
     * Units: m
     */
    distance: float;
    /**
     * Raw voltage if available, zero otherwise.
     * Units: V
     */
    voltage: float;
}
/**
 * Airspeed auto-calibration.
 */
export declare class AirspeedAutocal extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * GPS velocity north.
     * Units: m/s
     */
    vx: float;
    /**
     * GPS velocity east.
     * Units: m/s
     */
    vy: float;
    /**
     * GPS velocity down.
     * Units: m/s
     */
    vz: float;
    /**
     * Differential pressure.
     * Units: Pa
     */
    diffPressure: float;
    /**
     * Estimated to true airspeed ratio.
     */
    EAS2TAS: float;
    /**
     * Airspeed ratio.
     */
    ratio: float;
    /**
     * EKF state x.
     */
    stateX: float;
    /**
     * EKF state y.
     */
    stateY: float;
    /**
     * EKF state z.
     */
    stateZ: float;
    /**
     * EKF Pax.
     */
    Pax: float;
    /**
     * EKF Pby.
     */
    Pby: float;
    /**
     * EKF Pcz.
     */
    Pcz: float;
}
/**
 * A rally point. Used to set a point when from GCS -> MAV. Also used to return a point from MAV ->
 * GCS.
 */
export declare class RallyPoint extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * System ID.
     */
    targetSystem: uint8_t;
    /**
     * Component ID.
     */
    targetComponent: uint8_t;
    /**
     * Point index (first point is 0).
     */
    idx: uint8_t;
    /**
     * Total number of points (for sanity checking).
     */
    count: uint8_t;
    /**
     * Latitude of point.
     * Units: degE7
     */
    lat: int32_t;
    /**
     * Longitude of point.
     * Units: degE7
     */
    lng: int32_t;
    /**
     * Transit / loiter altitude relative to home.
     * Units: m
     */
    alt: int16_t;
    /**
     * Break altitude relative to home.
     * Units: m
     */
    breakAlt: int16_t;
    /**
     * Heading to aim for when landing.
     * Units: cdeg
     */
    landDir: uint16_t;
    /**
     * Configuration flags.
     */
    flags: RallyFlags;
}
/**
 * Request a current rally point from MAV. MAV should respond with a RALLY_POINT message. MAV should
 * not respond if the request is invalid.
 */
export declare class RallyFetchPoint extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * System ID.
     */
    targetSystem: uint8_t;
    /**
     * Component ID.
     */
    targetComponent: uint8_t;
    /**
     * Point index (first point is 0).
     */
    idx: uint8_t;
}
/**
 * Status of compassmot calibration.
 */
export declare class CompassMotStatus extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Throttle.
     * Units: d%
     */
    throttle: uint16_t;
    /**
     * Current.
     * Units: A
     */
    current: float;
    /**
     * Interference.
     * Units: %
     */
    interference: uint16_t;
    /**
     * Motor Compensation X.
     */
    CompensationX: float;
    /**
     * Motor Compensation Y.
     */
    CompensationY: float;
    /**
     * Motor Compensation Z.
     */
    CompensationZ: float;
}
/**
 * Status of secondary AHRS filter if available.
 */
export declare class Ahrs2 extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Roll angle.
     * Units: rad
     */
    roll: float;
    /**
     * Pitch angle.
     * Units: rad
     */
    pitch: float;
    /**
     * Yaw angle.
     * Units: rad
     */
    yaw: float;
    /**
     * Altitude (MSL).
     * Units: m
     */
    altitude: float;
    /**
     * Latitude.
     * Units: degE7
     */
    lat: int32_t;
    /**
     * Longitude.
     * Units: degE7
     */
    lng: int32_t;
}
/**
 * Camera Event.
 */
export declare class CameraStatus extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Image timestamp (since UNIX epoch, according to camera clock).
     * Units: us
     */
    timeUsec: uint64_t;
    /**
     * System ID.
     */
    targetSystem: uint8_t;
    /**
     * Camera ID.
     */
    camIdx: uint8_t;
    /**
     * Image index.
     */
    imgIdx: uint16_t;
    /**
     * Event type.
     */
    eventId: CameraStatusTypes;
    /**
     * Parameter 1 (meaning depends on event_id, see CAMERA_STATUS_TYPES enum).
     */
    p1: float;
    /**
     * Parameter 2 (meaning depends on event_id, see CAMERA_STATUS_TYPES enum).
     */
    p2: float;
    /**
     * Parameter 3 (meaning depends on event_id, see CAMERA_STATUS_TYPES enum).
     */
    p3: float;
    /**
     * Parameter 4 (meaning depends on event_id, see CAMERA_STATUS_TYPES enum).
     */
    p4: float;
}
/**
 * Camera Capture Feedback.
 */
export declare class CameraFeedback extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Image timestamp (since UNIX epoch), as passed in by CAMERA_STATUS message (or autopilot if no CCB).
     * Units: us
     */
    timeUsec: uint64_t;
    /**
     * System ID.
     */
    targetSystem: uint8_t;
    /**
     * Camera ID.
     */
    camIdx: uint8_t;
    /**
     * Image index.
     */
    imgIdx: uint16_t;
    /**
     * Latitude.
     * Units: degE7
     */
    lat: int32_t;
    /**
     * Longitude.
     * Units: degE7
     */
    lng: int32_t;
    /**
     * Altitude (MSL).
     * Units: m
     */
    altMsl: float;
    /**
     * Altitude (Relative to HOME location).
     * Units: m
     */
    altRel: float;
    /**
     * Camera Roll angle (earth frame, +-180).
     * Units: deg
     */
    roll: float;
    /**
     * Camera Pitch angle (earth frame, +-180).
     * Units: deg
     */
    pitch: float;
    /**
     * Camera Yaw (earth frame, 0-360, true).
     * Units: deg
     */
    yaw: float;
    /**
     * Focal Length.
     * Units: mm
     */
    focLen: float;
    /**
     * Feedback flags.
     */
    flags: CameraFeedbackFlags;
    /**
     * Completed image captures.
     */
    completedCaptures: uint16_t;
}
/**
 * 2nd Battery status
 *
 * @deprecated since 2017-04, replaced by BATTERY_STATUS
 */
export declare class Battery2 extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Voltage.
     * Units: mV
     */
    voltage: uint16_t;
    /**
     * Battery current, -1: autopilot does not measure the current.
     * Units: cA
     */
    currentBattery: int16_t;
}
/**
 * Status of third AHRS filter if available. This is for ANU research group (Ali and Sean).
 */
export declare class Ahrs3 extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Roll angle.
     * Units: rad
     */
    roll: float;
    /**
     * Pitch angle.
     * Units: rad
     */
    pitch: float;
    /**
     * Yaw angle.
     * Units: rad
     */
    yaw: float;
    /**
     * Altitude (MSL).
     * Units: m
     */
    altitude: float;
    /**
     * Latitude.
     * Units: degE7
     */
    lat: int32_t;
    /**
     * Longitude.
     * Units: degE7
     */
    lng: int32_t;
    /**
     * Test variable1.
     */
    v1: float;
    /**
     * Test variable2.
     */
    v2: float;
    /**
     * Test variable3.
     */
    v3: float;
    /**
     * Test variable4.
     */
    v4: float;
}
/**
 * Request the autopilot version from the system/component.
 */
export declare class AutopilotVersionRequest extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * System ID.
     */
    targetSystem: uint8_t;
    /**
     * Component ID.
     */
    targetComponent: uint8_t;
}
/**
 * Send a block of log data to remote location.
 */
export declare class RemoteLogDataBlock extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * System ID.
     */
    targetSystem: uint8_t;
    /**
     * Component ID.
     */
    targetComponent: uint8_t;
    /**
     * Log data block sequence number.
     */
    seqno: MavRemoteLogDataBlockCommands;
    /**
     * Log data block.
     */
    data: uint8_t[];
}
/**
 * Send Status of each log block that autopilot board might have sent.
 */
export declare class RemoteLogBlockStatus extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * System ID.
     */
    targetSystem: uint8_t;
    /**
     * Component ID.
     */
    targetComponent: uint8_t;
    /**
     * Log data block sequence number.
     */
    seqno: uint32_t;
    /**
     * Log data block status.
     */
    status: MavRemoteLogDataBlockStatuses;
}
/**
 * Control vehicle LEDs.
 */
export declare class LedControl extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * System ID.
     */
    targetSystem: uint8_t;
    /**
     * Component ID.
     */
    targetComponent: uint8_t;
    /**
     * Instance (LED instance to control or 255 for all LEDs).
     */
    instance: uint8_t;
    /**
     * Pattern (see LED_PATTERN_ENUM).
     */
    pattern: uint8_t;
    /**
     * Custom Byte Length.
     */
    customLen: uint8_t;
    /**
     * Custom Bytes.
     */
    customBytes: uint8_t[];
}
/**
 * Reports progress of compass calibration.
 */
export declare class MagCalProgress extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Compass being calibrated.
     */
    compassId: uint8_t;
    /**
     * Bitmask of compasses being calibrated.
     */
    calMask: uint8_t;
    /**
     * Calibration Status.
     */
    calStatus: MagCalStatus;
    /**
     * Attempt number.
     */
    attempt: uint8_t;
    /**
     * Completion percentage.
     * Units: %
     */
    completionPct: uint8_t;
    /**
     * Bitmask of sphere sections (see http://en.wikipedia.org/wiki/Geodesic_grid).
     */
    completionMask: uint8_t[];
    /**
     * Body frame direction vector for display.
     */
    directionX: float;
    /**
     * Body frame direction vector for display.
     */
    directionY: float;
    /**
     * Body frame direction vector for display.
     */
    directionZ: float;
}
/**
 * EKF Status message including flags and variances.
 */
export declare class EkfStatusReport extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Flags.
     */
    flags: EkfStatusFlags;
    /**
     * Velocity variance.
     */
    velocityVariance: float;
    /**
     * Horizontal Position variance.
     */
    posHorizVariance: float;
    /**
     * Vertical Position variance.
     */
    posVertVariance: float;
    /**
     * Compass variance.
     */
    compassVariance: float;
    /**
     * Terrain Altitude variance.
     */
    terrainAltVariance: float;
    /**
     * Airspeed variance.
     */
    airspeedVariance: float;
}
/**
 * PID tuning information.
 */
export declare class PidTuning extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Axis.
     */
    axis: PidTuningAxis;
    /**
     * Desired rate.
     */
    desired: float;
    /**
     * Achieved rate.
     */
    achieved: float;
    /**
     * FF component.
     */
    FF: float;
    /**
     * P component.
     */
    P: float;
    /**
     * I component.
     */
    I: float;
    /**
     * D component.
     */
    D: float;
}
/**
 * Deepstall path planning.
 */
export declare class Deepstall extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Landing latitude.
     * Units: degE7
     */
    landingLat: int32_t;
    /**
     * Landing longitude.
     * Units: degE7
     */
    landingLon: int32_t;
    /**
     * Final heading start point, latitude.
     * Units: degE7
     */
    pathLat: int32_t;
    /**
     * Final heading start point, longitude.
     * Units: degE7
     */
    pathLon: int32_t;
    /**
     * Arc entry point, latitude.
     * Units: degE7
     */
    arcEntryLat: int32_t;
    /**
     * Arc entry point, longitude.
     * Units: degE7
     */
    arcEntryLon: int32_t;
    /**
     * Altitude.
     * Units: m
     */
    altitude: float;
    /**
     * Distance the aircraft expects to travel during the deepstall.
     * Units: m
     */
    expectedTravelDistance: float;
    /**
     * Deepstall cross track error (only valid when in DEEPSTALL_STAGE_LAND).
     * Units: m
     */
    crossTrackError: float;
    /**
     * Deepstall stage.
     */
    stage: DeepstallStage;
}
/**
 * 3 axis gimbal measurements.
 */
export declare class GimbalReport extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * System ID.
     */
    targetSystem: uint8_t;
    /**
     * Component ID.
     */
    targetComponent: uint8_t;
    /**
     * Time since last update.
     * Units: s
     */
    deltaTime: float;
    /**
     * Delta angle X.
     * Units: rad
     */
    deltaAngleX: float;
    /**
     * Delta angle Y.
     * Units: rad
     */
    deltaAngleY: float;
    /**
     * Delta angle X.
     * Units: rad
     */
    deltaAngleZ: float;
    /**
     * Delta velocity X.
     * Units: m/s
     */
    deltaVelocityX: float;
    /**
     * Delta velocity Y.
     * Units: m/s
     */
    deltaVelocityY: float;
    /**
     * Delta velocity Z.
     * Units: m/s
     */
    deltaVelocityZ: float;
    /**
     * Joint ROLL.
     * Units: rad
     */
    jointRoll: float;
    /**
     * Joint EL.
     * Units: rad
     */
    jointEl: float;
    /**
     * Joint AZ.
     * Units: rad
     */
    jointAz: float;
}
/**
 * Control message for rate gimbal.
 */
export declare class GimbalControl extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * System ID.
     */
    targetSystem: uint8_t;
    /**
     * Component ID.
     */
    targetComponent: uint8_t;
    /**
     * Demanded angular rate X.
     * Units: rad/s
     */
    demandedRateX: float;
    /**
     * Demanded angular rate Y.
     * Units: rad/s
     */
    demandedRateY: float;
    /**
     * Demanded angular rate Z.
     * Units: rad/s
     */
    demandedRateZ: float;
}
/**
 * 100 Hz gimbal torque command telemetry.
 */
export declare class GimbalTorqueCmdReport extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * System ID.
     */
    targetSystem: uint8_t;
    /**
     * Component ID.
     */
    targetComponent: uint8_t;
    /**
     * Roll Torque Command.
     */
    rlTorqueCmd: int16_t;
    /**
     * Elevation Torque Command.
     */
    elTorqueCmd: int16_t;
    /**
     * Azimuth Torque Command.
     */
    azTorqueCmd: int16_t;
}
/**
 * Heartbeat from a HeroBus attached GoPro.
 */
export declare class GoproHeartbeat extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Status.
     */
    status: GoproHeartbeatStatus;
    /**
     * Current capture mode.
     */
    captureMode: GoproCaptureMode;
    /**
     * Additional status bits.
     */
    flags: GoproHeartbeatFlags;
}
/**
 * Request a GOPRO_COMMAND response from the GoPro.
 */
export declare class GoproGetRequest extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * System ID.
     */
    targetSystem: uint8_t;
    /**
     * Component ID.
     */
    targetComponent: uint8_t;
    /**
     * Command ID.
     */
    cmdId: GoproCommand;
}
/**
 * Response from a GOPRO_COMMAND get request.
 */
export declare class GoproGetResponse extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Command ID.
     */
    cmdId: GoproCommand;
    /**
     * Status.
     */
    status: GoproRequestStatus;
    /**
     * Value.
     */
    value: uint8_t[];
}
/**
 * Request to set a GOPRO_COMMAND with a desired.
 */
export declare class GoproSetRequest extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * System ID.
     */
    targetSystem: uint8_t;
    /**
     * Component ID.
     */
    targetComponent: uint8_t;
    /**
     * Command ID.
     */
    cmdId: GoproCommand;
    /**
     * Value.
     */
    value: uint8_t[];
}
/**
 * Response from a GOPRO_COMMAND set request.
 */
export declare class GoproSetResponse extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Command ID.
     */
    cmdId: GoproCommand;
    /**
     * Status.
     */
    status: GoproRequestStatus;
}
/**
 * RPM sensor output.
 */
export declare class Rpm extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * RPM Sensor1.
     */
    rpm1: float;
    /**
     * RPM Sensor2.
     */
    rpm2: float;
}
/**
 * Read registers for a device.
 */
export declare class DeviceOpRead extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * System ID.
     */
    targetSystem: uint8_t;
    /**
     * Component ID.
     */
    targetComponent: uint8_t;
    /**
     * Request ID - copied to reply.
     */
    requestId: uint32_t;
    /**
     * The bus type.
     */
    bustype: DeviceOpBustype;
    /**
     * Bus number.
     */
    bus: uint8_t;
    /**
     * Bus address.
     */
    address: uint8_t;
    /**
     * Name of device on bus (for SPI).
     */
    busname: string;
    /**
     * First register to read.
     */
    regstart: uint8_t;
    /**
     * Count of registers to read.
     */
    count: uint8_t;
    /**
     * Bank number.
     */
    bank: uint8_t;
}
/**
 * Read registers reply.
 */
export declare class DeviceOpReadReply extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Request ID - copied from request.
     */
    requestId: uint32_t;
    /**
     * 0 for success, anything else is failure code.
     */
    result: uint8_t;
    /**
     * Starting register.
     */
    regstart: uint8_t;
    /**
     * Count of bytes read.
     */
    count: uint8_t;
    /**
     * Reply data.
     */
    data: uint8_t[];
    /**
     * Bank number.
     */
    bank: uint8_t;
}
/**
 * Write registers for a device.
 */
export declare class DeviceOpWrite extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * System ID.
     */
    targetSystem: uint8_t;
    /**
     * Component ID.
     */
    targetComponent: uint8_t;
    /**
     * Request ID - copied to reply.
     */
    requestId: uint32_t;
    /**
     * The bus type.
     */
    bustype: DeviceOpBustype;
    /**
     * Bus number.
     */
    bus: uint8_t;
    /**
     * Bus address.
     */
    address: uint8_t;
    /**
     * Name of device on bus (for SPI).
     */
    busname: string;
    /**
     * First register to write.
     */
    regstart: uint8_t;
    /**
     * Count of registers to write.
     */
    count: uint8_t;
    /**
     * Write data.
     */
    data: uint8_t[];
    /**
     * Bank number.
     */
    bank: uint8_t;
}
/**
 * Write registers reply.
 */
export declare class DeviceOpWriteReply extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Request ID - copied from request.
     */
    requestId: uint32_t;
    /**
     * 0 for success, anything else is failure code.
     */
    result: uint8_t;
}
/**
 * Adaptive Controller tuning information.
 */
export declare class AdapTuning extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Axis.
     */
    axis: PidTuningAxis;
    /**
     * Desired rate.
     * Units: deg/s
     */
    desired: float;
    /**
     * Achieved rate.
     * Units: deg/s
     */
    achieved: float;
    /**
     * Error between model and vehicle.
     */
    error: float;
    /**
     * Theta estimated state predictor.
     */
    theta: float;
    /**
     * Omega estimated state predictor.
     */
    omega: float;
    /**
     * Sigma estimated state predictor.
     */
    sigma: float;
    /**
     * Theta derivative.
     */
    thetaDot: float;
    /**
     * Omega derivative.
     */
    omegaDot: float;
    /**
     * Sigma derivative.
     */
    sigmaDot: float;
    /**
     * Projection operator value.
     */
    f: float;
    /**
     * Projection operator derivative.
     */
    fDot: float;
    /**
     * u adaptive controlled output command.
     */
    u: float;
}
/**
 * Camera vision based attitude and position deltas.
 */
export declare class VisionPositionDelta extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Timestamp (synced to UNIX time or since system boot).
     * Units: us
     */
    timeUsec: uint64_t;
    /**
     * Time since the last reported camera frame.
     * Units: us
     */
    timeDeltaUsec: uint64_t;
    /**
     * Defines a rotation vector [roll, pitch, yaw] to the current MAV_FRAME_BODY_FRD from the previous
     * MAV_FRAME_BODY_FRD.
     * Units: rad
     */
    angleDelta: float[];
    /**
     * Change in position to the current MAV_FRAME_BODY_FRD from the previous FRAME_BODY_FRD rotated to the
     * current MAV_FRAME_BODY_FRD.
     * Units: m
     */
    positionDelta: float[];
    /**
     * Normalised confidence value from 0 to 100.
     * Units: %
     */
    confidence: float;
}
/**
 * Angle of Attack and Side Slip Angle.
 */
export declare class AoaSsa extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Timestamp (since boot or Unix epoch).
     * Units: us
     */
    timeUsec: uint64_t;
    /**
     * Angle of Attack.
     * Units: deg
     */
    AOA: float;
    /**
     * Side Slip Angle.
     * Units: deg
     */
    SSA: float;
}
/**
 * ESC Telemetry Data for ESCs 1 to 4, matching data sent by BLHeli ESCs.
 */
export declare class EscTelemetry1To4 extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Temperature.
     * Units: degC
     */
    temperature: uint8_t[];
    /**
     * Voltage.
     * Units: cV
     */
    voltage: uint16_t[];
    /**
     * Current.
     * Units: cA
     */
    current: uint16_t[];
    /**
     * Total current.
     * Units: mAh
     */
    totalcurrent: uint16_t[];
    /**
     * RPM (eRPM).
     * Units: rpm
     */
    rpm: uint16_t[];
    /**
     * count of telemetry packets received (wraps at 65535).
     */
    count: uint16_t[];
}
/**
 * ESC Telemetry Data for ESCs 5 to 8, matching data sent by BLHeli ESCs.
 */
export declare class EscTelemetry5To8 extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Temperature.
     * Units: degC
     */
    temperature: uint8_t[];
    /**
     * Voltage.
     * Units: cV
     */
    voltage: uint16_t[];
    /**
     * Current.
     * Units: cA
     */
    current: uint16_t[];
    /**
     * Total current.
     * Units: mAh
     */
    totalcurrent: uint16_t[];
    /**
     * RPM (eRPM).
     * Units: rpm
     */
    rpm: uint16_t[];
    /**
     * count of telemetry packets received (wraps at 65535).
     */
    count: uint16_t[];
}
/**
 * ESC Telemetry Data for ESCs 9 to 12, matching data sent by BLHeli ESCs.
 */
export declare class EscTelemetry9To12 extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Temperature.
     * Units: degC
     */
    temperature: uint8_t[];
    /**
     * Voltage.
     * Units: cV
     */
    voltage: uint16_t[];
    /**
     * Current.
     * Units: cA
     */
    current: uint16_t[];
    /**
     * Total current.
     * Units: mAh
     */
    totalcurrent: uint16_t[];
    /**
     * RPM (eRPM).
     * Units: rpm
     */
    rpm: uint16_t[];
    /**
     * count of telemetry packets received (wraps at 65535).
     */
    count: uint16_t[];
}
/**
 * Configure an OSD parameter slot.
 */
export declare class OsdParamConfig extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * System ID.
     */
    targetSystem: uint8_t;
    /**
     * Component ID.
     */
    targetComponent: uint8_t;
    /**
     * Request ID - copied to reply.
     */
    requestId: uint32_t;
    /**
     * OSD parameter screen index.
     */
    osdScreen: uint8_t;
    /**
     * OSD parameter display index.
     */
    osdIndex: uint8_t;
    /**
     * Onboard parameter id, terminated by NULL if the length is less than 16 human-readable chars and
     * WITHOUT null termination (NULL) byte if the length is exactly 16 chars - applications have to
     * provide 16+1 bytes storage if the ID is stored as string
     */
    paramId: string;
    /**
     * Config type.
     */
    configType: OsdParamConfigType;
    /**
     * OSD parameter minimum value.
     */
    minValue: float;
    /**
     * OSD parameter maximum value.
     */
    maxValue: float;
    /**
     * OSD parameter increment.
     */
    increment: float;
}
/**
 * Configure OSD parameter reply.
 */
export declare class OsdParamConfigReply extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Request ID - copied from request.
     */
    requestId: uint32_t;
    /**
     * Config error type.
     */
    result: OsdParamConfigError;
}
/**
 * Read a configured an OSD parameter slot.
 */
export declare class OsdParamShowConfig extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * System ID.
     */
    targetSystem: uint8_t;
    /**
     * Component ID.
     */
    targetComponent: uint8_t;
    /**
     * Request ID - copied to reply.
     */
    requestId: uint32_t;
    /**
     * OSD parameter screen index.
     */
    osdScreen: uint8_t;
    /**
     * OSD parameter display index.
     */
    osdIndex: uint8_t;
}
/**
 * Read configured OSD parameter reply.
 */
export declare class OsdParamShowConfigReply extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Request ID - copied from request.
     */
    requestId: uint32_t;
    /**
     * Config error type.
     */
    result: OsdParamConfigError;
    /**
     * Onboard parameter id, terminated by NULL if the length is less than 16 human-readable chars and
     * WITHOUT null termination (NULL) byte if the length is exactly 16 chars - applications have to
     * provide 16+1 bytes storage if the ID is stored as string
     */
    paramId: string;
    /**
     * Config type.
     */
    configType: OsdParamConfigType;
    /**
     * OSD parameter minimum value.
     */
    minValue: float;
    /**
     * OSD parameter maximum value.
     */
    maxValue: float;
    /**
     * OSD parameter increment.
     */
    increment: float;
}
/**
 * Obstacle located as a 3D vector.
 */
export declare class ObstacleDistance3d extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Timestamp (time since system boot).
     * Units: ms
     */
    timeBootMs: uint32_t;
    /**
     * Class id of the distance sensor type.
     */
    sensorType: MavDistanceSensor;
    /**
     * Coordinate frame of reference.
     */
    frame: MavFrame;
    /**
     * Unique ID given to each obstacle so that its movement can be tracked. Use UINT16_MAX if object ID is
     * unknown or cannot be determined.
     */
    obstacleId: uint16_t;
    /**
     * X position of the obstacle.
     * Units: m
     */
    x: float;
    /**
     * Y position of the obstacle.
     * Units: m
     */
    y: float;
    /**
     * Z position of the obstacle.
     * Units: m
     */
    z: float;
    /**
     * Minimum distance the sensor can measure.
     * Units: m
     */
    minDistance: float;
    /**
     * Maximum distance the sensor can measure.
     * Units: m
     */
    maxDistance: float;
}
/**
 * Water depth
 */
export declare class WaterDepth extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Timestamp (time since system boot)
     * Units: ms
     */
    timeBootMs: uint32_t;
    /**
     * Onboard ID of the sensor
     */
    id: uint8_t;
    /**
     * Sensor data healthy (0=unhealthy, 1=healthy)
     */
    healthy: uint8_t;
    /**
     * Latitude
     * Units: degE7
     */
    lat: int32_t;
    /**
     * Longitude
     * Units: degE7
     */
    lng: int32_t;
    /**
     * Altitude (MSL) of vehicle
     * Units: m
     */
    alt: float;
    /**
     * Roll angle
     * Units: rad
     */
    roll: float;
    /**
     * Pitch angle
     * Units: rad
     */
    pitch: float;
    /**
     * Yaw angle
     * Units: rad
     */
    yaw: float;
    /**
     * Distance (uncorrected)
     * Units: m
     */
    distance: float;
    /**
     * Water temperature
     * Units: degC
     */
    temperature: float;
}
export declare const REGISTRY: MavLinkPacketRegistry;
