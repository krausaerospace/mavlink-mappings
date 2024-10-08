"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemInfo = exports.SetMagOffsets = exports.SensorOffsets = exports.OsdParamConfigError = exports.OsdParamConfigType = exports.TrackerMode = exports.RoverMode = exports.SubMode = exports.CopterMode = exports.PlaneMode = exports.DeepstallStage = exports.DeviceOpBustype = exports.MavRemoteLogDataBlockStatuses = exports.MavRemoteLogDataBlockCommands = exports.PidTuningAxis = exports.EkfStatusFlags = exports.LedControlPattern = exports.MavCmdDoAuxFunctionSwitchLevel = exports.GoproBurstRate = exports.GoproModel = exports.GoproCharging = exports.GoproProtuneExposure = exports.GoproProtuneSharpness = exports.GoproProtuneGain = exports.GoproProtuneColour = exports.GoproProtuneWhiteBalance = exports.GoproPhotoResolution = exports.GoproVideoSettingsFlags = exports.GoproFieldOfView = exports.GoproFrameRate = exports.GoproResolution = exports.GoproCaptureMode = exports.GoproCommand = exports.GoproRequestStatus = exports.GoproHeartbeatFlags = exports.GoproHeartbeatStatus = exports.GimbalAxisCalibrationRequired = exports.GimbalAxisCalibrationStatus = exports.GimbalAxis = exports.MavModeGimbal = exports.CameraFeedbackFlags = exports.CameraStatusTypes = exports.RallyFlags = exports.LimitModule = exports.LimitsState = exports.SecureCommandOp = exports.ScriptingCmd = exports.MavCmd = exports.HeadingType = exports.AccelcalVehiclePos = void 0;
exports.SecureCommand = exports.DeviceOpWriteReply = exports.DeviceOpWrite = exports.DeviceOpReadReply = exports.DeviceOpRead = exports.Rpm = exports.GoproSetResponse = exports.GoproSetRequest = exports.GoproGetResponse = exports.GoproGetRequest = exports.GoproHeartbeat = exports.GimbalTorqueCmdReport = exports.GimbalControl = exports.GimbalReport = exports.Deepstall = exports.PidTuning = exports.EkfStatusReport = exports.MagCalProgress = exports.LedControl = exports.RemoteLogBlockStatus = exports.RemoteLogDataBlock = exports.AutopilotVersionRequest = exports.Ahrs3 = exports.Battery2 = exports.CameraFeedback = exports.CameraStatus = exports.Ahrs2 = exports.CompassMotStatus = exports.RallyFetchPoint = exports.RallyPoint = exports.AirspeedAutocal = exports.RangeFinder = exports.Data96 = exports.Data64 = exports.Data32 = exports.Data16 = exports.Wind = exports.LimitsStatus = exports.Radio = exports.HwStatus = exports.SimState = exports.Ahrs = exports.FenceFetchPoint = exports.FencePoint = exports.MountStatus = exports.MountControl = exports.MountConfigure = exports.DigicamControl = exports.DigicamConfigure = exports.ApAdc = void 0;
exports.ExternalPositionEstimateCommand = exports.GuidedChangeHeadingCommand = exports.GuidedChangeAltitudeCommand = exports.GuidedChangeSpeedCommand = exports.NavAttitudeTimeCommand = exports.NavScriptTimeCommand = exports.ScriptingCommand = exports.DebugTrapCommand = exports.BatteryResetCommand = exports.FlashBootloaderCommand = exports.GimbalFullResetCommand = exports.GimbalRequestAxisCalibrationCommand = exports.GimbalAxisCalibrationStatusCommand = exports.GimbalResetCommand = exports.SetFactoryTestModeCommand = exports.DoSendBannerCommand = exports.AccelcalVehiclePosCommand = exports.DoCancelMagCalCommand = exports.DoAcceptMagCalCommand = exports.DoStartMagCalCommand = exports.FixedMagCalFieldCommand = exports.FixedMagCalCommand = exports.SoloBtnPauseClickCommand = exports.SoloBtnFlyHoldCommand = exports.SoloBtnFlyClickCommand = exports.PowerOffInitiatedCommand = exports.NavAltitudeWaitCommand = exports.DoAuxFunctionCommand = exports.DoSendScriptMessageCommand = exports.DoSprayerCommand = exports.DoSetResumeRepeatDistCommand = exports.EscTelemetry29To32 = exports.EscTelemetry25To28 = exports.EscTelemetry21To24 = exports.EscTelemetry17To20 = exports.EscTelemetry13To16 = exports.McuStatus = exports.WaterDepth = exports.ObstacleDistance3d = exports.OsdParamShowConfigReply = exports.OsdParamShowConfig = exports.OsdParamConfigReply = exports.OsdParamConfig = exports.EscTelemetry9To12 = exports.EscTelemetry5To8 = exports.EscTelemetry1To4 = exports.AoaSsa = exports.VisionPositionDelta = exports.AdapTuning = exports.SecureCommandReply = void 0;
exports.COMMANDS = exports.REGISTRY = void 0;
const mavlink_1 = require("./mavlink");
const common_1 = require("./common");
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
 * MAV_CMD
 */
var MavCmd;
(function (MavCmd) {
    /**
     * Set the distance to be repeated on mission resume
     * @param1 Distance[m] Distance.
     * @param2 Empty.
     * @param3 Empty.
     * @param4 Empty.
     * @param5 Empty.
     * @param6 Empty.
     * @param7 Empty.
     */
    MavCmd[MavCmd["DO_SET_RESUME_REPEAT_DIST"] = 215] = "DO_SET_RESUME_REPEAT_DIST";
    /**
     * Control attached liquid sprayer
     * @param1 Sprayer Enable (min: 0, max: 1, increment: 1) 0: disable sprayer. 1: enable sprayer.
     * @param2 Empty.
     * @param3 Empty.
     * @param4 Empty.
     * @param5 Empty.
     * @param6 Empty.
     * @param7 Empty.
     */
    MavCmd[MavCmd["DO_SPRAYER"] = 216] = "DO_SPRAYER";
    /**
     * Pass instructions onto scripting, a script should be checking for a new command
     * @param1 ID (min: 0, max: 65535, increment: 1) uint16 ID value to be passed to scripting
     * @param2 param 1 float value to be passed to scripting
     * @param3 param 2 float value to be passed to scripting
     * @param4 param 3 float value to be passed to scripting
     * @param5 Empty.
     * @param6 Empty.
     * @param7 Empty.
     */
    MavCmd[MavCmd["DO_SEND_SCRIPT_MESSAGE"] = 217] = "DO_SEND_SCRIPT_MESSAGE";
    /**
     * Execute auxiliary function
     * @param1 AuxiliaryFunction Auxiliary Function.
     * @param2 SwitchPosition Switch Level.
     * @param3 Empty.
     * @param4 Empty.
     * @param5 Empty.
     * @param6 Empty.
     * @param7 Empty.
     */
    MavCmd[MavCmd["DO_AUX_FUNCTION"] = 218] = "DO_AUX_FUNCTION";
    /**
     * Mission command to wait for an altitude or downwards vertical speed. This is meant for high altitude
     * balloon launches, allowing the aircraft to be idle until either an altitude is reached or a negative
     * vertical speed is reached (indicating early balloon burst). The wiggle time is how often to wiggle
     * the control surfaces to prevent them seizing up.
     * @param1 Altitude[m] Altitude.
     * @param2 Descent Speed[m/s] Descent speed.
     * @param3 Wiggle Time[s] How long to wiggle the control surfaces to prevent them seizing up.
     * @param4 Empty.
     * @param5 Empty.
     * @param6 Empty.
     * @param7 Empty.
     */
    MavCmd[MavCmd["NAV_ALTITUDE_WAIT"] = 83] = "NAV_ALTITUDE_WAIT";
    /**
     * A system wide power-off event has been initiated.
     * @param1 Empty.
     * @param2 Empty.
     * @param3 Empty.
     * @param4 Empty.
     * @param5 Empty.
     * @param6 Empty.
     * @param7 Empty.
     */
    MavCmd[MavCmd["POWER_OFF_INITIATED"] = 42000] = "POWER_OFF_INITIATED";
    /**
     * FLY button has been clicked.
     * @param1 Empty.
     * @param2 Empty.
     * @param3 Empty.
     * @param4 Empty.
     * @param5 Empty.
     * @param6 Empty.
     * @param7 Empty.
     */
    MavCmd[MavCmd["SOLO_BTN_FLY_CLICK"] = 42001] = "SOLO_BTN_FLY_CLICK";
    /**
     * FLY button has been held for 1.5 seconds.
     * @param1 Takeoff Altitude[m] Takeoff altitude.
     * @param2 Empty.
     * @param3 Empty.
     * @param4 Empty.
     * @param5 Empty.
     * @param6 Empty.
     * @param7 Empty.
     */
    MavCmd[MavCmd["SOLO_BTN_FLY_HOLD"] = 42002] = "SOLO_BTN_FLY_HOLD";
    /**
     * PAUSE button has been clicked.
     * @param1 Shot Mode (min: 0, max: 1, increment: 1) 1 if Solo is in a shot mode, 0 otherwise.
     * @param2 Empty.
     * @param3 Empty.
     * @param4 Empty.
     * @param5 Empty.
     * @param6 Empty.
     * @param7 Empty.
     */
    MavCmd[MavCmd["SOLO_BTN_PAUSE_CLICK"] = 42003] = "SOLO_BTN_PAUSE_CLICK";
    /**
     * Magnetometer calibration based on fixed position in earth field given by inclination, declination
     * and intensity.
     * @param1 Declination[deg] Magnetic declination.
     * @param2 Inclination[deg] Magnetic inclination.
     * @param3 Intensity[mgauss] Magnetic intensity.
     * @param4 Yaw[deg] Yaw.
     * @param5 Empty.
     * @param6 Empty.
     * @param7 Empty.
     */
    MavCmd[MavCmd["FIXED_MAG_CAL"] = 42004] = "FIXED_MAG_CAL";
    /**
     * Magnetometer calibration based on fixed expected field values.
     * @param1 Field X[mgauss] Field strength X.
     * @param2 Field Y[mgauss] Field strength Y.
     * @param3 Field Z[mgauss] Field strength Z.
     * @param4 Empty.
     * @param5 Empty.
     * @param6 Empty.
     * @param7 Empty.
     */
    MavCmd[MavCmd["FIXED_MAG_CAL_FIELD"] = 42005] = "FIXED_MAG_CAL_FIELD";
    /**
     * Initiate a magnetometer calibration.
     * @param1 Magnetometers Bitmask (min: 0, max: 255, increment: 1) Bitmask of magnetometers to calibrate. Use 0 to calibrate all sensors that can be started (sensors may not start if disabled, unhealthy, etc.). The command will NACK if calibration does not start for a sensor explicitly specified by the bitmask.
     * @param2 Retry on Failure (min: 0, max: 1, increment: 1) Automatically retry on failure (0=no retry, 1=retry).
     * @param3 Autosave (min: 0, max: 1, increment: 1) Save without user input (0=require input, 1=autosave).
     * @param4 Delay[s] Delay.
     * @param5 Autoreboot (min: 0, max: 1, increment: 1) Autoreboot (0=user reboot, 1=autoreboot).
     * @param6 Empty.
     * @param7 Empty.
     */
    MavCmd[MavCmd["DO_START_MAG_CAL"] = 42424] = "DO_START_MAG_CAL";
    /**
     * Accept a magnetometer calibration.
     * @param1 Magnetometers Bitmask (min: 0, max: 255, increment: 1) Bitmask of magnetometers that calibration is accepted (0 means all).
     * @param2 Empty.
     * @param3 Empty.
     * @param4 Empty.
     * @param5 Empty.
     * @param6 Empty.
     * @param7 Empty.
     */
    MavCmd[MavCmd["DO_ACCEPT_MAG_CAL"] = 42425] = "DO_ACCEPT_MAG_CAL";
    /**
     * Cancel a running magnetometer calibration.
     * @param1 Magnetometers Bitmask (min: 0, max: 255, increment: 1) Bitmask of magnetometers to cancel a running calibration (0 means all).
     * @param2 Empty.
     * @param3 Empty.
     * @param4 Empty.
     * @param5 Empty.
     * @param6 Empty.
     * @param7 Empty.
     */
    MavCmd[MavCmd["DO_CANCEL_MAG_CAL"] = 42426] = "DO_CANCEL_MAG_CAL";
    /**
     * Used when doing accelerometer calibration. When sent to the GCS tells it what position to put the
     * vehicle in. When sent to the vehicle says what position the vehicle is in.
     * @param1 Position Position.
     * @param2 Empty.
     * @param3 Empty.
     * @param4 Empty.
     * @param5 Empty.
     * @param6 Empty.
     * @param7 Empty.
     */
    MavCmd[MavCmd["ACCELCAL_VEHICLE_POS"] = 42429] = "ACCELCAL_VEHICLE_POS";
    /**
     * Reply with the version banner.
     * @param1 Empty.
     * @param2 Empty.
     * @param3 Empty.
     * @param4 Empty.
     * @param5 Empty.
     * @param6 Empty.
     * @param7 Empty.
     */
    MavCmd[MavCmd["DO_SEND_BANNER"] = 42428] = "DO_SEND_BANNER";
    /**
     * Command autopilot to get into factory test/diagnostic mode.
     * @param1 Test Mode (min: 0, max: 1, increment: 1) 0: activate test mode, 1: exit test mode.
     * @param2 Empty.
     * @param3 Empty.
     * @param4 Empty.
     * @param5 Empty.
     * @param6 Empty.
     * @param7 Empty.
     */
    MavCmd[MavCmd["SET_FACTORY_TEST_MODE"] = 42427] = "SET_FACTORY_TEST_MODE";
    /**
     * Causes the gimbal to reset and boot as if it was just powered on.
     * @param1 Empty.
     * @param2 Empty.
     * @param3 Empty.
     * @param4 Empty.
     * @param5 Empty.
     * @param6 Empty.
     * @param7 Empty.
     */
    MavCmd[MavCmd["GIMBAL_RESET"] = 42501] = "GIMBAL_RESET";
    /**
     * Reports progress and success or failure of gimbal axis calibration procedure.
     * @param1 Axis Gimbal axis we're reporting calibration progress for.
     * @param2 Progress[%] (min: 0, max: 100) Current calibration progress for this axis.
     * @param3 Status Status of the calibration.
     * @param4 Empty.
     * @param5 Empty.
     * @param6 Empty.
     * @param7 Empty.
     */
    MavCmd[MavCmd["GIMBAL_AXIS_CALIBRATION_STATUS"] = 42502] = "GIMBAL_AXIS_CALIBRATION_STATUS";
    /**
     * Starts commutation calibration on the gimbal.
     * @param1 Empty.
     * @param2 Empty.
     * @param3 Empty.
     * @param4 Empty.
     * @param5 Empty.
     * @param6 Empty.
     * @param7 Empty.
     */
    MavCmd[MavCmd["GIMBAL_REQUEST_AXIS_CALIBRATION"] = 42503] = "GIMBAL_REQUEST_AXIS_CALIBRATION";
    /**
     * Erases gimbal application and parameters.
     * @param1 Magic number.
     * @param2 Magic number.
     * @param3 Magic number.
     * @param4 Magic number.
     * @param5 Magic number.
     * @param6 Magic number.
     * @param7 Magic number.
     */
    MavCmd[MavCmd["GIMBAL_FULL_RESET"] = 42505] = "GIMBAL_FULL_RESET";
    /**
     * Update the bootloader
     * @param1 Empty
     * @param2 Empty
     * @param3 Empty
     * @param4 Empty
     * @param5 Magic Number (increment: 1) Magic number - set to 290876 to actually flash
     * @param6 Empty
     * @param7 Empty
     */
    MavCmd[MavCmd["FLASH_BOOTLOADER"] = 42650] = "FLASH_BOOTLOADER";
    /**
     * Reset battery capacity for batteries that accumulate consumed battery via integration.
     * @param1 battery mask Bitmask of batteries to reset. Least significant bit is for the first battery.
     * @param2 percentage (min: 0, max: 100, increment: 1) Battery percentage remaining to set.
     */
    MavCmd[MavCmd["BATTERY_RESET"] = 42651] = "BATTERY_RESET";
    /**
     * Issue a trap signal to the autopilot process, presumably to enter the debugger.
     * @param1 Magic number - set to 32451 to actually trap.
     * @param2 Empty.
     * @param3 Empty.
     * @param4 Empty.
     * @param5 Empty.
     * @param6 Empty.
     * @param7 Empty.
     */
    MavCmd[MavCmd["DEBUG_TRAP"] = 42700] = "DEBUG_TRAP";
    /**
     * Control onboard scripting.
     * @param1 Scripting command to execute
     */
    MavCmd[MavCmd["SCRIPTING"] = 42701] = "SCRIPTING";
    /**
     * Scripting command as NAV command with wait for completion.
     * @param1 command integer command number (0 to 255)
     * @param2 timeout[s] timeout for operation in seconds. Zero means no timeout (0 to 255)
     * @param3 arg1 argument1.
     * @param4 arg2 argument2.
     * @param5 arg3 argument3.
     * @param6 arg4 argument4.
     * @param7 Empty
     */
    MavCmd[MavCmd["NAV_SCRIPT_TIME"] = 42702] = "NAV_SCRIPT_TIME";
    /**
     * Maintain an attitude for a specified time.
     * @param1 time[s] Time to maintain specified attitude and climb rate
     * @param2 roll[deg] Roll angle in degrees (positive is lean right, negative is lean left)
     * @param3 pitch[deg] Pitch angle in degrees (positive is lean back, negative is lean forward)
     * @param4 yaw[deg] Yaw angle
     * @param5 climb_rate[m/s] Climb rate
     * @param6 Empty
     * @param7 Empty
     */
    MavCmd[MavCmd["NAV_ATTITUDE_TIME"] = 42703] = "NAV_ATTITUDE_TIME";
    /**
     * Change flight speed at a given rate. This slews the vehicle at a controllable rate between it's
     * previous speed and the new one. (affects GUIDED only. Outside GUIDED, aircraft ignores these
     * commands. Designed for onboard companion-computer command-and-control, not normally operator/GCS
     * control.)
     * @param1 speed type Airspeed or groundspeed.
     * @param2 speed target[m/s] Target Speed
     * @param3 speed rate-of-change[m/s/s] Acceleration rate, 0 to take effect instantly
     * @param4 Empty
     * @param5 Empty
     * @param6 Empty
     * @param7 Empty
     */
    MavCmd[MavCmd["GUIDED_CHANGE_SPEED"] = 43000] = "GUIDED_CHANGE_SPEED";
    /**
     * Change target altitude at a given rate. This slews the vehicle at a controllable rate between it's
     * previous altitude and the new one. (affects GUIDED only. Outside GUIDED, aircraft ignores these
     * commands. Designed for onboard companion-computer command-and-control, not normally operator/GCS
     * control.)
     * @param1 Empty
     * @param2 Empty
     * @param3 alt rate-of-change[m/s/s] (min: 0) Rate of change, toward new altitude. 0 for maximum rate change. Positive numbers only, as negative numbers will not converge on the new target alt.
     * @param4 Empty
     * @param5 Empty
     * @param6 Empty
     * @param7 target alt[m] Target Altitude
     */
    MavCmd[MavCmd["GUIDED_CHANGE_ALTITUDE"] = 43001] = "GUIDED_CHANGE_ALTITUDE";
    /**
     * Change to target heading at a given rate, overriding previous heading/s. This slews the vehicle at a
     * controllable rate between it's previous heading and the new one. (affects GUIDED only. Exiting
     * GUIDED returns aircraft to normal behaviour defined elsewhere. Designed for onboard
     * companion-computer command-and-control, not normally operator/GCS control.)
     * @param1 heading type course-over-ground or raw vehicle heading.
     * @param2 heading target[deg] (min: 0, max: 359.99) Target heading.
     * @param3 heading rate-of-change[m/s/s] Maximum centripetal accelearation, ie rate of change,  toward new heading.
     * @param4 Empty
     * @param5 Empty
     * @param6 Empty
     * @param7 Empty
     */
    MavCmd[MavCmd["GUIDED_CHANGE_HEADING"] = 43002] = "GUIDED_CHANGE_HEADING";
    /**
     * Provide an external position estimate for use when dead-reckoning. This is meant to be used for
     * occasional position resets that may be provided by a external system such as a remote pilot using
     * landmarks over a video link.
     *
     * @note has location
     *
     * @param1 transmission_time[s] Timestamp that this message was sent as a time in the transmitters time domain. The sender should wrap this time back to zero based on required timing accuracy for the application and the limitations of a 32 bit float. For example, wrapping at 10 hours would give approximately 1ms accuracy. Recipient must handle time wrap in any timing jitter correction applied to this field. Wrap rollover time should not be at not more than 250 seconds, which would give approximately 10 microsecond accuracy.
     * @param2 processing_time[s] The time spent in processing the sensor data that is the basis for this position. The recipient can use this to improve time alignment of the data. Set to zero if not known.
     * @param3 accuracy estimated one standard deviation accuracy of the measurement. Set to NaN if not known.
     * @param4 Empty
     * @param5 Latitude Latitude
     * @param6 Longitude Longitude
     * @param7 Altitude[m] Altitude, not used. Should be sent as NaN. May be supported in a future version of this message.
     */
    MavCmd[MavCmd["EXTERNAL_POSITION_ESTIMATE"] = 43003] = "EXTERNAL_POSITION_ESTIMATE";
})(MavCmd = exports.MavCmd || (exports.MavCmd = {}));
/**
 * SCRIPTING_CMD
 */
var ScriptingCmd;
(function (ScriptingCmd) {
    /**
     * Start a REPL session.
     */
    ScriptingCmd[ScriptingCmd["REPL_START"] = 0] = "REPL_START";
    /**
     * End a REPL session.
     */
    ScriptingCmd[ScriptingCmd["REPL_STOP"] = 1] = "REPL_STOP";
})(ScriptingCmd = exports.ScriptingCmd || (exports.ScriptingCmd = {}));
/**
 * SECURE_COMMAND_OP
 */
var SecureCommandOp;
(function (SecureCommandOp) {
    /**
     * Get an 8 byte session key which is used for remote secure updates which operate on flight controller
     * data such as bootloader public keys. Return data will be 8 bytes on success. The session key remains
     * valid until either the flight controller reboots or another SECURE_COMMAND_GET_SESSION_KEY is run.
     */
    SecureCommandOp[SecureCommandOp["GET_SESSION_KEY"] = 0] = "GET_SESSION_KEY";
    /**
     * Get an 8 byte session key which is used for remote secure updates which operate on RemoteID module
     * data. Return data will be 8 bytes on success. The session key remains valid until either the remote
     * ID module reboots or another SECURE_COMMAND_GET_REMOTEID_SESSION_KEY is run.
     */
    SecureCommandOp[SecureCommandOp["GET_REMOTEID_SESSION_KEY"] = 1] = "GET_REMOTEID_SESSION_KEY";
    /**
     * Remove range of public keys from the bootloader. Command data consists of two bytes, first byte if
     * index of first public key to remove. Second byte is the number of keys to remove. If all keys are
     * removed then secure boot is disabled and insecure firmware can be loaded.
     */
    SecureCommandOp[SecureCommandOp["REMOVE_PUBLIC_KEYS"] = 2] = "REMOVE_PUBLIC_KEYS";
    /**
     * Get current public keys from the bootloader. Command data consists of two bytes, first byte is index
     * of first public key to fetch, 2nd byte is number of keys to fetch. Total data needs to fit in data
     * portion of reply (max 6 keys for 32 byte keys). Reply data has the index of the first key in the
     * first byte, followed by the keys. Returned keys may be less than the number of keys requested if
     * there are less keys installed than requested.
     */
    SecureCommandOp[SecureCommandOp["GET_PUBLIC_KEYS"] = 3] = "GET_PUBLIC_KEYS";
    /**
     * Set current public keys in the bootloader. Data consists of a one byte public key index followed by
     * the public keys. With 32 byte keys this allows for up to 6 keys to be set in one request. Keys
     * outside of the range that is being set will remain unchanged.
     */
    SecureCommandOp[SecureCommandOp["SET_PUBLIC_KEYS"] = 4] = "SET_PUBLIC_KEYS";
    /**
     * Get config data for remote ID module. This command should be sent to the component ID of the flight
     * controller which will forward it to the RemoteID module either over mavlink or DroneCAN. Data format
     * is specific to the RemoteID implementation, see RemoteID firmware documentation for details.
     */
    SecureCommandOp[SecureCommandOp["GET_REMOTEID_CONFIG"] = 5] = "GET_REMOTEID_CONFIG";
    /**
     * Set config data for remote ID module. This command should be sent to the component ID of the flight
     * controller which will forward it to the RemoteID module either over mavlink or DroneCAN. Data format
     * is specific to the RemoteID implementation, see RemoteID firmware documentation for details.
     */
    SecureCommandOp[SecureCommandOp["SET_REMOTEID_CONFIG"] = 6] = "SET_REMOTEID_CONFIG";
    /**
     * Flash bootloader from local storage. Data is the filename to use for the bootloader. This is
     * intended to be used with MAVFtp to upload a new bootloader to a microSD before flashing.
     */
    SecureCommandOp[SecureCommandOp["FLASH_BOOTLOADER"] = 7] = "FLASH_BOOTLOADER";
})(SecureCommandOp = exports.SecureCommandOp || (exports.SecureCommandOp = {}));
/**
 * LIMITS_STATE
 */
var LimitsState;
(function (LimitsState) {
    /**
     * Pre-initialization.
     */
    LimitsState[LimitsState["INIT"] = 0] = "INIT";
    /**
     * Disabled.
     */
    LimitsState[LimitsState["DISABLED"] = 1] = "DISABLED";
    /**
     * Checking limits.
     */
    LimitsState[LimitsState["ENABLED"] = 2] = "ENABLED";
    /**
     * A limit has been breached.
     */
    LimitsState[LimitsState["TRIGGERED"] = 3] = "TRIGGERED";
    /**
     * Taking action e.g. Return/RTL.
     */
    LimitsState[LimitsState["RECOVERING"] = 4] = "RECOVERING";
    /**
     * We're no longer in breach of a limit.
     */
    LimitsState[LimitsState["RECOVERED"] = 5] = "RECOVERED";
})(LimitsState = exports.LimitsState || (exports.LimitsState = {}));
/**
 * LIMIT_MODULE
 */
var LimitModule;
(function (LimitModule) {
    /**
     * Pre-initialization.
     */
    LimitModule[LimitModule["GPSLOCK"] = 1] = "GPSLOCK";
    /**
     * Disabled.
     */
    LimitModule[LimitModule["GEOFENCE"] = 2] = "GEOFENCE";
    /**
     * Checking limits.
     */
    LimitModule[LimitModule["ALTITUDE"] = 4] = "ALTITUDE";
})(LimitModule = exports.LimitModule || (exports.LimitModule = {}));
/**
 * Flags in RALLY_POINT message.
 */
var RallyFlags;
(function (RallyFlags) {
    /**
     * Flag set when requiring favorable winds for landing.
     */
    RallyFlags[RallyFlags["FAVORABLE_WIND"] = 1] = "FAVORABLE_WIND";
    /**
     * Flag set when plane is to immediately descend to break altitude and land without GCS intervention.
     * Flag not set when plane is to loiter at Rally point until commanded to land.
     */
    RallyFlags[RallyFlags["LAND_IMMEDIATELY"] = 2] = "LAND_IMMEDIATELY";
    /**
     * True if the following altitude frame value is valid.
     */
    RallyFlags[RallyFlags["VALID"] = 4] = "VALID";
    /**
     * 2 bit value representing altitude frame. 0: absolute, 1: relative home, 2: relative origin, 3:
     * relative terrain
     */
    RallyFlags[RallyFlags["ALT_FRAME"] = 24] = "ALT_FRAME";
})(RallyFlags = exports.RallyFlags || (exports.RallyFlags = {}));
/**
 * CAMERA_STATUS_TYPES
 */
var CameraStatusTypes;
(function (CameraStatusTypes) {
    /**
     * Camera heartbeat, announce camera component ID at 1Hz.
     */
    CameraStatusTypes[CameraStatusTypes["HEARTBEAT"] = 0] = "HEARTBEAT";
    /**
     * Camera image triggered.
     */
    CameraStatusTypes[CameraStatusTypes["TRIGGER"] = 1] = "TRIGGER";
    /**
     * Camera connection lost.
     */
    CameraStatusTypes[CameraStatusTypes["DISCONNECT"] = 2] = "DISCONNECT";
    /**
     * Camera unknown error.
     */
    CameraStatusTypes[CameraStatusTypes["ERROR"] = 3] = "ERROR";
    /**
     * Camera battery low. Parameter p1 shows reported voltage.
     */
    CameraStatusTypes[CameraStatusTypes["LOWBATT"] = 4] = "LOWBATT";
    /**
     * Camera storage low. Parameter p1 shows reported shots remaining.
     */
    CameraStatusTypes[CameraStatusTypes["LOWSTORE"] = 5] = "LOWSTORE";
    /**
     * Camera storage low. Parameter p1 shows reported video minutes remaining.
     */
    CameraStatusTypes[CameraStatusTypes["LOWSTOREV"] = 6] = "LOWSTOREV";
})(CameraStatusTypes = exports.CameraStatusTypes || (exports.CameraStatusTypes = {}));
/**
 * CAMERA_FEEDBACK_FLAGS
 */
var CameraFeedbackFlags;
(function (CameraFeedbackFlags) {
    /**
     * Shooting photos, not video.
     */
    CameraFeedbackFlags[CameraFeedbackFlags["PHOTO"] = 0] = "PHOTO";
    /**
     * Shooting video, not stills.
     */
    CameraFeedbackFlags[CameraFeedbackFlags["VIDEO"] = 1] = "VIDEO";
    /**
     * Unable to achieve requested exposure (e.g. shutter speed too low).
     */
    CameraFeedbackFlags[CameraFeedbackFlags["BADEXPOSURE"] = 2] = "BADEXPOSURE";
    /**
     * Closed loop feedback from camera, we know for sure it has successfully taken a picture.
     */
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
    /**
     * Gimbal is powered on but has not started initializing yet.
     */
    MavModeGimbal[MavModeGimbal["UNINITIALIZED"] = 0] = "UNINITIALIZED";
    /**
     * Gimbal is currently running calibration on the pitch axis.
     */
    MavModeGimbal[MavModeGimbal["CALIBRATING_PITCH"] = 1] = "CALIBRATING_PITCH";
    /**
     * Gimbal is currently running calibration on the roll axis.
     */
    MavModeGimbal[MavModeGimbal["CALIBRATING_ROLL"] = 2] = "CALIBRATING_ROLL";
    /**
     * Gimbal is currently running calibration on the yaw axis.
     */
    MavModeGimbal[MavModeGimbal["CALIBRATING_YAW"] = 3] = "CALIBRATING_YAW";
    /**
     * Gimbal has finished calibrating and initializing, but is relaxed pending reception of first rate
     * command from copter.
     */
    MavModeGimbal[MavModeGimbal["INITIALIZED"] = 4] = "INITIALIZED";
    /**
     * Gimbal is actively stabilizing.
     */
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
    /**
     * Gimbal yaw axis.
     */
    GimbalAxis[GimbalAxis["YAW"] = 0] = "YAW";
    /**
     * Gimbal pitch axis.
     */
    GimbalAxis[GimbalAxis["PITCH"] = 1] = "PITCH";
    /**
     * Gimbal roll axis.
     */
    GimbalAxis[GimbalAxis["ROLL"] = 2] = "ROLL";
})(GimbalAxis = exports.GimbalAxis || (exports.GimbalAxis = {}));
/**
 * GIMBAL_AXIS_CALIBRATION_STATUS
 */
var GimbalAxisCalibrationStatus;
(function (GimbalAxisCalibrationStatus) {
    /**
     * Axis calibration is in progress.
     */
    GimbalAxisCalibrationStatus[GimbalAxisCalibrationStatus["IN_PROGRESS"] = 0] = "IN_PROGRESS";
    /**
     * Axis calibration succeeded.
     */
    GimbalAxisCalibrationStatus[GimbalAxisCalibrationStatus["SUCCEEDED"] = 1] = "SUCCEEDED";
    /**
     * Axis calibration failed.
     */
    GimbalAxisCalibrationStatus[GimbalAxisCalibrationStatus["FAILED"] = 2] = "FAILED";
})(GimbalAxisCalibrationStatus = exports.GimbalAxisCalibrationStatus || (exports.GimbalAxisCalibrationStatus = {}));
/**
 * GIMBAL_AXIS_CALIBRATION_REQUIRED
 */
var GimbalAxisCalibrationRequired;
(function (GimbalAxisCalibrationRequired) {
    /**
     * Whether or not this axis requires calibration is unknown at this time.
     */
    GimbalAxisCalibrationRequired[GimbalAxisCalibrationRequired["UNKNOWN"] = 0] = "UNKNOWN";
    /**
     * This axis requires calibration.
     */
    GimbalAxisCalibrationRequired[GimbalAxisCalibrationRequired["TRUE"] = 1] = "TRUE";
    /**
     * This axis does not require calibration.
     */
    GimbalAxisCalibrationRequired[GimbalAxisCalibrationRequired["FALSE"] = 2] = "FALSE";
})(GimbalAxisCalibrationRequired = exports.GimbalAxisCalibrationRequired || (exports.GimbalAxisCalibrationRequired = {}));
/**
 * GOPRO_HEARTBEAT_STATUS
 */
var GoproHeartbeatStatus;
(function (GoproHeartbeatStatus) {
    /**
     * No GoPro connected.
     */
    GoproHeartbeatStatus[GoproHeartbeatStatus["DISCONNECTED"] = 0] = "DISCONNECTED";
    /**
     * The detected GoPro is not HeroBus compatible.
     */
    GoproHeartbeatStatus[GoproHeartbeatStatus["INCOMPATIBLE"] = 1] = "INCOMPATIBLE";
    /**
     * A HeroBus compatible GoPro is connected.
     */
    GoproHeartbeatStatus[GoproHeartbeatStatus["CONNECTED"] = 2] = "CONNECTED";
    /**
     * An unrecoverable error was encountered with the connected GoPro, it may require a power cycle.
     */
    GoproHeartbeatStatus[GoproHeartbeatStatus["ERROR"] = 3] = "ERROR";
})(GoproHeartbeatStatus = exports.GoproHeartbeatStatus || (exports.GoproHeartbeatStatus = {}));
/**
 * GOPRO_HEARTBEAT_FLAGS
 */
var GoproHeartbeatFlags;
(function (GoproHeartbeatFlags) {
    /**
     * GoPro is currently recording.
     */
    GoproHeartbeatFlags[GoproHeartbeatFlags["RECORDING"] = 1] = "RECORDING";
})(GoproHeartbeatFlags = exports.GoproHeartbeatFlags || (exports.GoproHeartbeatFlags = {}));
/**
 * GOPRO_REQUEST_STATUS
 */
var GoproRequestStatus;
(function (GoproRequestStatus) {
    /**
     * The write message with ID indicated succeeded.
     */
    GoproRequestStatus[GoproRequestStatus["SUCCESS"] = 0] = "SUCCESS";
    /**
     * The write message with ID indicated failed.
     */
    GoproRequestStatus[GoproRequestStatus["FAILED"] = 1] = "FAILED";
})(GoproRequestStatus = exports.GoproRequestStatus || (exports.GoproRequestStatus = {}));
/**
 * GOPRO_COMMAND
 */
var GoproCommand;
(function (GoproCommand) {
    /**
     * (Get/Set).
     */
    GoproCommand[GoproCommand["POWER"] = 0] = "POWER";
    /**
     * (Get/Set).
     */
    GoproCommand[GoproCommand["CAPTURE_MODE"] = 1] = "CAPTURE_MODE";
    /**
     * (___/Set).
     */
    GoproCommand[GoproCommand["SHUTTER"] = 2] = "SHUTTER";
    /**
     * (Get/___).
     */
    GoproCommand[GoproCommand["BATTERY"] = 3] = "BATTERY";
    /**
     * (Get/___).
     */
    GoproCommand[GoproCommand["MODEL"] = 4] = "MODEL";
    /**
     * (Get/Set).
     */
    GoproCommand[GoproCommand["VIDEO_SETTINGS"] = 5] = "VIDEO_SETTINGS";
    /**
     * (Get/Set).
     */
    GoproCommand[GoproCommand["LOW_LIGHT"] = 6] = "LOW_LIGHT";
    /**
     * (Get/Set).
     */
    GoproCommand[GoproCommand["PHOTO_RESOLUTION"] = 7] = "PHOTO_RESOLUTION";
    /**
     * (Get/Set).
     */
    GoproCommand[GoproCommand["PHOTO_BURST_RATE"] = 8] = "PHOTO_BURST_RATE";
    /**
     * (Get/Set).
     */
    GoproCommand[GoproCommand["PROTUNE"] = 9] = "PROTUNE";
    /**
     * (Get/Set) Hero 3+ Only.
     */
    GoproCommand[GoproCommand["PROTUNE_WHITE_BALANCE"] = 10] = "PROTUNE_WHITE_BALANCE";
    /**
     * (Get/Set) Hero 3+ Only.
     */
    GoproCommand[GoproCommand["PROTUNE_COLOUR"] = 11] = "PROTUNE_COLOUR";
    /**
     * (Get/Set) Hero 3+ Only.
     */
    GoproCommand[GoproCommand["PROTUNE_GAIN"] = 12] = "PROTUNE_GAIN";
    /**
     * (Get/Set) Hero 3+ Only.
     */
    GoproCommand[GoproCommand["PROTUNE_SHARPNESS"] = 13] = "PROTUNE_SHARPNESS";
    /**
     * (Get/Set) Hero 3+ Only.
     */
    GoproCommand[GoproCommand["PROTUNE_EXPOSURE"] = 14] = "PROTUNE_EXPOSURE";
    /**
     * (Get/Set).
     */
    GoproCommand[GoproCommand["TIME"] = 15] = "TIME";
    /**
     * (Get/Set).
     */
    GoproCommand[GoproCommand["CHARGING"] = 16] = "CHARGING";
})(GoproCommand = exports.GoproCommand || (exports.GoproCommand = {}));
/**
 * GOPRO_CAPTURE_MODE
 */
var GoproCaptureMode;
(function (GoproCaptureMode) {
    /**
     * Video mode.
     */
    GoproCaptureMode[GoproCaptureMode["VIDEO"] = 0] = "VIDEO";
    /**
     * Photo mode.
     */
    GoproCaptureMode[GoproCaptureMode["PHOTO"] = 1] = "PHOTO";
    /**
     * Burst mode, Hero 3+ only.
     */
    GoproCaptureMode[GoproCaptureMode["BURST"] = 2] = "BURST";
    /**
     * Time lapse mode, Hero 3+ only.
     */
    GoproCaptureMode[GoproCaptureMode["TIME_LAPSE"] = 3] = "TIME_LAPSE";
    /**
     * Multi shot mode, Hero 4 only.
     */
    GoproCaptureMode[GoproCaptureMode["MULTI_SHOT"] = 4] = "MULTI_SHOT";
    /**
     * Playback mode, Hero 4 only, silver only except when LCD or HDMI is connected to black.
     */
    GoproCaptureMode[GoproCaptureMode["PLAYBACK"] = 5] = "PLAYBACK";
    /**
     * Playback mode, Hero 4 only.
     */
    GoproCaptureMode[GoproCaptureMode["SETUP"] = 6] = "SETUP";
    /**
     * Mode not yet known.
     */
    GoproCaptureMode[GoproCaptureMode["UNKNOWN"] = 255] = "UNKNOWN";
})(GoproCaptureMode = exports.GoproCaptureMode || (exports.GoproCaptureMode = {}));
/**
 * GOPRO_RESOLUTION
 */
var GoproResolution;
(function (GoproResolution) {
    /**
     * 848 x 480 (480p).
     */
    GoproResolution[GoproResolution["GOPRO_RESOLUTION_480p"] = 0] = "GOPRO_RESOLUTION_480p";
    /**
     * 1280 x 720 (720p).
     */
    GoproResolution[GoproResolution["GOPRO_RESOLUTION_720p"] = 1] = "GOPRO_RESOLUTION_720p";
    /**
     * 1280 x 960 (960p).
     */
    GoproResolution[GoproResolution["GOPRO_RESOLUTION_960p"] = 2] = "GOPRO_RESOLUTION_960p";
    /**
     * 1920 x 1080 (1080p).
     */
    GoproResolution[GoproResolution["GOPRO_RESOLUTION_1080p"] = 3] = "GOPRO_RESOLUTION_1080p";
    /**
     * 1920 x 1440 (1440p).
     */
    GoproResolution[GoproResolution["GOPRO_RESOLUTION_1440p"] = 4] = "GOPRO_RESOLUTION_1440p";
    /**
     * 2704 x 1440 (2.7k-17:9).
     */
    GoproResolution[GoproResolution["GOPRO_RESOLUTION_2_7k_17_9"] = 5] = "GOPRO_RESOLUTION_2_7k_17_9";
    /**
     * 2704 x 1524 (2.7k-16:9).
     */
    GoproResolution[GoproResolution["GOPRO_RESOLUTION_2_7k_16_9"] = 6] = "GOPRO_RESOLUTION_2_7k_16_9";
    /**
     * 2704 x 2028 (2.7k-4:3).
     */
    GoproResolution[GoproResolution["GOPRO_RESOLUTION_2_7k_4_3"] = 7] = "GOPRO_RESOLUTION_2_7k_4_3";
    /**
     * 3840 x 2160 (4k-16:9).
     */
    GoproResolution[GoproResolution["GOPRO_RESOLUTION_4k_16_9"] = 8] = "GOPRO_RESOLUTION_4k_16_9";
    /**
     * 4096 x 2160 (4k-17:9).
     */
    GoproResolution[GoproResolution["GOPRO_RESOLUTION_4k_17_9"] = 9] = "GOPRO_RESOLUTION_4k_17_9";
    /**
     * 1280 x 720 (720p-SuperView).
     */
    GoproResolution[GoproResolution["GOPRO_RESOLUTION_720p_SUPERVIEW"] = 10] = "GOPRO_RESOLUTION_720p_SUPERVIEW";
    /**
     * 1920 x 1080 (1080p-SuperView).
     */
    GoproResolution[GoproResolution["GOPRO_RESOLUTION_1080p_SUPERVIEW"] = 11] = "GOPRO_RESOLUTION_1080p_SUPERVIEW";
    /**
     * 2704 x 1520 (2.7k-SuperView).
     */
    GoproResolution[GoproResolution["GOPRO_RESOLUTION_2_7k_SUPERVIEW"] = 12] = "GOPRO_RESOLUTION_2_7k_SUPERVIEW";
    /**
     * 3840 x 2160 (4k-SuperView).
     */
    GoproResolution[GoproResolution["GOPRO_RESOLUTION_4k_SUPERVIEW"] = 13] = "GOPRO_RESOLUTION_4k_SUPERVIEW";
})(GoproResolution = exports.GoproResolution || (exports.GoproResolution = {}));
/**
 * GOPRO_FRAME_RATE
 */
var GoproFrameRate;
(function (GoproFrameRate) {
    /**
     * 12 FPS.
     */
    GoproFrameRate[GoproFrameRate["GOPRO_FRAME_RATE_12"] = 0] = "GOPRO_FRAME_RATE_12";
    /**
     * 15 FPS.
     */
    GoproFrameRate[GoproFrameRate["GOPRO_FRAME_RATE_15"] = 1] = "GOPRO_FRAME_RATE_15";
    /**
     * 24 FPS.
     */
    GoproFrameRate[GoproFrameRate["GOPRO_FRAME_RATE_24"] = 2] = "GOPRO_FRAME_RATE_24";
    /**
     * 25 FPS.
     */
    GoproFrameRate[GoproFrameRate["GOPRO_FRAME_RATE_25"] = 3] = "GOPRO_FRAME_RATE_25";
    /**
     * 30 FPS.
     */
    GoproFrameRate[GoproFrameRate["GOPRO_FRAME_RATE_30"] = 4] = "GOPRO_FRAME_RATE_30";
    /**
     * 48 FPS.
     */
    GoproFrameRate[GoproFrameRate["GOPRO_FRAME_RATE_48"] = 5] = "GOPRO_FRAME_RATE_48";
    /**
     * 50 FPS.
     */
    GoproFrameRate[GoproFrameRate["GOPRO_FRAME_RATE_50"] = 6] = "GOPRO_FRAME_RATE_50";
    /**
     * 60 FPS.
     */
    GoproFrameRate[GoproFrameRate["GOPRO_FRAME_RATE_60"] = 7] = "GOPRO_FRAME_RATE_60";
    /**
     * 80 FPS.
     */
    GoproFrameRate[GoproFrameRate["GOPRO_FRAME_RATE_80"] = 8] = "GOPRO_FRAME_RATE_80";
    /**
     * 90 FPS.
     */
    GoproFrameRate[GoproFrameRate["GOPRO_FRAME_RATE_90"] = 9] = "GOPRO_FRAME_RATE_90";
    /**
     * 100 FPS.
     */
    GoproFrameRate[GoproFrameRate["GOPRO_FRAME_RATE_100"] = 10] = "GOPRO_FRAME_RATE_100";
    /**
     * 120 FPS.
     */
    GoproFrameRate[GoproFrameRate["GOPRO_FRAME_RATE_120"] = 11] = "GOPRO_FRAME_RATE_120";
    /**
     * 240 FPS.
     */
    GoproFrameRate[GoproFrameRate["GOPRO_FRAME_RATE_240"] = 12] = "GOPRO_FRAME_RATE_240";
    /**
     * 12.5 FPS.
     */
    GoproFrameRate[GoproFrameRate["GOPRO_FRAME_RATE_12_5"] = 13] = "GOPRO_FRAME_RATE_12_5";
})(GoproFrameRate = exports.GoproFrameRate || (exports.GoproFrameRate = {}));
/**
 * GOPRO_FIELD_OF_VIEW
 */
var GoproFieldOfView;
(function (GoproFieldOfView) {
    /**
     * 0x00: Wide.
     */
    GoproFieldOfView[GoproFieldOfView["WIDE"] = 0] = "WIDE";
    /**
     * 0x01: Medium.
     */
    GoproFieldOfView[GoproFieldOfView["MEDIUM"] = 1] = "MEDIUM";
    /**
     * 0x02: Narrow.
     */
    GoproFieldOfView[GoproFieldOfView["NARROW"] = 2] = "NARROW";
})(GoproFieldOfView = exports.GoproFieldOfView || (exports.GoproFieldOfView = {}));
/**
 * GOPRO_VIDEO_SETTINGS_FLAGS
 */
var GoproVideoSettingsFlags;
(function (GoproVideoSettingsFlags) {
    /**
     * 0=NTSC, 1=PAL.
     */
    GoproVideoSettingsFlags[GoproVideoSettingsFlags["MODE"] = 1] = "MODE";
})(GoproVideoSettingsFlags = exports.GoproVideoSettingsFlags || (exports.GoproVideoSettingsFlags = {}));
/**
 * GOPRO_PHOTO_RESOLUTION
 */
var GoproPhotoResolution;
(function (GoproPhotoResolution) {
    /**
     * 5MP Medium.
     */
    GoproPhotoResolution[GoproPhotoResolution["GOPRO_PHOTO_RESOLUTION_5MP_MEDIUM"] = 0] = "GOPRO_PHOTO_RESOLUTION_5MP_MEDIUM";
    /**
     * 7MP Medium.
     */
    GoproPhotoResolution[GoproPhotoResolution["GOPRO_PHOTO_RESOLUTION_7MP_MEDIUM"] = 1] = "GOPRO_PHOTO_RESOLUTION_7MP_MEDIUM";
    /**
     * 7MP Wide.
     */
    GoproPhotoResolution[GoproPhotoResolution["GOPRO_PHOTO_RESOLUTION_7MP_WIDE"] = 2] = "GOPRO_PHOTO_RESOLUTION_7MP_WIDE";
    /**
     * 10MP Wide.
     */
    GoproPhotoResolution[GoproPhotoResolution["GOPRO_PHOTO_RESOLUTION_10MP_WIDE"] = 3] = "GOPRO_PHOTO_RESOLUTION_10MP_WIDE";
    /**
     * 12MP Wide.
     */
    GoproPhotoResolution[GoproPhotoResolution["GOPRO_PHOTO_RESOLUTION_12MP_WIDE"] = 4] = "GOPRO_PHOTO_RESOLUTION_12MP_WIDE";
})(GoproPhotoResolution = exports.GoproPhotoResolution || (exports.GoproPhotoResolution = {}));
/**
 * GOPRO_PROTUNE_WHITE_BALANCE
 */
var GoproProtuneWhiteBalance;
(function (GoproProtuneWhiteBalance) {
    /**
     * Auto.
     */
    GoproProtuneWhiteBalance[GoproProtuneWhiteBalance["AUTO"] = 0] = "AUTO";
    /**
     * 3000K.
     */
    GoproProtuneWhiteBalance[GoproProtuneWhiteBalance["GOPRO_PROTUNE_WHITE_BALANCE_3000K"] = 1] = "GOPRO_PROTUNE_WHITE_BALANCE_3000K";
    /**
     * 5500K.
     */
    GoproProtuneWhiteBalance[GoproProtuneWhiteBalance["GOPRO_PROTUNE_WHITE_BALANCE_5500K"] = 2] = "GOPRO_PROTUNE_WHITE_BALANCE_5500K";
    /**
     * 6500K.
     */
    GoproProtuneWhiteBalance[GoproProtuneWhiteBalance["GOPRO_PROTUNE_WHITE_BALANCE_6500K"] = 3] = "GOPRO_PROTUNE_WHITE_BALANCE_6500K";
    /**
     * Camera Raw.
     */
    GoproProtuneWhiteBalance[GoproProtuneWhiteBalance["RAW"] = 4] = "RAW";
})(GoproProtuneWhiteBalance = exports.GoproProtuneWhiteBalance || (exports.GoproProtuneWhiteBalance = {}));
/**
 * GOPRO_PROTUNE_COLOUR
 */
var GoproProtuneColour;
(function (GoproProtuneColour) {
    /**
     * Auto.
     */
    GoproProtuneColour[GoproProtuneColour["STANDARD"] = 0] = "STANDARD";
    /**
     * Neutral.
     */
    GoproProtuneColour[GoproProtuneColour["NEUTRAL"] = 1] = "NEUTRAL";
})(GoproProtuneColour = exports.GoproProtuneColour || (exports.GoproProtuneColour = {}));
/**
 * GOPRO_PROTUNE_GAIN
 */
var GoproProtuneGain;
(function (GoproProtuneGain) {
    /**
     * ISO 400.
     */
    GoproProtuneGain[GoproProtuneGain["GOPRO_PROTUNE_GAIN_400"] = 0] = "GOPRO_PROTUNE_GAIN_400";
    /**
     * ISO 800 (Only Hero 4).
     */
    GoproProtuneGain[GoproProtuneGain["GOPRO_PROTUNE_GAIN_800"] = 1] = "GOPRO_PROTUNE_GAIN_800";
    /**
     * ISO 1600.
     */
    GoproProtuneGain[GoproProtuneGain["GOPRO_PROTUNE_GAIN_1600"] = 2] = "GOPRO_PROTUNE_GAIN_1600";
    /**
     * ISO 3200 (Only Hero 4).
     */
    GoproProtuneGain[GoproProtuneGain["GOPRO_PROTUNE_GAIN_3200"] = 3] = "GOPRO_PROTUNE_GAIN_3200";
    /**
     * ISO 6400.
     */
    GoproProtuneGain[GoproProtuneGain["GOPRO_PROTUNE_GAIN_6400"] = 4] = "GOPRO_PROTUNE_GAIN_6400";
})(GoproProtuneGain = exports.GoproProtuneGain || (exports.GoproProtuneGain = {}));
/**
 * GOPRO_PROTUNE_SHARPNESS
 */
var GoproProtuneSharpness;
(function (GoproProtuneSharpness) {
    /**
     * Low Sharpness.
     */
    GoproProtuneSharpness[GoproProtuneSharpness["LOW"] = 0] = "LOW";
    /**
     * Medium Sharpness.
     */
    GoproProtuneSharpness[GoproProtuneSharpness["MEDIUM"] = 1] = "MEDIUM";
    /**
     * High Sharpness.
     */
    GoproProtuneSharpness[GoproProtuneSharpness["HIGH"] = 2] = "HIGH";
})(GoproProtuneSharpness = exports.GoproProtuneSharpness || (exports.GoproProtuneSharpness = {}));
/**
 * GOPRO_PROTUNE_EXPOSURE
 */
var GoproProtuneExposure;
(function (GoproProtuneExposure) {
    /**
     * -5.0 EV (Hero 3+ Only).
     */
    GoproProtuneExposure[GoproProtuneExposure["NEG_5_0"] = 0] = "NEG_5_0";
    /**
     * -4.5 EV (Hero 3+ Only).
     */
    GoproProtuneExposure[GoproProtuneExposure["NEG_4_5"] = 1] = "NEG_4_5";
    /**
     * -4.0 EV (Hero 3+ Only).
     */
    GoproProtuneExposure[GoproProtuneExposure["NEG_4_0"] = 2] = "NEG_4_0";
    /**
     * -3.5 EV (Hero 3+ Only).
     */
    GoproProtuneExposure[GoproProtuneExposure["NEG_3_5"] = 3] = "NEG_3_5";
    /**
     * -3.0 EV (Hero 3+ Only).
     */
    GoproProtuneExposure[GoproProtuneExposure["NEG_3_0"] = 4] = "NEG_3_0";
    /**
     * -2.5 EV (Hero 3+ Only).
     */
    GoproProtuneExposure[GoproProtuneExposure["NEG_2_5"] = 5] = "NEG_2_5";
    /**
     * -2.0 EV.
     */
    GoproProtuneExposure[GoproProtuneExposure["NEG_2_0"] = 6] = "NEG_2_0";
    /**
     * -1.5 EV.
     */
    GoproProtuneExposure[GoproProtuneExposure["NEG_1_5"] = 7] = "NEG_1_5";
    /**
     * -1.0 EV.
     */
    GoproProtuneExposure[GoproProtuneExposure["NEG_1_0"] = 8] = "NEG_1_0";
    /**
     * -0.5 EV.
     */
    GoproProtuneExposure[GoproProtuneExposure["NEG_0_5"] = 9] = "NEG_0_5";
    /**
     * 0.0 EV.
     */
    GoproProtuneExposure[GoproProtuneExposure["ZERO"] = 10] = "ZERO";
    /**
     * +0.5 EV.
     */
    GoproProtuneExposure[GoproProtuneExposure["POS_0_5"] = 11] = "POS_0_5";
    /**
     * +1.0 EV.
     */
    GoproProtuneExposure[GoproProtuneExposure["POS_1_0"] = 12] = "POS_1_0";
    /**
     * +1.5 EV.
     */
    GoproProtuneExposure[GoproProtuneExposure["POS_1_5"] = 13] = "POS_1_5";
    /**
     * +2.0 EV.
     */
    GoproProtuneExposure[GoproProtuneExposure["POS_2_0"] = 14] = "POS_2_0";
    /**
     * +2.5 EV (Hero 3+ Only).
     */
    GoproProtuneExposure[GoproProtuneExposure["POS_2_5"] = 15] = "POS_2_5";
    /**
     * +3.0 EV (Hero 3+ Only).
     */
    GoproProtuneExposure[GoproProtuneExposure["POS_3_0"] = 16] = "POS_3_0";
    /**
     * +3.5 EV (Hero 3+ Only).
     */
    GoproProtuneExposure[GoproProtuneExposure["POS_3_5"] = 17] = "POS_3_5";
    /**
     * +4.0 EV (Hero 3+ Only).
     */
    GoproProtuneExposure[GoproProtuneExposure["POS_4_0"] = 18] = "POS_4_0";
    /**
     * +4.5 EV (Hero 3+ Only).
     */
    GoproProtuneExposure[GoproProtuneExposure["POS_4_5"] = 19] = "POS_4_5";
    /**
     * +5.0 EV (Hero 3+ Only).
     */
    GoproProtuneExposure[GoproProtuneExposure["POS_5_0"] = 20] = "POS_5_0";
})(GoproProtuneExposure = exports.GoproProtuneExposure || (exports.GoproProtuneExposure = {}));
/**
 * GOPRO_CHARGING
 */
var GoproCharging;
(function (GoproCharging) {
    /**
     * Charging disabled.
     */
    GoproCharging[GoproCharging["DISABLED"] = 0] = "DISABLED";
    /**
     * Charging enabled.
     */
    GoproCharging[GoproCharging["ENABLED"] = 1] = "ENABLED";
})(GoproCharging = exports.GoproCharging || (exports.GoproCharging = {}));
/**
 * GOPRO_MODEL
 */
var GoproModel;
(function (GoproModel) {
    /**
     * Unknown gopro model.
     */
    GoproModel[GoproModel["UNKNOWN"] = 0] = "UNKNOWN";
    /**
     * Hero 3+ Silver (HeroBus not supported by GoPro).
     */
    GoproModel[GoproModel["HERO_3_PLUS_SILVER"] = 1] = "HERO_3_PLUS_SILVER";
    /**
     * Hero 3+ Black.
     */
    GoproModel[GoproModel["HERO_3_PLUS_BLACK"] = 2] = "HERO_3_PLUS_BLACK";
    /**
     * Hero 4 Silver.
     */
    GoproModel[GoproModel["HERO_4_SILVER"] = 3] = "HERO_4_SILVER";
    /**
     * Hero 4 Black.
     */
    GoproModel[GoproModel["HERO_4_BLACK"] = 4] = "HERO_4_BLACK";
})(GoproModel = exports.GoproModel || (exports.GoproModel = {}));
/**
 * GOPRO_BURST_RATE
 */
var GoproBurstRate;
(function (GoproBurstRate) {
    /**
     * 3 Shots / 1 Second.
     */
    GoproBurstRate[GoproBurstRate["GOPRO_BURST_RATE_3_IN_1_SECOND"] = 0] = "GOPRO_BURST_RATE_3_IN_1_SECOND";
    /**
     * 5 Shots / 1 Second.
     */
    GoproBurstRate[GoproBurstRate["GOPRO_BURST_RATE_5_IN_1_SECOND"] = 1] = "GOPRO_BURST_RATE_5_IN_1_SECOND";
    /**
     * 10 Shots / 1 Second.
     */
    GoproBurstRate[GoproBurstRate["GOPRO_BURST_RATE_10_IN_1_SECOND"] = 2] = "GOPRO_BURST_RATE_10_IN_1_SECOND";
    /**
     * 10 Shots / 2 Second.
     */
    GoproBurstRate[GoproBurstRate["GOPRO_BURST_RATE_10_IN_2_SECOND"] = 3] = "GOPRO_BURST_RATE_10_IN_2_SECOND";
    /**
     * 10 Shots / 3 Second (Hero 4 Only).
     */
    GoproBurstRate[GoproBurstRate["GOPRO_BURST_RATE_10_IN_3_SECOND"] = 4] = "GOPRO_BURST_RATE_10_IN_3_SECOND";
    /**
     * 30 Shots / 1 Second.
     */
    GoproBurstRate[GoproBurstRate["GOPRO_BURST_RATE_30_IN_1_SECOND"] = 5] = "GOPRO_BURST_RATE_30_IN_1_SECOND";
    /**
     * 30 Shots / 2 Second.
     */
    GoproBurstRate[GoproBurstRate["GOPRO_BURST_RATE_30_IN_2_SECOND"] = 6] = "GOPRO_BURST_RATE_30_IN_2_SECOND";
    /**
     * 30 Shots / 3 Second.
     */
    GoproBurstRate[GoproBurstRate["GOPRO_BURST_RATE_30_IN_3_SECOND"] = 7] = "GOPRO_BURST_RATE_30_IN_3_SECOND";
    /**
     * 30 Shots / 6 Second.
     */
    GoproBurstRate[GoproBurstRate["GOPRO_BURST_RATE_30_IN_6_SECOND"] = 8] = "GOPRO_BURST_RATE_30_IN_6_SECOND";
})(GoproBurstRate = exports.GoproBurstRate || (exports.GoproBurstRate = {}));
/**
 * MAV_CMD_DO_AUX_FUNCTION_SWITCH_LEVEL
 */
var MavCmdDoAuxFunctionSwitchLevel;
(function (MavCmdDoAuxFunctionSwitchLevel) {
    /**
     * Switch Low.
     */
    MavCmdDoAuxFunctionSwitchLevel[MavCmdDoAuxFunctionSwitchLevel["LOW"] = 0] = "LOW";
    /**
     * Switch Middle.
     */
    MavCmdDoAuxFunctionSwitchLevel[MavCmdDoAuxFunctionSwitchLevel["MIDDLE"] = 1] = "MIDDLE";
    /**
     * Switch High.
     */
    MavCmdDoAuxFunctionSwitchLevel[MavCmdDoAuxFunctionSwitchLevel["HIGH"] = 2] = "HIGH";
})(MavCmdDoAuxFunctionSwitchLevel = exports.MavCmdDoAuxFunctionSwitchLevel || (exports.MavCmdDoAuxFunctionSwitchLevel = {}));
/**
 * LED_CONTROL_PATTERN
 */
var LedControlPattern;
(function (LedControlPattern) {
    /**
     * LED patterns off (return control to regular vehicle control).
     */
    LedControlPattern[LedControlPattern["OFF"] = 0] = "OFF";
    /**
     * LEDs show pattern during firmware update.
     */
    LedControlPattern[LedControlPattern["FIRMWAREUPDATE"] = 1] = "FIRMWAREUPDATE";
    /**
     * Custom Pattern using custom bytes fields.
     */
    LedControlPattern[LedControlPattern["CUSTOM"] = 255] = "CUSTOM";
})(LedControlPattern = exports.LedControlPattern || (exports.LedControlPattern = {}));
/**
 * Flags in EKF_STATUS message.
 */
var EkfStatusFlags;
(function (EkfStatusFlags) {
    /**
     * Set if EKF's attitude estimate is good.
     */
    EkfStatusFlags[EkfStatusFlags["ATTITUDE"] = 1] = "ATTITUDE";
    /**
     * Set if EKF's horizontal velocity estimate is good.
     */
    EkfStatusFlags[EkfStatusFlags["VELOCITY_HORIZ"] = 2] = "VELOCITY_HORIZ";
    /**
     * Set if EKF's vertical velocity estimate is good.
     */
    EkfStatusFlags[EkfStatusFlags["VELOCITY_VERT"] = 4] = "VELOCITY_VERT";
    /**
     * Set if EKF's horizontal position (relative) estimate is good.
     */
    EkfStatusFlags[EkfStatusFlags["POS_HORIZ_REL"] = 8] = "POS_HORIZ_REL";
    /**
     * Set if EKF's horizontal position (absolute) estimate is good.
     */
    EkfStatusFlags[EkfStatusFlags["POS_HORIZ_ABS"] = 16] = "POS_HORIZ_ABS";
    /**
     * Set if EKF's vertical position (absolute) estimate is good.
     */
    EkfStatusFlags[EkfStatusFlags["POS_VERT_ABS"] = 32] = "POS_VERT_ABS";
    /**
     * Set if EKF's vertical position (above ground) estimate is good.
     */
    EkfStatusFlags[EkfStatusFlags["POS_VERT_AGL"] = 64] = "POS_VERT_AGL";
    /**
     * EKF is in constant position mode and does not know it's absolute or relative position.
     */
    EkfStatusFlags[EkfStatusFlags["CONST_POS_MODE"] = 128] = "CONST_POS_MODE";
    /**
     * Set if EKF's predicted horizontal position (relative) estimate is good.
     */
    EkfStatusFlags[EkfStatusFlags["PRED_POS_HORIZ_REL"] = 256] = "PRED_POS_HORIZ_REL";
    /**
     * Set if EKF's predicted horizontal position (absolute) estimate is good.
     */
    EkfStatusFlags[EkfStatusFlags["PRED_POS_HORIZ_ABS"] = 512] = "PRED_POS_HORIZ_ABS";
    /**
     * Set if EKF has never been healthy.
     */
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
    /**
     * UAV to stop sending DataFlash blocks.
     */
    MavRemoteLogDataBlockCommands[MavRemoteLogDataBlockCommands["STOP"] = 2147483645] = "STOP";
    /**
     * UAV to start sending DataFlash blocks.
     */
    MavRemoteLogDataBlockCommands[MavRemoteLogDataBlockCommands["START"] = 2147483646] = "START";
})(MavRemoteLogDataBlockCommands = exports.MavRemoteLogDataBlockCommands || (exports.MavRemoteLogDataBlockCommands = {}));
/**
 * Possible remote log data block statuses.
 */
var MavRemoteLogDataBlockStatuses;
(function (MavRemoteLogDataBlockStatuses) {
    /**
     * This block has NOT been received.
     */
    MavRemoteLogDataBlockStatuses[MavRemoteLogDataBlockStatuses["NACK"] = 0] = "NACK";
    /**
     * This block has been received.
     */
    MavRemoteLogDataBlockStatuses[MavRemoteLogDataBlockStatuses["ACK"] = 1] = "ACK";
})(MavRemoteLogDataBlockStatuses = exports.MavRemoteLogDataBlockStatuses || (exports.MavRemoteLogDataBlockStatuses = {}));
/**
 * Bus types for device operations.
 */
var DeviceOpBustype;
(function (DeviceOpBustype) {
    /**
     * I2C Device operation.
     */
    DeviceOpBustype[DeviceOpBustype["I2C"] = 0] = "I2C";
    /**
     * SPI Device operation.
     */
    DeviceOpBustype[DeviceOpBustype["SPI"] = 1] = "SPI";
})(DeviceOpBustype = exports.DeviceOpBustype || (exports.DeviceOpBustype = {}));
/**
 * Deepstall flight stage.
 */
var DeepstallStage;
(function (DeepstallStage) {
    /**
     * Flying to the landing point.
     */
    DeepstallStage[DeepstallStage["FLY_TO_LANDING"] = 0] = "FLY_TO_LANDING";
    /**
     * Building an estimate of the wind.
     */
    DeepstallStage[DeepstallStage["ESTIMATE_WIND"] = 1] = "ESTIMATE_WIND";
    /**
     * Waiting to breakout of the loiter to fly the approach.
     */
    DeepstallStage[DeepstallStage["WAIT_FOR_BREAKOUT"] = 2] = "WAIT_FOR_BREAKOUT";
    /**
     * Flying to the first arc point to turn around to the landing point.
     */
    DeepstallStage[DeepstallStage["FLY_TO_ARC"] = 3] = "FLY_TO_ARC";
    /**
     * Turning around back to the deepstall landing point.
     */
    DeepstallStage[DeepstallStage["ARC"] = 4] = "ARC";
    /**
     * Approaching the landing point.
     */
    DeepstallStage[DeepstallStage["APPROACH"] = 5] = "APPROACH";
    /**
     * Stalling and steering towards the land point.
     */
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
 *
 * @deprecated since 2022-02, replaced by MAG_CAL_REPORT, Accel Parameters, and Gyro Parameters
 */
class SensorOffsets extends mavlink_1.MavLinkData {
    constructor() {
        super();
        this.magOfsX = 0;
        this.magOfsY = 0;
        this.magOfsZ = 0;
        this.magDeclination = 0;
        this.rawPress = 0;
        this.rawTemp = 0;
        this.gyroCalX = 0;
        this.gyroCalY = 0;
        this.gyroCalZ = 0;
        this.accelCalX = 0;
        this.accelCalY = 0;
        this.accelCalZ = 0;
    }
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
    constructor() {
        super();
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.magOfsX = 0;
        this.magOfsY = 0;
        this.magOfsZ = 0;
    }
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
    constructor() {
        super();
        this.brkval = 0;
        this.freemem = 0;
        this.freemem32 = 0;
    }
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
    constructor() {
        super();
        this.adc1 = 0;
        this.adc2 = 0;
        this.adc3 = 0;
        this.adc4 = 0;
        this.adc5 = 0;
        this.adc6 = 0;
    }
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
    constructor() {
        super();
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.mode = 0;
        this.shutterSpeed = 0;
        this.aperture = 0;
        this.iso = 0;
        this.exposureType = 0;
        this.commandId = 0;
        this.engineCutOff = 0;
        this.extraParam = 0;
        this.extraValue = 0;
    }
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
    constructor() {
        super();
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.session = 0;
        this.zoomPos = 0;
        this.zoomStep = 0;
        this.focusLock = 0;
        this.shot = 0;
        this.commandId = 0;
        this.extraParam = 0;
        this.extraValue = 0;
    }
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
    constructor() {
        super();
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.mountMode = common_1.MavMountMode[Object.keys(common_1.MavMountMode)[0]];
        this.stabRoll = 0;
        this.stabPitch = 0;
        this.stabYaw = 0;
    }
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
    constructor() {
        super();
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.inputA = 0;
        this.inputB = 0;
        this.inputC = 0;
        this.savePosition = 0;
    }
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
    constructor() {
        super();
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.pointingA = 0;
        this.pointingB = 0;
        this.pointingC = 0;
        this.mountMode = common_1.MavMountMode[Object.keys(common_1.MavMountMode)[0]];
    }
}
exports.MountStatus = MountStatus;
MountStatus.MSG_ID = 158;
MountStatus.MSG_NAME = 'MOUNT_STATUS';
MountStatus.PAYLOAD_LENGTH = 15;
MountStatus.MAGIC_NUMBER = 134;
MountStatus.FIELDS = [
    new mavlink_1.MavLinkPacketField('pointing_a', 'pointingA', 0, false, 4, 'int32_t', 'cdeg'),
    new mavlink_1.MavLinkPacketField('pointing_b', 'pointingB', 4, false, 4, 'int32_t', 'cdeg'),
    new mavlink_1.MavLinkPacketField('pointing_c', 'pointingC', 8, false, 4, 'int32_t', 'cdeg'),
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 12, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 13, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('mount_mode', 'mountMode', 14, true, 1, 'uint8_t', ''),
];
/**
 * A fence point. Used to set a point when from GCS -> MAV. Also used to return a point from MAV ->
 * GCS.
 */
class FencePoint extends mavlink_1.MavLinkData {
    constructor() {
        super();
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.idx = 0;
        this.count = 0;
        this.lat = 0;
        this.lng = 0;
    }
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
    constructor() {
        super();
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.idx = 0;
    }
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
    constructor() {
        super();
        this.omegaIx = 0;
        this.omegaIy = 0;
        this.omegaIz = 0;
        this.accelWeight = 0;
        this.renormVal = 0;
        this.errorRp = 0;
        this.errorYaw = 0;
    }
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
    constructor() {
        super();
        this.roll = 0;
        this.pitch = 0;
        this.yaw = 0;
        this.xacc = 0;
        this.yacc = 0;
        this.zacc = 0;
        this.xgyro = 0;
        this.ygyro = 0;
        this.zgyro = 0;
        this.lat = 0;
        this.lng = 0;
    }
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
    constructor() {
        super();
        this.Vcc = 0;
        this.I2Cerr = 0;
    }
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
    constructor() {
        super();
        this.rssi = 0;
        this.remrssi = 0;
        this.txbuf = 0;
        this.noise = 0;
        this.remnoise = 0;
        this.rxerrors = 0;
        this.fixed = 0;
    }
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
    constructor() {
        super();
        this.limitsState = LimitsState[Object.keys(LimitsState)[0]];
        this.lastTrigger = 0;
        this.lastAction = 0;
        this.lastRecovery = 0;
        this.lastClear = 0;
        this.breachCount = 0;
        this.modsEnabled = LimitModule[Object.keys(LimitModule)[0]];
        this.modsRequired = LimitModule[Object.keys(LimitModule)[0]];
        this.modsTriggered = LimitModule[Object.keys(LimitModule)[0]];
    }
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
    constructor() {
        super();
        this.direction = 0;
        this.speed = 0;
        this.speedZ = 0;
    }
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
    constructor() {
        super();
        this.type = 0;
        this.len = 0;
        this.data = [];
    }
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
    constructor() {
        super();
        this.type = 0;
        this.len = 0;
        this.data = [];
    }
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
    constructor() {
        super();
        this.type = 0;
        this.len = 0;
        this.data = [];
    }
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
    constructor() {
        super();
        this.type = 0;
        this.len = 0;
        this.data = [];
    }
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
    constructor() {
        super();
        this.distance = 0;
        this.voltage = 0;
    }
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
    constructor() {
        super();
        this.vx = 0;
        this.vy = 0;
        this.vz = 0;
        this.diffPressure = 0;
        this.EAS2TAS = 0;
        this.ratio = 0;
        this.stateX = 0;
        this.stateY = 0;
        this.stateZ = 0;
        this.Pax = 0;
        this.Pby = 0;
        this.Pcz = 0;
    }
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
    constructor() {
        super();
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.idx = 0;
        this.count = 0;
        this.lat = 0;
        this.lng = 0;
        this.alt = 0;
        this.breakAlt = 0;
        this.landDir = 0;
        this.flags = RallyFlags[Object.keys(RallyFlags)[0]];
    }
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
    constructor() {
        super();
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.idx = 0;
    }
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
    constructor() {
        super();
        this.throttle = 0;
        this.current = 0;
        this.interference = 0;
        this.CompensationX = 0;
        this.CompensationY = 0;
        this.CompensationZ = 0;
    }
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
    constructor() {
        super();
        this.roll = 0;
        this.pitch = 0;
        this.yaw = 0;
        this.altitude = 0;
        this.lat = 0;
        this.lng = 0;
    }
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
    constructor() {
        super();
        this.timeUsec = BigInt(0);
        this.targetSystem = 0;
        this.camIdx = 0;
        this.imgIdx = 0;
        this.eventId = CameraStatusTypes[Object.keys(CameraStatusTypes)[0]];
        this.p1 = 0;
        this.p2 = 0;
        this.p3 = 0;
        this.p4 = 0;
    }
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
    constructor() {
        super();
        this.timeUsec = BigInt(0);
        this.targetSystem = 0;
        this.camIdx = 0;
        this.imgIdx = 0;
        this.lat = 0;
        this.lng = 0;
        this.altMsl = 0;
        this.altRel = 0;
        this.roll = 0;
        this.pitch = 0;
        this.yaw = 0;
        this.focLen = 0;
        this.flags = CameraFeedbackFlags[Object.keys(CameraFeedbackFlags)[0]];
        this.completedCaptures = 0;
    }
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
    constructor() {
        super();
        this.voltage = 0;
        this.currentBattery = 0;
    }
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
    constructor() {
        super();
        this.roll = 0;
        this.pitch = 0;
        this.yaw = 0;
        this.altitude = 0;
        this.lat = 0;
        this.lng = 0;
        this.v1 = 0;
        this.v2 = 0;
        this.v3 = 0;
        this.v4 = 0;
    }
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
    constructor() {
        super();
        this.targetSystem = 0;
        this.targetComponent = 0;
    }
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
    constructor() {
        super();
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.seqno = MavRemoteLogDataBlockCommands[Object.keys(MavRemoteLogDataBlockCommands)[0]];
        this.data = [];
    }
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
    constructor() {
        super();
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.seqno = 0;
        this.status = MavRemoteLogDataBlockStatuses[Object.keys(MavRemoteLogDataBlockStatuses)[0]];
    }
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
    constructor() {
        super();
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.instance = 0;
        this.pattern = 0;
        this.customLen = 0;
        this.customBytes = [];
    }
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
    constructor() {
        super();
        this.compassId = 0;
        this.calMask = 0;
        this.calStatus = common_1.MagCalStatus[Object.keys(common_1.MagCalStatus)[0]];
        this.attempt = 0;
        this.completionPct = 0;
        this.completionMask = [];
        this.directionX = 0;
        this.directionY = 0;
        this.directionZ = 0;
    }
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
    constructor() {
        super();
        this.flags = EkfStatusFlags[Object.keys(EkfStatusFlags)[0]];
        this.velocityVariance = 0;
        this.posHorizVariance = 0;
        this.posVertVariance = 0;
        this.compassVariance = 0;
        this.terrainAltVariance = 0;
        this.airspeedVariance = 0;
    }
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
    constructor() {
        super();
        this.axis = PidTuningAxis[Object.keys(PidTuningAxis)[0]];
        this.desired = 0;
        this.achieved = 0;
        this.FF = 0;
        this.P = 0;
        this.I = 0;
        this.D = 0;
    }
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
    constructor() {
        super();
        this.landingLat = 0;
        this.landingLon = 0;
        this.pathLat = 0;
        this.pathLon = 0;
        this.arcEntryLat = 0;
        this.arcEntryLon = 0;
        this.altitude = 0;
        this.expectedTravelDistance = 0;
        this.crossTrackError = 0;
        this.stage = DeepstallStage[Object.keys(DeepstallStage)[0]];
    }
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
    constructor() {
        super();
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.deltaTime = 0;
        this.deltaAngleX = 0;
        this.deltaAngleY = 0;
        this.deltaAngleZ = 0;
        this.deltaVelocityX = 0;
        this.deltaVelocityY = 0;
        this.deltaVelocityZ = 0;
        this.jointRoll = 0;
        this.jointEl = 0;
        this.jointAz = 0;
    }
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
    constructor() {
        super();
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.demandedRateX = 0;
        this.demandedRateY = 0;
        this.demandedRateZ = 0;
    }
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
    constructor() {
        super();
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.rlTorqueCmd = 0;
        this.elTorqueCmd = 0;
        this.azTorqueCmd = 0;
    }
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
    constructor() {
        super();
        this.status = GoproHeartbeatStatus[Object.keys(GoproHeartbeatStatus)[0]];
        this.captureMode = GoproCaptureMode[Object.keys(GoproCaptureMode)[0]];
        this.flags = GoproHeartbeatFlags[Object.keys(GoproHeartbeatFlags)[0]];
    }
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
    constructor() {
        super();
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.cmdId = GoproCommand[Object.keys(GoproCommand)[0]];
    }
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
    constructor() {
        super();
        this.cmdId = GoproCommand[Object.keys(GoproCommand)[0]];
        this.status = GoproRequestStatus[Object.keys(GoproRequestStatus)[0]];
        this.value = [];
    }
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
    constructor() {
        super();
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.cmdId = GoproCommand[Object.keys(GoproCommand)[0]];
        this.value = [];
    }
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
    constructor() {
        super();
        this.cmdId = GoproCommand[Object.keys(GoproCommand)[0]];
        this.status = GoproRequestStatus[Object.keys(GoproRequestStatus)[0]];
    }
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
    constructor() {
        super();
        this.rpm1 = 0;
        this.rpm2 = 0;
    }
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
    constructor() {
        super();
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.requestId = 0;
        this.bustype = DeviceOpBustype[Object.keys(DeviceOpBustype)[0]];
        this.bus = 0;
        this.address = 0;
        this.busname = '';
        this.regstart = 0;
        this.count = 0;
        this.bank = 0;
    }
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
    constructor() {
        super();
        this.requestId = 0;
        this.result = 0;
        this.regstart = 0;
        this.count = 0;
        this.data = [];
        this.bank = 0;
    }
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
    constructor() {
        super();
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.requestId = 0;
        this.bustype = DeviceOpBustype[Object.keys(DeviceOpBustype)[0]];
        this.bus = 0;
        this.address = 0;
        this.busname = '';
        this.regstart = 0;
        this.count = 0;
        this.data = [];
        this.bank = 0;
    }
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
    constructor() {
        super();
        this.requestId = 0;
        this.result = 0;
    }
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
 * Send a secure command. Data should be signed with a private key corresponding with a public key
 * known to the recipient. Signature should be over the concatenation of the sequence number
 * (little-endian format), the operation (little-endian format) the data and the session key. For
 * SECURE_COMMAND_GET_SESSION_KEY the session key should be zero length. The data array consists of the
 * data followed by the signature. The sum of the data_length and the sig_length cannot be more than
 * 220. The format of the data is command specific.
 */
class SecureCommand extends mavlink_1.MavLinkData {
    constructor() {
        super();
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.sequence = 0;
        this.operation = SecureCommandOp[Object.keys(SecureCommandOp)[0]];
        this.dataLength = 0;
        this.sigLength = 0;
        this.data = [];
    }
}
exports.SecureCommand = SecureCommand;
SecureCommand.MSG_ID = 11004;
SecureCommand.MSG_NAME = 'SECURE_COMMAND';
SecureCommand.PAYLOAD_LENGTH = 232;
SecureCommand.MAGIC_NUMBER = 11;
SecureCommand.FIELDS = [
    new mavlink_1.MavLinkPacketField('sequence', 'sequence', 0, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('operation', 'operation', 4, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 8, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 9, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('data_length', 'dataLength', 10, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('sig_length', 'sigLength', 11, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('data', 'data', 12, false, 1, 'uint8_t[]', '', 220),
];
/**
 * Reply from secure command.
 */
class SecureCommandReply extends mavlink_1.MavLinkData {
    constructor() {
        super();
        this.sequence = 0;
        this.operation = SecureCommandOp[Object.keys(SecureCommandOp)[0]];
        this.result = common_1.MavResult[Object.keys(common_1.MavResult)[0]];
        this.dataLength = 0;
        this.data = [];
    }
}
exports.SecureCommandReply = SecureCommandReply;
SecureCommandReply.MSG_ID = 11005;
SecureCommandReply.MSG_NAME = 'SECURE_COMMAND_REPLY';
SecureCommandReply.PAYLOAD_LENGTH = 230;
SecureCommandReply.MAGIC_NUMBER = 93;
SecureCommandReply.FIELDS = [
    new mavlink_1.MavLinkPacketField('sequence', 'sequence', 0, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('operation', 'operation', 4, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('result', 'result', 8, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('data_length', 'dataLength', 9, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('data', 'data', 10, false, 1, 'uint8_t[]', '', 220),
];
/**
 * Adaptive Controller tuning information.
 */
class AdapTuning extends mavlink_1.MavLinkData {
    constructor() {
        super();
        this.axis = PidTuningAxis[Object.keys(PidTuningAxis)[0]];
        this.desired = 0;
        this.achieved = 0;
        this.error = 0;
        this.theta = 0;
        this.omega = 0;
        this.sigma = 0;
        this.thetaDot = 0;
        this.omegaDot = 0;
        this.sigmaDot = 0;
        this.f = 0;
        this.fDot = 0;
        this.u = 0;
    }
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
    constructor() {
        super();
        this.timeUsec = BigInt(0);
        this.timeDeltaUsec = BigInt(0);
        this.angleDelta = [];
        this.positionDelta = [];
        this.confidence = 0;
    }
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
    constructor() {
        super();
        this.timeUsec = BigInt(0);
        this.AOA = 0;
        this.SSA = 0;
    }
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
    constructor() {
        super();
        this.temperature = [];
        this.voltage = [];
        this.current = [];
        this.totalcurrent = [];
        this.rpm = [];
        this.count = [];
    }
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
    constructor() {
        super();
        this.temperature = [];
        this.voltage = [];
        this.current = [];
        this.totalcurrent = [];
        this.rpm = [];
        this.count = [];
    }
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
    constructor() {
        super();
        this.temperature = [];
        this.voltage = [];
        this.current = [];
        this.totalcurrent = [];
        this.rpm = [];
        this.count = [];
    }
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
    constructor() {
        super();
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.requestId = 0;
        this.osdScreen = 0;
        this.osdIndex = 0;
        this.paramId = '';
        this.configType = OsdParamConfigType[Object.keys(OsdParamConfigType)[0]];
        this.minValue = 0;
        this.maxValue = 0;
        this.increment = 0;
    }
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
    constructor() {
        super();
        this.requestId = 0;
        this.result = OsdParamConfigError[Object.keys(OsdParamConfigError)[0]];
    }
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
    constructor() {
        super();
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.requestId = 0;
        this.osdScreen = 0;
        this.osdIndex = 0;
    }
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
    constructor() {
        super();
        this.requestId = 0;
        this.result = OsdParamConfigError[Object.keys(OsdParamConfigError)[0]];
        this.paramId = '';
        this.configType = OsdParamConfigType[Object.keys(OsdParamConfigType)[0]];
        this.minValue = 0;
        this.maxValue = 0;
        this.increment = 0;
    }
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
    constructor() {
        super();
        this.timeBootMs = 0;
        this.sensorType = common_1.MavDistanceSensor[Object.keys(common_1.MavDistanceSensor)[0]];
        this.frame = common_1.MavFrame[Object.keys(common_1.MavFrame)[0]];
        this.obstacleId = 0;
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.minDistance = 0;
        this.maxDistance = 0;
    }
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
    constructor() {
        super();
        this.timeBootMs = 0;
        this.id = 0;
        this.healthy = 0;
        this.lat = 0;
        this.lng = 0;
        this.alt = 0;
        this.roll = 0;
        this.pitch = 0;
        this.yaw = 0;
        this.distance = 0;
        this.temperature = 0;
    }
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
/**
 * The MCU status, giving MCU temperature and voltage. The min and max voltages are to allow for
 * detecting power supply instability.
 */
class McuStatus extends mavlink_1.MavLinkData {
    constructor() {
        super();
        this.id = 0;
        this.MCUTemperature = 0;
        this.MCUVoltage = 0;
        this.MCUVoltageMin = 0;
        this.MCUVoltageMax = 0;
    }
}
exports.McuStatus = McuStatus;
McuStatus.MSG_ID = 11039;
McuStatus.MSG_NAME = 'MCU_STATUS';
McuStatus.PAYLOAD_LENGTH = 9;
McuStatus.MAGIC_NUMBER = 142;
McuStatus.FIELDS = [
    new mavlink_1.MavLinkPacketField('MCU_temperature', 'MCUTemperature', 0, false, 2, 'int16_t', 'cdegC'),
    new mavlink_1.MavLinkPacketField('MCU_voltage', 'MCUVoltage', 2, false, 2, 'uint16_t', 'mV'),
    new mavlink_1.MavLinkPacketField('MCU_voltage_min', 'MCUVoltageMin', 4, false, 2, 'uint16_t', 'mV'),
    new mavlink_1.MavLinkPacketField('MCU_voltage_max', 'MCUVoltageMax', 6, false, 2, 'uint16_t', 'mV'),
    new mavlink_1.MavLinkPacketField('id', 'id', 8, false, 1, 'uint8_t', ''),
];
/**
 * ESC Telemetry Data for ESCs 13 to 16, matching data sent by BLHeli ESCs.
 */
class EscTelemetry13To16 extends mavlink_1.MavLinkData {
    constructor() {
        super();
        this.temperature = [];
        this.voltage = [];
        this.current = [];
        this.totalcurrent = [];
        this.rpm = [];
        this.count = [];
    }
}
exports.EscTelemetry13To16 = EscTelemetry13To16;
EscTelemetry13To16.MSG_ID = 11040;
EscTelemetry13To16.MSG_NAME = 'ESC_TELEMETRY_13_TO_16';
EscTelemetry13To16.PAYLOAD_LENGTH = 44;
EscTelemetry13To16.MAGIC_NUMBER = 132;
EscTelemetry13To16.FIELDS = [
    new mavlink_1.MavLinkPacketField('voltage', 'voltage', 0, false, 2, 'uint16_t[]', 'cV', 4),
    new mavlink_1.MavLinkPacketField('current', 'current', 8, false, 2, 'uint16_t[]', 'cA', 4),
    new mavlink_1.MavLinkPacketField('totalcurrent', 'totalcurrent', 16, false, 2, 'uint16_t[]', 'mAh', 4),
    new mavlink_1.MavLinkPacketField('rpm', 'rpm', 24, false, 2, 'uint16_t[]', 'rpm', 4),
    new mavlink_1.MavLinkPacketField('count', 'count', 32, false, 2, 'uint16_t[]', '', 4),
    new mavlink_1.MavLinkPacketField('temperature', 'temperature', 40, false, 1, 'uint8_t[]', 'degC', 4),
];
/**
 * ESC Telemetry Data for ESCs 17 to 20, matching data sent by BLHeli ESCs.
 */
class EscTelemetry17To20 extends mavlink_1.MavLinkData {
    constructor() {
        super();
        this.temperature = [];
        this.voltage = [];
        this.current = [];
        this.totalcurrent = [];
        this.rpm = [];
        this.count = [];
    }
}
exports.EscTelemetry17To20 = EscTelemetry17To20;
EscTelemetry17To20.MSG_ID = 11041;
EscTelemetry17To20.MSG_NAME = 'ESC_TELEMETRY_17_TO_20';
EscTelemetry17To20.PAYLOAD_LENGTH = 44;
EscTelemetry17To20.MAGIC_NUMBER = 208;
EscTelemetry17To20.FIELDS = [
    new mavlink_1.MavLinkPacketField('voltage', 'voltage', 0, false, 2, 'uint16_t[]', 'cV', 4),
    new mavlink_1.MavLinkPacketField('current', 'current', 8, false, 2, 'uint16_t[]', 'cA', 4),
    new mavlink_1.MavLinkPacketField('totalcurrent', 'totalcurrent', 16, false, 2, 'uint16_t[]', 'mAh', 4),
    new mavlink_1.MavLinkPacketField('rpm', 'rpm', 24, false, 2, 'uint16_t[]', 'rpm', 4),
    new mavlink_1.MavLinkPacketField('count', 'count', 32, false, 2, 'uint16_t[]', '', 4),
    new mavlink_1.MavLinkPacketField('temperature', 'temperature', 40, false, 1, 'uint8_t[]', 'degC', 4),
];
/**
 * ESC Telemetry Data for ESCs 21 to 24, matching data sent by BLHeli ESCs.
 */
class EscTelemetry21To24 extends mavlink_1.MavLinkData {
    constructor() {
        super();
        this.temperature = [];
        this.voltage = [];
        this.current = [];
        this.totalcurrent = [];
        this.rpm = [];
        this.count = [];
    }
}
exports.EscTelemetry21To24 = EscTelemetry21To24;
EscTelemetry21To24.MSG_ID = 11042;
EscTelemetry21To24.MSG_NAME = 'ESC_TELEMETRY_21_TO_24';
EscTelemetry21To24.PAYLOAD_LENGTH = 44;
EscTelemetry21To24.MAGIC_NUMBER = 201;
EscTelemetry21To24.FIELDS = [
    new mavlink_1.MavLinkPacketField('voltage', 'voltage', 0, false, 2, 'uint16_t[]', 'cV', 4),
    new mavlink_1.MavLinkPacketField('current', 'current', 8, false, 2, 'uint16_t[]', 'cA', 4),
    new mavlink_1.MavLinkPacketField('totalcurrent', 'totalcurrent', 16, false, 2, 'uint16_t[]', 'mAh', 4),
    new mavlink_1.MavLinkPacketField('rpm', 'rpm', 24, false, 2, 'uint16_t[]', 'rpm', 4),
    new mavlink_1.MavLinkPacketField('count', 'count', 32, false, 2, 'uint16_t[]', '', 4),
    new mavlink_1.MavLinkPacketField('temperature', 'temperature', 40, false, 1, 'uint8_t[]', 'degC', 4),
];
/**
 * ESC Telemetry Data for ESCs 25 to 28, matching data sent by BLHeli ESCs.
 */
class EscTelemetry25To28 extends mavlink_1.MavLinkData {
    constructor() {
        super();
        this.temperature = [];
        this.voltage = [];
        this.current = [];
        this.totalcurrent = [];
        this.rpm = [];
        this.count = [];
    }
}
exports.EscTelemetry25To28 = EscTelemetry25To28;
EscTelemetry25To28.MSG_ID = 11043;
EscTelemetry25To28.MSG_NAME = 'ESC_TELEMETRY_25_TO_28';
EscTelemetry25To28.PAYLOAD_LENGTH = 44;
EscTelemetry25To28.MAGIC_NUMBER = 193;
EscTelemetry25To28.FIELDS = [
    new mavlink_1.MavLinkPacketField('voltage', 'voltage', 0, false, 2, 'uint16_t[]', 'cV', 4),
    new mavlink_1.MavLinkPacketField('current', 'current', 8, false, 2, 'uint16_t[]', 'cA', 4),
    new mavlink_1.MavLinkPacketField('totalcurrent', 'totalcurrent', 16, false, 2, 'uint16_t[]', 'mAh', 4),
    new mavlink_1.MavLinkPacketField('rpm', 'rpm', 24, false, 2, 'uint16_t[]', 'rpm', 4),
    new mavlink_1.MavLinkPacketField('count', 'count', 32, false, 2, 'uint16_t[]', '', 4),
    new mavlink_1.MavLinkPacketField('temperature', 'temperature', 40, false, 1, 'uint8_t[]', 'degC', 4),
];
/**
 * ESC Telemetry Data for ESCs 29 to 32, matching data sent by BLHeli ESCs.
 */
class EscTelemetry29To32 extends mavlink_1.MavLinkData {
    constructor() {
        super();
        this.temperature = [];
        this.voltage = [];
        this.current = [];
        this.totalcurrent = [];
        this.rpm = [];
        this.count = [];
    }
}
exports.EscTelemetry29To32 = EscTelemetry29To32;
EscTelemetry29To32.MSG_ID = 11044;
EscTelemetry29To32.MSG_NAME = 'ESC_TELEMETRY_29_TO_32';
EscTelemetry29To32.PAYLOAD_LENGTH = 44;
EscTelemetry29To32.MAGIC_NUMBER = 189;
EscTelemetry29To32.FIELDS = [
    new mavlink_1.MavLinkPacketField('voltage', 'voltage', 0, false, 2, 'uint16_t[]', 'cV', 4),
    new mavlink_1.MavLinkPacketField('current', 'current', 8, false, 2, 'uint16_t[]', 'cA', 4),
    new mavlink_1.MavLinkPacketField('totalcurrent', 'totalcurrent', 16, false, 2, 'uint16_t[]', 'mAh', 4),
    new mavlink_1.MavLinkPacketField('rpm', 'rpm', 24, false, 2, 'uint16_t[]', 'rpm', 4),
    new mavlink_1.MavLinkPacketField('count', 'count', 32, false, 2, 'uint16_t[]', '', 4),
    new mavlink_1.MavLinkPacketField('temperature', 'temperature', 40, false, 1, 'uint8_t[]', 'degC', 4),
];
const common_2 = require("./common");
/**
 * Set the distance to be repeated on mission resume
 */
class DoSetResumeRepeatDistCommand extends common_2.CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.DO_SET_RESUME_REPEAT_DIST;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Distance.
     *
     * @units m
     */
    get distance() {
        return this._param1;
    }
    set distance(value) {
        this._param1 = value;
    }
}
exports.DoSetResumeRepeatDistCommand = DoSetResumeRepeatDistCommand;
/**
 * Control attached liquid sprayer
 */
class DoSprayerCommand extends common_2.CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.DO_SPRAYER;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * 0: disable sprayer. 1: enable sprayer.
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get sprayerEnable() {
        return this._param1;
    }
    set sprayerEnable(value) {
        this._param1 = value;
    }
}
exports.DoSprayerCommand = DoSprayerCommand;
/**
 * Pass instructions onto scripting, a script should be checking for a new command
 */
class DoSendScriptMessageCommand extends common_2.CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.DO_SEND_SCRIPT_MESSAGE;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * uint16 ID value to be passed to scripting
     *
     * @min: 0
     * @max: 65535
     * @increment: 1
     */
    get id() {
        return this._param1;
    }
    set id(value) {
        this._param1 = value;
    }
    /**
     * float value to be passed to scripting
     */
    get param1() {
        return this._param2;
    }
    set param1(value) {
        this._param2 = value;
    }
    /**
     * float value to be passed to scripting
     */
    get param2() {
        return this._param3;
    }
    set param2(value) {
        this._param3 = value;
    }
    /**
     * float value to be passed to scripting
     */
    get param3() {
        return this._param4;
    }
    set param3(value) {
        this._param4 = value;
    }
}
exports.DoSendScriptMessageCommand = DoSendScriptMessageCommand;
/**
 * Execute auxiliary function
 */
class DoAuxFunctionCommand extends common_2.CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.DO_AUX_FUNCTION;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Auxiliary Function.
     */
    get auxiliaryfunction() {
        return this._param1;
    }
    set auxiliaryfunction(value) {
        this._param1 = value;
    }
    /**
     * Switch Level.
     */
    get switchposition() {
        return this._param2;
    }
    set switchposition(value) {
        this._param2 = value;
    }
}
exports.DoAuxFunctionCommand = DoAuxFunctionCommand;
/**
 * Mission command to wait for an altitude or downwards vertical speed. This is meant for high altitude
 * balloon launches, allowing the aircraft to be idle until either an altitude is reached or a negative
 * vertical speed is reached (indicating early balloon burst). The wiggle time is how often to wiggle
 * the control surfaces to prevent them seizing up.
 */
class NavAltitudeWaitCommand extends common_2.CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.NAV_ALTITUDE_WAIT;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Altitude.
     *
     * @units m
     */
    get altitude() {
        return this._param1;
    }
    set altitude(value) {
        this._param1 = value;
    }
    /**
     * Descent speed.
     *
     * @units m/s
     */
    get descentSpeed() {
        return this._param2;
    }
    set descentSpeed(value) {
        this._param2 = value;
    }
    /**
     * How long to wiggle the control surfaces to prevent them seizing up.
     *
     * @units s
     */
    get wiggleTime() {
        return this._param3;
    }
    set wiggleTime(value) {
        this._param3 = value;
    }
}
exports.NavAltitudeWaitCommand = NavAltitudeWaitCommand;
/**
 * A system wide power-off event has been initiated.
 */
class PowerOffInitiatedCommand extends common_2.CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.POWER_OFF_INITIATED;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
}
exports.PowerOffInitiatedCommand = PowerOffInitiatedCommand;
/**
 * FLY button has been clicked.
 */
class SoloBtnFlyClickCommand extends common_2.CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.SOLO_BTN_FLY_CLICK;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
}
exports.SoloBtnFlyClickCommand = SoloBtnFlyClickCommand;
/**
 * FLY button has been held for 1.5 seconds.
 */
class SoloBtnFlyHoldCommand extends common_2.CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.SOLO_BTN_FLY_HOLD;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Takeoff altitude.
     *
     * @units m
     */
    get takeoffAltitude() {
        return this._param1;
    }
    set takeoffAltitude(value) {
        this._param1 = value;
    }
}
exports.SoloBtnFlyHoldCommand = SoloBtnFlyHoldCommand;
/**
 * PAUSE button has been clicked.
 */
class SoloBtnPauseClickCommand extends common_2.CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.SOLO_BTN_PAUSE_CLICK;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * 1 if Solo is in a shot mode, 0 otherwise.
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get shotMode() {
        return this._param1;
    }
    set shotMode(value) {
        this._param1 = value;
    }
}
exports.SoloBtnPauseClickCommand = SoloBtnPauseClickCommand;
/**
 * Magnetometer calibration based on fixed position in earth field given by inclination, declination
 * and intensity.
 */
class FixedMagCalCommand extends common_2.CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.FIXED_MAG_CAL;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Magnetic declination.
     *
     * @units deg
     */
    get declination() {
        return this._param1;
    }
    set declination(value) {
        this._param1 = value;
    }
    /**
     * Magnetic inclination.
     *
     * @units deg
     */
    get inclination() {
        return this._param2;
    }
    set inclination(value) {
        this._param2 = value;
    }
    /**
     * Magnetic intensity.
     *
     * @units mgauss
     */
    get intensity() {
        return this._param3;
    }
    set intensity(value) {
        this._param3 = value;
    }
    /**
     * Yaw.
     *
     * @units deg
     */
    get yaw() {
        return this._param4;
    }
    set yaw(value) {
        this._param4 = value;
    }
}
exports.FixedMagCalCommand = FixedMagCalCommand;
/**
 * Magnetometer calibration based on fixed expected field values.
 */
class FixedMagCalFieldCommand extends common_2.CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.FIXED_MAG_CAL_FIELD;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Field strength X.
     *
     * @units mgauss
     */
    get fieldX() {
        return this._param1;
    }
    set fieldX(value) {
        this._param1 = value;
    }
    /**
     * Field strength Y.
     *
     * @units mgauss
     */
    get fieldY() {
        return this._param2;
    }
    set fieldY(value) {
        this._param2 = value;
    }
    /**
     * Field strength Z.
     *
     * @units mgauss
     */
    get fieldZ() {
        return this._param3;
    }
    set fieldZ(value) {
        this._param3 = value;
    }
}
exports.FixedMagCalFieldCommand = FixedMagCalFieldCommand;
/**
 * Initiate a magnetometer calibration.
 */
class DoStartMagCalCommand extends common_2.CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.DO_START_MAG_CAL;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Bitmask of magnetometers to calibrate. Use 0 to calibrate all sensors that can be started (sensors
     * may not start if disabled, unhealthy, etc.). The command will NACK if calibration does not start for
     * a sensor explicitly specified by the bitmask.
     *
     * @min: 0
     * @max: 255
     * @increment: 1
     */
    get magnetometersBitmask() {
        return this._param1;
    }
    set magnetometersBitmask(value) {
        this._param1 = value;
    }
    /**
     * Automatically retry on failure (0=no retry, 1=retry).
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get retryOnFailure() {
        return this._param2;
    }
    set retryOnFailure(value) {
        this._param2 = value;
    }
    /**
     * Save without user input (0=require input, 1=autosave).
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get autosave() {
        return this._param3;
    }
    set autosave(value) {
        this._param3 = value;
    }
    /**
     * Delay.
     *
     * @units s
     */
    get delay() {
        return this._param4;
    }
    set delay(value) {
        this._param4 = value;
    }
    /**
     * Autoreboot (0=user reboot, 1=autoreboot).
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get autoreboot() {
        return this._param5;
    }
    set autoreboot(value) {
        this._param5 = value;
    }
}
exports.DoStartMagCalCommand = DoStartMagCalCommand;
/**
 * Accept a magnetometer calibration.
 */
class DoAcceptMagCalCommand extends common_2.CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.DO_ACCEPT_MAG_CAL;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Bitmask of magnetometers that calibration is accepted (0 means all).
     *
     * @min: 0
     * @max: 255
     * @increment: 1
     */
    get magnetometersBitmask() {
        return this._param1;
    }
    set magnetometersBitmask(value) {
        this._param1 = value;
    }
}
exports.DoAcceptMagCalCommand = DoAcceptMagCalCommand;
/**
 * Cancel a running magnetometer calibration.
 */
class DoCancelMagCalCommand extends common_2.CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.DO_CANCEL_MAG_CAL;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Bitmask of magnetometers to cancel a running calibration (0 means all).
     *
     * @min: 0
     * @max: 255
     * @increment: 1
     */
    get magnetometersBitmask() {
        return this._param1;
    }
    set magnetometersBitmask(value) {
        this._param1 = value;
    }
}
exports.DoCancelMagCalCommand = DoCancelMagCalCommand;
/**
 * Used when doing accelerometer calibration. When sent to the GCS tells it what position to put the
 * vehicle in. When sent to the vehicle says what position the vehicle is in.
 */
class AccelcalVehiclePosCommand extends common_2.CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.ACCELCAL_VEHICLE_POS;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Position.
     */
    get position() {
        return this._param1;
    }
    set position(value) {
        this._param1 = value;
    }
}
exports.AccelcalVehiclePosCommand = AccelcalVehiclePosCommand;
/**
 * Reply with the version banner.
 */
class DoSendBannerCommand extends common_2.CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.DO_SEND_BANNER;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
}
exports.DoSendBannerCommand = DoSendBannerCommand;
/**
 * Command autopilot to get into factory test/diagnostic mode.
 */
class SetFactoryTestModeCommand extends common_2.CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.SET_FACTORY_TEST_MODE;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * 0: activate test mode, 1: exit test mode.
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get testMode() {
        return this._param1;
    }
    set testMode(value) {
        this._param1 = value;
    }
}
exports.SetFactoryTestModeCommand = SetFactoryTestModeCommand;
/**
 * Causes the gimbal to reset and boot as if it was just powered on.
 */
class GimbalResetCommand extends common_2.CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.GIMBAL_RESET;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
}
exports.GimbalResetCommand = GimbalResetCommand;
/**
 * Reports progress and success or failure of gimbal axis calibration procedure.
 */
class GimbalAxisCalibrationStatusCommand extends common_2.CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.GIMBAL_AXIS_CALIBRATION_STATUS;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Gimbal axis we're reporting calibration progress for.
     */
    get axis() {
        return this._param1;
    }
    set axis(value) {
        this._param1 = value;
    }
    /**
     * Current calibration progress for this axis.
     *
     * @units %
     * @min: 0
     * @max: 100
     */
    get progress() {
        return this._param2;
    }
    set progress(value) {
        this._param2 = value;
    }
    /**
     * Status of the calibration.
     */
    get status() {
        return this._param3;
    }
    set status(value) {
        this._param3 = value;
    }
}
exports.GimbalAxisCalibrationStatusCommand = GimbalAxisCalibrationStatusCommand;
/**
 * Starts commutation calibration on the gimbal.
 */
class GimbalRequestAxisCalibrationCommand extends common_2.CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.GIMBAL_REQUEST_AXIS_CALIBRATION;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
}
exports.GimbalRequestAxisCalibrationCommand = GimbalRequestAxisCalibrationCommand;
/**
 * Erases gimbal application and parameters.
 */
class GimbalFullResetCommand extends common_2.CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.GIMBAL_FULL_RESET;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
}
exports.GimbalFullResetCommand = GimbalFullResetCommand;
/**
 * Update the bootloader
 */
class FlashBootloaderCommand extends common_2.CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.FLASH_BOOTLOADER;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Magic number - set to 290876 to actually flash
     *
     * @increment: 1
     */
    get magicNumber() {
        return this._param5;
    }
    set magicNumber(value) {
        this._param5 = value;
    }
}
exports.FlashBootloaderCommand = FlashBootloaderCommand;
/**
 * Reset battery capacity for batteries that accumulate consumed battery via integration.
 */
class BatteryResetCommand extends common_2.CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.BATTERY_RESET;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Bitmask of batteries to reset. Least significant bit is for the first battery.
     */
    get batteryMask() {
        return this._param1;
    }
    set batteryMask(value) {
        this._param1 = value;
    }
    /**
     * Battery percentage remaining to set.
     *
     * @min: 0
     * @max: 100
     * @increment: 1
     */
    get percentage() {
        return this._param2;
    }
    set percentage(value) {
        this._param2 = value;
    }
}
exports.BatteryResetCommand = BatteryResetCommand;
/**
 * Issue a trap signal to the autopilot process, presumably to enter the debugger.
 */
class DebugTrapCommand extends common_2.CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.DEBUG_TRAP;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
}
exports.DebugTrapCommand = DebugTrapCommand;
/**
 * Control onboard scripting.
 */
class ScriptingCommand extends common_2.CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.SCRIPTING;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
}
exports.ScriptingCommand = ScriptingCommand;
/**
 * Scripting command as NAV command with wait for completion.
 */
class NavScriptTimeCommand extends common_2.CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.NAV_SCRIPT_TIME;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * integer command number (0 to 255)
     */
    get cmd() {
        return this._param1;
    }
    set cmd(value) {
        this._param1 = value;
    }
    /**
     * timeout for operation in seconds. Zero means no timeout (0 to 255)
     *
     * @units s
     */
    get timeout() {
        return this._param2;
    }
    set timeout(value) {
        this._param2 = value;
    }
    /**
     * argument1.
     */
    get arg1() {
        return this._param3;
    }
    set arg1(value) {
        this._param3 = value;
    }
    /**
     * argument2.
     */
    get arg2() {
        return this._param4;
    }
    set arg2(value) {
        this._param4 = value;
    }
    /**
     * argument3.
     */
    get arg3() {
        return this._param5;
    }
    set arg3(value) {
        this._param5 = value;
    }
    /**
     * argument4.
     */
    get arg4() {
        return this._param6;
    }
    set arg4(value) {
        this._param6 = value;
    }
}
exports.NavScriptTimeCommand = NavScriptTimeCommand;
/**
 * Maintain an attitude for a specified time.
 */
class NavAttitudeTimeCommand extends common_2.CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.NAV_ATTITUDE_TIME;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Time to maintain specified attitude and climb rate
     *
     * @units s
     */
    get time() {
        return this._param1;
    }
    set time(value) {
        this._param1 = value;
    }
    /**
     * Roll angle in degrees (positive is lean right, negative is lean left)
     *
     * @units deg
     */
    get roll() {
        return this._param2;
    }
    set roll(value) {
        this._param2 = value;
    }
    /**
     * Pitch angle in degrees (positive is lean back, negative is lean forward)
     *
     * @units deg
     */
    get pitch() {
        return this._param3;
    }
    set pitch(value) {
        this._param3 = value;
    }
    /**
     * Yaw angle
     *
     * @units deg
     */
    get yaw() {
        return this._param4;
    }
    set yaw(value) {
        this._param4 = value;
    }
    /**
     * Climb rate
     *
     * @units m/s
     */
    get climb_rate() {
        return this._param5;
    }
    set climb_rate(value) {
        this._param5 = value;
    }
}
exports.NavAttitudeTimeCommand = NavAttitudeTimeCommand;
/**
 * Change flight speed at a given rate. This slews the vehicle at a controllable rate between it's
 * previous speed and the new one. (affects GUIDED only. Outside GUIDED, aircraft ignores these
 * commands. Designed for onboard companion-computer command-and-control, not normally operator/GCS
 * control.)
 */
class GuidedChangeSpeedCommand extends common_2.CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.GUIDED_CHANGE_SPEED;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Airspeed or groundspeed.
     */
    get speedType() {
        return this._param1;
    }
    set speedType(value) {
        this._param1 = value;
    }
    /**
     * Target Speed
     *
     * @units m/s
     */
    get speedTarget() {
        return this._param2;
    }
    set speedTarget(value) {
        this._param2 = value;
    }
    /**
     * Acceleration rate, 0 to take effect instantly
     *
     * @units m/s/s
     */
    get speedRateOfChange() {
        return this._param3;
    }
    set speedRateOfChange(value) {
        this._param3 = value;
    }
}
exports.GuidedChangeSpeedCommand = GuidedChangeSpeedCommand;
/**
 * Change target altitude at a given rate. This slews the vehicle at a controllable rate between it's
 * previous altitude and the new one. (affects GUIDED only. Outside GUIDED, aircraft ignores these
 * commands. Designed for onboard companion-computer command-and-control, not normally operator/GCS
 * control.)
 */
class GuidedChangeAltitudeCommand extends common_2.CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.GUIDED_CHANGE_ALTITUDE;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Rate of change, toward new altitude. 0 for maximum rate change. Positive numbers only, as negative
     * numbers will not converge on the new target alt.
     *
     * @units m/s/s
     * @min: 0
     */
    get altRateOfChange() {
        return this._param3;
    }
    set altRateOfChange(value) {
        this._param3 = value;
    }
    /**
     * Target Altitude
     *
     * @units m
     */
    get targetAlt() {
        return this._param7;
    }
    set targetAlt(value) {
        this._param7 = value;
    }
}
exports.GuidedChangeAltitudeCommand = GuidedChangeAltitudeCommand;
/**
 * Change to target heading at a given rate, overriding previous heading/s. This slews the vehicle at a
 * controllable rate between it's previous heading and the new one. (affects GUIDED only. Exiting
 * GUIDED returns aircraft to normal behaviour defined elsewhere. Designed for onboard
 * companion-computer command-and-control, not normally operator/GCS control.)
 */
class GuidedChangeHeadingCommand extends common_2.CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.GUIDED_CHANGE_HEADING;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * course-over-ground or raw vehicle heading.
     */
    get headingType() {
        return this._param1;
    }
    set headingType(value) {
        this._param1 = value;
    }
    /**
     * Target heading.
     *
     * @units deg
     * @min: 0
     * @max: 359.99
     */
    get headingTarget() {
        return this._param2;
    }
    set headingTarget(value) {
        this._param2 = value;
    }
    /**
     * Maximum centripetal accelearation, ie rate of change, toward new heading.
     *
     * @units m/s/s
     */
    get headingRateOfChange() {
        return this._param3;
    }
    set headingRateOfChange(value) {
        this._param3 = value;
    }
}
exports.GuidedChangeHeadingCommand = GuidedChangeHeadingCommand;
/**
 * Provide an external position estimate for use when dead-reckoning. This is meant to be used for
 * occasional position resets that may be provided by a external system such as a remote pilot using
 * landmarks over a video link.
 *
 * This command has location.
 */
class ExternalPositionEstimateCommand extends common_2.CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.EXTERNAL_POSITION_ESTIMATE;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Timestamp that this message was sent as a time in the transmitters time domain. The sender should
     * wrap this time back to zero based on required timing accuracy for the application and the
     * limitations of a 32 bit float. For example, wrapping at 10 hours would give approximately 1ms
     * accuracy. Recipient must handle time wrap in any timing jitter correction applied to this field.
     * Wrap rollover time should not be at not more than 250 seconds, which would give approximately 10
     * microsecond accuracy.
     *
     * @units s
     */
    get transmission_time() {
        return this._param1;
    }
    set transmission_time(value) {
        this._param1 = value;
    }
    /**
     * The time spent in processing the sensor data that is the basis for this position. The recipient can
     * use this to improve time alignment of the data. Set to zero if not known.
     *
     * @units s
     */
    get processing_time() {
        return this._param2;
    }
    set processing_time(value) {
        this._param2 = value;
    }
    /**
     * estimated one standard deviation accuracy of the measurement. Set to NaN if not known.
     */
    get accuracy() {
        return this._param3;
    }
    set accuracy(value) {
        this._param3 = value;
    }
    /**
     * Latitude
     */
    get latitude() {
        return this._param5;
    }
    set latitude(value) {
        this._param5 = value;
    }
    /**
     * Longitude
     */
    get longitude() {
        return this._param6;
    }
    set longitude(value) {
        this._param6 = value;
    }
    /**
     * Altitude, not used. Should be sent as NaN. May be supported in a future version of this message.
     *
     * @units m
     */
    get altitude() {
        return this._param7;
    }
    set altitude(value) {
        this._param7 = value;
    }
}
exports.ExternalPositionEstimateCommand = ExternalPositionEstimateCommand;
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
    11004: SecureCommand,
    11005: SecureCommandReply,
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
    11039: McuStatus,
    11040: EscTelemetry13To16,
    11041: EscTelemetry17To20,
    11042: EscTelemetry21To24,
    11043: EscTelemetry25To28,
    11044: EscTelemetry29To32,
};
exports.COMMANDS = {
    [MavCmd.DO_SET_RESUME_REPEAT_DIST]: DoSetResumeRepeatDistCommand,
    [MavCmd.DO_SPRAYER]: DoSprayerCommand,
    [MavCmd.DO_SEND_SCRIPT_MESSAGE]: DoSendScriptMessageCommand,
    [MavCmd.DO_AUX_FUNCTION]: DoAuxFunctionCommand,
    [MavCmd.NAV_ALTITUDE_WAIT]: NavAltitudeWaitCommand,
    [MavCmd.POWER_OFF_INITIATED]: PowerOffInitiatedCommand,
    [MavCmd.SOLO_BTN_FLY_CLICK]: SoloBtnFlyClickCommand,
    [MavCmd.SOLO_BTN_FLY_HOLD]: SoloBtnFlyHoldCommand,
    [MavCmd.SOLO_BTN_PAUSE_CLICK]: SoloBtnPauseClickCommand,
    [MavCmd.FIXED_MAG_CAL]: FixedMagCalCommand,
    [MavCmd.FIXED_MAG_CAL_FIELD]: FixedMagCalFieldCommand,
    [MavCmd.DO_START_MAG_CAL]: DoStartMagCalCommand,
    [MavCmd.DO_ACCEPT_MAG_CAL]: DoAcceptMagCalCommand,
    [MavCmd.DO_CANCEL_MAG_CAL]: DoCancelMagCalCommand,
    [MavCmd.ACCELCAL_VEHICLE_POS]: AccelcalVehiclePosCommand,
    [MavCmd.DO_SEND_BANNER]: DoSendBannerCommand,
    [MavCmd.SET_FACTORY_TEST_MODE]: SetFactoryTestModeCommand,
    [MavCmd.GIMBAL_RESET]: GimbalResetCommand,
    [MavCmd.GIMBAL_AXIS_CALIBRATION_STATUS]: GimbalAxisCalibrationStatusCommand,
    [MavCmd.GIMBAL_REQUEST_AXIS_CALIBRATION]: GimbalRequestAxisCalibrationCommand,
    [MavCmd.GIMBAL_FULL_RESET]: GimbalFullResetCommand,
    [MavCmd.FLASH_BOOTLOADER]: FlashBootloaderCommand,
    [MavCmd.BATTERY_RESET]: BatteryResetCommand,
    [MavCmd.DEBUG_TRAP]: DebugTrapCommand,
    [MavCmd.SCRIPTING]: ScriptingCommand,
    [MavCmd.NAV_SCRIPT_TIME]: NavScriptTimeCommand,
    [MavCmd.NAV_ATTITUDE_TIME]: NavAttitudeTimeCommand,
    [MavCmd.GUIDED_CHANGE_SPEED]: GuidedChangeSpeedCommand,
    [MavCmd.GUIDED_CHANGE_ALTITUDE]: GuidedChangeAltitudeCommand,
    [MavCmd.GUIDED_CHANGE_HEADING]: GuidedChangeHeadingCommand,
    [MavCmd.EXTERNAL_POSITION_ESTIMATE]: ExternalPositionEstimateCommand,
};
//# sourceMappingURL=ardupilotmega.js.map