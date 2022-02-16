"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GpsFixType = exports.MavCollisionSrc = exports.MavCollisionThreatLevel = exports.MavCollisionAction = exports.GpsInputIgnoreFlags = exports.MotorTestThrottleType = exports.MotorTestOrder = exports.EstimatorStatusFlags = exports.MavDoRepositionFlags = exports.AdsbFlags = exports.AdsbEmitterType = exports.AdsbAltitudeType = exports.MavLandedState = exports.MavVtolState = exports.MavGeneratorStatusFlag = exports.MavBatteryChargeState = exports.MavBatteryFunction = exports.MavBatteryType = exports.MavEstimatorType = exports.MavMissionType = exports.MavProtocolCapability = exports.MavSensorOrientation = exports.MavDistanceSensor = exports.SerialControlFlag = exports.SerialControlDev = exports.MavPowerStatus = exports.MavSeverity = exports.MavMissionResult = exports.MavResult = exports.MavParamType = exports.MavCmdAck = exports.MavRoi = exports.MavDataStream = exports.MavCmd = exports.StorageStatus = exports.UavcanNodeMode = exports.UavcanNodeHealth = exports.WinchActions = exports.GripperActions = exports.MavMountMode = exports.FenceMitigate = exports.FenceBreach = exports.FenceAction = exports.MavlinkDataStreamType = exports.MavFrame = exports.MavSysStatusSensor = exports.MavMode = exports.MavGoto = exports.HlFailureFlag = exports.FirmwareVersionType = void 0;
exports.MissionItem = exports.MissionWritePartialList = exports.MissionRequestPartialList = exports.ServoOutputRaw = exports.RcChannelsRaw = exports.RcChannelsScaled = exports.GlobalPositionInt = exports.LocalPositionNed = exports.AttitudeQuaternion = exports.Attitude = exports.ScaledPressure = exports.RawPressure = exports.RawImu = exports.ScaledImu = exports.GpsStatus = exports.GpsRawInt = exports.ParamSet = exports.ParamValue = exports.ParamRequestList = exports.ParamRequestRead = exports.SetMode = exports.AuthKey = exports.ChangeOperatorControlAck = exports.ChangeOperatorControl = exports.Ping = exports.SystemTime = exports.SysStatus = exports.MagCalStatus = exports.MavWinchStatusFlag = exports.SwarmCoverageStatus = exports.SwarmRoiStatus = exports.SwarmVehicleState = exports.AisFlags = exports.AisNavStatus = exports.AisType = exports.ParachuteAction = exports.PrecisionLandMode = exports.UtmDataAvailFlags = exports.UtmFlightState = exports.AttitudeTargetTypemask = exports.PositionTargetTypemask = exports.RcType = exports.MavArmAuthDeniedReason = exports.CameraMode = exports.VideoStreamType = exports.VideoStreamStatusFlags = exports.CameraCapFlags = exports.VtolTransitionHeading = exports.LandingTargetType = exports.RtkBaselineCoordinateSystem = void 0;
exports.RadioStatus = exports.SimState = exports.HilSensor = exports.OpticalFlowRad = exports.HighresImu = exports.ViconPositionEstimate = exports.VisionSpeedEstimate = exports.VisionPositionEstimate = exports.GlobalVisionPositionEstimate = exports.OpticalFlow = exports.HilActuatorControls = exports.HilRcInputsRaw = exports.HilControls = exports.HilState = exports.LocalPositionNedSystemGlobalOffset = exports.PositionTargetGlobalInt = exports.SetPositionTargetGlobalInt = exports.PositionTargetLocalNed = exports.SetPositionTargetLocalNed = exports.AttitudeTarget = exports.SetAttitudeTarget = exports.ManualSetpoint = exports.CommandAck = exports.CommandLong = exports.CommandInt = exports.VfrHud = exports.MissionItemInt = exports.RcChannelsOverride = exports.ManualControl = exports.DataStream = exports.RequestDataStream = exports.RcChannels = exports.LocalPositionNedCov = exports.GlobalPositionIntCov = exports.NavControllerOutput = exports.AttitudeQuaternionCov = exports.SafetyAllowedArea = exports.SafetySetAllowedArea = exports.MissionRequestInt = exports.ParamMapRc = exports.GpsGlobalOrigin = exports.SetGpsGlobalOrigin = exports.MissionAck = exports.MissionItemReached = exports.MissionClearAll = exports.MissionCount = exports.MissionRequestList = exports.MissionCurrent = exports.MissionSetCurrent = exports.MissionRequest = void 0;
exports.HomePosition = exports.Vibration = exports.HighLatency2 = exports.HighLatency = exports.GpsRtcmData = exports.GpsInput = exports.WindCov = exports.EstimatorStatus = exports.EfiStatus = exports.MagCalReport = exports.FenceStatus = exports.LandingTarget = exports.AutopilotVersion = exports.BatteryStatus = exports.ControlSystemState = exports.FollowTarget = exports.ScaledPressure3 = exports.ResourceRequest = exports.Altitude = exports.ActuatorControlTarget = exports.SetActuatorControlTarget = exports.MotionCaptureAttPos = exports.ScaledPressure2 = exports.TerrainReport = exports.TerrainCheck = exports.TerrainData = exports.TerrainRequest = exports.DistanceSensor = exports.EncapsulatedData = exports.DataTransmissionHandshake = exports.ScaledImu3 = exports.Gps2Rtk = exports.GpsRtk = exports.SerialControl = exports.PowerStatus = exports.Gps2Raw = exports.GpsInjectData = exports.LogRequestEnd = exports.LogErase = exports.LogData = exports.LogRequestData = exports.LogEntry = exports.LogRequestList = exports.ScaledImu2 = exports.HilStateQuaternion = exports.HilOpticalFlow = exports.HilGps = exports.CameraTrigger = exports.TimeSync = exports.FileTransferProtocol = void 0;
exports.REGISTRY = exports.WinchStatus = exports.WheelDistance = exports.SwarmVehicleSlow = exports.SwarmVehicle = exports.ActuatorOutputStatus = exports.GeneratorStatus = exports.SmartBatteryInfo = exports.DebugFloatArray = exports.UtmGlobalPosition = exports.RawRpm = exports.IsbdLinkStatus = exports.Odometry = exports.ObstacleDistance = exports.UavcanNodeInfo = exports.UavcanNodeStatus = exports.AisVessel = exports.WifiConfigAp = exports.VideoStreamStatus = exports.VideoStreamInformation = exports.LoggingAck = exports.LoggingDataAcked = exports.LoggingData = exports.MountOrientation = exports.FlightInformation = exports.CameraImageCaptured = exports.CameraCaptureStatus = exports.StorageInformation = exports.CameraSettings = exports.CameraInformation = exports.PlayTune = exports.ButtonChange = exports.SetupSigning = exports.Debug = exports.StatusText = exports.NamedValueInt = exports.NamedValueFloat = exports.DebugVect = exports.MemoryVect = exports.V2Extension = exports.Collision = exports.AdsbVehicle = exports.ExtendedSysState = exports.MessageInterval = exports.SetHomePosition = void 0;
const mavlink_1 = require("./mavlink");
/**
 * These values define the type of firmware release. These values indicate the first version or release
 * of this type. For example the first alpha release would be 64, the second would be 65.
 */
var FirmwareVersionType;
(function (FirmwareVersionType) {
    FirmwareVersionType[FirmwareVersionType["DEV"] = 0] = "DEV";
    FirmwareVersionType[FirmwareVersionType["ALPHA"] = 64] = "ALPHA";
    FirmwareVersionType[FirmwareVersionType["BETA"] = 128] = "BETA";
    FirmwareVersionType[FirmwareVersionType["RC"] = 192] = "RC";
    FirmwareVersionType[FirmwareVersionType["OFFICIAL"] = 255] = "OFFICIAL";
})(FirmwareVersionType = exports.FirmwareVersionType || (exports.FirmwareVersionType = {}));
/**
 * Flags to report failure cases over the high latency telemtry.
 */
var HlFailureFlag;
(function (HlFailureFlag) {
    HlFailureFlag[HlFailureFlag["GPS"] = 1] = "GPS";
    HlFailureFlag[HlFailureFlag["DIFFERENTIAL_PRESSURE"] = 2] = "DIFFERENTIAL_PRESSURE";
    HlFailureFlag[HlFailureFlag["ABSOLUTE_PRESSURE"] = 4] = "ABSOLUTE_PRESSURE";
    HlFailureFlag[HlFailureFlag["HL_FAILURE_FLAG_3D_ACCEL"] = 8] = "HL_FAILURE_FLAG_3D_ACCEL";
    HlFailureFlag[HlFailureFlag["HL_FAILURE_FLAG_3D_GYRO"] = 16] = "HL_FAILURE_FLAG_3D_GYRO";
    HlFailureFlag[HlFailureFlag["HL_FAILURE_FLAG_3D_MAG"] = 32] = "HL_FAILURE_FLAG_3D_MAG";
    HlFailureFlag[HlFailureFlag["TERRAIN"] = 64] = "TERRAIN";
    HlFailureFlag[HlFailureFlag["BATTERY"] = 128] = "BATTERY";
    HlFailureFlag[HlFailureFlag["RC_RECEIVER"] = 256] = "RC_RECEIVER";
    HlFailureFlag[HlFailureFlag["OFFBOARD_LINK"] = 512] = "OFFBOARD_LINK";
    HlFailureFlag[HlFailureFlag["ENGINE"] = 1024] = "ENGINE";
    HlFailureFlag[HlFailureFlag["GEOFENCE"] = 2048] = "GEOFENCE";
    HlFailureFlag[HlFailureFlag["ESTIMATOR"] = 4096] = "ESTIMATOR";
    HlFailureFlag[HlFailureFlag["MISSION"] = 8192] = "MISSION";
})(HlFailureFlag = exports.HlFailureFlag || (exports.HlFailureFlag = {}));
/**
 * Actions that may be specified in MAV_CMD_OVERRIDE_GOTO to override mission execution.
 */
var MavGoto;
(function (MavGoto) {
    MavGoto[MavGoto["DO_HOLD"] = 0] = "DO_HOLD";
    MavGoto[MavGoto["DO_CONTINUE"] = 1] = "DO_CONTINUE";
    MavGoto[MavGoto["HOLD_AT_CURRENT_POSITION"] = 2] = "HOLD_AT_CURRENT_POSITION";
    MavGoto[MavGoto["HOLD_AT_SPECIFIED_POSITION"] = 3] = "HOLD_AT_SPECIFIED_POSITION";
})(MavGoto = exports.MavGoto || (exports.MavGoto = {}));
/**
 * These defines are predefined OR-combined mode flags. There is no need to use values from this enum,
 * but it simplifies the use of the mode flags. Note that manual input is enabled in all modes as a
 * safety override.
 */
var MavMode;
(function (MavMode) {
    MavMode[MavMode["PREFLIGHT"] = 0] = "PREFLIGHT";
    MavMode[MavMode["STABILIZE_DISARMED"] = 80] = "STABILIZE_DISARMED";
    MavMode[MavMode["STABILIZE_ARMED"] = 208] = "STABILIZE_ARMED";
    MavMode[MavMode["MANUAL_DISARMED"] = 64] = "MANUAL_DISARMED";
    MavMode[MavMode["MANUAL_ARMED"] = 192] = "MANUAL_ARMED";
    MavMode[MavMode["GUIDED_DISARMED"] = 88] = "GUIDED_DISARMED";
    MavMode[MavMode["GUIDED_ARMED"] = 216] = "GUIDED_ARMED";
    /**
     * System is allowed to be active, under autonomous control and navigation (the trajectory is decided
     * onboard and not pre-programmed by waypoints)
     */
    MavMode[MavMode["AUTO_DISARMED"] = 92] = "AUTO_DISARMED";
    /**
     * System is allowed to be active, under autonomous control and navigation (the trajectory is decided
     * onboard and not pre-programmed by waypoints)
     */
    MavMode[MavMode["AUTO_ARMED"] = 220] = "AUTO_ARMED";
    /**
     * UNDEFINED mode. This solely depends on the autopilot - use with caution, intended for developers
     * only.
     */
    MavMode[MavMode["TEST_DISARMED"] = 66] = "TEST_DISARMED";
    /**
     * UNDEFINED mode. This solely depends on the autopilot - use with caution, intended for developers
     * only.
     */
    MavMode[MavMode["TEST_ARMED"] = 194] = "TEST_ARMED";
})(MavMode = exports.MavMode || (exports.MavMode = {}));
/**
 * These encode the sensors whose status is sent as part of the SYS_STATUS message.
 */
var MavSysStatusSensor;
(function (MavSysStatusSensor) {
    MavSysStatusSensor[MavSysStatusSensor["SENSOR_3D_GYRO"] = 1] = "SENSOR_3D_GYRO";
    MavSysStatusSensor[MavSysStatusSensor["SENSOR_3D_ACCEL"] = 2] = "SENSOR_3D_ACCEL";
    MavSysStatusSensor[MavSysStatusSensor["SENSOR_3D_MAG"] = 4] = "SENSOR_3D_MAG";
    MavSysStatusSensor[MavSysStatusSensor["SENSOR_ABSOLUTE_PRESSURE"] = 8] = "SENSOR_ABSOLUTE_PRESSURE";
    MavSysStatusSensor[MavSysStatusSensor["SENSOR_DIFFERENTIAL_PRESSURE"] = 16] = "SENSOR_DIFFERENTIAL_PRESSURE";
    MavSysStatusSensor[MavSysStatusSensor["SENSOR_GPS"] = 32] = "SENSOR_GPS";
    MavSysStatusSensor[MavSysStatusSensor["SENSOR_OPTICAL_FLOW"] = 64] = "SENSOR_OPTICAL_FLOW";
    MavSysStatusSensor[MavSysStatusSensor["SENSOR_VISION_POSITION"] = 128] = "SENSOR_VISION_POSITION";
    MavSysStatusSensor[MavSysStatusSensor["SENSOR_LASER_POSITION"] = 256] = "SENSOR_LASER_POSITION";
    MavSysStatusSensor[MavSysStatusSensor["SENSOR_EXTERNAL_GROUND_TRUTH"] = 512] = "SENSOR_EXTERNAL_GROUND_TRUTH";
    MavSysStatusSensor[MavSysStatusSensor["SENSOR_ANGULAR_RATE_CONTROL"] = 1024] = "SENSOR_ANGULAR_RATE_CONTROL";
    MavSysStatusSensor[MavSysStatusSensor["SENSOR_ATTITUDE_STABILIZATION"] = 2048] = "SENSOR_ATTITUDE_STABILIZATION";
    MavSysStatusSensor[MavSysStatusSensor["SENSOR_YAW_POSITION"] = 4096] = "SENSOR_YAW_POSITION";
    MavSysStatusSensor[MavSysStatusSensor["SENSOR_Z_ALTITUDE_CONTROL"] = 8192] = "SENSOR_Z_ALTITUDE_CONTROL";
    MavSysStatusSensor[MavSysStatusSensor["SENSOR_XY_POSITION_CONTROL"] = 16384] = "SENSOR_XY_POSITION_CONTROL";
    MavSysStatusSensor[MavSysStatusSensor["SENSOR_MOTOR_OUTPUTS"] = 32768] = "SENSOR_MOTOR_OUTPUTS";
    MavSysStatusSensor[MavSysStatusSensor["SENSOR_RC_RECEIVER"] = 65536] = "SENSOR_RC_RECEIVER";
    MavSysStatusSensor[MavSysStatusSensor["SENSOR_3D_GYRO2"] = 131072] = "SENSOR_3D_GYRO2";
    MavSysStatusSensor[MavSysStatusSensor["SENSOR_3D_ACCEL2"] = 262144] = "SENSOR_3D_ACCEL2";
    MavSysStatusSensor[MavSysStatusSensor["SENSOR_3D_MAG2"] = 524288] = "SENSOR_3D_MAG2";
    MavSysStatusSensor[MavSysStatusSensor["GEOFENCE"] = 1048576] = "GEOFENCE";
    MavSysStatusSensor[MavSysStatusSensor["AHRS"] = 2097152] = "AHRS";
    MavSysStatusSensor[MavSysStatusSensor["TERRAIN"] = 4194304] = "TERRAIN";
    MavSysStatusSensor[MavSysStatusSensor["REVERSE_MOTOR"] = 8388608] = "REVERSE_MOTOR";
    MavSysStatusSensor[MavSysStatusSensor["LOGGING"] = 16777216] = "LOGGING";
    MavSysStatusSensor[MavSysStatusSensor["SENSOR_BATTERY"] = 33554432] = "SENSOR_BATTERY";
    MavSysStatusSensor[MavSysStatusSensor["SENSOR_PROXIMITY"] = 67108864] = "SENSOR_PROXIMITY";
    MavSysStatusSensor[MavSysStatusSensor["SENSOR_SATCOM"] = 134217728] = "SENSOR_SATCOM";
    MavSysStatusSensor[MavSysStatusSensor["PREARM_CHECK"] = 268435456] = "PREARM_CHECK";
    MavSysStatusSensor[MavSysStatusSensor["OBSTACLE_AVOIDANCE"] = 536870912] = "OBSTACLE_AVOIDANCE";
    MavSysStatusSensor[MavSysStatusSensor["SENSOR_PROPULSION"] = 1073741824] = "SENSOR_PROPULSION";
})(MavSysStatusSensor = exports.MavSysStatusSensor || (exports.MavSysStatusSensor = {}));
/**
 * MAV_FRAME
 */
var MavFrame;
(function (MavFrame) {
    /**
     * Global (WGS84) coordinate frame + MSL altitude. First value / x: latitude, second value / y:
     * longitude, third value / z: positive altitude over mean sea level (MSL).
     */
    MavFrame[MavFrame["GLOBAL"] = 0] = "GLOBAL";
    MavFrame[MavFrame["LOCAL_NED"] = 1] = "LOCAL_NED";
    MavFrame[MavFrame["MISSION"] = 2] = "MISSION";
    /**
     * Global (WGS84) coordinate frame + altitude relative to the home position. First value / x: latitude,
     * second value / y: longitude, third value / z: positive altitude with 0 being at the altitude of the
     * home location.
     */
    MavFrame[MavFrame["GLOBAL_RELATIVE_ALT"] = 3] = "GLOBAL_RELATIVE_ALT";
    MavFrame[MavFrame["LOCAL_ENU"] = 4] = "LOCAL_ENU";
    /**
     * Global (WGS84) coordinate frame (scaled) + MSL altitude. First value / x: latitude in
     * degrees*1.0e-7, second value / y: longitude in degrees*1.0e-7, third value / z: positive altitude
     * over mean sea level (MSL).
     */
    MavFrame[MavFrame["GLOBAL_INT"] = 5] = "GLOBAL_INT";
    /**
     * Global (WGS84) coordinate frame (scaled) + altitude relative to the home position. First value / x:
     * latitude in degrees*10e-7, second value / y: longitude in degrees*10e-7, third value / z: positive
     * altitude with 0 being at the altitude of the home location.
     */
    MavFrame[MavFrame["GLOBAL_RELATIVE_ALT_INT"] = 6] = "GLOBAL_RELATIVE_ALT_INT";
    /**
     * Offset to the current local frame. Anything expressed in this frame should be added to the current
     * local frame position.
     */
    MavFrame[MavFrame["LOCAL_OFFSET_NED"] = 7] = "LOCAL_OFFSET_NED";
    /**
     * Setpoint in body NED frame. This makes sense if all position control is externalized - e.g. useful
     * to command 2 m/s^2 acceleration to the right.
     */
    MavFrame[MavFrame["BODY_NED"] = 8] = "BODY_NED";
    /**
     * Offset in body NED frame. This makes sense if adding setpoints to the current flight path, to avoid
     * an obstacle - e.g. useful to command 2 m/s^2 acceleration to the east.
     */
    MavFrame[MavFrame["BODY_OFFSET_NED"] = 9] = "BODY_OFFSET_NED";
    /**
     * Global (WGS84) coordinate frame with AGL altitude (at the waypoint coordinate). First value / x:
     * latitude in degrees, second value / y: longitude in degrees, third value / z: positive altitude in
     * meters with 0 being at ground level in terrain model.
     */
    MavFrame[MavFrame["GLOBAL_TERRAIN_ALT"] = 10] = "GLOBAL_TERRAIN_ALT";
    /**
     * Global (WGS84) coordinate frame (scaled) with AGL altitude (at the waypoint coordinate). First value
     * / x: latitude in degrees*10e-7, second value / y: longitude in degrees*10e-7, third value / z:
     * positive altitude in meters with 0 being at ground level in terrain model.
     */
    MavFrame[MavFrame["GLOBAL_TERRAIN_ALT_INT"] = 11] = "GLOBAL_TERRAIN_ALT_INT";
    MavFrame[MavFrame["BODY_FRD"] = 12] = "BODY_FRD";
    MavFrame[MavFrame["RESERVED_13"] = 13] = "RESERVED_13";
    /**
     * MAV_FRAME_MOCAP_NED - Odometry local coordinate frame of data given by a motion capture system,
     * Z-down (x: North, y: East, z: Down).
     */
    MavFrame[MavFrame["RESERVED_14"] = 14] = "RESERVED_14";
    /**
     * MAV_FRAME_MOCAP_ENU - Odometry local coordinate frame of data given by a motion capture system, Z-up
     * (x: East, y: North, z: Up).
     */
    MavFrame[MavFrame["RESERVED_15"] = 15] = "RESERVED_15";
    /**
     * MAV_FRAME_VISION_NED - Odometry local coordinate frame of data given by a vision estimation system,
     * Z-down (x: North, y: East, z: Down).
     */
    MavFrame[MavFrame["RESERVED_16"] = 16] = "RESERVED_16";
    /**
     * MAV_FRAME_VISION_ENU - Odometry local coordinate frame of data given by a vision estimation system,
     * Z-up (x: East, y: North, z: Up).
     */
    MavFrame[MavFrame["RESERVED_17"] = 17] = "RESERVED_17";
    /**
     * MAV_FRAME_ESTIM_NED - Odometry local coordinate frame of data given by an estimator running onboard
     * the vehicle, Z-down (x: North, y: East, z: Down).
     */
    MavFrame[MavFrame["RESERVED_18"] = 18] = "RESERVED_18";
    /**
     * MAV_FRAME_ESTIM_ENU - Odometry local coordinate frame of data given by an estimator running onboard
     * the vehicle, Z-up (x: East, y: North, z: Up).
     */
    MavFrame[MavFrame["RESERVED_19"] = 19] = "RESERVED_19";
    /**
     * Forward, Right, Down coordinate frame. This is a local frame with Z-down and arbitrary F/R alignment
     * (i.e. not aligned with NED/earth frame).
     */
    MavFrame[MavFrame["LOCAL_FRD"] = 20] = "LOCAL_FRD";
    /**
     * Forward, Left, Up coordinate frame. This is a local frame with Z-up and arbitrary F/L alignment
     * (i.e. not aligned with ENU/earth frame).
     */
    MavFrame[MavFrame["LOCAL_FLU"] = 21] = "LOCAL_FLU";
})(MavFrame = exports.MavFrame || (exports.MavFrame = {}));
/**
 * MAVLINK_DATA_STREAM_TYPE
 */
var MavlinkDataStreamType;
(function (MavlinkDataStreamType) {
    MavlinkDataStreamType[MavlinkDataStreamType["JPEG"] = 0] = "JPEG";
    MavlinkDataStreamType[MavlinkDataStreamType["BMP"] = 1] = "BMP";
    MavlinkDataStreamType[MavlinkDataStreamType["RAW8U"] = 2] = "RAW8U";
    MavlinkDataStreamType[MavlinkDataStreamType["RAW32U"] = 3] = "RAW32U";
    MavlinkDataStreamType[MavlinkDataStreamType["PGM"] = 4] = "PGM";
    MavlinkDataStreamType[MavlinkDataStreamType["PNG"] = 5] = "PNG";
})(MavlinkDataStreamType = exports.MavlinkDataStreamType || (exports.MavlinkDataStreamType = {}));
/**
 * FENCE_ACTION
 */
var FenceAction;
(function (FenceAction) {
    FenceAction[FenceAction["NONE"] = 0] = "NONE";
    FenceAction[FenceAction["GUIDED"] = 1] = "GUIDED";
    FenceAction[FenceAction["REPORT"] = 2] = "REPORT";
    FenceAction[FenceAction["GUIDED_THR_PASS"] = 3] = "GUIDED_THR_PASS";
    FenceAction[FenceAction["RTL"] = 4] = "RTL";
})(FenceAction = exports.FenceAction || (exports.FenceAction = {}));
/**
 * FENCE_BREACH
 */
var FenceBreach;
(function (FenceBreach) {
    FenceBreach[FenceBreach["NONE"] = 0] = "NONE";
    FenceBreach[FenceBreach["MINALT"] = 1] = "MINALT";
    FenceBreach[FenceBreach["MAXALT"] = 2] = "MAXALT";
    FenceBreach[FenceBreach["BOUNDARY"] = 3] = "BOUNDARY";
})(FenceBreach = exports.FenceBreach || (exports.FenceBreach = {}));
/**
 * Actions being taken to mitigate/prevent fence breach
 */
var FenceMitigate;
(function (FenceMitigate) {
    FenceMitigate[FenceMitigate["UNKNOWN"] = 0] = "UNKNOWN";
    FenceMitigate[FenceMitigate["NONE"] = 1] = "NONE";
    FenceMitigate[FenceMitigate["VEL_LIMIT"] = 2] = "VEL_LIMIT";
})(FenceMitigate = exports.FenceMitigate || (exports.FenceMitigate = {}));
/**
 * Enumeration of possible mount operation modes
 */
var MavMountMode;
(function (MavMountMode) {
    MavMountMode[MavMountMode["RETRACT"] = 0] = "RETRACT";
    MavMountMode[MavMountMode["NEUTRAL"] = 1] = "NEUTRAL";
    MavMountMode[MavMountMode["MAVLINK_TARGETING"] = 2] = "MAVLINK_TARGETING";
    MavMountMode[MavMountMode["RC_TARGETING"] = 3] = "RC_TARGETING";
    MavMountMode[MavMountMode["GPS_POINT"] = 4] = "GPS_POINT";
    MavMountMode[MavMountMode["SYSID_TARGET"] = 5] = "SYSID_TARGET";
    MavMountMode[MavMountMode["HOME_LOCATION"] = 6] = "HOME_LOCATION";
})(MavMountMode = exports.MavMountMode || (exports.MavMountMode = {}));
/**
 * Gripper actions.
 */
var GripperActions;
(function (GripperActions) {
    GripperActions[GripperActions["RELEASE"] = 0] = "RELEASE";
    GripperActions[GripperActions["GRAB"] = 1] = "GRAB";
})(GripperActions = exports.GripperActions || (exports.GripperActions = {}));
/**
 * Winch actions.
 */
var WinchActions;
(function (WinchActions) {
    WinchActions[WinchActions["RELAXED"] = 0] = "RELAXED";
    WinchActions[WinchActions["RELATIVE_LENGTH_CONTROL"] = 1] = "RELATIVE_LENGTH_CONTROL";
    WinchActions[WinchActions["RATE_CONTROL"] = 2] = "RATE_CONTROL";
})(WinchActions = exports.WinchActions || (exports.WinchActions = {}));
/**
 * Generalized UAVCAN node health
 */
var UavcanNodeHealth;
(function (UavcanNodeHealth) {
    UavcanNodeHealth[UavcanNodeHealth["OK"] = 0] = "OK";
    UavcanNodeHealth[UavcanNodeHealth["WARNING"] = 1] = "WARNING";
    UavcanNodeHealth[UavcanNodeHealth["ERROR"] = 2] = "ERROR";
    UavcanNodeHealth[UavcanNodeHealth["CRITICAL"] = 3] = "CRITICAL";
})(UavcanNodeHealth = exports.UavcanNodeHealth || (exports.UavcanNodeHealth = {}));
/**
 * Generalized UAVCAN node mode
 */
var UavcanNodeMode;
(function (UavcanNodeMode) {
    UavcanNodeMode[UavcanNodeMode["OPERATIONAL"] = 0] = "OPERATIONAL";
    UavcanNodeMode[UavcanNodeMode["INITIALIZATION"] = 1] = "INITIALIZATION";
    UavcanNodeMode[UavcanNodeMode["MAINTENANCE"] = 2] = "MAINTENANCE";
    UavcanNodeMode[UavcanNodeMode["SOFTWARE_UPDATE"] = 3] = "SOFTWARE_UPDATE";
    UavcanNodeMode[UavcanNodeMode["OFFLINE"] = 7] = "OFFLINE";
})(UavcanNodeMode = exports.UavcanNodeMode || (exports.UavcanNodeMode = {}));
/**
 * Flags to indicate the status of camera storage.
 */
var StorageStatus;
(function (StorageStatus) {
    StorageStatus[StorageStatus["EMPTY"] = 0] = "EMPTY";
    StorageStatus[StorageStatus["UNFORMATTED"] = 1] = "UNFORMATTED";
    StorageStatus[StorageStatus["READY"] = 2] = "READY";
    /**
     * Camera does not supply storage status information. Capacity information in STORAGE_INFORMATION
     * fields will be ignored.
     */
    StorageStatus[StorageStatus["NOT_SUPPORTED"] = 3] = "NOT_SUPPORTED";
})(StorageStatus = exports.StorageStatus || (exports.StorageStatus = {}));
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
var MavCmd;
(function (MavCmd) {
    MavCmd[MavCmd["NAV_WAYPOINT"] = 16] = "NAV_WAYPOINT";
    MavCmd[MavCmd["NAV_LOITER_UNLIM"] = 17] = "NAV_LOITER_UNLIM";
    MavCmd[MavCmd["NAV_LOITER_TURNS"] = 18] = "NAV_LOITER_TURNS";
    MavCmd[MavCmd["NAV_LOITER_TIME"] = 19] = "NAV_LOITER_TIME";
    MavCmd[MavCmd["NAV_RETURN_TO_LAUNCH"] = 20] = "NAV_RETURN_TO_LAUNCH";
    MavCmd[MavCmd["NAV_LAND"] = 21] = "NAV_LAND";
    /**
     * Takeoff from ground / hand. Vehicles that support multiple takeoff modes (e.g. VTOL quadplane)
     * should take off using the currently configured mode.
     */
    MavCmd[MavCmd["NAV_TAKEOFF"] = 22] = "NAV_TAKEOFF";
    MavCmd[MavCmd["NAV_LAND_LOCAL"] = 23] = "NAV_LAND_LOCAL";
    MavCmd[MavCmd["NAV_TAKEOFF_LOCAL"] = 24] = "NAV_TAKEOFF_LOCAL";
    MavCmd[MavCmd["NAV_FOLLOW"] = 25] = "NAV_FOLLOW";
    /**
     * Continue on the current course and climb/descend to specified altitude. When the altitude is reached
     * continue to the next command (i.e., don't proceed to the next command until the desired altitude is
     * reached.
     */
    MavCmd[MavCmd["NAV_CONTINUE_AND_CHANGE_ALT"] = 30] = "NAV_CONTINUE_AND_CHANGE_ALT";
    /**
     * Begin loiter at the specified Latitude and Longitude. If Lat=Lon=0, then loiter at the current
     * position. Don't consider the navigation command complete (don't leave loiter) until the altitude has
     * been reached. Additionally, if the Heading Required parameter is non-zero the aircraft will not
     * leave the loiter until heading toward the next waypoint.
     */
    MavCmd[MavCmd["NAV_LOITER_TO_ALT"] = 31] = "NAV_LOITER_TO_ALT";
    MavCmd[MavCmd["DO_FOLLOW"] = 32] = "DO_FOLLOW";
    MavCmd[MavCmd["DO_FOLLOW_REPOSITION"] = 33] = "DO_FOLLOW_REPOSITION";
    /**
     * Sets the region of interest (ROI) for a sensor set or the vehicle itself. This can then be used by
     * the vehicle's control system to control the vehicle attitude and the attitude of various sensors
     * such as cameras.
     */
    MavCmd[MavCmd["NAV_ROI"] = 80] = "NAV_ROI";
    MavCmd[MavCmd["NAV_PATHPLANNING"] = 81] = "NAV_PATHPLANNING";
    MavCmd[MavCmd["NAV_SPLINE_WAYPOINT"] = 82] = "NAV_SPLINE_WAYPOINT";
    MavCmd[MavCmd["NAV_VTOL_TAKEOFF"] = 84] = "NAV_VTOL_TAKEOFF";
    MavCmd[MavCmd["NAV_VTOL_LAND"] = 85] = "NAV_VTOL_LAND";
    MavCmd[MavCmd["NAV_GUIDED_ENABLE"] = 92] = "NAV_GUIDED_ENABLE";
    MavCmd[MavCmd["NAV_DELAY"] = 93] = "NAV_DELAY";
    /**
     * Descend and place payload. Vehicle moves to specified location, descends until it detects a hanging
     * payload has reached the ground, and then releases the payload. If ground is not detected before the
     * reaching the maximum descent value (param1), the command will complete without releasing the
     * payload.
     */
    MavCmd[MavCmd["NAV_PAYLOAD_PLACE"] = 94] = "NAV_PAYLOAD_PLACE";
    /**
     * NOP - This command is only used to mark the upper limit of the NAV/ACTION commands in the
     * enumeration
     */
    MavCmd[MavCmd["NAV_LAST"] = 95] = "NAV_LAST";
    MavCmd[MavCmd["CONDITION_DELAY"] = 112] = "CONDITION_DELAY";
    /**
     * Ascend/descend to target altitude at specified rate. Delay mission state machine until desired
     * altitude reached.
     */
    MavCmd[MavCmd["CONDITION_CHANGE_ALT"] = 113] = "CONDITION_CHANGE_ALT";
    MavCmd[MavCmd["CONDITION_DISTANCE"] = 114] = "CONDITION_DISTANCE";
    MavCmd[MavCmd["CONDITION_YAW"] = 115] = "CONDITION_YAW";
    MavCmd[MavCmd["CONDITION_LAST"] = 159] = "CONDITION_LAST";
    MavCmd[MavCmd["DO_SET_MODE"] = 176] = "DO_SET_MODE";
    /**
     * Jump to the desired command in the mission list. Repeat this action only the specified number of
     * times
     */
    MavCmd[MavCmd["DO_JUMP"] = 177] = "DO_JUMP";
    MavCmd[MavCmd["DO_CHANGE_SPEED"] = 178] = "DO_CHANGE_SPEED";
    MavCmd[MavCmd["DO_SET_HOME"] = 179] = "DO_SET_HOME";
    /**
     * Set a system parameter. Caution! Use of this command requires knowledge of the numeric enumeration
     * value of the parameter.
     */
    MavCmd[MavCmd["DO_SET_PARAMETER"] = 180] = "DO_SET_PARAMETER";
    MavCmd[MavCmd["DO_SET_RELAY"] = 181] = "DO_SET_RELAY";
    MavCmd[MavCmd["DO_REPEAT_RELAY"] = 182] = "DO_REPEAT_RELAY";
    MavCmd[MavCmd["DO_SET_SERVO"] = 183] = "DO_SET_SERVO";
    /**
     * Cycle a between its nominal setting and a desired PWM for a desired number of cycles with a desired
     * period.
     */
    MavCmd[MavCmd["DO_REPEAT_SERVO"] = 184] = "DO_REPEAT_SERVO";
    MavCmd[MavCmd["DO_FLIGHTTERMINATION"] = 185] = "DO_FLIGHTTERMINATION";
    MavCmd[MavCmd["DO_CHANGE_ALTITUDE"] = 186] = "DO_CHANGE_ALTITUDE";
    /**
     * Mission command to perform a landing. This is used as a marker in a mission to tell the autopilot
     * where a sequence of mission items that represents a landing starts. It may also be sent via a
     * COMMAND_LONG to trigger a landing, in which case the nearest (geographically) landing sequence in
     * the mission will be used. The Latitude/Longitude is optional, and may be set to 0 if not needed. If
     * specified then it will be used to help find the closest landing sequence.
     */
    MavCmd[MavCmd["DO_LAND_START"] = 189] = "DO_LAND_START";
    MavCmd[MavCmd["DO_RALLY_LAND"] = 190] = "DO_RALLY_LAND";
    MavCmd[MavCmd["DO_GO_AROUND"] = 191] = "DO_GO_AROUND";
    MavCmd[MavCmd["DO_REPOSITION"] = 192] = "DO_REPOSITION";
    MavCmd[MavCmd["DO_PAUSE_CONTINUE"] = 193] = "DO_PAUSE_CONTINUE";
    MavCmd[MavCmd["DO_SET_REVERSE"] = 194] = "DO_SET_REVERSE";
    /**
     * Sets the region of interest (ROI) to a location. This can then be used by the vehicle's control
     * system to control the vehicle attitude and the attitude of various sensors such as cameras.
     */
    MavCmd[MavCmd["DO_SET_ROI_LOCATION"] = 195] = "DO_SET_ROI_LOCATION";
    /**
     * Sets the region of interest (ROI) to be toward next waypoint, with optional pitch/roll/yaw offset.
     * This can then be used by the vehicle's control system to control the vehicle attitude and the
     * attitude of various sensors such as cameras.
     */
    MavCmd[MavCmd["DO_SET_ROI_WPNEXT_OFFSET"] = 196] = "DO_SET_ROI_WPNEXT_OFFSET";
    /**
     * Cancels any previous ROI command returning the vehicle/sensors to default flight characteristics.
     * This can then be used by the vehicle's control system to control the vehicle attitude and the
     * attitude of various sensors such as cameras.
     */
    MavCmd[MavCmd["DO_SET_ROI_NONE"] = 197] = "DO_SET_ROI_NONE";
    /**
     * Mount tracks system with specified system ID. Determination of target vehicle position may be done
     * with GLOBAL_POSITION_INT or any other means.
     */
    MavCmd[MavCmd["DO_SET_ROI_SYSID"] = 198] = "DO_SET_ROI_SYSID";
    MavCmd[MavCmd["DO_CONTROL_VIDEO"] = 200] = "DO_CONTROL_VIDEO";
    /**
     * Sets the region of interest (ROI) for a sensor set or the vehicle itself. This can then be used by
     * the vehicle's control system to control the vehicle attitude and the attitude of various sensors
     * such as cameras.
     */
    MavCmd[MavCmd["DO_SET_ROI"] = 201] = "DO_SET_ROI";
    /**
     * Configure digital camera. This is a fallback message for systems that have not yet implemented
     * PARAM_EXT_XXX messages and camera definition files (see
     * https://mavlink.io/en/services/camera_def.html ).
     */
    MavCmd[MavCmd["DO_DIGICAM_CONFIGURE"] = 202] = "DO_DIGICAM_CONFIGURE";
    /**
     * Control digital camera. This is a fallback message for systems that have not yet implemented
     * PARAM_EXT_XXX messages and camera definition files (see
     * https://mavlink.io/en/services/camera_def.html ).
     */
    MavCmd[MavCmd["DO_DIGICAM_CONTROL"] = 203] = "DO_DIGICAM_CONTROL";
    MavCmd[MavCmd["DO_MOUNT_CONFIGURE"] = 204] = "DO_MOUNT_CONFIGURE";
    MavCmd[MavCmd["DO_MOUNT_CONTROL"] = 205] = "DO_MOUNT_CONTROL";
    /**
     * Mission command to set camera trigger distance for this flight. The camera is triggered each time
     * this distance is exceeded. This command can also be used to set the shutter integration time for the
     * camera.
     */
    MavCmd[MavCmd["DO_SET_CAM_TRIGG_DIST"] = 206] = "DO_SET_CAM_TRIGG_DIST";
    MavCmd[MavCmd["DO_FENCE_ENABLE"] = 207] = "DO_FENCE_ENABLE";
    MavCmd[MavCmd["DO_PARACHUTE"] = 208] = "DO_PARACHUTE";
    MavCmd[MavCmd["DO_MOTOR_TEST"] = 209] = "DO_MOTOR_TEST";
    MavCmd[MavCmd["DO_INVERTED_FLIGHT"] = 210] = "DO_INVERTED_FLIGHT";
    MavCmd[MavCmd["DO_GRIPPER"] = 211] = "DO_GRIPPER";
    MavCmd[MavCmd["DO_AUTOTUNE_ENABLE"] = 212] = "DO_AUTOTUNE_ENABLE";
    MavCmd[MavCmd["NAV_SET_YAW_SPEED"] = 213] = "NAV_SET_YAW_SPEED";
    /**
     * Mission command to set camera trigger interval for this flight. If triggering is enabled, the camera
     * is triggered each time this interval expires. This command can also be used to set the shutter
     * integration time for the camera.
     */
    MavCmd[MavCmd["DO_SET_CAM_TRIGG_INTERVAL"] = 214] = "DO_SET_CAM_TRIGG_INTERVAL";
    MavCmd[MavCmd["DO_MOUNT_CONTROL_QUAT"] = 220] = "DO_MOUNT_CONTROL_QUAT";
    MavCmd[MavCmd["DO_GUIDED_MASTER"] = 221] = "DO_GUIDED_MASTER";
    MavCmd[MavCmd["DO_GUIDED_LIMITS"] = 222] = "DO_GUIDED_LIMITS";
    /**
     * Control vehicle engine. This is interpreted by the vehicles engine controller to change the target
     * engine state. It is intended for vehicles with internal combustion engines
     */
    MavCmd[MavCmd["DO_ENGINE_CONTROL"] = 223] = "DO_ENGINE_CONTROL";
    /**
     * Set the mission item with sequence number seq as current item. This means that the MAV will continue
     * to this mission item on the shortest path (not following the mission items in-between).
     */
    MavCmd[MavCmd["DO_SET_MISSION_CURRENT"] = 224] = "DO_SET_MISSION_CURRENT";
    MavCmd[MavCmd["DO_LAST"] = 240] = "DO_LAST";
    /**
     * Trigger calibration. This command will be only accepted if in pre-flight mode. Except for
     * Temperature Calibration, only one sensor should be set in a single message and all others should be
     * zero.
     */
    MavCmd[MavCmd["PREFLIGHT_CALIBRATION"] = 241] = "PREFLIGHT_CALIBRATION";
    MavCmd[MavCmd["PREFLIGHT_SET_SENSOR_OFFSETS"] = 242] = "PREFLIGHT_SET_SENSOR_OFFSETS";
    /**
     * Trigger UAVCAN configuration (actuator ID assignment and direction mapping). Note that this maps to
     * the legacy UAVCAN v0 function UAVCAN_ENUMERATE, which is intended to be executed just once during
     * initial vehicle configuration (it is not a normal pre-flight command and has been poorly named).
     */
    MavCmd[MavCmd["PREFLIGHT_UAVCAN"] = 243] = "PREFLIGHT_UAVCAN";
    /**
     * Request storage of different parameter values and logs. This command will be only accepted if in
     * pre-flight mode.
     */
    MavCmd[MavCmd["PREFLIGHT_STORAGE"] = 245] = "PREFLIGHT_STORAGE";
    MavCmd[MavCmd["PREFLIGHT_REBOOT_SHUTDOWN"] = 246] = "PREFLIGHT_REBOOT_SHUTDOWN";
    /**
     * Override current mission with command to pause mission, pause mission and move to position,
     * continue/resume mission. When param 1 indicates that the mission is paused (MAV_GOTO_DO_HOLD), param
     * 2 defines whether it holds in place or moves to another position.
     */
    MavCmd[MavCmd["OVERRIDE_GOTO"] = 252] = "OVERRIDE_GOTO";
    /**
     * Mission command to set a Camera Auto Mount Pivoting Oblique Survey (Replaces CAM_TRIGG_DIST for this
     * purpose). The camera is triggered each time this distance is exceeded, then the mount moves to the
     * next position. Params 4~6 set-up the angle limits and number of positions for oblique survey, where
     * mount-enabled vehicles automatically roll the camera between shots to emulate an oblique camera
     * setup (providing an increased HFOV). This command can also be used to set the shutter integration
     * time for the camera.
     */
    MavCmd[MavCmd["OBLIQUE_SURVEY"] = 260] = "OBLIQUE_SURVEY";
    MavCmd[MavCmd["MISSION_START"] = 300] = "MISSION_START";
    MavCmd[MavCmd["COMPONENT_ARM_DISARM"] = 400] = "COMPONENT_ARM_DISARM";
    /**
     * Instructs system to run pre-arm checks. This command should return MAV_RESULT_TEMPORARILY_REJECTED
     * in the case the system is armed, otherwse MAV_RESULT_ACCEPTED. Note that the return value from
     * executing this command does not indicate whether the vehicle is armable or not, just whether the
     * system has successfully run/is currently running the checks. The result of the checks is reflected
     * in the SYS_STATUS message.
     */
    MavCmd[MavCmd["RUN_PREARM_CHECKS"] = 401] = "RUN_PREARM_CHECKS";
    MavCmd[MavCmd["GET_HOME_POSITION"] = 410] = "GET_HOME_POSITION";
    MavCmd[MavCmd["START_RX_PAIR"] = 500] = "START_RX_PAIR";
    /**
     * Request the interval between messages for a particular MAVLink message ID. The receiver should ACK
     * the command and then emit its response in a MESSAGE_INTERVAL message.
     */
    MavCmd[MavCmd["GET_MESSAGE_INTERVAL"] = 510] = "GET_MESSAGE_INTERVAL";
    /**
     * Set the interval between messages for a particular MAVLink message ID. This interface replaces
     * REQUEST_DATA_STREAM.
     */
    MavCmd[MavCmd["SET_MESSAGE_INTERVAL"] = 511] = "SET_MESSAGE_INTERVAL";
    /**
     * Request the target system(s) emit a single instance of a specified message (i.e. a "one-shot"
     * version of MAV_CMD_SET_MESSAGE_INTERVAL).
     */
    MavCmd[MavCmd["REQUEST_MESSAGE"] = 512] = "REQUEST_MESSAGE";
    /**
     * Request MAVLink protocol version compatibility. All receivers should ACK the command and then emit
     * their capabilities in an PROTOCOL_VERSION message
     */
    MavCmd[MavCmd["REQUEST_PROTOCOL_VERSION"] = 519] = "REQUEST_PROTOCOL_VERSION";
    /**
     * Request autopilot capabilities. The receiver should ACK the command and then emit its capabilities
     * in an AUTOPILOT_VERSION message
     */
    MavCmd[MavCmd["REQUEST_AUTOPILOT_CAPABILITIES"] = 520] = "REQUEST_AUTOPILOT_CAPABILITIES";
    MavCmd[MavCmd["REQUEST_CAMERA_INFORMATION"] = 521] = "REQUEST_CAMERA_INFORMATION";
    MavCmd[MavCmd["REQUEST_CAMERA_SETTINGS"] = 522] = "REQUEST_CAMERA_SETTINGS";
    /**
     * Request storage information (STORAGE_INFORMATION). Use the command's target_component to target a
     * specific component's storage.
     */
    MavCmd[MavCmd["REQUEST_STORAGE_INFORMATION"] = 525] = "REQUEST_STORAGE_INFORMATION";
    /**
     * Format a storage medium. Once format is complete, a STORAGE_INFORMATION message is sent. Use the
     * command's target_component to target a specific component's storage.
     */
    MavCmd[MavCmd["STORAGE_FORMAT"] = 526] = "STORAGE_FORMAT";
    MavCmd[MavCmd["REQUEST_CAMERA_CAPTURE_STATUS"] = 527] = "REQUEST_CAMERA_CAPTURE_STATUS";
    MavCmd[MavCmd["REQUEST_FLIGHT_INFORMATION"] = 528] = "REQUEST_FLIGHT_INFORMATION";
    MavCmd[MavCmd["RESET_CAMERA_SETTINGS"] = 529] = "RESET_CAMERA_SETTINGS";
    /**
     * Set camera running mode. Use NaN for reserved values. GCS will send a
     * MAV_CMD_REQUEST_VIDEO_STREAM_STATUS command after a mode change if the camera supports video
     * streaming.
     */
    MavCmd[MavCmd["SET_CAMERA_MODE"] = 530] = "SET_CAMERA_MODE";
    MavCmd[MavCmd["JUMP_TAG"] = 600] = "JUMP_TAG";
    /**
     * Jump to the matching tag in the mission list. Repeat this action for the specified number of times.
     * A mission should contain a single matching tag for each jump. If this is not the case then a jump to
     * a missing tag should complete the mission, and a jump where there are multiple matching tags should
     * always select the one with the lowest mission sequence number.
     */
    MavCmd[MavCmd["DO_JUMP_TAG"] = 601] = "DO_JUMP_TAG";
    /**
     * Start image capture sequence. Sends CAMERA_IMAGE_CAPTURED after each capture. Use NaN for reserved
     * values.
     */
    MavCmd[MavCmd["IMAGE_START_CAPTURE"] = 2000] = "IMAGE_START_CAPTURE";
    MavCmd[MavCmd["IMAGE_STOP_CAPTURE"] = 2001] = "IMAGE_STOP_CAPTURE";
    MavCmd[MavCmd["DO_TRIGGER_CONTROL"] = 2003] = "DO_TRIGGER_CONTROL";
    MavCmd[MavCmd["VIDEO_START_CAPTURE"] = 2500] = "VIDEO_START_CAPTURE";
    MavCmd[MavCmd["VIDEO_STOP_CAPTURE"] = 2501] = "VIDEO_STOP_CAPTURE";
    MavCmd[MavCmd["VIDEO_START_STREAMING"] = 2502] = "VIDEO_START_STREAMING";
    MavCmd[MavCmd["VIDEO_STOP_STREAMING"] = 2503] = "VIDEO_STOP_STREAMING";
    MavCmd[MavCmd["REQUEST_VIDEO_STREAM_INFORMATION"] = 2504] = "REQUEST_VIDEO_STREAM_INFORMATION";
    MavCmd[MavCmd["REQUEST_VIDEO_STREAM_STATUS"] = 2505] = "REQUEST_VIDEO_STREAM_STATUS";
    MavCmd[MavCmd["LOGGING_START"] = 2510] = "LOGGING_START";
    MavCmd[MavCmd["LOGGING_STOP"] = 2511] = "LOGGING_STOP";
    MavCmd[MavCmd["AIRFRAME_CONFIGURATION"] = 2520] = "AIRFRAME_CONFIGURATION";
    MavCmd[MavCmd["CONTROL_HIGH_LATENCY"] = 2600] = "CONTROL_HIGH_LATENCY";
    MavCmd[MavCmd["PANORAMA_CREATE"] = 2800] = "PANORAMA_CREATE";
    MavCmd[MavCmd["DO_VTOL_TRANSITION"] = 3000] = "DO_VTOL_TRANSITION";
    /**
     * Request authorization to arm the vehicle to a external entity, the arm authorizer is responsible to
     * request all data that is needs from the vehicle before authorize or deny the request. If approved
     * the progress of command_ack message should be set with period of time that this authorization is
     * valid in seconds or in case it was denied it should be set with one of the reasons in
     * ARM_AUTH_DENIED_REASON.
     */
    MavCmd[MavCmd["ARM_AUTHORIZATION_REQUEST"] = 3001] = "ARM_AUTHORIZATION_REQUEST";
    /**
     * This command sets the submode to standard guided when vehicle is in guided mode. The vehicle holds
     * position and altitude and the user can input the desired velocities along all three axes.
     */
    MavCmd[MavCmd["SET_GUIDED_SUBMODE_STANDARD"] = 4000] = "SET_GUIDED_SUBMODE_STANDARD";
    /**
     * This command sets submode circle when vehicle is in guided mode. Vehicle flies along a circle facing
     * the center of the circle. The user can input the velocity along the circle and change the radius. If
     * no input is given the vehicle will hold position.
     */
    MavCmd[MavCmd["SET_GUIDED_SUBMODE_CIRCLE"] = 4001] = "SET_GUIDED_SUBMODE_CIRCLE";
    /**
     * Fence return point (there can only be one such point in a geofence definition). If rally points are
     * supported they should be used instead.
     */
    MavCmd[MavCmd["NAV_FENCE_RETURN_POINT"] = 5000] = "NAV_FENCE_RETURN_POINT";
    /**
     * Fence vertex for an inclusion polygon (the polygon must not be self-intersecting). The vehicle must
     * stay within this area. Minimum of 3 vertices required.
     */
    MavCmd[MavCmd["NAV_FENCE_POLYGON_VERTEX_INCLUSION"] = 5001] = "NAV_FENCE_POLYGON_VERTEX_INCLUSION";
    /**
     * Fence vertex for an exclusion polygon (the polygon must not be self-intersecting). The vehicle must
     * stay outside this area. Minimum of 3 vertices required.
     */
    MavCmd[MavCmd["NAV_FENCE_POLYGON_VERTEX_EXCLUSION"] = 5002] = "NAV_FENCE_POLYGON_VERTEX_EXCLUSION";
    MavCmd[MavCmd["NAV_FENCE_CIRCLE_INCLUSION"] = 5003] = "NAV_FENCE_CIRCLE_INCLUSION";
    MavCmd[MavCmd["NAV_FENCE_CIRCLE_EXCLUSION"] = 5004] = "NAV_FENCE_CIRCLE_EXCLUSION";
    MavCmd[MavCmd["NAV_RALLY_POINT"] = 5100] = "NAV_RALLY_POINT";
    MavCmd[MavCmd["NAV_SWARM_ROI_POLYGON_VERTEX_INCLUSION"] = 5109] = "NAV_SWARM_ROI_POLYGON_VERTEX_INCLUSION";
    /**
     * Commands the vehicle to respond with a sequence of messages UAVCAN_NODE_INFO, one message per every
     * UAVCAN node that is online. Note that some of the response messages can be lost, which the receiver
     * can detect easily by checking whether every received UAVCAN_NODE_STATUS has a matching message
     * UAVCAN_NODE_INFO received earlier; if not, this command should be sent again in order to request
     * re-transmission of the node information messages.
     */
    MavCmd[MavCmd["UAVCAN_GET_NODE_INFO"] = 5200] = "UAVCAN_GET_NODE_INFO";
    /**
     * Deploy payload on a Lat / Lon / Alt position. This includes the navigation to reach the required
     * release position and velocity.
     */
    MavCmd[MavCmd["PAYLOAD_PREPARE_DEPLOY"] = 30001] = "PAYLOAD_PREPARE_DEPLOY";
    MavCmd[MavCmd["PAYLOAD_CONTROL_DEPLOY"] = 30002] = "PAYLOAD_CONTROL_DEPLOY";
    /**
     * Magnetometer calibration based on provided known yaw. This allows for fast calibration using WMM
     * field tables in the vehicle, given only the known yaw of the vehicle. If Latitude and longitude are
     * both zero then use the current vehicle location.
     */
    MavCmd[MavCmd["FIXED_MAG_CAL_YAW"] = 42006] = "FIXED_MAG_CAL_YAW";
    MavCmd[MavCmd["DO_WINCH"] = 42600] = "DO_WINCH";
    MavCmd[MavCmd["WAYPOINT_USER_1"] = 31000] = "WAYPOINT_USER_1";
    MavCmd[MavCmd["WAYPOINT_USER_2"] = 31001] = "WAYPOINT_USER_2";
    MavCmd[MavCmd["WAYPOINT_USER_3"] = 31002] = "WAYPOINT_USER_3";
    MavCmd[MavCmd["WAYPOINT_USER_4"] = 31003] = "WAYPOINT_USER_4";
    MavCmd[MavCmd["WAYPOINT_USER_5"] = 31004] = "WAYPOINT_USER_5";
    /**
     * User defined spatial item. Ground Station will not show the Vehicle as flying through this item.
     * Example: ROI item.
     */
    MavCmd[MavCmd["SPATIAL_USER_1"] = 31005] = "SPATIAL_USER_1";
    /**
     * User defined spatial item. Ground Station will not show the Vehicle as flying through this item.
     * Example: ROI item.
     */
    MavCmd[MavCmd["SPATIAL_USER_2"] = 31006] = "SPATIAL_USER_2";
    /**
     * User defined spatial item. Ground Station will not show the Vehicle as flying through this item.
     * Example: ROI item.
     */
    MavCmd[MavCmd["SPATIAL_USER_3"] = 31007] = "SPATIAL_USER_3";
    /**
     * User defined spatial item. Ground Station will not show the Vehicle as flying through this item.
     * Example: ROI item.
     */
    MavCmd[MavCmd["SPATIAL_USER_4"] = 31008] = "SPATIAL_USER_4";
    /**
     * User defined spatial item. Ground Station will not show the Vehicle as flying through this item.
     * Example: ROI item.
     */
    MavCmd[MavCmd["SPATIAL_USER_5"] = 31009] = "SPATIAL_USER_5";
    /**
     * User defined command. Ground Station will not show the Vehicle as flying through this item. Example:
     * MAV_CMD_DO_SET_PARAMETER item.
     */
    MavCmd[MavCmd["USER_1"] = 31010] = "USER_1";
    /**
     * User defined command. Ground Station will not show the Vehicle as flying through this item. Example:
     * MAV_CMD_DO_SET_PARAMETER item.
     */
    MavCmd[MavCmd["USER_2"] = 31011] = "USER_2";
    /**
     * User defined command. Ground Station will not show the Vehicle as flying through this item. Example:
     * MAV_CMD_DO_SET_PARAMETER item.
     */
    MavCmd[MavCmd["USER_3"] = 31012] = "USER_3";
    /**
     * User defined command. Ground Station will not show the Vehicle as flying through this item. Example:
     * MAV_CMD_DO_SET_PARAMETER item.
     */
    MavCmd[MavCmd["USER_4"] = 31013] = "USER_4";
    /**
     * User defined command. Ground Station will not show the Vehicle as flying through this item. Example:
     * MAV_CMD_DO_SET_PARAMETER item.
     */
    MavCmd[MavCmd["USER_5"] = 31014] = "USER_5";
})(MavCmd = exports.MavCmd || (exports.MavCmd = {}));
/**
 * A data stream is not a fixed set of messages, but rather a recommendation to the autopilot software.
 * Individual autopilots may or may not obey the recommended messages.
 */
var MavDataStream;
(function (MavDataStream) {
    MavDataStream[MavDataStream["ALL"] = 0] = "ALL";
    MavDataStream[MavDataStream["RAW_SENSORS"] = 1] = "RAW_SENSORS";
    MavDataStream[MavDataStream["EXTENDED_STATUS"] = 2] = "EXTENDED_STATUS";
    MavDataStream[MavDataStream["RC_CHANNELS"] = 3] = "RC_CHANNELS";
    MavDataStream[MavDataStream["RAW_CONTROLLER"] = 4] = "RAW_CONTROLLER";
    MavDataStream[MavDataStream["POSITION"] = 6] = "POSITION";
    MavDataStream[MavDataStream["EXTRA1"] = 10] = "EXTRA1";
    MavDataStream[MavDataStream["EXTRA2"] = 11] = "EXTRA2";
    MavDataStream[MavDataStream["EXTRA3"] = 12] = "EXTRA3";
})(MavDataStream = exports.MavDataStream || (exports.MavDataStream = {}));
/**
 * The ROI (region of interest) for the vehicle. This can be be used by the vehicle for camera/vehicle
 * attitude alignment (see MAV_CMD_NAV_ROI).
 */
var MavRoi;
(function (MavRoi) {
    MavRoi[MavRoi["NONE"] = 0] = "NONE";
    MavRoi[MavRoi["WPNEXT"] = 1] = "WPNEXT";
    MavRoi[MavRoi["WPINDEX"] = 2] = "WPINDEX";
    MavRoi[MavRoi["LOCATION"] = 3] = "LOCATION";
    MavRoi[MavRoi["TARGET"] = 4] = "TARGET";
})(MavRoi = exports.MavRoi || (exports.MavRoi = {}));
/**
 * ACK / NACK / ERROR values as a result of MAV_CMDs and for mission item transmission.
 */
var MavCmdAck;
(function (MavCmdAck) {
    MavCmdAck[MavCmdAck["OK"] = 0] = "OK";
    /**
     * Generic error message if none of the other reasons fails or if no detailed error reporting is
     * implemented.
     */
    MavCmdAck[MavCmdAck["ERR_FAIL"] = 1] = "ERR_FAIL";
    MavCmdAck[MavCmdAck["ERR_ACCESS_DENIED"] = 2] = "ERR_ACCESS_DENIED";
    MavCmdAck[MavCmdAck["ERR_NOT_SUPPORTED"] = 3] = "ERR_NOT_SUPPORTED";
    MavCmdAck[MavCmdAck["ERR_COORDINATE_FRAME_NOT_SUPPORTED"] = 4] = "ERR_COORDINATE_FRAME_NOT_SUPPORTED";
    /**
     * The coordinate frame of this command is ok, but he coordinate values exceed the safety limits of
     * this system. This is a generic error, please use the more specific error messages below if possible.
     */
    MavCmdAck[MavCmdAck["ERR_COORDINATES_OUT_OF_RANGE"] = 5] = "ERR_COORDINATES_OUT_OF_RANGE";
    MavCmdAck[MavCmdAck["ERR_X_LAT_OUT_OF_RANGE"] = 6] = "ERR_X_LAT_OUT_OF_RANGE";
    MavCmdAck[MavCmdAck["ERR_Y_LON_OUT_OF_RANGE"] = 7] = "ERR_Y_LON_OUT_OF_RANGE";
    MavCmdAck[MavCmdAck["ERR_Z_ALT_OUT_OF_RANGE"] = 8] = "ERR_Z_ALT_OUT_OF_RANGE";
})(MavCmdAck = exports.MavCmdAck || (exports.MavCmdAck = {}));
/**
 * Specifies the datatype of a MAVLink parameter.
 */
var MavParamType;
(function (MavParamType) {
    MavParamType[MavParamType["UINT8"] = 1] = "UINT8";
    MavParamType[MavParamType["INT8"] = 2] = "INT8";
    MavParamType[MavParamType["UINT16"] = 3] = "UINT16";
    MavParamType[MavParamType["INT16"] = 4] = "INT16";
    MavParamType[MavParamType["UINT32"] = 5] = "UINT32";
    MavParamType[MavParamType["INT32"] = 6] = "INT32";
    MavParamType[MavParamType["UINT64"] = 7] = "UINT64";
    MavParamType[MavParamType["INT64"] = 8] = "INT64";
    MavParamType[MavParamType["REAL32"] = 9] = "REAL32";
    MavParamType[MavParamType["REAL64"] = 10] = "REAL64";
})(MavParamType = exports.MavParamType || (exports.MavParamType = {}));
/**
 * Result from a MAVLink command (MAV_CMD)
 */
var MavResult;
(function (MavResult) {
    MavResult[MavResult["ACCEPTED"] = 0] = "ACCEPTED";
    /**
     * Command is valid, but cannot be executed at this time. This is used to indicate a problem that
     * should be fixed just by waiting (e.g. a state machine is busy, can't arm because have not got GPS
     * lock, etc.). Retrying later should work.
     */
    MavResult[MavResult["TEMPORARILY_REJECTED"] = 1] = "TEMPORARILY_REJECTED";
    /**
     * Command is invalid (is supported but has invalid parameters). Retrying same command and parameters
     * will not work.
     */
    MavResult[MavResult["DENIED"] = 2] = "DENIED";
    MavResult[MavResult["UNSUPPORTED"] = 3] = "UNSUPPORTED";
    /**
     * Command is valid, but execution has failed. This is used to indicate any non-temporary or unexpected
     * problem, i.e. any problem that must be fixed before the command can succeed/be retried. For example,
     * attempting to write a file when out of memory, attempting to arm when sensors are not calibrated,
     * etc.
     */
    MavResult[MavResult["FAILED"] = 4] = "FAILED";
    /**
     * Command is valid and is being executed. This will be followed by further progress updates, i.e. the
     * component may send further COMMAND_ACK messages with result MAV_RESULT_IN_PROGRESS (at a rate
     * decided by the implementation), and must terminate by sending a COMMAND_ACK message with final
     * result of the operation. The COMMAND_ACK.progress field can be used to indicate the progress of the
     * operation. There is no need for the sender to retry the command, but if done during execution, the
     * component will return MAV_RESULT_IN_PROGRESS with an updated progress.
     */
    MavResult[MavResult["IN_PROGRESS"] = 5] = "IN_PROGRESS";
})(MavResult = exports.MavResult || (exports.MavResult = {}));
/**
 * Result of mission operation (in a MISSION_ACK message).
 */
var MavMissionResult;
(function (MavMissionResult) {
    MavMissionResult[MavMissionResult["ACCEPTED"] = 0] = "ACCEPTED";
    MavMissionResult[MavMissionResult["ERROR"] = 1] = "ERROR";
    MavMissionResult[MavMissionResult["UNSUPPORTED_FRAME"] = 2] = "UNSUPPORTED_FRAME";
    MavMissionResult[MavMissionResult["UNSUPPORTED"] = 3] = "UNSUPPORTED";
    MavMissionResult[MavMissionResult["NO_SPACE"] = 4] = "NO_SPACE";
    MavMissionResult[MavMissionResult["INVALID"] = 5] = "INVALID";
    MavMissionResult[MavMissionResult["INVALID_PARAM1"] = 6] = "INVALID_PARAM1";
    MavMissionResult[MavMissionResult["INVALID_PARAM2"] = 7] = "INVALID_PARAM2";
    MavMissionResult[MavMissionResult["INVALID_PARAM3"] = 8] = "INVALID_PARAM3";
    MavMissionResult[MavMissionResult["INVALID_PARAM4"] = 9] = "INVALID_PARAM4";
    MavMissionResult[MavMissionResult["INVALID_PARAM5_X"] = 10] = "INVALID_PARAM5_X";
    MavMissionResult[MavMissionResult["INVALID_PARAM6_Y"] = 11] = "INVALID_PARAM6_Y";
    MavMissionResult[MavMissionResult["INVALID_PARAM7"] = 12] = "INVALID_PARAM7";
    MavMissionResult[MavMissionResult["INVALID_SEQUENCE"] = 13] = "INVALID_SEQUENCE";
    MavMissionResult[MavMissionResult["DENIED"] = 14] = "DENIED";
    MavMissionResult[MavMissionResult["OPERATION_CANCELLED"] = 15] = "OPERATION_CANCELLED";
})(MavMissionResult = exports.MavMissionResult || (exports.MavMissionResult = {}));
/**
 * Indicates the severity level, generally used for status messages to indicate their relative urgency.
 * Based on RFC-5424 using expanded definitions at:
 * http://www.kiwisyslog.com/kb/info:-syslog-message-levels/.
 */
var MavSeverity;
(function (MavSeverity) {
    MavSeverity[MavSeverity["EMERGENCY"] = 0] = "EMERGENCY";
    MavSeverity[MavSeverity["ALERT"] = 1] = "ALERT";
    MavSeverity[MavSeverity["CRITICAL"] = 2] = "CRITICAL";
    MavSeverity[MavSeverity["ERROR"] = 3] = "ERROR";
    /**
     * Indicates about a possible future error if this is not resolved within a given timeframe. Example
     * would be a low battery warning.
     */
    MavSeverity[MavSeverity["WARNING"] = 4] = "WARNING";
    /**
     * An unusual event has occurred, though not an error condition. This should be investigated for the
     * root cause.
     */
    MavSeverity[MavSeverity["NOTICE"] = 5] = "NOTICE";
    MavSeverity[MavSeverity["INFO"] = 6] = "INFO";
    /**
     * Useful non-operational messages that can assist in debugging. These should not occur during normal
     * operation.
     */
    MavSeverity[MavSeverity["DEBUG"] = 7] = "DEBUG";
})(MavSeverity = exports.MavSeverity || (exports.MavSeverity = {}));
/**
 * Power supply status flags (bitmask)
 */
var MavPowerStatus;
(function (MavPowerStatus) {
    MavPowerStatus[MavPowerStatus["BRICK_VALID"] = 1] = "BRICK_VALID";
    MavPowerStatus[MavPowerStatus["SERVO_VALID"] = 2] = "SERVO_VALID";
    MavPowerStatus[MavPowerStatus["USB_CONNECTED"] = 4] = "USB_CONNECTED";
    MavPowerStatus[MavPowerStatus["PERIPH_OVERCURRENT"] = 8] = "PERIPH_OVERCURRENT";
    MavPowerStatus[MavPowerStatus["PERIPH_HIPOWER_OVERCURRENT"] = 16] = "PERIPH_HIPOWER_OVERCURRENT";
    MavPowerStatus[MavPowerStatus["CHANGED"] = 32] = "CHANGED";
})(MavPowerStatus = exports.MavPowerStatus || (exports.MavPowerStatus = {}));
/**
 * SERIAL_CONTROL device types
 */
var SerialControlDev;
(function (SerialControlDev) {
    SerialControlDev[SerialControlDev["DEV_TELEM1"] = 0] = "DEV_TELEM1";
    SerialControlDev[SerialControlDev["DEV_TELEM2"] = 1] = "DEV_TELEM2";
    SerialControlDev[SerialControlDev["DEV_GPS1"] = 2] = "DEV_GPS1";
    SerialControlDev[SerialControlDev["DEV_GPS2"] = 3] = "DEV_GPS2";
    SerialControlDev[SerialControlDev["DEV_SHELL"] = 10] = "DEV_SHELL";
    SerialControlDev[SerialControlDev["SERIAL0"] = 100] = "SERIAL0";
    SerialControlDev[SerialControlDev["SERIAL1"] = 101] = "SERIAL1";
    SerialControlDev[SerialControlDev["SERIAL2"] = 102] = "SERIAL2";
    SerialControlDev[SerialControlDev["SERIAL3"] = 103] = "SERIAL3";
    SerialControlDev[SerialControlDev["SERIAL4"] = 104] = "SERIAL4";
    SerialControlDev[SerialControlDev["SERIAL5"] = 105] = "SERIAL5";
    SerialControlDev[SerialControlDev["SERIAL6"] = 106] = "SERIAL6";
    SerialControlDev[SerialControlDev["SERIAL7"] = 107] = "SERIAL7";
    SerialControlDev[SerialControlDev["SERIAL8"] = 108] = "SERIAL8";
    SerialControlDev[SerialControlDev["SERIAL9"] = 109] = "SERIAL9";
})(SerialControlDev = exports.SerialControlDev || (exports.SerialControlDev = {}));
/**
 * SERIAL_CONTROL flags (bitmask)
 */
var SerialControlFlag;
(function (SerialControlFlag) {
    SerialControlFlag[SerialControlFlag["REPLY"] = 1] = "REPLY";
    SerialControlFlag[SerialControlFlag["RESPOND"] = 2] = "RESPOND";
    /**
     * Set if access to the serial port should be removed from whatever driver is currently using it,
     * giving exclusive access to the SERIAL_CONTROL protocol. The port can be handed back by sending a
     * request without this flag set
     */
    SerialControlFlag[SerialControlFlag["EXCLUSIVE"] = 4] = "EXCLUSIVE";
    SerialControlFlag[SerialControlFlag["BLOCKING"] = 8] = "BLOCKING";
    SerialControlFlag[SerialControlFlag["MULTI"] = 16] = "MULTI";
})(SerialControlFlag = exports.SerialControlFlag || (exports.SerialControlFlag = {}));
/**
 * Enumeration of distance sensor types
 */
var MavDistanceSensor;
(function (MavDistanceSensor) {
    MavDistanceSensor[MavDistanceSensor["LASER"] = 0] = "LASER";
    MavDistanceSensor[MavDistanceSensor["ULTRASOUND"] = 1] = "ULTRASOUND";
    MavDistanceSensor[MavDistanceSensor["INFRARED"] = 2] = "INFRARED";
    MavDistanceSensor[MavDistanceSensor["RADAR"] = 3] = "RADAR";
    MavDistanceSensor[MavDistanceSensor["UNKNOWN"] = 4] = "UNKNOWN";
})(MavDistanceSensor = exports.MavDistanceSensor || (exports.MavDistanceSensor = {}));
/**
 * Enumeration of sensor orientation, according to its rotations
 */
var MavSensorOrientation;
(function (MavSensorOrientation) {
    MavSensorOrientation[MavSensorOrientation["NONE"] = 0] = "NONE";
    MavSensorOrientation[MavSensorOrientation["YAW_45"] = 1] = "YAW_45";
    MavSensorOrientation[MavSensorOrientation["YAW_90"] = 2] = "YAW_90";
    MavSensorOrientation[MavSensorOrientation["YAW_135"] = 3] = "YAW_135";
    MavSensorOrientation[MavSensorOrientation["YAW_180"] = 4] = "YAW_180";
    MavSensorOrientation[MavSensorOrientation["YAW_225"] = 5] = "YAW_225";
    MavSensorOrientation[MavSensorOrientation["YAW_270"] = 6] = "YAW_270";
    MavSensorOrientation[MavSensorOrientation["YAW_315"] = 7] = "YAW_315";
    MavSensorOrientation[MavSensorOrientation["ROLL_180"] = 8] = "ROLL_180";
    MavSensorOrientation[MavSensorOrientation["ROLL_180_YAW_45"] = 9] = "ROLL_180_YAW_45";
    MavSensorOrientation[MavSensorOrientation["ROLL_180_YAW_90"] = 10] = "ROLL_180_YAW_90";
    MavSensorOrientation[MavSensorOrientation["ROLL_180_YAW_135"] = 11] = "ROLL_180_YAW_135";
    MavSensorOrientation[MavSensorOrientation["PITCH_180"] = 12] = "PITCH_180";
    MavSensorOrientation[MavSensorOrientation["ROLL_180_YAW_225"] = 13] = "ROLL_180_YAW_225";
    MavSensorOrientation[MavSensorOrientation["ROLL_180_YAW_270"] = 14] = "ROLL_180_YAW_270";
    MavSensorOrientation[MavSensorOrientation["ROLL_180_YAW_315"] = 15] = "ROLL_180_YAW_315";
    MavSensorOrientation[MavSensorOrientation["ROLL_90"] = 16] = "ROLL_90";
    MavSensorOrientation[MavSensorOrientation["ROLL_90_YAW_45"] = 17] = "ROLL_90_YAW_45";
    MavSensorOrientation[MavSensorOrientation["ROLL_90_YAW_90"] = 18] = "ROLL_90_YAW_90";
    MavSensorOrientation[MavSensorOrientation["ROLL_90_YAW_135"] = 19] = "ROLL_90_YAW_135";
    MavSensorOrientation[MavSensorOrientation["ROLL_270"] = 20] = "ROLL_270";
    MavSensorOrientation[MavSensorOrientation["ROLL_270_YAW_45"] = 21] = "ROLL_270_YAW_45";
    MavSensorOrientation[MavSensorOrientation["ROLL_270_YAW_90"] = 22] = "ROLL_270_YAW_90";
    MavSensorOrientation[MavSensorOrientation["ROLL_270_YAW_135"] = 23] = "ROLL_270_YAW_135";
    MavSensorOrientation[MavSensorOrientation["PITCH_90"] = 24] = "PITCH_90";
    MavSensorOrientation[MavSensorOrientation["PITCH_270"] = 25] = "PITCH_270";
    MavSensorOrientation[MavSensorOrientation["PITCH_180_YAW_90"] = 26] = "PITCH_180_YAW_90";
    MavSensorOrientation[MavSensorOrientation["PITCH_180_YAW_270"] = 27] = "PITCH_180_YAW_270";
    MavSensorOrientation[MavSensorOrientation["ROLL_90_PITCH_90"] = 28] = "ROLL_90_PITCH_90";
    MavSensorOrientation[MavSensorOrientation["ROLL_180_PITCH_90"] = 29] = "ROLL_180_PITCH_90";
    MavSensorOrientation[MavSensorOrientation["ROLL_270_PITCH_90"] = 30] = "ROLL_270_PITCH_90";
    MavSensorOrientation[MavSensorOrientation["ROLL_90_PITCH_180"] = 31] = "ROLL_90_PITCH_180";
    MavSensorOrientation[MavSensorOrientation["ROLL_270_PITCH_180"] = 32] = "ROLL_270_PITCH_180";
    MavSensorOrientation[MavSensorOrientation["ROLL_90_PITCH_270"] = 33] = "ROLL_90_PITCH_270";
    MavSensorOrientation[MavSensorOrientation["ROLL_180_PITCH_270"] = 34] = "ROLL_180_PITCH_270";
    MavSensorOrientation[MavSensorOrientation["ROLL_270_PITCH_270"] = 35] = "ROLL_270_PITCH_270";
    MavSensorOrientation[MavSensorOrientation["ROLL_90_PITCH_180_YAW_90"] = 36] = "ROLL_90_PITCH_180_YAW_90";
    MavSensorOrientation[MavSensorOrientation["ROLL_90_YAW_270"] = 37] = "ROLL_90_YAW_270";
    MavSensorOrientation[MavSensorOrientation["ROLL_90_PITCH_68_YAW_293"] = 38] = "ROLL_90_PITCH_68_YAW_293";
    MavSensorOrientation[MavSensorOrientation["PITCH_315"] = 39] = "PITCH_315";
    MavSensorOrientation[MavSensorOrientation["ROLL_90_PITCH_315"] = 40] = "ROLL_90_PITCH_315";
    MavSensorOrientation[MavSensorOrientation["CUSTOM"] = 100] = "CUSTOM";
})(MavSensorOrientation = exports.MavSensorOrientation || (exports.MavSensorOrientation = {}));
/**
 * Bitmask of (optional) autopilot capabilities (64 bit). If a bit is set, the autopilot supports this
 * capability.
 */
var MavProtocolCapability;
(function (MavProtocolCapability) {
    MavProtocolCapability[MavProtocolCapability["MISSION_FLOAT"] = 1] = "MISSION_FLOAT";
    MavProtocolCapability[MavProtocolCapability["PARAM_FLOAT"] = 2] = "PARAM_FLOAT";
    MavProtocolCapability[MavProtocolCapability["MISSION_INT"] = 4] = "MISSION_INT";
    MavProtocolCapability[MavProtocolCapability["COMMAND_INT"] = 8] = "COMMAND_INT";
    MavProtocolCapability[MavProtocolCapability["PARAM_UNION"] = 16] = "PARAM_UNION";
    MavProtocolCapability[MavProtocolCapability["FTP"] = 32] = "FTP";
    MavProtocolCapability[MavProtocolCapability["SET_ATTITUDE_TARGET"] = 64] = "SET_ATTITUDE_TARGET";
    MavProtocolCapability[MavProtocolCapability["SET_POSITION_TARGET_LOCAL_NED"] = 128] = "SET_POSITION_TARGET_LOCAL_NED";
    MavProtocolCapability[MavProtocolCapability["SET_POSITION_TARGET_GLOBAL_INT"] = 256] = "SET_POSITION_TARGET_GLOBAL_INT";
    MavProtocolCapability[MavProtocolCapability["TERRAIN"] = 512] = "TERRAIN";
    MavProtocolCapability[MavProtocolCapability["SET_ACTUATOR_TARGET"] = 1024] = "SET_ACTUATOR_TARGET";
    MavProtocolCapability[MavProtocolCapability["FLIGHT_TERMINATION"] = 2048] = "FLIGHT_TERMINATION";
    MavProtocolCapability[MavProtocolCapability["COMPASS_CALIBRATION"] = 4096] = "COMPASS_CALIBRATION";
    MavProtocolCapability[MavProtocolCapability["MAVLINK2"] = 8192] = "MAVLINK2";
    MavProtocolCapability[MavProtocolCapability["MISSION_FENCE"] = 16384] = "MISSION_FENCE";
    MavProtocolCapability[MavProtocolCapability["MISSION_RALLY"] = 32768] = "MISSION_RALLY";
    MavProtocolCapability[MavProtocolCapability["FLIGHT_INFORMATION"] = 65536] = "FLIGHT_INFORMATION";
})(MavProtocolCapability = exports.MavProtocolCapability || (exports.MavProtocolCapability = {}));
/**
 * Type of mission items being requested/sent in mission protocol.
 */
var MavMissionType;
(function (MavMissionType) {
    MavMissionType[MavMissionType["MISSION"] = 0] = "MISSION";
    MavMissionType[MavMissionType["FENCE"] = 1] = "FENCE";
    /**
     * Specifies the rally points for the vehicle. Rally points are alternative RTL points. Items are
     * MAV_CMD_NAV_RALLY_POINT rally point items.
     */
    MavMissionType[MavMissionType["RALLY"] = 2] = "RALLY";
    /**
     * Specifies Swarm Region-of-Interest. Items are either MAV_CMD_NAV_FENCE_POLYGON_VERTEX_INCLUSION or
     * MAV_CMD_NAV_FENCE_CIRCLE_INCLUSION.
     */
    MavMissionType[MavMissionType["SWARM_ROI"] = 3] = "SWARM_ROI";
    MavMissionType[MavMissionType["ALL"] = 255] = "ALL";
})(MavMissionType = exports.MavMissionType || (exports.MavMissionType = {}));
/**
 * Enumeration of estimator types
 */
var MavEstimatorType;
(function (MavEstimatorType) {
    MavEstimatorType[MavEstimatorType["UNKNOWN"] = 0] = "UNKNOWN";
    MavEstimatorType[MavEstimatorType["NAIVE"] = 1] = "NAIVE";
    MavEstimatorType[MavEstimatorType["VISION"] = 2] = "VISION";
    MavEstimatorType[MavEstimatorType["VIO"] = 3] = "VIO";
    MavEstimatorType[MavEstimatorType["GPS"] = 4] = "GPS";
    MavEstimatorType[MavEstimatorType["GPS_INS"] = 5] = "GPS_INS";
    MavEstimatorType[MavEstimatorType["MOCAP"] = 6] = "MOCAP";
    MavEstimatorType[MavEstimatorType["LIDAR"] = 7] = "LIDAR";
    MavEstimatorType[MavEstimatorType["AUTOPILOT"] = 8] = "AUTOPILOT";
})(MavEstimatorType = exports.MavEstimatorType || (exports.MavEstimatorType = {}));
/**
 * Enumeration of battery types
 */
var MavBatteryType;
(function (MavBatteryType) {
    MavBatteryType[MavBatteryType["UNKNOWN"] = 0] = "UNKNOWN";
    MavBatteryType[MavBatteryType["LIPO"] = 1] = "LIPO";
    MavBatteryType[MavBatteryType["LIFE"] = 2] = "LIFE";
    MavBatteryType[MavBatteryType["LION"] = 3] = "LION";
    MavBatteryType[MavBatteryType["NIMH"] = 4] = "NIMH";
})(MavBatteryType = exports.MavBatteryType || (exports.MavBatteryType = {}));
/**
 * Enumeration of battery functions
 */
var MavBatteryFunction;
(function (MavBatteryFunction) {
    MavBatteryFunction[MavBatteryFunction["FUNCTION_UNKNOWN"] = 0] = "FUNCTION_UNKNOWN";
    MavBatteryFunction[MavBatteryFunction["FUNCTION_ALL"] = 1] = "FUNCTION_ALL";
    MavBatteryFunction[MavBatteryFunction["FUNCTION_PROPULSION"] = 2] = "FUNCTION_PROPULSION";
    MavBatteryFunction[MavBatteryFunction["FUNCTION_AVIONICS"] = 3] = "FUNCTION_AVIONICS";
    MavBatteryFunction[MavBatteryFunction["TYPE_PAYLOAD"] = 4] = "TYPE_PAYLOAD";
})(MavBatteryFunction = exports.MavBatteryFunction || (exports.MavBatteryFunction = {}));
/**
 * Enumeration for battery charge states.
 */
var MavBatteryChargeState;
(function (MavBatteryChargeState) {
    MavBatteryChargeState[MavBatteryChargeState["UNDEFINED"] = 0] = "UNDEFINED";
    MavBatteryChargeState[MavBatteryChargeState["OK"] = 1] = "OK";
    MavBatteryChargeState[MavBatteryChargeState["LOW"] = 2] = "LOW";
    MavBatteryChargeState[MavBatteryChargeState["CRITICAL"] = 3] = "CRITICAL";
    /**
     * Battery state is too low for ordinary abort sequence. Perform fastest possible emergency stop to
     * prevent damage.
     */
    MavBatteryChargeState[MavBatteryChargeState["EMERGENCY"] = 4] = "EMERGENCY";
    MavBatteryChargeState[MavBatteryChargeState["FAILED"] = 5] = "FAILED";
    MavBatteryChargeState[MavBatteryChargeState["UNHEALTHY"] = 6] = "UNHEALTHY";
    MavBatteryChargeState[MavBatteryChargeState["CHARGING"] = 7] = "CHARGING";
})(MavBatteryChargeState = exports.MavBatteryChargeState || (exports.MavBatteryChargeState = {}));
/**
 * Flags to report status/failure cases for a power generator (used in GENERATOR_STATUS). Note that
 * FAULTS are conditions that cause the generator to fail. Warnings are conditions that require
 * attention before the next use (they indicate the system is not operating properly).
 */
var MavGeneratorStatusFlag;
(function (MavGeneratorStatusFlag) {
    MavGeneratorStatusFlag[MavGeneratorStatusFlag["OFF"] = 1] = "OFF";
    MavGeneratorStatusFlag[MavGeneratorStatusFlag["READY"] = 2] = "READY";
    MavGeneratorStatusFlag[MavGeneratorStatusFlag["GENERATING"] = 4] = "GENERATING";
    MavGeneratorStatusFlag[MavGeneratorStatusFlag["CHARGING"] = 8] = "CHARGING";
    MavGeneratorStatusFlag[MavGeneratorStatusFlag["REDUCED_POWER"] = 16] = "REDUCED_POWER";
    MavGeneratorStatusFlag[MavGeneratorStatusFlag["MAXPOWER"] = 32] = "MAXPOWER";
    MavGeneratorStatusFlag[MavGeneratorStatusFlag["OVERTEMP_WARNING"] = 64] = "OVERTEMP_WARNING";
    MavGeneratorStatusFlag[MavGeneratorStatusFlag["OVERTEMP_FAULT"] = 128] = "OVERTEMP_FAULT";
    MavGeneratorStatusFlag[MavGeneratorStatusFlag["ELECTRONICS_OVERTEMP_WARNING"] = 256] = "ELECTRONICS_OVERTEMP_WARNING";
    MavGeneratorStatusFlag[MavGeneratorStatusFlag["ELECTRONICS_OVERTEMP_FAULT"] = 512] = "ELECTRONICS_OVERTEMP_FAULT";
    MavGeneratorStatusFlag[MavGeneratorStatusFlag["ELECTRONICS_FAULT"] = 1024] = "ELECTRONICS_FAULT";
    /**
     * The power source supplying the generator failed e.g. mechanical generator stopped, tether is no
     * longer providing power, solar cell is in shade, hydrogen reaction no longer happening.
     */
    MavGeneratorStatusFlag[MavGeneratorStatusFlag["POWERSOURCE_FAULT"] = 2048] = "POWERSOURCE_FAULT";
    MavGeneratorStatusFlag[MavGeneratorStatusFlag["COMMUNICATION_WARNING"] = 4096] = "COMMUNICATION_WARNING";
    MavGeneratorStatusFlag[MavGeneratorStatusFlag["COOLING_WARNING"] = 8192] = "COOLING_WARNING";
    MavGeneratorStatusFlag[MavGeneratorStatusFlag["POWER_RAIL_FAULT"] = 16384] = "POWER_RAIL_FAULT";
    MavGeneratorStatusFlag[MavGeneratorStatusFlag["OVERCURRENT_FAULT"] = 32768] = "OVERCURRENT_FAULT";
    /**
     * Generator controller detected a high current going into the batteries and shutdown to prevent
     * battery damage.
     */
    MavGeneratorStatusFlag[MavGeneratorStatusFlag["BATTERY_OVERCHARGE_CURRENT_FAULT"] = 65536] = "BATTERY_OVERCHARGE_CURRENT_FAULT";
    /**
     * Generator controller exceeded it's overvoltage threshold and shutdown to prevent it exceeding the
     * voltage rating.
     */
    MavGeneratorStatusFlag[MavGeneratorStatusFlag["OVERVOLTAGE_FAULT"] = 131072] = "OVERVOLTAGE_FAULT";
    MavGeneratorStatusFlag[MavGeneratorStatusFlag["BATTERY_UNDERVOLT_FAULT"] = 262144] = "BATTERY_UNDERVOLT_FAULT";
    MavGeneratorStatusFlag[MavGeneratorStatusFlag["START_INHIBITED"] = 524288] = "START_INHIBITED";
    MavGeneratorStatusFlag[MavGeneratorStatusFlag["MAINTENANCE_REQUIRED"] = 1048576] = "MAINTENANCE_REQUIRED";
    MavGeneratorStatusFlag[MavGeneratorStatusFlag["WARMING_UP"] = 2097152] = "WARMING_UP";
    MavGeneratorStatusFlag[MavGeneratorStatusFlag["IDLE"] = 4194304] = "IDLE";
})(MavGeneratorStatusFlag = exports.MavGeneratorStatusFlag || (exports.MavGeneratorStatusFlag = {}));
/**
 * Enumeration of VTOL states
 */
var MavVtolState;
(function (MavVtolState) {
    MavVtolState[MavVtolState["UNDEFINED"] = 0] = "UNDEFINED";
    MavVtolState[MavVtolState["TRANSITION_TO_FW"] = 1] = "TRANSITION_TO_FW";
    MavVtolState[MavVtolState["TRANSITION_TO_MC"] = 2] = "TRANSITION_TO_MC";
    MavVtolState[MavVtolState["MC"] = 3] = "MC";
    MavVtolState[MavVtolState["FW"] = 4] = "FW";
})(MavVtolState = exports.MavVtolState || (exports.MavVtolState = {}));
/**
 * Enumeration of landed detector states
 */
var MavLandedState;
(function (MavLandedState) {
    MavLandedState[MavLandedState["UNDEFINED"] = 0] = "UNDEFINED";
    MavLandedState[MavLandedState["ON_GROUND"] = 1] = "ON_GROUND";
    MavLandedState[MavLandedState["IN_AIR"] = 2] = "IN_AIR";
    MavLandedState[MavLandedState["TAKEOFF"] = 3] = "TAKEOFF";
    MavLandedState[MavLandedState["LANDING"] = 4] = "LANDING";
})(MavLandedState = exports.MavLandedState || (exports.MavLandedState = {}));
/**
 * Enumeration of the ADSB altimeter types
 */
var AdsbAltitudeType;
(function (AdsbAltitudeType) {
    AdsbAltitudeType[AdsbAltitudeType["PRESSURE_QNH"] = 0] = "PRESSURE_QNH";
    AdsbAltitudeType[AdsbAltitudeType["GEOMETRIC"] = 1] = "GEOMETRIC";
})(AdsbAltitudeType = exports.AdsbAltitudeType || (exports.AdsbAltitudeType = {}));
/**
 * ADSB classification for the type of vehicle emitting the transponder signal
 */
var AdsbEmitterType;
(function (AdsbEmitterType) {
    AdsbEmitterType[AdsbEmitterType["NO_INFO"] = 0] = "NO_INFO";
    AdsbEmitterType[AdsbEmitterType["LIGHT"] = 1] = "LIGHT";
    AdsbEmitterType[AdsbEmitterType["SMALL"] = 2] = "SMALL";
    AdsbEmitterType[AdsbEmitterType["LARGE"] = 3] = "LARGE";
    AdsbEmitterType[AdsbEmitterType["HIGH_VORTEX_LARGE"] = 4] = "HIGH_VORTEX_LARGE";
    AdsbEmitterType[AdsbEmitterType["HEAVY"] = 5] = "HEAVY";
    AdsbEmitterType[AdsbEmitterType["HIGHLY_MANUV"] = 6] = "HIGHLY_MANUV";
    AdsbEmitterType[AdsbEmitterType["ROTOCRAFT"] = 7] = "ROTOCRAFT";
    AdsbEmitterType[AdsbEmitterType["UNASSIGNED"] = 8] = "UNASSIGNED";
    AdsbEmitterType[AdsbEmitterType["GLIDER"] = 9] = "GLIDER";
    AdsbEmitterType[AdsbEmitterType["LIGHTER_AIR"] = 10] = "LIGHTER_AIR";
    AdsbEmitterType[AdsbEmitterType["PARACHUTE"] = 11] = "PARACHUTE";
    AdsbEmitterType[AdsbEmitterType["ULTRA_LIGHT"] = 12] = "ULTRA_LIGHT";
    AdsbEmitterType[AdsbEmitterType["UNASSIGNED2"] = 13] = "UNASSIGNED2";
    AdsbEmitterType[AdsbEmitterType["UAV"] = 14] = "UAV";
    AdsbEmitterType[AdsbEmitterType["SPACE"] = 15] = "SPACE";
    AdsbEmitterType[AdsbEmitterType["UNASSGINED3"] = 16] = "UNASSGINED3";
    AdsbEmitterType[AdsbEmitterType["EMERGENCY_SURFACE"] = 17] = "EMERGENCY_SURFACE";
    AdsbEmitterType[AdsbEmitterType["SERVICE_SURFACE"] = 18] = "SERVICE_SURFACE";
    AdsbEmitterType[AdsbEmitterType["POINT_OBSTACLE"] = 19] = "POINT_OBSTACLE";
})(AdsbEmitterType = exports.AdsbEmitterType || (exports.AdsbEmitterType = {}));
/**
 * These flags indicate status such as data validity of each data source. Set = data valid
 */
var AdsbFlags;
(function (AdsbFlags) {
    AdsbFlags[AdsbFlags["VALID_COORDS"] = 1] = "VALID_COORDS";
    AdsbFlags[AdsbFlags["VALID_ALTITUDE"] = 2] = "VALID_ALTITUDE";
    AdsbFlags[AdsbFlags["VALID_HEADING"] = 4] = "VALID_HEADING";
    AdsbFlags[AdsbFlags["VALID_VELOCITY"] = 8] = "VALID_VELOCITY";
    AdsbFlags[AdsbFlags["VALID_CALLSIGN"] = 16] = "VALID_CALLSIGN";
    AdsbFlags[AdsbFlags["VALID_SQUAWK"] = 32] = "VALID_SQUAWK";
    AdsbFlags[AdsbFlags["SIMULATED"] = 64] = "SIMULATED";
    AdsbFlags[AdsbFlags["VERTICAL_VELOCITY_VALID"] = 128] = "VERTICAL_VELOCITY_VALID";
    AdsbFlags[AdsbFlags["BARO_VALID"] = 256] = "BARO_VALID";
    AdsbFlags[AdsbFlags["SOURCE_UAT"] = 32768] = "SOURCE_UAT";
})(AdsbFlags = exports.AdsbFlags || (exports.AdsbFlags = {}));
/**
 * Bitmap of options for the MAV_CMD_DO_REPOSITION
 */
var MavDoRepositionFlags;
(function (MavDoRepositionFlags) {
    /**
     * The aircraft should immediately transition into guided. This should not be set for follow me
     * applications
     */
    MavDoRepositionFlags[MavDoRepositionFlags["CHANGE_MODE"] = 1] = "CHANGE_MODE";
})(MavDoRepositionFlags = exports.MavDoRepositionFlags || (exports.MavDoRepositionFlags = {}));
/**
 * Flags in ESTIMATOR_STATUS message
 */
var EstimatorStatusFlags;
(function (EstimatorStatusFlags) {
    EstimatorStatusFlags[EstimatorStatusFlags["ATTITUDE"] = 1] = "ATTITUDE";
    EstimatorStatusFlags[EstimatorStatusFlags["VELOCITY_HORIZ"] = 2] = "VELOCITY_HORIZ";
    EstimatorStatusFlags[EstimatorStatusFlags["VELOCITY_VERT"] = 4] = "VELOCITY_VERT";
    EstimatorStatusFlags[EstimatorStatusFlags["POS_HORIZ_REL"] = 8] = "POS_HORIZ_REL";
    EstimatorStatusFlags[EstimatorStatusFlags["POS_HORIZ_ABS"] = 16] = "POS_HORIZ_ABS";
    EstimatorStatusFlags[EstimatorStatusFlags["POS_VERT_ABS"] = 32] = "POS_VERT_ABS";
    EstimatorStatusFlags[EstimatorStatusFlags["POS_VERT_AGL"] = 64] = "POS_VERT_AGL";
    /**
     * True if the EKF is in a constant position mode and is not using external measurements (eg GPS or
     * optical flow)
     */
    EstimatorStatusFlags[EstimatorStatusFlags["CONST_POS_MODE"] = 128] = "CONST_POS_MODE";
    EstimatorStatusFlags[EstimatorStatusFlags["PRED_POS_HORIZ_REL"] = 256] = "PRED_POS_HORIZ_REL";
    EstimatorStatusFlags[EstimatorStatusFlags["PRED_POS_HORIZ_ABS"] = 512] = "PRED_POS_HORIZ_ABS";
    EstimatorStatusFlags[EstimatorStatusFlags["GPS_GLITCH"] = 1024] = "GPS_GLITCH";
    EstimatorStatusFlags[EstimatorStatusFlags["ACCEL_ERROR"] = 2048] = "ACCEL_ERROR";
})(EstimatorStatusFlags = exports.EstimatorStatusFlags || (exports.EstimatorStatusFlags = {}));
/**
 * MOTOR_TEST_ORDER
 */
var MotorTestOrder;
(function (MotorTestOrder) {
    MotorTestOrder[MotorTestOrder["DEFAULT"] = 0] = "DEFAULT";
    MotorTestOrder[MotorTestOrder["SEQUENCE"] = 1] = "SEQUENCE";
    MotorTestOrder[MotorTestOrder["BOARD"] = 2] = "BOARD";
})(MotorTestOrder = exports.MotorTestOrder || (exports.MotorTestOrder = {}));
/**
 * MOTOR_TEST_THROTTLE_TYPE
 */
var MotorTestThrottleType;
(function (MotorTestThrottleType) {
    MotorTestThrottleType[MotorTestThrottleType["THROTTLE_PERCENT"] = 0] = "THROTTLE_PERCENT";
    MotorTestThrottleType[MotorTestThrottleType["THROTTLE_PWM"] = 1] = "THROTTLE_PWM";
    MotorTestThrottleType[MotorTestThrottleType["THROTTLE_PILOT"] = 2] = "THROTTLE_PILOT";
    MotorTestThrottleType[MotorTestThrottleType["COMPASS_CAL"] = 3] = "COMPASS_CAL";
})(MotorTestThrottleType = exports.MotorTestThrottleType || (exports.MotorTestThrottleType = {}));
/**
 * GPS_INPUT_IGNORE_FLAGS
 */
var GpsInputIgnoreFlags;
(function (GpsInputIgnoreFlags) {
    GpsInputIgnoreFlags[GpsInputIgnoreFlags["ALT"] = 1] = "ALT";
    GpsInputIgnoreFlags[GpsInputIgnoreFlags["HDOP"] = 2] = "HDOP";
    GpsInputIgnoreFlags[GpsInputIgnoreFlags["VDOP"] = 4] = "VDOP";
    GpsInputIgnoreFlags[GpsInputIgnoreFlags["VEL_HORIZ"] = 8] = "VEL_HORIZ";
    GpsInputIgnoreFlags[GpsInputIgnoreFlags["VEL_VERT"] = 16] = "VEL_VERT";
    GpsInputIgnoreFlags[GpsInputIgnoreFlags["SPEED_ACCURACY"] = 32] = "SPEED_ACCURACY";
    GpsInputIgnoreFlags[GpsInputIgnoreFlags["HORIZONTAL_ACCURACY"] = 64] = "HORIZONTAL_ACCURACY";
    GpsInputIgnoreFlags[GpsInputIgnoreFlags["VERTICAL_ACCURACY"] = 128] = "VERTICAL_ACCURACY";
})(GpsInputIgnoreFlags = exports.GpsInputIgnoreFlags || (exports.GpsInputIgnoreFlags = {}));
/**
 * Possible actions an aircraft can take to avoid a collision.
 */
var MavCollisionAction;
(function (MavCollisionAction) {
    MavCollisionAction[MavCollisionAction["NONE"] = 0] = "NONE";
    MavCollisionAction[MavCollisionAction["REPORT"] = 1] = "REPORT";
    MavCollisionAction[MavCollisionAction["ASCEND_OR_DESCEND"] = 2] = "ASCEND_OR_DESCEND";
    MavCollisionAction[MavCollisionAction["MOVE_HORIZONTALLY"] = 3] = "MOVE_HORIZONTALLY";
    MavCollisionAction[MavCollisionAction["MOVE_PERPENDICULAR"] = 4] = "MOVE_PERPENDICULAR";
    MavCollisionAction[MavCollisionAction["RTL"] = 5] = "RTL";
    MavCollisionAction[MavCollisionAction["HOVER"] = 6] = "HOVER";
})(MavCollisionAction = exports.MavCollisionAction || (exports.MavCollisionAction = {}));
/**
 * Aircraft-rated danger from this threat.
 */
var MavCollisionThreatLevel;
(function (MavCollisionThreatLevel) {
    MavCollisionThreatLevel[MavCollisionThreatLevel["NONE"] = 0] = "NONE";
    MavCollisionThreatLevel[MavCollisionThreatLevel["LOW"] = 1] = "LOW";
    MavCollisionThreatLevel[MavCollisionThreatLevel["HIGH"] = 2] = "HIGH";
})(MavCollisionThreatLevel = exports.MavCollisionThreatLevel || (exports.MavCollisionThreatLevel = {}));
/**
 * Source of information about this collision.
 */
var MavCollisionSrc;
(function (MavCollisionSrc) {
    MavCollisionSrc[MavCollisionSrc["ADSB"] = 0] = "ADSB";
    MavCollisionSrc[MavCollisionSrc["MAVLINK_GPS_GLOBAL_INT"] = 1] = "MAVLINK_GPS_GLOBAL_INT";
})(MavCollisionSrc = exports.MavCollisionSrc || (exports.MavCollisionSrc = {}));
/**
 * Type of GPS fix
 */
var GpsFixType;
(function (GpsFixType) {
    GpsFixType[GpsFixType["NO_GPS"] = 0] = "NO_GPS";
    GpsFixType[GpsFixType["NO_FIX"] = 1] = "NO_FIX";
    GpsFixType[GpsFixType["GPS_FIX_TYPE_2D_FIX"] = 2] = "GPS_FIX_TYPE_2D_FIX";
    GpsFixType[GpsFixType["GPS_FIX_TYPE_3D_FIX"] = 3] = "GPS_FIX_TYPE_3D_FIX";
    GpsFixType[GpsFixType["DGPS"] = 4] = "DGPS";
    GpsFixType[GpsFixType["RTK_FLOAT"] = 5] = "RTK_FLOAT";
    GpsFixType[GpsFixType["RTK_FIXED"] = 6] = "RTK_FIXED";
    GpsFixType[GpsFixType["STATIC"] = 7] = "STATIC";
    GpsFixType[GpsFixType["PPP"] = 8] = "PPP";
})(GpsFixType = exports.GpsFixType || (exports.GpsFixType = {}));
/**
 * RTK GPS baseline coordinate system, used for RTK corrections
 */
var RtkBaselineCoordinateSystem;
(function (RtkBaselineCoordinateSystem) {
    RtkBaselineCoordinateSystem[RtkBaselineCoordinateSystem["ECEF"] = 0] = "ECEF";
    RtkBaselineCoordinateSystem[RtkBaselineCoordinateSystem["NED"] = 1] = "NED";
})(RtkBaselineCoordinateSystem = exports.RtkBaselineCoordinateSystem || (exports.RtkBaselineCoordinateSystem = {}));
/**
 * Type of landing target
 */
var LandingTargetType;
(function (LandingTargetType) {
    LandingTargetType[LandingTargetType["LIGHT_BEACON"] = 0] = "LIGHT_BEACON";
    LandingTargetType[LandingTargetType["RADIO_BEACON"] = 1] = "RADIO_BEACON";
    LandingTargetType[LandingTargetType["VISION_FIDUCIAL"] = 2] = "VISION_FIDUCIAL";
    LandingTargetType[LandingTargetType["VISION_OTHER"] = 3] = "VISION_OTHER";
})(LandingTargetType = exports.LandingTargetType || (exports.LandingTargetType = {}));
/**
 * Direction of VTOL transition
 */
var VtolTransitionHeading;
(function (VtolTransitionHeading) {
    VtolTransitionHeading[VtolTransitionHeading["VEHICLE_DEFAULT"] = 0] = "VEHICLE_DEFAULT";
    VtolTransitionHeading[VtolTransitionHeading["NEXT_WAYPOINT"] = 1] = "NEXT_WAYPOINT";
    VtolTransitionHeading[VtolTransitionHeading["TAKEOFF"] = 2] = "TAKEOFF";
    VtolTransitionHeading[VtolTransitionHeading["SPECIFIED"] = 3] = "SPECIFIED";
    /**
     * Use the current heading when reaching takeoff altitude (potentially facing the wind when
     * weather-vaning is active).
     */
    VtolTransitionHeading[VtolTransitionHeading["ANY"] = 4] = "ANY";
})(VtolTransitionHeading = exports.VtolTransitionHeading || (exports.VtolTransitionHeading = {}));
/**
 * Camera capability flags (Bitmap)
 */
var CameraCapFlags;
(function (CameraCapFlags) {
    CameraCapFlags[CameraCapFlags["CAPTURE_VIDEO"] = 1] = "CAPTURE_VIDEO";
    CameraCapFlags[CameraCapFlags["CAPTURE_IMAGE"] = 2] = "CAPTURE_IMAGE";
    CameraCapFlags[CameraCapFlags["HAS_MODES"] = 4] = "HAS_MODES";
    CameraCapFlags[CameraCapFlags["CAN_CAPTURE_IMAGE_IN_VIDEO_MODE"] = 8] = "CAN_CAPTURE_IMAGE_IN_VIDEO_MODE";
    CameraCapFlags[CameraCapFlags["CAN_CAPTURE_VIDEO_IN_IMAGE_MODE"] = 16] = "CAN_CAPTURE_VIDEO_IN_IMAGE_MODE";
    CameraCapFlags[CameraCapFlags["HAS_IMAGE_SURVEY_MODE"] = 32] = "HAS_IMAGE_SURVEY_MODE";
    CameraCapFlags[CameraCapFlags["HAS_BASIC_ZOOM"] = 64] = "HAS_BASIC_ZOOM";
    CameraCapFlags[CameraCapFlags["HAS_BASIC_FOCUS"] = 128] = "HAS_BASIC_FOCUS";
    /**
     * Camera has video streaming capabilities (request VIDEO_STREAM_INFORMATION with
     * MAV_CMD_REQUEST_MESSAGE for video streaming info)
     */
    CameraCapFlags[CameraCapFlags["HAS_VIDEO_STREAM"] = 256] = "HAS_VIDEO_STREAM";
    CameraCapFlags[CameraCapFlags["HAS_TRACKING_POINT"] = 512] = "HAS_TRACKING_POINT";
    CameraCapFlags[CameraCapFlags["HAS_TRACKING_RECTANGLE"] = 1024] = "HAS_TRACKING_RECTANGLE";
    CameraCapFlags[CameraCapFlags["HAS_TRACKING_GEO_STATUS"] = 2048] = "HAS_TRACKING_GEO_STATUS";
})(CameraCapFlags = exports.CameraCapFlags || (exports.CameraCapFlags = {}));
/**
 * Stream status flags (Bitmap)
 */
var VideoStreamStatusFlags;
(function (VideoStreamStatusFlags) {
    VideoStreamStatusFlags[VideoStreamStatusFlags["RUNNING"] = 1] = "RUNNING";
    VideoStreamStatusFlags[VideoStreamStatusFlags["THERMAL"] = 2] = "THERMAL";
})(VideoStreamStatusFlags = exports.VideoStreamStatusFlags || (exports.VideoStreamStatusFlags = {}));
/**
 * Video stream types
 */
var VideoStreamType;
(function (VideoStreamType) {
    VideoStreamType[VideoStreamType["RTSP"] = 0] = "RTSP";
    VideoStreamType[VideoStreamType["RTPUDP"] = 1] = "RTPUDP";
    VideoStreamType[VideoStreamType["TCP_MPEG"] = 2] = "TCP_MPEG";
    VideoStreamType[VideoStreamType["MPEG_TS_H264"] = 3] = "MPEG_TS_H264";
})(VideoStreamType = exports.VideoStreamType || (exports.VideoStreamType = {}));
/**
 * Camera Modes.
 */
var CameraMode;
(function (CameraMode) {
    CameraMode[CameraMode["IMAGE"] = 0] = "IMAGE";
    CameraMode[CameraMode["VIDEO"] = 1] = "VIDEO";
    /**
     * Camera is in image survey capture mode. It allows for camera controller to do specific settings for
     * surveys.
     */
    CameraMode[CameraMode["IMAGE_SURVEY"] = 2] = "IMAGE_SURVEY";
})(CameraMode = exports.CameraMode || (exports.CameraMode = {}));
/**
 * MAV_ARM_AUTH_DENIED_REASON
 */
var MavArmAuthDeniedReason;
(function (MavArmAuthDeniedReason) {
    MavArmAuthDeniedReason[MavArmAuthDeniedReason["GENERIC"] = 0] = "GENERIC";
    MavArmAuthDeniedReason[MavArmAuthDeniedReason["NONE"] = 1] = "NONE";
    MavArmAuthDeniedReason[MavArmAuthDeniedReason["INVALID_WAYPOINT"] = 2] = "INVALID_WAYPOINT";
    MavArmAuthDeniedReason[MavArmAuthDeniedReason["TIMEOUT"] = 3] = "TIMEOUT";
    /**
     * Airspace of the mission in use by another vehicle, second result parameter can have the waypoint id
     * that caused it to be denied.
     */
    MavArmAuthDeniedReason[MavArmAuthDeniedReason["AIRSPACE_IN_USE"] = 4] = "AIRSPACE_IN_USE";
    MavArmAuthDeniedReason[MavArmAuthDeniedReason["BAD_WEATHER"] = 5] = "BAD_WEATHER";
})(MavArmAuthDeniedReason = exports.MavArmAuthDeniedReason || (exports.MavArmAuthDeniedReason = {}));
/**
 * RC type
 */
var RcType;
(function (RcType) {
    RcType[RcType["SPEKTRUM_DSM2"] = 0] = "SPEKTRUM_DSM2";
    RcType[RcType["SPEKTRUM_DSMX"] = 1] = "SPEKTRUM_DSMX";
})(RcType = exports.RcType || (exports.RcType = {}));
/**
 * Bitmap to indicate which dimensions should be ignored by the vehicle: a value of 0b0000000000000000
 * or 0b0000001000000000 indicates that none of the setpoint dimensions should be ignored. If bit 9 is
 * set the floats afx afy afz should be interpreted as force instead of acceleration.
 */
var PositionTargetTypemask;
(function (PositionTargetTypemask) {
    PositionTargetTypemask[PositionTargetTypemask["X_IGNORE"] = 1] = "X_IGNORE";
    PositionTargetTypemask[PositionTargetTypemask["Y_IGNORE"] = 2] = "Y_IGNORE";
    PositionTargetTypemask[PositionTargetTypemask["Z_IGNORE"] = 4] = "Z_IGNORE";
    PositionTargetTypemask[PositionTargetTypemask["VX_IGNORE"] = 8] = "VX_IGNORE";
    PositionTargetTypemask[PositionTargetTypemask["VY_IGNORE"] = 16] = "VY_IGNORE";
    PositionTargetTypemask[PositionTargetTypemask["VZ_IGNORE"] = 32] = "VZ_IGNORE";
    PositionTargetTypemask[PositionTargetTypemask["AX_IGNORE"] = 64] = "AX_IGNORE";
    PositionTargetTypemask[PositionTargetTypemask["AY_IGNORE"] = 128] = "AY_IGNORE";
    PositionTargetTypemask[PositionTargetTypemask["AZ_IGNORE"] = 256] = "AZ_IGNORE";
    PositionTargetTypemask[PositionTargetTypemask["FORCE_SET"] = 512] = "FORCE_SET";
    PositionTargetTypemask[PositionTargetTypemask["YAW_IGNORE"] = 1024] = "YAW_IGNORE";
    PositionTargetTypemask[PositionTargetTypemask["YAW_RATE_IGNORE"] = 2048] = "YAW_RATE_IGNORE";
})(PositionTargetTypemask = exports.PositionTargetTypemask || (exports.PositionTargetTypemask = {}));
/**
 * Bitmap to indicate which dimensions should be ignored by the vehicle: a value of 0b00000000
 * indicates that none of the setpoint dimensions should be ignored.
 */
var AttitudeTargetTypemask;
(function (AttitudeTargetTypemask) {
    AttitudeTargetTypemask[AttitudeTargetTypemask["BODY_ROLL_RATE_IGNORE"] = 1] = "BODY_ROLL_RATE_IGNORE";
    AttitudeTargetTypemask[AttitudeTargetTypemask["BODY_PITCH_RATE_IGNORE"] = 2] = "BODY_PITCH_RATE_IGNORE";
    AttitudeTargetTypemask[AttitudeTargetTypemask["BODY_YAW_RATE_IGNORE"] = 4] = "BODY_YAW_RATE_IGNORE";
    AttitudeTargetTypemask[AttitudeTargetTypemask["THROTTLE_IGNORE"] = 64] = "THROTTLE_IGNORE";
    AttitudeTargetTypemask[AttitudeTargetTypemask["ATTITUDE_IGNORE"] = 128] = "ATTITUDE_IGNORE";
})(AttitudeTargetTypemask = exports.AttitudeTargetTypemask || (exports.AttitudeTargetTypemask = {}));
/**
 * Airborne status of UAS.
 */
var UtmFlightState;
(function (UtmFlightState) {
    UtmFlightState[UtmFlightState["UNKNOWN"] = 1] = "UNKNOWN";
    UtmFlightState[UtmFlightState["GROUND"] = 2] = "GROUND";
    UtmFlightState[UtmFlightState["AIRBORNE"] = 3] = "AIRBORNE";
    UtmFlightState[UtmFlightState["EMERGENCY"] = 16] = "EMERGENCY";
    UtmFlightState[UtmFlightState["NOCTRL"] = 32] = "NOCTRL";
})(UtmFlightState = exports.UtmFlightState || (exports.UtmFlightState = {}));
/**
 * Flags for the global position report.
 */
var UtmDataAvailFlags;
(function (UtmDataAvailFlags) {
    UtmDataAvailFlags[UtmDataAvailFlags["TIME_VALID"] = 1] = "TIME_VALID";
    UtmDataAvailFlags[UtmDataAvailFlags["UAS_ID_AVAILABLE"] = 2] = "UAS_ID_AVAILABLE";
    UtmDataAvailFlags[UtmDataAvailFlags["POSITION_AVAILABLE"] = 4] = "POSITION_AVAILABLE";
    UtmDataAvailFlags[UtmDataAvailFlags["ALTITUDE_AVAILABLE"] = 8] = "ALTITUDE_AVAILABLE";
    UtmDataAvailFlags[UtmDataAvailFlags["RELATIVE_ALTITUDE_AVAILABLE"] = 16] = "RELATIVE_ALTITUDE_AVAILABLE";
    UtmDataAvailFlags[UtmDataAvailFlags["HORIZONTAL_VELO_AVAILABLE"] = 32] = "HORIZONTAL_VELO_AVAILABLE";
    UtmDataAvailFlags[UtmDataAvailFlags["VERTICAL_VELO_AVAILABLE"] = 64] = "VERTICAL_VELO_AVAILABLE";
    UtmDataAvailFlags[UtmDataAvailFlags["NEXT_WAYPOINT_AVAILABLE"] = 128] = "NEXT_WAYPOINT_AVAILABLE";
})(UtmDataAvailFlags = exports.UtmDataAvailFlags || (exports.UtmDataAvailFlags = {}));
/**
 * Precision land modes (used in MAV_CMD_NAV_LAND).
 */
var PrecisionLandMode;
(function (PrecisionLandMode) {
    PrecisionLandMode[PrecisionLandMode["DISABLED"] = 0] = "DISABLED";
    PrecisionLandMode[PrecisionLandMode["OPPORTUNISTIC"] = 1] = "OPPORTUNISTIC";
    /**
     * Use precision landing, searching for beacon if not found when land command accepted (land normally
     * if beacon cannot be found).
     */
    PrecisionLandMode[PrecisionLandMode["REQUIRED"] = 2] = "REQUIRED";
})(PrecisionLandMode = exports.PrecisionLandMode || (exports.PrecisionLandMode = {}));
/**
 * Parachute actions. Trigger release and enable/disable auto-release.
 */
var ParachuteAction;
(function (ParachuteAction) {
    ParachuteAction[ParachuteAction["DISABLE"] = 0] = "DISABLE";
    ParachuteAction[ParachuteAction["ENABLE"] = 1] = "ENABLE";
    ParachuteAction[ParachuteAction["RELEASE"] = 2] = "RELEASE";
})(ParachuteAction = exports.ParachuteAction || (exports.ParachuteAction = {}));
/**
 * Type of AIS vessel, enum duplicated from AIS standard, https://gpsd.gitlab.io/gpsd/AIVDM.html
 */
var AisType;
(function (AisType) {
    AisType[AisType["UNKNOWN"] = 0] = "UNKNOWN";
    AisType[AisType["RESERVED_1"] = 1] = "RESERVED_1";
    AisType[AisType["RESERVED_2"] = 2] = "RESERVED_2";
    AisType[AisType["RESERVED_3"] = 3] = "RESERVED_3";
    AisType[AisType["RESERVED_4"] = 4] = "RESERVED_4";
    AisType[AisType["RESERVED_5"] = 5] = "RESERVED_5";
    AisType[AisType["RESERVED_6"] = 6] = "RESERVED_6";
    AisType[AisType["RESERVED_7"] = 7] = "RESERVED_7";
    AisType[AisType["RESERVED_8"] = 8] = "RESERVED_8";
    AisType[AisType["RESERVED_9"] = 9] = "RESERVED_9";
    AisType[AisType["RESERVED_10"] = 10] = "RESERVED_10";
    AisType[AisType["RESERVED_11"] = 11] = "RESERVED_11";
    AisType[AisType["RESERVED_12"] = 12] = "RESERVED_12";
    AisType[AisType["RESERVED_13"] = 13] = "RESERVED_13";
    AisType[AisType["RESERVED_14"] = 14] = "RESERVED_14";
    AisType[AisType["RESERVED_15"] = 15] = "RESERVED_15";
    AisType[AisType["RESERVED_16"] = 16] = "RESERVED_16";
    AisType[AisType["RESERVED_17"] = 17] = "RESERVED_17";
    AisType[AisType["RESERVED_18"] = 18] = "RESERVED_18";
    AisType[AisType["RESERVED_19"] = 19] = "RESERVED_19";
    AisType[AisType["WIG"] = 20] = "WIG";
    AisType[AisType["WIG_HAZARDOUS_A"] = 21] = "WIG_HAZARDOUS_A";
    AisType[AisType["WIG_HAZARDOUS_B"] = 22] = "WIG_HAZARDOUS_B";
    AisType[AisType["WIG_HAZARDOUS_C"] = 23] = "WIG_HAZARDOUS_C";
    AisType[AisType["WIG_HAZARDOUS_D"] = 24] = "WIG_HAZARDOUS_D";
    AisType[AisType["WIG_RESERVED_1"] = 25] = "WIG_RESERVED_1";
    AisType[AisType["WIG_RESERVED_2"] = 26] = "WIG_RESERVED_2";
    AisType[AisType["WIG_RESERVED_3"] = 27] = "WIG_RESERVED_3";
    AisType[AisType["WIG_RESERVED_4"] = 28] = "WIG_RESERVED_4";
    AisType[AisType["WIG_RESERVED_5"] = 29] = "WIG_RESERVED_5";
    AisType[AisType["FISHING"] = 30] = "FISHING";
    AisType[AisType["TOWING"] = 31] = "TOWING";
    AisType[AisType["TOWING_LARGE"] = 32] = "TOWING_LARGE";
    AisType[AisType["DREDGING"] = 33] = "DREDGING";
    AisType[AisType["DIVING"] = 34] = "DIVING";
    AisType[AisType["MILITARY"] = 35] = "MILITARY";
    AisType[AisType["SAILING"] = 36] = "SAILING";
    AisType[AisType["PLEASURE"] = 37] = "PLEASURE";
    AisType[AisType["RESERVED_20"] = 38] = "RESERVED_20";
    AisType[AisType["RESERVED_21"] = 39] = "RESERVED_21";
    AisType[AisType["HSC"] = 40] = "HSC";
    AisType[AisType["HSC_HAZARDOUS_A"] = 41] = "HSC_HAZARDOUS_A";
    AisType[AisType["HSC_HAZARDOUS_B"] = 42] = "HSC_HAZARDOUS_B";
    AisType[AisType["HSC_HAZARDOUS_C"] = 43] = "HSC_HAZARDOUS_C";
    AisType[AisType["HSC_HAZARDOUS_D"] = 44] = "HSC_HAZARDOUS_D";
    AisType[AisType["HSC_RESERVED_1"] = 45] = "HSC_RESERVED_1";
    AisType[AisType["HSC_RESERVED_2"] = 46] = "HSC_RESERVED_2";
    AisType[AisType["HSC_RESERVED_3"] = 47] = "HSC_RESERVED_3";
    AisType[AisType["HSC_RESERVED_4"] = 48] = "HSC_RESERVED_4";
    AisType[AisType["HSC_UNKNOWN"] = 49] = "HSC_UNKNOWN";
    AisType[AisType["PILOT"] = 50] = "PILOT";
    AisType[AisType["SAR"] = 51] = "SAR";
    AisType[AisType["TUG"] = 52] = "TUG";
    AisType[AisType["PORT_TENDER"] = 53] = "PORT_TENDER";
    AisType[AisType["ANTI_POLLUTION"] = 54] = "ANTI_POLLUTION";
    AisType[AisType["LAW_ENFORCEMENT"] = 55] = "LAW_ENFORCEMENT";
    AisType[AisType["SPARE_LOCAL_1"] = 56] = "SPARE_LOCAL_1";
    AisType[AisType["SPARE_LOCAL_2"] = 57] = "SPARE_LOCAL_2";
    AisType[AisType["MEDICAL_TRANSPORT"] = 58] = "MEDICAL_TRANSPORT";
    AisType[AisType["NONECOMBATANT"] = 59] = "NONECOMBATANT";
    AisType[AisType["PASSENGER"] = 60] = "PASSENGER";
    AisType[AisType["PASSENGER_HAZARDOUS_A"] = 61] = "PASSENGER_HAZARDOUS_A";
    AisType[AisType["PASSENGER_HAZARDOUS_B"] = 62] = "PASSENGER_HAZARDOUS_B";
    AisType[AisType["PASSENGER_HAZARDOUS_C"] = 63] = "PASSENGER_HAZARDOUS_C";
    AisType[AisType["PASSENGER_HAZARDOUS_D"] = 64] = "PASSENGER_HAZARDOUS_D";
    AisType[AisType["PASSENGER_RESERVED_1"] = 65] = "PASSENGER_RESERVED_1";
    AisType[AisType["PASSENGER_RESERVED_2"] = 66] = "PASSENGER_RESERVED_2";
    AisType[AisType["PASSENGER_RESERVED_3"] = 67] = "PASSENGER_RESERVED_3";
    AisType[AisType["PASSENGER_RESERVED_4"] = 68] = "PASSENGER_RESERVED_4";
    AisType[AisType["PASSENGER_UNKNOWN"] = 69] = "PASSENGER_UNKNOWN";
    AisType[AisType["CARGO"] = 70] = "CARGO";
    AisType[AisType["CARGO_HAZARDOUS_A"] = 71] = "CARGO_HAZARDOUS_A";
    AisType[AisType["CARGO_HAZARDOUS_B"] = 72] = "CARGO_HAZARDOUS_B";
    AisType[AisType["CARGO_HAZARDOUS_C"] = 73] = "CARGO_HAZARDOUS_C";
    AisType[AisType["CARGO_HAZARDOUS_D"] = 74] = "CARGO_HAZARDOUS_D";
    AisType[AisType["CARGO_RESERVED_1"] = 75] = "CARGO_RESERVED_1";
    AisType[AisType["CARGO_RESERVED_2"] = 76] = "CARGO_RESERVED_2";
    AisType[AisType["CARGO_RESERVED_3"] = 77] = "CARGO_RESERVED_3";
    AisType[AisType["CARGO_RESERVED_4"] = 78] = "CARGO_RESERVED_4";
    AisType[AisType["CARGO_UNKNOWN"] = 79] = "CARGO_UNKNOWN";
    AisType[AisType["TANKER"] = 80] = "TANKER";
    AisType[AisType["TANKER_HAZARDOUS_A"] = 81] = "TANKER_HAZARDOUS_A";
    AisType[AisType["TANKER_HAZARDOUS_B"] = 82] = "TANKER_HAZARDOUS_B";
    AisType[AisType["TANKER_HAZARDOUS_C"] = 83] = "TANKER_HAZARDOUS_C";
    AisType[AisType["TANKER_HAZARDOUS_D"] = 84] = "TANKER_HAZARDOUS_D";
    AisType[AisType["TANKER_RESERVED_1"] = 85] = "TANKER_RESERVED_1";
    AisType[AisType["TANKER_RESERVED_2"] = 86] = "TANKER_RESERVED_2";
    AisType[AisType["TANKER_RESERVED_3"] = 87] = "TANKER_RESERVED_3";
    AisType[AisType["TANKER_RESERVED_4"] = 88] = "TANKER_RESERVED_4";
    AisType[AisType["TANKER_UNKNOWN"] = 89] = "TANKER_UNKNOWN";
    AisType[AisType["OTHER"] = 90] = "OTHER";
    AisType[AisType["OTHER_HAZARDOUS_A"] = 91] = "OTHER_HAZARDOUS_A";
    AisType[AisType["OTHER_HAZARDOUS_B"] = 92] = "OTHER_HAZARDOUS_B";
    AisType[AisType["OTHER_HAZARDOUS_C"] = 93] = "OTHER_HAZARDOUS_C";
    AisType[AisType["OTHER_HAZARDOUS_D"] = 94] = "OTHER_HAZARDOUS_D";
    AisType[AisType["OTHER_RESERVED_1"] = 95] = "OTHER_RESERVED_1";
    AisType[AisType["OTHER_RESERVED_2"] = 96] = "OTHER_RESERVED_2";
    AisType[AisType["OTHER_RESERVED_3"] = 97] = "OTHER_RESERVED_3";
    AisType[AisType["OTHER_RESERVED_4"] = 98] = "OTHER_RESERVED_4";
    AisType[AisType["OTHER_UNKNOWN"] = 99] = "OTHER_UNKNOWN";
})(AisType = exports.AisType || (exports.AisType = {}));
/**
 * Navigational status of AIS vessel, enum duplicated from AIS standard,
 * https://gpsd.gitlab.io/gpsd/AIVDM.html
 */
var AisNavStatus;
(function (AisNavStatus) {
    AisNavStatus[AisNavStatus["UNDER_WAY"] = 0] = "UNDER_WAY";
    AisNavStatus[AisNavStatus["ANCHORED"] = 1] = "ANCHORED";
    AisNavStatus[AisNavStatus["UN_COMMANDED"] = 2] = "UN_COMMANDED";
    AisNavStatus[AisNavStatus["RESTRICTED_MANOEUVERABILITY"] = 3] = "RESTRICTED_MANOEUVERABILITY";
    AisNavStatus[AisNavStatus["DRAUGHT_CONSTRAINED"] = 4] = "DRAUGHT_CONSTRAINED";
    AisNavStatus[AisNavStatus["MOORED"] = 5] = "MOORED";
    AisNavStatus[AisNavStatus["AGROUND"] = 6] = "AGROUND";
    AisNavStatus[AisNavStatus["FISHING"] = 7] = "FISHING";
    AisNavStatus[AisNavStatus["SAILING"] = 8] = "SAILING";
    AisNavStatus[AisNavStatus["RESERVED_HSC"] = 9] = "RESERVED_HSC";
    AisNavStatus[AisNavStatus["RESERVED_WIG"] = 10] = "RESERVED_WIG";
    AisNavStatus[AisNavStatus["RESERVED_1"] = 11] = "RESERVED_1";
    AisNavStatus[AisNavStatus["RESERVED_2"] = 12] = "RESERVED_2";
    AisNavStatus[AisNavStatus["RESERVED_3"] = 13] = "RESERVED_3";
    AisNavStatus[AisNavStatus["AIS_SART"] = 14] = "AIS_SART";
    AisNavStatus[AisNavStatus["UNKNOWN"] = 15] = "UNKNOWN";
})(AisNavStatus = exports.AisNavStatus || (exports.AisNavStatus = {}));
/**
 * These flags are used in the AIS_VESSEL.fields bitmask to indicate validity of data in the other
 * message fields. When set, the data is valid.
 */
var AisFlags;
(function (AisFlags) {
    AisFlags[AisFlags["POSITION_ACCURACY"] = 1] = "POSITION_ACCURACY";
    AisFlags[AisFlags["VALID_COG"] = 2] = "VALID_COG";
    AisFlags[AisFlags["VALID_VELOCITY"] = 4] = "VALID_VELOCITY";
    AisFlags[AisFlags["HIGH_VELOCITY"] = 8] = "HIGH_VELOCITY";
    AisFlags[AisFlags["VALID_TURN_RATE"] = 16] = "VALID_TURN_RATE";
    /**
     * Only the sign of the returned turn rate value is valid, either greater than 5deg/30s or less than
     * -5deg/30s
     */
    AisFlags[AisFlags["TURN_RATE_SIGN_ONLY"] = 32] = "TURN_RATE_SIGN_ONLY";
    AisFlags[AisFlags["VALID_DIMENSIONS"] = 64] = "VALID_DIMENSIONS";
    AisFlags[AisFlags["LARGE_BOW_DIMENSION"] = 128] = "LARGE_BOW_DIMENSION";
    AisFlags[AisFlags["LARGE_STERN_DIMENSION"] = 256] = "LARGE_STERN_DIMENSION";
    AisFlags[AisFlags["LARGE_PORT_DIMENSION"] = 512] = "LARGE_PORT_DIMENSION";
    AisFlags[AisFlags["LARGE_STARBOARD_DIMENSION"] = 1024] = "LARGE_STARBOARD_DIMENSION";
    AisFlags[AisFlags["VALID_CALLSIGN"] = 2048] = "VALID_CALLSIGN";
    AisFlags[AisFlags["VALID_NAME"] = 4096] = "VALID_NAME";
})(AisFlags = exports.AisFlags || (exports.AisFlags = {}));
/**
 * Status of what an individual swarm vehicle is doing.
 */
var SwarmVehicleState;
(function (SwarmVehicleState) {
    SwarmVehicleState[SwarmVehicleState["STATE_UNKNOWN"] = 0] = "STATE_UNKNOWN";
    SwarmVehicleState[SwarmVehicleState["STATE_INGRESSING_TO_MESH"] = 1] = "STATE_INGRESSING_TO_MESH";
    SwarmVehicleState[SwarmVehicleState["STATE_LOST_COMMS"] = 2] = "STATE_LOST_COMMS";
    SwarmVehicleState[SwarmVehicleState["STATE_ON_STATION"] = 3] = "STATE_ON_STATION";
    /**
     * On station providing service but requesting Return to Base soon, will need to leave the on station
     * point within 30min. This allows time for an additional vehicle to join the swarm to take it's place
     * without a gap in coverage. Next expected state is ON_STATION_BUT_REQUESTION_RTB_NOW.
     */
    SwarmVehicleState[SwarmVehicleState["STATE_ON_STATION_BUT_REQUESTION_RTB_SOON"] = 4] = "STATE_ON_STATION_BUT_REQUESTION_RTB_SOON";
    /**
     * On station providing service but will be switching to Return to Base in less than 2 minutes. Next
     * expected state is EGRESSING_MESH_RTB.
     */
    SwarmVehicleState[SwarmVehicleState["STATE_ON_STATION_BUT_REQUESTION_RTB_NOW"] = 5] = "STATE_ON_STATION_BUT_REQUESTION_RTB_NOW";
    /**
     * Was recently on station but mesh topography has changed and are currently in transit to new on
     * station point.
     */
    SwarmVehicleState[SwarmVehicleState["STATE_WAS_ON_STATION_BUT_RELOCATING"] = 6] = "STATE_WAS_ON_STATION_BUT_RELOCATING";
    SwarmVehicleState[SwarmVehicleState["STATE_EGRESSING_MESH_RTB"] = 7] = "STATE_EGRESSING_MESH_RTB";
    SwarmVehicleState[SwarmVehicleState["STATE_RTB"] = 8] = "STATE_RTB";
    SwarmVehicleState[SwarmVehicleState["STATE_READY_TO_JOIN_MESH"] = 9] = "STATE_READY_TO_JOIN_MESH";
    /**
     * Not ready, not providing service. For air vehicles this means we're powered up on the ground and
     * likely performing ground checks. Next expected state is likely READY_TO_JOIN_MESH.
     */
    SwarmVehicleState[SwarmVehicleState["STATE_NOT_READY"] = 10] = "STATE_NOT_READY";
    SwarmVehicleState[SwarmVehicleState["GCS"] = 11] = "GCS";
})(SwarmVehicleState = exports.SwarmVehicleState || (exports.SwarmVehicleState = {}));
/**
 * Status of the ROI from the swarm vehicle's perspective.
 */
var SwarmRoiStatus;
(function (SwarmRoiStatus) {
    SwarmRoiStatus[SwarmRoiStatus["UNKNOWN"] = 0] = "UNKNOWN";
    SwarmRoiStatus[SwarmRoiStatus["INVALID"] = 1] = "INVALID";
    SwarmRoiStatus[SwarmRoiStatus["NEEDS_UPDATE"] = 2] = "NEEDS_UPDATE";
    SwarmRoiStatus[SwarmRoiStatus["OK"] = 3] = "OK";
})(SwarmRoiStatus = exports.SwarmRoiStatus || (exports.SwarmRoiStatus = {}));
/**
 * Status of mesh network coverage. Ideally the whole swarm should be generating the same status.
 */
var SwarmCoverageStatus;
(function (SwarmCoverageStatus) {
    SwarmCoverageStatus[SwarmCoverageStatus["UNKNOWN"] = 0] = "UNKNOWN";
    SwarmCoverageStatus[SwarmCoverageStatus["ROI_IS_NOT_READY"] = 1] = "ROI_IS_NOT_READY";
    SwarmCoverageStatus[SwarmCoverageStatus["NOT_ENOUGH_VEHICLES"] = 2] = "NOT_ENOUGH_VEHICLES";
    /**
     * Swarm mesh currently has the minimum resources to cover the ROI. However, network is expected to
     * have breif gaps in service coverage.
     */
    SwarmCoverageStatus[SwarmCoverageStatus["MINIMUM"] = 3] = "MINIMUM";
    /**
     * Swarm mesh currently has enough vehicle resources to cover the ROI sufficiently to satisfy Quality
     * of Service requirement.
     */
    SwarmCoverageStatus[SwarmCoverageStatus["QOS_GOOD"] = 4] = "QOS_GOOD";
    /**
     * Swarm mesh currently has enough vehicle resources to cover the ROI sufficiently to satisfy MORE than
     * the Quality of Service requirement to better handle unexpected loss of mesh node(s).
     */
    SwarmCoverageStatus[SwarmCoverageStatus["QOS_VERY_GOOD"] = 5] = "QOS_VERY_GOOD";
})(SwarmCoverageStatus = exports.SwarmCoverageStatus || (exports.SwarmCoverageStatus = {}));
/**
 * Winch status flags used in WINCH_STATUS
 */
var MavWinchStatusFlag;
(function (MavWinchStatusFlag) {
    MavWinchStatusFlag[MavWinchStatusFlag["HEALTHY"] = 1] = "HEALTHY";
    MavWinchStatusFlag[MavWinchStatusFlag["FULLY_RETRACTED"] = 2] = "FULLY_RETRACTED";
    MavWinchStatusFlag[MavWinchStatusFlag["MOVING"] = 4] = "MOVING";
    MavWinchStatusFlag[MavWinchStatusFlag["CLUTCH_ENGAGED"] = 8] = "CLUTCH_ENGAGED";
})(MavWinchStatusFlag = exports.MavWinchStatusFlag || (exports.MavWinchStatusFlag = {}));
/**
 * MAG_CAL_STATUS
 */
var MagCalStatus;
(function (MagCalStatus) {
    MagCalStatus[MagCalStatus["NOT_STARTED"] = 0] = "NOT_STARTED";
    MagCalStatus[MagCalStatus["WAITING_TO_START"] = 1] = "WAITING_TO_START";
    MagCalStatus[MagCalStatus["RUNNING_STEP_ONE"] = 2] = "RUNNING_STEP_ONE";
    MagCalStatus[MagCalStatus["RUNNING_STEP_TWO"] = 3] = "RUNNING_STEP_TWO";
    MagCalStatus[MagCalStatus["SUCCESS"] = 4] = "SUCCESS";
    MagCalStatus[MagCalStatus["FAILED"] = 5] = "FAILED";
    MagCalStatus[MagCalStatus["BAD_ORIENTATION"] = 6] = "BAD_ORIENTATION";
    MagCalStatus[MagCalStatus["BAD_RADIUS"] = 7] = "BAD_RADIUS";
})(MagCalStatus = exports.MagCalStatus || (exports.MagCalStatus = {}));
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
class SysStatus extends mavlink_1.MavLinkData {
}
exports.SysStatus = SysStatus;
SysStatus.MSG_ID = 1;
SysStatus.MSG_NAME = 'SYS_STATUS';
SysStatus.PAYLOAD_LENGTH = 31;
SysStatus.MAGIC_NUMBER = 124;
SysStatus.FIELDS = [
    new mavlink_1.MavLinkPacketField('onboard_control_sensors_present', 'onboardControlSensorsPresent', 0, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('onboard_control_sensors_enabled', 'onboardControlSensorsEnabled', 4, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('onboard_control_sensors_health', 'onboardControlSensorsHealth', 8, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('load', 'load', 12, false, 2, 'uint16_t', 'd%'),
    new mavlink_1.MavLinkPacketField('voltage_battery', 'voltageBattery', 14, false, 2, 'uint16_t', 'mV'),
    new mavlink_1.MavLinkPacketField('current_battery', 'currentBattery', 16, false, 2, 'int16_t', 'cA'),
    new mavlink_1.MavLinkPacketField('drop_rate_comm', 'dropRateComm', 18, false, 2, 'uint16_t', 'c%'),
    new mavlink_1.MavLinkPacketField('errors_comm', 'errorsComm', 20, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('errors_count1', 'errorsCount1', 22, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('errors_count2', 'errorsCount2', 24, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('errors_count3', 'errorsCount3', 26, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('errors_count4', 'errorsCount4', 28, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('battery_remaining', 'batteryRemaining', 30, false, 1, 'int8_t', '%'),
];
/**
 * The system time is the time of the master clock, typically the computer clock of the main onboard
 * computer.
 */
class SystemTime extends mavlink_1.MavLinkData {
}
exports.SystemTime = SystemTime;
SystemTime.MSG_ID = 2;
SystemTime.MSG_NAME = 'SYSTEM_TIME';
SystemTime.PAYLOAD_LENGTH = 12;
SystemTime.MAGIC_NUMBER = 137;
SystemTime.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_unix_usec', 'timeUnixUsec', 0, false, 8, 'uint64_t', 'us'),
    new mavlink_1.MavLinkPacketField('time_boot_ms', 'timeBootMs', 8, false, 4, 'uint32_t', 'ms'),
];
/**
 * A ping message either requesting or responding to a ping. This allows to measure the system
 * latencies, including serial port, radio modem and UDP connections. The ping microservice is
 * documented at https://mavlink.io/en/services/ping.html
 *
 * @deprecated since 2011-08, replaced by SYSTEM_TIME; to be removed / merged with SYSTEM_TIME
 */
class Ping extends mavlink_1.MavLinkData {
}
exports.Ping = Ping;
Ping.MSG_ID = 4;
Ping.MSG_NAME = 'PING';
Ping.PAYLOAD_LENGTH = 14;
Ping.MAGIC_NUMBER = 237;
Ping.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_usec', 'timeUsec', 0, false, 8, 'uint64_t', 'us'),
    new mavlink_1.MavLinkPacketField('seq', 'seq', 8, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 12, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 13, false, 1, 'uint8_t', ''),
];
/**
 * Request to control this MAV
 */
class ChangeOperatorControl extends mavlink_1.MavLinkData {
}
exports.ChangeOperatorControl = ChangeOperatorControl;
ChangeOperatorControl.MSG_ID = 5;
ChangeOperatorControl.MSG_NAME = 'CHANGE_OPERATOR_CONTROL';
ChangeOperatorControl.PAYLOAD_LENGTH = 28;
ChangeOperatorControl.MAGIC_NUMBER = 217;
ChangeOperatorControl.FIELDS = [
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 0, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('control_request', 'controlRequest', 1, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('version', 'version', 2, false, 1, 'uint8_t', 'rad'),
    new mavlink_1.MavLinkPacketField('passkey', 'passkey', 3, false, 1, 'char[]', '', 25),
];
/**
 * Accept / deny control of this MAV
 */
class ChangeOperatorControlAck extends mavlink_1.MavLinkData {
}
exports.ChangeOperatorControlAck = ChangeOperatorControlAck;
ChangeOperatorControlAck.MSG_ID = 6;
ChangeOperatorControlAck.MSG_NAME = 'CHANGE_OPERATOR_CONTROL_ACK';
ChangeOperatorControlAck.PAYLOAD_LENGTH = 3;
ChangeOperatorControlAck.MAGIC_NUMBER = 104;
ChangeOperatorControlAck.FIELDS = [
    new mavlink_1.MavLinkPacketField('gcs_system_id', 'gcsSystemId', 0, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('control_request', 'controlRequest', 1, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('ack', 'ack', 2, false, 1, 'uint8_t', ''),
];
/**
 * Emit an encrypted signature / key identifying this system. PLEASE NOTE: This protocol has been kept
 * simple, so transmitting the key requires an encrypted channel for true safety.
 */
class AuthKey extends mavlink_1.MavLinkData {
}
exports.AuthKey = AuthKey;
AuthKey.MSG_ID = 7;
AuthKey.MSG_NAME = 'AUTH_KEY';
AuthKey.PAYLOAD_LENGTH = 32;
AuthKey.MAGIC_NUMBER = 119;
AuthKey.FIELDS = [
    new mavlink_1.MavLinkPacketField('key', 'key', 0, false, 1, 'char[]', '', 32),
];
/**
 * Set the system mode, as defined by enum MAV_MODE. There is no target component id as the mode is by
 * definition for the overall aircraft, not only for one component.
 *
 * @deprecated since 2015-12, replaced by MAV_CMD_DO_SET_MODE; Use COMMAND_LONG with MAV_CMD_DO_SET_MODE instead
 */
class SetMode extends mavlink_1.MavLinkData {
}
exports.SetMode = SetMode;
SetMode.MSG_ID = 11;
SetMode.MSG_NAME = 'SET_MODE';
SetMode.PAYLOAD_LENGTH = 6;
SetMode.MAGIC_NUMBER = 89;
SetMode.FIELDS = [
    new mavlink_1.MavLinkPacketField('custom_mode', 'customMode', 0, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 4, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('base_mode', 'baseMode', 5, false, 1, 'uint8_t', ''),
];
/**
 * Request to read the onboard parameter with the param_id string id. Onboard parameters are stored as
 * key[const char*] -> value[float]. This allows to send a parameter to any other component (such as
 * the GCS) without the need of previous knowledge of possible parameter names. Thus the same GCS can
 * store different parameters for different autopilots. See also
 * https://mavlink.io/en/services/parameter.html for a full documentation of QGroundControl and IMU
 * code.
 */
class ParamRequestRead extends mavlink_1.MavLinkData {
}
exports.ParamRequestRead = ParamRequestRead;
ParamRequestRead.MSG_ID = 20;
ParamRequestRead.MSG_NAME = 'PARAM_REQUEST_READ';
ParamRequestRead.PAYLOAD_LENGTH = 20;
ParamRequestRead.MAGIC_NUMBER = 214;
ParamRequestRead.FIELDS = [
    new mavlink_1.MavLinkPacketField('param_index', 'paramIndex', 0, false, 2, 'int16_t', ''),
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 2, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 3, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('param_id', 'paramId', 4, false, 1, 'char[]', '', 16),
];
/**
 * Request all parameters of this component. After this request, all parameters are emitted. The
 * parameter microservice is documented at https://mavlink.io/en/services/parameter.html
 */
class ParamRequestList extends mavlink_1.MavLinkData {
}
exports.ParamRequestList = ParamRequestList;
ParamRequestList.MSG_ID = 21;
ParamRequestList.MSG_NAME = 'PARAM_REQUEST_LIST';
ParamRequestList.PAYLOAD_LENGTH = 2;
ParamRequestList.MAGIC_NUMBER = 159;
ParamRequestList.FIELDS = [
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 0, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 1, false, 1, 'uint8_t', ''),
];
/**
 * Emit the value of a onboard parameter. The inclusion of param_count and param_index in the message
 * allows the recipient to keep track of received parameters and allows him to re-request missing
 * parameters after a loss or timeout. The parameter microservice is documented at
 * https://mavlink.io/en/services/parameter.html
 */
class ParamValue extends mavlink_1.MavLinkData {
}
exports.ParamValue = ParamValue;
ParamValue.MSG_ID = 22;
ParamValue.MSG_NAME = 'PARAM_VALUE';
ParamValue.PAYLOAD_LENGTH = 25;
ParamValue.MAGIC_NUMBER = 220;
ParamValue.FIELDS = [
    new mavlink_1.MavLinkPacketField('param_value', 'paramValue', 0, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('param_count', 'paramCount', 4, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('param_index', 'paramIndex', 6, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('param_id', 'paramId', 8, false, 1, 'char[]', '', 16),
    new mavlink_1.MavLinkPacketField('param_type', 'paramType', 24, false, 1, 'uint8_t', ''),
];
/**
 * Set a parameter value (write new value to permanent storage). The receiving component should
 * acknowledge the new parameter value by broadcasting a PARAM_VALUE message (broadcasting ensures that
 * multiple GCS all have an up-to-date list of all parameters). If the sending GCS did not receive a
 * PARAM_VALUE within its timeout time, it should re-send the PARAM_SET message. The parameter
 * microservice is documented at https://mavlink.io/en/services/parameter.html.
 */
class ParamSet extends mavlink_1.MavLinkData {
}
exports.ParamSet = ParamSet;
ParamSet.MSG_ID = 23;
ParamSet.MSG_NAME = 'PARAM_SET';
ParamSet.PAYLOAD_LENGTH = 23;
ParamSet.MAGIC_NUMBER = 168;
ParamSet.FIELDS = [
    new mavlink_1.MavLinkPacketField('param_value', 'paramValue', 0, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 4, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 5, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('param_id', 'paramId', 6, false, 1, 'char[]', '', 16),
    new mavlink_1.MavLinkPacketField('param_type', 'paramType', 22, false, 1, 'uint8_t', ''),
];
/**
 * The global position, as returned by the Global Positioning System (GPS). This is NOT the global
 * position estimate of the system, but rather a RAW sensor value. See message GLOBAL_POSITION for the
 * global position estimate.
 */
class GpsRawInt extends mavlink_1.MavLinkData {
}
exports.GpsRawInt = GpsRawInt;
GpsRawInt.MSG_ID = 24;
GpsRawInt.MSG_NAME = 'GPS_RAW_INT';
GpsRawInt.PAYLOAD_LENGTH = 52;
GpsRawInt.MAGIC_NUMBER = 24;
GpsRawInt.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_usec', 'timeUsec', 0, false, 8, 'uint64_t', 'us'),
    new mavlink_1.MavLinkPacketField('lat', 'lat', 8, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('lon', 'lon', 12, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('alt', 'alt', 16, false, 4, 'int32_t', 'mm'),
    new mavlink_1.MavLinkPacketField('eph', 'eph', 20, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('epv', 'epv', 22, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('vel', 'vel', 24, false, 2, 'uint16_t', 'cm/s'),
    new mavlink_1.MavLinkPacketField('cog', 'cog', 26, false, 2, 'uint16_t', 'cdeg'),
    new mavlink_1.MavLinkPacketField('fix_type', 'fixType', 28, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('satellites_visible', 'satellitesVisible', 29, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('alt_ellipsoid', 'altEllipsoid', 30, true, 4, 'int32_t', 'mm'),
    new mavlink_1.MavLinkPacketField('h_acc', 'hAcc', 34, true, 4, 'uint32_t', 'mm'),
    new mavlink_1.MavLinkPacketField('v_acc', 'vAcc', 38, true, 4, 'uint32_t', 'mm'),
    new mavlink_1.MavLinkPacketField('vel_acc', 'velAcc', 42, true, 4, 'uint32_t', 'mm'),
    new mavlink_1.MavLinkPacketField('hdg_acc', 'hdgAcc', 46, true, 4, 'uint32_t', 'degE5'),
    new mavlink_1.MavLinkPacketField('yaw', 'yaw', 50, true, 2, 'uint16_t', 'cdeg'),
];
/**
 * The positioning status, as reported by GPS. This message is intended to display status information
 * about each satellite visible to the receiver. See message GLOBAL_POSITION for the global position
 * estimate. This message can contain information for up to 20 satellites.
 */
class GpsStatus extends mavlink_1.MavLinkData {
}
exports.GpsStatus = GpsStatus;
GpsStatus.MSG_ID = 25;
GpsStatus.MSG_NAME = 'GPS_STATUS';
GpsStatus.PAYLOAD_LENGTH = 101;
GpsStatus.MAGIC_NUMBER = 23;
GpsStatus.FIELDS = [
    new mavlink_1.MavLinkPacketField('satellites_visible', 'satellitesVisible', 0, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('satellite_prn', 'satellitePrn', 1, false, 1, 'uint8_t[]', '', 20),
    new mavlink_1.MavLinkPacketField('satellite_used', 'satelliteUsed', 21, false, 1, 'uint8_t[]', '', 20),
    new mavlink_1.MavLinkPacketField('satellite_elevation', 'satelliteElevation', 41, false, 1, 'uint8_t[]', 'deg', 20),
    new mavlink_1.MavLinkPacketField('satellite_azimuth', 'satelliteAzimuth', 61, false, 1, 'uint8_t[]', 'deg', 20),
    new mavlink_1.MavLinkPacketField('satellite_snr', 'satelliteSnr', 81, false, 1, 'uint8_t[]', 'dB', 20),
];
/**
 * The RAW IMU readings for the usual 9DOF sensor setup. This message should contain the scaled values
 * to the described units
 */
class ScaledImu extends mavlink_1.MavLinkData {
}
exports.ScaledImu = ScaledImu;
ScaledImu.MSG_ID = 26;
ScaledImu.MSG_NAME = 'SCALED_IMU';
ScaledImu.PAYLOAD_LENGTH = 24;
ScaledImu.MAGIC_NUMBER = 170;
ScaledImu.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_boot_ms', 'timeBootMs', 0, false, 4, 'uint32_t', 'ms'),
    new mavlink_1.MavLinkPacketField('xacc', 'xacc', 4, false, 2, 'int16_t', 'mG'),
    new mavlink_1.MavLinkPacketField('yacc', 'yacc', 6, false, 2, 'int16_t', 'mG'),
    new mavlink_1.MavLinkPacketField('zacc', 'zacc', 8, false, 2, 'int16_t', 'mG'),
    new mavlink_1.MavLinkPacketField('xgyro', 'xgyro', 10, false, 2, 'int16_t', 'mrad/s'),
    new mavlink_1.MavLinkPacketField('ygyro', 'ygyro', 12, false, 2, 'int16_t', 'mrad/s'),
    new mavlink_1.MavLinkPacketField('zgyro', 'zgyro', 14, false, 2, 'int16_t', 'mrad/s'),
    new mavlink_1.MavLinkPacketField('xmag', 'xmag', 16, false, 2, 'int16_t', 'mgauss'),
    new mavlink_1.MavLinkPacketField('ymag', 'ymag', 18, false, 2, 'int16_t', 'mgauss'),
    new mavlink_1.MavLinkPacketField('zmag', 'zmag', 20, false, 2, 'int16_t', 'mgauss'),
    new mavlink_1.MavLinkPacketField('temperature', 'temperature', 22, true, 2, 'int16_t', 'cdegC'),
];
/**
 * The RAW IMU readings for a 9DOF sensor, which is identified by the id (default IMU1). This message
 * should always contain the true raw values without any scaling to allow data capture and system
 * debugging.
 */
class RawImu extends mavlink_1.MavLinkData {
}
exports.RawImu = RawImu;
RawImu.MSG_ID = 27;
RawImu.MSG_NAME = 'RAW_IMU';
RawImu.PAYLOAD_LENGTH = 29;
RawImu.MAGIC_NUMBER = 144;
RawImu.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_usec', 'timeUsec', 0, false, 8, 'uint64_t', 'us'),
    new mavlink_1.MavLinkPacketField('xacc', 'xacc', 8, false, 2, 'int16_t', ''),
    new mavlink_1.MavLinkPacketField('yacc', 'yacc', 10, false, 2, 'int16_t', ''),
    new mavlink_1.MavLinkPacketField('zacc', 'zacc', 12, false, 2, 'int16_t', ''),
    new mavlink_1.MavLinkPacketField('xgyro', 'xgyro', 14, false, 2, 'int16_t', ''),
    new mavlink_1.MavLinkPacketField('ygyro', 'ygyro', 16, false, 2, 'int16_t', ''),
    new mavlink_1.MavLinkPacketField('zgyro', 'zgyro', 18, false, 2, 'int16_t', ''),
    new mavlink_1.MavLinkPacketField('xmag', 'xmag', 20, false, 2, 'int16_t', ''),
    new mavlink_1.MavLinkPacketField('ymag', 'ymag', 22, false, 2, 'int16_t', ''),
    new mavlink_1.MavLinkPacketField('zmag', 'zmag', 24, false, 2, 'int16_t', ''),
    new mavlink_1.MavLinkPacketField('id', 'id', 26, true, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('temperature', 'temperature', 27, true, 2, 'int16_t', 'cdegC'),
];
/**
 * The RAW pressure readings for the typical setup of one absolute pressure and one differential
 * pressure sensor. The sensor values should be the raw, UNSCALED ADC values.
 */
class RawPressure extends mavlink_1.MavLinkData {
}
exports.RawPressure = RawPressure;
RawPressure.MSG_ID = 28;
RawPressure.MSG_NAME = 'RAW_PRESSURE';
RawPressure.PAYLOAD_LENGTH = 16;
RawPressure.MAGIC_NUMBER = 67;
RawPressure.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_usec', 'timeUsec', 0, false, 8, 'uint64_t', 'us'),
    new mavlink_1.MavLinkPacketField('press_abs', 'pressAbs', 8, false, 2, 'int16_t', ''),
    new mavlink_1.MavLinkPacketField('press_diff1', 'pressDiff1', 10, false, 2, 'int16_t', ''),
    new mavlink_1.MavLinkPacketField('press_diff2', 'pressDiff2', 12, false, 2, 'int16_t', ''),
    new mavlink_1.MavLinkPacketField('temperature', 'temperature', 14, false, 2, 'int16_t', ''),
];
/**
 * The pressure readings for the typical setup of one absolute and differential pressure sensor. The
 * units are as specified in each field.
 */
class ScaledPressure extends mavlink_1.MavLinkData {
}
exports.ScaledPressure = ScaledPressure;
ScaledPressure.MSG_ID = 29;
ScaledPressure.MSG_NAME = 'SCALED_PRESSURE';
ScaledPressure.PAYLOAD_LENGTH = 16;
ScaledPressure.MAGIC_NUMBER = 115;
ScaledPressure.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_boot_ms', 'timeBootMs', 0, false, 4, 'uint32_t', 'ms'),
    new mavlink_1.MavLinkPacketField('press_abs', 'pressAbs', 4, false, 4, 'float', 'hPa'),
    new mavlink_1.MavLinkPacketField('press_diff', 'pressDiff', 8, false, 4, 'float', 'hPa'),
    new mavlink_1.MavLinkPacketField('temperature', 'temperature', 12, false, 2, 'int16_t', 'cdegC'),
    new mavlink_1.MavLinkPacketField('temperature_press_diff', 'temperaturePressDiff', 14, true, 2, 'int16_t', 'cdegC'),
];
/**
 * The attitude in the aeronautical frame (right-handed, Z-down, X-front, Y-right).
 */
class Attitude extends mavlink_1.MavLinkData {
}
exports.Attitude = Attitude;
Attitude.MSG_ID = 30;
Attitude.MSG_NAME = 'ATTITUDE';
Attitude.PAYLOAD_LENGTH = 28;
Attitude.MAGIC_NUMBER = 39;
Attitude.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_boot_ms', 'timeBootMs', 0, false, 4, 'uint32_t', 'ms'),
    new mavlink_1.MavLinkPacketField('roll', 'roll', 4, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('pitch', 'pitch', 8, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('yaw', 'yaw', 12, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('rollspeed', 'rollspeed', 16, false, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('pitchspeed', 'pitchspeed', 20, false, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('yawspeed', 'yawspeed', 24, false, 4, 'float', 'rad/s'),
];
/**
 * The attitude in the aeronautical frame (right-handed, Z-down, X-front, Y-right), expressed as
 * quaternion. Quaternion order is w, x, y, z and a zero rotation would be expressed as (1 0 0 0).
 */
class AttitudeQuaternion extends mavlink_1.MavLinkData {
}
exports.AttitudeQuaternion = AttitudeQuaternion;
AttitudeQuaternion.MSG_ID = 31;
AttitudeQuaternion.MSG_NAME = 'ATTITUDE_QUATERNION';
AttitudeQuaternion.PAYLOAD_LENGTH = 48;
AttitudeQuaternion.MAGIC_NUMBER = 246;
AttitudeQuaternion.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_boot_ms', 'timeBootMs', 0, false, 4, 'uint32_t', 'ms'),
    new mavlink_1.MavLinkPacketField('q1', 'q1', 4, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('q2', 'q2', 8, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('q3', 'q3', 12, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('q4', 'q4', 16, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('rollspeed', 'rollspeed', 20, false, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('pitchspeed', 'pitchspeed', 24, false, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('yawspeed', 'yawspeed', 28, false, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('repr_offset_q', 'reprOffsetQ', 32, true, 4, 'float[]', '', 4),
];
/**
 * The filtered local position (e.g. fused computer vision and accelerometers). Coordinate frame is
 * right-handed, Z-axis down (aeronautical frame, NED / north-east-down convention)
 */
class LocalPositionNed extends mavlink_1.MavLinkData {
}
exports.LocalPositionNed = LocalPositionNed;
LocalPositionNed.MSG_ID = 32;
LocalPositionNed.MSG_NAME = 'LOCAL_POSITION_NED';
LocalPositionNed.PAYLOAD_LENGTH = 28;
LocalPositionNed.MAGIC_NUMBER = 185;
LocalPositionNed.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_boot_ms', 'timeBootMs', 0, false, 4, 'uint32_t', 'ms'),
    new mavlink_1.MavLinkPacketField('x', 'x', 4, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('y', 'y', 8, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('z', 'z', 12, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('vx', 'vx', 16, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('vy', 'vy', 20, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('vz', 'vz', 24, false, 4, 'float', 'm/s'),
];
/**
 * The filtered global position (e.g. fused GPS and accelerometers). The position is in GPS-frame
 * (right-handed, Z-up). It is designed as scaled integer message since the resolution of float is not
 * sufficient.
 */
class GlobalPositionInt extends mavlink_1.MavLinkData {
}
exports.GlobalPositionInt = GlobalPositionInt;
GlobalPositionInt.MSG_ID = 33;
GlobalPositionInt.MSG_NAME = 'GLOBAL_POSITION_INT';
GlobalPositionInt.PAYLOAD_LENGTH = 28;
GlobalPositionInt.MAGIC_NUMBER = 104;
GlobalPositionInt.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_boot_ms', 'timeBootMs', 0, false, 4, 'uint32_t', 'ms'),
    new mavlink_1.MavLinkPacketField('lat', 'lat', 4, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('lon', 'lon', 8, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('alt', 'alt', 12, false, 4, 'int32_t', 'mm'),
    new mavlink_1.MavLinkPacketField('relative_alt', 'relativeAlt', 16, false, 4, 'int32_t', 'mm'),
    new mavlink_1.MavLinkPacketField('vx', 'vx', 20, false, 2, 'int16_t', 'cm/s'),
    new mavlink_1.MavLinkPacketField('vy', 'vy', 22, false, 2, 'int16_t', 'cm/s'),
    new mavlink_1.MavLinkPacketField('vz', 'vz', 24, false, 2, 'int16_t', 'cm/s'),
    new mavlink_1.MavLinkPacketField('hdg', 'hdg', 26, false, 2, 'uint16_t', 'cdeg'),
];
/**
 * The scaled values of the RC channels received: (-100%) -10000, (0%) 0, (100%) 10000. Channels that
 * are inactive should be set to UINT16_MAX.
 */
class RcChannelsScaled extends mavlink_1.MavLinkData {
}
exports.RcChannelsScaled = RcChannelsScaled;
RcChannelsScaled.MSG_ID = 34;
RcChannelsScaled.MSG_NAME = 'RC_CHANNELS_SCALED';
RcChannelsScaled.PAYLOAD_LENGTH = 22;
RcChannelsScaled.MAGIC_NUMBER = 237;
RcChannelsScaled.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_boot_ms', 'timeBootMs', 0, false, 4, 'uint32_t', 'ms'),
    new mavlink_1.MavLinkPacketField('chan1_scaled', 'chan1Scaled', 4, false, 2, 'int16_t', ''),
    new mavlink_1.MavLinkPacketField('chan2_scaled', 'chan2Scaled', 6, false, 2, 'int16_t', ''),
    new mavlink_1.MavLinkPacketField('chan3_scaled', 'chan3Scaled', 8, false, 2, 'int16_t', ''),
    new mavlink_1.MavLinkPacketField('chan4_scaled', 'chan4Scaled', 10, false, 2, 'int16_t', ''),
    new mavlink_1.MavLinkPacketField('chan5_scaled', 'chan5Scaled', 12, false, 2, 'int16_t', ''),
    new mavlink_1.MavLinkPacketField('chan6_scaled', 'chan6Scaled', 14, false, 2, 'int16_t', ''),
    new mavlink_1.MavLinkPacketField('chan7_scaled', 'chan7Scaled', 16, false, 2, 'int16_t', ''),
    new mavlink_1.MavLinkPacketField('chan8_scaled', 'chan8Scaled', 18, false, 2, 'int16_t', ''),
    new mavlink_1.MavLinkPacketField('port', 'port', 20, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('rssi', 'rssi', 21, false, 1, 'uint8_t', ''),
];
/**
 * The RAW values of the RC channels received. The standard PPM modulation is as follows: 1000
 * microseconds: 0%, 2000 microseconds: 100%. A value of UINT16_MAX implies the channel is unused.
 * Individual receivers/transmitters might violate this specification.
 */
class RcChannelsRaw extends mavlink_1.MavLinkData {
}
exports.RcChannelsRaw = RcChannelsRaw;
RcChannelsRaw.MSG_ID = 35;
RcChannelsRaw.MSG_NAME = 'RC_CHANNELS_RAW';
RcChannelsRaw.PAYLOAD_LENGTH = 22;
RcChannelsRaw.MAGIC_NUMBER = 244;
RcChannelsRaw.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_boot_ms', 'timeBootMs', 0, false, 4, 'uint32_t', 'ms'),
    new mavlink_1.MavLinkPacketField('chan1_raw', 'chan1Raw', 4, false, 2, 'uint16_t', 'us'),
    new mavlink_1.MavLinkPacketField('chan2_raw', 'chan2Raw', 6, false, 2, 'uint16_t', 'us'),
    new mavlink_1.MavLinkPacketField('chan3_raw', 'chan3Raw', 8, false, 2, 'uint16_t', 'us'),
    new mavlink_1.MavLinkPacketField('chan4_raw', 'chan4Raw', 10, false, 2, 'uint16_t', 'us'),
    new mavlink_1.MavLinkPacketField('chan5_raw', 'chan5Raw', 12, false, 2, 'uint16_t', 'us'),
    new mavlink_1.MavLinkPacketField('chan6_raw', 'chan6Raw', 14, false, 2, 'uint16_t', 'us'),
    new mavlink_1.MavLinkPacketField('chan7_raw', 'chan7Raw', 16, false, 2, 'uint16_t', 'us'),
    new mavlink_1.MavLinkPacketField('chan8_raw', 'chan8Raw', 18, false, 2, 'uint16_t', 'us'),
    new mavlink_1.MavLinkPacketField('port', 'port', 20, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('rssi', 'rssi', 21, false, 1, 'uint8_t', ''),
];
/**
 * Superseded by ACTUATOR_OUTPUT_STATUS. The RAW values of the servo outputs (for RC input from the
 * remote, use the RC_CHANNELS messages). The standard PPM modulation is as follows: 1000 microseconds:
 * 0%, 2000 microseconds: 100%.
 */
class ServoOutputRaw extends mavlink_1.MavLinkData {
}
exports.ServoOutputRaw = ServoOutputRaw;
ServoOutputRaw.MSG_ID = 36;
ServoOutputRaw.MSG_NAME = 'SERVO_OUTPUT_RAW';
ServoOutputRaw.PAYLOAD_LENGTH = 37;
ServoOutputRaw.MAGIC_NUMBER = 222;
ServoOutputRaw.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_usec', 'timeUsec', 0, false, 4, 'uint32_t', 'us'),
    new mavlink_1.MavLinkPacketField('servo1_raw', 'servo1Raw', 4, false, 2, 'uint16_t', 'us'),
    new mavlink_1.MavLinkPacketField('servo2_raw', 'servo2Raw', 6, false, 2, 'uint16_t', 'us'),
    new mavlink_1.MavLinkPacketField('servo3_raw', 'servo3Raw', 8, false, 2, 'uint16_t', 'us'),
    new mavlink_1.MavLinkPacketField('servo4_raw', 'servo4Raw', 10, false, 2, 'uint16_t', 'us'),
    new mavlink_1.MavLinkPacketField('servo5_raw', 'servo5Raw', 12, false, 2, 'uint16_t', 'us'),
    new mavlink_1.MavLinkPacketField('servo6_raw', 'servo6Raw', 14, false, 2, 'uint16_t', 'us'),
    new mavlink_1.MavLinkPacketField('servo7_raw', 'servo7Raw', 16, false, 2, 'uint16_t', 'us'),
    new mavlink_1.MavLinkPacketField('servo8_raw', 'servo8Raw', 18, false, 2, 'uint16_t', 'us'),
    new mavlink_1.MavLinkPacketField('port', 'port', 20, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('servo9_raw', 'servo9Raw', 21, true, 2, 'uint16_t', 'us'),
    new mavlink_1.MavLinkPacketField('servo10_raw', 'servo10Raw', 23, true, 2, 'uint16_t', 'us'),
    new mavlink_1.MavLinkPacketField('servo11_raw', 'servo11Raw', 25, true, 2, 'uint16_t', 'us'),
    new mavlink_1.MavLinkPacketField('servo12_raw', 'servo12Raw', 27, true, 2, 'uint16_t', 'us'),
    new mavlink_1.MavLinkPacketField('servo13_raw', 'servo13Raw', 29, true, 2, 'uint16_t', 'us'),
    new mavlink_1.MavLinkPacketField('servo14_raw', 'servo14Raw', 31, true, 2, 'uint16_t', 'us'),
    new mavlink_1.MavLinkPacketField('servo15_raw', 'servo15Raw', 33, true, 2, 'uint16_t', 'us'),
    new mavlink_1.MavLinkPacketField('servo16_raw', 'servo16Raw', 35, true, 2, 'uint16_t', 'us'),
];
/**
 * Request a partial list of mission items from the system/component.
 * https://mavlink.io/en/services/mission.html. If start and end index are the same, just send one
 * waypoint.
 */
class MissionRequestPartialList extends mavlink_1.MavLinkData {
}
exports.MissionRequestPartialList = MissionRequestPartialList;
MissionRequestPartialList.MSG_ID = 37;
MissionRequestPartialList.MSG_NAME = 'MISSION_REQUEST_PARTIAL_LIST';
MissionRequestPartialList.PAYLOAD_LENGTH = 7;
MissionRequestPartialList.MAGIC_NUMBER = 212;
MissionRequestPartialList.FIELDS = [
    new mavlink_1.MavLinkPacketField('start_index', 'startIndex', 0, false, 2, 'int16_t', ''),
    new mavlink_1.MavLinkPacketField('end_index', 'endIndex', 2, false, 2, 'int16_t', ''),
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 4, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 5, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('mission_type', 'missionType', 6, true, 1, 'uint8_t', ''),
];
/**
 * This message is sent to the MAV to write a partial list. If start index == end index, only one item
 * will be transmitted / updated. If the start index is NOT 0 and above the current list size, this
 * request should be REJECTED!
 */
class MissionWritePartialList extends mavlink_1.MavLinkData {
}
exports.MissionWritePartialList = MissionWritePartialList;
MissionWritePartialList.MSG_ID = 38;
MissionWritePartialList.MSG_NAME = 'MISSION_WRITE_PARTIAL_LIST';
MissionWritePartialList.PAYLOAD_LENGTH = 7;
MissionWritePartialList.MAGIC_NUMBER = 9;
MissionWritePartialList.FIELDS = [
    new mavlink_1.MavLinkPacketField('start_index', 'startIndex', 0, false, 2, 'int16_t', ''),
    new mavlink_1.MavLinkPacketField('end_index', 'endIndex', 2, false, 2, 'int16_t', ''),
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 4, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 5, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('mission_type', 'missionType', 6, true, 1, 'uint8_t', ''),
];
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
class MissionItem extends mavlink_1.MavLinkData {
}
exports.MissionItem = MissionItem;
MissionItem.MSG_ID = 39;
MissionItem.MSG_NAME = 'MISSION_ITEM';
MissionItem.PAYLOAD_LENGTH = 38;
MissionItem.MAGIC_NUMBER = 254;
MissionItem.FIELDS = [
    new mavlink_1.MavLinkPacketField('param1', 'param1', 0, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('param2', 'param2', 4, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('param3', 'param3', 8, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('param4', 'param4', 12, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('x', 'x', 16, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('y', 'y', 20, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('z', 'z', 24, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('seq', 'seq', 28, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('command', 'command', 30, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 32, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 33, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('frame', 'frame', 34, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('current', 'current', 35, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('autocontinue', 'autocontinue', 36, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('mission_type', 'missionType', 37, true, 1, 'uint8_t', ''),
];
/**
 * Request the information of the mission item with the sequence number seq. The response of the system
 * to this message should be a MISSION_ITEM message. https://mavlink.io/en/services/mission.html
 *
 * @deprecated since 2020-06, replaced by MISSION_REQUEST_INT; A system that gets this request should respond with MISSION_ITEM_INT (as though MISSION_REQUEST_INT was received).
 */
class MissionRequest extends mavlink_1.MavLinkData {
}
exports.MissionRequest = MissionRequest;
MissionRequest.MSG_ID = 40;
MissionRequest.MSG_NAME = 'MISSION_REQUEST';
MissionRequest.PAYLOAD_LENGTH = 5;
MissionRequest.MAGIC_NUMBER = 230;
MissionRequest.FIELDS = [
    new mavlink_1.MavLinkPacketField('seq', 'seq', 0, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 2, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 3, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('mission_type', 'missionType', 4, true, 1, 'uint8_t', ''),
];
/**
 * Set the mission item with sequence number seq as current item. This means that the MAV will continue
 * to this mission item on the shortest path (not following the mission items in-between).
 */
class MissionSetCurrent extends mavlink_1.MavLinkData {
}
exports.MissionSetCurrent = MissionSetCurrent;
MissionSetCurrent.MSG_ID = 41;
MissionSetCurrent.MSG_NAME = 'MISSION_SET_CURRENT';
MissionSetCurrent.PAYLOAD_LENGTH = 4;
MissionSetCurrent.MAGIC_NUMBER = 28;
MissionSetCurrent.FIELDS = [
    new mavlink_1.MavLinkPacketField('seq', 'seq', 0, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 2, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 3, false, 1, 'uint8_t', ''),
];
/**
 * Message that announces the sequence number of the current active mission item. The MAV will fly
 * towards this mission item.
 */
class MissionCurrent extends mavlink_1.MavLinkData {
}
exports.MissionCurrent = MissionCurrent;
MissionCurrent.MSG_ID = 42;
MissionCurrent.MSG_NAME = 'MISSION_CURRENT';
MissionCurrent.PAYLOAD_LENGTH = 2;
MissionCurrent.MAGIC_NUMBER = 28;
MissionCurrent.FIELDS = [
    new mavlink_1.MavLinkPacketField('seq', 'seq', 0, false, 2, 'uint16_t', ''),
];
/**
 * Request the overall list of mission items from the system/component.
 */
class MissionRequestList extends mavlink_1.MavLinkData {
}
exports.MissionRequestList = MissionRequestList;
MissionRequestList.MSG_ID = 43;
MissionRequestList.MSG_NAME = 'MISSION_REQUEST_LIST';
MissionRequestList.PAYLOAD_LENGTH = 3;
MissionRequestList.MAGIC_NUMBER = 132;
MissionRequestList.FIELDS = [
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 0, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 1, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('mission_type', 'missionType', 2, true, 1, 'uint8_t', ''),
];
/**
 * This message is emitted as response to MISSION_REQUEST_LIST by the MAV and to initiate a write
 * transaction. The GCS can then request the individual mission item based on the knowledge of the
 * total number of waypoints.
 */
class MissionCount extends mavlink_1.MavLinkData {
}
exports.MissionCount = MissionCount;
MissionCount.MSG_ID = 44;
MissionCount.MSG_NAME = 'MISSION_COUNT';
MissionCount.PAYLOAD_LENGTH = 5;
MissionCount.MAGIC_NUMBER = 221;
MissionCount.FIELDS = [
    new mavlink_1.MavLinkPacketField('count', 'count', 0, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 2, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 3, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('mission_type', 'missionType', 4, true, 1, 'uint8_t', ''),
];
/**
 * Delete all mission items at once.
 */
class MissionClearAll extends mavlink_1.MavLinkData {
}
exports.MissionClearAll = MissionClearAll;
MissionClearAll.MSG_ID = 45;
MissionClearAll.MSG_NAME = 'MISSION_CLEAR_ALL';
MissionClearAll.PAYLOAD_LENGTH = 3;
MissionClearAll.MAGIC_NUMBER = 232;
MissionClearAll.FIELDS = [
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 0, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 1, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('mission_type', 'missionType', 2, true, 1, 'uint8_t', ''),
];
/**
 * A certain mission item has been reached. The system will either hold this position (or circle on the
 * orbit) or (if the autocontinue on the WP was set) continue to the next waypoint.
 */
class MissionItemReached extends mavlink_1.MavLinkData {
}
exports.MissionItemReached = MissionItemReached;
MissionItemReached.MSG_ID = 46;
MissionItemReached.MSG_NAME = 'MISSION_ITEM_REACHED';
MissionItemReached.PAYLOAD_LENGTH = 2;
MissionItemReached.MAGIC_NUMBER = 11;
MissionItemReached.FIELDS = [
    new mavlink_1.MavLinkPacketField('seq', 'seq', 0, false, 2, 'uint16_t', ''),
];
/**
 * Acknowledgment message during waypoint handling. The type field states if this message is a positive
 * ack (type=0) or if an error happened (type=non-zero).
 */
class MissionAck extends mavlink_1.MavLinkData {
}
exports.MissionAck = MissionAck;
MissionAck.MSG_ID = 47;
MissionAck.MSG_NAME = 'MISSION_ACK';
MissionAck.PAYLOAD_LENGTH = 4;
MissionAck.MAGIC_NUMBER = 153;
MissionAck.FIELDS = [
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 0, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 1, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('type', 'type', 2, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('mission_type', 'missionType', 3, true, 1, 'uint8_t', ''),
];
/**
 * Sets the GPS co-ordinates of the vehicle local origin (0,0,0) position. Vehicle should emit
 * GPS_GLOBAL_ORIGIN irrespective of whether the origin is changed. This enables transform between the
 * local coordinate frame and the global (GPS) coordinate frame, which may be necessary when (for
 * example) indoor and outdoor settings are connected and the MAV should move from in- to outdoor.
 */
class SetGpsGlobalOrigin extends mavlink_1.MavLinkData {
}
exports.SetGpsGlobalOrigin = SetGpsGlobalOrigin;
SetGpsGlobalOrigin.MSG_ID = 48;
SetGpsGlobalOrigin.MSG_NAME = 'SET_GPS_GLOBAL_ORIGIN';
SetGpsGlobalOrigin.PAYLOAD_LENGTH = 21;
SetGpsGlobalOrigin.MAGIC_NUMBER = 41;
SetGpsGlobalOrigin.FIELDS = [
    new mavlink_1.MavLinkPacketField('latitude', 'latitude', 0, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('longitude', 'longitude', 4, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('altitude', 'altitude', 8, false, 4, 'int32_t', 'mm'),
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 12, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('time_usec', 'timeUsec', 13, true, 8, 'uint64_t', 'us'),
];
/**
 * Publishes the GPS co-ordinates of the vehicle local origin (0,0,0) position. Emitted whenever a new
 * GPS-Local position mapping is requested or set - e.g. following SET_GPS_GLOBAL_ORIGIN message.
 */
class GpsGlobalOrigin extends mavlink_1.MavLinkData {
}
exports.GpsGlobalOrigin = GpsGlobalOrigin;
GpsGlobalOrigin.MSG_ID = 49;
GpsGlobalOrigin.MSG_NAME = 'GPS_GLOBAL_ORIGIN';
GpsGlobalOrigin.PAYLOAD_LENGTH = 20;
GpsGlobalOrigin.MAGIC_NUMBER = 39;
GpsGlobalOrigin.FIELDS = [
    new mavlink_1.MavLinkPacketField('latitude', 'latitude', 0, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('longitude', 'longitude', 4, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('altitude', 'altitude', 8, false, 4, 'int32_t', 'mm'),
    new mavlink_1.MavLinkPacketField('time_usec', 'timeUsec', 12, true, 8, 'uint64_t', 'us'),
];
/**
 * Bind a RC channel to a parameter. The parameter should change according to the RC channel value.
 */
class ParamMapRc extends mavlink_1.MavLinkData {
}
exports.ParamMapRc = ParamMapRc;
ParamMapRc.MSG_ID = 50;
ParamMapRc.MSG_NAME = 'PARAM_MAP_RC';
ParamMapRc.PAYLOAD_LENGTH = 37;
ParamMapRc.MAGIC_NUMBER = 78;
ParamMapRc.FIELDS = [
    new mavlink_1.MavLinkPacketField('param_value0', 'paramValue0', 0, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('scale', 'scale', 4, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('param_value_min', 'paramValueMin', 8, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('param_value_max', 'paramValueMax', 12, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('param_index', 'paramIndex', 16, false, 2, 'int16_t', ''),
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 18, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 19, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('param_id', 'paramId', 20, false, 1, 'char[]', '', 16),
    new mavlink_1.MavLinkPacketField('parameter_rc_channel_index', 'parameterRcChannelIndex', 36, false, 1, 'uint8_t', ''),
];
/**
 * Request the information of the mission item with the sequence number seq. The response of the system
 * to this message should be a MISSION_ITEM_INT message. https://mavlink.io/en/services/mission.html
 */
class MissionRequestInt extends mavlink_1.MavLinkData {
}
exports.MissionRequestInt = MissionRequestInt;
MissionRequestInt.MSG_ID = 51;
MissionRequestInt.MSG_NAME = 'MISSION_REQUEST_INT';
MissionRequestInt.PAYLOAD_LENGTH = 5;
MissionRequestInt.MAGIC_NUMBER = 196;
MissionRequestInt.FIELDS = [
    new mavlink_1.MavLinkPacketField('seq', 'seq', 0, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 2, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 3, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('mission_type', 'missionType', 4, true, 1, 'uint8_t', ''),
];
/**
 * Set a safety zone (volume), which is defined by two corners of a cube. This message can be used to
 * tell the MAV which setpoints/waypoints to accept and which to reject. Safety areas are often
 * enforced by national or competition regulations.
 */
class SafetySetAllowedArea extends mavlink_1.MavLinkData {
}
exports.SafetySetAllowedArea = SafetySetAllowedArea;
SafetySetAllowedArea.MSG_ID = 54;
SafetySetAllowedArea.MSG_NAME = 'SAFETY_SET_ALLOWED_AREA';
SafetySetAllowedArea.PAYLOAD_LENGTH = 27;
SafetySetAllowedArea.MAGIC_NUMBER = 15;
SafetySetAllowedArea.FIELDS = [
    new mavlink_1.MavLinkPacketField('p1x', 'p1x', 0, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('p1y', 'p1y', 4, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('p1z', 'p1z', 8, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('p2x', 'p2x', 12, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('p2y', 'p2y', 16, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('p2z', 'p2z', 20, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 24, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 25, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('frame', 'frame', 26, false, 1, 'uint8_t', ''),
];
/**
 * Read out the safety zone the MAV currently assumes.
 */
class SafetyAllowedArea extends mavlink_1.MavLinkData {
}
exports.SafetyAllowedArea = SafetyAllowedArea;
SafetyAllowedArea.MSG_ID = 55;
SafetyAllowedArea.MSG_NAME = 'SAFETY_ALLOWED_AREA';
SafetyAllowedArea.PAYLOAD_LENGTH = 25;
SafetyAllowedArea.MAGIC_NUMBER = 3;
SafetyAllowedArea.FIELDS = [
    new mavlink_1.MavLinkPacketField('p1x', 'p1x', 0, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('p1y', 'p1y', 4, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('p1z', 'p1z', 8, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('p2x', 'p2x', 12, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('p2y', 'p2y', 16, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('p2z', 'p2z', 20, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('frame', 'frame', 24, false, 1, 'uint8_t', ''),
];
/**
 * The attitude in the aeronautical frame (right-handed, Z-down, X-front, Y-right), expressed as
 * quaternion. Quaternion order is w, x, y, z and a zero rotation would be expressed as (1 0 0 0).
 */
class AttitudeQuaternionCov extends mavlink_1.MavLinkData {
}
exports.AttitudeQuaternionCov = AttitudeQuaternionCov;
AttitudeQuaternionCov.MSG_ID = 61;
AttitudeQuaternionCov.MSG_NAME = 'ATTITUDE_QUATERNION_COV';
AttitudeQuaternionCov.PAYLOAD_LENGTH = 72;
AttitudeQuaternionCov.MAGIC_NUMBER = 167;
AttitudeQuaternionCov.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_usec', 'timeUsec', 0, false, 8, 'uint64_t', 'us'),
    new mavlink_1.MavLinkPacketField('q', 'q', 8, false, 4, 'float[]', '', 4),
    new mavlink_1.MavLinkPacketField('rollspeed', 'rollspeed', 24, false, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('pitchspeed', 'pitchspeed', 28, false, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('yawspeed', 'yawspeed', 32, false, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('covariance', 'covariance', 36, false, 4, 'float[]', '', 9),
];
/**
 * The state of the fixed wing navigation and position controller.
 */
class NavControllerOutput extends mavlink_1.MavLinkData {
}
exports.NavControllerOutput = NavControllerOutput;
NavControllerOutput.MSG_ID = 62;
NavControllerOutput.MSG_NAME = 'NAV_CONTROLLER_OUTPUT';
NavControllerOutput.PAYLOAD_LENGTH = 26;
NavControllerOutput.MAGIC_NUMBER = 183;
NavControllerOutput.FIELDS = [
    new mavlink_1.MavLinkPacketField('nav_roll', 'navRoll', 0, false, 4, 'float', 'deg'),
    new mavlink_1.MavLinkPacketField('nav_pitch', 'navPitch', 4, false, 4, 'float', 'deg'),
    new mavlink_1.MavLinkPacketField('alt_error', 'altError', 8, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('aspd_error', 'aspdError', 12, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('xtrack_error', 'xtrackError', 16, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('nav_bearing', 'navBearing', 20, false, 2, 'int16_t', 'deg'),
    new mavlink_1.MavLinkPacketField('target_bearing', 'targetBearing', 22, false, 2, 'int16_t', 'deg'),
    new mavlink_1.MavLinkPacketField('wp_dist', 'wpDist', 24, false, 2, 'uint16_t', 'm'),
];
/**
 * The filtered global position (e.g. fused GPS and accelerometers). The position is in GPS-frame
 * (right-handed, Z-up). It is designed as scaled integer message since the resolution of float is not
 * sufficient. NOTE: This message is intended for onboard networks / companion computers and
 * higher-bandwidth links and optimized for accuracy and completeness. Please use the
 * GLOBAL_POSITION_INT message for a minimal subset.
 */
class GlobalPositionIntCov extends mavlink_1.MavLinkData {
}
exports.GlobalPositionIntCov = GlobalPositionIntCov;
GlobalPositionIntCov.MSG_ID = 63;
GlobalPositionIntCov.MSG_NAME = 'GLOBAL_POSITION_INT_COV';
GlobalPositionIntCov.PAYLOAD_LENGTH = 181;
GlobalPositionIntCov.MAGIC_NUMBER = 119;
GlobalPositionIntCov.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_usec', 'timeUsec', 0, false, 8, 'uint64_t', 'us'),
    new mavlink_1.MavLinkPacketField('lat', 'lat', 8, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('lon', 'lon', 12, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('alt', 'alt', 16, false, 4, 'int32_t', 'mm'),
    new mavlink_1.MavLinkPacketField('relative_alt', 'relativeAlt', 20, false, 4, 'int32_t', 'mm'),
    new mavlink_1.MavLinkPacketField('vx', 'vx', 24, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('vy', 'vy', 28, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('vz', 'vz', 32, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('covariance', 'covariance', 36, false, 4, 'float[]', '', 36),
    new mavlink_1.MavLinkPacketField('estimator_type', 'estimatorType', 180, false, 1, 'uint8_t', ''),
];
/**
 * The filtered local position (e.g. fused computer vision and accelerometers). Coordinate frame is
 * right-handed, Z-axis down (aeronautical frame, NED / north-east-down convention)
 */
class LocalPositionNedCov extends mavlink_1.MavLinkData {
}
exports.LocalPositionNedCov = LocalPositionNedCov;
LocalPositionNedCov.MSG_ID = 64;
LocalPositionNedCov.MSG_NAME = 'LOCAL_POSITION_NED_COV';
LocalPositionNedCov.PAYLOAD_LENGTH = 225;
LocalPositionNedCov.MAGIC_NUMBER = 191;
LocalPositionNedCov.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_usec', 'timeUsec', 0, false, 8, 'uint64_t', 'us'),
    new mavlink_1.MavLinkPacketField('x', 'x', 8, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('y', 'y', 12, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('z', 'z', 16, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('vx', 'vx', 20, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('vy', 'vy', 24, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('vz', 'vz', 28, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('ax', 'ax', 32, false, 4, 'float', 'm/s/s'),
    new mavlink_1.MavLinkPacketField('ay', 'ay', 36, false, 4, 'float', 'm/s/s'),
    new mavlink_1.MavLinkPacketField('az', 'az', 40, false, 4, 'float', 'm/s/s'),
    new mavlink_1.MavLinkPacketField('covariance', 'covariance', 44, false, 4, 'float[]', '', 45),
    new mavlink_1.MavLinkPacketField('estimator_type', 'estimatorType', 224, false, 1, 'uint8_t', ''),
];
/**
 * The PPM values of the RC channels received. The standard PPM modulation is as follows: 1000
 * microseconds: 0%, 2000 microseconds: 100%. A value of UINT16_MAX implies the channel is unused.
 * Individual receivers/transmitters might violate this specification.
 */
class RcChannels extends mavlink_1.MavLinkData {
}
exports.RcChannels = RcChannels;
RcChannels.MSG_ID = 65;
RcChannels.MSG_NAME = 'RC_CHANNELS';
RcChannels.PAYLOAD_LENGTH = 42;
RcChannels.MAGIC_NUMBER = 118;
RcChannels.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_boot_ms', 'timeBootMs', 0, false, 4, 'uint32_t', 'ms'),
    new mavlink_1.MavLinkPacketField('chan1_raw', 'chan1Raw', 4, false, 2, 'uint16_t', 'us'),
    new mavlink_1.MavLinkPacketField('chan2_raw', 'chan2Raw', 6, false, 2, 'uint16_t', 'us'),
    new mavlink_1.MavLinkPacketField('chan3_raw', 'chan3Raw', 8, false, 2, 'uint16_t', 'us'),
    new mavlink_1.MavLinkPacketField('chan4_raw', 'chan4Raw', 10, false, 2, 'uint16_t', 'us'),
    new mavlink_1.MavLinkPacketField('chan5_raw', 'chan5Raw', 12, false, 2, 'uint16_t', 'us'),
    new mavlink_1.MavLinkPacketField('chan6_raw', 'chan6Raw', 14, false, 2, 'uint16_t', 'us'),
    new mavlink_1.MavLinkPacketField('chan7_raw', 'chan7Raw', 16, false, 2, 'uint16_t', 'us'),
    new mavlink_1.MavLinkPacketField('chan8_raw', 'chan8Raw', 18, false, 2, 'uint16_t', 'us'),
    new mavlink_1.MavLinkPacketField('chan9_raw', 'chan9Raw', 20, false, 2, 'uint16_t', 'us'),
    new mavlink_1.MavLinkPacketField('chan10_raw', 'chan10Raw', 22, false, 2, 'uint16_t', 'us'),
    new mavlink_1.MavLinkPacketField('chan11_raw', 'chan11Raw', 24, false, 2, 'uint16_t', 'us'),
    new mavlink_1.MavLinkPacketField('chan12_raw', 'chan12Raw', 26, false, 2, 'uint16_t', 'us'),
    new mavlink_1.MavLinkPacketField('chan13_raw', 'chan13Raw', 28, false, 2, 'uint16_t', 'us'),
    new mavlink_1.MavLinkPacketField('chan14_raw', 'chan14Raw', 30, false, 2, 'uint16_t', 'us'),
    new mavlink_1.MavLinkPacketField('chan15_raw', 'chan15Raw', 32, false, 2, 'uint16_t', 'us'),
    new mavlink_1.MavLinkPacketField('chan16_raw', 'chan16Raw', 34, false, 2, 'uint16_t', 'us'),
    new mavlink_1.MavLinkPacketField('chan17_raw', 'chan17Raw', 36, false, 2, 'uint16_t', 'us'),
    new mavlink_1.MavLinkPacketField('chan18_raw', 'chan18Raw', 38, false, 2, 'uint16_t', 'us'),
    new mavlink_1.MavLinkPacketField('chancount', 'chancount', 40, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('rssi', 'rssi', 41, false, 1, 'uint8_t', ''),
];
/**
 * Request a data stream.
 */
class RequestDataStream extends mavlink_1.MavLinkData {
}
exports.RequestDataStream = RequestDataStream;
RequestDataStream.MSG_ID = 66;
RequestDataStream.MSG_NAME = 'REQUEST_DATA_STREAM';
RequestDataStream.PAYLOAD_LENGTH = 6;
RequestDataStream.MAGIC_NUMBER = 148;
RequestDataStream.FIELDS = [
    new mavlink_1.MavLinkPacketField('req_message_rate', 'reqMessageRate', 0, false, 2, 'uint16_t', 'Hz'),
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 2, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 3, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('req_stream_id', 'reqStreamId', 4, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('start_stop', 'startStop', 5, false, 1, 'uint8_t', ''),
];
/**
 * Data stream status information.
 */
class DataStream extends mavlink_1.MavLinkData {
}
exports.DataStream = DataStream;
DataStream.MSG_ID = 67;
DataStream.MSG_NAME = 'DATA_STREAM';
DataStream.PAYLOAD_LENGTH = 4;
DataStream.MAGIC_NUMBER = 21;
DataStream.FIELDS = [
    new mavlink_1.MavLinkPacketField('message_rate', 'messageRate', 0, false, 2, 'uint16_t', 'Hz'),
    new mavlink_1.MavLinkPacketField('stream_id', 'streamId', 2, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('on_off', 'onOff', 3, false, 1, 'uint8_t', ''),
];
/**
 * This message provides an API for manually controlling the vehicle using standard joystick axes
 * nomenclature, along with a joystick-like input device. Unused axes can be disabled an buttons are
 * also transmit as boolean values of their
 */
class ManualControl extends mavlink_1.MavLinkData {
}
exports.ManualControl = ManualControl;
ManualControl.MSG_ID = 69;
ManualControl.MSG_NAME = 'MANUAL_CONTROL';
ManualControl.PAYLOAD_LENGTH = 11;
ManualControl.MAGIC_NUMBER = 243;
ManualControl.FIELDS = [
    new mavlink_1.MavLinkPacketField('x', 'x', 0, false, 2, 'int16_t', ''),
    new mavlink_1.MavLinkPacketField('y', 'y', 2, false, 2, 'int16_t', ''),
    new mavlink_1.MavLinkPacketField('z', 'z', 4, false, 2, 'int16_t', ''),
    new mavlink_1.MavLinkPacketField('r', 'r', 6, false, 2, 'int16_t', ''),
    new mavlink_1.MavLinkPacketField('buttons', 'buttons', 8, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('target', 'target', 10, false, 1, 'uint8_t', ''),
];
/**
 * The RAW values of the RC channels sent to the MAV to override info received from the RC radio. The
 * standard PPM modulation is as follows: 1000 microseconds: 0%, 2000 microseconds: 100%. Individual
 * receivers/transmitters might violate this specification. Note carefully the semantic differences
 * between the first 8 channels and the subsequent channels
 */
class RcChannelsOverride extends mavlink_1.MavLinkData {
}
exports.RcChannelsOverride = RcChannelsOverride;
RcChannelsOverride.MSG_ID = 70;
RcChannelsOverride.MSG_NAME = 'RC_CHANNELS_OVERRIDE';
RcChannelsOverride.PAYLOAD_LENGTH = 38;
RcChannelsOverride.MAGIC_NUMBER = 124;
RcChannelsOverride.FIELDS = [
    new mavlink_1.MavLinkPacketField('chan1_raw', 'chan1Raw', 0, false, 2, 'uint16_t', 'us'),
    new mavlink_1.MavLinkPacketField('chan2_raw', 'chan2Raw', 2, false, 2, 'uint16_t', 'us'),
    new mavlink_1.MavLinkPacketField('chan3_raw', 'chan3Raw', 4, false, 2, 'uint16_t', 'us'),
    new mavlink_1.MavLinkPacketField('chan4_raw', 'chan4Raw', 6, false, 2, 'uint16_t', 'us'),
    new mavlink_1.MavLinkPacketField('chan5_raw', 'chan5Raw', 8, false, 2, 'uint16_t', 'us'),
    new mavlink_1.MavLinkPacketField('chan6_raw', 'chan6Raw', 10, false, 2, 'uint16_t', 'us'),
    new mavlink_1.MavLinkPacketField('chan7_raw', 'chan7Raw', 12, false, 2, 'uint16_t', 'us'),
    new mavlink_1.MavLinkPacketField('chan8_raw', 'chan8Raw', 14, false, 2, 'uint16_t', 'us'),
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 16, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 17, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('chan9_raw', 'chan9Raw', 18, true, 2, 'uint16_t', 'us'),
    new mavlink_1.MavLinkPacketField('chan10_raw', 'chan10Raw', 20, true, 2, 'uint16_t', 'us'),
    new mavlink_1.MavLinkPacketField('chan11_raw', 'chan11Raw', 22, true, 2, 'uint16_t', 'us'),
    new mavlink_1.MavLinkPacketField('chan12_raw', 'chan12Raw', 24, true, 2, 'uint16_t', 'us'),
    new mavlink_1.MavLinkPacketField('chan13_raw', 'chan13Raw', 26, true, 2, 'uint16_t', 'us'),
    new mavlink_1.MavLinkPacketField('chan14_raw', 'chan14Raw', 28, true, 2, 'uint16_t', 'us'),
    new mavlink_1.MavLinkPacketField('chan15_raw', 'chan15Raw', 30, true, 2, 'uint16_t', 'us'),
    new mavlink_1.MavLinkPacketField('chan16_raw', 'chan16Raw', 32, true, 2, 'uint16_t', 'us'),
    new mavlink_1.MavLinkPacketField('chan17_raw', 'chan17Raw', 34, true, 2, 'uint16_t', 'us'),
    new mavlink_1.MavLinkPacketField('chan18_raw', 'chan18Raw', 36, true, 2, 'uint16_t', 'us'),
];
/**
 * Message encoding a mission item. This message is emitted to announce the presence of a mission item
 * and to set a mission item on the system. The mission item can be either in x, y, z meters (type:
 * LOCAL) or x:lat, y:lon, z:altitude. Local frame is Z-down, right handed (NED), global frame is Z-up,
 * right handed (ENU). NaN or INT32_MAX may be used in float/integer params (respectively) to indicate
 * optional/default values (e.g. to use the component's current latitude, yaw rather than a specific
 * value). See also https://mavlink.io/en/services/mission.html.
 */
class MissionItemInt extends mavlink_1.MavLinkData {
}
exports.MissionItemInt = MissionItemInt;
MissionItemInt.MSG_ID = 73;
MissionItemInt.MSG_NAME = 'MISSION_ITEM_INT';
MissionItemInt.PAYLOAD_LENGTH = 38;
MissionItemInt.MAGIC_NUMBER = 38;
MissionItemInt.FIELDS = [
    new mavlink_1.MavLinkPacketField('param1', 'param1', 0, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('param2', 'param2', 4, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('param3', 'param3', 8, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('param4', 'param4', 12, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('x', 'x', 16, false, 4, 'int32_t', ''),
    new mavlink_1.MavLinkPacketField('y', 'y', 20, false, 4, 'int32_t', ''),
    new mavlink_1.MavLinkPacketField('z', 'z', 24, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('seq', 'seq', 28, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('command', 'command', 30, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 32, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 33, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('frame', 'frame', 34, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('current', 'current', 35, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('autocontinue', 'autocontinue', 36, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('mission_type', 'missionType', 37, true, 1, 'uint8_t', ''),
];
/**
 * Metrics typically displayed on a HUD for fixed wing aircraft.
 */
class VfrHud extends mavlink_1.MavLinkData {
}
exports.VfrHud = VfrHud;
VfrHud.MSG_ID = 74;
VfrHud.MSG_NAME = 'VFR_HUD';
VfrHud.PAYLOAD_LENGTH = 20;
VfrHud.MAGIC_NUMBER = 20;
VfrHud.FIELDS = [
    new mavlink_1.MavLinkPacketField('airspeed', 'airspeed', 0, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('groundspeed', 'groundspeed', 4, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('alt', 'alt', 8, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('climb', 'climb', 12, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('heading', 'heading', 16, false, 2, 'int16_t', 'deg'),
    new mavlink_1.MavLinkPacketField('throttle', 'throttle', 18, false, 2, 'uint16_t', '%'),
];
/**
 * Message encoding a command with parameters as scaled integers. Scaling depends on the actual command
 * value. The command microservice is documented at https://mavlink.io/en/services/command.html
 */
class CommandInt extends mavlink_1.MavLinkData {
}
exports.CommandInt = CommandInt;
CommandInt.MSG_ID = 75;
CommandInt.MSG_NAME = 'COMMAND_INT';
CommandInt.PAYLOAD_LENGTH = 35;
CommandInt.MAGIC_NUMBER = 158;
CommandInt.FIELDS = [
    new mavlink_1.MavLinkPacketField('param1', 'param1', 0, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('param2', 'param2', 4, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('param3', 'param3', 8, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('param4', 'param4', 12, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('x', 'x', 16, false, 4, 'int32_t', ''),
    new mavlink_1.MavLinkPacketField('y', 'y', 20, false, 4, 'int32_t', ''),
    new mavlink_1.MavLinkPacketField('z', 'z', 24, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('command', 'command', 28, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 30, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 31, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('frame', 'frame', 32, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('current', 'current', 33, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('autocontinue', 'autocontinue', 34, false, 1, 'uint8_t', ''),
];
/**
 * Send a command with up to seven parameters to the MAV. The command microservice is documented at
 * https://mavlink.io/en/services/command.html
 */
class CommandLong extends mavlink_1.MavLinkData {
}
exports.CommandLong = CommandLong;
CommandLong.MSG_ID = 76;
CommandLong.MSG_NAME = 'COMMAND_LONG';
CommandLong.PAYLOAD_LENGTH = 33;
CommandLong.MAGIC_NUMBER = 152;
CommandLong.FIELDS = [
    new mavlink_1.MavLinkPacketField('param1', 'param1', 0, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('param2', 'param2', 4, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('param3', 'param3', 8, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('param4', 'param4', 12, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('param5', 'param5', 16, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('param6', 'param6', 20, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('param7', 'param7', 24, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('command', 'command', 28, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 30, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 31, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('confirmation', 'confirmation', 32, false, 1, 'uint8_t', ''),
];
/**
 * Report status of a command. Includes feedback whether the command was executed. The command
 * microservice is documented at https://mavlink.io/en/services/command.html
 */
class CommandAck extends mavlink_1.MavLinkData {
}
exports.CommandAck = CommandAck;
CommandAck.MSG_ID = 77;
CommandAck.MSG_NAME = 'COMMAND_ACK';
CommandAck.PAYLOAD_LENGTH = 3;
CommandAck.MAGIC_NUMBER = 143;
CommandAck.FIELDS = [
    new mavlink_1.MavLinkPacketField('command', 'command', 0, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('result', 'result', 2, false, 1, 'uint8_t', ''),
];
/**
 * Setpoint in roll, pitch, yaw and thrust from the operator
 */
class ManualSetpoint extends mavlink_1.MavLinkData {
}
exports.ManualSetpoint = ManualSetpoint;
ManualSetpoint.MSG_ID = 81;
ManualSetpoint.MSG_NAME = 'MANUAL_SETPOINT';
ManualSetpoint.PAYLOAD_LENGTH = 22;
ManualSetpoint.MAGIC_NUMBER = 106;
ManualSetpoint.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_boot_ms', 'timeBootMs', 0, false, 4, 'uint32_t', 'ms'),
    new mavlink_1.MavLinkPacketField('roll', 'roll', 4, false, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('pitch', 'pitch', 8, false, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('yaw', 'yaw', 12, false, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('thrust', 'thrust', 16, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('mode_switch', 'modeSwitch', 20, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('manual_override_switch', 'manualOverrideSwitch', 21, false, 1, 'uint8_t', ''),
];
/**
 * Sets a desired vehicle attitude. Used by an external controller to command the vehicle (manual
 * controller or other system).
 */
class SetAttitudeTarget extends mavlink_1.MavLinkData {
}
exports.SetAttitudeTarget = SetAttitudeTarget;
SetAttitudeTarget.MSG_ID = 82;
SetAttitudeTarget.MSG_NAME = 'SET_ATTITUDE_TARGET';
SetAttitudeTarget.PAYLOAD_LENGTH = 39;
SetAttitudeTarget.MAGIC_NUMBER = 49;
SetAttitudeTarget.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_boot_ms', 'timeBootMs', 0, false, 4, 'uint32_t', 'ms'),
    new mavlink_1.MavLinkPacketField('q', 'q', 4, false, 4, 'float[]', '', 4),
    new mavlink_1.MavLinkPacketField('body_roll_rate', 'bodyRollRate', 20, false, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('body_pitch_rate', 'bodyPitchRate', 24, false, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('body_yaw_rate', 'bodyYawRate', 28, false, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('thrust', 'thrust', 32, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 36, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 37, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('type_mask', 'typeMask', 38, false, 1, 'uint8_t', ''),
];
/**
 * Reports the current commanded attitude of the vehicle as specified by the autopilot. This should
 * match the commands sent in a SET_ATTITUDE_TARGET message if the vehicle is being controlled this
 * way.
 */
class AttitudeTarget extends mavlink_1.MavLinkData {
}
exports.AttitudeTarget = AttitudeTarget;
AttitudeTarget.MSG_ID = 83;
AttitudeTarget.MSG_NAME = 'ATTITUDE_TARGET';
AttitudeTarget.PAYLOAD_LENGTH = 37;
AttitudeTarget.MAGIC_NUMBER = 22;
AttitudeTarget.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_boot_ms', 'timeBootMs', 0, false, 4, 'uint32_t', 'ms'),
    new mavlink_1.MavLinkPacketField('q', 'q', 4, false, 4, 'float[]', '', 4),
    new mavlink_1.MavLinkPacketField('body_roll_rate', 'bodyRollRate', 20, false, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('body_pitch_rate', 'bodyPitchRate', 24, false, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('body_yaw_rate', 'bodyYawRate', 28, false, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('thrust', 'thrust', 32, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('type_mask', 'typeMask', 36, false, 1, 'uint8_t', ''),
];
/**
 * Sets a desired vehicle position in a local north-east-down coordinate frame. Used by an external
 * controller to command the vehicle (manual controller or other system).
 */
class SetPositionTargetLocalNed extends mavlink_1.MavLinkData {
}
exports.SetPositionTargetLocalNed = SetPositionTargetLocalNed;
SetPositionTargetLocalNed.MSG_ID = 84;
SetPositionTargetLocalNed.MSG_NAME = 'SET_POSITION_TARGET_LOCAL_NED';
SetPositionTargetLocalNed.PAYLOAD_LENGTH = 53;
SetPositionTargetLocalNed.MAGIC_NUMBER = 143;
SetPositionTargetLocalNed.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_boot_ms', 'timeBootMs', 0, false, 4, 'uint32_t', 'ms'),
    new mavlink_1.MavLinkPacketField('x', 'x', 4, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('y', 'y', 8, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('z', 'z', 12, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('vx', 'vx', 16, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('vy', 'vy', 20, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('vz', 'vz', 24, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('afx', 'afx', 28, false, 4, 'float', 'm/s/s'),
    new mavlink_1.MavLinkPacketField('afy', 'afy', 32, false, 4, 'float', 'm/s/s'),
    new mavlink_1.MavLinkPacketField('afz', 'afz', 36, false, 4, 'float', 'm/s/s'),
    new mavlink_1.MavLinkPacketField('yaw', 'yaw', 40, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('yaw_rate', 'yawRate', 44, false, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('type_mask', 'typeMask', 48, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 50, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 51, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('coordinate_frame', 'coordinateFrame', 52, false, 1, 'uint8_t', ''),
];
/**
 * Reports the current commanded vehicle position, velocity, and acceleration as specified by the
 * autopilot. This should match the commands sent in SET_POSITION_TARGET_LOCAL_NED if the vehicle is
 * being controlled this way.
 */
class PositionTargetLocalNed extends mavlink_1.MavLinkData {
}
exports.PositionTargetLocalNed = PositionTargetLocalNed;
PositionTargetLocalNed.MSG_ID = 85;
PositionTargetLocalNed.MSG_NAME = 'POSITION_TARGET_LOCAL_NED';
PositionTargetLocalNed.PAYLOAD_LENGTH = 51;
PositionTargetLocalNed.MAGIC_NUMBER = 140;
PositionTargetLocalNed.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_boot_ms', 'timeBootMs', 0, false, 4, 'uint32_t', 'ms'),
    new mavlink_1.MavLinkPacketField('x', 'x', 4, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('y', 'y', 8, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('z', 'z', 12, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('vx', 'vx', 16, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('vy', 'vy', 20, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('vz', 'vz', 24, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('afx', 'afx', 28, false, 4, 'float', 'm/s/s'),
    new mavlink_1.MavLinkPacketField('afy', 'afy', 32, false, 4, 'float', 'm/s/s'),
    new mavlink_1.MavLinkPacketField('afz', 'afz', 36, false, 4, 'float', 'm/s/s'),
    new mavlink_1.MavLinkPacketField('yaw', 'yaw', 40, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('yaw_rate', 'yawRate', 44, false, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('type_mask', 'typeMask', 48, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('coordinate_frame', 'coordinateFrame', 50, false, 1, 'uint8_t', ''),
];
/**
 * Sets a desired vehicle position, velocity, and/or acceleration in a global coordinate system
 * (WGS84). Used by an external controller to command the vehicle (manual controller or other system).
 */
class SetPositionTargetGlobalInt extends mavlink_1.MavLinkData {
}
exports.SetPositionTargetGlobalInt = SetPositionTargetGlobalInt;
SetPositionTargetGlobalInt.MSG_ID = 86;
SetPositionTargetGlobalInt.MSG_NAME = 'SET_POSITION_TARGET_GLOBAL_INT';
SetPositionTargetGlobalInt.PAYLOAD_LENGTH = 53;
SetPositionTargetGlobalInt.MAGIC_NUMBER = 5;
SetPositionTargetGlobalInt.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_boot_ms', 'timeBootMs', 0, false, 4, 'uint32_t', 'ms'),
    new mavlink_1.MavLinkPacketField('lat_int', 'latInt', 4, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('lon_int', 'lonInt', 8, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('alt', 'alt', 12, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('vx', 'vx', 16, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('vy', 'vy', 20, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('vz', 'vz', 24, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('afx', 'afx', 28, false, 4, 'float', 'm/s/s'),
    new mavlink_1.MavLinkPacketField('afy', 'afy', 32, false, 4, 'float', 'm/s/s'),
    new mavlink_1.MavLinkPacketField('afz', 'afz', 36, false, 4, 'float', 'm/s/s'),
    new mavlink_1.MavLinkPacketField('yaw', 'yaw', 40, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('yaw_rate', 'yawRate', 44, false, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('type_mask', 'typeMask', 48, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 50, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 51, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('coordinate_frame', 'coordinateFrame', 52, false, 1, 'uint8_t', ''),
];
/**
 * Reports the current commanded vehicle position, velocity, and acceleration as specified by the
 * autopilot. This should match the commands sent in SET_POSITION_TARGET_GLOBAL_INT if the vehicle is
 * being controlled this way.
 */
class PositionTargetGlobalInt extends mavlink_1.MavLinkData {
}
exports.PositionTargetGlobalInt = PositionTargetGlobalInt;
PositionTargetGlobalInt.MSG_ID = 87;
PositionTargetGlobalInt.MSG_NAME = 'POSITION_TARGET_GLOBAL_INT';
PositionTargetGlobalInt.PAYLOAD_LENGTH = 51;
PositionTargetGlobalInt.MAGIC_NUMBER = 150;
PositionTargetGlobalInt.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_boot_ms', 'timeBootMs', 0, false, 4, 'uint32_t', 'ms'),
    new mavlink_1.MavLinkPacketField('lat_int', 'latInt', 4, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('lon_int', 'lonInt', 8, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('alt', 'alt', 12, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('vx', 'vx', 16, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('vy', 'vy', 20, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('vz', 'vz', 24, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('afx', 'afx', 28, false, 4, 'float', 'm/s/s'),
    new mavlink_1.MavLinkPacketField('afy', 'afy', 32, false, 4, 'float', 'm/s/s'),
    new mavlink_1.MavLinkPacketField('afz', 'afz', 36, false, 4, 'float', 'm/s/s'),
    new mavlink_1.MavLinkPacketField('yaw', 'yaw', 40, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('yaw_rate', 'yawRate', 44, false, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('type_mask', 'typeMask', 48, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('coordinate_frame', 'coordinateFrame', 50, false, 1, 'uint8_t', ''),
];
/**
 * The offset in X, Y, Z and yaw between the LOCAL_POSITION_NED messages of MAV X and the global
 * coordinate frame in NED coordinates. Coordinate frame is right-handed, Z-axis down (aeronautical
 * frame, NED / north-east-down convention)
 */
class LocalPositionNedSystemGlobalOffset extends mavlink_1.MavLinkData {
}
exports.LocalPositionNedSystemGlobalOffset = LocalPositionNedSystemGlobalOffset;
LocalPositionNedSystemGlobalOffset.MSG_ID = 89;
LocalPositionNedSystemGlobalOffset.MSG_NAME = 'LOCAL_POSITION_NED_SYSTEM_GLOBAL_OFFSET';
LocalPositionNedSystemGlobalOffset.PAYLOAD_LENGTH = 28;
LocalPositionNedSystemGlobalOffset.MAGIC_NUMBER = 231;
LocalPositionNedSystemGlobalOffset.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_boot_ms', 'timeBootMs', 0, false, 4, 'uint32_t', 'ms'),
    new mavlink_1.MavLinkPacketField('x', 'x', 4, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('y', 'y', 8, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('z', 'z', 12, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('roll', 'roll', 16, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('pitch', 'pitch', 20, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('yaw', 'yaw', 24, false, 4, 'float', 'rad'),
];
/**
 * Sent from simulation to autopilot. This packet is useful for high throughput applications such as
 * hardware in the loop simulations.
 *
 * @deprecated since 2013-07, replaced by HIL_STATE_QUATERNION; Suffers from missing airspeed fields and singularities due to Euler angles
 */
class HilState extends mavlink_1.MavLinkData {
}
exports.HilState = HilState;
HilState.MSG_ID = 90;
HilState.MSG_NAME = 'HIL_STATE';
HilState.PAYLOAD_LENGTH = 56;
HilState.MAGIC_NUMBER = 183;
HilState.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_usec', 'timeUsec', 0, false, 8, 'uint64_t', 'us'),
    new mavlink_1.MavLinkPacketField('roll', 'roll', 8, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('pitch', 'pitch', 12, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('yaw', 'yaw', 16, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('rollspeed', 'rollspeed', 20, false, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('pitchspeed', 'pitchspeed', 24, false, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('yawspeed', 'yawspeed', 28, false, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('lat', 'lat', 32, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('lon', 'lon', 36, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('alt', 'alt', 40, false, 4, 'int32_t', 'mm'),
    new mavlink_1.MavLinkPacketField('vx', 'vx', 44, false, 2, 'int16_t', 'cm/s'),
    new mavlink_1.MavLinkPacketField('vy', 'vy', 46, false, 2, 'int16_t', 'cm/s'),
    new mavlink_1.MavLinkPacketField('vz', 'vz', 48, false, 2, 'int16_t', 'cm/s'),
    new mavlink_1.MavLinkPacketField('xacc', 'xacc', 50, false, 2, 'int16_t', 'mG'),
    new mavlink_1.MavLinkPacketField('yacc', 'yacc', 52, false, 2, 'int16_t', 'mG'),
    new mavlink_1.MavLinkPacketField('zacc', 'zacc', 54, false, 2, 'int16_t', 'mG'),
];
/**
 * Sent from autopilot to simulation. Hardware in the loop control outputs
 */
class HilControls extends mavlink_1.MavLinkData {
}
exports.HilControls = HilControls;
HilControls.MSG_ID = 91;
HilControls.MSG_NAME = 'HIL_CONTROLS';
HilControls.PAYLOAD_LENGTH = 42;
HilControls.MAGIC_NUMBER = 63;
HilControls.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_usec', 'timeUsec', 0, false, 8, 'uint64_t', 'us'),
    new mavlink_1.MavLinkPacketField('roll_ailerons', 'rollAilerons', 8, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('pitch_elevator', 'pitchElevator', 12, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('yaw_rudder', 'yawRudder', 16, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('throttle', 'throttle', 20, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('aux1', 'aux1', 24, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('aux2', 'aux2', 28, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('aux3', 'aux3', 32, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('aux4', 'aux4', 36, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('mode', 'mode', 40, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('nav_mode', 'navMode', 41, false, 1, 'uint8_t', ''),
];
/**
 * Sent from simulation to autopilot. The RAW values of the RC channels received. The standard PPM
 * modulation is as follows: 1000 microseconds: 0%, 2000 microseconds: 100%. Individual
 * receivers/transmitters might violate this specification.
 */
class HilRcInputsRaw extends mavlink_1.MavLinkData {
}
exports.HilRcInputsRaw = HilRcInputsRaw;
HilRcInputsRaw.MSG_ID = 92;
HilRcInputsRaw.MSG_NAME = 'HIL_RC_INPUTS_RAW';
HilRcInputsRaw.PAYLOAD_LENGTH = 33;
HilRcInputsRaw.MAGIC_NUMBER = 54;
HilRcInputsRaw.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_usec', 'timeUsec', 0, false, 8, 'uint64_t', 'us'),
    new mavlink_1.MavLinkPacketField('chan1_raw', 'chan1Raw', 8, false, 2, 'uint16_t', 'us'),
    new mavlink_1.MavLinkPacketField('chan2_raw', 'chan2Raw', 10, false, 2, 'uint16_t', 'us'),
    new mavlink_1.MavLinkPacketField('chan3_raw', 'chan3Raw', 12, false, 2, 'uint16_t', 'us'),
    new mavlink_1.MavLinkPacketField('chan4_raw', 'chan4Raw', 14, false, 2, 'uint16_t', 'us'),
    new mavlink_1.MavLinkPacketField('chan5_raw', 'chan5Raw', 16, false, 2, 'uint16_t', 'us'),
    new mavlink_1.MavLinkPacketField('chan6_raw', 'chan6Raw', 18, false, 2, 'uint16_t', 'us'),
    new mavlink_1.MavLinkPacketField('chan7_raw', 'chan7Raw', 20, false, 2, 'uint16_t', 'us'),
    new mavlink_1.MavLinkPacketField('chan8_raw', 'chan8Raw', 22, false, 2, 'uint16_t', 'us'),
    new mavlink_1.MavLinkPacketField('chan9_raw', 'chan9Raw', 24, false, 2, 'uint16_t', 'us'),
    new mavlink_1.MavLinkPacketField('chan10_raw', 'chan10Raw', 26, false, 2, 'uint16_t', 'us'),
    new mavlink_1.MavLinkPacketField('chan11_raw', 'chan11Raw', 28, false, 2, 'uint16_t', 'us'),
    new mavlink_1.MavLinkPacketField('chan12_raw', 'chan12Raw', 30, false, 2, 'uint16_t', 'us'),
    new mavlink_1.MavLinkPacketField('rssi', 'rssi', 32, false, 1, 'uint8_t', ''),
];
/**
 * Sent from autopilot to simulation. Hardware in the loop control outputs (replacement for
 * HIL_CONTROLS)
 */
class HilActuatorControls extends mavlink_1.MavLinkData {
}
exports.HilActuatorControls = HilActuatorControls;
HilActuatorControls.MSG_ID = 93;
HilActuatorControls.MSG_NAME = 'HIL_ACTUATOR_CONTROLS';
HilActuatorControls.PAYLOAD_LENGTH = 81;
HilActuatorControls.MAGIC_NUMBER = 47;
HilActuatorControls.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_usec', 'timeUsec', 0, false, 8, 'uint64_t', 'us'),
    new mavlink_1.MavLinkPacketField('flags', 'flags', 8, false, 8, 'uint64_t', ''),
    new mavlink_1.MavLinkPacketField('controls', 'controls', 16, false, 4, 'float[]', '', 16),
    new mavlink_1.MavLinkPacketField('mode', 'mode', 80, false, 1, 'uint8_t', ''),
];
/**
 * Optical flow from a flow sensor (e.g. optical mouse sensor)
 */
class OpticalFlow extends mavlink_1.MavLinkData {
}
exports.OpticalFlow = OpticalFlow;
OpticalFlow.MSG_ID = 100;
OpticalFlow.MSG_NAME = 'OPTICAL_FLOW';
OpticalFlow.PAYLOAD_LENGTH = 34;
OpticalFlow.MAGIC_NUMBER = 175;
OpticalFlow.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_usec', 'timeUsec', 0, false, 8, 'uint64_t', 'us'),
    new mavlink_1.MavLinkPacketField('flow_comp_m_x', 'flowCompMX', 8, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('flow_comp_m_y', 'flowCompMY', 12, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('ground_distance', 'groundDistance', 16, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('flow_x', 'flowX', 20, false, 2, 'int16_t', 'dpix'),
    new mavlink_1.MavLinkPacketField('flow_y', 'flowY', 22, false, 2, 'int16_t', 'dpix'),
    new mavlink_1.MavLinkPacketField('sensor_id', 'sensorId', 24, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('quality', 'quality', 25, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('flow_rate_x', 'flowRateX', 26, true, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('flow_rate_y', 'flowRateY', 30, true, 4, 'float', 'rad/s'),
];
/**
 * Global position/attitude estimate from a vision source.
 */
class GlobalVisionPositionEstimate extends mavlink_1.MavLinkData {
}
exports.GlobalVisionPositionEstimate = GlobalVisionPositionEstimate;
GlobalVisionPositionEstimate.MSG_ID = 101;
GlobalVisionPositionEstimate.MSG_NAME = 'GLOBAL_VISION_POSITION_ESTIMATE';
GlobalVisionPositionEstimate.PAYLOAD_LENGTH = 117;
GlobalVisionPositionEstimate.MAGIC_NUMBER = 102;
GlobalVisionPositionEstimate.FIELDS = [
    new mavlink_1.MavLinkPacketField('usec', 'usec', 0, false, 8, 'uint64_t', 'us'),
    new mavlink_1.MavLinkPacketField('x', 'x', 8, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('y', 'y', 12, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('z', 'z', 16, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('roll', 'roll', 20, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('pitch', 'pitch', 24, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('yaw', 'yaw', 28, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('covariance', 'covariance', 32, true, 4, 'float[]', '', 21),
    new mavlink_1.MavLinkPacketField('reset_counter', 'resetCounter', 116, true, 1, 'uint8_t', ''),
];
/**
 * Local position/attitude estimate from a vision source.
 */
class VisionPositionEstimate extends mavlink_1.MavLinkData {
}
exports.VisionPositionEstimate = VisionPositionEstimate;
VisionPositionEstimate.MSG_ID = 102;
VisionPositionEstimate.MSG_NAME = 'VISION_POSITION_ESTIMATE';
VisionPositionEstimate.PAYLOAD_LENGTH = 117;
VisionPositionEstimate.MAGIC_NUMBER = 158;
VisionPositionEstimate.FIELDS = [
    new mavlink_1.MavLinkPacketField('usec', 'usec', 0, false, 8, 'uint64_t', 'us'),
    new mavlink_1.MavLinkPacketField('x', 'x', 8, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('y', 'y', 12, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('z', 'z', 16, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('roll', 'roll', 20, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('pitch', 'pitch', 24, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('yaw', 'yaw', 28, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('covariance', 'covariance', 32, true, 4, 'float[]', '', 21),
    new mavlink_1.MavLinkPacketField('reset_counter', 'resetCounter', 116, true, 1, 'uint8_t', ''),
];
/**
 * Speed estimate from a vision source.
 */
class VisionSpeedEstimate extends mavlink_1.MavLinkData {
}
exports.VisionSpeedEstimate = VisionSpeedEstimate;
VisionSpeedEstimate.MSG_ID = 103;
VisionSpeedEstimate.MSG_NAME = 'VISION_SPEED_ESTIMATE';
VisionSpeedEstimate.PAYLOAD_LENGTH = 57;
VisionSpeedEstimate.MAGIC_NUMBER = 208;
VisionSpeedEstimate.FIELDS = [
    new mavlink_1.MavLinkPacketField('usec', 'usec', 0, false, 8, 'uint64_t', 'us'),
    new mavlink_1.MavLinkPacketField('x', 'x', 8, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('y', 'y', 12, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('z', 'z', 16, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('covariance', 'covariance', 20, true, 4, 'float[]', '', 9),
    new mavlink_1.MavLinkPacketField('reset_counter', 'resetCounter', 56, true, 1, 'uint8_t', ''),
];
/**
 * Global position estimate from a Vicon motion system source.
 */
class ViconPositionEstimate extends mavlink_1.MavLinkData {
}
exports.ViconPositionEstimate = ViconPositionEstimate;
ViconPositionEstimate.MSG_ID = 104;
ViconPositionEstimate.MSG_NAME = 'VICON_POSITION_ESTIMATE';
ViconPositionEstimate.PAYLOAD_LENGTH = 116;
ViconPositionEstimate.MAGIC_NUMBER = 56;
ViconPositionEstimate.FIELDS = [
    new mavlink_1.MavLinkPacketField('usec', 'usec', 0, false, 8, 'uint64_t', 'us'),
    new mavlink_1.MavLinkPacketField('x', 'x', 8, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('y', 'y', 12, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('z', 'z', 16, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('roll', 'roll', 20, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('pitch', 'pitch', 24, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('yaw', 'yaw', 28, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('covariance', 'covariance', 32, true, 4, 'float[]', '', 21),
];
/**
 * The IMU readings in SI units in NED body frame
 */
class HighresImu extends mavlink_1.MavLinkData {
}
exports.HighresImu = HighresImu;
HighresImu.MSG_ID = 105;
HighresImu.MSG_NAME = 'HIGHRES_IMU';
HighresImu.PAYLOAD_LENGTH = 63;
HighresImu.MAGIC_NUMBER = 93;
HighresImu.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_usec', 'timeUsec', 0, false, 8, 'uint64_t', 'us'),
    new mavlink_1.MavLinkPacketField('xacc', 'xacc', 8, false, 4, 'float', 'm/s/s'),
    new mavlink_1.MavLinkPacketField('yacc', 'yacc', 12, false, 4, 'float', 'm/s/s'),
    new mavlink_1.MavLinkPacketField('zacc', 'zacc', 16, false, 4, 'float', 'm/s/s'),
    new mavlink_1.MavLinkPacketField('xgyro', 'xgyro', 20, false, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('ygyro', 'ygyro', 24, false, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('zgyro', 'zgyro', 28, false, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('xmag', 'xmag', 32, false, 4, 'float', 'gauss'),
    new mavlink_1.MavLinkPacketField('ymag', 'ymag', 36, false, 4, 'float', 'gauss'),
    new mavlink_1.MavLinkPacketField('zmag', 'zmag', 40, false, 4, 'float', 'gauss'),
    new mavlink_1.MavLinkPacketField('abs_pressure', 'absPressure', 44, false, 4, 'float', 'hPa'),
    new mavlink_1.MavLinkPacketField('diff_pressure', 'diffPressure', 48, false, 4, 'float', 'hPa'),
    new mavlink_1.MavLinkPacketField('pressure_alt', 'pressureAlt', 52, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('temperature', 'temperature', 56, false, 4, 'float', 'degC'),
    new mavlink_1.MavLinkPacketField('fields_updated', 'fieldsUpdated', 60, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('id', 'id', 62, true, 1, 'uint8_t', ''),
];
/**
 * Optical flow from an angular rate flow sensor (e.g. PX4FLOW or mouse sensor)
 */
class OpticalFlowRad extends mavlink_1.MavLinkData {
}
exports.OpticalFlowRad = OpticalFlowRad;
OpticalFlowRad.MSG_ID = 106;
OpticalFlowRad.MSG_NAME = 'OPTICAL_FLOW_RAD';
OpticalFlowRad.PAYLOAD_LENGTH = 44;
OpticalFlowRad.MAGIC_NUMBER = 138;
OpticalFlowRad.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_usec', 'timeUsec', 0, false, 8, 'uint64_t', 'us'),
    new mavlink_1.MavLinkPacketField('integration_time_us', 'integrationTimeUs', 8, false, 4, 'uint32_t', 'us'),
    new mavlink_1.MavLinkPacketField('integrated_x', 'integratedX', 12, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('integrated_y', 'integratedY', 16, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('integrated_xgyro', 'integratedXgyro', 20, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('integrated_ygyro', 'integratedYgyro', 24, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('integrated_zgyro', 'integratedZgyro', 28, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('time_delta_distance_us', 'timeDeltaDistanceUs', 32, false, 4, 'uint32_t', 'us'),
    new mavlink_1.MavLinkPacketField('distance', 'distance', 36, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('temperature', 'temperature', 40, false, 2, 'int16_t', 'cdegC'),
    new mavlink_1.MavLinkPacketField('sensor_id', 'sensorId', 42, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('quality', 'quality', 43, false, 1, 'uint8_t', ''),
];
/**
 * The IMU readings in SI units in NED body frame
 */
class HilSensor extends mavlink_1.MavLinkData {
}
exports.HilSensor = HilSensor;
HilSensor.MSG_ID = 107;
HilSensor.MSG_NAME = 'HIL_SENSOR';
HilSensor.PAYLOAD_LENGTH = 65;
HilSensor.MAGIC_NUMBER = 108;
HilSensor.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_usec', 'timeUsec', 0, false, 8, 'uint64_t', 'us'),
    new mavlink_1.MavLinkPacketField('xacc', 'xacc', 8, false, 4, 'float', 'm/s/s'),
    new mavlink_1.MavLinkPacketField('yacc', 'yacc', 12, false, 4, 'float', 'm/s/s'),
    new mavlink_1.MavLinkPacketField('zacc', 'zacc', 16, false, 4, 'float', 'm/s/s'),
    new mavlink_1.MavLinkPacketField('xgyro', 'xgyro', 20, false, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('ygyro', 'ygyro', 24, false, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('zgyro', 'zgyro', 28, false, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('xmag', 'xmag', 32, false, 4, 'float', 'gauss'),
    new mavlink_1.MavLinkPacketField('ymag', 'ymag', 36, false, 4, 'float', 'gauss'),
    new mavlink_1.MavLinkPacketField('zmag', 'zmag', 40, false, 4, 'float', 'gauss'),
    new mavlink_1.MavLinkPacketField('abs_pressure', 'absPressure', 44, false, 4, 'float', 'hPa'),
    new mavlink_1.MavLinkPacketField('diff_pressure', 'diffPressure', 48, false, 4, 'float', 'hPa'),
    new mavlink_1.MavLinkPacketField('pressure_alt', 'pressureAlt', 52, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('temperature', 'temperature', 56, false, 4, 'float', 'degC'),
    new mavlink_1.MavLinkPacketField('fields_updated', 'fieldsUpdated', 60, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('id', 'id', 64, true, 1, 'uint8_t', ''),
];
/**
 * Status of simulation environment, if used
 */
class SimState extends mavlink_1.MavLinkData {
}
exports.SimState = SimState;
SimState.MSG_ID = 108;
SimState.MSG_NAME = 'SIM_STATE';
SimState.PAYLOAD_LENGTH = 84;
SimState.MAGIC_NUMBER = 32;
SimState.FIELDS = [
    new mavlink_1.MavLinkPacketField('q1', 'q1', 0, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('q2', 'q2', 4, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('q3', 'q3', 8, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('q4', 'q4', 12, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('roll', 'roll', 16, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('pitch', 'pitch', 20, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('yaw', 'yaw', 24, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('xacc', 'xacc', 28, false, 4, 'float', 'm/s/s'),
    new mavlink_1.MavLinkPacketField('yacc', 'yacc', 32, false, 4, 'float', 'm/s/s'),
    new mavlink_1.MavLinkPacketField('zacc', 'zacc', 36, false, 4, 'float', 'm/s/s'),
    new mavlink_1.MavLinkPacketField('xgyro', 'xgyro', 40, false, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('ygyro', 'ygyro', 44, false, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('zgyro', 'zgyro', 48, false, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('lat', 'lat', 52, false, 4, 'float', 'deg'),
    new mavlink_1.MavLinkPacketField('lon', 'lon', 56, false, 4, 'float', 'deg'),
    new mavlink_1.MavLinkPacketField('alt', 'alt', 60, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('std_dev_horz', 'stdDevHorz', 64, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('std_dev_vert', 'stdDevVert', 68, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('vn', 'vn', 72, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('ve', 've', 76, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('vd', 'vd', 80, false, 4, 'float', 'm/s'),
];
/**
 * Status generated by radio and injected into MAVLink stream.
 */
class RadioStatus extends mavlink_1.MavLinkData {
}
exports.RadioStatus = RadioStatus;
RadioStatus.MSG_ID = 109;
RadioStatus.MSG_NAME = 'RADIO_STATUS';
RadioStatus.PAYLOAD_LENGTH = 9;
RadioStatus.MAGIC_NUMBER = 185;
RadioStatus.FIELDS = [
    new mavlink_1.MavLinkPacketField('rxerrors', 'rxerrors', 0, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('fixed', 'fixed', 2, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('rssi', 'rssi', 4, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('remrssi', 'remrssi', 5, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('txbuf', 'txbuf', 6, false, 1, 'uint8_t', '%'),
    new mavlink_1.MavLinkPacketField('noise', 'noise', 7, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('remnoise', 'remnoise', 8, false, 1, 'uint8_t', ''),
];
/**
 * File transfer message
 */
class FileTransferProtocol extends mavlink_1.MavLinkData {
}
exports.FileTransferProtocol = FileTransferProtocol;
FileTransferProtocol.MSG_ID = 110;
FileTransferProtocol.MSG_NAME = 'FILE_TRANSFER_PROTOCOL';
FileTransferProtocol.PAYLOAD_LENGTH = 254;
FileTransferProtocol.MAGIC_NUMBER = 84;
FileTransferProtocol.FIELDS = [
    new mavlink_1.MavLinkPacketField('target_network', 'targetNetwork', 0, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 1, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 2, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('payload', 'payload', 3, false, 1, 'uint8_t[]', '', 251),
];
/**
 * Time synchronization message.
 */
class TimeSync extends mavlink_1.MavLinkData {
}
exports.TimeSync = TimeSync;
TimeSync.MSG_ID = 111;
TimeSync.MSG_NAME = 'TIMESYNC';
TimeSync.PAYLOAD_LENGTH = 16;
TimeSync.MAGIC_NUMBER = 34;
TimeSync.FIELDS = [
    new mavlink_1.MavLinkPacketField('tc1', 'tc1', 0, false, 8, 'int64_t', ''),
    new mavlink_1.MavLinkPacketField('ts1', 'ts1', 8, false, 8, 'int64_t', ''),
];
/**
 * Camera-IMU triggering and synchronisation message.
 */
class CameraTrigger extends mavlink_1.MavLinkData {
}
exports.CameraTrigger = CameraTrigger;
CameraTrigger.MSG_ID = 112;
CameraTrigger.MSG_NAME = 'CAMERA_TRIGGER';
CameraTrigger.PAYLOAD_LENGTH = 12;
CameraTrigger.MAGIC_NUMBER = 174;
CameraTrigger.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_usec', 'timeUsec', 0, false, 8, 'uint64_t', 'us'),
    new mavlink_1.MavLinkPacketField('seq', 'seq', 8, false, 4, 'uint32_t', ''),
];
/**
 * The global position, as returned by the Global Positioning System (GPS). This is NOT the global
 * position estimate of the sytem, but rather a RAW sensor value. See message GLOBAL_POSITION for the
 * global position estimate.
 */
class HilGps extends mavlink_1.MavLinkData {
}
exports.HilGps = HilGps;
HilGps.MSG_ID = 113;
HilGps.MSG_NAME = 'HIL_GPS';
HilGps.PAYLOAD_LENGTH = 39;
HilGps.MAGIC_NUMBER = 124;
HilGps.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_usec', 'timeUsec', 0, false, 8, 'uint64_t', 'us'),
    new mavlink_1.MavLinkPacketField('lat', 'lat', 8, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('lon', 'lon', 12, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('alt', 'alt', 16, false, 4, 'int32_t', 'mm'),
    new mavlink_1.MavLinkPacketField('eph', 'eph', 20, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('epv', 'epv', 22, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('vel', 'vel', 24, false, 2, 'uint16_t', 'cm/s'),
    new mavlink_1.MavLinkPacketField('vn', 'vn', 26, false, 2, 'int16_t', 'cm/s'),
    new mavlink_1.MavLinkPacketField('ve', 've', 28, false, 2, 'int16_t', 'cm/s'),
    new mavlink_1.MavLinkPacketField('vd', 'vd', 30, false, 2, 'int16_t', 'cm/s'),
    new mavlink_1.MavLinkPacketField('cog', 'cog', 32, false, 2, 'uint16_t', 'cdeg'),
    new mavlink_1.MavLinkPacketField('fix_type', 'fixType', 34, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('satellites_visible', 'satellitesVisible', 35, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('id', 'id', 36, true, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('yaw', 'yaw', 37, true, 2, 'uint16_t', 'cdeg'),
];
/**
 * Simulated optical flow from a flow sensor (e.g. PX4FLOW or optical mouse sensor)
 */
class HilOpticalFlow extends mavlink_1.MavLinkData {
}
exports.HilOpticalFlow = HilOpticalFlow;
HilOpticalFlow.MSG_ID = 114;
HilOpticalFlow.MSG_NAME = 'HIL_OPTICAL_FLOW';
HilOpticalFlow.PAYLOAD_LENGTH = 44;
HilOpticalFlow.MAGIC_NUMBER = 237;
HilOpticalFlow.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_usec', 'timeUsec', 0, false, 8, 'uint64_t', 'us'),
    new mavlink_1.MavLinkPacketField('integration_time_us', 'integrationTimeUs', 8, false, 4, 'uint32_t', 'us'),
    new mavlink_1.MavLinkPacketField('integrated_x', 'integratedX', 12, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('integrated_y', 'integratedY', 16, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('integrated_xgyro', 'integratedXgyro', 20, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('integrated_ygyro', 'integratedYgyro', 24, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('integrated_zgyro', 'integratedZgyro', 28, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('time_delta_distance_us', 'timeDeltaDistanceUs', 32, false, 4, 'uint32_t', 'us'),
    new mavlink_1.MavLinkPacketField('distance', 'distance', 36, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('temperature', 'temperature', 40, false, 2, 'int16_t', 'cdegC'),
    new mavlink_1.MavLinkPacketField('sensor_id', 'sensorId', 42, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('quality', 'quality', 43, false, 1, 'uint8_t', ''),
];
/**
 * Sent from simulation to autopilot, avoids in contrast to HIL_STATE singularities. This packet is
 * useful for high throughput applications such as hardware in the loop simulations.
 */
class HilStateQuaternion extends mavlink_1.MavLinkData {
}
exports.HilStateQuaternion = HilStateQuaternion;
HilStateQuaternion.MSG_ID = 115;
HilStateQuaternion.MSG_NAME = 'HIL_STATE_QUATERNION';
HilStateQuaternion.PAYLOAD_LENGTH = 64;
HilStateQuaternion.MAGIC_NUMBER = 4;
HilStateQuaternion.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_usec', 'timeUsec', 0, false, 8, 'uint64_t', 'us'),
    new mavlink_1.MavLinkPacketField('attitude_quaternion', 'attitudeQuaternion', 8, false, 4, 'float[]', '', 4),
    new mavlink_1.MavLinkPacketField('rollspeed', 'rollspeed', 24, false, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('pitchspeed', 'pitchspeed', 28, false, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('yawspeed', 'yawspeed', 32, false, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('lat', 'lat', 36, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('lon', 'lon', 40, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('alt', 'alt', 44, false, 4, 'int32_t', 'mm'),
    new mavlink_1.MavLinkPacketField('vx', 'vx', 48, false, 2, 'int16_t', 'cm/s'),
    new mavlink_1.MavLinkPacketField('vy', 'vy', 50, false, 2, 'int16_t', 'cm/s'),
    new mavlink_1.MavLinkPacketField('vz', 'vz', 52, false, 2, 'int16_t', 'cm/s'),
    new mavlink_1.MavLinkPacketField('ind_airspeed', 'indAirspeed', 54, false, 2, 'uint16_t', 'cm/s'),
    new mavlink_1.MavLinkPacketField('true_airspeed', 'trueAirspeed', 56, false, 2, 'uint16_t', 'cm/s'),
    new mavlink_1.MavLinkPacketField('xacc', 'xacc', 58, false, 2, 'int16_t', 'mG'),
    new mavlink_1.MavLinkPacketField('yacc', 'yacc', 60, false, 2, 'int16_t', 'mG'),
    new mavlink_1.MavLinkPacketField('zacc', 'zacc', 62, false, 2, 'int16_t', 'mG'),
];
/**
 * The RAW IMU readings for secondary 9DOF sensor setup. This message should contain the scaled values
 * to the described units
 */
class ScaledImu2 extends mavlink_1.MavLinkData {
}
exports.ScaledImu2 = ScaledImu2;
ScaledImu2.MSG_ID = 116;
ScaledImu2.MSG_NAME = 'SCALED_IMU2';
ScaledImu2.PAYLOAD_LENGTH = 24;
ScaledImu2.MAGIC_NUMBER = 76;
ScaledImu2.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_boot_ms', 'timeBootMs', 0, false, 4, 'uint32_t', 'ms'),
    new mavlink_1.MavLinkPacketField('xacc', 'xacc', 4, false, 2, 'int16_t', 'mG'),
    new mavlink_1.MavLinkPacketField('yacc', 'yacc', 6, false, 2, 'int16_t', 'mG'),
    new mavlink_1.MavLinkPacketField('zacc', 'zacc', 8, false, 2, 'int16_t', 'mG'),
    new mavlink_1.MavLinkPacketField('xgyro', 'xgyro', 10, false, 2, 'int16_t', 'mrad/s'),
    new mavlink_1.MavLinkPacketField('ygyro', 'ygyro', 12, false, 2, 'int16_t', 'mrad/s'),
    new mavlink_1.MavLinkPacketField('zgyro', 'zgyro', 14, false, 2, 'int16_t', 'mrad/s'),
    new mavlink_1.MavLinkPacketField('xmag', 'xmag', 16, false, 2, 'int16_t', 'mgauss'),
    new mavlink_1.MavLinkPacketField('ymag', 'ymag', 18, false, 2, 'int16_t', 'mgauss'),
    new mavlink_1.MavLinkPacketField('zmag', 'zmag', 20, false, 2, 'int16_t', 'mgauss'),
    new mavlink_1.MavLinkPacketField('temperature', 'temperature', 22, true, 2, 'int16_t', 'cdegC'),
];
/**
 * Request a list of available logs. On some systems calling this may stop on-board logging until
 * LOG_REQUEST_END is called. If there are no log files available this request shall be answered with
 * one LOG_ENTRY message with id = 0 and num_logs = 0.
 */
class LogRequestList extends mavlink_1.MavLinkData {
}
exports.LogRequestList = LogRequestList;
LogRequestList.MSG_ID = 117;
LogRequestList.MSG_NAME = 'LOG_REQUEST_LIST';
LogRequestList.PAYLOAD_LENGTH = 6;
LogRequestList.MAGIC_NUMBER = 128;
LogRequestList.FIELDS = [
    new mavlink_1.MavLinkPacketField('start', 'start', 0, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('end', 'end', 2, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 4, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 5, false, 1, 'uint8_t', ''),
];
/**
 * Reply to LOG_REQUEST_LIST
 */
class LogEntry extends mavlink_1.MavLinkData {
}
exports.LogEntry = LogEntry;
LogEntry.MSG_ID = 118;
LogEntry.MSG_NAME = 'LOG_ENTRY';
LogEntry.PAYLOAD_LENGTH = 14;
LogEntry.MAGIC_NUMBER = 56;
LogEntry.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_utc', 'timeUtc', 0, false, 4, 'uint32_t', 's'),
    new mavlink_1.MavLinkPacketField('size', 'size', 4, false, 4, 'uint32_t', 'bytes'),
    new mavlink_1.MavLinkPacketField('id', 'id', 8, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('num_logs', 'numLogs', 10, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('last_log_num', 'lastLogNum', 12, false, 2, 'uint16_t', ''),
];
/**
 * Request a chunk of a log
 */
class LogRequestData extends mavlink_1.MavLinkData {
}
exports.LogRequestData = LogRequestData;
LogRequestData.MSG_ID = 119;
LogRequestData.MSG_NAME = 'LOG_REQUEST_DATA';
LogRequestData.PAYLOAD_LENGTH = 12;
LogRequestData.MAGIC_NUMBER = 116;
LogRequestData.FIELDS = [
    new mavlink_1.MavLinkPacketField('ofs', 'ofs', 0, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('count', 'count', 4, false, 4, 'uint32_t', 'bytes'),
    new mavlink_1.MavLinkPacketField('id', 'id', 8, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 10, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 11, false, 1, 'uint8_t', ''),
];
/**
 * Reply to LOG_REQUEST_DATA
 */
class LogData extends mavlink_1.MavLinkData {
}
exports.LogData = LogData;
LogData.MSG_ID = 120;
LogData.MSG_NAME = 'LOG_DATA';
LogData.PAYLOAD_LENGTH = 97;
LogData.MAGIC_NUMBER = 134;
LogData.FIELDS = [
    new mavlink_1.MavLinkPacketField('ofs', 'ofs', 0, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('id', 'id', 4, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('count', 'count', 6, false, 1, 'uint8_t', 'bytes'),
    new mavlink_1.MavLinkPacketField('data', 'data', 7, false, 1, 'uint8_t[]', '', 90),
];
/**
 * Erase all logs
 */
class LogErase extends mavlink_1.MavLinkData {
}
exports.LogErase = LogErase;
LogErase.MSG_ID = 121;
LogErase.MSG_NAME = 'LOG_ERASE';
LogErase.PAYLOAD_LENGTH = 2;
LogErase.MAGIC_NUMBER = 237;
LogErase.FIELDS = [
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 0, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 1, false, 1, 'uint8_t', ''),
];
/**
 * Stop log transfer and resume normal logging
 */
class LogRequestEnd extends mavlink_1.MavLinkData {
}
exports.LogRequestEnd = LogRequestEnd;
LogRequestEnd.MSG_ID = 122;
LogRequestEnd.MSG_NAME = 'LOG_REQUEST_END';
LogRequestEnd.PAYLOAD_LENGTH = 2;
LogRequestEnd.MAGIC_NUMBER = 203;
LogRequestEnd.FIELDS = [
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 0, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 1, false, 1, 'uint8_t', ''),
];
/**
 * Data for injecting into the onboard GPS (used for DGPS)
 */
class GpsInjectData extends mavlink_1.MavLinkData {
}
exports.GpsInjectData = GpsInjectData;
GpsInjectData.MSG_ID = 123;
GpsInjectData.MSG_NAME = 'GPS_INJECT_DATA';
GpsInjectData.PAYLOAD_LENGTH = 113;
GpsInjectData.MAGIC_NUMBER = 250;
GpsInjectData.FIELDS = [
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 0, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 1, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('len', 'len', 2, false, 1, 'uint8_t', 'bytes'),
    new mavlink_1.MavLinkPacketField('data', 'data', 3, false, 1, 'uint8_t[]', '', 110),
];
/**
 * Second GPS data.
 */
class Gps2Raw extends mavlink_1.MavLinkData {
}
exports.Gps2Raw = Gps2Raw;
Gps2Raw.MSG_ID = 124;
Gps2Raw.MSG_NAME = 'GPS2_RAW';
Gps2Raw.PAYLOAD_LENGTH = 57;
Gps2Raw.MAGIC_NUMBER = 87;
Gps2Raw.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_usec', 'timeUsec', 0, false, 8, 'uint64_t', 'us'),
    new mavlink_1.MavLinkPacketField('lat', 'lat', 8, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('lon', 'lon', 12, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('alt', 'alt', 16, false, 4, 'int32_t', 'mm'),
    new mavlink_1.MavLinkPacketField('dgps_age', 'dgpsAge', 20, false, 4, 'uint32_t', 'ms'),
    new mavlink_1.MavLinkPacketField('eph', 'eph', 24, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('epv', 'epv', 26, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('vel', 'vel', 28, false, 2, 'uint16_t', 'cm/s'),
    new mavlink_1.MavLinkPacketField('cog', 'cog', 30, false, 2, 'uint16_t', 'cdeg'),
    new mavlink_1.MavLinkPacketField('fix_type', 'fixType', 32, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('satellites_visible', 'satellitesVisible', 33, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('dgps_numch', 'dgpsNumch', 34, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('yaw', 'yaw', 35, true, 2, 'uint16_t', 'cdeg'),
    new mavlink_1.MavLinkPacketField('alt_ellipsoid', 'altEllipsoid', 37, true, 4, 'int32_t', 'mm'),
    new mavlink_1.MavLinkPacketField('h_acc', 'hAcc', 41, true, 4, 'uint32_t', 'mm'),
    new mavlink_1.MavLinkPacketField('v_acc', 'vAcc', 45, true, 4, 'uint32_t', 'mm'),
    new mavlink_1.MavLinkPacketField('vel_acc', 'velAcc', 49, true, 4, 'uint32_t', 'mm'),
    new mavlink_1.MavLinkPacketField('hdg_acc', 'hdgAcc', 53, true, 4, 'uint32_t', 'degE5'),
];
/**
 * Power supply status
 */
class PowerStatus extends mavlink_1.MavLinkData {
}
exports.PowerStatus = PowerStatus;
PowerStatus.MSG_ID = 125;
PowerStatus.MSG_NAME = 'POWER_STATUS';
PowerStatus.PAYLOAD_LENGTH = 6;
PowerStatus.MAGIC_NUMBER = 203;
PowerStatus.FIELDS = [
    new mavlink_1.MavLinkPacketField('Vcc', 'Vcc', 0, false, 2, 'uint16_t', 'mV'),
    new mavlink_1.MavLinkPacketField('Vservo', 'Vservo', 2, false, 2, 'uint16_t', 'mV'),
    new mavlink_1.MavLinkPacketField('flags', 'flags', 4, false, 2, 'uint16_t', ''),
];
/**
 * Control a serial port. This can be used for raw access to an onboard serial peripheral such as a GPS
 * or telemetry radio. It is designed to make it possible to update the devices firmware via MAVLink
 * messages or change the devices settings. A message with zero bytes can be used to change just the
 * baudrate.
 */
class SerialControl extends mavlink_1.MavLinkData {
}
exports.SerialControl = SerialControl;
SerialControl.MSG_ID = 126;
SerialControl.MSG_NAME = 'SERIAL_CONTROL';
SerialControl.PAYLOAD_LENGTH = 79;
SerialControl.MAGIC_NUMBER = 220;
SerialControl.FIELDS = [
    new mavlink_1.MavLinkPacketField('baudrate', 'baudrate', 0, false, 4, 'uint32_t', 'bits/s'),
    new mavlink_1.MavLinkPacketField('timeout', 'timeout', 4, false, 2, 'uint16_t', 'ms'),
    new mavlink_1.MavLinkPacketField('device', 'device', 6, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('flags', 'flags', 7, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('count', 'count', 8, false, 1, 'uint8_t', 'bytes'),
    new mavlink_1.MavLinkPacketField('data', 'data', 9, false, 1, 'uint8_t[]', '', 70),
];
/**
 * RTK GPS data. Gives information on the relative baseline calculation the GPS is reporting
 */
class GpsRtk extends mavlink_1.MavLinkData {
}
exports.GpsRtk = GpsRtk;
GpsRtk.MSG_ID = 127;
GpsRtk.MSG_NAME = 'GPS_RTK';
GpsRtk.PAYLOAD_LENGTH = 35;
GpsRtk.MAGIC_NUMBER = 25;
GpsRtk.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_last_baseline_ms', 'timeLastBaselineMs', 0, false, 4, 'uint32_t', 'ms'),
    new mavlink_1.MavLinkPacketField('tow', 'tow', 4, false, 4, 'uint32_t', 'ms'),
    new mavlink_1.MavLinkPacketField('baseline_a_mm', 'baselineAMm', 8, false, 4, 'int32_t', 'mm'),
    new mavlink_1.MavLinkPacketField('baseline_b_mm', 'baselineBMm', 12, false, 4, 'int32_t', 'mm'),
    new mavlink_1.MavLinkPacketField('baseline_c_mm', 'baselineCMm', 16, false, 4, 'int32_t', 'mm'),
    new mavlink_1.MavLinkPacketField('accuracy', 'accuracy', 20, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('iar_num_hypotheses', 'iarNumHypotheses', 24, false, 4, 'int32_t', ''),
    new mavlink_1.MavLinkPacketField('wn', 'wn', 28, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('rtk_receiver_id', 'rtkReceiverId', 30, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('rtk_health', 'rtkHealth', 31, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('rtk_rate', 'rtkRate', 32, false, 1, 'uint8_t', 'Hz'),
    new mavlink_1.MavLinkPacketField('nsats', 'nsats', 33, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('baseline_coords_type', 'baselineCoordsType', 34, false, 1, 'uint8_t', ''),
];
/**
 * RTK GPS data. Gives information on the relative baseline calculation the GPS is reporting
 */
class Gps2Rtk extends mavlink_1.MavLinkData {
}
exports.Gps2Rtk = Gps2Rtk;
Gps2Rtk.MSG_ID = 128;
Gps2Rtk.MSG_NAME = 'GPS2_RTK';
Gps2Rtk.PAYLOAD_LENGTH = 35;
Gps2Rtk.MAGIC_NUMBER = 226;
Gps2Rtk.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_last_baseline_ms', 'timeLastBaselineMs', 0, false, 4, 'uint32_t', 'ms'),
    new mavlink_1.MavLinkPacketField('tow', 'tow', 4, false, 4, 'uint32_t', 'ms'),
    new mavlink_1.MavLinkPacketField('baseline_a_mm', 'baselineAMm', 8, false, 4, 'int32_t', 'mm'),
    new mavlink_1.MavLinkPacketField('baseline_b_mm', 'baselineBMm', 12, false, 4, 'int32_t', 'mm'),
    new mavlink_1.MavLinkPacketField('baseline_c_mm', 'baselineCMm', 16, false, 4, 'int32_t', 'mm'),
    new mavlink_1.MavLinkPacketField('accuracy', 'accuracy', 20, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('iar_num_hypotheses', 'iarNumHypotheses', 24, false, 4, 'int32_t', ''),
    new mavlink_1.MavLinkPacketField('wn', 'wn', 28, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('rtk_receiver_id', 'rtkReceiverId', 30, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('rtk_health', 'rtkHealth', 31, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('rtk_rate', 'rtkRate', 32, false, 1, 'uint8_t', 'Hz'),
    new mavlink_1.MavLinkPacketField('nsats', 'nsats', 33, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('baseline_coords_type', 'baselineCoordsType', 34, false, 1, 'uint8_t', ''),
];
/**
 * The RAW IMU readings for 3rd 9DOF sensor setup. This message should contain the scaled values to the
 * described units
 */
class ScaledImu3 extends mavlink_1.MavLinkData {
}
exports.ScaledImu3 = ScaledImu3;
ScaledImu3.MSG_ID = 129;
ScaledImu3.MSG_NAME = 'SCALED_IMU3';
ScaledImu3.PAYLOAD_LENGTH = 24;
ScaledImu3.MAGIC_NUMBER = 46;
ScaledImu3.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_boot_ms', 'timeBootMs', 0, false, 4, 'uint32_t', 'ms'),
    new mavlink_1.MavLinkPacketField('xacc', 'xacc', 4, false, 2, 'int16_t', 'mG'),
    new mavlink_1.MavLinkPacketField('yacc', 'yacc', 6, false, 2, 'int16_t', 'mG'),
    new mavlink_1.MavLinkPacketField('zacc', 'zacc', 8, false, 2, 'int16_t', 'mG'),
    new mavlink_1.MavLinkPacketField('xgyro', 'xgyro', 10, false, 2, 'int16_t', 'mrad/s'),
    new mavlink_1.MavLinkPacketField('ygyro', 'ygyro', 12, false, 2, 'int16_t', 'mrad/s'),
    new mavlink_1.MavLinkPacketField('zgyro', 'zgyro', 14, false, 2, 'int16_t', 'mrad/s'),
    new mavlink_1.MavLinkPacketField('xmag', 'xmag', 16, false, 2, 'int16_t', 'mgauss'),
    new mavlink_1.MavLinkPacketField('ymag', 'ymag', 18, false, 2, 'int16_t', 'mgauss'),
    new mavlink_1.MavLinkPacketField('zmag', 'zmag', 20, false, 2, 'int16_t', 'mgauss'),
    new mavlink_1.MavLinkPacketField('temperature', 'temperature', 22, true, 2, 'int16_t', 'cdegC'),
];
/**
 * Handshake message to initiate, control and stop image streaming when using the Image Transmission
 * Protocol: https://mavlink.io/en/services/image_transmission.html.
 */
class DataTransmissionHandshake extends mavlink_1.MavLinkData {
}
exports.DataTransmissionHandshake = DataTransmissionHandshake;
DataTransmissionHandshake.MSG_ID = 130;
DataTransmissionHandshake.MSG_NAME = 'DATA_TRANSMISSION_HANDSHAKE';
DataTransmissionHandshake.PAYLOAD_LENGTH = 13;
DataTransmissionHandshake.MAGIC_NUMBER = 29;
DataTransmissionHandshake.FIELDS = [
    new mavlink_1.MavLinkPacketField('size', 'size', 0, false, 4, 'uint32_t', 'bytes'),
    new mavlink_1.MavLinkPacketField('width', 'width', 4, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('height', 'height', 6, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('packets', 'packets', 8, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('type', 'type', 10, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('payload', 'payload', 11, false, 1, 'uint8_t', 'bytes'),
    new mavlink_1.MavLinkPacketField('jpg_quality', 'jpgQuality', 12, false, 1, 'uint8_t', '%'),
];
/**
 * Data packet for images sent using the Image Transmission Protocol:
 * https://mavlink.io/en/services/image_transmission.html.
 */
class EncapsulatedData extends mavlink_1.MavLinkData {
}
exports.EncapsulatedData = EncapsulatedData;
EncapsulatedData.MSG_ID = 131;
EncapsulatedData.MSG_NAME = 'ENCAPSULATED_DATA';
EncapsulatedData.PAYLOAD_LENGTH = 255;
EncapsulatedData.MAGIC_NUMBER = 223;
EncapsulatedData.FIELDS = [
    new mavlink_1.MavLinkPacketField('seqnr', 'seqnr', 0, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('data', 'data', 2, false, 1, 'uint8_t[]', '', 253),
];
/**
 * Distance sensor information for an onboard rangefinder.
 */
class DistanceSensor extends mavlink_1.MavLinkData {
}
exports.DistanceSensor = DistanceSensor;
DistanceSensor.MSG_ID = 132;
DistanceSensor.MSG_NAME = 'DISTANCE_SENSOR';
DistanceSensor.PAYLOAD_LENGTH = 39;
DistanceSensor.MAGIC_NUMBER = 85;
DistanceSensor.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_boot_ms', 'timeBootMs', 0, false, 4, 'uint32_t', 'ms'),
    new mavlink_1.MavLinkPacketField('min_distance', 'minDistance', 4, false, 2, 'uint16_t', 'cm'),
    new mavlink_1.MavLinkPacketField('max_distance', 'maxDistance', 6, false, 2, 'uint16_t', 'cm'),
    new mavlink_1.MavLinkPacketField('current_distance', 'currentDistance', 8, false, 2, 'uint16_t', 'cm'),
    new mavlink_1.MavLinkPacketField('type', 'type', 10, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('id', 'id', 11, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('orientation', 'orientation', 12, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('covariance', 'covariance', 13, false, 1, 'uint8_t', 'cm^2'),
    new mavlink_1.MavLinkPacketField('horizontal_fov', 'horizontalFov', 14, true, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('vertical_fov', 'verticalFov', 18, true, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('quaternion', 'quaternion', 22, true, 4, 'float[]', '', 4),
    new mavlink_1.MavLinkPacketField('signal_quality', 'signalQuality', 38, true, 1, 'uint8_t', '%'),
];
/**
 * Request for terrain data and terrain status. See terrain protocol docs:
 * https://mavlink.io/en/services/terrain.html
 */
class TerrainRequest extends mavlink_1.MavLinkData {
}
exports.TerrainRequest = TerrainRequest;
TerrainRequest.MSG_ID = 133;
TerrainRequest.MSG_NAME = 'TERRAIN_REQUEST';
TerrainRequest.PAYLOAD_LENGTH = 18;
TerrainRequest.MAGIC_NUMBER = 6;
TerrainRequest.FIELDS = [
    new mavlink_1.MavLinkPacketField('mask', 'mask', 0, false, 8, 'uint64_t', ''),
    new mavlink_1.MavLinkPacketField('lat', 'lat', 8, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('lon', 'lon', 12, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('grid_spacing', 'gridSpacing', 16, false, 2, 'uint16_t', 'm'),
];
/**
 * Terrain data sent from GCS. The lat/lon and grid_spacing must be the same as a lat/lon from a
 * TERRAIN_REQUEST. See terrain protocol docs: https://mavlink.io/en/services/terrain.html
 */
class TerrainData extends mavlink_1.MavLinkData {
}
exports.TerrainData = TerrainData;
TerrainData.MSG_ID = 134;
TerrainData.MSG_NAME = 'TERRAIN_DATA';
TerrainData.PAYLOAD_LENGTH = 43;
TerrainData.MAGIC_NUMBER = 229;
TerrainData.FIELDS = [
    new mavlink_1.MavLinkPacketField('lat', 'lat', 0, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('lon', 'lon', 4, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('grid_spacing', 'gridSpacing', 8, false, 2, 'uint16_t', 'm'),
    new mavlink_1.MavLinkPacketField('data', 'data', 10, false, 2, 'int16_t[]', 'm', 16),
    new mavlink_1.MavLinkPacketField('gridbit', 'gridbit', 42, false, 1, 'uint8_t', ''),
];
/**
 * Request that the vehicle report terrain height at the given location (expected response is a
 * TERRAIN_REPORT). Used by GCS to check if vehicle has all terrain data needed for a mission.
 */
class TerrainCheck extends mavlink_1.MavLinkData {
}
exports.TerrainCheck = TerrainCheck;
TerrainCheck.MSG_ID = 135;
TerrainCheck.MSG_NAME = 'TERRAIN_CHECK';
TerrainCheck.PAYLOAD_LENGTH = 8;
TerrainCheck.MAGIC_NUMBER = 203;
TerrainCheck.FIELDS = [
    new mavlink_1.MavLinkPacketField('lat', 'lat', 0, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('lon', 'lon', 4, false, 4, 'int32_t', 'degE7'),
];
/**
 * Streamed from drone to report progress of terrain map download (initiated by TERRAIN_REQUEST), or
 * sent as a response to a TERRAIN_CHECK request. See terrain protocol docs:
 * https://mavlink.io/en/services/terrain.html
 */
class TerrainReport extends mavlink_1.MavLinkData {
}
exports.TerrainReport = TerrainReport;
TerrainReport.MSG_ID = 136;
TerrainReport.MSG_NAME = 'TERRAIN_REPORT';
TerrainReport.PAYLOAD_LENGTH = 22;
TerrainReport.MAGIC_NUMBER = 1;
TerrainReport.FIELDS = [
    new mavlink_1.MavLinkPacketField('lat', 'lat', 0, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('lon', 'lon', 4, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('terrain_height', 'terrainHeight', 8, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('current_height', 'currentHeight', 12, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('spacing', 'spacing', 16, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('pending', 'pending', 18, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('loaded', 'loaded', 20, false, 2, 'uint16_t', ''),
];
/**
 * Barometer readings for 2nd barometer
 */
class ScaledPressure2 extends mavlink_1.MavLinkData {
}
exports.ScaledPressure2 = ScaledPressure2;
ScaledPressure2.MSG_ID = 137;
ScaledPressure2.MSG_NAME = 'SCALED_PRESSURE2';
ScaledPressure2.PAYLOAD_LENGTH = 16;
ScaledPressure2.MAGIC_NUMBER = 195;
ScaledPressure2.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_boot_ms', 'timeBootMs', 0, false, 4, 'uint32_t', 'ms'),
    new mavlink_1.MavLinkPacketField('press_abs', 'pressAbs', 4, false, 4, 'float', 'hPa'),
    new mavlink_1.MavLinkPacketField('press_diff', 'pressDiff', 8, false, 4, 'float', 'hPa'),
    new mavlink_1.MavLinkPacketField('temperature', 'temperature', 12, false, 2, 'int16_t', 'cdegC'),
    new mavlink_1.MavLinkPacketField('temperature_press_diff', 'temperaturePressDiff', 14, true, 2, 'int16_t', 'cdegC'),
];
/**
 * Motion capture attitude and position
 */
class MotionCaptureAttPos extends mavlink_1.MavLinkData {
}
exports.MotionCaptureAttPos = MotionCaptureAttPos;
MotionCaptureAttPos.MSG_ID = 138;
MotionCaptureAttPos.MSG_NAME = 'ATT_POS_MOCAP';
MotionCaptureAttPos.PAYLOAD_LENGTH = 120;
MotionCaptureAttPos.MAGIC_NUMBER = 109;
MotionCaptureAttPos.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_usec', 'timeUsec', 0, false, 8, 'uint64_t', 'us'),
    new mavlink_1.MavLinkPacketField('q', 'q', 8, false, 4, 'float[]', '', 4),
    new mavlink_1.MavLinkPacketField('x', 'x', 24, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('y', 'y', 28, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('z', 'z', 32, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('covariance', 'covariance', 36, true, 4, 'float[]', '', 21),
];
/**
 * Set the vehicle attitude and body angular rates.
 */
class SetActuatorControlTarget extends mavlink_1.MavLinkData {
}
exports.SetActuatorControlTarget = SetActuatorControlTarget;
SetActuatorControlTarget.MSG_ID = 139;
SetActuatorControlTarget.MSG_NAME = 'SET_ACTUATOR_CONTROL_TARGET';
SetActuatorControlTarget.PAYLOAD_LENGTH = 43;
SetActuatorControlTarget.MAGIC_NUMBER = 168;
SetActuatorControlTarget.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_usec', 'timeUsec', 0, false, 8, 'uint64_t', 'us'),
    new mavlink_1.MavLinkPacketField('controls', 'controls', 8, false, 4, 'float[]', '', 8),
    new mavlink_1.MavLinkPacketField('group_mlx', 'groupMlx', 40, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 41, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 42, false, 1, 'uint8_t', ''),
];
/**
 * Set the vehicle attitude and body angular rates.
 */
class ActuatorControlTarget extends mavlink_1.MavLinkData {
}
exports.ActuatorControlTarget = ActuatorControlTarget;
ActuatorControlTarget.MSG_ID = 140;
ActuatorControlTarget.MSG_NAME = 'ACTUATOR_CONTROL_TARGET';
ActuatorControlTarget.PAYLOAD_LENGTH = 41;
ActuatorControlTarget.MAGIC_NUMBER = 181;
ActuatorControlTarget.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_usec', 'timeUsec', 0, false, 8, 'uint64_t', 'us'),
    new mavlink_1.MavLinkPacketField('controls', 'controls', 8, false, 4, 'float[]', '', 8),
    new mavlink_1.MavLinkPacketField('group_mlx', 'groupMlx', 40, false, 1, 'uint8_t', ''),
];
/**
 * The current system altitude.
 */
class Altitude extends mavlink_1.MavLinkData {
}
exports.Altitude = Altitude;
Altitude.MSG_ID = 141;
Altitude.MSG_NAME = 'ALTITUDE';
Altitude.PAYLOAD_LENGTH = 32;
Altitude.MAGIC_NUMBER = 47;
Altitude.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_usec', 'timeUsec', 0, false, 8, 'uint64_t', 'us'),
    new mavlink_1.MavLinkPacketField('altitude_monotonic', 'altitudeMonotonic', 8, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('altitude_amsl', 'altitudeAmsl', 12, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('altitude_local', 'altitudeLocal', 16, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('altitude_relative', 'altitudeRelative', 20, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('altitude_terrain', 'altitudeTerrain', 24, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('bottom_clearance', 'bottomClearance', 28, false, 4, 'float', 'm'),
];
/**
 * The autopilot is requesting a resource (file, binary, other type of data)
 */
class ResourceRequest extends mavlink_1.MavLinkData {
}
exports.ResourceRequest = ResourceRequest;
ResourceRequest.MSG_ID = 142;
ResourceRequest.MSG_NAME = 'RESOURCE_REQUEST';
ResourceRequest.PAYLOAD_LENGTH = 243;
ResourceRequest.MAGIC_NUMBER = 72;
ResourceRequest.FIELDS = [
    new mavlink_1.MavLinkPacketField('request_id', 'requestId', 0, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('uri_type', 'uriType', 1, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('uri', 'uri', 2, false, 1, 'uint8_t[]', '', 120),
    new mavlink_1.MavLinkPacketField('transfer_type', 'transferType', 122, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('storage', 'storage', 123, false, 1, 'uint8_t[]', '', 120),
];
/**
 * Barometer readings for 3rd barometer
 */
class ScaledPressure3 extends mavlink_1.MavLinkData {
}
exports.ScaledPressure3 = ScaledPressure3;
ScaledPressure3.MSG_ID = 143;
ScaledPressure3.MSG_NAME = 'SCALED_PRESSURE3';
ScaledPressure3.PAYLOAD_LENGTH = 16;
ScaledPressure3.MAGIC_NUMBER = 131;
ScaledPressure3.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_boot_ms', 'timeBootMs', 0, false, 4, 'uint32_t', 'ms'),
    new mavlink_1.MavLinkPacketField('press_abs', 'pressAbs', 4, false, 4, 'float', 'hPa'),
    new mavlink_1.MavLinkPacketField('press_diff', 'pressDiff', 8, false, 4, 'float', 'hPa'),
    new mavlink_1.MavLinkPacketField('temperature', 'temperature', 12, false, 2, 'int16_t', 'cdegC'),
    new mavlink_1.MavLinkPacketField('temperature_press_diff', 'temperaturePressDiff', 14, true, 2, 'int16_t', 'cdegC'),
];
/**
 * Current motion information from a designated system
 */
class FollowTarget extends mavlink_1.MavLinkData {
}
exports.FollowTarget = FollowTarget;
FollowTarget.MSG_ID = 144;
FollowTarget.MSG_NAME = 'FOLLOW_TARGET';
FollowTarget.PAYLOAD_LENGTH = 93;
FollowTarget.MAGIC_NUMBER = 127;
FollowTarget.FIELDS = [
    new mavlink_1.MavLinkPacketField('timestamp', 'timestamp', 0, false, 8, 'uint64_t', 'ms'),
    new mavlink_1.MavLinkPacketField('custom_state', 'customState', 8, false, 8, 'uint64_t', ''),
    new mavlink_1.MavLinkPacketField('lat', 'lat', 16, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('lon', 'lon', 20, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('alt', 'alt', 24, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('vel', 'vel', 28, false, 4, 'float[]', 'm/s', 3),
    new mavlink_1.MavLinkPacketField('acc', 'acc', 40, false, 4, 'float[]', 'm/s/s', 3),
    new mavlink_1.MavLinkPacketField('attitude_q', 'attitudeQ', 52, false, 4, 'float[]', '', 4),
    new mavlink_1.MavLinkPacketField('rates', 'rates', 68, false, 4, 'float[]', '', 3),
    new mavlink_1.MavLinkPacketField('position_cov', 'positionCov', 80, false, 4, 'float[]', '', 3),
    new mavlink_1.MavLinkPacketField('est_capabilities', 'estCapabilities', 92, false, 1, 'uint8_t', ''),
];
/**
 * The smoothed, monotonic system state used to feed the control loops of the system.
 */
class ControlSystemState extends mavlink_1.MavLinkData {
}
exports.ControlSystemState = ControlSystemState;
ControlSystemState.MSG_ID = 146;
ControlSystemState.MSG_NAME = 'CONTROL_SYSTEM_STATE';
ControlSystemState.PAYLOAD_LENGTH = 100;
ControlSystemState.MAGIC_NUMBER = 103;
ControlSystemState.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_usec', 'timeUsec', 0, false, 8, 'uint64_t', 'us'),
    new mavlink_1.MavLinkPacketField('x_acc', 'xAcc', 8, false, 4, 'float', 'm/s/s'),
    new mavlink_1.MavLinkPacketField('y_acc', 'yAcc', 12, false, 4, 'float', 'm/s/s'),
    new mavlink_1.MavLinkPacketField('z_acc', 'zAcc', 16, false, 4, 'float', 'm/s/s'),
    new mavlink_1.MavLinkPacketField('x_vel', 'xVel', 20, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('y_vel', 'yVel', 24, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('z_vel', 'zVel', 28, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('x_pos', 'xPos', 32, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('y_pos', 'yPos', 36, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('z_pos', 'zPos', 40, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('airspeed', 'airspeed', 44, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('vel_variance', 'velVariance', 48, false, 4, 'float[]', '', 3),
    new mavlink_1.MavLinkPacketField('pos_variance', 'posVariance', 60, false, 4, 'float[]', '', 3),
    new mavlink_1.MavLinkPacketField('q', 'q', 72, false, 4, 'float[]', '', 4),
    new mavlink_1.MavLinkPacketField('roll_rate', 'rollRate', 88, false, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('pitch_rate', 'pitchRate', 92, false, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('yaw_rate', 'yawRate', 96, false, 4, 'float', 'rad/s'),
];
/**
 * Battery information
 */
class BatteryStatus extends mavlink_1.MavLinkData {
}
exports.BatteryStatus = BatteryStatus;
BatteryStatus.MSG_ID = 147;
BatteryStatus.MSG_NAME = 'BATTERY_STATUS';
BatteryStatus.PAYLOAD_LENGTH = 49;
BatteryStatus.MAGIC_NUMBER = 154;
BatteryStatus.FIELDS = [
    new mavlink_1.MavLinkPacketField('current_consumed', 'currentConsumed', 0, false, 4, 'int32_t', 'mAh'),
    new mavlink_1.MavLinkPacketField('energy_consumed', 'energyConsumed', 4, false, 4, 'int32_t', 'hJ'),
    new mavlink_1.MavLinkPacketField('temperature', 'temperature', 8, false, 2, 'int16_t', 'cdegC'),
    new mavlink_1.MavLinkPacketField('voltages', 'voltages', 10, false, 2, 'uint16_t[]', 'mV', 10),
    new mavlink_1.MavLinkPacketField('current_battery', 'currentBattery', 30, false, 2, 'int16_t', 'cA'),
    new mavlink_1.MavLinkPacketField('id', 'id', 32, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('battery_function', 'batteryFunction', 33, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('type', 'type', 34, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('battery_remaining', 'batteryRemaining', 35, false, 1, 'int8_t', '%'),
    new mavlink_1.MavLinkPacketField('time_remaining', 'timeRemaining', 36, true, 4, 'int32_t', 's'),
    new mavlink_1.MavLinkPacketField('charge_state', 'chargeState', 40, true, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('voltages_ext', 'voltagesExt', 41, true, 2, 'uint16_t[]', 'mV', 4),
];
/**
 * Version and capability of autopilot software. This should be emitted in response to a request with
 * MAV_CMD_REQUEST_MESSAGE.
 */
class AutopilotVersion extends mavlink_1.MavLinkData {
}
exports.AutopilotVersion = AutopilotVersion;
AutopilotVersion.MSG_ID = 148;
AutopilotVersion.MSG_NAME = 'AUTOPILOT_VERSION';
AutopilotVersion.PAYLOAD_LENGTH = 78;
AutopilotVersion.MAGIC_NUMBER = 178;
AutopilotVersion.FIELDS = [
    new mavlink_1.MavLinkPacketField('capabilities', 'capabilities', 0, false, 8, 'uint64_t', ''),
    new mavlink_1.MavLinkPacketField('uid', 'uid', 8, false, 8, 'uint64_t', ''),
    new mavlink_1.MavLinkPacketField('flight_sw_version', 'flightSwVersion', 16, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('middleware_sw_version', 'middlewareSwVersion', 20, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('os_sw_version', 'osSwVersion', 24, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('board_version', 'boardVersion', 28, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('vendor_id', 'vendorId', 32, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('product_id', 'productId', 34, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('flight_custom_version', 'flightCustomVersion', 36, false, 1, 'uint8_t[]', '', 8),
    new mavlink_1.MavLinkPacketField('middleware_custom_version', 'middlewareCustomVersion', 44, false, 1, 'uint8_t[]', '', 8),
    new mavlink_1.MavLinkPacketField('os_custom_version', 'osCustomVersion', 52, false, 1, 'uint8_t[]', '', 8),
    new mavlink_1.MavLinkPacketField('uid2', 'uid2', 60, true, 1, 'uint8_t[]', '', 18),
];
/**
 * The location of a landing target. See: https://mavlink.io/en/services/landing_target.html
 */
class LandingTarget extends mavlink_1.MavLinkData {
}
exports.LandingTarget = LandingTarget;
LandingTarget.MSG_ID = 149;
LandingTarget.MSG_NAME = 'LANDING_TARGET';
LandingTarget.PAYLOAD_LENGTH = 60;
LandingTarget.MAGIC_NUMBER = 200;
LandingTarget.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_usec', 'timeUsec', 0, false, 8, 'uint64_t', 'us'),
    new mavlink_1.MavLinkPacketField('angle_x', 'angleX', 8, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('angle_y', 'angleY', 12, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('distance', 'distance', 16, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('size_x', 'sizeX', 20, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('size_y', 'sizeY', 24, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('target_num', 'targetNum', 28, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('frame', 'frame', 29, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('x', 'x', 30, true, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('y', 'y', 34, true, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('z', 'z', 38, true, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('q', 'q', 42, true, 4, 'float[]', '', 4),
    new mavlink_1.MavLinkPacketField('type', 'type', 58, true, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('position_valid', 'positionValid', 59, true, 1, 'uint8_t', ''),
];
/**
 * Status of geo-fencing. Sent in extended status stream when fencing enabled.
 */
class FenceStatus extends mavlink_1.MavLinkData {
}
exports.FenceStatus = FenceStatus;
FenceStatus.MSG_ID = 162;
FenceStatus.MSG_NAME = 'FENCE_STATUS';
FenceStatus.PAYLOAD_LENGTH = 9;
FenceStatus.MAGIC_NUMBER = 189;
FenceStatus.FIELDS = [
    new mavlink_1.MavLinkPacketField('breach_time', 'breachTime', 0, false, 4, 'uint32_t', 'ms'),
    new mavlink_1.MavLinkPacketField('breach_count', 'breachCount', 4, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('breach_status', 'breachStatus', 6, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('breach_type', 'breachType', 7, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('breach_mitigation', 'breachMitigation', 8, true, 1, 'uint8_t', ''),
];
/**
 * Reports results of completed compass calibration. Sent until MAG_CAL_ACK received.
 */
class MagCalReport extends mavlink_1.MavLinkData {
}
exports.MagCalReport = MagCalReport;
MagCalReport.MSG_ID = 192;
MagCalReport.MSG_NAME = 'MAG_CAL_REPORT';
MagCalReport.PAYLOAD_LENGTH = 54;
MagCalReport.MAGIC_NUMBER = 36;
MagCalReport.FIELDS = [
    new mavlink_1.MavLinkPacketField('fitness', 'fitness', 0, false, 4, 'float', 'mgauss'),
    new mavlink_1.MavLinkPacketField('ofs_x', 'ofsX', 4, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('ofs_y', 'ofsY', 8, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('ofs_z', 'ofsZ', 12, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('diag_x', 'diagX', 16, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('diag_y', 'diagY', 20, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('diag_z', 'diagZ', 24, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('offdiag_x', 'offdiagX', 28, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('offdiag_y', 'offdiagY', 32, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('offdiag_z', 'offdiagZ', 36, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('compass_id', 'compassId', 40, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('cal_mask', 'calMask', 41, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('cal_status', 'calStatus', 42, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('autosaved', 'autosaved', 43, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('orientation_confidence', 'orientationConfidence', 44, true, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('old_orientation', 'oldOrientation', 48, true, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('new_orientation', 'newOrientation', 49, true, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('scale_factor', 'scaleFactor', 50, true, 4, 'float', ''),
];
/**
 * EFI status output
 */
class EfiStatus extends mavlink_1.MavLinkData {
}
exports.EfiStatus = EfiStatus;
EfiStatus.MSG_ID = 225;
EfiStatus.MSG_NAME = 'EFI_STATUS';
EfiStatus.PAYLOAD_LENGTH = 65;
EfiStatus.MAGIC_NUMBER = 208;
EfiStatus.FIELDS = [
    new mavlink_1.MavLinkPacketField('ecu_index', 'ecuIndex', 0, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('rpm', 'rpm', 4, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('fuel_consumed', 'fuelConsumed', 8, false, 4, 'float', 'cm^3'),
    new mavlink_1.MavLinkPacketField('fuel_flow', 'fuelFlow', 12, false, 4, 'float', 'cm^3/min'),
    new mavlink_1.MavLinkPacketField('engine_load', 'engineLoad', 16, false, 4, 'float', '%'),
    new mavlink_1.MavLinkPacketField('throttle_position', 'throttlePosition', 20, false, 4, 'float', '%'),
    new mavlink_1.MavLinkPacketField('spark_dwell_time', 'sparkDwellTime', 24, false, 4, 'float', 'ms'),
    new mavlink_1.MavLinkPacketField('barometric_pressure', 'barometricPressure', 28, false, 4, 'float', 'kPa'),
    new mavlink_1.MavLinkPacketField('intake_manifold_pressure', 'intakeManifoldPressure', 32, false, 4, 'float', 'kPa'),
    new mavlink_1.MavLinkPacketField('intake_manifold_temperature', 'intakeManifoldTemperature', 36, false, 4, 'float', 'degC'),
    new mavlink_1.MavLinkPacketField('cylinder_head_temperature', 'cylinderHeadTemperature', 40, false, 4, 'float', 'degC'),
    new mavlink_1.MavLinkPacketField('ignition_timing', 'ignitionTiming', 44, false, 4, 'float', 'deg'),
    new mavlink_1.MavLinkPacketField('injection_time', 'injectionTime', 48, false, 4, 'float', 'ms'),
    new mavlink_1.MavLinkPacketField('exhaust_gas_temperature', 'exhaustGasTemperature', 52, false, 4, 'float', 'degC'),
    new mavlink_1.MavLinkPacketField('throttle_out', 'throttleOut', 56, false, 4, 'float', '%'),
    new mavlink_1.MavLinkPacketField('pt_compensation', 'ptCompensation', 60, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('health', 'health', 64, false, 1, 'uint8_t', ''),
];
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
class EstimatorStatus extends mavlink_1.MavLinkData {
}
exports.EstimatorStatus = EstimatorStatus;
EstimatorStatus.MSG_ID = 230;
EstimatorStatus.MSG_NAME = 'ESTIMATOR_STATUS';
EstimatorStatus.PAYLOAD_LENGTH = 42;
EstimatorStatus.MAGIC_NUMBER = 163;
EstimatorStatus.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_usec', 'timeUsec', 0, false, 8, 'uint64_t', 'us'),
    new mavlink_1.MavLinkPacketField('vel_ratio', 'velRatio', 8, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('pos_horiz_ratio', 'posHorizRatio', 12, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('pos_vert_ratio', 'posVertRatio', 16, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('mag_ratio', 'magRatio', 20, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('hagl_ratio', 'haglRatio', 24, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('tas_ratio', 'tasRatio', 28, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('pos_horiz_accuracy', 'posHorizAccuracy', 32, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('pos_vert_accuracy', 'posVertAccuracy', 36, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('flags', 'flags', 40, false, 2, 'uint16_t', ''),
];
/**
 * Wind covariance estimate from vehicle.
 */
class WindCov extends mavlink_1.MavLinkData {
}
exports.WindCov = WindCov;
WindCov.MSG_ID = 231;
WindCov.MSG_NAME = 'WIND_COV';
WindCov.PAYLOAD_LENGTH = 40;
WindCov.MAGIC_NUMBER = 105;
WindCov.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_usec', 'timeUsec', 0, false, 8, 'uint64_t', 'us'),
    new mavlink_1.MavLinkPacketField('wind_x', 'windX', 8, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('wind_y', 'windY', 12, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('wind_z', 'windZ', 16, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('var_horiz', 'varHoriz', 20, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('var_vert', 'varVert', 24, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('wind_alt', 'windAlt', 28, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('horiz_accuracy', 'horizAccuracy', 32, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('vert_accuracy', 'vertAccuracy', 36, false, 4, 'float', 'm'),
];
/**
 * GPS sensor input message. This is a raw sensor value sent by the GPS. This is NOT the global
 * position estimate of the system.
 */
class GpsInput extends mavlink_1.MavLinkData {
}
exports.GpsInput = GpsInput;
GpsInput.MSG_ID = 232;
GpsInput.MSG_NAME = 'GPS_INPUT';
GpsInput.PAYLOAD_LENGTH = 65;
GpsInput.MAGIC_NUMBER = 151;
GpsInput.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_usec', 'timeUsec', 0, false, 8, 'uint64_t', 'us'),
    new mavlink_1.MavLinkPacketField('time_week_ms', 'timeWeekMs', 8, false, 4, 'uint32_t', 'ms'),
    new mavlink_1.MavLinkPacketField('lat', 'lat', 12, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('lon', 'lon', 16, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('alt', 'alt', 20, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('hdop', 'hdop', 24, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('vdop', 'vdop', 28, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('vn', 'vn', 32, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('ve', 've', 36, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('vd', 'vd', 40, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('speed_accuracy', 'speedAccuracy', 44, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('horiz_accuracy', 'horizAccuracy', 48, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('vert_accuracy', 'vertAccuracy', 52, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('ignore_flags', 'ignoreFlags', 56, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('time_week', 'timeWeek', 58, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('gps_id', 'gpsId', 60, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('fix_type', 'fixType', 61, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('satellites_visible', 'satellitesVisible', 62, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('yaw', 'yaw', 63, true, 2, 'uint16_t', 'cdeg'),
];
/**
 * RTCM message for injecting into the onboard GPS (used for DGPS)
 */
class GpsRtcmData extends mavlink_1.MavLinkData {
}
exports.GpsRtcmData = GpsRtcmData;
GpsRtcmData.MSG_ID = 233;
GpsRtcmData.MSG_NAME = 'GPS_RTCM_DATA';
GpsRtcmData.PAYLOAD_LENGTH = 182;
GpsRtcmData.MAGIC_NUMBER = 35;
GpsRtcmData.FIELDS = [
    new mavlink_1.MavLinkPacketField('flags', 'flags', 0, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('len', 'len', 1, false, 1, 'uint8_t', 'bytes'),
    new mavlink_1.MavLinkPacketField('data', 'data', 2, false, 1, 'uint8_t[]', '', 180),
];
/**
 * Message appropriate for high latency connections like Iridium
 *
 * @deprecated since 2020-10, replaced by HIGH_LATENCY2
 */
class HighLatency extends mavlink_1.MavLinkData {
}
exports.HighLatency = HighLatency;
HighLatency.MSG_ID = 234;
HighLatency.MSG_NAME = 'HIGH_LATENCY';
HighLatency.PAYLOAD_LENGTH = 40;
HighLatency.MAGIC_NUMBER = 150;
HighLatency.FIELDS = [
    new mavlink_1.MavLinkPacketField('custom_mode', 'customMode', 0, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('latitude', 'latitude', 4, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('longitude', 'longitude', 8, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('roll', 'roll', 12, false, 2, 'int16_t', 'cdeg'),
    new mavlink_1.MavLinkPacketField('pitch', 'pitch', 14, false, 2, 'int16_t', 'cdeg'),
    new mavlink_1.MavLinkPacketField('heading', 'heading', 16, false, 2, 'uint16_t', 'cdeg'),
    new mavlink_1.MavLinkPacketField('heading_sp', 'headingSp', 18, false, 2, 'int16_t', 'cdeg'),
    new mavlink_1.MavLinkPacketField('altitude_amsl', 'altitudeAmsl', 20, false, 2, 'int16_t', 'm'),
    new mavlink_1.MavLinkPacketField('altitude_sp', 'altitudeSp', 22, false, 2, 'int16_t', 'm'),
    new mavlink_1.MavLinkPacketField('wp_distance', 'wpDistance', 24, false, 2, 'uint16_t', 'm'),
    new mavlink_1.MavLinkPacketField('base_mode', 'baseMode', 26, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('landed_state', 'landedState', 27, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('throttle', 'throttle', 28, false, 1, 'int8_t', '%'),
    new mavlink_1.MavLinkPacketField('airspeed', 'airspeed', 29, false, 1, 'uint8_t', 'm/s'),
    new mavlink_1.MavLinkPacketField('airspeed_sp', 'airspeedSp', 30, false, 1, 'uint8_t', 'm/s'),
    new mavlink_1.MavLinkPacketField('groundspeed', 'groundspeed', 31, false, 1, 'uint8_t', 'm/s'),
    new mavlink_1.MavLinkPacketField('climb_rate', 'climbRate', 32, false, 1, 'int8_t', 'm/s'),
    new mavlink_1.MavLinkPacketField('gps_nsat', 'gpsNsat', 33, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('gps_fix_type', 'gpsFixType', 34, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('battery_remaining', 'batteryRemaining', 35, false, 1, 'uint8_t', '%'),
    new mavlink_1.MavLinkPacketField('temperature', 'temperature', 36, false, 1, 'int8_t', 'degC'),
    new mavlink_1.MavLinkPacketField('temperature_air', 'temperatureAir', 37, false, 1, 'int8_t', 'degC'),
    new mavlink_1.MavLinkPacketField('failsafe', 'failsafe', 38, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('wp_num', 'wpNum', 39, false, 1, 'uint8_t', ''),
];
/**
 * Message appropriate for high latency connections like Iridium (version 2)
 */
class HighLatency2 extends mavlink_1.MavLinkData {
}
exports.HighLatency2 = HighLatency2;
HighLatency2.MSG_ID = 235;
HighLatency2.MSG_NAME = 'HIGH_LATENCY2';
HighLatency2.PAYLOAD_LENGTH = 42;
HighLatency2.MAGIC_NUMBER = 179;
HighLatency2.FIELDS = [
    new mavlink_1.MavLinkPacketField('timestamp', 'timestamp', 0, false, 4, 'uint32_t', 'ms'),
    new mavlink_1.MavLinkPacketField('latitude', 'latitude', 4, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('longitude', 'longitude', 8, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('custom_mode', 'customMode', 12, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('altitude', 'altitude', 14, false, 2, 'int16_t', 'm'),
    new mavlink_1.MavLinkPacketField('target_altitude', 'targetAltitude', 16, false, 2, 'int16_t', 'm'),
    new mavlink_1.MavLinkPacketField('target_distance', 'targetDistance', 18, false, 2, 'uint16_t', 'dam'),
    new mavlink_1.MavLinkPacketField('wp_num', 'wpNum', 20, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('failure_flags', 'failureFlags', 22, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('type', 'type', 24, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('autopilot', 'autopilot', 25, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('heading', 'heading', 26, false, 1, 'uint8_t', 'deg/2'),
    new mavlink_1.MavLinkPacketField('target_heading', 'targetHeading', 27, false, 1, 'uint8_t', 'deg/2'),
    new mavlink_1.MavLinkPacketField('throttle', 'throttle', 28, false, 1, 'uint8_t', '%'),
    new mavlink_1.MavLinkPacketField('airspeed', 'airspeed', 29, false, 1, 'uint8_t', 'm/s*5'),
    new mavlink_1.MavLinkPacketField('airspeed_sp', 'airspeedSp', 30, false, 1, 'uint8_t', 'm/s*5'),
    new mavlink_1.MavLinkPacketField('groundspeed', 'groundspeed', 31, false, 1, 'uint8_t', 'm/s*5'),
    new mavlink_1.MavLinkPacketField('windspeed', 'windspeed', 32, false, 1, 'uint8_t', 'm/s*5'),
    new mavlink_1.MavLinkPacketField('wind_heading', 'windHeading', 33, false, 1, 'uint8_t', 'deg/2'),
    new mavlink_1.MavLinkPacketField('eph', 'eph', 34, false, 1, 'uint8_t', 'dm'),
    new mavlink_1.MavLinkPacketField('epv', 'epv', 35, false, 1, 'uint8_t', 'dm'),
    new mavlink_1.MavLinkPacketField('temperature_air', 'temperatureAir', 36, false, 1, 'int8_t', 'degC'),
    new mavlink_1.MavLinkPacketField('climb_rate', 'climbRate', 37, false, 1, 'int8_t', 'dm/s'),
    new mavlink_1.MavLinkPacketField('battery', 'battery', 38, false, 1, 'int8_t', '%'),
    new mavlink_1.MavLinkPacketField('custom0', 'custom0', 39, false, 1, 'int8_t', ''),
    new mavlink_1.MavLinkPacketField('custom1', 'custom1', 40, false, 1, 'int8_t', ''),
    new mavlink_1.MavLinkPacketField('custom2', 'custom2', 41, false, 1, 'int8_t', ''),
];
/**
 * Vibration levels and accelerometer clipping
 */
class Vibration extends mavlink_1.MavLinkData {
}
exports.Vibration = Vibration;
Vibration.MSG_ID = 241;
Vibration.MSG_NAME = 'VIBRATION';
Vibration.PAYLOAD_LENGTH = 32;
Vibration.MAGIC_NUMBER = 90;
Vibration.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_usec', 'timeUsec', 0, false, 8, 'uint64_t', 'us'),
    new mavlink_1.MavLinkPacketField('vibration_x', 'vibrationX', 8, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('vibration_y', 'vibrationY', 12, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('vibration_z', 'vibrationZ', 16, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('clipping_0', 'clipping0', 20, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('clipping_1', 'clipping1', 24, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('clipping_2', 'clipping2', 28, false, 4, 'uint32_t', ''),
];
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
class HomePosition extends mavlink_1.MavLinkData {
}
exports.HomePosition = HomePosition;
HomePosition.MSG_ID = 242;
HomePosition.MSG_NAME = 'HOME_POSITION';
HomePosition.PAYLOAD_LENGTH = 60;
HomePosition.MAGIC_NUMBER = 104;
HomePosition.FIELDS = [
    new mavlink_1.MavLinkPacketField('latitude', 'latitude', 0, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('longitude', 'longitude', 4, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('altitude', 'altitude', 8, false, 4, 'int32_t', 'mm'),
    new mavlink_1.MavLinkPacketField('x', 'x', 12, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('y', 'y', 16, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('z', 'z', 20, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('q', 'q', 24, false, 4, 'float[]', '', 4),
    new mavlink_1.MavLinkPacketField('approach_x', 'approachX', 40, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('approach_y', 'approachY', 44, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('approach_z', 'approachZ', 48, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('time_usec', 'timeUsec', 52, true, 8, 'uint64_t', 'us'),
];
/**
 * The position the system will return to and land on. The position is set automatically by the system
 * during the takeoff in case it was not explicitly set by the operator before or after. The global and
 * local positions encode the position in the respective coordinate frames, while the q parameter
 * encodes the orientation of the surface. Under normal conditions it describes the heading and terrain
 * slope, which can be used by the aircraft to adjust the approach. The approach 3D vector describes
 * the point to which the system should fly in normal flight mode and then perform a landing sequence
 * along the vector.
 */
class SetHomePosition extends mavlink_1.MavLinkData {
}
exports.SetHomePosition = SetHomePosition;
SetHomePosition.MSG_ID = 243;
SetHomePosition.MSG_NAME = 'SET_HOME_POSITION';
SetHomePosition.PAYLOAD_LENGTH = 61;
SetHomePosition.MAGIC_NUMBER = 85;
SetHomePosition.FIELDS = [
    new mavlink_1.MavLinkPacketField('latitude', 'latitude', 0, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('longitude', 'longitude', 4, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('altitude', 'altitude', 8, false, 4, 'int32_t', 'mm'),
    new mavlink_1.MavLinkPacketField('x', 'x', 12, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('y', 'y', 16, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('z', 'z', 20, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('q', 'q', 24, false, 4, 'float[]', '', 4),
    new mavlink_1.MavLinkPacketField('approach_x', 'approachX', 40, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('approach_y', 'approachY', 44, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('approach_z', 'approachZ', 48, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 52, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('time_usec', 'timeUsec', 53, true, 8, 'uint64_t', 'us'),
];
/**
 * The interval between messages for a particular MAVLink message ID. This message is the response to
 * the MAV_CMD_GET_MESSAGE_INTERVAL command. This interface replaces DATA_STREAM.
 */
class MessageInterval extends mavlink_1.MavLinkData {
}
exports.MessageInterval = MessageInterval;
MessageInterval.MSG_ID = 244;
MessageInterval.MSG_NAME = 'MESSAGE_INTERVAL';
MessageInterval.PAYLOAD_LENGTH = 6;
MessageInterval.MAGIC_NUMBER = 95;
MessageInterval.FIELDS = [
    new mavlink_1.MavLinkPacketField('interval_us', 'intervalUs', 0, false, 4, 'int32_t', 'us'),
    new mavlink_1.MavLinkPacketField('message_id', 'messageId', 4, false, 2, 'uint16_t', ''),
];
/**
 * Provides state for additional features
 */
class ExtendedSysState extends mavlink_1.MavLinkData {
}
exports.ExtendedSysState = ExtendedSysState;
ExtendedSysState.MSG_ID = 245;
ExtendedSysState.MSG_NAME = 'EXTENDED_SYS_STATE';
ExtendedSysState.PAYLOAD_LENGTH = 2;
ExtendedSysState.MAGIC_NUMBER = 130;
ExtendedSysState.FIELDS = [
    new mavlink_1.MavLinkPacketField('vtol_state', 'vtolState', 0, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('landed_state', 'landedState', 1, false, 1, 'uint8_t', ''),
];
/**
 * The location and information of an ADSB vehicle
 */
class AdsbVehicle extends mavlink_1.MavLinkData {
}
exports.AdsbVehicle = AdsbVehicle;
AdsbVehicle.MSG_ID = 246;
AdsbVehicle.MSG_NAME = 'ADSB_VEHICLE';
AdsbVehicle.PAYLOAD_LENGTH = 38;
AdsbVehicle.MAGIC_NUMBER = 184;
AdsbVehicle.FIELDS = [
    new mavlink_1.MavLinkPacketField('ICAO_address', 'ICAOAddress', 0, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('lat', 'lat', 4, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('lon', 'lon', 8, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('altitude', 'altitude', 12, false, 4, 'int32_t', 'mm'),
    new mavlink_1.MavLinkPacketField('heading', 'heading', 16, false, 2, 'uint16_t', 'cdeg'),
    new mavlink_1.MavLinkPacketField('hor_velocity', 'horVelocity', 18, false, 2, 'uint16_t', 'cm/s'),
    new mavlink_1.MavLinkPacketField('ver_velocity', 'verVelocity', 20, false, 2, 'int16_t', 'cm/s'),
    new mavlink_1.MavLinkPacketField('flags', 'flags', 22, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('squawk', 'squawk', 24, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('altitude_type', 'altitudeType', 26, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('callsign', 'callsign', 27, false, 1, 'char[]', '', 9),
    new mavlink_1.MavLinkPacketField('emitter_type', 'emitterType', 36, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('tslc', 'tslc', 37, false, 1, 'uint8_t', 's'),
];
/**
 * Information about a potential collision
 */
class Collision extends mavlink_1.MavLinkData {
}
exports.Collision = Collision;
Collision.MSG_ID = 247;
Collision.MSG_NAME = 'COLLISION';
Collision.PAYLOAD_LENGTH = 19;
Collision.MAGIC_NUMBER = 81;
Collision.FIELDS = [
    new mavlink_1.MavLinkPacketField('id', 'id', 0, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('time_to_minimum_delta', 'timeToMinimumDelta', 4, false, 4, 'float', 's'),
    new mavlink_1.MavLinkPacketField('altitude_minimum_delta', 'altitudeMinimumDelta', 8, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('horizontal_minimum_delta', 'horizontalMinimumDelta', 12, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('src', 'src', 16, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('action', 'action', 17, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('threat_level', 'threatLevel', 18, false, 1, 'uint8_t', ''),
];
/**
 * Message implementing parts of the V2 payload specs in V1 frames for transitional support.
 */
class V2Extension extends mavlink_1.MavLinkData {
}
exports.V2Extension = V2Extension;
V2Extension.MSG_ID = 248;
V2Extension.MSG_NAME = 'V2_EXTENSION';
V2Extension.PAYLOAD_LENGTH = 254;
V2Extension.MAGIC_NUMBER = 8;
V2Extension.FIELDS = [
    new mavlink_1.MavLinkPacketField('message_type', 'messageType', 0, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('target_network', 'targetNetwork', 2, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 3, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 4, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('payload', 'payload', 5, false, 1, 'uint8_t[]', '', 249),
];
/**
 * Send raw controller memory. The use of this message is discouraged for normal packets, but a quite
 * efficient way for testing new messages and getting experimental debug output.
 */
class MemoryVect extends mavlink_1.MavLinkData {
}
exports.MemoryVect = MemoryVect;
MemoryVect.MSG_ID = 249;
MemoryVect.MSG_NAME = 'MEMORY_VECT';
MemoryVect.PAYLOAD_LENGTH = 36;
MemoryVect.MAGIC_NUMBER = 204;
MemoryVect.FIELDS = [
    new mavlink_1.MavLinkPacketField('address', 'address', 0, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('ver', 'ver', 2, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('type', 'type', 3, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('value', 'value', 4, false, 1, 'int8_t[]', '', 32),
];
/**
 * To debug something using a named 3D vector.
 */
class DebugVect extends mavlink_1.MavLinkData {
}
exports.DebugVect = DebugVect;
DebugVect.MSG_ID = 250;
DebugVect.MSG_NAME = 'DEBUG_VECT';
DebugVect.PAYLOAD_LENGTH = 30;
DebugVect.MAGIC_NUMBER = 49;
DebugVect.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_usec', 'timeUsec', 0, false, 8, 'uint64_t', 'us'),
    new mavlink_1.MavLinkPacketField('x', 'x', 8, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('y', 'y', 12, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('z', 'z', 16, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('name', 'name', 20, false, 1, 'char[]', '', 10),
];
/**
 * Send a key-value pair as float. The use of this message is discouraged for normal packets, but a
 * quite efficient way for testing new messages and getting experimental debug output.
 */
class NamedValueFloat extends mavlink_1.MavLinkData {
}
exports.NamedValueFloat = NamedValueFloat;
NamedValueFloat.MSG_ID = 251;
NamedValueFloat.MSG_NAME = 'NAMED_VALUE_FLOAT';
NamedValueFloat.PAYLOAD_LENGTH = 18;
NamedValueFloat.MAGIC_NUMBER = 170;
NamedValueFloat.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_boot_ms', 'timeBootMs', 0, false, 4, 'uint32_t', 'ms'),
    new mavlink_1.MavLinkPacketField('value', 'value', 4, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('name', 'name', 8, false, 1, 'char[]', '', 10),
];
/**
 * Send a key-value pair as integer. The use of this message is discouraged for normal packets, but a
 * quite efficient way for testing new messages and getting experimental debug output.
 */
class NamedValueInt extends mavlink_1.MavLinkData {
}
exports.NamedValueInt = NamedValueInt;
NamedValueInt.MSG_ID = 252;
NamedValueInt.MSG_NAME = 'NAMED_VALUE_INT';
NamedValueInt.PAYLOAD_LENGTH = 18;
NamedValueInt.MAGIC_NUMBER = 44;
NamedValueInt.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_boot_ms', 'timeBootMs', 0, false, 4, 'uint32_t', 'ms'),
    new mavlink_1.MavLinkPacketField('value', 'value', 4, false, 4, 'int32_t', ''),
    new mavlink_1.MavLinkPacketField('name', 'name', 8, false, 1, 'char[]', '', 10),
];
/**
 * Status text message. These messages are printed in yellow in the COMM console of QGroundControl.
 * WARNING: They consume quite some bandwidth, so use only for important status and error messages. If
 * implemented wisely, these messages are buffered on the MCU and sent only at a limited rate (e.g. 10
 * Hz).
 */
class StatusText extends mavlink_1.MavLinkData {
}
exports.StatusText = StatusText;
StatusText.MSG_ID = 253;
StatusText.MSG_NAME = 'STATUSTEXT';
StatusText.PAYLOAD_LENGTH = 54;
StatusText.MAGIC_NUMBER = 83;
StatusText.FIELDS = [
    new mavlink_1.MavLinkPacketField('severity', 'severity', 0, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('text', 'text', 1, false, 1, 'char[]', '', 50),
    new mavlink_1.MavLinkPacketField('id', 'id', 51, true, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('chunk_seq', 'chunkSeq', 53, true, 1, 'uint8_t', ''),
];
/**
 * Send a debug value. The index is used to discriminate between values. These values show up in the
 * plot of QGroundControl as DEBUG N.
 */
class Debug extends mavlink_1.MavLinkData {
}
exports.Debug = Debug;
Debug.MSG_ID = 254;
Debug.MSG_NAME = 'DEBUG';
Debug.PAYLOAD_LENGTH = 9;
Debug.MAGIC_NUMBER = 46;
Debug.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_boot_ms', 'timeBootMs', 0, false, 4, 'uint32_t', 'ms'),
    new mavlink_1.MavLinkPacketField('value', 'value', 4, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('ind', 'ind', 8, false, 1, 'uint8_t', ''),
];
/**
 * Setup a MAVLink2 signing key. If called with secret_key of all zero and zero initial_timestamp will
 * disable signing
 */
class SetupSigning extends mavlink_1.MavLinkData {
}
exports.SetupSigning = SetupSigning;
SetupSigning.MSG_ID = 256;
SetupSigning.MSG_NAME = 'SETUP_SIGNING';
SetupSigning.PAYLOAD_LENGTH = 42;
SetupSigning.MAGIC_NUMBER = 71;
SetupSigning.FIELDS = [
    new mavlink_1.MavLinkPacketField('initial_timestamp', 'initialTimestamp', 0, false, 8, 'uint64_t', ''),
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 8, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 9, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('secret_key', 'secretKey', 10, false, 1, 'uint8_t[]', '', 32),
];
/**
 * Report button state change.
 */
class ButtonChange extends mavlink_1.MavLinkData {
}
exports.ButtonChange = ButtonChange;
ButtonChange.MSG_ID = 257;
ButtonChange.MSG_NAME = 'BUTTON_CHANGE';
ButtonChange.PAYLOAD_LENGTH = 9;
ButtonChange.MAGIC_NUMBER = 131;
ButtonChange.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_boot_ms', 'timeBootMs', 0, false, 4, 'uint32_t', 'ms'),
    new mavlink_1.MavLinkPacketField('last_change_ms', 'lastChangeMs', 4, false, 4, 'uint32_t', 'ms'),
    new mavlink_1.MavLinkPacketField('state', 'state', 8, false, 1, 'uint8_t', ''),
];
/**
 * Control vehicle tone generation (buzzer).
 */
class PlayTune extends mavlink_1.MavLinkData {
}
exports.PlayTune = PlayTune;
PlayTune.MSG_ID = 258;
PlayTune.MSG_NAME = 'PLAY_TUNE';
PlayTune.PAYLOAD_LENGTH = 232;
PlayTune.MAGIC_NUMBER = 187;
PlayTune.FIELDS = [
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 0, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 1, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('tune', 'tune', 2, false, 1, 'char[]', '', 30),
    new mavlink_1.MavLinkPacketField('tune2', 'tune2', 32, true, 1, 'char[]', '', 200),
];
/**
 * Information about a camera. Can be requested with a MAV_CMD_REQUEST_MESSAGE command.
 */
class CameraInformation extends mavlink_1.MavLinkData {
}
exports.CameraInformation = CameraInformation;
CameraInformation.MSG_ID = 259;
CameraInformation.MSG_NAME = 'CAMERA_INFORMATION';
CameraInformation.PAYLOAD_LENGTH = 235;
CameraInformation.MAGIC_NUMBER = 92;
CameraInformation.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_boot_ms', 'timeBootMs', 0, false, 4, 'uint32_t', 'ms'),
    new mavlink_1.MavLinkPacketField('firmware_version', 'firmwareVersion', 4, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('focal_length', 'focalLength', 8, false, 4, 'float', 'mm'),
    new mavlink_1.MavLinkPacketField('sensor_size_h', 'sensorSizeH', 12, false, 4, 'float', 'mm'),
    new mavlink_1.MavLinkPacketField('sensor_size_v', 'sensorSizeV', 16, false, 4, 'float', 'mm'),
    new mavlink_1.MavLinkPacketField('flags', 'flags', 20, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('resolution_h', 'resolutionH', 24, false, 2, 'uint16_t', 'pix'),
    new mavlink_1.MavLinkPacketField('resolution_v', 'resolutionV', 26, false, 2, 'uint16_t', 'pix'),
    new mavlink_1.MavLinkPacketField('cam_definition_version', 'camDefinitionVersion', 28, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('vendor_name', 'vendorName', 30, false, 1, 'uint8_t[]', '', 32),
    new mavlink_1.MavLinkPacketField('model_name', 'modelName', 62, false, 1, 'uint8_t[]', '', 32),
    new mavlink_1.MavLinkPacketField('lens_id', 'lensId', 94, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('cam_definition_uri', 'camDefinitionUri', 95, false, 1, 'char[]', '', 140),
];
/**
 * Settings of a camera. Can be requested with a MAV_CMD_REQUEST_MESSAGE command.
 */
class CameraSettings extends mavlink_1.MavLinkData {
}
exports.CameraSettings = CameraSettings;
CameraSettings.MSG_ID = 260;
CameraSettings.MSG_NAME = 'CAMERA_SETTINGS';
CameraSettings.PAYLOAD_LENGTH = 13;
CameraSettings.MAGIC_NUMBER = 146;
CameraSettings.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_boot_ms', 'timeBootMs', 0, false, 4, 'uint32_t', 'ms'),
    new mavlink_1.MavLinkPacketField('mode_id', 'modeId', 4, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('zoomLevel', 'zoomLevel', 5, true, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('focusLevel', 'focusLevel', 9, true, 4, 'float', ''),
];
/**
 * Information about a storage medium. This message is sent in response to a request with
 * MAV_CMD_REQUEST_MESSAGE and whenever the status of the storage changes (STORAGE_STATUS). Use
 * MAV_CMD_REQUEST_MESSAGE.param2 to indicate the index/id of requested storage: 0 for all, 1 for
 * first, 2 for second, etc.
 */
class StorageInformation extends mavlink_1.MavLinkData {
}
exports.StorageInformation = StorageInformation;
StorageInformation.MSG_ID = 261;
StorageInformation.MSG_NAME = 'STORAGE_INFORMATION';
StorageInformation.PAYLOAD_LENGTH = 27;
StorageInformation.MAGIC_NUMBER = 179;
StorageInformation.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_boot_ms', 'timeBootMs', 0, false, 4, 'uint32_t', 'ms'),
    new mavlink_1.MavLinkPacketField('total_capacity', 'totalCapacity', 4, false, 4, 'float', 'MiB'),
    new mavlink_1.MavLinkPacketField('used_capacity', 'usedCapacity', 8, false, 4, 'float', 'MiB'),
    new mavlink_1.MavLinkPacketField('available_capacity', 'availableCapacity', 12, false, 4, 'float', 'MiB'),
    new mavlink_1.MavLinkPacketField('read_speed', 'readSpeed', 16, false, 4, 'float', 'MiB/s'),
    new mavlink_1.MavLinkPacketField('write_speed', 'writeSpeed', 20, false, 4, 'float', 'MiB/s'),
    new mavlink_1.MavLinkPacketField('storage_id', 'storageId', 24, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('storage_count', 'storageCount', 25, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('status', 'status', 26, false, 1, 'uint8_t', ''),
];
/**
 * Information about the status of a capture. Can be requested with a MAV_CMD_REQUEST_MESSAGE command.
 */
class CameraCaptureStatus extends mavlink_1.MavLinkData {
}
exports.CameraCaptureStatus = CameraCaptureStatus;
CameraCaptureStatus.MSG_ID = 262;
CameraCaptureStatus.MSG_NAME = 'CAMERA_CAPTURE_STATUS';
CameraCaptureStatus.PAYLOAD_LENGTH = 22;
CameraCaptureStatus.MAGIC_NUMBER = 12;
CameraCaptureStatus.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_boot_ms', 'timeBootMs', 0, false, 4, 'uint32_t', 'ms'),
    new mavlink_1.MavLinkPacketField('image_interval', 'imageInterval', 4, false, 4, 'float', 's'),
    new mavlink_1.MavLinkPacketField('recording_time_ms', 'recordingTimeMs', 8, false, 4, 'uint32_t', 'ms'),
    new mavlink_1.MavLinkPacketField('available_capacity', 'availableCapacity', 12, false, 4, 'float', 'MiB'),
    new mavlink_1.MavLinkPacketField('image_status', 'imageStatus', 16, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('video_status', 'videoStatus', 17, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('image_count', 'imageCount', 18, true, 4, 'int32_t', ''),
];
/**
 * Information about a captured image. This is emitted every time a message is captured. It may be
 * re-requested using MAV_CMD_REQUEST_MESSAGE, using param2 to indicate the sequence number for the
 * missing image.
 */
class CameraImageCaptured extends mavlink_1.MavLinkData {
}
exports.CameraImageCaptured = CameraImageCaptured;
CameraImageCaptured.MSG_ID = 263;
CameraImageCaptured.MSG_NAME = 'CAMERA_IMAGE_CAPTURED';
CameraImageCaptured.PAYLOAD_LENGTH = 255;
CameraImageCaptured.MAGIC_NUMBER = 133;
CameraImageCaptured.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_utc', 'timeUtc', 0, false, 8, 'uint64_t', 'us'),
    new mavlink_1.MavLinkPacketField('time_boot_ms', 'timeBootMs', 8, false, 4, 'uint32_t', 'ms'),
    new mavlink_1.MavLinkPacketField('lat', 'lat', 12, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('lon', 'lon', 16, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('alt', 'alt', 20, false, 4, 'int32_t', 'mm'),
    new mavlink_1.MavLinkPacketField('relative_alt', 'relativeAlt', 24, false, 4, 'int32_t', 'mm'),
    new mavlink_1.MavLinkPacketField('q', 'q', 28, false, 4, 'float[]', '', 4),
    new mavlink_1.MavLinkPacketField('image_index', 'imageIndex', 44, false, 4, 'int32_t', ''),
    new mavlink_1.MavLinkPacketField('camera_id', 'cameraId', 48, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('capture_result', 'captureResult', 49, false, 1, 'int8_t', ''),
    new mavlink_1.MavLinkPacketField('file_url', 'fileUrl', 50, false, 1, 'char[]', '', 205),
];
/**
 * Information about flight since last arming.
 */
class FlightInformation extends mavlink_1.MavLinkData {
}
exports.FlightInformation = FlightInformation;
FlightInformation.MSG_ID = 264;
FlightInformation.MSG_NAME = 'FLIGHT_INFORMATION';
FlightInformation.PAYLOAD_LENGTH = 28;
FlightInformation.MAGIC_NUMBER = 49;
FlightInformation.FIELDS = [
    new mavlink_1.MavLinkPacketField('arming_time_utc', 'armingTimeUtc', 0, false, 8, 'uint64_t', 'us'),
    new mavlink_1.MavLinkPacketField('takeoff_time_utc', 'takeoffTimeUtc', 8, false, 8, 'uint64_t', 'us'),
    new mavlink_1.MavLinkPacketField('flight_uuid', 'flightUuid', 16, false, 8, 'uint64_t', ''),
    new mavlink_1.MavLinkPacketField('time_boot_ms', 'timeBootMs', 24, false, 4, 'uint32_t', 'ms'),
];
/**
 * Orientation of a mount
 */
class MountOrientation extends mavlink_1.MavLinkData {
}
exports.MountOrientation = MountOrientation;
MountOrientation.MSG_ID = 265;
MountOrientation.MSG_NAME = 'MOUNT_ORIENTATION';
MountOrientation.PAYLOAD_LENGTH = 20;
MountOrientation.MAGIC_NUMBER = 26;
MountOrientation.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_boot_ms', 'timeBootMs', 0, false, 4, 'uint32_t', 'ms'),
    new mavlink_1.MavLinkPacketField('roll', 'roll', 4, false, 4, 'float', 'deg'),
    new mavlink_1.MavLinkPacketField('pitch', 'pitch', 8, false, 4, 'float', 'deg'),
    new mavlink_1.MavLinkPacketField('yaw', 'yaw', 12, false, 4, 'float', 'deg'),
    new mavlink_1.MavLinkPacketField('yaw_absolute', 'yawAbsolute', 16, true, 4, 'float', 'deg'),
];
/**
 * A message containing logged data (see also MAV_CMD_LOGGING_START)
 */
class LoggingData extends mavlink_1.MavLinkData {
}
exports.LoggingData = LoggingData;
LoggingData.MSG_ID = 266;
LoggingData.MSG_NAME = 'LOGGING_DATA';
LoggingData.PAYLOAD_LENGTH = 255;
LoggingData.MAGIC_NUMBER = 193;
LoggingData.FIELDS = [
    new mavlink_1.MavLinkPacketField('sequence', 'sequence', 0, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 2, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 3, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('length', 'length', 4, false, 1, 'uint8_t', 'bytes'),
    new mavlink_1.MavLinkPacketField('first_message_offset', 'firstMessageOffset', 5, false, 1, 'uint8_t', 'bytes'),
    new mavlink_1.MavLinkPacketField('data', 'data', 6, false, 1, 'uint8_t[]', '', 249),
];
/**
 * A message containing logged data which requires a LOGGING_ACK to be sent back
 */
class LoggingDataAcked extends mavlink_1.MavLinkData {
}
exports.LoggingDataAcked = LoggingDataAcked;
LoggingDataAcked.MSG_ID = 267;
LoggingDataAcked.MSG_NAME = 'LOGGING_DATA_ACKED';
LoggingDataAcked.PAYLOAD_LENGTH = 255;
LoggingDataAcked.MAGIC_NUMBER = 35;
LoggingDataAcked.FIELDS = [
    new mavlink_1.MavLinkPacketField('sequence', 'sequence', 0, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 2, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 3, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('length', 'length', 4, false, 1, 'uint8_t', 'bytes'),
    new mavlink_1.MavLinkPacketField('first_message_offset', 'firstMessageOffset', 5, false, 1, 'uint8_t', 'bytes'),
    new mavlink_1.MavLinkPacketField('data', 'data', 6, false, 1, 'uint8_t[]', '', 249),
];
/**
 * An ack for a LOGGING_DATA_ACKED message
 */
class LoggingAck extends mavlink_1.MavLinkData {
}
exports.LoggingAck = LoggingAck;
LoggingAck.MSG_ID = 268;
LoggingAck.MSG_NAME = 'LOGGING_ACK';
LoggingAck.PAYLOAD_LENGTH = 4;
LoggingAck.MAGIC_NUMBER = 14;
LoggingAck.FIELDS = [
    new mavlink_1.MavLinkPacketField('sequence', 'sequence', 0, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 2, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 3, false, 1, 'uint8_t', ''),
];
/**
 * Information about video stream. It may be requested using MAV_CMD_REQUEST_MESSAGE, where param2
 * indicates the video stream id: 0 for all streams, 1 for first, 2 for second, etc.
 */
class VideoStreamInformation extends mavlink_1.MavLinkData {
}
exports.VideoStreamInformation = VideoStreamInformation;
VideoStreamInformation.MSG_ID = 269;
VideoStreamInformation.MSG_NAME = 'VIDEO_STREAM_INFORMATION';
VideoStreamInformation.PAYLOAD_LENGTH = 213;
VideoStreamInformation.MAGIC_NUMBER = 109;
VideoStreamInformation.FIELDS = [
    new mavlink_1.MavLinkPacketField('framerate', 'framerate', 0, false, 4, 'float', 'Hz'),
    new mavlink_1.MavLinkPacketField('bitrate', 'bitrate', 4, false, 4, 'uint32_t', 'bits/s'),
    new mavlink_1.MavLinkPacketField('flags', 'flags', 8, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('resolution_h', 'resolutionH', 10, false, 2, 'uint16_t', 'pix'),
    new mavlink_1.MavLinkPacketField('resolution_v', 'resolutionV', 12, false, 2, 'uint16_t', 'pix'),
    new mavlink_1.MavLinkPacketField('rotation', 'rotation', 14, false, 2, 'uint16_t', 'deg'),
    new mavlink_1.MavLinkPacketField('hfov', 'hfov', 16, false, 2, 'uint16_t', 'deg'),
    new mavlink_1.MavLinkPacketField('stream_id', 'streamId', 18, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('count', 'count', 19, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('type', 'type', 20, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('name', 'name', 21, false, 1, 'char[]', '', 32),
    new mavlink_1.MavLinkPacketField('uri', 'uri', 53, false, 1, 'char[]', '', 160),
];
/**
 * Information about the status of a video stream. It may be requested using MAV_CMD_REQUEST_MESSAGE.
 */
class VideoStreamStatus extends mavlink_1.MavLinkData {
}
exports.VideoStreamStatus = VideoStreamStatus;
VideoStreamStatus.MSG_ID = 270;
VideoStreamStatus.MSG_NAME = 'VIDEO_STREAM_STATUS';
VideoStreamStatus.PAYLOAD_LENGTH = 19;
VideoStreamStatus.MAGIC_NUMBER = 59;
VideoStreamStatus.FIELDS = [
    new mavlink_1.MavLinkPacketField('framerate', 'framerate', 0, false, 4, 'float', 'Hz'),
    new mavlink_1.MavLinkPacketField('bitrate', 'bitrate', 4, false, 4, 'uint32_t', 'bits/s'),
    new mavlink_1.MavLinkPacketField('flags', 'flags', 8, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('resolution_h', 'resolutionH', 10, false, 2, 'uint16_t', 'pix'),
    new mavlink_1.MavLinkPacketField('resolution_v', 'resolutionV', 12, false, 2, 'uint16_t', 'pix'),
    new mavlink_1.MavLinkPacketField('rotation', 'rotation', 14, false, 2, 'uint16_t', 'deg'),
    new mavlink_1.MavLinkPacketField('hfov', 'hfov', 16, false, 2, 'uint16_t', 'deg'),
    new mavlink_1.MavLinkPacketField('stream_id', 'streamId', 18, false, 1, 'uint8_t', ''),
];
/**
 * Configure WiFi AP SSID, password, and mode. This message is re-emitted as an acknowledgement by the
 * AP. The message may also be explicitly requested using MAV_CMD_REQUEST_MESSAGE
 */
class WifiConfigAp extends mavlink_1.MavLinkData {
}
exports.WifiConfigAp = WifiConfigAp;
WifiConfigAp.MSG_ID = 299;
WifiConfigAp.MSG_NAME = 'WIFI_CONFIG_AP';
WifiConfigAp.PAYLOAD_LENGTH = 96;
WifiConfigAp.MAGIC_NUMBER = 19;
WifiConfigAp.FIELDS = [
    new mavlink_1.MavLinkPacketField('ssid', 'ssid', 0, false, 1, 'char[]', '', 32),
    new mavlink_1.MavLinkPacketField('password', 'password', 32, false, 1, 'char[]', '', 64),
];
/**
 * The location and information of an AIS vessel
 */
class AisVessel extends mavlink_1.MavLinkData {
}
exports.AisVessel = AisVessel;
AisVessel.MSG_ID = 301;
AisVessel.MSG_NAME = 'AIS_VESSEL';
AisVessel.PAYLOAD_LENGTH = 58;
AisVessel.MAGIC_NUMBER = 243;
AisVessel.FIELDS = [
    new mavlink_1.MavLinkPacketField('MMSI', 'MMSI', 0, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('lat', 'lat', 4, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('lon', 'lon', 8, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('COG', 'COG', 12, false, 2, 'uint16_t', 'cdeg'),
    new mavlink_1.MavLinkPacketField('heading', 'heading', 14, false, 2, 'uint16_t', 'cdeg'),
    new mavlink_1.MavLinkPacketField('velocity', 'velocity', 16, false, 2, 'uint16_t', 'cm/s'),
    new mavlink_1.MavLinkPacketField('dimension_bow', 'dimensionBow', 18, false, 2, 'uint16_t', 'm'),
    new mavlink_1.MavLinkPacketField('dimension_stern', 'dimensionStern', 20, false, 2, 'uint16_t', 'm'),
    new mavlink_1.MavLinkPacketField('tslc', 'tslc', 22, false, 2, 'uint16_t', 's'),
    new mavlink_1.MavLinkPacketField('flags', 'flags', 24, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('turn_rate', 'turnRate', 26, false, 1, 'int8_t', 'cdeg/s'),
    new mavlink_1.MavLinkPacketField('navigational_status', 'navigationalStatus', 27, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('type', 'type', 28, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('dimension_port', 'dimensionPort', 29, false, 1, 'uint8_t', 'm'),
    new mavlink_1.MavLinkPacketField('dimension_starboard', 'dimensionStarboard', 30, false, 1, 'uint8_t', 'm'),
    new mavlink_1.MavLinkPacketField('callsign', 'callsign', 31, false, 1, 'char[]', '', 7),
    new mavlink_1.MavLinkPacketField('name', 'name', 38, false, 1, 'char[]', '', 20),
];
/**
 * General status information of an UAVCAN node. Please refer to the definition of the UAVCAN message
 * "uavcan.protocol.NodeStatus" for the background information. The UAVCAN specification is available
 * at http://uavcan.org.
 */
class UavcanNodeStatus extends mavlink_1.MavLinkData {
}
exports.UavcanNodeStatus = UavcanNodeStatus;
UavcanNodeStatus.MSG_ID = 310;
UavcanNodeStatus.MSG_NAME = 'UAVCAN_NODE_STATUS';
UavcanNodeStatus.PAYLOAD_LENGTH = 17;
UavcanNodeStatus.MAGIC_NUMBER = 28;
UavcanNodeStatus.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_usec', 'timeUsec', 0, false, 8, 'uint64_t', 'us'),
    new mavlink_1.MavLinkPacketField('uptime_sec', 'uptimeSec', 8, false, 4, 'uint32_t', 's'),
    new mavlink_1.MavLinkPacketField('vendor_specific_status_code', 'vendorSpecificStatusCode', 12, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('health', 'health', 14, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('mode', 'mode', 15, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('sub_mode', 'subMode', 16, false, 1, 'uint8_t', ''),
];
/**
 * General information describing a particular UAVCAN node. Please refer to the definition of the
 * UAVCAN service "uavcan.protocol.GetNodeInfo" for the background information. This message should be
 * emitted by the system whenever a new node appears online, or an existing node reboots. Additionally,
 * it can be emitted upon request from the other end of the MAVLink channel (see
 * MAV_CMD_UAVCAN_GET_NODE_INFO). It is also not prohibited to emit this message unconditionally at a
 * low frequency. The UAVCAN specification is available at http://uavcan.org.
 */
class UavcanNodeInfo extends mavlink_1.MavLinkData {
}
exports.UavcanNodeInfo = UavcanNodeInfo;
UavcanNodeInfo.MSG_ID = 311;
UavcanNodeInfo.MSG_NAME = 'UAVCAN_NODE_INFO';
UavcanNodeInfo.PAYLOAD_LENGTH = 116;
UavcanNodeInfo.MAGIC_NUMBER = 95;
UavcanNodeInfo.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_usec', 'timeUsec', 0, false, 8, 'uint64_t', 'us'),
    new mavlink_1.MavLinkPacketField('uptime_sec', 'uptimeSec', 8, false, 4, 'uint32_t', 's'),
    new mavlink_1.MavLinkPacketField('sw_vcs_commit', 'swVcsCommit', 12, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('name', 'name', 16, false, 1, 'char[]', '', 80),
    new mavlink_1.MavLinkPacketField('hw_version_major', 'hwVersionMajor', 96, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('hw_version_minor', 'hwVersionMinor', 97, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('hw_unique_id', 'hwUniqueId', 98, false, 1, 'uint8_t[]', '', 16),
    new mavlink_1.MavLinkPacketField('sw_version_major', 'swVersionMajor', 114, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('sw_version_minor', 'swVersionMinor', 115, false, 1, 'uint8_t', ''),
];
/**
 * Obstacle distances in front of the sensor, starting from the left in increment degrees to the right
 */
class ObstacleDistance extends mavlink_1.MavLinkData {
}
exports.ObstacleDistance = ObstacleDistance;
ObstacleDistance.MSG_ID = 330;
ObstacleDistance.MSG_NAME = 'OBSTACLE_DISTANCE';
ObstacleDistance.PAYLOAD_LENGTH = 167;
ObstacleDistance.MAGIC_NUMBER = 23;
ObstacleDistance.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_usec', 'timeUsec', 0, false, 8, 'uint64_t', 'us'),
    new mavlink_1.MavLinkPacketField('distances', 'distances', 8, false, 2, 'uint16_t[]', 'cm', 72),
    new mavlink_1.MavLinkPacketField('min_distance', 'minDistance', 152, false, 2, 'uint16_t', 'cm'),
    new mavlink_1.MavLinkPacketField('max_distance', 'maxDistance', 154, false, 2, 'uint16_t', 'cm'),
    new mavlink_1.MavLinkPacketField('sensor_type', 'sensorType', 156, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('increment', 'increment', 157, false, 1, 'uint8_t', 'deg'),
    new mavlink_1.MavLinkPacketField('increment_f', 'incrementF', 158, true, 4, 'float', 'deg'),
    new mavlink_1.MavLinkPacketField('angle_offset', 'angleOffset', 162, true, 4, 'float', 'deg'),
    new mavlink_1.MavLinkPacketField('frame', 'frame', 166, true, 1, 'uint8_t', ''),
];
/**
 * Odometry message to communicate odometry information with an external interface. Fits ROS REP 147
 * standard for aerial vehicles (http://www.ros.org/reps/rep-0147.html).
 */
class Odometry extends mavlink_1.MavLinkData {
}
exports.Odometry = Odometry;
Odometry.MSG_ID = 331;
Odometry.MSG_NAME = 'ODOMETRY';
Odometry.PAYLOAD_LENGTH = 232;
Odometry.MAGIC_NUMBER = 91;
Odometry.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_usec', 'timeUsec', 0, false, 8, 'uint64_t', 'us'),
    new mavlink_1.MavLinkPacketField('x', 'x', 8, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('y', 'y', 12, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('z', 'z', 16, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('q', 'q', 20, false, 4, 'float[]', '', 4),
    new mavlink_1.MavLinkPacketField('vx', 'vx', 36, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('vy', 'vy', 40, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('vz', 'vz', 44, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('rollspeed', 'rollspeed', 48, false, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('pitchspeed', 'pitchspeed', 52, false, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('yawspeed', 'yawspeed', 56, false, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('pose_covariance', 'poseCovariance', 60, false, 4, 'float[]', '', 21),
    new mavlink_1.MavLinkPacketField('velocity_covariance', 'velocityCovariance', 144, false, 4, 'float[]', '', 21),
    new mavlink_1.MavLinkPacketField('frame_id', 'frameId', 228, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('child_frame_id', 'childFrameId', 229, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('reset_counter', 'resetCounter', 230, true, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('estimator_type', 'estimatorType', 231, true, 1, 'uint8_t', ''),
];
/**
 * Status of the Iridium SBD link.
 */
class IsbdLinkStatus extends mavlink_1.MavLinkData {
}
exports.IsbdLinkStatus = IsbdLinkStatus;
IsbdLinkStatus.MSG_ID = 335;
IsbdLinkStatus.MSG_NAME = 'ISBD_LINK_STATUS';
IsbdLinkStatus.PAYLOAD_LENGTH = 24;
IsbdLinkStatus.MAGIC_NUMBER = 225;
IsbdLinkStatus.FIELDS = [
    new mavlink_1.MavLinkPacketField('timestamp', 'timestamp', 0, false, 8, 'uint64_t', 'us'),
    new mavlink_1.MavLinkPacketField('last_heartbeat', 'lastHeartbeat', 8, false, 8, 'uint64_t', 'us'),
    new mavlink_1.MavLinkPacketField('failed_sessions', 'failedSessions', 16, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('successful_sessions', 'successfulSessions', 18, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('signal_quality', 'signalQuality', 20, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('ring_pending', 'ringPending', 21, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('tx_session_pending', 'txSessionPending', 22, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('rx_session_pending', 'rxSessionPending', 23, false, 1, 'uint8_t', ''),
];
/**
 * RPM sensor data message.
 */
class RawRpm extends mavlink_1.MavLinkData {
}
exports.RawRpm = RawRpm;
RawRpm.MSG_ID = 339;
RawRpm.MSG_NAME = 'RAW_RPM';
RawRpm.PAYLOAD_LENGTH = 5;
RawRpm.MAGIC_NUMBER = 199;
RawRpm.FIELDS = [
    new mavlink_1.MavLinkPacketField('frequency', 'frequency', 0, false, 4, 'float', 'rpm'),
    new mavlink_1.MavLinkPacketField('index', 'index', 4, false, 1, 'uint8_t', ''),
];
/**
 * The global position resulting from GPS and sensor fusion.
 */
class UtmGlobalPosition extends mavlink_1.MavLinkData {
}
exports.UtmGlobalPosition = UtmGlobalPosition;
UtmGlobalPosition.MSG_ID = 340;
UtmGlobalPosition.MSG_NAME = 'UTM_GLOBAL_POSITION';
UtmGlobalPosition.PAYLOAD_LENGTH = 70;
UtmGlobalPosition.MAGIC_NUMBER = 99;
UtmGlobalPosition.FIELDS = [
    new mavlink_1.MavLinkPacketField('time', 'time', 0, false, 8, 'uint64_t', 'us'),
    new mavlink_1.MavLinkPacketField('lat', 'lat', 8, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('lon', 'lon', 12, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('alt', 'alt', 16, false, 4, 'int32_t', 'mm'),
    new mavlink_1.MavLinkPacketField('relative_alt', 'relativeAlt', 20, false, 4, 'int32_t', 'mm'),
    new mavlink_1.MavLinkPacketField('next_lat', 'nextLat', 24, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('next_lon', 'nextLon', 28, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('next_alt', 'nextAlt', 32, false, 4, 'int32_t', 'mm'),
    new mavlink_1.MavLinkPacketField('vx', 'vx', 36, false, 2, 'int16_t', 'cm/s'),
    new mavlink_1.MavLinkPacketField('vy', 'vy', 38, false, 2, 'int16_t', 'cm/s'),
    new mavlink_1.MavLinkPacketField('vz', 'vz', 40, false, 2, 'int16_t', 'cm/s'),
    new mavlink_1.MavLinkPacketField('h_acc', 'hAcc', 42, false, 2, 'uint16_t', 'mm'),
    new mavlink_1.MavLinkPacketField('v_acc', 'vAcc', 44, false, 2, 'uint16_t', 'mm'),
    new mavlink_1.MavLinkPacketField('vel_acc', 'velAcc', 46, false, 2, 'uint16_t', 'cm/s'),
    new mavlink_1.MavLinkPacketField('update_rate', 'updateRate', 48, false, 2, 'uint16_t', 'cs'),
    new mavlink_1.MavLinkPacketField('uas_id', 'uasId', 50, false, 1, 'uint8_t[]', '', 18),
    new mavlink_1.MavLinkPacketField('flight_state', 'flightState', 68, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('flags', 'flags', 69, false, 1, 'uint8_t', ''),
];
/**
 * Large debug/prototyping array. The message uses the maximum available payload for data. The array_id
 * and name fields are used to discriminate between messages in code and in user interfaces
 * (respectively). Do not use in production code.
 */
class DebugFloatArray extends mavlink_1.MavLinkData {
}
exports.DebugFloatArray = DebugFloatArray;
DebugFloatArray.MSG_ID = 350;
DebugFloatArray.MSG_NAME = 'DEBUG_FLOAT_ARRAY';
DebugFloatArray.PAYLOAD_LENGTH = 252;
DebugFloatArray.MAGIC_NUMBER = 232;
DebugFloatArray.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_usec', 'timeUsec', 0, false, 8, 'uint64_t', 'us'),
    new mavlink_1.MavLinkPacketField('array_id', 'arrayId', 8, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('name', 'name', 10, false, 1, 'char[]', '', 10),
    new mavlink_1.MavLinkPacketField('data', 'data', 20, true, 4, 'float[]', '', 58),
];
/**
 * Smart Battery information (static/infrequent update). Use for updates from: smart battery to flight
 * stack, flight stack to GCS. Use BATTERY_STATUS for smart battery frequent updates.
 */
class SmartBatteryInfo extends mavlink_1.MavLinkData {
}
exports.SmartBatteryInfo = SmartBatteryInfo;
SmartBatteryInfo.MSG_ID = 370;
SmartBatteryInfo.MSG_NAME = 'SMART_BATTERY_INFO';
SmartBatteryInfo.PAYLOAD_LENGTH = 109;
SmartBatteryInfo.MAGIC_NUMBER = 75;
SmartBatteryInfo.FIELDS = [
    new mavlink_1.MavLinkPacketField('capacity_full_specification', 'capacityFullSpecification', 0, false, 4, 'int32_t', 'mAh'),
    new mavlink_1.MavLinkPacketField('capacity_full', 'capacityFull', 4, false, 4, 'int32_t', 'mAh'),
    new mavlink_1.MavLinkPacketField('cycle_count', 'cycleCount', 8, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('weight', 'weight', 10, false, 2, 'uint16_t', 'g'),
    new mavlink_1.MavLinkPacketField('discharge_minimum_voltage', 'dischargeMinimumVoltage', 12, false, 2, 'uint16_t', 'mV'),
    new mavlink_1.MavLinkPacketField('charging_minimum_voltage', 'chargingMinimumVoltage', 14, false, 2, 'uint16_t', 'mV'),
    new mavlink_1.MavLinkPacketField('resting_minimum_voltage', 'restingMinimumVoltage', 16, false, 2, 'uint16_t', 'mV'),
    new mavlink_1.MavLinkPacketField('id', 'id', 18, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('battery_function', 'batteryFunction', 19, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('type', 'type', 20, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('serial_number', 'serialNumber', 21, false, 1, 'char[]', '', 16),
    new mavlink_1.MavLinkPacketField('device_name', 'deviceName', 37, false, 1, 'char[]', '', 50),
    new mavlink_1.MavLinkPacketField('charging_maximum_voltage', 'chargingMaximumVoltage', 87, true, 2, 'uint16_t', 'mV'),
    new mavlink_1.MavLinkPacketField('cells_in_series', 'cellsInSeries', 89, true, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('discharge_maximum_current', 'dischargeMaximumCurrent', 90, true, 4, 'uint32_t', 'mA'),
    new mavlink_1.MavLinkPacketField('discharge_maximum_burst_current', 'dischargeMaximumBurstCurrent', 94, true, 4, 'uint32_t', 'mA'),
    new mavlink_1.MavLinkPacketField('manufacture_date', 'manufactureDate', 98, true, 1, 'char[]', '', 11),
];
/**
 * Telemetry of power generation system. Alternator or mechanical generator.
 */
class GeneratorStatus extends mavlink_1.MavLinkData {
}
exports.GeneratorStatus = GeneratorStatus;
GeneratorStatus.MSG_ID = 373;
GeneratorStatus.MSG_NAME = 'GENERATOR_STATUS';
GeneratorStatus.PAYLOAD_LENGTH = 42;
GeneratorStatus.MAGIC_NUMBER = 117;
GeneratorStatus.FIELDS = [
    new mavlink_1.MavLinkPacketField('status', 'status', 0, false, 8, 'uint64_t', ''),
    new mavlink_1.MavLinkPacketField('battery_current', 'batteryCurrent', 8, false, 4, 'float', 'A'),
    new mavlink_1.MavLinkPacketField('load_current', 'loadCurrent', 12, false, 4, 'float', 'A'),
    new mavlink_1.MavLinkPacketField('power_generated', 'powerGenerated', 16, false, 4, 'float', 'W'),
    new mavlink_1.MavLinkPacketField('bus_voltage', 'busVoltage', 20, false, 4, 'float', 'V'),
    new mavlink_1.MavLinkPacketField('bat_current_setpoint', 'batCurrentSetpoint', 24, false, 4, 'float', 'A'),
    new mavlink_1.MavLinkPacketField('runtime', 'runtime', 28, false, 4, 'uint32_t', 's'),
    new mavlink_1.MavLinkPacketField('time_until_maintenance', 'timeUntilMaintenance', 32, false, 4, 'int32_t', 's'),
    new mavlink_1.MavLinkPacketField('generator_speed', 'generatorSpeed', 36, false, 2, 'uint16_t', 'rpm'),
    new mavlink_1.MavLinkPacketField('rectifier_temperature', 'rectifierTemperature', 38, false, 2, 'int16_t', 'degC'),
    new mavlink_1.MavLinkPacketField('generator_temperature', 'generatorTemperature', 40, false, 2, 'int16_t', 'degC'),
];
/**
 * The raw values of the actuator outputs (e.g. on Pixhawk, from MAIN, AUX ports). This message
 * supersedes SERVO_OUTPUT_RAW.
 */
class ActuatorOutputStatus extends mavlink_1.MavLinkData {
}
exports.ActuatorOutputStatus = ActuatorOutputStatus;
ActuatorOutputStatus.MSG_ID = 375;
ActuatorOutputStatus.MSG_NAME = 'ACTUATOR_OUTPUT_STATUS';
ActuatorOutputStatus.PAYLOAD_LENGTH = 140;
ActuatorOutputStatus.MAGIC_NUMBER = 251;
ActuatorOutputStatus.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_usec', 'timeUsec', 0, false, 8, 'uint64_t', 'us'),
    new mavlink_1.MavLinkPacketField('active', 'active', 8, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('actuator', 'actuator', 12, false, 4, 'float[]', '', 32),
];
/**
 * Position of an aircraft in swarm.
 */
class SwarmVehicle extends mavlink_1.MavLinkData {
}
exports.SwarmVehicle = SwarmVehicle;
SwarmVehicle.MSG_ID = 2820;
SwarmVehicle.MSG_NAME = 'SWARM_VEHICLE';
SwarmVehicle.PAYLOAD_LENGTH = 37;
SwarmVehicle.MAGIC_NUMBER = 69;
SwarmVehicle.FIELDS = [
    new mavlink_1.MavLinkPacketField('timestamp', 'timestamp', 0, false, 4, 'uint32_t', 's'),
    new mavlink_1.MavLinkPacketField('effective_radius', 'effectiveRadius', 4, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('lat', 'lat', 8, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('lon', 'lon', 12, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('altMSL', 'altMSL', 16, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('lat_target', 'latTarget', 20, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('lon_target', 'lonTarget', 24, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('altMSL_target', 'altMSLTarget', 28, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('aircraft_id', 'aircraftId', 32, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('squadron_id', 'squadronId', 34, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('state_nav', 'stateNav', 36, false, 1, 'uint8_t', ''),
];
/**
 * Position of an aircraft in swarm with data that updates less often.
 */
class SwarmVehicleSlow extends mavlink_1.MavLinkData {
}
exports.SwarmVehicleSlow = SwarmVehicleSlow;
SwarmVehicleSlow.MSG_ID = 2821;
SwarmVehicleSlow.MSG_NAME = 'SWARM_VEHICLE_SLOW';
SwarmVehicleSlow.PAYLOAD_LENGTH = 39;
SwarmVehicleSlow.MAGIC_NUMBER = 218;
SwarmVehicleSlow.FIELDS = [
    new mavlink_1.MavLinkPacketField('timestamp', 'timestamp', 0, false, 4, 'uint32_t', 's'),
    new mavlink_1.MavLinkPacketField('effective_radius', 'effectiveRadius', 4, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('lat_target', 'latTarget', 8, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('lon_target', 'lonTarget', 12, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('altMSL_target', 'altMSLTarget', 16, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('ROI_crc', 'ROICrc', 20, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('ROI_timestamp', 'ROITimestamp', 24, false, 4, 'uint32_t', 's'),
    new mavlink_1.MavLinkPacketField('aircraft_id', 'aircraftId', 28, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('squadron_id', 'squadronId', 30, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('speed', 'speed', 32, false, 2, 'uint16_t', 'm/s'),
    new mavlink_1.MavLinkPacketField('cog', 'cog', 34, false, 2, 'uint16_t', 'cdeg'),
    new mavlink_1.MavLinkPacketField('state_nav', 'stateNav', 36, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('state_coverage', 'stateCoverage', 37, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('state_roi', 'stateRoi', 38, false, 1, 'uint8_t', ''),
];
/**
 * Cumulative distance traveled for each reported wheel.
 */
class WheelDistance extends mavlink_1.MavLinkData {
}
exports.WheelDistance = WheelDistance;
WheelDistance.MSG_ID = 9000;
WheelDistance.MSG_NAME = 'WHEEL_DISTANCE';
WheelDistance.PAYLOAD_LENGTH = 137;
WheelDistance.MAGIC_NUMBER = 113;
WheelDistance.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_usec', 'timeUsec', 0, false, 8, 'uint64_t', 'us'),
    new mavlink_1.MavLinkPacketField('distance', 'distance', 8, false, 8, 'double[]', 'm', 16),
    new mavlink_1.MavLinkPacketField('count', 'count', 136, false, 1, 'uint8_t', ''),
];
/**
 * Winch status.
 */
class WinchStatus extends mavlink_1.MavLinkData {
}
exports.WinchStatus = WinchStatus;
WinchStatus.MSG_ID = 9005;
WinchStatus.MSG_NAME = 'WINCH_STATUS';
WinchStatus.PAYLOAD_LENGTH = 34;
WinchStatus.MAGIC_NUMBER = 117;
WinchStatus.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_usec', 'timeUsec', 0, false, 8, 'uint64_t', 'us'),
    new mavlink_1.MavLinkPacketField('line_length', 'lineLength', 8, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('speed', 'speed', 12, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('tension', 'tension', 16, false, 4, 'float', 'kg'),
    new mavlink_1.MavLinkPacketField('voltage', 'voltage', 20, false, 4, 'float', 'V'),
    new mavlink_1.MavLinkPacketField('current', 'current', 24, false, 4, 'float', 'A'),
    new mavlink_1.MavLinkPacketField('status', 'status', 28, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('temperature', 'temperature', 32, false, 2, 'int16_t', 'degC'),
];
exports.REGISTRY = {
    1: SysStatus,
    2: SystemTime,
    4: Ping,
    5: ChangeOperatorControl,
    6: ChangeOperatorControlAck,
    7: AuthKey,
    11: SetMode,
    20: ParamRequestRead,
    21: ParamRequestList,
    22: ParamValue,
    23: ParamSet,
    24: GpsRawInt,
    25: GpsStatus,
    26: ScaledImu,
    27: RawImu,
    28: RawPressure,
    29: ScaledPressure,
    30: Attitude,
    31: AttitudeQuaternion,
    32: LocalPositionNed,
    33: GlobalPositionInt,
    34: RcChannelsScaled,
    35: RcChannelsRaw,
    36: ServoOutputRaw,
    37: MissionRequestPartialList,
    38: MissionWritePartialList,
    39: MissionItem,
    40: MissionRequest,
    41: MissionSetCurrent,
    42: MissionCurrent,
    43: MissionRequestList,
    44: MissionCount,
    45: MissionClearAll,
    46: MissionItemReached,
    47: MissionAck,
    48: SetGpsGlobalOrigin,
    49: GpsGlobalOrigin,
    50: ParamMapRc,
    51: MissionRequestInt,
    54: SafetySetAllowedArea,
    55: SafetyAllowedArea,
    61: AttitudeQuaternionCov,
    62: NavControllerOutput,
    63: GlobalPositionIntCov,
    64: LocalPositionNedCov,
    65: RcChannels,
    66: RequestDataStream,
    67: DataStream,
    69: ManualControl,
    70: RcChannelsOverride,
    73: MissionItemInt,
    74: VfrHud,
    75: CommandInt,
    76: CommandLong,
    77: CommandAck,
    81: ManualSetpoint,
    82: SetAttitudeTarget,
    83: AttitudeTarget,
    84: SetPositionTargetLocalNed,
    85: PositionTargetLocalNed,
    86: SetPositionTargetGlobalInt,
    87: PositionTargetGlobalInt,
    89: LocalPositionNedSystemGlobalOffset,
    90: HilState,
    91: HilControls,
    92: HilRcInputsRaw,
    93: HilActuatorControls,
    100: OpticalFlow,
    101: GlobalVisionPositionEstimate,
    102: VisionPositionEstimate,
    103: VisionSpeedEstimate,
    104: ViconPositionEstimate,
    105: HighresImu,
    106: OpticalFlowRad,
    107: HilSensor,
    108: SimState,
    109: RadioStatus,
    110: FileTransferProtocol,
    111: TimeSync,
    112: CameraTrigger,
    113: HilGps,
    114: HilOpticalFlow,
    115: HilStateQuaternion,
    116: ScaledImu2,
    117: LogRequestList,
    118: LogEntry,
    119: LogRequestData,
    120: LogData,
    121: LogErase,
    122: LogRequestEnd,
    123: GpsInjectData,
    124: Gps2Raw,
    125: PowerStatus,
    126: SerialControl,
    127: GpsRtk,
    128: Gps2Rtk,
    129: ScaledImu3,
    130: DataTransmissionHandshake,
    131: EncapsulatedData,
    132: DistanceSensor,
    133: TerrainRequest,
    134: TerrainData,
    135: TerrainCheck,
    136: TerrainReport,
    137: ScaledPressure2,
    138: MotionCaptureAttPos,
    139: SetActuatorControlTarget,
    140: ActuatorControlTarget,
    141: Altitude,
    142: ResourceRequest,
    143: ScaledPressure3,
    144: FollowTarget,
    146: ControlSystemState,
    147: BatteryStatus,
    148: AutopilotVersion,
    149: LandingTarget,
    162: FenceStatus,
    192: MagCalReport,
    225: EfiStatus,
    230: EstimatorStatus,
    231: WindCov,
    232: GpsInput,
    233: GpsRtcmData,
    234: HighLatency,
    235: HighLatency2,
    241: Vibration,
    242: HomePosition,
    243: SetHomePosition,
    244: MessageInterval,
    245: ExtendedSysState,
    246: AdsbVehicle,
    247: Collision,
    248: V2Extension,
    249: MemoryVect,
    250: DebugVect,
    251: NamedValueFloat,
    252: NamedValueInt,
    253: StatusText,
    254: Debug,
    256: SetupSigning,
    257: ButtonChange,
    258: PlayTune,
    259: CameraInformation,
    260: CameraSettings,
    261: StorageInformation,
    262: CameraCaptureStatus,
    263: CameraImageCaptured,
    264: FlightInformation,
    265: MountOrientation,
    266: LoggingData,
    267: LoggingDataAcked,
    268: LoggingAck,
    269: VideoStreamInformation,
    270: VideoStreamStatus,
    299: WifiConfigAp,
    301: AisVessel,
    310: UavcanNodeStatus,
    311: UavcanNodeInfo,
    330: ObstacleDistance,
    331: Odometry,
    335: IsbdLinkStatus,
    339: RawRpm,
    340: UtmGlobalPosition,
    350: DebugFloatArray,
    370: SmartBatteryInfo,
    373: GeneratorStatus,
    375: ActuatorOutputStatus,
    2820: SwarmVehicle,
    2821: SwarmVehicleSlow,
    9000: WheelDistance,
    9005: WinchStatus,
};
