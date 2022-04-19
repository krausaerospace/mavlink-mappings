import { int8_t, uint8_t, int16_t, uint16_t, int32_t, uint32_t, int64_t, uint64_t, float, double } from './types';
import { MavLinkPacketRegistry, MavLinkPacketField, MavLinkData } from './mavlink';
import { MavType, MavAutopilot, MavModeFlag } from './minimal';
/**
 * These values define the type of firmware release. These values indicate the first version or release
 * of this type. For example the first alpha release would be 64, the second would be 65.
 */
export declare enum FirmwareVersionType {
    'DEV' = 0,
    'ALPHA' = 64,
    'BETA' = 128,
    'RC' = 192,
    'OFFICIAL' = 255
}
/**
 * Flags to report failure cases over the high latency telemtry.
 */
export declare enum HlFailureFlag {
    'GPS' = 1,
    'DIFFERENTIAL_PRESSURE' = 2,
    'ABSOLUTE_PRESSURE' = 4,
    'HL_FAILURE_FLAG_3D_ACCEL' = 8,
    'HL_FAILURE_FLAG_3D_GYRO' = 16,
    'HL_FAILURE_FLAG_3D_MAG' = 32,
    'TERRAIN' = 64,
    'BATTERY' = 128,
    'RC_RECEIVER' = 256,
    'OFFBOARD_LINK' = 512,
    'ENGINE' = 1024,
    'GEOFENCE' = 2048,
    'ESTIMATOR' = 4096,
    'MISSION' = 8192
}
/**
 * Actions that may be specified in MAV_CMD_OVERRIDE_GOTO to override mission execution.
 */
export declare enum MavGoto {
    'DO_HOLD' = 0,
    'DO_CONTINUE' = 1,
    'HOLD_AT_CURRENT_POSITION' = 2,
    'HOLD_AT_SPECIFIED_POSITION' = 3
}
/**
 * These defines are predefined OR-combined mode flags. There is no need to use values from this enum,
 * but it simplifies the use of the mode flags. Note that manual input is enabled in all modes as a
 * safety override.
 */
export declare enum MavMode {
    'PREFLIGHT' = 0,
    'STABILIZE_DISARMED' = 80,
    'STABILIZE_ARMED' = 208,
    'MANUAL_DISARMED' = 64,
    'MANUAL_ARMED' = 192,
    'GUIDED_DISARMED' = 88,
    'GUIDED_ARMED' = 216,
    /**
     * System is allowed to be active, under autonomous control and navigation (the trajectory is decided
     * onboard and not pre-programmed by waypoints)
     */
    'AUTO_DISARMED' = 92,
    /**
     * System is allowed to be active, under autonomous control and navigation (the trajectory is decided
     * onboard and not pre-programmed by waypoints)
     */
    'AUTO_ARMED' = 220,
    /**
     * UNDEFINED mode. This solely depends on the autopilot - use with caution, intended for developers
     * only.
     */
    'TEST_DISARMED' = 66,
    /**
     * UNDEFINED mode. This solely depends on the autopilot - use with caution, intended for developers
     * only.
     */
    'TEST_ARMED' = 194
}
/**
 * These encode the sensors whose status is sent as part of the SYS_STATUS message.
 */
export declare enum MavSysStatusSensor {
    'SENSOR_3D_GYRO' = 1,
    'SENSOR_3D_ACCEL' = 2,
    'SENSOR_3D_MAG' = 4,
    'SENSOR_ABSOLUTE_PRESSURE' = 8,
    'SENSOR_DIFFERENTIAL_PRESSURE' = 16,
    'SENSOR_GPS' = 32,
    'SENSOR_OPTICAL_FLOW' = 64,
    'SENSOR_VISION_POSITION' = 128,
    'SENSOR_LASER_POSITION' = 256,
    'SENSOR_EXTERNAL_GROUND_TRUTH' = 512,
    'SENSOR_ANGULAR_RATE_CONTROL' = 1024,
    'SENSOR_ATTITUDE_STABILIZATION' = 2048,
    'SENSOR_YAW_POSITION' = 4096,
    'SENSOR_Z_ALTITUDE_CONTROL' = 8192,
    'SENSOR_XY_POSITION_CONTROL' = 16384,
    'SENSOR_MOTOR_OUTPUTS' = 32768,
    'SENSOR_RC_RECEIVER' = 65536,
    'SENSOR_3D_GYRO2' = 131072,
    'SENSOR_3D_ACCEL2' = 262144,
    'SENSOR_3D_MAG2' = 524288,
    'GEOFENCE' = 1048576,
    'AHRS' = 2097152,
    'TERRAIN' = 4194304,
    'REVERSE_MOTOR' = 8388608,
    'LOGGING' = 16777216,
    'SENSOR_BATTERY' = 33554432,
    'SENSOR_PROXIMITY' = 67108864,
    'SENSOR_SATCOM' = 134217728,
    'PREARM_CHECK' = 268435456,
    'OBSTACLE_AVOIDANCE' = 536870912,
    'SENSOR_PROPULSION' = 1073741824
}
/**
 * MAV_FRAME
 */
export declare enum MavFrame {
    /**
     * Global (WGS84) coordinate frame + MSL altitude. First value / x: latitude, second value / y:
     * longitude, third value / z: positive altitude over mean sea level (MSL).
     */
    'GLOBAL' = 0,
    'LOCAL_NED' = 1,
    'MISSION' = 2,
    /**
     * Global (WGS84) coordinate frame + altitude relative to the home position. First value / x: latitude,
     * second value / y: longitude, third value / z: positive altitude with 0 being at the altitude of the
     * home location.
     */
    'GLOBAL_RELATIVE_ALT' = 3,
    'LOCAL_ENU' = 4,
    /**
     * Global (WGS84) coordinate frame (scaled) + MSL altitude. First value / x: latitude in
     * degrees*1.0e-7, second value / y: longitude in degrees*1.0e-7, third value / z: positive altitude
     * over mean sea level (MSL).
     */
    'GLOBAL_INT' = 5,
    /**
     * Global (WGS84) coordinate frame (scaled) + altitude relative to the home position. First value / x:
     * latitude in degrees*10e-7, second value / y: longitude in degrees*10e-7, third value / z: positive
     * altitude with 0 being at the altitude of the home location.
     */
    'GLOBAL_RELATIVE_ALT_INT' = 6,
    /**
     * Offset to the current local frame. Anything expressed in this frame should be added to the current
     * local frame position.
     */
    'LOCAL_OFFSET_NED' = 7,
    /**
     * Setpoint in body NED frame. This makes sense if all position control is externalized - e.g. useful
     * to command 2 m/s^2 acceleration to the right.
     */
    'BODY_NED' = 8,
    /**
     * Offset in body NED frame. This makes sense if adding setpoints to the current flight path, to avoid
     * an obstacle - e.g. useful to command 2 m/s^2 acceleration to the east.
     */
    'BODY_OFFSET_NED' = 9,
    /**
     * Global (WGS84) coordinate frame with AGL altitude (at the waypoint coordinate). First value / x:
     * latitude in degrees, second value / y: longitude in degrees, third value / z: positive altitude in
     * meters with 0 being at ground level in terrain model.
     */
    'GLOBAL_TERRAIN_ALT' = 10,
    /**
     * Global (WGS84) coordinate frame (scaled) with AGL altitude (at the waypoint coordinate). First value
     * / x: latitude in degrees*10e-7, second value / y: longitude in degrees*10e-7, third value / z:
     * positive altitude in meters with 0 being at ground level in terrain model.
     */
    'GLOBAL_TERRAIN_ALT_INT' = 11,
    'BODY_FRD' = 12,
    'RESERVED_13' = 13,
    /**
     * MAV_FRAME_MOCAP_NED - Odometry local coordinate frame of data given by a motion capture system,
     * Z-down (x: North, y: East, z: Down).
     */
    'RESERVED_14' = 14,
    /**
     * MAV_FRAME_MOCAP_ENU - Odometry local coordinate frame of data given by a motion capture system, Z-up
     * (x: East, y: North, z: Up).
     */
    'RESERVED_15' = 15,
    /**
     * MAV_FRAME_VISION_NED - Odometry local coordinate frame of data given by a vision estimation system,
     * Z-down (x: North, y: East, z: Down).
     */
    'RESERVED_16' = 16,
    /**
     * MAV_FRAME_VISION_ENU - Odometry local coordinate frame of data given by a vision estimation system,
     * Z-up (x: East, y: North, z: Up).
     */
    'RESERVED_17' = 17,
    /**
     * MAV_FRAME_ESTIM_NED - Odometry local coordinate frame of data given by an estimator running onboard
     * the vehicle, Z-down (x: North, y: East, z: Down).
     */
    'RESERVED_18' = 18,
    /**
     * MAV_FRAME_ESTIM_ENU - Odometry local coordinate frame of data given by an estimator running onboard
     * the vehicle, Z-up (x: East, y: North, z: Up).
     */
    'RESERVED_19' = 19,
    /**
     * Forward, Right, Down coordinate frame. This is a local frame with Z-down and arbitrary F/R alignment
     * (i.e. not aligned with NED/earth frame).
     */
    'LOCAL_FRD' = 20,
    /**
     * Forward, Left, Up coordinate frame. This is a local frame with Z-up and arbitrary F/L alignment
     * (i.e. not aligned with ENU/earth frame).
     */
    'LOCAL_FLU' = 21
}
/**
 * MAVLINK_DATA_STREAM_TYPE
 */
export declare enum MavlinkDataStreamType {
    'JPEG' = 0,
    'BMP' = 1,
    'RAW8U' = 2,
    'RAW32U' = 3,
    'PGM' = 4,
    'PNG' = 5
}
/**
 * FENCE_ACTION
 */
export declare enum FenceAction {
    'NONE' = 0,
    'GUIDED' = 1,
    'REPORT' = 2,
    'GUIDED_THR_PASS' = 3,
    'RTL' = 4
}
/**
 * FENCE_BREACH
 */
export declare enum FenceBreach {
    'NONE' = 0,
    'MINALT' = 1,
    'MAXALT' = 2,
    'BOUNDARY' = 3
}
/**
 * Actions being taken to mitigate/prevent fence breach
 */
export declare enum FenceMitigate {
    'UNKNOWN' = 0,
    'NONE' = 1,
    'VEL_LIMIT' = 2
}
/**
 * Enumeration of possible mount operation modes
 */
export declare enum MavMountMode {
    'RETRACT' = 0,
    'NEUTRAL' = 1,
    'MAVLINK_TARGETING' = 2,
    'RC_TARGETING' = 3,
    'GPS_POINT' = 4,
    'SYSID_TARGET' = 5,
    'HOME_LOCATION' = 6
}
/**
 * Gripper actions.
 */
export declare enum GripperActions {
    'RELEASE' = 0,
    'GRAB' = 1
}
/**
 * Winch actions.
 */
export declare enum WinchActions {
    'RELAXED' = 0,
    'RELATIVE_LENGTH_CONTROL' = 1,
    'RATE_CONTROL' = 2
}
/**
 * Generalized UAVCAN node health
 */
export declare enum UavcanNodeHealth {
    'OK' = 0,
    'WARNING' = 1,
    'ERROR' = 2,
    'CRITICAL' = 3
}
/**
 * Generalized UAVCAN node mode
 */
export declare enum UavcanNodeMode {
    'OPERATIONAL' = 0,
    'INITIALIZATION' = 1,
    'MAINTENANCE' = 2,
    'SOFTWARE_UPDATE' = 3,
    'OFFLINE' = 7
}
/**
 * Flags to indicate the status of camera storage.
 */
export declare enum StorageStatus {
    'EMPTY' = 0,
    'UNFORMATTED' = 1,
    'READY' = 2,
    /**
     * Camera does not supply storage status information. Capacity information in STORAGE_INFORMATION
     * fields will be ignored.
     */
    'NOT_SUPPORTED' = 3
}
/**
 * Commands to be executed by the MAV. They can be executed on user request, or as part of a mission
 * script. If the action is used in a mission, the parameter mapping to the waypoint/mission message is
 * as follows: Param 1, Param 2, Param 3, Param 4, X: Param 5, Y:Param 6, Z:Param 7. This command list
 * is similar what ARINC 424 is for commercial aircraft: A data format how to interpret
 * waypoint/mission data. NaN and INT32_MAX may be used in float/integer params (respectively) to
 * indicate optional/default values (e.g. to use the component's current yaw or latitude rather than a
 * specific value). See https://mavlink.io/en/guide/xml_schema.html#MAV_CMD for information about the
 * structure of the MAV_CMD entries
 */
export declare enum MavCmd {
    'NAV_WAYPOINT' = 16,
    'NAV_LOITER_UNLIM' = 17,
    'NAV_LOITER_TURNS' = 18,
    'NAV_LOITER_TIME' = 19,
    'NAV_RETURN_TO_LAUNCH' = 20,
    'NAV_LAND' = 21,
    /**
     * Takeoff from ground / hand. Vehicles that support multiple takeoff modes (e.g. VTOL quadplane)
     * should take off using the currently configured mode.
     */
    'NAV_TAKEOFF' = 22,
    'NAV_LAND_LOCAL' = 23,
    'NAV_TAKEOFF_LOCAL' = 24,
    'NAV_FOLLOW' = 25,
    /**
     * Continue on the current course and climb/descend to specified altitude. When the altitude is reached
     * continue to the next command (i.e., don't proceed to the next command until the desired altitude is
     * reached.
     */
    'NAV_CONTINUE_AND_CHANGE_ALT' = 30,
    /**
     * Begin loiter at the specified Latitude and Longitude. If Lat=Lon=0, then loiter at the current
     * position. Don't consider the navigation command complete (don't leave loiter) until the altitude has
     * been reached. Additionally, if the Heading Required parameter is non-zero the aircraft will not
     * leave the loiter until heading toward the next waypoint.
     */
    'NAV_LOITER_TO_ALT' = 31,
    'DO_FOLLOW' = 32,
    'DO_FOLLOW_REPOSITION' = 33,
    /**
     * Sets the region of interest (ROI) for a sensor set or the vehicle itself. This can then be used by
     * the vehicle's control system to control the vehicle attitude and the attitude of various sensors
     * such as cameras.
     */
    'NAV_ROI' = 80,
    'NAV_PATHPLANNING' = 81,
    'NAV_SPLINE_WAYPOINT' = 82,
    'NAV_VTOL_TAKEOFF' = 84,
    'NAV_VTOL_LAND' = 85,
    'NAV_GUIDED_ENABLE' = 92,
    'NAV_DELAY' = 93,
    /**
     * Descend and place payload. Vehicle moves to specified location, descends until it detects a hanging
     * payload has reached the ground, and then releases the payload. If ground is not detected before the
     * reaching the maximum descent value (param1), the command will complete without releasing the
     * payload.
     */
    'NAV_PAYLOAD_PLACE' = 94,
    /**
     * NOP - This command is only used to mark the upper limit of the NAV/ACTION commands in the
     * enumeration
     */
    'NAV_LAST' = 95,
    'CONDITION_DELAY' = 112,
    /**
     * Ascend/descend to target altitude at specified rate. Delay mission state machine until desired
     * altitude reached.
     */
    'CONDITION_CHANGE_ALT' = 113,
    'CONDITION_DISTANCE' = 114,
    'CONDITION_YAW' = 115,
    'CONDITION_LAST' = 159,
    'DO_SET_MODE' = 176,
    /**
     * Jump to the desired command in the mission list. Repeat this action only the specified number of
     * times
     */
    'DO_JUMP' = 177,
    'DO_CHANGE_SPEED' = 178,
    'DO_SET_HOME' = 179,
    /**
     * Set a system parameter. Caution! Use of this command requires knowledge of the numeric enumeration
     * value of the parameter.
     */
    'DO_SET_PARAMETER' = 180,
    'DO_SET_RELAY' = 181,
    'DO_REPEAT_RELAY' = 182,
    'DO_SET_SERVO' = 183,
    /**
     * Cycle a between its nominal setting and a desired PWM for a desired number of cycles with a desired
     * period.
     */
    'DO_REPEAT_SERVO' = 184,
    'DO_FLIGHTTERMINATION' = 185,
    'DO_CHANGE_ALTITUDE' = 186,
    /**
     * Mission command to perform a landing. This is used as a marker in a mission to tell the autopilot
     * where a sequence of mission items that represents a landing starts. It may also be sent via a
     * COMMAND_LONG to trigger a landing, in which case the nearest (geographically) landing sequence in
     * the mission will be used. The Latitude/Longitude is optional, and may be set to 0 if not needed. If
     * specified then it will be used to help find the closest landing sequence.
     */
    'DO_LAND_START' = 189,
    'DO_RALLY_LAND' = 190,
    'DO_GO_AROUND' = 191,
    'DO_REPOSITION' = 192,
    'DO_PAUSE_CONTINUE' = 193,
    'DO_SET_REVERSE' = 194,
    /**
     * Sets the region of interest (ROI) to a location. This can then be used by the vehicle's control
     * system to control the vehicle attitude and the attitude of various sensors such as cameras.
     */
    'DO_SET_ROI_LOCATION' = 195,
    /**
     * Sets the region of interest (ROI) to be toward next waypoint, with optional pitch/roll/yaw offset.
     * This can then be used by the vehicle's control system to control the vehicle attitude and the
     * attitude of various sensors such as cameras.
     */
    'DO_SET_ROI_WPNEXT_OFFSET' = 196,
    /**
     * Cancels any previous ROI command returning the vehicle/sensors to default flight characteristics.
     * This can then be used by the vehicle's control system to control the vehicle attitude and the
     * attitude of various sensors such as cameras.
     */
    'DO_SET_ROI_NONE' = 197,
    /**
     * Mount tracks system with specified system ID. Determination of target vehicle position may be done
     * with GLOBAL_POSITION_INT or any other means.
     */
    'DO_SET_ROI_SYSID' = 198,
    'DO_CONTROL_VIDEO' = 200,
    /**
     * Sets the region of interest (ROI) for a sensor set or the vehicle itself. This can then be used by
     * the vehicle's control system to control the vehicle attitude and the attitude of various sensors
     * such as cameras.
     */
    'DO_SET_ROI' = 201,
    /**
     * Configure digital camera. This is a fallback message for systems that have not yet implemented
     * PARAM_EXT_XXX messages and camera definition files (see
     * https://mavlink.io/en/services/camera_def.html ).
     */
    'DO_DIGICAM_CONFIGURE' = 202,
    /**
     * Control digital camera. This is a fallback message for systems that have not yet implemented
     * PARAM_EXT_XXX messages and camera definition files (see
     * https://mavlink.io/en/services/camera_def.html ).
     */
    'DO_DIGICAM_CONTROL' = 203,
    'DO_MOUNT_CONFIGURE' = 204,
    'DO_MOUNT_CONTROL' = 205,
    /**
     * Mission command to set camera trigger distance for this flight. The camera is triggered each time
     * this distance is exceeded. This command can also be used to set the shutter integration time for the
     * camera.
     */
    'DO_SET_CAM_TRIGG_DIST' = 206,
    'DO_FENCE_ENABLE' = 207,
    'DO_PARACHUTE' = 208,
    'DO_MOTOR_TEST' = 209,
    'DO_INVERTED_FLIGHT' = 210,
    'DO_GRIPPER' = 211,
    'DO_AUTOTUNE_ENABLE' = 212,
    'NAV_SET_YAW_SPEED' = 213,
    /**
     * Mission command to set camera trigger interval for this flight. If triggering is enabled, the camera
     * is triggered each time this interval expires. This command can also be used to set the shutter
     * integration time for the camera.
     */
    'DO_SET_CAM_TRIGG_INTERVAL' = 214,
    'DO_MOUNT_CONTROL_QUAT' = 220,
    'DO_GUIDED_MASTER' = 221,
    'DO_GUIDED_LIMITS' = 222,
    /**
     * Control vehicle engine. This is interpreted by the vehicles engine controller to change the target
     * engine state. It is intended for vehicles with internal combustion engines
     */
    'DO_ENGINE_CONTROL' = 223,
    /**
     * Set the mission item with sequence number seq as current item. This means that the MAV will continue
     * to this mission item on the shortest path (not following the mission items in-between).
     */
    'DO_SET_MISSION_CURRENT' = 224,
    'DO_LAST' = 240,
    /**
     * Trigger calibration. This command will be only accepted if in pre-flight mode. Except for
     * Temperature Calibration, only one sensor should be set in a single message and all others should be
     * zero.
     */
    'PREFLIGHT_CALIBRATION' = 241,
    'PREFLIGHT_SET_SENSOR_OFFSETS' = 242,
    /**
     * Trigger UAVCAN configuration (actuator ID assignment and direction mapping). Note that this maps to
     * the legacy UAVCAN v0 function UAVCAN_ENUMERATE, which is intended to be executed just once during
     * initial vehicle configuration (it is not a normal pre-flight command and has been poorly named).
     */
    'PREFLIGHT_UAVCAN' = 243,
    /**
     * Request storage of different parameter values and logs. This command will be only accepted if in
     * pre-flight mode.
     */
    'PREFLIGHT_STORAGE' = 245,
    'PREFLIGHT_REBOOT_SHUTDOWN' = 246,
    /**
     * Override current mission with command to pause mission, pause mission and move to position,
     * continue/resume mission. When param 1 indicates that the mission is paused (MAV_GOTO_DO_HOLD), param
     * 2 defines whether it holds in place or moves to another position.
     */
    'OVERRIDE_GOTO' = 252,
    /**
     * Mission command to set a Camera Auto Mount Pivoting Oblique Survey (Replaces CAM_TRIGG_DIST for this
     * purpose). The camera is triggered each time this distance is exceeded, then the mount moves to the
     * next position. Params 4~6 set-up the angle limits and number of positions for oblique survey, where
     * mount-enabled vehicles automatically roll the camera between shots to emulate an oblique camera
     * setup (providing an increased HFOV). This command can also be used to set the shutter integration
     * time for the camera.
     */
    'OBLIQUE_SURVEY' = 260,
    'MISSION_START' = 300,
    'COMPONENT_ARM_DISARM' = 400,
    /**
     * Instructs system to run pre-arm checks. This command should return MAV_RESULT_TEMPORARILY_REJECTED
     * in the case the system is armed, otherwse MAV_RESULT_ACCEPTED. Note that the return value from
     * executing this command does not indicate whether the vehicle is armable or not, just whether the
     * system has successfully run/is currently running the checks. The result of the checks is reflected
     * in the SYS_STATUS message.
     */
    'RUN_PREARM_CHECKS' = 401,
    'GET_HOME_POSITION' = 410,
    'START_RX_PAIR' = 500,
    /**
     * Request the interval between messages for a particular MAVLink message ID. The receiver should ACK
     * the command and then emit its response in a MESSAGE_INTERVAL message.
     */
    'GET_MESSAGE_INTERVAL' = 510,
    /**
     * Set the interval between messages for a particular MAVLink message ID. This interface replaces
     * REQUEST_DATA_STREAM.
     */
    'SET_MESSAGE_INTERVAL' = 511,
    /**
     * Request the target system(s) emit a single instance of a specified message (i.e. a "one-shot"
     * version of MAV_CMD_SET_MESSAGE_INTERVAL).
     */
    'REQUEST_MESSAGE' = 512,
    /**
     * Request MAVLink protocol version compatibility. All receivers should ACK the command and then emit
     * their capabilities in an PROTOCOL_VERSION message
     */
    'REQUEST_PROTOCOL_VERSION' = 519,
    /**
     * Request autopilot capabilities. The receiver should ACK the command and then emit its capabilities
     * in an AUTOPILOT_VERSION message
     */
    'REQUEST_AUTOPILOT_CAPABILITIES' = 520,
    'REQUEST_CAMERA_INFORMATION' = 521,
    'REQUEST_CAMERA_SETTINGS' = 522,
    /**
     * Request storage information (STORAGE_INFORMATION). Use the command's target_component to target a
     * specific component's storage.
     */
    'REQUEST_STORAGE_INFORMATION' = 525,
    /**
     * Format a storage medium. Once format is complete, a STORAGE_INFORMATION message is sent. Use the
     * command's target_component to target a specific component's storage.
     */
    'STORAGE_FORMAT' = 526,
    'REQUEST_CAMERA_CAPTURE_STATUS' = 527,
    'REQUEST_FLIGHT_INFORMATION' = 528,
    'RESET_CAMERA_SETTINGS' = 529,
    /**
     * Set camera running mode. Use NaN for reserved values. GCS will send a
     * MAV_CMD_REQUEST_VIDEO_STREAM_STATUS command after a mode change if the camera supports video
     * streaming.
     */
    'SET_CAMERA_MODE' = 530,
    'JUMP_TAG' = 600,
    /**
     * Jump to the matching tag in the mission list. Repeat this action for the specified number of times.
     * A mission should contain a single matching tag for each jump. If this is not the case then a jump to
     * a missing tag should complete the mission, and a jump where there are multiple matching tags should
     * always select the one with the lowest mission sequence number.
     */
    'DO_JUMP_TAG' = 601,
    /**
     * Start image capture sequence. Sends CAMERA_IMAGE_CAPTURED after each capture. Use NaN for reserved
     * values.
     */
    'IMAGE_START_CAPTURE' = 2000,
    'IMAGE_STOP_CAPTURE' = 2001,
    'DO_TRIGGER_CONTROL' = 2003,
    'VIDEO_START_CAPTURE' = 2500,
    'VIDEO_STOP_CAPTURE' = 2501,
    'VIDEO_START_STREAMING' = 2502,
    'VIDEO_STOP_STREAMING' = 2503,
    'REQUEST_VIDEO_STREAM_INFORMATION' = 2504,
    'REQUEST_VIDEO_STREAM_STATUS' = 2505,
    'LOGGING_START' = 2510,
    'LOGGING_STOP' = 2511,
    'AIRFRAME_CONFIGURATION' = 2520,
    'CONTROL_HIGH_LATENCY' = 2600,
    'PANORAMA_CREATE' = 2800,
    'DO_VTOL_TRANSITION' = 3000,
    /**
     * Request authorization to arm the vehicle to a external entity, the arm authorizer is responsible to
     * request all data that is needs from the vehicle before authorize or deny the request. If approved
     * the progress of command_ack message should be set with period of time that this authorization is
     * valid in seconds or in case it was denied it should be set with one of the reasons in
     * ARM_AUTH_DENIED_REASON.
     */
    'ARM_AUTHORIZATION_REQUEST' = 3001,
    /**
     * This command sets the submode to standard guided when vehicle is in guided mode. The vehicle holds
     * position and altitude and the user can input the desired velocities along all three axes.
     */
    'SET_GUIDED_SUBMODE_STANDARD' = 4000,
    /**
     * This command sets submode circle when vehicle is in guided mode. Vehicle flies along a circle facing
     * the center of the circle. The user can input the velocity along the circle and change the radius. If
     * no input is given the vehicle will hold position.
     */
    'SET_GUIDED_SUBMODE_CIRCLE' = 4001,
    /**
     * Fence return point (there can only be one such point in a geofence definition). If rally points are
     * supported they should be used instead.
     */
    'NAV_FENCE_RETURN_POINT' = 5000,
    /**
     * Fence vertex for an inclusion polygon (the polygon must not be self-intersecting). The vehicle must
     * stay within this area. Minimum of 3 vertices required.
     */
    'NAV_FENCE_POLYGON_VERTEX_INCLUSION' = 5001,
    /**
     * Fence vertex for an exclusion polygon (the polygon must not be self-intersecting). The vehicle must
     * stay outside this area. Minimum of 3 vertices required.
     */
    'NAV_FENCE_POLYGON_VERTEX_EXCLUSION' = 5002,
    'NAV_FENCE_CIRCLE_INCLUSION' = 5003,
    'NAV_FENCE_CIRCLE_EXCLUSION' = 5004,
    'NAV_RALLY_POINT' = 5100,
    'NAV_SWARM_ROI_POLYGON_VERTEX_INCLUSION' = 5109,
    /**
     * Commands the vehicle to respond with a sequence of messages UAVCAN_NODE_INFO, one message per every
     * UAVCAN node that is online. Note that some of the response messages can be lost, which the receiver
     * can detect easily by checking whether every received UAVCAN_NODE_STATUS has a matching message
     * UAVCAN_NODE_INFO received earlier; if not, this command should be sent again in order to request
     * re-transmission of the node information messages.
     */
    'UAVCAN_GET_NODE_INFO' = 5200,
    /**
     * Deploy payload on a Lat / Lon / Alt position. This includes the navigation to reach the required
     * release position and velocity.
     */
    'PAYLOAD_PREPARE_DEPLOY' = 30001,
    'PAYLOAD_CONTROL_DEPLOY' = 30002,
    /**
     * Magnetometer calibration based on provided known yaw. This allows for fast calibration using WMM
     * field tables in the vehicle, given only the known yaw of the vehicle. If Latitude and longitude are
     * both zero then use the current vehicle location.
     */
    'FIXED_MAG_CAL_YAW' = 42006,
    'DO_WINCH' = 42600,
    'WAYPOINT_USER_1' = 31000,
    'WAYPOINT_USER_2' = 31001,
    'WAYPOINT_USER_3' = 31002,
    'WAYPOINT_USER_4' = 31003,
    'WAYPOINT_USER_5' = 31004,
    /**
     * User defined spatial item. Ground Station will not show the Vehicle as flying through this item.
     * Example: ROI item.
     */
    'SPATIAL_USER_1' = 31005,
    /**
     * User defined spatial item. Ground Station will not show the Vehicle as flying through this item.
     * Example: ROI item.
     */
    'SPATIAL_USER_2' = 31006,
    /**
     * User defined spatial item. Ground Station will not show the Vehicle as flying through this item.
     * Example: ROI item.
     */
    'SPATIAL_USER_3' = 31007,
    /**
     * User defined spatial item. Ground Station will not show the Vehicle as flying through this item.
     * Example: ROI item.
     */
    'SPATIAL_USER_4' = 31008,
    /**
     * User defined spatial item. Ground Station will not show the Vehicle as flying through this item.
     * Example: ROI item.
     */
    'SPATIAL_USER_5' = 31009,
    /**
     * User defined command. Ground Station will not show the Vehicle as flying through this item. Example:
     * MAV_CMD_DO_SET_PARAMETER item.
     */
    'USER_1' = 31010,
    /**
     * User defined command. Ground Station will not show the Vehicle as flying through this item. Example:
     * MAV_CMD_DO_SET_PARAMETER item.
     */
    'USER_2' = 31011,
    /**
     * User defined command. Ground Station will not show the Vehicle as flying through this item. Example:
     * MAV_CMD_DO_SET_PARAMETER item.
     */
    'USER_3' = 31012,
    /**
     * User defined command. Ground Station will not show the Vehicle as flying through this item. Example:
     * MAV_CMD_DO_SET_PARAMETER item.
     */
    'USER_4' = 31013,
    /**
     * User defined command. Ground Station will not show the Vehicle as flying through this item. Example:
     * MAV_CMD_DO_SET_PARAMETER item.
     */
    'USER_5' = 31014
}
/**
 * A data stream is not a fixed set of messages, but rather a recommendation to the autopilot software.
 * Individual autopilots may or may not obey the recommended messages.
 */
export declare enum MavDataStream {
    'ALL' = 0,
    'RAW_SENSORS' = 1,
    'EXTENDED_STATUS' = 2,
    'RC_CHANNELS' = 3,
    'RAW_CONTROLLER' = 4,
    'POSITION' = 6,
    'EXTRA1' = 10,
    'EXTRA2' = 11,
    'EXTRA3' = 12
}
/**
 * The ROI (region of interest) for the vehicle. This can be be used by the vehicle for camera/vehicle
 * attitude alignment (see MAV_CMD_NAV_ROI).
 */
export declare enum MavRoi {
    'NONE' = 0,
    'WPNEXT' = 1,
    'WPINDEX' = 2,
    'LOCATION' = 3,
    'TARGET' = 4
}
/**
 * ACK / NACK / ERROR values as a result of MAV_CMDs and for mission item transmission.
 */
export declare enum MavCmdAck {
    'OK' = 0,
    /**
     * Generic error message if none of the other reasons fails or if no detailed error reporting is
     * implemented.
     */
    'ERR_FAIL' = 1,
    'ERR_ACCESS_DENIED' = 2,
    'ERR_NOT_SUPPORTED' = 3,
    'ERR_COORDINATE_FRAME_NOT_SUPPORTED' = 4,
    /**
     * The coordinate frame of this command is ok, but he coordinate values exceed the safety limits of
     * this system. This is a generic error, please use the more specific error messages below if possible.
     */
    'ERR_COORDINATES_OUT_OF_RANGE' = 5,
    'ERR_X_LAT_OUT_OF_RANGE' = 6,
    'ERR_Y_LON_OUT_OF_RANGE' = 7,
    'ERR_Z_ALT_OUT_OF_RANGE' = 8
}
/**
 * Specifies the datatype of a MAVLink parameter.
 */
export declare enum MavParamType {
    'UINT8' = 1,
    'INT8' = 2,
    'UINT16' = 3,
    'INT16' = 4,
    'UINT32' = 5,
    'INT32' = 6,
    'UINT64' = 7,
    'INT64' = 8,
    'REAL32' = 9,
    'REAL64' = 10
}
/**
 * Result from a MAVLink command (MAV_CMD)
 */
export declare enum MavResult {
    'ACCEPTED' = 0,
    /**
     * Command is valid, but cannot be executed at this time. This is used to indicate a problem that
     * should be fixed just by waiting (e.g. a state machine is busy, can't arm because have not got GPS
     * lock, etc.). Retrying later should work.
     */
    'TEMPORARILY_REJECTED' = 1,
    /**
     * Command is invalid (is supported but has invalid parameters). Retrying same command and parameters
     * will not work.
     */
    'DENIED' = 2,
    'UNSUPPORTED' = 3,
    /**
     * Command is valid, but execution has failed. This is used to indicate any non-temporary or unexpected
     * problem, i.e. any problem that must be fixed before the command can succeed/be retried. For example,
     * attempting to write a file when out of memory, attempting to arm when sensors are not calibrated,
     * etc.
     */
    'FAILED' = 4,
    /**
     * Command is valid and is being executed. This will be followed by further progress updates, i.e. the
     * component may send further COMMAND_ACK messages with result MAV_RESULT_IN_PROGRESS (at a rate
     * decided by the implementation), and must terminate by sending a COMMAND_ACK message with final
     * result of the operation. The COMMAND_ACK.progress field can be used to indicate the progress of the
     * operation. There is no need for the sender to retry the command, but if done during execution, the
     * component will return MAV_RESULT_IN_PROGRESS with an updated progress.
     */
    'IN_PROGRESS' = 5
}
/**
 * Result of mission operation (in a MISSION_ACK message).
 */
export declare enum MavMissionResult {
    'ACCEPTED' = 0,
    'ERROR' = 1,
    'UNSUPPORTED_FRAME' = 2,
    'UNSUPPORTED' = 3,
    'NO_SPACE' = 4,
    'INVALID' = 5,
    'INVALID_PARAM1' = 6,
    'INVALID_PARAM2' = 7,
    'INVALID_PARAM3' = 8,
    'INVALID_PARAM4' = 9,
    'INVALID_PARAM5_X' = 10,
    'INVALID_PARAM6_Y' = 11,
    'INVALID_PARAM7' = 12,
    'INVALID_SEQUENCE' = 13,
    'DENIED' = 14,
    'OPERATION_CANCELLED' = 15
}
/**
 * Indicates the severity level, generally used for status messages to indicate their relative urgency.
 * Based on RFC-5424 using expanded definitions at:
 * http://www.kiwisyslog.com/kb/info:-syslog-message-levels/.
 */
export declare enum MavSeverity {
    'EMERGENCY' = 0,
    'ALERT' = 1,
    'CRITICAL' = 2,
    'ERROR' = 3,
    /**
     * Indicates about a possible future error if this is not resolved within a given timeframe. Example
     * would be a low battery warning.
     */
    'WARNING' = 4,
    /**
     * An unusual event has occurred, though not an error condition. This should be investigated for the
     * root cause.
     */
    'NOTICE' = 5,
    'INFO' = 6,
    /**
     * Useful non-operational messages that can assist in debugging. These should not occur during normal
     * operation.
     */
    'DEBUG' = 7
}
/**
 * Power supply status flags (bitmask)
 */
export declare enum MavPowerStatus {
    'BRICK_VALID' = 1,
    'SERVO_VALID' = 2,
    'USB_CONNECTED' = 4,
    'PERIPH_OVERCURRENT' = 8,
    'PERIPH_HIPOWER_OVERCURRENT' = 16,
    'CHANGED' = 32
}
/**
 * SERIAL_CONTROL device types
 */
export declare enum SerialControlDev {
    'DEV_TELEM1' = 0,
    'DEV_TELEM2' = 1,
    'DEV_GPS1' = 2,
    'DEV_GPS2' = 3,
    'DEV_SHELL' = 10,
    'SERIAL0' = 100,
    'SERIAL1' = 101,
    'SERIAL2' = 102,
    'SERIAL3' = 103,
    'SERIAL4' = 104,
    'SERIAL5' = 105,
    'SERIAL6' = 106,
    'SERIAL7' = 107,
    'SERIAL8' = 108,
    'SERIAL9' = 109
}
/**
 * SERIAL_CONTROL flags (bitmask)
 */
export declare enum SerialControlFlag {
    'REPLY' = 1,
    'RESPOND' = 2,
    /**
     * Set if access to the serial port should be removed from whatever driver is currently using it,
     * giving exclusive access to the SERIAL_CONTROL protocol. The port can be handed back by sending a
     * request without this flag set
     */
    'EXCLUSIVE' = 4,
    'BLOCKING' = 8,
    'MULTI' = 16
}
/**
 * Enumeration of distance sensor types
 */
export declare enum MavDistanceSensor {
    'LASER' = 0,
    'ULTRASOUND' = 1,
    'INFRARED' = 2,
    'RADAR' = 3,
    'UNKNOWN' = 4
}
/**
 * Enumeration of sensor orientation, according to its rotations
 */
export declare enum MavSensorOrientation {
    'NONE' = 0,
    'YAW_45' = 1,
    'YAW_90' = 2,
    'YAW_135' = 3,
    'YAW_180' = 4,
    'YAW_225' = 5,
    'YAW_270' = 6,
    'YAW_315' = 7,
    'ROLL_180' = 8,
    'ROLL_180_YAW_45' = 9,
    'ROLL_180_YAW_90' = 10,
    'ROLL_180_YAW_135' = 11,
    'PITCH_180' = 12,
    'ROLL_180_YAW_225' = 13,
    'ROLL_180_YAW_270' = 14,
    'ROLL_180_YAW_315' = 15,
    'ROLL_90' = 16,
    'ROLL_90_YAW_45' = 17,
    'ROLL_90_YAW_90' = 18,
    'ROLL_90_YAW_135' = 19,
    'ROLL_270' = 20,
    'ROLL_270_YAW_45' = 21,
    'ROLL_270_YAW_90' = 22,
    'ROLL_270_YAW_135' = 23,
    'PITCH_90' = 24,
    'PITCH_270' = 25,
    'PITCH_180_YAW_90' = 26,
    'PITCH_180_YAW_270' = 27,
    'ROLL_90_PITCH_90' = 28,
    'ROLL_180_PITCH_90' = 29,
    'ROLL_270_PITCH_90' = 30,
    'ROLL_90_PITCH_180' = 31,
    'ROLL_270_PITCH_180' = 32,
    'ROLL_90_PITCH_270' = 33,
    'ROLL_180_PITCH_270' = 34,
    'ROLL_270_PITCH_270' = 35,
    'ROLL_90_PITCH_180_YAW_90' = 36,
    'ROLL_90_YAW_270' = 37,
    'ROLL_90_PITCH_68_YAW_293' = 38,
    'PITCH_315' = 39,
    'ROLL_90_PITCH_315' = 40,
    'CUSTOM' = 100
}
/**
 * Bitmask of (optional) autopilot capabilities (64 bit). If a bit is set, the autopilot supports this
 * capability.
 */
export declare enum MavProtocolCapability {
    'MISSION_FLOAT' = 1,
    'PARAM_FLOAT' = 2,
    'MISSION_INT' = 4,
    'COMMAND_INT' = 8,
    'PARAM_UNION' = 16,
    'FTP' = 32,
    'SET_ATTITUDE_TARGET' = 64,
    'SET_POSITION_TARGET_LOCAL_NED' = 128,
    'SET_POSITION_TARGET_GLOBAL_INT' = 256,
    'TERRAIN' = 512,
    'SET_ACTUATOR_TARGET' = 1024,
    'FLIGHT_TERMINATION' = 2048,
    'COMPASS_CALIBRATION' = 4096,
    'MAVLINK2' = 8192,
    'MISSION_FENCE' = 16384,
    'MISSION_RALLY' = 32768,
    'FLIGHT_INFORMATION' = 65536
}
/**
 * Type of mission items being requested/sent in mission protocol.
 */
export declare enum MavMissionType {
    'MISSION' = 0,
    'FENCE' = 1,
    /**
     * Specifies the rally points for the vehicle. Rally points are alternative RTL points. Items are
     * MAV_CMD_NAV_RALLY_POINT rally point items.
     */
    'RALLY' = 2,
    /**
     * Specifies Swarm Region-of-Interest. Items are either MAV_CMD_NAV_FENCE_POLYGON_VERTEX_INCLUSION or
     * MAV_CMD_NAV_FENCE_CIRCLE_INCLUSION.
     */
    'SWARM_ROI' = 3,
    'ALL' = 255
}
/**
 * Enumeration of estimator types
 */
export declare enum MavEstimatorType {
    'UNKNOWN' = 0,
    'NAIVE' = 1,
    'VISION' = 2,
    'VIO' = 3,
    'GPS' = 4,
    'GPS_INS' = 5,
    'MOCAP' = 6,
    'LIDAR' = 7,
    'AUTOPILOT' = 8
}
/**
 * Enumeration of battery types
 */
export declare enum MavBatteryType {
    'UNKNOWN' = 0,
    'LIPO' = 1,
    'LIFE' = 2,
    'LION' = 3,
    'NIMH' = 4
}
/**
 * Enumeration of battery functions
 */
export declare enum MavBatteryFunction {
    'FUNCTION_UNKNOWN' = 0,
    'FUNCTION_ALL' = 1,
    'FUNCTION_PROPULSION' = 2,
    'FUNCTION_AVIONICS' = 3,
    'TYPE_PAYLOAD' = 4
}
/**
 * Enumeration for battery charge states.
 */
export declare enum MavBatteryChargeState {
    'UNDEFINED' = 0,
    'OK' = 1,
    'LOW' = 2,
    'CRITICAL' = 3,
    /**
     * Battery state is too low for ordinary abort sequence. Perform fastest possible emergency stop to
     * prevent damage.
     */
    'EMERGENCY' = 4,
    'FAILED' = 5,
    'UNHEALTHY' = 6,
    'CHARGING' = 7
}
/**
 * Flags to report status/failure cases for a power generator (used in GENERATOR_STATUS). Note that
 * FAULTS are conditions that cause the generator to fail. Warnings are conditions that require
 * attention before the next use (they indicate the system is not operating properly).
 */
export declare enum MavGeneratorStatusFlag {
    'OFF' = 1,
    'READY' = 2,
    'GENERATING' = 4,
    'CHARGING' = 8,
    'REDUCED_POWER' = 16,
    'MAXPOWER' = 32,
    'OVERTEMP_WARNING' = 64,
    'OVERTEMP_FAULT' = 128,
    'ELECTRONICS_OVERTEMP_WARNING' = 256,
    'ELECTRONICS_OVERTEMP_FAULT' = 512,
    'ELECTRONICS_FAULT' = 1024,
    /**
     * The power source supplying the generator failed e.g. mechanical generator stopped, tether is no
     * longer providing power, solar cell is in shade, hydrogen reaction no longer happening.
     */
    'POWERSOURCE_FAULT' = 2048,
    'COMMUNICATION_WARNING' = 4096,
    'COOLING_WARNING' = 8192,
    'POWER_RAIL_FAULT' = 16384,
    'OVERCURRENT_FAULT' = 32768,
    /**
     * Generator controller detected a high current going into the batteries and shutdown to prevent
     * battery damage.
     */
    'BATTERY_OVERCHARGE_CURRENT_FAULT' = 65536,
    /**
     * Generator controller exceeded it's overvoltage threshold and shutdown to prevent it exceeding the
     * voltage rating.
     */
    'OVERVOLTAGE_FAULT' = 131072,
    'BATTERY_UNDERVOLT_FAULT' = 262144,
    'START_INHIBITED' = 524288,
    'MAINTENANCE_REQUIRED' = 1048576,
    'WARMING_UP' = 2097152,
    'IDLE' = 4194304
}
/**
 * Enumeration of VTOL states
 */
export declare enum MavVtolState {
    'UNDEFINED' = 0,
    'TRANSITION_TO_FW' = 1,
    'TRANSITION_TO_MC' = 2,
    'MC' = 3,
    'FW' = 4
}
/**
 * Enumeration of landed detector states
 */
export declare enum MavLandedState {
    'UNDEFINED' = 0,
    'ON_GROUND' = 1,
    'IN_AIR' = 2,
    'TAKEOFF' = 3,
    'LANDING' = 4
}
/**
 * Enumeration of the ADSB altimeter types
 */
export declare enum AdsbAltitudeType {
    'PRESSURE_QNH' = 0,
    'GEOMETRIC' = 1
}
/**
 * ADSB classification for the type of vehicle emitting the transponder signal
 */
export declare enum AdsbEmitterType {
    'NO_INFO' = 0,
    'LIGHT' = 1,
    'SMALL' = 2,
    'LARGE' = 3,
    'HIGH_VORTEX_LARGE' = 4,
    'HEAVY' = 5,
    'HIGHLY_MANUV' = 6,
    'ROTOCRAFT' = 7,
    'UNASSIGNED' = 8,
    'GLIDER' = 9,
    'LIGHTER_AIR' = 10,
    'PARACHUTE' = 11,
    'ULTRA_LIGHT' = 12,
    'UNASSIGNED2' = 13,
    'UAV' = 14,
    'SPACE' = 15,
    'UNASSGINED3' = 16,
    'EMERGENCY_SURFACE' = 17,
    'SERVICE_SURFACE' = 18,
    'POINT_OBSTACLE' = 19
}
/**
 * These flags indicate status such as data validity of each data source. Set = data valid
 */
export declare enum AdsbFlags {
    'VALID_COORDS' = 1,
    'VALID_ALTITUDE' = 2,
    'VALID_HEADING' = 4,
    'VALID_VELOCITY' = 8,
    'VALID_CALLSIGN' = 16,
    'VALID_SQUAWK' = 32,
    'SIMULATED' = 64,
    'VERTICAL_VELOCITY_VALID' = 128,
    'BARO_VALID' = 256,
    'SOURCE_UAT' = 32768
}
/**
 * Bitmap of options for the MAV_CMD_DO_REPOSITION
 */
export declare enum MavDoRepositionFlags {
    /**
     * The aircraft should immediately transition into guided. This should not be set for follow me
     * applications
     */
    'CHANGE_MODE' = 1
}
/**
 * Flags in ESTIMATOR_STATUS message
 */
export declare enum EstimatorStatusFlags {
    'ATTITUDE' = 1,
    'VELOCITY_HORIZ' = 2,
    'VELOCITY_VERT' = 4,
    'POS_HORIZ_REL' = 8,
    'POS_HORIZ_ABS' = 16,
    'POS_VERT_ABS' = 32,
    'POS_VERT_AGL' = 64,
    /**
     * True if the EKF is in a constant position mode and is not using external measurements (eg GPS or
     * optical flow)
     */
    'CONST_POS_MODE' = 128,
    'PRED_POS_HORIZ_REL' = 256,
    'PRED_POS_HORIZ_ABS' = 512,
    'GPS_GLITCH' = 1024,
    'ACCEL_ERROR' = 2048
}
/**
 * MOTOR_TEST_ORDER
 */
export declare enum MotorTestOrder {
    'DEFAULT' = 0,
    'SEQUENCE' = 1,
    'BOARD' = 2
}
/**
 * MOTOR_TEST_THROTTLE_TYPE
 */
export declare enum MotorTestThrottleType {
    'THROTTLE_PERCENT' = 0,
    'THROTTLE_PWM' = 1,
    'THROTTLE_PILOT' = 2,
    'COMPASS_CAL' = 3
}
/**
 * GPS_INPUT_IGNORE_FLAGS
 */
export declare enum GpsInputIgnoreFlags {
    'ALT' = 1,
    'HDOP' = 2,
    'VDOP' = 4,
    'VEL_HORIZ' = 8,
    'VEL_VERT' = 16,
    'SPEED_ACCURACY' = 32,
    'HORIZONTAL_ACCURACY' = 64,
    'VERTICAL_ACCURACY' = 128
}
/**
 * Possible actions an aircraft can take to avoid a collision.
 */
export declare enum MavCollisionAction {
    'NONE' = 0,
    'REPORT' = 1,
    'ASCEND_OR_DESCEND' = 2,
    'MOVE_HORIZONTALLY' = 3,
    'MOVE_PERPENDICULAR' = 4,
    'RTL' = 5,
    'HOVER' = 6
}
/**
 * Aircraft-rated danger from this threat.
 */
export declare enum MavCollisionThreatLevel {
    'NONE' = 0,
    'LOW' = 1,
    'HIGH' = 2
}
/**
 * Source of information about this collision.
 */
export declare enum MavCollisionSrc {
    'ADSB' = 0,
    'MAVLINK_GPS_GLOBAL_INT' = 1
}
/**
 * Type of GPS fix
 */
export declare enum GpsFixType {
    'NO_GPS' = 0,
    'NO_FIX' = 1,
    'GPS_FIX_TYPE_2D_FIX' = 2,
    'GPS_FIX_TYPE_3D_FIX' = 3,
    'DGPS' = 4,
    'RTK_FLOAT' = 5,
    'RTK_FIXED' = 6,
    'STATIC' = 7,
    'PPP' = 8
}
/**
 * RTK GPS baseline coordinate system, used for RTK corrections
 */
export declare enum RtkBaselineCoordinateSystem {
    'ECEF' = 0,
    'NED' = 1
}
/**
 * Type of landing target
 */
export declare enum LandingTargetType {
    'LIGHT_BEACON' = 0,
    'RADIO_BEACON' = 1,
    'VISION_FIDUCIAL' = 2,
    'VISION_OTHER' = 3
}
/**
 * Direction of VTOL transition
 */
export declare enum VtolTransitionHeading {
    'VEHICLE_DEFAULT' = 0,
    'NEXT_WAYPOINT' = 1,
    'TAKEOFF' = 2,
    'SPECIFIED' = 3,
    /**
     * Use the current heading when reaching takeoff altitude (potentially facing the wind when
     * weather-vaning is active).
     */
    'ANY' = 4
}
/**
 * Camera capability flags (Bitmap)
 */
export declare enum CameraCapFlags {
    'CAPTURE_VIDEO' = 1,
    'CAPTURE_IMAGE' = 2,
    'HAS_MODES' = 4,
    'CAN_CAPTURE_IMAGE_IN_VIDEO_MODE' = 8,
    'CAN_CAPTURE_VIDEO_IN_IMAGE_MODE' = 16,
    'HAS_IMAGE_SURVEY_MODE' = 32,
    'HAS_BASIC_ZOOM' = 64,
    'HAS_BASIC_FOCUS' = 128,
    /**
     * Camera has video streaming capabilities (request VIDEO_STREAM_INFORMATION with
     * MAV_CMD_REQUEST_MESSAGE for video streaming info)
     */
    'HAS_VIDEO_STREAM' = 256,
    'HAS_TRACKING_POINT' = 512,
    'HAS_TRACKING_RECTANGLE' = 1024,
    'HAS_TRACKING_GEO_STATUS' = 2048
}
/**
 * Stream status flags (Bitmap)
 */
export declare enum VideoStreamStatusFlags {
    'RUNNING' = 1,
    'THERMAL' = 2
}
/**
 * Video stream types
 */
export declare enum VideoStreamType {
    'RTSP' = 0,
    'RTPUDP' = 1,
    'TCP_MPEG' = 2,
    'MPEG_TS_H264' = 3
}
/**
 * Camera Modes.
 */
export declare enum CameraMode {
    'IMAGE' = 0,
    'VIDEO' = 1,
    /**
     * Camera is in image survey capture mode. It allows for camera controller to do specific settings for
     * surveys.
     */
    'IMAGE_SURVEY' = 2
}
/**
 * MAV_ARM_AUTH_DENIED_REASON
 */
export declare enum MavArmAuthDeniedReason {
    'GENERIC' = 0,
    'NONE' = 1,
    'INVALID_WAYPOINT' = 2,
    'TIMEOUT' = 3,
    /**
     * Airspace of the mission in use by another vehicle, second result parameter can have the waypoint id
     * that caused it to be denied.
     */
    'AIRSPACE_IN_USE' = 4,
    'BAD_WEATHER' = 5
}
/**
 * RC type
 */
export declare enum RcType {
    'SPEKTRUM_DSM2' = 0,
    'SPEKTRUM_DSMX' = 1
}
/**
 * Bitmap to indicate which dimensions should be ignored by the vehicle: a value of 0b0000000000000000
 * or 0b0000001000000000 indicates that none of the setpoint dimensions should be ignored. If bit 9 is
 * set the floats afx afy afz should be interpreted as force instead of acceleration.
 */
export declare enum PositionTargetTypemask {
    'X_IGNORE' = 1,
    'Y_IGNORE' = 2,
    'Z_IGNORE' = 4,
    'VX_IGNORE' = 8,
    'VY_IGNORE' = 16,
    'VZ_IGNORE' = 32,
    'AX_IGNORE' = 64,
    'AY_IGNORE' = 128,
    'AZ_IGNORE' = 256,
    'FORCE_SET' = 512,
    'YAW_IGNORE' = 1024,
    'YAW_RATE_IGNORE' = 2048
}
/**
 * Bitmap to indicate which dimensions should be ignored by the vehicle: a value of 0b00000000
 * indicates that none of the setpoint dimensions should be ignored.
 */
export declare enum AttitudeTargetTypemask {
    'BODY_ROLL_RATE_IGNORE' = 1,
    'BODY_PITCH_RATE_IGNORE' = 2,
    'BODY_YAW_RATE_IGNORE' = 4,
    'THROTTLE_IGNORE' = 64,
    'ATTITUDE_IGNORE' = 128
}
/**
 * Airborne status of UAS.
 */
export declare enum UtmFlightState {
    'UNKNOWN' = 1,
    'GROUND' = 2,
    'AIRBORNE' = 3,
    'EMERGENCY' = 16,
    'NOCTRL' = 32
}
/**
 * Flags for the global position report.
 */
export declare enum UtmDataAvailFlags {
    'TIME_VALID' = 1,
    'UAS_ID_AVAILABLE' = 2,
    'POSITION_AVAILABLE' = 4,
    'ALTITUDE_AVAILABLE' = 8,
    'RELATIVE_ALTITUDE_AVAILABLE' = 16,
    'HORIZONTAL_VELO_AVAILABLE' = 32,
    'VERTICAL_VELO_AVAILABLE' = 64,
    'NEXT_WAYPOINT_AVAILABLE' = 128
}
/**
 * Precision land modes (used in MAV_CMD_NAV_LAND).
 */
export declare enum PrecisionLandMode {
    'DISABLED' = 0,
    'OPPORTUNISTIC' = 1,
    /**
     * Use precision landing, searching for beacon if not found when land command accepted (land normally
     * if beacon cannot be found).
     */
    'REQUIRED' = 2
}
/**
 * Parachute actions. Trigger release and enable/disable auto-release.
 */
export declare enum ParachuteAction {
    'DISABLE' = 0,
    'ENABLE' = 1,
    'RELEASE' = 2
}
/**
 * Type of AIS vessel, enum duplicated from AIS standard, https://gpsd.gitlab.io/gpsd/AIVDM.html
 */
export declare enum AisType {
    'UNKNOWN' = 0,
    'RESERVED_1' = 1,
    'RESERVED_2' = 2,
    'RESERVED_3' = 3,
    'RESERVED_4' = 4,
    'RESERVED_5' = 5,
    'RESERVED_6' = 6,
    'RESERVED_7' = 7,
    'RESERVED_8' = 8,
    'RESERVED_9' = 9,
    'RESERVED_10' = 10,
    'RESERVED_11' = 11,
    'RESERVED_12' = 12,
    'RESERVED_13' = 13,
    'RESERVED_14' = 14,
    'RESERVED_15' = 15,
    'RESERVED_16' = 16,
    'RESERVED_17' = 17,
    'RESERVED_18' = 18,
    'RESERVED_19' = 19,
    'WIG' = 20,
    'WIG_HAZARDOUS_A' = 21,
    'WIG_HAZARDOUS_B' = 22,
    'WIG_HAZARDOUS_C' = 23,
    'WIG_HAZARDOUS_D' = 24,
    'WIG_RESERVED_1' = 25,
    'WIG_RESERVED_2' = 26,
    'WIG_RESERVED_3' = 27,
    'WIG_RESERVED_4' = 28,
    'WIG_RESERVED_5' = 29,
    'FISHING' = 30,
    'TOWING' = 31,
    'TOWING_LARGE' = 32,
    'DREDGING' = 33,
    'DIVING' = 34,
    'MILITARY' = 35,
    'SAILING' = 36,
    'PLEASURE' = 37,
    'RESERVED_20' = 38,
    'RESERVED_21' = 39,
    'HSC' = 40,
    'HSC_HAZARDOUS_A' = 41,
    'HSC_HAZARDOUS_B' = 42,
    'HSC_HAZARDOUS_C' = 43,
    'HSC_HAZARDOUS_D' = 44,
    'HSC_RESERVED_1' = 45,
    'HSC_RESERVED_2' = 46,
    'HSC_RESERVED_3' = 47,
    'HSC_RESERVED_4' = 48,
    'HSC_UNKNOWN' = 49,
    'PILOT' = 50,
    'SAR' = 51,
    'TUG' = 52,
    'PORT_TENDER' = 53,
    'ANTI_POLLUTION' = 54,
    'LAW_ENFORCEMENT' = 55,
    'SPARE_LOCAL_1' = 56,
    'SPARE_LOCAL_2' = 57,
    'MEDICAL_TRANSPORT' = 58,
    'NONECOMBATANT' = 59,
    'PASSENGER' = 60,
    'PASSENGER_HAZARDOUS_A' = 61,
    'PASSENGER_HAZARDOUS_B' = 62,
    'PASSENGER_HAZARDOUS_C' = 63,
    'PASSENGER_HAZARDOUS_D' = 64,
    'PASSENGER_RESERVED_1' = 65,
    'PASSENGER_RESERVED_2' = 66,
    'PASSENGER_RESERVED_3' = 67,
    'PASSENGER_RESERVED_4' = 68,
    'PASSENGER_UNKNOWN' = 69,
    'CARGO' = 70,
    'CARGO_HAZARDOUS_A' = 71,
    'CARGO_HAZARDOUS_B' = 72,
    'CARGO_HAZARDOUS_C' = 73,
    'CARGO_HAZARDOUS_D' = 74,
    'CARGO_RESERVED_1' = 75,
    'CARGO_RESERVED_2' = 76,
    'CARGO_RESERVED_3' = 77,
    'CARGO_RESERVED_4' = 78,
    'CARGO_UNKNOWN' = 79,
    'TANKER' = 80,
    'TANKER_HAZARDOUS_A' = 81,
    'TANKER_HAZARDOUS_B' = 82,
    'TANKER_HAZARDOUS_C' = 83,
    'TANKER_HAZARDOUS_D' = 84,
    'TANKER_RESERVED_1' = 85,
    'TANKER_RESERVED_2' = 86,
    'TANKER_RESERVED_3' = 87,
    'TANKER_RESERVED_4' = 88,
    'TANKER_UNKNOWN' = 89,
    'OTHER' = 90,
    'OTHER_HAZARDOUS_A' = 91,
    'OTHER_HAZARDOUS_B' = 92,
    'OTHER_HAZARDOUS_C' = 93,
    'OTHER_HAZARDOUS_D' = 94,
    'OTHER_RESERVED_1' = 95,
    'OTHER_RESERVED_2' = 96,
    'OTHER_RESERVED_3' = 97,
    'OTHER_RESERVED_4' = 98,
    'OTHER_UNKNOWN' = 99
}
/**
 * Navigational status of AIS vessel, enum duplicated from AIS standard,
 * https://gpsd.gitlab.io/gpsd/AIVDM.html
 */
export declare enum AisNavStatus {
    'UNDER_WAY' = 0,
    'ANCHORED' = 1,
    'UN_COMMANDED' = 2,
    'RESTRICTED_MANOEUVERABILITY' = 3,
    'DRAUGHT_CONSTRAINED' = 4,
    'MOORED' = 5,
    'AGROUND' = 6,
    'FISHING' = 7,
    'SAILING' = 8,
    'RESERVED_HSC' = 9,
    'RESERVED_WIG' = 10,
    'RESERVED_1' = 11,
    'RESERVED_2' = 12,
    'RESERVED_3' = 13,
    'AIS_SART' = 14,
    'UNKNOWN' = 15
}
/**
 * These flags are used in the AIS_VESSEL.fields bitmask to indicate validity of data in the other
 * message fields. When set, the data is valid.
 */
export declare enum AisFlags {
    'POSITION_ACCURACY' = 1,
    'VALID_COG' = 2,
    'VALID_VELOCITY' = 4,
    'HIGH_VELOCITY' = 8,
    'VALID_TURN_RATE' = 16,
    /**
     * Only the sign of the returned turn rate value is valid, either greater than 5deg/30s or less than
     * -5deg/30s
     */
    'TURN_RATE_SIGN_ONLY' = 32,
    'VALID_DIMENSIONS' = 64,
    'LARGE_BOW_DIMENSION' = 128,
    'LARGE_STERN_DIMENSION' = 256,
    'LARGE_PORT_DIMENSION' = 512,
    'LARGE_STARBOARD_DIMENSION' = 1024,
    'VALID_CALLSIGN' = 2048,
    'VALID_NAME' = 4096
}
/**
 * Status of what an individual swarm vehicle is doing.
 */
export declare enum SwarmVehicleState {
    'STATE_UNKNOWN' = 0,
    'STATE_INGRESSING_TO_MESH' = 1,
    'STATE_LOST_COMMS' = 2,
    'STATE_ON_STATION' = 3,
    /**
     * On station providing service but requesting Return to Base soon, will need to leave the on station
     * point within 30min. This allows time for an additional vehicle to join the swarm to take it's place
     * without a gap in coverage. Next expected state is ON_STATION_BUT_REQUESTION_RTB_NOW.
     */
    'STATE_ON_STATION_BUT_REQUESTION_RTB_SOON' = 4,
    /**
     * On station providing service but will be switching to Return to Base in less than 2 minutes. Next
     * expected state is EGRESSING_MESH_RTB.
     */
    'STATE_ON_STATION_BUT_REQUESTION_RTB_NOW' = 5,
    /**
     * Was recently on station but mesh topography has changed and are currently in transit to new on
     * station point.
     */
    'STATE_WAS_ON_STATION_BUT_RELOCATING' = 6,
    'STATE_EGRESSING_MESH_RTB' = 7,
    'STATE_RTB' = 8,
    'STATE_READY_TO_JOIN_MESH' = 9,
    /**
     * Not ready, not providing service. For air vehicles this means we're powered up on the ground and
     * likely performing ground checks. Next expected state is likely READY_TO_JOIN_MESH.
     */
    'STATE_NOT_READY' = 10,
    'GCS' = 11
}
/**
 * Type of the vehicle that is swarming. Sample types are fixed-wing, copter, tank, jeep, human.
 */
export declare enum SwarmVehicleType {
    'UNKNOWN' = 0,
    'FIXED_WING' = 1,
    'COPTER' = 2,
    'TANK' = 3,
    'JEEP' = 4,
    'HUMAN' = 5
}
/**
 * Status of the ROI from the swarm vehicle's perspective.
 */
export declare enum SwarmRoiStatus {
    'UNKNOWN' = 0,
    'INVALID' = 1,
    'NEEDS_UPDATE' = 2,
    'OK' = 3
}
/**
 * Status of mesh network coverage. Ideally the whole swarm should be generating the same status.
 */
export declare enum SwarmCoverageStatus {
    'UNKNOWN' = 0,
    'ROI_IS_NOT_READY' = 1,
    'NOT_ENOUGH_VEHICLES' = 2,
    /**
     * Swarm mesh currently has the minimum resources to cover the ROI. However, network is expected to
     * have breif gaps in service coverage.
     */
    'MINIMUM' = 3,
    /**
     * Swarm mesh currently has enough vehicle resources to cover the ROI sufficiently to satisfy Quality
     * of Service requirement.
     */
    'QOS_GOOD' = 4,
    /**
     * Swarm mesh currently has enough vehicle resources to cover the ROI sufficiently to satisfy MORE than
     * the Quality of Service requirement to better handle unexpected loss of mesh node(s).
     */
    'QOS_VERY_GOOD' = 5
}
/**
 * Winch status flags used in WINCH_STATUS
 */
export declare enum MavWinchStatusFlag {
    'HEALTHY' = 1,
    'FULLY_RETRACTED' = 2,
    'MOVING' = 4,
    'CLUTCH_ENGAGED' = 8
}
/**
 * MAG_CAL_STATUS
 */
export declare enum MagCalStatus {
    'NOT_STARTED' = 0,
    'WAITING_TO_START' = 1,
    'RUNNING_STEP_ONE' = 2,
    'RUNNING_STEP_TWO' = 3,
    'SUCCESS' = 4,
    'FAILED' = 5,
    'BAD_ORIENTATION' = 6,
    'BAD_RADIUS' = 7
}
/**
 * The general system state. If the system is following the MAVLink standard, the system state is
 * mainly defined by three orthogonal states/modes: The system mode, which is either LOCKED (motors
 * shut down and locked), MANUAL (system under RC control), GUIDED (system with autonomous position
 * control, position setpoint controlled manually) or AUTO (system guided by path/waypoint planner).
 * The NAV_MODE defined the current flight state: LIFTOFF (often an open-loop maneuver), LANDING,
 * WAYPOINTS or VECTOR. This represents the internal navigation state machine. The system status shows
 * whether the system is currently active or not and if an emergency occurred. During the CRITICAL and
 * EMERGENCY states the MAV is still considered to be active, but should start emergency procedures
 * autonomously. After a failure occurred it should first move from active to critical to allow manual
 * intervention and then move to emergency after a certain timeout.
 */
export declare class SysStatus extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Bitmap showing which onboard controllers and sensors are present. Value of 0: not present. Value of
     * 1: present.
     */
    onboardControlSensorsPresent: MavSysStatusSensor;
    /**
     * Bitmap showing which onboard controllers and sensors are enabled: Value of 0: not enabled. Value of
     * 1: enabled.
     */
    onboardControlSensorsEnabled: MavSysStatusSensor;
    /**
     * Bitmap showing which onboard controllers and sensors have an error (or are operational). Value of 0:
     * error. Value of 1: healthy.
     */
    onboardControlSensorsHealth: MavSysStatusSensor;
    /**
     * Maximum usage in percent of the mainloop time. Values: [0-1000] - should always be below 1000
     * Units: d%
     */
    load: uint16_t;
    /**
     * Battery voltage, UINT16_MAX: Voltage not sent by autopilot
     * Units: mV
     */
    voltageBattery: uint16_t;
    /**
     * Battery current, -1: Current not sent by autopilot
     * Units: cA
     */
    currentBattery: int16_t;
    /**
     * Battery energy remaining, -1: Battery remaining energy not sent by autopilot
     * Units: %
     */
    batteryRemaining: int8_t;
    /**
     * Communication drop rate, (UART, I2C, SPI, CAN), dropped packets on all links (packets that were
     * corrupted on reception on the MAV)
     * Units: c%
     */
    dropRateComm: uint16_t;
    /**
     * Communication errors (UART, I2C, SPI, CAN), dropped packets on all links (packets that were
     * corrupted on reception on the MAV)
     */
    errorsComm: uint16_t;
    /**
     * Autopilot-specific errors
     */
    errorsCount1: uint16_t;
    /**
     * Autopilot-specific errors
     */
    errorsCount2: uint16_t;
    /**
     * Autopilot-specific errors
     */
    errorsCount3: uint16_t;
    /**
     * Autopilot-specific errors
     */
    errorsCount4: uint16_t;
}
/**
 * The system time is the time of the master clock, typically the computer clock of the main onboard
 * computer.
 */
export declare class SystemTime extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Timestamp (UNIX epoch time).
     * Units: us
     */
    timeUnixUsec: uint64_t;
    /**
     * Timestamp (time since system boot).
     * Units: ms
     */
    timeBootMs: uint32_t;
}
/**
 * A ping message either requesting or responding to a ping. This allows to measure the system
 * latencies, including serial port, radio modem and UDP connections. The ping microservice is
 * documented at https://mavlink.io/en/services/ping.html
 *
 * @deprecated since 2011-08, replaced by SYSTEM_TIME; to be removed / merged with SYSTEM_TIME
 */
export declare class Ping extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format
     * (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
     * Units: us
     */
    timeUsec: uint64_t;
    /**
     * PING sequence
     */
    seq: uint32_t;
    /**
     * 0: request ping from all receiving systems. If greater than 0: message is a ping response and number
     * is the system id of the requesting system
     */
    targetSystem: uint8_t;
    /**
     * 0: request ping from all receiving components. If greater than 0: message is a ping response and
     * number is the component id of the requesting component.
     */
    targetComponent: uint8_t;
}
/**
 * Request to control this MAV
 */
export declare class ChangeOperatorControl extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * System the GCS requests control for
     */
    targetSystem: uint8_t;
    /**
     * 0: request control of this MAV, 1: Release control of this MAV
     */
    controlRequest: uint8_t;
    /**
     * 0: key as plaintext, 1-255: future, different hashing/encryption variants. The GCS should in general
     * use the safest mode possible initially and then gradually move down the encryption level if it gets
     * a NACK message indicating an encryption mismatch.
     * Units: rad
     */
    version: uint8_t;
    /**
     * Password / Key, depending on version plaintext or encrypted. 25 or less characters, NULL terminated.
     * The characters may involve A-Z, a-z, 0-9, and "!?,.-"
     */
    passkey: string;
}
/**
 * Accept / deny control of this MAV
 */
export declare class ChangeOperatorControlAck extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * ID of the GCS this message
     */
    gcsSystemId: uint8_t;
    /**
     * 0: request control of this MAV, 1: Release control of this MAV
     */
    controlRequest: uint8_t;
    /**
     * 0: ACK, 1: NACK: Wrong passkey, 2: NACK: Unsupported passkey encryption method, 3: NACK: Already
     * under control
     */
    ack: uint8_t;
}
/**
 * Emit an encrypted signature / key identifying this system. PLEASE NOTE: This protocol has been kept
 * simple, so transmitting the key requires an encrypted channel for true safety.
 */
export declare class AuthKey extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * key
     */
    key: string;
}
/**
 * Set the system mode, as defined by enum MAV_MODE. There is no target component id as the mode is by
 * definition for the overall aircraft, not only for one component.
 *
 * @deprecated since 2015-12, replaced by MAV_CMD_DO_SET_MODE; Use COMMAND_LONG with MAV_CMD_DO_SET_MODE instead
 */
export declare class SetMode extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * The system setting the mode
     */
    targetSystem: uint8_t;
    /**
     * The new base mode.
     */
    baseMode: MavMode;
    /**
     * The new autopilot-specific mode. This field can be ignored by an autopilot.
     */
    customMode: uint32_t;
}
/**
 * Request to read the onboard parameter with the param_id string id. Onboard parameters are stored as
 * key[const char*] -> value[float]. This allows to send a parameter to any other component (such as
 * the GCS) without the need of previous knowledge of possible parameter names. Thus the same GCS can
 * store different parameters for different autopilots. See also
 * https://mavlink.io/en/services/parameter.html for a full documentation of QGroundControl and IMU
 * code.
 */
export declare class ParamRequestRead extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * System ID
     */
    targetSystem: uint8_t;
    /**
     * Component ID
     */
    targetComponent: uint8_t;
    /**
     * Onboard parameter id, terminated by NULL if the length is less than 16 human-readable chars and
     * WITHOUT null termination (NULL) byte if the length is exactly 16 chars - applications have to
     * provide 16+1 bytes storage if the ID is stored as string
     */
    paramId: string;
    /**
     * Parameter index. Send -1 to use the param ID field as identifier (else the param id will be ignored)
     */
    paramIndex: int16_t;
}
/**
 * Request all parameters of this component. After this request, all parameters are emitted. The
 * parameter microservice is documented at https://mavlink.io/en/services/parameter.html
 */
export declare class ParamRequestList extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * System ID
     */
    targetSystem: uint8_t;
    /**
     * Component ID
     */
    targetComponent: uint8_t;
}
/**
 * Emit the value of a onboard parameter. The inclusion of param_count and param_index in the message
 * allows the recipient to keep track of received parameters and allows him to re-request missing
 * parameters after a loss or timeout. The parameter microservice is documented at
 * https://mavlink.io/en/services/parameter.html
 */
export declare class ParamValue extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Onboard parameter id, terminated by NULL if the length is less than 16 human-readable chars and
     * WITHOUT null termination (NULL) byte if the length is exactly 16 chars - applications have to
     * provide 16+1 bytes storage if the ID is stored as string
     */
    paramId: string;
    /**
     * Onboard parameter value
     */
    paramValue: float;
    /**
     * Onboard parameter type.
     */
    paramType: MavParamType;
    /**
     * Total number of onboard parameters
     */
    paramCount: uint16_t;
    /**
     * Index of this onboard parameter
     */
    paramIndex: uint16_t;
}
/**
 * Set a parameter value (write new value to permanent storage). The receiving component should
 * acknowledge the new parameter value by broadcasting a PARAM_VALUE message (broadcasting ensures that
 * multiple GCS all have an up-to-date list of all parameters). If the sending GCS did not receive a
 * PARAM_VALUE within its timeout time, it should re-send the PARAM_SET message. The parameter
 * microservice is documented at https://mavlink.io/en/services/parameter.html.
 */
export declare class ParamSet extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * System ID
     */
    targetSystem: uint8_t;
    /**
     * Component ID
     */
    targetComponent: uint8_t;
    /**
     * Onboard parameter id, terminated by NULL if the length is less than 16 human-readable chars and
     * WITHOUT null termination (NULL) byte if the length is exactly 16 chars - applications have to
     * provide 16+1 bytes storage if the ID is stored as string
     */
    paramId: string;
    /**
     * Onboard parameter value
     */
    paramValue: float;
    /**
     * Onboard parameter type.
     */
    paramType: MavParamType;
}
/**
 * The global position, as returned by the Global Positioning System (GPS). This is NOT the global
 * position estimate of the system, but rather a RAW sensor value. See message GLOBAL_POSITION for the
 * global position estimate.
 */
export declare class GpsRawInt extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format
     * (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
     * Units: us
     */
    timeUsec: uint64_t;
    /**
     * GPS fix type.
     */
    fixType: GpsFixType;
    /**
     * Latitude (WGS84, EGM96 ellipsoid)
     * Units: degE7
     */
    lat: int32_t;
    /**
     * Longitude (WGS84, EGM96 ellipsoid)
     * Units: degE7
     */
    lon: int32_t;
    /**
     * Altitude (MSL). Positive for up. Note that virtually all GPS modules provide the MSL altitude in
     * addition to the WGS84 altitude.
     * Units: mm
     */
    alt: int32_t;
    /**
     * GPS HDOP horizontal dilution of position (unitless). If unknown, set to: UINT16_MAX
     */
    eph: uint16_t;
    /**
     * GPS VDOP vertical dilution of position (unitless). If unknown, set to: UINT16_MAX
     */
    epv: uint16_t;
    /**
     * GPS ground speed. If unknown, set to: UINT16_MAX
     * Units: cm/s
     */
    vel: uint16_t;
    /**
     * Course over ground (NOT heading, but direction of movement) in degrees * 100, 0.0..359.99 degrees.
     * If unknown, set to: UINT16_MAX
     * Units: cdeg
     */
    cog: uint16_t;
    /**
     * Number of satellites visible. If unknown, set to 255
     */
    satellitesVisible: uint8_t;
    /**
     * Altitude (above WGS84, EGM96 ellipsoid). Positive for up.
     * Units: mm
     */
    altEllipsoid: int32_t;
    /**
     * Position uncertainty.
     * Units: mm
     */
    hAcc: uint32_t;
    /**
     * Altitude uncertainty.
     * Units: mm
     */
    vAcc: uint32_t;
    /**
     * Speed uncertainty.
     * Units: mm
     */
    velAcc: uint32_t;
    /**
     * Heading / track uncertainty
     * Units: degE5
     */
    hdgAcc: uint32_t;
    /**
     * Yaw in earth frame from north. Use 0 if this GPS does not provide yaw. Use 65535 if this GPS is
     * configured to provide yaw and is currently unable to provide it. Use 36000 for north.
     * Units: cdeg
     */
    yaw: uint16_t;
}
/**
 * The positioning status, as reported by GPS. This message is intended to display status information
 * about each satellite visible to the receiver. See message GLOBAL_POSITION for the global position
 * estimate. This message can contain information for up to 20 satellites.
 */
export declare class GpsStatus extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Number of satellites visible
     */
    satellitesVisible: uint8_t;
    /**
     * Global satellite ID
     */
    satellitePrn: uint8_t[];
    /**
     * 0: Satellite not used, 1: used for localization
     */
    satelliteUsed: uint8_t[];
    /**
     * Elevation (0: right on top of receiver, 90: on the horizon) of satellite
     * Units: deg
     */
    satelliteElevation: uint8_t[];
    /**
     * Direction of satellite, 0: 0 deg, 255: 360 deg.
     * Units: deg
     */
    satelliteAzimuth: uint8_t[];
    /**
     * Signal to noise ratio of satellite
     * Units: dB
     */
    satelliteSnr: uint8_t[];
}
/**
 * The RAW IMU readings for the usual 9DOF sensor setup. This message should contain the scaled values
 * to the described units
 */
export declare class ScaledImu extends MavLinkData {
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
     * X acceleration
     * Units: mG
     */
    xacc: int16_t;
    /**
     * Y acceleration
     * Units: mG
     */
    yacc: int16_t;
    /**
     * Z acceleration
     * Units: mG
     */
    zacc: int16_t;
    /**
     * Angular speed around X axis
     * Units: mrad/s
     */
    xgyro: int16_t;
    /**
     * Angular speed around Y axis
     * Units: mrad/s
     */
    ygyro: int16_t;
    /**
     * Angular speed around Z axis
     * Units: mrad/s
     */
    zgyro: int16_t;
    /**
     * X Magnetic field
     * Units: mgauss
     */
    xmag: int16_t;
    /**
     * Y Magnetic field
     * Units: mgauss
     */
    ymag: int16_t;
    /**
     * Z Magnetic field
     * Units: mgauss
     */
    zmag: int16_t;
    /**
     * Temperature, 0: IMU does not provide temperature values. If the IMU is at 0C it must send 1 (0.01C).
     * Units: cdegC
     */
    temperature: int16_t;
}
/**
 * The RAW IMU readings for a 9DOF sensor, which is identified by the id (default IMU1). This message
 * should always contain the true raw values without any scaling to allow data capture and system
 * debugging.
 */
export declare class RawImu extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format
     * (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
     * Units: us
     */
    timeUsec: uint64_t;
    /**
     * X acceleration (raw)
     */
    xacc: int16_t;
    /**
     * Y acceleration (raw)
     */
    yacc: int16_t;
    /**
     * Z acceleration (raw)
     */
    zacc: int16_t;
    /**
     * Angular speed around X axis (raw)
     */
    xgyro: int16_t;
    /**
     * Angular speed around Y axis (raw)
     */
    ygyro: int16_t;
    /**
     * Angular speed around Z axis (raw)
     */
    zgyro: int16_t;
    /**
     * X Magnetic field (raw)
     */
    xmag: int16_t;
    /**
     * Y Magnetic field (raw)
     */
    ymag: int16_t;
    /**
     * Z Magnetic field (raw)
     */
    zmag: int16_t;
    /**
     * Id. Ids are numbered from 0 and map to IMUs numbered from 1 (e.g. IMU1 will have a message with
     * id=0)
     */
    id: uint8_t;
    /**
     * Temperature, 0: IMU does not provide temperature values. If the IMU is at 0C it must send 1 (0.01C).
     * Units: cdegC
     */
    temperature: int16_t;
}
/**
 * The RAW pressure readings for the typical setup of one absolute pressure and one differential
 * pressure sensor. The sensor values should be the raw, UNSCALED ADC values.
 */
export declare class RawPressure extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format
     * (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
     * Units: us
     */
    timeUsec: uint64_t;
    /**
     * Absolute pressure (raw)
     */
    pressAbs: int16_t;
    /**
     * Differential pressure 1 (raw, 0 if nonexistent)
     */
    pressDiff1: int16_t;
    /**
     * Differential pressure 2 (raw, 0 if nonexistent)
     */
    pressDiff2: int16_t;
    /**
     * Raw Temperature measurement (raw)
     */
    temperature: int16_t;
}
/**
 * The pressure readings for the typical setup of one absolute and differential pressure sensor. The
 * units are as specified in each field.
 */
export declare class ScaledPressure extends MavLinkData {
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
     * Absolute pressure
     * Units: hPa
     */
    pressAbs: float;
    /**
     * Differential pressure 1
     * Units: hPa
     */
    pressDiff: float;
    /**
     * Absolute pressure temperature
     * Units: cdegC
     */
    temperature: int16_t;
    /**
     * Differential pressure temperature (0, if not available). Report values of 0 (or 1) as 1 cdegC.
     * Units: cdegC
     */
    temperaturePressDiff: int16_t;
}
/**
 * The attitude in the aeronautical frame (right-handed, Z-down, X-front, Y-right).
 */
export declare class Attitude extends MavLinkData {
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
     * Roll angle (-pi..+pi)
     * Units: rad
     */
    roll: float;
    /**
     * Pitch angle (-pi..+pi)
     * Units: rad
     */
    pitch: float;
    /**
     * Yaw angle (-pi..+pi)
     * Units: rad
     */
    yaw: float;
    /**
     * Roll angular speed
     * Units: rad/s
     */
    rollspeed: float;
    /**
     * Pitch angular speed
     * Units: rad/s
     */
    pitchspeed: float;
    /**
     * Yaw angular speed
     * Units: rad/s
     */
    yawspeed: float;
}
/**
 * The attitude in the aeronautical frame (right-handed, Z-down, X-front, Y-right), expressed as
 * quaternion. Quaternion order is w, x, y, z and a zero rotation would be expressed as (1 0 0 0).
 */
export declare class AttitudeQuaternion extends MavLinkData {
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
     * Quaternion component 1, w (1 in null-rotation)
     */
    q1: float;
    /**
     * Quaternion component 2, x (0 in null-rotation)
     */
    q2: float;
    /**
     * Quaternion component 3, y (0 in null-rotation)
     */
    q3: float;
    /**
     * Quaternion component 4, z (0 in null-rotation)
     */
    q4: float;
    /**
     * Roll angular speed
     * Units: rad/s
     */
    rollspeed: float;
    /**
     * Pitch angular speed
     * Units: rad/s
     */
    pitchspeed: float;
    /**
     * Yaw angular speed
     * Units: rad/s
     */
    yawspeed: float;
    /**
     * Rotation offset by which the attitude quaternion and angular speed vector should be rotated for user
     * display (quaternion with [w, x, y, z] order, zero-rotation is [1, 0, 0, 0], send [0, 0, 0, 0] if
     * field not supported). This field is intended for systems in which the reference attitude may change
     * during flight. For example, tailsitters VTOLs rotate their reference attitude by 90 degrees between
     * hover mode and fixed wing mode, thus repr_offset_q is equal to [1, 0, 0, 0] in hover mode and equal
     * to [0.7071, 0, 0.7071, 0] in fixed wing mode.
     */
    reprOffsetQ: float[];
}
/**
 * The filtered local position (e.g. fused computer vision and accelerometers). Coordinate frame is
 * right-handed, Z-axis down (aeronautical frame, NED / north-east-down convention)
 */
export declare class LocalPositionNed extends MavLinkData {
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
     * X Position
     * Units: m
     */
    x: float;
    /**
     * Y Position
     * Units: m
     */
    y: float;
    /**
     * Z Position
     * Units: m
     */
    z: float;
    /**
     * X Speed
     * Units: m/s
     */
    vx: float;
    /**
     * Y Speed
     * Units: m/s
     */
    vy: float;
    /**
     * Z Speed
     * Units: m/s
     */
    vz: float;
}
/**
 * The filtered global position (e.g. fused GPS and accelerometers). The position is in GPS-frame
 * (right-handed, Z-up). It is designed as scaled integer message since the resolution of float is not
 * sufficient.
 */
export declare class GlobalPositionInt extends MavLinkData {
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
     * Latitude, expressed
     * Units: degE7
     */
    lat: int32_t;
    /**
     * Longitude, expressed
     * Units: degE7
     */
    lon: int32_t;
    /**
     * Altitude (MSL). Note that virtually all GPS modules provide both WGS84 and MSL.
     * Units: mm
     */
    alt: int32_t;
    /**
     * Altitude above ground
     * Units: mm
     */
    relativeAlt: int32_t;
    /**
     * Ground X Speed (Latitude, positive north)
     * Units: cm/s
     */
    vx: int16_t;
    /**
     * Ground Y Speed (Longitude, positive east)
     * Units: cm/s
     */
    vy: int16_t;
    /**
     * Ground Z Speed (Altitude, positive down)
     * Units: cm/s
     */
    vz: int16_t;
    /**
     * Vehicle heading (yaw angle), 0.0..359.99 degrees. If unknown, set to: UINT16_MAX
     * Units: cdeg
     */
    hdg: uint16_t;
}
/**
 * The scaled values of the RC channels received: (-100%) -10000, (0%) 0, (100%) 10000. Channels that
 * are inactive should be set to UINT16_MAX.
 */
export declare class RcChannelsScaled extends MavLinkData {
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
     * Servo output port (set of 8 outputs = 1 port). Flight stacks running on Pixhawk should use: 0 =
     * MAIN, 1 = AUX.
     */
    port: uint8_t;
    /**
     * RC channel 1 value scaled.
     */
    chan1Scaled: int16_t;
    /**
     * RC channel 2 value scaled.
     */
    chan2Scaled: int16_t;
    /**
     * RC channel 3 value scaled.
     */
    chan3Scaled: int16_t;
    /**
     * RC channel 4 value scaled.
     */
    chan4Scaled: int16_t;
    /**
     * RC channel 5 value scaled.
     */
    chan5Scaled: int16_t;
    /**
     * RC channel 6 value scaled.
     */
    chan6Scaled: int16_t;
    /**
     * RC channel 7 value scaled.
     */
    chan7Scaled: int16_t;
    /**
     * RC channel 8 value scaled.
     */
    chan8Scaled: int16_t;
    /**
     * Receive signal strength indicator in device-dependent units/scale. Values: [0-254], 255:
     * invalid/unknown.
     */
    rssi: uint8_t;
}
/**
 * The RAW values of the RC channels received. The standard PPM modulation is as follows: 1000
 * microseconds: 0%, 2000 microseconds: 100%. A value of UINT16_MAX implies the channel is unused.
 * Individual receivers/transmitters might violate this specification.
 */
export declare class RcChannelsRaw extends MavLinkData {
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
     * Servo output port (set of 8 outputs = 1 port). Flight stacks running on Pixhawk should use: 0 =
     * MAIN, 1 = AUX.
     */
    port: uint8_t;
    /**
     * RC channel 1 value.
     * Units: us
     */
    chan1Raw: uint16_t;
    /**
     * RC channel 2 value.
     * Units: us
     */
    chan2Raw: uint16_t;
    /**
     * RC channel 3 value.
     * Units: us
     */
    chan3Raw: uint16_t;
    /**
     * RC channel 4 value.
     * Units: us
     */
    chan4Raw: uint16_t;
    /**
     * RC channel 5 value.
     * Units: us
     */
    chan5Raw: uint16_t;
    /**
     * RC channel 6 value.
     * Units: us
     */
    chan6Raw: uint16_t;
    /**
     * RC channel 7 value.
     * Units: us
     */
    chan7Raw: uint16_t;
    /**
     * RC channel 8 value.
     * Units: us
     */
    chan8Raw: uint16_t;
    /**
     * Receive signal strength indicator in device-dependent units/scale. Values: [0-254], 255:
     * invalid/unknown.
     */
    rssi: uint8_t;
}
/**
 * Superseded by ACTUATOR_OUTPUT_STATUS. The RAW values of the servo outputs (for RC input from the
 * remote, use the RC_CHANNELS messages). The standard PPM modulation is as follows: 1000 microseconds:
 * 0%, 2000 microseconds: 100%.
 */
export declare class ServoOutputRaw extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format
     * (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
     * Units: us
     */
    timeUsec: uint32_t;
    /**
     * Servo output port (set of 8 outputs = 1 port). Flight stacks running on Pixhawk should use: 0 =
     * MAIN, 1 = AUX.
     */
    port: uint8_t;
    /**
     * Servo output 1 value
     * Units: us
     */
    servo1Raw: uint16_t;
    /**
     * Servo output 2 value
     * Units: us
     */
    servo2Raw: uint16_t;
    /**
     * Servo output 3 value
     * Units: us
     */
    servo3Raw: uint16_t;
    /**
     * Servo output 4 value
     * Units: us
     */
    servo4Raw: uint16_t;
    /**
     * Servo output 5 value
     * Units: us
     */
    servo5Raw: uint16_t;
    /**
     * Servo output 6 value
     * Units: us
     */
    servo6Raw: uint16_t;
    /**
     * Servo output 7 value
     * Units: us
     */
    servo7Raw: uint16_t;
    /**
     * Servo output 8 value
     * Units: us
     */
    servo8Raw: uint16_t;
    /**
     * Servo output 9 value
     * Units: us
     */
    servo9Raw: uint16_t;
    /**
     * Servo output 10 value
     * Units: us
     */
    servo10Raw: uint16_t;
    /**
     * Servo output 11 value
     * Units: us
     */
    servo11Raw: uint16_t;
    /**
     * Servo output 12 value
     * Units: us
     */
    servo12Raw: uint16_t;
    /**
     * Servo output 13 value
     * Units: us
     */
    servo13Raw: uint16_t;
    /**
     * Servo output 14 value
     * Units: us
     */
    servo14Raw: uint16_t;
    /**
     * Servo output 15 value
     * Units: us
     */
    servo15Raw: uint16_t;
    /**
     * Servo output 16 value
     * Units: us
     */
    servo16Raw: uint16_t;
}
/**
 * Request a partial list of mission items from the system/component.
 * https://mavlink.io/en/services/mission.html. If start and end index are the same, just send one
 * waypoint.
 */
export declare class MissionRequestPartialList extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * System ID
     */
    targetSystem: uint8_t;
    /**
     * Component ID
     */
    targetComponent: uint8_t;
    /**
     * Start index
     */
    startIndex: int16_t;
    /**
     * End index, -1 by default (-1: send list to end). Else a valid index of the list
     */
    endIndex: int16_t;
    /**
     * Mission type.
     */
    missionType: MavMissionType;
}
/**
 * This message is sent to the MAV to write a partial list. If start index == end index, only one item
 * will be transmitted / updated. If the start index is NOT 0 and above the current list size, this
 * request should be REJECTED!
 */
export declare class MissionWritePartialList extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * System ID
     */
    targetSystem: uint8_t;
    /**
     * Component ID
     */
    targetComponent: uint8_t;
    /**
     * Start index. Must be smaller / equal to the largest index of the current onboard list.
     */
    startIndex: int16_t;
    /**
     * End index, equal or greater than start index.
     */
    endIndex: int16_t;
    /**
     * Mission type.
     */
    missionType: MavMissionType;
}
/**
 * Message encoding a mission item. This message is emitted to announce the presence of a mission item
 * and to set a mission item on the system. The mission item can be either in x, y, z meters (type:
 * LOCAL) or x:lat, y:lon, z:altitude. Local frame is Z-down, right handed (NED), global frame is Z-up,
 * right handed (ENU). NaN may be used to indicate an optional/default value (e.g. to use the system's
 * current latitude or yaw rather than a specific value). See also
 * https://mavlink.io/en/services/mission.html.
 *
 * @deprecated since 2020-06, replaced by MISSION_ITEM_INT
 */
export declare class MissionItem extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * System ID
     */
    targetSystem: uint8_t;
    /**
     * Component ID
     */
    targetComponent: uint8_t;
    /**
     * Sequence
     */
    seq: uint16_t;
    /**
     * The coordinate system of the waypoint.
     */
    frame: MavFrame;
    /**
     * The scheduled action for the waypoint.
     */
    command: MavCmd;
    /**
     * false:0, true:1
     */
    current: uint8_t;
    /**
     * Autocontinue to next waypoint
     */
    autocontinue: uint8_t;
    /**
     * PARAM1, see MAV_CMD enum
     */
    param1: float;
    /**
     * PARAM2, see MAV_CMD enum
     */
    param2: float;
    /**
     * PARAM3, see MAV_CMD enum
     */
    param3: float;
    /**
     * PARAM4, see MAV_CMD enum
     */
    param4: float;
    /**
     * PARAM5 / local: X coordinate, global: latitude
     */
    x: float;
    /**
     * PARAM6 / local: Y coordinate, global: longitude
     */
    y: float;
    /**
     * PARAM7 / local: Z coordinate, global: altitude (relative or absolute, depending on frame).
     */
    z: float;
    /**
     * Mission type.
     */
    missionType: MavMissionType;
}
/**
 * Request the information of the mission item with the sequence number seq. The response of the system
 * to this message should be a MISSION_ITEM message. https://mavlink.io/en/services/mission.html
 *
 * @deprecated since 2020-06, replaced by MISSION_REQUEST_INT; A system that gets this request should respond with MISSION_ITEM_INT (as though MISSION_REQUEST_INT was received).
 */
export declare class MissionRequest extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * System ID
     */
    targetSystem: uint8_t;
    /**
     * Component ID
     */
    targetComponent: uint8_t;
    /**
     * Sequence
     */
    seq: uint16_t;
    /**
     * Mission type.
     */
    missionType: MavMissionType;
}
/**
 * Set the mission item with sequence number seq as current item. This means that the MAV will continue
 * to this mission item on the shortest path (not following the mission items in-between).
 */
export declare class MissionSetCurrent extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * System ID
     */
    targetSystem: uint8_t;
    /**
     * Component ID
     */
    targetComponent: uint8_t;
    /**
     * Sequence
     */
    seq: uint16_t;
}
/**
 * Message that announces the sequence number of the current active mission item. The MAV will fly
 * towards this mission item.
 */
export declare class MissionCurrent extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Sequence
     */
    seq: uint16_t;
}
/**
 * Request the overall list of mission items from the system/component.
 */
export declare class MissionRequestList extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * System ID
     */
    targetSystem: uint8_t;
    /**
     * Component ID
     */
    targetComponent: uint8_t;
    /**
     * Mission type.
     */
    missionType: MavMissionType;
}
/**
 * This message is emitted as response to MISSION_REQUEST_LIST by the MAV and to initiate a write
 * transaction. The GCS can then request the individual mission item based on the knowledge of the
 * total number of waypoints.
 */
export declare class MissionCount extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * System ID
     */
    targetSystem: uint8_t;
    /**
     * Component ID
     */
    targetComponent: uint8_t;
    /**
     * Number of mission items in the sequence
     */
    count: uint16_t;
    /**
     * Mission type.
     */
    missionType: MavMissionType;
}
/**
 * Delete all mission items at once.
 */
export declare class MissionClearAll extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * System ID
     */
    targetSystem: uint8_t;
    /**
     * Component ID
     */
    targetComponent: uint8_t;
    /**
     * Mission type.
     */
    missionType: MavMissionType;
}
/**
 * A certain mission item has been reached. The system will either hold this position (or circle on the
 * orbit) or (if the autocontinue on the WP was set) continue to the next waypoint.
 */
export declare class MissionItemReached extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Sequence
     */
    seq: uint16_t;
}
/**
 * Acknowledgment message during waypoint handling. The type field states if this message is a positive
 * ack (type=0) or if an error happened (type=non-zero).
 */
export declare class MissionAck extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * System ID
     */
    targetSystem: uint8_t;
    /**
     * Component ID
     */
    targetComponent: uint8_t;
    /**
     * Mission result.
     */
    type: MavMissionResult;
    /**
     * Mission type.
     */
    missionType: MavMissionType;
}
/**
 * Sets the GPS co-ordinates of the vehicle local origin (0,0,0) position. Vehicle should emit
 * GPS_GLOBAL_ORIGIN irrespective of whether the origin is changed. This enables transform between the
 * local coordinate frame and the global (GPS) coordinate frame, which may be necessary when (for
 * example) indoor and outdoor settings are connected and the MAV should move from in- to outdoor.
 */
export declare class SetGpsGlobalOrigin extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * System ID
     */
    targetSystem: uint8_t;
    /**
     * Latitude (WGS84)
     * Units: degE7
     */
    latitude: int32_t;
    /**
     * Longitude (WGS84)
     * Units: degE7
     */
    longitude: int32_t;
    /**
     * Altitude (MSL). Positive for up.
     * Units: mm
     */
    altitude: int32_t;
    /**
     * Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format
     * (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
     * Units: us
     */
    timeUsec: uint64_t;
}
/**
 * Publishes the GPS co-ordinates of the vehicle local origin (0,0,0) position. Emitted whenever a new
 * GPS-Local position mapping is requested or set - e.g. following SET_GPS_GLOBAL_ORIGIN message.
 */
export declare class GpsGlobalOrigin extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Latitude (WGS84)
     * Units: degE7
     */
    latitude: int32_t;
    /**
     * Longitude (WGS84)
     * Units: degE7
     */
    longitude: int32_t;
    /**
     * Altitude (MSL). Positive for up.
     * Units: mm
     */
    altitude: int32_t;
    /**
     * Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format
     * (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
     * Units: us
     */
    timeUsec: uint64_t;
}
/**
 * Bind a RC channel to a parameter. The parameter should change according to the RC channel value.
 */
export declare class ParamMapRc extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * System ID
     */
    targetSystem: uint8_t;
    /**
     * Component ID
     */
    targetComponent: uint8_t;
    /**
     * Onboard parameter id, terminated by NULL if the length is less than 16 human-readable chars and
     * WITHOUT null termination (NULL) byte if the length is exactly 16 chars - applications have to
     * provide 16+1 bytes storage if the ID is stored as string
     */
    paramId: string;
    /**
     * Parameter index. Send -1 to use the param ID field as identifier (else the param id will be
     * ignored), send -2 to disable any existing map for this rc_channel_index.
     */
    paramIndex: int16_t;
    /**
     * Index of parameter RC channel. Not equal to the RC channel id. Typically corresponds to a
     * potentiometer-knob on the RC.
     */
    parameterRcChannelIndex: uint8_t;
    /**
     * Initial parameter value
     */
    paramValue0: float;
    /**
     * Scale, maps the RC range [-1, 1] to a parameter value
     */
    scale: float;
    /**
     * Minimum param value. The protocol does not define if this overwrites an onboard minimum value.
     * (Depends on implementation)
     */
    paramValueMin: float;
    /**
     * Maximum param value. The protocol does not define if this overwrites an onboard maximum value.
     * (Depends on implementation)
     */
    paramValueMax: float;
}
/**
 * Request the information of the mission item with the sequence number seq. The response of the system
 * to this message should be a MISSION_ITEM_INT message. https://mavlink.io/en/services/mission.html
 */
export declare class MissionRequestInt extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * System ID
     */
    targetSystem: uint8_t;
    /**
     * Component ID
     */
    targetComponent: uint8_t;
    /**
     * Sequence
     */
    seq: uint16_t;
    /**
     * Mission type.
     */
    missionType: MavMissionType;
}
/**
 * Set a safety zone (volume), which is defined by two corners of a cube. This message can be used to
 * tell the MAV which setpoints/waypoints to accept and which to reject. Safety areas are often
 * enforced by national or competition regulations.
 */
export declare class SafetySetAllowedArea extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * System ID
     */
    targetSystem: uint8_t;
    /**
     * Component ID
     */
    targetComponent: uint8_t;
    /**
     * Coordinate frame. Can be either global, GPS, right-handed with Z axis up or local, right handed, Z
     * axis down.
     */
    frame: MavFrame;
    /**
     * x position 1 / Latitude 1
     * Units: m
     */
    p1x: float;
    /**
     * y position 1 / Longitude 1
     * Units: m
     */
    p1y: float;
    /**
     * z position 1 / Altitude 1
     * Units: m
     */
    p1z: float;
    /**
     * x position 2 / Latitude 2
     * Units: m
     */
    p2x: float;
    /**
     * y position 2 / Longitude 2
     * Units: m
     */
    p2y: float;
    /**
     * z position 2 / Altitude 2
     * Units: m
     */
    p2z: float;
}
/**
 * Read out the safety zone the MAV currently assumes.
 */
export declare class SafetyAllowedArea extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Coordinate frame. Can be either global, GPS, right-handed with Z axis up or local, right handed, Z
     * axis down.
     */
    frame: MavFrame;
    /**
     * x position 1 / Latitude 1
     * Units: m
     */
    p1x: float;
    /**
     * y position 1 / Longitude 1
     * Units: m
     */
    p1y: float;
    /**
     * z position 1 / Altitude 1
     * Units: m
     */
    p1z: float;
    /**
     * x position 2 / Latitude 2
     * Units: m
     */
    p2x: float;
    /**
     * y position 2 / Longitude 2
     * Units: m
     */
    p2y: float;
    /**
     * z position 2 / Altitude 2
     * Units: m
     */
    p2z: float;
}
/**
 * The attitude in the aeronautical frame (right-handed, Z-down, X-front, Y-right), expressed as
 * quaternion. Quaternion order is w, x, y, z and a zero rotation would be expressed as (1 0 0 0).
 */
export declare class AttitudeQuaternionCov extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format
     * (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
     * Units: us
     */
    timeUsec: uint64_t;
    /**
     * Quaternion components, w, x, y, z (1 0 0 0 is the null-rotation)
     */
    q: float[];
    /**
     * Roll angular speed
     * Units: rad/s
     */
    rollspeed: float;
    /**
     * Pitch angular speed
     * Units: rad/s
     */
    pitchspeed: float;
    /**
     * Yaw angular speed
     * Units: rad/s
     */
    yawspeed: float;
    /**
     * Row-major representation of a 3x3 attitude covariance matrix (states: roll, pitch, yaw; first three
     * entries are the first ROW, next three entries are the second row, etc.). If unknown, assign NaN
     * value to first element in the array.
     */
    covariance: float[];
}
/**
 * The state of the fixed wing navigation and position controller.
 */
export declare class NavControllerOutput extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Current desired roll
     * Units: deg
     */
    navRoll: float;
    /**
     * Current desired pitch
     * Units: deg
     */
    navPitch: float;
    /**
     * Current desired heading
     * Units: deg
     */
    navBearing: int16_t;
    /**
     * Bearing to current waypoint/target
     * Units: deg
     */
    targetBearing: int16_t;
    /**
     * Distance to active waypoint
     * Units: m
     */
    wpDist: uint16_t;
    /**
     * Current altitude error
     * Units: m
     */
    altError: float;
    /**
     * Current airspeed error
     * Units: m/s
     */
    aspdError: float;
    /**
     * Current crosstrack error on x-y plane
     * Units: m
     */
    xtrackError: float;
}
/**
 * The filtered global position (e.g. fused GPS and accelerometers). The position is in GPS-frame
 * (right-handed, Z-up). It is designed as scaled integer message since the resolution of float is not
 * sufficient. NOTE: This message is intended for onboard networks / companion computers and
 * higher-bandwidth links and optimized for accuracy and completeness. Please use the
 * GLOBAL_POSITION_INT message for a minimal subset.
 */
export declare class GlobalPositionIntCov extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format
     * (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
     * Units: us
     */
    timeUsec: uint64_t;
    /**
     * Class id of the estimator this estimate originated from.
     */
    estimatorType: MavEstimatorType;
    /**
     * Latitude
     * Units: degE7
     */
    lat: int32_t;
    /**
     * Longitude
     * Units: degE7
     */
    lon: int32_t;
    /**
     * Altitude in meters above MSL
     * Units: mm
     */
    alt: int32_t;
    /**
     * Altitude above ground
     * Units: mm
     */
    relativeAlt: int32_t;
    /**
     * Ground X Speed (Latitude)
     * Units: m/s
     */
    vx: float;
    /**
     * Ground Y Speed (Longitude)
     * Units: m/s
     */
    vy: float;
    /**
     * Ground Z Speed (Altitude)
     * Units: m/s
     */
    vz: float;
    /**
     * Row-major representation of a 6x6 position and velocity 6x6 cross-covariance matrix (states: lat,
     * lon, alt, vx, vy, vz; first six entries are the first ROW, next six entries are the second row,
     * etc.). If unknown, assign NaN value to first element in the array.
     */
    covariance: float[];
}
/**
 * The filtered local position (e.g. fused computer vision and accelerometers). Coordinate frame is
 * right-handed, Z-axis down (aeronautical frame, NED / north-east-down convention)
 */
export declare class LocalPositionNedCov extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format
     * (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
     * Units: us
     */
    timeUsec: uint64_t;
    /**
     * Class id of the estimator this estimate originated from.
     */
    estimatorType: MavEstimatorType;
    /**
     * X Position
     * Units: m
     */
    x: float;
    /**
     * Y Position
     * Units: m
     */
    y: float;
    /**
     * Z Position
     * Units: m
     */
    z: float;
    /**
     * X Speed
     * Units: m/s
     */
    vx: float;
    /**
     * Y Speed
     * Units: m/s
     */
    vy: float;
    /**
     * Z Speed
     * Units: m/s
     */
    vz: float;
    /**
     * X Acceleration
     * Units: m/s/s
     */
    ax: float;
    /**
     * Y Acceleration
     * Units: m/s/s
     */
    ay: float;
    /**
     * Z Acceleration
     * Units: m/s/s
     */
    az: float;
    /**
     * Row-major representation of position, velocity and acceleration 9x9 cross-covariance matrix upper
     * right triangle (states: x, y, z, vx, vy, vz, ax, ay, az; first nine entries are the first ROW, next
     * eight entries are the second row, etc.). If unknown, assign NaN value to first element in the array.
     */
    covariance: float[];
}
/**
 * The PPM values of the RC channels received. The standard PPM modulation is as follows: 1000
 * microseconds: 0%, 2000 microseconds: 100%. A value of UINT16_MAX implies the channel is unused.
 * Individual receivers/transmitters might violate this specification.
 */
export declare class RcChannels extends MavLinkData {
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
     * Total number of RC channels being received. This can be larger than 18, indicating that more
     * channels are available but not given in this message. This value should be 0 when no RC channels are
     * available.
     */
    chancount: uint8_t;
    /**
     * RC channel 1 value.
     * Units: us
     */
    chan1Raw: uint16_t;
    /**
     * RC channel 2 value.
     * Units: us
     */
    chan2Raw: uint16_t;
    /**
     * RC channel 3 value.
     * Units: us
     */
    chan3Raw: uint16_t;
    /**
     * RC channel 4 value.
     * Units: us
     */
    chan4Raw: uint16_t;
    /**
     * RC channel 5 value.
     * Units: us
     */
    chan5Raw: uint16_t;
    /**
     * RC channel 6 value.
     * Units: us
     */
    chan6Raw: uint16_t;
    /**
     * RC channel 7 value.
     * Units: us
     */
    chan7Raw: uint16_t;
    /**
     * RC channel 8 value.
     * Units: us
     */
    chan8Raw: uint16_t;
    /**
     * RC channel 9 value.
     * Units: us
     */
    chan9Raw: uint16_t;
    /**
     * RC channel 10 value.
     * Units: us
     */
    chan10Raw: uint16_t;
    /**
     * RC channel 11 value.
     * Units: us
     */
    chan11Raw: uint16_t;
    /**
     * RC channel 12 value.
     * Units: us
     */
    chan12Raw: uint16_t;
    /**
     * RC channel 13 value.
     * Units: us
     */
    chan13Raw: uint16_t;
    /**
     * RC channel 14 value.
     * Units: us
     */
    chan14Raw: uint16_t;
    /**
     * RC channel 15 value.
     * Units: us
     */
    chan15Raw: uint16_t;
    /**
     * RC channel 16 value.
     * Units: us
     */
    chan16Raw: uint16_t;
    /**
     * RC channel 17 value.
     * Units: us
     */
    chan17Raw: uint16_t;
    /**
     * RC channel 18 value.
     * Units: us
     */
    chan18Raw: uint16_t;
    /**
     * Receive signal strength indicator in device-dependent units/scale. Values: [0-254], 255:
     * invalid/unknown.
     */
    rssi: uint8_t;
}
/**
 * Request a data stream.
 */
export declare class RequestDataStream extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * The target requested to send the message stream.
     */
    targetSystem: uint8_t;
    /**
     * The target requested to send the message stream.
     */
    targetComponent: uint8_t;
    /**
     * The ID of the requested data stream
     */
    reqStreamId: uint8_t;
    /**
     * The requested message rate
     * Units: Hz
     */
    reqMessageRate: uint16_t;
    /**
     * 1 to start sending, 0 to stop sending.
     */
    startStop: uint8_t;
}
/**
 * Data stream status information.
 */
export declare class DataStream extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * The ID of the requested data stream
     */
    streamId: uint8_t;
    /**
     * The message rate
     * Units: Hz
     */
    messageRate: uint16_t;
    /**
     * 1 stream is enabled, 0 stream is stopped.
     */
    onOff: uint8_t;
}
/**
 * This message provides an API for manually controlling the vehicle using standard joystick axes
 * nomenclature, along with a joystick-like input device. Unused axes can be disabled an buttons are
 * also transmit as boolean values of their
 */
export declare class ManualControl extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * The system to be controlled.
     */
    target: uint8_t;
    /**
     * X-axis, normalized to the range [-1000,1000]. A value of INT16_MAX indicates that this axis is
     * invalid. Generally corresponds to forward(1000)-backward(-1000) movement on a joystick and the pitch
     * of a vehicle.
     */
    x: int16_t;
    /**
     * Y-axis, normalized to the range [-1000,1000]. A value of INT16_MAX indicates that this axis is
     * invalid. Generally corresponds to left(-1000)-right(1000) movement on a joystick and the roll of a
     * vehicle.
     */
    y: int16_t;
    /**
     * Z-axis, normalized to the range [-1000,1000]. A value of INT16_MAX indicates that this axis is
     * invalid. Generally corresponds to a separate slider movement with maximum being 1000 and minimum
     * being -1000 on a joystick and the thrust of a vehicle. Positive values are positive thrust, negative
     * values are negative thrust.
     */
    z: int16_t;
    /**
     * R-axis, normalized to the range [-1000,1000]. A value of INT16_MAX indicates that this axis is
     * invalid. Generally corresponds to a twisting of the joystick, with counter-clockwise being 1000 and
     * clockwise being -1000, and the yaw of a vehicle.
     */
    r: int16_t;
    /**
     * A bitfield corresponding to the joystick buttons' current state, 1 for pressed, 0 for released. The
     * lowest bit corresponds to Button 1.
     */
    buttons: uint16_t;
}
/**
 * The RAW values of the RC channels sent to the MAV to override info received from the RC radio. The
 * standard PPM modulation is as follows: 1000 microseconds: 0%, 2000 microseconds: 100%. Individual
 * receivers/transmitters might violate this specification. Note carefully the semantic differences
 * between the first 8 channels and the subsequent channels
 */
export declare class RcChannelsOverride extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * System ID
     */
    targetSystem: uint8_t;
    /**
     * Component ID
     */
    targetComponent: uint8_t;
    /**
     * RC channel 1 value. A value of UINT16_MAX means to ignore this field. A value of 0 means to release
     * this channel back to the RC radio.
     * Units: us
     */
    chan1Raw: uint16_t;
    /**
     * RC channel 2 value. A value of UINT16_MAX means to ignore this field. A value of 0 means to release
     * this channel back to the RC radio.
     * Units: us
     */
    chan2Raw: uint16_t;
    /**
     * RC channel 3 value. A value of UINT16_MAX means to ignore this field. A value of 0 means to release
     * this channel back to the RC radio.
     * Units: us
     */
    chan3Raw: uint16_t;
    /**
     * RC channel 4 value. A value of UINT16_MAX means to ignore this field. A value of 0 means to release
     * this channel back to the RC radio.
     * Units: us
     */
    chan4Raw: uint16_t;
    /**
     * RC channel 5 value. A value of UINT16_MAX means to ignore this field. A value of 0 means to release
     * this channel back to the RC radio.
     * Units: us
     */
    chan5Raw: uint16_t;
    /**
     * RC channel 6 value. A value of UINT16_MAX means to ignore this field. A value of 0 means to release
     * this channel back to the RC radio.
     * Units: us
     */
    chan6Raw: uint16_t;
    /**
     * RC channel 7 value. A value of UINT16_MAX means to ignore this field. A value of 0 means to release
     * this channel back to the RC radio.
     * Units: us
     */
    chan7Raw: uint16_t;
    /**
     * RC channel 8 value. A value of UINT16_MAX means to ignore this field. A value of 0 means to release
     * this channel back to the RC radio.
     * Units: us
     */
    chan8Raw: uint16_t;
    /**
     * RC channel 9 value. A value of 0 or UINT16_MAX means to ignore this field. A value of UINT16_MAX-1
     * means to release this channel back to the RC radio.
     * Units: us
     */
    chan9Raw: uint16_t;
    /**
     * RC channel 10 value. A value of 0 or UINT16_MAX means to ignore this field. A value of UINT16_MAX-1
     * means to release this channel back to the RC radio.
     * Units: us
     */
    chan10Raw: uint16_t;
    /**
     * RC channel 11 value. A value of 0 or UINT16_MAX means to ignore this field. A value of UINT16_MAX-1
     * means to release this channel back to the RC radio.
     * Units: us
     */
    chan11Raw: uint16_t;
    /**
     * RC channel 12 value. A value of 0 or UINT16_MAX means to ignore this field. A value of UINT16_MAX-1
     * means to release this channel back to the RC radio.
     * Units: us
     */
    chan12Raw: uint16_t;
    /**
     * RC channel 13 value. A value of 0 or UINT16_MAX means to ignore this field. A value of UINT16_MAX-1
     * means to release this channel back to the RC radio.
     * Units: us
     */
    chan13Raw: uint16_t;
    /**
     * RC channel 14 value. A value of 0 or UINT16_MAX means to ignore this field. A value of UINT16_MAX-1
     * means to release this channel back to the RC radio.
     * Units: us
     */
    chan14Raw: uint16_t;
    /**
     * RC channel 15 value. A value of 0 or UINT16_MAX means to ignore this field. A value of UINT16_MAX-1
     * means to release this channel back to the RC radio.
     * Units: us
     */
    chan15Raw: uint16_t;
    /**
     * RC channel 16 value. A value of 0 or UINT16_MAX means to ignore this field. A value of UINT16_MAX-1
     * means to release this channel back to the RC radio.
     * Units: us
     */
    chan16Raw: uint16_t;
    /**
     * RC channel 17 value. A value of 0 or UINT16_MAX means to ignore this field. A value of UINT16_MAX-1
     * means to release this channel back to the RC radio.
     * Units: us
     */
    chan17Raw: uint16_t;
    /**
     * RC channel 18 value. A value of 0 or UINT16_MAX means to ignore this field. A value of UINT16_MAX-1
     * means to release this channel back to the RC radio.
     * Units: us
     */
    chan18Raw: uint16_t;
}
/**
 * Message encoding a mission item. This message is emitted to announce the presence of a mission item
 * and to set a mission item on the system. The mission item can be either in x, y, z meters (type:
 * LOCAL) or x:lat, y:lon, z:altitude. Local frame is Z-down, right handed (NED), global frame is Z-up,
 * right handed (ENU). NaN or INT32_MAX may be used in float/integer params (respectively) to indicate
 * optional/default values (e.g. to use the component's current latitude, yaw rather than a specific
 * value). See also https://mavlink.io/en/services/mission.html.
 */
export declare class MissionItemInt extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * System ID
     */
    targetSystem: uint8_t;
    /**
     * Component ID
     */
    targetComponent: uint8_t;
    /**
     * Waypoint ID (sequence number). Starts at zero. Increases monotonically for each waypoint, no gaps in
     * the sequence (0,1,2,3,4).
     */
    seq: uint16_t;
    /**
     * The coordinate system of the waypoint.
     */
    frame: MavFrame;
    /**
     * The scheduled action for the waypoint.
     */
    command: MavCmd;
    /**
     * false:0, true:1
     */
    current: uint8_t;
    /**
     * Autocontinue to next waypoint
     */
    autocontinue: uint8_t;
    /**
     * PARAM1, see MAV_CMD enum
     */
    param1: float;
    /**
     * PARAM2, see MAV_CMD enum
     */
    param2: float;
    /**
     * PARAM3, see MAV_CMD enum
     */
    param3: float;
    /**
     * PARAM4, see MAV_CMD enum
     */
    param4: float;
    /**
     * PARAM5 / local: x position in meters * 1e4, global: latitude in degrees * 10^7
     */
    x: int32_t;
    /**
     * PARAM6 / y position: local: x position in meters * 1e4, global: longitude in degrees *10^7
     */
    y: int32_t;
    /**
     * PARAM7 / z position: global: altitude in meters (relative or absolute, depending on frame.
     */
    z: float;
    /**
     * Mission type.
     */
    missionType: MavMissionType;
}
/**
 * Metrics typically displayed on a HUD for fixed wing aircraft.
 */
export declare class VfrHud extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Vehicle speed in form appropriate for vehicle type. For standard aircraft this is typically
     * calibrated airspeed (CAS) or indicated airspeed (IAS) - either of which can be used by a pilot to
     * estimate stall speed.
     * Units: m/s
     */
    airspeed: float;
    /**
     * Current ground speed.
     * Units: m/s
     */
    groundspeed: float;
    /**
     * Current heading in compass units (0-360, 0=north).
     * Units: deg
     */
    heading: int16_t;
    /**
     * Current throttle setting (0 to 100).
     * Units: %
     */
    throttle: uint16_t;
    /**
     * Current altitude (MSL).
     * Units: m
     */
    alt: float;
    /**
     * Current climb rate.
     * Units: m/s
     */
    climb: float;
}
/**
 * Message encoding a command with parameters as scaled integers. Scaling depends on the actual command
 * value. The command microservice is documented at https://mavlink.io/en/services/command.html
 */
export declare class CommandInt extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * System ID
     */
    targetSystem: uint8_t;
    /**
     * Component ID
     */
    targetComponent: uint8_t;
    /**
     * The coordinate system of the COMMAND.
     */
    frame: MavFrame;
    /**
     * The scheduled action for the mission item.
     */
    command: MavCmd;
    /**
     * Not used.
     */
    current: uint8_t;
    /**
     * Not used (set 0).
     */
    autocontinue: uint8_t;
    /**
     * PARAM1, see MAV_CMD enum
     */
    param1: float;
    /**
     * PARAM2, see MAV_CMD enum
     */
    param2: float;
    /**
     * PARAM3, see MAV_CMD enum
     */
    param3: float;
    /**
     * PARAM4, see MAV_CMD enum
     */
    param4: float;
    /**
     * PARAM5 / local: x position in meters * 1e4, global: latitude in degrees * 10^7
     */
    x: int32_t;
    /**
     * PARAM6 / local: y position in meters * 1e4, global: longitude in degrees * 10^7
     */
    y: int32_t;
    /**
     * PARAM7 / z position: global: altitude in meters (relative or absolute, depending on frame).
     */
    z: float;
}
/**
 * Send a command with up to seven parameters to the MAV. The command microservice is documented at
 * https://mavlink.io/en/services/command.html
 */
export declare class CommandLong extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * System which should execute the command
     */
    targetSystem: uint8_t;
    /**
     * Component which should execute the command, 0 for all components
     */
    targetComponent: uint8_t;
    /**
     * Command ID (of command to send).
     */
    command: MavCmd;
    /**
     * 0: First transmission of this command. 1-255: Confirmation transmissions (e.g. for kill command)
     */
    confirmation: uint8_t;
    /**
     * Parameter 1 (for the specific command).
     */
    param1: float;
    /**
     * Parameter 2 (for the specific command).
     */
    param2: float;
    /**
     * Parameter 3 (for the specific command).
     */
    param3: float;
    /**
     * Parameter 4 (for the specific command).
     */
    param4: float;
    /**
     * Parameter 5 (for the specific command).
     */
    param5: float;
    /**
     * Parameter 6 (for the specific command).
     */
    param6: float;
    /**
     * Parameter 7 (for the specific command).
     */
    param7: float;
}
/**
 * Report status of a command. Includes feedback whether the command was executed. The command
 * microservice is documented at https://mavlink.io/en/services/command.html
 */
export declare class CommandAck extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Command ID (of acknowledged command).
     */
    command: MavCmd;
    /**
     * Result of command.
     */
    result: MavResult;
}
/**
 * Setpoint in roll, pitch, yaw and thrust from the operator
 */
export declare class ManualSetpoint extends MavLinkData {
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
     * Desired roll rate
     * Units: rad/s
     */
    roll: float;
    /**
     * Desired pitch rate
     * Units: rad/s
     */
    pitch: float;
    /**
     * Desired yaw rate
     * Units: rad/s
     */
    yaw: float;
    /**
     * Collective thrust, normalized to 0 .. 1
     */
    thrust: float;
    /**
     * Flight mode switch position, 0.. 255
     */
    modeSwitch: uint8_t;
    /**
     * Override mode switch position, 0.. 255
     */
    manualOverrideSwitch: uint8_t;
}
/**
 * Sets a desired vehicle attitude. Used by an external controller to command the vehicle (manual
 * controller or other system).
 */
export declare class SetAttitudeTarget extends MavLinkData {
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
     * System ID
     */
    targetSystem: uint8_t;
    /**
     * Component ID
     */
    targetComponent: uint8_t;
    /**
     * Bitmap to indicate which dimensions should be ignored by the vehicle.
     */
    typeMask: AttitudeTargetTypemask;
    /**
     * Attitude quaternion (w, x, y, z order, zero-rotation is 1, 0, 0, 0)
     */
    q: float[];
    /**
     * Body roll rate
     * Units: rad/s
     */
    bodyRollRate: float;
    /**
     * Body pitch rate
     * Units: rad/s
     */
    bodyPitchRate: float;
    /**
     * Body yaw rate
     * Units: rad/s
     */
    bodyYawRate: float;
    /**
     * Collective thrust, normalized to 0 .. 1 (-1 .. 1 for vehicles capable of reverse trust)
     */
    thrust: float;
}
/**
 * Reports the current commanded attitude of the vehicle as specified by the autopilot. This should
 * match the commands sent in a SET_ATTITUDE_TARGET message if the vehicle is being controlled this
 * way.
 */
export declare class AttitudeTarget extends MavLinkData {
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
     * Bitmap to indicate which dimensions should be ignored by the vehicle.
     */
    typeMask: AttitudeTargetTypemask;
    /**
     * Attitude quaternion (w, x, y, z order, zero-rotation is 1, 0, 0, 0)
     */
    q: float[];
    /**
     * Body roll rate
     * Units: rad/s
     */
    bodyRollRate: float;
    /**
     * Body pitch rate
     * Units: rad/s
     */
    bodyPitchRate: float;
    /**
     * Body yaw rate
     * Units: rad/s
     */
    bodyYawRate: float;
    /**
     * Collective thrust, normalized to 0 .. 1 (-1 .. 1 for vehicles capable of reverse trust)
     */
    thrust: float;
}
/**
 * Sets a desired vehicle position in a local north-east-down coordinate frame. Used by an external
 * controller to command the vehicle (manual controller or other system).
 */
export declare class SetPositionTargetLocalNed extends MavLinkData {
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
     * System ID
     */
    targetSystem: uint8_t;
    /**
     * Component ID
     */
    targetComponent: uint8_t;
    /**
     * Valid options are: MAV_FRAME_LOCAL_NED = 1, MAV_FRAME_LOCAL_OFFSET_NED = 7, MAV_FRAME_BODY_NED = 8,
     * MAV_FRAME_BODY_OFFSET_NED = 9
     */
    coordinateFrame: MavFrame;
    /**
     * Bitmap to indicate which dimensions should be ignored by the vehicle.
     */
    typeMask: PositionTargetTypemask;
    /**
     * X Position in NED frame
     * Units: m
     */
    x: float;
    /**
     * Y Position in NED frame
     * Units: m
     */
    y: float;
    /**
     * Z Position in NED frame (note, altitude is negative in NED)
     * Units: m
     */
    z: float;
    /**
     * X velocity in NED frame
     * Units: m/s
     */
    vx: float;
    /**
     * Y velocity in NED frame
     * Units: m/s
     */
    vy: float;
    /**
     * Z velocity in NED frame
     * Units: m/s
     */
    vz: float;
    /**
     * X acceleration or force (if bit 10 of type_mask is set) in NED frame in meter / s^2 or N
     * Units: m/s/s
     */
    afx: float;
    /**
     * Y acceleration or force (if bit 10 of type_mask is set) in NED frame in meter / s^2 or N
     * Units: m/s/s
     */
    afy: float;
    /**
     * Z acceleration or force (if bit 10 of type_mask is set) in NED frame in meter / s^2 or N
     * Units: m/s/s
     */
    afz: float;
    /**
     * yaw setpoint
     * Units: rad
     */
    yaw: float;
    /**
     * yaw rate setpoint
     * Units: rad/s
     */
    yawRate: float;
}
/**
 * Reports the current commanded vehicle position, velocity, and acceleration as specified by the
 * autopilot. This should match the commands sent in SET_POSITION_TARGET_LOCAL_NED if the vehicle is
 * being controlled this way.
 */
export declare class PositionTargetLocalNed extends MavLinkData {
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
     * Valid options are: MAV_FRAME_LOCAL_NED = 1, MAV_FRAME_LOCAL_OFFSET_NED = 7, MAV_FRAME_BODY_NED = 8,
     * MAV_FRAME_BODY_OFFSET_NED = 9
     */
    coordinateFrame: MavFrame;
    /**
     * Bitmap to indicate which dimensions should be ignored by the vehicle.
     */
    typeMask: PositionTargetTypemask;
    /**
     * X Position in NED frame
     * Units: m
     */
    x: float;
    /**
     * Y Position in NED frame
     * Units: m
     */
    y: float;
    /**
     * Z Position in NED frame (note, altitude is negative in NED)
     * Units: m
     */
    z: float;
    /**
     * X velocity in NED frame
     * Units: m/s
     */
    vx: float;
    /**
     * Y velocity in NED frame
     * Units: m/s
     */
    vy: float;
    /**
     * Z velocity in NED frame
     * Units: m/s
     */
    vz: float;
    /**
     * X acceleration or force (if bit 10 of type_mask is set) in NED frame in meter / s^2 or N
     * Units: m/s/s
     */
    afx: float;
    /**
     * Y acceleration or force (if bit 10 of type_mask is set) in NED frame in meter / s^2 or N
     * Units: m/s/s
     */
    afy: float;
    /**
     * Z acceleration or force (if bit 10 of type_mask is set) in NED frame in meter / s^2 or N
     * Units: m/s/s
     */
    afz: float;
    /**
     * yaw setpoint
     * Units: rad
     */
    yaw: float;
    /**
     * yaw rate setpoint
     * Units: rad/s
     */
    yawRate: float;
}
/**
 * Sets a desired vehicle position, velocity, and/or acceleration in a global coordinate system
 * (WGS84). Used by an external controller to command the vehicle (manual controller or other system).
 */
export declare class SetPositionTargetGlobalInt extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Timestamp (time since system boot). The rationale for the timestamp in the setpoint is to allow the
     * system to compensate for the transport delay of the setpoint. This allows the system to compensate
     * processing latency.
     * Units: ms
     */
    timeBootMs: uint32_t;
    /**
     * System ID
     */
    targetSystem: uint8_t;
    /**
     * Component ID
     */
    targetComponent: uint8_t;
    /**
     * Valid options are: MAV_FRAME_GLOBAL_INT = 5, MAV_FRAME_GLOBAL_RELATIVE_ALT_INT = 6,
     * MAV_FRAME_GLOBAL_TERRAIN_ALT_INT = 11
     */
    coordinateFrame: MavFrame;
    /**
     * Bitmap to indicate which dimensions should be ignored by the vehicle.
     */
    typeMask: PositionTargetTypemask;
    /**
     * X Position in WGS84 frame
     * Units: degE7
     */
    latInt: int32_t;
    /**
     * Y Position in WGS84 frame
     * Units: degE7
     */
    lonInt: int32_t;
    /**
     * Altitude (MSL, Relative to home, or AGL - depending on frame)
     * Units: m
     */
    alt: float;
    /**
     * X velocity in NED frame
     * Units: m/s
     */
    vx: float;
    /**
     * Y velocity in NED frame
     * Units: m/s
     */
    vy: float;
    /**
     * Z velocity in NED frame
     * Units: m/s
     */
    vz: float;
    /**
     * X acceleration or force (if bit 10 of type_mask is set) in NED frame in meter / s^2 or N
     * Units: m/s/s
     */
    afx: float;
    /**
     * Y acceleration or force (if bit 10 of type_mask is set) in NED frame in meter / s^2 or N
     * Units: m/s/s
     */
    afy: float;
    /**
     * Z acceleration or force (if bit 10 of type_mask is set) in NED frame in meter / s^2 or N
     * Units: m/s/s
     */
    afz: float;
    /**
     * yaw setpoint
     * Units: rad
     */
    yaw: float;
    /**
     * yaw rate setpoint
     * Units: rad/s
     */
    yawRate: float;
}
/**
 * Reports the current commanded vehicle position, velocity, and acceleration as specified by the
 * autopilot. This should match the commands sent in SET_POSITION_TARGET_GLOBAL_INT if the vehicle is
 * being controlled this way.
 */
export declare class PositionTargetGlobalInt extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Timestamp (time since system boot). The rationale for the timestamp in the setpoint is to allow the
     * system to compensate for the transport delay of the setpoint. This allows the system to compensate
     * processing latency.
     * Units: ms
     */
    timeBootMs: uint32_t;
    /**
     * Valid options are: MAV_FRAME_GLOBAL_INT = 5, MAV_FRAME_GLOBAL_RELATIVE_ALT_INT = 6,
     * MAV_FRAME_GLOBAL_TERRAIN_ALT_INT = 11
     */
    coordinateFrame: MavFrame;
    /**
     * Bitmap to indicate which dimensions should be ignored by the vehicle.
     */
    typeMask: PositionTargetTypemask;
    /**
     * X Position in WGS84 frame
     * Units: degE7
     */
    latInt: int32_t;
    /**
     * Y Position in WGS84 frame
     * Units: degE7
     */
    lonInt: int32_t;
    /**
     * Altitude (MSL, AGL or relative to home altitude, depending on frame)
     * Units: m
     */
    alt: float;
    /**
     * X velocity in NED frame
     * Units: m/s
     */
    vx: float;
    /**
     * Y velocity in NED frame
     * Units: m/s
     */
    vy: float;
    /**
     * Z velocity in NED frame
     * Units: m/s
     */
    vz: float;
    /**
     * X acceleration or force (if bit 10 of type_mask is set) in NED frame in meter / s^2 or N
     * Units: m/s/s
     */
    afx: float;
    /**
     * Y acceleration or force (if bit 10 of type_mask is set) in NED frame in meter / s^2 or N
     * Units: m/s/s
     */
    afy: float;
    /**
     * Z acceleration or force (if bit 10 of type_mask is set) in NED frame in meter / s^2 or N
     * Units: m/s/s
     */
    afz: float;
    /**
     * yaw setpoint
     * Units: rad
     */
    yaw: float;
    /**
     * yaw rate setpoint
     * Units: rad/s
     */
    yawRate: float;
}
/**
 * The offset in X, Y, Z and yaw between the LOCAL_POSITION_NED messages of MAV X and the global
 * coordinate frame in NED coordinates. Coordinate frame is right-handed, Z-axis down (aeronautical
 * frame, NED / north-east-down convention)
 */
export declare class LocalPositionNedSystemGlobalOffset extends MavLinkData {
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
     * X Position
     * Units: m
     */
    x: float;
    /**
     * Y Position
     * Units: m
     */
    y: float;
    /**
     * Z Position
     * Units: m
     */
    z: float;
    /**
     * Roll
     * Units: rad
     */
    roll: float;
    /**
     * Pitch
     * Units: rad
     */
    pitch: float;
    /**
     * Yaw
     * Units: rad
     */
    yaw: float;
}
/**
 * Sent from simulation to autopilot. This packet is useful for high throughput applications such as
 * hardware in the loop simulations.
 *
 * @deprecated since 2013-07, replaced by HIL_STATE_QUATERNION; Suffers from missing airspeed fields and singularities due to Euler angles
 */
export declare class HilState extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format
     * (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
     * Units: us
     */
    timeUsec: uint64_t;
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
     * Body frame roll / phi angular speed
     * Units: rad/s
     */
    rollspeed: float;
    /**
     * Body frame pitch / theta angular speed
     * Units: rad/s
     */
    pitchspeed: float;
    /**
     * Body frame yaw / psi angular speed
     * Units: rad/s
     */
    yawspeed: float;
    /**
     * Latitude
     * Units: degE7
     */
    lat: int32_t;
    /**
     * Longitude
     * Units: degE7
     */
    lon: int32_t;
    /**
     * Altitude
     * Units: mm
     */
    alt: int32_t;
    /**
     * Ground X Speed (Latitude)
     * Units: cm/s
     */
    vx: int16_t;
    /**
     * Ground Y Speed (Longitude)
     * Units: cm/s
     */
    vy: int16_t;
    /**
     * Ground Z Speed (Altitude)
     * Units: cm/s
     */
    vz: int16_t;
    /**
     * X acceleration
     * Units: mG
     */
    xacc: int16_t;
    /**
     * Y acceleration
     * Units: mG
     */
    yacc: int16_t;
    /**
     * Z acceleration
     * Units: mG
     */
    zacc: int16_t;
}
/**
 * Sent from autopilot to simulation. Hardware in the loop control outputs
 */
export declare class HilControls extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format
     * (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
     * Units: us
     */
    timeUsec: uint64_t;
    /**
     * Control output -1 .. 1
     */
    rollAilerons: float;
    /**
     * Control output -1 .. 1
     */
    pitchElevator: float;
    /**
     * Control output -1 .. 1
     */
    yawRudder: float;
    /**
     * Throttle 0 .. 1
     */
    throttle: float;
    /**
     * Aux 1, -1 .. 1
     */
    aux1: float;
    /**
     * Aux 2, -1 .. 1
     */
    aux2: float;
    /**
     * Aux 3, -1 .. 1
     */
    aux3: float;
    /**
     * Aux 4, -1 .. 1
     */
    aux4: float;
    /**
     * System mode.
     */
    mode: MavMode;
    /**
     * Navigation mode (MAV_NAV_MODE)
     */
    navMode: uint8_t;
}
/**
 * Sent from simulation to autopilot. The RAW values of the RC channels received. The standard PPM
 * modulation is as follows: 1000 microseconds: 0%, 2000 microseconds: 100%. Individual
 * receivers/transmitters might violate this specification.
 */
export declare class HilRcInputsRaw extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format
     * (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
     * Units: us
     */
    timeUsec: uint64_t;
    /**
     * RC channel 1 value
     * Units: us
     */
    chan1Raw: uint16_t;
    /**
     * RC channel 2 value
     * Units: us
     */
    chan2Raw: uint16_t;
    /**
     * RC channel 3 value
     * Units: us
     */
    chan3Raw: uint16_t;
    /**
     * RC channel 4 value
     * Units: us
     */
    chan4Raw: uint16_t;
    /**
     * RC channel 5 value
     * Units: us
     */
    chan5Raw: uint16_t;
    /**
     * RC channel 6 value
     * Units: us
     */
    chan6Raw: uint16_t;
    /**
     * RC channel 7 value
     * Units: us
     */
    chan7Raw: uint16_t;
    /**
     * RC channel 8 value
     * Units: us
     */
    chan8Raw: uint16_t;
    /**
     * RC channel 9 value
     * Units: us
     */
    chan9Raw: uint16_t;
    /**
     * RC channel 10 value
     * Units: us
     */
    chan10Raw: uint16_t;
    /**
     * RC channel 11 value
     * Units: us
     */
    chan11Raw: uint16_t;
    /**
     * RC channel 12 value
     * Units: us
     */
    chan12Raw: uint16_t;
    /**
     * Receive signal strength indicator in device-dependent units/scale. Values: [0-254], 255:
     * invalid/unknown.
     */
    rssi: uint8_t;
}
/**
 * Sent from autopilot to simulation. Hardware in the loop control outputs (replacement for
 * HIL_CONTROLS)
 */
export declare class HilActuatorControls extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format
     * (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
     * Units: us
     */
    timeUsec: uint64_t;
    /**
     * Control outputs -1 .. 1. Channel assignment depends on the simulated hardware.
     */
    controls: float[];
    /**
     * System mode. Includes arming state.
     */
    mode: MavModeFlag;
    /**
     * Flags as bitfield, 1: indicate simulation using lockstep.
     */
    flags: uint64_t;
}
/**
 * Optical flow from a flow sensor (e.g. optical mouse sensor)
 */
export declare class OpticalFlow extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format
     * (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
     * Units: us
     */
    timeUsec: uint64_t;
    /**
     * Sensor ID
     */
    sensorId: uint8_t;
    /**
     * Flow in x-sensor direction
     * Units: dpix
     */
    flowX: int16_t;
    /**
     * Flow in y-sensor direction
     * Units: dpix
     */
    flowY: int16_t;
    /**
     * Flow in x-sensor direction, angular-speed compensated
     * Units: m/s
     */
    flowCompMX: float;
    /**
     * Flow in y-sensor direction, angular-speed compensated
     * Units: m/s
     */
    flowCompMY: float;
    /**
     * Optical flow quality / confidence. 0: bad, 255: maximum quality
     */
    quality: uint8_t;
    /**
     * Ground distance. Positive value: distance known. Negative value: Unknown distance
     * Units: m
     */
    groundDistance: float;
    /**
     * Flow rate about X axis
     * Units: rad/s
     */
    flowRateX: float;
    /**
     * Flow rate about Y axis
     * Units: rad/s
     */
    flowRateY: float;
}
/**
 * Global position/attitude estimate from a vision source.
 */
export declare class GlobalVisionPositionEstimate extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Timestamp (UNIX time or since system boot)
     * Units: us
     */
    usec: uint64_t;
    /**
     * Global X position
     * Units: m
     */
    x: float;
    /**
     * Global Y position
     * Units: m
     */
    y: float;
    /**
     * Global Z position
     * Units: m
     */
    z: float;
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
     * Row-major representation of pose 6x6 cross-covariance matrix upper right triangle (states: x_global,
     * y_global, z_global, roll, pitch, yaw; first six entries are the first ROW, next five entries are the
     * second ROW, etc.). If unknown, assign NaN value to first element in the array.
     */
    covariance: float[];
    /**
     * Estimate reset counter. This should be incremented when the estimate resets in any of the dimensions
     * (position, velocity, attitude, angular speed). This is designed to be used when e.g an external SLAM
     * system detects a loop-closure and the estimate jumps.
     */
    resetCounter: uint8_t;
}
/**
 * Local position/attitude estimate from a vision source.
 */
export declare class VisionPositionEstimate extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Timestamp (UNIX time or time since system boot)
     * Units: us
     */
    usec: uint64_t;
    /**
     * Local X position
     * Units: m
     */
    x: float;
    /**
     * Local Y position
     * Units: m
     */
    y: float;
    /**
     * Local Z position
     * Units: m
     */
    z: float;
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
     * Row-major representation of pose 6x6 cross-covariance matrix upper right triangle (states: x, y, z,
     * roll, pitch, yaw; first six entries are the first ROW, next five entries are the second ROW, etc.).
     * If unknown, assign NaN value to first element in the array.
     */
    covariance: float[];
    /**
     * Estimate reset counter. This should be incremented when the estimate resets in any of the dimensions
     * (position, velocity, attitude, angular speed). This is designed to be used when e.g an external SLAM
     * system detects a loop-closure and the estimate jumps.
     */
    resetCounter: uint8_t;
}
/**
 * Speed estimate from a vision source.
 */
export declare class VisionSpeedEstimate extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Timestamp (UNIX time or time since system boot)
     * Units: us
     */
    usec: uint64_t;
    /**
     * Global X speed
     * Units: m/s
     */
    x: float;
    /**
     * Global Y speed
     * Units: m/s
     */
    y: float;
    /**
     * Global Z speed
     * Units: m/s
     */
    z: float;
    /**
     * Row-major representation of 3x3 linear velocity covariance matrix (states: vx, vy, vz; 1st three
     * entries - 1st row, etc.). If unknown, assign NaN value to first element in the array.
     */
    covariance: float[];
    /**
     * Estimate reset counter. This should be incremented when the estimate resets in any of the dimensions
     * (position, velocity, attitude, angular speed). This is designed to be used when e.g an external SLAM
     * system detects a loop-closure and the estimate jumps.
     */
    resetCounter: uint8_t;
}
/**
 * Global position estimate from a Vicon motion system source.
 */
export declare class ViconPositionEstimate extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Timestamp (UNIX time or time since system boot)
     * Units: us
     */
    usec: uint64_t;
    /**
     * Global X position
     * Units: m
     */
    x: float;
    /**
     * Global Y position
     * Units: m
     */
    y: float;
    /**
     * Global Z position
     * Units: m
     */
    z: float;
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
     * Row-major representation of 6x6 pose cross-covariance matrix upper right triangle (states: x, y, z,
     * roll, pitch, yaw; first six entries are the first ROW, next five entries are the second ROW, etc.).
     * If unknown, assign NaN value to first element in the array.
     */
    covariance: float[];
}
/**
 * The IMU readings in SI units in NED body frame
 */
export declare class HighresImu extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format
     * (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
     * Units: us
     */
    timeUsec: uint64_t;
    /**
     * X acceleration
     * Units: m/s/s
     */
    xacc: float;
    /**
     * Y acceleration
     * Units: m/s/s
     */
    yacc: float;
    /**
     * Z acceleration
     * Units: m/s/s
     */
    zacc: float;
    /**
     * Angular speed around X axis
     * Units: rad/s
     */
    xgyro: float;
    /**
     * Angular speed around Y axis
     * Units: rad/s
     */
    ygyro: float;
    /**
     * Angular speed around Z axis
     * Units: rad/s
     */
    zgyro: float;
    /**
     * X Magnetic field
     * Units: gauss
     */
    xmag: float;
    /**
     * Y Magnetic field
     * Units: gauss
     */
    ymag: float;
    /**
     * Z Magnetic field
     * Units: gauss
     */
    zmag: float;
    /**
     * Absolute pressure
     * Units: hPa
     */
    absPressure: float;
    /**
     * Differential pressure
     * Units: hPa
     */
    diffPressure: float;
    /**
     * Altitude calculated from pressure
     */
    pressureAlt: float;
    /**
     * Temperature
     * Units: degC
     */
    temperature: float;
    /**
     * Bitmap for fields that have updated since last message, bit 0 = xacc, bit 12: temperature
     */
    fieldsUpdated: uint16_t;
    /**
     * Id. Ids are numbered from 0 and map to IMUs numbered from 1 (e.g. IMU1 will have a message with
     * id=0)
     */
    id: uint8_t;
}
/**
 * Optical flow from an angular rate flow sensor (e.g. PX4FLOW or mouse sensor)
 */
export declare class OpticalFlowRad extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format
     * (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
     * Units: us
     */
    timeUsec: uint64_t;
    /**
     * Sensor ID
     */
    sensorId: uint8_t;
    /**
     * Integration time. Divide integrated_x and integrated_y by the integration time to obtain average
     * flow. The integration time also indicates the.
     * Units: us
     */
    integrationTimeUs: uint32_t;
    /**
     * Flow around X axis (Sensor RH rotation about the X axis induces a positive flow. Sensor linear
     * motion along the positive Y axis induces a negative flow.)
     * Units: rad
     */
    integratedX: float;
    /**
     * Flow around Y axis (Sensor RH rotation about the Y axis induces a positive flow. Sensor linear
     * motion along the positive X axis induces a positive flow.)
     * Units: rad
     */
    integratedY: float;
    /**
     * RH rotation around X axis
     * Units: rad
     */
    integratedXgyro: float;
    /**
     * RH rotation around Y axis
     * Units: rad
     */
    integratedYgyro: float;
    /**
     * RH rotation around Z axis
     * Units: rad
     */
    integratedZgyro: float;
    /**
     * Temperature
     * Units: cdegC
     */
    temperature: int16_t;
    /**
     * Optical flow quality / confidence. 0: no valid flow, 255: maximum quality
     */
    quality: uint8_t;
    /**
     * Time since the distance was sampled.
     * Units: us
     */
    timeDeltaDistanceUs: uint32_t;
    /**
     * Distance to the center of the flow field. Positive value (including zero): distance known. Negative
     * value: Unknown distance.
     * Units: m
     */
    distance: float;
}
/**
 * The IMU readings in SI units in NED body frame
 */
export declare class HilSensor extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format
     * (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
     * Units: us
     */
    timeUsec: uint64_t;
    /**
     * X acceleration
     * Units: m/s/s
     */
    xacc: float;
    /**
     * Y acceleration
     * Units: m/s/s
     */
    yacc: float;
    /**
     * Z acceleration
     * Units: m/s/s
     */
    zacc: float;
    /**
     * Angular speed around X axis in body frame
     * Units: rad/s
     */
    xgyro: float;
    /**
     * Angular speed around Y axis in body frame
     * Units: rad/s
     */
    ygyro: float;
    /**
     * Angular speed around Z axis in body frame
     * Units: rad/s
     */
    zgyro: float;
    /**
     * X Magnetic field
     * Units: gauss
     */
    xmag: float;
    /**
     * Y Magnetic field
     * Units: gauss
     */
    ymag: float;
    /**
     * Z Magnetic field
     * Units: gauss
     */
    zmag: float;
    /**
     * Absolute pressure
     * Units: hPa
     */
    absPressure: float;
    /**
     * Differential pressure (airspeed)
     * Units: hPa
     */
    diffPressure: float;
    /**
     * Altitude calculated from pressure
     */
    pressureAlt: float;
    /**
     * Temperature
     * Units: degC
     */
    temperature: float;
    /**
     * Bitmap for fields that have updated since last message, bit 0 = xacc, bit 12: temperature, bit 31:
     * full reset of attitude/position/velocities/etc was performed in sim.
     */
    fieldsUpdated: uint32_t;
    /**
     * Sensor ID (zero indexed). Used for multiple sensor inputs
     */
    id: uint8_t;
}
/**
 * Status of simulation environment, if used
 */
export declare class SimState extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * True attitude quaternion component 1, w (1 in null-rotation)
     */
    q1: float;
    /**
     * True attitude quaternion component 2, x (0 in null-rotation)
     */
    q2: float;
    /**
     * True attitude quaternion component 3, y (0 in null-rotation)
     */
    q3: float;
    /**
     * True attitude quaternion component 4, z (0 in null-rotation)
     */
    q4: float;
    /**
     * Attitude roll expressed as Euler angles, not recommended except for human-readable outputs
     */
    roll: float;
    /**
     * Attitude pitch expressed as Euler angles, not recommended except for human-readable outputs
     */
    pitch: float;
    /**
     * Attitude yaw expressed as Euler angles, not recommended except for human-readable outputs
     */
    yaw: float;
    /**
     * X acceleration
     * Units: m/s/s
     */
    xacc: float;
    /**
     * Y acceleration
     * Units: m/s/s
     */
    yacc: float;
    /**
     * Z acceleration
     * Units: m/s/s
     */
    zacc: float;
    /**
     * Angular speed around X axis
     * Units: rad/s
     */
    xgyro: float;
    /**
     * Angular speed around Y axis
     * Units: rad/s
     */
    ygyro: float;
    /**
     * Angular speed around Z axis
     * Units: rad/s
     */
    zgyro: float;
    /**
     * Latitude
     * Units: deg
     */
    lat: float;
    /**
     * Longitude
     * Units: deg
     */
    lon: float;
    /**
     * Altitude
     * Units: m
     */
    alt: float;
    /**
     * Horizontal position standard deviation
     */
    stdDevHorz: float;
    /**
     * Vertical position standard deviation
     */
    stdDevVert: float;
    /**
     * True velocity in north direction in earth-fixed NED frame
     * Units: m/s
     */
    vn: float;
    /**
     * True velocity in east direction in earth-fixed NED frame
     * Units: m/s
     */
    ve: float;
    /**
     * True velocity in down direction in earth-fixed NED frame
     * Units: m/s
     */
    vd: float;
}
/**
 * Status generated by radio and injected into MAVLink stream.
 */
export declare class RadioStatus extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Local (message sender) recieved signal strength indication in device-dependent units/scale. Values:
     * [0-254], 255: invalid/unknown.
     */
    rssi: uint8_t;
    /**
     * Remote (message receiver) signal strength indication in device-dependent units/scale. Values:
     * [0-254], 255: invalid/unknown.
     */
    remrssi: uint8_t;
    /**
     * Remaining free transmitter buffer space.
     * Units: %
     */
    txbuf: uint8_t;
    /**
     * Local background noise level. These are device dependent RSSI values (scale as approx 2x dB on SiK
     * radios). Values: [0-254], 255: invalid/unknown.
     */
    noise: uint8_t;
    /**
     * Remote background noise level. These are device dependent RSSI values (scale as approx 2x dB on SiK
     * radios). Values: [0-254], 255: invalid/unknown.
     */
    remnoise: uint8_t;
    /**
     * Count of radio packet receive errors (since boot).
     */
    rxerrors: uint16_t;
    /**
     * Count of error corrected radio packets (since boot).
     */
    fixed: uint16_t;
}
/**
 * File transfer message
 */
export declare class FileTransferProtocol extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Network ID (0 for broadcast)
     */
    targetNetwork: uint8_t;
    /**
     * System ID (0 for broadcast)
     */
    targetSystem: uint8_t;
    /**
     * Component ID (0 for broadcast)
     */
    targetComponent: uint8_t;
    /**
     * Variable length payload. The length is defined by the remaining message length when subtracting the
     * header and other fields. The entire content of this block is opaque unless you understand any the
     * encoding message_type. The particular encoding used can be extension specific and might not always
     * be documented as part of the mavlink specification.
     */
    payload: uint8_t[];
}
/**
 * Time synchronization message.
 */
export declare class TimeSync extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Time sync timestamp 1
     */
    tc1: int64_t;
    /**
     * Time sync timestamp 2
     */
    ts1: int64_t;
}
/**
 * Camera-IMU triggering and synchronisation message.
 */
export declare class CameraTrigger extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Timestamp for image frame (UNIX Epoch time or time since system boot). The receiving end can infer
     * timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
     * Units: us
     */
    timeUsec: uint64_t;
    /**
     * Image frame sequence
     */
    seq: uint32_t;
}
/**
 * The global position, as returned by the Global Positioning System (GPS). This is NOT the global
 * position estimate of the sytem, but rather a RAW sensor value. See message GLOBAL_POSITION for the
 * global position estimate.
 */
export declare class HilGps extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format
     * (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
     * Units: us
     */
    timeUsec: uint64_t;
    /**
     * 0-1: no fix, 2: 2D fix, 3: 3D fix. Some applications will not use the value of this field unless it
     * is at least two, so always correctly fill in the fix.
     */
    fixType: uint8_t;
    /**
     * Latitude (WGS84)
     * Units: degE7
     */
    lat: int32_t;
    /**
     * Longitude (WGS84)
     * Units: degE7
     */
    lon: int32_t;
    /**
     * Altitude (MSL). Positive for up.
     * Units: mm
     */
    alt: int32_t;
    /**
     * GPS HDOP horizontal dilution of position (unitless). If unknown, set to: UINT16_MAX
     */
    eph: uint16_t;
    /**
     * GPS VDOP vertical dilution of position (unitless). If unknown, set to: UINT16_MAX
     */
    epv: uint16_t;
    /**
     * GPS ground speed. If unknown, set to: 65535
     * Units: cm/s
     */
    vel: uint16_t;
    /**
     * GPS velocity in north direction in earth-fixed NED frame
     * Units: cm/s
     */
    vn: int16_t;
    /**
     * GPS velocity in east direction in earth-fixed NED frame
     * Units: cm/s
     */
    ve: int16_t;
    /**
     * GPS velocity in down direction in earth-fixed NED frame
     * Units: cm/s
     */
    vd: int16_t;
    /**
     * Course over ground (NOT heading, but direction of movement), 0.0..359.99 degrees. If unknown, set
     * to: 65535
     * Units: cdeg
     */
    cog: uint16_t;
    /**
     * Number of satellites visible. If unknown, set to 255
     */
    satellitesVisible: uint8_t;
    /**
     * GPS ID (zero indexed). Used for multiple GPS inputs
     */
    id: uint8_t;
    /**
     * Yaw of vehicle relative to Earth's North, zero means not available, use 36000 for north
     * Units: cdeg
     */
    yaw: uint16_t;
}
/**
 * Simulated optical flow from a flow sensor (e.g. PX4FLOW or optical mouse sensor)
 */
export declare class HilOpticalFlow extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format
     * (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
     * Units: us
     */
    timeUsec: uint64_t;
    /**
     * Sensor ID
     */
    sensorId: uint8_t;
    /**
     * Integration time. Divide integrated_x and integrated_y by the integration time to obtain average
     * flow. The integration time also indicates the.
     * Units: us
     */
    integrationTimeUs: uint32_t;
    /**
     * Flow in radians around X axis (Sensor RH rotation about the X axis induces a positive flow. Sensor
     * linear motion along the positive Y axis induces a negative flow.)
     * Units: rad
     */
    integratedX: float;
    /**
     * Flow in radians around Y axis (Sensor RH rotation about the Y axis induces a positive flow. Sensor
     * linear motion along the positive X axis induces a positive flow.)
     * Units: rad
     */
    integratedY: float;
    /**
     * RH rotation around X axis
     * Units: rad
     */
    integratedXgyro: float;
    /**
     * RH rotation around Y axis
     * Units: rad
     */
    integratedYgyro: float;
    /**
     * RH rotation around Z axis
     * Units: rad
     */
    integratedZgyro: float;
    /**
     * Temperature
     * Units: cdegC
     */
    temperature: int16_t;
    /**
     * Optical flow quality / confidence. 0: no valid flow, 255: maximum quality
     */
    quality: uint8_t;
    /**
     * Time since the distance was sampled.
     * Units: us
     */
    timeDeltaDistanceUs: uint32_t;
    /**
     * Distance to the center of the flow field. Positive value (including zero): distance known. Negative
     * value: Unknown distance.
     * Units: m
     */
    distance: float;
}
/**
 * Sent from simulation to autopilot, avoids in contrast to HIL_STATE singularities. This packet is
 * useful for high throughput applications such as hardware in the loop simulations.
 */
export declare class HilStateQuaternion extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format
     * (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
     * Units: us
     */
    timeUsec: uint64_t;
    /**
     * Vehicle attitude expressed as normalized quaternion in w, x, y, z order (with 1 0 0 0 being the
     * null-rotation)
     */
    attitudeQuaternion: float[];
    /**
     * Body frame roll / phi angular speed
     * Units: rad/s
     */
    rollspeed: float;
    /**
     * Body frame pitch / theta angular speed
     * Units: rad/s
     */
    pitchspeed: float;
    /**
     * Body frame yaw / psi angular speed
     * Units: rad/s
     */
    yawspeed: float;
    /**
     * Latitude
     * Units: degE7
     */
    lat: int32_t;
    /**
     * Longitude
     * Units: degE7
     */
    lon: int32_t;
    /**
     * Altitude
     * Units: mm
     */
    alt: int32_t;
    /**
     * Ground X Speed (Latitude)
     * Units: cm/s
     */
    vx: int16_t;
    /**
     * Ground Y Speed (Longitude)
     * Units: cm/s
     */
    vy: int16_t;
    /**
     * Ground Z Speed (Altitude)
     * Units: cm/s
     */
    vz: int16_t;
    /**
     * Indicated airspeed
     * Units: cm/s
     */
    indAirspeed: uint16_t;
    /**
     * True airspeed
     * Units: cm/s
     */
    trueAirspeed: uint16_t;
    /**
     * X acceleration
     * Units: mG
     */
    xacc: int16_t;
    /**
     * Y acceleration
     * Units: mG
     */
    yacc: int16_t;
    /**
     * Z acceleration
     * Units: mG
     */
    zacc: int16_t;
}
/**
 * The RAW IMU readings for secondary 9DOF sensor setup. This message should contain the scaled values
 * to the described units
 */
export declare class ScaledImu2 extends MavLinkData {
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
     * X acceleration
     * Units: mG
     */
    xacc: int16_t;
    /**
     * Y acceleration
     * Units: mG
     */
    yacc: int16_t;
    /**
     * Z acceleration
     * Units: mG
     */
    zacc: int16_t;
    /**
     * Angular speed around X axis
     * Units: mrad/s
     */
    xgyro: int16_t;
    /**
     * Angular speed around Y axis
     * Units: mrad/s
     */
    ygyro: int16_t;
    /**
     * Angular speed around Z axis
     * Units: mrad/s
     */
    zgyro: int16_t;
    /**
     * X Magnetic field
     * Units: mgauss
     */
    xmag: int16_t;
    /**
     * Y Magnetic field
     * Units: mgauss
     */
    ymag: int16_t;
    /**
     * Z Magnetic field
     * Units: mgauss
     */
    zmag: int16_t;
    /**
     * Temperature, 0: IMU does not provide temperature values. If the IMU is at 0C it must send 1 (0.01C).
     * Units: cdegC
     */
    temperature: int16_t;
}
/**
 * Request a list of available logs. On some systems calling this may stop on-board logging until
 * LOG_REQUEST_END is called. If there are no log files available this request shall be answered with
 * one LOG_ENTRY message with id = 0 and num_logs = 0.
 */
export declare class LogRequestList extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * System ID
     */
    targetSystem: uint8_t;
    /**
     * Component ID
     */
    targetComponent: uint8_t;
    /**
     * First log id (0 for first available)
     */
    start: uint16_t;
    /**
     * Last log id (0xffff for last available)
     */
    end: uint16_t;
}
/**
 * Reply to LOG_REQUEST_LIST
 */
export declare class LogEntry extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Log id
     */
    id: uint16_t;
    /**
     * Total number of logs
     */
    numLogs: uint16_t;
    /**
     * High log number
     */
    lastLogNum: uint16_t;
    /**
     * UTC timestamp of log since 1970, or 0 if not available
     * Units: s
     */
    timeUtc: uint32_t;
    /**
     * Size of the log (may be approximate)
     * Units: bytes
     */
    size: uint32_t;
}
/**
 * Request a chunk of a log
 */
export declare class LogRequestData extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * System ID
     */
    targetSystem: uint8_t;
    /**
     * Component ID
     */
    targetComponent: uint8_t;
    /**
     * Log id (from LOG_ENTRY reply)
     */
    id: uint16_t;
    /**
     * Offset into the log
     */
    ofs: uint32_t;
    /**
     * Number of bytes
     * Units: bytes
     */
    count: uint32_t;
}
/**
 * Reply to LOG_REQUEST_DATA
 */
export declare class LogData extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Log id (from LOG_ENTRY reply)
     */
    id: uint16_t;
    /**
     * Offset into the log
     */
    ofs: uint32_t;
    /**
     * Number of bytes (zero for end of log)
     * Units: bytes
     */
    count: uint8_t;
    /**
     * log data
     */
    data: uint8_t[];
}
/**
 * Erase all logs
 */
export declare class LogErase extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * System ID
     */
    targetSystem: uint8_t;
    /**
     * Component ID
     */
    targetComponent: uint8_t;
}
/**
 * Stop log transfer and resume normal logging
 */
export declare class LogRequestEnd extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * System ID
     */
    targetSystem: uint8_t;
    /**
     * Component ID
     */
    targetComponent: uint8_t;
}
/**
 * Data for injecting into the onboard GPS (used for DGPS)
 */
export declare class GpsInjectData extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * System ID
     */
    targetSystem: uint8_t;
    /**
     * Component ID
     */
    targetComponent: uint8_t;
    /**
     * Data length
     * Units: bytes
     */
    len: uint8_t;
    /**
     * Raw data (110 is enough for 12 satellites of RTCMv2)
     */
    data: uint8_t[];
}
/**
 * Second GPS data.
 */
export declare class Gps2Raw extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format
     * (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
     * Units: us
     */
    timeUsec: uint64_t;
    /**
     * GPS fix type.
     */
    fixType: GpsFixType;
    /**
     * Latitude (WGS84)
     * Units: degE7
     */
    lat: int32_t;
    /**
     * Longitude (WGS84)
     * Units: degE7
     */
    lon: int32_t;
    /**
     * Altitude (MSL). Positive for up.
     * Units: mm
     */
    alt: int32_t;
    /**
     * GPS HDOP horizontal dilution of position (unitless). If unknown, set to: UINT16_MAX
     */
    eph: uint16_t;
    /**
     * GPS VDOP vertical dilution of position (unitless). If unknown, set to: UINT16_MAX
     */
    epv: uint16_t;
    /**
     * GPS ground speed. If unknown, set to: UINT16_MAX
     * Units: cm/s
     */
    vel: uint16_t;
    /**
     * Course over ground (NOT heading, but direction of movement): 0.0..359.99 degrees. If unknown, set
     * to: UINT16_MAX
     * Units: cdeg
     */
    cog: uint16_t;
    /**
     * Number of satellites visible. If unknown, set to 255
     */
    satellitesVisible: uint8_t;
    /**
     * Number of DGPS satellites
     */
    dgpsNumch: uint8_t;
    /**
     * Age of DGPS info
     * Units: ms
     */
    dgpsAge: uint32_t;
    /**
     * Yaw in earth frame from north. Use 0 if this GPS does not provide yaw. Use 65535 if this GPS is
     * configured to provide yaw and is currently unable to provide it. Use 36000 for north.
     * Units: cdeg
     */
    yaw: uint16_t;
    /**
     * Altitude (above WGS84, EGM96 ellipsoid). Positive for up.
     * Units: mm
     */
    altEllipsoid: int32_t;
    /**
     * Position uncertainty.
     * Units: mm
     */
    hAcc: uint32_t;
    /**
     * Altitude uncertainty.
     * Units: mm
     */
    vAcc: uint32_t;
    /**
     * Speed uncertainty.
     * Units: mm
     */
    velAcc: uint32_t;
    /**
     * Heading / track uncertainty
     * Units: degE5
     */
    hdgAcc: uint32_t;
}
/**
 * Power supply status
 */
export declare class PowerStatus extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * 5V rail voltage.
     * Units: mV
     */
    Vcc: uint16_t;
    /**
     * Servo rail voltage.
     * Units: mV
     */
    Vservo: uint16_t;
    /**
     * Bitmap of power supply status flags.
     */
    flags: MavPowerStatus;
}
/**
 * Control a serial port. This can be used for raw access to an onboard serial peripheral such as a GPS
 * or telemetry radio. It is designed to make it possible to update the devices firmware via MAVLink
 * messages or change the devices settings. A message with zero bytes can be used to change just the
 * baudrate.
 */
export declare class SerialControl extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Serial control device type.
     */
    device: SerialControlDev;
    /**
     * Bitmap of serial control flags.
     */
    flags: SerialControlFlag;
    /**
     * Timeout for reply data
     * Units: ms
     */
    timeout: uint16_t;
    /**
     * Baudrate of transfer. Zero means no change.
     * Units: bits/s
     */
    baudrate: uint32_t;
    /**
     * how many bytes in this transfer
     * Units: bytes
     */
    count: uint8_t;
    /**
     * serial data
     */
    data: uint8_t[];
}
/**
 * RTK GPS data. Gives information on the relative baseline calculation the GPS is reporting
 */
export declare class GpsRtk extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Time since boot of last baseline message received.
     * Units: ms
     */
    timeLastBaselineMs: uint32_t;
    /**
     * Identification of connected RTK receiver.
     */
    rtkReceiverId: uint8_t;
    /**
     * GPS Week Number of last baseline
     */
    wn: uint16_t;
    /**
     * GPS Time of Week of last baseline
     * Units: ms
     */
    tow: uint32_t;
    /**
     * GPS-specific health report for RTK data.
     */
    rtkHealth: uint8_t;
    /**
     * Rate of baseline messages being received by GPS
     * Units: Hz
     */
    rtkRate: uint8_t;
    /**
     * Current number of sats used for RTK calculation.
     */
    nsats: uint8_t;
    /**
     * Coordinate system of baseline
     */
    baselineCoordsType: RtkBaselineCoordinateSystem;
    /**
     * Current baseline in ECEF x or NED north component.
     * Units: mm
     */
    baselineAMm: int32_t;
    /**
     * Current baseline in ECEF y or NED east component.
     * Units: mm
     */
    baselineBMm: int32_t;
    /**
     * Current baseline in ECEF z or NED down component.
     * Units: mm
     */
    baselineCMm: int32_t;
    /**
     * Current estimate of baseline accuracy.
     */
    accuracy: uint32_t;
    /**
     * Current number of integer ambiguity hypotheses.
     */
    iarNumHypotheses: int32_t;
}
/**
 * RTK GPS data. Gives information on the relative baseline calculation the GPS is reporting
 */
export declare class Gps2Rtk extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Time since boot of last baseline message received.
     * Units: ms
     */
    timeLastBaselineMs: uint32_t;
    /**
     * Identification of connected RTK receiver.
     */
    rtkReceiverId: uint8_t;
    /**
     * GPS Week Number of last baseline
     */
    wn: uint16_t;
    /**
     * GPS Time of Week of last baseline
     * Units: ms
     */
    tow: uint32_t;
    /**
     * GPS-specific health report for RTK data.
     */
    rtkHealth: uint8_t;
    /**
     * Rate of baseline messages being received by GPS
     * Units: Hz
     */
    rtkRate: uint8_t;
    /**
     * Current number of sats used for RTK calculation.
     */
    nsats: uint8_t;
    /**
     * Coordinate system of baseline
     */
    baselineCoordsType: RtkBaselineCoordinateSystem;
    /**
     * Current baseline in ECEF x or NED north component.
     * Units: mm
     */
    baselineAMm: int32_t;
    /**
     * Current baseline in ECEF y or NED east component.
     * Units: mm
     */
    baselineBMm: int32_t;
    /**
     * Current baseline in ECEF z or NED down component.
     * Units: mm
     */
    baselineCMm: int32_t;
    /**
     * Current estimate of baseline accuracy.
     */
    accuracy: uint32_t;
    /**
     * Current number of integer ambiguity hypotheses.
     */
    iarNumHypotheses: int32_t;
}
/**
 * The RAW IMU readings for 3rd 9DOF sensor setup. This message should contain the scaled values to the
 * described units
 */
export declare class ScaledImu3 extends MavLinkData {
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
     * X acceleration
     * Units: mG
     */
    xacc: int16_t;
    /**
     * Y acceleration
     * Units: mG
     */
    yacc: int16_t;
    /**
     * Z acceleration
     * Units: mG
     */
    zacc: int16_t;
    /**
     * Angular speed around X axis
     * Units: mrad/s
     */
    xgyro: int16_t;
    /**
     * Angular speed around Y axis
     * Units: mrad/s
     */
    ygyro: int16_t;
    /**
     * Angular speed around Z axis
     * Units: mrad/s
     */
    zgyro: int16_t;
    /**
     * X Magnetic field
     * Units: mgauss
     */
    xmag: int16_t;
    /**
     * Y Magnetic field
     * Units: mgauss
     */
    ymag: int16_t;
    /**
     * Z Magnetic field
     * Units: mgauss
     */
    zmag: int16_t;
    /**
     * Temperature, 0: IMU does not provide temperature values. If the IMU is at 0C it must send 1 (0.01C).
     * Units: cdegC
     */
    temperature: int16_t;
}
/**
 * Handshake message to initiate, control and stop image streaming when using the Image Transmission
 * Protocol: https://mavlink.io/en/services/image_transmission.html.
 */
export declare class DataTransmissionHandshake extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Type of requested/acknowledged data.
     */
    type: MavlinkDataStreamType;
    /**
     * total data size (set on ACK only).
     * Units: bytes
     */
    size: uint32_t;
    /**
     * Width of a matrix or image.
     */
    width: uint16_t;
    /**
     * Height of a matrix or image.
     */
    height: uint16_t;
    /**
     * Number of packets being sent (set on ACK only).
     */
    packets: uint16_t;
    /**
     * Payload size per packet (normally 253 byte, see DATA field size in message ENCAPSULATED_DATA) (set
     * on ACK only).
     * Units: bytes
     */
    payload: uint8_t;
    /**
     * JPEG quality. Values: [1-100].
     * Units: %
     */
    jpgQuality: uint8_t;
}
/**
 * Data packet for images sent using the Image Transmission Protocol:
 * https://mavlink.io/en/services/image_transmission.html.
 */
export declare class EncapsulatedData extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * sequence number (starting with 0 on every transmission)
     */
    seqnr: uint16_t;
    /**
     * image data bytes
     */
    data: uint8_t[];
}
/**
 * Distance sensor information for an onboard rangefinder.
 */
export declare class DistanceSensor extends MavLinkData {
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
     * Minimum distance the sensor can measure
     * Units: cm
     */
    minDistance: uint16_t;
    /**
     * Maximum distance the sensor can measure
     * Units: cm
     */
    maxDistance: uint16_t;
    /**
     * Current distance reading
     * Units: cm
     */
    currentDistance: uint16_t;
    /**
     * Type of distance sensor.
     */
    type: MavDistanceSensor;
    /**
     * Onboard ID of the sensor
     */
    id: uint8_t;
    /**
     * Direction the sensor faces. downward-facing: ROTATION_PITCH_270, upward-facing: ROTATION_PITCH_90,
     * backward-facing: ROTATION_PITCH_180, forward-facing: ROTATION_NONE, left-facing: ROTATION_YAW_90,
     * right-facing: ROTATION_YAW_270
     */
    orientation: MavSensorOrientation;
    /**
     * Measurement variance. Max standard deviation is 6cm. 255 if unknown.
     * Units: cm^2
     */
    covariance: uint8_t;
    /**
     * Horizontal Field of View (angle) where the distance measurement is valid and the field of view is
     * known. Otherwise this is set to 0.
     * Units: rad
     */
    horizontalFov: float;
    /**
     * Vertical Field of View (angle) where the distance measurement is valid and the field of view is
     * known. Otherwise this is set to 0.
     * Units: rad
     */
    verticalFov: float;
    /**
     * Quaternion of the sensor orientation in vehicle body frame (w, x, y, z order, zero-rotation is 1, 0,
     * 0, 0). Zero-rotation is along the vehicle body x-axis. This field is required if the orientation is
     * set to MAV_SENSOR_ROTATION_CUSTOM. Set it to 0 if invalid."
     */
    quaternion: float[];
    /**
     * Signal quality of the sensor. Specific to each sensor type, representing the relation of the signal
     * strength with the target reflectivity, distance, size or aspect, but normalised as a percentage. 0 =
     * unknown/unset signal quality, 1 = invalid signal, 100 = perfect signal.
     * Units: %
     */
    signalQuality: uint8_t;
}
/**
 * Request for terrain data and terrain status. See terrain protocol docs:
 * https://mavlink.io/en/services/terrain.html
 */
export declare class TerrainRequest extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Latitude of SW corner of first grid
     * Units: degE7
     */
    lat: int32_t;
    /**
     * Longitude of SW corner of first grid
     * Units: degE7
     */
    lon: int32_t;
    /**
     * Grid spacing
     * Units: m
     */
    gridSpacing: uint16_t;
    /**
     * Bitmask of requested 4x4 grids (row major 8x7 array of grids, 56 bits)
     */
    mask: uint64_t;
}
/**
 * Terrain data sent from GCS. The lat/lon and grid_spacing must be the same as a lat/lon from a
 * TERRAIN_REQUEST. See terrain protocol docs: https://mavlink.io/en/services/terrain.html
 */
export declare class TerrainData extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Latitude of SW corner of first grid
     * Units: degE7
     */
    lat: int32_t;
    /**
     * Longitude of SW corner of first grid
     * Units: degE7
     */
    lon: int32_t;
    /**
     * Grid spacing
     * Units: m
     */
    gridSpacing: uint16_t;
    /**
     * bit within the terrain request mask
     */
    gridbit: uint8_t;
    /**
     * Terrain data MSL
     * Units: m
     */
    data: int16_t[];
}
/**
 * Request that the vehicle report terrain height at the given location (expected response is a
 * TERRAIN_REPORT). Used by GCS to check if vehicle has all terrain data needed for a mission.
 */
export declare class TerrainCheck extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Latitude
     * Units: degE7
     */
    lat: int32_t;
    /**
     * Longitude
     * Units: degE7
     */
    lon: int32_t;
}
/**
 * Streamed from drone to report progress of terrain map download (initiated by TERRAIN_REQUEST), or
 * sent as a response to a TERRAIN_CHECK request. See terrain protocol docs:
 * https://mavlink.io/en/services/terrain.html
 */
export declare class TerrainReport extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Latitude
     * Units: degE7
     */
    lat: int32_t;
    /**
     * Longitude
     * Units: degE7
     */
    lon: int32_t;
    /**
     * grid spacing (zero if terrain at this location unavailable)
     */
    spacing: uint16_t;
    /**
     * Terrain height MSL
     * Units: m
     */
    terrainHeight: float;
    /**
     * Current vehicle height above lat/lon terrain height
     * Units: m
     */
    currentHeight: float;
    /**
     * Number of 4x4 terrain blocks waiting to be received or read from disk
     */
    pending: uint16_t;
    /**
     * Number of 4x4 terrain blocks in memory
     */
    loaded: uint16_t;
}
/**
 * Barometer readings for 2nd barometer
 */
export declare class ScaledPressure2 extends MavLinkData {
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
     * Absolute pressure
     * Units: hPa
     */
    pressAbs: float;
    /**
     * Differential pressure
     * Units: hPa
     */
    pressDiff: float;
    /**
     * Absolute pressure temperature
     * Units: cdegC
     */
    temperature: int16_t;
    /**
     * Differential pressure temperature (0, if not available). Report values of 0 (or 1) as 1 cdegC.
     * Units: cdegC
     */
    temperaturePressDiff: int16_t;
}
/**
 * Motion capture attitude and position
 */
export declare class MotionCaptureAttPos extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format
     * (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
     * Units: us
     */
    timeUsec: uint64_t;
    /**
     * Attitude quaternion (w, x, y, z order, zero-rotation is 1, 0, 0, 0)
     */
    q: float[];
    /**
     * X position (NED)
     * Units: m
     */
    x: float;
    /**
     * Y position (NED)
     * Units: m
     */
    y: float;
    /**
     * Z position (NED)
     * Units: m
     */
    z: float;
    /**
     * Row-major representation of a pose 6x6 cross-covariance matrix upper right triangle (states: x, y,
     * z, roll, pitch, yaw; first six entries are the first ROW, next five entries are the second ROW,
     * etc.). If unknown, assign NaN value to first element in the array.
     */
    covariance: float[];
}
/**
 * Set the vehicle attitude and body angular rates.
 */
export declare class SetActuatorControlTarget extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format
     * (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
     * Units: us
     */
    timeUsec: uint64_t;
    /**
     * Actuator group. The "_mlx" indicates this is a multi-instance message and a MAVLink parser should
     * use this field to difference between instances.
     */
    groupMlx: uint8_t;
    /**
     * System ID
     */
    targetSystem: uint8_t;
    /**
     * Component ID
     */
    targetComponent: uint8_t;
    /**
     * Actuator controls. Normed to -1..+1 where 0 is neutral position. Throttle for single rotation
     * direction motors is 0..1, negative range for reverse direction. Standard mapping for attitude
     * controls (group 0): (index 0-7): roll, pitch, yaw, throttle, flaps, spoilers, airbrakes, landing
     * gear. Load a pass-through mixer to repurpose them as generic outputs.
     */
    controls: float[];
}
/**
 * Set the vehicle attitude and body angular rates.
 */
export declare class ActuatorControlTarget extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format
     * (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
     * Units: us
     */
    timeUsec: uint64_t;
    /**
     * Actuator group. The "_mlx" indicates this is a multi-instance message and a MAVLink parser should
     * use this field to difference between instances.
     */
    groupMlx: uint8_t;
    /**
     * Actuator controls. Normed to -1..+1 where 0 is neutral position. Throttle for single rotation
     * direction motors is 0..1, negative range for reverse direction. Standard mapping for attitude
     * controls (group 0): (index 0-7): roll, pitch, yaw, throttle, flaps, spoilers, airbrakes, landing
     * gear. Load a pass-through mixer to repurpose them as generic outputs.
     */
    controls: float[];
}
/**
 * The current system altitude.
 */
export declare class Altitude extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format
     * (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
     * Units: us
     */
    timeUsec: uint64_t;
    /**
     * This altitude measure is initialized on system boot and monotonic (it is never reset, but represents
     * the local altitude change). The only guarantee on this field is that it will never be reset and is
     * consistent within a flight. The recommended value for this field is the uncorrected barometric
     * altitude at boot time. This altitude will also drift and vary between flights.
     * Units: m
     */
    altitudeMonotonic: float;
    /**
     * This altitude measure is strictly above mean sea level and might be non-monotonic (it might reset on
     * events like GPS lock or when a new QNH value is set). It should be the altitude to which global
     * altitude waypoints are compared to. Note that it is *not* the GPS altitude, however, most GPS
     * modules already output MSL by default and not the WGS84 altitude.
     * Units: m
     */
    altitudeAmsl: float;
    /**
     * This is the local altitude in the local coordinate frame. It is not the altitude above home, but in
     * reference to the coordinate origin (0, 0, 0). It is up-positive.
     * Units: m
     */
    altitudeLocal: float;
    /**
     * This is the altitude above the home position. It resets on each change of the current home position.
     * Units: m
     */
    altitudeRelative: float;
    /**
     * This is the altitude above terrain. It might be fed by a terrain database or an altimeter. Values
     * smaller than -1000 should be interpreted as unknown.
     * Units: m
     */
    altitudeTerrain: float;
    /**
     * This is not the altitude, but the clear space below the system according to the fused clearance
     * estimate. It generally should max out at the maximum range of e.g. the laser altimeter. It is
     * generally a moving target. A negative value indicates no measurement available.
     * Units: m
     */
    bottomClearance: float;
}
/**
 * The autopilot is requesting a resource (file, binary, other type of data)
 */
export declare class ResourceRequest extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Request ID. This ID should be re-used when sending back URI contents
     */
    requestId: uint8_t;
    /**
     * The type of requested URI. 0 = a file via URL. 1 = a UAVCAN binary
     */
    uriType: uint8_t;
    /**
     * The requested unique resource identifier (URI). It is not necessarily a straight domain name
     * (depends on the URI type enum)
     */
    uri: uint8_t[];
    /**
     * The way the autopilot wants to receive the URI. 0 = MAVLink FTP. 1 = binary stream.
     */
    transferType: uint8_t;
    /**
     * The storage path the autopilot wants the URI to be stored in. Will only be valid if the
     * transfer_type has a storage associated (e.g. MAVLink FTP).
     */
    storage: uint8_t[];
}
/**
 * Barometer readings for 3rd barometer
 */
export declare class ScaledPressure3 extends MavLinkData {
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
     * Absolute pressure
     * Units: hPa
     */
    pressAbs: float;
    /**
     * Differential pressure
     * Units: hPa
     */
    pressDiff: float;
    /**
     * Absolute pressure temperature
     * Units: cdegC
     */
    temperature: int16_t;
    /**
     * Differential pressure temperature (0, if not available). Report values of 0 (or 1) as 1 cdegC.
     * Units: cdegC
     */
    temperaturePressDiff: int16_t;
}
/**
 * Current motion information from a designated system
 */
export declare class FollowTarget extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Timestamp (time since system boot).
     * Units: ms
     */
    timestamp: uint64_t;
    /**
     * bit positions for tracker reporting capabilities (POS = 0, VEL = 1, ACCEL = 2, ATT + RATES = 3)
     */
    estCapabilities: uint8_t;
    /**
     * Latitude (WGS84)
     * Units: degE7
     */
    lat: int32_t;
    /**
     * Longitude (WGS84)
     * Units: degE7
     */
    lon: int32_t;
    /**
     * Altitude (MSL)
     * Units: m
     */
    alt: float;
    /**
     * target velocity (0,0,0) for unknown
     * Units: m/s
     */
    vel: float[];
    /**
     * linear target acceleration (0,0,0) for unknown
     * Units: m/s/s
     */
    acc: float[];
    /**
     * (1 0 0 0 for unknown)
     */
    attitudeQ: float[];
    /**
     * (0 0 0 for unknown)
     */
    rates: float[];
    /**
     * eph epv
     */
    positionCov: float[];
    /**
     * button states or switches of a tracker device
     */
    customState: uint64_t;
}
/**
 * The smoothed, monotonic system state used to feed the control loops of the system.
 */
export declare class ControlSystemState extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format
     * (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
     * Units: us
     */
    timeUsec: uint64_t;
    /**
     * X acceleration in body frame
     * Units: m/s/s
     */
    xAcc: float;
    /**
     * Y acceleration in body frame
     * Units: m/s/s
     */
    yAcc: float;
    /**
     * Z acceleration in body frame
     * Units: m/s/s
     */
    zAcc: float;
    /**
     * X velocity in body frame
     * Units: m/s
     */
    xVel: float;
    /**
     * Y velocity in body frame
     * Units: m/s
     */
    yVel: float;
    /**
     * Z velocity in body frame
     * Units: m/s
     */
    zVel: float;
    /**
     * X position in local frame
     * Units: m
     */
    xPos: float;
    /**
     * Y position in local frame
     * Units: m
     */
    yPos: float;
    /**
     * Z position in local frame
     * Units: m
     */
    zPos: float;
    /**
     * Airspeed, set to -1 if unknown
     * Units: m/s
     */
    airspeed: float;
    /**
     * Variance of body velocity estimate
     */
    velVariance: float[];
    /**
     * Variance in local position
     */
    posVariance: float[];
    /**
     * The attitude, represented as Quaternion
     */
    q: float[];
    /**
     * Angular rate in roll axis
     * Units: rad/s
     */
    rollRate: float;
    /**
     * Angular rate in pitch axis
     * Units: rad/s
     */
    pitchRate: float;
    /**
     * Angular rate in yaw axis
     * Units: rad/s
     */
    yawRate: float;
}
/**
 * Battery information
 */
export declare class BatteryStatus extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Battery ID
     */
    id: uint8_t;
    /**
     * Function of the battery
     */
    batteryFunction: MavBatteryFunction;
    /**
     * Type (chemistry) of the battery
     */
    type: MavBatteryType;
    /**
     * Temperature of the battery. INT16_MAX for unknown temperature.
     * Units: cdegC
     */
    temperature: int16_t;
    /**
     * Battery voltage of cells 1 to 10 (see voltages_ext for cells 11-14). Cells in this field above the
     * valid cell count for this battery should have the UINT16_MAX value. If individual cell voltages are
     * unknown or not measured for this battery, then the overall battery voltage should be filled in cell
     * 0, with all others set to UINT16_MAX. If the voltage of the battery is greater than (UINT16_MAX -
     * 1), then cell 0 should be set to (UINT16_MAX - 1), and cell 1 to the remaining voltage. This can be
     * extended to multiple cells if the total voltage is greater than 2 * (UINT16_MAX - 1).
     * Units: mV
     */
    voltages: uint16_t[];
    /**
     * Battery current, -1: autopilot does not measure the current
     * Units: cA
     */
    currentBattery: int16_t;
    /**
     * Consumed charge, -1: autopilot does not provide consumption estimate
     * Units: mAh
     */
    currentConsumed: int32_t;
    /**
     * Consumed energy, -1: autopilot does not provide energy consumption estimate
     * Units: hJ
     */
    energyConsumed: int32_t;
    /**
     * Remaining battery energy. Values: [0-100], -1: autopilot does not estimate the remaining battery.
     * Units: %
     */
    batteryRemaining: int8_t;
    /**
     * Remaining battery time, 0: autopilot does not provide remaining battery time estimate
     * Units: s
     */
    timeRemaining: int32_t;
    /**
     * State for extent of discharge, provided by autopilot for warning or external reactions
     */
    chargeState: MavBatteryChargeState;
    /**
     * Battery voltages for cells 11 to 14. Cells above the valid cell count for this battery should have a
     * value of 0, where zero indicates not supported (note, this is different than for the voltages field
     * and allows empty byte truncation). If the measured value is 0 then 1 should be sent instead.
     * Units: mV
     */
    voltagesExt: uint16_t[];
}
/**
 * Version and capability of autopilot software. This should be emitted in response to a request with
 * MAV_CMD_REQUEST_MESSAGE.
 */
export declare class AutopilotVersion extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Bitmap of capabilities
     */
    capabilities: MavProtocolCapability;
    /**
     * Firmware version number
     */
    flightSwVersion: uint32_t;
    /**
     * Middleware version number
     */
    middlewareSwVersion: uint32_t;
    /**
     * Operating system version number
     */
    osSwVersion: uint32_t;
    /**
     * HW / board version (last 8 bytes should be silicon ID, if any)
     */
    boardVersion: uint32_t;
    /**
     * Custom version field, commonly the first 8 bytes of the git hash. This is not an unique identifier,
     * but should allow to identify the commit using the main version number even for very large code
     * bases.
     */
    flightCustomVersion: uint8_t[];
    /**
     * Custom version field, commonly the first 8 bytes of the git hash. This is not an unique identifier,
     * but should allow to identify the commit using the main version number even for very large code
     * bases.
     */
    middlewareCustomVersion: uint8_t[];
    /**
     * Custom version field, commonly the first 8 bytes of the git hash. This is not an unique identifier,
     * but should allow to identify the commit using the main version number even for very large code
     * bases.
     */
    osCustomVersion: uint8_t[];
    /**
     * ID of the board vendor
     */
    vendorId: uint16_t;
    /**
     * ID of the product
     */
    productId: uint16_t;
    /**
     * UID if provided by hardware (see uid2)
     */
    uid: uint64_t;
    /**
     * UID if provided by hardware (supersedes the uid field. If this is non-zero, use this field,
     * otherwise use uid)
     */
    uid2: uint8_t[];
}
/**
 * The location of a landing target. See: https://mavlink.io/en/services/landing_target.html
 */
export declare class LandingTarget extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format
     * (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
     * Units: us
     */
    timeUsec: uint64_t;
    /**
     * The ID of the target if multiple targets are present
     */
    targetNum: uint8_t;
    /**
     * Coordinate frame used for following fields.
     */
    frame: MavFrame;
    /**
     * X-axis angular offset of the target from the center of the image
     * Units: rad
     */
    angleX: float;
    /**
     * Y-axis angular offset of the target from the center of the image
     * Units: rad
     */
    angleY: float;
    /**
     * Distance to the target from the vehicle
     * Units: m
     */
    distance: float;
    /**
     * Size of target along x-axis
     * Units: rad
     */
    sizeX: float;
    /**
     * Size of target along y-axis
     * Units: rad
     */
    sizeY: float;
    /**
     * X Position of the landing target in MAV_FRAME
     * Units: m
     */
    x: float;
    /**
     * Y Position of the landing target in MAV_FRAME
     * Units: m
     */
    y: float;
    /**
     * Z Position of the landing target in MAV_FRAME
     * Units: m
     */
    z: float;
    /**
     * Quaternion of landing target orientation (w, x, y, z order, zero-rotation is 1, 0, 0, 0)
     */
    q: float[];
    /**
     * Type of landing target
     */
    type: LandingTargetType;
    /**
     * Boolean indicating whether the position fields (x, y, z, q, type) contain valid target position
     * information (valid: 1, invalid: 0). Default is 0 (invalid).
     */
    positionValid: uint8_t;
}
/**
 * Status of geo-fencing. Sent in extended status stream when fencing enabled.
 */
export declare class FenceStatus extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Breach status (0 if currently inside fence, 1 if outside).
     */
    breachStatus: uint8_t;
    /**
     * Number of fence breaches.
     */
    breachCount: uint16_t;
    /**
     * Last breach type.
     */
    breachType: FenceBreach;
    /**
     * Time (since boot) of last breach.
     * Units: ms
     */
    breachTime: uint32_t;
    /**
     * Active action to prevent fence breach
     */
    breachMitigation: FenceMitigate;
}
/**
 * Reports results of completed compass calibration. Sent until MAG_CAL_ACK received.
 */
export declare class MagCalReport extends MavLinkData {
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
     * 0=requires a MAV_CMD_DO_ACCEPT_MAG_CAL, 1=saved to parameters.
     */
    autosaved: uint8_t;
    /**
     * RMS milligauss residuals.
     * Units: mgauss
     */
    fitness: float;
    /**
     * X offset.
     */
    ofsX: float;
    /**
     * Y offset.
     */
    ofsY: float;
    /**
     * Z offset.
     */
    ofsZ: float;
    /**
     * X diagonal (matrix 11).
     */
    diagX: float;
    /**
     * Y diagonal (matrix 22).
     */
    diagY: float;
    /**
     * Z diagonal (matrix 33).
     */
    diagZ: float;
    /**
     * X off-diagonal (matrix 12 and 21).
     */
    offdiagX: float;
    /**
     * Y off-diagonal (matrix 13 and 31).
     */
    offdiagY: float;
    /**
     * Z off-diagonal (matrix 32 and 23).
     */
    offdiagZ: float;
    /**
     * Confidence in orientation (higher is better).
     */
    orientationConfidence: float;
    /**
     * orientation before calibration.
     */
    oldOrientation: MavSensorOrientation;
    /**
     * orientation after calibration.
     */
    newOrientation: MavSensorOrientation;
    /**
     * field radius correction factor
     */
    scaleFactor: float;
}
/**
 * EFI status output
 */
export declare class EfiStatus extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * EFI health status
     */
    health: uint8_t;
    /**
     * ECU index
     */
    ecuIndex: float;
    /**
     * RPM
     */
    rpm: float;
    /**
     * Fuel consumed
     * Units: cm^3
     */
    fuelConsumed: float;
    /**
     * Fuel flow rate
     * Units: cm^3/min
     */
    fuelFlow: float;
    /**
     * Engine load
     * Units: %
     */
    engineLoad: float;
    /**
     * Throttle position
     * Units: %
     */
    throttlePosition: float;
    /**
     * Spark dwell time
     * Units: ms
     */
    sparkDwellTime: float;
    /**
     * Barometric pressure
     * Units: kPa
     */
    barometricPressure: float;
    /**
     * Intake manifold pressure(
     * Units: kPa
     */
    intakeManifoldPressure: float;
    /**
     * Intake manifold temperature
     * Units: degC
     */
    intakeManifoldTemperature: float;
    /**
     * Cylinder head temperature
     * Units: degC
     */
    cylinderHeadTemperature: float;
    /**
     * Ignition timing (Crank angle degrees)
     * Units: deg
     */
    ignitionTiming: float;
    /**
     * Injection time
     * Units: ms
     */
    injectionTime: float;
    /**
     * Exhaust gas temperature
     * Units: degC
     */
    exhaustGasTemperature: float;
    /**
     * Output throttle
     * Units: %
     */
    throttleOut: float;
    /**
     * Pressure/temperature compensation
     */
    ptCompensation: float;
}
/**
 * Estimator status message including flags, innovation test ratios and estimated accuracies. The flags
 * message is an integer bitmask containing information on which EKF outputs are valid. See the
 * ESTIMATOR_STATUS_FLAGS enum definition for further information. The innovation test ratios show the
 * magnitude of the sensor innovation divided by the innovation check threshold. Under normal operation
 * the innovation test ratios should be below 0.5 with occasional values up to 1.0. Values greater than
 * 1.0 should be rare under normal operation and indicate that a measurement has been rejected by the
 * filter. The user should be notified if an innovation test ratio greater than 1.0 is recorded.
 * Notifications for values in the range between 0.5 and 1.0 should be optional and controllable by the
 * user.
 */
export declare class EstimatorStatus extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format
     * (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
     * Units: us
     */
    timeUsec: uint64_t;
    /**
     * Bitmap indicating which EKF outputs are valid.
     */
    flags: EstimatorStatusFlags;
    /**
     * Velocity innovation test ratio
     */
    velRatio: float;
    /**
     * Horizontal position innovation test ratio
     */
    posHorizRatio: float;
    /**
     * Vertical position innovation test ratio
     */
    posVertRatio: float;
    /**
     * Magnetometer innovation test ratio
     */
    magRatio: float;
    /**
     * Height above terrain innovation test ratio
     */
    haglRatio: float;
    /**
     * True airspeed innovation test ratio
     */
    tasRatio: float;
    /**
     * Horizontal position 1-STD accuracy relative to the EKF local origin
     * Units: m
     */
    posHorizAccuracy: float;
    /**
     * Vertical position 1-STD accuracy relative to the EKF local origin
     * Units: m
     */
    posVertAccuracy: float;
}
/**
 * Wind covariance estimate from vehicle.
 */
export declare class WindCov extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format
     * (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
     * Units: us
     */
    timeUsec: uint64_t;
    /**
     * Wind in X (NED) direction
     * Units: m/s
     */
    windX: float;
    /**
     * Wind in Y (NED) direction
     * Units: m/s
     */
    windY: float;
    /**
     * Wind in Z (NED) direction
     * Units: m/s
     */
    windZ: float;
    /**
     * Variability of the wind in XY. RMS of a 1 Hz lowpassed wind estimate.
     * Units: m/s
     */
    varHoriz: float;
    /**
     * Variability of the wind in Z. RMS of a 1 Hz lowpassed wind estimate.
     * Units: m/s
     */
    varVert: float;
    /**
     * Altitude (MSL) that this measurement was taken at
     * Units: m
     */
    windAlt: float;
    /**
     * Horizontal speed 1-STD accuracy
     * Units: m
     */
    horizAccuracy: float;
    /**
     * Vertical speed 1-STD accuracy
     * Units: m
     */
    vertAccuracy: float;
}
/**
 * GPS sensor input message. This is a raw sensor value sent by the GPS. This is NOT the global
 * position estimate of the system.
 */
export declare class GpsInput extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format
     * (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
     * Units: us
     */
    timeUsec: uint64_t;
    /**
     * ID of the GPS for multiple GPS inputs
     */
    gpsId: uint8_t;
    /**
     * Bitmap indicating which GPS input flags fields to ignore. All other fields must be provided.
     */
    ignoreFlags: GpsInputIgnoreFlags;
    /**
     * GPS time (from start of GPS week)
     * Units: ms
     */
    timeWeekMs: uint32_t;
    /**
     * GPS week number
     */
    timeWeek: uint16_t;
    /**
     * 0-1: no fix, 2: 2D fix, 3: 3D fix. 4: 3D with DGPS. 5: 3D with RTK
     */
    fixType: uint8_t;
    /**
     * Latitude (WGS84)
     * Units: degE7
     */
    lat: int32_t;
    /**
     * Longitude (WGS84)
     * Units: degE7
     */
    lon: int32_t;
    /**
     * Altitude (MSL). Positive for up.
     * Units: m
     */
    alt: float;
    /**
     * GPS HDOP horizontal dilution of position (unitless). If unknown, set to: UINT16_MAX
     */
    hdop: float;
    /**
     * GPS VDOP vertical dilution of position (unitless). If unknown, set to: UINT16_MAX
     */
    vdop: float;
    /**
     * GPS velocity in north direction in earth-fixed NED frame
     * Units: m/s
     */
    vn: float;
    /**
     * GPS velocity in east direction in earth-fixed NED frame
     * Units: m/s
     */
    ve: float;
    /**
     * GPS velocity in down direction in earth-fixed NED frame
     * Units: m/s
     */
    vd: float;
    /**
     * GPS speed accuracy
     * Units: m/s
     */
    speedAccuracy: float;
    /**
     * GPS horizontal accuracy
     * Units: m
     */
    horizAccuracy: float;
    /**
     * GPS vertical accuracy
     * Units: m
     */
    vertAccuracy: float;
    /**
     * Number of satellites visible.
     */
    satellitesVisible: uint8_t;
    /**
     * Yaw of vehicle relative to Earth's North, zero means not available, use 36000 for north
     * Units: cdeg
     */
    yaw: uint16_t;
}
/**
 * RTCM message for injecting into the onboard GPS (used for DGPS)
 */
export declare class GpsRtcmData extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * LSB: 1 means message is fragmented, next 2 bits are the fragment ID, the remaining 5 bits are used
     * for the sequence ID. Messages are only to be flushed to the GPS when the entire message has been
     * reconstructed on the autopilot. The fragment ID specifies which order the fragments should be
     * assembled into a buffer, while the sequence ID is used to detect a mismatch between different
     * buffers. The buffer is considered fully reconstructed when either all 4 fragments are present, or
     * all the fragments before the first fragment with a non full payload is received. This management is
     * used to ensure that normal GPS operation doesn't corrupt RTCM data, and to recover from a unreliable
     * transport delivery order.
     */
    flags: uint8_t;
    /**
     * data length
     * Units: bytes
     */
    len: uint8_t;
    /**
     * RTCM message (may be fragmented)
     */
    data: uint8_t[];
}
/**
 * Message appropriate for high latency connections like Iridium
 *
 * @deprecated since 2020-10, replaced by HIGH_LATENCY2
 */
export declare class HighLatency extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Bitmap of enabled system modes.
     */
    baseMode: MavModeFlag;
    /**
     * A bitfield for use for autopilot-specific flags.
     */
    customMode: uint32_t;
    /**
     * The landed state. Is set to MAV_LANDED_STATE_UNDEFINED if landed state is unknown.
     */
    landedState: MavLandedState;
    /**
     * roll
     * Units: cdeg
     */
    roll: int16_t;
    /**
     * pitch
     * Units: cdeg
     */
    pitch: int16_t;
    /**
     * heading
     * Units: cdeg
     */
    heading: uint16_t;
    /**
     * throttle (percentage)
     * Units: %
     */
    throttle: int8_t;
    /**
     * heading setpoint
     * Units: cdeg
     */
    headingSp: int16_t;
    /**
     * Latitude
     * Units: degE7
     */
    latitude: int32_t;
    /**
     * Longitude
     * Units: degE7
     */
    longitude: int32_t;
    /**
     * Altitude above mean sea level
     * Units: m
     */
    altitudeAmsl: int16_t;
    /**
     * Altitude setpoint relative to the home position
     * Units: m
     */
    altitudeSp: int16_t;
    /**
     * airspeed
     * Units: m/s
     */
    airspeed: uint8_t;
    /**
     * airspeed setpoint
     * Units: m/s
     */
    airspeedSp: uint8_t;
    /**
     * groundspeed
     * Units: m/s
     */
    groundspeed: uint8_t;
    /**
     * climb rate
     * Units: m/s
     */
    climbRate: int8_t;
    /**
     * Number of satellites visible. If unknown, set to 255
     */
    gpsNsat: uint8_t;
    /**
     * GPS Fix type.
     */
    gpsFixType: GpsFixType;
    /**
     * Remaining battery (percentage)
     * Units: %
     */
    batteryRemaining: uint8_t;
    /**
     * Autopilot temperature (degrees C)
     * Units: degC
     */
    temperature: int8_t;
    /**
     * Air temperature (degrees C) from airspeed sensor
     * Units: degC
     */
    temperatureAir: int8_t;
    /**
     * failsafe (each bit represents a failsafe where 0=ok, 1=failsafe active (bit0:RC, bit1:batt,
     * bit2:GPS, bit3:GCS, bit4:fence)
     */
    failsafe: uint8_t;
    /**
     * current waypoint number
     */
    wpNum: uint8_t;
    /**
     * distance to target
     * Units: m
     */
    wpDistance: uint16_t;
}
/**
 * Message appropriate for high latency connections like Iridium (version 2)
 */
export declare class HighLatency2 extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Timestamp (milliseconds since boot or Unix epoch)
     * Units: ms
     */
    timestamp: uint32_t;
    /**
     * Type of the MAV (quadrotor, helicopter, etc.)
     */
    type: MavType;
    /**
     * Autopilot type / class. Use MAV_AUTOPILOT_INVALID for components that are not flight controllers.
     */
    autopilot: MavAutopilot;
    /**
     * A bitfield for use for autopilot-specific flags (2 byte version).
     */
    customMode: uint16_t;
    /**
     * Latitude
     * Units: degE7
     */
    latitude: int32_t;
    /**
     * Longitude
     * Units: degE7
     */
    longitude: int32_t;
    /**
     * Altitude above mean sea level
     * Units: m
     */
    altitude: int16_t;
    /**
     * Altitude setpoint
     * Units: m
     */
    targetAltitude: int16_t;
    /**
     * Heading
     * Units: deg/2
     */
    heading: uint8_t;
    /**
     * Heading setpoint
     * Units: deg/2
     */
    targetHeading: uint8_t;
    /**
     * Distance to target waypoint or position
     * Units: dam
     */
    targetDistance: uint16_t;
    /**
     * Throttle
     * Units: %
     */
    throttle: uint8_t;
    /**
     * Airspeed
     * Units: m/s*5
     */
    airspeed: uint8_t;
    /**
     * Airspeed setpoint
     * Units: m/s*5
     */
    airspeedSp: uint8_t;
    /**
     * Groundspeed
     * Units: m/s*5
     */
    groundspeed: uint8_t;
    /**
     * Windspeed
     * Units: m/s*5
     */
    windspeed: uint8_t;
    /**
     * Wind heading
     * Units: deg/2
     */
    windHeading: uint8_t;
    /**
     * Maximum error horizontal position since last message
     * Units: dm
     */
    eph: uint8_t;
    /**
     * Maximum error vertical position since last message
     * Units: dm
     */
    epv: uint8_t;
    /**
     * Air temperature from airspeed sensor
     * Units: degC
     */
    temperatureAir: int8_t;
    /**
     * Maximum climb rate magnitude since last message
     * Units: dm/s
     */
    climbRate: int8_t;
    /**
     * Battery level (-1 if field not provided).
     * Units: %
     */
    battery: int8_t;
    /**
     * Current waypoint number
     */
    wpNum: uint16_t;
    /**
     * Bitmap of failure flags.
     */
    failureFlags: HlFailureFlag;
    /**
     * Field for custom payload.
     */
    custom0: int8_t;
    /**
     * Field for custom payload.
     */
    custom1: int8_t;
    /**
     * Field for custom payload.
     */
    custom2: int8_t;
}
/**
 * Vibration levels and accelerometer clipping
 */
export declare class Vibration extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format
     * (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
     * Units: us
     */
    timeUsec: uint64_t;
    /**
     * Vibration levels on X-axis
     */
    vibrationX: float;
    /**
     * Vibration levels on Y-axis
     */
    vibrationY: float;
    /**
     * Vibration levels on Z-axis
     */
    vibrationZ: float;
    /**
     * first accelerometer clipping count
     */
    clipping0: uint32_t;
    /**
     * second accelerometer clipping count
     */
    clipping1: uint32_t;
    /**
     * third accelerometer clipping count
     */
    clipping2: uint32_t;
}
/**
 * This message can be requested by sending the MAV_CMD_GET_HOME_POSITION command. The position the
 * system will return to and land on. The position is set automatically by the system during the
 * takeoff in case it was not explicitly set by the operator before or after. The global and local
 * positions encode the position in the respective coordinate frames, while the q parameter encodes the
 * orientation of the surface. Under normal conditions it describes the heading and terrain slope,
 * which can be used by the aircraft to adjust the approach. The approach 3D vector describes the point
 * to which the system should fly in normal flight mode and then perform a landing sequence along the
 * vector.
 */
export declare class HomePosition extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Latitude (WGS84)
     * Units: degE7
     */
    latitude: int32_t;
    /**
     * Longitude (WGS84)
     * Units: degE7
     */
    longitude: int32_t;
    /**
     * Altitude (MSL). Positive for up.
     * Units: mm
     */
    altitude: int32_t;
    /**
     * Local X position of this position in the local coordinate frame
     * Units: m
     */
    x: float;
    /**
     * Local Y position of this position in the local coordinate frame
     * Units: m
     */
    y: float;
    /**
     * Local Z position of this position in the local coordinate frame
     * Units: m
     */
    z: float;
    /**
     * World to surface normal and heading transformation of the takeoff position. Used to indicate the
     * heading and slope of the ground
     */
    q: float[];
    /**
     * Local X position of the end of the approach vector. Multicopters should set this position based on
     * their takeoff path. Grass-landing fixed wing aircraft should set it the same way as multicopters.
     * Runway-landing fixed wing aircraft should set it to the opposite direction of the takeoff, assuming
     * the takeoff happened from the threshold / touchdown zone.
     * Units: m
     */
    approachX: float;
    /**
     * Local Y position of the end of the approach vector. Multicopters should set this position based on
     * their takeoff path. Grass-landing fixed wing aircraft should set it the same way as multicopters.
     * Runway-landing fixed wing aircraft should set it to the opposite direction of the takeoff, assuming
     * the takeoff happened from the threshold / touchdown zone.
     * Units: m
     */
    approachY: float;
    /**
     * Local Z position of the end of the approach vector. Multicopters should set this position based on
     * their takeoff path. Grass-landing fixed wing aircraft should set it the same way as multicopters.
     * Runway-landing fixed wing aircraft should set it to the opposite direction of the takeoff, assuming
     * the takeoff happened from the threshold / touchdown zone.
     * Units: m
     */
    approachZ: float;
    /**
     * Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format
     * (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
     * Units: us
     */
    timeUsec: uint64_t;
}
/**
 * The position the system will return to and land on. The position is set automatically by the system
 * during the takeoff in case it was not explicitly set by the operator before or after. The global and
 * local positions encode the position in the respective coordinate frames, while the q parameter
 * encodes the orientation of the surface. Under normal conditions it describes the heading and terrain
 * slope, which can be used by the aircraft to adjust the approach. The approach 3D vector describes
 * the point to which the system should fly in normal flight mode and then perform a landing sequence
 * along the vector.
 */
export declare class SetHomePosition extends MavLinkData {
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
     * Latitude (WGS84)
     * Units: degE7
     */
    latitude: int32_t;
    /**
     * Longitude (WGS84)
     * Units: degE7
     */
    longitude: int32_t;
    /**
     * Altitude (MSL). Positive for up.
     * Units: mm
     */
    altitude: int32_t;
    /**
     * Local X position of this position in the local coordinate frame
     * Units: m
     */
    x: float;
    /**
     * Local Y position of this position in the local coordinate frame
     * Units: m
     */
    y: float;
    /**
     * Local Z position of this position in the local coordinate frame
     * Units: m
     */
    z: float;
    /**
     * World to surface normal and heading transformation of the takeoff position. Used to indicate the
     * heading and slope of the ground
     */
    q: float[];
    /**
     * Local X position of the end of the approach vector. Multicopters should set this position based on
     * their takeoff path. Grass-landing fixed wing aircraft should set it the same way as multicopters.
     * Runway-landing fixed wing aircraft should set it to the opposite direction of the takeoff, assuming
     * the takeoff happened from the threshold / touchdown zone.
     * Units: m
     */
    approachX: float;
    /**
     * Local Y position of the end of the approach vector. Multicopters should set this position based on
     * their takeoff path. Grass-landing fixed wing aircraft should set it the same way as multicopters.
     * Runway-landing fixed wing aircraft should set it to the opposite direction of the takeoff, assuming
     * the takeoff happened from the threshold / touchdown zone.
     * Units: m
     */
    approachY: float;
    /**
     * Local Z position of the end of the approach vector. Multicopters should set this position based on
     * their takeoff path. Grass-landing fixed wing aircraft should set it the same way as multicopters.
     * Runway-landing fixed wing aircraft should set it to the opposite direction of the takeoff, assuming
     * the takeoff happened from the threshold / touchdown zone.
     * Units: m
     */
    approachZ: float;
    /**
     * Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format
     * (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
     * Units: us
     */
    timeUsec: uint64_t;
}
/**
 * The interval between messages for a particular MAVLink message ID. This message is the response to
 * the MAV_CMD_GET_MESSAGE_INTERVAL command. This interface replaces DATA_STREAM.
 */
export declare class MessageInterval extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * The ID of the requested MAVLink message. v1.0 is limited to 254 messages.
     */
    messageId: uint16_t;
    /**
     * The interval between two messages. A value of -1 indicates this stream is disabled, 0 indicates it
     * is not available, > 0 indicates the interval at which it is sent.
     * Units: us
     */
    intervalUs: int32_t;
}
/**
 * Provides state for additional features
 */
export declare class ExtendedSysState extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * The VTOL state if applicable. Is set to MAV_VTOL_STATE_UNDEFINED if UAV is not in VTOL
     * configuration.
     */
    vtolState: MavVtolState;
    /**
     * The landed state. Is set to MAV_LANDED_STATE_UNDEFINED if landed state is unknown.
     */
    landedState: MavLandedState;
}
/**
 * The location and information of an ADSB vehicle
 */
export declare class AdsbVehicle extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * ICAO address
     */
    ICAOAddress: uint32_t;
    /**
     * Latitude
     * Units: degE7
     */
    lat: int32_t;
    /**
     * Longitude
     * Units: degE7
     */
    lon: int32_t;
    /**
     * ADSB altitude type.
     */
    altitudeType: AdsbAltitudeType;
    /**
     * Altitude(ASL)
     * Units: mm
     */
    altitude: int32_t;
    /**
     * Course over ground
     * Units: cdeg
     */
    heading: uint16_t;
    /**
     * The horizontal velocity
     * Units: cm/s
     */
    horVelocity: uint16_t;
    /**
     * The vertical velocity. Positive is up
     * Units: cm/s
     */
    verVelocity: int16_t;
    /**
     * The callsign, 8+null
     */
    callsign: string;
    /**
     * ADSB emitter type.
     */
    emitterType: AdsbEmitterType;
    /**
     * Time since last communication in seconds
     * Units: s
     */
    tslc: uint8_t;
    /**
     * Bitmap to indicate various statuses including valid data fields
     */
    flags: AdsbFlags;
    /**
     * Squawk code
     */
    squawk: uint16_t;
}
/**
 * Information about a potential collision
 */
export declare class Collision extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Collision data source
     */
    src: MavCollisionSrc;
    /**
     * Unique identifier, domain based on src field
     */
    id: uint32_t;
    /**
     * Action that is being taken to avoid this collision
     */
    action: MavCollisionAction;
    /**
     * How concerned the aircraft is about this collision
     */
    threatLevel: MavCollisionThreatLevel;
    /**
     * Estimated time until collision occurs
     * Units: s
     */
    timeToMinimumDelta: float;
    /**
     * Closest vertical distance between vehicle and object
     * Units: m
     */
    altitudeMinimumDelta: float;
    /**
     * Closest horizontal distance between vehicle and object
     * Units: m
     */
    horizontalMinimumDelta: float;
}
/**
 * Message implementing parts of the V2 payload specs in V1 frames for transitional support.
 */
export declare class V2Extension extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Network ID (0 for broadcast)
     */
    targetNetwork: uint8_t;
    /**
     * System ID (0 for broadcast)
     */
    targetSystem: uint8_t;
    /**
     * Component ID (0 for broadcast)
     */
    targetComponent: uint8_t;
    /**
     * A code that identifies the software component that understands this message (analogous to USB device
     * classes or mime type strings). If this code is less than 32768, it is considered a 'registered'
     * protocol extension and the corresponding entry should be added to
     * https://github.com/mavlink/mavlink/definition_files/extension_message_ids.xml. Software creators can
     * register blocks of message IDs as needed (useful for GCS specific metadata, etc...). Message_types
     * greater than 32767 are considered local experiments and should not be checked in to any widely
     * distributed codebase.
     */
    messageType: uint16_t;
    /**
     * Variable length payload. The length must be encoded in the payload as part of the message_type
     * protocol, e.g. by including the length as payload data, or by terminating the payload data with a
     * non-zero marker. This is required in order to reconstruct zero-terminated payloads that are (or
     * otherwise would be) trimmed by MAVLink 2 empty-byte truncation. The entire content of the payload
     * block is opaque unless you understand the encoding message_type. The particular encoding used can be
     * extension specific and might not always be documented as part of the MAVLink specification.
     */
    payload: uint8_t[];
}
/**
 * Send raw controller memory. The use of this message is discouraged for normal packets, but a quite
 * efficient way for testing new messages and getting experimental debug output.
 */
export declare class MemoryVect extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Starting address of the debug variables
     */
    address: uint16_t;
    /**
     * Version code of the type variable. 0=unknown, type ignored and assumed int16_t. 1=as below
     */
    ver: uint8_t;
    /**
     * Type code of the memory variables. for ver = 1: 0=16 x int16_t, 1=16 x uint16_t, 2=16 x Q15, 3=16 x
     * 1Q14
     */
    type: uint8_t;
    /**
     * Memory contents at specified address
     */
    value: int8_t[];
}
/**
 * To debug something using a named 3D vector.
 */
export declare class DebugVect extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Name
     */
    name: string;
    /**
     * Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format
     * (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
     * Units: us
     */
    timeUsec: uint64_t;
    /**
     * x
     */
    x: float;
    /**
     * y
     */
    y: float;
    /**
     * z
     */
    z: float;
}
/**
 * Send a key-value pair as float. The use of this message is discouraged for normal packets, but a
 * quite efficient way for testing new messages and getting experimental debug output.
 */
export declare class NamedValueFloat extends MavLinkData {
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
     * Name of the debug variable
     */
    name: string;
    /**
     * Floating point value
     */
    value: float;
}
/**
 * Send a key-value pair as integer. The use of this message is discouraged for normal packets, but a
 * quite efficient way for testing new messages and getting experimental debug output.
 */
export declare class NamedValueInt extends MavLinkData {
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
     * Name of the debug variable
     */
    name: string;
    /**
     * Signed integer value
     */
    value: int32_t;
}
/**
 * Status text message. These messages are printed in yellow in the COMM console of QGroundControl.
 * WARNING: They consume quite some bandwidth, so use only for important status and error messages. If
 * implemented wisely, these messages are buffered on the MCU and sent only at a limited rate (e.g. 10
 * Hz).
 */
export declare class StatusText extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Severity of status. Relies on the definitions within RFC-5424.
     */
    severity: MavSeverity;
    /**
     * Status text message, without null termination character
     */
    text: string;
    /**
     * Unique (opaque) identifier for this statustext message. May be used to reassemble a logical
     * long-statustext message from a sequence of chunks. A value of zero indicates this is the only chunk
     * in the sequence and the message can be emitted immediately.
     */
    id: uint16_t;
    /**
     * This chunk's sequence number; indexing is from zero. Any null character in the text field is taken
     * to mean this was the last chunk.
     */
    chunkSeq: uint8_t;
}
/**
 * Send a debug value. The index is used to discriminate between values. These values show up in the
 * plot of QGroundControl as DEBUG N.
 */
export declare class Debug extends MavLinkData {
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
     * index of debug variable
     */
    ind: uint8_t;
    /**
     * DEBUG value
     */
    value: float;
}
/**
 * Setup a MAVLink2 signing key. If called with secret_key of all zero and zero initial_timestamp will
 * disable signing
 */
export declare class SetupSigning extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * system id of the target
     */
    targetSystem: uint8_t;
    /**
     * component ID of the target
     */
    targetComponent: uint8_t;
    /**
     * signing key
     */
    secretKey: uint8_t[];
    /**
     * initial timestamp
     */
    initialTimestamp: uint64_t;
}
/**
 * Report button state change.
 */
export declare class ButtonChange extends MavLinkData {
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
     * Time of last change of button state.
     * Units: ms
     */
    lastChangeMs: uint32_t;
    /**
     * Bitmap for state of buttons.
     */
    state: uint8_t;
}
/**
 * Control vehicle tone generation (buzzer).
 */
export declare class PlayTune extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * System ID
     */
    targetSystem: uint8_t;
    /**
     * Component ID
     */
    targetComponent: uint8_t;
    /**
     * tune in board specific format
     */
    tune: string;
    /**
     * tune extension (appended to tune)
     */
    tune2: string;
}
/**
 * Information about a camera. Can be requested with a MAV_CMD_REQUEST_MESSAGE command.
 */
export declare class CameraInformation extends MavLinkData {
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
     * Name of the camera vendor
     */
    vendorName: uint8_t[];
    /**
     * Name of the camera model
     */
    modelName: uint8_t[];
    /**
     * Version of the camera firmware, encoded as: (Dev & 0xff) << 24 | (Patch & 0xff) << 16 | (Minor &
     * 0xff) << 8 | (Major & 0xff)
     */
    firmwareVersion: uint32_t;
    /**
     * Focal length
     * Units: mm
     */
    focalLength: float;
    /**
     * Image sensor size horizontal
     * Units: mm
     */
    sensorSizeH: float;
    /**
     * Image sensor size vertical
     * Units: mm
     */
    sensorSizeV: float;
    /**
     * Horizontal image resolution
     * Units: pix
     */
    resolutionH: uint16_t;
    /**
     * Vertical image resolution
     * Units: pix
     */
    resolutionV: uint16_t;
    /**
     * Reserved for a lens ID
     */
    lensId: uint8_t;
    /**
     * Bitmap of camera capability flags.
     */
    flags: CameraCapFlags;
    /**
     * Camera definition version (iteration)
     */
    camDefinitionVersion: uint16_t;
    /**
     * Camera definition URI (if any, otherwise only basic functions will be available). HTTP- (http://)
     * and MAVLink FTP- (mavlinkftp://) formatted URIs are allowed (and both must be supported by any GCS
     * that implements the Camera Protocol).
     */
    camDefinitionUri: string;
}
/**
 * Settings of a camera. Can be requested with a MAV_CMD_REQUEST_MESSAGE command.
 */
export declare class CameraSettings extends MavLinkData {
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
     * Camera mode
     */
    modeId: CameraMode;
    /**
     * Current zoom level (0.0 to 100.0, NaN if not known)
     */
    zoomLevel: float;
    /**
     * Current focus level (0.0 to 100.0, NaN if not known)
     */
    focusLevel: float;
}
/**
 * Information about a storage medium. This message is sent in response to a request with
 * MAV_CMD_REQUEST_MESSAGE and whenever the status of the storage changes (STORAGE_STATUS). Use
 * MAV_CMD_REQUEST_MESSAGE.param2 to indicate the index/id of requested storage: 0 for all, 1 for
 * first, 2 for second, etc.
 */
export declare class StorageInformation extends MavLinkData {
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
     * Storage ID (1 for first, 2 for second, etc.)
     */
    storageId: uint8_t;
    /**
     * Number of storage devices
     */
    storageCount: uint8_t;
    /**
     * Status of storage
     */
    status: StorageStatus;
    /**
     * Total capacity. If storage is not ready (STORAGE_STATUS_READY) value will be ignored.
     * Units: MiB
     */
    totalCapacity: float;
    /**
     * Used capacity. If storage is not ready (STORAGE_STATUS_READY) value will be ignored.
     * Units: MiB
     */
    usedCapacity: float;
    /**
     * Available storage capacity. If storage is not ready (STORAGE_STATUS_READY) value will be ignored.
     * Units: MiB
     */
    availableCapacity: float;
    /**
     * Read speed.
     * Units: MiB/s
     */
    readSpeed: float;
    /**
     * Write speed.
     * Units: MiB/s
     */
    writeSpeed: float;
}
/**
 * Information about the status of a capture. Can be requested with a MAV_CMD_REQUEST_MESSAGE command.
 */
export declare class CameraCaptureStatus extends MavLinkData {
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
     * Current status of image capturing (0: idle, 1: capture in progress, 2: interval set but idle, 3:
     * interval set and capture in progress)
     */
    imageStatus: uint8_t;
    /**
     * Current status of video capturing (0: idle, 1: capture in progress)
     */
    videoStatus: uint8_t;
    /**
     * Image capture interval
     * Units: s
     */
    imageInterval: float;
    /**
     * Time since recording started
     * Units: ms
     */
    recordingTimeMs: uint32_t;
    /**
     * Available storage capacity.
     * Units: MiB
     */
    availableCapacity: float;
    /**
     * Total number of images captured ('forever', or until reset using MAV_CMD_STORAGE_FORMAT).
     */
    imageCount: int32_t;
}
/**
 * Information about a captured image. This is emitted every time a message is captured. It may be
 * re-requested using MAV_CMD_REQUEST_MESSAGE, using param2 to indicate the sequence number for the
 * missing image.
 */
export declare class CameraImageCaptured extends MavLinkData {
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
     * Timestamp (time since UNIX epoch) in UTC. 0 for unknown.
     * Units: us
     */
    timeUtc: uint64_t;
    /**
     * Deprecated/unused. Component IDs are used to differentiate multiple cameras.
     */
    cameraId: uint8_t;
    /**
     * Latitude where image was taken
     * Units: degE7
     */
    lat: int32_t;
    /**
     * Longitude where capture was taken
     * Units: degE7
     */
    lon: int32_t;
    /**
     * Altitude (MSL) where image was taken
     * Units: mm
     */
    alt: int32_t;
    /**
     * Altitude above ground
     * Units: mm
     */
    relativeAlt: int32_t;
    /**
     * Quaternion of camera orientation (w, x, y, z order, zero-rotation is 1, 0, 0, 0)
     */
    q: float[];
    /**
     * Zero based index of this image (i.e. a new image will have index CAMERA_CAPTURE_STATUS.image count
     * -1)
     */
    imageIndex: int32_t;
    /**
     * Boolean indicating success (1) or failure (0) while capturing this image.
     */
    captureResult: int8_t;
    /**
     * URL of image taken. Either local storage or http://foo.jpg if camera provides an HTTP interface.
     */
    fileUrl: string;
}
/**
 * Information about flight since last arming.
 */
export declare class FlightInformation extends MavLinkData {
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
     * Timestamp at arming (time since UNIX epoch) in UTC, 0 for unknown
     * Units: us
     */
    armingTimeUtc: uint64_t;
    /**
     * Timestamp at takeoff (time since UNIX epoch) in UTC, 0 for unknown
     * Units: us
     */
    takeoffTimeUtc: uint64_t;
    /**
     * Universally unique identifier (UUID) of flight, should correspond to name of log files
     */
    flightUuid: uint64_t;
}
/**
 * Orientation of a mount
 */
export declare class MountOrientation extends MavLinkData {
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
     * Roll in global frame (set to NaN for invalid).
     * Units: deg
     */
    roll: float;
    /**
     * Pitch in global frame (set to NaN for invalid).
     * Units: deg
     */
    pitch: float;
    /**
     * Yaw relative to vehicle (set to NaN for invalid).
     * Units: deg
     */
    yaw: float;
    /**
     * Yaw in absolute frame relative to Earth's North, north is 0 (set to NaN for invalid).
     * Units: deg
     */
    yawAbsolute: float;
}
/**
 * A message containing logged data (see also MAV_CMD_LOGGING_START)
 */
export declare class LoggingData extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * system ID of the target
     */
    targetSystem: uint8_t;
    /**
     * component ID of the target
     */
    targetComponent: uint8_t;
    /**
     * sequence number (can wrap)
     */
    sequence: uint16_t;
    /**
     * data length
     * Units: bytes
     */
    length: uint8_t;
    /**
     * offset into data where first message starts. This can be used for recovery, when a previous message
     * got lost (set to 255 if no start exists).
     * Units: bytes
     */
    firstMessageOffset: uint8_t;
    /**
     * logged data
     */
    data: uint8_t[];
}
/**
 * A message containing logged data which requires a LOGGING_ACK to be sent back
 */
export declare class LoggingDataAcked extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * system ID of the target
     */
    targetSystem: uint8_t;
    /**
     * component ID of the target
     */
    targetComponent: uint8_t;
    /**
     * sequence number (can wrap)
     */
    sequence: uint16_t;
    /**
     * data length
     * Units: bytes
     */
    length: uint8_t;
    /**
     * offset into data where first message starts. This can be used for recovery, when a previous message
     * got lost (set to 255 if no start exists).
     * Units: bytes
     */
    firstMessageOffset: uint8_t;
    /**
     * logged data
     */
    data: uint8_t[];
}
/**
 * An ack for a LOGGING_DATA_ACKED message
 */
export declare class LoggingAck extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * system ID of the target
     */
    targetSystem: uint8_t;
    /**
     * component ID of the target
     */
    targetComponent: uint8_t;
    /**
     * sequence number (must match the one in LOGGING_DATA_ACKED)
     */
    sequence: uint16_t;
}
/**
 * Information about video stream. It may be requested using MAV_CMD_REQUEST_MESSAGE, where param2
 * indicates the video stream id: 0 for all streams, 1 for first, 2 for second, etc.
 */
export declare class VideoStreamInformation extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Video Stream ID (1 for first, 2 for second, etc.)
     */
    streamId: uint8_t;
    /**
     * Number of streams available.
     */
    count: uint8_t;
    /**
     * Type of stream.
     */
    type: VideoStreamType;
    /**
     * Bitmap of stream status flags.
     */
    flags: VideoStreamStatusFlags;
    /**
     * Frame rate.
     * Units: Hz
     */
    framerate: float;
    /**
     * Horizontal resolution.
     * Units: pix
     */
    resolutionH: uint16_t;
    /**
     * Vertical resolution.
     * Units: pix
     */
    resolutionV: uint16_t;
    /**
     * Bit rate.
     * Units: bits/s
     */
    bitrate: uint32_t;
    /**
     * Video image rotation clockwise.
     * Units: deg
     */
    rotation: uint16_t;
    /**
     * Horizontal Field of view.
     * Units: deg
     */
    hfov: uint16_t;
    /**
     * Stream name.
     */
    name: string;
    /**
     * Video stream URI (TCP or RTSP URI ground station should connect to) or port number (UDP port ground
     * station should listen to).
     */
    uri: string;
}
/**
 * Information about the status of a video stream. It may be requested using MAV_CMD_REQUEST_MESSAGE.
 */
export declare class VideoStreamStatus extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Video Stream ID (1 for first, 2 for second, etc.)
     */
    streamId: uint8_t;
    /**
     * Bitmap of stream status flags
     */
    flags: VideoStreamStatusFlags;
    /**
     * Frame rate
     * Units: Hz
     */
    framerate: float;
    /**
     * Horizontal resolution
     * Units: pix
     */
    resolutionH: uint16_t;
    /**
     * Vertical resolution
     * Units: pix
     */
    resolutionV: uint16_t;
    /**
     * Bit rate
     * Units: bits/s
     */
    bitrate: uint32_t;
    /**
     * Video image rotation clockwise
     * Units: deg
     */
    rotation: uint16_t;
    /**
     * Horizontal Field of view
     * Units: deg
     */
    hfov: uint16_t;
}
/**
 * Configure WiFi AP SSID, password, and mode. This message is re-emitted as an acknowledgement by the
 * AP. The message may also be explicitly requested using MAV_CMD_REQUEST_MESSAGE
 */
export declare class WifiConfigAp extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Name of Wi-Fi network (SSID). Blank to leave it unchanged when setting. Current SSID when sent back
     * as a response.
     */
    ssid: string;
    /**
     * Password. Blank for an open AP. MD5 hash when message is sent back as a response.
     */
    password: string;
}
/**
 * The location and information of an AIS vessel
 */
export declare class AisVessel extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Mobile Marine Service Identifier, 9 decimal digits
     */
    MMSI: uint32_t;
    /**
     * Latitude
     * Units: degE7
     */
    lat: int32_t;
    /**
     * Longitude
     * Units: degE7
     */
    lon: int32_t;
    /**
     * Course over ground
     * Units: cdeg
     */
    COG: uint16_t;
    /**
     * True heading
     * Units: cdeg
     */
    heading: uint16_t;
    /**
     * Speed over ground
     * Units: cm/s
     */
    velocity: uint16_t;
    /**
     * Turn rate
     * Units: cdeg/s
     */
    turnRate: int8_t;
    /**
     * Navigational status
     */
    navigationalStatus: AisNavStatus;
    /**
     * Type of vessels
     */
    type: AisType;
    /**
     * Distance from lat/lon location to bow
     * Units: m
     */
    dimensionBow: uint16_t;
    /**
     * Distance from lat/lon location to stern
     * Units: m
     */
    dimensionStern: uint16_t;
    /**
     * Distance from lat/lon location to port side
     * Units: m
     */
    dimensionPort: uint8_t;
    /**
     * Distance from lat/lon location to starboard side
     * Units: m
     */
    dimensionStarboard: uint8_t;
    /**
     * The vessel callsign
     */
    callsign: string;
    /**
     * The vessel name
     */
    name: string;
    /**
     * Time since last communication in seconds
     * Units: s
     */
    tslc: uint16_t;
    /**
     * Bitmask to indicate various statuses including valid data fields
     */
    flags: AisFlags;
}
/**
 * General status information of an UAVCAN node. Please refer to the definition of the UAVCAN message
 * "uavcan.protocol.NodeStatus" for the background information. The UAVCAN specification is available
 * at http://uavcan.org.
 */
export declare class UavcanNodeStatus extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format
     * (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
     * Units: us
     */
    timeUsec: uint64_t;
    /**
     * Time since the start-up of the node.
     * Units: s
     */
    uptimeSec: uint32_t;
    /**
     * Generalized node health status.
     */
    health: UavcanNodeHealth;
    /**
     * Generalized operating mode.
     */
    mode: UavcanNodeMode;
    /**
     * Not used currently.
     */
    subMode: uint8_t;
    /**
     * Vendor-specific status information.
     */
    vendorSpecificStatusCode: uint16_t;
}
/**
 * General information describing a particular UAVCAN node. Please refer to the definition of the
 * UAVCAN service "uavcan.protocol.GetNodeInfo" for the background information. This message should be
 * emitted by the system whenever a new node appears online, or an existing node reboots. Additionally,
 * it can be emitted upon request from the other end of the MAVLink channel (see
 * MAV_CMD_UAVCAN_GET_NODE_INFO). It is also not prohibited to emit this message unconditionally at a
 * low frequency. The UAVCAN specification is available at http://uavcan.org.
 */
export declare class UavcanNodeInfo extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format
     * (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
     * Units: us
     */
    timeUsec: uint64_t;
    /**
     * Time since the start-up of the node.
     * Units: s
     */
    uptimeSec: uint32_t;
    /**
     * Node name string. For example, "sapog.px4.io".
     */
    name: string;
    /**
     * Hardware major version number.
     */
    hwVersionMajor: uint8_t;
    /**
     * Hardware minor version number.
     */
    hwVersionMinor: uint8_t;
    /**
     * Hardware unique 128-bit ID.
     */
    hwUniqueId: uint8_t[];
    /**
     * Software major version number.
     */
    swVersionMajor: uint8_t;
    /**
     * Software minor version number.
     */
    swVersionMinor: uint8_t;
    /**
     * Version control system (VCS) revision identifier (e.g. git short commit hash). Zero if unknown.
     */
    swVcsCommit: uint32_t;
}
/**
 * Obstacle distances in front of the sensor, starting from the left in increment degrees to the right
 */
export declare class ObstacleDistance extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format
     * (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
     * Units: us
     */
    timeUsec: uint64_t;
    /**
     * Class id of the distance sensor type.
     */
    sensorType: MavDistanceSensor;
    /**
     * Distance of obstacles around the vehicle with index 0 corresponding to north + angle_offset, unless
     * otherwise specified in the frame. A value of 0 is valid and means that the obstacle is practically
     * touching the sensor. A value of max_distance +1 means no obstacle is present. A value of UINT16_MAX
     * for unknown/not used. In a array element, one unit corresponds to 1cm.
     * Units: cm
     */
    distances: uint16_t[];
    /**
     * Angular width in degrees of each array element. Increment direction is clockwise. This field is
     * ignored if increment_f is non-zero.
     * Units: deg
     */
    increment: uint8_t;
    /**
     * Minimum distance the sensor can measure.
     * Units: cm
     */
    minDistance: uint16_t;
    /**
     * Maximum distance the sensor can measure.
     * Units: cm
     */
    maxDistance: uint16_t;
    /**
     * Angular width in degrees of each array element as a float. If non-zero then this value is used
     * instead of the uint8_t increment field. Positive is clockwise direction, negative is
     * counter-clockwise.
     * Units: deg
     */
    incrementF: float;
    /**
     * Relative angle offset of the 0-index element in the distances array. Value of 0 corresponds to
     * forward. Positive is clockwise direction, negative is counter-clockwise.
     * Units: deg
     */
    angleOffset: float;
    /**
     * Coordinate frame of reference for the yaw rotation and offset of the sensor data. Defaults to
     * MAV_FRAME_GLOBAL, which is north aligned. For body-mounted sensors use MAV_FRAME_BODY_FRD, which is
     * vehicle front aligned.
     */
    frame: MavFrame;
}
/**
 * Odometry message to communicate odometry information with an external interface. Fits ROS REP 147
 * standard for aerial vehicles (http://www.ros.org/reps/rep-0147.html).
 */
export declare class Odometry extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format
     * (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
     * Units: us
     */
    timeUsec: uint64_t;
    /**
     * Coordinate frame of reference for the pose data.
     */
    frameId: MavFrame;
    /**
     * Coordinate frame of reference for the velocity in free space (twist) data.
     */
    childFrameId: MavFrame;
    /**
     * X Position
     * Units: m
     */
    x: float;
    /**
     * Y Position
     * Units: m
     */
    y: float;
    /**
     * Z Position
     * Units: m
     */
    z: float;
    /**
     * Quaternion components, w, x, y, z (1 0 0 0 is the null-rotation)
     */
    q: float[];
    /**
     * X linear speed
     * Units: m/s
     */
    vx: float;
    /**
     * Y linear speed
     * Units: m/s
     */
    vy: float;
    /**
     * Z linear speed
     * Units: m/s
     */
    vz: float;
    /**
     * Roll angular speed
     * Units: rad/s
     */
    rollspeed: float;
    /**
     * Pitch angular speed
     * Units: rad/s
     */
    pitchspeed: float;
    /**
     * Yaw angular speed
     * Units: rad/s
     */
    yawspeed: float;
    /**
     * Row-major representation of a 6x6 pose cross-covariance matrix upper right triangle (states: x, y,
     * z, roll, pitch, yaw; first six entries are the first ROW, next five entries are the second ROW,
     * etc.). If unknown, assign NaN value to first element in the array.
     */
    poseCovariance: float[];
    /**
     * Row-major representation of a 6x6 velocity cross-covariance matrix upper right triangle (states: vx,
     * vy, vz, rollspeed, pitchspeed, yawspeed; first six entries are the first ROW, next five entries are
     * the second ROW, etc.). If unknown, assign NaN value to first element in the array.
     */
    velocityCovariance: float[];
    /**
     * Estimate reset counter. This should be incremented when the estimate resets in any of the dimensions
     * (position, velocity, attitude, angular speed). This is designed to be used when e.g an external SLAM
     * system detects a loop-closure and the estimate jumps.
     */
    resetCounter: uint8_t;
    /**
     * Type of estimator that is providing the odometry.
     */
    estimatorType: MavEstimatorType;
}
/**
 * Status of the Iridium SBD link.
 */
export declare class IsbdLinkStatus extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format
     * (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
     * Units: us
     */
    timestamp: uint64_t;
    /**
     * Timestamp of the last successful sbd session. The receiving end can infer timestamp format (since
     * 1.1.1970 or since system boot) by checking for the magnitude of the number.
     * Units: us
     */
    lastHeartbeat: uint64_t;
    /**
     * Number of failed SBD sessions.
     */
    failedSessions: uint16_t;
    /**
     * Number of successful SBD sessions.
     */
    successfulSessions: uint16_t;
    /**
     * Signal quality equal to the number of bars displayed on the ISU signal strength indicator. Range is
     * 0 to 5, where 0 indicates no signal and 5 indicates maximum signal strength.
     */
    signalQuality: uint8_t;
    /**
     * 1: Ring call pending, 0: No call pending.
     */
    ringPending: uint8_t;
    /**
     * 1: Transmission session pending, 0: No transmission session pending.
     */
    txSessionPending: uint8_t;
    /**
     * 1: Receiving session pending, 0: No receiving session pending.
     */
    rxSessionPending: uint8_t;
}
/**
 * RPM sensor data message.
 */
export declare class RawRpm extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Index of this RPM sensor (0-indexed)
     */
    index: uint8_t;
    /**
     * Indicated rate
     * Units: rpm
     */
    frequency: float;
}
/**
 * The global position resulting from GPS and sensor fusion.
 */
export declare class UtmGlobalPosition extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Time of applicability of position (microseconds since UNIX epoch).
     * Units: us
     */
    time: uint64_t;
    /**
     * Unique UAS ID.
     */
    uasId: uint8_t[];
    /**
     * Latitude (WGS84)
     * Units: degE7
     */
    lat: int32_t;
    /**
     * Longitude (WGS84)
     * Units: degE7
     */
    lon: int32_t;
    /**
     * Altitude (WGS84)
     * Units: mm
     */
    alt: int32_t;
    /**
     * Altitude above ground
     * Units: mm
     */
    relativeAlt: int32_t;
    /**
     * Ground X speed (latitude, positive north)
     * Units: cm/s
     */
    vx: int16_t;
    /**
     * Ground Y speed (longitude, positive east)
     * Units: cm/s
     */
    vy: int16_t;
    /**
     * Ground Z speed (altitude, positive down)
     * Units: cm/s
     */
    vz: int16_t;
    /**
     * Horizontal position uncertainty (standard deviation)
     * Units: mm
     */
    hAcc: uint16_t;
    /**
     * Altitude uncertainty (standard deviation)
     * Units: mm
     */
    vAcc: uint16_t;
    /**
     * Speed uncertainty (standard deviation)
     * Units: cm/s
     */
    velAcc: uint16_t;
    /**
     * Next waypoint, latitude (WGS84)
     * Units: degE7
     */
    nextLat: int32_t;
    /**
     * Next waypoint, longitude (WGS84)
     * Units: degE7
     */
    nextLon: int32_t;
    /**
     * Next waypoint, altitude (WGS84)
     * Units: mm
     */
    nextAlt: int32_t;
    /**
     * Time until next update. Set to 0 if unknown or in data driven mode.
     * Units: cs
     */
    updateRate: uint16_t;
    /**
     * Flight state
     */
    flightState: UtmFlightState;
    /**
     * Bitwise OR combination of the data available flags.
     */
    flags: UtmDataAvailFlags;
}
/**
 * Large debug/prototyping array. The message uses the maximum available payload for data. The array_id
 * and name fields are used to discriminate between messages in code and in user interfaces
 * (respectively). Do not use in production code.
 */
export declare class DebugFloatArray extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format
     * (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
     * Units: us
     */
    timeUsec: uint64_t;
    /**
     * Name, for human-friendly display in a Ground Control Station
     */
    name: string;
    /**
     * Unique ID used to discriminate between arrays
     */
    arrayId: uint16_t;
    /**
     * data
     */
    data: float[];
}
/**
 * Smart Battery information (static/infrequent update). Use for updates from: smart battery to flight
 * stack, flight stack to GCS. Use BATTERY_STATUS for smart battery frequent updates.
 */
export declare class SmartBatteryInfo extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Battery ID
     */
    id: uint8_t;
    /**
     * Function of the battery
     */
    batteryFunction: MavBatteryFunction;
    /**
     * Type (chemistry) of the battery
     */
    type: MavBatteryType;
    /**
     * Capacity when full according to manufacturer, -1: field not provided.
     * Units: mAh
     */
    capacityFullSpecification: int32_t;
    /**
     * Capacity when full (accounting for battery degradation), -1: field not provided.
     * Units: mAh
     */
    capacityFull: int32_t;
    /**
     * Charge/discharge cycle count. UINT16_MAX: field not provided.
     */
    cycleCount: uint16_t;
    /**
     * Serial number in ASCII characters, 0 terminated. All 0: field not provided.
     */
    serialNumber: string;
    /**
     * Static device name in ASCII characters, 0 terminated. All 0: field not provided. Encode as
     * manufacturer name then product name separated using an underscore.
     */
    deviceName: string;
    /**
     * Battery weight. 0: field not provided.
     * Units: g
     */
    weight: uint16_t;
    /**
     * Minimum per-cell voltage when discharging. If not supplied set to UINT16_MAX value.
     * Units: mV
     */
    dischargeMinimumVoltage: uint16_t;
    /**
     * Minimum per-cell voltage when charging. If not supplied set to UINT16_MAX value.
     * Units: mV
     */
    chargingMinimumVoltage: uint16_t;
    /**
     * Minimum per-cell voltage when resting. If not supplied set to UINT16_MAX value.
     * Units: mV
     */
    restingMinimumVoltage: uint16_t;
    /**
     * Maximum per-cell voltage when charged. 0: field not provided.
     * Units: mV
     */
    chargingMaximumVoltage: uint16_t;
    /**
     * Number of battery cells in series. 0: field not provided.
     */
    cellsInSeries: uint8_t;
    /**
     * Maximum pack discharge current. 0: field not provided.
     * Units: mA
     */
    dischargeMaximumCurrent: uint32_t;
    /**
     * Maximum pack discharge burst current. 0: field not provided.
     * Units: mA
     */
    dischargeMaximumBurstCurrent: uint32_t;
    /**
     * Manufacture date (DD/MM/YYYY) in ASCII characters, 0 terminated. All 0: field not provided.
     */
    manufactureDate: string;
}
/**
 * Telemetry of power generation system. Alternator or mechanical generator.
 */
export declare class GeneratorStatus extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Status flags.
     */
    status: MavGeneratorStatusFlag;
    /**
     * Speed of electrical generator or alternator. UINT16_MAX: field not provided.
     * Units: rpm
     */
    generatorSpeed: uint16_t;
    /**
     * Current into/out of battery. Positive for out. Negative for in. NaN: field not provided.
     * Units: A
     */
    batteryCurrent: float;
    /**
     * Current going to the UAV. If battery current not available this is the DC current from the
     * generator. Positive for out. Negative for in. NaN: field not provided
     * Units: A
     */
    loadCurrent: float;
    /**
     * The power being generated. NaN: field not provided
     * Units: W
     */
    powerGenerated: float;
    /**
     * Voltage of the bus seen at the generator, or battery bus if battery bus is controlled by generator
     * and at a different voltage to main bus.
     * Units: V
     */
    busVoltage: float;
    /**
     * The temperature of the rectifier or power converter. INT16_MAX: field not provided.
     * Units: degC
     */
    rectifierTemperature: int16_t;
    /**
     * The target battery current. Positive for out. Negative for in. NaN: field not provided
     * Units: A
     */
    batCurrentSetpoint: float;
    /**
     * The temperature of the mechanical motor, fuel cell core or generator. INT16_MAX: field not provided.
     * Units: degC
     */
    generatorTemperature: int16_t;
    /**
     * Seconds this generator has run since it was rebooted. UINT32_MAX: field not provided.
     * Units: s
     */
    runtime: uint32_t;
    /**
     * Seconds until this generator requires maintenance. A negative value indicates maintenance is
     * past-due. INT32_MAX: field not provided.
     * Units: s
     */
    timeUntilMaintenance: int32_t;
}
/**
 * The raw values of the actuator outputs (e.g. on Pixhawk, from MAIN, AUX ports). This message
 * supersedes SERVO_OUTPUT_RAW.
 */
export declare class ActuatorOutputStatus extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Timestamp (since system boot).
     * Units: us
     */
    timeUsec: uint64_t;
    /**
     * Active outputs
     */
    active: uint32_t;
    /**
     * Servo / motor output array values. Zero values indicate unused channels.
     */
    actuator: float[];
}
/**
 * Position of an aircraft in swarm.
 */
export declare class SwarmVehicle extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * UTC timestamp of when this packet was generated. Seconds since 1970, or 0 if not available.
     * Units: s
     */
    timestamp: uint32_t;
    /**
     * Aircraft ID
     */
    aircraftId: uint16_t;
    /**
     * Squadron ID
     */
    squadronId: uint16_t;
    /**
     * Staus of vehicle
     */
    stateNav: SwarmVehicleState;
    /**
     * Effective Radius of radio distance. Includes loiter radius and any overlap margin.
     * Units: m
     */
    effectiveRadius: float;
    /**
     * Latitude
     * Units: degE7
     */
    lat: int32_t;
    /**
     * Longitude
     * Units: degE7
     */
    lon: int32_t;
    /**
     * MSL Altitude.
     * Units: m
     */
    altMSL: float;
    /**
     * Target Latitude
     * Units: degE7
     */
    latTarget: int32_t;
    /**
     * Target Longitude
     * Units: degE7
     */
    lonTarget: int32_t;
    /**
     * Target MSL Altitude.
     * Units: m
     */
    altMSLTarget: float;
    /**
     * Swarm Vehicle Type
     */
    vehicleType: SwarmVehicleType;
}
/**
 * Position of an aircraft in swarm with data that updates less often.
 */
export declare class SwarmVehicleSlow extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * UTC timestamp of when this packet was generated. Seconds since 1970, or 0 if not available.
     * Units: s
     */
    timestamp: uint32_t;
    /**
     * Aircraft ID
     */
    aircraftId: uint16_t;
    /**
     * Squadron ID
     */
    squadronId: uint16_t;
    /**
     * Staus of vehicle
     */
    stateNav: SwarmVehicleState;
    /**
     * Staus coverage area
     */
    stateCoverage: SwarmCoverageStatus;
    /**
     * Staus of vehicle's ROI
     */
    stateRoi: SwarmRoiStatus;
    /**
     * Speed
     * Units: m/s
     */
    speed: uint16_t;
    /**
     * Course over Ground (GPS heading). Range: 0-35999
     * Units: cdeg
     */
    cog: uint16_t;
    /**
     * Effective Radius of radio distance. Includes loiter radius and any overlap margin.
     * Units: m
     */
    effectiveRadius: float;
    /**
     * Target Latitude
     * Units: degE7
     */
    latTarget: int32_t;
    /**
     * Target Longitude
     * Units: degE7
     */
    lonTarget: int32_t;
    /**
     * Target MSL Altitude.
     * Units: m
     */
    altMSLTarget: float;
    /**
     * Swarm Vehicle Type
     */
    vehicleType: SwarmVehicleType;
    /**
     * Region-of-Interest 32bit CRC. Zero indicates unknown. If a valid CRC computes to zero, use 1. This
     * CRC is used to verify an ROI that is actively loaded. It is used to keep the swarm in sync without
     * having to constantly send it to the mesh to verify.
     */
    ROICrc: uint32_t;
    /**
     * UTC timestamp of ROI generation. Seconds since 1970, or 0 if not available.
     * Units: s
     */
    ROITimestamp: uint32_t;
}
/**
 * Region of Interest points. Array of int32_t lat/lng pairs of polygon points.
 */
export declare class SwarmVehicleRoi extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Aircraft ID of intended target. Use 0 for broadcast.
     */
    idTarget: uint32_t;
    /**
     * 32bit CRC of ROI of the complete polygon.
     */
    crc: uint32_t;
    /**
     * UTC timestamp of ROI generation. Seconds since 1970, or 0 if not available.
     * Units: s
     */
    timestampS: uint32_t;
    /**
     * Number of points in the ROI polygon. One point is considered an int32 pair. This value must be >= 3
     * to be a valid polygon.
     */
    pointCount: uint32_t;
    /**
     * Latitude and Longitude int32 pairs. One polygon point is two of these enteries. Even indexed values
     * are latitude, odd are longitude.
     * Units: degE7
     */
    points: int32_t[];
}
/**
 * Cumulative distance traveled for each reported wheel.
 */
export declare class WheelDistance extends MavLinkData {
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
     * Number of wheels reported.
     */
    count: uint8_t;
    /**
     * Distance reported by individual wheel encoders. Forward rotations increase values, reverse rotations
     * decrease them. Not all wheels will necessarily have wheel encoders; the mapping of encoders to wheel
     * positions must be agreed/understood by the endpoints.
     * Units: m
     */
    distance: double[];
}
/**
 * Winch status.
 */
export declare class WinchStatus extends MavLinkData {
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
     * Length of line released. NaN if unknown
     * Units: m
     */
    lineLength: float;
    /**
     * Speed line is being released or retracted. Positive values if being released, negative values if
     * being retracted, NaN if unknown
     * Units: m/s
     */
    speed: float;
    /**
     * Tension on the line. NaN if unknown
     * Units: kg
     */
    tension: float;
    /**
     * Voltage of the battery supplying the winch. NaN if unknown
     * Units: V
     */
    voltage: float;
    /**
     * Current draw from the winch. NaN if unknown
     * Units: A
     */
    current: float;
    /**
     * Temperature of the motor. INT16_MAX if unknown
     * Units: degC
     */
    temperature: int16_t;
    /**
     * Status flags
     */
    status: MavWinchStatusFlag;
}
export declare const REGISTRY: MavLinkPacketRegistry;
