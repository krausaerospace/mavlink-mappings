import { int8_t, uint8_t, int16_t, uint16_t, int32_t, uint32_t, int64_t, uint64_t, float, double } from './types';
import { MavLinkPacketRegistry, MavLinkPacketField, MavLinkData, MavLinkDataConstructor } from './mavlink';
import { MavType, MavAutopilot, MavModeFlag } from './minimal';
export type MavLinkCommandRegistry = Record<number, MavLinkDataConstructor<CommandLong>>;
/**
 * These values define the type of firmware release. These values indicate the first version or release
 * of this type. For example the first alpha release would be 64, the second would be 65.
 */
export declare enum FirmwareVersionType {
    /**
     * development release
     */
    'DEV' = 0,
    /**
     * alpha release
     */
    'ALPHA' = 64,
    /**
     * beta release
     */
    'BETA' = 128,
    /**
     * release candidate
     */
    'RC' = 192,
    /**
     * official stable release
     */
    'OFFICIAL' = 255
}
/**
 * Flags to report failure cases over the high latency telemtry.
 */
export declare enum HlFailureFlag {
    /**
     * GPS failure.
     */
    'GPS' = 1,
    /**
     * Differential pressure sensor failure.
     */
    'DIFFERENTIAL_PRESSURE' = 2,
    /**
     * Absolute pressure sensor failure.
     */
    'ABSOLUTE_PRESSURE' = 4,
    /**
     * Accelerometer sensor failure.
     */
    'HL_FAILURE_FLAG_3D_ACCEL' = 8,
    /**
     * Gyroscope sensor failure.
     */
    'HL_FAILURE_FLAG_3D_GYRO' = 16,
    /**
     * Magnetometer sensor failure.
     */
    'HL_FAILURE_FLAG_3D_MAG' = 32,
    /**
     * Terrain subsystem failure.
     */
    'TERRAIN' = 64,
    /**
     * Battery failure/critical low battery.
     */
    'BATTERY' = 128,
    /**
     * RC receiver failure/no rc connection.
     */
    'RC_RECEIVER' = 256,
    /**
     * Offboard link failure.
     */
    'OFFBOARD_LINK' = 512,
    /**
     * Engine failure.
     */
    'ENGINE' = 1024,
    /**
     * Geofence violation.
     */
    'GEOFENCE' = 2048,
    /**
     * Estimator failure, for example measurement rejection or large variances.
     */
    'ESTIMATOR' = 4096,
    /**
     * Mission failure.
     */
    'MISSION' = 8192
}
/**
 * Actions that may be specified in MAV_CMD_OVERRIDE_GOTO to override mission execution.
 */
export declare enum MavGoto {
    /**
     * Hold at the current position.
     */
    'DO_HOLD' = 0,
    /**
     * Continue with the next item in mission execution.
     */
    'DO_CONTINUE' = 1,
    /**
     * Hold at the current position of the system
     */
    'HOLD_AT_CURRENT_POSITION' = 2,
    /**
     * Hold at the position specified in the parameters of the DO_HOLD action
     */
    'HOLD_AT_SPECIFIED_POSITION' = 3
}
/**
 * These defines are predefined OR-combined mode flags. There is no need to use values from this enum,
 * but it simplifies the use of the mode flags. Note that manual input is enabled in all modes as a
 * safety override.
 */
export declare enum MavMode {
    /**
     * System is not ready to fly, booting, calibrating, etc. No flag is set.
     */
    'PREFLIGHT' = 0,
    /**
     * System is allowed to be active, under assisted RC control.
     */
    'STABILIZE_DISARMED' = 80,
    /**
     * System is allowed to be active, under assisted RC control.
     */
    'STABILIZE_ARMED' = 208,
    /**
     * System is allowed to be active, under manual (RC) control, no stabilization
     */
    'MANUAL_DISARMED' = 64,
    /**
     * System is allowed to be active, under manual (RC) control, no stabilization
     */
    'MANUAL_ARMED' = 192,
    /**
     * System is allowed to be active, under autonomous control, manual setpoint
     */
    'GUIDED_DISARMED' = 88,
    /**
     * System is allowed to be active, under autonomous control, manual setpoint
     */
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
    /**
     * 0x01 3D gyro
     */
    'SENSOR_3D_GYRO' = 1,
    /**
     * 0x02 3D accelerometer
     */
    'SENSOR_3D_ACCEL' = 2,
    /**
     * 0x04 3D magnetometer
     */
    'SENSOR_3D_MAG' = 4,
    /**
     * 0x08 absolute pressure
     */
    'SENSOR_ABSOLUTE_PRESSURE' = 8,
    /**
     * 0x10 differential pressure
     */
    'SENSOR_DIFFERENTIAL_PRESSURE' = 16,
    /**
     * 0x20 GPS
     */
    'SENSOR_GPS' = 32,
    /**
     * 0x40 optical flow
     */
    'SENSOR_OPTICAL_FLOW' = 64,
    /**
     * 0x80 computer vision position
     */
    'SENSOR_VISION_POSITION' = 128,
    /**
     * 0x100 laser based position
     */
    'SENSOR_LASER_POSITION' = 256,
    /**
     * 0x200 external ground truth (Vicon or Leica)
     */
    'SENSOR_EXTERNAL_GROUND_TRUTH' = 512,
    /**
     * 0x400 3D angular rate control
     */
    'SENSOR_ANGULAR_RATE_CONTROL' = 1024,
    /**
     * 0x800 attitude stabilization
     */
    'SENSOR_ATTITUDE_STABILIZATION' = 2048,
    /**
     * 0x1000 yaw position
     */
    'SENSOR_YAW_POSITION' = 4096,
    /**
     * 0x2000 z/altitude control
     */
    'SENSOR_Z_ALTITUDE_CONTROL' = 8192,
    /**
     * 0x4000 x/y position control
     */
    'SENSOR_XY_POSITION_CONTROL' = 16384,
    /**
     * 0x8000 motor outputs / control
     */
    'SENSOR_MOTOR_OUTPUTS' = 32768,
    /**
     * 0x10000 rc receiver
     */
    'SENSOR_RC_RECEIVER' = 65536,
    /**
     * 0x20000 2nd 3D gyro
     */
    'SENSOR_3D_GYRO2' = 131072,
    /**
     * 0x40000 2nd 3D accelerometer
     */
    'SENSOR_3D_ACCEL2' = 262144,
    /**
     * 0x80000 2nd 3D magnetometer
     */
    'SENSOR_3D_MAG2' = 524288,
    /**
     * 0x100000 geofence
     */
    'GEOFENCE' = 1048576,
    /**
     * 0x200000 AHRS subsystem health
     */
    'AHRS' = 2097152,
    /**
     * 0x400000 Terrain subsystem health
     */
    'TERRAIN' = 4194304,
    /**
     * 0x800000 Motors are reversed
     */
    'REVERSE_MOTOR' = 8388608,
    /**
     * 0x1000000 Logging
     */
    'LOGGING' = 16777216,
    /**
     * 0x2000000 Battery
     */
    'SENSOR_BATTERY' = 33554432,
    /**
     * 0x4000000 Proximity
     */
    'SENSOR_PROXIMITY' = 67108864,
    /**
     * 0x8000000 Satellite Communication
     */
    'SENSOR_SATCOM' = 134217728,
    /**
     * 0x10000000 pre-arm check status. Always healthy when armed
     */
    'PREARM_CHECK' = 268435456,
    /**
     * 0x20000000 Avoidance/collision prevention
     */
    'OBSTACLE_AVOIDANCE' = 536870912,
    /**
     * 0x40000000 propulsion (actuator, esc, motor or propellor)
     */
    'SENSOR_PROPULSION' = 1073741824
}
/**
 * Co-ordinate frames used by MAVLink. Not all frames are supported by all commands, messages, or
 * vehicles. Global frames use the following naming conventions: - "GLOBAL": Global co-ordinate frame
 * with WGS84 latitude/longitude and altitude positive over mean sea level (MSL) by default. The
 * following modifiers may be used with "GLOBAL": - "RELATIVE_ALT": Altitude is relative to the vehicle
 * home position rather than MSL. - "TERRAIN_ALT": Altitude is relative to ground level rather than
 * MSL. - "INT": Latitude/longitude (in degrees) are scaled by multiplying by 1E7. Local frames use the
 * following naming conventions: - "LOCAL": Origin of local frame is fixed relative to earth. Unless
 * otherwise specified this origin is the origin of the vehicle position-estimator ("EKF"). - "BODY":
 * Origin of local frame travels with the vehicle. NOTE, "BODY" does NOT indicate alignment of frame
 * axis with vehicle attitude. - "OFFSET": Deprecated synonym for "BODY" (origin travels with the
 * vehicle). Not to be used for new frames. Some deprecated frames do not follow these conventions
 * (e.g. MAV_FRAME_BODY_NED and MAV_FRAME_BODY_OFFSET_NED).
 */
export declare enum MavFrame {
    /**
     * Global (WGS84) coordinate frame + MSL altitude. First value / x: latitude, second value / y:
     * longitude, third value / z: positive altitude over mean sea level (MSL).
     */
    'GLOBAL' = 0,
    /**
     * NED local tangent frame (x: North, y: East, z: Down) with origin fixed relative to earth.
     */
    'LOCAL_NED' = 1,
    /**
     * NOT a coordinate frame, indicates a mission command.
     */
    'MISSION' = 2,
    /**
     * Global (WGS84) coordinate frame + altitude relative to the home position. First value / x: latitude,
     * second value / y: longitude, third value / z: positive altitude with 0 being at the altitude of the
     * home location.
     */
    'GLOBAL_RELATIVE_ALT' = 3,
    /**
     * ENU local tangent frame (x: East, y: North, z: Up) with origin fixed relative to earth.
     */
    'LOCAL_ENU' = 4,
    /**
     * Global (WGS84) coordinate frame (scaled) + MSL altitude. First value / x: latitude in degrees*1E7,
     * second value / y: longitude in degrees*1E7, third value / z: positive altitude over mean sea level
     * (MSL).
     */
    'GLOBAL_INT' = 5,
    /**
     * Global (WGS84) coordinate frame (scaled) + altitude relative to the home position. First value / x:
     * latitude in degrees*1E7, second value / y: longitude in degrees*1E7, third value / z: positive
     * altitude with 0 being at the altitude of the home location.
     */
    'GLOBAL_RELATIVE_ALT_INT' = 6,
    /**
     * NED local tangent frame (x: North, y: East, z: Down) with origin that travels with the vehicle.
     */
    'LOCAL_OFFSET_NED' = 7,
    /**
     * Same as MAV_FRAME_LOCAL_NED when used to represent position values. Same as MAV_FRAME_BODY_FRD when
     * used with velocity/accelaration values.
     */
    'BODY_NED' = 8,
    /**
     * This is the same as MAV_FRAME_BODY_FRD.
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
     * / x: latitude in degrees*1E7, second value / y: longitude in degrees*1E7, third value / z: positive
     * altitude in meters with 0 being at ground level in terrain model.
     */
    'GLOBAL_TERRAIN_ALT_INT' = 11,
    /**
     * FRD local tangent frame (x: Forward, y: Right, z: Down) with origin that travels with vehicle. The
     * forward axis is aligned to the front of the vehicle in the horizontal plane.
     */
    'BODY_FRD' = 12,
    /**
     * MAV_FRAME_BODY_FLU - Body fixed frame of reference, Z-up (x: Forward, y: Left, z: Up).
     */
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
     * FRD local tangent frame (x: Forward, y: Right, z: Down) with origin fixed relative to earth. The
     * forward axis is aligned to the front of the vehicle in the horizontal plane.
     */
    'LOCAL_FRD' = 20,
    /**
     * FLU local tangent frame (x: Forward, y: Left, z: Up) with origin fixed relative to earth. The
     * forward axis is aligned to the front of the vehicle in the horizontal plane.
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
    /**
     * Disable fenced mode
     */
    'NONE' = 0,
    /**
     * Switched to guided mode to return point (fence point 0)
     */
    'GUIDED' = 1,
    /**
     * Report fence breach, but don't take action
     */
    'REPORT' = 2,
    /**
     * Switched to guided mode to return point (fence point 0) with manual throttle control
     */
    'GUIDED_THR_PASS' = 3,
    /**
     * Switch to RTL (return to launch) mode and head for the return point.
     */
    'RTL' = 4
}
/**
 * FENCE_BREACH
 */
export declare enum FenceBreach {
    /**
     * No last fence breach
     */
    'NONE' = 0,
    /**
     * Breached minimum altitude
     */
    'MINALT' = 1,
    /**
     * Breached maximum altitude
     */
    'MAXALT' = 2,
    /**
     * Breached fence boundary
     */
    'BOUNDARY' = 3
}
/**
 * Actions being taken to mitigate/prevent fence breach
 */
export declare enum FenceMitigate {
    /**
     * Unknown
     */
    'UNKNOWN' = 0,
    /**
     * No actions being taken
     */
    'NONE' = 1,
    /**
     * Velocity limiting active to prevent breach
     */
    'VEL_LIMIT' = 2
}
/**
 * FENCE_TYPE
 */
export declare enum FenceType {
    /**
     * All fence types
     */
    'ALL' = 0,
    /**
     * Maximum altitude fence
     */
    'ALT_MAX' = 1,
    /**
     * Circle fence
     */
    'CIRCLE' = 2,
    /**
     * Polygon fence
     */
    'POLYGON' = 4,
    /**
     * Minimum altitude fence
     */
    'ALT_MIN' = 8
}
/**
 * Enumeration of possible mount operation modes
 */
export declare enum MavMountMode {
    /**
     * Load and keep safe position (Roll,Pitch,Yaw) from permant memory and stop stabilization
     */
    'RETRACT' = 0,
    /**
     * Load and keep neutral position (Roll,Pitch,Yaw) from permanent memory.
     */
    'NEUTRAL' = 1,
    /**
     * Load neutral position and start MAVLink Roll,Pitch,Yaw control with stabilization
     */
    'MAVLINK_TARGETING' = 2,
    /**
     * Load neutral position and start RC Roll,Pitch,Yaw control with stabilization
     */
    'RC_TARGETING' = 3,
    /**
     * Load neutral position and start to point to Lat,Lon,Alt
     */
    'GPS_POINT' = 4,
    /**
     * Gimbal tracks system with specified system ID
     */
    'SYSID_TARGET' = 5,
    /**
     * Gimbal tracks home location
     */
    'HOME_LOCATION' = 6
}
/**
 * Gimbal device (low level) capability flags (bitmap).
 */
export declare enum GimbalDeviceCapFlags {
    /**
     * Gimbal device supports a retracted position.
     */
    'HAS_RETRACT' = 1,
    /**
     * Gimbal device supports a horizontal, forward looking position, stabilized.
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
     * Gimbal device supports locking to a roll angle (generally that's the default with roll stabilized).
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
     * Gimbal device supports locking to a pitch angle (generally that's the default with pitch
     * stabilized).
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
     * Gimbal device supports locking to an absolute heading, i.e., yaw angle relative to North (earth
     * frame, often this is an option available).
     */
    'HAS_YAW_LOCK' = 1024,
    /**
     * Gimbal device supports yawing/panning infinetely (e.g. using slip disk).
     */
    'SUPPORTS_INFINITE_YAW' = 2048,
    /**
     * Gimbal device supports yaw angles and angular velocities relative to North (earth frame). This
     * usually requires support by an autopilot via AUTOPILOT_STATE_FOR_GIMBAL_DEVICE. Support can go on
     * and off during runtime, which is reported by the flag
     * GIMBAL_DEVICE_FLAGS_CAN_ACCEPT_YAW_IN_EARTH_FRAME.
     */
    'SUPPORTS_YAW_IN_EARTH_FRAME' = 4096,
    /**
     * Gimbal device supports radio control inputs as an alternative input for controlling the gimbal
     * orientation.
     */
    'HAS_RC_INPUTS' = 8192
}
/**
 * Gimbal manager high level capability flags (bitmap). The first 16 bits are identical to the
 * GIMBAL_DEVICE_CAP_FLAGS. However, the gimbal manager does not need to copy the flags from the gimbal
 * but can also enhance the capabilities and thus add flags.
 */
export declare enum GimbalManagerCapFlags {
    /**
     * Based on GIMBAL_DEVICE_CAP_FLAGS_HAS_RETRACT.
     */
    'HAS_RETRACT' = 1,
    /**
     * Based on GIMBAL_DEVICE_CAP_FLAGS_HAS_NEUTRAL.
     */
    'HAS_NEUTRAL' = 2,
    /**
     * Based on GIMBAL_DEVICE_CAP_FLAGS_HAS_ROLL_AXIS.
     */
    'HAS_ROLL_AXIS' = 4,
    /**
     * Based on GIMBAL_DEVICE_CAP_FLAGS_HAS_ROLL_FOLLOW.
     */
    'HAS_ROLL_FOLLOW' = 8,
    /**
     * Based on GIMBAL_DEVICE_CAP_FLAGS_HAS_ROLL_LOCK.
     */
    'HAS_ROLL_LOCK' = 16,
    /**
     * Based on GIMBAL_DEVICE_CAP_FLAGS_HAS_PITCH_AXIS.
     */
    'HAS_PITCH_AXIS' = 32,
    /**
     * Based on GIMBAL_DEVICE_CAP_FLAGS_HAS_PITCH_FOLLOW.
     */
    'HAS_PITCH_FOLLOW' = 64,
    /**
     * Based on GIMBAL_DEVICE_CAP_FLAGS_HAS_PITCH_LOCK.
     */
    'HAS_PITCH_LOCK' = 128,
    /**
     * Based on GIMBAL_DEVICE_CAP_FLAGS_HAS_YAW_AXIS.
     */
    'HAS_YAW_AXIS' = 256,
    /**
     * Based on GIMBAL_DEVICE_CAP_FLAGS_HAS_YAW_FOLLOW.
     */
    'HAS_YAW_FOLLOW' = 512,
    /**
     * Based on GIMBAL_DEVICE_CAP_FLAGS_HAS_YAW_LOCK.
     */
    'HAS_YAW_LOCK' = 1024,
    /**
     * Based on GIMBAL_DEVICE_CAP_FLAGS_SUPPORTS_INFINITE_YAW.
     */
    'SUPPORTS_INFINITE_YAW' = 2048,
    /**
     * Based on GIMBAL_DEVICE_CAP_FLAGS_SUPPORTS_YAW_IN_EARTH_FRAME.
     */
    'SUPPORTS_YAW_IN_EARTH_FRAME' = 4096,
    /**
     * Based on GIMBAL_DEVICE_CAP_FLAGS_HAS_RC_INPUTS.
     */
    'HAS_RC_INPUTS' = 8192,
    /**
     * Gimbal manager supports to point to a local position.
     */
    'CAN_POINT_LOCATION_LOCAL' = 65536,
    /**
     * Gimbal manager supports to point to a global latitude, longitude, altitude position.
     */
    'CAN_POINT_LOCATION_GLOBAL' = 131072
}
/**
 * Flags for gimbal device (lower level) operation.
 */
export declare enum GimbalDeviceFlags {
    /**
     * Set to retracted safe position (no stabilization), takes presedence over all other flags.
     */
    'RETRACT' = 1,
    /**
     * Set to neutral/default position, taking precedence over all other flags except RETRACT. Neutral is
     * commonly forward-facing and horizontal (roll=pitch=yaw=0) but may be any orientation.
     */
    'NEUTRAL' = 2,
    /**
     * Lock roll angle to absolute angle relative to horizon (not relative to vehicle). This is generally
     * the default with a stabilizing gimbal.
     */
    'ROLL_LOCK' = 4,
    /**
     * Lock pitch angle to absolute angle relative to horizon (not relative to vehicle). This is generally
     * the default with a stabilizing gimbal.
     */
    'PITCH_LOCK' = 8,
    /**
     * Lock yaw angle to absolute angle relative to North (not relative to vehicle). If this flag is set,
     * the yaw angle and z component of angular velocity are relative to North (earth frame, x-axis
     * pointing North), else they are relative to the vehicle heading (vehicle frame, earth frame rotated
     * so that the x-axis is pointing forward).
     */
    'YAW_LOCK' = 16,
    /**
     * Yaw angle and z component of angular velocity are relative to the vehicle heading (vehicle frame,
     * earth frame rotated such that the x-axis is pointing forward).
     */
    'YAW_IN_VEHICLE_FRAME' = 32,
    /**
     * Yaw angle and z component of angular velocity are relative to North (earth frame, x-axis is pointing
     * North).
     */
    'YAW_IN_EARTH_FRAME' = 64,
    /**
     * Gimbal device can accept yaw angle inputs relative to North (earth frame). This flag is only for
     * reporting (attempts to set this flag are ignored).
     */
    'ACCEPTS_YAW_IN_EARTH_FRAME' = 128,
    /**
     * The gimbal orientation is set exclusively by the RC signals feed to the gimbal's radio control
     * inputs. MAVLink messages for setting the gimbal orientation (GIMBAL_DEVICE_SET_ATTITUDE) are
     * ignored.
     */
    'RC_EXCLUSIVE' = 256,
    /**
     * The gimbal orientation is determined by combining/mixing the RC signals feed to the gimbal's radio
     * control inputs and the MAVLink messages for setting the gimbal orientation
     * (GIMBAL_DEVICE_SET_ATTITUDE). How these two controls are combined or mixed is not defined by the
     * protocol but is up to the implementation.
     */
    'RC_MIXED' = 512
}
/**
 * Flags for high level gimbal manager operation The first 16 bits are identical to the
 * GIMBAL_DEVICE_FLAGS.
 */
export declare enum GimbalManagerFlags {
    /**
     * Based on GIMBAL_DEVICE_FLAGS_RETRACT.
     */
    'RETRACT' = 1,
    /**
     * Based on GIMBAL_DEVICE_FLAGS_NEUTRAL.
     */
    'NEUTRAL' = 2,
    /**
     * Based on GIMBAL_DEVICE_FLAGS_ROLL_LOCK.
     */
    'ROLL_LOCK' = 4,
    /**
     * Based on GIMBAL_DEVICE_FLAGS_PITCH_LOCK.
     */
    'PITCH_LOCK' = 8,
    /**
     * Based on GIMBAL_DEVICE_FLAGS_YAW_LOCK.
     */
    'YAW_LOCK' = 16,
    /**
     * Based on GIMBAL_DEVICE_FLAGS_YAW_IN_VEHICLE_FRAME.
     */
    'YAW_IN_VEHICLE_FRAME' = 32,
    /**
     * Based on GIMBAL_DEVICE_FLAGS_YAW_IN_EARTH_FRAME.
     */
    'YAW_IN_EARTH_FRAME' = 64,
    /**
     * Based on GIMBAL_DEVICE_FLAGS_ACCEPTS_YAW_IN_EARTH_FRAME.
     */
    'ACCEPTS_YAW_IN_EARTH_FRAME' = 128,
    /**
     * Based on GIMBAL_DEVICE_FLAGS_RC_EXCLUSIVE.
     */
    'RC_EXCLUSIVE' = 256,
    /**
     * Based on GIMBAL_DEVICE_FLAGS_RC_MIXED.
     */
    'RC_MIXED' = 512
}
/**
 * Gimbal device (low level) error flags (bitmap, 0 means no error)
 */
export declare enum GimbalDeviceErrorFlags {
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
     * There is an error with the gimbal encoders.
     */
    'ENCODER_ERROR' = 8,
    /**
     * There is an error with the gimbal power source.
     */
    'POWER_ERROR' = 16,
    /**
     * There is an error with the gimbal motors.
     */
    'MOTOR_ERROR' = 32,
    /**
     * There is an error with the gimbal's software.
     */
    'SOFTWARE_ERROR' = 64,
    /**
     * There is an error with the gimbal's communication.
     */
    'COMMS_ERROR' = 128,
    /**
     * Gimbal device is currently calibrating.
     */
    'CALIBRATION_RUNNING' = 256,
    /**
     * Gimbal device is not assigned to a gimbal manager.
     */
    'NO_MANAGER' = 512
}
/**
 * Gripper actions.
 */
export declare enum GripperActions {
    /**
     * Gripper release cargo.
     */
    'RELEASE' = 0,
    /**
     * Gripper grab onto cargo.
     */
    'GRAB' = 1
}
/**
 * Winch actions.
 */
export declare enum WinchActions {
    /**
     * Allow motor to freewheel.
     */
    'RELAXED' = 0,
    /**
     * Wind or unwind specified length of line, optionally using specified rate.
     */
    'RELATIVE_LENGTH_CONTROL' = 1,
    /**
     * Wind or unwind line at specified rate.
     */
    'RATE_CONTROL' = 2,
    /**
     * Perform the locking sequence to relieve motor while in the fully retracted position. Only action and
     * instance command parameters are used, others are ignored.
     */
    'LOCK' = 3,
    /**
     * Sequence of drop, slow down, touch down, reel up, lock. Only action and instance command parameters
     * are used, others are ignored.
     */
    'DELIVER' = 4,
    /**
     * Engage motor and hold current position. Only action and instance command parameters are used, others
     * are ignored.
     */
    'HOLD' = 5,
    /**
     * Return the reel to the fully retracted position. Only action and instance command parameters are
     * used, others are ignored.
     */
    'RETRACT' = 6,
    /**
     * Load the reel with line. The winch will calculate the total loaded length and stop when the tension
     * exceeds a threshold. Only action and instance command parameters are used, others are ignored.
     */
    'LOAD_LINE' = 7,
    /**
     * Spool out the entire length of the line. Only action and instance command parameters are used,
     * others are ignored.
     */
    'ABANDON_LINE' = 8
}
/**
 * Generalized UAVCAN node health
 */
export declare enum UavcanNodeHealth {
    /**
     * The node is functioning properly.
     */
    'OK' = 0,
    /**
     * A critical parameter went out of range or the node has encountered a minor failure.
     */
    'WARNING' = 1,
    /**
     * The node has encountered a major failure.
     */
    'ERROR' = 2,
    /**
     * The node has suffered a fatal malfunction.
     */
    'CRITICAL' = 3
}
/**
 * Generalized UAVCAN node mode
 */
export declare enum UavcanNodeMode {
    /**
     * The node is performing its primary functions.
     */
    'OPERATIONAL' = 0,
    /**
     * The node is initializing; this mode is entered immediately after startup.
     */
    'INITIALIZATION' = 1,
    /**
     * The node is under maintenance.
     */
    'MAINTENANCE' = 2,
    /**
     * The node is in the process of updating its software.
     */
    'SOFTWARE_UPDATE' = 3,
    /**
     * The node is no longer available online.
     */
    'OFFLINE' = 7
}
/**
 * Flags to indicate the status of camera storage.
 */
export declare enum StorageStatus {
    /**
     * Storage is missing (no microSD card loaded for example.)
     */
    'EMPTY' = 0,
    /**
     * Storage present but unformatted.
     */
    'UNFORMATTED' = 1,
    /**
     * Storage present and ready.
     */
    'READY' = 2,
    /**
     * Camera does not supply storage status information. Capacity information in STORAGE_INFORMATION
     * fields will be ignored.
     */
    'NOT_SUPPORTED' = 3
}
/**
 * Flags to indicate the type of storage.
 */
export declare enum StorageType {
    /**
     * Storage type is not known.
     */
    'UNKNOWN' = 0,
    /**
     * Storage type is USB device.
     */
    'USB_STICK' = 1,
    /**
     * Storage type is SD card.
     */
    'SD' = 2,
    /**
     * Storage type is microSD card.
     */
    'MICROSD' = 3,
    /**
     * Storage type is CFast.
     */
    'CF' = 4,
    /**
     * Storage type is CFexpress.
     */
    'CFE' = 5,
    /**
     * Storage type is XQD.
     */
    'XQD' = 6,
    /**
     * Storage type is HD mass storage type.
     */
    'HD' = 7,
    /**
     * Storage type is other, not listed type.
     */
    'OTHER' = 254
}
/**
 * Enable axes that will be tuned via autotuning. Used in MAV_CMD_DO_AUTOTUNE_ENABLE.
 */
export declare enum AutotuneAxis {
    /**
     * Flight stack tunes axis according to its default settings.
     */
    'DEFAULT' = 0,
    /**
     * Autotune roll axis.
     */
    'ROLL' = 1,
    /**
     * Autotune pitch axis.
     */
    'PITCH' = 2,
    /**
     * Autotune yaw axis.
     */
    'YAW' = 4
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
    /**
     * Navigate to waypoint.
     *
     * @note has location and is destination
     *
     * @param1 Hold[s] (min: 0) Hold time. (ignored by fixed wing, time to stay at waypoint for rotary wing)
     * @param2 Accept Radius[m] (min: 0) Acceptance radius (if the sphere with this radius is hit, the waypoint counts as reached)
     * @param3 Pass Radius[m] 0 to pass through the WP, if > 0 radius to pass by WP. Positive value for clockwise orbit, negative value for counter-clockwise orbit. Allows trajectory control.
     * @param4 Yaw[deg] Desired yaw angle at waypoint (rotary wing). NaN to use the current system yaw heading mode (e.g. yaw towards next waypoint, yaw to home, etc.).
     * @param5 Latitude Latitude
     * @param6 Longitude Longitude
     * @param7 Altitude[m] Altitude
     */
    'NAV_WAYPOINT' = 16,
    /**
     * Loiter around this waypoint an unlimited amount of time
     *
     * @note has location and is destination
     *
     * @param1 Empty
     * @param2 Empty
     * @param3 Radius[m] Loiter radius around waypoint for forward-only moving vehicles (not multicopters). If positive loiter clockwise, else counter-clockwise
     * @param4 Yaw[deg] Desired yaw angle. NaN to use the current system yaw heading mode (e.g. yaw towards next waypoint, yaw to home, etc.).
     * @param5 Latitude Latitude
     * @param6 Longitude Longitude
     * @param7 Altitude[m] Altitude
     */
    'NAV_LOITER_UNLIM' = 17,
    /**
     * Loiter around this waypoint for X turns
     *
     * @note has location and is destination
     *
     * @param1 Turns (min: 0) Number of turns.
     * @param2 Empty
     * @param3 Radius[m] Radius around waypoint. If positive loiter clockwise, else counter-clockwise
     * @param4 Forward moving aircraft this sets exit xtrack location: 0 for center of loiter wp, 1 for exit location. Else, this is desired yaw angle. NaN to use the current system yaw heading mode (e.g. yaw towards next waypoint, yaw to home, etc.).
     * @param5 Latitude Latitude
     * @param6 Longitude Longitude
     * @param7 Altitude[m] Altitude
     */
    'NAV_LOITER_TURNS' = 18,
    /**
     * Loiter around this waypoint for X seconds
     *
     * @note has location and is destination
     *
     * @param1 Time[s] (min: 0) Loiter time.
     * @param2 Empty
     * @param3 Radius[m] Radius around waypoint. If positive loiter clockwise, else counter-clockwise.
     * @param4 Forward moving aircraft this sets exit xtrack location: 0 for center of loiter wp, 1 for exit location. Else, this is desired yaw angle.  NaN to use the current system yaw heading mode (e.g. yaw towards next waypoint, yaw to home, etc.).
     * @param5 Latitude Latitude
     * @param6 Longitude Longitude
     * @param7 Altitude[m] Altitude
     */
    'NAV_LOITER_TIME' = 19,
    /**
     * Return to launch location
     * @param1 Empty
     * @param2 Empty
     * @param3 Empty
     * @param4 Empty
     * @param5 Empty
     * @param6 Empty
     * @param7 Empty
     */
    'NAV_RETURN_TO_LAUNCH' = 20,
    /**
     * Land at location.
     *
     * @note has location and is destination
     *
     * @param1 Abort Alt[m] Minimum target altitude if landing is aborted (0 = undefined/use system default).
     * @param2 Land Mode Precision land mode.
     * @param3 Empty.
     * @param4 Yaw Angle[deg] Desired yaw angle. NaN to use the current system yaw heading mode (e.g. yaw towards next waypoint, yaw to home, etc.).
     * @param5 Latitude Latitude.
     * @param6 Longitude Longitude.
     * @param7 Altitude[m] Landing altitude (ground level in current frame).
     */
    'NAV_LAND' = 21,
    /**
     * Takeoff from ground / hand. Vehicles that support multiple takeoff modes (e.g. VTOL quadplane)
     * should take off using the currently configured mode.
     *
     * @note has location and is destination
     *
     * @param1 Pitch[deg] Minimum pitch (if airspeed sensor present), desired pitch without sensor
     * @param2 Empty
     * @param3 Empty
     * @param4 Yaw[deg] Yaw angle (if magnetometer present), ignored without magnetometer. NaN to use the current system yaw heading mode (e.g. yaw towards next waypoint, yaw to home, etc.).
     * @param5 Latitude Latitude
     * @param6 Longitude Longitude
     * @param7 Altitude[m] Altitude
     */
    'NAV_TAKEOFF' = 22,
    /**
     * Land at local position (local frame only)
     *
     * @note has location and is destination
     *
     * @param1 Target (min: 0, increment: 1) Landing target number (if available)
     * @param2 Offset[m] (min: 0) Maximum accepted offset from desired landing position - computed magnitude from spherical coordinates: d = sqrt(x^2 + y^2 + z^2), which gives the maximum accepted distance between the desired landing position and the position where the vehicle is about to land
     * @param3 Descend Rate[m/s] Landing descend rate
     * @param4 Yaw[rad] Desired yaw angle
     * @param5 Y Position[m] Y-axis position
     * @param6 X Position[m] X-axis position
     * @param7 Z Position[m] Z-axis / ground level position
     */
    'NAV_LAND_LOCAL' = 23,
    /**
     * Takeoff from local position (local frame only)
     *
     * @note has location and is destination
     *
     * @param1 Pitch[rad] Minimum pitch (if airspeed sensor present), desired pitch without sensor
     * @param2 Empty
     * @param3 Ascend Rate[m/s] Takeoff ascend rate
     * @param4 Yaw[rad] Yaw angle (if magnetometer or another yaw estimation source present), ignored without one of these
     * @param5 Y Position[m] Y-axis position
     * @param6 X Position[m] X-axis position
     * @param7 Z Position[m] Z-axis position
     */
    'NAV_TAKEOFF_LOCAL' = 24,
    /**
     * Vehicle following, i.e. this waypoint represents the position of a moving vehicle
     *
     * @note has location
     *
     * @param1 Following (increment: 1) Following logic to use (e.g. loitering or sinusoidal following) - depends on specific autopilot implementation
     * @param2 Ground Speed[m/s] Ground speed of vehicle to be followed
     * @param3 Radius[m] Radius around waypoint. If positive loiter clockwise, else counter-clockwise
     * @param4 Yaw[deg] Desired yaw angle.
     * @param5 Latitude Latitude
     * @param6 Longitude Longitude
     * @param7 Altitude[m] Altitude
     */
    'NAV_FOLLOW' = 25,
    /**
     * Continue on the current course and climb/descend to specified altitude. When the altitude is reached
     * continue to the next command (i.e., don't proceed to the next command until the desired altitude is
     * reached.
     *
     * @note is destination
     *
     * @param1 Action (min: 0, max: 2, increment: 1) Climb or Descend (0 = Neutral, command completes when within 5m of this command's altitude, 1 = Climbing, command completes when at or above this command's altitude, 2 = Descending, command completes when at or below this command's altitude.
     * @param2 Empty
     * @param3 Empty
     * @param4 Empty
     * @param5 Empty
     * @param6 Empty
     * @param7 Altitude[m] Desired altitude
     */
    'NAV_CONTINUE_AND_CHANGE_ALT' = 30,
    /**
     * Begin loiter at the specified Latitude and Longitude. If Lat=Lon=0, then loiter at the current
     * position. Don't consider the navigation command complete (don't leave loiter) until the altitude has
     * been reached. Additionally, if the Heading Required parameter is non-zero the aircraft will not
     * leave the loiter until heading toward the next waypoint.
     *
     * @note has location and is destination
     *
     * @param1 Heading Required (min: 0, max: 1, increment: 1) Heading Required (0 = False)
     * @param2 Radius[m] Loiter radius around waypoint for forward-only moving vehicles (not multicopters). If positive loiter clockwise, negative counter-clockwise, 0 means no change to standard loiter.
     * @param3 Empty
     * @param4 Xtrack Location (min: 0, max: 1, increment: 1) Forward moving aircraft this sets exit xtrack location: 0 for center of loiter wp, 1 for exit location
     * @param5 Latitude Latitude
     * @param6 Longitude Longitude
     * @param7 Altitude[m] Altitude
     */
    'NAV_LOITER_TO_ALT' = 31,
    /**
     * Begin following a target
     * @param1 System ID (min: 0, max: 255, increment: 1) System ID (of the FOLLOW_TARGET beacon). Send 0 to disable follow-me and return to the default position hold mode.
     * @param2 Reserved
     * @param3 Reserved
     * @param4 Altitude Mode (min: 0, max: 2, increment: 1) Altitude mode: 0: Keep current altitude, 1: keep altitude difference to target, 2: go to a fixed altitude above home.
     * @param5 Altitude[m] Altitude above home. (used if mode=2)
     * @param6 Reserved
     * @param7 Time to Land[s] (min: 0) Time to land in which the MAV should go to the default position hold mode after a message RX timeout.
     */
    'DO_FOLLOW' = 32,
    /**
     * Reposition the MAV after a follow target command has been sent
     * @param1 Camera Q1 Camera q1 (where 0 is on the ray from the camera to the tracking device)
     * @param2 Camera Q2 Camera q2
     * @param3 Camera Q3 Camera q3
     * @param4 Camera Q4 Camera q4
     * @param5 Altitude Offset[m] altitude offset from target
     * @param6 X Offset[m] X offset from target
     * @param7 Y Offset[m] Y offset from target
     */
    'DO_FOLLOW_REPOSITION' = 33,
    /**
     * Sets the region of interest (ROI) for a sensor set or the vehicle itself. This can then be used by
     * the vehicle's control system to control the vehicle attitude and the attitude of various sensors
     * such as cameras.
     *
     * @note has location
     *
     * @param1 ROI Mode Region of interest mode.
     * @param2 WP Index (min: 0, increment: 1) Waypoint index/ target ID. (see MAV_ROI enum)
     * @param3 ROI Index (min: 0, increment: 1) ROI index (allows a vehicle to manage multiple ROI's)
     * @param4 Empty
     * @param5 X x the location of the fixed ROI (see MAV_FRAME)
     * @param6 Y y
     * @param7 Z z
     */
    'NAV_ROI' = 80,
    /**
     * Control autonomous path planning on the MAV.
     *
     * @note has location and is destination
     *
     * @param1 Local Ctrl (min: 0, max: 2, increment: 1) 0: Disable local obstacle avoidance / local path planning (without resetting map), 1: Enable local path planning, 2: Enable and reset local path planning
     * @param2 Global Ctrl (min: 0, max: 3, increment: 1) 0: Disable full path planning (without resetting map), 1: Enable, 2: Enable and reset map/occupancy grid, 3: Enable and reset planned route, but not occupancy grid
     * @param3 Empty
     * @param4 Yaw[deg] Yaw angle at goal
     * @param5 Latitude/X Latitude/X of goal
     * @param6 Longitude/Y Longitude/Y of goal
     * @param7 Altitude/Z Altitude/Z of goal
     */
    'NAV_PATHPLANNING' = 81,
    /**
     * Navigate to waypoint using a spline path.
     *
     * @note has location and is destination
     *
     * @param1 Hold[s] (min: 0) Hold time. (ignored by fixed wing, time to stay at waypoint for rotary wing)
     * @param2 Empty
     * @param3 Empty
     * @param4 Empty
     * @param5 Latitude/X Latitude/X of goal
     * @param6 Longitude/Y Longitude/Y of goal
     * @param7 Altitude/Z Altitude/Z of goal
     */
    'NAV_SPLINE_WAYPOINT' = 82,
    /**
     * Takeoff from ground using VTOL mode, and transition to forward flight with specified heading. The
     * command should be ignored by vehicles that dont support both VTOL and fixed-wing flight
     * (multicopters, boats,etc.).
     *
     * @note has location and is destination
     *
     * @param1 Empty
     * @param2 Transition Heading Front transition heading.
     * @param3 Empty
     * @param4 Yaw Angle[deg] Yaw angle. NaN to use the current system yaw heading mode (e.g. yaw towards next waypoint, yaw to home, etc.).
     * @param5 Latitude Latitude
     * @param6 Longitude Longitude
     * @param7 Altitude[m] Altitude
     */
    'NAV_VTOL_TAKEOFF' = 84,
    /**
     * Land using VTOL mode
     *
     * @note has location and is destination
     *
     * @param1 See NAV_VTOL_LAND_OPTIONS enum
     * @param2 Empty
     * @param3 Approach Altitude[m] Approach altitude (with the same reference as the Altitude field). NaN if unspecified.
     * @param4 Yaw[deg] Yaw angle. NaN to use the current system yaw heading mode (e.g. yaw towards next waypoint, yaw to home, etc.).
     * @param5 Latitude Latitude
     * @param6 Longitude Longitude
     * @param7 Ground Altitude[m] Altitude (ground level)
     */
    'NAV_VTOL_LAND' = 85,
    /**
     * hand control over to an external controller
     * @param1 Enable (min: 0, max: 1, increment: 1) On / Off (> 0.5f on)
     * @param2 Empty
     * @param3 Empty
     * @param4 Empty
     * @param5 Empty
     * @param6 Empty
     * @param7 Empty
     */
    'NAV_GUIDED_ENABLE' = 92,
    /**
     * Delay the next navigation command a number of seconds or until a specified time
     * @param1 Delay[s] (min: -1, increment: 1) Delay (-1 to enable time-of-day fields)
     * @param2 Hour (min: -1, max: 23, increment: 1) hour (24h format, UTC, -1 to ignore)
     * @param3 Minute (min: -1, max: 59, increment: 1) minute (24h format, UTC, -1 to ignore)
     * @param4 Second (min: -1, max: 59, increment: 1) second (24h format, UTC, -1 to ignore)
     * @param5 Empty
     * @param6 Empty
     * @param7 Empty
     */
    'NAV_DELAY' = 93,
    /**
     * Descend and place payload. Vehicle moves to specified location, descends until it detects a hanging
     * payload has reached the ground, and then releases the payload. If ground is not detected before the
     * reaching the maximum descent value (param1), the command will complete without releasing the
     * payload.
     *
     * @note has location and is destination
     *
     * @param1 Max Descent[m] (min: 0) Maximum distance to descend.
     * @param2 Empty
     * @param3 Empty
     * @param4 Empty
     * @param5 Latitude Latitude
     * @param6 Longitude Longitude
     * @param7 Altitude[m] Altitude
     */
    'NAV_PAYLOAD_PLACE' = 94,
    /**
     * NOP - This command is only used to mark the upper limit of the NAV/ACTION commands in the
     * enumeration
     * @param1 Empty
     * @param2 Empty
     * @param3 Empty
     * @param4 Empty
     * @param5 Empty
     * @param6 Empty
     * @param7 Empty
     */
    'NAV_LAST' = 95,
    /**
     * Delay mission state machine.
     * @param1 Delay[s] (min: 0) Delay
     * @param2 Empty
     * @param3 Empty
     * @param4 Empty
     * @param5 Empty
     * @param6 Empty
     * @param7 Empty
     */
    'CONDITION_DELAY' = 112,
    /**
     * Ascend/descend to target altitude at specified rate. Delay mission state machine until desired
     * altitude reached.
     *
     * @note is destination
     *
     * @param1 Rate[m/s] Descent / Ascend rate.
     * @param2 Empty
     * @param3 Empty
     * @param4 Empty
     * @param5 Empty
     * @param6 Empty
     * @param7 Altitude[m] Target Altitude
     */
    'CONDITION_CHANGE_ALT' = 113,
    /**
     * Delay mission state machine until within desired distance of next NAV point.
     * @param1 Distance[m] (min: 0) Distance.
     * @param2 Empty
     * @param3 Empty
     * @param4 Empty
     * @param5 Empty
     * @param6 Empty
     * @param7 Empty
     */
    'CONDITION_DISTANCE' = 114,
    /**
     * Reach a certain target angle.
     * @param1 Angle[deg] (min: 0, max: 360) target angle [0-360]. Absolute angles: 0 is north. Relative angle: 0 is initial yaw. Direction set by param3.
     * @param2 Angular Speed[deg/s] (min: 0) angular speed
     * @param3 Direction (min: -1, max: 1, increment: 1) direction: -1: counter clockwise, 0: shortest direction, 1: clockwise
     * @param4 Relative (min: 0, max: 1, increment: 1) 0: absolute angle, 1: relative offset
     * @param5 Empty
     * @param6 Empty
     * @param7 Empty
     */
    'CONDITION_YAW' = 115,
    /**
     * NOP - This command is only used to mark the upper limit of the CONDITION commands in the enumeration
     * @param1 Empty
     * @param2 Empty
     * @param3 Empty
     * @param4 Empty
     * @param5 Empty
     * @param6 Empty
     * @param7 Empty
     */
    'CONDITION_LAST' = 159,
    /**
     * Set system mode.
     * @param1 Mode Mode
     * @param2 Custom Mode Custom mode - this is system specific, please refer to the individual autopilot specifications for details.
     * @param3 Custom Submode Custom sub mode - this is system specific, please refer to the individual autopilot specifications for details.
     * @param4 Empty
     * @param5 Empty
     * @param6 Empty
     * @param7 Empty
     */
    'DO_SET_MODE' = 176,
    /**
     * Jump to the desired command in the mission list. Repeat this action only the specified number of
     * times
     * @param1 Number (min: 0, increment: 1) Sequence number
     * @param2 Repeat (min: 0, increment: 1) Repeat count
     * @param3 Empty
     * @param4 Empty
     * @param5 Empty
     * @param6 Empty
     * @param7 Empty
     */
    'DO_JUMP' = 177,
    /**
     * Change speed and/or throttle set points
     * @param1 Speed Type Speed type of value set in param2 (such as airspeed, ground speed, and so on)
     * @param2 Speed[m/s] (min: -2) Speed (-1 indicates no change, -2 indicates return to default vehicle speed)
     * @param3 Throttle[%] (min: -2) Throttle (-1 indicates no change, -2 indicates return to default vehicle throttle value)
     * @param4 Relative (min: 0, max: 1, increment: 1) 0: absolute, 1: relative
     * @param5 Empty
     * @param6 Empty
     * @param7 Empty
     */
    'DO_CHANGE_SPEED' = 178,
    /**
     * Changes the home location either to the current location or a specified location.
     *
     * @note has location
     *
     * @param1 Use Current (min: 0, max: 1, increment: 1) Use current (1=use current location, 0=use specified location)
     * @param2 Empty
     * @param3 Empty
     * @param4 Empty
     * @param5 Latitude Latitude
     * @param6 Longitude Longitude
     * @param7 Altitude[m] Altitude
     */
    'DO_SET_HOME' = 179,
    /**
     * Set a system parameter. Caution! Use of this command requires knowledge of the numeric enumeration
     * value of the parameter.
     * @param1 Number (min: 0, increment: 1) Parameter number
     * @param2 Value Parameter value
     * @param3 Empty
     * @param4 Empty
     * @param5 Empty
     * @param6 Empty
     * @param7 Empty
     */
    'DO_SET_PARAMETER' = 180,
    /**
     * Set a relay to a condition.
     * @param1 Instance (min: 0, increment: 1) Relay instance number.
     * @param2 Setting (min: 0, increment: 1) Setting. (1=on, 0=off, others possible depending on system hardware)
     * @param3 Empty
     * @param4 Empty
     * @param5 Empty
     * @param6 Empty
     * @param7 Empty
     */
    'DO_SET_RELAY' = 181,
    /**
     * Cycle a relay on and off for a desired number of cycles with a desired period.
     * @param1 Instance (min: 0, increment: 1) Relay instance number.
     * @param2 Count (min: 1, increment: 1) Cycle count.
     * @param3 Time[s] (min: 0) Cycle time.
     * @param4 Empty
     * @param5 Empty
     * @param6 Empty
     * @param7 Empty
     */
    'DO_REPEAT_RELAY' = 182,
    /**
     * Set a servo to a desired PWM value.
     * @param1 Instance (min: 0, increment: 1) Servo instance number.
     * @param2 PWM[us] (min: 0, increment: 1) Pulse Width Modulation.
     * @param3 Empty
     * @param4 Empty
     * @param5 Empty
     * @param6 Empty
     * @param7 Empty
     */
    'DO_SET_SERVO' = 183,
    /**
     * Cycle a between its nominal setting and a desired PWM for a desired number of cycles with a desired
     * period.
     * @param1 Instance (min: 0, increment: 1) Servo instance number.
     * @param2 PWM[us] (min: 0, increment: 1) Pulse Width Modulation.
     * @param3 Count (min: 1, increment: 1) Cycle count.
     * @param4 Time[s] (min: 0) Cycle time.
     * @param5 Empty
     * @param6 Empty
     * @param7 Empty
     */
    'DO_REPEAT_SERVO' = 184,
    /**
     * Terminate flight immediately
     * @param1 Terminate (min: 0, max: 1, increment: 1) Flight termination activated if > 0.5
     * @param2 Empty
     * @param3 Empty
     * @param4 Empty
     * @param5 Empty
     * @param6 Empty
     * @param7 Empty
     */
    'DO_FLIGHTTERMINATION' = 185,
    /**
     * Change altitude set point.
     * @param1 Altitude[m] Altitude.
     * @param2 Frame Frame of new altitude.
     * @param3 Empty
     * @param4 Empty
     * @param5 Empty
     * @param6 Empty
     * @param7 Empty
     */
    'DO_CHANGE_ALTITUDE' = 186,
    /**
     * Mission command to perform a landing. This is used as a marker in a mission to tell the autopilot
     * where a sequence of mission items that represents a landing starts. 	 It may also be sent via a
     * COMMAND_LONG to trigger a landing, in which case the nearest (geographically) landing sequence in
     * the mission will be used. 	 The Latitude/Longitude/Altitude is optional, and may be set to 0 if not
     * needed. If specified then it will be used to help find the closest landing sequence.
     *
     * @note has location
     *
     * @param1 Empty
     * @param2 Empty
     * @param3 Empty
     * @param4 Empty
     * @param5 Latitude Latitude
     * @param6 Longitude Longitude
     * @param7 Altitude[m] Altitude
     */
    'DO_LAND_START' = 189,
    /**
     * Mission command to perform a landing from a rally point.
     * @param1 Altitude[m] Break altitude
     * @param2 Speed[m/s] Landing speed
     * @param3 Empty
     * @param4 Empty
     * @param5 Empty
     * @param6 Empty
     * @param7 Empty
     */
    'DO_RALLY_LAND' = 190,
    /**
     * Mission command to safely abort an autonomous landing.
     * @param1 Altitude[m] Altitude
     * @param2 Empty
     * @param3 Empty
     * @param4 Empty
     * @param5 Empty
     * @param6 Empty
     * @param7 Empty
     */
    'DO_GO_AROUND' = 191,
    /**
     * Reposition the vehicle to a specific WGS84 global position.
     *
     * @note has location and is destination
     *
     * @param1 Speed[m/s] (min: -1) Ground speed, less than 0 (-1) for default
     * @param2 Bitmask Bitmask of option flags.
     * @param3 Radius[m] Loiter radius for planes. Positive values only, direction is controlled by Yaw value. A value of zero or NaN is ignored.
     * @param4 Yaw[deg] Yaw heading. NaN to use the current system yaw heading mode (e.g. yaw towards next waypoint, yaw to home, etc.). For planes indicates loiter direction (0: clockwise, 1: counter clockwise)
     * @param5 Latitude Latitude
     * @param6 Longitude Longitude
     * @param7 Altitude[m] Altitude
     */
    'DO_REPOSITION' = 192,
    /**
     * If in a GPS controlled position mode, hold the current position or continue.
     * @param1 Continue (min: 0, max: 1, increment: 1) 0: Pause current mission or reposition command, hold current position. 1: Continue mission. A VTOL capable vehicle should enter hover mode (multicopter and VTOL planes). A plane should loiter with the default loiter radius.
     * @param2 Reserved
     * @param3 Reserved
     * @param4 Reserved
     * @param5 Reserved
     * @param6 Reserved
     * @param7 Reserved
     */
    'DO_PAUSE_CONTINUE' = 193,
    /**
     * Set moving direction to forward or reverse.
     * @param1 Reverse (min: 0, max: 1, increment: 1) Direction (0=Forward, 1=Reverse)
     * @param2 Empty
     * @param3 Empty
     * @param4 Empty
     * @param5 Empty
     * @param6 Empty
     * @param7 Empty
     */
    'DO_SET_REVERSE' = 194,
    /**
     * Sets the region of interest (ROI) to a location. This can then be used by the vehicle's control
     * system to control the vehicle attitude and the attitude of various sensors such as cameras.
     *
     * @note has location
     *
     * @param1 Empty
     * @param2 Empty
     * @param3 Empty
     * @param4 Empty
     * @param5 Latitude Latitude of ROI location
     * @param6 Longitude Longitude of ROI location
     * @param7 Altitude[m] Altitude of ROI location
     */
    'DO_SET_ROI_LOCATION' = 195,
    /**
     * Sets the region of interest (ROI) to be toward next waypoint, with optional pitch/roll/yaw offset.
     * This can then be used by the vehicle's control system to control the vehicle attitude and the
     * attitude of various sensors such as cameras.
     * @param1 Empty
     * @param2 Empty
     * @param3 Empty
     * @param4 Empty
     * @param5 Pitch Offset Pitch offset from next waypoint, positive pitching up
     * @param6 Roll Offset Roll offset from next waypoint, positive rolling to the right
     * @param7 Yaw Offset Yaw offset from next waypoint, positive yawing to the right
     */
    'DO_SET_ROI_WPNEXT_OFFSET' = 196,
    /**
     * Cancels any previous ROI command returning the vehicle/sensors to default flight characteristics.
     * This can then be used by the vehicle's control system to control the vehicle attitude and the
     * attitude of various sensors such as cameras.
     * @param1 Empty
     * @param2 Empty
     * @param3 Empty
     * @param4 Empty
     * @param5 Empty
     * @param6 Empty
     * @param7 Empty
     */
    'DO_SET_ROI_NONE' = 197,
    /**
     * Mount tracks system with specified system ID. Determination of target vehicle position may be done
     * with GLOBAL_POSITION_INT or any other means.
     * @param1 System ID (min: 1, max: 255, increment: 1) System ID
     */
    'DO_SET_ROI_SYSID' = 198,
    /**
     * Control onboard camera system.
     * @param1 ID (min: -1, increment: 1) Camera ID (-1 for all)
     * @param2 Transmission (min: 0, max: 2, increment: 1) Transmission: 0: disabled, 1: enabled compressed, 2: enabled raw
     * @param3 Interval[s] (min: 0) Transmission mode: 0: video stream, >0: single images every n seconds
     * @param4 Recording (min: 0, max: 2, increment: 1) Recording: 0: disabled, 1: enabled compressed, 2: enabled raw
     * @param5 Empty
     * @param6 Empty
     * @param7 Empty
     */
    'DO_CONTROL_VIDEO' = 200,
    /**
     * Sets the region of interest (ROI) for a sensor set or the vehicle itself. This can then be used by
     * the vehicle's control system to control the vehicle attitude and the attitude of various sensors
     * such as cameras.
     *
     * @note has location
     *
     * @param1 ROI Mode Region of interest mode.
     * @param2 WP Index (min: 0, increment: 1) Waypoint index/ target ID (depends on param 1).
     * @param3 ROI Index (min: 0, increment: 1) Region of interest index. (allows a vehicle to manage multiple ROI's)
     * @param4 Empty
     * @param5 x the location of the fixed ROI (see MAV_FRAME)
     * @param6 y
     * @param7 z
     */
    'DO_SET_ROI' = 201,
    /**
     * Configure digital camera. This is a fallback message for systems that have not yet implemented
     * PARAM_EXT_XXX messages and camera definition files (see
     * https://mavlink.io/en/services/camera_def.html ).
     * @param1 Mode (min: 0, increment: 1) Modes: P, TV, AV, M, Etc.
     * @param2 Shutter Speed (min: 0, increment: 1) Shutter speed: Divisor number for one second.
     * @param3 Aperture (min: 0) Aperture: F stop number.
     * @param4 ISO (min: 0, increment: 1) ISO number e.g. 80, 100, 200, Etc.
     * @param5 Exposure Exposure type enumerator.
     * @param6 Command Identity Command Identity.
     * @param7 Engine Cut-off[ds] (min: 0, increment: 1) Main engine cut-off time before camera trigger. (0 means no cut-off)
     */
    'DO_DIGICAM_CONFIGURE' = 202,
    /**
     * Control digital camera. This is a fallback message for systems that have not yet implemented
     * PARAM_EXT_XXX messages and camera definition files (see
     * https://mavlink.io/en/services/camera_def.html ).
     * @param1 Session Control Session control e.g. show/hide lens
     * @param2 Zoom Absolute Zoom's absolute position
     * @param3 Zoom Relative Zooming step value to offset zoom from the current position
     * @param4 Focus Focus Locking, Unlocking or Re-locking
     * @param5 Shoot Command Shooting Command
     * @param6 Command Identity Command Identity
     * @param7 Shot ID Test shot identifier. If set to 1, image will only be captured, but not counted towards internal frame count.
     */
    'DO_DIGICAM_CONTROL' = 203,
    /**
     * Mission command to configure a camera or antenna mount
     * @param1 Mode Mount operation mode
     * @param2 Stabilize Roll (min: 0, max: 1, increment: 1) stabilize roll? (1 = yes, 0 = no)
     * @param3 Stabilize Pitch (min: 0, max: 1, increment: 1) stabilize pitch? (1 = yes, 0 = no)
     * @param4 Stabilize Yaw (min: 0, max: 1, increment: 1) stabilize yaw? (1 = yes, 0 = no)
     * @param5 Empty
     * @param6 Empty
     * @param7 Empty
     */
    'DO_MOUNT_CONFIGURE' = 204,
    /**
     * Mission command to control a camera or antenna mount
     * @param1 pitch (WIP: DEPRECATED: or lat in degrees) depending on mount mode.
     * @param2 roll (WIP: DEPRECATED: or lon in degrees) depending on mount mode.
     * @param3 yaw (WIP: DEPRECATED: or alt in meters) depending on mount mode.
     * @param4 WIP: alt in meters depending on mount mode.
     * @param5 WIP: latitude in degrees * 1E7, set if appropriate mount mode.
     * @param6 WIP: longitude in degrees * 1E7, set if appropriate mount mode.
     * @param7 Mode Mount mode.
     */
    'DO_MOUNT_CONTROL' = 205,
    /**
     * Mission command to set camera trigger distance for this flight. The camera is triggered each time
     * this distance is exceeded. This command can also be used to set the shutter integration time for the
     * camera.
     * @param1 Distance[m] (min: 0) Camera trigger distance. 0 to stop triggering.
     * @param2 Shutter[ms] (min: -1, increment: 1) Camera shutter integration time. -1 or 0 to ignore
     * @param3 Trigger (min: 0, max: 1, increment: 1) Trigger camera once immediately. (0 = no trigger, 1 = trigger)
     * @param4 Empty
     * @param5 Empty
     * @param6 Empty
     * @param7 Empty
     */
    'DO_SET_CAM_TRIGG_DIST' = 206,
    /**
     * Mission command to enable the geofence
     * @param1 Enable (min: 0, max: 2, increment: 1) enable? (0=disable, 1=enable, 2=disable_floor_only)
     * @param2 Types Fence types to enable or disable as a bitmask. A value of 0 indicates that all fences should be enabled or disabled. This parameter is ignored if param 1 has the value 2
     * @param3 Empty
     * @param4 Empty
     * @param5 Empty
     * @param6 Empty
     * @param7 Empty
     */
    'DO_FENCE_ENABLE' = 207,
    /**
     * Mission item/command to release a parachute or enable/disable auto release.
     * @param1 Action Action
     * @param2 Empty
     * @param3 Empty
     * @param4 Empty
     * @param5 Empty
     * @param6 Empty
     * @param7 Empty
     */
    'DO_PARACHUTE' = 208,
    /**
     * Mission command to perform motor test.
     * @param1 Instance (min: 1, increment: 1) Motor instance number. (from 1 to max number of motors on the vehicle)
     * @param2 Throttle Type Throttle type.
     * @param3 Throttle Throttle.
     * @param4 Timeout[s] (min: 0) Timeout.
     * @param5 Motor Count (min: 0, increment: 1) Motor count. (number of motors to test to test in sequence, waiting for the timeout above between them; 0=1 motor, 1=1 motor, 2=2 motors...)
     * @param6 Test Order Motor test order.
     * @param7 Empty
     */
    'DO_MOTOR_TEST' = 209,
    /**
     * Change to/from inverted flight.
     * @param1 Inverted (min: 0, max: 1, increment: 1) Inverted flight. (0=normal, 1=inverted)
     * @param2 Empty
     * @param3 Empty
     * @param4 Empty
     * @param5 Empty
     * @param6 Empty
     * @param7 Empty
     */
    'DO_INVERTED_FLIGHT' = 210,
    /**
     * Mission command to operate a gripper.
     * @param1 Instance (min: 1, increment: 1) Gripper instance number.
     * @param2 Action Gripper action to perform.
     * @param3 Empty
     * @param4 Empty
     * @param5 Empty
     * @param6 Empty
     * @param7 Empty
     */
    'DO_GRIPPER' = 211,
    /**
     * Enable/disable autotune.
     * @param1 Enable (min: 0, max: 1, increment: 1) Enable (1: enable, 0:disable).
     * @param2 Axis Specify which axes are autotuned. 0 indicates autopilot default settings.
     * @param3 Empty.
     * @param4 Empty.
     * @param5 Empty.
     * @param6 Empty.
     * @param7 Empty.
     */
    'DO_AUTOTUNE_ENABLE' = 212,
    /**
     * Sets a desired vehicle turn angle and speed change.
     * @param1 Yaw[deg] Yaw angle to adjust steering by.
     * @param2 Speed[m/s] Speed.
     * @param3 Angle (min: 0, max: 1, increment: 1) Final angle. (0=absolute, 1=relative)
     * @param4 Empty
     * @param5 Empty
     * @param6 Empty
     * @param7 Empty
     */
    'NAV_SET_YAW_SPEED' = 213,
    /**
     * Mission command to set camera trigger interval for this flight. If triggering is enabled, the camera
     * is triggered each time this interval expires. This command can also be used to set the shutter
     * integration time for the camera.
     * @param1 Trigger Cycle[ms] (min: -1, increment: 1) Camera trigger cycle time. -1 or 0 to ignore.
     * @param2 Shutter Integration[ms] (min: -1, increment: 1) Camera shutter integration time. Should be less than trigger cycle time. -1 or 0 to ignore.
     * @param3 Empty
     * @param4 Empty
     * @param5 Empty
     * @param6 Empty
     * @param7 Empty
     */
    'DO_SET_CAM_TRIGG_INTERVAL' = 214,
    /**
     * Mission command to control a camera or antenna mount, using a quaternion as reference.
     * @param1 Q1 quaternion param q1, w (1 in null-rotation)
     * @param2 Q2 quaternion param q2, x (0 in null-rotation)
     * @param3 Q3 quaternion param q3, y (0 in null-rotation)
     * @param4 Q4 quaternion param q4, z (0 in null-rotation)
     * @param5 Empty
     * @param6 Empty
     * @param7 Empty
     */
    'DO_MOUNT_CONTROL_QUAT' = 220,
    /**
     * set id of master controller
     * @param1 System ID (min: 0, max: 255, increment: 1) System ID
     * @param2 Component ID (min: 0, max: 255, increment: 1) Component ID
     * @param3 Empty
     * @param4 Empty
     * @param5 Empty
     * @param6 Empty
     * @param7 Empty
     */
    'DO_GUIDED_MASTER' = 221,
    /**
     * Set limits for external control
     * @param1 Timeout[s] (min: 0) Timeout - maximum time that external controller will be allowed to control vehicle. 0 means no timeout.
     * @param2 Min Altitude[m] Altitude (MSL) min - if vehicle moves below this alt, the command will be aborted and the mission will continue. 0 means no lower altitude limit.
     * @param3 Max Altitude[m] Altitude (MSL) max - if vehicle moves above this alt, the command will be aborted and the mission will continue. 0 means no upper altitude limit.
     * @param4 Horiz. Move Limit[m] (min: 0) Horizontal move limit - if vehicle moves more than this distance from its location at the moment the command was executed, the command will be aborted and the mission will continue. 0 means no horizontal move limit.
     * @param5 Empty
     * @param6 Empty
     * @param7 Empty
     */
    'DO_GUIDED_LIMITS' = 222,
    /**
     * Control vehicle engine. This is interpreted by the vehicles engine controller to change the target
     * engine state. It is intended for vehicles with internal combustion engines
     * @param1 Start Engine (min: 0, max: 1, increment: 1) 0: Stop engine, 1:Start Engine
     * @param2 Cold Start (min: 0, max: 1, increment: 1) 0: Warm start, 1:Cold start. Controls use of choke where applicable
     * @param3 Height Delay[m] (min: 0) Height delay. This is for commanding engine start only after the vehicle has gained the specified height. Used in VTOL vehicles during takeoff to start engine after the aircraft is off the ground. Zero for no delay.
     * @param4 Options A bitmask of options for engine control
     * @param5 Empty
     * @param5 Empty
     * @param6 Empty
     * @param7 Empty
     */
    'DO_ENGINE_CONTROL' = 223,
    /**
     * Set the mission item with sequence number seq as current item. This means that the MAV will continue
     * to this mission item on the shortest path (not following the mission items in-between).
     * @param1 Number (min: 0, increment: 1) Mission sequence value to set
     * @param2 Empty
     * @param3 Empty
     * @param4 Empty
     * @param5 Empty
     * @param5 Empty
     * @param6 Empty
     * @param7 Empty
     */
    'DO_SET_MISSION_CURRENT' = 224,
    /**
     * NOP - This command is only used to mark the upper limit of the DO commands in the enumeration
     * @param1 Empty
     * @param2 Empty
     * @param3 Empty
     * @param4 Empty
     * @param5 Empty
     * @param6 Empty
     * @param7 Empty
     */
    'DO_LAST' = 240,
    /**
     * Trigger calibration. This command will be only accepted if in pre-flight mode. Except for
     * Temperature Calibration, only one sensor should be set in a single message and all others should be
     * zero.
     * @param1 Gyro Temperature (min: 0, max: 3, increment: 1) 1: gyro calibration, 3: gyro temperature calibration
     * @param2 Magnetometer (min: 0, max: 1, increment: 1) 1: magnetometer calibration
     * @param3 Ground Pressure (min: 0, max: 1, increment: 1) 1: ground pressure calibration
     * @param4 Remote Control (min: 0, max: 1, increment: 1) 1: radio RC calibration, 2: RC trim calibration
     * @param5 Accelerometer (min: 0, max: 4, increment: 1) 1: accelerometer calibration, 2: board level calibration, 3: accelerometer temperature calibration, 4: simple accelerometer calibration
     * @param6 Compmot or Airspeed (min: 0, max: 2, increment: 1) 1: APM: compass/motor interference calibration (PX4: airspeed calibration, deprecated), 2: airspeed calibration
     * @param7 ESC or Baro (min: 0, max: 3, increment: 1) 1: ESC calibration, 3: barometer temperature calibration
     */
    'PREFLIGHT_CALIBRATION' = 241,
    /**
     * Set sensor offsets. This command will be only accepted if in pre-flight mode.
     * @param1 Sensor Type (min: 0, max: 6, increment: 1) Sensor to adjust the offsets for: 0: gyros, 1: accelerometer, 2: magnetometer, 3: barometer, 4: optical flow, 5: second magnetometer, 6: third magnetometer
     * @param2 X Offset X axis offset (or generic dimension 1), in the sensor's raw units
     * @param3 Y Offset Y axis offset (or generic dimension 2), in the sensor's raw units
     * @param4 Z Offset Z axis offset (or generic dimension 3), in the sensor's raw units
     * @param5 4th Dimension Generic dimension 4, in the sensor's raw units
     * @param6 5th Dimension Generic dimension 5, in the sensor's raw units
     * @param7 6th Dimension Generic dimension 6, in the sensor's raw units
     */
    'PREFLIGHT_SET_SENSOR_OFFSETS' = 242,
    /**
     * Trigger UAVCAN configuration (actuator ID assignment and direction mapping). Note that this maps to
     * the legacy UAVCAN v0 function UAVCAN_ENUMERATE, which is intended to be executed just once during
     * initial vehicle configuration (it is not a normal pre-flight command and has been poorly named).
     * @param1 Actuator ID 1: Trigger actuator ID assignment and direction mapping. 0: Cancel command.
     * @param2 Reserved
     * @param3 Reserved
     * @param4 Reserved
     * @param5 Reserved
     * @param6 Reserved
     * @param7 Reserved
     */
    'PREFLIGHT_UAVCAN' = 243,
    /**
     * Request storage of different parameter values and logs. This command will be only accepted if in
     * pre-flight mode.
     * @param1 Parameter Storage (min: 0, max: 2, increment: 1) Parameter storage: 0: READ FROM FLASH/EEPROM, 1: WRITE CURRENT TO FLASH/EEPROM, 2: Reset to defaults
     * @param2 Mission Storage (min: 0, max: 2, increment: 1) Mission storage: 0: READ FROM FLASH/EEPROM, 1: WRITE CURRENT TO FLASH/EEPROM, 2: Reset to defaults
     * @param3 Logging Rate[Hz] (min: -1, increment: 1) Onboard logging: 0: Ignore, 1: Start default rate logging, -1: Stop logging, > 1: logging rate (e.g. set to 1000 for 1000 Hz logging)
     * @param4 Reserved
     * @param5 Empty
     * @param6 Empty
     * @param7 Empty
     */
    'PREFLIGHT_STORAGE' = 245,
    /**
     * Request the reboot or shutdown of system components.
     * @param1 Autopilot (min: 0, max: 3, increment: 1) 0: Do nothing for autopilot, 1: Reboot autopilot, 2: Shutdown autopilot, 3: Reboot autopilot and keep it in the bootloader until upgraded.
     * @param2 Companion (min: 0, max: 3, increment: 1) 0: Do nothing for onboard computer, 1: Reboot onboard computer, 2: Shutdown onboard computer, 3: Reboot onboard computer and keep it in the bootloader until upgraded.
     * @param3 WIP: 0: Do nothing for camera, 1: Reboot onboard camera, 2: Shutdown onboard camera, 3: Reboot onboard camera and keep it in the bootloader until upgraded
     * @param4 WIP: 0: Do nothing for mount (e.g. gimbal), 1: Reboot mount, 2: Shutdown mount, 3: Reboot mount and keep it in the bootloader until upgraded
     * @param5 Reserved (set to 0)
     * @param6 Reserved (set to 0)
     * @param7 WIP: ID (e.g. camera ID -1 for all IDs)
     */
    'PREFLIGHT_REBOOT_SHUTDOWN' = 246,
    /**
     * Override current mission with command to pause mission, pause mission and move to position,
     * continue/resume mission. When param 1 indicates that the mission is paused (MAV_GOTO_DO_HOLD), param
     * 2 defines whether it holds in place or moves to another position.
     *
     * @note has location and is destination
     *
     * @param1 Continue MAV_GOTO_DO_HOLD: pause mission and either hold or move to specified position (depending on param2), MAV_GOTO_DO_CONTINUE: resume mission.
     * @param2 Position MAV_GOTO_HOLD_AT_CURRENT_POSITION: hold at current position, MAV_GOTO_HOLD_AT_SPECIFIED_POSITION: hold at specified position.
     * @param3 Frame Coordinate frame of hold point.
     * @param4 Yaw[deg] Desired yaw angle.
     * @param5 Latitude/X Latitude/X position.
     * @param6 Longitude/Y Longitude/Y position.
     * @param7 Altitude/Z Altitude/Z position.
     */
    'OVERRIDE_GOTO' = 252,
    /**
     * Mission command to set a Camera Auto Mount Pivoting Oblique Survey (Replaces CAM_TRIGG_DIST for this
     * purpose). The camera is triggered each time this distance is exceeded, then the mount moves to the
     * next position. Params 4~6 set-up the angle limits and number of positions for oblique survey, where
     * mount-enabled vehicles automatically roll the camera between shots to emulate an oblique camera
     * setup (providing an increased HFOV). This command can also be used to set the shutter integration
     * time for the camera.
     * @param1 Distance[m] (min: 0) Camera trigger distance. 0 to stop triggering.
     * @param2 Shutter[ms] (min: 0, increment: 1) Camera shutter integration time. 0 to ignore
     * @param3 Min Interval[ms] (min: 0, max: 10000, increment: 1) The minimum interval in which the camera is capable of taking subsequent pictures repeatedly. 0 to ignore.
     * @param4 Positions (min: 2, increment: 1) Total number of roll positions at which the camera will capture photos (images captures spread evenly across the limits defined by param5).
     * @param5 Roll Angle[deg] (min: 0) Angle limits that the camera can be rolled to left and right of center.
     * @param6 Pitch Angle[deg] (min: -180, max: 180) Fixed pitch angle that the camera will hold in oblique mode if the mount is actuated in the pitch axis.
     * @param7 Empty
     */
    'OBLIQUE_SURVEY' = 260,
    /**
     * start running a mission
     * @param1 First Item (min: 0, increment: 1) first_item: the first mission item to run
     * @param2 Last Item (min: 0, increment: 1) last_item:  the last mission item to run (after this item is run, the mission ends)
     */
    'MISSION_START' = 300,
    /**
     * Arms / Disarms a component
     * @param1 Arm (min: 0, max: 1, increment: 1) 0: disarm, 1: arm
     * @param2 Force (min: 0, max: 21196, increment: 21196) 0: arm-disarm unless prevented by safety checks (i.e. when landed), 21196: force arming/disarming (e.g. allow arming to override preflight checks and disarming in flight)
     */
    'COMPONENT_ARM_DISARM' = 400,
    /**
     * Instructs system to run pre-arm checks. This command should return MAV_RESULT_TEMPORARILY_REJECTED
     * in the case the system is armed, otherwse MAV_RESULT_ACCEPTED. Note that the return value from
     * executing this command does not indicate whether the vehicle is armable or not, just whether the
     * system has successfully run/is currently running the checks. The result of the checks is reflected
     * in the SYS_STATUS message.
     */
    'RUN_PREARM_CHECKS' = 401,
    /**
     * Request the home position from the vehicle.
     * @param1 Reserved
     * @param2 Reserved
     * @param3 Reserved
     * @param4 Reserved
     * @param5 Reserved
     * @param6 Reserved
     * @param7 Reserved
     */
    'GET_HOME_POSITION' = 410,
    /**
     * Starts receiver pairing.
     * @param1 Spektrum 0:Spektrum.
     * @param2 RC Type RC type.
     */
    'START_RX_PAIR' = 500,
    /**
     * Request the interval between messages for a particular MAVLink message ID. The receiver should ACK
     * the command and then emit its response in a MESSAGE_INTERVAL message.
     * @param1 Message ID (min: 0, max: 16777215, increment: 1) The MAVLink message ID
     */
    'GET_MESSAGE_INTERVAL' = 510,
    /**
     * Set the interval between messages for a particular MAVLink message ID. This interface replaces
     * REQUEST_DATA_STREAM.
     * @param1 Message ID (min: 0, max: 16777215, increment: 1) The MAVLink message ID
     * @param2 Interval[us] (min: -1, increment: 1) The interval between two messages. Set to -1 to disable and 0 to request default rate.
     * @param7 Response Target (min: 0, max: 2, increment: 1) Target address of message stream (if message has target address fields). 0: Flight-stack default (recommended), 1: address of requestor, 2: broadcast.
     */
    'SET_MESSAGE_INTERVAL' = 511,
    /**
     * Request the target system(s) emit a single instance of a specified message (i.e. a "one-shot"
     * version of MAV_CMD_SET_MESSAGE_INTERVAL).
     * @param1 Message ID (min: 0, max: 16777215, increment: 1) The MAVLink message ID of the requested message.
     * @param2 Req Param 1 Use for index ID, if required. Otherwise, the use of this parameter (if any) must be defined in the requested message. By default assumed not used (0).
     * @param3 Req Param 2 The use of this parameter (if any), must be defined in the requested message. By default assumed not used (0).
     * @param4 Req Param 3 The use of this parameter (if any), must be defined in the requested message. By default assumed not used (0).
     * @param5 Req Param 4 The use of this parameter (if any), must be defined in the requested message. By default assumed not used (0).
     * @param6 Req Param 5 The use of this parameter (if any), must be defined in the requested message. By default assumed not used (0).
     * @param7 Response Target (min: 0, max: 2, increment: 1) Target address for requested message (if message has target address fields). 0: Flight-stack default, 1: address of requestor, 2: broadcast.
     */
    'REQUEST_MESSAGE' = 512,
    /**
     * Request MAVLink protocol version compatibility. All receivers should ACK the command and then emit
     * their capabilities in an PROTOCOL_VERSION message
     * @param1 Protocol (min: 0, max: 1, increment: 1) 1: Request supported protocol versions by all nodes on the network
     * @param2 Reserved (all remaining params)
     */
    'REQUEST_PROTOCOL_VERSION' = 519,
    /**
     * Request autopilot capabilities. The receiver should ACK the command and then emit its capabilities
     * in an AUTOPILOT_VERSION message
     * @param1 Version (min: 0, max: 1, increment: 1) 1: Request autopilot version
     * @param2 Reserved (all remaining params)
     */
    'REQUEST_AUTOPILOT_CAPABILITIES' = 520,
    /**
     * Request camera information (CAMERA_INFORMATION).
     * @param1 Capabilities (min: 0, max: 1, increment: 1) 0: No action 1: Request camera capabilities
     * @param2 Reserved (all remaining params)
     */
    'REQUEST_CAMERA_INFORMATION' = 521,
    /**
     * Request camera settings (CAMERA_SETTINGS).
     * @param1 Settings (min: 0, max: 1, increment: 1) 0: No Action 1: Request camera settings
     * @param2 Reserved (all remaining params)
     */
    'REQUEST_CAMERA_SETTINGS' = 522,
    /**
     * Request storage information (STORAGE_INFORMATION). Use the command's target_component to target a
     * specific component's storage.
     * @param1 Storage ID (min: 0, increment: 1) Storage ID (0 for all, 1 for first, 2 for second, etc.)
     * @param2 Information (min: 0, max: 1, increment: 1) 0: No Action 1: Request storage information
     * @param3 Reserved (all remaining params)
     */
    'REQUEST_STORAGE_INFORMATION' = 525,
    /**
     * Format a storage medium. Once format is complete, a STORAGE_INFORMATION message is sent. Use the
     * command's target_component to target a specific component's storage.
     * @param1 Storage ID (min: 0, increment: 1) Storage ID (1 for first, 2 for second, etc.)
     * @param2 Format (min: 0, max: 1, increment: 1) 0: No action 1: Format storage
     * @param3 Reserved (all remaining params)
     */
    'STORAGE_FORMAT' = 526,
    /**
     * Request camera capture status (CAMERA_CAPTURE_STATUS)
     * @param1 Capture Status (min: 0, max: 1, increment: 1) 0: No Action 1: Request camera capture status
     * @param2 Reserved (all remaining params)
     */
    'REQUEST_CAMERA_CAPTURE_STATUS' = 527,
    /**
     * Request flight information (FLIGHT_INFORMATION)
     * @param1 Flight Information (min: 0, max: 1, increment: 1) 1: Request flight information
     * @param2 Reserved (all remaining params)
     */
    'REQUEST_FLIGHT_INFORMATION' = 528,
    /**
     * Reset all camera settings to Factory Default
     * @param1 Reset (min: 0, max: 1, increment: 1) 0: No Action 1: Reset all settings
     * @param2 Reserved (all remaining params)
     */
    'RESET_CAMERA_SETTINGS' = 529,
    /**
     * Set camera running mode. Use NaN for reserved values. GCS will send a
     * MAV_CMD_REQUEST_VIDEO_STREAM_STATUS command after a mode change if the camera supports video
     * streaming.
     * @param1 Reserved (Set to 0)
     * @param2 Camera Mode Camera mode
     */
    'SET_CAMERA_MODE' = 530,
    /**
     * Set camera zoom. Camera must respond with a CAMERA_SETTINGS message (on success).
     * @param1 Zoom Type Zoom type
     * @param2 Zoom Value Zoom value. The range of valid values depend on the zoom type.
     */
    'SET_CAMERA_ZOOM' = 531,
    /**
     * Set camera focus. Camera must respond with a CAMERA_SETTINGS message (on success).
     * @param1 Focus Type Focus type
     * @param2 Focus Value Focus value
     */
    'SET_CAMERA_FOCUS' = 532,
    /**
     * Tagged jump target. Can be jumped to with MAV_CMD_DO_JUMP_TAG.
     * @param1 Tag (min: 0, increment: 1) Tag.
     */
    'JUMP_TAG' = 600,
    /**
     * Jump to the matching tag in the mission list. Repeat this action for the specified number of times.
     * A mission should contain a single matching tag for each jump. If this is not the case then a jump to
     * a missing tag should complete the mission, and a jump where there are multiple matching tags should
     * always select the one with the lowest mission sequence number.
     * @param1 Tag (min: 0, increment: 1) Target tag to jump to.
     * @param2 Repeat (min: 0, increment: 1) Repeat count.
     */
    'DO_JUMP_TAG' = 601,
    /**
     * Set gimbal manager pitch/yaw setpoints (low rate command). It is possible to set combinations of the
     * values below. E.g. an angle as well as a desired angular rate can be used to get to this angle at a
     * certain angular rate, or an angular rate only will result in continuous turning. NaN is to be used
     * to signal unset. Note: only the gimbal manager will react to this command - it will be ignored by a
     * gimbal device. Use GIMBAL_MANAGER_SET_PITCHYAW if you need to stream pitch/yaw setpoints at higher
     * rate.
     * @param1 Pitch angle[deg] (min: -180, max: 180) Pitch angle (positive to pitch up, relative to vehicle for FOLLOW mode, relative to world horizon for LOCK mode).
     * @param2 Yaw angle[deg] (min: -180, max: 180) Yaw angle (positive to yaw to the right, relative to vehicle for FOLLOW mode, absolute to North for LOCK mode).
     * @param3 Pitch rate[deg/s] Pitch rate (positive to pitch up).
     * @param4 Yaw rate[deg/s] Yaw rate (positive to yaw to the right).
     * @param5 Gimbal manager flags Gimbal manager flags to use.
     * @param7 Gimbal device ID Component ID of gimbal device to address (or 1-6 for non-MAVLink gimbal), 0 for all gimbal device components. Send command multiple times for more than one gimbal (but not all gimbals).
     */
    'DO_GIMBAL_MANAGER_PITCHYAW' = 1000,
    /**
     * Gimbal configuration to set which sysid/compid is in primary and secondary control.
     * @param1 sysid primary control Sysid for primary control (0: no one in control, -1: leave unchanged, -2: set itself in control (for missions where the own sysid is still unknown), -3: remove control if currently in control).
     * @param2 compid primary control Compid for primary control (0: no one in control, -1: leave unchanged, -2: set itself in control (for missions where the own sysid is still unknown), -3: remove control if currently in control).
     * @param3 sysid secondary control Sysid for secondary control (0: no one in control, -1: leave unchanged, -2: set itself in control (for missions where the own sysid is still unknown), -3: remove control if currently in control).
     * @param4 compid secondary control Compid for secondary control (0: no one in control, -1: leave unchanged, -2: set itself in control (for missions where the own sysid is still unknown), -3: remove control if currently in control).
     * @param7 Gimbal device ID Component ID of gimbal device to address (or 1-6 for non-MAVLink gimbal), 0 for all gimbal device components. Send command multiple times for more than one gimbal (but not all gimbals).
     */
    'DO_GIMBAL_MANAGER_CONFIGURE' = 1001,
    /**
     * Start image capture sequence. CAMERA_IMAGE_CAPTURED must be emitted after each capture. Param1 (id)
     * may be used to specify the target camera: 0: all cameras, 1 to 6: autopilot-connected cameras,
     * 7-255: MAVLink camera component ID. It is needed in order to target specific cameras connected to
     * the autopilot, or specific sensors in a multi-sensor camera (neither of which have a distinct
     * MAVLink component ID). It is also needed to specify the target camera in missions. When used in a
     * mission, an autopilot should execute the MAV_CMD for a specified local camera (param1 = 1-6), or
     * resend it as a command if it is intended for a MAVLink camera (param1 = 7 - 255), setting the
     * command's target_component as the param1 value (and setting param1 in the command to zero). If the
     * param1 is 0 the autopilot should do both. When sent in a command the target MAVLink address is set
     * using target_component. If addressed specifically to an autopilot: param1 should be used in the same
     * way as it is for missions (though command should NACK with MAV_RESULT_DENIED if a specified local
     * camera does not exist). If addressed to a MAVLink camera, param 1 can be used to address all cameras
     * (0), or to separately address 1 to 7 individual sensors. Other values should be NACKed with
     * MAV_RESULT_DENIED. If the command is broadcast (target_component is 0) then param 1 should be set to
     * 0 (any other value should be NACKED with MAV_RESULT_DENIED). An autopilot would trigger any local
     * cameras and forward the command to all channels.
     * @param1 id (min: 0, max: 255, increment: 1) Target camera ID. 7 to 255: MAVLink camera component id. 1 to 6 for cameras that don't have a distinct component id (such as autopilot-attached cameras). 0: all cameras. This is used to specifically target autopilot-connected cameras or individual sensors in a multi-sensor MAVLink camera. It is also used to target specific cameras when the MAV_CMD is used in a mission
     * @param2 Interval[s] (min: 0) Desired elapsed time between two consecutive pictures (in seconds). Minimum values depend on hardware (typically greater than 2 seconds).
     * @param3 Total Images (min: 0, increment: 1) Total number of images to capture. 0 to capture forever/until MAV_CMD_IMAGE_STOP_CAPTURE.
     * @param4 Sequence Number (min: 1, increment: 1) Capture sequence number starting from 1. This is only valid for single-capture (param3 == 1), otherwise set to 0. Increment the capture ID for each capture command to prevent double captures when a command is re-transmitted.
     */
    'IMAGE_START_CAPTURE' = 2000,
    /**
     * Stop image capture sequence. Param1 (id) may be used to specify the target camera: 0: all cameras, 1
     * to 6: autopilot-connected cameras, 7-255: MAVLink camera component ID. It is needed in order to
     * target specific cameras connected to the autopilot, or specific sensors in a multi-sensor camera
     * (neither of which have a distinct MAVLink component ID). It is also needed to specify the target
     * camera in missions. When used in a mission, an autopilot should execute the MAV_CMD for a specified
     * local camera (param1 = 1-6), or resend it as a command if it is intended for a MAVLink camera
     * (param1 = 7 - 255), setting the command's target_component as the param1 value (and setting param1
     * in the command to zero). If the param1 is 0 the autopilot should do both. When sent in a command the
     * target MAVLink address is set using target_component. If addressed specifically to an autopilot:
     * param1 should be used in the same way as it is for missions (though command should NACK with
     * MAV_RESULT_DENIED if a specified local camera does not exist). If addressed to a MAVLink camera,
     * param1 can be used to address all cameras (0), or to separately address 1 to 7 individual sensors.
     * Other values should be NACKed with MAV_RESULT_DENIED. If the command is broadcast (target_component
     * is 0) then param 1 should be set to 0 (any other value should be NACKED with MAV_RESULT_DENIED). An
     * autopilot would trigger any local cameras and forward the command to all channels.
     * @param1 id (min: 0, max: 255, increment: 1) Target camera ID. 7 to 255: MAVLink camera component id. 1 to 6 for cameras that don't have a distinct component id (such as autopilot-attached cameras). 0: all cameras. This is used to specifically target autopilot-connected cameras or individual sensors in a multi-sensor MAVLink camera. It is also used to target specific cameras when the MAV_CMD is used in a mission
     */
    'IMAGE_STOP_CAPTURE' = 2001,
    /**
     * Enable or disable on-board camera triggering system.
     * @param1 Enable (min: -1, max: 1, increment: 1) Trigger enable/disable (0 for disable, 1 for start), -1 to ignore
     * @param2 Reset (min: -1, max: 1, increment: 1) 1 to reset the trigger sequence, -1 or 0 to ignore
     * @param3 Pause (min: -1, max: 1, increment: 2) 1 to pause triggering, but without switching the camera off or retracting it. -1 to ignore
     */
    'DO_TRIGGER_CONTROL' = 2003,
    /**
     * If the camera supports point visual tracking (CAMERA_CAP_FLAGS_HAS_TRACKING_POINT is set), this
     * command allows to initiate the tracking.
     * @param1 Point x (min: 0, max: 1) Point to track x value (normalized 0..1, 0 is left, 1 is right).
     * @param2 Point y (min: 0, max: 1) Point to track y value (normalized 0..1, 0 is top, 1 is bottom).
     * @param3 Radius (min: 0, max: 1) Point radius (normalized 0..1, 0 is image left, 1 is image right).
     */
    'CAMERA_TRACK_POINT' = 2004,
    /**
     * If the camera supports rectangle visual tracking (CAMERA_CAP_FLAGS_HAS_TRACKING_RECTANGLE is set),
     * this command allows to initiate the tracking.
     * @param1 Top left corner x (min: 0, max: 1) Top left corner of rectangle x value (normalized 0..1, 0 is left, 1 is right).
     * @param2 Top left corner y (min: 0, max: 1) Top left corner of rectangle y value (normalized 0..1, 0 is top, 1 is bottom).
     * @param3 Bottom right corner x (min: 0, max: 1) Bottom right corner of rectangle x value (normalized 0..1, 0 is left, 1 is right).
     * @param4 Bottom right corner y (min: 0, max: 1) Bottom right corner of rectangle y value (normalized 0..1, 0 is top, 1 is bottom).
     */
    'CAMERA_TRACK_RECTANGLE' = 2005,
    /**
     * Stops ongoing tracking.
     */
    'CAMERA_STOP_TRACKING' = 2010,
    /**
     * Starts video capture (recording).
     * @param1 Stream ID (min: 0, increment: 1) Video Stream ID (0 for all streams)
     * @param2 Status Frequency[Hz] (min: 0) Frequency CAMERA_CAPTURE_STATUS messages should be sent while recording (0 for no messages, otherwise frequency)
     */
    'VIDEO_START_CAPTURE' = 2500,
    /**
     * Stop the current video capture (recording).
     * @param1 Stream ID (min: 0, increment: 1) Video Stream ID (0 for all streams)
     */
    'VIDEO_STOP_CAPTURE' = 2501,
    /**
     * Start video streaming
     * @param1 Stream ID (min: 0, increment: 1) Video Stream ID (0 for all streams, 1 for first, 2 for second, etc.)
     */
    'VIDEO_START_STREAMING' = 2502,
    /**
     * Stop the given video stream
     * @param1 Stream ID (min: 0, increment: 1) Video Stream ID (0 for all streams, 1 for first, 2 for second, etc.)
     */
    'VIDEO_STOP_STREAMING' = 2503,
    /**
     * Request video stream information (VIDEO_STREAM_INFORMATION)
     * @param1 Stream ID (min: 0, increment: 1) Video Stream ID (0 for all streams, 1 for first, 2 for second, etc.)
     */
    'REQUEST_VIDEO_STREAM_INFORMATION' = 2504,
    /**
     * Request video stream status (VIDEO_STREAM_STATUS)
     * @param1 Stream ID (min: 0, increment: 1) Video Stream ID (0 for all streams, 1 for first, 2 for second, etc.)
     */
    'REQUEST_VIDEO_STREAM_STATUS' = 2505,
    /**
     * Request to start streaming logging data over MAVLink (see also LOGGING_DATA message)
     * @param1 Format (min: 0, increment: 1) Format: 0: ULog
     * @param2 Reserved (set to 0)
     * @param3 Reserved (set to 0)
     * @param4 Reserved (set to 0)
     * @param5 Reserved (set to 0)
     * @param6 Reserved (set to 0)
     * @param7 Reserved (set to 0)
     */
    'LOGGING_START' = 2510,
    /**
     * Request to stop streaming log data over MAVLink
     * @param1 Reserved (set to 0)
     * @param2 Reserved (set to 0)
     * @param3 Reserved (set to 0)
     * @param4 Reserved (set to 0)
     * @param5 Reserved (set to 0)
     * @param6 Reserved (set to 0)
     * @param7 Reserved (set to 0)
     */
    'LOGGING_STOP' = 2511,
    /**
     * @param1 Landing Gear ID (min: -1, increment: 1) Landing gear ID (default: 0, -1 for all)
     * @param2 Landing Gear Position Landing gear position (Down: 0, Up: 1, NaN for no change)
     */
    'AIRFRAME_CONFIGURATION' = 2520,
    /**
     * Request to start/stop transmitting over the high latency telemetry
     * @param1 Enable (min: 0, max: 1, increment: 1) Control transmission over high latency telemetry (0: stop, 1: start)
     * @param2 Empty
     * @param3 Empty
     * @param4 Empty
     * @param5 Empty
     * @param6 Empty
     * @param7 Empty
     */
    'CONTROL_HIGH_LATENCY' = 2600,
    /**
     * Create a panorama at the current position
     * @param1 Horizontal Angle[deg] Viewing angle horizontal of the panorama (+- 0.5 the total angle)
     * @param2 Vertical Angle[deg] Viewing angle vertical of panorama.
     * @param3 Horizontal Speed[deg/s] Speed of the horizontal rotation.
     * @param4 Vertical Speed[deg/s] Speed of the vertical rotation.
     */
    'PANORAMA_CREATE' = 2800,
    /**
     * Request VTOL transition
     * @param1 State The target VTOL state. Only MAV_VTOL_STATE_MC and MAV_VTOL_STATE_FW can be used.
     */
    'DO_VTOL_TRANSITION' = 3000,
    /**
     * Request authorization to arm the vehicle to a external entity, the arm authorizer is responsible to
     * request all data that is needs from the vehicle before authorize or deny the request. If approved
     * the progress of command_ack message should be set with period of time that this authorization is
     * valid in seconds or in case it was denied it should be set with one of the reasons in
     * ARM_AUTH_DENIED_REASON.
     * @param1 System ID (min: 0, max: 255, increment: 1) Vehicle system id, this way ground station can request arm authorization on behalf of any vehicle
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
     *
     * @note has location
     *
     * @param1 Radius[m] Radius of desired circle in CIRCLE_MODE
     * @param2 User defined
     * @param3 User defined
     * @param4 User defined
     * @param5 Latitude Target latitude of center of circle in CIRCLE_MODE
     * @param6 Longitude Target longitude of center of circle in CIRCLE_MODE
     */
    'SET_GUIDED_SUBMODE_CIRCLE' = 4001,
    /**
     * Fence return point (there can only be one such point in a geofence definition). If rally points are
     * supported they should be used instead.
     *
     * @note has location and is destination
     *
     * @param1 Reserved
     * @param2 Reserved
     * @param3 Reserved
     * @param4 Reserved
     * @param5 Latitude Latitude
     * @param6 Longitude Longitude
     * @param7 Altitude[m] Altitude
     */
    'NAV_FENCE_RETURN_POINT' = 5000,
    /**
     * Fence vertex for an inclusion polygon (the polygon must not be self-intersecting). The vehicle must
     * stay within this area. Minimum of 3 vertices required.
     *
     * @note has location
     *
     * @param1 Vertex Count (min: 3, increment: 1) Polygon vertex count
     * @param2 Inclusion Group (min: 0, increment: 1) Vehicle must be inside ALL inclusion zones in a single group, vehicle must be inside at least one group, must be the same for all points in each polygon
     * @param3 Reserved
     * @param4 Reserved
     * @param5 Latitude Latitude
     * @param6 Longitude Longitude
     * @param7 Reserved
     */
    'NAV_FENCE_POLYGON_VERTEX_INCLUSION' = 5001,
    /**
     * Fence vertex for an exclusion polygon (the polygon must not be self-intersecting). The vehicle must
     * stay outside this area. Minimum of 3 vertices required.
     *
     * @note has location
     *
     * @param1 Vertex Count (min: 3, increment: 1) Polygon vertex count
     * @param2 Reserved
     * @param3 Reserved
     * @param4 Reserved
     * @param5 Latitude Latitude
     * @param6 Longitude Longitude
     * @param7 Reserved
     */
    'NAV_FENCE_POLYGON_VERTEX_EXCLUSION' = 5002,
    /**
     * Circular fence area. The vehicle must stay inside this area.
     *
     * @note has location
     *
     * @param1 Radius[m] Radius.
     * @param2 Inclusion Group (min: 0, increment: 1) Vehicle must be inside ALL inclusion zones in a single group, vehicle must be inside at least one group
     * @param3 Reserved
     * @param4 Reserved
     * @param5 Latitude Latitude
     * @param6 Longitude Longitude
     * @param7 Reserved
     */
    'NAV_FENCE_CIRCLE_INCLUSION' = 5003,
    /**
     * Circular fence area. The vehicle must stay outside this area.
     *
     * @note has location
     *
     * @param1 Radius[m] Radius.
     * @param2 Reserved
     * @param3 Reserved
     * @param4 Reserved
     * @param5 Latitude Latitude
     * @param6 Longitude Longitude
     * @param7 Reserved
     */
    'NAV_FENCE_CIRCLE_EXCLUSION' = 5004,
    /**
     * Rally point. You can have multiple rally points defined.
     *
     * @note has location
     *
     * @param1 Reserved
     * @param2 Reserved
     * @param3 Reserved
     * @param4 Reserved
     * @param5 Latitude Latitude
     * @param6 Longitude Longitude
     * @param7 Altitude[m] Altitude
     */
    'NAV_RALLY_POINT' = 5100,
    /**
     * Swarm vertex for an inclusion polygon
     *
     * @note has location
     *
     * @param1 Reserved
     * @param2 Reserved
     * @param3 Reserved
     * @param4 Reserved
     * @param5 Latitude Latitude
     * @param6 Longitude Longitude
     * @param74 Reserved
     */
    'NAV_SWARM_ROI_POLYGON_VERTEX_INCLUSION' = 5109,
    /**
     * Commands the vehicle to respond with a sequence of messages UAVCAN_NODE_INFO, one message per every
     * UAVCAN node that is online. Note that some of the response messages can be lost, which the receiver
     * can detect easily by checking whether every received UAVCAN_NODE_STATUS has a matching message
     * UAVCAN_NODE_INFO received earlier; if not, this command should be sent again in order to request
     * re-transmission of the node information messages.
     * @param1 Reserved (set to 0)
     * @param2 Reserved (set to 0)
     * @param3 Reserved (set to 0)
     * @param4 Reserved (set to 0)
     * @param5 Reserved (set to 0)
     * @param6 Reserved (set to 0)
     * @param7 Reserved (set to 0)
     */
    'UAVCAN_GET_NODE_INFO' = 5200,
    /**
     * Change state of safety switch.
     * @param1 Desired State New safety switch state.
     * @param2 Empty.
     * @param3 Empty.
     * @param4 Empty
     * @param5 Empty.
     * @param6 Empty.
     * @param7 Empty.
     */
    'DO_SET_SAFETY_SWITCH_STATE' = 5300,
    /**
     * Trigger the start of an ADSB-out IDENT. This should only be used when requested to do so by an Air
     * Traffic Controller in controlled airspace. This starts the IDENT which is then typically held for 18
     * seconds by the hardware per the Mode A, C, and S transponder spec.
     * @param1 Reserved (set to 0)
     * @param2 Reserved (set to 0)
     * @param3 Reserved (set to 0)
     * @param4 Reserved (set to 0)
     * @param5 Reserved (set to 0)
     * @param6 Reserved (set to 0)
     * @param7 Reserved (set to 0)
     */
    'DO_ADSB_OUT_IDENT' = 10001,
    /**
     * Deploy payload on a Lat / Lon / Alt position. This includes the navigation to reach the required
     * release position and velocity.
     *
     * @note has location and is destination
     *
     * @param1 Operation Mode (min: 0, max: 2, increment: 1) Operation mode. 0: prepare single payload deploy (overwriting previous requests), but do not execute it. 1: execute payload deploy immediately (rejecting further deploy commands during execution, but allowing abort). 2: add payload deploy to existing deployment list.
     * @param2 Approach Vector[deg] (min: -1, max: 360) Desired approach vector in compass heading. A negative value indicates the system can define the approach vector at will.
     * @param3 Ground Speed (min: -1) Desired ground speed at release time. This can be overridden by the airframe in case it needs to meet minimum airspeed. A negative value indicates the system can define the ground speed at will.
     * @param4 Altitude Clearance[m] (min: -1) Minimum altitude clearance to the release position. A negative value indicates the system can define the clearance at will.
     * @param5 Latitude[degE7] Latitude. Note, if used in MISSION_ITEM (deprecated) the units are degrees (unscaled)
     * @param6 Longitude[degE7] Longitude. Note, if used in MISSION_ITEM (deprecated) the units are degrees (unscaled)
     * @param7 Altitude[m] Altitude (MSL)
     */
    'PAYLOAD_PREPARE_DEPLOY' = 30001,
    /**
     * Control the payload deployment.
     * @param1 Operation Mode (min: 0, max: 101, increment: 1) Operation mode. 0: Abort deployment, continue normal mission. 1: switch to payload deployment mode. 100: delete first payload deployment request. 101: delete all payload deployment requests.
     * @param2 Reserved
     * @param3 Reserved
     * @param4 Reserved
     * @param5 Reserved
     * @param6 Reserved
     * @param7 Reserved
     */
    'PAYLOAD_CONTROL_DEPLOY' = 30002,
    /**
     * Magnetometer calibration based on provided known yaw. This allows for fast calibration using WMM
     * field tables in the vehicle, given only the known yaw of the vehicle. If Latitude and longitude are
     * both zero then use the current vehicle location.
     *
     * @note has location
     *
     * @param1 Yaw[deg] Yaw of vehicle in earth frame.
     * @param2 CompassMask CompassMask, 0 for all.
     * @param3 Latitude[deg] Latitude.
     * @param4 Longitude[deg] Longitude.
     * @param5 Empty.
     * @param6 Empty.
     * @param7 Empty.
     */
    'FIXED_MAG_CAL_YAW' = 42006,
    /**
     * Command to operate winch.
     * @param1 Instance (min: 1, increment: 1) Winch instance number.
     * @param2 Action Action to perform.
     * @param3 Length[m] Length of cable to release (negative to wind).
     * @param4 Rate[m/s] Release rate (negative to wind).
     * @param5 Empty.
     * @param6 Empty.
     * @param7 Empty.
     */
    'DO_WINCH' = 42600,
    /**
     * User defined waypoint item. Ground Station will show the Vehicle as flying through this item.
     *
     * @note has location and is destination
     *
     * @param1 User defined
     * @param2 User defined
     * @param3 User defined
     * @param4 User defined
     * @param5 Latitude Latitude unscaled
     * @param6 Longitude Longitude unscaled
     * @param7 Altitude[m] Altitude (MSL)
     */
    'WAYPOINT_USER_1' = 31000,
    /**
     * User defined waypoint item. Ground Station will show the Vehicle as flying through this item.
     *
     * @note has location and is destination
     *
     * @param1 User defined
     * @param2 User defined
     * @param3 User defined
     * @param4 User defined
     * @param5 Latitude Latitude unscaled
     * @param6 Longitude Longitude unscaled
     * @param7 Altitude[m] Altitude (MSL)
     */
    'WAYPOINT_USER_2' = 31001,
    /**
     * User defined waypoint item. Ground Station will show the Vehicle as flying through this item.
     *
     * @note has location and is destination
     *
     * @param1 User defined
     * @param2 User defined
     * @param3 User defined
     * @param4 User defined
     * @param5 Latitude Latitude unscaled
     * @param6 Longitude Longitude unscaled
     * @param7 Altitude[m] Altitude (MSL)
     */
    'WAYPOINT_USER_3' = 31002,
    /**
     * User defined waypoint item. Ground Station will show the Vehicle as flying through this item.
     *
     * @note has location and is destination
     *
     * @param1 User defined
     * @param2 User defined
     * @param3 User defined
     * @param4 User defined
     * @param5 Latitude Latitude unscaled
     * @param6 Longitude Longitude unscaled
     * @param7 Altitude[m] Altitude (MSL)
     */
    'WAYPOINT_USER_4' = 31003,
    /**
     * User defined waypoint item. Ground Station will show the Vehicle as flying through this item.
     *
     * @note has location and is destination
     *
     * @param1 User defined
     * @param2 User defined
     * @param3 User defined
     * @param4 User defined
     * @param5 Latitude Latitude unscaled
     * @param6 Longitude Longitude unscaled
     * @param7 Altitude[m] Altitude (MSL)
     */
    'WAYPOINT_USER_5' = 31004,
    /**
     * User defined spatial item. Ground Station will not show the Vehicle as flying through this item.
     * Example: ROI item.
     *
     * @note has location
     *
     * @param1 User defined
     * @param2 User defined
     * @param3 User defined
     * @param4 User defined
     * @param5 Latitude Latitude unscaled
     * @param6 Longitude Longitude unscaled
     * @param7 Altitude[m] Altitude (MSL)
     */
    'SPATIAL_USER_1' = 31005,
    /**
     * User defined spatial item. Ground Station will not show the Vehicle as flying through this item.
     * Example: ROI item.
     *
     * @note has location
     *
     * @param1 User defined
     * @param2 User defined
     * @param3 User defined
     * @param4 User defined
     * @param5 Latitude Latitude unscaled
     * @param6 Longitude Longitude unscaled
     * @param7 Altitude[m] Altitude (MSL)
     */
    'SPATIAL_USER_2' = 31006,
    /**
     * User defined spatial item. Ground Station will not show the Vehicle as flying through this item.
     * Example: ROI item.
     *
     * @note has location
     *
     * @param1 User defined
     * @param2 User defined
     * @param3 User defined
     * @param4 User defined
     * @param5 Latitude Latitude unscaled
     * @param6 Longitude Longitude unscaled
     * @param7 Altitude[m] Altitude (MSL)
     */
    'SPATIAL_USER_3' = 31007,
    /**
     * User defined spatial item. Ground Station will not show the Vehicle as flying through this item.
     * Example: ROI item.
     *
     * @note has location
     *
     * @param1 User defined
     * @param2 User defined
     * @param3 User defined
     * @param4 User defined
     * @param5 Latitude Latitude unscaled
     * @param6 Longitude Longitude unscaled
     * @param7 Altitude[m] Altitude (MSL)
     */
    'SPATIAL_USER_4' = 31008,
    /**
     * User defined spatial item. Ground Station will not show the Vehicle as flying through this item.
     * Example: ROI item.
     *
     * @note has location
     *
     * @param1 User defined
     * @param2 User defined
     * @param3 User defined
     * @param4 User defined
     * @param5 Latitude Latitude unscaled
     * @param6 Longitude Longitude unscaled
     * @param7 Altitude[m] Altitude (MSL)
     */
    'SPATIAL_USER_5' = 31009,
    /**
     * User defined command. Ground Station will not show the Vehicle as flying through this item. Example:
     * MAV_CMD_DO_SET_PARAMETER item.
     * @param1 User defined
     * @param2 User defined
     * @param3 User defined
     * @param4 User defined
     * @param5 User defined
     * @param6 User defined
     * @param7 User defined
     */
    'USER_1' = 31010,
    /**
     * User defined command. Ground Station will not show the Vehicle as flying through this item. Example:
     * MAV_CMD_DO_SET_PARAMETER item.
     * @param1 User defined
     * @param2 User defined
     * @param3 User defined
     * @param4 User defined
     * @param5 User defined
     * @param6 User defined
     * @param7 User defined
     */
    'USER_2' = 31011,
    /**
     * User defined command. Ground Station will not show the Vehicle as flying through this item. Example:
     * MAV_CMD_DO_SET_PARAMETER item.
     * @param1 User defined
     * @param2 User defined
     * @param3 User defined
     * @param4 User defined
     * @param5 User defined
     * @param6 User defined
     * @param7 User defined
     */
    'USER_3' = 31012,
    /**
     * User defined command. Ground Station will not show the Vehicle as flying through this item. Example:
     * MAV_CMD_DO_SET_PARAMETER item.
     * @param1 User defined
     * @param2 User defined
     * @param3 User defined
     * @param4 User defined
     * @param5 User defined
     * @param6 User defined
     * @param7 User defined
     */
    'USER_4' = 31013,
    /**
     * User defined command. Ground Station will not show the Vehicle as flying through this item. Example:
     * MAV_CMD_DO_SET_PARAMETER item.
     * @param1 User defined
     * @param2 User defined
     * @param3 User defined
     * @param4 User defined
     * @param5 User defined
     * @param6 User defined
     * @param7 User defined
     */
    'USER_5' = 31014,
    /**
     * Request forwarding of CAN packets from the given CAN bus to this interface. CAN Frames are sent
     * using CAN_FRAME and CANFD_FRAME messages
     * @param1 bus Bus number (0 to disable forwarding, 1 for first bus, 2 for 2nd bus, 3 for 3rd bus).
     * @param2 Empty.
     * @param3 Empty.
     * @param4 Empty.
     * @param5 Empty.
     * @param6 Empty.
     * @param7 Empty.
     */
    'CAN_FORWARD' = 32000
}
/**
 * A data stream is not a fixed set of messages, but rather a recommendation to the autopilot software.
 * Individual autopilots may or may not obey the recommended messages.
 */
export declare enum MavDataStream {
    /**
     * Enable all data streams
     */
    'ALL' = 0,
    /**
     * Enable IMU_RAW, GPS_RAW, GPS_STATUS packets.
     */
    'RAW_SENSORS' = 1,
    /**
     * Enable GPS_STATUS, CONTROL_STATUS, AUX_STATUS
     */
    'EXTENDED_STATUS' = 2,
    /**
     * Enable RC_CHANNELS_SCALED, RC_CHANNELS_RAW, SERVO_OUTPUT_RAW
     */
    'RC_CHANNELS' = 3,
    /**
     * Enable ATTITUDE_CONTROLLER_OUTPUT, POSITION_CONTROLLER_OUTPUT, NAV_CONTROLLER_OUTPUT.
     */
    'RAW_CONTROLLER' = 4,
    /**
     * Enable LOCAL_POSITION, GLOBAL_POSITION/GLOBAL_POSITION_INT messages.
     */
    'POSITION' = 6,
    /**
     * Dependent on the autopilot
     */
    'EXTRA1' = 10,
    /**
     * Dependent on the autopilot
     */
    'EXTRA2' = 11,
    /**
     * Dependent on the autopilot
     */
    'EXTRA3' = 12
}
/**
 * The ROI (region of interest) for the vehicle. This can be be used by the vehicle for camera/vehicle
 * attitude alignment (see MAV_CMD_NAV_ROI).
 */
export declare enum MavRoi {
    /**
     * No region of interest.
     */
    'NONE' = 0,
    /**
     * Point toward next waypoint, with optional pitch/roll/yaw offset.
     */
    'WPNEXT' = 1,
    /**
     * Point toward given waypoint.
     */
    'WPINDEX' = 2,
    /**
     * Point toward fixed location.
     */
    'LOCATION' = 3,
    /**
     * Point toward of given id.
     */
    'TARGET' = 4
}
/**
 * Specifies the datatype of a MAVLink parameter.
 */
export declare enum MavParamType {
    /**
     * 8-bit unsigned integer
     */
    'UINT8' = 1,
    /**
     * 8-bit signed integer
     */
    'INT8' = 2,
    /**
     * 16-bit unsigned integer
     */
    'UINT16' = 3,
    /**
     * 16-bit signed integer
     */
    'INT16' = 4,
    /**
     * 32-bit unsigned integer
     */
    'UINT32' = 5,
    /**
     * 32-bit signed integer
     */
    'INT32' = 6,
    /**
     * 64-bit unsigned integer
     */
    'UINT64' = 7,
    /**
     * 64-bit signed integer
     */
    'INT64' = 8,
    /**
     * 32-bit floating-point
     */
    'REAL32' = 9,
    /**
     * 64-bit floating-point
     */
    'REAL64' = 10
}
/**
 * Specifies the datatype of a MAVLink extended parameter.
 */
export declare enum MavParamExtType {
    /**
     * 8-bit unsigned integer
     */
    'UINT8' = 1,
    /**
     * 8-bit signed integer
     */
    'INT8' = 2,
    /**
     * 16-bit unsigned integer
     */
    'UINT16' = 3,
    /**
     * 16-bit signed integer
     */
    'INT16' = 4,
    /**
     * 32-bit unsigned integer
     */
    'UINT32' = 5,
    /**
     * 32-bit signed integer
     */
    'INT32' = 6,
    /**
     * 64-bit unsigned integer
     */
    'UINT64' = 7,
    /**
     * 64-bit signed integer
     */
    'INT64' = 8,
    /**
     * 32-bit floating-point
     */
    'REAL32' = 9,
    /**
     * 64-bit floating-point
     */
    'REAL64' = 10,
    /**
     * Custom Type
     */
    'CUSTOM' = 11
}
/**
 * Result from a MAVLink command (MAV_CMD)
 */
export declare enum MavResult {
    /**
     * Command is valid (is supported and has valid parameters), and was executed.
     */
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
    /**
     * Command is not supported (unknown).
     */
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
    'IN_PROGRESS' = 5,
    /**
     * Command is only accepted when sent as a COMMAND_LONG.
     */
    'COMMAND_LONG_ONLY' = 7,
    /**
     * Command is only accepted when sent as a COMMAND_INT.
     */
    'COMMAND_INT_ONLY' = 8
}
/**
 * Result of mission operation (in a MISSION_ACK message).
 */
export declare enum MavMissionResult {
    /**
     * mission accepted OK
     */
    'ACCEPTED' = 0,
    /**
     * Generic error / not accepting mission commands at all right now.
     */
    'ERROR' = 1,
    /**
     * Coordinate frame is not supported.
     */
    'UNSUPPORTED_FRAME' = 2,
    /**
     * Command is not supported.
     */
    'UNSUPPORTED' = 3,
    /**
     * Mission items exceed storage space.
     */
    'NO_SPACE' = 4,
    /**
     * One of the parameters has an invalid value.
     */
    'INVALID' = 5,
    /**
     * param1 has an invalid value.
     */
    'INVALID_PARAM1' = 6,
    /**
     * param2 has an invalid value.
     */
    'INVALID_PARAM2' = 7,
    /**
     * param3 has an invalid value.
     */
    'INVALID_PARAM3' = 8,
    /**
     * param4 has an invalid value.
     */
    'INVALID_PARAM4' = 9,
    /**
     * x / param5 has an invalid value.
     */
    'INVALID_PARAM5_X' = 10,
    /**
     * y / param6 has an invalid value.
     */
    'INVALID_PARAM6_Y' = 11,
    /**
     * z / param7 has an invalid value.
     */
    'INVALID_PARAM7' = 12,
    /**
     * Mission item received out of sequence
     */
    'INVALID_SEQUENCE' = 13,
    /**
     * Not accepting any mission commands from this communication partner.
     */
    'DENIED' = 14,
    /**
     * Current mission operation cancelled (e.g. mission upload, mission download).
     */
    'OPERATION_CANCELLED' = 15
}
/**
 * Indicates the severity level, generally used for status messages to indicate their relative urgency.
 * Based on RFC-5424 using expanded definitions at:
 * http://www.kiwisyslog.com/kb/info:-syslog-message-levels/.
 */
export declare enum MavSeverity {
    /**
     * System is unusable. This is a "panic" condition.
     */
    'EMERGENCY' = 0,
    /**
     * Action should be taken immediately. Indicates error in non-critical systems.
     */
    'ALERT' = 1,
    /**
     * Action must be taken immediately. Indicates failure in a primary system.
     */
    'CRITICAL' = 2,
    /**
     * Indicates an error in secondary/redundant systems.
     */
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
    /**
     * Normal operational messages. Useful for logging. No action is required for these messages.
     */
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
    /**
     * main brick power supply valid
     */
    'BRICK_VALID' = 1,
    /**
     * main servo power supply valid for FMU
     */
    'SERVO_VALID' = 2,
    /**
     * USB power is connected
     */
    'USB_CONNECTED' = 4,
    /**
     * peripheral supply is in over-current state
     */
    'PERIPH_OVERCURRENT' = 8,
    /**
     * hi-power peripheral supply is in over-current state
     */
    'PERIPH_HIPOWER_OVERCURRENT' = 16,
    /**
     * Power status has changed since boot
     */
    'CHANGED' = 32
}
/**
 * SERIAL_CONTROL device types
 */
export declare enum SerialControlDev {
    /**
     * First telemetry port
     */
    'DEV_TELEM1' = 0,
    /**
     * Second telemetry port
     */
    'DEV_TELEM2' = 1,
    /**
     * First GPS port
     */
    'DEV_GPS1' = 2,
    /**
     * Second GPS port
     */
    'DEV_GPS2' = 3,
    /**
     * system shell
     */
    'DEV_SHELL' = 10,
    /**
     * SERIAL0
     */
    'SERIAL0' = 100,
    /**
     * SERIAL1
     */
    'SERIAL1' = 101,
    /**
     * SERIAL2
     */
    'SERIAL2' = 102,
    /**
     * SERIAL3
     */
    'SERIAL3' = 103,
    /**
     * SERIAL4
     */
    'SERIAL4' = 104,
    /**
     * SERIAL5
     */
    'SERIAL5' = 105,
    /**
     * SERIAL6
     */
    'SERIAL6' = 106,
    /**
     * SERIAL7
     */
    'SERIAL7' = 107,
    /**
     * SERIAL8
     */
    'SERIAL8' = 108,
    /**
     * SERIAL9
     */
    'SERIAL9' = 109
}
/**
 * SERIAL_CONTROL flags (bitmask)
 */
export declare enum SerialControlFlag {
    /**
     * Set if this is a reply
     */
    'REPLY' = 1,
    /**
     * Set if the sender wants the receiver to send a response as another SERIAL_CONTROL message
     */
    'RESPOND' = 2,
    /**
     * Set if access to the serial port should be removed from whatever driver is currently using it,
     * giving exclusive access to the SERIAL_CONTROL protocol. The port can be handed back by sending a
     * request without this flag set
     */
    'EXCLUSIVE' = 4,
    /**
     * Block on writes to the serial port
     */
    'BLOCKING' = 8,
    /**
     * Send multiple replies until port is drained
     */
    'MULTI' = 16
}
/**
 * Enumeration of distance sensor types
 */
export declare enum MavDistanceSensor {
    /**
     * Laser rangefinder, e.g. LightWare SF02/F or PulsedLight units
     */
    'LASER' = 0,
    /**
     * Ultrasound rangefinder, e.g. MaxBotix units
     */
    'ULTRASOUND' = 1,
    /**
     * Infrared rangefinder, e.g. Sharp units
     */
    'INFRARED' = 2,
    /**
     * Radar type, e.g. uLanding units
     */
    'RADAR' = 3,
    /**
     * Broken or unknown type, e.g. analog units
     */
    'UNKNOWN' = 4
}
/**
 * Enumeration of sensor orientation, according to its rotations
 */
export declare enum MavSensorOrientation {
    /**
     * Roll: 0, Pitch: 0, Yaw: 0
     */
    'NONE' = 0,
    /**
     * Roll: 0, Pitch: 0, Yaw: 45
     */
    'YAW_45' = 1,
    /**
     * Roll: 0, Pitch: 0, Yaw: 90
     */
    'YAW_90' = 2,
    /**
     * Roll: 0, Pitch: 0, Yaw: 135
     */
    'YAW_135' = 3,
    /**
     * Roll: 0, Pitch: 0, Yaw: 180
     */
    'YAW_180' = 4,
    /**
     * Roll: 0, Pitch: 0, Yaw: 225
     */
    'YAW_225' = 5,
    /**
     * Roll: 0, Pitch: 0, Yaw: 270
     */
    'YAW_270' = 6,
    /**
     * Roll: 0, Pitch: 0, Yaw: 315
     */
    'YAW_315' = 7,
    /**
     * Roll: 180, Pitch: 0, Yaw: 0
     */
    'ROLL_180' = 8,
    /**
     * Roll: 180, Pitch: 0, Yaw: 45
     */
    'ROLL_180_YAW_45' = 9,
    /**
     * Roll: 180, Pitch: 0, Yaw: 90
     */
    'ROLL_180_YAW_90' = 10,
    /**
     * Roll: 180, Pitch: 0, Yaw: 135
     */
    'ROLL_180_YAW_135' = 11,
    /**
     * Roll: 0, Pitch: 180, Yaw: 0
     */
    'PITCH_180' = 12,
    /**
     * Roll: 180, Pitch: 0, Yaw: 225
     */
    'ROLL_180_YAW_225' = 13,
    /**
     * Roll: 180, Pitch: 0, Yaw: 270
     */
    'ROLL_180_YAW_270' = 14,
    /**
     * Roll: 180, Pitch: 0, Yaw: 315
     */
    'ROLL_180_YAW_315' = 15,
    /**
     * Roll: 90, Pitch: 0, Yaw: 0
     */
    'ROLL_90' = 16,
    /**
     * Roll: 90, Pitch: 0, Yaw: 45
     */
    'ROLL_90_YAW_45' = 17,
    /**
     * Roll: 90, Pitch: 0, Yaw: 90
     */
    'ROLL_90_YAW_90' = 18,
    /**
     * Roll: 90, Pitch: 0, Yaw: 135
     */
    'ROLL_90_YAW_135' = 19,
    /**
     * Roll: 270, Pitch: 0, Yaw: 0
     */
    'ROLL_270' = 20,
    /**
     * Roll: 270, Pitch: 0, Yaw: 45
     */
    'ROLL_270_YAW_45' = 21,
    /**
     * Roll: 270, Pitch: 0, Yaw: 90
     */
    'ROLL_270_YAW_90' = 22,
    /**
     * Roll: 270, Pitch: 0, Yaw: 135
     */
    'ROLL_270_YAW_135' = 23,
    /**
     * Roll: 0, Pitch: 90, Yaw: 0
     */
    'PITCH_90' = 24,
    /**
     * Roll: 0, Pitch: 270, Yaw: 0
     */
    'PITCH_270' = 25,
    /**
     * Roll: 0, Pitch: 180, Yaw: 90
     */
    'PITCH_180_YAW_90' = 26,
    /**
     * Roll: 0, Pitch: 180, Yaw: 270
     */
    'PITCH_180_YAW_270' = 27,
    /**
     * Roll: 90, Pitch: 90, Yaw: 0
     */
    'ROLL_90_PITCH_90' = 28,
    /**
     * Roll: 180, Pitch: 90, Yaw: 0
     */
    'ROLL_180_PITCH_90' = 29,
    /**
     * Roll: 270, Pitch: 90, Yaw: 0
     */
    'ROLL_270_PITCH_90' = 30,
    /**
     * Roll: 90, Pitch: 180, Yaw: 0
     */
    'ROLL_90_PITCH_180' = 31,
    /**
     * Roll: 270, Pitch: 180, Yaw: 0
     */
    'ROLL_270_PITCH_180' = 32,
    /**
     * Roll: 90, Pitch: 270, Yaw: 0
     */
    'ROLL_90_PITCH_270' = 33,
    /**
     * Roll: 180, Pitch: 270, Yaw: 0
     */
    'ROLL_180_PITCH_270' = 34,
    /**
     * Roll: 270, Pitch: 270, Yaw: 0
     */
    'ROLL_270_PITCH_270' = 35,
    /**
     * Roll: 90, Pitch: 180, Yaw: 90
     */
    'ROLL_90_PITCH_180_YAW_90' = 36,
    /**
     * Roll: 90, Pitch: 0, Yaw: 270
     */
    'ROLL_90_YAW_270' = 37,
    /**
     * Roll: 90, Pitch: 68, Yaw: 293
     */
    'ROLL_90_PITCH_68_YAW_293' = 38,
    /**
     * Pitch: 315
     */
    'PITCH_315' = 39,
    /**
     * Roll: 90, Pitch: 315
     */
    'ROLL_90_PITCH_315' = 40,
    /**
     * Custom orientation
     */
    'CUSTOM' = 100
}
/**
 * Bitmask of (optional) autopilot capabilities (64 bit). If a bit is set, the autopilot supports this
 * capability.
 */
export declare enum MavProtocolCapability {
    /**
     * Autopilot supports MISSION float message type.
     */
    'MISSION_FLOAT' = 1,
    /**
     * Autopilot supports the new param float message type.
     */
    'PARAM_FLOAT' = 2,
    /**
     * Autopilot supports MISSION_ITEM_INT scaled integer message type.
     */
    'MISSION_INT' = 4,
    /**
     * Autopilot supports COMMAND_INT scaled integer message type.
     */
    'COMMAND_INT' = 8,
    /**
     * Autopilot supports the new param union message type.
     */
    'PARAM_UNION' = 16,
    /**
     * Autopilot supports the File Transfer Protocol v1: https://mavlink.io/en/services/ftp.html.
     */
    'FTP' = 32,
    /**
     * Autopilot supports commanding attitude offboard.
     */
    'SET_ATTITUDE_TARGET' = 64,
    /**
     * Autopilot supports commanding position and velocity targets in local NED frame.
     */
    'SET_POSITION_TARGET_LOCAL_NED' = 128,
    /**
     * Autopilot supports commanding position and velocity targets in global scaled integers.
     */
    'SET_POSITION_TARGET_GLOBAL_INT' = 256,
    /**
     * Autopilot supports terrain protocol / data handling.
     */
    'TERRAIN' = 512,
    /**
     * Autopilot supports direct actuator control.
     */
    'SET_ACTUATOR_TARGET' = 1024,
    /**
     * Autopilot supports the MAV_CMD_DO_FLIGHTTERMINATION command (flight termination).
     */
    'FLIGHT_TERMINATION' = 2048,
    /**
     * Autopilot supports onboard compass calibration.
     */
    'COMPASS_CALIBRATION' = 4096,
    /**
     * Autopilot supports MAVLink version 2.
     */
    'MAVLINK2' = 8192,
    /**
     * Autopilot supports mission fence protocol.
     */
    'MISSION_FENCE' = 16384,
    /**
     * Autopilot supports mission rally point protocol.
     */
    'MISSION_RALLY' = 32768,
    /**
     * Autopilot supports the flight information protocol.
     */
    'FLIGHT_INFORMATION' = 65536
}
/**
 * Type of mission items being requested/sent in mission protocol.
 */
export declare enum MavMissionType {
    /**
     * Items are mission commands for main mission.
     */
    'MISSION' = 0,
    /**
     * Specifies GeoFence area(s). Items are MAV_CMD_NAV_FENCE_ GeoFence items.
     */
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
    /**
     * Only used in MISSION_CLEAR_ALL to clear all mission types.
     */
    'ALL' = 255
}
/**
 * Enumeration of estimator types
 */
export declare enum MavEstimatorType {
    /**
     * Unknown type of the estimator.
     */
    'UNKNOWN' = 0,
    /**
     * This is a naive estimator without any real covariance feedback.
     */
    'NAIVE' = 1,
    /**
     * Computer vision based estimate. Might be up to scale.
     */
    'VISION' = 2,
    /**
     * Visual-inertial estimate.
     */
    'VIO' = 3,
    /**
     * Plain GPS estimate.
     */
    'GPS' = 4,
    /**
     * Estimator integrating GPS and inertial sensing.
     */
    'GPS_INS' = 5,
    /**
     * Estimate from external motion capturing system.
     */
    'MOCAP' = 6,
    /**
     * Estimator based on lidar sensor input.
     */
    'LIDAR' = 7,
    /**
     * Estimator on autopilot.
     */
    'AUTOPILOT' = 8
}
/**
 * Enumeration of battery types
 */
export declare enum MavBatteryType {
    /**
     * Not specified.
     */
    'UNKNOWN' = 0,
    /**
     * Lithium polymer battery
     */
    'LIPO' = 1,
    /**
     * Lithium-iron-phosphate battery
     */
    'LIFE' = 2,
    /**
     * Lithium-ION battery
     */
    'LION' = 3,
    /**
     * Nickel metal hydride battery
     */
    'NIMH' = 4
}
/**
 * Enumeration of battery functions
 */
export declare enum MavBatteryFunction {
    /**
     * Battery function is unknown
     */
    'FUNCTION_UNKNOWN' = 0,
    /**
     * Battery supports all flight systems
     */
    'FUNCTION_ALL' = 1,
    /**
     * Battery for the propulsion system
     */
    'FUNCTION_PROPULSION' = 2,
    /**
     * Avionics battery
     */
    'FUNCTION_AVIONICS' = 3,
    /**
     * Payload battery
     */
    'TYPE_PAYLOAD' = 4
}
/**
 * Enumeration for battery charge states.
 */
export declare enum MavBatteryChargeState {
    /**
     * Low battery state is not provided
     */
    'UNDEFINED' = 0,
    /**
     * Battery is not in low state. Normal operation.
     */
    'OK' = 1,
    /**
     * Battery state is low, warn and monitor close.
     */
    'LOW' = 2,
    /**
     * Battery state is critical, return or abort immediately.
     */
    'CRITICAL' = 3,
    /**
     * Battery state is too low for ordinary abort sequence. Perform fastest possible emergency stop to
     * prevent damage.
     */
    'EMERGENCY' = 4,
    /**
     * Battery failed, damage unavoidable. Possible causes (faults) are listed in MAV_BATTERY_FAULT.
     */
    'FAILED' = 5,
    /**
     * Battery is diagnosed to be defective or an error occurred, usage is discouraged / prohibited.
     * Possible causes (faults) are listed in MAV_BATTERY_FAULT.
     */
    'UNHEALTHY' = 6,
    /**
     * Battery is charging.
     */
    'CHARGING' = 7
}
/**
 * Flags to report status/failure cases for a power generator (used in GENERATOR_STATUS). Note that
 * FAULTS are conditions that cause the generator to fail. Warnings are conditions that require
 * attention before the next use (they indicate the system is not operating properly).
 */
export declare enum MavGeneratorStatusFlag {
    /**
     * Generator is off.
     */
    'OFF' = 1,
    /**
     * Generator is ready to start generating power.
     */
    'READY' = 2,
    /**
     * Generator is generating power.
     */
    'GENERATING' = 4,
    /**
     * Generator is charging the batteries (generating enough power to charge and provide the load).
     */
    'CHARGING' = 8,
    /**
     * Generator is operating at a reduced maximum power.
     */
    'REDUCED_POWER' = 16,
    /**
     * Generator is providing the maximum output.
     */
    'MAXPOWER' = 32,
    /**
     * Generator is near the maximum operating temperature, cooling is insufficient.
     */
    'OVERTEMP_WARNING' = 64,
    /**
     * Generator hit the maximum operating temperature and shutdown.
     */
    'OVERTEMP_FAULT' = 128,
    /**
     * Power electronics are near the maximum operating temperature, cooling is insufficient.
     */
    'ELECTRONICS_OVERTEMP_WARNING' = 256,
    /**
     * Power electronics hit the maximum operating temperature and shutdown.
     */
    'ELECTRONICS_OVERTEMP_FAULT' = 512,
    /**
     * Power electronics experienced a fault and shutdown.
     */
    'ELECTRONICS_FAULT' = 1024,
    /**
     * The power source supplying the generator failed e.g. mechanical generator stopped, tether is no
     * longer providing power, solar cell is in shade, hydrogen reaction no longer happening.
     */
    'POWERSOURCE_FAULT' = 2048,
    /**
     * Generator controller having communication problems.
     */
    'COMMUNICATION_WARNING' = 4096,
    /**
     * Power electronic or generator cooling system error.
     */
    'COOLING_WARNING' = 8192,
    /**
     * Generator controller power rail experienced a fault.
     */
    'POWER_RAIL_FAULT' = 16384,
    /**
     * Generator controller exceeded the overcurrent threshold and shutdown to prevent damage.
     */
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
    /**
     * Batteries are under voltage (generator will not start).
     */
    'BATTERY_UNDERVOLT_FAULT' = 262144,
    /**
     * Generator start is inhibited by e.g. a safety switch.
     */
    'START_INHIBITED' = 524288,
    /**
     * Generator requires maintenance.
     */
    'MAINTENANCE_REQUIRED' = 1048576,
    /**
     * Generator is not ready to generate yet.
     */
    'WARMING_UP' = 2097152,
    /**
     * Generator is idle.
     */
    'IDLE' = 4194304
}
/**
 * Enumeration of VTOL states
 */
export declare enum MavVtolState {
    /**
     * MAV is not configured as VTOL
     */
    'UNDEFINED' = 0,
    /**
     * VTOL is in transition from multicopter to fixed-wing
     */
    'TRANSITION_TO_FW' = 1,
    /**
     * VTOL is in transition from fixed-wing to multicopter
     */
    'TRANSITION_TO_MC' = 2,
    /**
     * VTOL is in multicopter state
     */
    'MC' = 3,
    /**
     * VTOL is in fixed-wing state
     */
    'FW' = 4
}
/**
 * Enumeration of landed detector states
 */
export declare enum MavLandedState {
    /**
     * MAV landed state is unknown
     */
    'UNDEFINED' = 0,
    /**
     * MAV is landed (on ground)
     */
    'ON_GROUND' = 1,
    /**
     * MAV is in air
     */
    'IN_AIR' = 2,
    /**
     * MAV currently taking off
     */
    'TAKEOFF' = 3,
    /**
     * MAV currently landing
     */
    'LANDING' = 4
}
/**
 * Enumeration of the ADSB altimeter types
 */
export declare enum AdsbAltitudeType {
    /**
     * Altitude reported from a Baro source using QNH reference
     */
    'PRESSURE_QNH' = 0,
    /**
     * Altitude reported from a GNSS source
     */
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
 * Speed setpoint types used in MAV_CMD_DO_CHANGE_SPEED
 */
export declare enum SpeedType {
    /**
     * Airspeed
     */
    'AIRSPEED' = 0,
    /**
     * Groundspeed
     */
    'GROUNDSPEED' = 1,
    /**
     * Climb speed
     */
    'CLIMB_SPEED' = 2,
    /**
     * Descent speed
     */
    'DESCENT_SPEED' = 3
}
/**
 * Flags in ESTIMATOR_STATUS message
 */
export declare enum EstimatorStatusFlags {
    /**
     * True if the attitude estimate is good
     */
    'ATTITUDE' = 1,
    /**
     * True if the horizontal velocity estimate is good
     */
    'VELOCITY_HORIZ' = 2,
    /**
     * True if the vertical velocity estimate is good
     */
    'VELOCITY_VERT' = 4,
    /**
     * True if the horizontal position (relative) estimate is good
     */
    'POS_HORIZ_REL' = 8,
    /**
     * True if the horizontal position (absolute) estimate is good
     */
    'POS_HORIZ_ABS' = 16,
    /**
     * True if the vertical position (absolute) estimate is good
     */
    'POS_VERT_ABS' = 32,
    /**
     * True if the vertical position (above ground) estimate is good
     */
    'POS_VERT_AGL' = 64,
    /**
     * True if the EKF is in a constant position mode and is not using external measurements (eg GPS or
     * optical flow)
     */
    'CONST_POS_MODE' = 128,
    /**
     * True if the EKF has sufficient data to enter a mode that will provide a (relative) position estimate
     */
    'PRED_POS_HORIZ_REL' = 256,
    /**
     * True if the EKF has sufficient data to enter a mode that will provide a (absolute) position estimate
     */
    'PRED_POS_HORIZ_ABS' = 512,
    /**
     * True if the EKF has detected a GPS glitch
     */
    'GPS_GLITCH' = 1024,
    /**
     * True if the EKF has detected bad accelerometer data
     */
    'ACCEL_ERROR' = 2048
}
/**
 * Sequence that motors are tested when using MAV_CMD_DO_MOTOR_TEST.
 */
export declare enum MotorTestOrder {
    /**
     * Default autopilot motor test method.
     */
    'DEFAULT' = 0,
    /**
     * Motor numbers are specified as their index in a predefined vehicle-specific sequence.
     */
    'SEQUENCE' = 1,
    /**
     * Motor numbers are specified as the output as labeled on the board.
     */
    'BOARD' = 2
}
/**
 * Defines how throttle value is represented in MAV_CMD_DO_MOTOR_TEST.
 */
export declare enum MotorTestThrottleType {
    /**
     * Throttle as a percentage (0 ~ 100)
     */
    'THROTTLE_PERCENT' = 0,
    /**
     * Throttle as an absolute PWM value (normally in range of 1000~2000).
     */
    'THROTTLE_PWM' = 1,
    /**
     * Throttle pass-through from pilot's transmitter.
     */
    'THROTTLE_PILOT' = 2,
    /**
     * Per-motor compass calibration test.
     */
    'COMPASS_CAL' = 3
}
/**
 * GPS_INPUT_IGNORE_FLAGS
 */
export declare enum GpsInputIgnoreFlags {
    /**
     * ignore altitude field
     */
    'ALT' = 1,
    /**
     * ignore hdop field
     */
    'HDOP' = 2,
    /**
     * ignore vdop field
     */
    'VDOP' = 4,
    /**
     * ignore horizontal velocity field (vn and ve)
     */
    'VEL_HORIZ' = 8,
    /**
     * ignore vertical velocity field (vd)
     */
    'VEL_VERT' = 16,
    /**
     * ignore speed accuracy field
     */
    'SPEED_ACCURACY' = 32,
    /**
     * ignore horizontal accuracy field
     */
    'HORIZONTAL_ACCURACY' = 64,
    /**
     * ignore vertical accuracy field
     */
    'VERTICAL_ACCURACY' = 128
}
/**
 * Possible actions an aircraft can take to avoid a collision.
 */
export declare enum MavCollisionAction {
    /**
     * Ignore any potential collisions
     */
    'NONE' = 0,
    /**
     * Report potential collision
     */
    'REPORT' = 1,
    /**
     * Ascend or Descend to avoid threat
     */
    'ASCEND_OR_DESCEND' = 2,
    /**
     * Move horizontally to avoid threat
     */
    'MOVE_HORIZONTALLY' = 3,
    /**
     * Aircraft to move perpendicular to the collision's velocity vector
     */
    'MOVE_PERPENDICULAR' = 4,
    /**
     * Aircraft to fly directly back to its launch point
     */
    'RTL' = 5,
    /**
     * Aircraft to stop in place
     */
    'HOVER' = 6
}
/**
 * Aircraft-rated danger from this threat.
 */
export declare enum MavCollisionThreatLevel {
    /**
     * Not a threat
     */
    'NONE' = 0,
    /**
     * Craft is mildly concerned about this threat
     */
    'LOW' = 1,
    /**
     * Craft is panicking, and may take actions to avoid threat
     */
    'HIGH' = 2
}
/**
 * Source of information about this collision.
 */
export declare enum MavCollisionSrc {
    /**
     * ID field references ADSB_VEHICLE packets
     */
    'ADSB' = 0,
    /**
     * ID field references MAVLink SRC ID
     */
    'MAVLINK_GPS_GLOBAL_INT' = 1
}
/**
 * Type of GPS fix
 */
export declare enum GpsFixType {
    /**
     * No GPS connected
     */
    'NO_GPS' = 0,
    /**
     * No position information, GPS is connected
     */
    'NO_FIX' = 1,
    /**
     * 2D position
     */
    'GPS_FIX_TYPE_2D_FIX' = 2,
    /**
     * 3D position
     */
    'GPS_FIX_TYPE_3D_FIX' = 3,
    /**
     * DGPS/SBAS aided 3D position
     */
    'DGPS' = 4,
    /**
     * RTK float, 3D position
     */
    'RTK_FLOAT' = 5,
    /**
     * RTK Fixed, 3D position
     */
    'RTK_FIXED' = 6,
    /**
     * Static fixed, typically used for base stations
     */
    'STATIC' = 7,
    /**
     * PPP, 3D position.
     */
    'PPP' = 8
}
/**
 * RTK GPS baseline coordinate system, used for RTK corrections
 */
export declare enum RtkBaselineCoordinateSystem {
    /**
     * Earth-centered, Earth-fixed
     */
    'ECEF' = 0,
    /**
     * RTK basestation centered, north, east, down
     */
    'NED' = 1
}
/**
 * Type of landing target
 */
export declare enum LandingTargetType {
    /**
     * Landing target signaled by light beacon (ex: IR-LOCK)
     */
    'LIGHT_BEACON' = 0,
    /**
     * Landing target signaled by radio beacon (ex: ILS, NDB)
     */
    'RADIO_BEACON' = 1,
    /**
     * Landing target represented by a fiducial marker (ex: ARTag)
     */
    'VISION_FIDUCIAL' = 2,
    /**
     * Landing target represented by a pre-defined visual shape/feature (ex: X-marker, H-marker, square)
     */
    'VISION_OTHER' = 3
}
/**
 * Direction of VTOL transition
 */
export declare enum VtolTransitionHeading {
    /**
     * Respect the heading configuration of the vehicle.
     */
    'VEHICLE_DEFAULT' = 0,
    /**
     * Use the heading pointing towards the next waypoint.
     */
    'NEXT_WAYPOINT' = 1,
    /**
     * Use the heading on takeoff (while sitting on the ground).
     */
    'TAKEOFF' = 2,
    /**
     * Use the specified heading in parameter 4.
     */
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
    /**
     * Camera is able to record video
     */
    'CAPTURE_VIDEO' = 1,
    /**
     * Camera is able to capture images
     */
    'CAPTURE_IMAGE' = 2,
    /**
     * Camera has separate Video and Image/Photo modes (MAV_CMD_SET_CAMERA_MODE)
     */
    'HAS_MODES' = 4,
    /**
     * Camera can capture images while in video mode
     */
    'CAN_CAPTURE_IMAGE_IN_VIDEO_MODE' = 8,
    /**
     * Camera can capture videos while in Photo/Image mode
     */
    'CAN_CAPTURE_VIDEO_IN_IMAGE_MODE' = 16,
    /**
     * Camera has image survey mode (MAV_CMD_SET_CAMERA_MODE)
     */
    'HAS_IMAGE_SURVEY_MODE' = 32,
    /**
     * Camera has basic zoom control (MAV_CMD_SET_CAMERA_ZOOM)
     */
    'HAS_BASIC_ZOOM' = 64,
    /**
     * Camera has basic focus control (MAV_CMD_SET_CAMERA_FOCUS)
     */
    'HAS_BASIC_FOCUS' = 128,
    /**
     * Camera has video streaming capabilities (request VIDEO_STREAM_INFORMATION with
     * MAV_CMD_REQUEST_MESSAGE for video streaming info)
     */
    'HAS_VIDEO_STREAM' = 256,
    /**
     * Camera supports tracking of a point on the camera view.
     */
    'HAS_TRACKING_POINT' = 512,
    /**
     * Camera supports tracking of a selection rectangle on the camera view.
     */
    'HAS_TRACKING_RECTANGLE' = 1024,
    /**
     * Camera supports tracking geo status (CAMERA_TRACKING_GEO_STATUS).
     */
    'HAS_TRACKING_GEO_STATUS' = 2048
}
/**
 * Stream status flags (Bitmap)
 */
export declare enum VideoStreamStatusFlags {
    /**
     * Stream is active (running)
     */
    'RUNNING' = 1,
    /**
     * Stream is thermal imaging
     */
    'THERMAL' = 2
}
/**
 * Video stream types
 */
export declare enum VideoStreamType {
    /**
     * Stream is RTSP
     */
    'RTSP' = 0,
    /**
     * Stream is RTP UDP (URI gives the port number)
     */
    'RTPUDP' = 1,
    /**
     * Stream is MPEG on TCP
     */
    'TCP_MPEG' = 2,
    /**
     * Stream is h.264 on MPEG TS (URI gives the port number)
     */
    'MPEG_TS_H264' = 3
}
/**
 * Camera tracking status flags
 */
export declare enum CameraTrackingStatusFlags {
    /**
     * Camera is not tracking
     */
    'IDLE' = 0,
    /**
     * Camera is tracking
     */
    'ACTIVE' = 1,
    /**
     * Camera tracking in error state
     */
    'ERROR' = 2
}
/**
 * Camera tracking modes
 */
export declare enum CameraTrackingMode {
    /**
     * Not tracking
     */
    'NONE' = 0,
    /**
     * Target is a point
     */
    'POINT' = 1,
    /**
     * Target is a rectangle
     */
    'RECTANGLE' = 2
}
/**
 * Camera tracking target data (shows where tracked target is within image)
 */
export declare enum CameraTrackingTargetData {
    /**
     * No target data
     */
    'NONE' = 0,
    /**
     * Target data embedded in image data (proprietary)
     */
    'EMBEDDED' = 1,
    /**
     * Target data rendered in image
     */
    'RENDERED' = 2,
    /**
     * Target data within status message (Point or Rectangle)
     */
    'IN_STATUS' = 4
}
/**
 * Zoom types for MAV_CMD_SET_CAMERA_ZOOM
 */
export declare enum CameraZoomType {
    /**
     * Zoom one step increment (-1 for wide, 1 for tele)
     */
    'STEP' = 0,
    /**
     * Continuous zoom up/down until stopped (-1 for wide, 1 for tele, 0 to stop zooming)
     */
    'CONTINUOUS' = 1,
    /**
     * Zoom value as proportion of full camera range (a percentage value between 0.0 and 100.0)
     */
    'RANGE' = 2,
    /**
     * Zoom value/variable focal length in millimetres. Note that there is no message to get the valid zoom
     * range of the camera, so this can type can only be used for cameras where the zoom range is known
     * (implying that this cannot reliably be used in a GCS for an arbitrary camera)
     */
    'FOCAL_LENGTH' = 3
}
/**
 * Focus types for MAV_CMD_SET_CAMERA_FOCUS
 */
export declare enum SetFocusType {
    /**
     * Focus one step increment (-1 for focusing in, 1 for focusing out towards infinity).
     */
    'STEP' = 0,
    /**
     * Continuous focus up/down until stopped (-1 for focusing in, 1 for focusing out towards infinity, 0
     * to stop focusing)
     */
    'CONTINUOUS' = 1,
    /**
     * Focus value as proportion of full camera focus range (a value between 0.0 and 100.0)
     */
    'RANGE' = 2,
    /**
     * Focus value in metres. Note that there is no message to get the valid focus range of the camera, so
     * this can type can only be used for cameras where the range is known (implying that this cannot
     * reliably be used in a GCS for an arbitrary camera).
     */
    'METERS' = 3,
    /**
     * Focus automatically.
     */
    'AUTO' = 4,
    /**
     * Single auto focus. Mainly used for still pictures. Usually abbreviated as AF-S.
     */
    'AUTO_SINGLE' = 5,
    /**
     * Continuous auto focus. Mainly used for dynamic scenes. Abbreviated as AF-C.
     */
    'AUTO_CONTINUOUS' = 6
}
/**
 * Result from PARAM_EXT_SET message (or a PARAM_SET within a transaction).
 */
export declare enum ParamAck {
    /**
     * Parameter value ACCEPTED and SET
     */
    'ACCEPTED' = 0,
    /**
     * Parameter value UNKNOWN/UNSUPPORTED
     */
    'VALUE_UNSUPPORTED' = 1,
    /**
     * Parameter failed to set
     */
    'FAILED' = 2,
    /**
     * Parameter value received but not yet set/accepted. A subsequent PARAM_ACK_TRANSACTION or
     * PARAM_EXT_ACK with the final result will follow once operation is completed. This is returned
     * immediately for parameters that take longer to set, indicating taht the the parameter was recieved
     * and does not need to be resent.
     */
    'IN_PROGRESS' = 3
}
/**
 * Camera Modes.
 */
export declare enum CameraMode {
    /**
     * Camera is in image/photo capture mode.
     */
    'IMAGE' = 0,
    /**
     * Camera is in video capture mode.
     */
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
    /**
     * Not a specific reason
     */
    'GENERIC' = 0,
    /**
     * Authorizer will send the error as string to GCS
     */
    'NONE' = 1,
    /**
     * At least one waypoint have a invalid value
     */
    'INVALID_WAYPOINT' = 2,
    /**
     * Timeout in the authorizer process(in case it depends on network)
     */
    'TIMEOUT' = 3,
    /**
     * Airspace of the mission in use by another vehicle, second result parameter can have the waypoint id
     * that caused it to be denied.
     */
    'AIRSPACE_IN_USE' = 4,
    /**
     * Weather is not good to fly
     */
    'BAD_WEATHER' = 5
}
/**
 * RC type
 */
export declare enum RcType {
    /**
     * Spektrum DSM2
     */
    'SPEKTRUM_DSM2' = 0,
    /**
     * Spektrum DSMX
     */
    'SPEKTRUM_DSMX' = 1
}
/**
 * Engine control options
 */
export declare enum EngineControlOptions {
    /**
     * Allow starting the engine once while disarmed
     */
    'ALLOW_START_WHILE_DISARMED' = 1
}
/**
 * Bitmap to indicate which dimensions should be ignored by the vehicle: a value of 0b0000000000000000
 * or 0b0000001000000000 indicates that none of the setpoint dimensions should be ignored. If bit 9 is
 * set the floats afx afy afz should be interpreted as force instead of acceleration.
 */
export declare enum PositionTargetTypemask {
    /**
     * Ignore position x
     */
    'X_IGNORE' = 1,
    /**
     * Ignore position y
     */
    'Y_IGNORE' = 2,
    /**
     * Ignore position z
     */
    'Z_IGNORE' = 4,
    /**
     * Ignore velocity x
     */
    'VX_IGNORE' = 8,
    /**
     * Ignore velocity y
     */
    'VY_IGNORE' = 16,
    /**
     * Ignore velocity z
     */
    'VZ_IGNORE' = 32,
    /**
     * Ignore acceleration x
     */
    'AX_IGNORE' = 64,
    /**
     * Ignore acceleration y
     */
    'AY_IGNORE' = 128,
    /**
     * Ignore acceleration z
     */
    'AZ_IGNORE' = 256,
    /**
     * Use force instead of acceleration
     */
    'FORCE_SET' = 512,
    /**
     * Ignore yaw
     */
    'YAW_IGNORE' = 1024,
    /**
     * Ignore yaw rate
     */
    'YAW_RATE_IGNORE' = 2048
}
/**
 * Bitmap to indicate which dimensions should be ignored by the vehicle: a value of 0b00000000
 * indicates that none of the setpoint dimensions should be ignored.
 */
export declare enum AttitudeTargetTypemask {
    /**
     * Ignore body roll rate
     */
    'BODY_ROLL_RATE_IGNORE' = 1,
    /**
     * Ignore body pitch rate
     */
    'BODY_PITCH_RATE_IGNORE' = 2,
    /**
     * Ignore body yaw rate
     */
    'BODY_YAW_RATE_IGNORE' = 4,
    /**
     * Ignore throttle
     */
    'THROTTLE_IGNORE' = 64,
    /**
     * Ignore attitude
     */
    'ATTITUDE_IGNORE' = 128
}
/**
 * Airborne status of UAS.
 */
export declare enum UtmFlightState {
    /**
     * The flight state can't be determined.
     */
    'UNKNOWN' = 1,
    /**
     * UAS on ground.
     */
    'GROUND' = 2,
    /**
     * UAS airborne.
     */
    'AIRBORNE' = 3,
    /**
     * UAS is in an emergency flight state.
     */
    'EMERGENCY' = 16,
    /**
     * UAS has no active controls.
     */
    'NOCTRL' = 32
}
/**
 * Flags for the global position report.
 */
export declare enum UtmDataAvailFlags {
    /**
     * The field time contains valid data.
     */
    'TIME_VALID' = 1,
    /**
     * The field uas_id contains valid data.
     */
    'UAS_ID_AVAILABLE' = 2,
    /**
     * The fields lat, lon and h_acc contain valid data.
     */
    'POSITION_AVAILABLE' = 4,
    /**
     * The fields alt and v_acc contain valid data.
     */
    'ALTITUDE_AVAILABLE' = 8,
    /**
     * The field relative_alt contains valid data.
     */
    'RELATIVE_ALTITUDE_AVAILABLE' = 16,
    /**
     * The fields vx and vy contain valid data.
     */
    'HORIZONTAL_VELO_AVAILABLE' = 32,
    /**
     * The field vz contains valid data.
     */
    'VERTICAL_VELO_AVAILABLE' = 64,
    /**
     * The fields next_lat, next_lon and next_alt contain valid data.
     */
    'NEXT_WAYPOINT_AVAILABLE' = 128
}
/**
 * Precision land modes (used in MAV_CMD_NAV_LAND).
 */
export declare enum PrecisionLandMode {
    /**
     * Normal (non-precision) landing.
     */
    'DISABLED' = 0,
    /**
     * Use precision landing if beacon detected when land command accepted, otherwise land normally.
     */
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
    /**
     * Disable auto-release of parachute (i.e. release triggered by crash detectors).
     */
    'DISABLE' = 0,
    /**
     * Enable auto-release of parachute.
     */
    'ENABLE' = 1,
    /**
     * Release parachute and kill motors.
     */
    'RELEASE' = 2
}
/**
 * MAV_TUNNEL_PAYLOAD_TYPE
 */
export declare enum MavTunnelPayloadType {
    /**
     * Encoding of payload unknown.
     */
    'UNKNOWN' = 0,
    /**
     * Registered for STorM32 gimbal controller.
     */
    'STORM32_RESERVED0' = 200,
    /**
     * Registered for STorM32 gimbal controller.
     */
    'STORM32_RESERVED1' = 201,
    /**
     * Registered for STorM32 gimbal controller.
     */
    'STORM32_RESERVED2' = 202,
    /**
     * Registered for STorM32 gimbal controller.
     */
    'STORM32_RESERVED3' = 203,
    /**
     * Registered for STorM32 gimbal controller.
     */
    'STORM32_RESERVED4' = 204,
    /**
     * Registered for STorM32 gimbal controller.
     */
    'STORM32_RESERVED5' = 205,
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
 * MAV_ODID_ID_TYPE
 */
export declare enum MavOdidIdType {
    /**
     * No type defined.
     */
    'NONE' = 0,
    /**
     * Manufacturer Serial Number (ANSI/CTA-2063 format).
     */
    'SERIAL_NUMBER' = 1,
    /**
     * CAA (Civil Aviation Authority) registered ID. Format: [ICAO Country Code].[CAA Assigned ID].
     */
    'CAA_REGISTRATION_ID' = 2,
    /**
     * UTM (Unmanned Traffic Management) assigned UUID (RFC4122).
     */
    'UTM_ASSIGNED_UUID' = 3,
    /**
     * A 20 byte ID for a specific flight/session. The exact ID type is indicated by the first byte of
     * uas_id and these type values are managed by ICAO.
     */
    'SPECIFIC_SESSION_ID' = 4
}
/**
 * MAV_ODID_UA_TYPE
 */
export declare enum MavOdidUaType {
    /**
     * No UA (Unmanned Aircraft) type defined.
     */
    'NONE' = 0,
    /**
     * Aeroplane/Airplane. Fixed wing.
     */
    'AEROPLANE' = 1,
    /**
     * Helicopter or multirotor.
     */
    'HELICOPTER_OR_MULTIROTOR' = 2,
    /**
     * Gyroplane.
     */
    'GYROPLANE' = 3,
    /**
     * VTOL (Vertical Take-Off and Landing). Fixed wing aircraft that can take off vertically.
     */
    'HYBRID_LIFT' = 4,
    /**
     * Ornithopter.
     */
    'ORNITHOPTER' = 5,
    /**
     * Glider.
     */
    'GLIDER' = 6,
    /**
     * Kite.
     */
    'KITE' = 7,
    /**
     * Free Balloon.
     */
    'FREE_BALLOON' = 8,
    /**
     * Captive Balloon.
     */
    'CAPTIVE_BALLOON' = 9,
    /**
     * Airship. E.g. a blimp.
     */
    'AIRSHIP' = 10,
    /**
     * Free Fall/Parachute (unpowered).
     */
    'FREE_FALL_PARACHUTE' = 11,
    /**
     * Rocket.
     */
    'ROCKET' = 12,
    /**
     * Tethered powered aircraft.
     */
    'TETHERED_POWERED_AIRCRAFT' = 13,
    /**
     * Ground Obstacle.
     */
    'GROUND_OBSTACLE' = 14,
    /**
     * Other type of aircraft not listed earlier.
     */
    'OTHER' = 15
}
/**
 * MAV_ODID_STATUS
 */
export declare enum MavOdidStatus {
    /**
     * The status of the (UA) Unmanned Aircraft is undefined.
     */
    'UNDECLARED' = 0,
    /**
     * The UA is on the ground.
     */
    'GROUND' = 1,
    /**
     * The UA is in the air.
     */
    'AIRBORNE' = 2,
    /**
     * The UA is having an emergency.
     */
    'EMERGENCY' = 3,
    /**
     * The remote ID system is failing or unreliable in some way.
     */
    'REMOTE_ID_SYSTEM_FAILURE' = 4
}
/**
 * MAV_ODID_HEIGHT_REF
 */
export declare enum MavOdidHeightRef {
    /**
     * The height field is relative to the take-off location.
     */
    'OVER_TAKEOFF' = 0,
    /**
     * The height field is relative to ground.
     */
    'OVER_GROUND' = 1
}
/**
 * MAV_ODID_HOR_ACC
 */
export declare enum MavOdidHorAcc {
    /**
     * The horizontal accuracy is unknown.
     */
    'UNKNOWN' = 0,
    /**
     * The horizontal accuracy is smaller than 10 Nautical Miles. 18.52 km.
     */
    'MAV_ODID_HOR_ACC_10NM' = 1,
    /**
     * The horizontal accuracy is smaller than 4 Nautical Miles. 7.408 km.
     */
    'MAV_ODID_HOR_ACC_4NM' = 2,
    /**
     * The horizontal accuracy is smaller than 2 Nautical Miles. 3.704 km.
     */
    'MAV_ODID_HOR_ACC_2NM' = 3,
    /**
     * The horizontal accuracy is smaller than 1 Nautical Miles. 1.852 km.
     */
    'MAV_ODID_HOR_ACC_1NM' = 4,
    /**
     * The horizontal accuracy is smaller than 0.5 Nautical Miles. 926 m.
     */
    'MAV_ODID_HOR_ACC_0_5NM' = 5,
    /**
     * The horizontal accuracy is smaller than 0.3 Nautical Miles. 555.6 m.
     */
    'MAV_ODID_HOR_ACC_0_3NM' = 6,
    /**
     * The horizontal accuracy is smaller than 0.1 Nautical Miles. 185.2 m.
     */
    'MAV_ODID_HOR_ACC_0_1NM' = 7,
    /**
     * The horizontal accuracy is smaller than 0.05 Nautical Miles. 92.6 m.
     */
    'MAV_ODID_HOR_ACC_0_05NM' = 8,
    /**
     * The horizontal accuracy is smaller than 30 meter.
     */
    'MAV_ODID_HOR_ACC_30_METER' = 9,
    /**
     * The horizontal accuracy is smaller than 10 meter.
     */
    'MAV_ODID_HOR_ACC_10_METER' = 10,
    /**
     * The horizontal accuracy is smaller than 3 meter.
     */
    'MAV_ODID_HOR_ACC_3_METER' = 11,
    /**
     * The horizontal accuracy is smaller than 1 meter.
     */
    'MAV_ODID_HOR_ACC_1_METER' = 12
}
/**
 * MAV_ODID_VER_ACC
 */
export declare enum MavOdidVerAcc {
    /**
     * The vertical accuracy is unknown.
     */
    'UNKNOWN' = 0,
    /**
     * The vertical accuracy is smaller than 150 meter.
     */
    'MAV_ODID_VER_ACC_150_METER' = 1,
    /**
     * The vertical accuracy is smaller than 45 meter.
     */
    'MAV_ODID_VER_ACC_45_METER' = 2,
    /**
     * The vertical accuracy is smaller than 25 meter.
     */
    'MAV_ODID_VER_ACC_25_METER' = 3,
    /**
     * The vertical accuracy is smaller than 10 meter.
     */
    'MAV_ODID_VER_ACC_10_METER' = 4,
    /**
     * The vertical accuracy is smaller than 3 meter.
     */
    'MAV_ODID_VER_ACC_3_METER' = 5,
    /**
     * The vertical accuracy is smaller than 1 meter.
     */
    'MAV_ODID_VER_ACC_1_METER' = 6
}
/**
 * MAV_ODID_SPEED_ACC
 */
export declare enum MavOdidSpeedAcc {
    /**
     * The speed accuracy is unknown.
     */
    'UNKNOWN' = 0,
    /**
     * The speed accuracy is smaller than 10 meters per second.
     */
    'MAV_ODID_SPEED_ACC_10_METERS_PER_SECOND' = 1,
    /**
     * The speed accuracy is smaller than 3 meters per second.
     */
    'MAV_ODID_SPEED_ACC_3_METERS_PER_SECOND' = 2,
    /**
     * The speed accuracy is smaller than 1 meters per second.
     */
    'MAV_ODID_SPEED_ACC_1_METERS_PER_SECOND' = 3,
    /**
     * The speed accuracy is smaller than 0.3 meters per second.
     */
    'MAV_ODID_SPEED_ACC_0_3_METERS_PER_SECOND' = 4
}
/**
 * MAV_ODID_TIME_ACC
 */
export declare enum MavOdidTimeAcc {
    /**
     * The timestamp accuracy is unknown.
     */
    'UNKNOWN' = 0,
    /**
     * The timestamp accuracy is smaller than or equal to 0.1 second.
     */
    'MAV_ODID_TIME_ACC_0_1_SECOND' = 1,
    /**
     * The timestamp accuracy is smaller than or equal to 0.2 second.
     */
    'MAV_ODID_TIME_ACC_0_2_SECOND' = 2,
    /**
     * The timestamp accuracy is smaller than or equal to 0.3 second.
     */
    'MAV_ODID_TIME_ACC_0_3_SECOND' = 3,
    /**
     * The timestamp accuracy is smaller than or equal to 0.4 second.
     */
    'MAV_ODID_TIME_ACC_0_4_SECOND' = 4,
    /**
     * The timestamp accuracy is smaller than or equal to 0.5 second.
     */
    'MAV_ODID_TIME_ACC_0_5_SECOND' = 5,
    /**
     * The timestamp accuracy is smaller than or equal to 0.6 second.
     */
    'MAV_ODID_TIME_ACC_0_6_SECOND' = 6,
    /**
     * The timestamp accuracy is smaller than or equal to 0.7 second.
     */
    'MAV_ODID_TIME_ACC_0_7_SECOND' = 7,
    /**
     * The timestamp accuracy is smaller than or equal to 0.8 second.
     */
    'MAV_ODID_TIME_ACC_0_8_SECOND' = 8,
    /**
     * The timestamp accuracy is smaller than or equal to 0.9 second.
     */
    'MAV_ODID_TIME_ACC_0_9_SECOND' = 9,
    /**
     * The timestamp accuracy is smaller than or equal to 1.0 second.
     */
    'MAV_ODID_TIME_ACC_1_0_SECOND' = 10,
    /**
     * The timestamp accuracy is smaller than or equal to 1.1 second.
     */
    'MAV_ODID_TIME_ACC_1_1_SECOND' = 11,
    /**
     * The timestamp accuracy is smaller than or equal to 1.2 second.
     */
    'MAV_ODID_TIME_ACC_1_2_SECOND' = 12,
    /**
     * The timestamp accuracy is smaller than or equal to 1.3 second.
     */
    'MAV_ODID_TIME_ACC_1_3_SECOND' = 13,
    /**
     * The timestamp accuracy is smaller than or equal to 1.4 second.
     */
    'MAV_ODID_TIME_ACC_1_4_SECOND' = 14,
    /**
     * The timestamp accuracy is smaller than or equal to 1.5 second.
     */
    'MAV_ODID_TIME_ACC_1_5_SECOND' = 15
}
/**
 * MAV_ODID_AUTH_TYPE
 */
export declare enum MavOdidAuthType {
    /**
     * No authentication type is specified.
     */
    'NONE' = 0,
    /**
     * Signature for the UAS (Unmanned Aircraft System) ID.
     */
    'UAS_ID_SIGNATURE' = 1,
    /**
     * Signature for the Operator ID.
     */
    'OPERATOR_ID_SIGNATURE' = 2,
    /**
     * Signature for the entire message set.
     */
    'MESSAGE_SET_SIGNATURE' = 3,
    /**
     * Authentication is provided by Network Remote ID.
     */
    'NETWORK_REMOTE_ID' = 4,
    /**
     * The exact authentication type is indicated by the first byte of authentication_data and these type
     * values are managed by ICAO.
     */
    'SPECIFIC_AUTHENTICATION' = 5
}
/**
 * MAV_ODID_DESC_TYPE
 */
export declare enum MavOdidDescType {
    /**
     * Free-form text description of the purpose of the flight.
     */
    'TEXT' = 0,
    /**
     * Optional additional clarification when status == MAV_ODID_STATUS_EMERGENCY.
     */
    'EMERGENCY' = 1,
    /**
     * Optional additional clarification when status != MAV_ODID_STATUS_EMERGENCY.
     */
    'EXTENDED_STATUS' = 2
}
/**
 * MAV_ODID_OPERATOR_LOCATION_TYPE
 */
export declare enum MavOdidOperatorLocationType {
    /**
     * The location of the operator is the same as the take-off location.
     */
    'TAKEOFF' = 0,
    /**
     * The location of the operator is based on live GNSS data.
     */
    'LIVE_GNSS' = 1,
    /**
     * The location of the operator is a fixed location.
     */
    'FIXED' = 2
}
/**
 * MAV_ODID_CLASSIFICATION_TYPE
 */
export declare enum MavOdidClassificationType {
    /**
     * The classification type for the UA is undeclared.
     */
    'UNDECLARED' = 0,
    /**
     * The classification type for the UA follows EU (European Union) specifications.
     */
    'EU' = 1
}
/**
 * MAV_ODID_CATEGORY_EU
 */
export declare enum MavOdidCategoryEu {
    /**
     * The category for the UA, according to the EU specification, is undeclared.
     */
    'UNDECLARED' = 0,
    /**
     * The category for the UA, according to the EU specification, is the Open category.
     */
    'OPEN' = 1,
    /**
     * The category for the UA, according to the EU specification, is the Specific category.
     */
    'SPECIFIC' = 2,
    /**
     * The category for the UA, according to the EU specification, is the Certified category.
     */
    'CERTIFIED' = 3
}
/**
 * MAV_ODID_CLASS_EU
 */
export declare enum MavOdidClassEu {
    /**
     * The class for the UA, according to the EU specification, is undeclared.
     */
    'UNDECLARED' = 0,
    /**
     * The class for the UA, according to the EU specification, is Class 0.
     */
    'CLASS_0' = 1,
    /**
     * The class for the UA, according to the EU specification, is Class 1.
     */
    'CLASS_1' = 2,
    /**
     * The class for the UA, according to the EU specification, is Class 2.
     */
    'CLASS_2' = 3,
    /**
     * The class for the UA, according to the EU specification, is Class 3.
     */
    'CLASS_3' = 4,
    /**
     * The class for the UA, according to the EU specification, is Class 4.
     */
    'CLASS_4' = 5,
    /**
     * The class for the UA, according to the EU specification, is Class 5.
     */
    'CLASS_5' = 6,
    /**
     * The class for the UA, according to the EU specification, is Class 6.
     */
    'CLASS_6' = 7
}
/**
 * MAV_ODID_OPERATOR_ID_TYPE
 */
export declare enum MavOdidOperatorIdType {
    /**
     * CAA (Civil Aviation Authority) registered operator ID.
     */
    'CAA' = 0
}
/**
 * MAV_ODID_ARM_STATUS
 */
export declare enum MavOdidArmStatus {
    /**
     * Passing arming checks.
     */
    'GOOD_TO_ARM' = 0,
    /**
     * Generic arming failure, see error string for details.
     */
    'PRE_ARM_FAIL_GENERIC' = 1
}
/**
 * Type of AIS vessel, enum duplicated from AIS standard, https://gpsd.gitlab.io/gpsd/AIVDM.html
 */
export declare enum AisType {
    /**
     * Not available (default).
     */
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
    /**
     * Wing In Ground effect.
     */
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
    /**
     * Towing: length exceeds 200m or breadth exceeds 25m.
     */
    'TOWING_LARGE' = 32,
    /**
     * Dredging or other underwater ops.
     */
    'DREDGING' = 33,
    'DIVING' = 34,
    'MILITARY' = 35,
    'SAILING' = 36,
    'PLEASURE' = 37,
    'RESERVED_20' = 38,
    'RESERVED_21' = 39,
    /**
     * High Speed Craft.
     */
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
    /**
     * Search And Rescue vessel.
     */
    'SAR' = 51,
    'TUG' = 52,
    'PORT_TENDER' = 53,
    /**
     * Anti-pollution equipment.
     */
    'ANTI_POLLUTION' = 54,
    'LAW_ENFORCEMENT' = 55,
    'SPARE_LOCAL_1' = 56,
    'SPARE_LOCAL_2' = 57,
    'MEDICAL_TRANSPORT' = 58,
    /**
     * Noncombatant ship according to RR Resolution No. 18.
     */
    'NONECOMBATANT' = 59,
    'PASSENGER' = 60,
    'PASSENGER_HAZARDOUS_A' = 61,
    'PASSENGER_HAZARDOUS_B' = 62,
    'AIS_TYPE_PASSENGER_HAZARDOUS_C' = 63,
    'PASSENGER_HAZARDOUS_D' = 64,
    'PASSENGER_RESERVED_1' = 65,
    'PASSENGER_RESERVED_2' = 66,
    'PASSENGER_RESERVED_3' = 67,
    'AIS_TYPE_PASSENGER_RESERVED_4' = 68,
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
    /**
     * Under way using engine.
     */
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
    /**
     * Search And Rescue Transponder.
     */
    'AIS_SART' = 14,
    /**
     * Not available (default).
     */
    'UNKNOWN' = 15
}
/**
 * These flags are used in the AIS_VESSEL.fields bitmask to indicate validity of data in the other
 * message fields. When set, the data is valid.
 */
export declare enum AisFlags {
    /**
     * 1 = Position accuracy less than 10m, 0 = position accuracy greater than 10m.
     */
    'POSITION_ACCURACY' = 1,
    'VALID_COG' = 2,
    'VALID_VELOCITY' = 4,
    /**
     * 1 = Velocity over 52.5765m/s (102.2 knots)
     */
    'HIGH_VELOCITY' = 8,
    'VALID_TURN_RATE' = 16,
    /**
     * Only the sign of the returned turn rate value is valid, either greater than 5deg/30s or less than
     * -5deg/30s
     */
    'TURN_RATE_SIGN_ONLY' = 32,
    'VALID_DIMENSIONS' = 64,
    /**
     * Distance to bow is larger than 511m
     */
    'LARGE_BOW_DIMENSION' = 128,
    /**
     * Distance to stern is larger than 511m
     */
    'LARGE_STERN_DIMENSION' = 256,
    /**
     * Distance to port side is larger than 63m
     */
    'LARGE_PORT_DIMENSION' = 512,
    /**
     * Distance to starboard side is larger than 63m
     */
    'LARGE_STARBOARD_DIMENSION' = 1024,
    'VALID_CALLSIGN' = 2048,
    'VALID_NAME' = 4096
}
/**
 * Status of what an individual swarm vehicle is doing.
 */
export declare enum SwarmVehicleState {
    /**
     * Unknown.
     */
    'STATE_UNKNOWN' = 0,
    /**
     * Currently traveling to join the mesh network.
     */
    'STATE_INGRESSING_TO_MESH' = 1,
    /**
     * Have lost contact with the mesh and unable to sync and unable to provide service.
     */
    'STATE_LOST_COMMS' = 2,
    /**
     * Situation NORMAL, on station providing service
     */
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
    /**
     * Leaving mesh to return to base. Is still acting as mesh node providing service on the way back.
     */
    'STATE_EGRESSING_MESH_RTB' = 7,
    /**
     * Returning to base. May or may-not be providing service on the way back.
     */
    'STATE_RTB' = 8,
    /**
     * Not providing service but is able and ready to join.
     */
    'STATE_READY_TO_JOIN_MESH' = 9,
    /**
     * Not ready, not providing service. For air vehicles this means we're powered up on the ground and
     * likely performing ground checks. Next expected state is likely READY_TO_JOIN_MESH.
     */
    'STATE_NOT_READY' = 10,
    /**
     * This is the Ground Control Station.
     */
    'GCS' = 11
}
/**
 * Type of the vehicle that is swarming. Sample types are fixed-wing, copter, tank, jeep, human.
 */
export declare enum SwarmVehicleType {
    /**
     * Unknown.
     */
    'UNKNOWN' = 0,
    /**
     * Fixed wing aircraft
     */
    'FIXED_WING' = 1,
    /**
     * Copter
     */
    'COPTER' = 2,
    /**
     * Tank
     */
    'TANK' = 3,
    /**
     * Jeep
     */
    'JEEP' = 4,
    /**
     * Human
     */
    'HUMAN' = 5
}
/**
 * Status of the ROI from the swarm vehicle's perspective.
 */
export declare enum SwarmRoiStatus {
    'UNKNOWN' = 0,
    'INVALID' = 1,
    /**
     * Has a valid ROI but it's old. We've seen another CRC with a newer timestamp.
     */
    'NEEDS_UPDATE' = 2,
    /**
     * Has a valid and up-to-date ROI.
     */
    'OK' = 3
}
/**
 * Status of mesh network coverage. Ideally the whole swarm should be generating the same status.
 */
export declare enum SwarmCoverageStatus {
    'UNKNOWN' = 0,
    /**
     * ROI is not ready so a coverage status is unable to be determined.
     */
    'ROI_IS_NOT_READY' = 1,
    /**
     * Swarm mesh has insufficient vehicle resources to cover the ROI.
     */
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
    /**
     * Winch is healthy
     */
    'HEALTHY' = 1,
    /**
     * Winch thread is fully retracted
     */
    'FULLY_RETRACTED' = 2,
    /**
     * Winch motor is moving
     */
    'MOVING' = 4,
    /**
     * Winch clutch is engaged allowing motor to move freely
     */
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
 * CAN_FILTER_OP
 */
export declare enum CanFilterOp {
    'REPLACE' = 0,
    'ADD' = 1,
    'REMOVE' = 2
}
/**
 * NAV_VTOL_LAND_OPTIONS
 */
export declare enum NavVtolLandOptions {
    /**
     * Default autopilot landing behaviour.
     */
    'DEFAULT' = 0,
    /**
     * Use a fixed wing spiral desent approach before landing.
     */
    'FW_SPIRAL_APPROACH' = 1,
    /**
     * Use a fixed wing approach before detransitioning and landing vertically.
     */
    'FW_APPROACH' = 2
}
/**
 * States of the mission state machine. Note that these states are independent of whether the mission
 * is in a mode that can execute mission items or not (is suspended). They may not all be relevant on
 * all vehicles.
 */
export declare enum MissionState {
    /**
     * The mission status reporting is not supported.
     */
    'UNKNOWN' = 0,
    /**
     * No mission on the vehicle.
     */
    'NO_MISSION' = 1,
    /**
     * Mission has not started. This is the case after a mission has uploaded but not yet started
     * executing.
     */
    'NOT_STARTED' = 2,
    /**
     * Mission is active, and will execute mission items when in auto mode.
     */
    'ACTIVE' = 3,
    /**
     * Mission is paused when in auto mode.
     */
    'PAUSED' = 4,
    /**
     * Mission has executed all mission items.
     */
    'COMPLETE' = 5
}
/**
 * Possible safety switch states.
 */
export declare enum SafetySwitchState {
    /**
     * Safety switch is engaged and vehicle should be safe to approach.
     */
    'SAFE' = 0,
    /**
     * Safety switch is NOT engaged and motors, propellers and other actuators should be considered active.
     */
    'DANGEROUS' = 1
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
    /**
     * Sequence
     */
    seq: uint16_t;
    /**
     * Total number of mission items on vehicle (on last item, sequence == total). If the autopilot stores
     * its home location as part of the mission this will be excluded from the total. 0: Not supported,
     * UINT16_MAX if no mission is present on the vehicle.
     */
    total: uint16_t;
    /**
     * Mission state machine state. MISSION_STATE_UNKNOWN if state reporting not supported.
     */
    missionState: MissionState;
    /**
     * Vehicle is in a mode that can execute mission items or suspended. 0: Unknown, 1: In mission mode, 2:
     * Suspended (not in mission mode).
     */
    missionMode: uint8_t;
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    /**
     * A bitfield corresponding to the joystick buttons' 16-31 current state, 1 for pressed, 0 for
     * released. The lowest bit corresponds to Button 16.
     */
    buttons2: uint16_t;
    /**
     * Set bits to 1 to indicate which of the following extension fields contain valid data: bit 0: pitch,
     * bit 1: roll, bit 2: aux1, bit 3: aux2, bit 4: aux3, bit 5: aux4, bit 6: aux5, bit 7: aux6
     */
    enabledExtensions: uint8_t;
    /**
     * Pitch-only-axis, normalized to the range [-1000,1000]. Generally corresponds to pitch on vehicles
     * with additional degrees of freedom. Valid if bit 0 of enabled_extensions field is set. Set to 0 if
     * invalid.
     */
    s: int16_t;
    /**
     * Roll-only-axis, normalized to the range [-1000,1000]. Generally corresponds to roll on vehicles with
     * additional degrees of freedom. Valid if bit 1 of enabled_extensions field is set. Set to 0 if
     * invalid.
     */
    t: int16_t;
    /**
     * Aux continuous input field 1. Normalized in the range [-1000,1000]. Purpose defined by recipient.
     * Valid data if bit 2 of enabled_extensions field is set. 0 if bit 2 is unset.
     */
    aux1: int16_t;
    /**
     * Aux continuous input field 2. Normalized in the range [-1000,1000]. Purpose defined by recipient.
     * Valid data if bit 3 of enabled_extensions field is set. 0 if bit 3 is unset.
     */
    aux2: int16_t;
    /**
     * Aux continuous input field 3. Normalized in the range [-1000,1000]. Purpose defined by recipient.
     * Valid data if bit 4 of enabled_extensions field is set. 0 if bit 4 is unset.
     */
    aux3: int16_t;
    /**
     * Aux continuous input field 4. Normalized in the range [-1000,1000]. Purpose defined by recipient.
     * Valid data if bit 5 of enabled_extensions field is set. 0 if bit 5 is unset.
     */
    aux4: int16_t;
    /**
     * Aux continuous input field 5. Normalized in the range [-1000,1000]. Purpose defined by recipient.
     * Valid data if bit 6 of enabled_extensions field is set. 0 if bit 6 is unset.
     */
    aux5: int16_t;
    /**
     * Aux continuous input field 6. Normalized in the range [-1000,1000]. Purpose defined by recipient.
     * Valid data if bit 7 of enabled_extensions field is set. 0 if bit 7 is unset.
     */
    aux6: int16_t;
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
    constructor();
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
    _param1: float;
    /**
     * PARAM2, see MAV_CMD enum
     */
    _param2: float;
    /**
     * PARAM3, see MAV_CMD enum
     */
    _param3: float;
    /**
     * PARAM4, see MAV_CMD enum
     */
    _param4: float;
    /**
     * PARAM5 / local: x position in meters * 1e4, global: latitude in degrees * 10^7
     */
    _param5: int32_t;
    /**
     * PARAM6 / local: y position in meters * 1e4, global: longitude in degrees * 10^7
     */
    _param6: int32_t;
    /**
     * PARAM7 / z position: global: altitude in meters (relative or absolute, depending on frame).
     */
    _param7: float;
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
    constructor();
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
    _param1: float;
    /**
     * Parameter 2 (for the specific command).
     */
    _param2: float;
    /**
     * Parameter 3 (for the specific command).
     */
    _param3: float;
    /**
     * Parameter 4 (for the specific command).
     */
    _param4: float;
    /**
     * Parameter 5 (for the specific command).
     */
    _param5: float;
    /**
     * Parameter 6 (for the specific command).
     */
    _param6: float;
    /**
     * Parameter 7 (for the specific command).
     */
    _param7: float;
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
     * Flow rate around X-axis (deprecated; use flow_rate_x)
     * Units: rad/s
     */
    flowX: int16_t;
    /**
     * Flow rate around Y-axis (deprecated; use flow_rate_y)
     * Units: rad/s
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    /**
     * Latitude (higher precision). If 0, recipients should use the lat field value (otherwise this field
     * is preferred).
     * Units: degE7
     */
    latInt: int32_t;
    /**
     * Longitude (higher precision). If 0, recipients should use the lon field value (otherwise this field
     * is preferred).
     * Units: degE7
     */
    lonInt: int32_t;
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
     * HW / board version (last 8 bits should be silicon ID, if any). The first 16 bits of this field
     * specify https://github.com/ardupilot/ardupilot/blob/master/Tools/AP_Bootloader/board_types.txt
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
    constructor();
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
    constructor();
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
    constructor();
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
    /**
     * Supply voltage to EFI sparking system. Zero in this value means "unknown", so if the supply voltage
     * really is zero volts use 0.0001 instead.
     * Units: V
     */
    ignitionVoltage: float;
    /**
     * Fuel pressure. Zero in this value means "unknown", so if the fuel pressure really is zero kPa use
     * 0.0001 instead.
     * Units: kPa
     */
    fuelPressure: float;
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
 *
 * @deprecated since 2022-02, replaced by MAV_CMD_DO_SET_HOME; This message is being superseded by MAV_CMD_DO_SET_HOME.  Using the command protocols allows a GCS to detect setting of the home position has failed.
 */
export declare class SetHomePosition extends MavLinkData {
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
     * 0xff) << 8 | (Major & 0xff). Use 0 if not known.
     */
    firmwareVersion: uint32_t;
    /**
     * Focal length. Use NaN if not known.
     * Units: mm
     */
    focalLength: float;
    /**
     * Image sensor size horizontal. Use NaN if not known.
     * Units: mm
     */
    sensorSizeH: float;
    /**
     * Image sensor size vertical. Use NaN if not known.
     * Units: mm
     */
    sensorSizeV: float;
    /**
     * Horizontal image resolution. Use 0 if not known.
     * Units: pix
     */
    resolutionH: uint16_t;
    /**
     * Vertical image resolution. Use 0 if not known.
     * Units: pix
     */
    resolutionV: uint16_t;
    /**
     * Reserved for a lens ID. Use 0 if not known.
     */
    lensId: uint8_t;
    /**
     * Bitmap of camera capability flags.
     */
    flags: CameraCapFlags;
    /**
     * Camera definition version (iteration). Use 0 if not known.
     */
    camDefinitionVersion: uint16_t;
    /**
     * Camera definition URI (if any, otherwise only basic functions will be available). HTTP- (http://)
     * and MAVLink FTP- (mavlinkftp://) formatted URIs are allowed (and both must be supported by any GCS
     * that implements the Camera Protocol). The definition file may be xz compressed, which will be
     * indicated by the file extension .xml.xz (a GCS that implements the protocol must support
     * decompressing the file). The string needs to be zero terminated. Use a zero-length string if not
     * known.
     */
    camDefinitionUri: string;
    /**
     * Gimbal id of a gimbal associated with this camera. This is the component id of the gimbal device, or
     * 1-6 for non mavlink gimbals. Use 0 if no gimbal is associated with the camera.
     */
    gimbalDeviceId: uint8_t;
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
    constructor();
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
     * Current zoom level as a percentage of the full range (0.0 to 100.0, NaN if not known)
     */
    zoomLevel: float;
    /**
     * Current focus level as a percentage of the full range (0.0 to 100.0, NaN if not known)
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
 * Information about the field of view of a camera. Can be requested with a MAV_CMD_REQUEST_MESSAGE
 * command.
 */
export declare class CameraFovStatus extends MavLinkData {
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
     * Latitude of camera (INT32_MAX if unknown).
     * Units: degE7
     */
    latCamera: int32_t;
    /**
     * Longitude of camera (INT32_MAX if unknown).
     * Units: degE7
     */
    lonCamera: int32_t;
    /**
     * Altitude (MSL) of camera (INT32_MAX if unknown).
     * Units: mm
     */
    altCamera: int32_t;
    /**
     * Latitude of center of image (INT32_MAX if unknown, INT32_MIN if at infinity, not intersecting with
     * horizon).
     * Units: degE7
     */
    latImage: int32_t;
    /**
     * Longitude of center of image (INT32_MAX if unknown, INT32_MIN if at infinity, not intersecting with
     * horizon).
     * Units: degE7
     */
    lonImage: int32_t;
    /**
     * Altitude (MSL) of center of image (INT32_MAX if unknown, INT32_MIN if at infinity, not intersecting
     * with horizon).
     * Units: mm
     */
    altImage: int32_t;
    /**
     * Quaternion of camera orientation (w, x, y, z order, zero-rotation is 1, 0, 0, 0)
     */
    q: float[];
    /**
     * Horizontal field of view (NaN if unknown).
     * Units: deg
     */
    hfov: float;
    /**
     * Vertical field of view (NaN if unknown).
     * Units: deg
     */
    vfov: float;
}
/**
 * Camera tracking status, sent while in active tracking. Use MAV_CMD_SET_MESSAGE_INTERVAL to define
 * message interval.
 */
export declare class CameraTrackingImageStatus extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    constructor();
    /**
     * Current tracking status
     */
    trackingStatus: CameraTrackingStatusFlags;
    /**
     * Current tracking mode
     */
    trackingMode: CameraTrackingMode;
    /**
     * Defines location of target data
     */
    targetData: CameraTrackingTargetData;
    /**
     * Current tracked point x value if CAMERA_TRACKING_MODE_POINT (normalized 0..1, 0 is left, 1 is
     * right), NAN if unknown
     */
    pointX: float;
    /**
     * Current tracked point y value if CAMERA_TRACKING_MODE_POINT (normalized 0..1, 0 is top, 1 is
     * bottom), NAN if unknown
     */
    pointY: float;
    /**
     * Current tracked radius if CAMERA_TRACKING_MODE_POINT (normalized 0..1, 0 is image left, 1 is image
     * right), NAN if unknown
     */
    radius: float;
    /**
     * Current tracked rectangle top x value if CAMERA_TRACKING_MODE_RECTANGLE (normalized 0..1, 0 is left,
     * 1 is right), NAN if unknown
     */
    recTopX: float;
    /**
     * Current tracked rectangle top y value if CAMERA_TRACKING_MODE_RECTANGLE (normalized 0..1, 0 is top,
     * 1 is bottom), NAN if unknown
     */
    recTopY: float;
    /**
     * Current tracked rectangle bottom x value if CAMERA_TRACKING_MODE_RECTANGLE (normalized 0..1, 0 is
     * left, 1 is right), NAN if unknown
     */
    recBottomX: float;
    /**
     * Current tracked rectangle bottom y value if CAMERA_TRACKING_MODE_RECTANGLE (normalized 0..1, 0 is
     * top, 1 is bottom), NAN if unknown
     */
    recBottomY: float;
}
/**
 * Camera tracking status, sent while in active tracking. Use MAV_CMD_SET_MESSAGE_INTERVAL to define
 * message interval.
 */
export declare class CameraTrackingGeoStatus extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    constructor();
    /**
     * Current tracking status
     */
    trackingStatus: CameraTrackingStatusFlags;
    /**
     * Latitude of tracked object
     * Units: degE7
     */
    lat: int32_t;
    /**
     * Longitude of tracked object
     * Units: degE7
     */
    lon: int32_t;
    /**
     * Altitude of tracked object(AMSL, WGS84)
     * Units: m
     */
    alt: float;
    /**
     * Horizontal accuracy. NAN if unknown
     * Units: m
     */
    hAcc: float;
    /**
     * Vertical accuracy. NAN if unknown
     * Units: m
     */
    vAcc: float;
    /**
     * North velocity of tracked object. NAN if unknown
     * Units: m/s
     */
    velN: float;
    /**
     * East velocity of tracked object. NAN if unknown
     * Units: m/s
     */
    velE: float;
    /**
     * Down velocity of tracked object. NAN if unknown
     * Units: m/s
     */
    velD: float;
    /**
     * Velocity accuracy. NAN if unknown
     * Units: m/s
     */
    velAcc: float;
    /**
     * Distance between camera and tracked object. NAN if unknown
     * Units: m
     */
    dist: float;
    /**
     * Heading in radians, in NED. NAN if unknown
     * Units: rad
     */
    hdg: float;
    /**
     * Accuracy of heading, in NED. NAN if unknown
     * Units: rad
     */
    hdgAcc: float;
}
/**
 * Information about a high level gimbal manager. This message should be requested by a ground station
 * using MAV_CMD_REQUEST_MESSAGE.
 */
export declare class GimbalManagerInformation extends MavLinkData {
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
     * Bitmap of gimbal capability flags.
     */
    capFlags: GimbalManagerCapFlags;
    /**
     * Gimbal device ID that this gimbal manager is responsible for. Component ID of gimbal device (or 1-6
     * for non-MAVLink gimbal).
     */
    gimbalDeviceId: uint8_t;
    /**
     * Minimum hardware roll angle (positive: rolling to the right, negative: rolling to the left)
     * Units: rad
     */
    rollMin: float;
    /**
     * Maximum hardware roll angle (positive: rolling to the right, negative: rolling to the left)
     * Units: rad
     */
    rollMax: float;
    /**
     * Minimum pitch angle (positive: up, negative: down)
     * Units: rad
     */
    pitchMin: float;
    /**
     * Maximum pitch angle (positive: up, negative: down)
     * Units: rad
     */
    pitchMax: float;
    /**
     * Minimum yaw angle (positive: to the right, negative: to the left)
     * Units: rad
     */
    yawMin: float;
    /**
     * Maximum yaw angle (positive: to the right, negative: to the left)
     * Units: rad
     */
    yawMax: float;
}
/**
 * Current status about a high level gimbal manager. This message should be broadcast at a low regular
 * rate (e.g. 5Hz).
 */
export declare class GimbalManagerStatus extends MavLinkData {
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
     * High level gimbal manager flags currently applied.
     */
    flags: GimbalManagerFlags;
    /**
     * Gimbal device ID that this gimbal manager is responsible for. Component ID of gimbal device (or 1-6
     * for non-MAVLink gimbal).
     */
    gimbalDeviceId: uint8_t;
    /**
     * System ID of MAVLink component with primary control, 0 for none.
     */
    primaryControlSysid: uint8_t;
    /**
     * Component ID of MAVLink component with primary control, 0 for none.
     */
    primaryControlCompid: uint8_t;
    /**
     * System ID of MAVLink component with secondary control, 0 for none.
     */
    secondaryControlSysid: uint8_t;
    /**
     * Component ID of MAVLink component with secondary control, 0 for none.
     */
    secondaryControlCompid: uint8_t;
}
/**
 * High level message to control a gimbal's attitude. This message is to be sent to the gimbal manager
 * (e.g. from a ground station). Angles and rates can be set to NaN according to use case.
 */
export declare class GimbalManagerSetAttitude extends MavLinkData {
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
     * High level gimbal manager flags to use.
     */
    flags: GimbalManagerFlags;
    /**
     * Component ID of gimbal device to address (or 1-6 for non-MAVLink gimbal), 0 for all gimbal device
     * components. Send command multiple times for more than one gimbal (but not all gimbals).
     */
    gimbalDeviceId: uint8_t;
    /**
     * Quaternion components, w, x, y, z (1 0 0 0 is the null-rotation, the frame is depends on whether the
     * flag GIMBAL_MANAGER_FLAGS_YAW_LOCK is set)
     */
    q: float[];
    /**
     * X component of angular velocity, positive is rolling to the right, NaN to be ignored.
     * Units: rad/s
     */
    angularVelocityX: float;
    /**
     * Y component of angular velocity, positive is pitching up, NaN to be ignored.
     * Units: rad/s
     */
    angularVelocityY: float;
    /**
     * Z component of angular velocity, positive is yawing to the right, NaN to be ignored.
     * Units: rad/s
     */
    angularVelocityZ: float;
}
/**
 * Information about a low level gimbal. This message should be requested by the gimbal manager or a
 * ground station using MAV_CMD_REQUEST_MESSAGE. The maximum angles and rates are the limits by
 * hardware. However, the limits by software used are likely different/smaller and dependent on
 * mode/settings/etc..
 */
export declare class GimbalDeviceInformation extends MavLinkData {
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
     * Name of the gimbal vendor.
     */
    vendorName: string;
    /**
     * Name of the gimbal model.
     */
    modelName: string;
    /**
     * Custom name of the gimbal given to it by the user.
     */
    customName: string;
    /**
     * Version of the gimbal firmware, encoded as: (Dev & 0xff) << 24 | (Patch & 0xff) << 16 | (Minor &
     * 0xff) << 8 | (Major & 0xff).
     */
    firmwareVersion: uint32_t;
    /**
     * Version of the gimbal hardware, encoded as: (Dev & 0xff) << 24 | (Patch & 0xff) << 16 | (Minor &
     * 0xff) << 8 | (Major & 0xff).
     */
    hardwareVersion: uint32_t;
    /**
     * UID of gimbal hardware (0 if unknown).
     */
    uid: uint64_t;
    /**
     * Bitmap of gimbal capability flags.
     */
    capFlags: GimbalDeviceCapFlags;
    /**
     * Bitmap for use for gimbal-specific capability flags.
     */
    customCapFlags: uint16_t;
    /**
     * Minimum hardware roll angle (positive: rolling to the right, negative: rolling to the left). NAN if
     * unknown.
     * Units: rad
     */
    rollMin: float;
    /**
     * Maximum hardware roll angle (positive: rolling to the right, negative: rolling to the left). NAN if
     * unknown.
     * Units: rad
     */
    rollMax: float;
    /**
     * Minimum hardware pitch angle (positive: up, negative: down). NAN if unknown.
     * Units: rad
     */
    pitchMin: float;
    /**
     * Maximum hardware pitch angle (positive: up, negative: down). NAN if unknown.
     * Units: rad
     */
    pitchMax: float;
    /**
     * Minimum hardware yaw angle (positive: to the right, negative: to the left). NAN if unknown.
     * Units: rad
     */
    yawMin: float;
    /**
     * Maximum hardware yaw angle (positive: to the right, negative: to the left). NAN if unknown.
     * Units: rad
     */
    yawMax: float;
    /**
     * This field is to be used if the gimbal manager and the gimbal device are the same component and
     * hence have the same component ID. This field is then set to a number between 1-6. If the component
     * ID is separate, this field is not required and must be set to 0.
     */
    gimbalDeviceId: uint8_t;
}
/**
 * Low level message to control a gimbal device's attitude. 	 This message is to be sent from the
 * gimbal manager to the gimbal device component. 	 The quaternion and angular velocities can be set to
 * NaN according to use case. 	 For the angles encoded in the quaternion and the angular velocities
 * holds: 	 If the flag GIMBAL_DEVICE_FLAGS_YAW_IN_VEHICLE_FRAME is set, then they are relative to the
 * vehicle heading (vehicle frame). 	 If the flag GIMBAL_DEVICE_FLAGS_YAW_IN_EARTH_FRAME is set, then
 * they are relative to absolute North (earth frame). 	 If neither of these flags are set, then (for
 * backwards compatibility) it holds: 	 If the flag GIMBAL_DEVICE_FLAGS_YAW_LOCK is set, then they are
 * relative to absolute North (earth frame), 	 else they are relative to the vehicle heading (vehicle
 * frame). 	 Setting both GIMBAL_DEVICE_FLAGS_YAW_IN_VEHICLE_FRAME and
 * GIMBAL_DEVICE_FLAGS_YAW_IN_EARTH_FRAME is not allowed. 	 These rules are to ensure backwards
 * compatibility. 	 New implementations should always set either
 * GIMBAL_DEVICE_FLAGS_YAW_IN_VEHICLE_FRAME or GIMBAL_DEVICE_FLAGS_YAW_IN_EARTH_FRAME.
 */
export declare class GimbalDeviceSetAttitude extends MavLinkData {
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
     * Low level gimbal flags.
     */
    flags: GimbalDeviceFlags;
    /**
     * Quaternion components, w, x, y, z (1 0 0 0 is the null-rotation). The frame is described in the
     * message description. Set fields to NaN to be ignored.
     */
    q: float[];
    /**
     * X component of angular velocity (positive: rolling to the right). The frame is described in the
     * message description. NaN to be ignored.
     * Units: rad/s
     */
    angularVelocityX: float;
    /**
     * Y component of angular velocity (positive: pitching up). The frame is described in the message
     * description. NaN to be ignored.
     * Units: rad/s
     */
    angularVelocityY: float;
    /**
     * Z component of angular velocity (positive: yawing to the right). The frame is described in the
     * message description. NaN to be ignored.
     * Units: rad/s
     */
    angularVelocityZ: float;
}
/**
 * Message reporting the status of a gimbal device. 	 This message should be broadcast by a gimbal
 * device component at a low regular rate (e.g. 5 Hz). 	 For the angles encoded in the quaternion and
 * the angular velocities holds: 	 If the flag GIMBAL_DEVICE_FLAGS_YAW_IN_VEHICLE_FRAME is set, then
 * they are relative to the vehicle heading (vehicle frame). 	 If the flag
 * GIMBAL_DEVICE_FLAGS_YAW_IN_EARTH_FRAME is set, then they are relative to absolute North (earth
 * frame). 	 If neither of these flags are set, then (for backwards compatibility) it holds: 	 If the
 * flag GIMBAL_DEVICE_FLAGS_YAW_LOCK is set, then they are relative to absolute North (earth frame),
 * else they are relative to the vehicle heading (vehicle frame). 	 Other conditions of the flags are
 * not allowed. 	 The quaternion and angular velocities in the other frame can be calculated from
 * delta_yaw and delta_yaw_velocity as 	 q_earth = q_delta_yaw * q_vehicle and w_earth =
 * w_delta_yaw_velocity + w_vehicle (if not NaN). 	 If neither the
 * GIMBAL_DEVICE_FLAGS_YAW_IN_VEHICLE_FRAME nor the GIMBAL_DEVICE_FLAGS_YAW_IN_EARTH_FRAME flag is set,
 * then (for backwards compatibility) the data in the delta_yaw and delta_yaw_velocity fields are to be
 * ignored. 	 New implementations should always set either GIMBAL_DEVICE_FLAGS_YAW_IN_VEHICLE_FRAME or
 * GIMBAL_DEVICE_FLAGS_YAW_IN_EARTH_FRAME, 	 and always should set delta_yaw and delta_yaw_velocity
 * either to the proper value or NaN.
 */
export declare class GimbalDeviceAttitudeStatus extends MavLinkData {
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
     * Current gimbal flags set.
     */
    flags: GimbalDeviceFlags;
    /**
     * Quaternion components, w, x, y, z (1 0 0 0 is the null-rotation). The frame is described in the
     * message description.
     */
    q: float[];
    /**
     * X component of angular velocity (positive: rolling to the right). The frame is described in the
     * message description. NaN if unknown.
     * Units: rad/s
     */
    angularVelocityX: float;
    /**
     * Y component of angular velocity (positive: pitching up). The frame is described in the message
     * description. NaN if unknown.
     * Units: rad/s
     */
    angularVelocityY: float;
    /**
     * Z component of angular velocity (positive: yawing to the right). The frame is described in the
     * message description. NaN if unknown.
     * Units: rad/s
     */
    angularVelocityZ: float;
    /**
     * Failure flags (0 for no failure)
     */
    failureFlags: GimbalDeviceErrorFlags;
    /**
     * Yaw angle relating the quaternions in earth and body frames (see message description). NaN if
     * unknown.
     * Units: rad
     */
    deltaYaw: float;
    /**
     * Yaw angular velocity relating the angular velocities in earth and body frames (see message
     * description). NaN if unknown.
     * Units: rad/s
     */
    deltaYawVelocity: float;
    /**
     * This field is to be used if the gimbal manager and the gimbal device are the same component and
     * hence have the same component ID. This field is then set a number between 1-6. If the component ID
     * is separate, this field is not required and must be set to 0.
     */
    gimbalDeviceId: uint8_t;
}
/**
 * Low level message containing autopilot state relevant for a gimbal device. This message is to be
 * sent from the autopilot to the gimbal device component. The data of this message are for the gimbal
 * device's estimator corrections, in particular horizon compensation, as well as indicates autopilot
 * control intentions, e.g. feed forward angular control in the z-axis.
 */
export declare class AutopilotStateForGimbalDevice extends MavLinkData {
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
     * Units: us
     */
    timeBootUs: uint64_t;
    /**
     * Quaternion components of autopilot attitude: w, x, y, z (1 0 0 0 is the null-rotation, Hamilton
     * convention).
     */
    q: float[];
    /**
     * Estimated delay of the attitude data. 0 if unknown.
     * Units: us
     */
    qEstimatedDelayUs: uint32_t;
    /**
     * X Speed in NED (North, East, Down). NAN if unknown.
     * Units: m/s
     */
    vx: float;
    /**
     * Y Speed in NED (North, East, Down). NAN if unknown.
     * Units: m/s
     */
    vy: float;
    /**
     * Z Speed in NED (North, East, Down). NAN if unknown.
     * Units: m/s
     */
    vz: float;
    /**
     * Estimated delay of the speed data. 0 if unknown.
     * Units: us
     */
    vEstimatedDelayUs: uint32_t;
    /**
     * Feed forward Z component of angular velocity (positive: yawing to the right). NaN to be ignored.
     * This is to indicate if the autopilot is actively yawing.
     * Units: rad/s
     */
    feedForwardAngularVelocityZ: float;
    /**
     * Bitmap indicating which estimator outputs are valid.
     */
    estimatorStatus: EstimatorStatusFlags;
    /**
     * The landed state. Is set to MAV_LANDED_STATE_UNDEFINED if landed state is unknown.
     */
    landedState: MavLandedState;
    /**
     * Z component of angular velocity in NED (North, East, Down). NaN if unknown.
     * Units: rad/s
     */
    angularVelocityZ: float;
}
/**
 * Set gimbal manager pitch and yaw angles (high rate message). This message is to be sent to the
 * gimbal manager (e.g. from a ground station) and will be ignored by gimbal devices. Angles and rates
 * can be set to NaN according to use case. Use MAV_CMD_DO_GIMBAL_MANAGER_PITCHYAW for low-rate
 * adjustments that require confirmation.
 */
export declare class GimbalManagerSetPitchyaw extends MavLinkData {
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
     * High level gimbal manager flags to use.
     */
    flags: GimbalManagerFlags;
    /**
     * Component ID of gimbal device to address (or 1-6 for non-MAVLink gimbal), 0 for all gimbal device
     * components. Send command multiple times for more than one gimbal (but not all gimbals).
     */
    gimbalDeviceId: uint8_t;
    /**
     * Pitch angle (positive: up, negative: down, NaN to be ignored).
     * Units: rad
     */
    pitch: float;
    /**
     * Yaw angle (positive: to the right, negative: to the left, NaN to be ignored).
     * Units: rad
     */
    yaw: float;
    /**
     * Pitch angular rate (positive: up, negative: down, NaN to be ignored).
     * Units: rad/s
     */
    pitchRate: float;
    /**
     * Yaw angular rate (positive: to the right, negative: to the left, NaN to be ignored).
     * Units: rad/s
     */
    yawRate: float;
}
/**
 * High level message to control a gimbal manually. The angles or angular rates are unitless; the
 * actual rates will depend on internal gimbal manager settings/configuration (e.g. set by parameters).
 * This message is to be sent to the gimbal manager (e.g. from a ground station). Angles and rates can
 * be set to NaN according to use case.
 */
export declare class GimbalManagerSetManualControl extends MavLinkData {
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
     * High level gimbal manager flags.
     */
    flags: GimbalManagerFlags;
    /**
     * Component ID of gimbal device to address (or 1-6 for non-MAVLink gimbal), 0 for all gimbal device
     * components. Send command multiple times for more than one gimbal (but not all gimbals).
     */
    gimbalDeviceId: uint8_t;
    /**
     * Pitch angle unitless (-1..1, positive: up, negative: down, NaN to be ignored).
     */
    pitch: float;
    /**
     * Yaw angle unitless (-1..1, positive: to the right, negative: to the left, NaN to be ignored).
     */
    yaw: float;
    /**
     * Pitch angular rate unitless (-1..1, positive: up, negative: down, NaN to be ignored).
     */
    pitchRate: float;
    /**
     * Yaw angular rate unitless (-1..1, positive: to the right, negative: to the left, NaN to be ignored).
     */
    yawRate: float;
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    /**
     * Optional odometry quality metric as a percentage. -1 = odometry has failed, 0 = unknown/unset
     * quality, 1 = worst quality, 100 = best quality
     * Units: %
     */
    quality: int8_t;
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
    constructor();
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
 * The global position resulting from GPS and sensor fusion.
 */
export declare class UtmGlobalPosition extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
 * Reports the on/off state of relays, as controlled by MAV_CMD_DO_SET_RELAY.
 */
export declare class RelayStatus extends MavLinkData {
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
     * Relay states. Relay instance numbers are represented as individual bits in this mask by offset.
     */
    on: uint16_t;
    /**
     * Relay present. Relay instance numbers are represented as individual bits in this mask by offset.
     * Bits will be true if a relay instance is configured.
     */
    present: uint16_t;
}
/**
 * Message for transporting "arbitrary" variable-length data from one component to another (broadcast
 * is not forbidden, but discouraged). The encoding of the data is usually extension specific, i.e.
 * determined by the source, and is usually not documented as part of the MAVLink specification.
 */
export declare class Tunnel extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    constructor();
    /**
     * System ID (can be 0 for broadcast, but this is discouraged)
     */
    targetSystem: uint8_t;
    /**
     * Component ID (can be 0 for broadcast, but this is discouraged)
     */
    targetComponent: uint8_t;
    /**
     * A code that identifies the content of the payload (0 for unknown, which is the default). If this
     * code is less than 32768, it is a 'registered' payload type and the corresponding code should be
     * added to the MAV_TUNNEL_PAYLOAD_TYPE enum. Software creators can register blocks of types as needed.
     * Codes greater than 32767 are considered local experiments and should not be checked in to any widely
     * distributed codebase.
     */
    payloadType: MavTunnelPayloadType;
    /**
     * Length of the data transported in payload
     */
    payloadLength: uint8_t;
    /**
     * Variable length payload. The payload length is defined by payload_length. The entire content of this
     * block is opaque unless you understand the encoding specified by payload_type.
     */
    payload: uint8_t[];
}
/**
 * A forwarded CAN frame as requested by MAV_CMD_CAN_FORWARD.
 */
export declare class CanFrame extends MavLinkData {
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
     * bus number
     */
    bus: uint8_t;
    /**
     * Frame length
     */
    len: uint8_t;
    /**
     * Frame ID
     */
    id: uint32_t;
    /**
     * Frame data
     */
    data: uint8_t[];
}
/**
 * A forwarded CANFD frame as requested by MAV_CMD_CAN_FORWARD. These are separated from CAN_FRAME as
 * they need different handling (eg. TAO handling)
 */
export declare class CanfdFrame extends MavLinkData {
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
     * bus number
     */
    bus: uint8_t;
    /**
     * Frame length
     */
    len: uint8_t;
    /**
     * Frame ID
     */
    id: uint32_t;
    /**
     * Frame data
     */
    data: uint8_t[];
}
/**
 * Modify the filter of what CAN messages to forward over the mavlink. This can be used to make CAN
 * forwarding work well on low bandwith links. The filtering is applied on bits 8 to 24 of the CAN id
 * (2nd and 3rd bytes) which corresponds to the DroneCAN message ID for DroneCAN. Filters with more
 * than 16 IDs can be constructed by sending multiple CAN_FILTER_MODIFY messages.
 */
export declare class CanFilterModify extends MavLinkData {
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
     * bus number
     */
    bus: uint8_t;
    /**
     * what operation to perform on the filter list. See CAN_FILTER_OP enum.
     */
    operation: CanFilterOp;
    /**
     * number of IDs in filter list
     */
    numIds: uint8_t;
    /**
     * filter IDs, length num_ids
     */
    ids: uint16_t[];
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
    constructor();
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
 * Status from the transmitter telling the flight controller if the remote ID system is ready for
 * arming.
 */
export declare class OpenDroneIdArmStatus extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    constructor();
    /**
     * Status level indicating if arming is allowed.
     */
    status: MavOdidArmStatus;
    /**
     * Text error message, should be empty if status is good to arm. Fill with nulls in unused portion.
     */
    error: string;
}
/**
 * Update the data in the OPEN_DRONE_ID_SYSTEM message with new location information. This can be sent
 * to update the location information for the operator when no other information in the SYSTEM message
 * has changed. This message allows for efficient operation on radio links which have limited uplink
 * bandwidth while meeting requirements for update frequency of the operator location.
 */
export declare class OpenDroneIdSystemUpdate extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    constructor();
    /**
     * System ID (0 for broadcast).
     */
    targetSystem: uint8_t;
    /**
     * Component ID (0 for broadcast).
     */
    targetComponent: uint8_t;
    /**
     * Latitude of the operator. If unknown: 0 (both Lat/Lon).
     * Units: degE7
     */
    operatorLatitude: int32_t;
    /**
     * Longitude of the operator. If unknown: 0 (both Lat/Lon).
     * Units: degE7
     */
    operatorLongitude: int32_t;
    /**
     * Geodetic altitude of the operator relative to WGS84. If unknown: -1000 m.
     * Units: m
     */
    operatorAltitudeGeo: float;
    /**
     * 32 bit Unix Timestamp in seconds since 00:00:00 01/01/2019.
     * Units: s
     */
    timestamp: uint32_t;
}
/**
 * Temperature and humidity from hygrometer.
 */
export declare class HygrometerSensor extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    constructor();
    /**
     * Hygrometer ID
     */
    id: uint8_t;
    /**
     * Temperature
     * Units: cdegC
     */
    temperature: int16_t;
    /**
     * Humidity
     * Units: c%
     */
    humidity: uint16_t;
}
/**
 * Navigate to waypoint.
 *
 * This command has location.
 * This command is destination.
 */
export declare class NavWaypointCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Hold time. (ignored by fixed wing, time to stay at waypoint for rotary wing)
     *
     * @units s
     * @min: 0
     */
    get hold(): number;
    set hold(value: number);
    /**
     * Acceptance radius (if the sphere with this radius is hit, the waypoint counts as reached)
     *
     * @units m
     * @min: 0
     */
    get acceptRadius(): number;
    set acceptRadius(value: number);
    /**
     * 0 to pass through the WP, if > 0 radius to pass by WP. Positive value for clockwise orbit, negative
     * value for counter-clockwise orbit. Allows trajectory control.
     *
     * @units m
     */
    get passRadius(): number;
    set passRadius(value: number);
    /**
     * Desired yaw angle at waypoint (rotary wing). NaN to use the current system yaw heading mode (e.g.
     * yaw towards next waypoint, yaw to home, etc.).
     *
     * @units deg
     */
    get yaw(): number;
    set yaw(value: number);
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
     * Altitude
     *
     * @units m
     */
    get altitude(): number;
    set altitude(value: number);
}
/**
 * Loiter around this waypoint an unlimited amount of time
 *
 * This command has location.
 * This command is destination.
 */
export declare class NavLoiterUnlimCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Loiter radius around waypoint for forward-only moving vehicles (not multicopters). If positive
     * loiter clockwise, else counter-clockwise
     *
     * @units m
     */
    get radius(): number;
    set radius(value: number);
    /**
     * Desired yaw angle. NaN to use the current system yaw heading mode (e.g. yaw towards next waypoint,
     * yaw to home, etc.).
     *
     * @units deg
     */
    get yaw(): number;
    set yaw(value: number);
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
     * Altitude
     *
     * @units m
     */
    get altitude(): number;
    set altitude(value: number);
}
/**
 * Loiter around this waypoint for X turns
 *
 * This command has location.
 * This command is destination.
 */
export declare class NavLoiterTurnsCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Number of turns.
     *
     * @min: 0
     */
    get turns(): number;
    set turns(value: number);
    /**
     * Radius around waypoint. If positive loiter clockwise, else counter-clockwise
     *
     * @units m
     */
    get radius(): number;
    set radius(value: number);
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
     * Altitude
     *
     * @units m
     */
    get altitude(): number;
    set altitude(value: number);
}
/**
 * Loiter around this waypoint for X seconds
 *
 * This command has location.
 * This command is destination.
 */
export declare class NavLoiterTimeCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Loiter time.
     *
     * @units s
     * @min: 0
     */
    get time(): number;
    set time(value: number);
    /**
     * Radius around waypoint. If positive loiter clockwise, else counter-clockwise.
     *
     * @units m
     */
    get radius(): number;
    set radius(value: number);
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
     * Altitude
     *
     * @units m
     */
    get altitude(): number;
    set altitude(value: number);
}
/**
 * Return to launch location
 */
export declare class NavReturnToLaunchCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
}
/**
 * Land at location.
 *
 * This command has location.
 * This command is destination.
 */
export declare class NavLandCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Minimum target altitude if landing is aborted (0 = undefined/use system default).
     *
     * @units m
     */
    get abortAlt(): number;
    set abortAlt(value: number);
    /**
     * Precision land mode.
     */
    get landMode(): number;
    set landMode(value: number);
    /**
     * Desired yaw angle. NaN to use the current system yaw heading mode (e.g. yaw towards next waypoint,
     * yaw to home, etc.).
     *
     * @units deg
     */
    get yawAngle(): number;
    set yawAngle(value: number);
    /**
     * Latitude.
     */
    get latitude(): number;
    set latitude(value: number);
    /**
     * Longitude.
     */
    get longitude(): number;
    set longitude(value: number);
    /**
     * Landing altitude (ground level in current frame).
     *
     * @units m
     */
    get altitude(): number;
    set altitude(value: number);
}
/**
 * Takeoff from ground / hand. Vehicles that support multiple takeoff modes (e.g. VTOL quadplane)
 * should take off using the currently configured mode.
 *
 * This command has location.
 * This command is destination.
 */
export declare class NavTakeoffCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Minimum pitch (if airspeed sensor present), desired pitch without sensor
     *
     * @units deg
     */
    get pitch(): number;
    set pitch(value: number);
    /**
     * Yaw angle (if magnetometer present), ignored without magnetometer. NaN to use the current system yaw
     * heading mode (e.g. yaw towards next waypoint, yaw to home, etc.).
     *
     * @units deg
     */
    get yaw(): number;
    set yaw(value: number);
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
     * Altitude
     *
     * @units m
     */
    get altitude(): number;
    set altitude(value: number);
}
/**
 * Land at local position (local frame only)
 *
 * This command has location.
 * This command is destination.
 */
export declare class NavLandLocalCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Landing target number (if available)
     *
     * @min: 0
     * @increment: 1
     */
    get target(): number;
    set target(value: number);
    /**
     * Maximum accepted offset from desired landing position - computed magnitude from spherical
     * coordinates: d = sqrt(x^2 + y^2 + z^2), which gives the maximum accepted distance between the
     * desired landing position and the position where the vehicle is about to land
     *
     * @units m
     * @min: 0
     */
    get offset(): number;
    set offset(value: number);
    /**
     * Landing descend rate
     *
     * @units m/s
     */
    get descendRate(): number;
    set descendRate(value: number);
    /**
     * Desired yaw angle
     *
     * @units rad
     */
    get yaw(): number;
    set yaw(value: number);
    /**
     * Y-axis position
     *
     * @units m
     */
    get yPosition(): number;
    set yPosition(value: number);
    /**
     * X-axis position
     *
     * @units m
     */
    get xPosition(): number;
    set xPosition(value: number);
    /**
     * Z-axis / ground level position
     *
     * @units m
     */
    get zPosition(): number;
    set zPosition(value: number);
}
/**
 * Takeoff from local position (local frame only)
 *
 * This command has location.
 * This command is destination.
 */
export declare class NavTakeoffLocalCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Minimum pitch (if airspeed sensor present), desired pitch without sensor
     *
     * @units rad
     */
    get pitch(): number;
    set pitch(value: number);
    /**
     * Takeoff ascend rate
     *
     * @units m/s
     */
    get ascendRate(): number;
    set ascendRate(value: number);
    /**
     * Yaw angle (if magnetometer or another yaw estimation source present), ignored without one of these
     *
     * @units rad
     */
    get yaw(): number;
    set yaw(value: number);
    /**
     * Y-axis position
     *
     * @units m
     */
    get yPosition(): number;
    set yPosition(value: number);
    /**
     * X-axis position
     *
     * @units m
     */
    get xPosition(): number;
    set xPosition(value: number);
    /**
     * Z-axis position
     *
     * @units m
     */
    get zPosition(): number;
    set zPosition(value: number);
}
/**
 * Vehicle following, i.e. this waypoint represents the position of a moving vehicle
 *
 * This command has location.
 */
export declare class NavFollowCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Following logic to use (e.g. loitering or sinusoidal following) - depends on specific autopilot
     * implementation
     *
     * @increment: 1
     */
    get following(): number;
    set following(value: number);
    /**
     * Ground speed of vehicle to be followed
     *
     * @units m/s
     */
    get groundSpeed(): number;
    set groundSpeed(value: number);
    /**
     * Radius around waypoint. If positive loiter clockwise, else counter-clockwise
     *
     * @units m
     */
    get radius(): number;
    set radius(value: number);
    /**
     * Desired yaw angle.
     *
     * @units deg
     */
    get yaw(): number;
    set yaw(value: number);
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
     * Altitude
     *
     * @units m
     */
    get altitude(): number;
    set altitude(value: number);
}
/**
 * Continue on the current course and climb/descend to specified altitude. When the altitude is reached
 * continue to the next command (i.e., don't proceed to the next command until the desired altitude is
 * reached.
 *
 * This command is destination.
 */
export declare class NavContinueAndChangeAltCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Climb or Descend (0 = Neutral, command completes when within 5m of this command's altitude, 1 =
     * Climbing, command completes when at or above this command's altitude, 2 = Descending, command
     * completes when at or below this command's altitude.
     *
     * @min: 0
     * @max: 2
     * @increment: 1
     */
    get action(): number;
    set action(value: number);
    /**
     * Desired altitude
     *
     * @units m
     */
    get altitude(): number;
    set altitude(value: number);
}
/**
 * Begin loiter at the specified Latitude and Longitude. If Lat=Lon=0, then loiter at the current
 * position. Don't consider the navigation command complete (don't leave loiter) until the altitude has
 * been reached. Additionally, if the Heading Required parameter is non-zero the aircraft will not
 * leave the loiter until heading toward the next waypoint.
 *
 * This command has location.
 * This command is destination.
 */
export declare class NavLoiterToAltCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Heading Required (0 = False)
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get headingRequired(): number;
    set headingRequired(value: number);
    /**
     * Loiter radius around waypoint for forward-only moving vehicles (not multicopters). If positive
     * loiter clockwise, negative counter-clockwise, 0 means no change to standard loiter.
     *
     * @units m
     */
    get radius(): number;
    set radius(value: number);
    /**
     * Forward moving aircraft this sets exit xtrack location: 0 for center of loiter wp, 1 for exit
     * location
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get xtrackLocation(): number;
    set xtrackLocation(value: number);
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
     * Altitude
     *
     * @units m
     */
    get altitude(): number;
    set altitude(value: number);
}
/**
 * Begin following a target
 */
export declare class DoFollowCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * System ID (of the FOLLOW_TARGET beacon). Send 0 to disable follow-me and return to the default
     * position hold mode.
     *
     * @min: 0
     * @max: 255
     * @increment: 1
     */
    get systemId(): number;
    set systemId(value: number);
    /**
     * Altitude mode: 0: Keep current altitude, 1: keep altitude difference to target, 2: go to a fixed
     * altitude above home.
     *
     * @min: 0
     * @max: 2
     * @increment: 1
     */
    get altitudeMode(): number;
    set altitudeMode(value: number);
    /**
     * Altitude above home. (used if mode=2)
     *
     * @units m
     */
    get altitude(): number;
    set altitude(value: number);
    /**
     * Time to land in which the MAV should go to the default position hold mode after a message RX
     * timeout.
     *
     * @units s
     * @min: 0
     */
    get timeToLand(): number;
    set timeToLand(value: number);
}
/**
 * Reposition the MAV after a follow target command has been sent
 */
export declare class DoFollowRepositionCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Camera q1 (where 0 is on the ray from the camera to the tracking device)
     */
    get cameraQ1(): number;
    set cameraQ1(value: number);
    /**
     * Camera q2
     */
    get cameraQ2(): number;
    set cameraQ2(value: number);
    /**
     * Camera q3
     */
    get cameraQ3(): number;
    set cameraQ3(value: number);
    /**
     * Camera q4
     */
    get cameraQ4(): number;
    set cameraQ4(value: number);
    /**
     * altitude offset from target
     *
     * @units m
     */
    get altitudeOffset(): number;
    set altitudeOffset(value: number);
    /**
     * X offset from target
     *
     * @units m
     */
    get xOffset(): number;
    set xOffset(value: number);
    /**
     * Y offset from target
     *
     * @units m
     */
    get yOffset(): number;
    set yOffset(value: number);
}
/**
 * Sets the region of interest (ROI) for a sensor set or the vehicle itself. This can then be used by
 * the vehicle's control system to control the vehicle attitude and the attitude of various sensors
 * such as cameras.
 *
 * This command has location.
 */
export declare class NavRoiCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Region of interest mode.
     */
    get roiMode(): number;
    set roiMode(value: number);
    /**
     * Waypoint index/ target ID. (see MAV_ROI enum)
     *
     * @min: 0
     * @increment: 1
     */
    get wpIndex(): number;
    set wpIndex(value: number);
    /**
     * ROI index (allows a vehicle to manage multiple ROI's)
     *
     * @min: 0
     * @increment: 1
     */
    get roiIndex(): number;
    set roiIndex(value: number);
    /**
     * x the location of the fixed ROI (see MAV_FRAME)
     */
    get x(): number;
    set x(value: number);
    /**
     * y
     */
    get y(): number;
    set y(value: number);
    /**
     * z
     */
    get z(): number;
    set z(value: number);
}
/**
 * Control autonomous path planning on the MAV.
 *
 * This command has location.
 * This command is destination.
 */
export declare class NavPathplanningCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * 0: Disable local obstacle avoidance / local path planning (without resetting map), 1: Enable local
     * path planning, 2: Enable and reset local path planning
     *
     * @min: 0
     * @max: 2
     * @increment: 1
     */
    get localCtrl(): number;
    set localCtrl(value: number);
    /**
     * 0: Disable full path planning (without resetting map), 1: Enable, 2: Enable and reset map/occupancy
     * grid, 3: Enable and reset planned route, but not occupancy grid
     *
     * @min: 0
     * @max: 3
     * @increment: 1
     */
    get globalCtrl(): number;
    set globalCtrl(value: number);
    /**
     * Yaw angle at goal
     *
     * @units deg
     */
    get yaw(): number;
    set yaw(value: number);
    /**
     * Latitude/X of goal
     */
    get latitude(): number;
    set latitude(value: number);
    /**
     * Longitude/Y of goal
     */
    get longitude(): number;
    set longitude(value: number);
    /**
     * Altitude/Z of goal
     */
    get altitude(): number;
    set altitude(value: number);
}
/**
 * Navigate to waypoint using a spline path.
 *
 * This command has location.
 * This command is destination.
 */
export declare class NavSplineWaypointCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Hold time. (ignored by fixed wing, time to stay at waypoint for rotary wing)
     *
     * @units s
     * @min: 0
     */
    get hold(): number;
    set hold(value: number);
    /**
     * Latitude/X of goal
     */
    get latitude(): number;
    set latitude(value: number);
    /**
     * Longitude/Y of goal
     */
    get longitude(): number;
    set longitude(value: number);
    /**
     * Altitude/Z of goal
     */
    get altitude(): number;
    set altitude(value: number);
}
/**
 * Takeoff from ground using VTOL mode, and transition to forward flight with specified heading. The
 * command should be ignored by vehicles that dont support both VTOL and fixed-wing flight
 * (multicopters, boats,etc.).
 *
 * This command has location.
 * This command is destination.
 */
export declare class NavVtolTakeoffCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Front transition heading.
     */
    get transitionHeading(): number;
    set transitionHeading(value: number);
    /**
     * Yaw angle. NaN to use the current system yaw heading mode (e.g. yaw towards next waypoint, yaw to
     * home, etc.).
     *
     * @units deg
     */
    get yawAngle(): number;
    set yawAngle(value: number);
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
     * Altitude
     *
     * @units m
     */
    get altitude(): number;
    set altitude(value: number);
}
/**
 * Land using VTOL mode
 *
 * This command has location.
 * This command is destination.
 */
export declare class NavVtolLandCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Approach altitude (with the same reference as the Altitude field). NaN if unspecified.
     *
     * @units m
     */
    get approachAltitude(): number;
    set approachAltitude(value: number);
    /**
     * Yaw angle. NaN to use the current system yaw heading mode (e.g. yaw towards next waypoint, yaw to
     * home, etc.).
     *
     * @units deg
     */
    get yaw(): number;
    set yaw(value: number);
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
     * Altitude (ground level)
     *
     * @units m
     */
    get groundAltitude(): number;
    set groundAltitude(value: number);
}
/**
 * hand control over to an external controller
 */
export declare class NavGuidedEnableCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * On / Off (> 0.5f on)
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get enable(): number;
    set enable(value: number);
}
/**
 * Delay the next navigation command a number of seconds or until a specified time
 */
export declare class NavDelayCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Delay (-1 to enable time-of-day fields)
     *
     * @units s
     * @min: -1
     * @increment: 1
     */
    get delay(): number;
    set delay(value: number);
    /**
     * hour (24h format, UTC, -1 to ignore)
     *
     * @min: -1
     * @max: 23
     * @increment: 1
     */
    get hour(): number;
    set hour(value: number);
    /**
     * minute (24h format, UTC, -1 to ignore)
     *
     * @min: -1
     * @max: 59
     * @increment: 1
     */
    get minute(): number;
    set minute(value: number);
    /**
     * second (24h format, UTC, -1 to ignore)
     *
     * @min: -1
     * @max: 59
     * @increment: 1
     */
    get second(): number;
    set second(value: number);
}
/**
 * Descend and place payload. Vehicle moves to specified location, descends until it detects a hanging
 * payload has reached the ground, and then releases the payload. If ground is not detected before the
 * reaching the maximum descent value (param1), the command will complete without releasing the
 * payload.
 *
 * This command has location.
 * This command is destination.
 */
export declare class NavPayloadPlaceCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Maximum distance to descend.
     *
     * @units m
     * @min: 0
     */
    get maxDescent(): number;
    set maxDescent(value: number);
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
     * Altitude
     *
     * @units m
     */
    get altitude(): number;
    set altitude(value: number);
}
/**
 * NOP - This command is only used to mark the upper limit of the NAV/ACTION commands in the
 * enumeration
 */
export declare class NavLastCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
}
/**
 * Delay mission state machine.
 */
export declare class ConditionDelayCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Delay
     *
     * @units s
     * @min: 0
     */
    get delay(): number;
    set delay(value: number);
}
/**
 * Ascend/descend to target altitude at specified rate. Delay mission state machine until desired
 * altitude reached.
 *
 * This command is destination.
 */
export declare class ConditionChangeAltCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Descent / Ascend rate.
     *
     * @units m/s
     */
    get rate(): number;
    set rate(value: number);
    /**
     * Target Altitude
     *
     * @units m
     */
    get altitude(): number;
    set altitude(value: number);
}
/**
 * Delay mission state machine until within desired distance of next NAV point.
 */
export declare class ConditionDistanceCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Distance.
     *
     * @units m
     * @min: 0
     */
    get distance(): number;
    set distance(value: number);
}
/**
 * Reach a certain target angle.
 */
export declare class ConditionYawCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * target angle [0-360]. Absolute angles: 0 is north. Relative angle: 0 is initial yaw. Direction set
     * by param3.
     *
     * @units deg
     * @min: 0
     * @max: 360
     */
    get angle(): number;
    set angle(value: number);
    /**
     * angular speed
     *
     * @units deg/s
     * @min: 0
     */
    get angularSpeed(): number;
    set angularSpeed(value: number);
    /**
     * direction: -1: counter clockwise, 0: shortest direction, 1: clockwise
     *
     * @min: -1
     * @max: 1
     * @increment: 1
     */
    get direction(): number;
    set direction(value: number);
    /**
     * 0: absolute angle, 1: relative offset
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get relative(): number;
    set relative(value: number);
}
/**
 * NOP - This command is only used to mark the upper limit of the CONDITION commands in the enumeration
 */
export declare class ConditionLastCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
}
/**
 * Set system mode.
 */
export declare class DoSetModeCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Mode
     */
    get mode(): number;
    set mode(value: number);
    /**
     * Custom mode - this is system specific, please refer to the individual autopilot specifications for
     * details.
     */
    get customMode(): number;
    set customMode(value: number);
    /**
     * Custom sub mode - this is system specific, please refer to the individual autopilot specifications
     * for details.
     */
    get customSubmode(): number;
    set customSubmode(value: number);
}
/**
 * Jump to the desired command in the mission list. Repeat this action only the specified number of
 * times
 */
export declare class DoJumpCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Sequence number
     *
     * @min: 0
     * @increment: 1
     */
    get number(): number;
    set number(value: number);
    /**
     * Repeat count
     *
     * @min: 0
     * @increment: 1
     */
    get repeat(): number;
    set repeat(value: number);
}
/**
 * Change speed and/or throttle set points
 */
export declare class DoChangeSpeedCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Speed type of value set in param2 (such as airspeed, ground speed, and so on)
     */
    get speedType(): number;
    set speedType(value: number);
    /**
     * Speed (-1 indicates no change, -2 indicates return to default vehicle speed)
     *
     * @units m/s
     * @min: -2
     */
    get speed(): number;
    set speed(value: number);
    /**
     * Throttle (-1 indicates no change, -2 indicates return to default vehicle throttle value)
     *
     * @units %
     * @min: -2
     */
    get throttle(): number;
    set throttle(value: number);
    /**
     * 0: absolute, 1: relative
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get relative(): number;
    set relative(value: number);
}
/**
 * Changes the home location either to the current location or a specified location.
 *
 * This command has location.
 */
export declare class DoSetHomeCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Use current (1=use current location, 0=use specified location)
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get useCurrent(): number;
    set useCurrent(value: number);
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
     * Altitude
     *
     * @units m
     */
    get altitude(): number;
    set altitude(value: number);
}
/**
 * Set a system parameter. Caution! Use of this command requires knowledge of the numeric enumeration
 * value of the parameter.
 */
export declare class DoSetParameterCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Parameter number
     *
     * @min: 0
     * @increment: 1
     */
    get number(): number;
    set number(value: number);
    /**
     * Parameter value
     */
    get value(): number;
    set value(value: number);
}
/**
 * Set a relay to a condition.
 */
export declare class DoSetRelayCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Relay instance number.
     *
     * @min: 0
     * @increment: 1
     */
    get instance(): number;
    set instance(value: number);
    /**
     * Setting. (1=on, 0=off, others possible depending on system hardware)
     *
     * @min: 0
     * @increment: 1
     */
    get setting(): number;
    set setting(value: number);
}
/**
 * Cycle a relay on and off for a desired number of cycles with a desired period.
 */
export declare class DoRepeatRelayCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Relay instance number.
     *
     * @min: 0
     * @increment: 1
     */
    get instance(): number;
    set instance(value: number);
    /**
     * Cycle count.
     *
     * @min: 1
     * @increment: 1
     */
    get count(): number;
    set count(value: number);
    /**
     * Cycle time.
     *
     * @units s
     * @min: 0
     */
    get time(): number;
    set time(value: number);
}
/**
 * Set a servo to a desired PWM value.
 */
export declare class DoSetServoCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Servo instance number.
     *
     * @min: 0
     * @increment: 1
     */
    get instance(): number;
    set instance(value: number);
    /**
     * Pulse Width Modulation.
     *
     * @units us
     * @min: 0
     * @increment: 1
     */
    get pwm(): number;
    set pwm(value: number);
}
/**
 * Cycle a between its nominal setting and a desired PWM for a desired number of cycles with a desired
 * period.
 */
export declare class DoRepeatServoCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Servo instance number.
     *
     * @min: 0
     * @increment: 1
     */
    get instance(): number;
    set instance(value: number);
    /**
     * Pulse Width Modulation.
     *
     * @units us
     * @min: 0
     * @increment: 1
     */
    get pwm(): number;
    set pwm(value: number);
    /**
     * Cycle count.
     *
     * @min: 1
     * @increment: 1
     */
    get count(): number;
    set count(value: number);
    /**
     * Cycle time.
     *
     * @units s
     * @min: 0
     */
    get time(): number;
    set time(value: number);
}
/**
 * Terminate flight immediately
 */
export declare class DoFlightterminationCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Flight termination activated if > 0.5
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get terminate(): number;
    set terminate(value: number);
}
/**
 * Change altitude set point.
 */
export declare class DoChangeAltitudeCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Altitude.
     *
     * @units m
     */
    get altitude(): number;
    set altitude(value: number);
    /**
     * Frame of new altitude.
     */
    get frame(): number;
    set frame(value: number);
}
/**
 * Mission command to perform a landing. This is used as a marker in a mission to tell the autopilot
 * where a sequence of mission items that represents a landing starts. 	 It may also be sent via a
 * COMMAND_LONG to trigger a landing, in which case the nearest (geographically) landing sequence in
 * the mission will be used. 	 The Latitude/Longitude/Altitude is optional, and may be set to 0 if not
 * needed. If specified then it will be used to help find the closest landing sequence.
 *
 * This command has location.
 */
export declare class DoLandStartCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
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
     * Altitude
     *
     * @units m
     */
    get altitude(): number;
    set altitude(value: number);
}
/**
 * Mission command to perform a landing from a rally point.
 */
export declare class DoRallyLandCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Break altitude
     *
     * @units m
     */
    get altitude(): number;
    set altitude(value: number);
    /**
     * Landing speed
     *
     * @units m/s
     */
    get speed(): number;
    set speed(value: number);
}
/**
 * Mission command to safely abort an autonomous landing.
 */
export declare class DoGoAroundCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Altitude
     *
     * @units m
     */
    get altitude(): number;
    set altitude(value: number);
}
/**
 * Reposition the vehicle to a specific WGS84 global position.
 *
 * This command has location.
 * This command is destination.
 */
export declare class DoRepositionCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Ground speed, less than 0 (-1) for default
     *
     * @units m/s
     * @min: -1
     */
    get speed(): number;
    set speed(value: number);
    /**
     * Bitmask of option flags.
     */
    get bitmask(): number;
    set bitmask(value: number);
    /**
     * Loiter radius for planes. Positive values only, direction is controlled by Yaw value. A value of
     * zero or NaN is ignored.
     *
     * @units m
     */
    get radius(): number;
    set radius(value: number);
    /**
     * Yaw heading. NaN to use the current system yaw heading mode (e.g. yaw towards next waypoint, yaw to
     * home, etc.). For planes indicates loiter direction (0: clockwise, 1: counter clockwise)
     *
     * @units deg
     */
    get yaw(): number;
    set yaw(value: number);
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
     * Altitude
     *
     * @units m
     */
    get altitude(): number;
    set altitude(value: number);
}
/**
 * If in a GPS controlled position mode, hold the current position or continue.
 */
export declare class DoPauseContinueCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * 0: Pause current mission or reposition command, hold current position. 1: Continue mission. A VTOL
     * capable vehicle should enter hover mode (multicopter and VTOL planes). A plane should loiter with
     * the default loiter radius.
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get continue(): number;
    set continue(value: number);
}
/**
 * Set moving direction to forward or reverse.
 */
export declare class DoSetReverseCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Direction (0=Forward, 1=Reverse)
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get reverse(): number;
    set reverse(value: number);
}
/**
 * Sets the region of interest (ROI) to a location. This can then be used by the vehicle's control
 * system to control the vehicle attitude and the attitude of various sensors such as cameras.
 *
 * This command has location.
 */
export declare class DoSetRoiLocationCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Latitude of ROI location
     */
    get latitude(): number;
    set latitude(value: number);
    /**
     * Longitude of ROI location
     */
    get longitude(): number;
    set longitude(value: number);
    /**
     * Altitude of ROI location
     *
     * @units m
     */
    get altitude(): number;
    set altitude(value: number);
}
/**
 * Sets the region of interest (ROI) to be toward next waypoint, with optional pitch/roll/yaw offset.
 * This can then be used by the vehicle's control system to control the vehicle attitude and the
 * attitude of various sensors such as cameras.
 */
export declare class DoSetRoiWpnextOffsetCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Pitch offset from next waypoint, positive pitching up
     */
    get pitchOffset(): number;
    set pitchOffset(value: number);
    /**
     * Roll offset from next waypoint, positive rolling to the right
     */
    get rollOffset(): number;
    set rollOffset(value: number);
    /**
     * Yaw offset from next waypoint, positive yawing to the right
     */
    get yawOffset(): number;
    set yawOffset(value: number);
}
/**
 * Cancels any previous ROI command returning the vehicle/sensors to default flight characteristics.
 * This can then be used by the vehicle's control system to control the vehicle attitude and the
 * attitude of various sensors such as cameras.
 */
export declare class DoSetRoiNoneCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
}
/**
 * Mount tracks system with specified system ID. Determination of target vehicle position may be done
 * with GLOBAL_POSITION_INT or any other means.
 */
export declare class DoSetRoiSysidCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * System ID
     *
     * @min: 1
     * @max: 255
     * @increment: 1
     */
    get systemId(): number;
    set systemId(value: number);
}
/**
 * Control onboard camera system.
 */
export declare class DoControlVideoCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Camera ID (-1 for all)
     *
     * @min: -1
     * @increment: 1
     */
    get id(): number;
    set id(value: number);
    /**
     * Transmission: 0: disabled, 1: enabled compressed, 2: enabled raw
     *
     * @min: 0
     * @max: 2
     * @increment: 1
     */
    get transmission(): number;
    set transmission(value: number);
    /**
     * Transmission mode: 0: video stream, >0: single images every n seconds
     *
     * @units s
     * @min: 0
     */
    get interval(): number;
    set interval(value: number);
    /**
     * Recording: 0: disabled, 1: enabled compressed, 2: enabled raw
     *
     * @min: 0
     * @max: 2
     * @increment: 1
     */
    get recording(): number;
    set recording(value: number);
}
/**
 * Sets the region of interest (ROI) for a sensor set or the vehicle itself. This can then be used by
 * the vehicle's control system to control the vehicle attitude and the attitude of various sensors
 * such as cameras.
 *
 * This command has location.
 */
export declare class DoSetRoiCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Region of interest mode.
     */
    get roiMode(): number;
    set roiMode(value: number);
    /**
     * Waypoint index/ target ID (depends on param 1).
     *
     * @min: 0
     * @increment: 1
     */
    get wpIndex(): number;
    set wpIndex(value: number);
    /**
     * Region of interest index. (allows a vehicle to manage multiple ROI's)
     *
     * @min: 0
     * @increment: 1
     */
    get roiIndex(): number;
    set roiIndex(value: number);
}
/**
 * Configure digital camera. This is a fallback message for systems that have not yet implemented
 * PARAM_EXT_XXX messages and camera definition files (see
 * https://mavlink.io/en/services/camera_def.html ).
 */
export declare class DoDigicamConfigureCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Modes: P, TV, AV, M, Etc.
     *
     * @min: 0
     * @increment: 1
     */
    get mode(): number;
    set mode(value: number);
    /**
     * Shutter speed: Divisor number for one second.
     *
     * @min: 0
     * @increment: 1
     */
    get shutterSpeed(): number;
    set shutterSpeed(value: number);
    /**
     * Aperture: F stop number.
     *
     * @min: 0
     */
    get aperture(): number;
    set aperture(value: number);
    /**
     * ISO number e.g. 80, 100, 200, Etc.
     *
     * @min: 0
     * @increment: 1
     */
    get iso(): number;
    set iso(value: number);
    /**
     * Exposure type enumerator.
     */
    get exposure(): number;
    set exposure(value: number);
    /**
     * Command Identity.
     */
    get cmdIdentity(): number;
    set cmdIdentity(value: number);
    /**
     * Main engine cut-off time before camera trigger. (0 means no cut-off)
     *
     * @units ds
     * @min: 0
     * @increment: 1
     */
    get engineCutOff(): number;
    set engineCutOff(value: number);
}
/**
 * Control digital camera. This is a fallback message for systems that have not yet implemented
 * PARAM_EXT_XXX messages and camera definition files (see
 * https://mavlink.io/en/services/camera_def.html ).
 */
export declare class DoDigicamControlCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Session control e.g. show/hide lens
     */
    get sessionControl(): number;
    set sessionControl(value: number);
    /**
     * Zoom's absolute position
     */
    get zoomAbsolute(): number;
    set zoomAbsolute(value: number);
    /**
     * Zooming step value to offset zoom from the current position
     */
    get zoomRelative(): number;
    set zoomRelative(value: number);
    /**
     * Focus Locking, Unlocking or Re-locking
     */
    get focus(): number;
    set focus(value: number);
    /**
     * Shooting Command
     */
    get shootCommand(): number;
    set shootCommand(value: number);
    /**
     * Command Identity
     */
    get cmdIdentity(): number;
    set cmdIdentity(value: number);
    /**
     * Test shot identifier. If set to 1, image will only be captured, but not counted towards internal
     * frame count.
     */
    get shotId(): number;
    set shotId(value: number);
}
/**
 * Mission command to configure a camera or antenna mount
 */
export declare class DoMountConfigureCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Mount operation mode
     */
    get mode(): number;
    set mode(value: number);
    /**
     * stabilize roll? (1 = yes, 0 = no)
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get stabilizeRoll(): number;
    set stabilizeRoll(value: number);
    /**
     * stabilize pitch? (1 = yes, 0 = no)
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get stabilizePitch(): number;
    set stabilizePitch(value: number);
    /**
     * stabilize yaw? (1 = yes, 0 = no)
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get stabilizeYaw(): number;
    set stabilizeYaw(value: number);
}
/**
 * Mission command to control a camera or antenna mount
 */
export declare class DoMountControlCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Mount mode.
     */
    get mode(): number;
    set mode(value: number);
}
/**
 * Mission command to set camera trigger distance for this flight. The camera is triggered each time
 * this distance is exceeded. This command can also be used to set the shutter integration time for the
 * camera.
 */
export declare class DoSetCamTriggDistCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Camera trigger distance. 0 to stop triggering.
     *
     * @units m
     * @min: 0
     */
    get distance(): number;
    set distance(value: number);
    /**
     * Camera shutter integration time. -1 or 0 to ignore
     *
     * @units ms
     * @min: -1
     * @increment: 1
     */
    get shutter(): number;
    set shutter(value: number);
    /**
     * Trigger camera once immediately. (0 = no trigger, 1 = trigger)
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get trigger(): number;
    set trigger(value: number);
}
/**
 * Mission command to enable the geofence
 */
export declare class DoFenceEnableCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * enable? (0=disable, 1=enable, 2=disable_floor_only)
     *
     * @min: 0
     * @max: 2
     * @increment: 1
     */
    get enable(): number;
    set enable(value: number);
    /**
     * Fence types to enable or disable as a bitmask. A value of 0 indicates that all fences should be
     * enabled or disabled. This parameter is ignored if param 1 has the value 2
     */
    get types(): number;
    set types(value: number);
}
/**
 * Mission item/command to release a parachute or enable/disable auto release.
 */
export declare class DoParachuteCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Action
     */
    get action(): number;
    set action(value: number);
}
/**
 * Mission command to perform motor test.
 */
export declare class DoMotorTestCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Motor instance number. (from 1 to max number of motors on the vehicle)
     *
     * @min: 1
     * @increment: 1
     */
    get instance(): number;
    set instance(value: number);
    /**
     * Throttle type.
     */
    get throttleType(): number;
    set throttleType(value: number);
    /**
     * Throttle.
     */
    get throttle(): number;
    set throttle(value: number);
    /**
     * Timeout.
     *
     * @units s
     * @min: 0
     */
    get timeout(): number;
    set timeout(value: number);
    /**
     * Motor count. (number of motors to test to test in sequence, waiting for the timeout above between
     * them; 0=1 motor, 1=1 motor, 2=2 motors...)
     *
     * @min: 0
     * @increment: 1
     */
    get motorCount(): number;
    set motorCount(value: number);
    /**
     * Motor test order.
     */
    get testOrder(): number;
    set testOrder(value: number);
}
/**
 * Change to/from inverted flight.
 */
export declare class DoInvertedFlightCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Inverted flight. (0=normal, 1=inverted)
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get inverted(): number;
    set inverted(value: number);
}
/**
 * Mission command to operate a gripper.
 */
export declare class DoGripperCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Gripper instance number.
     *
     * @min: 1
     * @increment: 1
     */
    get instance(): number;
    set instance(value: number);
    /**
     * Gripper action to perform.
     */
    get action(): number;
    set action(value: number);
}
/**
 * Enable/disable autotune.
 */
export declare class DoAutotuneEnableCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Enable (1: enable, 0:disable).
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get enable(): number;
    set enable(value: number);
    /**
     * Specify which axes are autotuned. 0 indicates autopilot default settings.
     */
    get axis(): number;
    set axis(value: number);
}
/**
 * Sets a desired vehicle turn angle and speed change.
 */
export declare class NavSetYawSpeedCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Yaw angle to adjust steering by.
     *
     * @units deg
     */
    get yaw(): number;
    set yaw(value: number);
    /**
     * Speed.
     *
     * @units m/s
     */
    get speed(): number;
    set speed(value: number);
    /**
     * Final angle. (0=absolute, 1=relative)
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get angle(): number;
    set angle(value: number);
}
/**
 * Mission command to set camera trigger interval for this flight. If triggering is enabled, the camera
 * is triggered each time this interval expires. This command can also be used to set the shutter
 * integration time for the camera.
 */
export declare class DoSetCamTriggIntervalCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Camera trigger cycle time. -1 or 0 to ignore.
     *
     * @units ms
     * @min: -1
     * @increment: 1
     */
    get triggerCycle(): number;
    set triggerCycle(value: number);
    /**
     * Camera shutter integration time. Should be less than trigger cycle time. -1 or 0 to ignore.
     *
     * @units ms
     * @min: -1
     * @increment: 1
     */
    get shutterIntegration(): number;
    set shutterIntegration(value: number);
}
/**
 * Mission command to control a camera or antenna mount, using a quaternion as reference.
 */
export declare class DoMountControlQuatCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * quaternion param q1, w (1 in null-rotation)
     */
    get q1(): number;
    set q1(value: number);
    /**
     * quaternion param q2, x (0 in null-rotation)
     */
    get q2(): number;
    set q2(value: number);
    /**
     * quaternion param q3, y (0 in null-rotation)
     */
    get q3(): number;
    set q3(value: number);
    /**
     * quaternion param q4, z (0 in null-rotation)
     */
    get q4(): number;
    set q4(value: number);
}
/**
 * set id of master controller
 */
export declare class DoGuidedMasterCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * System ID
     *
     * @min: 0
     * @max: 255
     * @increment: 1
     */
    get systemId(): number;
    set systemId(value: number);
    /**
     * Component ID
     *
     * @min: 0
     * @max: 255
     * @increment: 1
     */
    get componentId(): number;
    set componentId(value: number);
}
/**
 * Set limits for external control
 */
export declare class DoGuidedLimitsCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Timeout - maximum time that external controller will be allowed to control vehicle. 0 means no
     * timeout.
     *
     * @units s
     * @min: 0
     */
    get timeout(): number;
    set timeout(value: number);
    /**
     * Altitude (MSL) min - if vehicle moves below this alt, the command will be aborted and the mission
     * will continue. 0 means no lower altitude limit.
     *
     * @units m
     */
    get minAltitude(): number;
    set minAltitude(value: number);
    /**
     * Altitude (MSL) max - if vehicle moves above this alt, the command will be aborted and the mission
     * will continue. 0 means no upper altitude limit.
     *
     * @units m
     */
    get maxAltitude(): number;
    set maxAltitude(value: number);
    /**
     * Horizontal move limit - if vehicle moves more than this distance from its location at the moment the
     * command was executed, the command will be aborted and the mission will continue. 0 means no
     * horizontal move limit.
     *
     * @units m
     * @min: 0
     */
    get horizMoveLimit(): number;
    set horizMoveLimit(value: number);
}
/**
 * Control vehicle engine. This is interpreted by the vehicles engine controller to change the target
 * engine state. It is intended for vehicles with internal combustion engines
 */
export declare class DoEngineControlCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * 0: Stop engine, 1:Start Engine
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get startEngine(): number;
    set startEngine(value: number);
    /**
     * 0: Warm start, 1:Cold start. Controls use of choke where applicable
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get coldStart(): number;
    set coldStart(value: number);
    /**
     * Height delay. This is for commanding engine start only after the vehicle has gained the specified
     * height. Used in VTOL vehicles during takeoff to start engine after the aircraft is off the ground.
     * Zero for no delay.
     *
     * @units m
     * @min: 0
     */
    get heightDelay(): number;
    set heightDelay(value: number);
    /**
     * A bitmask of options for engine control
     */
    get options(): number;
    set options(value: number);
}
/**
 * Set the mission item with sequence number seq as current item. This means that the MAV will continue
 * to this mission item on the shortest path (not following the mission items in-between).
 */
export declare class DoSetMissionCurrentCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Mission sequence value to set
     *
     * @min: 0
     * @increment: 1
     */
    get number(): number;
    set number(value: number);
}
/**
 * NOP - This command is only used to mark the upper limit of the DO commands in the enumeration
 */
export declare class DoLastCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
}
/**
 * Trigger calibration. This command will be only accepted if in pre-flight mode. Except for
 * Temperature Calibration, only one sensor should be set in a single message and all others should be
 * zero.
 */
export declare class PreflightCalibrationCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * 1: gyro calibration, 3: gyro temperature calibration
     *
     * @min: 0
     * @max: 3
     * @increment: 1
     */
    get gyroTemperature(): number;
    set gyroTemperature(value: number);
    /**
     * 1: magnetometer calibration
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get magnetometer(): number;
    set magnetometer(value: number);
    /**
     * 1: ground pressure calibration
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get groundPressure(): number;
    set groundPressure(value: number);
    /**
     * 1: radio RC calibration, 2: RC trim calibration
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get remoteControl(): number;
    set remoteControl(value: number);
    /**
     * 1: accelerometer calibration, 2: board level calibration, 3: accelerometer temperature calibration,
     * 4: simple accelerometer calibration
     *
     * @min: 0
     * @max: 4
     * @increment: 1
     */
    get accelerometer(): number;
    set accelerometer(value: number);
    /**
     * 1: APM: compass/motor interference calibration (PX4: airspeed calibration, deprecated), 2: airspeed
     * calibration
     *
     * @min: 0
     * @max: 2
     * @increment: 1
     */
    get compmotOrAirspeed(): number;
    set compmotOrAirspeed(value: number);
    /**
     * 1: ESC calibration, 3: barometer temperature calibration
     *
     * @min: 0
     * @max: 3
     * @increment: 1
     */
    get escOrBaro(): number;
    set escOrBaro(value: number);
}
/**
 * Set sensor offsets. This command will be only accepted if in pre-flight mode.
 */
export declare class PreflightSetSensorOffsetsCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Sensor to adjust the offsets for: 0: gyros, 1: accelerometer, 2: magnetometer, 3: barometer, 4:
     * optical flow, 5: second magnetometer, 6: third magnetometer
     *
     * @min: 0
     * @max: 6
     * @increment: 1
     */
    get sensorType(): number;
    set sensorType(value: number);
    /**
     * X axis offset (or generic dimension 1), in the sensor's raw units
     */
    get xOffset(): number;
    set xOffset(value: number);
    /**
     * Y axis offset (or generic dimension 2), in the sensor's raw units
     */
    get yOffset(): number;
    set yOffset(value: number);
    /**
     * Z axis offset (or generic dimension 3), in the sensor's raw units
     */
    get zOffset(): number;
    set zOffset(value: number);
    /**
     * Generic dimension 4, in the sensor's raw units
     */
    get fourthDimension(): number;
    set fourthDimension(value: number);
    /**
     * Generic dimension 5, in the sensor's raw units
     */
    get fifthDimension(): number;
    set fifthDimension(value: number);
    /**
     * Generic dimension 6, in the sensor's raw units
     */
    get sixthDimension(): number;
    set sixthDimension(value: number);
}
/**
 * Trigger UAVCAN configuration (actuator ID assignment and direction mapping). Note that this maps to
 * the legacy UAVCAN v0 function UAVCAN_ENUMERATE, which is intended to be executed just once during
 * initial vehicle configuration (it is not a normal pre-flight command and has been poorly named).
 */
export declare class PreflightUavcanCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * 1: Trigger actuator ID assignment and direction mapping. 0: Cancel command.
     */
    get actuatorId(): number;
    set actuatorId(value: number);
}
/**
 * Request storage of different parameter values and logs. This command will be only accepted if in
 * pre-flight mode.
 */
export declare class PreflightStorageCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Parameter storage: 0: READ FROM FLASH/EEPROM, 1: WRITE CURRENT TO FLASH/EEPROM, 2: Reset to defaults
     *
     * @min: 0
     * @max: 2
     * @increment: 1
     */
    get parameterStorage(): number;
    set parameterStorage(value: number);
    /**
     * Mission storage: 0: READ FROM FLASH/EEPROM, 1: WRITE CURRENT TO FLASH/EEPROM, 2: Reset to defaults
     *
     * @min: 0
     * @max: 2
     * @increment: 1
     */
    get missionStorage(): number;
    set missionStorage(value: number);
    /**
     * Onboard logging: 0: Ignore, 1: Start default rate logging, -1: Stop logging, > 1: logging rate (e.g.
     * set to 1000 for 1000 Hz logging)
     *
     * @units Hz
     * @min: -1
     * @increment: 1
     */
    get loggingRate(): number;
    set loggingRate(value: number);
}
/**
 * Request the reboot or shutdown of system components.
 */
export declare class PreflightRebootShutdownCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * 0: Do nothing for autopilot, 1: Reboot autopilot, 2: Shutdown autopilot, 3: Reboot autopilot and
     * keep it in the bootloader until upgraded.
     *
     * @min: 0
     * @max: 3
     * @increment: 1
     */
    get autopilot(): number;
    set autopilot(value: number);
    /**
     * 0: Do nothing for onboard computer, 1: Reboot onboard computer, 2: Shutdown onboard computer, 3:
     * Reboot onboard computer and keep it in the bootloader until upgraded.
     *
     * @min: 0
     * @max: 3
     * @increment: 1
     */
    get companion(): number;
    set companion(value: number);
}
/**
 * Override current mission with command to pause mission, pause mission and move to position,
 * continue/resume mission. When param 1 indicates that the mission is paused (MAV_GOTO_DO_HOLD), param
 * 2 defines whether it holds in place or moves to another position.
 *
 * This command has location.
 * This command is destination.
 */
export declare class OverrideGotoCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * MAV_GOTO_DO_HOLD: pause mission and either hold or move to specified position (depending on param2),
     * MAV_GOTO_DO_CONTINUE: resume mission.
     */
    get continue(): number;
    set continue(value: number);
    /**
     * MAV_GOTO_HOLD_AT_CURRENT_POSITION: hold at current position, MAV_GOTO_HOLD_AT_SPECIFIED_POSITION:
     * hold at specified position.
     */
    get position(): number;
    set position(value: number);
    /**
     * Coordinate frame of hold point.
     */
    get frame(): number;
    set frame(value: number);
    /**
     * Desired yaw angle.
     *
     * @units deg
     */
    get yaw(): number;
    set yaw(value: number);
    /**
     * Latitude/X position.
     */
    get latitude(): number;
    set latitude(value: number);
    /**
     * Longitude/Y position.
     */
    get longitude(): number;
    set longitude(value: number);
    /**
     * Altitude/Z position.
     */
    get altitude(): number;
    set altitude(value: number);
}
/**
 * Mission command to set a Camera Auto Mount Pivoting Oblique Survey (Replaces CAM_TRIGG_DIST for this
 * purpose). The camera is triggered each time this distance is exceeded, then the mount moves to the
 * next position. Params 4~6 set-up the angle limits and number of positions for oblique survey, where
 * mount-enabled vehicles automatically roll the camera between shots to emulate an oblique camera
 * setup (providing an increased HFOV). This command can also be used to set the shutter integration
 * time for the camera.
 */
export declare class ObliqueSurveyCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Camera trigger distance. 0 to stop triggering.
     *
     * @units m
     * @min: 0
     */
    get distance(): number;
    set distance(value: number);
    /**
     * Camera shutter integration time. 0 to ignore
     *
     * @units ms
     * @min: 0
     * @increment: 1
     */
    get shutter(): number;
    set shutter(value: number);
    /**
     * The minimum interval in which the camera is capable of taking subsequent pictures repeatedly. 0 to
     * ignore.
     *
     * @units ms
     * @min: 0
     * @max: 10000
     * @increment: 1
     */
    get minInterval(): number;
    set minInterval(value: number);
    /**
     * Total number of roll positions at which the camera will capture photos (images captures spread
     * evenly across the limits defined by param5).
     *
     * @min: 2
     * @increment: 1
     */
    get positions(): number;
    set positions(value: number);
    /**
     * Angle limits that the camera can be rolled to left and right of center.
     *
     * @units deg
     * @min: 0
     */
    get rollAngle(): number;
    set rollAngle(value: number);
    /**
     * Fixed pitch angle that the camera will hold in oblique mode if the mount is actuated in the pitch
     * axis.
     *
     * @units deg
     * @min: -180
     * @max: 180
     */
    get pitchAngle(): number;
    set pitchAngle(value: number);
}
/**
 * start running a mission
 */
export declare class MissionStartCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * first_item: the first mission item to run
     *
     * @min: 0
     * @increment: 1
     */
    get firstItem(): number;
    set firstItem(value: number);
    /**
     * last_item: the last mission item to run (after this item is run, the mission ends)
     *
     * @min: 0
     * @increment: 1
     */
    get lastItem(): number;
    set lastItem(value: number);
}
/**
 * Arms / Disarms a component
 */
export declare class ComponentArmDisarmCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * 0: disarm, 1: arm
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get arm(): number;
    set arm(value: number);
    /**
     * 0: arm-disarm unless prevented by safety checks (i.e. when landed), 21196: force arming/disarming
     * (e.g. allow arming to override preflight checks and disarming in flight)
     *
     * @min: 0
     * @max: 21196
     * @increment: 21196
     */
    get force(): number;
    set force(value: number);
}
/**
 * Instructs system to run pre-arm checks. This command should return MAV_RESULT_TEMPORARILY_REJECTED
 * in the case the system is armed, otherwse MAV_RESULT_ACCEPTED. Note that the return value from
 * executing this command does not indicate whether the vehicle is armable or not, just whether the
 * system has successfully run/is currently running the checks. The result of the checks is reflected
 * in the SYS_STATUS message.
 */
export declare class RunPrearmChecksCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
}
/**
 * Request the home position from the vehicle.
 */
export declare class GetHomePositionCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
}
/**
 * Starts receiver pairing.
 */
export declare class StartRxPairCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * 0:Spektrum.
     */
    get spektrum(): number;
    set spektrum(value: number);
    /**
     * RC type.
     */
    get rcType(): number;
    set rcType(value: number);
}
/**
 * Request the interval between messages for a particular MAVLink message ID. The receiver should ACK
 * the command and then emit its response in a MESSAGE_INTERVAL message.
 */
export declare class GetMessageIntervalCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * The MAVLink message ID
     *
     * @min: 0
     * @max: 16777215
     * @increment: 1
     */
    get messageId(): number;
    set messageId(value: number);
}
/**
 * Set the interval between messages for a particular MAVLink message ID. This interface replaces
 * REQUEST_DATA_STREAM.
 */
export declare class SetMessageIntervalCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * The MAVLink message ID
     *
     * @min: 0
     * @max: 16777215
     * @increment: 1
     */
    get messageId(): number;
    set messageId(value: number);
    /**
     * The interval between two messages. Set to -1 to disable and 0 to request default rate.
     *
     * @units us
     * @min: -1
     * @increment: 1
     */
    get interval(): number;
    set interval(value: number);
    /**
     * Target address of message stream (if message has target address fields). 0: Flight-stack default
     * (recommended), 1: address of requestor, 2: broadcast.
     *
     * @min: 0
     * @max: 2
     * @increment: 1
     */
    get responseTarget(): number;
    set responseTarget(value: number);
}
/**
 * Request the target system(s) emit a single instance of a specified message (i.e. a "one-shot"
 * version of MAV_CMD_SET_MESSAGE_INTERVAL).
 */
export declare class RequestMessageCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * The MAVLink message ID of the requested message.
     *
     * @min: 0
     * @max: 16777215
     * @increment: 1
     */
    get messageId(): number;
    set messageId(value: number);
    /**
     * Use for index ID, if required. Otherwise, the use of this parameter (if any) must be defined in the
     * requested message. By default assumed not used (0).
     */
    get reqParam1(): number;
    set reqParam1(value: number);
    /**
     * The use of this parameter (if any), must be defined in the requested message. By default assumed not
     * used (0).
     */
    get reqParam2(): number;
    set reqParam2(value: number);
    /**
     * The use of this parameter (if any), must be defined in the requested message. By default assumed not
     * used (0).
     */
    get reqParam3(): number;
    set reqParam3(value: number);
    /**
     * The use of this parameter (if any), must be defined in the requested message. By default assumed not
     * used (0).
     */
    get reqParam4(): number;
    set reqParam4(value: number);
    /**
     * The use of this parameter (if any), must be defined in the requested message. By default assumed not
     * used (0).
     */
    get reqParam5(): number;
    set reqParam5(value: number);
    /**
     * Target address for requested message (if message has target address fields). 0: Flight-stack
     * default, 1: address of requestor, 2: broadcast.
     *
     * @min: 0
     * @max: 2
     * @increment: 1
     */
    get responseTarget(): number;
    set responseTarget(value: number);
}
/**
 * Request MAVLink protocol version compatibility. All receivers should ACK the command and then emit
 * their capabilities in an PROTOCOL_VERSION message
 */
export declare class RequestProtocolVersionCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * 1: Request supported protocol versions by all nodes on the network
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get protocol(): number;
    set protocol(value: number);
}
/**
 * Request autopilot capabilities. The receiver should ACK the command and then emit its capabilities
 * in an AUTOPILOT_VERSION message
 */
export declare class RequestAutopilotCapabilitiesCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * 1: Request autopilot version
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get version(): number;
    set version(value: number);
}
/**
 * Request camera information (CAMERA_INFORMATION).
 */
export declare class RequestCameraInformationCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * 0: No action 1: Request camera capabilities
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get capabilities(): number;
    set capabilities(value: number);
}
/**
 * Request camera settings (CAMERA_SETTINGS).
 */
export declare class RequestCameraSettingsCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * 0: No Action 1: Request camera settings
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get settings(): number;
    set settings(value: number);
}
/**
 * Request storage information (STORAGE_INFORMATION). Use the command's target_component to target a
 * specific component's storage.
 */
export declare class RequestStorageInformationCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Storage ID (0 for all, 1 for first, 2 for second, etc.)
     *
     * @min: 0
     * @increment: 1
     */
    get storageId(): number;
    set storageId(value: number);
    /**
     * 0: No Action 1: Request storage information
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get information(): number;
    set information(value: number);
}
/**
 * Format a storage medium. Once format is complete, a STORAGE_INFORMATION message is sent. Use the
 * command's target_component to target a specific component's storage.
 */
export declare class StorageFormatCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Storage ID (1 for first, 2 for second, etc.)
     *
     * @min: 0
     * @increment: 1
     */
    get storageId(): number;
    set storageId(value: number);
    /**
     * 0: No action 1: Format storage
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get format(): number;
    set format(value: number);
}
/**
 * Request camera capture status (CAMERA_CAPTURE_STATUS)
 */
export declare class RequestCameraCaptureStatusCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * 0: No Action 1: Request camera capture status
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get captureStatus(): number;
    set captureStatus(value: number);
}
/**
 * Request flight information (FLIGHT_INFORMATION)
 */
export declare class RequestFlightInformationCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * 1: Request flight information
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get flightInformation(): number;
    set flightInformation(value: number);
}
/**
 * Reset all camera settings to Factory Default
 */
export declare class ResetCameraSettingsCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * 0: No Action 1: Reset all settings
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get reset(): number;
    set reset(value: number);
}
/**
 * Set camera running mode. Use NaN for reserved values. GCS will send a
 * MAV_CMD_REQUEST_VIDEO_STREAM_STATUS command after a mode change if the camera supports video
 * streaming.
 */
export declare class SetCameraModeCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Camera mode
     */
    get cameraMode(): number;
    set cameraMode(value: number);
}
/**
 * Set camera zoom. Camera must respond with a CAMERA_SETTINGS message (on success).
 */
export declare class SetCameraZoomCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Zoom type
     */
    get zoomType(): number;
    set zoomType(value: number);
    /**
     * Zoom value. The range of valid values depend on the zoom type.
     */
    get zoomValue(): number;
    set zoomValue(value: number);
}
/**
 * Set camera focus. Camera must respond with a CAMERA_SETTINGS message (on success).
 */
export declare class SetCameraFocusCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Focus type
     */
    get focusType(): number;
    set focusType(value: number);
    /**
     * Focus value
     */
    get focusValue(): number;
    set focusValue(value: number);
}
/**
 * Tagged jump target. Can be jumped to with MAV_CMD_DO_JUMP_TAG.
 */
export declare class JumpTagCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Tag.
     *
     * @min: 0
     * @increment: 1
     */
    get tag(): number;
    set tag(value: number);
}
/**
 * Jump to the matching tag in the mission list. Repeat this action for the specified number of times.
 * A mission should contain a single matching tag for each jump. If this is not the case then a jump to
 * a missing tag should complete the mission, and a jump where there are multiple matching tags should
 * always select the one with the lowest mission sequence number.
 */
export declare class DoJumpTagCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Target tag to jump to.
     *
     * @min: 0
     * @increment: 1
     */
    get tag(): number;
    set tag(value: number);
    /**
     * Repeat count.
     *
     * @min: 0
     * @increment: 1
     */
    get repeat(): number;
    set repeat(value: number);
}
/**
 * Set gimbal manager pitch/yaw setpoints (low rate command). It is possible to set combinations of the
 * values below. E.g. an angle as well as a desired angular rate can be used to get to this angle at a
 * certain angular rate, or an angular rate only will result in continuous turning. NaN is to be used
 * to signal unset. Note: only the gimbal manager will react to this command - it will be ignored by a
 * gimbal device. Use GIMBAL_MANAGER_SET_PITCHYAW if you need to stream pitch/yaw setpoints at higher
 * rate.
 */
export declare class DoGimbalManagerPitchyawCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Pitch angle (positive to pitch up, relative to vehicle for FOLLOW mode, relative to world horizon
     * for LOCK mode).
     *
     * @units deg
     * @min: -180
     * @max: 180
     */
    get pitchAngle(): number;
    set pitchAngle(value: number);
    /**
     * Yaw angle (positive to yaw to the right, relative to vehicle for FOLLOW mode, absolute to North for
     * LOCK mode).
     *
     * @units deg
     * @min: -180
     * @max: 180
     */
    get yawAngle(): number;
    set yawAngle(value: number);
    /**
     * Pitch rate (positive to pitch up).
     *
     * @units deg/s
     */
    get pitchRate(): number;
    set pitchRate(value: number);
    /**
     * Yaw rate (positive to yaw to the right).
     *
     * @units deg/s
     */
    get yawRate(): number;
    set yawRate(value: number);
    /**
     * Gimbal manager flags to use.
     */
    get gimbalManagerFlags(): number;
    set gimbalManagerFlags(value: number);
    /**
     * Component ID of gimbal device to address (or 1-6 for non-MAVLink gimbal), 0 for all gimbal device
     * components. Send command multiple times for more than one gimbal (but not all gimbals).
     */
    get gimbalDeviceId(): number;
    set gimbalDeviceId(value: number);
}
/**
 * Gimbal configuration to set which sysid/compid is in primary and secondary control.
 */
export declare class DoGimbalManagerConfigureCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Sysid for primary control (0: no one in control, -1: leave unchanged, -2: set itself in control (for
     * missions where the own sysid is still unknown), -3: remove control if currently in control).
     */
    get sysidPrimaryControl(): number;
    set sysidPrimaryControl(value: number);
    /**
     * Compid for primary control (0: no one in control, -1: leave unchanged, -2: set itself in control
     * (for missions where the own sysid is still unknown), -3: remove control if currently in control).
     */
    get compidPrimaryControl(): number;
    set compidPrimaryControl(value: number);
    /**
     * Sysid for secondary control (0: no one in control, -1: leave unchanged, -2: set itself in control
     * (for missions where the own sysid is still unknown), -3: remove control if currently in control).
     */
    get sysidSecondaryControl(): number;
    set sysidSecondaryControl(value: number);
    /**
     * Compid for secondary control (0: no one in control, -1: leave unchanged, -2: set itself in control
     * (for missions where the own sysid is still unknown), -3: remove control if currently in control).
     */
    get compidSecondaryControl(): number;
    set compidSecondaryControl(value: number);
    /**
     * Component ID of gimbal device to address (or 1-6 for non-MAVLink gimbal), 0 for all gimbal device
     * components. Send command multiple times for more than one gimbal (but not all gimbals).
     */
    get gimbalDeviceId(): number;
    set gimbalDeviceId(value: number);
}
/**
 * Start image capture sequence. CAMERA_IMAGE_CAPTURED must be emitted after each capture. Param1 (id)
 * may be used to specify the target camera: 0: all cameras, 1 to 6: autopilot-connected cameras,
 * 7-255: MAVLink camera component ID. It is needed in order to target specific cameras connected to
 * the autopilot, or specific sensors in a multi-sensor camera (neither of which have a distinct
 * MAVLink component ID). It is also needed to specify the target camera in missions. When used in a
 * mission, an autopilot should execute the MAV_CMD for a specified local camera (param1 = 1-6), or
 * resend it as a command if it is intended for a MAVLink camera (param1 = 7 - 255), setting the
 * command's target_component as the param1 value (and setting param1 in the command to zero). If the
 * param1 is 0 the autopilot should do both. When sent in a command the target MAVLink address is set
 * using target_component. If addressed specifically to an autopilot: param1 should be used in the same
 * way as it is for missions (though command should NACK with MAV_RESULT_DENIED if a specified local
 * camera does not exist). If addressed to a MAVLink camera, param 1 can be used to address all cameras
 * (0), or to separately address 1 to 7 individual sensors. Other values should be NACKed with
 * MAV_RESULT_DENIED. If the command is broadcast (target_component is 0) then param 1 should be set to
 * 0 (any other value should be NACKED with MAV_RESULT_DENIED). An autopilot would trigger any local
 * cameras and forward the command to all channels.
 */
export declare class ImageStartCaptureCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Target camera ID. 7 to 255: MAVLink camera component id. 1 to 6 for cameras that don't have a
     * distinct component id (such as autopilot-attached cameras). 0: all cameras. This is used to
     * specifically target autopilot-connected cameras or individual sensors in a multi-sensor MAVLink
     * camera. It is also used to target specific cameras when the MAV_CMD is used in a mission
     *
     * @min: 0
     * @max: 255
     * @increment: 1
     */
    get id(): number;
    set id(value: number);
    /**
     * Desired elapsed time between two consecutive pictures (in seconds). Minimum values depend on
     * hardware (typically greater than 2 seconds).
     *
     * @units s
     * @min: 0
     */
    get interval(): number;
    set interval(value: number);
    /**
     * Total number of images to capture. 0 to capture forever/until MAV_CMD_IMAGE_STOP_CAPTURE.
     *
     * @min: 0
     * @increment: 1
     */
    get totalImages(): number;
    set totalImages(value: number);
    /**
     * Capture sequence number starting from 1. This is only valid for single-capture (param3 == 1),
     * otherwise set to 0. Increment the capture ID for each capture command to prevent double captures
     * when a command is re-transmitted.
     *
     * @min: 1
     * @increment: 1
     */
    get sequenceNumber(): number;
    set sequenceNumber(value: number);
}
/**
 * Stop image capture sequence. Param1 (id) may be used to specify the target camera: 0: all cameras, 1
 * to 6: autopilot-connected cameras, 7-255: MAVLink camera component ID. It is needed in order to
 * target specific cameras connected to the autopilot, or specific sensors in a multi-sensor camera
 * (neither of which have a distinct MAVLink component ID). It is also needed to specify the target
 * camera in missions. When used in a mission, an autopilot should execute the MAV_CMD for a specified
 * local camera (param1 = 1-6), or resend it as a command if it is intended for a MAVLink camera
 * (param1 = 7 - 255), setting the command's target_component as the param1 value (and setting param1
 * in the command to zero). If the param1 is 0 the autopilot should do both. When sent in a command the
 * target MAVLink address is set using target_component. If addressed specifically to an autopilot:
 * param1 should be used in the same way as it is for missions (though command should NACK with
 * MAV_RESULT_DENIED if a specified local camera does not exist). If addressed to a MAVLink camera,
 * param1 can be used to address all cameras (0), or to separately address 1 to 7 individual sensors.
 * Other values should be NACKed with MAV_RESULT_DENIED. If the command is broadcast (target_component
 * is 0) then param 1 should be set to 0 (any other value should be NACKED with MAV_RESULT_DENIED). An
 * autopilot would trigger any local cameras and forward the command to all channels.
 */
export declare class ImageStopCaptureCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Target camera ID. 7 to 255: MAVLink camera component id. 1 to 6 for cameras that don't have a
     * distinct component id (such as autopilot-attached cameras). 0: all cameras. This is used to
     * specifically target autopilot-connected cameras or individual sensors in a multi-sensor MAVLink
     * camera. It is also used to target specific cameras when the MAV_CMD is used in a mission
     *
     * @min: 0
     * @max: 255
     * @increment: 1
     */
    get id(): number;
    set id(value: number);
}
/**
 * Enable or disable on-board camera triggering system.
 */
export declare class DoTriggerControlCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Trigger enable/disable (0 for disable, 1 for start), -1 to ignore
     *
     * @min: -1
     * @max: 1
     * @increment: 1
     */
    get enable(): number;
    set enable(value: number);
    /**
     * 1 to reset the trigger sequence, -1 or 0 to ignore
     *
     * @min: -1
     * @max: 1
     * @increment: 1
     */
    get reset(): number;
    set reset(value: number);
    /**
     * 1 to pause triggering, but without switching the camera off or retracting it. -1 to ignore
     *
     * @min: -1
     * @max: 1
     * @increment: 2
     */
    get pause(): number;
    set pause(value: number);
}
/**
 * If the camera supports point visual tracking (CAMERA_CAP_FLAGS_HAS_TRACKING_POINT is set), this
 * command allows to initiate the tracking.
 */
export declare class CameraTrackPointCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Point to track x value (normalized 0..1, 0 is left, 1 is right).
     *
     * @min: 0
     * @max: 1
     */
    get pointX(): number;
    set pointX(value: number);
    /**
     * Point to track y value (normalized 0..1, 0 is top, 1 is bottom).
     *
     * @min: 0
     * @max: 1
     */
    get pointY(): number;
    set pointY(value: number);
    /**
     * Point radius (normalized 0..1, 0 is image left, 1 is image right).
     *
     * @min: 0
     * @max: 1
     */
    get radius(): number;
    set radius(value: number);
}
/**
 * If the camera supports rectangle visual tracking (CAMERA_CAP_FLAGS_HAS_TRACKING_RECTANGLE is set),
 * this command allows to initiate the tracking.
 */
export declare class CameraTrackRectangleCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Top left corner of rectangle x value (normalized 0..1, 0 is left, 1 is right).
     *
     * @min: 0
     * @max: 1
     */
    get topLeftCornerX(): number;
    set topLeftCornerX(value: number);
    /**
     * Top left corner of rectangle y value (normalized 0..1, 0 is top, 1 is bottom).
     *
     * @min: 0
     * @max: 1
     */
    get topLeftCornerY(): number;
    set topLeftCornerY(value: number);
    /**
     * Bottom right corner of rectangle x value (normalized 0..1, 0 is left, 1 is right).
     *
     * @min: 0
     * @max: 1
     */
    get bottomRightCornerX(): number;
    set bottomRightCornerX(value: number);
    /**
     * Bottom right corner of rectangle y value (normalized 0..1, 0 is top, 1 is bottom).
     *
     * @min: 0
     * @max: 1
     */
    get bottomRightCornerY(): number;
    set bottomRightCornerY(value: number);
}
/**
 * Stops ongoing tracking.
 */
export declare class CameraStopTrackingCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
}
/**
 * Starts video capture (recording).
 */
export declare class VideoStartCaptureCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Video Stream ID (0 for all streams)
     *
     * @min: 0
     * @increment: 1
     */
    get streamId(): number;
    set streamId(value: number);
    /**
     * Frequency CAMERA_CAPTURE_STATUS messages should be sent while recording (0 for no messages,
     * otherwise frequency)
     *
     * @units Hz
     * @min: 0
     */
    get statusFrequency(): number;
    set statusFrequency(value: number);
}
/**
 * Stop the current video capture (recording).
 */
export declare class VideoStopCaptureCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Video Stream ID (0 for all streams)
     *
     * @min: 0
     * @increment: 1
     */
    get streamId(): number;
    set streamId(value: number);
}
/**
 * Start video streaming
 */
export declare class VideoStartStreamingCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Video Stream ID (0 for all streams, 1 for first, 2 for second, etc.)
     *
     * @min: 0
     * @increment: 1
     */
    get streamId(): number;
    set streamId(value: number);
}
/**
 * Stop the given video stream
 */
export declare class VideoStopStreamingCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Video Stream ID (0 for all streams, 1 for first, 2 for second, etc.)
     *
     * @min: 0
     * @increment: 1
     */
    get streamId(): number;
    set streamId(value: number);
}
/**
 * Request video stream information (VIDEO_STREAM_INFORMATION)
 */
export declare class RequestVideoStreamInformationCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Video Stream ID (0 for all streams, 1 for first, 2 for second, etc.)
     *
     * @min: 0
     * @increment: 1
     */
    get streamId(): number;
    set streamId(value: number);
}
/**
 * Request video stream status (VIDEO_STREAM_STATUS)
 */
export declare class RequestVideoStreamStatusCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Video Stream ID (0 for all streams, 1 for first, 2 for second, etc.)
     *
     * @min: 0
     * @increment: 1
     */
    get streamId(): number;
    set streamId(value: number);
}
/**
 * Request to start streaming logging data over MAVLink (see also LOGGING_DATA message)
 */
export declare class LoggingStartCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Format: 0: ULog
     *
     * @min: 0
     * @increment: 1
     */
    get format(): number;
    set format(value: number);
}
/**
 * Request to stop streaming log data over MAVLink
 */
export declare class LoggingStopCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
}
/**
 */
export declare class AirframeConfigurationCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Landing gear ID (default: 0, -1 for all)
     *
     * @min: -1
     * @increment: 1
     */
    get landingGearId(): number;
    set landingGearId(value: number);
    /**
     * Landing gear position (Down: 0, Up: 1, NaN for no change)
     */
    get landingGearPosition(): number;
    set landingGearPosition(value: number);
}
/**
 * Request to start/stop transmitting over the high latency telemetry
 */
export declare class ControlHighLatencyCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Control transmission over high latency telemetry (0: stop, 1: start)
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get enable(): number;
    set enable(value: number);
}
/**
 * Create a panorama at the current position
 */
export declare class PanoramaCreateCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Viewing angle horizontal of the panorama (+- 0.5 the total angle)
     *
     * @units deg
     */
    get horizontalAngle(): number;
    set horizontalAngle(value: number);
    /**
     * Viewing angle vertical of panorama.
     *
     * @units deg
     */
    get verticalAngle(): number;
    set verticalAngle(value: number);
    /**
     * Speed of the horizontal rotation.
     *
     * @units deg/s
     */
    get horizontalSpeed(): number;
    set horizontalSpeed(value: number);
    /**
     * Speed of the vertical rotation.
     *
     * @units deg/s
     */
    get verticalSpeed(): number;
    set verticalSpeed(value: number);
}
/**
 * Request VTOL transition
 */
export declare class DoVtolTransitionCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * The target VTOL state. Only MAV_VTOL_STATE_MC and MAV_VTOL_STATE_FW can be used.
     */
    get state(): number;
    set state(value: number);
}
/**
 * Request authorization to arm the vehicle to a external entity, the arm authorizer is responsible to
 * request all data that is needs from the vehicle before authorize or deny the request. If approved
 * the progress of command_ack message should be set with period of time that this authorization is
 * valid in seconds or in case it was denied it should be set with one of the reasons in
 * ARM_AUTH_DENIED_REASON.
 */
export declare class ArmAuthorizationRequestCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Vehicle system id, this way ground station can request arm authorization on behalf of any vehicle
     *
     * @min: 0
     * @max: 255
     * @increment: 1
     */
    get systemId(): number;
    set systemId(value: number);
}
/**
 * This command sets the submode to standard guided when vehicle is in guided mode. The vehicle holds
 * position and altitude and the user can input the desired velocities along all three axes.
 */
export declare class SetGuidedSubmodeStandardCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
}
/**
 * This command sets submode circle when vehicle is in guided mode. Vehicle flies along a circle facing
 * the center of the circle. The user can input the velocity along the circle and change the radius. If
 * no input is given the vehicle will hold position.
 *
 * This command has location.
 */
export declare class SetGuidedSubmodeCircleCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Radius of desired circle in CIRCLE_MODE
     *
     * @units m
     */
    get radius(): number;
    set radius(value: number);
    /**
     * Target latitude of center of circle in CIRCLE_MODE
     */
    get latitude(): number;
    set latitude(value: number);
    /**
     * Target longitude of center of circle in CIRCLE_MODE
     */
    get longitude(): number;
    set longitude(value: number);
}
/**
 * Fence return point (there can only be one such point in a geofence definition). If rally points are
 * supported they should be used instead.
 *
 * This command has location.
 * This command is destination.
 */
export declare class NavFenceReturnPointCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
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
     * Altitude
     *
     * @units m
     */
    get altitude(): number;
    set altitude(value: number);
}
/**
 * Fence vertex for an inclusion polygon (the polygon must not be self-intersecting). The vehicle must
 * stay within this area. Minimum of 3 vertices required.
 *
 * This command has location.
 */
export declare class NavFencePolygonVertexInclusionCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Polygon vertex count
     *
     * @min: 3
     * @increment: 1
     */
    get vertexCount(): number;
    set vertexCount(value: number);
    /**
     * Vehicle must be inside ALL inclusion zones in a single group, vehicle must be inside at least one
     * group, must be the same for all points in each polygon
     *
     * @min: 0
     * @increment: 1
     */
    get inclusionGroup(): number;
    set inclusionGroup(value: number);
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
}
/**
 * Fence vertex for an exclusion polygon (the polygon must not be self-intersecting). The vehicle must
 * stay outside this area. Minimum of 3 vertices required.
 *
 * This command has location.
 */
export declare class NavFencePolygonVertexExclusionCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Polygon vertex count
     *
     * @min: 3
     * @increment: 1
     */
    get vertexCount(): number;
    set vertexCount(value: number);
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
}
/**
 * Circular fence area. The vehicle must stay inside this area.
 *
 * This command has location.
 */
export declare class NavFenceCircleInclusionCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Radius.
     *
     * @units m
     */
    get radius(): number;
    set radius(value: number);
    /**
     * Vehicle must be inside ALL inclusion zones in a single group, vehicle must be inside at least one
     * group
     *
     * @min: 0
     * @increment: 1
     */
    get inclusionGroup(): number;
    set inclusionGroup(value: number);
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
}
/**
 * Circular fence area. The vehicle must stay outside this area.
 *
 * This command has location.
 */
export declare class NavFenceCircleExclusionCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Radius.
     *
     * @units m
     */
    get radius(): number;
    set radius(value: number);
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
}
/**
 * Rally point. You can have multiple rally points defined.
 *
 * This command has location.
 */
export declare class NavRallyPointCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
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
     * Altitude
     *
     * @units m
     */
    get altitude(): number;
    set altitude(value: number);
}
/**
 * Swarm vertex for an inclusion polygon
 *
 * This command has location.
 */
export declare class NavSwarmRoiPolygonVertexInclusionCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
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
}
/**
 * Commands the vehicle to respond with a sequence of messages UAVCAN_NODE_INFO, one message per every
 * UAVCAN node that is online. Note that some of the response messages can be lost, which the receiver
 * can detect easily by checking whether every received UAVCAN_NODE_STATUS has a matching message
 * UAVCAN_NODE_INFO received earlier; if not, this command should be sent again in order to request
 * re-transmission of the node information messages.
 */
export declare class UavcanGetNodeInfoCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
}
/**
 * Change state of safety switch.
 */
export declare class DoSetSafetySwitchStateCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * New safety switch state.
     */
    get desiredState(): number;
    set desiredState(value: number);
}
/**
 * Trigger the start of an ADSB-out IDENT. This should only be used when requested to do so by an Air
 * Traffic Controller in controlled airspace. This starts the IDENT which is then typically held for 18
 * seconds by the hardware per the Mode A, C, and S transponder spec.
 */
export declare class DoAdsbOutIdentCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
}
/**
 * Deploy payload on a Lat / Lon / Alt position. This includes the navigation to reach the required
 * release position and velocity.
 *
 * This command has location.
 * This command is destination.
 */
export declare class PayloadPrepareDeployCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Operation mode. 0: prepare single payload deploy (overwriting previous requests), but do not execute
     * it. 1: execute payload deploy immediately (rejecting further deploy commands during execution, but
     * allowing abort). 2: add payload deploy to existing deployment list.
     *
     * @min: 0
     * @max: 2
     * @increment: 1
     */
    get operationMode(): number;
    set operationMode(value: number);
    /**
     * Desired approach vector in compass heading. A negative value indicates the system can define the
     * approach vector at will.
     *
     * @units deg
     * @min: -1
     * @max: 360
     */
    get approachVector(): number;
    set approachVector(value: number);
    /**
     * Desired ground speed at release time. This can be overridden by the airframe in case it needs to
     * meet minimum airspeed. A negative value indicates the system can define the ground speed at will.
     *
     * @min: -1
     */
    get groundSpeed(): number;
    set groundSpeed(value: number);
    /**
     * Minimum altitude clearance to the release position. A negative value indicates the system can define
     * the clearance at will.
     *
     * @units m
     * @min: -1
     */
    get altitudeClearance(): number;
    set altitudeClearance(value: number);
    /**
     * Latitude. Note, if used in MISSION_ITEM (deprecated) the units are degrees (unscaled)
     *
     * @units degE7
     */
    get latitude(): number;
    set latitude(value: number);
    /**
     * Longitude. Note, if used in MISSION_ITEM (deprecated) the units are degrees (unscaled)
     *
     * @units degE7
     */
    get longitude(): number;
    set longitude(value: number);
    /**
     * Altitude (MSL)
     *
     * @units m
     */
    get altitude(): number;
    set altitude(value: number);
}
/**
 * Control the payload deployment.
 */
export declare class PayloadControlDeployCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Operation mode. 0: Abort deployment, continue normal mission. 1: switch to payload deployment mode.
     * 100: delete first payload deployment request. 101: delete all payload deployment requests.
     *
     * @min: 0
     * @max: 101
     * @increment: 1
     */
    get operationMode(): number;
    set operationMode(value: number);
}
/**
 * Magnetometer calibration based on provided known yaw. This allows for fast calibration using WMM
 * field tables in the vehicle, given only the known yaw of the vehicle. If Latitude and longitude are
 * both zero then use the current vehicle location.
 *
 * This command has location.
 */
export declare class FixedMagCalYawCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Yaw of vehicle in earth frame.
     *
     * @units deg
     */
    get yaw(): number;
    set yaw(value: number);
    /**
     * CompassMask, 0 for all.
     */
    get compassmask(): number;
    set compassmask(value: number);
    /**
     * Latitude.
     *
     * @units deg
     */
    get latitude(): number;
    set latitude(value: number);
    /**
     * Longitude.
     *
     * @units deg
     */
    get longitude(): number;
    set longitude(value: number);
}
/**
 * Command to operate winch.
 */
export declare class DoWinchCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Winch instance number.
     *
     * @min: 1
     * @increment: 1
     */
    get instance(): number;
    set instance(value: number);
    /**
     * Action to perform.
     */
    get action(): number;
    set action(value: number);
    /**
     * Length of cable to release (negative to wind).
     *
     * @units m
     */
    get length(): number;
    set length(value: number);
    /**
     * Release rate (negative to wind).
     *
     * @units m/s
     */
    get rate(): number;
    set rate(value: number);
}
/**
 * User defined waypoint item. Ground Station will show the Vehicle as flying through this item.
 *
 * This command has location.
 * This command is destination.
 */
export declare class WaypointUser1Command extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Latitude unscaled
     */
    get latitude(): number;
    set latitude(value: number);
    /**
     * Longitude unscaled
     */
    get longitude(): number;
    set longitude(value: number);
    /**
     * Altitude (MSL)
     *
     * @units m
     */
    get altitude(): number;
    set altitude(value: number);
}
/**
 * User defined waypoint item. Ground Station will show the Vehicle as flying through this item.
 *
 * This command has location.
 * This command is destination.
 */
export declare class WaypointUser2Command extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Latitude unscaled
     */
    get latitude(): number;
    set latitude(value: number);
    /**
     * Longitude unscaled
     */
    get longitude(): number;
    set longitude(value: number);
    /**
     * Altitude (MSL)
     *
     * @units m
     */
    get altitude(): number;
    set altitude(value: number);
}
/**
 * User defined waypoint item. Ground Station will show the Vehicle as flying through this item.
 *
 * This command has location.
 * This command is destination.
 */
export declare class WaypointUser3Command extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Latitude unscaled
     */
    get latitude(): number;
    set latitude(value: number);
    /**
     * Longitude unscaled
     */
    get longitude(): number;
    set longitude(value: number);
    /**
     * Altitude (MSL)
     *
     * @units m
     */
    get altitude(): number;
    set altitude(value: number);
}
/**
 * User defined waypoint item. Ground Station will show the Vehicle as flying through this item.
 *
 * This command has location.
 * This command is destination.
 */
export declare class WaypointUser4Command extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Latitude unscaled
     */
    get latitude(): number;
    set latitude(value: number);
    /**
     * Longitude unscaled
     */
    get longitude(): number;
    set longitude(value: number);
    /**
     * Altitude (MSL)
     *
     * @units m
     */
    get altitude(): number;
    set altitude(value: number);
}
/**
 * User defined waypoint item. Ground Station will show the Vehicle as flying through this item.
 *
 * This command has location.
 * This command is destination.
 */
export declare class WaypointUser5Command extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Latitude unscaled
     */
    get latitude(): number;
    set latitude(value: number);
    /**
     * Longitude unscaled
     */
    get longitude(): number;
    set longitude(value: number);
    /**
     * Altitude (MSL)
     *
     * @units m
     */
    get altitude(): number;
    set altitude(value: number);
}
/**
 * User defined spatial item. Ground Station will not show the Vehicle as flying through this item.
 * Example: ROI item.
 *
 * This command has location.
 */
export declare class SpatialUser1Command extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Latitude unscaled
     */
    get latitude(): number;
    set latitude(value: number);
    /**
     * Longitude unscaled
     */
    get longitude(): number;
    set longitude(value: number);
    /**
     * Altitude (MSL)
     *
     * @units m
     */
    get altitude(): number;
    set altitude(value: number);
}
/**
 * User defined spatial item. Ground Station will not show the Vehicle as flying through this item.
 * Example: ROI item.
 *
 * This command has location.
 */
export declare class SpatialUser2Command extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Latitude unscaled
     */
    get latitude(): number;
    set latitude(value: number);
    /**
     * Longitude unscaled
     */
    get longitude(): number;
    set longitude(value: number);
    /**
     * Altitude (MSL)
     *
     * @units m
     */
    get altitude(): number;
    set altitude(value: number);
}
/**
 * User defined spatial item. Ground Station will not show the Vehicle as flying through this item.
 * Example: ROI item.
 *
 * This command has location.
 */
export declare class SpatialUser3Command extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Latitude unscaled
     */
    get latitude(): number;
    set latitude(value: number);
    /**
     * Longitude unscaled
     */
    get longitude(): number;
    set longitude(value: number);
    /**
     * Altitude (MSL)
     *
     * @units m
     */
    get altitude(): number;
    set altitude(value: number);
}
/**
 * User defined spatial item. Ground Station will not show the Vehicle as flying through this item.
 * Example: ROI item.
 *
 * This command has location.
 */
export declare class SpatialUser4Command extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Latitude unscaled
     */
    get latitude(): number;
    set latitude(value: number);
    /**
     * Longitude unscaled
     */
    get longitude(): number;
    set longitude(value: number);
    /**
     * Altitude (MSL)
     *
     * @units m
     */
    get altitude(): number;
    set altitude(value: number);
}
/**
 * User defined spatial item. Ground Station will not show the Vehicle as flying through this item.
 * Example: ROI item.
 *
 * This command has location.
 */
export declare class SpatialUser5Command extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Latitude unscaled
     */
    get latitude(): number;
    set latitude(value: number);
    /**
     * Longitude unscaled
     */
    get longitude(): number;
    set longitude(value: number);
    /**
     * Altitude (MSL)
     *
     * @units m
     */
    get altitude(): number;
    set altitude(value: number);
}
/**
 * User defined command. Ground Station will not show the Vehicle as flying through this item. Example:
 * MAV_CMD_DO_SET_PARAMETER item.
 */
export declare class User1Command extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
}
/**
 * User defined command. Ground Station will not show the Vehicle as flying through this item. Example:
 * MAV_CMD_DO_SET_PARAMETER item.
 */
export declare class User2Command extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
}
/**
 * User defined command. Ground Station will not show the Vehicle as flying through this item. Example:
 * MAV_CMD_DO_SET_PARAMETER item.
 */
export declare class User3Command extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
}
/**
 * User defined command. Ground Station will not show the Vehicle as flying through this item. Example:
 * MAV_CMD_DO_SET_PARAMETER item.
 */
export declare class User4Command extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
}
/**
 * User defined command. Ground Station will not show the Vehicle as flying through this item. Example:
 * MAV_CMD_DO_SET_PARAMETER item.
 */
export declare class User5Command extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
}
/**
 * Request forwarding of CAN packets from the given CAN bus to this interface. CAN Frames are sent
 * using CAN_FRAME and CANFD_FRAME messages
 */
export declare class CanForwardCommand extends CommandLong {
    constructor(targetSystem?: number, targetComponent?: number);
    /**
     * Bus number (0 to disable forwarding, 1 for first bus, 2 for 2nd bus, 3 for 3rd bus).
     */
    get bus(): number;
    set bus(value: number);
}
export declare const REGISTRY: MavLinkPacketRegistry;
export declare const COMMANDS: MavLinkCommandRegistry;
