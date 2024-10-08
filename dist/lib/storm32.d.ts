import { uint8_t, uint32_t, float } from './types';
import { MavLinkPacketRegistry, MavLinkPacketField, MavLinkData } from './mavlink';
import { GimbalDeviceErrorFlags, MavLinkCommandRegistry } from './common';
/**
 * MAV_STORM32_TUNNEL_PAYLOAD_TYPE
 */
export declare enum MavStorm32TunnelPayloadType {
    /**
     * Registered for STorM32 gimbal controller.
     */
    'STORM32_CH1_IN' = 200,
    /**
     * Registered for STorM32 gimbal controller.
     */
    'STORM32_CH1_OUT' = 201,
    /**
     * Registered for STorM32 gimbal controller.
     */
    'STORM32_CH2_IN' = 202,
    /**
     * Registered for STorM32 gimbal controller.
     */
    'STORM32_CH2_OUT' = 203,
    /**
     * Registered for STorM32 gimbal controller.
     */
    'STORM32_CH3_IN' = 204,
    /**
     * Registered for STorM32 gimbal controller.
     */
    'STORM32_CH3_OUT' = 205,
    /**
     * Registered for STorM32 gimbal controller.
     */
    'STORM32_RESERVED6' = 206,
    /**
     * Registered for STorM32 gimbal controller.
     */
    'STORM32_RESERVED7' = 207,
    /**
     * Registered for STorM32 gimbal controller.
     */
    'STORM32_RESERVED8' = 208,
    /**
     * Registered for STorM32 gimbal controller.
     */
    'STORM32_RESERVED9' = 209
}
/**
 * STorM32 gimbal prearm check flags.
 */
export declare enum MavStorm32GimbalPrearmFlags {
    /**
     * STorM32 gimbal is in normal state.
     */
    'IS_NORMAL' = 1,
    /**
     * The IMUs are healthy and working normally.
     */
    'IMUS_WORKING' = 2,
    /**
     * The motors are active and working normally.
     */
    'MOTORS_WORKING' = 4,
    /**
     * The encoders are healthy and working normally.
     */
    'ENCODERS_WORKING' = 8,
    /**
     * A battery voltage is applied and is in range.
     */
    'VOLTAGE_OK' = 16,
    /**
     * ???.
     */
    'VIRTUALCHANNELS_RECEIVING' = 32,
    /**
     * Mavlink messages are being received.
     */
    'MAVLINK_RECEIVING' = 64,
    /**
     * The STorM32Link data indicates QFix.
     */
    'STORM32LINK_QFIX' = 128,
    /**
     * The STorM32Link is working.
     */
    'STORM32LINK_WORKING' = 256,
    /**
     * The camera has been found and is connected.
     */
    'CAMERA_CONNECTED' = 512,
    /**
     * The signal on the AUX0 input pin is low.
     */
    'AUX0_LOW' = 1024,
    /**
     * The signal on the AUX1 input pin is low.
     */
    'AUX1_LOW' = 2048,
    /**
     * The NTLogger is working normally.
     */
    'NTLOGGER_WORKING' = 4096
}
/**
 * STorM32 camera prearm check flags.
 */
export declare enum MavStorm32CameraPrearmFlags {
    /**
     * The camera has been found and is connected.
     */
    'CONNECTED' = 1
}
/**
 * Gimbal device capability flags.
 */
export declare enum MavStorm32GimbalDeviceCapFlags {
    /**
     * Gimbal device supports a retracted position.
     */
    'HAS_RETRACT' = 1,
    /**
     * Gimbal device supports a horizontal, forward looking position, stabilized. Can also be used to reset
     * the gimbal's orientation.
     */
    'HAS_NEUTRAL' = 2,
    /**
     * Gimbal device supports rotating around roll axis.
     */
    'HAS_ROLL_AXIS' = 4,
    /**
     * Gimbal device supports to follow a roll angle relative to the vehicle.
     */
    'HAS_ROLL_FOLLOW' = 8,
    /**
     * Gimbal device supports locking to an roll angle (generally that's the default).
     */
    'HAS_ROLL_LOCK' = 16,
    /**
     * Gimbal device supports rotating around pitch axis.
     */
    'HAS_PITCH_AXIS' = 32,
    /**
     * Gimbal device supports to follow a pitch angle relative to the vehicle.
     */
    'HAS_PITCH_FOLLOW' = 64,
    /**
     * Gimbal device supports locking to an pitch angle (generally that's the default).
     */
    'HAS_PITCH_LOCK' = 128,
    /**
     * Gimbal device supports rotating around yaw axis.
     */
    'HAS_YAW_AXIS' = 256,
    /**
     * Gimbal device supports to follow a yaw angle relative to the vehicle (generally that's the default).
     */
    'HAS_YAW_FOLLOW' = 512,
    /**
     * Gimbal device supports locking to a heading angle.
     */
    'HAS_YAW_LOCK' = 1024,
    /**
     * Gimbal device supports yawing/panning infinitely (e.g. using a slip ring).
     */
    'HAS_INFINITE_YAW' = 2048,
    /**
     * Gimbal device supports absolute yaw angles (this usually requires support by an autopilot, and can
     * be dynamic, i.e., go on and off during runtime).
     */
    'HAS_ABSOLUTE_YAW' = 65536,
    /**
     * Gimbal device supports control via an RC input signal.
     */
    'HAS_RC' = 131072
}
/**
 * Flags for gimbal device operation. Used for setting and reporting, unless specified otherwise.
 * Settings which are in violation of the capability flags are ignored by the gimbal device.
 */
export declare enum MavStorm32GimbalDeviceFlags {
    /**
     * Retracted safe position (no stabilization), takes presedence over NEUTRAL flag. If supported by the
     * gimbal, the angles in the retracted position can be set in addition.
     */
    'RETRACT' = 1,
    /**
     * Neutral position (horizontal, forward looking, with stabiliziation).
     */
    'NEUTRAL' = 2,
    /**
     * Lock roll angle to absolute angle relative to horizon (not relative to drone). This is generally the
     * default.
     */
    'ROLL_LOCK' = 4,
    /**
     * Lock pitch angle to absolute angle relative to horizon (not relative to drone). This is generally
     * the default.
     */
    'PITCH_LOCK' = 8,
    /**
     * Lock yaw angle to absolute angle relative to earth (not relative to drone). When the YAW_ABSOLUTE
     * flag is set, the quaternion is in the Earth frame with the x-axis pointing North (yaw absolute),
     * else it is in the Earth frame rotated so that the x-axis is pointing forward (yaw relative to
     * vehicle).
     */
    'YAW_LOCK' = 16,
    /**
     * Gimbal device can accept absolute yaw angle input. This flag cannot be set, is only for reporting
     * (attempts to set it are rejected by the gimbal device).
     */
    'CAN_ACCEPT_YAW_ABSOLUTE' = 256,
    /**
     * Yaw angle is absolute (is only accepted if CAN_ACCEPT_YAW_ABSOLUTE is set). If this flag is set, the
     * quaternion is in the Earth frame with the x-axis pointing North (yaw absolute), else it is in the
     * Earth frame rotated so that the x-axis is pointing forward (yaw relative to vehicle).
     */
    'YAW_ABSOLUTE' = 512,
    /**
     * RC control. The RC input signal fed to the gimbal device exclusively controls the gimbal's
     * orientation. Overrides RC_MIXED flag if that is also set.
     */
    'RC_EXCLUSIVE' = 1024,
    /**
     * RC control. The RC input signal fed to the gimbal device is mixed into the gimbal's orientation. Is
     * overriden by RC_EXCLUSIVE flag if that is also set.
     */
    'RC_MIXED' = 2048,
    /**
     * UINT16_MAX = ignore.
     */
    'NONE' = 65535
}
/**
 * Gimbal device error and condition flags (0 means no error or other condition).
 */
export declare enum MavStorm32GimbalDeviceErrorFlags {
    /**
     * Gimbal device is limited by hardware roll limit.
     */
    'AT_ROLL_LIMIT' = 1,
    /**
     * Gimbal device is limited by hardware pitch limit.
     */
    'AT_PITCH_LIMIT' = 2,
    /**
     * Gimbal device is limited by hardware yaw limit.
     */
    'AT_YAW_LIMIT' = 4,
    /**
     * There is an error with the gimbal device's encoders.
     */
    'ENCODER_ERROR' = 8,
    /**
     * There is an error with the gimbal device's power source.
     */
    'POWER_ERROR' = 16,
    /**
     * There is an error with the gimbal device's motors.
     */
    'MOTOR_ERROR' = 32,
    /**
     * There is an error with the gimbal device's software.
     */
    'SOFTWARE_ERROR' = 64,
    /**
     * There is an error with the gimbal device's communication.
     */
    'COMMS_ERROR' = 128,
    /**
     * Gimbal device is currently calibrating (not an error).
     */
    'CALIBRATION_RUNNING' = 256,
    /**
     * Gimbal device is not assigned to a gimbal manager (not an error).
     */
    'NO_MANAGER' = 32768
}
/**
 * Gimbal manager capability flags.
 */
export declare enum MavStorm32GimbalManagerCapFlags {
    /**
     * The gimbal manager supports several profiles.
     */
    'HAS_PROFILES' = 1,
    /**
     * The gimbal manager supports changing the gimbal manager during run time, i.e. can be
     * enabled/disabled.
     */
    'SUPPORTS_CHANGE' = 2
}
/**
 * Flags for gimbal manager operation. Used for setting and reporting, unless specified otherwise. If a
 * setting is accepted by the gimbal manger, is reported in the STORM32_GIMBAL_MANAGER_STATUS message.
 */
export declare enum MavStorm32GimbalManagerFlags {
    /**
     * 0 = ignore.
     */
    'NONE' = 0,
    /**
     * Request to set RC input to active, or report RC input is active. Implies RC mixed. RC exclusive is
     * achieved by setting all clients to inactive.
     */
    'RC_ACTIVE' = 1,
    /**
     * Request to set onboard/companion computer client to active, or report this client is active.
     */
    'CLIENT_ONBOARD_ACTIVE' = 2,
    /**
     * Request to set autopliot client to active, or report this client is active.
     */
    'CLIENT_AUTOPILOT_ACTIVE' = 4,
    /**
     * Request to set GCS client to active, or report this client is active.
     */
    'CLIENT_GCS_ACTIVE' = 8,
    /**
     * Request to set camera client to active, or report this client is active.
     */
    'CLIENT_CAMERA_ACTIVE' = 16,
    /**
     * Request to set GCS2 client to active, or report this client is active.
     */
    'CLIENT_GCS2_ACTIVE' = 32,
    /**
     * Request to set camera2 client to active, or report this client is active.
     */
    'CLIENT_CAMERA2_ACTIVE' = 64,
    /**
     * Request to set custom client to active, or report this client is active.
     */
    'CLIENT_CUSTOM_ACTIVE' = 128,
    /**
     * Request to set custom2 client to active, or report this client is active.
     */
    'CLIENT_CUSTOM2_ACTIVE' = 256,
    /**
     * Request supervision. This flag is only for setting, it is not reported.
     */
    'SET_SUPERVISON' = 512,
    /**
     * Release supervision. This flag is only for setting, it is not reported.
     */
    'SET_RELEASE' = 1024
}
/**
 * Gimbal manager client ID. In a prioritizing profile, the priorities are determined by the
 * implementation; they could e.g. be custom1 > onboard > GCS > autopilot/camera > GCS2 > custom2.
 */
export declare enum MavStorm32GimbalManagerClient {
    /**
     * For convenience.
     */
    'NONE' = 0,
    /**
     * This is the onboard/companion computer client.
     */
    'ONBOARD' = 1,
    /**
     * This is the autopilot client.
     */
    'AUTOPILOT' = 2,
    /**
     * This is the GCS client.
     */
    'GCS' = 3,
    /**
     * This is the camera client.
     */
    'CAMERA' = 4,
    /**
     * This is the GCS2 client.
     */
    'GCS2' = 5,
    /**
     * This is the camera2 client.
     */
    'CAMERA2' = 6,
    /**
     * This is the custom client.
     */
    'CUSTOM' = 7,
    /**
     * This is the custom2 client.
     */
    'CUSTOM2' = 8
}
/**
 * Flags for gimbal manager set up. Used for setting and reporting, unless specified otherwise.
 */
export declare enum MavStorm32GimbalManagerSetupFlags {
    /**
     * Enable gimbal manager. This flag is only for setting, is not reported.
     */
    'ENABLE' = 16384,
    /**
     * Disable gimbal manager. This flag is only for setting, is not reported.
     */
    'DISABLE' = 32768
}
/**
 * Gimbal manager profiles. Only standard profiles are defined. Any implementation can define it's own
 * profile in addition, and should use enum values > 16.
 */
export declare enum MavStorm32GimbalManagerProfile {
    /**
     * Default profile. Implementation specific.
     */
    'DEFAULT' = 0,
    /**
     * Custom profile. Configurable profile according to the STorM32 definition. Is configured with
     * STORM32_GIMBAL_MANAGER_PROFIL.
     */
    'CUSTOM' = 1,
    /**
     * Default cooperative profile. Uses STorM32 custom profile with default settings to achieve
     * cooperative behavior.
     */
    'COOPERATIVE' = 2,
    /**
     * Default exclusive profile. Uses STorM32 custom profile with default settings to achieve exclusive
     * behavior.
     */
    'EXCLUSIVE' = 3,
    /**
     * Default priority profile with cooperative behavior for equal priority. Uses STorM32 custom profile
     * with default settings to achieve priority-based behavior.
     */
    'PRIORITY_COOPERATIVE' = 4,
    /**
     * Default priority profile with exclusive behavior for equal priority. Uses STorM32 custom profile
     * with default settings to achieve priority-based behavior.
     */
    'PRIORITY_EXCLUSIVE' = 5
}
/**
 * Gimbal actions.
 */
export declare enum MavStorm32GimbalAction {
    /**
     * Trigger the gimbal device to recenter the gimbal.
     */
    'RECENTER' = 1,
    /**
     * Trigger the gimbal device to run a calibration.
     */
    'CALIBRATION' = 2,
    /**
     * Trigger gimbal device to (re)discover the gimbal manager during run time.
     */
    'DISCOVER_MANAGER' = 3
}
/**
 * Enumeration of possible shot modes.
 */
export declare enum MavQshotMode {
    /**
     * Undefined shot mode. Can be used to determine if qshots should be used or not.
     */
    'UNDEFINED' = 0,
    /**
     * Start normal gimbal operation. Is usally used to return back from a shot.
     */
    'DEFAULT' = 1,
    /**
     * Load and keep safe gimbal position and stop stabilization.
     */
    'GIMBAL_RETRACT' = 2,
    /**
     * Load neutral gimbal position and keep it while stabilizing.
     */
    'GIMBAL_NEUTRAL' = 3,
    /**
     * Start mission with gimbal control.
     */
    'GIMBAL_MISSION' = 4,
    /**
     * Start RC gimbal control.
     */
    'GIMBAL_RC_CONTROL' = 5,
    /**
     * Start gimbal tracking the point specified by Lat, Lon, Alt.
     */
    'POI_TARGETING' = 6,
    /**
     * Start gimbal tracking the system with specified system ID.
     */
    'SYSID_TARGETING' = 7,
    /**
     * Start 2-point cable cam quick shot.
     */
    'CABLECAM_2POINT' = 8,
    /**
     * Start gimbal tracking the home location.
     */
    'HOME_TARGETING' = 9
}
/**
 * MAV_CMD
 */
export declare enum MavCmd {
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
    'STORM32_DO_GIMBAL_MANAGER_CONTROL_PITCHYAW' = 60002,
    /**
     * Command to configure a gimbal manager. A gimbal device is never to react to this command. The
     * selected profile is reported in the STORM32_GIMBAL_MANAGER_STATUS message.
     * @param1 Profile Gimbal manager profile (0 = default).
     * @param2 Setup flags Gimbal manager setup flags (0 = none).
     * @param7 Gimbal ID Gimbal ID of the gimbal manager to address (component ID or 1-6 for non-MAVLink gimbal, 0 for all gimbals). Send command multiple times for more than one but not all gimbals.
     */
    'STORM32_DO_GIMBAL_MANAGER_SETUP' = 60010,
    /**
     * Command to initiate gimbal actions. Usually performed by the gimbal device, but some can also be
     * done by the gimbal manager. It is hence best to broadcast this command.
     * @param1 Action Gimbal action to initiate (0 = none).
     * @param7 Gimbal ID Gimbal ID of the gimbal to address (component ID or 1-6 for non-MAVLink gimbal, 0 for all gimbals). Send command multiple times for more than one but not all gimbals.
     */
    'STORM32_DO_GIMBAL_ACTION' = 60011,
    /**
     * Command to set the shot manager mode.
     * @param1 Mode Set shot mode.
     * @param2 Shot state or command Set shot state or command. The allowed values are specific to the selected shot mode.
     */
    'QSHOT_DO_CONFIGURE' = 60020
}
/**
 * Message reporting the current status of a gimbal device. This message should be broadcasted by a
 * gimbal device component at a low regular rate (e.g. 4 Hz). For higher rates it should be emitted
 * with a target.
 */
export declare class Storm32GimbalDeviceStatus extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    constructor();
    /**
     * System ID
     */
    targetSystem: uint8_t;
    /**
     * Component ID
     */
    targetComponent: uint8_t;
    /**
     * Timestamp (time since system boot).
     * Units: ms
     */
    timeBootMs: uint32_t;
    /**
     * Gimbal device flags currently applied.
     */
    flags: MavStorm32GimbalDeviceFlags;
    /**
     * Quaternion components, w, x, y, z (1 0 0 0 is the null-rotation). The frame depends on the
     * STORM32_GIMBAL_DEVICE_FLAGS_YAW_ABSOLUTE flag.
     */
    q: float[];
    /**
     * X component of angular velocity (NaN if unknown).
     * Units: rad/s
     */
    angularVelocityX: float;
    /**
     * Y component of angular velocity (NaN if unknown).
     * Units: rad/s
     */
    angularVelocityY: float;
    /**
     * Z component of angular velocity (the frame depends on the STORM32_GIMBAL_DEVICE_FLAGS_YAW_ABSOLUTE
     * flag, NaN if unknown).
     * Units: rad/s
     */
    angularVelocityZ: float;
    /**
     * Yaw in absolute frame relative to Earth's North, north is 0 (NaN if unknown).
     * Units: deg
     */
    yawAbsolute: float;
    /**
     * Failure flags (0 for no failure).
     */
    failureFlags: GimbalDeviceErrorFlags;
}
/**
 * Message to a gimbal device to control its attitude. This message is to be sent from the gimbal
 * manager to the gimbal device. Angles and rates can be set to NaN according to use case.
 */
export declare class Storm32GimbalDeviceControl extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    constructor();
    /**
     * System ID
     */
    targetSystem: uint8_t;
    /**
     * Component ID
     */
    targetComponent: uint8_t;
    /**
     * Gimbal device flags (UINT16_MAX to be ignored).
     */
    flags: MavStorm32GimbalDeviceFlags;
    /**
     * Quaternion components, w, x, y, z (1 0 0 0 is the null-rotation, the frame is determined by the
     * STORM32_GIMBAL_DEVICE_FLAGS_YAW_ABSOLUTE flag, set first element to NaN to be ignored).
     */
    q: float[];
    /**
     * X component of angular velocity (positive: roll to the right, NaN to be ignored).
     * Units: rad/s
     */
    angularVelocityX: float;
    /**
     * Y component of angular velocity (positive: tilt up, NaN to be ignored).
     * Units: rad/s
     */
    angularVelocityY: float;
    /**
     * Z component of angular velocity (positive: pan to the right, the frame is determined by the
     * STORM32_GIMBAL_DEVICE_FLAGS_YAW_ABSOLUTE flag, NaN to be ignored).
     * Units: rad/s
     */
    angularVelocityZ: float;
}
/**
 * Information about a gimbal manager. This message should be requested by a ground station using
 * MAV_CMD_REQUEST_MESSAGE. It mirrors some fields of the STORM32_GIMBAL_DEVICE_INFORMATION message,
 * but not all. If the additional information is desired, also STORM32_GIMBAL_DEVICE_INFORMATION should
 * be requested.
 */
export declare class Storm32GimbalManagerInformation extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    constructor();
    /**
     * Gimbal ID (component ID or 1-6 for non-MAVLink gimbal) that this gimbal manager is responsible for.
     */
    gimbalId: uint8_t;
    /**
     * Gimbal device capability flags.
     */
    deviceCapFlags: MavStorm32GimbalDeviceCapFlags;
    /**
     * Gimbal manager capability flags.
     */
    managerCapFlags: MavStorm32GimbalManagerCapFlags;
    /**
     * Hardware minimum roll angle (positive: roll to the right, NaN if unknown).
     * Units: rad
     */
    rollMin: float;
    /**
     * Hardware maximum roll angle (positive: roll to the right, NaN if unknown).
     * Units: rad
     */
    rollMax: float;
    /**
     * Hardware minimum pitch/tilt angle (positive: tilt up, NaN if unknown).
     * Units: rad
     */
    pitchMin: float;
    /**
     * Hardware maximum pitch/tilt angle (positive: tilt up, NaN if unknown).
     * Units: rad
     */
    pitchMax: float;
    /**
     * Hardware minimum yaw/pan angle (positive: pan to the right, relative to the vehicle/gimbal base, NaN
     * if unknown).
     * Units: rad
     */
    yawMin: float;
    /**
     * Hardware maximum yaw/pan angle (positive: pan to the right, relative to the vehicle/gimbal base, NaN
     * if unknown).
     * Units: rad
     */
    yawMax: float;
}
/**
 * Message reporting the current status of a gimbal manager. This message should be broadcast at a low
 * regular rate (e.g. 1 Hz, may be increase momentarily to e.g. 5 Hz for a period of 1 sec after a
 * change).
 */
export declare class Storm32GimbalManagerStatus extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    constructor();
    /**
     * Gimbal ID (component ID or 1-6 for non-MAVLink gimbal) that this gimbal manager is responsible for.
     */
    gimbalId: uint8_t;
    /**
     * Client who is currently supervisor (0 = none).
     */
    supervisor: MavStorm32GimbalManagerClient;
    /**
     * Gimbal device flags currently applied.
     */
    deviceFlags: MavStorm32GimbalDeviceFlags;
    /**
     * Gimbal manager flags currently applied.
     */
    managerFlags: MavStorm32GimbalManagerFlags;
    /**
     * Profile currently applied (0 = default).
     */
    profile: MavStorm32GimbalManagerProfile;
}
/**
 * Message to a gimbal manager to control the gimbal attitude. Angles and rates can be set to NaN
 * according to use case. A gimbal device is never to react to this message.
 */
export declare class Storm32GimbalManagerControl extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    constructor();
    /**
     * System ID
     */
    targetSystem: uint8_t;
    /**
     * Component ID
     */
    targetComponent: uint8_t;
    /**
     * Gimbal ID of the gimbal manager to address (component ID or 1-6 for non-MAVLink gimbal, 0 for all
     * gimbals, send command multiple times for more than one but not all gimbals).
     */
    gimbalId: uint8_t;
    /**
     * Client which is contacting the gimbal manager (must be set).
     */
    client: MavStorm32GimbalManagerClient;
    /**
     * Gimbal device flags (UINT16_MAX to be ignored).
     */
    deviceFlags: MavStorm32GimbalDeviceFlags;
    /**
     * Gimbal manager flags (0 to be ignored).
     */
    managerFlags: MavStorm32GimbalManagerFlags;
    /**
     * Quaternion components, w, x, y, z (1 0 0 0 is the null-rotation, the frame is determined by the
     * GIMBAL_MANAGER_FLAGS_ABSOLUTE_YAW flag, set first element to NaN to be ignored).
     */
    q: float[];
    /**
     * X component of angular velocity (positive: roll to the right, NaN to be ignored).
     * Units: rad/s
     */
    angularVelocityX: float;
    /**
     * Y component of angular velocity (positive: tilt up, NaN to be ignored).
     * Units: rad/s
     */
    angularVelocityY: float;
    /**
     * Z component of angular velocity (positive: pan to the right, the frame is determined by the
     * STORM32_GIMBAL_DEVICE_FLAGS_YAW_ABSOLUTE flag, NaN to be ignored).
     * Units: rad/s
     */
    angularVelocityZ: float;
}
/**
 * Message to a gimbal manager to control the gimbal tilt and pan angles. Angles and rates can be set
 * to NaN according to use case. A gimbal device is never to react to this message.
 */
export declare class Storm32GimbalManagerControlPitchyaw extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    constructor();
    /**
     * System ID
     */
    targetSystem: uint8_t;
    /**
     * Component ID
     */
    targetComponent: uint8_t;
    /**
     * Gimbal ID of the gimbal manager to address (component ID or 1-6 for non-MAVLink gimbal, 0 for all
     * gimbals, send command multiple times for more than one but not all gimbals).
     */
    gimbalId: uint8_t;
    /**
     * Client which is contacting the gimbal manager (must be set).
     */
    client: MavStorm32GimbalManagerClient;
    /**
     * Gimbal device flags (UINT16_MAX to be ignored).
     */
    deviceFlags: MavStorm32GimbalDeviceFlags;
    /**
     * Gimbal manager flags (0 to be ignored).
     */
    managerFlags: MavStorm32GimbalManagerFlags;
    /**
     * Pitch/tilt angle (positive: tilt up, NaN to be ignored).
     * Units: rad
     */
    pitch: float;
    /**
     * Yaw/pan angle (positive: pan the right, the frame is determined by the
     * STORM32_GIMBAL_DEVICE_FLAGS_YAW_ABSOLUTE flag, NaN to be ignored).
     * Units: rad
     */
    yaw: float;
    /**
     * Pitch/tilt angular rate (positive: tilt up, NaN to be ignored).
     * Units: rad/s
     */
    pitchRate: float;
    /**
     * Yaw/pan angular rate (positive: pan to the right, the frame is determined by the
     * STORM32_GIMBAL_DEVICE_FLAGS_YAW_ABSOLUTE flag, NaN to be ignored).
     * Units: rad/s
     */
    yawRate: float;
}
/**
 * Message to a gimbal manager to correct the gimbal roll angle. This message is typically used to
 * manually correct for a tilted horizon in operation. A gimbal device is never to react to this
 * message.
 */
export declare class Storm32GimbalManagerCorrectRoll extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    constructor();
    /**
     * System ID
     */
    targetSystem: uint8_t;
    /**
     * Component ID
     */
    targetComponent: uint8_t;
    /**
     * Gimbal ID of the gimbal manager to address (component ID or 1-6 for non-MAVLink gimbal, 0 for all
     * gimbals, send command multiple times for more than one but not all gimbals).
     */
    gimbalId: uint8_t;
    /**
     * Client which is contacting the gimbal manager (must be set).
     */
    client: MavStorm32GimbalManagerClient;
    /**
     * Roll angle (positive to roll to the right).
     * Units: rad
     */
    roll: float;
}
/**
 * Message reporting the status of the prearm checks. The flags are component specific.
 */
export declare class ComponentPrearmStatus extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    constructor();
    /**
     * System ID
     */
    targetSystem: uint8_t;
    /**
     * Component ID
     */
    targetComponent: uint8_t;
    /**
     * Currently enabled prearm checks. 0 means no checks are being performed, UINT32_MAX means not known.
     */
    enabledFlags: uint32_t;
    /**
     * Currently not passed prearm checks. 0 means all checks have been passed.
     */
    failFlags: uint32_t;
}
import { CommandLong } from './common';
/**
 * Command to a gimbal manager to control the gimbal tilt and pan angles. It is possible to set
 * combinations of the values below. E.g. an angle as well as a desired angular rate can be used to get
 * to this angle at a certain angular rate, or an angular rate only will result in continuous turning.
 * NaN is to be used to signal unset. A gimbal device is never to react to this command.
 */
export declare class Storm32DoGimbalManagerControlPitchyawCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Pitch/tilt angle (positive: tilt up, NaN to be ignored).
     *
     * @units deg
     * @min: -180
     * @max: 180
     */
    get pitchAngle(): number;
    set pitchAngle(value: number);
    /**
     * Yaw/pan angle (positive: pan to the right, the frame is determined by the
     * STORM32_GIMBAL_DEVICE_FLAGS_YAW_ABSOLUTE flag, NaN to be ignored).
     *
     * @units deg
     * @min: -180
     * @max: 180
     */
    get yawAngle(): number;
    set yawAngle(value: number);
    /**
     * Pitch/tilt rate (positive: tilt up, NaN to be ignored).
     *
     * @units deg/s
     */
    get pitchRate(): number;
    set pitchRate(value: number);
    /**
     * Yaw/pan rate (positive: pan to the right, the frame is determined by the
     * STORM32_GIMBAL_DEVICE_FLAGS_YAW_ABSOLUTE flag, NaN to be ignored).
     *
     * @units deg/s
     */
    get yawRate(): number;
    set yawRate(value: number);
    /**
     * Gimbal device flags.
     */
    get gimbalDeviceFlags(): number;
    set gimbalDeviceFlags(value: number);
    /**
     * Gimbal manager flags.
     */
    get gimbalManagerFlags(): number;
    set gimbalManagerFlags(value: number);
    /**
     * Gimbal ID of the gimbal manager to address (component ID or 1-6 for non-MAVLink gimbal, 0 for all
     * gimbals, send command multiple times for more than one but not all gimbals). The client is copied
     * into bits 8-15.
     */
    get gimbalIdAndClientId(): number;
    set gimbalIdAndClientId(value: number);
}
/**
 * Command to configure a gimbal manager. A gimbal device is never to react to this command. The
 * selected profile is reported in the STORM32_GIMBAL_MANAGER_STATUS message.
 */
export declare class Storm32DoGimbalManagerSetupCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Gimbal manager profile (0 = default).
     */
    get profile(): number;
    set profile(value: number);
    /**
     * Gimbal manager setup flags (0 = none).
     */
    get setupFlags(): number;
    set setupFlags(value: number);
    /**
     * Gimbal ID of the gimbal manager to address (component ID or 1-6 for non-MAVLink gimbal, 0 for all
     * gimbals). Send command multiple times for more than one but not all gimbals.
     */
    get gimbalId(): number;
    set gimbalId(value: number);
}
/**
 * Command to initiate gimbal actions. Usually performed by the gimbal device, but some can also be
 * done by the gimbal manager. It is hence best to broadcast this command.
 */
export declare class Storm32DoGimbalActionCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Gimbal action to initiate (0 = none).
     */
    get action(): number;
    set action(value: number);
    /**
     * Gimbal ID of the gimbal to address (component ID or 1-6 for non-MAVLink gimbal, 0 for all gimbals).
     * Send command multiple times for more than one but not all gimbals.
     */
    get gimbalId(): number;
    set gimbalId(value: number);
}
/**
 * Command to set the shot manager mode.
 */
export declare class QshotDoConfigureCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Set shot mode.
     */
    get mode(): number;
    set mode(value: number);
    /**
     * Set shot state or command. The allowed values are specific to the selected shot mode.
     */
    get shotStateOrCommand(): number;
    set shotStateOrCommand(value: number);
}
export declare const REGISTRY: MavLinkPacketRegistry;
export declare const COMMANDS: MavLinkCommandRegistry;
