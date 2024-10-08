import { int8_t, uint8_t, int16_t, uint16_t, int32_t, uint32_t, uint64_t, float } from './types';
import { MavLinkPacketRegistry, MavLinkPacketField, MavLinkData } from './mavlink';
import { MavMountMode, MavDistanceSensor, MavFrame, MavResult, MagCalStatus, MavLinkCommandRegistry } from './common';
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
 * MAV_CMD
 */
export declare enum MavCmd {
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
    'DO_SET_RESUME_REPEAT_DIST' = 215,
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
    'DO_SPRAYER' = 216,
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
    'DO_SEND_SCRIPT_MESSAGE' = 217,
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
    'DO_AUX_FUNCTION' = 218,
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
    'NAV_ALTITUDE_WAIT' = 83,
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
    'POWER_OFF_INITIATED' = 42000,
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
    'SOLO_BTN_FLY_CLICK' = 42001,
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
    'SOLO_BTN_FLY_HOLD' = 42002,
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
    'SOLO_BTN_PAUSE_CLICK' = 42003,
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
    'FIXED_MAG_CAL' = 42004,
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
    'FIXED_MAG_CAL_FIELD' = 42005,
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
    'DO_START_MAG_CAL' = 42424,
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
    'DO_ACCEPT_MAG_CAL' = 42425,
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
    'DO_CANCEL_MAG_CAL' = 42426,
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
    'ACCELCAL_VEHICLE_POS' = 42429,
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
    'DO_SEND_BANNER' = 42428,
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
    'SET_FACTORY_TEST_MODE' = 42427,
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
    'GIMBAL_RESET' = 42501,
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
    'GIMBAL_AXIS_CALIBRATION_STATUS' = 42502,
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
    'GIMBAL_REQUEST_AXIS_CALIBRATION' = 42503,
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
    'GIMBAL_FULL_RESET' = 42505,
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
    'FLASH_BOOTLOADER' = 42650,
    /**
     * Reset battery capacity for batteries that accumulate consumed battery via integration.
     * @param1 battery mask Bitmask of batteries to reset. Least significant bit is for the first battery.
     * @param2 percentage (min: 0, max: 100, increment: 1) Battery percentage remaining to set.
     */
    'BATTERY_RESET' = 42651,
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
    'DEBUG_TRAP' = 42700,
    /**
     * Control onboard scripting.
     * @param1 Scripting command to execute
     */
    'SCRIPTING' = 42701,
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
    'NAV_SCRIPT_TIME' = 42702,
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
    'NAV_ATTITUDE_TIME' = 42703,
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
    'GUIDED_CHANGE_SPEED' = 43000,
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
    'GUIDED_CHANGE_ALTITUDE' = 43001,
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
    'GUIDED_CHANGE_HEADING' = 43002,
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
    'EXTERNAL_POSITION_ESTIMATE' = 43003
}
/**
 * SCRIPTING_CMD
 */
export declare enum ScriptingCmd {
    /**
     * Start a REPL session.
     */
    'REPL_START' = 0,
    /**
     * End a REPL session.
     */
    'REPL_STOP' = 1
}
/**
 * SECURE_COMMAND_OP
 */
export declare enum SecureCommandOp {
    /**
     * Get an 8 byte session key which is used for remote secure updates which operate on flight controller
     * data such as bootloader public keys. Return data will be 8 bytes on success. The session key remains
     * valid until either the flight controller reboots or another SECURE_COMMAND_GET_SESSION_KEY is run.
     */
    'GET_SESSION_KEY' = 0,
    /**
     * Get an 8 byte session key which is used for remote secure updates which operate on RemoteID module
     * data. Return data will be 8 bytes on success. The session key remains valid until either the remote
     * ID module reboots or another SECURE_COMMAND_GET_REMOTEID_SESSION_KEY is run.
     */
    'GET_REMOTEID_SESSION_KEY' = 1,
    /**
     * Remove range of public keys from the bootloader. Command data consists of two bytes, first byte if
     * index of first public key to remove. Second byte is the number of keys to remove. If all keys are
     * removed then secure boot is disabled and insecure firmware can be loaded.
     */
    'REMOVE_PUBLIC_KEYS' = 2,
    /**
     * Get current public keys from the bootloader. Command data consists of two bytes, first byte is index
     * of first public key to fetch, 2nd byte is number of keys to fetch. Total data needs to fit in data
     * portion of reply (max 6 keys for 32 byte keys). Reply data has the index of the first key in the
     * first byte, followed by the keys. Returned keys may be less than the number of keys requested if
     * there are less keys installed than requested.
     */
    'GET_PUBLIC_KEYS' = 3,
    /**
     * Set current public keys in the bootloader. Data consists of a one byte public key index followed by
     * the public keys. With 32 byte keys this allows for up to 6 keys to be set in one request. Keys
     * outside of the range that is being set will remain unchanged.
     */
    'SET_PUBLIC_KEYS' = 4,
    /**
     * Get config data for remote ID module. This command should be sent to the component ID of the flight
     * controller which will forward it to the RemoteID module either over mavlink or DroneCAN. Data format
     * is specific to the RemoteID implementation, see RemoteID firmware documentation for details.
     */
    'GET_REMOTEID_CONFIG' = 5,
    /**
     * Set config data for remote ID module. This command should be sent to the component ID of the flight
     * controller which will forward it to the RemoteID module either over mavlink or DroneCAN. Data format
     * is specific to the RemoteID implementation, see RemoteID firmware documentation for details.
     */
    'SET_REMOTEID_CONFIG' = 6,
    /**
     * Flash bootloader from local storage. Data is the filename to use for the bootloader. This is
     * intended to be used with MAVFtp to upload a new bootloader to a microSD before flashing.
     */
    'FLASH_BOOTLOADER' = 7
}
/**
 * LIMITS_STATE
 */
export declare enum LimitsState {
    /**
     * Pre-initialization.
     */
    'INIT' = 0,
    /**
     * Disabled.
     */
    'DISABLED' = 1,
    /**
     * Checking limits.
     */
    'ENABLED' = 2,
    /**
     * A limit has been breached.
     */
    'TRIGGERED' = 3,
    /**
     * Taking action e.g. Return/RTL.
     */
    'RECOVERING' = 4,
    /**
     * We're no longer in breach of a limit.
     */
    'RECOVERED' = 5
}
/**
 * LIMIT_MODULE
 */
export declare enum LimitModule {
    /**
     * Pre-initialization.
     */
    'GPSLOCK' = 1,
    /**
     * Disabled.
     */
    'GEOFENCE' = 2,
    /**
     * Checking limits.
     */
    'ALTITUDE' = 4
}
/**
 * Flags in RALLY_POINT message.
 */
export declare enum RallyFlags {
    /**
     * Flag set when requiring favorable winds for landing.
     */
    'FAVORABLE_WIND' = 1,
    /**
     * Flag set when plane is to immediately descend to break altitude and land without GCS intervention.
     * Flag not set when plane is to loiter at Rally point until commanded to land.
     */
    'LAND_IMMEDIATELY' = 2,
    /**
     * True if the following altitude frame value is valid.
     */
    'VALID' = 4,
    /**
     * 2 bit value representing altitude frame. 0: absolute, 1: relative home, 2: relative origin, 3:
     * relative terrain
     */
    'ALT_FRAME' = 24
}
/**
 * CAMERA_STATUS_TYPES
 */
export declare enum CameraStatusTypes {
    /**
     * Camera heartbeat, announce camera component ID at 1Hz.
     */
    'HEARTBEAT' = 0,
    /**
     * Camera image triggered.
     */
    'TRIGGER' = 1,
    /**
     * Camera connection lost.
     */
    'DISCONNECT' = 2,
    /**
     * Camera unknown error.
     */
    'ERROR' = 3,
    /**
     * Camera battery low. Parameter p1 shows reported voltage.
     */
    'LOWBATT' = 4,
    /**
     * Camera storage low. Parameter p1 shows reported shots remaining.
     */
    'LOWSTORE' = 5,
    /**
     * Camera storage low. Parameter p1 shows reported video minutes remaining.
     */
    'LOWSTOREV' = 6
}
/**
 * CAMERA_FEEDBACK_FLAGS
 */
export declare enum CameraFeedbackFlags {
    /**
     * Shooting photos, not video.
     */
    'PHOTO' = 0,
    /**
     * Shooting video, not stills.
     */
    'VIDEO' = 1,
    /**
     * Unable to achieve requested exposure (e.g. shutter speed too low).
     */
    'BADEXPOSURE' = 2,
    /**
     * Closed loop feedback from camera, we know for sure it has successfully taken a picture.
     */
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
    /**
     * Gimbal is powered on but has not started initializing yet.
     */
    'UNINITIALIZED' = 0,
    /**
     * Gimbal is currently running calibration on the pitch axis.
     */
    'CALIBRATING_PITCH' = 1,
    /**
     * Gimbal is currently running calibration on the roll axis.
     */
    'CALIBRATING_ROLL' = 2,
    /**
     * Gimbal is currently running calibration on the yaw axis.
     */
    'CALIBRATING_YAW' = 3,
    /**
     * Gimbal has finished calibrating and initializing, but is relaxed pending reception of first rate
     * command from copter.
     */
    'INITIALIZED' = 4,
    /**
     * Gimbal is actively stabilizing.
     */
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
    /**
     * Gimbal yaw axis.
     */
    'YAW' = 0,
    /**
     * Gimbal pitch axis.
     */
    'PITCH' = 1,
    /**
     * Gimbal roll axis.
     */
    'ROLL' = 2
}
/**
 * GIMBAL_AXIS_CALIBRATION_STATUS
 */
export declare enum GimbalAxisCalibrationStatus {
    /**
     * Axis calibration is in progress.
     */
    'IN_PROGRESS' = 0,
    /**
     * Axis calibration succeeded.
     */
    'SUCCEEDED' = 1,
    /**
     * Axis calibration failed.
     */
    'FAILED' = 2
}
/**
 * GIMBAL_AXIS_CALIBRATION_REQUIRED
 */
export declare enum GimbalAxisCalibrationRequired {
    /**
     * Whether or not this axis requires calibration is unknown at this time.
     */
    'UNKNOWN' = 0,
    /**
     * This axis requires calibration.
     */
    'TRUE' = 1,
    /**
     * This axis does not require calibration.
     */
    'FALSE' = 2
}
/**
 * GOPRO_HEARTBEAT_STATUS
 */
export declare enum GoproHeartbeatStatus {
    /**
     * No GoPro connected.
     */
    'DISCONNECTED' = 0,
    /**
     * The detected GoPro is not HeroBus compatible.
     */
    'INCOMPATIBLE' = 1,
    /**
     * A HeroBus compatible GoPro is connected.
     */
    'CONNECTED' = 2,
    /**
     * An unrecoverable error was encountered with the connected GoPro, it may require a power cycle.
     */
    'ERROR' = 3
}
/**
 * GOPRO_HEARTBEAT_FLAGS
 */
export declare enum GoproHeartbeatFlags {
    /**
     * GoPro is currently recording.
     */
    'RECORDING' = 1
}
/**
 * GOPRO_REQUEST_STATUS
 */
export declare enum GoproRequestStatus {
    /**
     * The write message with ID indicated succeeded.
     */
    'SUCCESS' = 0,
    /**
     * The write message with ID indicated failed.
     */
    'FAILED' = 1
}
/**
 * GOPRO_COMMAND
 */
export declare enum GoproCommand {
    /**
     * (Get/Set).
     */
    'POWER' = 0,
    /**
     * (Get/Set).
     */
    'CAPTURE_MODE' = 1,
    /**
     * (___/Set).
     */
    'SHUTTER' = 2,
    /**
     * (Get/___).
     */
    'BATTERY' = 3,
    /**
     * (Get/___).
     */
    'MODEL' = 4,
    /**
     * (Get/Set).
     */
    'VIDEO_SETTINGS' = 5,
    /**
     * (Get/Set).
     */
    'LOW_LIGHT' = 6,
    /**
     * (Get/Set).
     */
    'PHOTO_RESOLUTION' = 7,
    /**
     * (Get/Set).
     */
    'PHOTO_BURST_RATE' = 8,
    /**
     * (Get/Set).
     */
    'PROTUNE' = 9,
    /**
     * (Get/Set) Hero 3+ Only.
     */
    'PROTUNE_WHITE_BALANCE' = 10,
    /**
     * (Get/Set) Hero 3+ Only.
     */
    'PROTUNE_COLOUR' = 11,
    /**
     * (Get/Set) Hero 3+ Only.
     */
    'PROTUNE_GAIN' = 12,
    /**
     * (Get/Set) Hero 3+ Only.
     */
    'PROTUNE_SHARPNESS' = 13,
    /**
     * (Get/Set) Hero 3+ Only.
     */
    'PROTUNE_EXPOSURE' = 14,
    /**
     * (Get/Set).
     */
    'TIME' = 15,
    /**
     * (Get/Set).
     */
    'CHARGING' = 16
}
/**
 * GOPRO_CAPTURE_MODE
 */
export declare enum GoproCaptureMode {
    /**
     * Video mode.
     */
    'VIDEO' = 0,
    /**
     * Photo mode.
     */
    'PHOTO' = 1,
    /**
     * Burst mode, Hero 3+ only.
     */
    'BURST' = 2,
    /**
     * Time lapse mode, Hero 3+ only.
     */
    'TIME_LAPSE' = 3,
    /**
     * Multi shot mode, Hero 4 only.
     */
    'MULTI_SHOT' = 4,
    /**
     * Playback mode, Hero 4 only, silver only except when LCD or HDMI is connected to black.
     */
    'PLAYBACK' = 5,
    /**
     * Playback mode, Hero 4 only.
     */
    'SETUP' = 6,
    /**
     * Mode not yet known.
     */
    'UNKNOWN' = 255
}
/**
 * GOPRO_RESOLUTION
 */
export declare enum GoproResolution {
    /**
     * 848 x 480 (480p).
     */
    'GOPRO_RESOLUTION_480p' = 0,
    /**
     * 1280 x 720 (720p).
     */
    'GOPRO_RESOLUTION_720p' = 1,
    /**
     * 1280 x 960 (960p).
     */
    'GOPRO_RESOLUTION_960p' = 2,
    /**
     * 1920 x 1080 (1080p).
     */
    'GOPRO_RESOLUTION_1080p' = 3,
    /**
     * 1920 x 1440 (1440p).
     */
    'GOPRO_RESOLUTION_1440p' = 4,
    /**
     * 2704 x 1440 (2.7k-17:9).
     */
    'GOPRO_RESOLUTION_2_7k_17_9' = 5,
    /**
     * 2704 x 1524 (2.7k-16:9).
     */
    'GOPRO_RESOLUTION_2_7k_16_9' = 6,
    /**
     * 2704 x 2028 (2.7k-4:3).
     */
    'GOPRO_RESOLUTION_2_7k_4_3' = 7,
    /**
     * 3840 x 2160 (4k-16:9).
     */
    'GOPRO_RESOLUTION_4k_16_9' = 8,
    /**
     * 4096 x 2160 (4k-17:9).
     */
    'GOPRO_RESOLUTION_4k_17_9' = 9,
    /**
     * 1280 x 720 (720p-SuperView).
     */
    'GOPRO_RESOLUTION_720p_SUPERVIEW' = 10,
    /**
     * 1920 x 1080 (1080p-SuperView).
     */
    'GOPRO_RESOLUTION_1080p_SUPERVIEW' = 11,
    /**
     * 2704 x 1520 (2.7k-SuperView).
     */
    'GOPRO_RESOLUTION_2_7k_SUPERVIEW' = 12,
    /**
     * 3840 x 2160 (4k-SuperView).
     */
    'GOPRO_RESOLUTION_4k_SUPERVIEW' = 13
}
/**
 * GOPRO_FRAME_RATE
 */
export declare enum GoproFrameRate {
    /**
     * 12 FPS.
     */
    'GOPRO_FRAME_RATE_12' = 0,
    /**
     * 15 FPS.
     */
    'GOPRO_FRAME_RATE_15' = 1,
    /**
     * 24 FPS.
     */
    'GOPRO_FRAME_RATE_24' = 2,
    /**
     * 25 FPS.
     */
    'GOPRO_FRAME_RATE_25' = 3,
    /**
     * 30 FPS.
     */
    'GOPRO_FRAME_RATE_30' = 4,
    /**
     * 48 FPS.
     */
    'GOPRO_FRAME_RATE_48' = 5,
    /**
     * 50 FPS.
     */
    'GOPRO_FRAME_RATE_50' = 6,
    /**
     * 60 FPS.
     */
    'GOPRO_FRAME_RATE_60' = 7,
    /**
     * 80 FPS.
     */
    'GOPRO_FRAME_RATE_80' = 8,
    /**
     * 90 FPS.
     */
    'GOPRO_FRAME_RATE_90' = 9,
    /**
     * 100 FPS.
     */
    'GOPRO_FRAME_RATE_100' = 10,
    /**
     * 120 FPS.
     */
    'GOPRO_FRAME_RATE_120' = 11,
    /**
     * 240 FPS.
     */
    'GOPRO_FRAME_RATE_240' = 12,
    /**
     * 12.5 FPS.
     */
    'GOPRO_FRAME_RATE_12_5' = 13
}
/**
 * GOPRO_FIELD_OF_VIEW
 */
export declare enum GoproFieldOfView {
    /**
     * 0x00: Wide.
     */
    'WIDE' = 0,
    /**
     * 0x01: Medium.
     */
    'MEDIUM' = 1,
    /**
     * 0x02: Narrow.
     */
    'NARROW' = 2
}
/**
 * GOPRO_VIDEO_SETTINGS_FLAGS
 */
export declare enum GoproVideoSettingsFlags {
    /**
     * 0=NTSC, 1=PAL.
     */
    'MODE' = 1
}
/**
 * GOPRO_PHOTO_RESOLUTION
 */
export declare enum GoproPhotoResolution {
    /**
     * 5MP Medium.
     */
    'GOPRO_PHOTO_RESOLUTION_5MP_MEDIUM' = 0,
    /**
     * 7MP Medium.
     */
    'GOPRO_PHOTO_RESOLUTION_7MP_MEDIUM' = 1,
    /**
     * 7MP Wide.
     */
    'GOPRO_PHOTO_RESOLUTION_7MP_WIDE' = 2,
    /**
     * 10MP Wide.
     */
    'GOPRO_PHOTO_RESOLUTION_10MP_WIDE' = 3,
    /**
     * 12MP Wide.
     */
    'GOPRO_PHOTO_RESOLUTION_12MP_WIDE' = 4
}
/**
 * GOPRO_PROTUNE_WHITE_BALANCE
 */
export declare enum GoproProtuneWhiteBalance {
    /**
     * Auto.
     */
    'AUTO' = 0,
    /**
     * 3000K.
     */
    'GOPRO_PROTUNE_WHITE_BALANCE_3000K' = 1,
    /**
     * 5500K.
     */
    'GOPRO_PROTUNE_WHITE_BALANCE_5500K' = 2,
    /**
     * 6500K.
     */
    'GOPRO_PROTUNE_WHITE_BALANCE_6500K' = 3,
    /**
     * Camera Raw.
     */
    'RAW' = 4
}
/**
 * GOPRO_PROTUNE_COLOUR
 */
export declare enum GoproProtuneColour {
    /**
     * Auto.
     */
    'STANDARD' = 0,
    /**
     * Neutral.
     */
    'NEUTRAL' = 1
}
/**
 * GOPRO_PROTUNE_GAIN
 */
export declare enum GoproProtuneGain {
    /**
     * ISO 400.
     */
    'GOPRO_PROTUNE_GAIN_400' = 0,
    /**
     * ISO 800 (Only Hero 4).
     */
    'GOPRO_PROTUNE_GAIN_800' = 1,
    /**
     * ISO 1600.
     */
    'GOPRO_PROTUNE_GAIN_1600' = 2,
    /**
     * ISO 3200 (Only Hero 4).
     */
    'GOPRO_PROTUNE_GAIN_3200' = 3,
    /**
     * ISO 6400.
     */
    'GOPRO_PROTUNE_GAIN_6400' = 4
}
/**
 * GOPRO_PROTUNE_SHARPNESS
 */
export declare enum GoproProtuneSharpness {
    /**
     * Low Sharpness.
     */
    'LOW' = 0,
    /**
     * Medium Sharpness.
     */
    'MEDIUM' = 1,
    /**
     * High Sharpness.
     */
    'HIGH' = 2
}
/**
 * GOPRO_PROTUNE_EXPOSURE
 */
export declare enum GoproProtuneExposure {
    /**
     * -5.0 EV (Hero 3+ Only).
     */
    'NEG_5_0' = 0,
    /**
     * -4.5 EV (Hero 3+ Only).
     */
    'NEG_4_5' = 1,
    /**
     * -4.0 EV (Hero 3+ Only).
     */
    'NEG_4_0' = 2,
    /**
     * -3.5 EV (Hero 3+ Only).
     */
    'NEG_3_5' = 3,
    /**
     * -3.0 EV (Hero 3+ Only).
     */
    'NEG_3_0' = 4,
    /**
     * -2.5 EV (Hero 3+ Only).
     */
    'NEG_2_5' = 5,
    /**
     * -2.0 EV.
     */
    'NEG_2_0' = 6,
    /**
     * -1.5 EV.
     */
    'NEG_1_5' = 7,
    /**
     * -1.0 EV.
     */
    'NEG_1_0' = 8,
    /**
     * -0.5 EV.
     */
    'NEG_0_5' = 9,
    /**
     * 0.0 EV.
     */
    'ZERO' = 10,
    /**
     * +0.5 EV.
     */
    'POS_0_5' = 11,
    /**
     * +1.0 EV.
     */
    'POS_1_0' = 12,
    /**
     * +1.5 EV.
     */
    'POS_1_5' = 13,
    /**
     * +2.0 EV.
     */
    'POS_2_0' = 14,
    /**
     * +2.5 EV (Hero 3+ Only).
     */
    'POS_2_5' = 15,
    /**
     * +3.0 EV (Hero 3+ Only).
     */
    'POS_3_0' = 16,
    /**
     * +3.5 EV (Hero 3+ Only).
     */
    'POS_3_5' = 17,
    /**
     * +4.0 EV (Hero 3+ Only).
     */
    'POS_4_0' = 18,
    /**
     * +4.5 EV (Hero 3+ Only).
     */
    'POS_4_5' = 19,
    /**
     * +5.0 EV (Hero 3+ Only).
     */
    'POS_5_0' = 20
}
/**
 * GOPRO_CHARGING
 */
export declare enum GoproCharging {
    /**
     * Charging disabled.
     */
    'DISABLED' = 0,
    /**
     * Charging enabled.
     */
    'ENABLED' = 1
}
/**
 * GOPRO_MODEL
 */
export declare enum GoproModel {
    /**
     * Unknown gopro model.
     */
    'UNKNOWN' = 0,
    /**
     * Hero 3+ Silver (HeroBus not supported by GoPro).
     */
    'HERO_3_PLUS_SILVER' = 1,
    /**
     * Hero 3+ Black.
     */
    'HERO_3_PLUS_BLACK' = 2,
    /**
     * Hero 4 Silver.
     */
    'HERO_4_SILVER' = 3,
    /**
     * Hero 4 Black.
     */
    'HERO_4_BLACK' = 4
}
/**
 * GOPRO_BURST_RATE
 */
export declare enum GoproBurstRate {
    /**
     * 3 Shots / 1 Second.
     */
    'GOPRO_BURST_RATE_3_IN_1_SECOND' = 0,
    /**
     * 5 Shots / 1 Second.
     */
    'GOPRO_BURST_RATE_5_IN_1_SECOND' = 1,
    /**
     * 10 Shots / 1 Second.
     */
    'GOPRO_BURST_RATE_10_IN_1_SECOND' = 2,
    /**
     * 10 Shots / 2 Second.
     */
    'GOPRO_BURST_RATE_10_IN_2_SECOND' = 3,
    /**
     * 10 Shots / 3 Second (Hero 4 Only).
     */
    'GOPRO_BURST_RATE_10_IN_3_SECOND' = 4,
    /**
     * 30 Shots / 1 Second.
     */
    'GOPRO_BURST_RATE_30_IN_1_SECOND' = 5,
    /**
     * 30 Shots / 2 Second.
     */
    'GOPRO_BURST_RATE_30_IN_2_SECOND' = 6,
    /**
     * 30 Shots / 3 Second.
     */
    'GOPRO_BURST_RATE_30_IN_3_SECOND' = 7,
    /**
     * 30 Shots / 6 Second.
     */
    'GOPRO_BURST_RATE_30_IN_6_SECOND' = 8
}
/**
 * MAV_CMD_DO_AUX_FUNCTION_SWITCH_LEVEL
 */
export declare enum MavCmdDoAuxFunctionSwitchLevel {
    /**
     * Switch Low.
     */
    'LOW' = 0,
    /**
     * Switch Middle.
     */
    'MIDDLE' = 1,
    /**
     * Switch High.
     */
    'HIGH' = 2
}
/**
 * LED_CONTROL_PATTERN
 */
export declare enum LedControlPattern {
    /**
     * LED patterns off (return control to regular vehicle control).
     */
    'OFF' = 0,
    /**
     * LEDs show pattern during firmware update.
     */
    'FIRMWAREUPDATE' = 1,
    /**
     * Custom Pattern using custom bytes fields.
     */
    'CUSTOM' = 255
}
/**
 * Flags in EKF_STATUS message.
 */
export declare enum EkfStatusFlags {
    /**
     * Set if EKF's attitude estimate is good.
     */
    'ATTITUDE' = 1,
    /**
     * Set if EKF's horizontal velocity estimate is good.
     */
    'VELOCITY_HORIZ' = 2,
    /**
     * Set if EKF's vertical velocity estimate is good.
     */
    'VELOCITY_VERT' = 4,
    /**
     * Set if EKF's horizontal position (relative) estimate is good.
     */
    'POS_HORIZ_REL' = 8,
    /**
     * Set if EKF's horizontal position (absolute) estimate is good.
     */
    'POS_HORIZ_ABS' = 16,
    /**
     * Set if EKF's vertical position (absolute) estimate is good.
     */
    'POS_VERT_ABS' = 32,
    /**
     * Set if EKF's vertical position (above ground) estimate is good.
     */
    'POS_VERT_AGL' = 64,
    /**
     * EKF is in constant position mode and does not know it's absolute or relative position.
     */
    'CONST_POS_MODE' = 128,
    /**
     * Set if EKF's predicted horizontal position (relative) estimate is good.
     */
    'PRED_POS_HORIZ_REL' = 256,
    /**
     * Set if EKF's predicted horizontal position (absolute) estimate is good.
     */
    'PRED_POS_HORIZ_ABS' = 512,
    /**
     * Set if EKF has never been healthy.
     */
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
    /**
     * UAV to stop sending DataFlash blocks.
     */
    'STOP' = 2147483645,
    /**
     * UAV to start sending DataFlash blocks.
     */
    'START' = 2147483646
}
/**
 * Possible remote log data block statuses.
 */
export declare enum MavRemoteLogDataBlockStatuses {
    /**
     * This block has NOT been received.
     */
    'NACK' = 0,
    /**
     * This block has been received.
     */
    'ACK' = 1
}
/**
 * Bus types for device operations.
 */
export declare enum DeviceOpBustype {
    /**
     * I2C Device operation.
     */
    'I2C' = 0,
    /**
     * SPI Device operation.
     */
    'SPI' = 1
}
/**
 * Deepstall flight stage.
 */
export declare enum DeepstallStage {
    /**
     * Flying to the landing point.
     */
    'FLY_TO_LANDING' = 0,
    /**
     * Building an estimate of the wind.
     */
    'ESTIMATE_WIND' = 1,
    /**
     * Waiting to breakout of the loiter to fly the approach.
     */
    'WAIT_FOR_BREAKOUT' = 2,
    /**
     * Flying to the first arc point to turn around to the landing point.
     */
    'FLY_TO_ARC' = 3,
    /**
     * Turning around back to the deepstall landing point.
     */
    'ARC' = 4,
    /**
     * Approaching the landing point.
     */
    'APPROACH' = 5,
    /**
     * Stalling and steering towards the land point.
     */
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
 *
 * @deprecated since 2022-02, replaced by MAG_CAL_REPORT, Accel Parameters, and Gyro Parameters
 */
export declare class SensorOffsets extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    /**
     * Mount operating mode.
     */
    mountMode: MavMountMode;
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
 * Send a secure command. Data should be signed with a private key corresponding with a public key
 * known to the recipient. Signature should be over the concatenation of the sequence number
 * (little-endian format), the operation (little-endian format) the data and the session key. For
 * SECURE_COMMAND_GET_SESSION_KEY the session key should be zero length. The data array consists of the
 * data followed by the signature. The sum of the data_length and the sig_length cannot be more than
 * 220. The format of the data is command specific.
 */
export declare class SecureCommand extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    constructor();
    /**
     * System ID.
     */
    targetSystem: uint8_t;
    /**
     * Component ID.
     */
    targetComponent: uint8_t;
    /**
     * Sequence ID for tagging reply.
     */
    sequence: uint32_t;
    /**
     * Operation being requested.
     */
    operation: SecureCommandOp;
    /**
     * Data length.
     */
    dataLength: uint8_t;
    /**
     * Signature length.
     */
    sigLength: uint8_t;
    /**
     * Signed data.
     */
    data: uint8_t[];
}
/**
 * Reply from secure command.
 */
export declare class SecureCommandReply extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    constructor();
    /**
     * Sequence ID from request.
     */
    sequence: uint32_t;
    /**
     * Operation that was requested.
     */
    operation: SecureCommandOp;
    /**
     * Result of command.
     */
    result: MavResult;
    /**
     * Data length.
     */
    dataLength: uint8_t;
    /**
     * Reply data.
     */
    data: uint8_t[];
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
/**
 * The MCU status, giving MCU temperature and voltage. The min and max voltages are to allow for
 * detecting power supply instability.
 */
export declare class McuStatus extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    constructor();
    /**
     * MCU instance
     */
    id: uint8_t;
    /**
     * MCU Internal temperature
     * Units: cdegC
     */
    MCUTemperature: int16_t;
    /**
     * MCU voltage
     * Units: mV
     */
    MCUVoltage: uint16_t;
    /**
     * MCU voltage minimum
     * Units: mV
     */
    MCUVoltageMin: uint16_t;
    /**
     * MCU voltage maximum
     * Units: mV
     */
    MCUVoltageMax: uint16_t;
}
/**
 * ESC Telemetry Data for ESCs 13 to 16, matching data sent by BLHeli ESCs.
 */
export declare class EscTelemetry13To16 extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    constructor();
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
 * ESC Telemetry Data for ESCs 17 to 20, matching data sent by BLHeli ESCs.
 */
export declare class EscTelemetry17To20 extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    constructor();
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
 * ESC Telemetry Data for ESCs 21 to 24, matching data sent by BLHeli ESCs.
 */
export declare class EscTelemetry21To24 extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    constructor();
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
 * ESC Telemetry Data for ESCs 25 to 28, matching data sent by BLHeli ESCs.
 */
export declare class EscTelemetry25To28 extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    constructor();
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
 * ESC Telemetry Data for ESCs 29 to 32, matching data sent by BLHeli ESCs.
 */
export declare class EscTelemetry29To32 extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    constructor();
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
import { CommandLong } from './common';
/**
 * Set the distance to be repeated on mission resume
 */
export declare class DoSetResumeRepeatDistCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Distance.
     *
     * @units m
     */
    get distance(): number;
    set distance(value: number);
}
/**
 * Control attached liquid sprayer
 */
export declare class DoSprayerCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * 0: disable sprayer. 1: enable sprayer.
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get sprayerEnable(): number;
    set sprayerEnable(value: number);
}
/**
 * Pass instructions onto scripting, a script should be checking for a new command
 */
export declare class DoSendScriptMessageCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * uint16 ID value to be passed to scripting
     *
     * @min: 0
     * @max: 65535
     * @increment: 1
     */
    get id(): number;
    set id(value: number);
    /**
     * float value to be passed to scripting
     */
    get param1(): number;
    set param1(value: number);
    /**
     * float value to be passed to scripting
     */
    get param2(): number;
    set param2(value: number);
    /**
     * float value to be passed to scripting
     */
    get param3(): number;
    set param3(value: number);
}
/**
 * Execute auxiliary function
 */
export declare class DoAuxFunctionCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Auxiliary Function.
     */
    get auxiliaryfunction(): number;
    set auxiliaryfunction(value: number);
    /**
     * Switch Level.
     */
    get switchposition(): number;
    set switchposition(value: number);
}
/**
 * Mission command to wait for an altitude or downwards vertical speed. This is meant for high altitude
 * balloon launches, allowing the aircraft to be idle until either an altitude is reached or a negative
 * vertical speed is reached (indicating early balloon burst). The wiggle time is how often to wiggle
 * the control surfaces to prevent them seizing up.
 */
export declare class NavAltitudeWaitCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Altitude.
     *
     * @units m
     */
    get altitude(): number;
    set altitude(value: number);
    /**
     * Descent speed.
     *
     * @units m/s
     */
    get descentSpeed(): number;
    set descentSpeed(value: number);
    /**
     * How long to wiggle the control surfaces to prevent them seizing up.
     *
     * @units s
     */
    get wiggleTime(): number;
    set wiggleTime(value: number);
}
/**
 * A system wide power-off event has been initiated.
 */
export declare class PowerOffInitiatedCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
}
/**
 * FLY button has been clicked.
 */
export declare class SoloBtnFlyClickCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
}
/**
 * FLY button has been held for 1.5 seconds.
 */
export declare class SoloBtnFlyHoldCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Takeoff altitude.
     *
     * @units m
     */
    get takeoffAltitude(): number;
    set takeoffAltitude(value: number);
}
/**
 * PAUSE button has been clicked.
 */
export declare class SoloBtnPauseClickCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * 1 if Solo is in a shot mode, 0 otherwise.
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get shotMode(): number;
    set shotMode(value: number);
}
/**
 * Magnetometer calibration based on fixed position in earth field given by inclination, declination
 * and intensity.
 */
export declare class FixedMagCalCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Magnetic declination.
     *
     * @units deg
     */
    get declination(): number;
    set declination(value: number);
    /**
     * Magnetic inclination.
     *
     * @units deg
     */
    get inclination(): number;
    set inclination(value: number);
    /**
     * Magnetic intensity.
     *
     * @units mgauss
     */
    get intensity(): number;
    set intensity(value: number);
    /**
     * Yaw.
     *
     * @units deg
     */
    get yaw(): number;
    set yaw(value: number);
}
/**
 * Magnetometer calibration based on fixed expected field values.
 */
export declare class FixedMagCalFieldCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Field strength X.
     *
     * @units mgauss
     */
    get fieldX(): number;
    set fieldX(value: number);
    /**
     * Field strength Y.
     *
     * @units mgauss
     */
    get fieldY(): number;
    set fieldY(value: number);
    /**
     * Field strength Z.
     *
     * @units mgauss
     */
    get fieldZ(): number;
    set fieldZ(value: number);
}
/**
 * Initiate a magnetometer calibration.
 */
export declare class DoStartMagCalCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Bitmask of magnetometers to calibrate. Use 0 to calibrate all sensors that can be started (sensors
     * may not start if disabled, unhealthy, etc.). The command will NACK if calibration does not start for
     * a sensor explicitly specified by the bitmask.
     *
     * @min: 0
     * @max: 255
     * @increment: 1
     */
    get magnetometersBitmask(): number;
    set magnetometersBitmask(value: number);
    /**
     * Automatically retry on failure (0=no retry, 1=retry).
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get retryOnFailure(): number;
    set retryOnFailure(value: number);
    /**
     * Save without user input (0=require input, 1=autosave).
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get autosave(): number;
    set autosave(value: number);
    /**
     * Delay.
     *
     * @units s
     */
    get delay(): number;
    set delay(value: number);
    /**
     * Autoreboot (0=user reboot, 1=autoreboot).
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get autoreboot(): number;
    set autoreboot(value: number);
}
/**
 * Accept a magnetometer calibration.
 */
export declare class DoAcceptMagCalCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Bitmask of magnetometers that calibration is accepted (0 means all).
     *
     * @min: 0
     * @max: 255
     * @increment: 1
     */
    get magnetometersBitmask(): number;
    set magnetometersBitmask(value: number);
}
/**
 * Cancel a running magnetometer calibration.
 */
export declare class DoCancelMagCalCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Bitmask of magnetometers to cancel a running calibration (0 means all).
     *
     * @min: 0
     * @max: 255
     * @increment: 1
     */
    get magnetometersBitmask(): number;
    set magnetometersBitmask(value: number);
}
/**
 * Used when doing accelerometer calibration. When sent to the GCS tells it what position to put the
 * vehicle in. When sent to the vehicle says what position the vehicle is in.
 */
export declare class AccelcalVehiclePosCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Position.
     */
    get position(): number;
    set position(value: number);
}
/**
 * Reply with the version banner.
 */
export declare class DoSendBannerCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
}
/**
 * Command autopilot to get into factory test/diagnostic mode.
 */
export declare class SetFactoryTestModeCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * 0: activate test mode, 1: exit test mode.
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get testMode(): number;
    set testMode(value: number);
}
/**
 * Causes the gimbal to reset and boot as if it was just powered on.
 */
export declare class GimbalResetCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
}
/**
 * Reports progress and success or failure of gimbal axis calibration procedure.
 */
export declare class GimbalAxisCalibrationStatusCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Gimbal axis we're reporting calibration progress for.
     */
    get axis(): number;
    set axis(value: number);
    /**
     * Current calibration progress for this axis.
     *
     * @units %
     * @min: 0
     * @max: 100
     */
    get progress(): number;
    set progress(value: number);
    /**
     * Status of the calibration.
     */
    get status(): number;
    set status(value: number);
}
/**
 * Starts commutation calibration on the gimbal.
 */
export declare class GimbalRequestAxisCalibrationCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
}
/**
 * Erases gimbal application and parameters.
 */
export declare class GimbalFullResetCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
}
/**
 * Update the bootloader
 */
export declare class FlashBootloaderCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Magic number - set to 290876 to actually flash
     *
     * @increment: 1
     */
    get magicNumber(): number;
    set magicNumber(value: number);
}
/**
 * Reset battery capacity for batteries that accumulate consumed battery via integration.
 */
export declare class BatteryResetCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Bitmask of batteries to reset. Least significant bit is for the first battery.
     */
    get batteryMask(): number;
    set batteryMask(value: number);
    /**
     * Battery percentage remaining to set.
     *
     * @min: 0
     * @max: 100
     * @increment: 1
     */
    get percentage(): number;
    set percentage(value: number);
}
/**
 * Issue a trap signal to the autopilot process, presumably to enter the debugger.
 */
export declare class DebugTrapCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
}
/**
 * Control onboard scripting.
 */
export declare class ScriptingCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
}
/**
 * Scripting command as NAV command with wait for completion.
 */
export declare class NavScriptTimeCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * integer command number (0 to 255)
     */
    get cmd(): number;
    set cmd(value: number);
    /**
     * timeout for operation in seconds. Zero means no timeout (0 to 255)
     *
     * @units s
     */
    get timeout(): number;
    set timeout(value: number);
    /**
     * argument1.
     */
    get arg1(): number;
    set arg1(value: number);
    /**
     * argument2.
     */
    get arg2(): number;
    set arg2(value: number);
    /**
     * argument3.
     */
    get arg3(): number;
    set arg3(value: number);
    /**
     * argument4.
     */
    get arg4(): number;
    set arg4(value: number);
}
/**
 * Maintain an attitude for a specified time.
 */
export declare class NavAttitudeTimeCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Time to maintain specified attitude and climb rate
     *
     * @units s
     */
    get time(): number;
    set time(value: number);
    /**
     * Roll angle in degrees (positive is lean right, negative is lean left)
     *
     * @units deg
     */
    get roll(): number;
    set roll(value: number);
    /**
     * Pitch angle in degrees (positive is lean back, negative is lean forward)
     *
     * @units deg
     */
    get pitch(): number;
    set pitch(value: number);
    /**
     * Yaw angle
     *
     * @units deg
     */
    get yaw(): number;
    set yaw(value: number);
    /**
     * Climb rate
     *
     * @units m/s
     */
    get climb_rate(): number;
    set climb_rate(value: number);
}
/**
 * Change flight speed at a given rate. This slews the vehicle at a controllable rate between it's
 * previous speed and the new one. (affects GUIDED only. Outside GUIDED, aircraft ignores these
 * commands. Designed for onboard companion-computer command-and-control, not normally operator/GCS
 * control.)
 */
export declare class GuidedChangeSpeedCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Airspeed or groundspeed.
     */
    get speedType(): number;
    set speedType(value: number);
    /**
     * Target Speed
     *
     * @units m/s
     */
    get speedTarget(): number;
    set speedTarget(value: number);
    /**
     * Acceleration rate, 0 to take effect instantly
     *
     * @units m/s/s
     */
    get speedRateOfChange(): number;
    set speedRateOfChange(value: number);
}
/**
 * Change target altitude at a given rate. This slews the vehicle at a controllable rate between it's
 * previous altitude and the new one. (affects GUIDED only. Outside GUIDED, aircraft ignores these
 * commands. Designed for onboard companion-computer command-and-control, not normally operator/GCS
 * control.)
 */
export declare class GuidedChangeAltitudeCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Rate of change, toward new altitude. 0 for maximum rate change. Positive numbers only, as negative
     * numbers will not converge on the new target alt.
     *
     * @units m/s/s
     * @min: 0
     */
    get altRateOfChange(): number;
    set altRateOfChange(value: number);
    /**
     * Target Altitude
     *
     * @units m
     */
    get targetAlt(): number;
    set targetAlt(value: number);
}
/**
 * Change to target heading at a given rate, overriding previous heading/s. This slews the vehicle at a
 * controllable rate between it's previous heading and the new one. (affects GUIDED only. Exiting
 * GUIDED returns aircraft to normal behaviour defined elsewhere. Designed for onboard
 * companion-computer command-and-control, not normally operator/GCS control.)
 */
export declare class GuidedChangeHeadingCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * course-over-ground or raw vehicle heading.
     */
    get headingType(): number;
    set headingType(value: number);
    /**
     * Target heading.
     *
     * @units deg
     * @min: 0
     * @max: 359.99
     */
    get headingTarget(): number;
    set headingTarget(value: number);
    /**
     * Maximum centripetal accelearation, ie rate of change, toward new heading.
     *
     * @units m/s/s
     */
    get headingRateOfChange(): number;
    set headingRateOfChange(value: number);
}
/**
 * Provide an external position estimate for use when dead-reckoning. This is meant to be used for
 * occasional position resets that may be provided by a external system such as a remote pilot using
 * landmarks over a video link.
 *
 * This command has location.
 */
export declare class ExternalPositionEstimateCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
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
    get transmission_time(): number;
    set transmission_time(value: number);
    /**
     * The time spent in processing the sensor data that is the basis for this position. The recipient can
     * use this to improve time alignment of the data. Set to zero if not known.
     *
     * @units s
     */
    get processing_time(): number;
    set processing_time(value: number);
    /**
     * estimated one standard deviation accuracy of the measurement. Set to NaN if not known.
     */
    get accuracy(): number;
    set accuracy(value: number);
    /**
     * Latitude
     */
    get latitude(): number;
    set latitude(value: number);
    /**
     * Longitude
     */
    get longitude(): number;
    set longitude(value: number);
    /**
     * Altitude, not used. Should be sent as NaN. May be supported in a future version of this message.
     *
     * @units m
     */
    get altitude(): number;
    set altitude(value: number);
}
export declare const REGISTRY: MavLinkPacketRegistry;
export declare const COMMANDS: MavLinkCommandRegistry;
