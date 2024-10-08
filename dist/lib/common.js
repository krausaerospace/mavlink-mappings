"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MavDoRepositionFlags = exports.AdsbFlags = exports.AdsbEmitterType = exports.AdsbAltitudeType = exports.MavLandedState = exports.MavVtolState = exports.MavGeneratorStatusFlag = exports.MavBatteryChargeState = exports.MavBatteryFunction = exports.MavBatteryType = exports.MavEstimatorType = exports.MavMissionType = exports.MavProtocolCapability = exports.MavSensorOrientation = exports.MavDistanceSensor = exports.SerialControlFlag = exports.SerialControlDev = exports.MavPowerStatus = exports.MavSeverity = exports.MavMissionResult = exports.MavResult = exports.MavParamExtType = exports.MavParamType = exports.MavRoi = exports.MavDataStream = exports.MavCmd = exports.AutotuneAxis = exports.StorageType = exports.StorageStatus = exports.UavcanNodeMode = exports.UavcanNodeHealth = exports.WinchActions = exports.GripperActions = exports.GimbalDeviceErrorFlags = exports.GimbalManagerFlags = exports.GimbalDeviceFlags = exports.GimbalManagerCapFlags = exports.GimbalDeviceCapFlags = exports.MavMountMode = exports.FenceType = exports.FenceMitigate = exports.FenceBreach = exports.FenceAction = exports.MavlinkDataStreamType = exports.MavFrame = exports.MavSysStatusSensor = exports.MavMode = exports.MavGoto = exports.HlFailureFlag = exports.FirmwareVersionType = void 0;
exports.AisNavStatus = exports.AisType = exports.MavOdidArmStatus = exports.MavOdidOperatorIdType = exports.MavOdidClassEu = exports.MavOdidCategoryEu = exports.MavOdidClassificationType = exports.MavOdidOperatorLocationType = exports.MavOdidDescType = exports.MavOdidAuthType = exports.MavOdidTimeAcc = exports.MavOdidSpeedAcc = exports.MavOdidVerAcc = exports.MavOdidHorAcc = exports.MavOdidHeightRef = exports.MavOdidStatus = exports.MavOdidUaType = exports.MavOdidIdType = exports.MavTunnelPayloadType = exports.ParachuteAction = exports.PrecisionLandMode = exports.UtmDataAvailFlags = exports.UtmFlightState = exports.AttitudeTargetTypemask = exports.PositionTargetTypemask = exports.EngineControlOptions = exports.RcType = exports.MavArmAuthDeniedReason = exports.CameraMode = exports.ParamAck = exports.SetFocusType = exports.CameraZoomType = exports.CameraTrackingTargetData = exports.CameraTrackingMode = exports.CameraTrackingStatusFlags = exports.VideoStreamType = exports.VideoStreamStatusFlags = exports.CameraCapFlags = exports.VtolTransitionHeading = exports.LandingTargetType = exports.RtkBaselineCoordinateSystem = exports.GpsFixType = exports.MavCollisionSrc = exports.MavCollisionThreatLevel = exports.MavCollisionAction = exports.GpsInputIgnoreFlags = exports.MotorTestThrottleType = exports.MotorTestOrder = exports.EstimatorStatusFlags = exports.SpeedType = void 0;
exports.MissionRequestInt = exports.ParamMapRc = exports.GpsGlobalOrigin = exports.SetGpsGlobalOrigin = exports.MissionAck = exports.MissionItemReached = exports.MissionClearAll = exports.MissionCount = exports.MissionRequestList = exports.MissionCurrent = exports.MissionSetCurrent = exports.MissionRequest = exports.MissionItem = exports.MissionWritePartialList = exports.MissionRequestPartialList = exports.ServoOutputRaw = exports.RcChannelsRaw = exports.RcChannelsScaled = exports.GlobalPositionInt = exports.LocalPositionNed = exports.AttitudeQuaternion = exports.Attitude = exports.ScaledPressure = exports.RawPressure = exports.RawImu = exports.ScaledImu = exports.GpsStatus = exports.GpsRawInt = exports.ParamSet = exports.ParamValue = exports.ParamRequestList = exports.ParamRequestRead = exports.SetMode = exports.AuthKey = exports.ChangeOperatorControlAck = exports.ChangeOperatorControl = exports.Ping = exports.SystemTime = exports.SysStatus = exports.SafetySwitchState = exports.MissionState = exports.NavVtolLandOptions = exports.CanFilterOp = exports.MagCalStatus = exports.MavWinchStatusFlag = exports.SwarmCoverageStatus = exports.SwarmRoiStatus = exports.SwarmVehicleType = exports.SwarmVehicleState = exports.AisFlags = void 0;
exports.LogErase = exports.LogData = exports.LogRequestData = exports.LogEntry = exports.LogRequestList = exports.ScaledImu2 = exports.HilStateQuaternion = exports.HilOpticalFlow = exports.HilGps = exports.CameraTrigger = exports.TimeSync = exports.FileTransferProtocol = exports.RadioStatus = exports.SimState = exports.HilSensor = exports.OpticalFlowRad = exports.HighresImu = exports.ViconPositionEstimate = exports.VisionSpeedEstimate = exports.VisionPositionEstimate = exports.GlobalVisionPositionEstimate = exports.OpticalFlow = exports.HilActuatorControls = exports.HilRcInputsRaw = exports.HilControls = exports.HilState = exports.LocalPositionNedSystemGlobalOffset = exports.PositionTargetGlobalInt = exports.SetPositionTargetGlobalInt = exports.PositionTargetLocalNed = exports.SetPositionTargetLocalNed = exports.AttitudeTarget = exports.SetAttitudeTarget = exports.ManualSetpoint = exports.CommandAck = exports.CommandLong = exports.CommandInt = exports.VfrHud = exports.MissionItemInt = exports.RcChannelsOverride = exports.ManualControl = exports.DataStream = exports.RequestDataStream = exports.RcChannels = exports.LocalPositionNedCov = exports.GlobalPositionIntCov = exports.NavControllerOutput = exports.AttitudeQuaternionCov = exports.SafetyAllowedArea = exports.SafetySetAllowedArea = void 0;
exports.Debug = exports.StatusText = exports.NamedValueInt = exports.NamedValueFloat = exports.DebugVect = exports.MemoryVect = exports.V2Extension = exports.Collision = exports.AdsbVehicle = exports.ExtendedSysState = exports.MessageInterval = exports.SetHomePosition = exports.HomePosition = exports.Vibration = exports.HighLatency2 = exports.HighLatency = exports.GpsRtcmData = exports.GpsInput = exports.WindCov = exports.EstimatorStatus = exports.EfiStatus = exports.MagCalReport = exports.FenceStatus = exports.LandingTarget = exports.AutopilotVersion = exports.BatteryStatus = exports.ControlSystemState = exports.FollowTarget = exports.ScaledPressure3 = exports.ResourceRequest = exports.Altitude = exports.ActuatorControlTarget = exports.SetActuatorControlTarget = exports.MotionCaptureAttPos = exports.ScaledPressure2 = exports.TerrainReport = exports.TerrainCheck = exports.TerrainData = exports.TerrainRequest = exports.DistanceSensor = exports.EncapsulatedData = exports.DataTransmissionHandshake = exports.ScaledImu3 = exports.Gps2Rtk = exports.GpsRtk = exports.SerialControl = exports.PowerStatus = exports.Gps2Raw = exports.GpsInjectData = exports.LogRequestEnd = void 0;
exports.OpenDroneIdSystemUpdate = exports.OpenDroneIdArmStatus = exports.WheelDistance = exports.CanFilterModify = exports.CanfdFrame = exports.CanFrame = exports.Tunnel = exports.RelayStatus = exports.SwarmVehicleRoi = exports.SwarmVehicleSlow = exports.SwarmVehicle = exports.ActuatorOutputStatus = exports.GeneratorStatus = exports.SmartBatteryInfo = exports.DebugFloatArray = exports.UtmGlobalPosition = exports.IsbdLinkStatus = exports.Odometry = exports.ObstacleDistance = exports.UavcanNodeInfo = exports.UavcanNodeStatus = exports.AisVessel = exports.WifiConfigAp = exports.GimbalManagerSetManualControl = exports.GimbalManagerSetPitchyaw = exports.AutopilotStateForGimbalDevice = exports.GimbalDeviceAttitudeStatus = exports.GimbalDeviceSetAttitude = exports.GimbalDeviceInformation = exports.GimbalManagerSetAttitude = exports.GimbalManagerStatus = exports.GimbalManagerInformation = exports.CameraTrackingGeoStatus = exports.CameraTrackingImageStatus = exports.CameraFovStatus = exports.VideoStreamStatus = exports.VideoStreamInformation = exports.LoggingAck = exports.LoggingDataAcked = exports.LoggingData = exports.MountOrientation = exports.FlightInformation = exports.CameraImageCaptured = exports.CameraCaptureStatus = exports.StorageInformation = exports.CameraSettings = exports.CameraInformation = exports.PlayTune = exports.ButtonChange = exports.SetupSigning = void 0;
exports.DoSetRoiSysidCommand = exports.DoSetRoiNoneCommand = exports.DoSetRoiWpnextOffsetCommand = exports.DoSetRoiLocationCommand = exports.DoSetReverseCommand = exports.DoPauseContinueCommand = exports.DoRepositionCommand = exports.DoGoAroundCommand = exports.DoRallyLandCommand = exports.DoLandStartCommand = exports.DoChangeAltitudeCommand = exports.DoFlightterminationCommand = exports.DoRepeatServoCommand = exports.DoSetServoCommand = exports.DoRepeatRelayCommand = exports.DoSetRelayCommand = exports.DoSetParameterCommand = exports.DoSetHomeCommand = exports.DoChangeSpeedCommand = exports.DoJumpCommand = exports.DoSetModeCommand = exports.ConditionLastCommand = exports.ConditionYawCommand = exports.ConditionDistanceCommand = exports.ConditionChangeAltCommand = exports.ConditionDelayCommand = exports.NavLastCommand = exports.NavPayloadPlaceCommand = exports.NavDelayCommand = exports.NavGuidedEnableCommand = exports.NavVtolLandCommand = exports.NavVtolTakeoffCommand = exports.NavSplineWaypointCommand = exports.NavPathplanningCommand = exports.NavRoiCommand = exports.DoFollowRepositionCommand = exports.DoFollowCommand = exports.NavLoiterToAltCommand = exports.NavContinueAndChangeAltCommand = exports.NavFollowCommand = exports.NavTakeoffLocalCommand = exports.NavLandLocalCommand = exports.NavTakeoffCommand = exports.NavLandCommand = exports.NavReturnToLaunchCommand = exports.NavLoiterTimeCommand = exports.NavLoiterTurnsCommand = exports.NavLoiterUnlimCommand = exports.NavWaypointCommand = exports.HygrometerSensor = void 0;
exports.DoJumpTagCommand = exports.JumpTagCommand = exports.SetCameraFocusCommand = exports.SetCameraZoomCommand = exports.SetCameraModeCommand = exports.ResetCameraSettingsCommand = exports.RequestFlightInformationCommand = exports.RequestCameraCaptureStatusCommand = exports.StorageFormatCommand = exports.RequestStorageInformationCommand = exports.RequestCameraSettingsCommand = exports.RequestCameraInformationCommand = exports.RequestAutopilotCapabilitiesCommand = exports.RequestProtocolVersionCommand = exports.RequestMessageCommand = exports.SetMessageIntervalCommand = exports.GetMessageIntervalCommand = exports.StartRxPairCommand = exports.GetHomePositionCommand = exports.RunPrearmChecksCommand = exports.ComponentArmDisarmCommand = exports.MissionStartCommand = exports.ObliqueSurveyCommand = exports.OverrideGotoCommand = exports.PreflightRebootShutdownCommand = exports.PreflightStorageCommand = exports.PreflightUavcanCommand = exports.PreflightSetSensorOffsetsCommand = exports.PreflightCalibrationCommand = exports.DoLastCommand = exports.DoSetMissionCurrentCommand = exports.DoEngineControlCommand = exports.DoGuidedLimitsCommand = exports.DoGuidedMasterCommand = exports.DoMountControlQuatCommand = exports.DoSetCamTriggIntervalCommand = exports.NavSetYawSpeedCommand = exports.DoAutotuneEnableCommand = exports.DoGripperCommand = exports.DoInvertedFlightCommand = exports.DoMotorTestCommand = exports.DoParachuteCommand = exports.DoFenceEnableCommand = exports.DoSetCamTriggDistCommand = exports.DoMountControlCommand = exports.DoMountConfigureCommand = exports.DoDigicamControlCommand = exports.DoDigicamConfigureCommand = exports.DoSetRoiCommand = exports.DoControlVideoCommand = void 0;
exports.User3Command = exports.User2Command = exports.User1Command = exports.SpatialUser5Command = exports.SpatialUser4Command = exports.SpatialUser3Command = exports.SpatialUser2Command = exports.SpatialUser1Command = exports.WaypointUser5Command = exports.WaypointUser4Command = exports.WaypointUser3Command = exports.WaypointUser2Command = exports.WaypointUser1Command = exports.DoWinchCommand = exports.FixedMagCalYawCommand = exports.PayloadControlDeployCommand = exports.PayloadPrepareDeployCommand = exports.DoAdsbOutIdentCommand = exports.DoSetSafetySwitchStateCommand = exports.UavcanGetNodeInfoCommand = exports.NavSwarmRoiPolygonVertexInclusionCommand = exports.NavRallyPointCommand = exports.NavFenceCircleExclusionCommand = exports.NavFenceCircleInclusionCommand = exports.NavFencePolygonVertexExclusionCommand = exports.NavFencePolygonVertexInclusionCommand = exports.NavFenceReturnPointCommand = exports.SetGuidedSubmodeCircleCommand = exports.SetGuidedSubmodeStandardCommand = exports.ArmAuthorizationRequestCommand = exports.DoVtolTransitionCommand = exports.PanoramaCreateCommand = exports.ControlHighLatencyCommand = exports.AirframeConfigurationCommand = exports.LoggingStopCommand = exports.LoggingStartCommand = exports.RequestVideoStreamStatusCommand = exports.RequestVideoStreamInformationCommand = exports.VideoStopStreamingCommand = exports.VideoStartStreamingCommand = exports.VideoStopCaptureCommand = exports.VideoStartCaptureCommand = exports.CameraStopTrackingCommand = exports.CameraTrackRectangleCommand = exports.CameraTrackPointCommand = exports.DoTriggerControlCommand = exports.ImageStopCaptureCommand = exports.ImageStartCaptureCommand = exports.DoGimbalManagerConfigureCommand = exports.DoGimbalManagerPitchyawCommand = void 0;
exports.COMMANDS = exports.REGISTRY = exports.CanForwardCommand = exports.User5Command = exports.User4Command = void 0;
const mavlink_1 = require("./mavlink");
const minimal_1 = require("./minimal");
/**
 * These values define the type of firmware release. These values indicate the first version or release
 * of this type. For example the first alpha release would be 64, the second would be 65.
 */
var FirmwareVersionType;
(function (FirmwareVersionType) {
    /**
     * development release
     */
    FirmwareVersionType[FirmwareVersionType["DEV"] = 0] = "DEV";
    /**
     * alpha release
     */
    FirmwareVersionType[FirmwareVersionType["ALPHA"] = 64] = "ALPHA";
    /**
     * beta release
     */
    FirmwareVersionType[FirmwareVersionType["BETA"] = 128] = "BETA";
    /**
     * release candidate
     */
    FirmwareVersionType[FirmwareVersionType["RC"] = 192] = "RC";
    /**
     * official stable release
     */
    FirmwareVersionType[FirmwareVersionType["OFFICIAL"] = 255] = "OFFICIAL";
})(FirmwareVersionType = exports.FirmwareVersionType || (exports.FirmwareVersionType = {}));
/**
 * Flags to report failure cases over the high latency telemtry.
 */
var HlFailureFlag;
(function (HlFailureFlag) {
    /**
     * GPS failure.
     */
    HlFailureFlag[HlFailureFlag["GPS"] = 1] = "GPS";
    /**
     * Differential pressure sensor failure.
     */
    HlFailureFlag[HlFailureFlag["DIFFERENTIAL_PRESSURE"] = 2] = "DIFFERENTIAL_PRESSURE";
    /**
     * Absolute pressure sensor failure.
     */
    HlFailureFlag[HlFailureFlag["ABSOLUTE_PRESSURE"] = 4] = "ABSOLUTE_PRESSURE";
    /**
     * Accelerometer sensor failure.
     */
    HlFailureFlag[HlFailureFlag["HL_FAILURE_FLAG_3D_ACCEL"] = 8] = "HL_FAILURE_FLAG_3D_ACCEL";
    /**
     * Gyroscope sensor failure.
     */
    HlFailureFlag[HlFailureFlag["HL_FAILURE_FLAG_3D_GYRO"] = 16] = "HL_FAILURE_FLAG_3D_GYRO";
    /**
     * Magnetometer sensor failure.
     */
    HlFailureFlag[HlFailureFlag["HL_FAILURE_FLAG_3D_MAG"] = 32] = "HL_FAILURE_FLAG_3D_MAG";
    /**
     * Terrain subsystem failure.
     */
    HlFailureFlag[HlFailureFlag["TERRAIN"] = 64] = "TERRAIN";
    /**
     * Battery failure/critical low battery.
     */
    HlFailureFlag[HlFailureFlag["BATTERY"] = 128] = "BATTERY";
    /**
     * RC receiver failure/no rc connection.
     */
    HlFailureFlag[HlFailureFlag["RC_RECEIVER"] = 256] = "RC_RECEIVER";
    /**
     * Offboard link failure.
     */
    HlFailureFlag[HlFailureFlag["OFFBOARD_LINK"] = 512] = "OFFBOARD_LINK";
    /**
     * Engine failure.
     */
    HlFailureFlag[HlFailureFlag["ENGINE"] = 1024] = "ENGINE";
    /**
     * Geofence violation.
     */
    HlFailureFlag[HlFailureFlag["GEOFENCE"] = 2048] = "GEOFENCE";
    /**
     * Estimator failure, for example measurement rejection or large variances.
     */
    HlFailureFlag[HlFailureFlag["ESTIMATOR"] = 4096] = "ESTIMATOR";
    /**
     * Mission failure.
     */
    HlFailureFlag[HlFailureFlag["MISSION"] = 8192] = "MISSION";
})(HlFailureFlag = exports.HlFailureFlag || (exports.HlFailureFlag = {}));
/**
 * Actions that may be specified in MAV_CMD_OVERRIDE_GOTO to override mission execution.
 */
var MavGoto;
(function (MavGoto) {
    /**
     * Hold at the current position.
     */
    MavGoto[MavGoto["DO_HOLD"] = 0] = "DO_HOLD";
    /**
     * Continue with the next item in mission execution.
     */
    MavGoto[MavGoto["DO_CONTINUE"] = 1] = "DO_CONTINUE";
    /**
     * Hold at the current position of the system
     */
    MavGoto[MavGoto["HOLD_AT_CURRENT_POSITION"] = 2] = "HOLD_AT_CURRENT_POSITION";
    /**
     * Hold at the position specified in the parameters of the DO_HOLD action
     */
    MavGoto[MavGoto["HOLD_AT_SPECIFIED_POSITION"] = 3] = "HOLD_AT_SPECIFIED_POSITION";
})(MavGoto = exports.MavGoto || (exports.MavGoto = {}));
/**
 * These defines are predefined OR-combined mode flags. There is no need to use values from this enum,
 * but it simplifies the use of the mode flags. Note that manual input is enabled in all modes as a
 * safety override.
 */
var MavMode;
(function (MavMode) {
    /**
     * System is not ready to fly, booting, calibrating, etc. No flag is set.
     */
    MavMode[MavMode["PREFLIGHT"] = 0] = "PREFLIGHT";
    /**
     * System is allowed to be active, under assisted RC control.
     */
    MavMode[MavMode["STABILIZE_DISARMED"] = 80] = "STABILIZE_DISARMED";
    /**
     * System is allowed to be active, under assisted RC control.
     */
    MavMode[MavMode["STABILIZE_ARMED"] = 208] = "STABILIZE_ARMED";
    /**
     * System is allowed to be active, under manual (RC) control, no stabilization
     */
    MavMode[MavMode["MANUAL_DISARMED"] = 64] = "MANUAL_DISARMED";
    /**
     * System is allowed to be active, under manual (RC) control, no stabilization
     */
    MavMode[MavMode["MANUAL_ARMED"] = 192] = "MANUAL_ARMED";
    /**
     * System is allowed to be active, under autonomous control, manual setpoint
     */
    MavMode[MavMode["GUIDED_DISARMED"] = 88] = "GUIDED_DISARMED";
    /**
     * System is allowed to be active, under autonomous control, manual setpoint
     */
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
    /**
     * 0x01 3D gyro
     */
    MavSysStatusSensor[MavSysStatusSensor["SENSOR_3D_GYRO"] = 1] = "SENSOR_3D_GYRO";
    /**
     * 0x02 3D accelerometer
     */
    MavSysStatusSensor[MavSysStatusSensor["SENSOR_3D_ACCEL"] = 2] = "SENSOR_3D_ACCEL";
    /**
     * 0x04 3D magnetometer
     */
    MavSysStatusSensor[MavSysStatusSensor["SENSOR_3D_MAG"] = 4] = "SENSOR_3D_MAG";
    /**
     * 0x08 absolute pressure
     */
    MavSysStatusSensor[MavSysStatusSensor["SENSOR_ABSOLUTE_PRESSURE"] = 8] = "SENSOR_ABSOLUTE_PRESSURE";
    /**
     * 0x10 differential pressure
     */
    MavSysStatusSensor[MavSysStatusSensor["SENSOR_DIFFERENTIAL_PRESSURE"] = 16] = "SENSOR_DIFFERENTIAL_PRESSURE";
    /**
     * 0x20 GPS
     */
    MavSysStatusSensor[MavSysStatusSensor["SENSOR_GPS"] = 32] = "SENSOR_GPS";
    /**
     * 0x40 optical flow
     */
    MavSysStatusSensor[MavSysStatusSensor["SENSOR_OPTICAL_FLOW"] = 64] = "SENSOR_OPTICAL_FLOW";
    /**
     * 0x80 computer vision position
     */
    MavSysStatusSensor[MavSysStatusSensor["SENSOR_VISION_POSITION"] = 128] = "SENSOR_VISION_POSITION";
    /**
     * 0x100 laser based position
     */
    MavSysStatusSensor[MavSysStatusSensor["SENSOR_LASER_POSITION"] = 256] = "SENSOR_LASER_POSITION";
    /**
     * 0x200 external ground truth (Vicon or Leica)
     */
    MavSysStatusSensor[MavSysStatusSensor["SENSOR_EXTERNAL_GROUND_TRUTH"] = 512] = "SENSOR_EXTERNAL_GROUND_TRUTH";
    /**
     * 0x400 3D angular rate control
     */
    MavSysStatusSensor[MavSysStatusSensor["SENSOR_ANGULAR_RATE_CONTROL"] = 1024] = "SENSOR_ANGULAR_RATE_CONTROL";
    /**
     * 0x800 attitude stabilization
     */
    MavSysStatusSensor[MavSysStatusSensor["SENSOR_ATTITUDE_STABILIZATION"] = 2048] = "SENSOR_ATTITUDE_STABILIZATION";
    /**
     * 0x1000 yaw position
     */
    MavSysStatusSensor[MavSysStatusSensor["SENSOR_YAW_POSITION"] = 4096] = "SENSOR_YAW_POSITION";
    /**
     * 0x2000 z/altitude control
     */
    MavSysStatusSensor[MavSysStatusSensor["SENSOR_Z_ALTITUDE_CONTROL"] = 8192] = "SENSOR_Z_ALTITUDE_CONTROL";
    /**
     * 0x4000 x/y position control
     */
    MavSysStatusSensor[MavSysStatusSensor["SENSOR_XY_POSITION_CONTROL"] = 16384] = "SENSOR_XY_POSITION_CONTROL";
    /**
     * 0x8000 motor outputs / control
     */
    MavSysStatusSensor[MavSysStatusSensor["SENSOR_MOTOR_OUTPUTS"] = 32768] = "SENSOR_MOTOR_OUTPUTS";
    /**
     * 0x10000 rc receiver
     */
    MavSysStatusSensor[MavSysStatusSensor["SENSOR_RC_RECEIVER"] = 65536] = "SENSOR_RC_RECEIVER";
    /**
     * 0x20000 2nd 3D gyro
     */
    MavSysStatusSensor[MavSysStatusSensor["SENSOR_3D_GYRO2"] = 131072] = "SENSOR_3D_GYRO2";
    /**
     * 0x40000 2nd 3D accelerometer
     */
    MavSysStatusSensor[MavSysStatusSensor["SENSOR_3D_ACCEL2"] = 262144] = "SENSOR_3D_ACCEL2";
    /**
     * 0x80000 2nd 3D magnetometer
     */
    MavSysStatusSensor[MavSysStatusSensor["SENSOR_3D_MAG2"] = 524288] = "SENSOR_3D_MAG2";
    /**
     * 0x100000 geofence
     */
    MavSysStatusSensor[MavSysStatusSensor["GEOFENCE"] = 1048576] = "GEOFENCE";
    /**
     * 0x200000 AHRS subsystem health
     */
    MavSysStatusSensor[MavSysStatusSensor["AHRS"] = 2097152] = "AHRS";
    /**
     * 0x400000 Terrain subsystem health
     */
    MavSysStatusSensor[MavSysStatusSensor["TERRAIN"] = 4194304] = "TERRAIN";
    /**
     * 0x800000 Motors are reversed
     */
    MavSysStatusSensor[MavSysStatusSensor["REVERSE_MOTOR"] = 8388608] = "REVERSE_MOTOR";
    /**
     * 0x1000000 Logging
     */
    MavSysStatusSensor[MavSysStatusSensor["LOGGING"] = 16777216] = "LOGGING";
    /**
     * 0x2000000 Battery
     */
    MavSysStatusSensor[MavSysStatusSensor["SENSOR_BATTERY"] = 33554432] = "SENSOR_BATTERY";
    /**
     * 0x4000000 Proximity
     */
    MavSysStatusSensor[MavSysStatusSensor["SENSOR_PROXIMITY"] = 67108864] = "SENSOR_PROXIMITY";
    /**
     * 0x8000000 Satellite Communication
     */
    MavSysStatusSensor[MavSysStatusSensor["SENSOR_SATCOM"] = 134217728] = "SENSOR_SATCOM";
    /**
     * 0x10000000 pre-arm check status. Always healthy when armed
     */
    MavSysStatusSensor[MavSysStatusSensor["PREARM_CHECK"] = 268435456] = "PREARM_CHECK";
    /**
     * 0x20000000 Avoidance/collision prevention
     */
    MavSysStatusSensor[MavSysStatusSensor["OBSTACLE_AVOIDANCE"] = 536870912] = "OBSTACLE_AVOIDANCE";
    /**
     * 0x40000000 propulsion (actuator, esc, motor or propellor)
     */
    MavSysStatusSensor[MavSysStatusSensor["SENSOR_PROPULSION"] = 1073741824] = "SENSOR_PROPULSION";
})(MavSysStatusSensor = exports.MavSysStatusSensor || (exports.MavSysStatusSensor = {}));
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
var MavFrame;
(function (MavFrame) {
    /**
     * Global (WGS84) coordinate frame + MSL altitude. First value / x: latitude, second value / y:
     * longitude, third value / z: positive altitude over mean sea level (MSL).
     */
    MavFrame[MavFrame["GLOBAL"] = 0] = "GLOBAL";
    /**
     * NED local tangent frame (x: North, y: East, z: Down) with origin fixed relative to earth.
     */
    MavFrame[MavFrame["LOCAL_NED"] = 1] = "LOCAL_NED";
    /**
     * NOT a coordinate frame, indicates a mission command.
     */
    MavFrame[MavFrame["MISSION"] = 2] = "MISSION";
    /**
     * Global (WGS84) coordinate frame + altitude relative to the home position. First value / x: latitude,
     * second value / y: longitude, third value / z: positive altitude with 0 being at the altitude of the
     * home location.
     */
    MavFrame[MavFrame["GLOBAL_RELATIVE_ALT"] = 3] = "GLOBAL_RELATIVE_ALT";
    /**
     * ENU local tangent frame (x: East, y: North, z: Up) with origin fixed relative to earth.
     */
    MavFrame[MavFrame["LOCAL_ENU"] = 4] = "LOCAL_ENU";
    /**
     * Global (WGS84) coordinate frame (scaled) + MSL altitude. First value / x: latitude in degrees*1E7,
     * second value / y: longitude in degrees*1E7, third value / z: positive altitude over mean sea level
     * (MSL).
     */
    MavFrame[MavFrame["GLOBAL_INT"] = 5] = "GLOBAL_INT";
    /**
     * Global (WGS84) coordinate frame (scaled) + altitude relative to the home position. First value / x:
     * latitude in degrees*1E7, second value / y: longitude in degrees*1E7, third value / z: positive
     * altitude with 0 being at the altitude of the home location.
     */
    MavFrame[MavFrame["GLOBAL_RELATIVE_ALT_INT"] = 6] = "GLOBAL_RELATIVE_ALT_INT";
    /**
     * NED local tangent frame (x: North, y: East, z: Down) with origin that travels with the vehicle.
     */
    MavFrame[MavFrame["LOCAL_OFFSET_NED"] = 7] = "LOCAL_OFFSET_NED";
    /**
     * Same as MAV_FRAME_LOCAL_NED when used to represent position values. Same as MAV_FRAME_BODY_FRD when
     * used with velocity/accelaration values.
     */
    MavFrame[MavFrame["BODY_NED"] = 8] = "BODY_NED";
    /**
     * This is the same as MAV_FRAME_BODY_FRD.
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
     * / x: latitude in degrees*1E7, second value / y: longitude in degrees*1E7, third value / z: positive
     * altitude in meters with 0 being at ground level in terrain model.
     */
    MavFrame[MavFrame["GLOBAL_TERRAIN_ALT_INT"] = 11] = "GLOBAL_TERRAIN_ALT_INT";
    /**
     * FRD local tangent frame (x: Forward, y: Right, z: Down) with origin that travels with vehicle. The
     * forward axis is aligned to the front of the vehicle in the horizontal plane.
     */
    MavFrame[MavFrame["BODY_FRD"] = 12] = "BODY_FRD";
    /**
     * MAV_FRAME_BODY_FLU - Body fixed frame of reference, Z-up (x: Forward, y: Left, z: Up).
     */
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
     * FRD local tangent frame (x: Forward, y: Right, z: Down) with origin fixed relative to earth. The
     * forward axis is aligned to the front of the vehicle in the horizontal plane.
     */
    MavFrame[MavFrame["LOCAL_FRD"] = 20] = "LOCAL_FRD";
    /**
     * FLU local tangent frame (x: Forward, y: Left, z: Up) with origin fixed relative to earth. The
     * forward axis is aligned to the front of the vehicle in the horizontal plane.
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
    /**
     * Disable fenced mode
     */
    FenceAction[FenceAction["NONE"] = 0] = "NONE";
    /**
     * Switched to guided mode to return point (fence point 0)
     */
    FenceAction[FenceAction["GUIDED"] = 1] = "GUIDED";
    /**
     * Report fence breach, but don't take action
     */
    FenceAction[FenceAction["REPORT"] = 2] = "REPORT";
    /**
     * Switched to guided mode to return point (fence point 0) with manual throttle control
     */
    FenceAction[FenceAction["GUIDED_THR_PASS"] = 3] = "GUIDED_THR_PASS";
    /**
     * Switch to RTL (return to launch) mode and head for the return point.
     */
    FenceAction[FenceAction["RTL"] = 4] = "RTL";
})(FenceAction = exports.FenceAction || (exports.FenceAction = {}));
/**
 * FENCE_BREACH
 */
var FenceBreach;
(function (FenceBreach) {
    /**
     * No last fence breach
     */
    FenceBreach[FenceBreach["NONE"] = 0] = "NONE";
    /**
     * Breached minimum altitude
     */
    FenceBreach[FenceBreach["MINALT"] = 1] = "MINALT";
    /**
     * Breached maximum altitude
     */
    FenceBreach[FenceBreach["MAXALT"] = 2] = "MAXALT";
    /**
     * Breached fence boundary
     */
    FenceBreach[FenceBreach["BOUNDARY"] = 3] = "BOUNDARY";
})(FenceBreach = exports.FenceBreach || (exports.FenceBreach = {}));
/**
 * Actions being taken to mitigate/prevent fence breach
 */
var FenceMitigate;
(function (FenceMitigate) {
    /**
     * Unknown
     */
    FenceMitigate[FenceMitigate["UNKNOWN"] = 0] = "UNKNOWN";
    /**
     * No actions being taken
     */
    FenceMitigate[FenceMitigate["NONE"] = 1] = "NONE";
    /**
     * Velocity limiting active to prevent breach
     */
    FenceMitigate[FenceMitigate["VEL_LIMIT"] = 2] = "VEL_LIMIT";
})(FenceMitigate = exports.FenceMitigate || (exports.FenceMitigate = {}));
/**
 * FENCE_TYPE
 */
var FenceType;
(function (FenceType) {
    /**
     * All fence types
     */
    FenceType[FenceType["ALL"] = 0] = "ALL";
    /**
     * Maximum altitude fence
     */
    FenceType[FenceType["ALT_MAX"] = 1] = "ALT_MAX";
    /**
     * Circle fence
     */
    FenceType[FenceType["CIRCLE"] = 2] = "CIRCLE";
    /**
     * Polygon fence
     */
    FenceType[FenceType["POLYGON"] = 4] = "POLYGON";
    /**
     * Minimum altitude fence
     */
    FenceType[FenceType["ALT_MIN"] = 8] = "ALT_MIN";
})(FenceType = exports.FenceType || (exports.FenceType = {}));
/**
 * Enumeration of possible mount operation modes
 */
var MavMountMode;
(function (MavMountMode) {
    /**
     * Load and keep safe position (Roll,Pitch,Yaw) from permant memory and stop stabilization
     */
    MavMountMode[MavMountMode["RETRACT"] = 0] = "RETRACT";
    /**
     * Load and keep neutral position (Roll,Pitch,Yaw) from permanent memory.
     */
    MavMountMode[MavMountMode["NEUTRAL"] = 1] = "NEUTRAL";
    /**
     * Load neutral position and start MAVLink Roll,Pitch,Yaw control with stabilization
     */
    MavMountMode[MavMountMode["MAVLINK_TARGETING"] = 2] = "MAVLINK_TARGETING";
    /**
     * Load neutral position and start RC Roll,Pitch,Yaw control with stabilization
     */
    MavMountMode[MavMountMode["RC_TARGETING"] = 3] = "RC_TARGETING";
    /**
     * Load neutral position and start to point to Lat,Lon,Alt
     */
    MavMountMode[MavMountMode["GPS_POINT"] = 4] = "GPS_POINT";
    /**
     * Gimbal tracks system with specified system ID
     */
    MavMountMode[MavMountMode["SYSID_TARGET"] = 5] = "SYSID_TARGET";
    /**
     * Gimbal tracks home location
     */
    MavMountMode[MavMountMode["HOME_LOCATION"] = 6] = "HOME_LOCATION";
})(MavMountMode = exports.MavMountMode || (exports.MavMountMode = {}));
/**
 * Gimbal device (low level) capability flags (bitmap).
 */
var GimbalDeviceCapFlags;
(function (GimbalDeviceCapFlags) {
    /**
     * Gimbal device supports a retracted position.
     */
    GimbalDeviceCapFlags[GimbalDeviceCapFlags["HAS_RETRACT"] = 1] = "HAS_RETRACT";
    /**
     * Gimbal device supports a horizontal, forward looking position, stabilized.
     */
    GimbalDeviceCapFlags[GimbalDeviceCapFlags["HAS_NEUTRAL"] = 2] = "HAS_NEUTRAL";
    /**
     * Gimbal device supports rotating around roll axis.
     */
    GimbalDeviceCapFlags[GimbalDeviceCapFlags["HAS_ROLL_AXIS"] = 4] = "HAS_ROLL_AXIS";
    /**
     * Gimbal device supports to follow a roll angle relative to the vehicle.
     */
    GimbalDeviceCapFlags[GimbalDeviceCapFlags["HAS_ROLL_FOLLOW"] = 8] = "HAS_ROLL_FOLLOW";
    /**
     * Gimbal device supports locking to a roll angle (generally that's the default with roll stabilized).
     */
    GimbalDeviceCapFlags[GimbalDeviceCapFlags["HAS_ROLL_LOCK"] = 16] = "HAS_ROLL_LOCK";
    /**
     * Gimbal device supports rotating around pitch axis.
     */
    GimbalDeviceCapFlags[GimbalDeviceCapFlags["HAS_PITCH_AXIS"] = 32] = "HAS_PITCH_AXIS";
    /**
     * Gimbal device supports to follow a pitch angle relative to the vehicle.
     */
    GimbalDeviceCapFlags[GimbalDeviceCapFlags["HAS_PITCH_FOLLOW"] = 64] = "HAS_PITCH_FOLLOW";
    /**
     * Gimbal device supports locking to a pitch angle (generally that's the default with pitch
     * stabilized).
     */
    GimbalDeviceCapFlags[GimbalDeviceCapFlags["HAS_PITCH_LOCK"] = 128] = "HAS_PITCH_LOCK";
    /**
     * Gimbal device supports rotating around yaw axis.
     */
    GimbalDeviceCapFlags[GimbalDeviceCapFlags["HAS_YAW_AXIS"] = 256] = "HAS_YAW_AXIS";
    /**
     * Gimbal device supports to follow a yaw angle relative to the vehicle (generally that's the default).
     */
    GimbalDeviceCapFlags[GimbalDeviceCapFlags["HAS_YAW_FOLLOW"] = 512] = "HAS_YAW_FOLLOW";
    /**
     * Gimbal device supports locking to an absolute heading, i.e., yaw angle relative to North (earth
     * frame, often this is an option available).
     */
    GimbalDeviceCapFlags[GimbalDeviceCapFlags["HAS_YAW_LOCK"] = 1024] = "HAS_YAW_LOCK";
    /**
     * Gimbal device supports yawing/panning infinetely (e.g. using slip disk).
     */
    GimbalDeviceCapFlags[GimbalDeviceCapFlags["SUPPORTS_INFINITE_YAW"] = 2048] = "SUPPORTS_INFINITE_YAW";
    /**
     * Gimbal device supports yaw angles and angular velocities relative to North (earth frame). This
     * usually requires support by an autopilot via AUTOPILOT_STATE_FOR_GIMBAL_DEVICE. Support can go on
     * and off during runtime, which is reported by the flag
     * GIMBAL_DEVICE_FLAGS_CAN_ACCEPT_YAW_IN_EARTH_FRAME.
     */
    GimbalDeviceCapFlags[GimbalDeviceCapFlags["SUPPORTS_YAW_IN_EARTH_FRAME"] = 4096] = "SUPPORTS_YAW_IN_EARTH_FRAME";
    /**
     * Gimbal device supports radio control inputs as an alternative input for controlling the gimbal
     * orientation.
     */
    GimbalDeviceCapFlags[GimbalDeviceCapFlags["HAS_RC_INPUTS"] = 8192] = "HAS_RC_INPUTS";
})(GimbalDeviceCapFlags = exports.GimbalDeviceCapFlags || (exports.GimbalDeviceCapFlags = {}));
/**
 * Gimbal manager high level capability flags (bitmap). The first 16 bits are identical to the
 * GIMBAL_DEVICE_CAP_FLAGS. However, the gimbal manager does not need to copy the flags from the gimbal
 * but can also enhance the capabilities and thus add flags.
 */
var GimbalManagerCapFlags;
(function (GimbalManagerCapFlags) {
    /**
     * Based on GIMBAL_DEVICE_CAP_FLAGS_HAS_RETRACT.
     */
    GimbalManagerCapFlags[GimbalManagerCapFlags["HAS_RETRACT"] = 1] = "HAS_RETRACT";
    /**
     * Based on GIMBAL_DEVICE_CAP_FLAGS_HAS_NEUTRAL.
     */
    GimbalManagerCapFlags[GimbalManagerCapFlags["HAS_NEUTRAL"] = 2] = "HAS_NEUTRAL";
    /**
     * Based on GIMBAL_DEVICE_CAP_FLAGS_HAS_ROLL_AXIS.
     */
    GimbalManagerCapFlags[GimbalManagerCapFlags["HAS_ROLL_AXIS"] = 4] = "HAS_ROLL_AXIS";
    /**
     * Based on GIMBAL_DEVICE_CAP_FLAGS_HAS_ROLL_FOLLOW.
     */
    GimbalManagerCapFlags[GimbalManagerCapFlags["HAS_ROLL_FOLLOW"] = 8] = "HAS_ROLL_FOLLOW";
    /**
     * Based on GIMBAL_DEVICE_CAP_FLAGS_HAS_ROLL_LOCK.
     */
    GimbalManagerCapFlags[GimbalManagerCapFlags["HAS_ROLL_LOCK"] = 16] = "HAS_ROLL_LOCK";
    /**
     * Based on GIMBAL_DEVICE_CAP_FLAGS_HAS_PITCH_AXIS.
     */
    GimbalManagerCapFlags[GimbalManagerCapFlags["HAS_PITCH_AXIS"] = 32] = "HAS_PITCH_AXIS";
    /**
     * Based on GIMBAL_DEVICE_CAP_FLAGS_HAS_PITCH_FOLLOW.
     */
    GimbalManagerCapFlags[GimbalManagerCapFlags["HAS_PITCH_FOLLOW"] = 64] = "HAS_PITCH_FOLLOW";
    /**
     * Based on GIMBAL_DEVICE_CAP_FLAGS_HAS_PITCH_LOCK.
     */
    GimbalManagerCapFlags[GimbalManagerCapFlags["HAS_PITCH_LOCK"] = 128] = "HAS_PITCH_LOCK";
    /**
     * Based on GIMBAL_DEVICE_CAP_FLAGS_HAS_YAW_AXIS.
     */
    GimbalManagerCapFlags[GimbalManagerCapFlags["HAS_YAW_AXIS"] = 256] = "HAS_YAW_AXIS";
    /**
     * Based on GIMBAL_DEVICE_CAP_FLAGS_HAS_YAW_FOLLOW.
     */
    GimbalManagerCapFlags[GimbalManagerCapFlags["HAS_YAW_FOLLOW"] = 512] = "HAS_YAW_FOLLOW";
    /**
     * Based on GIMBAL_DEVICE_CAP_FLAGS_HAS_YAW_LOCK.
     */
    GimbalManagerCapFlags[GimbalManagerCapFlags["HAS_YAW_LOCK"] = 1024] = "HAS_YAW_LOCK";
    /**
     * Based on GIMBAL_DEVICE_CAP_FLAGS_SUPPORTS_INFINITE_YAW.
     */
    GimbalManagerCapFlags[GimbalManagerCapFlags["SUPPORTS_INFINITE_YAW"] = 2048] = "SUPPORTS_INFINITE_YAW";
    /**
     * Based on GIMBAL_DEVICE_CAP_FLAGS_SUPPORTS_YAW_IN_EARTH_FRAME.
     */
    GimbalManagerCapFlags[GimbalManagerCapFlags["SUPPORTS_YAW_IN_EARTH_FRAME"] = 4096] = "SUPPORTS_YAW_IN_EARTH_FRAME";
    /**
     * Based on GIMBAL_DEVICE_CAP_FLAGS_HAS_RC_INPUTS.
     */
    GimbalManagerCapFlags[GimbalManagerCapFlags["HAS_RC_INPUTS"] = 8192] = "HAS_RC_INPUTS";
    /**
     * Gimbal manager supports to point to a local position.
     */
    GimbalManagerCapFlags[GimbalManagerCapFlags["CAN_POINT_LOCATION_LOCAL"] = 65536] = "CAN_POINT_LOCATION_LOCAL";
    /**
     * Gimbal manager supports to point to a global latitude, longitude, altitude position.
     */
    GimbalManagerCapFlags[GimbalManagerCapFlags["CAN_POINT_LOCATION_GLOBAL"] = 131072] = "CAN_POINT_LOCATION_GLOBAL";
})(GimbalManagerCapFlags = exports.GimbalManagerCapFlags || (exports.GimbalManagerCapFlags = {}));
/**
 * Flags for gimbal device (lower level) operation.
 */
var GimbalDeviceFlags;
(function (GimbalDeviceFlags) {
    /**
     * Set to retracted safe position (no stabilization), takes presedence over all other flags.
     */
    GimbalDeviceFlags[GimbalDeviceFlags["RETRACT"] = 1] = "RETRACT";
    /**
     * Set to neutral/default position, taking precedence over all other flags except RETRACT. Neutral is
     * commonly forward-facing and horizontal (roll=pitch=yaw=0) but may be any orientation.
     */
    GimbalDeviceFlags[GimbalDeviceFlags["NEUTRAL"] = 2] = "NEUTRAL";
    /**
     * Lock roll angle to absolute angle relative to horizon (not relative to vehicle). This is generally
     * the default with a stabilizing gimbal.
     */
    GimbalDeviceFlags[GimbalDeviceFlags["ROLL_LOCK"] = 4] = "ROLL_LOCK";
    /**
     * Lock pitch angle to absolute angle relative to horizon (not relative to vehicle). This is generally
     * the default with a stabilizing gimbal.
     */
    GimbalDeviceFlags[GimbalDeviceFlags["PITCH_LOCK"] = 8] = "PITCH_LOCK";
    /**
     * Lock yaw angle to absolute angle relative to North (not relative to vehicle). If this flag is set,
     * the yaw angle and z component of angular velocity are relative to North (earth frame, x-axis
     * pointing North), else they are relative to the vehicle heading (vehicle frame, earth frame rotated
     * so that the x-axis is pointing forward).
     */
    GimbalDeviceFlags[GimbalDeviceFlags["YAW_LOCK"] = 16] = "YAW_LOCK";
    /**
     * Yaw angle and z component of angular velocity are relative to the vehicle heading (vehicle frame,
     * earth frame rotated such that the x-axis is pointing forward).
     */
    GimbalDeviceFlags[GimbalDeviceFlags["YAW_IN_VEHICLE_FRAME"] = 32] = "YAW_IN_VEHICLE_FRAME";
    /**
     * Yaw angle and z component of angular velocity are relative to North (earth frame, x-axis is pointing
     * North).
     */
    GimbalDeviceFlags[GimbalDeviceFlags["YAW_IN_EARTH_FRAME"] = 64] = "YAW_IN_EARTH_FRAME";
    /**
     * Gimbal device can accept yaw angle inputs relative to North (earth frame). This flag is only for
     * reporting (attempts to set this flag are ignored).
     */
    GimbalDeviceFlags[GimbalDeviceFlags["ACCEPTS_YAW_IN_EARTH_FRAME"] = 128] = "ACCEPTS_YAW_IN_EARTH_FRAME";
    /**
     * The gimbal orientation is set exclusively by the RC signals feed to the gimbal's radio control
     * inputs. MAVLink messages for setting the gimbal orientation (GIMBAL_DEVICE_SET_ATTITUDE) are
     * ignored.
     */
    GimbalDeviceFlags[GimbalDeviceFlags["RC_EXCLUSIVE"] = 256] = "RC_EXCLUSIVE";
    /**
     * The gimbal orientation is determined by combining/mixing the RC signals feed to the gimbal's radio
     * control inputs and the MAVLink messages for setting the gimbal orientation
     * (GIMBAL_DEVICE_SET_ATTITUDE). How these two controls are combined or mixed is not defined by the
     * protocol but is up to the implementation.
     */
    GimbalDeviceFlags[GimbalDeviceFlags["RC_MIXED"] = 512] = "RC_MIXED";
})(GimbalDeviceFlags = exports.GimbalDeviceFlags || (exports.GimbalDeviceFlags = {}));
/**
 * Flags for high level gimbal manager operation The first 16 bits are identical to the
 * GIMBAL_DEVICE_FLAGS.
 */
var GimbalManagerFlags;
(function (GimbalManagerFlags) {
    /**
     * Based on GIMBAL_DEVICE_FLAGS_RETRACT.
     */
    GimbalManagerFlags[GimbalManagerFlags["RETRACT"] = 1] = "RETRACT";
    /**
     * Based on GIMBAL_DEVICE_FLAGS_NEUTRAL.
     */
    GimbalManagerFlags[GimbalManagerFlags["NEUTRAL"] = 2] = "NEUTRAL";
    /**
     * Based on GIMBAL_DEVICE_FLAGS_ROLL_LOCK.
     */
    GimbalManagerFlags[GimbalManagerFlags["ROLL_LOCK"] = 4] = "ROLL_LOCK";
    /**
     * Based on GIMBAL_DEVICE_FLAGS_PITCH_LOCK.
     */
    GimbalManagerFlags[GimbalManagerFlags["PITCH_LOCK"] = 8] = "PITCH_LOCK";
    /**
     * Based on GIMBAL_DEVICE_FLAGS_YAW_LOCK.
     */
    GimbalManagerFlags[GimbalManagerFlags["YAW_LOCK"] = 16] = "YAW_LOCK";
    /**
     * Based on GIMBAL_DEVICE_FLAGS_YAW_IN_VEHICLE_FRAME.
     */
    GimbalManagerFlags[GimbalManagerFlags["YAW_IN_VEHICLE_FRAME"] = 32] = "YAW_IN_VEHICLE_FRAME";
    /**
     * Based on GIMBAL_DEVICE_FLAGS_YAW_IN_EARTH_FRAME.
     */
    GimbalManagerFlags[GimbalManagerFlags["YAW_IN_EARTH_FRAME"] = 64] = "YAW_IN_EARTH_FRAME";
    /**
     * Based on GIMBAL_DEVICE_FLAGS_ACCEPTS_YAW_IN_EARTH_FRAME.
     */
    GimbalManagerFlags[GimbalManagerFlags["ACCEPTS_YAW_IN_EARTH_FRAME"] = 128] = "ACCEPTS_YAW_IN_EARTH_FRAME";
    /**
     * Based on GIMBAL_DEVICE_FLAGS_RC_EXCLUSIVE.
     */
    GimbalManagerFlags[GimbalManagerFlags["RC_EXCLUSIVE"] = 256] = "RC_EXCLUSIVE";
    /**
     * Based on GIMBAL_DEVICE_FLAGS_RC_MIXED.
     */
    GimbalManagerFlags[GimbalManagerFlags["RC_MIXED"] = 512] = "RC_MIXED";
})(GimbalManagerFlags = exports.GimbalManagerFlags || (exports.GimbalManagerFlags = {}));
/**
 * Gimbal device (low level) error flags (bitmap, 0 means no error)
 */
var GimbalDeviceErrorFlags;
(function (GimbalDeviceErrorFlags) {
    /**
     * Gimbal device is limited by hardware roll limit.
     */
    GimbalDeviceErrorFlags[GimbalDeviceErrorFlags["AT_ROLL_LIMIT"] = 1] = "AT_ROLL_LIMIT";
    /**
     * Gimbal device is limited by hardware pitch limit.
     */
    GimbalDeviceErrorFlags[GimbalDeviceErrorFlags["AT_PITCH_LIMIT"] = 2] = "AT_PITCH_LIMIT";
    /**
     * Gimbal device is limited by hardware yaw limit.
     */
    GimbalDeviceErrorFlags[GimbalDeviceErrorFlags["AT_YAW_LIMIT"] = 4] = "AT_YAW_LIMIT";
    /**
     * There is an error with the gimbal encoders.
     */
    GimbalDeviceErrorFlags[GimbalDeviceErrorFlags["ENCODER_ERROR"] = 8] = "ENCODER_ERROR";
    /**
     * There is an error with the gimbal power source.
     */
    GimbalDeviceErrorFlags[GimbalDeviceErrorFlags["POWER_ERROR"] = 16] = "POWER_ERROR";
    /**
     * There is an error with the gimbal motors.
     */
    GimbalDeviceErrorFlags[GimbalDeviceErrorFlags["MOTOR_ERROR"] = 32] = "MOTOR_ERROR";
    /**
     * There is an error with the gimbal's software.
     */
    GimbalDeviceErrorFlags[GimbalDeviceErrorFlags["SOFTWARE_ERROR"] = 64] = "SOFTWARE_ERROR";
    /**
     * There is an error with the gimbal's communication.
     */
    GimbalDeviceErrorFlags[GimbalDeviceErrorFlags["COMMS_ERROR"] = 128] = "COMMS_ERROR";
    /**
     * Gimbal device is currently calibrating.
     */
    GimbalDeviceErrorFlags[GimbalDeviceErrorFlags["CALIBRATION_RUNNING"] = 256] = "CALIBRATION_RUNNING";
    /**
     * Gimbal device is not assigned to a gimbal manager.
     */
    GimbalDeviceErrorFlags[GimbalDeviceErrorFlags["NO_MANAGER"] = 512] = "NO_MANAGER";
})(GimbalDeviceErrorFlags = exports.GimbalDeviceErrorFlags || (exports.GimbalDeviceErrorFlags = {}));
/**
 * Gripper actions.
 */
var GripperActions;
(function (GripperActions) {
    /**
     * Gripper release cargo.
     */
    GripperActions[GripperActions["RELEASE"] = 0] = "RELEASE";
    /**
     * Gripper grab onto cargo.
     */
    GripperActions[GripperActions["GRAB"] = 1] = "GRAB";
})(GripperActions = exports.GripperActions || (exports.GripperActions = {}));
/**
 * Winch actions.
 */
var WinchActions;
(function (WinchActions) {
    /**
     * Allow motor to freewheel.
     */
    WinchActions[WinchActions["RELAXED"] = 0] = "RELAXED";
    /**
     * Wind or unwind specified length of line, optionally using specified rate.
     */
    WinchActions[WinchActions["RELATIVE_LENGTH_CONTROL"] = 1] = "RELATIVE_LENGTH_CONTROL";
    /**
     * Wind or unwind line at specified rate.
     */
    WinchActions[WinchActions["RATE_CONTROL"] = 2] = "RATE_CONTROL";
    /**
     * Perform the locking sequence to relieve motor while in the fully retracted position. Only action and
     * instance command parameters are used, others are ignored.
     */
    WinchActions[WinchActions["LOCK"] = 3] = "LOCK";
    /**
     * Sequence of drop, slow down, touch down, reel up, lock. Only action and instance command parameters
     * are used, others are ignored.
     */
    WinchActions[WinchActions["DELIVER"] = 4] = "DELIVER";
    /**
     * Engage motor and hold current position. Only action and instance command parameters are used, others
     * are ignored.
     */
    WinchActions[WinchActions["HOLD"] = 5] = "HOLD";
    /**
     * Return the reel to the fully retracted position. Only action and instance command parameters are
     * used, others are ignored.
     */
    WinchActions[WinchActions["RETRACT"] = 6] = "RETRACT";
    /**
     * Load the reel with line. The winch will calculate the total loaded length and stop when the tension
     * exceeds a threshold. Only action and instance command parameters are used, others are ignored.
     */
    WinchActions[WinchActions["LOAD_LINE"] = 7] = "LOAD_LINE";
    /**
     * Spool out the entire length of the line. Only action and instance command parameters are used,
     * others are ignored.
     */
    WinchActions[WinchActions["ABANDON_LINE"] = 8] = "ABANDON_LINE";
})(WinchActions = exports.WinchActions || (exports.WinchActions = {}));
/**
 * Generalized UAVCAN node health
 */
var UavcanNodeHealth;
(function (UavcanNodeHealth) {
    /**
     * The node is functioning properly.
     */
    UavcanNodeHealth[UavcanNodeHealth["OK"] = 0] = "OK";
    /**
     * A critical parameter went out of range or the node has encountered a minor failure.
     */
    UavcanNodeHealth[UavcanNodeHealth["WARNING"] = 1] = "WARNING";
    /**
     * The node has encountered a major failure.
     */
    UavcanNodeHealth[UavcanNodeHealth["ERROR"] = 2] = "ERROR";
    /**
     * The node has suffered a fatal malfunction.
     */
    UavcanNodeHealth[UavcanNodeHealth["CRITICAL"] = 3] = "CRITICAL";
})(UavcanNodeHealth = exports.UavcanNodeHealth || (exports.UavcanNodeHealth = {}));
/**
 * Generalized UAVCAN node mode
 */
var UavcanNodeMode;
(function (UavcanNodeMode) {
    /**
     * The node is performing its primary functions.
     */
    UavcanNodeMode[UavcanNodeMode["OPERATIONAL"] = 0] = "OPERATIONAL";
    /**
     * The node is initializing; this mode is entered immediately after startup.
     */
    UavcanNodeMode[UavcanNodeMode["INITIALIZATION"] = 1] = "INITIALIZATION";
    /**
     * The node is under maintenance.
     */
    UavcanNodeMode[UavcanNodeMode["MAINTENANCE"] = 2] = "MAINTENANCE";
    /**
     * The node is in the process of updating its software.
     */
    UavcanNodeMode[UavcanNodeMode["SOFTWARE_UPDATE"] = 3] = "SOFTWARE_UPDATE";
    /**
     * The node is no longer available online.
     */
    UavcanNodeMode[UavcanNodeMode["OFFLINE"] = 7] = "OFFLINE";
})(UavcanNodeMode = exports.UavcanNodeMode || (exports.UavcanNodeMode = {}));
/**
 * Flags to indicate the status of camera storage.
 */
var StorageStatus;
(function (StorageStatus) {
    /**
     * Storage is missing (no microSD card loaded for example.)
     */
    StorageStatus[StorageStatus["EMPTY"] = 0] = "EMPTY";
    /**
     * Storage present but unformatted.
     */
    StorageStatus[StorageStatus["UNFORMATTED"] = 1] = "UNFORMATTED";
    /**
     * Storage present and ready.
     */
    StorageStatus[StorageStatus["READY"] = 2] = "READY";
    /**
     * Camera does not supply storage status information. Capacity information in STORAGE_INFORMATION
     * fields will be ignored.
     */
    StorageStatus[StorageStatus["NOT_SUPPORTED"] = 3] = "NOT_SUPPORTED";
})(StorageStatus = exports.StorageStatus || (exports.StorageStatus = {}));
/**
 * Flags to indicate the type of storage.
 */
var StorageType;
(function (StorageType) {
    /**
     * Storage type is not known.
     */
    StorageType[StorageType["UNKNOWN"] = 0] = "UNKNOWN";
    /**
     * Storage type is USB device.
     */
    StorageType[StorageType["USB_STICK"] = 1] = "USB_STICK";
    /**
     * Storage type is SD card.
     */
    StorageType[StorageType["SD"] = 2] = "SD";
    /**
     * Storage type is microSD card.
     */
    StorageType[StorageType["MICROSD"] = 3] = "MICROSD";
    /**
     * Storage type is CFast.
     */
    StorageType[StorageType["CF"] = 4] = "CF";
    /**
     * Storage type is CFexpress.
     */
    StorageType[StorageType["CFE"] = 5] = "CFE";
    /**
     * Storage type is XQD.
     */
    StorageType[StorageType["XQD"] = 6] = "XQD";
    /**
     * Storage type is HD mass storage type.
     */
    StorageType[StorageType["HD"] = 7] = "HD";
    /**
     * Storage type is other, not listed type.
     */
    StorageType[StorageType["OTHER"] = 254] = "OTHER";
})(StorageType = exports.StorageType || (exports.StorageType = {}));
/**
 * Enable axes that will be tuned via autotuning. Used in MAV_CMD_DO_AUTOTUNE_ENABLE.
 */
var AutotuneAxis;
(function (AutotuneAxis) {
    /**
     * Flight stack tunes axis according to its default settings.
     */
    AutotuneAxis[AutotuneAxis["DEFAULT"] = 0] = "DEFAULT";
    /**
     * Autotune roll axis.
     */
    AutotuneAxis[AutotuneAxis["ROLL"] = 1] = "ROLL";
    /**
     * Autotune pitch axis.
     */
    AutotuneAxis[AutotuneAxis["PITCH"] = 2] = "PITCH";
    /**
     * Autotune yaw axis.
     */
    AutotuneAxis[AutotuneAxis["YAW"] = 4] = "YAW";
})(AutotuneAxis = exports.AutotuneAxis || (exports.AutotuneAxis = {}));
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
    MavCmd[MavCmd["NAV_WAYPOINT"] = 16] = "NAV_WAYPOINT";
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
    MavCmd[MavCmd["NAV_LOITER_UNLIM"] = 17] = "NAV_LOITER_UNLIM";
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
    MavCmd[MavCmd["NAV_LOITER_TURNS"] = 18] = "NAV_LOITER_TURNS";
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
    MavCmd[MavCmd["NAV_LOITER_TIME"] = 19] = "NAV_LOITER_TIME";
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
    MavCmd[MavCmd["NAV_RETURN_TO_LAUNCH"] = 20] = "NAV_RETURN_TO_LAUNCH";
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
    MavCmd[MavCmd["NAV_LAND"] = 21] = "NAV_LAND";
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
    MavCmd[MavCmd["NAV_TAKEOFF"] = 22] = "NAV_TAKEOFF";
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
    MavCmd[MavCmd["NAV_LAND_LOCAL"] = 23] = "NAV_LAND_LOCAL";
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
    MavCmd[MavCmd["NAV_TAKEOFF_LOCAL"] = 24] = "NAV_TAKEOFF_LOCAL";
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
    MavCmd[MavCmd["NAV_FOLLOW"] = 25] = "NAV_FOLLOW";
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
    MavCmd[MavCmd["NAV_CONTINUE_AND_CHANGE_ALT"] = 30] = "NAV_CONTINUE_AND_CHANGE_ALT";
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
    MavCmd[MavCmd["NAV_LOITER_TO_ALT"] = 31] = "NAV_LOITER_TO_ALT";
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
    MavCmd[MavCmd["DO_FOLLOW"] = 32] = "DO_FOLLOW";
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
    MavCmd[MavCmd["DO_FOLLOW_REPOSITION"] = 33] = "DO_FOLLOW_REPOSITION";
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
    MavCmd[MavCmd["NAV_ROI"] = 80] = "NAV_ROI";
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
    MavCmd[MavCmd["NAV_PATHPLANNING"] = 81] = "NAV_PATHPLANNING";
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
    MavCmd[MavCmd["NAV_SPLINE_WAYPOINT"] = 82] = "NAV_SPLINE_WAYPOINT";
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
    MavCmd[MavCmd["NAV_VTOL_TAKEOFF"] = 84] = "NAV_VTOL_TAKEOFF";
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
    MavCmd[MavCmd["NAV_VTOL_LAND"] = 85] = "NAV_VTOL_LAND";
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
    MavCmd[MavCmd["NAV_GUIDED_ENABLE"] = 92] = "NAV_GUIDED_ENABLE";
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
    MavCmd[MavCmd["NAV_DELAY"] = 93] = "NAV_DELAY";
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
    MavCmd[MavCmd["NAV_PAYLOAD_PLACE"] = 94] = "NAV_PAYLOAD_PLACE";
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
    MavCmd[MavCmd["NAV_LAST"] = 95] = "NAV_LAST";
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
    MavCmd[MavCmd["CONDITION_DELAY"] = 112] = "CONDITION_DELAY";
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
    MavCmd[MavCmd["CONDITION_CHANGE_ALT"] = 113] = "CONDITION_CHANGE_ALT";
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
    MavCmd[MavCmd["CONDITION_DISTANCE"] = 114] = "CONDITION_DISTANCE";
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
    MavCmd[MavCmd["CONDITION_YAW"] = 115] = "CONDITION_YAW";
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
    MavCmd[MavCmd["CONDITION_LAST"] = 159] = "CONDITION_LAST";
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
    MavCmd[MavCmd["DO_SET_MODE"] = 176] = "DO_SET_MODE";
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
    MavCmd[MavCmd["DO_JUMP"] = 177] = "DO_JUMP";
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
    MavCmd[MavCmd["DO_CHANGE_SPEED"] = 178] = "DO_CHANGE_SPEED";
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
    MavCmd[MavCmd["DO_SET_HOME"] = 179] = "DO_SET_HOME";
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
    MavCmd[MavCmd["DO_SET_PARAMETER"] = 180] = "DO_SET_PARAMETER";
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
    MavCmd[MavCmd["DO_SET_RELAY"] = 181] = "DO_SET_RELAY";
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
    MavCmd[MavCmd["DO_REPEAT_RELAY"] = 182] = "DO_REPEAT_RELAY";
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
    MavCmd[MavCmd["DO_SET_SERVO"] = 183] = "DO_SET_SERVO";
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
    MavCmd[MavCmd["DO_REPEAT_SERVO"] = 184] = "DO_REPEAT_SERVO";
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
    MavCmd[MavCmd["DO_FLIGHTTERMINATION"] = 185] = "DO_FLIGHTTERMINATION";
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
    MavCmd[MavCmd["DO_CHANGE_ALTITUDE"] = 186] = "DO_CHANGE_ALTITUDE";
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
    MavCmd[MavCmd["DO_LAND_START"] = 189] = "DO_LAND_START";
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
    MavCmd[MavCmd["DO_RALLY_LAND"] = 190] = "DO_RALLY_LAND";
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
    MavCmd[MavCmd["DO_GO_AROUND"] = 191] = "DO_GO_AROUND";
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
    MavCmd[MavCmd["DO_REPOSITION"] = 192] = "DO_REPOSITION";
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
    MavCmd[MavCmd["DO_PAUSE_CONTINUE"] = 193] = "DO_PAUSE_CONTINUE";
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
    MavCmd[MavCmd["DO_SET_REVERSE"] = 194] = "DO_SET_REVERSE";
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
    MavCmd[MavCmd["DO_SET_ROI_LOCATION"] = 195] = "DO_SET_ROI_LOCATION";
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
    MavCmd[MavCmd["DO_SET_ROI_WPNEXT_OFFSET"] = 196] = "DO_SET_ROI_WPNEXT_OFFSET";
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
    MavCmd[MavCmd["DO_SET_ROI_NONE"] = 197] = "DO_SET_ROI_NONE";
    /**
     * Mount tracks system with specified system ID. Determination of target vehicle position may be done
     * with GLOBAL_POSITION_INT or any other means.
     * @param1 System ID (min: 1, max: 255, increment: 1) System ID
     */
    MavCmd[MavCmd["DO_SET_ROI_SYSID"] = 198] = "DO_SET_ROI_SYSID";
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
    MavCmd[MavCmd["DO_CONTROL_VIDEO"] = 200] = "DO_CONTROL_VIDEO";
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
    MavCmd[MavCmd["DO_SET_ROI"] = 201] = "DO_SET_ROI";
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
    MavCmd[MavCmd["DO_DIGICAM_CONFIGURE"] = 202] = "DO_DIGICAM_CONFIGURE";
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
    MavCmd[MavCmd["DO_DIGICAM_CONTROL"] = 203] = "DO_DIGICAM_CONTROL";
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
    MavCmd[MavCmd["DO_MOUNT_CONFIGURE"] = 204] = "DO_MOUNT_CONFIGURE";
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
    MavCmd[MavCmd["DO_MOUNT_CONTROL"] = 205] = "DO_MOUNT_CONTROL";
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
    MavCmd[MavCmd["DO_SET_CAM_TRIGG_DIST"] = 206] = "DO_SET_CAM_TRIGG_DIST";
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
    MavCmd[MavCmd["DO_FENCE_ENABLE"] = 207] = "DO_FENCE_ENABLE";
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
    MavCmd[MavCmd["DO_PARACHUTE"] = 208] = "DO_PARACHUTE";
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
    MavCmd[MavCmd["DO_MOTOR_TEST"] = 209] = "DO_MOTOR_TEST";
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
    MavCmd[MavCmd["DO_INVERTED_FLIGHT"] = 210] = "DO_INVERTED_FLIGHT";
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
    MavCmd[MavCmd["DO_GRIPPER"] = 211] = "DO_GRIPPER";
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
    MavCmd[MavCmd["DO_AUTOTUNE_ENABLE"] = 212] = "DO_AUTOTUNE_ENABLE";
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
    MavCmd[MavCmd["NAV_SET_YAW_SPEED"] = 213] = "NAV_SET_YAW_SPEED";
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
    MavCmd[MavCmd["DO_SET_CAM_TRIGG_INTERVAL"] = 214] = "DO_SET_CAM_TRIGG_INTERVAL";
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
    MavCmd[MavCmd["DO_MOUNT_CONTROL_QUAT"] = 220] = "DO_MOUNT_CONTROL_QUAT";
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
    MavCmd[MavCmd["DO_GUIDED_MASTER"] = 221] = "DO_GUIDED_MASTER";
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
    MavCmd[MavCmd["DO_GUIDED_LIMITS"] = 222] = "DO_GUIDED_LIMITS";
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
    MavCmd[MavCmd["DO_ENGINE_CONTROL"] = 223] = "DO_ENGINE_CONTROL";
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
    MavCmd[MavCmd["DO_SET_MISSION_CURRENT"] = 224] = "DO_SET_MISSION_CURRENT";
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
    MavCmd[MavCmd["DO_LAST"] = 240] = "DO_LAST";
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
    MavCmd[MavCmd["PREFLIGHT_CALIBRATION"] = 241] = "PREFLIGHT_CALIBRATION";
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
    MavCmd[MavCmd["PREFLIGHT_SET_SENSOR_OFFSETS"] = 242] = "PREFLIGHT_SET_SENSOR_OFFSETS";
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
    MavCmd[MavCmd["PREFLIGHT_UAVCAN"] = 243] = "PREFLIGHT_UAVCAN";
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
    MavCmd[MavCmd["PREFLIGHT_STORAGE"] = 245] = "PREFLIGHT_STORAGE";
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
    MavCmd[MavCmd["PREFLIGHT_REBOOT_SHUTDOWN"] = 246] = "PREFLIGHT_REBOOT_SHUTDOWN";
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
    MavCmd[MavCmd["OVERRIDE_GOTO"] = 252] = "OVERRIDE_GOTO";
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
    MavCmd[MavCmd["OBLIQUE_SURVEY"] = 260] = "OBLIQUE_SURVEY";
    /**
     * start running a mission
     * @param1 First Item (min: 0, increment: 1) first_item: the first mission item to run
     * @param2 Last Item (min: 0, increment: 1) last_item:  the last mission item to run (after this item is run, the mission ends)
     */
    MavCmd[MavCmd["MISSION_START"] = 300] = "MISSION_START";
    /**
     * Arms / Disarms a component
     * @param1 Arm (min: 0, max: 1, increment: 1) 0: disarm, 1: arm
     * @param2 Force (min: 0, max: 21196, increment: 21196) 0: arm-disarm unless prevented by safety checks (i.e. when landed), 21196: force arming/disarming (e.g. allow arming to override preflight checks and disarming in flight)
     */
    MavCmd[MavCmd["COMPONENT_ARM_DISARM"] = 400] = "COMPONENT_ARM_DISARM";
    /**
     * Instructs system to run pre-arm checks. This command should return MAV_RESULT_TEMPORARILY_REJECTED
     * in the case the system is armed, otherwse MAV_RESULT_ACCEPTED. Note that the return value from
     * executing this command does not indicate whether the vehicle is armable or not, just whether the
     * system has successfully run/is currently running the checks. The result of the checks is reflected
     * in the SYS_STATUS message.
     */
    MavCmd[MavCmd["RUN_PREARM_CHECKS"] = 401] = "RUN_PREARM_CHECKS";
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
    MavCmd[MavCmd["GET_HOME_POSITION"] = 410] = "GET_HOME_POSITION";
    /**
     * Starts receiver pairing.
     * @param1 Spektrum 0:Spektrum.
     * @param2 RC Type RC type.
     */
    MavCmd[MavCmd["START_RX_PAIR"] = 500] = "START_RX_PAIR";
    /**
     * Request the interval between messages for a particular MAVLink message ID. The receiver should ACK
     * the command and then emit its response in a MESSAGE_INTERVAL message.
     * @param1 Message ID (min: 0, max: 16777215, increment: 1) The MAVLink message ID
     */
    MavCmd[MavCmd["GET_MESSAGE_INTERVAL"] = 510] = "GET_MESSAGE_INTERVAL";
    /**
     * Set the interval between messages for a particular MAVLink message ID. This interface replaces
     * REQUEST_DATA_STREAM.
     * @param1 Message ID (min: 0, max: 16777215, increment: 1) The MAVLink message ID
     * @param2 Interval[us] (min: -1, increment: 1) The interval between two messages. Set to -1 to disable and 0 to request default rate.
     * @param7 Response Target (min: 0, max: 2, increment: 1) Target address of message stream (if message has target address fields). 0: Flight-stack default (recommended), 1: address of requestor, 2: broadcast.
     */
    MavCmd[MavCmd["SET_MESSAGE_INTERVAL"] = 511] = "SET_MESSAGE_INTERVAL";
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
    MavCmd[MavCmd["REQUEST_MESSAGE"] = 512] = "REQUEST_MESSAGE";
    /**
     * Request MAVLink protocol version compatibility. All receivers should ACK the command and then emit
     * their capabilities in an PROTOCOL_VERSION message
     * @param1 Protocol (min: 0, max: 1, increment: 1) 1: Request supported protocol versions by all nodes on the network
     * @param2 Reserved (all remaining params)
     */
    MavCmd[MavCmd["REQUEST_PROTOCOL_VERSION"] = 519] = "REQUEST_PROTOCOL_VERSION";
    /**
     * Request autopilot capabilities. The receiver should ACK the command and then emit its capabilities
     * in an AUTOPILOT_VERSION message
     * @param1 Version (min: 0, max: 1, increment: 1) 1: Request autopilot version
     * @param2 Reserved (all remaining params)
     */
    MavCmd[MavCmd["REQUEST_AUTOPILOT_CAPABILITIES"] = 520] = "REQUEST_AUTOPILOT_CAPABILITIES";
    /**
     * Request camera information (CAMERA_INFORMATION).
     * @param1 Capabilities (min: 0, max: 1, increment: 1) 0: No action 1: Request camera capabilities
     * @param2 Reserved (all remaining params)
     */
    MavCmd[MavCmd["REQUEST_CAMERA_INFORMATION"] = 521] = "REQUEST_CAMERA_INFORMATION";
    /**
     * Request camera settings (CAMERA_SETTINGS).
     * @param1 Settings (min: 0, max: 1, increment: 1) 0: No Action 1: Request camera settings
     * @param2 Reserved (all remaining params)
     */
    MavCmd[MavCmd["REQUEST_CAMERA_SETTINGS"] = 522] = "REQUEST_CAMERA_SETTINGS";
    /**
     * Request storage information (STORAGE_INFORMATION). Use the command's target_component to target a
     * specific component's storage.
     * @param1 Storage ID (min: 0, increment: 1) Storage ID (0 for all, 1 for first, 2 for second, etc.)
     * @param2 Information (min: 0, max: 1, increment: 1) 0: No Action 1: Request storage information
     * @param3 Reserved (all remaining params)
     */
    MavCmd[MavCmd["REQUEST_STORAGE_INFORMATION"] = 525] = "REQUEST_STORAGE_INFORMATION";
    /**
     * Format a storage medium. Once format is complete, a STORAGE_INFORMATION message is sent. Use the
     * command's target_component to target a specific component's storage.
     * @param1 Storage ID (min: 0, increment: 1) Storage ID (1 for first, 2 for second, etc.)
     * @param2 Format (min: 0, max: 1, increment: 1) 0: No action 1: Format storage
     * @param3 Reserved (all remaining params)
     */
    MavCmd[MavCmd["STORAGE_FORMAT"] = 526] = "STORAGE_FORMAT";
    /**
     * Request camera capture status (CAMERA_CAPTURE_STATUS)
     * @param1 Capture Status (min: 0, max: 1, increment: 1) 0: No Action 1: Request camera capture status
     * @param2 Reserved (all remaining params)
     */
    MavCmd[MavCmd["REQUEST_CAMERA_CAPTURE_STATUS"] = 527] = "REQUEST_CAMERA_CAPTURE_STATUS";
    /**
     * Request flight information (FLIGHT_INFORMATION)
     * @param1 Flight Information (min: 0, max: 1, increment: 1) 1: Request flight information
     * @param2 Reserved (all remaining params)
     */
    MavCmd[MavCmd["REQUEST_FLIGHT_INFORMATION"] = 528] = "REQUEST_FLIGHT_INFORMATION";
    /**
     * Reset all camera settings to Factory Default
     * @param1 Reset (min: 0, max: 1, increment: 1) 0: No Action 1: Reset all settings
     * @param2 Reserved (all remaining params)
     */
    MavCmd[MavCmd["RESET_CAMERA_SETTINGS"] = 529] = "RESET_CAMERA_SETTINGS";
    /**
     * Set camera running mode. Use NaN for reserved values. GCS will send a
     * MAV_CMD_REQUEST_VIDEO_STREAM_STATUS command after a mode change if the camera supports video
     * streaming.
     * @param1 Reserved (Set to 0)
     * @param2 Camera Mode Camera mode
     */
    MavCmd[MavCmd["SET_CAMERA_MODE"] = 530] = "SET_CAMERA_MODE";
    /**
     * Set camera zoom. Camera must respond with a CAMERA_SETTINGS message (on success).
     * @param1 Zoom Type Zoom type
     * @param2 Zoom Value Zoom value. The range of valid values depend on the zoom type.
     */
    MavCmd[MavCmd["SET_CAMERA_ZOOM"] = 531] = "SET_CAMERA_ZOOM";
    /**
     * Set camera focus. Camera must respond with a CAMERA_SETTINGS message (on success).
     * @param1 Focus Type Focus type
     * @param2 Focus Value Focus value
     */
    MavCmd[MavCmd["SET_CAMERA_FOCUS"] = 532] = "SET_CAMERA_FOCUS";
    /**
     * Tagged jump target. Can be jumped to with MAV_CMD_DO_JUMP_TAG.
     * @param1 Tag (min: 0, increment: 1) Tag.
     */
    MavCmd[MavCmd["JUMP_TAG"] = 600] = "JUMP_TAG";
    /**
     * Jump to the matching tag in the mission list. Repeat this action for the specified number of times.
     * A mission should contain a single matching tag for each jump. If this is not the case then a jump to
     * a missing tag should complete the mission, and a jump where there are multiple matching tags should
     * always select the one with the lowest mission sequence number.
     * @param1 Tag (min: 0, increment: 1) Target tag to jump to.
     * @param2 Repeat (min: 0, increment: 1) Repeat count.
     */
    MavCmd[MavCmd["DO_JUMP_TAG"] = 601] = "DO_JUMP_TAG";
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
    MavCmd[MavCmd["DO_GIMBAL_MANAGER_PITCHYAW"] = 1000] = "DO_GIMBAL_MANAGER_PITCHYAW";
    /**
     * Gimbal configuration to set which sysid/compid is in primary and secondary control.
     * @param1 sysid primary control Sysid for primary control (0: no one in control, -1: leave unchanged, -2: set itself in control (for missions where the own sysid is still unknown), -3: remove control if currently in control).
     * @param2 compid primary control Compid for primary control (0: no one in control, -1: leave unchanged, -2: set itself in control (for missions where the own sysid is still unknown), -3: remove control if currently in control).
     * @param3 sysid secondary control Sysid for secondary control (0: no one in control, -1: leave unchanged, -2: set itself in control (for missions where the own sysid is still unknown), -3: remove control if currently in control).
     * @param4 compid secondary control Compid for secondary control (0: no one in control, -1: leave unchanged, -2: set itself in control (for missions where the own sysid is still unknown), -3: remove control if currently in control).
     * @param7 Gimbal device ID Component ID of gimbal device to address (or 1-6 for non-MAVLink gimbal), 0 for all gimbal device components. Send command multiple times for more than one gimbal (but not all gimbals).
     */
    MavCmd[MavCmd["DO_GIMBAL_MANAGER_CONFIGURE"] = 1001] = "DO_GIMBAL_MANAGER_CONFIGURE";
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
    MavCmd[MavCmd["IMAGE_START_CAPTURE"] = 2000] = "IMAGE_START_CAPTURE";
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
    MavCmd[MavCmd["IMAGE_STOP_CAPTURE"] = 2001] = "IMAGE_STOP_CAPTURE";
    /**
     * Enable or disable on-board camera triggering system.
     * @param1 Enable (min: -1, max: 1, increment: 1) Trigger enable/disable (0 for disable, 1 for start), -1 to ignore
     * @param2 Reset (min: -1, max: 1, increment: 1) 1 to reset the trigger sequence, -1 or 0 to ignore
     * @param3 Pause (min: -1, max: 1, increment: 2) 1 to pause triggering, but without switching the camera off or retracting it. -1 to ignore
     */
    MavCmd[MavCmd["DO_TRIGGER_CONTROL"] = 2003] = "DO_TRIGGER_CONTROL";
    /**
     * If the camera supports point visual tracking (CAMERA_CAP_FLAGS_HAS_TRACKING_POINT is set), this
     * command allows to initiate the tracking.
     * @param1 Point x (min: 0, max: 1) Point to track x value (normalized 0..1, 0 is left, 1 is right).
     * @param2 Point y (min: 0, max: 1) Point to track y value (normalized 0..1, 0 is top, 1 is bottom).
     * @param3 Radius (min: 0, max: 1) Point radius (normalized 0..1, 0 is image left, 1 is image right).
     */
    MavCmd[MavCmd["CAMERA_TRACK_POINT"] = 2004] = "CAMERA_TRACK_POINT";
    /**
     * If the camera supports rectangle visual tracking (CAMERA_CAP_FLAGS_HAS_TRACKING_RECTANGLE is set),
     * this command allows to initiate the tracking.
     * @param1 Top left corner x (min: 0, max: 1) Top left corner of rectangle x value (normalized 0..1, 0 is left, 1 is right).
     * @param2 Top left corner y (min: 0, max: 1) Top left corner of rectangle y value (normalized 0..1, 0 is top, 1 is bottom).
     * @param3 Bottom right corner x (min: 0, max: 1) Bottom right corner of rectangle x value (normalized 0..1, 0 is left, 1 is right).
     * @param4 Bottom right corner y (min: 0, max: 1) Bottom right corner of rectangle y value (normalized 0..1, 0 is top, 1 is bottom).
     */
    MavCmd[MavCmd["CAMERA_TRACK_RECTANGLE"] = 2005] = "CAMERA_TRACK_RECTANGLE";
    /**
     * Stops ongoing tracking.
     */
    MavCmd[MavCmd["CAMERA_STOP_TRACKING"] = 2010] = "CAMERA_STOP_TRACKING";
    /**
     * Starts video capture (recording).
     * @param1 Stream ID (min: 0, increment: 1) Video Stream ID (0 for all streams)
     * @param2 Status Frequency[Hz] (min: 0) Frequency CAMERA_CAPTURE_STATUS messages should be sent while recording (0 for no messages, otherwise frequency)
     */
    MavCmd[MavCmd["VIDEO_START_CAPTURE"] = 2500] = "VIDEO_START_CAPTURE";
    /**
     * Stop the current video capture (recording).
     * @param1 Stream ID (min: 0, increment: 1) Video Stream ID (0 for all streams)
     */
    MavCmd[MavCmd["VIDEO_STOP_CAPTURE"] = 2501] = "VIDEO_STOP_CAPTURE";
    /**
     * Start video streaming
     * @param1 Stream ID (min: 0, increment: 1) Video Stream ID (0 for all streams, 1 for first, 2 for second, etc.)
     */
    MavCmd[MavCmd["VIDEO_START_STREAMING"] = 2502] = "VIDEO_START_STREAMING";
    /**
     * Stop the given video stream
     * @param1 Stream ID (min: 0, increment: 1) Video Stream ID (0 for all streams, 1 for first, 2 for second, etc.)
     */
    MavCmd[MavCmd["VIDEO_STOP_STREAMING"] = 2503] = "VIDEO_STOP_STREAMING";
    /**
     * Request video stream information (VIDEO_STREAM_INFORMATION)
     * @param1 Stream ID (min: 0, increment: 1) Video Stream ID (0 for all streams, 1 for first, 2 for second, etc.)
     */
    MavCmd[MavCmd["REQUEST_VIDEO_STREAM_INFORMATION"] = 2504] = "REQUEST_VIDEO_STREAM_INFORMATION";
    /**
     * Request video stream status (VIDEO_STREAM_STATUS)
     * @param1 Stream ID (min: 0, increment: 1) Video Stream ID (0 for all streams, 1 for first, 2 for second, etc.)
     */
    MavCmd[MavCmd["REQUEST_VIDEO_STREAM_STATUS"] = 2505] = "REQUEST_VIDEO_STREAM_STATUS";
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
    MavCmd[MavCmd["LOGGING_START"] = 2510] = "LOGGING_START";
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
    MavCmd[MavCmd["LOGGING_STOP"] = 2511] = "LOGGING_STOP";
    /**
     * @param1 Landing Gear ID (min: -1, increment: 1) Landing gear ID (default: 0, -1 for all)
     * @param2 Landing Gear Position Landing gear position (Down: 0, Up: 1, NaN for no change)
     */
    MavCmd[MavCmd["AIRFRAME_CONFIGURATION"] = 2520] = "AIRFRAME_CONFIGURATION";
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
    MavCmd[MavCmd["CONTROL_HIGH_LATENCY"] = 2600] = "CONTROL_HIGH_LATENCY";
    /**
     * Create a panorama at the current position
     * @param1 Horizontal Angle[deg] Viewing angle horizontal of the panorama (+- 0.5 the total angle)
     * @param2 Vertical Angle[deg] Viewing angle vertical of panorama.
     * @param3 Horizontal Speed[deg/s] Speed of the horizontal rotation.
     * @param4 Vertical Speed[deg/s] Speed of the vertical rotation.
     */
    MavCmd[MavCmd["PANORAMA_CREATE"] = 2800] = "PANORAMA_CREATE";
    /**
     * Request VTOL transition
     * @param1 State The target VTOL state. Only MAV_VTOL_STATE_MC and MAV_VTOL_STATE_FW can be used.
     */
    MavCmd[MavCmd["DO_VTOL_TRANSITION"] = 3000] = "DO_VTOL_TRANSITION";
    /**
     * Request authorization to arm the vehicle to a external entity, the arm authorizer is responsible to
     * request all data that is needs from the vehicle before authorize or deny the request. If approved
     * the progress of command_ack message should be set with period of time that this authorization is
     * valid in seconds or in case it was denied it should be set with one of the reasons in
     * ARM_AUTH_DENIED_REASON.
     * @param1 System ID (min: 0, max: 255, increment: 1) Vehicle system id, this way ground station can request arm authorization on behalf of any vehicle
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
    MavCmd[MavCmd["SET_GUIDED_SUBMODE_CIRCLE"] = 4001] = "SET_GUIDED_SUBMODE_CIRCLE";
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
    MavCmd[MavCmd["NAV_FENCE_RETURN_POINT"] = 5000] = "NAV_FENCE_RETURN_POINT";
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
    MavCmd[MavCmd["NAV_FENCE_POLYGON_VERTEX_INCLUSION"] = 5001] = "NAV_FENCE_POLYGON_VERTEX_INCLUSION";
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
    MavCmd[MavCmd["NAV_FENCE_POLYGON_VERTEX_EXCLUSION"] = 5002] = "NAV_FENCE_POLYGON_VERTEX_EXCLUSION";
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
    MavCmd[MavCmd["NAV_FENCE_CIRCLE_INCLUSION"] = 5003] = "NAV_FENCE_CIRCLE_INCLUSION";
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
    MavCmd[MavCmd["NAV_FENCE_CIRCLE_EXCLUSION"] = 5004] = "NAV_FENCE_CIRCLE_EXCLUSION";
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
    MavCmd[MavCmd["NAV_RALLY_POINT"] = 5100] = "NAV_RALLY_POINT";
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
    MavCmd[MavCmd["NAV_SWARM_ROI_POLYGON_VERTEX_INCLUSION"] = 5109] = "NAV_SWARM_ROI_POLYGON_VERTEX_INCLUSION";
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
    MavCmd[MavCmd["UAVCAN_GET_NODE_INFO"] = 5200] = "UAVCAN_GET_NODE_INFO";
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
    MavCmd[MavCmd["DO_SET_SAFETY_SWITCH_STATE"] = 5300] = "DO_SET_SAFETY_SWITCH_STATE";
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
    MavCmd[MavCmd["DO_ADSB_OUT_IDENT"] = 10001] = "DO_ADSB_OUT_IDENT";
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
    MavCmd[MavCmd["PAYLOAD_PREPARE_DEPLOY"] = 30001] = "PAYLOAD_PREPARE_DEPLOY";
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
    MavCmd[MavCmd["PAYLOAD_CONTROL_DEPLOY"] = 30002] = "PAYLOAD_CONTROL_DEPLOY";
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
    MavCmd[MavCmd["FIXED_MAG_CAL_YAW"] = 42006] = "FIXED_MAG_CAL_YAW";
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
    MavCmd[MavCmd["DO_WINCH"] = 42600] = "DO_WINCH";
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
    MavCmd[MavCmd["WAYPOINT_USER_1"] = 31000] = "WAYPOINT_USER_1";
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
    MavCmd[MavCmd["WAYPOINT_USER_2"] = 31001] = "WAYPOINT_USER_2";
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
    MavCmd[MavCmd["WAYPOINT_USER_3"] = 31002] = "WAYPOINT_USER_3";
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
    MavCmd[MavCmd["WAYPOINT_USER_4"] = 31003] = "WAYPOINT_USER_4";
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
    MavCmd[MavCmd["WAYPOINT_USER_5"] = 31004] = "WAYPOINT_USER_5";
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
    MavCmd[MavCmd["SPATIAL_USER_1"] = 31005] = "SPATIAL_USER_1";
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
    MavCmd[MavCmd["SPATIAL_USER_2"] = 31006] = "SPATIAL_USER_2";
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
    MavCmd[MavCmd["SPATIAL_USER_3"] = 31007] = "SPATIAL_USER_3";
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
    MavCmd[MavCmd["SPATIAL_USER_4"] = 31008] = "SPATIAL_USER_4";
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
    MavCmd[MavCmd["SPATIAL_USER_5"] = 31009] = "SPATIAL_USER_5";
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
    MavCmd[MavCmd["USER_1"] = 31010] = "USER_1";
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
    MavCmd[MavCmd["USER_2"] = 31011] = "USER_2";
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
    MavCmd[MavCmd["USER_3"] = 31012] = "USER_3";
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
    MavCmd[MavCmd["USER_4"] = 31013] = "USER_4";
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
    MavCmd[MavCmd["USER_5"] = 31014] = "USER_5";
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
    MavCmd[MavCmd["CAN_FORWARD"] = 32000] = "CAN_FORWARD";
})(MavCmd = exports.MavCmd || (exports.MavCmd = {}));
/**
 * A data stream is not a fixed set of messages, but rather a recommendation to the autopilot software.
 * Individual autopilots may or may not obey the recommended messages.
 */
var MavDataStream;
(function (MavDataStream) {
    /**
     * Enable all data streams
     */
    MavDataStream[MavDataStream["ALL"] = 0] = "ALL";
    /**
     * Enable IMU_RAW, GPS_RAW, GPS_STATUS packets.
     */
    MavDataStream[MavDataStream["RAW_SENSORS"] = 1] = "RAW_SENSORS";
    /**
     * Enable GPS_STATUS, CONTROL_STATUS, AUX_STATUS
     */
    MavDataStream[MavDataStream["EXTENDED_STATUS"] = 2] = "EXTENDED_STATUS";
    /**
     * Enable RC_CHANNELS_SCALED, RC_CHANNELS_RAW, SERVO_OUTPUT_RAW
     */
    MavDataStream[MavDataStream["RC_CHANNELS"] = 3] = "RC_CHANNELS";
    /**
     * Enable ATTITUDE_CONTROLLER_OUTPUT, POSITION_CONTROLLER_OUTPUT, NAV_CONTROLLER_OUTPUT.
     */
    MavDataStream[MavDataStream["RAW_CONTROLLER"] = 4] = "RAW_CONTROLLER";
    /**
     * Enable LOCAL_POSITION, GLOBAL_POSITION/GLOBAL_POSITION_INT messages.
     */
    MavDataStream[MavDataStream["POSITION"] = 6] = "POSITION";
    /**
     * Dependent on the autopilot
     */
    MavDataStream[MavDataStream["EXTRA1"] = 10] = "EXTRA1";
    /**
     * Dependent on the autopilot
     */
    MavDataStream[MavDataStream["EXTRA2"] = 11] = "EXTRA2";
    /**
     * Dependent on the autopilot
     */
    MavDataStream[MavDataStream["EXTRA3"] = 12] = "EXTRA3";
})(MavDataStream = exports.MavDataStream || (exports.MavDataStream = {}));
/**
 * The ROI (region of interest) for the vehicle. This can be be used by the vehicle for camera/vehicle
 * attitude alignment (see MAV_CMD_NAV_ROI).
 */
var MavRoi;
(function (MavRoi) {
    /**
     * No region of interest.
     */
    MavRoi[MavRoi["NONE"] = 0] = "NONE";
    /**
     * Point toward next waypoint, with optional pitch/roll/yaw offset.
     */
    MavRoi[MavRoi["WPNEXT"] = 1] = "WPNEXT";
    /**
     * Point toward given waypoint.
     */
    MavRoi[MavRoi["WPINDEX"] = 2] = "WPINDEX";
    /**
     * Point toward fixed location.
     */
    MavRoi[MavRoi["LOCATION"] = 3] = "LOCATION";
    /**
     * Point toward of given id.
     */
    MavRoi[MavRoi["TARGET"] = 4] = "TARGET";
})(MavRoi = exports.MavRoi || (exports.MavRoi = {}));
/**
 * Specifies the datatype of a MAVLink parameter.
 */
var MavParamType;
(function (MavParamType) {
    /**
     * 8-bit unsigned integer
     */
    MavParamType[MavParamType["UINT8"] = 1] = "UINT8";
    /**
     * 8-bit signed integer
     */
    MavParamType[MavParamType["INT8"] = 2] = "INT8";
    /**
     * 16-bit unsigned integer
     */
    MavParamType[MavParamType["UINT16"] = 3] = "UINT16";
    /**
     * 16-bit signed integer
     */
    MavParamType[MavParamType["INT16"] = 4] = "INT16";
    /**
     * 32-bit unsigned integer
     */
    MavParamType[MavParamType["UINT32"] = 5] = "UINT32";
    /**
     * 32-bit signed integer
     */
    MavParamType[MavParamType["INT32"] = 6] = "INT32";
    /**
     * 64-bit unsigned integer
     */
    MavParamType[MavParamType["UINT64"] = 7] = "UINT64";
    /**
     * 64-bit signed integer
     */
    MavParamType[MavParamType["INT64"] = 8] = "INT64";
    /**
     * 32-bit floating-point
     */
    MavParamType[MavParamType["REAL32"] = 9] = "REAL32";
    /**
     * 64-bit floating-point
     */
    MavParamType[MavParamType["REAL64"] = 10] = "REAL64";
})(MavParamType = exports.MavParamType || (exports.MavParamType = {}));
/**
 * Specifies the datatype of a MAVLink extended parameter.
 */
var MavParamExtType;
(function (MavParamExtType) {
    /**
     * 8-bit unsigned integer
     */
    MavParamExtType[MavParamExtType["UINT8"] = 1] = "UINT8";
    /**
     * 8-bit signed integer
     */
    MavParamExtType[MavParamExtType["INT8"] = 2] = "INT8";
    /**
     * 16-bit unsigned integer
     */
    MavParamExtType[MavParamExtType["UINT16"] = 3] = "UINT16";
    /**
     * 16-bit signed integer
     */
    MavParamExtType[MavParamExtType["INT16"] = 4] = "INT16";
    /**
     * 32-bit unsigned integer
     */
    MavParamExtType[MavParamExtType["UINT32"] = 5] = "UINT32";
    /**
     * 32-bit signed integer
     */
    MavParamExtType[MavParamExtType["INT32"] = 6] = "INT32";
    /**
     * 64-bit unsigned integer
     */
    MavParamExtType[MavParamExtType["UINT64"] = 7] = "UINT64";
    /**
     * 64-bit signed integer
     */
    MavParamExtType[MavParamExtType["INT64"] = 8] = "INT64";
    /**
     * 32-bit floating-point
     */
    MavParamExtType[MavParamExtType["REAL32"] = 9] = "REAL32";
    /**
     * 64-bit floating-point
     */
    MavParamExtType[MavParamExtType["REAL64"] = 10] = "REAL64";
    /**
     * Custom Type
     */
    MavParamExtType[MavParamExtType["CUSTOM"] = 11] = "CUSTOM";
})(MavParamExtType = exports.MavParamExtType || (exports.MavParamExtType = {}));
/**
 * Result from a MAVLink command (MAV_CMD)
 */
var MavResult;
(function (MavResult) {
    /**
     * Command is valid (is supported and has valid parameters), and was executed.
     */
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
    /**
     * Command is not supported (unknown).
     */
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
    /**
     * Command is only accepted when sent as a COMMAND_LONG.
     */
    MavResult[MavResult["COMMAND_LONG_ONLY"] = 7] = "COMMAND_LONG_ONLY";
    /**
     * Command is only accepted when sent as a COMMAND_INT.
     */
    MavResult[MavResult["COMMAND_INT_ONLY"] = 8] = "COMMAND_INT_ONLY";
})(MavResult = exports.MavResult || (exports.MavResult = {}));
/**
 * Result of mission operation (in a MISSION_ACK message).
 */
var MavMissionResult;
(function (MavMissionResult) {
    /**
     * mission accepted OK
     */
    MavMissionResult[MavMissionResult["ACCEPTED"] = 0] = "ACCEPTED";
    /**
     * Generic error / not accepting mission commands at all right now.
     */
    MavMissionResult[MavMissionResult["ERROR"] = 1] = "ERROR";
    /**
     * Coordinate frame is not supported.
     */
    MavMissionResult[MavMissionResult["UNSUPPORTED_FRAME"] = 2] = "UNSUPPORTED_FRAME";
    /**
     * Command is not supported.
     */
    MavMissionResult[MavMissionResult["UNSUPPORTED"] = 3] = "UNSUPPORTED";
    /**
     * Mission items exceed storage space.
     */
    MavMissionResult[MavMissionResult["NO_SPACE"] = 4] = "NO_SPACE";
    /**
     * One of the parameters has an invalid value.
     */
    MavMissionResult[MavMissionResult["INVALID"] = 5] = "INVALID";
    /**
     * param1 has an invalid value.
     */
    MavMissionResult[MavMissionResult["INVALID_PARAM1"] = 6] = "INVALID_PARAM1";
    /**
     * param2 has an invalid value.
     */
    MavMissionResult[MavMissionResult["INVALID_PARAM2"] = 7] = "INVALID_PARAM2";
    /**
     * param3 has an invalid value.
     */
    MavMissionResult[MavMissionResult["INVALID_PARAM3"] = 8] = "INVALID_PARAM3";
    /**
     * param4 has an invalid value.
     */
    MavMissionResult[MavMissionResult["INVALID_PARAM4"] = 9] = "INVALID_PARAM4";
    /**
     * x / param5 has an invalid value.
     */
    MavMissionResult[MavMissionResult["INVALID_PARAM5_X"] = 10] = "INVALID_PARAM5_X";
    /**
     * y / param6 has an invalid value.
     */
    MavMissionResult[MavMissionResult["INVALID_PARAM6_Y"] = 11] = "INVALID_PARAM6_Y";
    /**
     * z / param7 has an invalid value.
     */
    MavMissionResult[MavMissionResult["INVALID_PARAM7"] = 12] = "INVALID_PARAM7";
    /**
     * Mission item received out of sequence
     */
    MavMissionResult[MavMissionResult["INVALID_SEQUENCE"] = 13] = "INVALID_SEQUENCE";
    /**
     * Not accepting any mission commands from this communication partner.
     */
    MavMissionResult[MavMissionResult["DENIED"] = 14] = "DENIED";
    /**
     * Current mission operation cancelled (e.g. mission upload, mission download).
     */
    MavMissionResult[MavMissionResult["OPERATION_CANCELLED"] = 15] = "OPERATION_CANCELLED";
})(MavMissionResult = exports.MavMissionResult || (exports.MavMissionResult = {}));
/**
 * Indicates the severity level, generally used for status messages to indicate their relative urgency.
 * Based on RFC-5424 using expanded definitions at:
 * http://www.kiwisyslog.com/kb/info:-syslog-message-levels/.
 */
var MavSeverity;
(function (MavSeverity) {
    /**
     * System is unusable. This is a "panic" condition.
     */
    MavSeverity[MavSeverity["EMERGENCY"] = 0] = "EMERGENCY";
    /**
     * Action should be taken immediately. Indicates error in non-critical systems.
     */
    MavSeverity[MavSeverity["ALERT"] = 1] = "ALERT";
    /**
     * Action must be taken immediately. Indicates failure in a primary system.
     */
    MavSeverity[MavSeverity["CRITICAL"] = 2] = "CRITICAL";
    /**
     * Indicates an error in secondary/redundant systems.
     */
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
    /**
     * Normal operational messages. Useful for logging. No action is required for these messages.
     */
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
    /**
     * main brick power supply valid
     */
    MavPowerStatus[MavPowerStatus["BRICK_VALID"] = 1] = "BRICK_VALID";
    /**
     * main servo power supply valid for FMU
     */
    MavPowerStatus[MavPowerStatus["SERVO_VALID"] = 2] = "SERVO_VALID";
    /**
     * USB power is connected
     */
    MavPowerStatus[MavPowerStatus["USB_CONNECTED"] = 4] = "USB_CONNECTED";
    /**
     * peripheral supply is in over-current state
     */
    MavPowerStatus[MavPowerStatus["PERIPH_OVERCURRENT"] = 8] = "PERIPH_OVERCURRENT";
    /**
     * hi-power peripheral supply is in over-current state
     */
    MavPowerStatus[MavPowerStatus["PERIPH_HIPOWER_OVERCURRENT"] = 16] = "PERIPH_HIPOWER_OVERCURRENT";
    /**
     * Power status has changed since boot
     */
    MavPowerStatus[MavPowerStatus["CHANGED"] = 32] = "CHANGED";
})(MavPowerStatus = exports.MavPowerStatus || (exports.MavPowerStatus = {}));
/**
 * SERIAL_CONTROL device types
 */
var SerialControlDev;
(function (SerialControlDev) {
    /**
     * First telemetry port
     */
    SerialControlDev[SerialControlDev["DEV_TELEM1"] = 0] = "DEV_TELEM1";
    /**
     * Second telemetry port
     */
    SerialControlDev[SerialControlDev["DEV_TELEM2"] = 1] = "DEV_TELEM2";
    /**
     * First GPS port
     */
    SerialControlDev[SerialControlDev["DEV_GPS1"] = 2] = "DEV_GPS1";
    /**
     * Second GPS port
     */
    SerialControlDev[SerialControlDev["DEV_GPS2"] = 3] = "DEV_GPS2";
    /**
     * system shell
     */
    SerialControlDev[SerialControlDev["DEV_SHELL"] = 10] = "DEV_SHELL";
    /**
     * SERIAL0
     */
    SerialControlDev[SerialControlDev["SERIAL0"] = 100] = "SERIAL0";
    /**
     * SERIAL1
     */
    SerialControlDev[SerialControlDev["SERIAL1"] = 101] = "SERIAL1";
    /**
     * SERIAL2
     */
    SerialControlDev[SerialControlDev["SERIAL2"] = 102] = "SERIAL2";
    /**
     * SERIAL3
     */
    SerialControlDev[SerialControlDev["SERIAL3"] = 103] = "SERIAL3";
    /**
     * SERIAL4
     */
    SerialControlDev[SerialControlDev["SERIAL4"] = 104] = "SERIAL4";
    /**
     * SERIAL5
     */
    SerialControlDev[SerialControlDev["SERIAL5"] = 105] = "SERIAL5";
    /**
     * SERIAL6
     */
    SerialControlDev[SerialControlDev["SERIAL6"] = 106] = "SERIAL6";
    /**
     * SERIAL7
     */
    SerialControlDev[SerialControlDev["SERIAL7"] = 107] = "SERIAL7";
    /**
     * SERIAL8
     */
    SerialControlDev[SerialControlDev["SERIAL8"] = 108] = "SERIAL8";
    /**
     * SERIAL9
     */
    SerialControlDev[SerialControlDev["SERIAL9"] = 109] = "SERIAL9";
})(SerialControlDev = exports.SerialControlDev || (exports.SerialControlDev = {}));
/**
 * SERIAL_CONTROL flags (bitmask)
 */
var SerialControlFlag;
(function (SerialControlFlag) {
    /**
     * Set if this is a reply
     */
    SerialControlFlag[SerialControlFlag["REPLY"] = 1] = "REPLY";
    /**
     * Set if the sender wants the receiver to send a response as another SERIAL_CONTROL message
     */
    SerialControlFlag[SerialControlFlag["RESPOND"] = 2] = "RESPOND";
    /**
     * Set if access to the serial port should be removed from whatever driver is currently using it,
     * giving exclusive access to the SERIAL_CONTROL protocol. The port can be handed back by sending a
     * request without this flag set
     */
    SerialControlFlag[SerialControlFlag["EXCLUSIVE"] = 4] = "EXCLUSIVE";
    /**
     * Block on writes to the serial port
     */
    SerialControlFlag[SerialControlFlag["BLOCKING"] = 8] = "BLOCKING";
    /**
     * Send multiple replies until port is drained
     */
    SerialControlFlag[SerialControlFlag["MULTI"] = 16] = "MULTI";
})(SerialControlFlag = exports.SerialControlFlag || (exports.SerialControlFlag = {}));
/**
 * Enumeration of distance sensor types
 */
var MavDistanceSensor;
(function (MavDistanceSensor) {
    /**
     * Laser rangefinder, e.g. LightWare SF02/F or PulsedLight units
     */
    MavDistanceSensor[MavDistanceSensor["LASER"] = 0] = "LASER";
    /**
     * Ultrasound rangefinder, e.g. MaxBotix units
     */
    MavDistanceSensor[MavDistanceSensor["ULTRASOUND"] = 1] = "ULTRASOUND";
    /**
     * Infrared rangefinder, e.g. Sharp units
     */
    MavDistanceSensor[MavDistanceSensor["INFRARED"] = 2] = "INFRARED";
    /**
     * Radar type, e.g. uLanding units
     */
    MavDistanceSensor[MavDistanceSensor["RADAR"] = 3] = "RADAR";
    /**
     * Broken or unknown type, e.g. analog units
     */
    MavDistanceSensor[MavDistanceSensor["UNKNOWN"] = 4] = "UNKNOWN";
})(MavDistanceSensor = exports.MavDistanceSensor || (exports.MavDistanceSensor = {}));
/**
 * Enumeration of sensor orientation, according to its rotations
 */
var MavSensorOrientation;
(function (MavSensorOrientation) {
    /**
     * Roll: 0, Pitch: 0, Yaw: 0
     */
    MavSensorOrientation[MavSensorOrientation["NONE"] = 0] = "NONE";
    /**
     * Roll: 0, Pitch: 0, Yaw: 45
     */
    MavSensorOrientation[MavSensorOrientation["YAW_45"] = 1] = "YAW_45";
    /**
     * Roll: 0, Pitch: 0, Yaw: 90
     */
    MavSensorOrientation[MavSensorOrientation["YAW_90"] = 2] = "YAW_90";
    /**
     * Roll: 0, Pitch: 0, Yaw: 135
     */
    MavSensorOrientation[MavSensorOrientation["YAW_135"] = 3] = "YAW_135";
    /**
     * Roll: 0, Pitch: 0, Yaw: 180
     */
    MavSensorOrientation[MavSensorOrientation["YAW_180"] = 4] = "YAW_180";
    /**
     * Roll: 0, Pitch: 0, Yaw: 225
     */
    MavSensorOrientation[MavSensorOrientation["YAW_225"] = 5] = "YAW_225";
    /**
     * Roll: 0, Pitch: 0, Yaw: 270
     */
    MavSensorOrientation[MavSensorOrientation["YAW_270"] = 6] = "YAW_270";
    /**
     * Roll: 0, Pitch: 0, Yaw: 315
     */
    MavSensorOrientation[MavSensorOrientation["YAW_315"] = 7] = "YAW_315";
    /**
     * Roll: 180, Pitch: 0, Yaw: 0
     */
    MavSensorOrientation[MavSensorOrientation["ROLL_180"] = 8] = "ROLL_180";
    /**
     * Roll: 180, Pitch: 0, Yaw: 45
     */
    MavSensorOrientation[MavSensorOrientation["ROLL_180_YAW_45"] = 9] = "ROLL_180_YAW_45";
    /**
     * Roll: 180, Pitch: 0, Yaw: 90
     */
    MavSensorOrientation[MavSensorOrientation["ROLL_180_YAW_90"] = 10] = "ROLL_180_YAW_90";
    /**
     * Roll: 180, Pitch: 0, Yaw: 135
     */
    MavSensorOrientation[MavSensorOrientation["ROLL_180_YAW_135"] = 11] = "ROLL_180_YAW_135";
    /**
     * Roll: 0, Pitch: 180, Yaw: 0
     */
    MavSensorOrientation[MavSensorOrientation["PITCH_180"] = 12] = "PITCH_180";
    /**
     * Roll: 180, Pitch: 0, Yaw: 225
     */
    MavSensorOrientation[MavSensorOrientation["ROLL_180_YAW_225"] = 13] = "ROLL_180_YAW_225";
    /**
     * Roll: 180, Pitch: 0, Yaw: 270
     */
    MavSensorOrientation[MavSensorOrientation["ROLL_180_YAW_270"] = 14] = "ROLL_180_YAW_270";
    /**
     * Roll: 180, Pitch: 0, Yaw: 315
     */
    MavSensorOrientation[MavSensorOrientation["ROLL_180_YAW_315"] = 15] = "ROLL_180_YAW_315";
    /**
     * Roll: 90, Pitch: 0, Yaw: 0
     */
    MavSensorOrientation[MavSensorOrientation["ROLL_90"] = 16] = "ROLL_90";
    /**
     * Roll: 90, Pitch: 0, Yaw: 45
     */
    MavSensorOrientation[MavSensorOrientation["ROLL_90_YAW_45"] = 17] = "ROLL_90_YAW_45";
    /**
     * Roll: 90, Pitch: 0, Yaw: 90
     */
    MavSensorOrientation[MavSensorOrientation["ROLL_90_YAW_90"] = 18] = "ROLL_90_YAW_90";
    /**
     * Roll: 90, Pitch: 0, Yaw: 135
     */
    MavSensorOrientation[MavSensorOrientation["ROLL_90_YAW_135"] = 19] = "ROLL_90_YAW_135";
    /**
     * Roll: 270, Pitch: 0, Yaw: 0
     */
    MavSensorOrientation[MavSensorOrientation["ROLL_270"] = 20] = "ROLL_270";
    /**
     * Roll: 270, Pitch: 0, Yaw: 45
     */
    MavSensorOrientation[MavSensorOrientation["ROLL_270_YAW_45"] = 21] = "ROLL_270_YAW_45";
    /**
     * Roll: 270, Pitch: 0, Yaw: 90
     */
    MavSensorOrientation[MavSensorOrientation["ROLL_270_YAW_90"] = 22] = "ROLL_270_YAW_90";
    /**
     * Roll: 270, Pitch: 0, Yaw: 135
     */
    MavSensorOrientation[MavSensorOrientation["ROLL_270_YAW_135"] = 23] = "ROLL_270_YAW_135";
    /**
     * Roll: 0, Pitch: 90, Yaw: 0
     */
    MavSensorOrientation[MavSensorOrientation["PITCH_90"] = 24] = "PITCH_90";
    /**
     * Roll: 0, Pitch: 270, Yaw: 0
     */
    MavSensorOrientation[MavSensorOrientation["PITCH_270"] = 25] = "PITCH_270";
    /**
     * Roll: 0, Pitch: 180, Yaw: 90
     */
    MavSensorOrientation[MavSensorOrientation["PITCH_180_YAW_90"] = 26] = "PITCH_180_YAW_90";
    /**
     * Roll: 0, Pitch: 180, Yaw: 270
     */
    MavSensorOrientation[MavSensorOrientation["PITCH_180_YAW_270"] = 27] = "PITCH_180_YAW_270";
    /**
     * Roll: 90, Pitch: 90, Yaw: 0
     */
    MavSensorOrientation[MavSensorOrientation["ROLL_90_PITCH_90"] = 28] = "ROLL_90_PITCH_90";
    /**
     * Roll: 180, Pitch: 90, Yaw: 0
     */
    MavSensorOrientation[MavSensorOrientation["ROLL_180_PITCH_90"] = 29] = "ROLL_180_PITCH_90";
    /**
     * Roll: 270, Pitch: 90, Yaw: 0
     */
    MavSensorOrientation[MavSensorOrientation["ROLL_270_PITCH_90"] = 30] = "ROLL_270_PITCH_90";
    /**
     * Roll: 90, Pitch: 180, Yaw: 0
     */
    MavSensorOrientation[MavSensorOrientation["ROLL_90_PITCH_180"] = 31] = "ROLL_90_PITCH_180";
    /**
     * Roll: 270, Pitch: 180, Yaw: 0
     */
    MavSensorOrientation[MavSensorOrientation["ROLL_270_PITCH_180"] = 32] = "ROLL_270_PITCH_180";
    /**
     * Roll: 90, Pitch: 270, Yaw: 0
     */
    MavSensorOrientation[MavSensorOrientation["ROLL_90_PITCH_270"] = 33] = "ROLL_90_PITCH_270";
    /**
     * Roll: 180, Pitch: 270, Yaw: 0
     */
    MavSensorOrientation[MavSensorOrientation["ROLL_180_PITCH_270"] = 34] = "ROLL_180_PITCH_270";
    /**
     * Roll: 270, Pitch: 270, Yaw: 0
     */
    MavSensorOrientation[MavSensorOrientation["ROLL_270_PITCH_270"] = 35] = "ROLL_270_PITCH_270";
    /**
     * Roll: 90, Pitch: 180, Yaw: 90
     */
    MavSensorOrientation[MavSensorOrientation["ROLL_90_PITCH_180_YAW_90"] = 36] = "ROLL_90_PITCH_180_YAW_90";
    /**
     * Roll: 90, Pitch: 0, Yaw: 270
     */
    MavSensorOrientation[MavSensorOrientation["ROLL_90_YAW_270"] = 37] = "ROLL_90_YAW_270";
    /**
     * Roll: 90, Pitch: 68, Yaw: 293
     */
    MavSensorOrientation[MavSensorOrientation["ROLL_90_PITCH_68_YAW_293"] = 38] = "ROLL_90_PITCH_68_YAW_293";
    /**
     * Pitch: 315
     */
    MavSensorOrientation[MavSensorOrientation["PITCH_315"] = 39] = "PITCH_315";
    /**
     * Roll: 90, Pitch: 315
     */
    MavSensorOrientation[MavSensorOrientation["ROLL_90_PITCH_315"] = 40] = "ROLL_90_PITCH_315";
    /**
     * Custom orientation
     */
    MavSensorOrientation[MavSensorOrientation["CUSTOM"] = 100] = "CUSTOM";
})(MavSensorOrientation = exports.MavSensorOrientation || (exports.MavSensorOrientation = {}));
/**
 * Bitmask of (optional) autopilot capabilities (64 bit). If a bit is set, the autopilot supports this
 * capability.
 */
var MavProtocolCapability;
(function (MavProtocolCapability) {
    /**
     * Autopilot supports MISSION float message type.
     */
    MavProtocolCapability[MavProtocolCapability["MISSION_FLOAT"] = 1] = "MISSION_FLOAT";
    /**
     * Autopilot supports the new param float message type.
     */
    MavProtocolCapability[MavProtocolCapability["PARAM_FLOAT"] = 2] = "PARAM_FLOAT";
    /**
     * Autopilot supports MISSION_ITEM_INT scaled integer message type.
     */
    MavProtocolCapability[MavProtocolCapability["MISSION_INT"] = 4] = "MISSION_INT";
    /**
     * Autopilot supports COMMAND_INT scaled integer message type.
     */
    MavProtocolCapability[MavProtocolCapability["COMMAND_INT"] = 8] = "COMMAND_INT";
    /**
     * Autopilot supports the new param union message type.
     */
    MavProtocolCapability[MavProtocolCapability["PARAM_UNION"] = 16] = "PARAM_UNION";
    /**
     * Autopilot supports the File Transfer Protocol v1: https://mavlink.io/en/services/ftp.html.
     */
    MavProtocolCapability[MavProtocolCapability["FTP"] = 32] = "FTP";
    /**
     * Autopilot supports commanding attitude offboard.
     */
    MavProtocolCapability[MavProtocolCapability["SET_ATTITUDE_TARGET"] = 64] = "SET_ATTITUDE_TARGET";
    /**
     * Autopilot supports commanding position and velocity targets in local NED frame.
     */
    MavProtocolCapability[MavProtocolCapability["SET_POSITION_TARGET_LOCAL_NED"] = 128] = "SET_POSITION_TARGET_LOCAL_NED";
    /**
     * Autopilot supports commanding position and velocity targets in global scaled integers.
     */
    MavProtocolCapability[MavProtocolCapability["SET_POSITION_TARGET_GLOBAL_INT"] = 256] = "SET_POSITION_TARGET_GLOBAL_INT";
    /**
     * Autopilot supports terrain protocol / data handling.
     */
    MavProtocolCapability[MavProtocolCapability["TERRAIN"] = 512] = "TERRAIN";
    /**
     * Autopilot supports direct actuator control.
     */
    MavProtocolCapability[MavProtocolCapability["SET_ACTUATOR_TARGET"] = 1024] = "SET_ACTUATOR_TARGET";
    /**
     * Autopilot supports the MAV_CMD_DO_FLIGHTTERMINATION command (flight termination).
     */
    MavProtocolCapability[MavProtocolCapability["FLIGHT_TERMINATION"] = 2048] = "FLIGHT_TERMINATION";
    /**
     * Autopilot supports onboard compass calibration.
     */
    MavProtocolCapability[MavProtocolCapability["COMPASS_CALIBRATION"] = 4096] = "COMPASS_CALIBRATION";
    /**
     * Autopilot supports MAVLink version 2.
     */
    MavProtocolCapability[MavProtocolCapability["MAVLINK2"] = 8192] = "MAVLINK2";
    /**
     * Autopilot supports mission fence protocol.
     */
    MavProtocolCapability[MavProtocolCapability["MISSION_FENCE"] = 16384] = "MISSION_FENCE";
    /**
     * Autopilot supports mission rally point protocol.
     */
    MavProtocolCapability[MavProtocolCapability["MISSION_RALLY"] = 32768] = "MISSION_RALLY";
    /**
     * Autopilot supports the flight information protocol.
     */
    MavProtocolCapability[MavProtocolCapability["FLIGHT_INFORMATION"] = 65536] = "FLIGHT_INFORMATION";
})(MavProtocolCapability = exports.MavProtocolCapability || (exports.MavProtocolCapability = {}));
/**
 * Type of mission items being requested/sent in mission protocol.
 */
var MavMissionType;
(function (MavMissionType) {
    /**
     * Items are mission commands for main mission.
     */
    MavMissionType[MavMissionType["MISSION"] = 0] = "MISSION";
    /**
     * Specifies GeoFence area(s). Items are MAV_CMD_NAV_FENCE_ GeoFence items.
     */
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
    /**
     * Only used in MISSION_CLEAR_ALL to clear all mission types.
     */
    MavMissionType[MavMissionType["ALL"] = 255] = "ALL";
})(MavMissionType = exports.MavMissionType || (exports.MavMissionType = {}));
/**
 * Enumeration of estimator types
 */
var MavEstimatorType;
(function (MavEstimatorType) {
    /**
     * Unknown type of the estimator.
     */
    MavEstimatorType[MavEstimatorType["UNKNOWN"] = 0] = "UNKNOWN";
    /**
     * This is a naive estimator without any real covariance feedback.
     */
    MavEstimatorType[MavEstimatorType["NAIVE"] = 1] = "NAIVE";
    /**
     * Computer vision based estimate. Might be up to scale.
     */
    MavEstimatorType[MavEstimatorType["VISION"] = 2] = "VISION";
    /**
     * Visual-inertial estimate.
     */
    MavEstimatorType[MavEstimatorType["VIO"] = 3] = "VIO";
    /**
     * Plain GPS estimate.
     */
    MavEstimatorType[MavEstimatorType["GPS"] = 4] = "GPS";
    /**
     * Estimator integrating GPS and inertial sensing.
     */
    MavEstimatorType[MavEstimatorType["GPS_INS"] = 5] = "GPS_INS";
    /**
     * Estimate from external motion capturing system.
     */
    MavEstimatorType[MavEstimatorType["MOCAP"] = 6] = "MOCAP";
    /**
     * Estimator based on lidar sensor input.
     */
    MavEstimatorType[MavEstimatorType["LIDAR"] = 7] = "LIDAR";
    /**
     * Estimator on autopilot.
     */
    MavEstimatorType[MavEstimatorType["AUTOPILOT"] = 8] = "AUTOPILOT";
})(MavEstimatorType = exports.MavEstimatorType || (exports.MavEstimatorType = {}));
/**
 * Enumeration of battery types
 */
var MavBatteryType;
(function (MavBatteryType) {
    /**
     * Not specified.
     */
    MavBatteryType[MavBatteryType["UNKNOWN"] = 0] = "UNKNOWN";
    /**
     * Lithium polymer battery
     */
    MavBatteryType[MavBatteryType["LIPO"] = 1] = "LIPO";
    /**
     * Lithium-iron-phosphate battery
     */
    MavBatteryType[MavBatteryType["LIFE"] = 2] = "LIFE";
    /**
     * Lithium-ION battery
     */
    MavBatteryType[MavBatteryType["LION"] = 3] = "LION";
    /**
     * Nickel metal hydride battery
     */
    MavBatteryType[MavBatteryType["NIMH"] = 4] = "NIMH";
})(MavBatteryType = exports.MavBatteryType || (exports.MavBatteryType = {}));
/**
 * Enumeration of battery functions
 */
var MavBatteryFunction;
(function (MavBatteryFunction) {
    /**
     * Battery function is unknown
     */
    MavBatteryFunction[MavBatteryFunction["FUNCTION_UNKNOWN"] = 0] = "FUNCTION_UNKNOWN";
    /**
     * Battery supports all flight systems
     */
    MavBatteryFunction[MavBatteryFunction["FUNCTION_ALL"] = 1] = "FUNCTION_ALL";
    /**
     * Battery for the propulsion system
     */
    MavBatteryFunction[MavBatteryFunction["FUNCTION_PROPULSION"] = 2] = "FUNCTION_PROPULSION";
    /**
     * Avionics battery
     */
    MavBatteryFunction[MavBatteryFunction["FUNCTION_AVIONICS"] = 3] = "FUNCTION_AVIONICS";
    /**
     * Payload battery
     */
    MavBatteryFunction[MavBatteryFunction["TYPE_PAYLOAD"] = 4] = "TYPE_PAYLOAD";
})(MavBatteryFunction = exports.MavBatteryFunction || (exports.MavBatteryFunction = {}));
/**
 * Enumeration for battery charge states.
 */
var MavBatteryChargeState;
(function (MavBatteryChargeState) {
    /**
     * Low battery state is not provided
     */
    MavBatteryChargeState[MavBatteryChargeState["UNDEFINED"] = 0] = "UNDEFINED";
    /**
     * Battery is not in low state. Normal operation.
     */
    MavBatteryChargeState[MavBatteryChargeState["OK"] = 1] = "OK";
    /**
     * Battery state is low, warn and monitor close.
     */
    MavBatteryChargeState[MavBatteryChargeState["LOW"] = 2] = "LOW";
    /**
     * Battery state is critical, return or abort immediately.
     */
    MavBatteryChargeState[MavBatteryChargeState["CRITICAL"] = 3] = "CRITICAL";
    /**
     * Battery state is too low for ordinary abort sequence. Perform fastest possible emergency stop to
     * prevent damage.
     */
    MavBatteryChargeState[MavBatteryChargeState["EMERGENCY"] = 4] = "EMERGENCY";
    /**
     * Battery failed, damage unavoidable. Possible causes (faults) are listed in MAV_BATTERY_FAULT.
     */
    MavBatteryChargeState[MavBatteryChargeState["FAILED"] = 5] = "FAILED";
    /**
     * Battery is diagnosed to be defective or an error occurred, usage is discouraged / prohibited.
     * Possible causes (faults) are listed in MAV_BATTERY_FAULT.
     */
    MavBatteryChargeState[MavBatteryChargeState["UNHEALTHY"] = 6] = "UNHEALTHY";
    /**
     * Battery is charging.
     */
    MavBatteryChargeState[MavBatteryChargeState["CHARGING"] = 7] = "CHARGING";
})(MavBatteryChargeState = exports.MavBatteryChargeState || (exports.MavBatteryChargeState = {}));
/**
 * Flags to report status/failure cases for a power generator (used in GENERATOR_STATUS). Note that
 * FAULTS are conditions that cause the generator to fail. Warnings are conditions that require
 * attention before the next use (they indicate the system is not operating properly).
 */
var MavGeneratorStatusFlag;
(function (MavGeneratorStatusFlag) {
    /**
     * Generator is off.
     */
    MavGeneratorStatusFlag[MavGeneratorStatusFlag["OFF"] = 1] = "OFF";
    /**
     * Generator is ready to start generating power.
     */
    MavGeneratorStatusFlag[MavGeneratorStatusFlag["READY"] = 2] = "READY";
    /**
     * Generator is generating power.
     */
    MavGeneratorStatusFlag[MavGeneratorStatusFlag["GENERATING"] = 4] = "GENERATING";
    /**
     * Generator is charging the batteries (generating enough power to charge and provide the load).
     */
    MavGeneratorStatusFlag[MavGeneratorStatusFlag["CHARGING"] = 8] = "CHARGING";
    /**
     * Generator is operating at a reduced maximum power.
     */
    MavGeneratorStatusFlag[MavGeneratorStatusFlag["REDUCED_POWER"] = 16] = "REDUCED_POWER";
    /**
     * Generator is providing the maximum output.
     */
    MavGeneratorStatusFlag[MavGeneratorStatusFlag["MAXPOWER"] = 32] = "MAXPOWER";
    /**
     * Generator is near the maximum operating temperature, cooling is insufficient.
     */
    MavGeneratorStatusFlag[MavGeneratorStatusFlag["OVERTEMP_WARNING"] = 64] = "OVERTEMP_WARNING";
    /**
     * Generator hit the maximum operating temperature and shutdown.
     */
    MavGeneratorStatusFlag[MavGeneratorStatusFlag["OVERTEMP_FAULT"] = 128] = "OVERTEMP_FAULT";
    /**
     * Power electronics are near the maximum operating temperature, cooling is insufficient.
     */
    MavGeneratorStatusFlag[MavGeneratorStatusFlag["ELECTRONICS_OVERTEMP_WARNING"] = 256] = "ELECTRONICS_OVERTEMP_WARNING";
    /**
     * Power electronics hit the maximum operating temperature and shutdown.
     */
    MavGeneratorStatusFlag[MavGeneratorStatusFlag["ELECTRONICS_OVERTEMP_FAULT"] = 512] = "ELECTRONICS_OVERTEMP_FAULT";
    /**
     * Power electronics experienced a fault and shutdown.
     */
    MavGeneratorStatusFlag[MavGeneratorStatusFlag["ELECTRONICS_FAULT"] = 1024] = "ELECTRONICS_FAULT";
    /**
     * The power source supplying the generator failed e.g. mechanical generator stopped, tether is no
     * longer providing power, solar cell is in shade, hydrogen reaction no longer happening.
     */
    MavGeneratorStatusFlag[MavGeneratorStatusFlag["POWERSOURCE_FAULT"] = 2048] = "POWERSOURCE_FAULT";
    /**
     * Generator controller having communication problems.
     */
    MavGeneratorStatusFlag[MavGeneratorStatusFlag["COMMUNICATION_WARNING"] = 4096] = "COMMUNICATION_WARNING";
    /**
     * Power electronic or generator cooling system error.
     */
    MavGeneratorStatusFlag[MavGeneratorStatusFlag["COOLING_WARNING"] = 8192] = "COOLING_WARNING";
    /**
     * Generator controller power rail experienced a fault.
     */
    MavGeneratorStatusFlag[MavGeneratorStatusFlag["POWER_RAIL_FAULT"] = 16384] = "POWER_RAIL_FAULT";
    /**
     * Generator controller exceeded the overcurrent threshold and shutdown to prevent damage.
     */
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
    /**
     * Batteries are under voltage (generator will not start).
     */
    MavGeneratorStatusFlag[MavGeneratorStatusFlag["BATTERY_UNDERVOLT_FAULT"] = 262144] = "BATTERY_UNDERVOLT_FAULT";
    /**
     * Generator start is inhibited by e.g. a safety switch.
     */
    MavGeneratorStatusFlag[MavGeneratorStatusFlag["START_INHIBITED"] = 524288] = "START_INHIBITED";
    /**
     * Generator requires maintenance.
     */
    MavGeneratorStatusFlag[MavGeneratorStatusFlag["MAINTENANCE_REQUIRED"] = 1048576] = "MAINTENANCE_REQUIRED";
    /**
     * Generator is not ready to generate yet.
     */
    MavGeneratorStatusFlag[MavGeneratorStatusFlag["WARMING_UP"] = 2097152] = "WARMING_UP";
    /**
     * Generator is idle.
     */
    MavGeneratorStatusFlag[MavGeneratorStatusFlag["IDLE"] = 4194304] = "IDLE";
})(MavGeneratorStatusFlag = exports.MavGeneratorStatusFlag || (exports.MavGeneratorStatusFlag = {}));
/**
 * Enumeration of VTOL states
 */
var MavVtolState;
(function (MavVtolState) {
    /**
     * MAV is not configured as VTOL
     */
    MavVtolState[MavVtolState["UNDEFINED"] = 0] = "UNDEFINED";
    /**
     * VTOL is in transition from multicopter to fixed-wing
     */
    MavVtolState[MavVtolState["TRANSITION_TO_FW"] = 1] = "TRANSITION_TO_FW";
    /**
     * VTOL is in transition from fixed-wing to multicopter
     */
    MavVtolState[MavVtolState["TRANSITION_TO_MC"] = 2] = "TRANSITION_TO_MC";
    /**
     * VTOL is in multicopter state
     */
    MavVtolState[MavVtolState["MC"] = 3] = "MC";
    /**
     * VTOL is in fixed-wing state
     */
    MavVtolState[MavVtolState["FW"] = 4] = "FW";
})(MavVtolState = exports.MavVtolState || (exports.MavVtolState = {}));
/**
 * Enumeration of landed detector states
 */
var MavLandedState;
(function (MavLandedState) {
    /**
     * MAV landed state is unknown
     */
    MavLandedState[MavLandedState["UNDEFINED"] = 0] = "UNDEFINED";
    /**
     * MAV is landed (on ground)
     */
    MavLandedState[MavLandedState["ON_GROUND"] = 1] = "ON_GROUND";
    /**
     * MAV is in air
     */
    MavLandedState[MavLandedState["IN_AIR"] = 2] = "IN_AIR";
    /**
     * MAV currently taking off
     */
    MavLandedState[MavLandedState["TAKEOFF"] = 3] = "TAKEOFF";
    /**
     * MAV currently landing
     */
    MavLandedState[MavLandedState["LANDING"] = 4] = "LANDING";
})(MavLandedState = exports.MavLandedState || (exports.MavLandedState = {}));
/**
 * Enumeration of the ADSB altimeter types
 */
var AdsbAltitudeType;
(function (AdsbAltitudeType) {
    /**
     * Altitude reported from a Baro source using QNH reference
     */
    AdsbAltitudeType[AdsbAltitudeType["PRESSURE_QNH"] = 0] = "PRESSURE_QNH";
    /**
     * Altitude reported from a GNSS source
     */
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
 * Speed setpoint types used in MAV_CMD_DO_CHANGE_SPEED
 */
var SpeedType;
(function (SpeedType) {
    /**
     * Airspeed
     */
    SpeedType[SpeedType["AIRSPEED"] = 0] = "AIRSPEED";
    /**
     * Groundspeed
     */
    SpeedType[SpeedType["GROUNDSPEED"] = 1] = "GROUNDSPEED";
    /**
     * Climb speed
     */
    SpeedType[SpeedType["CLIMB_SPEED"] = 2] = "CLIMB_SPEED";
    /**
     * Descent speed
     */
    SpeedType[SpeedType["DESCENT_SPEED"] = 3] = "DESCENT_SPEED";
})(SpeedType = exports.SpeedType || (exports.SpeedType = {}));
/**
 * Flags in ESTIMATOR_STATUS message
 */
var EstimatorStatusFlags;
(function (EstimatorStatusFlags) {
    /**
     * True if the attitude estimate is good
     */
    EstimatorStatusFlags[EstimatorStatusFlags["ATTITUDE"] = 1] = "ATTITUDE";
    /**
     * True if the horizontal velocity estimate is good
     */
    EstimatorStatusFlags[EstimatorStatusFlags["VELOCITY_HORIZ"] = 2] = "VELOCITY_HORIZ";
    /**
     * True if the vertical velocity estimate is good
     */
    EstimatorStatusFlags[EstimatorStatusFlags["VELOCITY_VERT"] = 4] = "VELOCITY_VERT";
    /**
     * True if the horizontal position (relative) estimate is good
     */
    EstimatorStatusFlags[EstimatorStatusFlags["POS_HORIZ_REL"] = 8] = "POS_HORIZ_REL";
    /**
     * True if the horizontal position (absolute) estimate is good
     */
    EstimatorStatusFlags[EstimatorStatusFlags["POS_HORIZ_ABS"] = 16] = "POS_HORIZ_ABS";
    /**
     * True if the vertical position (absolute) estimate is good
     */
    EstimatorStatusFlags[EstimatorStatusFlags["POS_VERT_ABS"] = 32] = "POS_VERT_ABS";
    /**
     * True if the vertical position (above ground) estimate is good
     */
    EstimatorStatusFlags[EstimatorStatusFlags["POS_VERT_AGL"] = 64] = "POS_VERT_AGL";
    /**
     * True if the EKF is in a constant position mode and is not using external measurements (eg GPS or
     * optical flow)
     */
    EstimatorStatusFlags[EstimatorStatusFlags["CONST_POS_MODE"] = 128] = "CONST_POS_MODE";
    /**
     * True if the EKF has sufficient data to enter a mode that will provide a (relative) position estimate
     */
    EstimatorStatusFlags[EstimatorStatusFlags["PRED_POS_HORIZ_REL"] = 256] = "PRED_POS_HORIZ_REL";
    /**
     * True if the EKF has sufficient data to enter a mode that will provide a (absolute) position estimate
     */
    EstimatorStatusFlags[EstimatorStatusFlags["PRED_POS_HORIZ_ABS"] = 512] = "PRED_POS_HORIZ_ABS";
    /**
     * True if the EKF has detected a GPS glitch
     */
    EstimatorStatusFlags[EstimatorStatusFlags["GPS_GLITCH"] = 1024] = "GPS_GLITCH";
    /**
     * True if the EKF has detected bad accelerometer data
     */
    EstimatorStatusFlags[EstimatorStatusFlags["ACCEL_ERROR"] = 2048] = "ACCEL_ERROR";
})(EstimatorStatusFlags = exports.EstimatorStatusFlags || (exports.EstimatorStatusFlags = {}));
/**
 * Sequence that motors are tested when using MAV_CMD_DO_MOTOR_TEST.
 */
var MotorTestOrder;
(function (MotorTestOrder) {
    /**
     * Default autopilot motor test method.
     */
    MotorTestOrder[MotorTestOrder["DEFAULT"] = 0] = "DEFAULT";
    /**
     * Motor numbers are specified as their index in a predefined vehicle-specific sequence.
     */
    MotorTestOrder[MotorTestOrder["SEQUENCE"] = 1] = "SEQUENCE";
    /**
     * Motor numbers are specified as the output as labeled on the board.
     */
    MotorTestOrder[MotorTestOrder["BOARD"] = 2] = "BOARD";
})(MotorTestOrder = exports.MotorTestOrder || (exports.MotorTestOrder = {}));
/**
 * Defines how throttle value is represented in MAV_CMD_DO_MOTOR_TEST.
 */
var MotorTestThrottleType;
(function (MotorTestThrottleType) {
    /**
     * Throttle as a percentage (0 ~ 100)
     */
    MotorTestThrottleType[MotorTestThrottleType["THROTTLE_PERCENT"] = 0] = "THROTTLE_PERCENT";
    /**
     * Throttle as an absolute PWM value (normally in range of 1000~2000).
     */
    MotorTestThrottleType[MotorTestThrottleType["THROTTLE_PWM"] = 1] = "THROTTLE_PWM";
    /**
     * Throttle pass-through from pilot's transmitter.
     */
    MotorTestThrottleType[MotorTestThrottleType["THROTTLE_PILOT"] = 2] = "THROTTLE_PILOT";
    /**
     * Per-motor compass calibration test.
     */
    MotorTestThrottleType[MotorTestThrottleType["COMPASS_CAL"] = 3] = "COMPASS_CAL";
})(MotorTestThrottleType = exports.MotorTestThrottleType || (exports.MotorTestThrottleType = {}));
/**
 * GPS_INPUT_IGNORE_FLAGS
 */
var GpsInputIgnoreFlags;
(function (GpsInputIgnoreFlags) {
    /**
     * ignore altitude field
     */
    GpsInputIgnoreFlags[GpsInputIgnoreFlags["ALT"] = 1] = "ALT";
    /**
     * ignore hdop field
     */
    GpsInputIgnoreFlags[GpsInputIgnoreFlags["HDOP"] = 2] = "HDOP";
    /**
     * ignore vdop field
     */
    GpsInputIgnoreFlags[GpsInputIgnoreFlags["VDOP"] = 4] = "VDOP";
    /**
     * ignore horizontal velocity field (vn and ve)
     */
    GpsInputIgnoreFlags[GpsInputIgnoreFlags["VEL_HORIZ"] = 8] = "VEL_HORIZ";
    /**
     * ignore vertical velocity field (vd)
     */
    GpsInputIgnoreFlags[GpsInputIgnoreFlags["VEL_VERT"] = 16] = "VEL_VERT";
    /**
     * ignore speed accuracy field
     */
    GpsInputIgnoreFlags[GpsInputIgnoreFlags["SPEED_ACCURACY"] = 32] = "SPEED_ACCURACY";
    /**
     * ignore horizontal accuracy field
     */
    GpsInputIgnoreFlags[GpsInputIgnoreFlags["HORIZONTAL_ACCURACY"] = 64] = "HORIZONTAL_ACCURACY";
    /**
     * ignore vertical accuracy field
     */
    GpsInputIgnoreFlags[GpsInputIgnoreFlags["VERTICAL_ACCURACY"] = 128] = "VERTICAL_ACCURACY";
})(GpsInputIgnoreFlags = exports.GpsInputIgnoreFlags || (exports.GpsInputIgnoreFlags = {}));
/**
 * Possible actions an aircraft can take to avoid a collision.
 */
var MavCollisionAction;
(function (MavCollisionAction) {
    /**
     * Ignore any potential collisions
     */
    MavCollisionAction[MavCollisionAction["NONE"] = 0] = "NONE";
    /**
     * Report potential collision
     */
    MavCollisionAction[MavCollisionAction["REPORT"] = 1] = "REPORT";
    /**
     * Ascend or Descend to avoid threat
     */
    MavCollisionAction[MavCollisionAction["ASCEND_OR_DESCEND"] = 2] = "ASCEND_OR_DESCEND";
    /**
     * Move horizontally to avoid threat
     */
    MavCollisionAction[MavCollisionAction["MOVE_HORIZONTALLY"] = 3] = "MOVE_HORIZONTALLY";
    /**
     * Aircraft to move perpendicular to the collision's velocity vector
     */
    MavCollisionAction[MavCollisionAction["MOVE_PERPENDICULAR"] = 4] = "MOVE_PERPENDICULAR";
    /**
     * Aircraft to fly directly back to its launch point
     */
    MavCollisionAction[MavCollisionAction["RTL"] = 5] = "RTL";
    /**
     * Aircraft to stop in place
     */
    MavCollisionAction[MavCollisionAction["HOVER"] = 6] = "HOVER";
})(MavCollisionAction = exports.MavCollisionAction || (exports.MavCollisionAction = {}));
/**
 * Aircraft-rated danger from this threat.
 */
var MavCollisionThreatLevel;
(function (MavCollisionThreatLevel) {
    /**
     * Not a threat
     */
    MavCollisionThreatLevel[MavCollisionThreatLevel["NONE"] = 0] = "NONE";
    /**
     * Craft is mildly concerned about this threat
     */
    MavCollisionThreatLevel[MavCollisionThreatLevel["LOW"] = 1] = "LOW";
    /**
     * Craft is panicking, and may take actions to avoid threat
     */
    MavCollisionThreatLevel[MavCollisionThreatLevel["HIGH"] = 2] = "HIGH";
})(MavCollisionThreatLevel = exports.MavCollisionThreatLevel || (exports.MavCollisionThreatLevel = {}));
/**
 * Source of information about this collision.
 */
var MavCollisionSrc;
(function (MavCollisionSrc) {
    /**
     * ID field references ADSB_VEHICLE packets
     */
    MavCollisionSrc[MavCollisionSrc["ADSB"] = 0] = "ADSB";
    /**
     * ID field references MAVLink SRC ID
     */
    MavCollisionSrc[MavCollisionSrc["MAVLINK_GPS_GLOBAL_INT"] = 1] = "MAVLINK_GPS_GLOBAL_INT";
})(MavCollisionSrc = exports.MavCollisionSrc || (exports.MavCollisionSrc = {}));
/**
 * Type of GPS fix
 */
var GpsFixType;
(function (GpsFixType) {
    /**
     * No GPS connected
     */
    GpsFixType[GpsFixType["NO_GPS"] = 0] = "NO_GPS";
    /**
     * No position information, GPS is connected
     */
    GpsFixType[GpsFixType["NO_FIX"] = 1] = "NO_FIX";
    /**
     * 2D position
     */
    GpsFixType[GpsFixType["GPS_FIX_TYPE_2D_FIX"] = 2] = "GPS_FIX_TYPE_2D_FIX";
    /**
     * 3D position
     */
    GpsFixType[GpsFixType["GPS_FIX_TYPE_3D_FIX"] = 3] = "GPS_FIX_TYPE_3D_FIX";
    /**
     * DGPS/SBAS aided 3D position
     */
    GpsFixType[GpsFixType["DGPS"] = 4] = "DGPS";
    /**
     * RTK float, 3D position
     */
    GpsFixType[GpsFixType["RTK_FLOAT"] = 5] = "RTK_FLOAT";
    /**
     * RTK Fixed, 3D position
     */
    GpsFixType[GpsFixType["RTK_FIXED"] = 6] = "RTK_FIXED";
    /**
     * Static fixed, typically used for base stations
     */
    GpsFixType[GpsFixType["STATIC"] = 7] = "STATIC";
    /**
     * PPP, 3D position.
     */
    GpsFixType[GpsFixType["PPP"] = 8] = "PPP";
})(GpsFixType = exports.GpsFixType || (exports.GpsFixType = {}));
/**
 * RTK GPS baseline coordinate system, used for RTK corrections
 */
var RtkBaselineCoordinateSystem;
(function (RtkBaselineCoordinateSystem) {
    /**
     * Earth-centered, Earth-fixed
     */
    RtkBaselineCoordinateSystem[RtkBaselineCoordinateSystem["ECEF"] = 0] = "ECEF";
    /**
     * RTK basestation centered, north, east, down
     */
    RtkBaselineCoordinateSystem[RtkBaselineCoordinateSystem["NED"] = 1] = "NED";
})(RtkBaselineCoordinateSystem = exports.RtkBaselineCoordinateSystem || (exports.RtkBaselineCoordinateSystem = {}));
/**
 * Type of landing target
 */
var LandingTargetType;
(function (LandingTargetType) {
    /**
     * Landing target signaled by light beacon (ex: IR-LOCK)
     */
    LandingTargetType[LandingTargetType["LIGHT_BEACON"] = 0] = "LIGHT_BEACON";
    /**
     * Landing target signaled by radio beacon (ex: ILS, NDB)
     */
    LandingTargetType[LandingTargetType["RADIO_BEACON"] = 1] = "RADIO_BEACON";
    /**
     * Landing target represented by a fiducial marker (ex: ARTag)
     */
    LandingTargetType[LandingTargetType["VISION_FIDUCIAL"] = 2] = "VISION_FIDUCIAL";
    /**
     * Landing target represented by a pre-defined visual shape/feature (ex: X-marker, H-marker, square)
     */
    LandingTargetType[LandingTargetType["VISION_OTHER"] = 3] = "VISION_OTHER";
})(LandingTargetType = exports.LandingTargetType || (exports.LandingTargetType = {}));
/**
 * Direction of VTOL transition
 */
var VtolTransitionHeading;
(function (VtolTransitionHeading) {
    /**
     * Respect the heading configuration of the vehicle.
     */
    VtolTransitionHeading[VtolTransitionHeading["VEHICLE_DEFAULT"] = 0] = "VEHICLE_DEFAULT";
    /**
     * Use the heading pointing towards the next waypoint.
     */
    VtolTransitionHeading[VtolTransitionHeading["NEXT_WAYPOINT"] = 1] = "NEXT_WAYPOINT";
    /**
     * Use the heading on takeoff (while sitting on the ground).
     */
    VtolTransitionHeading[VtolTransitionHeading["TAKEOFF"] = 2] = "TAKEOFF";
    /**
     * Use the specified heading in parameter 4.
     */
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
    /**
     * Camera is able to record video
     */
    CameraCapFlags[CameraCapFlags["CAPTURE_VIDEO"] = 1] = "CAPTURE_VIDEO";
    /**
     * Camera is able to capture images
     */
    CameraCapFlags[CameraCapFlags["CAPTURE_IMAGE"] = 2] = "CAPTURE_IMAGE";
    /**
     * Camera has separate Video and Image/Photo modes (MAV_CMD_SET_CAMERA_MODE)
     */
    CameraCapFlags[CameraCapFlags["HAS_MODES"] = 4] = "HAS_MODES";
    /**
     * Camera can capture images while in video mode
     */
    CameraCapFlags[CameraCapFlags["CAN_CAPTURE_IMAGE_IN_VIDEO_MODE"] = 8] = "CAN_CAPTURE_IMAGE_IN_VIDEO_MODE";
    /**
     * Camera can capture videos while in Photo/Image mode
     */
    CameraCapFlags[CameraCapFlags["CAN_CAPTURE_VIDEO_IN_IMAGE_MODE"] = 16] = "CAN_CAPTURE_VIDEO_IN_IMAGE_MODE";
    /**
     * Camera has image survey mode (MAV_CMD_SET_CAMERA_MODE)
     */
    CameraCapFlags[CameraCapFlags["HAS_IMAGE_SURVEY_MODE"] = 32] = "HAS_IMAGE_SURVEY_MODE";
    /**
     * Camera has basic zoom control (MAV_CMD_SET_CAMERA_ZOOM)
     */
    CameraCapFlags[CameraCapFlags["HAS_BASIC_ZOOM"] = 64] = "HAS_BASIC_ZOOM";
    /**
     * Camera has basic focus control (MAV_CMD_SET_CAMERA_FOCUS)
     */
    CameraCapFlags[CameraCapFlags["HAS_BASIC_FOCUS"] = 128] = "HAS_BASIC_FOCUS";
    /**
     * Camera has video streaming capabilities (request VIDEO_STREAM_INFORMATION with
     * MAV_CMD_REQUEST_MESSAGE for video streaming info)
     */
    CameraCapFlags[CameraCapFlags["HAS_VIDEO_STREAM"] = 256] = "HAS_VIDEO_STREAM";
    /**
     * Camera supports tracking of a point on the camera view.
     */
    CameraCapFlags[CameraCapFlags["HAS_TRACKING_POINT"] = 512] = "HAS_TRACKING_POINT";
    /**
     * Camera supports tracking of a selection rectangle on the camera view.
     */
    CameraCapFlags[CameraCapFlags["HAS_TRACKING_RECTANGLE"] = 1024] = "HAS_TRACKING_RECTANGLE";
    /**
     * Camera supports tracking geo status (CAMERA_TRACKING_GEO_STATUS).
     */
    CameraCapFlags[CameraCapFlags["HAS_TRACKING_GEO_STATUS"] = 2048] = "HAS_TRACKING_GEO_STATUS";
})(CameraCapFlags = exports.CameraCapFlags || (exports.CameraCapFlags = {}));
/**
 * Stream status flags (Bitmap)
 */
var VideoStreamStatusFlags;
(function (VideoStreamStatusFlags) {
    /**
     * Stream is active (running)
     */
    VideoStreamStatusFlags[VideoStreamStatusFlags["RUNNING"] = 1] = "RUNNING";
    /**
     * Stream is thermal imaging
     */
    VideoStreamStatusFlags[VideoStreamStatusFlags["THERMAL"] = 2] = "THERMAL";
})(VideoStreamStatusFlags = exports.VideoStreamStatusFlags || (exports.VideoStreamStatusFlags = {}));
/**
 * Video stream types
 */
var VideoStreamType;
(function (VideoStreamType) {
    /**
     * Stream is RTSP
     */
    VideoStreamType[VideoStreamType["RTSP"] = 0] = "RTSP";
    /**
     * Stream is RTP UDP (URI gives the port number)
     */
    VideoStreamType[VideoStreamType["RTPUDP"] = 1] = "RTPUDP";
    /**
     * Stream is MPEG on TCP
     */
    VideoStreamType[VideoStreamType["TCP_MPEG"] = 2] = "TCP_MPEG";
    /**
     * Stream is h.264 on MPEG TS (URI gives the port number)
     */
    VideoStreamType[VideoStreamType["MPEG_TS_H264"] = 3] = "MPEG_TS_H264";
})(VideoStreamType = exports.VideoStreamType || (exports.VideoStreamType = {}));
/**
 * Camera tracking status flags
 */
var CameraTrackingStatusFlags;
(function (CameraTrackingStatusFlags) {
    /**
     * Camera is not tracking
     */
    CameraTrackingStatusFlags[CameraTrackingStatusFlags["IDLE"] = 0] = "IDLE";
    /**
     * Camera is tracking
     */
    CameraTrackingStatusFlags[CameraTrackingStatusFlags["ACTIVE"] = 1] = "ACTIVE";
    /**
     * Camera tracking in error state
     */
    CameraTrackingStatusFlags[CameraTrackingStatusFlags["ERROR"] = 2] = "ERROR";
})(CameraTrackingStatusFlags = exports.CameraTrackingStatusFlags || (exports.CameraTrackingStatusFlags = {}));
/**
 * Camera tracking modes
 */
var CameraTrackingMode;
(function (CameraTrackingMode) {
    /**
     * Not tracking
     */
    CameraTrackingMode[CameraTrackingMode["NONE"] = 0] = "NONE";
    /**
     * Target is a point
     */
    CameraTrackingMode[CameraTrackingMode["POINT"] = 1] = "POINT";
    /**
     * Target is a rectangle
     */
    CameraTrackingMode[CameraTrackingMode["RECTANGLE"] = 2] = "RECTANGLE";
})(CameraTrackingMode = exports.CameraTrackingMode || (exports.CameraTrackingMode = {}));
/**
 * Camera tracking target data (shows where tracked target is within image)
 */
var CameraTrackingTargetData;
(function (CameraTrackingTargetData) {
    /**
     * No target data
     */
    CameraTrackingTargetData[CameraTrackingTargetData["NONE"] = 0] = "NONE";
    /**
     * Target data embedded in image data (proprietary)
     */
    CameraTrackingTargetData[CameraTrackingTargetData["EMBEDDED"] = 1] = "EMBEDDED";
    /**
     * Target data rendered in image
     */
    CameraTrackingTargetData[CameraTrackingTargetData["RENDERED"] = 2] = "RENDERED";
    /**
     * Target data within status message (Point or Rectangle)
     */
    CameraTrackingTargetData[CameraTrackingTargetData["IN_STATUS"] = 4] = "IN_STATUS";
})(CameraTrackingTargetData = exports.CameraTrackingTargetData || (exports.CameraTrackingTargetData = {}));
/**
 * Zoom types for MAV_CMD_SET_CAMERA_ZOOM
 */
var CameraZoomType;
(function (CameraZoomType) {
    /**
     * Zoom one step increment (-1 for wide, 1 for tele)
     */
    CameraZoomType[CameraZoomType["STEP"] = 0] = "STEP";
    /**
     * Continuous zoom up/down until stopped (-1 for wide, 1 for tele, 0 to stop zooming)
     */
    CameraZoomType[CameraZoomType["CONTINUOUS"] = 1] = "CONTINUOUS";
    /**
     * Zoom value as proportion of full camera range (a percentage value between 0.0 and 100.0)
     */
    CameraZoomType[CameraZoomType["RANGE"] = 2] = "RANGE";
    /**
     * Zoom value/variable focal length in millimetres. Note that there is no message to get the valid zoom
     * range of the camera, so this can type can only be used for cameras where the zoom range is known
     * (implying that this cannot reliably be used in a GCS for an arbitrary camera)
     */
    CameraZoomType[CameraZoomType["FOCAL_LENGTH"] = 3] = "FOCAL_LENGTH";
})(CameraZoomType = exports.CameraZoomType || (exports.CameraZoomType = {}));
/**
 * Focus types for MAV_CMD_SET_CAMERA_FOCUS
 */
var SetFocusType;
(function (SetFocusType) {
    /**
     * Focus one step increment (-1 for focusing in, 1 for focusing out towards infinity).
     */
    SetFocusType[SetFocusType["STEP"] = 0] = "STEP";
    /**
     * Continuous focus up/down until stopped (-1 for focusing in, 1 for focusing out towards infinity, 0
     * to stop focusing)
     */
    SetFocusType[SetFocusType["CONTINUOUS"] = 1] = "CONTINUOUS";
    /**
     * Focus value as proportion of full camera focus range (a value between 0.0 and 100.0)
     */
    SetFocusType[SetFocusType["RANGE"] = 2] = "RANGE";
    /**
     * Focus value in metres. Note that there is no message to get the valid focus range of the camera, so
     * this can type can only be used for cameras where the range is known (implying that this cannot
     * reliably be used in a GCS for an arbitrary camera).
     */
    SetFocusType[SetFocusType["METERS"] = 3] = "METERS";
    /**
     * Focus automatically.
     */
    SetFocusType[SetFocusType["AUTO"] = 4] = "AUTO";
    /**
     * Single auto focus. Mainly used for still pictures. Usually abbreviated as AF-S.
     */
    SetFocusType[SetFocusType["AUTO_SINGLE"] = 5] = "AUTO_SINGLE";
    /**
     * Continuous auto focus. Mainly used for dynamic scenes. Abbreviated as AF-C.
     */
    SetFocusType[SetFocusType["AUTO_CONTINUOUS"] = 6] = "AUTO_CONTINUOUS";
})(SetFocusType = exports.SetFocusType || (exports.SetFocusType = {}));
/**
 * Result from PARAM_EXT_SET message (or a PARAM_SET within a transaction).
 */
var ParamAck;
(function (ParamAck) {
    /**
     * Parameter value ACCEPTED and SET
     */
    ParamAck[ParamAck["ACCEPTED"] = 0] = "ACCEPTED";
    /**
     * Parameter value UNKNOWN/UNSUPPORTED
     */
    ParamAck[ParamAck["VALUE_UNSUPPORTED"] = 1] = "VALUE_UNSUPPORTED";
    /**
     * Parameter failed to set
     */
    ParamAck[ParamAck["FAILED"] = 2] = "FAILED";
    /**
     * Parameter value received but not yet set/accepted. A subsequent PARAM_ACK_TRANSACTION or
     * PARAM_EXT_ACK with the final result will follow once operation is completed. This is returned
     * immediately for parameters that take longer to set, indicating taht the the parameter was recieved
     * and does not need to be resent.
     */
    ParamAck[ParamAck["IN_PROGRESS"] = 3] = "IN_PROGRESS";
})(ParamAck = exports.ParamAck || (exports.ParamAck = {}));
/**
 * Camera Modes.
 */
var CameraMode;
(function (CameraMode) {
    /**
     * Camera is in image/photo capture mode.
     */
    CameraMode[CameraMode["IMAGE"] = 0] = "IMAGE";
    /**
     * Camera is in video capture mode.
     */
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
    /**
     * Not a specific reason
     */
    MavArmAuthDeniedReason[MavArmAuthDeniedReason["GENERIC"] = 0] = "GENERIC";
    /**
     * Authorizer will send the error as string to GCS
     */
    MavArmAuthDeniedReason[MavArmAuthDeniedReason["NONE"] = 1] = "NONE";
    /**
     * At least one waypoint have a invalid value
     */
    MavArmAuthDeniedReason[MavArmAuthDeniedReason["INVALID_WAYPOINT"] = 2] = "INVALID_WAYPOINT";
    /**
     * Timeout in the authorizer process(in case it depends on network)
     */
    MavArmAuthDeniedReason[MavArmAuthDeniedReason["TIMEOUT"] = 3] = "TIMEOUT";
    /**
     * Airspace of the mission in use by another vehicle, second result parameter can have the waypoint id
     * that caused it to be denied.
     */
    MavArmAuthDeniedReason[MavArmAuthDeniedReason["AIRSPACE_IN_USE"] = 4] = "AIRSPACE_IN_USE";
    /**
     * Weather is not good to fly
     */
    MavArmAuthDeniedReason[MavArmAuthDeniedReason["BAD_WEATHER"] = 5] = "BAD_WEATHER";
})(MavArmAuthDeniedReason = exports.MavArmAuthDeniedReason || (exports.MavArmAuthDeniedReason = {}));
/**
 * RC type
 */
var RcType;
(function (RcType) {
    /**
     * Spektrum DSM2
     */
    RcType[RcType["SPEKTRUM_DSM2"] = 0] = "SPEKTRUM_DSM2";
    /**
     * Spektrum DSMX
     */
    RcType[RcType["SPEKTRUM_DSMX"] = 1] = "SPEKTRUM_DSMX";
})(RcType = exports.RcType || (exports.RcType = {}));
/**
 * Engine control options
 */
var EngineControlOptions;
(function (EngineControlOptions) {
    /**
     * Allow starting the engine once while disarmed
     */
    EngineControlOptions[EngineControlOptions["ALLOW_START_WHILE_DISARMED"] = 1] = "ALLOW_START_WHILE_DISARMED";
})(EngineControlOptions = exports.EngineControlOptions || (exports.EngineControlOptions = {}));
/**
 * Bitmap to indicate which dimensions should be ignored by the vehicle: a value of 0b0000000000000000
 * or 0b0000001000000000 indicates that none of the setpoint dimensions should be ignored. If bit 9 is
 * set the floats afx afy afz should be interpreted as force instead of acceleration.
 */
var PositionTargetTypemask;
(function (PositionTargetTypemask) {
    /**
     * Ignore position x
     */
    PositionTargetTypemask[PositionTargetTypemask["X_IGNORE"] = 1] = "X_IGNORE";
    /**
     * Ignore position y
     */
    PositionTargetTypemask[PositionTargetTypemask["Y_IGNORE"] = 2] = "Y_IGNORE";
    /**
     * Ignore position z
     */
    PositionTargetTypemask[PositionTargetTypemask["Z_IGNORE"] = 4] = "Z_IGNORE";
    /**
     * Ignore velocity x
     */
    PositionTargetTypemask[PositionTargetTypemask["VX_IGNORE"] = 8] = "VX_IGNORE";
    /**
     * Ignore velocity y
     */
    PositionTargetTypemask[PositionTargetTypemask["VY_IGNORE"] = 16] = "VY_IGNORE";
    /**
     * Ignore velocity z
     */
    PositionTargetTypemask[PositionTargetTypemask["VZ_IGNORE"] = 32] = "VZ_IGNORE";
    /**
     * Ignore acceleration x
     */
    PositionTargetTypemask[PositionTargetTypemask["AX_IGNORE"] = 64] = "AX_IGNORE";
    /**
     * Ignore acceleration y
     */
    PositionTargetTypemask[PositionTargetTypemask["AY_IGNORE"] = 128] = "AY_IGNORE";
    /**
     * Ignore acceleration z
     */
    PositionTargetTypemask[PositionTargetTypemask["AZ_IGNORE"] = 256] = "AZ_IGNORE";
    /**
     * Use force instead of acceleration
     */
    PositionTargetTypemask[PositionTargetTypemask["FORCE_SET"] = 512] = "FORCE_SET";
    /**
     * Ignore yaw
     */
    PositionTargetTypemask[PositionTargetTypemask["YAW_IGNORE"] = 1024] = "YAW_IGNORE";
    /**
     * Ignore yaw rate
     */
    PositionTargetTypemask[PositionTargetTypemask["YAW_RATE_IGNORE"] = 2048] = "YAW_RATE_IGNORE";
})(PositionTargetTypemask = exports.PositionTargetTypemask || (exports.PositionTargetTypemask = {}));
/**
 * Bitmap to indicate which dimensions should be ignored by the vehicle: a value of 0b00000000
 * indicates that none of the setpoint dimensions should be ignored.
 */
var AttitudeTargetTypemask;
(function (AttitudeTargetTypemask) {
    /**
     * Ignore body roll rate
     */
    AttitudeTargetTypemask[AttitudeTargetTypemask["BODY_ROLL_RATE_IGNORE"] = 1] = "BODY_ROLL_RATE_IGNORE";
    /**
     * Ignore body pitch rate
     */
    AttitudeTargetTypemask[AttitudeTargetTypemask["BODY_PITCH_RATE_IGNORE"] = 2] = "BODY_PITCH_RATE_IGNORE";
    /**
     * Ignore body yaw rate
     */
    AttitudeTargetTypemask[AttitudeTargetTypemask["BODY_YAW_RATE_IGNORE"] = 4] = "BODY_YAW_RATE_IGNORE";
    /**
     * Ignore throttle
     */
    AttitudeTargetTypemask[AttitudeTargetTypemask["THROTTLE_IGNORE"] = 64] = "THROTTLE_IGNORE";
    /**
     * Ignore attitude
     */
    AttitudeTargetTypemask[AttitudeTargetTypemask["ATTITUDE_IGNORE"] = 128] = "ATTITUDE_IGNORE";
})(AttitudeTargetTypemask = exports.AttitudeTargetTypemask || (exports.AttitudeTargetTypemask = {}));
/**
 * Airborne status of UAS.
 */
var UtmFlightState;
(function (UtmFlightState) {
    /**
     * The flight state can't be determined.
     */
    UtmFlightState[UtmFlightState["UNKNOWN"] = 1] = "UNKNOWN";
    /**
     * UAS on ground.
     */
    UtmFlightState[UtmFlightState["GROUND"] = 2] = "GROUND";
    /**
     * UAS airborne.
     */
    UtmFlightState[UtmFlightState["AIRBORNE"] = 3] = "AIRBORNE";
    /**
     * UAS is in an emergency flight state.
     */
    UtmFlightState[UtmFlightState["EMERGENCY"] = 16] = "EMERGENCY";
    /**
     * UAS has no active controls.
     */
    UtmFlightState[UtmFlightState["NOCTRL"] = 32] = "NOCTRL";
})(UtmFlightState = exports.UtmFlightState || (exports.UtmFlightState = {}));
/**
 * Flags for the global position report.
 */
var UtmDataAvailFlags;
(function (UtmDataAvailFlags) {
    /**
     * The field time contains valid data.
     */
    UtmDataAvailFlags[UtmDataAvailFlags["TIME_VALID"] = 1] = "TIME_VALID";
    /**
     * The field uas_id contains valid data.
     */
    UtmDataAvailFlags[UtmDataAvailFlags["UAS_ID_AVAILABLE"] = 2] = "UAS_ID_AVAILABLE";
    /**
     * The fields lat, lon and h_acc contain valid data.
     */
    UtmDataAvailFlags[UtmDataAvailFlags["POSITION_AVAILABLE"] = 4] = "POSITION_AVAILABLE";
    /**
     * The fields alt and v_acc contain valid data.
     */
    UtmDataAvailFlags[UtmDataAvailFlags["ALTITUDE_AVAILABLE"] = 8] = "ALTITUDE_AVAILABLE";
    /**
     * The field relative_alt contains valid data.
     */
    UtmDataAvailFlags[UtmDataAvailFlags["RELATIVE_ALTITUDE_AVAILABLE"] = 16] = "RELATIVE_ALTITUDE_AVAILABLE";
    /**
     * The fields vx and vy contain valid data.
     */
    UtmDataAvailFlags[UtmDataAvailFlags["HORIZONTAL_VELO_AVAILABLE"] = 32] = "HORIZONTAL_VELO_AVAILABLE";
    /**
     * The field vz contains valid data.
     */
    UtmDataAvailFlags[UtmDataAvailFlags["VERTICAL_VELO_AVAILABLE"] = 64] = "VERTICAL_VELO_AVAILABLE";
    /**
     * The fields next_lat, next_lon and next_alt contain valid data.
     */
    UtmDataAvailFlags[UtmDataAvailFlags["NEXT_WAYPOINT_AVAILABLE"] = 128] = "NEXT_WAYPOINT_AVAILABLE";
})(UtmDataAvailFlags = exports.UtmDataAvailFlags || (exports.UtmDataAvailFlags = {}));
/**
 * Precision land modes (used in MAV_CMD_NAV_LAND).
 */
var PrecisionLandMode;
(function (PrecisionLandMode) {
    /**
     * Normal (non-precision) landing.
     */
    PrecisionLandMode[PrecisionLandMode["DISABLED"] = 0] = "DISABLED";
    /**
     * Use precision landing if beacon detected when land command accepted, otherwise land normally.
     */
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
    /**
     * Disable auto-release of parachute (i.e. release triggered by crash detectors).
     */
    ParachuteAction[ParachuteAction["DISABLE"] = 0] = "DISABLE";
    /**
     * Enable auto-release of parachute.
     */
    ParachuteAction[ParachuteAction["ENABLE"] = 1] = "ENABLE";
    /**
     * Release parachute and kill motors.
     */
    ParachuteAction[ParachuteAction["RELEASE"] = 2] = "RELEASE";
})(ParachuteAction = exports.ParachuteAction || (exports.ParachuteAction = {}));
/**
 * MAV_TUNNEL_PAYLOAD_TYPE
 */
var MavTunnelPayloadType;
(function (MavTunnelPayloadType) {
    /**
     * Encoding of payload unknown.
     */
    MavTunnelPayloadType[MavTunnelPayloadType["UNKNOWN"] = 0] = "UNKNOWN";
    /**
     * Registered for STorM32 gimbal controller.
     */
    MavTunnelPayloadType[MavTunnelPayloadType["STORM32_RESERVED0"] = 200] = "STORM32_RESERVED0";
    /**
     * Registered for STorM32 gimbal controller.
     */
    MavTunnelPayloadType[MavTunnelPayloadType["STORM32_RESERVED1"] = 201] = "STORM32_RESERVED1";
    /**
     * Registered for STorM32 gimbal controller.
     */
    MavTunnelPayloadType[MavTunnelPayloadType["STORM32_RESERVED2"] = 202] = "STORM32_RESERVED2";
    /**
     * Registered for STorM32 gimbal controller.
     */
    MavTunnelPayloadType[MavTunnelPayloadType["STORM32_RESERVED3"] = 203] = "STORM32_RESERVED3";
    /**
     * Registered for STorM32 gimbal controller.
     */
    MavTunnelPayloadType[MavTunnelPayloadType["STORM32_RESERVED4"] = 204] = "STORM32_RESERVED4";
    /**
     * Registered for STorM32 gimbal controller.
     */
    MavTunnelPayloadType[MavTunnelPayloadType["STORM32_RESERVED5"] = 205] = "STORM32_RESERVED5";
    /**
     * Registered for STorM32 gimbal controller.
     */
    MavTunnelPayloadType[MavTunnelPayloadType["STORM32_RESERVED6"] = 206] = "STORM32_RESERVED6";
    /**
     * Registered for STorM32 gimbal controller.
     */
    MavTunnelPayloadType[MavTunnelPayloadType["STORM32_RESERVED7"] = 207] = "STORM32_RESERVED7";
    /**
     * Registered for STorM32 gimbal controller.
     */
    MavTunnelPayloadType[MavTunnelPayloadType["STORM32_RESERVED8"] = 208] = "STORM32_RESERVED8";
    /**
     * Registered for STorM32 gimbal controller.
     */
    MavTunnelPayloadType[MavTunnelPayloadType["STORM32_RESERVED9"] = 209] = "STORM32_RESERVED9";
})(MavTunnelPayloadType = exports.MavTunnelPayloadType || (exports.MavTunnelPayloadType = {}));
/**
 * MAV_ODID_ID_TYPE
 */
var MavOdidIdType;
(function (MavOdidIdType) {
    /**
     * No type defined.
     */
    MavOdidIdType[MavOdidIdType["NONE"] = 0] = "NONE";
    /**
     * Manufacturer Serial Number (ANSI/CTA-2063 format).
     */
    MavOdidIdType[MavOdidIdType["SERIAL_NUMBER"] = 1] = "SERIAL_NUMBER";
    /**
     * CAA (Civil Aviation Authority) registered ID. Format: [ICAO Country Code].[CAA Assigned ID].
     */
    MavOdidIdType[MavOdidIdType["CAA_REGISTRATION_ID"] = 2] = "CAA_REGISTRATION_ID";
    /**
     * UTM (Unmanned Traffic Management) assigned UUID (RFC4122).
     */
    MavOdidIdType[MavOdidIdType["UTM_ASSIGNED_UUID"] = 3] = "UTM_ASSIGNED_UUID";
    /**
     * A 20 byte ID for a specific flight/session. The exact ID type is indicated by the first byte of
     * uas_id and these type values are managed by ICAO.
     */
    MavOdidIdType[MavOdidIdType["SPECIFIC_SESSION_ID"] = 4] = "SPECIFIC_SESSION_ID";
})(MavOdidIdType = exports.MavOdidIdType || (exports.MavOdidIdType = {}));
/**
 * MAV_ODID_UA_TYPE
 */
var MavOdidUaType;
(function (MavOdidUaType) {
    /**
     * No UA (Unmanned Aircraft) type defined.
     */
    MavOdidUaType[MavOdidUaType["NONE"] = 0] = "NONE";
    /**
     * Aeroplane/Airplane. Fixed wing.
     */
    MavOdidUaType[MavOdidUaType["AEROPLANE"] = 1] = "AEROPLANE";
    /**
     * Helicopter or multirotor.
     */
    MavOdidUaType[MavOdidUaType["HELICOPTER_OR_MULTIROTOR"] = 2] = "HELICOPTER_OR_MULTIROTOR";
    /**
     * Gyroplane.
     */
    MavOdidUaType[MavOdidUaType["GYROPLANE"] = 3] = "GYROPLANE";
    /**
     * VTOL (Vertical Take-Off and Landing). Fixed wing aircraft that can take off vertically.
     */
    MavOdidUaType[MavOdidUaType["HYBRID_LIFT"] = 4] = "HYBRID_LIFT";
    /**
     * Ornithopter.
     */
    MavOdidUaType[MavOdidUaType["ORNITHOPTER"] = 5] = "ORNITHOPTER";
    /**
     * Glider.
     */
    MavOdidUaType[MavOdidUaType["GLIDER"] = 6] = "GLIDER";
    /**
     * Kite.
     */
    MavOdidUaType[MavOdidUaType["KITE"] = 7] = "KITE";
    /**
     * Free Balloon.
     */
    MavOdidUaType[MavOdidUaType["FREE_BALLOON"] = 8] = "FREE_BALLOON";
    /**
     * Captive Balloon.
     */
    MavOdidUaType[MavOdidUaType["CAPTIVE_BALLOON"] = 9] = "CAPTIVE_BALLOON";
    /**
     * Airship. E.g. a blimp.
     */
    MavOdidUaType[MavOdidUaType["AIRSHIP"] = 10] = "AIRSHIP";
    /**
     * Free Fall/Parachute (unpowered).
     */
    MavOdidUaType[MavOdidUaType["FREE_FALL_PARACHUTE"] = 11] = "FREE_FALL_PARACHUTE";
    /**
     * Rocket.
     */
    MavOdidUaType[MavOdidUaType["ROCKET"] = 12] = "ROCKET";
    /**
     * Tethered powered aircraft.
     */
    MavOdidUaType[MavOdidUaType["TETHERED_POWERED_AIRCRAFT"] = 13] = "TETHERED_POWERED_AIRCRAFT";
    /**
     * Ground Obstacle.
     */
    MavOdidUaType[MavOdidUaType["GROUND_OBSTACLE"] = 14] = "GROUND_OBSTACLE";
    /**
     * Other type of aircraft not listed earlier.
     */
    MavOdidUaType[MavOdidUaType["OTHER"] = 15] = "OTHER";
})(MavOdidUaType = exports.MavOdidUaType || (exports.MavOdidUaType = {}));
/**
 * MAV_ODID_STATUS
 */
var MavOdidStatus;
(function (MavOdidStatus) {
    /**
     * The status of the (UA) Unmanned Aircraft is undefined.
     */
    MavOdidStatus[MavOdidStatus["UNDECLARED"] = 0] = "UNDECLARED";
    /**
     * The UA is on the ground.
     */
    MavOdidStatus[MavOdidStatus["GROUND"] = 1] = "GROUND";
    /**
     * The UA is in the air.
     */
    MavOdidStatus[MavOdidStatus["AIRBORNE"] = 2] = "AIRBORNE";
    /**
     * The UA is having an emergency.
     */
    MavOdidStatus[MavOdidStatus["EMERGENCY"] = 3] = "EMERGENCY";
    /**
     * The remote ID system is failing or unreliable in some way.
     */
    MavOdidStatus[MavOdidStatus["REMOTE_ID_SYSTEM_FAILURE"] = 4] = "REMOTE_ID_SYSTEM_FAILURE";
})(MavOdidStatus = exports.MavOdidStatus || (exports.MavOdidStatus = {}));
/**
 * MAV_ODID_HEIGHT_REF
 */
var MavOdidHeightRef;
(function (MavOdidHeightRef) {
    /**
     * The height field is relative to the take-off location.
     */
    MavOdidHeightRef[MavOdidHeightRef["OVER_TAKEOFF"] = 0] = "OVER_TAKEOFF";
    /**
     * The height field is relative to ground.
     */
    MavOdidHeightRef[MavOdidHeightRef["OVER_GROUND"] = 1] = "OVER_GROUND";
})(MavOdidHeightRef = exports.MavOdidHeightRef || (exports.MavOdidHeightRef = {}));
/**
 * MAV_ODID_HOR_ACC
 */
var MavOdidHorAcc;
(function (MavOdidHorAcc) {
    /**
     * The horizontal accuracy is unknown.
     */
    MavOdidHorAcc[MavOdidHorAcc["UNKNOWN"] = 0] = "UNKNOWN";
    /**
     * The horizontal accuracy is smaller than 10 Nautical Miles. 18.52 km.
     */
    MavOdidHorAcc[MavOdidHorAcc["MAV_ODID_HOR_ACC_10NM"] = 1] = "MAV_ODID_HOR_ACC_10NM";
    /**
     * The horizontal accuracy is smaller than 4 Nautical Miles. 7.408 km.
     */
    MavOdidHorAcc[MavOdidHorAcc["MAV_ODID_HOR_ACC_4NM"] = 2] = "MAV_ODID_HOR_ACC_4NM";
    /**
     * The horizontal accuracy is smaller than 2 Nautical Miles. 3.704 km.
     */
    MavOdidHorAcc[MavOdidHorAcc["MAV_ODID_HOR_ACC_2NM"] = 3] = "MAV_ODID_HOR_ACC_2NM";
    /**
     * The horizontal accuracy is smaller than 1 Nautical Miles. 1.852 km.
     */
    MavOdidHorAcc[MavOdidHorAcc["MAV_ODID_HOR_ACC_1NM"] = 4] = "MAV_ODID_HOR_ACC_1NM";
    /**
     * The horizontal accuracy is smaller than 0.5 Nautical Miles. 926 m.
     */
    MavOdidHorAcc[MavOdidHorAcc["MAV_ODID_HOR_ACC_0_5NM"] = 5] = "MAV_ODID_HOR_ACC_0_5NM";
    /**
     * The horizontal accuracy is smaller than 0.3 Nautical Miles. 555.6 m.
     */
    MavOdidHorAcc[MavOdidHorAcc["MAV_ODID_HOR_ACC_0_3NM"] = 6] = "MAV_ODID_HOR_ACC_0_3NM";
    /**
     * The horizontal accuracy is smaller than 0.1 Nautical Miles. 185.2 m.
     */
    MavOdidHorAcc[MavOdidHorAcc["MAV_ODID_HOR_ACC_0_1NM"] = 7] = "MAV_ODID_HOR_ACC_0_1NM";
    /**
     * The horizontal accuracy is smaller than 0.05 Nautical Miles. 92.6 m.
     */
    MavOdidHorAcc[MavOdidHorAcc["MAV_ODID_HOR_ACC_0_05NM"] = 8] = "MAV_ODID_HOR_ACC_0_05NM";
    /**
     * The horizontal accuracy is smaller than 30 meter.
     */
    MavOdidHorAcc[MavOdidHorAcc["MAV_ODID_HOR_ACC_30_METER"] = 9] = "MAV_ODID_HOR_ACC_30_METER";
    /**
     * The horizontal accuracy is smaller than 10 meter.
     */
    MavOdidHorAcc[MavOdidHorAcc["MAV_ODID_HOR_ACC_10_METER"] = 10] = "MAV_ODID_HOR_ACC_10_METER";
    /**
     * The horizontal accuracy is smaller than 3 meter.
     */
    MavOdidHorAcc[MavOdidHorAcc["MAV_ODID_HOR_ACC_3_METER"] = 11] = "MAV_ODID_HOR_ACC_3_METER";
    /**
     * The horizontal accuracy is smaller than 1 meter.
     */
    MavOdidHorAcc[MavOdidHorAcc["MAV_ODID_HOR_ACC_1_METER"] = 12] = "MAV_ODID_HOR_ACC_1_METER";
})(MavOdidHorAcc = exports.MavOdidHorAcc || (exports.MavOdidHorAcc = {}));
/**
 * MAV_ODID_VER_ACC
 */
var MavOdidVerAcc;
(function (MavOdidVerAcc) {
    /**
     * The vertical accuracy is unknown.
     */
    MavOdidVerAcc[MavOdidVerAcc["UNKNOWN"] = 0] = "UNKNOWN";
    /**
     * The vertical accuracy is smaller than 150 meter.
     */
    MavOdidVerAcc[MavOdidVerAcc["MAV_ODID_VER_ACC_150_METER"] = 1] = "MAV_ODID_VER_ACC_150_METER";
    /**
     * The vertical accuracy is smaller than 45 meter.
     */
    MavOdidVerAcc[MavOdidVerAcc["MAV_ODID_VER_ACC_45_METER"] = 2] = "MAV_ODID_VER_ACC_45_METER";
    /**
     * The vertical accuracy is smaller than 25 meter.
     */
    MavOdidVerAcc[MavOdidVerAcc["MAV_ODID_VER_ACC_25_METER"] = 3] = "MAV_ODID_VER_ACC_25_METER";
    /**
     * The vertical accuracy is smaller than 10 meter.
     */
    MavOdidVerAcc[MavOdidVerAcc["MAV_ODID_VER_ACC_10_METER"] = 4] = "MAV_ODID_VER_ACC_10_METER";
    /**
     * The vertical accuracy is smaller than 3 meter.
     */
    MavOdidVerAcc[MavOdidVerAcc["MAV_ODID_VER_ACC_3_METER"] = 5] = "MAV_ODID_VER_ACC_3_METER";
    /**
     * The vertical accuracy is smaller than 1 meter.
     */
    MavOdidVerAcc[MavOdidVerAcc["MAV_ODID_VER_ACC_1_METER"] = 6] = "MAV_ODID_VER_ACC_1_METER";
})(MavOdidVerAcc = exports.MavOdidVerAcc || (exports.MavOdidVerAcc = {}));
/**
 * MAV_ODID_SPEED_ACC
 */
var MavOdidSpeedAcc;
(function (MavOdidSpeedAcc) {
    /**
     * The speed accuracy is unknown.
     */
    MavOdidSpeedAcc[MavOdidSpeedAcc["UNKNOWN"] = 0] = "UNKNOWN";
    /**
     * The speed accuracy is smaller than 10 meters per second.
     */
    MavOdidSpeedAcc[MavOdidSpeedAcc["MAV_ODID_SPEED_ACC_10_METERS_PER_SECOND"] = 1] = "MAV_ODID_SPEED_ACC_10_METERS_PER_SECOND";
    /**
     * The speed accuracy is smaller than 3 meters per second.
     */
    MavOdidSpeedAcc[MavOdidSpeedAcc["MAV_ODID_SPEED_ACC_3_METERS_PER_SECOND"] = 2] = "MAV_ODID_SPEED_ACC_3_METERS_PER_SECOND";
    /**
     * The speed accuracy is smaller than 1 meters per second.
     */
    MavOdidSpeedAcc[MavOdidSpeedAcc["MAV_ODID_SPEED_ACC_1_METERS_PER_SECOND"] = 3] = "MAV_ODID_SPEED_ACC_1_METERS_PER_SECOND";
    /**
     * The speed accuracy is smaller than 0.3 meters per second.
     */
    MavOdidSpeedAcc[MavOdidSpeedAcc["MAV_ODID_SPEED_ACC_0_3_METERS_PER_SECOND"] = 4] = "MAV_ODID_SPEED_ACC_0_3_METERS_PER_SECOND";
})(MavOdidSpeedAcc = exports.MavOdidSpeedAcc || (exports.MavOdidSpeedAcc = {}));
/**
 * MAV_ODID_TIME_ACC
 */
var MavOdidTimeAcc;
(function (MavOdidTimeAcc) {
    /**
     * The timestamp accuracy is unknown.
     */
    MavOdidTimeAcc[MavOdidTimeAcc["UNKNOWN"] = 0] = "UNKNOWN";
    /**
     * The timestamp accuracy is smaller than or equal to 0.1 second.
     */
    MavOdidTimeAcc[MavOdidTimeAcc["MAV_ODID_TIME_ACC_0_1_SECOND"] = 1] = "MAV_ODID_TIME_ACC_0_1_SECOND";
    /**
     * The timestamp accuracy is smaller than or equal to 0.2 second.
     */
    MavOdidTimeAcc[MavOdidTimeAcc["MAV_ODID_TIME_ACC_0_2_SECOND"] = 2] = "MAV_ODID_TIME_ACC_0_2_SECOND";
    /**
     * The timestamp accuracy is smaller than or equal to 0.3 second.
     */
    MavOdidTimeAcc[MavOdidTimeAcc["MAV_ODID_TIME_ACC_0_3_SECOND"] = 3] = "MAV_ODID_TIME_ACC_0_3_SECOND";
    /**
     * The timestamp accuracy is smaller than or equal to 0.4 second.
     */
    MavOdidTimeAcc[MavOdidTimeAcc["MAV_ODID_TIME_ACC_0_4_SECOND"] = 4] = "MAV_ODID_TIME_ACC_0_4_SECOND";
    /**
     * The timestamp accuracy is smaller than or equal to 0.5 second.
     */
    MavOdidTimeAcc[MavOdidTimeAcc["MAV_ODID_TIME_ACC_0_5_SECOND"] = 5] = "MAV_ODID_TIME_ACC_0_5_SECOND";
    /**
     * The timestamp accuracy is smaller than or equal to 0.6 second.
     */
    MavOdidTimeAcc[MavOdidTimeAcc["MAV_ODID_TIME_ACC_0_6_SECOND"] = 6] = "MAV_ODID_TIME_ACC_0_6_SECOND";
    /**
     * The timestamp accuracy is smaller than or equal to 0.7 second.
     */
    MavOdidTimeAcc[MavOdidTimeAcc["MAV_ODID_TIME_ACC_0_7_SECOND"] = 7] = "MAV_ODID_TIME_ACC_0_7_SECOND";
    /**
     * The timestamp accuracy is smaller than or equal to 0.8 second.
     */
    MavOdidTimeAcc[MavOdidTimeAcc["MAV_ODID_TIME_ACC_0_8_SECOND"] = 8] = "MAV_ODID_TIME_ACC_0_8_SECOND";
    /**
     * The timestamp accuracy is smaller than or equal to 0.9 second.
     */
    MavOdidTimeAcc[MavOdidTimeAcc["MAV_ODID_TIME_ACC_0_9_SECOND"] = 9] = "MAV_ODID_TIME_ACC_0_9_SECOND";
    /**
     * The timestamp accuracy is smaller than or equal to 1.0 second.
     */
    MavOdidTimeAcc[MavOdidTimeAcc["MAV_ODID_TIME_ACC_1_0_SECOND"] = 10] = "MAV_ODID_TIME_ACC_1_0_SECOND";
    /**
     * The timestamp accuracy is smaller than or equal to 1.1 second.
     */
    MavOdidTimeAcc[MavOdidTimeAcc["MAV_ODID_TIME_ACC_1_1_SECOND"] = 11] = "MAV_ODID_TIME_ACC_1_1_SECOND";
    /**
     * The timestamp accuracy is smaller than or equal to 1.2 second.
     */
    MavOdidTimeAcc[MavOdidTimeAcc["MAV_ODID_TIME_ACC_1_2_SECOND"] = 12] = "MAV_ODID_TIME_ACC_1_2_SECOND";
    /**
     * The timestamp accuracy is smaller than or equal to 1.3 second.
     */
    MavOdidTimeAcc[MavOdidTimeAcc["MAV_ODID_TIME_ACC_1_3_SECOND"] = 13] = "MAV_ODID_TIME_ACC_1_3_SECOND";
    /**
     * The timestamp accuracy is smaller than or equal to 1.4 second.
     */
    MavOdidTimeAcc[MavOdidTimeAcc["MAV_ODID_TIME_ACC_1_4_SECOND"] = 14] = "MAV_ODID_TIME_ACC_1_4_SECOND";
    /**
     * The timestamp accuracy is smaller than or equal to 1.5 second.
     */
    MavOdidTimeAcc[MavOdidTimeAcc["MAV_ODID_TIME_ACC_1_5_SECOND"] = 15] = "MAV_ODID_TIME_ACC_1_5_SECOND";
})(MavOdidTimeAcc = exports.MavOdidTimeAcc || (exports.MavOdidTimeAcc = {}));
/**
 * MAV_ODID_AUTH_TYPE
 */
var MavOdidAuthType;
(function (MavOdidAuthType) {
    /**
     * No authentication type is specified.
     */
    MavOdidAuthType[MavOdidAuthType["NONE"] = 0] = "NONE";
    /**
     * Signature for the UAS (Unmanned Aircraft System) ID.
     */
    MavOdidAuthType[MavOdidAuthType["UAS_ID_SIGNATURE"] = 1] = "UAS_ID_SIGNATURE";
    /**
     * Signature for the Operator ID.
     */
    MavOdidAuthType[MavOdidAuthType["OPERATOR_ID_SIGNATURE"] = 2] = "OPERATOR_ID_SIGNATURE";
    /**
     * Signature for the entire message set.
     */
    MavOdidAuthType[MavOdidAuthType["MESSAGE_SET_SIGNATURE"] = 3] = "MESSAGE_SET_SIGNATURE";
    /**
     * Authentication is provided by Network Remote ID.
     */
    MavOdidAuthType[MavOdidAuthType["NETWORK_REMOTE_ID"] = 4] = "NETWORK_REMOTE_ID";
    /**
     * The exact authentication type is indicated by the first byte of authentication_data and these type
     * values are managed by ICAO.
     */
    MavOdidAuthType[MavOdidAuthType["SPECIFIC_AUTHENTICATION"] = 5] = "SPECIFIC_AUTHENTICATION";
})(MavOdidAuthType = exports.MavOdidAuthType || (exports.MavOdidAuthType = {}));
/**
 * MAV_ODID_DESC_TYPE
 */
var MavOdidDescType;
(function (MavOdidDescType) {
    /**
     * Free-form text description of the purpose of the flight.
     */
    MavOdidDescType[MavOdidDescType["TEXT"] = 0] = "TEXT";
    /**
     * Optional additional clarification when status == MAV_ODID_STATUS_EMERGENCY.
     */
    MavOdidDescType[MavOdidDescType["EMERGENCY"] = 1] = "EMERGENCY";
    /**
     * Optional additional clarification when status != MAV_ODID_STATUS_EMERGENCY.
     */
    MavOdidDescType[MavOdidDescType["EXTENDED_STATUS"] = 2] = "EXTENDED_STATUS";
})(MavOdidDescType = exports.MavOdidDescType || (exports.MavOdidDescType = {}));
/**
 * MAV_ODID_OPERATOR_LOCATION_TYPE
 */
var MavOdidOperatorLocationType;
(function (MavOdidOperatorLocationType) {
    /**
     * The location of the operator is the same as the take-off location.
     */
    MavOdidOperatorLocationType[MavOdidOperatorLocationType["TAKEOFF"] = 0] = "TAKEOFF";
    /**
     * The location of the operator is based on live GNSS data.
     */
    MavOdidOperatorLocationType[MavOdidOperatorLocationType["LIVE_GNSS"] = 1] = "LIVE_GNSS";
    /**
     * The location of the operator is a fixed location.
     */
    MavOdidOperatorLocationType[MavOdidOperatorLocationType["FIXED"] = 2] = "FIXED";
})(MavOdidOperatorLocationType = exports.MavOdidOperatorLocationType || (exports.MavOdidOperatorLocationType = {}));
/**
 * MAV_ODID_CLASSIFICATION_TYPE
 */
var MavOdidClassificationType;
(function (MavOdidClassificationType) {
    /**
     * The classification type for the UA is undeclared.
     */
    MavOdidClassificationType[MavOdidClassificationType["UNDECLARED"] = 0] = "UNDECLARED";
    /**
     * The classification type for the UA follows EU (European Union) specifications.
     */
    MavOdidClassificationType[MavOdidClassificationType["EU"] = 1] = "EU";
})(MavOdidClassificationType = exports.MavOdidClassificationType || (exports.MavOdidClassificationType = {}));
/**
 * MAV_ODID_CATEGORY_EU
 */
var MavOdidCategoryEu;
(function (MavOdidCategoryEu) {
    /**
     * The category for the UA, according to the EU specification, is undeclared.
     */
    MavOdidCategoryEu[MavOdidCategoryEu["UNDECLARED"] = 0] = "UNDECLARED";
    /**
     * The category for the UA, according to the EU specification, is the Open category.
     */
    MavOdidCategoryEu[MavOdidCategoryEu["OPEN"] = 1] = "OPEN";
    /**
     * The category for the UA, according to the EU specification, is the Specific category.
     */
    MavOdidCategoryEu[MavOdidCategoryEu["SPECIFIC"] = 2] = "SPECIFIC";
    /**
     * The category for the UA, according to the EU specification, is the Certified category.
     */
    MavOdidCategoryEu[MavOdidCategoryEu["CERTIFIED"] = 3] = "CERTIFIED";
})(MavOdidCategoryEu = exports.MavOdidCategoryEu || (exports.MavOdidCategoryEu = {}));
/**
 * MAV_ODID_CLASS_EU
 */
var MavOdidClassEu;
(function (MavOdidClassEu) {
    /**
     * The class for the UA, according to the EU specification, is undeclared.
     */
    MavOdidClassEu[MavOdidClassEu["UNDECLARED"] = 0] = "UNDECLARED";
    /**
     * The class for the UA, according to the EU specification, is Class 0.
     */
    MavOdidClassEu[MavOdidClassEu["CLASS_0"] = 1] = "CLASS_0";
    /**
     * The class for the UA, according to the EU specification, is Class 1.
     */
    MavOdidClassEu[MavOdidClassEu["CLASS_1"] = 2] = "CLASS_1";
    /**
     * The class for the UA, according to the EU specification, is Class 2.
     */
    MavOdidClassEu[MavOdidClassEu["CLASS_2"] = 3] = "CLASS_2";
    /**
     * The class for the UA, according to the EU specification, is Class 3.
     */
    MavOdidClassEu[MavOdidClassEu["CLASS_3"] = 4] = "CLASS_3";
    /**
     * The class for the UA, according to the EU specification, is Class 4.
     */
    MavOdidClassEu[MavOdidClassEu["CLASS_4"] = 5] = "CLASS_4";
    /**
     * The class for the UA, according to the EU specification, is Class 5.
     */
    MavOdidClassEu[MavOdidClassEu["CLASS_5"] = 6] = "CLASS_5";
    /**
     * The class for the UA, according to the EU specification, is Class 6.
     */
    MavOdidClassEu[MavOdidClassEu["CLASS_6"] = 7] = "CLASS_6";
})(MavOdidClassEu = exports.MavOdidClassEu || (exports.MavOdidClassEu = {}));
/**
 * MAV_ODID_OPERATOR_ID_TYPE
 */
var MavOdidOperatorIdType;
(function (MavOdidOperatorIdType) {
    /**
     * CAA (Civil Aviation Authority) registered operator ID.
     */
    MavOdidOperatorIdType[MavOdidOperatorIdType["CAA"] = 0] = "CAA";
})(MavOdidOperatorIdType = exports.MavOdidOperatorIdType || (exports.MavOdidOperatorIdType = {}));
/**
 * MAV_ODID_ARM_STATUS
 */
var MavOdidArmStatus;
(function (MavOdidArmStatus) {
    /**
     * Passing arming checks.
     */
    MavOdidArmStatus[MavOdidArmStatus["GOOD_TO_ARM"] = 0] = "GOOD_TO_ARM";
    /**
     * Generic arming failure, see error string for details.
     */
    MavOdidArmStatus[MavOdidArmStatus["PRE_ARM_FAIL_GENERIC"] = 1] = "PRE_ARM_FAIL_GENERIC";
})(MavOdidArmStatus = exports.MavOdidArmStatus || (exports.MavOdidArmStatus = {}));
/**
 * Type of AIS vessel, enum duplicated from AIS standard, https://gpsd.gitlab.io/gpsd/AIVDM.html
 */
var AisType;
(function (AisType) {
    /**
     * Not available (default).
     */
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
    /**
     * Wing In Ground effect.
     */
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
    /**
     * Towing: length exceeds 200m or breadth exceeds 25m.
     */
    AisType[AisType["TOWING_LARGE"] = 32] = "TOWING_LARGE";
    /**
     * Dredging or other underwater ops.
     */
    AisType[AisType["DREDGING"] = 33] = "DREDGING";
    AisType[AisType["DIVING"] = 34] = "DIVING";
    AisType[AisType["MILITARY"] = 35] = "MILITARY";
    AisType[AisType["SAILING"] = 36] = "SAILING";
    AisType[AisType["PLEASURE"] = 37] = "PLEASURE";
    AisType[AisType["RESERVED_20"] = 38] = "RESERVED_20";
    AisType[AisType["RESERVED_21"] = 39] = "RESERVED_21";
    /**
     * High Speed Craft.
     */
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
    /**
     * Search And Rescue vessel.
     */
    AisType[AisType["SAR"] = 51] = "SAR";
    AisType[AisType["TUG"] = 52] = "TUG";
    AisType[AisType["PORT_TENDER"] = 53] = "PORT_TENDER";
    /**
     * Anti-pollution equipment.
     */
    AisType[AisType["ANTI_POLLUTION"] = 54] = "ANTI_POLLUTION";
    AisType[AisType["LAW_ENFORCEMENT"] = 55] = "LAW_ENFORCEMENT";
    AisType[AisType["SPARE_LOCAL_1"] = 56] = "SPARE_LOCAL_1";
    AisType[AisType["SPARE_LOCAL_2"] = 57] = "SPARE_LOCAL_2";
    AisType[AisType["MEDICAL_TRANSPORT"] = 58] = "MEDICAL_TRANSPORT";
    /**
     * Noncombatant ship according to RR Resolution No. 18.
     */
    AisType[AisType["NONECOMBATANT"] = 59] = "NONECOMBATANT";
    AisType[AisType["PASSENGER"] = 60] = "PASSENGER";
    AisType[AisType["PASSENGER_HAZARDOUS_A"] = 61] = "PASSENGER_HAZARDOUS_A";
    AisType[AisType["PASSENGER_HAZARDOUS_B"] = 62] = "PASSENGER_HAZARDOUS_B";
    AisType[AisType["AIS_TYPE_PASSENGER_HAZARDOUS_C"] = 63] = "AIS_TYPE_PASSENGER_HAZARDOUS_C";
    AisType[AisType["PASSENGER_HAZARDOUS_D"] = 64] = "PASSENGER_HAZARDOUS_D";
    AisType[AisType["PASSENGER_RESERVED_1"] = 65] = "PASSENGER_RESERVED_1";
    AisType[AisType["PASSENGER_RESERVED_2"] = 66] = "PASSENGER_RESERVED_2";
    AisType[AisType["PASSENGER_RESERVED_3"] = 67] = "PASSENGER_RESERVED_3";
    AisType[AisType["AIS_TYPE_PASSENGER_RESERVED_4"] = 68] = "AIS_TYPE_PASSENGER_RESERVED_4";
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
    /**
     * Under way using engine.
     */
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
    /**
     * Search And Rescue Transponder.
     */
    AisNavStatus[AisNavStatus["AIS_SART"] = 14] = "AIS_SART";
    /**
     * Not available (default).
     */
    AisNavStatus[AisNavStatus["UNKNOWN"] = 15] = "UNKNOWN";
})(AisNavStatus = exports.AisNavStatus || (exports.AisNavStatus = {}));
/**
 * These flags are used in the AIS_VESSEL.fields bitmask to indicate validity of data in the other
 * message fields. When set, the data is valid.
 */
var AisFlags;
(function (AisFlags) {
    /**
     * 1 = Position accuracy less than 10m, 0 = position accuracy greater than 10m.
     */
    AisFlags[AisFlags["POSITION_ACCURACY"] = 1] = "POSITION_ACCURACY";
    AisFlags[AisFlags["VALID_COG"] = 2] = "VALID_COG";
    AisFlags[AisFlags["VALID_VELOCITY"] = 4] = "VALID_VELOCITY";
    /**
     * 1 = Velocity over 52.5765m/s (102.2 knots)
     */
    AisFlags[AisFlags["HIGH_VELOCITY"] = 8] = "HIGH_VELOCITY";
    AisFlags[AisFlags["VALID_TURN_RATE"] = 16] = "VALID_TURN_RATE";
    /**
     * Only the sign of the returned turn rate value is valid, either greater than 5deg/30s or less than
     * -5deg/30s
     */
    AisFlags[AisFlags["TURN_RATE_SIGN_ONLY"] = 32] = "TURN_RATE_SIGN_ONLY";
    AisFlags[AisFlags["VALID_DIMENSIONS"] = 64] = "VALID_DIMENSIONS";
    /**
     * Distance to bow is larger than 511m
     */
    AisFlags[AisFlags["LARGE_BOW_DIMENSION"] = 128] = "LARGE_BOW_DIMENSION";
    /**
     * Distance to stern is larger than 511m
     */
    AisFlags[AisFlags["LARGE_STERN_DIMENSION"] = 256] = "LARGE_STERN_DIMENSION";
    /**
     * Distance to port side is larger than 63m
     */
    AisFlags[AisFlags["LARGE_PORT_DIMENSION"] = 512] = "LARGE_PORT_DIMENSION";
    /**
     * Distance to starboard side is larger than 63m
     */
    AisFlags[AisFlags["LARGE_STARBOARD_DIMENSION"] = 1024] = "LARGE_STARBOARD_DIMENSION";
    AisFlags[AisFlags["VALID_CALLSIGN"] = 2048] = "VALID_CALLSIGN";
    AisFlags[AisFlags["VALID_NAME"] = 4096] = "VALID_NAME";
})(AisFlags = exports.AisFlags || (exports.AisFlags = {}));
/**
 * Status of what an individual swarm vehicle is doing.
 */
var SwarmVehicleState;
(function (SwarmVehicleState) {
    /**
     * Unknown.
     */
    SwarmVehicleState[SwarmVehicleState["STATE_UNKNOWN"] = 0] = "STATE_UNKNOWN";
    /**
     * Currently traveling to join the mesh network.
     */
    SwarmVehicleState[SwarmVehicleState["STATE_INGRESSING_TO_MESH"] = 1] = "STATE_INGRESSING_TO_MESH";
    /**
     * Have lost contact with the mesh and unable to sync and unable to provide service.
     */
    SwarmVehicleState[SwarmVehicleState["STATE_LOST_COMMS"] = 2] = "STATE_LOST_COMMS";
    /**
     * Situation NORMAL, on station providing service
     */
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
    /**
     * Leaving mesh to return to base. Is still acting as mesh node providing service on the way back.
     */
    SwarmVehicleState[SwarmVehicleState["STATE_EGRESSING_MESH_RTB"] = 7] = "STATE_EGRESSING_MESH_RTB";
    /**
     * Returning to base. May or may-not be providing service on the way back.
     */
    SwarmVehicleState[SwarmVehicleState["STATE_RTB"] = 8] = "STATE_RTB";
    /**
     * Not providing service but is able and ready to join.
     */
    SwarmVehicleState[SwarmVehicleState["STATE_READY_TO_JOIN_MESH"] = 9] = "STATE_READY_TO_JOIN_MESH";
    /**
     * Not ready, not providing service. For air vehicles this means we're powered up on the ground and
     * likely performing ground checks. Next expected state is likely READY_TO_JOIN_MESH.
     */
    SwarmVehicleState[SwarmVehicleState["STATE_NOT_READY"] = 10] = "STATE_NOT_READY";
    /**
     * This is the Ground Control Station.
     */
    SwarmVehicleState[SwarmVehicleState["GCS"] = 11] = "GCS";
})(SwarmVehicleState = exports.SwarmVehicleState || (exports.SwarmVehicleState = {}));
/**
 * Type of the vehicle that is swarming. Sample types are fixed-wing, copter, tank, jeep, human.
 */
var SwarmVehicleType;
(function (SwarmVehicleType) {
    /**
     * Unknown.
     */
    SwarmVehicleType[SwarmVehicleType["UNKNOWN"] = 0] = "UNKNOWN";
    /**
     * Fixed wing aircraft
     */
    SwarmVehicleType[SwarmVehicleType["FIXED_WING"] = 1] = "FIXED_WING";
    /**
     * Copter
     */
    SwarmVehicleType[SwarmVehicleType["COPTER"] = 2] = "COPTER";
    /**
     * Tank
     */
    SwarmVehicleType[SwarmVehicleType["TANK"] = 3] = "TANK";
    /**
     * Jeep
     */
    SwarmVehicleType[SwarmVehicleType["JEEP"] = 4] = "JEEP";
    /**
     * Human
     */
    SwarmVehicleType[SwarmVehicleType["HUMAN"] = 5] = "HUMAN";
})(SwarmVehicleType = exports.SwarmVehicleType || (exports.SwarmVehicleType = {}));
/**
 * Status of the ROI from the swarm vehicle's perspective.
 */
var SwarmRoiStatus;
(function (SwarmRoiStatus) {
    SwarmRoiStatus[SwarmRoiStatus["UNKNOWN"] = 0] = "UNKNOWN";
    SwarmRoiStatus[SwarmRoiStatus["INVALID"] = 1] = "INVALID";
    /**
     * Has a valid ROI but it's old. We've seen another CRC with a newer timestamp.
     */
    SwarmRoiStatus[SwarmRoiStatus["NEEDS_UPDATE"] = 2] = "NEEDS_UPDATE";
    /**
     * Has a valid and up-to-date ROI.
     */
    SwarmRoiStatus[SwarmRoiStatus["OK"] = 3] = "OK";
})(SwarmRoiStatus = exports.SwarmRoiStatus || (exports.SwarmRoiStatus = {}));
/**
 * Status of mesh network coverage. Ideally the whole swarm should be generating the same status.
 */
var SwarmCoverageStatus;
(function (SwarmCoverageStatus) {
    SwarmCoverageStatus[SwarmCoverageStatus["UNKNOWN"] = 0] = "UNKNOWN";
    /**
     * ROI is not ready so a coverage status is unable to be determined.
     */
    SwarmCoverageStatus[SwarmCoverageStatus["ROI_IS_NOT_READY"] = 1] = "ROI_IS_NOT_READY";
    /**
     * Swarm mesh has insufficient vehicle resources to cover the ROI.
     */
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
    /**
     * Winch is healthy
     */
    MavWinchStatusFlag[MavWinchStatusFlag["HEALTHY"] = 1] = "HEALTHY";
    /**
     * Winch thread is fully retracted
     */
    MavWinchStatusFlag[MavWinchStatusFlag["FULLY_RETRACTED"] = 2] = "FULLY_RETRACTED";
    /**
     * Winch motor is moving
     */
    MavWinchStatusFlag[MavWinchStatusFlag["MOVING"] = 4] = "MOVING";
    /**
     * Winch clutch is engaged allowing motor to move freely
     */
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
 * CAN_FILTER_OP
 */
var CanFilterOp;
(function (CanFilterOp) {
    CanFilterOp[CanFilterOp["REPLACE"] = 0] = "REPLACE";
    CanFilterOp[CanFilterOp["ADD"] = 1] = "ADD";
    CanFilterOp[CanFilterOp["REMOVE"] = 2] = "REMOVE";
})(CanFilterOp = exports.CanFilterOp || (exports.CanFilterOp = {}));
/**
 * NAV_VTOL_LAND_OPTIONS
 */
var NavVtolLandOptions;
(function (NavVtolLandOptions) {
    /**
     * Default autopilot landing behaviour.
     */
    NavVtolLandOptions[NavVtolLandOptions["DEFAULT"] = 0] = "DEFAULT";
    /**
     * Use a fixed wing spiral desent approach before landing.
     */
    NavVtolLandOptions[NavVtolLandOptions["FW_SPIRAL_APPROACH"] = 1] = "FW_SPIRAL_APPROACH";
    /**
     * Use a fixed wing approach before detransitioning and landing vertically.
     */
    NavVtolLandOptions[NavVtolLandOptions["FW_APPROACH"] = 2] = "FW_APPROACH";
})(NavVtolLandOptions = exports.NavVtolLandOptions || (exports.NavVtolLandOptions = {}));
/**
 * States of the mission state machine. Note that these states are independent of whether the mission
 * is in a mode that can execute mission items or not (is suspended). They may not all be relevant on
 * all vehicles.
 */
var MissionState;
(function (MissionState) {
    /**
     * The mission status reporting is not supported.
     */
    MissionState[MissionState["UNKNOWN"] = 0] = "UNKNOWN";
    /**
     * No mission on the vehicle.
     */
    MissionState[MissionState["NO_MISSION"] = 1] = "NO_MISSION";
    /**
     * Mission has not started. This is the case after a mission has uploaded but not yet started
     * executing.
     */
    MissionState[MissionState["NOT_STARTED"] = 2] = "NOT_STARTED";
    /**
     * Mission is active, and will execute mission items when in auto mode.
     */
    MissionState[MissionState["ACTIVE"] = 3] = "ACTIVE";
    /**
     * Mission is paused when in auto mode.
     */
    MissionState[MissionState["PAUSED"] = 4] = "PAUSED";
    /**
     * Mission has executed all mission items.
     */
    MissionState[MissionState["COMPLETE"] = 5] = "COMPLETE";
})(MissionState = exports.MissionState || (exports.MissionState = {}));
/**
 * Possible safety switch states.
 */
var SafetySwitchState;
(function (SafetySwitchState) {
    /**
     * Safety switch is engaged and vehicle should be safe to approach.
     */
    SafetySwitchState[SafetySwitchState["SAFE"] = 0] = "SAFE";
    /**
     * Safety switch is NOT engaged and motors, propellers and other actuators should be considered active.
     */
    SafetySwitchState[SafetySwitchState["DANGEROUS"] = 1] = "DANGEROUS";
})(SafetySwitchState = exports.SafetySwitchState || (exports.SafetySwitchState = {}));
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
    constructor() {
        super();
        this.onboardControlSensorsPresent = MavSysStatusSensor[Object.keys(MavSysStatusSensor)[0]];
        this.onboardControlSensorsEnabled = MavSysStatusSensor[Object.keys(MavSysStatusSensor)[0]];
        this.onboardControlSensorsHealth = MavSysStatusSensor[Object.keys(MavSysStatusSensor)[0]];
        this.load = 0;
        this.voltageBattery = 0;
        this.currentBattery = 0;
        this.batteryRemaining = 0;
        this.dropRateComm = 0;
        this.errorsComm = 0;
        this.errorsCount1 = 0;
        this.errorsCount2 = 0;
        this.errorsCount3 = 0;
        this.errorsCount4 = 0;
    }
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
    constructor() {
        super();
        this.timeUnixUsec = BigInt(0);
        this.timeBootMs = 0;
    }
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
    constructor() {
        super();
        this.timeUsec = BigInt(0);
        this.seq = 0;
        this.targetSystem = 0;
        this.targetComponent = 0;
    }
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
    constructor() {
        super();
        this.targetSystem = 0;
        this.controlRequest = 0;
        this.version = 0;
        this.passkey = '';
    }
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
    constructor() {
        super();
        this.gcsSystemId = 0;
        this.controlRequest = 0;
        this.ack = 0;
    }
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
    constructor() {
        super();
        this.key = '';
    }
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
    constructor() {
        super();
        this.targetSystem = 0;
        this.baseMode = MavMode[Object.keys(MavMode)[0]];
        this.customMode = 0;
    }
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
    constructor() {
        super();
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.paramId = '';
        this.paramIndex = 0;
    }
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
    constructor() {
        super();
        this.targetSystem = 0;
        this.targetComponent = 0;
    }
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
    constructor() {
        super();
        this.paramId = '';
        this.paramValue = 0;
        this.paramType = MavParamType[Object.keys(MavParamType)[0]];
        this.paramCount = 0;
        this.paramIndex = 0;
    }
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
    constructor() {
        super();
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.paramId = '';
        this.paramValue = 0;
        this.paramType = MavParamType[Object.keys(MavParamType)[0]];
    }
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
    constructor() {
        super();
        this.timeUsec = BigInt(0);
        this.fixType = GpsFixType[Object.keys(GpsFixType)[0]];
        this.lat = 0;
        this.lon = 0;
        this.alt = 0;
        this.eph = 0;
        this.epv = 0;
        this.vel = 0;
        this.cog = 0;
        this.satellitesVisible = 0;
        this.altEllipsoid = 0;
        this.hAcc = 0;
        this.vAcc = 0;
        this.velAcc = 0;
        this.hdgAcc = 0;
        this.yaw = 0;
    }
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
    constructor() {
        super();
        this.satellitesVisible = 0;
        this.satellitePrn = [];
        this.satelliteUsed = [];
        this.satelliteElevation = [];
        this.satelliteAzimuth = [];
        this.satelliteSnr = [];
    }
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
    constructor() {
        super();
        this.timeBootMs = 0;
        this.xacc = 0;
        this.yacc = 0;
        this.zacc = 0;
        this.xgyro = 0;
        this.ygyro = 0;
        this.zgyro = 0;
        this.xmag = 0;
        this.ymag = 0;
        this.zmag = 0;
        this.temperature = 0;
    }
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
    constructor() {
        super();
        this.timeUsec = BigInt(0);
        this.xacc = 0;
        this.yacc = 0;
        this.zacc = 0;
        this.xgyro = 0;
        this.ygyro = 0;
        this.zgyro = 0;
        this.xmag = 0;
        this.ymag = 0;
        this.zmag = 0;
        this.id = 0;
        this.temperature = 0;
    }
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
    constructor() {
        super();
        this.timeUsec = BigInt(0);
        this.pressAbs = 0;
        this.pressDiff1 = 0;
        this.pressDiff2 = 0;
        this.temperature = 0;
    }
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
    constructor() {
        super();
        this.timeBootMs = 0;
        this.pressAbs = 0;
        this.pressDiff = 0;
        this.temperature = 0;
        this.temperaturePressDiff = 0;
    }
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
    constructor() {
        super();
        this.timeBootMs = 0;
        this.roll = 0;
        this.pitch = 0;
        this.yaw = 0;
        this.rollspeed = 0;
        this.pitchspeed = 0;
        this.yawspeed = 0;
    }
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
    constructor() {
        super();
        this.timeBootMs = 0;
        this.q1 = 0;
        this.q2 = 0;
        this.q3 = 0;
        this.q4 = 0;
        this.rollspeed = 0;
        this.pitchspeed = 0;
        this.yawspeed = 0;
        this.reprOffsetQ = [];
    }
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
    constructor() {
        super();
        this.timeBootMs = 0;
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.vx = 0;
        this.vy = 0;
        this.vz = 0;
    }
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
    constructor() {
        super();
        this.timeBootMs = 0;
        this.lat = 0;
        this.lon = 0;
        this.alt = 0;
        this.relativeAlt = 0;
        this.vx = 0;
        this.vy = 0;
        this.vz = 0;
        this.hdg = 0;
    }
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
    constructor() {
        super();
        this.timeBootMs = 0;
        this.port = 0;
        this.chan1Scaled = 0;
        this.chan2Scaled = 0;
        this.chan3Scaled = 0;
        this.chan4Scaled = 0;
        this.chan5Scaled = 0;
        this.chan6Scaled = 0;
        this.chan7Scaled = 0;
        this.chan8Scaled = 0;
        this.rssi = 0;
    }
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
    constructor() {
        super();
        this.timeBootMs = 0;
        this.port = 0;
        this.chan1Raw = 0;
        this.chan2Raw = 0;
        this.chan3Raw = 0;
        this.chan4Raw = 0;
        this.chan5Raw = 0;
        this.chan6Raw = 0;
        this.chan7Raw = 0;
        this.chan8Raw = 0;
        this.rssi = 0;
    }
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
    constructor() {
        super();
        this.timeUsec = 0;
        this.port = 0;
        this.servo1Raw = 0;
        this.servo2Raw = 0;
        this.servo3Raw = 0;
        this.servo4Raw = 0;
        this.servo5Raw = 0;
        this.servo6Raw = 0;
        this.servo7Raw = 0;
        this.servo8Raw = 0;
        this.servo9Raw = 0;
        this.servo10Raw = 0;
        this.servo11Raw = 0;
        this.servo12Raw = 0;
        this.servo13Raw = 0;
        this.servo14Raw = 0;
        this.servo15Raw = 0;
        this.servo16Raw = 0;
    }
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
    constructor() {
        super();
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.startIndex = 0;
        this.endIndex = 0;
        this.missionType = MavMissionType[Object.keys(MavMissionType)[0]];
    }
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
    constructor() {
        super();
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.startIndex = 0;
        this.endIndex = 0;
        this.missionType = MavMissionType[Object.keys(MavMissionType)[0]];
    }
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
    constructor() {
        super();
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.seq = 0;
        this.frame = MavFrame[Object.keys(MavFrame)[0]];
        this.command = MavCmd[Object.keys(MavCmd)[0]];
        this.current = 0;
        this.autocontinue = 0;
        this.param1 = 0;
        this.param2 = 0;
        this.param3 = 0;
        this.param4 = 0;
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.missionType = MavMissionType[Object.keys(MavMissionType)[0]];
    }
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
    constructor() {
        super();
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.seq = 0;
        this.missionType = MavMissionType[Object.keys(MavMissionType)[0]];
    }
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
    constructor() {
        super();
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.seq = 0;
    }
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
    constructor() {
        super();
        this.seq = 0;
        this.total = 0;
        this.missionState = MissionState[Object.keys(MissionState)[0]];
        this.missionMode = 0;
    }
}
exports.MissionCurrent = MissionCurrent;
MissionCurrent.MSG_ID = 42;
MissionCurrent.MSG_NAME = 'MISSION_CURRENT';
MissionCurrent.PAYLOAD_LENGTH = 6;
MissionCurrent.MAGIC_NUMBER = 28;
MissionCurrent.FIELDS = [
    new mavlink_1.MavLinkPacketField('seq', 'seq', 0, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('total', 'total', 2, true, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('mission_state', 'missionState', 4, true, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('mission_mode', 'missionMode', 5, true, 1, 'uint8_t', ''),
];
/**
 * Request the overall list of mission items from the system/component.
 */
class MissionRequestList extends mavlink_1.MavLinkData {
    constructor() {
        super();
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.missionType = MavMissionType[Object.keys(MavMissionType)[0]];
    }
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
    constructor() {
        super();
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.count = 0;
        this.missionType = MavMissionType[Object.keys(MavMissionType)[0]];
    }
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
    constructor() {
        super();
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.missionType = MavMissionType[Object.keys(MavMissionType)[0]];
    }
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
    constructor() {
        super();
        this.seq = 0;
    }
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
    constructor() {
        super();
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.type = MavMissionResult[Object.keys(MavMissionResult)[0]];
        this.missionType = MavMissionType[Object.keys(MavMissionType)[0]];
    }
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
    constructor() {
        super();
        this.targetSystem = 0;
        this.latitude = 0;
        this.longitude = 0;
        this.altitude = 0;
        this.timeUsec = BigInt(0);
    }
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
    constructor() {
        super();
        this.latitude = 0;
        this.longitude = 0;
        this.altitude = 0;
        this.timeUsec = BigInt(0);
    }
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
    constructor() {
        super();
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.paramId = '';
        this.paramIndex = 0;
        this.parameterRcChannelIndex = 0;
        this.paramValue0 = 0;
        this.scale = 0;
        this.paramValueMin = 0;
        this.paramValueMax = 0;
    }
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
    constructor() {
        super();
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.seq = 0;
        this.missionType = MavMissionType[Object.keys(MavMissionType)[0]];
    }
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
    constructor() {
        super();
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.frame = MavFrame[Object.keys(MavFrame)[0]];
        this.p1x = 0;
        this.p1y = 0;
        this.p1z = 0;
        this.p2x = 0;
        this.p2y = 0;
        this.p2z = 0;
    }
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
    constructor() {
        super();
        this.frame = MavFrame[Object.keys(MavFrame)[0]];
        this.p1x = 0;
        this.p1y = 0;
        this.p1z = 0;
        this.p2x = 0;
        this.p2y = 0;
        this.p2z = 0;
    }
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
    constructor() {
        super();
        this.timeUsec = BigInt(0);
        this.q = [];
        this.rollspeed = 0;
        this.pitchspeed = 0;
        this.yawspeed = 0;
        this.covariance = [];
    }
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
    constructor() {
        super();
        this.navRoll = 0;
        this.navPitch = 0;
        this.navBearing = 0;
        this.targetBearing = 0;
        this.wpDist = 0;
        this.altError = 0;
        this.aspdError = 0;
        this.xtrackError = 0;
    }
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
    constructor() {
        super();
        this.timeUsec = BigInt(0);
        this.estimatorType = MavEstimatorType[Object.keys(MavEstimatorType)[0]];
        this.lat = 0;
        this.lon = 0;
        this.alt = 0;
        this.relativeAlt = 0;
        this.vx = 0;
        this.vy = 0;
        this.vz = 0;
        this.covariance = [];
    }
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
    constructor() {
        super();
        this.timeUsec = BigInt(0);
        this.estimatorType = MavEstimatorType[Object.keys(MavEstimatorType)[0]];
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.vx = 0;
        this.vy = 0;
        this.vz = 0;
        this.ax = 0;
        this.ay = 0;
        this.az = 0;
        this.covariance = [];
    }
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
    constructor() {
        super();
        this.timeBootMs = 0;
        this.chancount = 0;
        this.chan1Raw = 0;
        this.chan2Raw = 0;
        this.chan3Raw = 0;
        this.chan4Raw = 0;
        this.chan5Raw = 0;
        this.chan6Raw = 0;
        this.chan7Raw = 0;
        this.chan8Raw = 0;
        this.chan9Raw = 0;
        this.chan10Raw = 0;
        this.chan11Raw = 0;
        this.chan12Raw = 0;
        this.chan13Raw = 0;
        this.chan14Raw = 0;
        this.chan15Raw = 0;
        this.chan16Raw = 0;
        this.chan17Raw = 0;
        this.chan18Raw = 0;
        this.rssi = 0;
    }
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
    constructor() {
        super();
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.reqStreamId = 0;
        this.reqMessageRate = 0;
        this.startStop = 0;
    }
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
    constructor() {
        super();
        this.streamId = 0;
        this.messageRate = 0;
        this.onOff = 0;
    }
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
    constructor() {
        super();
        this.target = 0;
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.r = 0;
        this.buttons = 0;
        this.buttons2 = 0;
        this.enabledExtensions = 0;
        this.s = 0;
        this.t = 0;
        this.aux1 = 0;
        this.aux2 = 0;
        this.aux3 = 0;
        this.aux4 = 0;
        this.aux5 = 0;
        this.aux6 = 0;
    }
}
exports.ManualControl = ManualControl;
ManualControl.MSG_ID = 69;
ManualControl.MSG_NAME = 'MANUAL_CONTROL';
ManualControl.PAYLOAD_LENGTH = 30;
ManualControl.MAGIC_NUMBER = 243;
ManualControl.FIELDS = [
    new mavlink_1.MavLinkPacketField('x', 'x', 0, false, 2, 'int16_t', ''),
    new mavlink_1.MavLinkPacketField('y', 'y', 2, false, 2, 'int16_t', ''),
    new mavlink_1.MavLinkPacketField('z', 'z', 4, false, 2, 'int16_t', ''),
    new mavlink_1.MavLinkPacketField('r', 'r', 6, false, 2, 'int16_t', ''),
    new mavlink_1.MavLinkPacketField('buttons', 'buttons', 8, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('target', 'target', 10, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('buttons2', 'buttons2', 11, true, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('enabled_extensions', 'enabledExtensions', 13, true, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('s', 's', 14, true, 2, 'int16_t', ''),
    new mavlink_1.MavLinkPacketField('t', 't', 16, true, 2, 'int16_t', ''),
    new mavlink_1.MavLinkPacketField('aux1', 'aux1', 18, true, 2, 'int16_t', ''),
    new mavlink_1.MavLinkPacketField('aux2', 'aux2', 20, true, 2, 'int16_t', ''),
    new mavlink_1.MavLinkPacketField('aux3', 'aux3', 22, true, 2, 'int16_t', ''),
    new mavlink_1.MavLinkPacketField('aux4', 'aux4', 24, true, 2, 'int16_t', ''),
    new mavlink_1.MavLinkPacketField('aux5', 'aux5', 26, true, 2, 'int16_t', ''),
    new mavlink_1.MavLinkPacketField('aux6', 'aux6', 28, true, 2, 'int16_t', ''),
];
/**
 * The RAW values of the RC channels sent to the MAV to override info received from the RC radio. The
 * standard PPM modulation is as follows: 1000 microseconds: 0%, 2000 microseconds: 100%. Individual
 * receivers/transmitters might violate this specification. Note carefully the semantic differences
 * between the first 8 channels and the subsequent channels
 */
class RcChannelsOverride extends mavlink_1.MavLinkData {
    constructor() {
        super();
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.chan1Raw = 0;
        this.chan2Raw = 0;
        this.chan3Raw = 0;
        this.chan4Raw = 0;
        this.chan5Raw = 0;
        this.chan6Raw = 0;
        this.chan7Raw = 0;
        this.chan8Raw = 0;
        this.chan9Raw = 0;
        this.chan10Raw = 0;
        this.chan11Raw = 0;
        this.chan12Raw = 0;
        this.chan13Raw = 0;
        this.chan14Raw = 0;
        this.chan15Raw = 0;
        this.chan16Raw = 0;
        this.chan17Raw = 0;
        this.chan18Raw = 0;
    }
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
    constructor() {
        super();
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.seq = 0;
        this.frame = MavFrame[Object.keys(MavFrame)[0]];
        this.command = MavCmd[Object.keys(MavCmd)[0]];
        this.current = 0;
        this.autocontinue = 0;
        this.param1 = 0;
        this.param2 = 0;
        this.param3 = 0;
        this.param4 = 0;
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.missionType = MavMissionType[Object.keys(MavMissionType)[0]];
    }
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
    constructor() {
        super();
        this.airspeed = 0;
        this.groundspeed = 0;
        this.heading = 0;
        this.throttle = 0;
        this.alt = 0;
        this.climb = 0;
    }
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
    constructor() {
        super();
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.frame = MavFrame[Object.keys(MavFrame)[0]];
        this.command = MavCmd[Object.keys(MavCmd)[0]];
        this.current = 0;
        this.autocontinue = 0;
        this._param1 = 0;
        this._param2 = 0;
        this._param3 = 0;
        this._param4 = 0;
        this._param5 = 0;
        this._param6 = 0;
        this._param7 = 0;
    }
}
exports.CommandInt = CommandInt;
CommandInt.MSG_ID = 75;
CommandInt.MSG_NAME = 'COMMAND_INT';
CommandInt.PAYLOAD_LENGTH = 35;
CommandInt.MAGIC_NUMBER = 158;
CommandInt.FIELDS = [
    new mavlink_1.MavLinkPacketField('param1', '_param1', 0, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('param2', '_param2', 4, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('param3', '_param3', 8, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('param4', '_param4', 12, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('x', '_param5', 16, false, 4, 'int32_t', ''),
    new mavlink_1.MavLinkPacketField('y', '_param6', 20, false, 4, 'int32_t', ''),
    new mavlink_1.MavLinkPacketField('z', '_param7', 24, false, 4, 'float', ''),
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
    constructor() {
        super();
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.command = MavCmd[Object.keys(MavCmd)[0]];
        this.confirmation = 0;
        this._param1 = 0;
        this._param2 = 0;
        this._param3 = 0;
        this._param4 = 0;
        this._param5 = 0;
        this._param6 = 0;
        this._param7 = 0;
    }
}
exports.CommandLong = CommandLong;
CommandLong.MSG_ID = 76;
CommandLong.MSG_NAME = 'COMMAND_LONG';
CommandLong.PAYLOAD_LENGTH = 33;
CommandLong.MAGIC_NUMBER = 152;
CommandLong.FIELDS = [
    new mavlink_1.MavLinkPacketField('param1', '_param1', 0, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('param2', '_param2', 4, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('param3', '_param3', 8, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('param4', '_param4', 12, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('param5', '_param5', 16, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('param6', '_param6', 20, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('param7', '_param7', 24, false, 4, 'float', ''),
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
    constructor() {
        super();
        this.command = MavCmd[Object.keys(MavCmd)[0]];
        this.result = MavResult[Object.keys(MavResult)[0]];
    }
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
    constructor() {
        super();
        this.timeBootMs = 0;
        this.roll = 0;
        this.pitch = 0;
        this.yaw = 0;
        this.thrust = 0;
        this.modeSwitch = 0;
        this.manualOverrideSwitch = 0;
    }
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
    constructor() {
        super();
        this.timeBootMs = 0;
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.typeMask = AttitudeTargetTypemask[Object.keys(AttitudeTargetTypemask)[0]];
        this.q = [];
        this.bodyRollRate = 0;
        this.bodyPitchRate = 0;
        this.bodyYawRate = 0;
        this.thrust = 0;
    }
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
    constructor() {
        super();
        this.timeBootMs = 0;
        this.typeMask = AttitudeTargetTypemask[Object.keys(AttitudeTargetTypemask)[0]];
        this.q = [];
        this.bodyRollRate = 0;
        this.bodyPitchRate = 0;
        this.bodyYawRate = 0;
        this.thrust = 0;
    }
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
    constructor() {
        super();
        this.timeBootMs = 0;
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.coordinateFrame = MavFrame[Object.keys(MavFrame)[0]];
        this.typeMask = PositionTargetTypemask[Object.keys(PositionTargetTypemask)[0]];
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.vx = 0;
        this.vy = 0;
        this.vz = 0;
        this.afx = 0;
        this.afy = 0;
        this.afz = 0;
        this.yaw = 0;
        this.yawRate = 0;
    }
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
    constructor() {
        super();
        this.timeBootMs = 0;
        this.coordinateFrame = MavFrame[Object.keys(MavFrame)[0]];
        this.typeMask = PositionTargetTypemask[Object.keys(PositionTargetTypemask)[0]];
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.vx = 0;
        this.vy = 0;
        this.vz = 0;
        this.afx = 0;
        this.afy = 0;
        this.afz = 0;
        this.yaw = 0;
        this.yawRate = 0;
    }
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
    constructor() {
        super();
        this.timeBootMs = 0;
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.coordinateFrame = MavFrame[Object.keys(MavFrame)[0]];
        this.typeMask = PositionTargetTypemask[Object.keys(PositionTargetTypemask)[0]];
        this.latInt = 0;
        this.lonInt = 0;
        this.alt = 0;
        this.vx = 0;
        this.vy = 0;
        this.vz = 0;
        this.afx = 0;
        this.afy = 0;
        this.afz = 0;
        this.yaw = 0;
        this.yawRate = 0;
    }
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
    constructor() {
        super();
        this.timeBootMs = 0;
        this.coordinateFrame = MavFrame[Object.keys(MavFrame)[0]];
        this.typeMask = PositionTargetTypemask[Object.keys(PositionTargetTypemask)[0]];
        this.latInt = 0;
        this.lonInt = 0;
        this.alt = 0;
        this.vx = 0;
        this.vy = 0;
        this.vz = 0;
        this.afx = 0;
        this.afy = 0;
        this.afz = 0;
        this.yaw = 0;
        this.yawRate = 0;
    }
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
    constructor() {
        super();
        this.timeBootMs = 0;
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.roll = 0;
        this.pitch = 0;
        this.yaw = 0;
    }
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
    constructor() {
        super();
        this.timeUsec = BigInt(0);
        this.roll = 0;
        this.pitch = 0;
        this.yaw = 0;
        this.rollspeed = 0;
        this.pitchspeed = 0;
        this.yawspeed = 0;
        this.lat = 0;
        this.lon = 0;
        this.alt = 0;
        this.vx = 0;
        this.vy = 0;
        this.vz = 0;
        this.xacc = 0;
        this.yacc = 0;
        this.zacc = 0;
    }
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
    constructor() {
        super();
        this.timeUsec = BigInt(0);
        this.rollAilerons = 0;
        this.pitchElevator = 0;
        this.yawRudder = 0;
        this.throttle = 0;
        this.aux1 = 0;
        this.aux2 = 0;
        this.aux3 = 0;
        this.aux4 = 0;
        this.mode = MavMode[Object.keys(MavMode)[0]];
        this.navMode = 0;
    }
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
    constructor() {
        super();
        this.timeUsec = BigInt(0);
        this.chan1Raw = 0;
        this.chan2Raw = 0;
        this.chan3Raw = 0;
        this.chan4Raw = 0;
        this.chan5Raw = 0;
        this.chan6Raw = 0;
        this.chan7Raw = 0;
        this.chan8Raw = 0;
        this.chan9Raw = 0;
        this.chan10Raw = 0;
        this.chan11Raw = 0;
        this.chan12Raw = 0;
        this.rssi = 0;
    }
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
    constructor() {
        super();
        this.timeUsec = BigInt(0);
        this.controls = [];
        this.mode = minimal_1.MavModeFlag[Object.keys(minimal_1.MavModeFlag)[0]];
        this.flags = BigInt(0);
    }
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
    constructor() {
        super();
        this.timeUsec = BigInt(0);
        this.sensorId = 0;
        this.flowX = 0;
        this.flowY = 0;
        this.flowCompMX = 0;
        this.flowCompMY = 0;
        this.quality = 0;
        this.groundDistance = 0;
        this.flowRateX = 0;
        this.flowRateY = 0;
    }
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
    new mavlink_1.MavLinkPacketField('flow_x', 'flowX', 20, false, 2, 'int16_t', 'rad/s'),
    new mavlink_1.MavLinkPacketField('flow_y', 'flowY', 22, false, 2, 'int16_t', 'rad/s'),
    new mavlink_1.MavLinkPacketField('sensor_id', 'sensorId', 24, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('quality', 'quality', 25, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('flow_rate_x', 'flowRateX', 26, true, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('flow_rate_y', 'flowRateY', 30, true, 4, 'float', 'rad/s'),
];
/**
 * Global position/attitude estimate from a vision source.
 */
class GlobalVisionPositionEstimate extends mavlink_1.MavLinkData {
    constructor() {
        super();
        this.usec = BigInt(0);
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.roll = 0;
        this.pitch = 0;
        this.yaw = 0;
        this.covariance = [];
        this.resetCounter = 0;
    }
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
    constructor() {
        super();
        this.usec = BigInt(0);
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.roll = 0;
        this.pitch = 0;
        this.yaw = 0;
        this.covariance = [];
        this.resetCounter = 0;
    }
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
    constructor() {
        super();
        this.usec = BigInt(0);
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.covariance = [];
        this.resetCounter = 0;
    }
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
    constructor() {
        super();
        this.usec = BigInt(0);
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.roll = 0;
        this.pitch = 0;
        this.yaw = 0;
        this.covariance = [];
    }
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
    constructor() {
        super();
        this.timeUsec = BigInt(0);
        this.xacc = 0;
        this.yacc = 0;
        this.zacc = 0;
        this.xgyro = 0;
        this.ygyro = 0;
        this.zgyro = 0;
        this.xmag = 0;
        this.ymag = 0;
        this.zmag = 0;
        this.absPressure = 0;
        this.diffPressure = 0;
        this.pressureAlt = 0;
        this.temperature = 0;
        this.fieldsUpdated = 0;
        this.id = 0;
    }
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
    constructor() {
        super();
        this.timeUsec = BigInt(0);
        this.sensorId = 0;
        this.integrationTimeUs = 0;
        this.integratedX = 0;
        this.integratedY = 0;
        this.integratedXgyro = 0;
        this.integratedYgyro = 0;
        this.integratedZgyro = 0;
        this.temperature = 0;
        this.quality = 0;
        this.timeDeltaDistanceUs = 0;
        this.distance = 0;
    }
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
    constructor() {
        super();
        this.timeUsec = BigInt(0);
        this.xacc = 0;
        this.yacc = 0;
        this.zacc = 0;
        this.xgyro = 0;
        this.ygyro = 0;
        this.zgyro = 0;
        this.xmag = 0;
        this.ymag = 0;
        this.zmag = 0;
        this.absPressure = 0;
        this.diffPressure = 0;
        this.pressureAlt = 0;
        this.temperature = 0;
        this.fieldsUpdated = 0;
        this.id = 0;
    }
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
    constructor() {
        super();
        this.q1 = 0;
        this.q2 = 0;
        this.q3 = 0;
        this.q4 = 0;
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
        this.lon = 0;
        this.alt = 0;
        this.stdDevHorz = 0;
        this.stdDevVert = 0;
        this.vn = 0;
        this.ve = 0;
        this.vd = 0;
        this.latInt = 0;
        this.lonInt = 0;
    }
}
exports.SimState = SimState;
SimState.MSG_ID = 108;
SimState.MSG_NAME = 'SIM_STATE';
SimState.PAYLOAD_LENGTH = 92;
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
    new mavlink_1.MavLinkPacketField('lat_int', 'latInt', 84, true, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('lon_int', 'lonInt', 88, true, 4, 'int32_t', 'degE7'),
];
/**
 * Status generated by radio and injected into MAVLink stream.
 */
class RadioStatus extends mavlink_1.MavLinkData {
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
    constructor() {
        super();
        this.targetNetwork = 0;
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.payload = [];
    }
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
    constructor() {
        super();
        this.tc1 = BigInt(0);
        this.ts1 = BigInt(0);
    }
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
    constructor() {
        super();
        this.timeUsec = BigInt(0);
        this.seq = 0;
    }
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
    constructor() {
        super();
        this.timeUsec = BigInt(0);
        this.fixType = 0;
        this.lat = 0;
        this.lon = 0;
        this.alt = 0;
        this.eph = 0;
        this.epv = 0;
        this.vel = 0;
        this.vn = 0;
        this.ve = 0;
        this.vd = 0;
        this.cog = 0;
        this.satellitesVisible = 0;
        this.id = 0;
        this.yaw = 0;
    }
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
    constructor() {
        super();
        this.timeUsec = BigInt(0);
        this.sensorId = 0;
        this.integrationTimeUs = 0;
        this.integratedX = 0;
        this.integratedY = 0;
        this.integratedXgyro = 0;
        this.integratedYgyro = 0;
        this.integratedZgyro = 0;
        this.temperature = 0;
        this.quality = 0;
        this.timeDeltaDistanceUs = 0;
        this.distance = 0;
    }
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
    constructor() {
        super();
        this.timeUsec = BigInt(0);
        this.attitudeQuaternion = [];
        this.rollspeed = 0;
        this.pitchspeed = 0;
        this.yawspeed = 0;
        this.lat = 0;
        this.lon = 0;
        this.alt = 0;
        this.vx = 0;
        this.vy = 0;
        this.vz = 0;
        this.indAirspeed = 0;
        this.trueAirspeed = 0;
        this.xacc = 0;
        this.yacc = 0;
        this.zacc = 0;
    }
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
    constructor() {
        super();
        this.timeBootMs = 0;
        this.xacc = 0;
        this.yacc = 0;
        this.zacc = 0;
        this.xgyro = 0;
        this.ygyro = 0;
        this.zgyro = 0;
        this.xmag = 0;
        this.ymag = 0;
        this.zmag = 0;
        this.temperature = 0;
    }
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
    constructor() {
        super();
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.start = 0;
        this.end = 0;
    }
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
    constructor() {
        super();
        this.id = 0;
        this.numLogs = 0;
        this.lastLogNum = 0;
        this.timeUtc = 0;
        this.size = 0;
    }
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
    constructor() {
        super();
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.id = 0;
        this.ofs = 0;
        this.count = 0;
    }
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
    constructor() {
        super();
        this.id = 0;
        this.ofs = 0;
        this.count = 0;
        this.data = [];
    }
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
    constructor() {
        super();
        this.targetSystem = 0;
        this.targetComponent = 0;
    }
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
    constructor() {
        super();
        this.targetSystem = 0;
        this.targetComponent = 0;
    }
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
    constructor() {
        super();
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.len = 0;
        this.data = [];
    }
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
    constructor() {
        super();
        this.timeUsec = BigInt(0);
        this.fixType = GpsFixType[Object.keys(GpsFixType)[0]];
        this.lat = 0;
        this.lon = 0;
        this.alt = 0;
        this.eph = 0;
        this.epv = 0;
        this.vel = 0;
        this.cog = 0;
        this.satellitesVisible = 0;
        this.dgpsNumch = 0;
        this.dgpsAge = 0;
        this.yaw = 0;
        this.altEllipsoid = 0;
        this.hAcc = 0;
        this.vAcc = 0;
        this.velAcc = 0;
        this.hdgAcc = 0;
    }
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
    constructor() {
        super();
        this.Vcc = 0;
        this.Vservo = 0;
        this.flags = MavPowerStatus[Object.keys(MavPowerStatus)[0]];
    }
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
    constructor() {
        super();
        this.device = SerialControlDev[Object.keys(SerialControlDev)[0]];
        this.flags = SerialControlFlag[Object.keys(SerialControlFlag)[0]];
        this.timeout = 0;
        this.baudrate = 0;
        this.count = 0;
        this.data = [];
    }
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
    constructor() {
        super();
        this.timeLastBaselineMs = 0;
        this.rtkReceiverId = 0;
        this.wn = 0;
        this.tow = 0;
        this.rtkHealth = 0;
        this.rtkRate = 0;
        this.nsats = 0;
        this.baselineCoordsType = RtkBaselineCoordinateSystem[Object.keys(RtkBaselineCoordinateSystem)[0]];
        this.baselineAMm = 0;
        this.baselineBMm = 0;
        this.baselineCMm = 0;
        this.accuracy = 0;
        this.iarNumHypotheses = 0;
    }
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
    constructor() {
        super();
        this.timeLastBaselineMs = 0;
        this.rtkReceiverId = 0;
        this.wn = 0;
        this.tow = 0;
        this.rtkHealth = 0;
        this.rtkRate = 0;
        this.nsats = 0;
        this.baselineCoordsType = RtkBaselineCoordinateSystem[Object.keys(RtkBaselineCoordinateSystem)[0]];
        this.baselineAMm = 0;
        this.baselineBMm = 0;
        this.baselineCMm = 0;
        this.accuracy = 0;
        this.iarNumHypotheses = 0;
    }
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
    constructor() {
        super();
        this.timeBootMs = 0;
        this.xacc = 0;
        this.yacc = 0;
        this.zacc = 0;
        this.xgyro = 0;
        this.ygyro = 0;
        this.zgyro = 0;
        this.xmag = 0;
        this.ymag = 0;
        this.zmag = 0;
        this.temperature = 0;
    }
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
    constructor() {
        super();
        this.type = MavlinkDataStreamType[Object.keys(MavlinkDataStreamType)[0]];
        this.size = 0;
        this.width = 0;
        this.height = 0;
        this.packets = 0;
        this.payload = 0;
        this.jpgQuality = 0;
    }
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
    constructor() {
        super();
        this.seqnr = 0;
        this.data = [];
    }
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
    constructor() {
        super();
        this.timeBootMs = 0;
        this.minDistance = 0;
        this.maxDistance = 0;
        this.currentDistance = 0;
        this.type = MavDistanceSensor[Object.keys(MavDistanceSensor)[0]];
        this.id = 0;
        this.orientation = MavSensorOrientation[Object.keys(MavSensorOrientation)[0]];
        this.covariance = 0;
        this.horizontalFov = 0;
        this.verticalFov = 0;
        this.quaternion = [];
        this.signalQuality = 0;
    }
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
    constructor() {
        super();
        this.lat = 0;
        this.lon = 0;
        this.gridSpacing = 0;
        this.mask = BigInt(0);
    }
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
    constructor() {
        super();
        this.lat = 0;
        this.lon = 0;
        this.gridSpacing = 0;
        this.gridbit = 0;
        this.data = [];
    }
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
    constructor() {
        super();
        this.lat = 0;
        this.lon = 0;
    }
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
    constructor() {
        super();
        this.lat = 0;
        this.lon = 0;
        this.spacing = 0;
        this.terrainHeight = 0;
        this.currentHeight = 0;
        this.pending = 0;
        this.loaded = 0;
    }
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
    constructor() {
        super();
        this.timeBootMs = 0;
        this.pressAbs = 0;
        this.pressDiff = 0;
        this.temperature = 0;
        this.temperaturePressDiff = 0;
    }
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
    constructor() {
        super();
        this.timeUsec = BigInt(0);
        this.q = [];
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.covariance = [];
    }
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
    constructor() {
        super();
        this.timeUsec = BigInt(0);
        this.groupMlx = 0;
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.controls = [];
    }
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
    constructor() {
        super();
        this.timeUsec = BigInt(0);
        this.groupMlx = 0;
        this.controls = [];
    }
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
    constructor() {
        super();
        this.timeUsec = BigInt(0);
        this.altitudeMonotonic = 0;
        this.altitudeAmsl = 0;
        this.altitudeLocal = 0;
        this.altitudeRelative = 0;
        this.altitudeTerrain = 0;
        this.bottomClearance = 0;
    }
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
    constructor() {
        super();
        this.requestId = 0;
        this.uriType = 0;
        this.uri = [];
        this.transferType = 0;
        this.storage = [];
    }
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
    constructor() {
        super();
        this.timeBootMs = 0;
        this.pressAbs = 0;
        this.pressDiff = 0;
        this.temperature = 0;
        this.temperaturePressDiff = 0;
    }
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
    constructor() {
        super();
        this.timestamp = BigInt(0);
        this.estCapabilities = 0;
        this.lat = 0;
        this.lon = 0;
        this.alt = 0;
        this.vel = [];
        this.acc = [];
        this.attitudeQ = [];
        this.rates = [];
        this.positionCov = [];
        this.customState = BigInt(0);
    }
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
    constructor() {
        super();
        this.timeUsec = BigInt(0);
        this.xAcc = 0;
        this.yAcc = 0;
        this.zAcc = 0;
        this.xVel = 0;
        this.yVel = 0;
        this.zVel = 0;
        this.xPos = 0;
        this.yPos = 0;
        this.zPos = 0;
        this.airspeed = 0;
        this.velVariance = [];
        this.posVariance = [];
        this.q = [];
        this.rollRate = 0;
        this.pitchRate = 0;
        this.yawRate = 0;
    }
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
    constructor() {
        super();
        this.id = 0;
        this.batteryFunction = MavBatteryFunction[Object.keys(MavBatteryFunction)[0]];
        this.type = MavBatteryType[Object.keys(MavBatteryType)[0]];
        this.temperature = 0;
        this.voltages = [];
        this.currentBattery = 0;
        this.currentConsumed = 0;
        this.energyConsumed = 0;
        this.batteryRemaining = 0;
        this.timeRemaining = 0;
        this.chargeState = MavBatteryChargeState[Object.keys(MavBatteryChargeState)[0]];
        this.voltagesExt = [];
    }
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
    constructor() {
        super();
        this.capabilities = MavProtocolCapability[Object.keys(MavProtocolCapability)[0]];
        this.flightSwVersion = 0;
        this.middlewareSwVersion = 0;
        this.osSwVersion = 0;
        this.boardVersion = 0;
        this.flightCustomVersion = [];
        this.middlewareCustomVersion = [];
        this.osCustomVersion = [];
        this.vendorId = 0;
        this.productId = 0;
        this.uid = BigInt(0);
        this.uid2 = [];
    }
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
    constructor() {
        super();
        this.timeUsec = BigInt(0);
        this.targetNum = 0;
        this.frame = MavFrame[Object.keys(MavFrame)[0]];
        this.angleX = 0;
        this.angleY = 0;
        this.distance = 0;
        this.sizeX = 0;
        this.sizeY = 0;
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.q = [];
        this.type = LandingTargetType[Object.keys(LandingTargetType)[0]];
        this.positionValid = 0;
    }
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
    constructor() {
        super();
        this.breachStatus = 0;
        this.breachCount = 0;
        this.breachType = FenceBreach[Object.keys(FenceBreach)[0]];
        this.breachTime = 0;
        this.breachMitigation = FenceMitigate[Object.keys(FenceMitigate)[0]];
    }
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
    constructor() {
        super();
        this.compassId = 0;
        this.calMask = 0;
        this.calStatus = MagCalStatus[Object.keys(MagCalStatus)[0]];
        this.autosaved = 0;
        this.fitness = 0;
        this.ofsX = 0;
        this.ofsY = 0;
        this.ofsZ = 0;
        this.diagX = 0;
        this.diagY = 0;
        this.diagZ = 0;
        this.offdiagX = 0;
        this.offdiagY = 0;
        this.offdiagZ = 0;
        this.orientationConfidence = 0;
        this.oldOrientation = MavSensorOrientation[Object.keys(MavSensorOrientation)[0]];
        this.newOrientation = MavSensorOrientation[Object.keys(MavSensorOrientation)[0]];
        this.scaleFactor = 0;
    }
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
    constructor() {
        super();
        this.health = 0;
        this.ecuIndex = 0;
        this.rpm = 0;
        this.fuelConsumed = 0;
        this.fuelFlow = 0;
        this.engineLoad = 0;
        this.throttlePosition = 0;
        this.sparkDwellTime = 0;
        this.barometricPressure = 0;
        this.intakeManifoldPressure = 0;
        this.intakeManifoldTemperature = 0;
        this.cylinderHeadTemperature = 0;
        this.ignitionTiming = 0;
        this.injectionTime = 0;
        this.exhaustGasTemperature = 0;
        this.throttleOut = 0;
        this.ptCompensation = 0;
        this.ignitionVoltage = 0;
        this.fuelPressure = 0;
    }
}
exports.EfiStatus = EfiStatus;
EfiStatus.MSG_ID = 225;
EfiStatus.MSG_NAME = 'EFI_STATUS';
EfiStatus.PAYLOAD_LENGTH = 73;
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
    new mavlink_1.MavLinkPacketField('ignition_voltage', 'ignitionVoltage', 65, true, 4, 'float', 'V'),
    new mavlink_1.MavLinkPacketField('fuel_pressure', 'fuelPressure', 69, true, 4, 'float', 'kPa'),
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
    constructor() {
        super();
        this.timeUsec = BigInt(0);
        this.flags = EstimatorStatusFlags[Object.keys(EstimatorStatusFlags)[0]];
        this.velRatio = 0;
        this.posHorizRatio = 0;
        this.posVertRatio = 0;
        this.magRatio = 0;
        this.haglRatio = 0;
        this.tasRatio = 0;
        this.posHorizAccuracy = 0;
        this.posVertAccuracy = 0;
    }
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
    constructor() {
        super();
        this.timeUsec = BigInt(0);
        this.windX = 0;
        this.windY = 0;
        this.windZ = 0;
        this.varHoriz = 0;
        this.varVert = 0;
        this.windAlt = 0;
        this.horizAccuracy = 0;
        this.vertAccuracy = 0;
    }
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
    constructor() {
        super();
        this.timeUsec = BigInt(0);
        this.gpsId = 0;
        this.ignoreFlags = GpsInputIgnoreFlags[Object.keys(GpsInputIgnoreFlags)[0]];
        this.timeWeekMs = 0;
        this.timeWeek = 0;
        this.fixType = 0;
        this.lat = 0;
        this.lon = 0;
        this.alt = 0;
        this.hdop = 0;
        this.vdop = 0;
        this.vn = 0;
        this.ve = 0;
        this.vd = 0;
        this.speedAccuracy = 0;
        this.horizAccuracy = 0;
        this.vertAccuracy = 0;
        this.satellitesVisible = 0;
        this.yaw = 0;
    }
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
    constructor() {
        super();
        this.flags = 0;
        this.len = 0;
        this.data = [];
    }
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
    constructor() {
        super();
        this.baseMode = minimal_1.MavModeFlag[Object.keys(minimal_1.MavModeFlag)[0]];
        this.customMode = 0;
        this.landedState = MavLandedState[Object.keys(MavLandedState)[0]];
        this.roll = 0;
        this.pitch = 0;
        this.heading = 0;
        this.throttle = 0;
        this.headingSp = 0;
        this.latitude = 0;
        this.longitude = 0;
        this.altitudeAmsl = 0;
        this.altitudeSp = 0;
        this.airspeed = 0;
        this.airspeedSp = 0;
        this.groundspeed = 0;
        this.climbRate = 0;
        this.gpsNsat = 0;
        this.gpsFixType = GpsFixType[Object.keys(GpsFixType)[0]];
        this.batteryRemaining = 0;
        this.temperature = 0;
        this.temperatureAir = 0;
        this.failsafe = 0;
        this.wpNum = 0;
        this.wpDistance = 0;
    }
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
    constructor() {
        super();
        this.timestamp = 0;
        this.type = minimal_1.MavType[Object.keys(minimal_1.MavType)[0]];
        this.autopilot = minimal_1.MavAutopilot[Object.keys(minimal_1.MavAutopilot)[0]];
        this.customMode = 0;
        this.latitude = 0;
        this.longitude = 0;
        this.altitude = 0;
        this.targetAltitude = 0;
        this.heading = 0;
        this.targetHeading = 0;
        this.targetDistance = 0;
        this.throttle = 0;
        this.airspeed = 0;
        this.airspeedSp = 0;
        this.groundspeed = 0;
        this.windspeed = 0;
        this.windHeading = 0;
        this.eph = 0;
        this.epv = 0;
        this.temperatureAir = 0;
        this.climbRate = 0;
        this.battery = 0;
        this.wpNum = 0;
        this.failureFlags = HlFailureFlag[Object.keys(HlFailureFlag)[0]];
        this.custom0 = 0;
        this.custom1 = 0;
        this.custom2 = 0;
    }
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
    constructor() {
        super();
        this.timeUsec = BigInt(0);
        this.vibrationX = 0;
        this.vibrationY = 0;
        this.vibrationZ = 0;
        this.clipping0 = 0;
        this.clipping1 = 0;
        this.clipping2 = 0;
    }
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
    constructor() {
        super();
        this.latitude = 0;
        this.longitude = 0;
        this.altitude = 0;
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.q = [];
        this.approachX = 0;
        this.approachY = 0;
        this.approachZ = 0;
        this.timeUsec = BigInt(0);
    }
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
 *
 * @deprecated since 2022-02, replaced by MAV_CMD_DO_SET_HOME; This message is being superseded by MAV_CMD_DO_SET_HOME.  Using the command protocols allows a GCS to detect setting of the home position has failed.
 */
class SetHomePosition extends mavlink_1.MavLinkData {
    constructor() {
        super();
        this.targetSystem = 0;
        this.latitude = 0;
        this.longitude = 0;
        this.altitude = 0;
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.q = [];
        this.approachX = 0;
        this.approachY = 0;
        this.approachZ = 0;
        this.timeUsec = BigInt(0);
    }
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
    constructor() {
        super();
        this.messageId = 0;
        this.intervalUs = 0;
    }
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
    constructor() {
        super();
        this.vtolState = MavVtolState[Object.keys(MavVtolState)[0]];
        this.landedState = MavLandedState[Object.keys(MavLandedState)[0]];
    }
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
    constructor() {
        super();
        this.ICAOAddress = 0;
        this.lat = 0;
        this.lon = 0;
        this.altitudeType = AdsbAltitudeType[Object.keys(AdsbAltitudeType)[0]];
        this.altitude = 0;
        this.heading = 0;
        this.horVelocity = 0;
        this.verVelocity = 0;
        this.callsign = '';
        this.emitterType = AdsbEmitterType[Object.keys(AdsbEmitterType)[0]];
        this.tslc = 0;
        this.flags = AdsbFlags[Object.keys(AdsbFlags)[0]];
        this.squawk = 0;
    }
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
    constructor() {
        super();
        this.src = MavCollisionSrc[Object.keys(MavCollisionSrc)[0]];
        this.id = 0;
        this.action = MavCollisionAction[Object.keys(MavCollisionAction)[0]];
        this.threatLevel = MavCollisionThreatLevel[Object.keys(MavCollisionThreatLevel)[0]];
        this.timeToMinimumDelta = 0;
        this.altitudeMinimumDelta = 0;
        this.horizontalMinimumDelta = 0;
    }
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
    constructor() {
        super();
        this.targetNetwork = 0;
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.messageType = 0;
        this.payload = [];
    }
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
    constructor() {
        super();
        this.address = 0;
        this.ver = 0;
        this.type = 0;
        this.value = [];
    }
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
    constructor() {
        super();
        this.name = '';
        this.timeUsec = BigInt(0);
        this.x = 0;
        this.y = 0;
        this.z = 0;
    }
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
    constructor() {
        super();
        this.timeBootMs = 0;
        this.name = '';
        this.value = 0;
    }
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
    constructor() {
        super();
        this.timeBootMs = 0;
        this.name = '';
        this.value = 0;
    }
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
    constructor() {
        super();
        this.severity = MavSeverity[Object.keys(MavSeverity)[0]];
        this.text = '';
        this.id = 0;
        this.chunkSeq = 0;
    }
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
    constructor() {
        super();
        this.timeBootMs = 0;
        this.ind = 0;
        this.value = 0;
    }
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
    constructor() {
        super();
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.secretKey = [];
        this.initialTimestamp = BigInt(0);
    }
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
    constructor() {
        super();
        this.timeBootMs = 0;
        this.lastChangeMs = 0;
        this.state = 0;
    }
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
    constructor() {
        super();
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.tune = '';
        this.tune2 = '';
    }
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
    constructor() {
        super();
        this.timeBootMs = 0;
        this.vendorName = [];
        this.modelName = [];
        this.firmwareVersion = 0;
        this.focalLength = 0;
        this.sensorSizeH = 0;
        this.sensorSizeV = 0;
        this.resolutionH = 0;
        this.resolutionV = 0;
        this.lensId = 0;
        this.flags = CameraCapFlags[Object.keys(CameraCapFlags)[0]];
        this.camDefinitionVersion = 0;
        this.camDefinitionUri = '';
        this.gimbalDeviceId = 0;
    }
}
exports.CameraInformation = CameraInformation;
CameraInformation.MSG_ID = 259;
CameraInformation.MSG_NAME = 'CAMERA_INFORMATION';
CameraInformation.PAYLOAD_LENGTH = 236;
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
    new mavlink_1.MavLinkPacketField('gimbal_device_id', 'gimbalDeviceId', 235, true, 1, 'uint8_t', ''),
];
/**
 * Settings of a camera. Can be requested with a MAV_CMD_REQUEST_MESSAGE command.
 */
class CameraSettings extends mavlink_1.MavLinkData {
    constructor() {
        super();
        this.timeBootMs = 0;
        this.modeId = CameraMode[Object.keys(CameraMode)[0]];
        this.zoomLevel = 0;
        this.focusLevel = 0;
    }
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
    constructor() {
        super();
        this.timeBootMs = 0;
        this.storageId = 0;
        this.storageCount = 0;
        this.status = StorageStatus[Object.keys(StorageStatus)[0]];
        this.totalCapacity = 0;
        this.usedCapacity = 0;
        this.availableCapacity = 0;
        this.readSpeed = 0;
        this.writeSpeed = 0;
    }
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
    constructor() {
        super();
        this.timeBootMs = 0;
        this.imageStatus = 0;
        this.videoStatus = 0;
        this.imageInterval = 0;
        this.recordingTimeMs = 0;
        this.availableCapacity = 0;
        this.imageCount = 0;
    }
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
    constructor() {
        super();
        this.timeBootMs = 0;
        this.timeUtc = BigInt(0);
        this.cameraId = 0;
        this.lat = 0;
        this.lon = 0;
        this.alt = 0;
        this.relativeAlt = 0;
        this.q = [];
        this.imageIndex = 0;
        this.captureResult = 0;
        this.fileUrl = '';
    }
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
    constructor() {
        super();
        this.timeBootMs = 0;
        this.armingTimeUtc = BigInt(0);
        this.takeoffTimeUtc = BigInt(0);
        this.flightUuid = BigInt(0);
    }
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
    constructor() {
        super();
        this.timeBootMs = 0;
        this.roll = 0;
        this.pitch = 0;
        this.yaw = 0;
        this.yawAbsolute = 0;
    }
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
    constructor() {
        super();
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.sequence = 0;
        this.length = 0;
        this.firstMessageOffset = 0;
        this.data = [];
    }
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
    constructor() {
        super();
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.sequence = 0;
        this.length = 0;
        this.firstMessageOffset = 0;
        this.data = [];
    }
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
    constructor() {
        super();
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.sequence = 0;
    }
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
    constructor() {
        super();
        this.streamId = 0;
        this.count = 0;
        this.type = VideoStreamType[Object.keys(VideoStreamType)[0]];
        this.flags = VideoStreamStatusFlags[Object.keys(VideoStreamStatusFlags)[0]];
        this.framerate = 0;
        this.resolutionH = 0;
        this.resolutionV = 0;
        this.bitrate = 0;
        this.rotation = 0;
        this.hfov = 0;
        this.name = '';
        this.uri = '';
    }
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
    constructor() {
        super();
        this.streamId = 0;
        this.flags = VideoStreamStatusFlags[Object.keys(VideoStreamStatusFlags)[0]];
        this.framerate = 0;
        this.resolutionH = 0;
        this.resolutionV = 0;
        this.bitrate = 0;
        this.rotation = 0;
        this.hfov = 0;
    }
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
 * Information about the field of view of a camera. Can be requested with a MAV_CMD_REQUEST_MESSAGE
 * command.
 */
class CameraFovStatus extends mavlink_1.MavLinkData {
    constructor() {
        super();
        this.timeBootMs = 0;
        this.latCamera = 0;
        this.lonCamera = 0;
        this.altCamera = 0;
        this.latImage = 0;
        this.lonImage = 0;
        this.altImage = 0;
        this.q = [];
        this.hfov = 0;
        this.vfov = 0;
    }
}
exports.CameraFovStatus = CameraFovStatus;
CameraFovStatus.MSG_ID = 271;
CameraFovStatus.MSG_NAME = 'CAMERA_FOV_STATUS';
CameraFovStatus.PAYLOAD_LENGTH = 52;
CameraFovStatus.MAGIC_NUMBER = 22;
CameraFovStatus.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_boot_ms', 'timeBootMs', 0, false, 4, 'uint32_t', 'ms'),
    new mavlink_1.MavLinkPacketField('lat_camera', 'latCamera', 4, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('lon_camera', 'lonCamera', 8, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('alt_camera', 'altCamera', 12, false, 4, 'int32_t', 'mm'),
    new mavlink_1.MavLinkPacketField('lat_image', 'latImage', 16, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('lon_image', 'lonImage', 20, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('alt_image', 'altImage', 24, false, 4, 'int32_t', 'mm'),
    new mavlink_1.MavLinkPacketField('q', 'q', 28, false, 4, 'float[]', '', 4),
    new mavlink_1.MavLinkPacketField('hfov', 'hfov', 44, false, 4, 'float', 'deg'),
    new mavlink_1.MavLinkPacketField('vfov', 'vfov', 48, false, 4, 'float', 'deg'),
];
/**
 * Camera tracking status, sent while in active tracking. Use MAV_CMD_SET_MESSAGE_INTERVAL to define
 * message interval.
 */
class CameraTrackingImageStatus extends mavlink_1.MavLinkData {
    constructor() {
        super();
        this.trackingStatus = CameraTrackingStatusFlags[Object.keys(CameraTrackingStatusFlags)[0]];
        this.trackingMode = CameraTrackingMode[Object.keys(CameraTrackingMode)[0]];
        this.targetData = CameraTrackingTargetData[Object.keys(CameraTrackingTargetData)[0]];
        this.pointX = 0;
        this.pointY = 0;
        this.radius = 0;
        this.recTopX = 0;
        this.recTopY = 0;
        this.recBottomX = 0;
        this.recBottomY = 0;
    }
}
exports.CameraTrackingImageStatus = CameraTrackingImageStatus;
CameraTrackingImageStatus.MSG_ID = 275;
CameraTrackingImageStatus.MSG_NAME = 'CAMERA_TRACKING_IMAGE_STATUS';
CameraTrackingImageStatus.PAYLOAD_LENGTH = 31;
CameraTrackingImageStatus.MAGIC_NUMBER = 126;
CameraTrackingImageStatus.FIELDS = [
    new mavlink_1.MavLinkPacketField('point_x', 'pointX', 0, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('point_y', 'pointY', 4, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('radius', 'radius', 8, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('rec_top_x', 'recTopX', 12, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('rec_top_y', 'recTopY', 16, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('rec_bottom_x', 'recBottomX', 20, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('rec_bottom_y', 'recBottomY', 24, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('tracking_status', 'trackingStatus', 28, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('tracking_mode', 'trackingMode', 29, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_data', 'targetData', 30, false, 1, 'uint8_t', ''),
];
/**
 * Camera tracking status, sent while in active tracking. Use MAV_CMD_SET_MESSAGE_INTERVAL to define
 * message interval.
 */
class CameraTrackingGeoStatus extends mavlink_1.MavLinkData {
    constructor() {
        super();
        this.trackingStatus = CameraTrackingStatusFlags[Object.keys(CameraTrackingStatusFlags)[0]];
        this.lat = 0;
        this.lon = 0;
        this.alt = 0;
        this.hAcc = 0;
        this.vAcc = 0;
        this.velN = 0;
        this.velE = 0;
        this.velD = 0;
        this.velAcc = 0;
        this.dist = 0;
        this.hdg = 0;
        this.hdgAcc = 0;
    }
}
exports.CameraTrackingGeoStatus = CameraTrackingGeoStatus;
CameraTrackingGeoStatus.MSG_ID = 276;
CameraTrackingGeoStatus.MSG_NAME = 'CAMERA_TRACKING_GEO_STATUS';
CameraTrackingGeoStatus.PAYLOAD_LENGTH = 49;
CameraTrackingGeoStatus.MAGIC_NUMBER = 18;
CameraTrackingGeoStatus.FIELDS = [
    new mavlink_1.MavLinkPacketField('lat', 'lat', 0, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('lon', 'lon', 4, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('alt', 'alt', 8, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('h_acc', 'hAcc', 12, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('v_acc', 'vAcc', 16, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('vel_n', 'velN', 20, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('vel_e', 'velE', 24, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('vel_d', 'velD', 28, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('vel_acc', 'velAcc', 32, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('dist', 'dist', 36, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('hdg', 'hdg', 40, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('hdg_acc', 'hdgAcc', 44, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('tracking_status', 'trackingStatus', 48, false, 1, 'uint8_t', ''),
];
/**
 * Information about a high level gimbal manager. This message should be requested by a ground station
 * using MAV_CMD_REQUEST_MESSAGE.
 */
class GimbalManagerInformation extends mavlink_1.MavLinkData {
    constructor() {
        super();
        this.timeBootMs = 0;
        this.capFlags = GimbalManagerCapFlags[Object.keys(GimbalManagerCapFlags)[0]];
        this.gimbalDeviceId = 0;
        this.rollMin = 0;
        this.rollMax = 0;
        this.pitchMin = 0;
        this.pitchMax = 0;
        this.yawMin = 0;
        this.yawMax = 0;
    }
}
exports.GimbalManagerInformation = GimbalManagerInformation;
GimbalManagerInformation.MSG_ID = 280;
GimbalManagerInformation.MSG_NAME = 'GIMBAL_MANAGER_INFORMATION';
GimbalManagerInformation.PAYLOAD_LENGTH = 33;
GimbalManagerInformation.MAGIC_NUMBER = 70;
GimbalManagerInformation.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_boot_ms', 'timeBootMs', 0, false, 4, 'uint32_t', 'ms'),
    new mavlink_1.MavLinkPacketField('cap_flags', 'capFlags', 4, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('roll_min', 'rollMin', 8, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('roll_max', 'rollMax', 12, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('pitch_min', 'pitchMin', 16, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('pitch_max', 'pitchMax', 20, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('yaw_min', 'yawMin', 24, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('yaw_max', 'yawMax', 28, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('gimbal_device_id', 'gimbalDeviceId', 32, false, 1, 'uint8_t', ''),
];
/**
 * Current status about a high level gimbal manager. This message should be broadcast at a low regular
 * rate (e.g. 5Hz).
 */
class GimbalManagerStatus extends mavlink_1.MavLinkData {
    constructor() {
        super();
        this.timeBootMs = 0;
        this.flags = GimbalManagerFlags[Object.keys(GimbalManagerFlags)[0]];
        this.gimbalDeviceId = 0;
        this.primaryControlSysid = 0;
        this.primaryControlCompid = 0;
        this.secondaryControlSysid = 0;
        this.secondaryControlCompid = 0;
    }
}
exports.GimbalManagerStatus = GimbalManagerStatus;
GimbalManagerStatus.MSG_ID = 281;
GimbalManagerStatus.MSG_NAME = 'GIMBAL_MANAGER_STATUS';
GimbalManagerStatus.PAYLOAD_LENGTH = 13;
GimbalManagerStatus.MAGIC_NUMBER = 48;
GimbalManagerStatus.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_boot_ms', 'timeBootMs', 0, false, 4, 'uint32_t', 'ms'),
    new mavlink_1.MavLinkPacketField('flags', 'flags', 4, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('gimbal_device_id', 'gimbalDeviceId', 8, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('primary_control_sysid', 'primaryControlSysid', 9, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('primary_control_compid', 'primaryControlCompid', 10, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('secondary_control_sysid', 'secondaryControlSysid', 11, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('secondary_control_compid', 'secondaryControlCompid', 12, false, 1, 'uint8_t', ''),
];
/**
 * High level message to control a gimbal's attitude. This message is to be sent to the gimbal manager
 * (e.g. from a ground station). Angles and rates can be set to NaN according to use case.
 */
class GimbalManagerSetAttitude extends mavlink_1.MavLinkData {
    constructor() {
        super();
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.flags = GimbalManagerFlags[Object.keys(GimbalManagerFlags)[0]];
        this.gimbalDeviceId = 0;
        this.q = [];
        this.angularVelocityX = 0;
        this.angularVelocityY = 0;
        this.angularVelocityZ = 0;
    }
}
exports.GimbalManagerSetAttitude = GimbalManagerSetAttitude;
GimbalManagerSetAttitude.MSG_ID = 282;
GimbalManagerSetAttitude.MSG_NAME = 'GIMBAL_MANAGER_SET_ATTITUDE';
GimbalManagerSetAttitude.PAYLOAD_LENGTH = 35;
GimbalManagerSetAttitude.MAGIC_NUMBER = 123;
GimbalManagerSetAttitude.FIELDS = [
    new mavlink_1.MavLinkPacketField('flags', 'flags', 0, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('q', 'q', 4, false, 4, 'float[]', '', 4),
    new mavlink_1.MavLinkPacketField('angular_velocity_x', 'angularVelocityX', 20, false, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('angular_velocity_y', 'angularVelocityY', 24, false, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('angular_velocity_z', 'angularVelocityZ', 28, false, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 32, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 33, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('gimbal_device_id', 'gimbalDeviceId', 34, false, 1, 'uint8_t', ''),
];
/**
 * Information about a low level gimbal. This message should be requested by the gimbal manager or a
 * ground station using MAV_CMD_REQUEST_MESSAGE. The maximum angles and rates are the limits by
 * hardware. However, the limits by software used are likely different/smaller and dependent on
 * mode/settings/etc..
 */
class GimbalDeviceInformation extends mavlink_1.MavLinkData {
    constructor() {
        super();
        this.timeBootMs = 0;
        this.vendorName = '';
        this.modelName = '';
        this.customName = '';
        this.firmwareVersion = 0;
        this.hardwareVersion = 0;
        this.uid = BigInt(0);
        this.capFlags = GimbalDeviceCapFlags[Object.keys(GimbalDeviceCapFlags)[0]];
        this.customCapFlags = 0;
        this.rollMin = 0;
        this.rollMax = 0;
        this.pitchMin = 0;
        this.pitchMax = 0;
        this.yawMin = 0;
        this.yawMax = 0;
        this.gimbalDeviceId = 0;
    }
}
exports.GimbalDeviceInformation = GimbalDeviceInformation;
GimbalDeviceInformation.MSG_ID = 283;
GimbalDeviceInformation.MSG_NAME = 'GIMBAL_DEVICE_INFORMATION';
GimbalDeviceInformation.PAYLOAD_LENGTH = 145;
GimbalDeviceInformation.MAGIC_NUMBER = 74;
GimbalDeviceInformation.FIELDS = [
    new mavlink_1.MavLinkPacketField('uid', 'uid', 0, false, 8, 'uint64_t', ''),
    new mavlink_1.MavLinkPacketField('time_boot_ms', 'timeBootMs', 8, false, 4, 'uint32_t', 'ms'),
    new mavlink_1.MavLinkPacketField('firmware_version', 'firmwareVersion', 12, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('hardware_version', 'hardwareVersion', 16, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('roll_min', 'rollMin', 20, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('roll_max', 'rollMax', 24, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('pitch_min', 'pitchMin', 28, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('pitch_max', 'pitchMax', 32, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('yaw_min', 'yawMin', 36, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('yaw_max', 'yawMax', 40, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('cap_flags', 'capFlags', 44, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('custom_cap_flags', 'customCapFlags', 46, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('vendor_name', 'vendorName', 48, false, 1, 'char[]', '', 32),
    new mavlink_1.MavLinkPacketField('model_name', 'modelName', 80, false, 1, 'char[]', '', 32),
    new mavlink_1.MavLinkPacketField('custom_name', 'customName', 112, false, 1, 'char[]', '', 32),
    new mavlink_1.MavLinkPacketField('gimbal_device_id', 'gimbalDeviceId', 144, true, 1, 'uint8_t', ''),
];
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
class GimbalDeviceSetAttitude extends mavlink_1.MavLinkData {
    constructor() {
        super();
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.flags = GimbalDeviceFlags[Object.keys(GimbalDeviceFlags)[0]];
        this.q = [];
        this.angularVelocityX = 0;
        this.angularVelocityY = 0;
        this.angularVelocityZ = 0;
    }
}
exports.GimbalDeviceSetAttitude = GimbalDeviceSetAttitude;
GimbalDeviceSetAttitude.MSG_ID = 284;
GimbalDeviceSetAttitude.MSG_NAME = 'GIMBAL_DEVICE_SET_ATTITUDE';
GimbalDeviceSetAttitude.PAYLOAD_LENGTH = 32;
GimbalDeviceSetAttitude.MAGIC_NUMBER = 99;
GimbalDeviceSetAttitude.FIELDS = [
    new mavlink_1.MavLinkPacketField('q', 'q', 0, false, 4, 'float[]', '', 4),
    new mavlink_1.MavLinkPacketField('angular_velocity_x', 'angularVelocityX', 16, false, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('angular_velocity_y', 'angularVelocityY', 20, false, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('angular_velocity_z', 'angularVelocityZ', 24, false, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('flags', 'flags', 28, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 30, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 31, false, 1, 'uint8_t', ''),
];
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
class GimbalDeviceAttitudeStatus extends mavlink_1.MavLinkData {
    constructor() {
        super();
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.timeBootMs = 0;
        this.flags = GimbalDeviceFlags[Object.keys(GimbalDeviceFlags)[0]];
        this.q = [];
        this.angularVelocityX = 0;
        this.angularVelocityY = 0;
        this.angularVelocityZ = 0;
        this.failureFlags = GimbalDeviceErrorFlags[Object.keys(GimbalDeviceErrorFlags)[0]];
        this.deltaYaw = 0;
        this.deltaYawVelocity = 0;
        this.gimbalDeviceId = 0;
    }
}
exports.GimbalDeviceAttitudeStatus = GimbalDeviceAttitudeStatus;
GimbalDeviceAttitudeStatus.MSG_ID = 285;
GimbalDeviceAttitudeStatus.MSG_NAME = 'GIMBAL_DEVICE_ATTITUDE_STATUS';
GimbalDeviceAttitudeStatus.PAYLOAD_LENGTH = 49;
GimbalDeviceAttitudeStatus.MAGIC_NUMBER = 137;
GimbalDeviceAttitudeStatus.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_boot_ms', 'timeBootMs', 0, false, 4, 'uint32_t', 'ms'),
    new mavlink_1.MavLinkPacketField('q', 'q', 4, false, 4, 'float[]', '', 4),
    new mavlink_1.MavLinkPacketField('angular_velocity_x', 'angularVelocityX', 20, false, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('angular_velocity_y', 'angularVelocityY', 24, false, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('angular_velocity_z', 'angularVelocityZ', 28, false, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('failure_flags', 'failureFlags', 32, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('flags', 'flags', 36, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 38, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 39, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('delta_yaw', 'deltaYaw', 40, true, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('delta_yaw_velocity', 'deltaYawVelocity', 44, true, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('gimbal_device_id', 'gimbalDeviceId', 48, true, 1, 'uint8_t', ''),
];
/**
 * Low level message containing autopilot state relevant for a gimbal device. This message is to be
 * sent from the autopilot to the gimbal device component. The data of this message are for the gimbal
 * device's estimator corrections, in particular horizon compensation, as well as indicates autopilot
 * control intentions, e.g. feed forward angular control in the z-axis.
 */
class AutopilotStateForGimbalDevice extends mavlink_1.MavLinkData {
    constructor() {
        super();
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.timeBootUs = BigInt(0);
        this.q = [];
        this.qEstimatedDelayUs = 0;
        this.vx = 0;
        this.vy = 0;
        this.vz = 0;
        this.vEstimatedDelayUs = 0;
        this.feedForwardAngularVelocityZ = 0;
        this.estimatorStatus = EstimatorStatusFlags[Object.keys(EstimatorStatusFlags)[0]];
        this.landedState = MavLandedState[Object.keys(MavLandedState)[0]];
        this.angularVelocityZ = 0;
    }
}
exports.AutopilotStateForGimbalDevice = AutopilotStateForGimbalDevice;
AutopilotStateForGimbalDevice.MSG_ID = 286;
AutopilotStateForGimbalDevice.MSG_NAME = 'AUTOPILOT_STATE_FOR_GIMBAL_DEVICE';
AutopilotStateForGimbalDevice.PAYLOAD_LENGTH = 57;
AutopilotStateForGimbalDevice.MAGIC_NUMBER = 210;
AutopilotStateForGimbalDevice.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_boot_us', 'timeBootUs', 0, false, 8, 'uint64_t', 'us'),
    new mavlink_1.MavLinkPacketField('q', 'q', 8, false, 4, 'float[]', '', 4),
    new mavlink_1.MavLinkPacketField('q_estimated_delay_us', 'qEstimatedDelayUs', 24, false, 4, 'uint32_t', 'us'),
    new mavlink_1.MavLinkPacketField('vx', 'vx', 28, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('vy', 'vy', 32, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('vz', 'vz', 36, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('v_estimated_delay_us', 'vEstimatedDelayUs', 40, false, 4, 'uint32_t', 'us'),
    new mavlink_1.MavLinkPacketField('feed_forward_angular_velocity_z', 'feedForwardAngularVelocityZ', 44, false, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('estimator_status', 'estimatorStatus', 48, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 50, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 51, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('landed_state', 'landedState', 52, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('angular_velocity_z', 'angularVelocityZ', 53, true, 4, 'float', 'rad/s'),
];
/**
 * Set gimbal manager pitch and yaw angles (high rate message). This message is to be sent to the
 * gimbal manager (e.g. from a ground station) and will be ignored by gimbal devices. Angles and rates
 * can be set to NaN according to use case. Use MAV_CMD_DO_GIMBAL_MANAGER_PITCHYAW for low-rate
 * adjustments that require confirmation.
 */
class GimbalManagerSetPitchyaw extends mavlink_1.MavLinkData {
    constructor() {
        super();
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.flags = GimbalManagerFlags[Object.keys(GimbalManagerFlags)[0]];
        this.gimbalDeviceId = 0;
        this.pitch = 0;
        this.yaw = 0;
        this.pitchRate = 0;
        this.yawRate = 0;
    }
}
exports.GimbalManagerSetPitchyaw = GimbalManagerSetPitchyaw;
GimbalManagerSetPitchyaw.MSG_ID = 287;
GimbalManagerSetPitchyaw.MSG_NAME = 'GIMBAL_MANAGER_SET_PITCHYAW';
GimbalManagerSetPitchyaw.PAYLOAD_LENGTH = 23;
GimbalManagerSetPitchyaw.MAGIC_NUMBER = 1;
GimbalManagerSetPitchyaw.FIELDS = [
    new mavlink_1.MavLinkPacketField('flags', 'flags', 0, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('pitch', 'pitch', 4, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('yaw', 'yaw', 8, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('pitch_rate', 'pitchRate', 12, false, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('yaw_rate', 'yawRate', 16, false, 4, 'float', 'rad/s'),
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 20, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 21, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('gimbal_device_id', 'gimbalDeviceId', 22, false, 1, 'uint8_t', ''),
];
/**
 * High level message to control a gimbal manually. The angles or angular rates are unitless; the
 * actual rates will depend on internal gimbal manager settings/configuration (e.g. set by parameters).
 * This message is to be sent to the gimbal manager (e.g. from a ground station). Angles and rates can
 * be set to NaN according to use case.
 */
class GimbalManagerSetManualControl extends mavlink_1.MavLinkData {
    constructor() {
        super();
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.flags = GimbalManagerFlags[Object.keys(GimbalManagerFlags)[0]];
        this.gimbalDeviceId = 0;
        this.pitch = 0;
        this.yaw = 0;
        this.pitchRate = 0;
        this.yawRate = 0;
    }
}
exports.GimbalManagerSetManualControl = GimbalManagerSetManualControl;
GimbalManagerSetManualControl.MSG_ID = 288;
GimbalManagerSetManualControl.MSG_NAME = 'GIMBAL_MANAGER_SET_MANUAL_CONTROL';
GimbalManagerSetManualControl.PAYLOAD_LENGTH = 23;
GimbalManagerSetManualControl.MAGIC_NUMBER = 20;
GimbalManagerSetManualControl.FIELDS = [
    new mavlink_1.MavLinkPacketField('flags', 'flags', 0, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('pitch', 'pitch', 4, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('yaw', 'yaw', 8, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('pitch_rate', 'pitchRate', 12, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('yaw_rate', 'yawRate', 16, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 20, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 21, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('gimbal_device_id', 'gimbalDeviceId', 22, false, 1, 'uint8_t', ''),
];
/**
 * Configure WiFi AP SSID, password, and mode. This message is re-emitted as an acknowledgement by the
 * AP. The message may also be explicitly requested using MAV_CMD_REQUEST_MESSAGE
 */
class WifiConfigAp extends mavlink_1.MavLinkData {
    constructor() {
        super();
        this.ssid = '';
        this.password = '';
    }
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
    constructor() {
        super();
        this.MMSI = 0;
        this.lat = 0;
        this.lon = 0;
        this.COG = 0;
        this.heading = 0;
        this.velocity = 0;
        this.turnRate = 0;
        this.navigationalStatus = AisNavStatus[Object.keys(AisNavStatus)[0]];
        this.type = AisType[Object.keys(AisType)[0]];
        this.dimensionBow = 0;
        this.dimensionStern = 0;
        this.dimensionPort = 0;
        this.dimensionStarboard = 0;
        this.callsign = '';
        this.name = '';
        this.tslc = 0;
        this.flags = AisFlags[Object.keys(AisFlags)[0]];
    }
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
    constructor() {
        super();
        this.timeUsec = BigInt(0);
        this.uptimeSec = 0;
        this.health = UavcanNodeHealth[Object.keys(UavcanNodeHealth)[0]];
        this.mode = UavcanNodeMode[Object.keys(UavcanNodeMode)[0]];
        this.subMode = 0;
        this.vendorSpecificStatusCode = 0;
    }
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
    constructor() {
        super();
        this.timeUsec = BigInt(0);
        this.uptimeSec = 0;
        this.name = '';
        this.hwVersionMajor = 0;
        this.hwVersionMinor = 0;
        this.hwUniqueId = [];
        this.swVersionMajor = 0;
        this.swVersionMinor = 0;
        this.swVcsCommit = 0;
    }
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
    constructor() {
        super();
        this.timeUsec = BigInt(0);
        this.sensorType = MavDistanceSensor[Object.keys(MavDistanceSensor)[0]];
        this.distances = [];
        this.increment = 0;
        this.minDistance = 0;
        this.maxDistance = 0;
        this.incrementF = 0;
        this.angleOffset = 0;
        this.frame = MavFrame[Object.keys(MavFrame)[0]];
    }
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
    constructor() {
        super();
        this.timeUsec = BigInt(0);
        this.frameId = MavFrame[Object.keys(MavFrame)[0]];
        this.childFrameId = MavFrame[Object.keys(MavFrame)[0]];
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.q = [];
        this.vx = 0;
        this.vy = 0;
        this.vz = 0;
        this.rollspeed = 0;
        this.pitchspeed = 0;
        this.yawspeed = 0;
        this.poseCovariance = [];
        this.velocityCovariance = [];
        this.resetCounter = 0;
        this.estimatorType = MavEstimatorType[Object.keys(MavEstimatorType)[0]];
        this.quality = 0;
    }
}
exports.Odometry = Odometry;
Odometry.MSG_ID = 331;
Odometry.MSG_NAME = 'ODOMETRY';
Odometry.PAYLOAD_LENGTH = 233;
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
    new mavlink_1.MavLinkPacketField('quality', 'quality', 232, true, 1, 'int8_t', '%'),
];
/**
 * Status of the Iridium SBD link.
 */
class IsbdLinkStatus extends mavlink_1.MavLinkData {
    constructor() {
        super();
        this.timestamp = BigInt(0);
        this.lastHeartbeat = BigInt(0);
        this.failedSessions = 0;
        this.successfulSessions = 0;
        this.signalQuality = 0;
        this.ringPending = 0;
        this.txSessionPending = 0;
        this.rxSessionPending = 0;
    }
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
 * The global position resulting from GPS and sensor fusion.
 */
class UtmGlobalPosition extends mavlink_1.MavLinkData {
    constructor() {
        super();
        this.time = BigInt(0);
        this.uasId = [];
        this.lat = 0;
        this.lon = 0;
        this.alt = 0;
        this.relativeAlt = 0;
        this.vx = 0;
        this.vy = 0;
        this.vz = 0;
        this.hAcc = 0;
        this.vAcc = 0;
        this.velAcc = 0;
        this.nextLat = 0;
        this.nextLon = 0;
        this.nextAlt = 0;
        this.updateRate = 0;
        this.flightState = UtmFlightState[Object.keys(UtmFlightState)[0]];
        this.flags = UtmDataAvailFlags[Object.keys(UtmDataAvailFlags)[0]];
    }
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
    constructor() {
        super();
        this.timeUsec = BigInt(0);
        this.name = '';
        this.arrayId = 0;
        this.data = [];
    }
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
    constructor() {
        super();
        this.id = 0;
        this.batteryFunction = MavBatteryFunction[Object.keys(MavBatteryFunction)[0]];
        this.type = MavBatteryType[Object.keys(MavBatteryType)[0]];
        this.capacityFullSpecification = 0;
        this.capacityFull = 0;
        this.cycleCount = 0;
        this.serialNumber = '';
        this.deviceName = '';
        this.weight = 0;
        this.dischargeMinimumVoltage = 0;
        this.chargingMinimumVoltage = 0;
        this.restingMinimumVoltage = 0;
        this.chargingMaximumVoltage = 0;
        this.cellsInSeries = 0;
        this.dischargeMaximumCurrent = 0;
        this.dischargeMaximumBurstCurrent = 0;
        this.manufactureDate = '';
    }
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
    constructor() {
        super();
        this.status = MavGeneratorStatusFlag[Object.keys(MavGeneratorStatusFlag)[0]];
        this.generatorSpeed = 0;
        this.batteryCurrent = 0;
        this.loadCurrent = 0;
        this.powerGenerated = 0;
        this.busVoltage = 0;
        this.rectifierTemperature = 0;
        this.batCurrentSetpoint = 0;
        this.generatorTemperature = 0;
        this.runtime = 0;
        this.timeUntilMaintenance = 0;
    }
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
    constructor() {
        super();
        this.timeUsec = BigInt(0);
        this.active = 0;
        this.actuator = [];
    }
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
    constructor() {
        super();
        this.timestamp = 0;
        this.aircraftId = 0;
        this.squadronId = 0;
        this.stateNav = SwarmVehicleState[Object.keys(SwarmVehicleState)[0]];
        this.effectiveRadius = 0;
        this.lat = 0;
        this.lon = 0;
        this.altMSL = 0;
        this.latTarget = 0;
        this.lonTarget = 0;
        this.altMSLTarget = 0;
        this.vehicleType = SwarmVehicleType[Object.keys(SwarmVehicleType)[0]];
    }
}
exports.SwarmVehicle = SwarmVehicle;
SwarmVehicle.MSG_ID = 2820;
SwarmVehicle.MSG_NAME = 'SWARM_VEHICLE';
SwarmVehicle.PAYLOAD_LENGTH = 38;
SwarmVehicle.MAGIC_NUMBER = 215;
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
    new mavlink_1.MavLinkPacketField('vehicle_type', 'vehicleType', 37, false, 1, 'uint8_t', ''),
];
/**
 * Position of an aircraft in swarm with data that updates less often.
 */
class SwarmVehicleSlow extends mavlink_1.MavLinkData {
    constructor() {
        super();
        this.timestamp = 0;
        this.aircraftId = 0;
        this.squadronId = 0;
        this.stateNav = SwarmVehicleState[Object.keys(SwarmVehicleState)[0]];
        this.stateCoverage = SwarmCoverageStatus[Object.keys(SwarmCoverageStatus)[0]];
        this.stateRoi = SwarmRoiStatus[Object.keys(SwarmRoiStatus)[0]];
        this.speed = 0;
        this.cog = 0;
        this.effectiveRadius = 0;
        this.latTarget = 0;
        this.lonTarget = 0;
        this.altMSLTarget = 0;
        this.vehicleType = SwarmVehicleType[Object.keys(SwarmVehicleType)[0]];
        this.ROICrc = 0;
        this.ROITimestamp = 0;
    }
}
exports.SwarmVehicleSlow = SwarmVehicleSlow;
SwarmVehicleSlow.MSG_ID = 2821;
SwarmVehicleSlow.MSG_NAME = 'SWARM_VEHICLE_SLOW';
SwarmVehicleSlow.PAYLOAD_LENGTH = 40;
SwarmVehicleSlow.MAGIC_NUMBER = 10;
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
    new mavlink_1.MavLinkPacketField('vehicle_type', 'vehicleType', 39, false, 1, 'uint8_t', ''),
];
/**
 * Region of Interest points. Array of int32_t lat/lng pairs of polygon points.
 */
class SwarmVehicleRoi extends mavlink_1.MavLinkData {
    constructor() {
        super();
        this.idTarget = 0;
        this.crc = 0;
        this.timestampS = 0;
        this.pointCount = 0;
        this.points = [];
    }
}
exports.SwarmVehicleRoi = SwarmVehicleRoi;
SwarmVehicleRoi.MSG_ID = 2822;
SwarmVehicleRoi.MSG_NAME = 'SWARM_VEHICLE_ROI';
SwarmVehicleRoi.PAYLOAD_LENGTH = 240;
SwarmVehicleRoi.MAGIC_NUMBER = 225;
SwarmVehicleRoi.FIELDS = [
    new mavlink_1.MavLinkPacketField('id_target', 'idTarget', 0, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('crc', 'crc', 4, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('timestamp_s', 'timestampS', 8, false, 4, 'uint32_t', 's'),
    new mavlink_1.MavLinkPacketField('point_count', 'pointCount', 12, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('points', 'points', 16, false, 4, 'int32_t[]', 'degE7', 56),
];
/**
 * Reports the on/off state of relays, as controlled by MAV_CMD_DO_SET_RELAY.
 */
class RelayStatus extends mavlink_1.MavLinkData {
    constructor() {
        super();
        this.timeBootMs = 0;
        this.on = 0;
        this.present = 0;
    }
}
exports.RelayStatus = RelayStatus;
RelayStatus.MSG_ID = 376;
RelayStatus.MSG_NAME = 'RELAY_STATUS';
RelayStatus.PAYLOAD_LENGTH = 8;
RelayStatus.MAGIC_NUMBER = 199;
RelayStatus.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_boot_ms', 'timeBootMs', 0, false, 4, 'uint32_t', 'ms'),
    new mavlink_1.MavLinkPacketField('on', 'on', 4, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('present', 'present', 6, false, 2, 'uint16_t', ''),
];
/**
 * Message for transporting "arbitrary" variable-length data from one component to another (broadcast
 * is not forbidden, but discouraged). The encoding of the data is usually extension specific, i.e.
 * determined by the source, and is usually not documented as part of the MAVLink specification.
 */
class Tunnel extends mavlink_1.MavLinkData {
    constructor() {
        super();
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.payloadType = MavTunnelPayloadType[Object.keys(MavTunnelPayloadType)[0]];
        this.payloadLength = 0;
        this.payload = [];
    }
}
exports.Tunnel = Tunnel;
Tunnel.MSG_ID = 385;
Tunnel.MSG_NAME = 'TUNNEL';
Tunnel.PAYLOAD_LENGTH = 133;
Tunnel.MAGIC_NUMBER = 147;
Tunnel.FIELDS = [
    new mavlink_1.MavLinkPacketField('payload_type', 'payloadType', 0, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 2, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 3, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('payload_length', 'payloadLength', 4, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('payload', 'payload', 5, false, 1, 'uint8_t[]', '', 128),
];
/**
 * A forwarded CAN frame as requested by MAV_CMD_CAN_FORWARD.
 */
class CanFrame extends mavlink_1.MavLinkData {
    constructor() {
        super();
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.bus = 0;
        this.len = 0;
        this.id = 0;
        this.data = [];
    }
}
exports.CanFrame = CanFrame;
CanFrame.MSG_ID = 386;
CanFrame.MSG_NAME = 'CAN_FRAME';
CanFrame.PAYLOAD_LENGTH = 16;
CanFrame.MAGIC_NUMBER = 132;
CanFrame.FIELDS = [
    new mavlink_1.MavLinkPacketField('id', 'id', 0, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 4, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 5, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('bus', 'bus', 6, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('len', 'len', 7, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('data', 'data', 8, false, 1, 'uint8_t[]', '', 8),
];
/**
 * A forwarded CANFD frame as requested by MAV_CMD_CAN_FORWARD. These are separated from CAN_FRAME as
 * they need different handling (eg. TAO handling)
 */
class CanfdFrame extends mavlink_1.MavLinkData {
    constructor() {
        super();
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.bus = 0;
        this.len = 0;
        this.id = 0;
        this.data = [];
    }
}
exports.CanfdFrame = CanfdFrame;
CanfdFrame.MSG_ID = 387;
CanfdFrame.MSG_NAME = 'CANFD_FRAME';
CanfdFrame.PAYLOAD_LENGTH = 72;
CanfdFrame.MAGIC_NUMBER = 4;
CanfdFrame.FIELDS = [
    new mavlink_1.MavLinkPacketField('id', 'id', 0, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 4, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 5, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('bus', 'bus', 6, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('len', 'len', 7, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('data', 'data', 8, false, 1, 'uint8_t[]', '', 64),
];
/**
 * Modify the filter of what CAN messages to forward over the mavlink. This can be used to make CAN
 * forwarding work well on low bandwith links. The filtering is applied on bits 8 to 24 of the CAN id
 * (2nd and 3rd bytes) which corresponds to the DroneCAN message ID for DroneCAN. Filters with more
 * than 16 IDs can be constructed by sending multiple CAN_FILTER_MODIFY messages.
 */
class CanFilterModify extends mavlink_1.MavLinkData {
    constructor() {
        super();
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.bus = 0;
        this.operation = CanFilterOp[Object.keys(CanFilterOp)[0]];
        this.numIds = 0;
        this.ids = [];
    }
}
exports.CanFilterModify = CanFilterModify;
CanFilterModify.MSG_ID = 388;
CanFilterModify.MSG_NAME = 'CAN_FILTER_MODIFY';
CanFilterModify.PAYLOAD_LENGTH = 37;
CanFilterModify.MAGIC_NUMBER = 8;
CanFilterModify.FIELDS = [
    new mavlink_1.MavLinkPacketField('ids', 'ids', 0, false, 2, 'uint16_t[]', '', 16),
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 32, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 33, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('bus', 'bus', 34, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('operation', 'operation', 35, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('num_ids', 'numIds', 36, false, 1, 'uint8_t', ''),
];
/**
 * Cumulative distance traveled for each reported wheel.
 */
class WheelDistance extends mavlink_1.MavLinkData {
    constructor() {
        super();
        this.timeUsec = BigInt(0);
        this.count = 0;
        this.distance = [];
    }
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
 * Status from the transmitter telling the flight controller if the remote ID system is ready for
 * arming.
 */
class OpenDroneIdArmStatus extends mavlink_1.MavLinkData {
    constructor() {
        super();
        this.status = MavOdidArmStatus[Object.keys(MavOdidArmStatus)[0]];
        this.error = '';
    }
}
exports.OpenDroneIdArmStatus = OpenDroneIdArmStatus;
OpenDroneIdArmStatus.MSG_ID = 12918;
OpenDroneIdArmStatus.MSG_NAME = 'OPEN_DRONE_ID_ARM_STATUS';
OpenDroneIdArmStatus.PAYLOAD_LENGTH = 51;
OpenDroneIdArmStatus.MAGIC_NUMBER = 139;
OpenDroneIdArmStatus.FIELDS = [
    new mavlink_1.MavLinkPacketField('status', 'status', 0, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('error', 'error', 1, false, 1, 'char[]', '', 50),
];
/**
 * Update the data in the OPEN_DRONE_ID_SYSTEM message with new location information. This can be sent
 * to update the location information for the operator when no other information in the SYSTEM message
 * has changed. This message allows for efficient operation on radio links which have limited uplink
 * bandwidth while meeting requirements for update frequency of the operator location.
 */
class OpenDroneIdSystemUpdate extends mavlink_1.MavLinkData {
    constructor() {
        super();
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.operatorLatitude = 0;
        this.operatorLongitude = 0;
        this.operatorAltitudeGeo = 0;
        this.timestamp = 0;
    }
}
exports.OpenDroneIdSystemUpdate = OpenDroneIdSystemUpdate;
OpenDroneIdSystemUpdate.MSG_ID = 12919;
OpenDroneIdSystemUpdate.MSG_NAME = 'OPEN_DRONE_ID_SYSTEM_UPDATE';
OpenDroneIdSystemUpdate.PAYLOAD_LENGTH = 18;
OpenDroneIdSystemUpdate.MAGIC_NUMBER = 7;
OpenDroneIdSystemUpdate.FIELDS = [
    new mavlink_1.MavLinkPacketField('operator_latitude', 'operatorLatitude', 0, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('operator_longitude', 'operatorLongitude', 4, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('operator_altitude_geo', 'operatorAltitudeGeo', 8, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('timestamp', 'timestamp', 12, false, 4, 'uint32_t', 's'),
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 16, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 17, false, 1, 'uint8_t', ''),
];
/**
 * Temperature and humidity from hygrometer.
 */
class HygrometerSensor extends mavlink_1.MavLinkData {
    constructor() {
        super();
        this.id = 0;
        this.temperature = 0;
        this.humidity = 0;
    }
}
exports.HygrometerSensor = HygrometerSensor;
HygrometerSensor.MSG_ID = 12920;
HygrometerSensor.MSG_NAME = 'HYGROMETER_SENSOR';
HygrometerSensor.PAYLOAD_LENGTH = 5;
HygrometerSensor.MAGIC_NUMBER = 20;
HygrometerSensor.FIELDS = [
    new mavlink_1.MavLinkPacketField('temperature', 'temperature', 0, false, 2, 'int16_t', 'cdegC'),
    new mavlink_1.MavLinkPacketField('humidity', 'humidity', 2, false, 2, 'uint16_t', 'c%'),
    new mavlink_1.MavLinkPacketField('id', 'id', 4, false, 1, 'uint8_t', ''),
];
/**
 * Navigate to waypoint.
 *
 * This command has location.
 * This command is destination.
 */
class NavWaypointCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.NAV_WAYPOINT;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Hold time. (ignored by fixed wing, time to stay at waypoint for rotary wing)
     *
     * @units s
     * @min: 0
     */
    get hold() {
        return this._param1;
    }
    set hold(value) {
        this._param1 = value;
    }
    /**
     * Acceptance radius (if the sphere with this radius is hit, the waypoint counts as reached)
     *
     * @units m
     * @min: 0
     */
    get acceptRadius() {
        return this._param2;
    }
    set acceptRadius(value) {
        this._param2 = value;
    }
    /**
     * 0 to pass through the WP, if > 0 radius to pass by WP. Positive value for clockwise orbit, negative
     * value for counter-clockwise orbit. Allows trajectory control.
     *
     * @units m
     */
    get passRadius() {
        return this._param3;
    }
    set passRadius(value) {
        this._param3 = value;
    }
    /**
     * Desired yaw angle at waypoint (rotary wing). NaN to use the current system yaw heading mode (e.g.
     * yaw towards next waypoint, yaw to home, etc.).
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
     * Altitude
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
exports.NavWaypointCommand = NavWaypointCommand;
/**
 * Loiter around this waypoint an unlimited amount of time
 *
 * This command has location.
 * This command is destination.
 */
class NavLoiterUnlimCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.NAV_LOITER_UNLIM;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Loiter radius around waypoint for forward-only moving vehicles (not multicopters). If positive
     * loiter clockwise, else counter-clockwise
     *
     * @units m
     */
    get radius() {
        return this._param3;
    }
    set radius(value) {
        this._param3 = value;
    }
    /**
     * Desired yaw angle. NaN to use the current system yaw heading mode (e.g. yaw towards next waypoint,
     * yaw to home, etc.).
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
     * Altitude
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
exports.NavLoiterUnlimCommand = NavLoiterUnlimCommand;
/**
 * Loiter around this waypoint for X turns
 *
 * This command has location.
 * This command is destination.
 */
class NavLoiterTurnsCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.NAV_LOITER_TURNS;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Number of turns.
     *
     * @min: 0
     */
    get turns() {
        return this._param1;
    }
    set turns(value) {
        this._param1 = value;
    }
    /**
     * Radius around waypoint. If positive loiter clockwise, else counter-clockwise
     *
     * @units m
     */
    get radius() {
        return this._param3;
    }
    set radius(value) {
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
     * Altitude
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
exports.NavLoiterTurnsCommand = NavLoiterTurnsCommand;
/**
 * Loiter around this waypoint for X seconds
 *
 * This command has location.
 * This command is destination.
 */
class NavLoiterTimeCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.NAV_LOITER_TIME;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Loiter time.
     *
     * @units s
     * @min: 0
     */
    get time() {
        return this._param1;
    }
    set time(value) {
        this._param1 = value;
    }
    /**
     * Radius around waypoint. If positive loiter clockwise, else counter-clockwise.
     *
     * @units m
     */
    get radius() {
        return this._param3;
    }
    set radius(value) {
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
     * Altitude
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
exports.NavLoiterTimeCommand = NavLoiterTimeCommand;
/**
 * Return to launch location
 */
class NavReturnToLaunchCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.NAV_RETURN_TO_LAUNCH;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
}
exports.NavReturnToLaunchCommand = NavReturnToLaunchCommand;
/**
 * Land at location.
 *
 * This command has location.
 * This command is destination.
 */
class NavLandCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.NAV_LAND;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Minimum target altitude if landing is aborted (0 = undefined/use system default).
     *
     * @units m
     */
    get abortAlt() {
        return this._param1;
    }
    set abortAlt(value) {
        this._param1 = value;
    }
    /**
     * Precision land mode.
     */
    get landMode() {
        return this._param2;
    }
    set landMode(value) {
        this._param2 = value;
    }
    /**
     * Desired yaw angle. NaN to use the current system yaw heading mode (e.g. yaw towards next waypoint,
     * yaw to home, etc.).
     *
     * @units deg
     */
    get yawAngle() {
        return this._param4;
    }
    set yawAngle(value) {
        this._param4 = value;
    }
    /**
     * Latitude.
     */
    get latitude() {
        return this._param5;
    }
    set latitude(value) {
        this._param5 = value;
    }
    /**
     * Longitude.
     */
    get longitude() {
        return this._param6;
    }
    set longitude(value) {
        this._param6 = value;
    }
    /**
     * Landing altitude (ground level in current frame).
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
exports.NavLandCommand = NavLandCommand;
/**
 * Takeoff from ground / hand. Vehicles that support multiple takeoff modes (e.g. VTOL quadplane)
 * should take off using the currently configured mode.
 *
 * This command has location.
 * This command is destination.
 */
class NavTakeoffCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.NAV_TAKEOFF;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Minimum pitch (if airspeed sensor present), desired pitch without sensor
     *
     * @units deg
     */
    get pitch() {
        return this._param1;
    }
    set pitch(value) {
        this._param1 = value;
    }
    /**
     * Yaw angle (if magnetometer present), ignored without magnetometer. NaN to use the current system yaw
     * heading mode (e.g. yaw towards next waypoint, yaw to home, etc.).
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
     * Altitude
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
exports.NavTakeoffCommand = NavTakeoffCommand;
/**
 * Land at local position (local frame only)
 *
 * This command has location.
 * This command is destination.
 */
class NavLandLocalCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.NAV_LAND_LOCAL;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Landing target number (if available)
     *
     * @min: 0
     * @increment: 1
     */
    get target() {
        return this._param1;
    }
    set target(value) {
        this._param1 = value;
    }
    /**
     * Maximum accepted offset from desired landing position - computed magnitude from spherical
     * coordinates: d = sqrt(x^2 + y^2 + z^2), which gives the maximum accepted distance between the
     * desired landing position and the position where the vehicle is about to land
     *
     * @units m
     * @min: 0
     */
    get offset() {
        return this._param2;
    }
    set offset(value) {
        this._param2 = value;
    }
    /**
     * Landing descend rate
     *
     * @units m/s
     */
    get descendRate() {
        return this._param3;
    }
    set descendRate(value) {
        this._param3 = value;
    }
    /**
     * Desired yaw angle
     *
     * @units rad
     */
    get yaw() {
        return this._param4;
    }
    set yaw(value) {
        this._param4 = value;
    }
    /**
     * Y-axis position
     *
     * @units m
     */
    get yPosition() {
        return this._param5;
    }
    set yPosition(value) {
        this._param5 = value;
    }
    /**
     * X-axis position
     *
     * @units m
     */
    get xPosition() {
        return this._param6;
    }
    set xPosition(value) {
        this._param6 = value;
    }
    /**
     * Z-axis / ground level position
     *
     * @units m
     */
    get zPosition() {
        return this._param7;
    }
    set zPosition(value) {
        this._param7 = value;
    }
}
exports.NavLandLocalCommand = NavLandLocalCommand;
/**
 * Takeoff from local position (local frame only)
 *
 * This command has location.
 * This command is destination.
 */
class NavTakeoffLocalCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.NAV_TAKEOFF_LOCAL;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Minimum pitch (if airspeed sensor present), desired pitch without sensor
     *
     * @units rad
     */
    get pitch() {
        return this._param1;
    }
    set pitch(value) {
        this._param1 = value;
    }
    /**
     * Takeoff ascend rate
     *
     * @units m/s
     */
    get ascendRate() {
        return this._param3;
    }
    set ascendRate(value) {
        this._param3 = value;
    }
    /**
     * Yaw angle (if magnetometer or another yaw estimation source present), ignored without one of these
     *
     * @units rad
     */
    get yaw() {
        return this._param4;
    }
    set yaw(value) {
        this._param4 = value;
    }
    /**
     * Y-axis position
     *
     * @units m
     */
    get yPosition() {
        return this._param5;
    }
    set yPosition(value) {
        this._param5 = value;
    }
    /**
     * X-axis position
     *
     * @units m
     */
    get xPosition() {
        return this._param6;
    }
    set xPosition(value) {
        this._param6 = value;
    }
    /**
     * Z-axis position
     *
     * @units m
     */
    get zPosition() {
        return this._param7;
    }
    set zPosition(value) {
        this._param7 = value;
    }
}
exports.NavTakeoffLocalCommand = NavTakeoffLocalCommand;
/**
 * Vehicle following, i.e. this waypoint represents the position of a moving vehicle
 *
 * This command has location.
 */
class NavFollowCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.NAV_FOLLOW;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Following logic to use (e.g. loitering or sinusoidal following) - depends on specific autopilot
     * implementation
     *
     * @increment: 1
     */
    get following() {
        return this._param1;
    }
    set following(value) {
        this._param1 = value;
    }
    /**
     * Ground speed of vehicle to be followed
     *
     * @units m/s
     */
    get groundSpeed() {
        return this._param2;
    }
    set groundSpeed(value) {
        this._param2 = value;
    }
    /**
     * Radius around waypoint. If positive loiter clockwise, else counter-clockwise
     *
     * @units m
     */
    get radius() {
        return this._param3;
    }
    set radius(value) {
        this._param3 = value;
    }
    /**
     * Desired yaw angle.
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
     * Altitude
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
exports.NavFollowCommand = NavFollowCommand;
/**
 * Continue on the current course and climb/descend to specified altitude. When the altitude is reached
 * continue to the next command (i.e., don't proceed to the next command until the desired altitude is
 * reached.
 *
 * This command is destination.
 */
class NavContinueAndChangeAltCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.NAV_CONTINUE_AND_CHANGE_ALT;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Climb or Descend (0 = Neutral, command completes when within 5m of this command's altitude, 1 =
     * Climbing, command completes when at or above this command's altitude, 2 = Descending, command
     * completes when at or below this command's altitude.
     *
     * @min: 0
     * @max: 2
     * @increment: 1
     */
    get action() {
        return this._param1;
    }
    set action(value) {
        this._param1 = value;
    }
    /**
     * Desired altitude
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
exports.NavContinueAndChangeAltCommand = NavContinueAndChangeAltCommand;
/**
 * Begin loiter at the specified Latitude and Longitude. If Lat=Lon=0, then loiter at the current
 * position. Don't consider the navigation command complete (don't leave loiter) until the altitude has
 * been reached. Additionally, if the Heading Required parameter is non-zero the aircraft will not
 * leave the loiter until heading toward the next waypoint.
 *
 * This command has location.
 * This command is destination.
 */
class NavLoiterToAltCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.NAV_LOITER_TO_ALT;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Heading Required (0 = False)
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get headingRequired() {
        return this._param1;
    }
    set headingRequired(value) {
        this._param1 = value;
    }
    /**
     * Loiter radius around waypoint for forward-only moving vehicles (not multicopters). If positive
     * loiter clockwise, negative counter-clockwise, 0 means no change to standard loiter.
     *
     * @units m
     */
    get radius() {
        return this._param2;
    }
    set radius(value) {
        this._param2 = value;
    }
    /**
     * Forward moving aircraft this sets exit xtrack location: 0 for center of loiter wp, 1 for exit
     * location
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get xtrackLocation() {
        return this._param4;
    }
    set xtrackLocation(value) {
        this._param4 = value;
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
     * Altitude
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
exports.NavLoiterToAltCommand = NavLoiterToAltCommand;
/**
 * Begin following a target
 */
class DoFollowCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.DO_FOLLOW;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * System ID (of the FOLLOW_TARGET beacon). Send 0 to disable follow-me and return to the default
     * position hold mode.
     *
     * @min: 0
     * @max: 255
     * @increment: 1
     */
    get systemId() {
        return this._param1;
    }
    set systemId(value) {
        this._param1 = value;
    }
    /**
     * Altitude mode: 0: Keep current altitude, 1: keep altitude difference to target, 2: go to a fixed
     * altitude above home.
     *
     * @min: 0
     * @max: 2
     * @increment: 1
     */
    get altitudeMode() {
        return this._param4;
    }
    set altitudeMode(value) {
        this._param4 = value;
    }
    /**
     * Altitude above home. (used if mode=2)
     *
     * @units m
     */
    get altitude() {
        return this._param5;
    }
    set altitude(value) {
        this._param5 = value;
    }
    /**
     * Time to land in which the MAV should go to the default position hold mode after a message RX
     * timeout.
     *
     * @units s
     * @min: 0
     */
    get timeToLand() {
        return this._param7;
    }
    set timeToLand(value) {
        this._param7 = value;
    }
}
exports.DoFollowCommand = DoFollowCommand;
/**
 * Reposition the MAV after a follow target command has been sent
 */
class DoFollowRepositionCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.DO_FOLLOW_REPOSITION;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Camera q1 (where 0 is on the ray from the camera to the tracking device)
     */
    get cameraQ1() {
        return this._param1;
    }
    set cameraQ1(value) {
        this._param1 = value;
    }
    /**
     * Camera q2
     */
    get cameraQ2() {
        return this._param2;
    }
    set cameraQ2(value) {
        this._param2 = value;
    }
    /**
     * Camera q3
     */
    get cameraQ3() {
        return this._param3;
    }
    set cameraQ3(value) {
        this._param3 = value;
    }
    /**
     * Camera q4
     */
    get cameraQ4() {
        return this._param4;
    }
    set cameraQ4(value) {
        this._param4 = value;
    }
    /**
     * altitude offset from target
     *
     * @units m
     */
    get altitudeOffset() {
        return this._param5;
    }
    set altitudeOffset(value) {
        this._param5 = value;
    }
    /**
     * X offset from target
     *
     * @units m
     */
    get xOffset() {
        return this._param6;
    }
    set xOffset(value) {
        this._param6 = value;
    }
    /**
     * Y offset from target
     *
     * @units m
     */
    get yOffset() {
        return this._param7;
    }
    set yOffset(value) {
        this._param7 = value;
    }
}
exports.DoFollowRepositionCommand = DoFollowRepositionCommand;
/**
 * Sets the region of interest (ROI) for a sensor set or the vehicle itself. This can then be used by
 * the vehicle's control system to control the vehicle attitude and the attitude of various sensors
 * such as cameras.
 *
 * This command has location.
 */
class NavRoiCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.NAV_ROI;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Region of interest mode.
     */
    get roiMode() {
        return this._param1;
    }
    set roiMode(value) {
        this._param1 = value;
    }
    /**
     * Waypoint index/ target ID. (see MAV_ROI enum)
     *
     * @min: 0
     * @increment: 1
     */
    get wpIndex() {
        return this._param2;
    }
    set wpIndex(value) {
        this._param2 = value;
    }
    /**
     * ROI index (allows a vehicle to manage multiple ROI's)
     *
     * @min: 0
     * @increment: 1
     */
    get roiIndex() {
        return this._param3;
    }
    set roiIndex(value) {
        this._param3 = value;
    }
    /**
     * x the location of the fixed ROI (see MAV_FRAME)
     */
    get x() {
        return this._param5;
    }
    set x(value) {
        this._param5 = value;
    }
    /**
     * y
     */
    get y() {
        return this._param6;
    }
    set y(value) {
        this._param6 = value;
    }
    /**
     * z
     */
    get z() {
        return this._param7;
    }
    set z(value) {
        this._param7 = value;
    }
}
exports.NavRoiCommand = NavRoiCommand;
/**
 * Control autonomous path planning on the MAV.
 *
 * This command has location.
 * This command is destination.
 */
class NavPathplanningCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.NAV_PATHPLANNING;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * 0: Disable local obstacle avoidance / local path planning (without resetting map), 1: Enable local
     * path planning, 2: Enable and reset local path planning
     *
     * @min: 0
     * @max: 2
     * @increment: 1
     */
    get localCtrl() {
        return this._param1;
    }
    set localCtrl(value) {
        this._param1 = value;
    }
    /**
     * 0: Disable full path planning (without resetting map), 1: Enable, 2: Enable and reset map/occupancy
     * grid, 3: Enable and reset planned route, but not occupancy grid
     *
     * @min: 0
     * @max: 3
     * @increment: 1
     */
    get globalCtrl() {
        return this._param2;
    }
    set globalCtrl(value) {
        this._param2 = value;
    }
    /**
     * Yaw angle at goal
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
     * Latitude/X of goal
     */
    get latitude() {
        return this._param5;
    }
    set latitude(value) {
        this._param5 = value;
    }
    /**
     * Longitude/Y of goal
     */
    get longitude() {
        return this._param6;
    }
    set longitude(value) {
        this._param6 = value;
    }
    /**
     * Altitude/Z of goal
     */
    get altitude() {
        return this._param7;
    }
    set altitude(value) {
        this._param7 = value;
    }
}
exports.NavPathplanningCommand = NavPathplanningCommand;
/**
 * Navigate to waypoint using a spline path.
 *
 * This command has location.
 * This command is destination.
 */
class NavSplineWaypointCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.NAV_SPLINE_WAYPOINT;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Hold time. (ignored by fixed wing, time to stay at waypoint for rotary wing)
     *
     * @units s
     * @min: 0
     */
    get hold() {
        return this._param1;
    }
    set hold(value) {
        this._param1 = value;
    }
    /**
     * Latitude/X of goal
     */
    get latitude() {
        return this._param5;
    }
    set latitude(value) {
        this._param5 = value;
    }
    /**
     * Longitude/Y of goal
     */
    get longitude() {
        return this._param6;
    }
    set longitude(value) {
        this._param6 = value;
    }
    /**
     * Altitude/Z of goal
     */
    get altitude() {
        return this._param7;
    }
    set altitude(value) {
        this._param7 = value;
    }
}
exports.NavSplineWaypointCommand = NavSplineWaypointCommand;
/**
 * Takeoff from ground using VTOL mode, and transition to forward flight with specified heading. The
 * command should be ignored by vehicles that dont support both VTOL and fixed-wing flight
 * (multicopters, boats,etc.).
 *
 * This command has location.
 * This command is destination.
 */
class NavVtolTakeoffCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.NAV_VTOL_TAKEOFF;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Front transition heading.
     */
    get transitionHeading() {
        return this._param2;
    }
    set transitionHeading(value) {
        this._param2 = value;
    }
    /**
     * Yaw angle. NaN to use the current system yaw heading mode (e.g. yaw towards next waypoint, yaw to
     * home, etc.).
     *
     * @units deg
     */
    get yawAngle() {
        return this._param4;
    }
    set yawAngle(value) {
        this._param4 = value;
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
     * Altitude
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
exports.NavVtolTakeoffCommand = NavVtolTakeoffCommand;
/**
 * Land using VTOL mode
 *
 * This command has location.
 * This command is destination.
 */
class NavVtolLandCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.NAV_VTOL_LAND;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Approach altitude (with the same reference as the Altitude field). NaN if unspecified.
     *
     * @units m
     */
    get approachAltitude() {
        return this._param3;
    }
    set approachAltitude(value) {
        this._param3 = value;
    }
    /**
     * Yaw angle. NaN to use the current system yaw heading mode (e.g. yaw towards next waypoint, yaw to
     * home, etc.).
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
     * Altitude (ground level)
     *
     * @units m
     */
    get groundAltitude() {
        return this._param7;
    }
    set groundAltitude(value) {
        this._param7 = value;
    }
}
exports.NavVtolLandCommand = NavVtolLandCommand;
/**
 * hand control over to an external controller
 */
class NavGuidedEnableCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.NAV_GUIDED_ENABLE;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * On / Off (> 0.5f on)
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get enable() {
        return this._param1;
    }
    set enable(value) {
        this._param1 = value;
    }
}
exports.NavGuidedEnableCommand = NavGuidedEnableCommand;
/**
 * Delay the next navigation command a number of seconds or until a specified time
 */
class NavDelayCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.NAV_DELAY;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Delay (-1 to enable time-of-day fields)
     *
     * @units s
     * @min: -1
     * @increment: 1
     */
    get delay() {
        return this._param1;
    }
    set delay(value) {
        this._param1 = value;
    }
    /**
     * hour (24h format, UTC, -1 to ignore)
     *
     * @min: -1
     * @max: 23
     * @increment: 1
     */
    get hour() {
        return this._param2;
    }
    set hour(value) {
        this._param2 = value;
    }
    /**
     * minute (24h format, UTC, -1 to ignore)
     *
     * @min: -1
     * @max: 59
     * @increment: 1
     */
    get minute() {
        return this._param3;
    }
    set minute(value) {
        this._param3 = value;
    }
    /**
     * second (24h format, UTC, -1 to ignore)
     *
     * @min: -1
     * @max: 59
     * @increment: 1
     */
    get second() {
        return this._param4;
    }
    set second(value) {
        this._param4 = value;
    }
}
exports.NavDelayCommand = NavDelayCommand;
/**
 * Descend and place payload. Vehicle moves to specified location, descends until it detects a hanging
 * payload has reached the ground, and then releases the payload. If ground is not detected before the
 * reaching the maximum descent value (param1), the command will complete without releasing the
 * payload.
 *
 * This command has location.
 * This command is destination.
 */
class NavPayloadPlaceCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.NAV_PAYLOAD_PLACE;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Maximum distance to descend.
     *
     * @units m
     * @min: 0
     */
    get maxDescent() {
        return this._param1;
    }
    set maxDescent(value) {
        this._param1 = value;
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
     * Altitude
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
exports.NavPayloadPlaceCommand = NavPayloadPlaceCommand;
/**
 * NOP - This command is only used to mark the upper limit of the NAV/ACTION commands in the
 * enumeration
 */
class NavLastCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.NAV_LAST;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
}
exports.NavLastCommand = NavLastCommand;
/**
 * Delay mission state machine.
 */
class ConditionDelayCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.CONDITION_DELAY;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Delay
     *
     * @units s
     * @min: 0
     */
    get delay() {
        return this._param1;
    }
    set delay(value) {
        this._param1 = value;
    }
}
exports.ConditionDelayCommand = ConditionDelayCommand;
/**
 * Ascend/descend to target altitude at specified rate. Delay mission state machine until desired
 * altitude reached.
 *
 * This command is destination.
 */
class ConditionChangeAltCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.CONDITION_CHANGE_ALT;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Descent / Ascend rate.
     *
     * @units m/s
     */
    get rate() {
        return this._param1;
    }
    set rate(value) {
        this._param1 = value;
    }
    /**
     * Target Altitude
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
exports.ConditionChangeAltCommand = ConditionChangeAltCommand;
/**
 * Delay mission state machine until within desired distance of next NAV point.
 */
class ConditionDistanceCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.CONDITION_DISTANCE;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Distance.
     *
     * @units m
     * @min: 0
     */
    get distance() {
        return this._param1;
    }
    set distance(value) {
        this._param1 = value;
    }
}
exports.ConditionDistanceCommand = ConditionDistanceCommand;
/**
 * Reach a certain target angle.
 */
class ConditionYawCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.CONDITION_YAW;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * target angle [0-360]. Absolute angles: 0 is north. Relative angle: 0 is initial yaw. Direction set
     * by param3.
     *
     * @units deg
     * @min: 0
     * @max: 360
     */
    get angle() {
        return this._param1;
    }
    set angle(value) {
        this._param1 = value;
    }
    /**
     * angular speed
     *
     * @units deg/s
     * @min: 0
     */
    get angularSpeed() {
        return this._param2;
    }
    set angularSpeed(value) {
        this._param2 = value;
    }
    /**
     * direction: -1: counter clockwise, 0: shortest direction, 1: clockwise
     *
     * @min: -1
     * @max: 1
     * @increment: 1
     */
    get direction() {
        return this._param3;
    }
    set direction(value) {
        this._param3 = value;
    }
    /**
     * 0: absolute angle, 1: relative offset
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get relative() {
        return this._param4;
    }
    set relative(value) {
        this._param4 = value;
    }
}
exports.ConditionYawCommand = ConditionYawCommand;
/**
 * NOP - This command is only used to mark the upper limit of the CONDITION commands in the enumeration
 */
class ConditionLastCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.CONDITION_LAST;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
}
exports.ConditionLastCommand = ConditionLastCommand;
/**
 * Set system mode.
 */
class DoSetModeCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.DO_SET_MODE;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Mode
     */
    get mode() {
        return this._param1;
    }
    set mode(value) {
        this._param1 = value;
    }
    /**
     * Custom mode - this is system specific, please refer to the individual autopilot specifications for
     * details.
     */
    get customMode() {
        return this._param2;
    }
    set customMode(value) {
        this._param2 = value;
    }
    /**
     * Custom sub mode - this is system specific, please refer to the individual autopilot specifications
     * for details.
     */
    get customSubmode() {
        return this._param3;
    }
    set customSubmode(value) {
        this._param3 = value;
    }
}
exports.DoSetModeCommand = DoSetModeCommand;
/**
 * Jump to the desired command in the mission list. Repeat this action only the specified number of
 * times
 */
class DoJumpCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.DO_JUMP;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Sequence number
     *
     * @min: 0
     * @increment: 1
     */
    get number() {
        return this._param1;
    }
    set number(value) {
        this._param1 = value;
    }
    /**
     * Repeat count
     *
     * @min: 0
     * @increment: 1
     */
    get repeat() {
        return this._param2;
    }
    set repeat(value) {
        this._param2 = value;
    }
}
exports.DoJumpCommand = DoJumpCommand;
/**
 * Change speed and/or throttle set points
 */
class DoChangeSpeedCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.DO_CHANGE_SPEED;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Speed type of value set in param2 (such as airspeed, ground speed, and so on)
     */
    get speedType() {
        return this._param1;
    }
    set speedType(value) {
        this._param1 = value;
    }
    /**
     * Speed (-1 indicates no change, -2 indicates return to default vehicle speed)
     *
     * @units m/s
     * @min: -2
     */
    get speed() {
        return this._param2;
    }
    set speed(value) {
        this._param2 = value;
    }
    /**
     * Throttle (-1 indicates no change, -2 indicates return to default vehicle throttle value)
     *
     * @units %
     * @min: -2
     */
    get throttle() {
        return this._param3;
    }
    set throttle(value) {
        this._param3 = value;
    }
    /**
     * 0: absolute, 1: relative
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get relative() {
        return this._param4;
    }
    set relative(value) {
        this._param4 = value;
    }
}
exports.DoChangeSpeedCommand = DoChangeSpeedCommand;
/**
 * Changes the home location either to the current location or a specified location.
 *
 * This command has location.
 */
class DoSetHomeCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.DO_SET_HOME;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Use current (1=use current location, 0=use specified location)
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get useCurrent() {
        return this._param1;
    }
    set useCurrent(value) {
        this._param1 = value;
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
     * Altitude
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
exports.DoSetHomeCommand = DoSetHomeCommand;
/**
 * Set a system parameter. Caution! Use of this command requires knowledge of the numeric enumeration
 * value of the parameter.
 */
class DoSetParameterCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.DO_SET_PARAMETER;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Parameter number
     *
     * @min: 0
     * @increment: 1
     */
    get number() {
        return this._param1;
    }
    set number(value) {
        this._param1 = value;
    }
    /**
     * Parameter value
     */
    get value() {
        return this._param2;
    }
    set value(value) {
        this._param2 = value;
    }
}
exports.DoSetParameterCommand = DoSetParameterCommand;
/**
 * Set a relay to a condition.
 */
class DoSetRelayCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.DO_SET_RELAY;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Relay instance number.
     *
     * @min: 0
     * @increment: 1
     */
    get instance() {
        return this._param1;
    }
    set instance(value) {
        this._param1 = value;
    }
    /**
     * Setting. (1=on, 0=off, others possible depending on system hardware)
     *
     * @min: 0
     * @increment: 1
     */
    get setting() {
        return this._param2;
    }
    set setting(value) {
        this._param2 = value;
    }
}
exports.DoSetRelayCommand = DoSetRelayCommand;
/**
 * Cycle a relay on and off for a desired number of cycles with a desired period.
 */
class DoRepeatRelayCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.DO_REPEAT_RELAY;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Relay instance number.
     *
     * @min: 0
     * @increment: 1
     */
    get instance() {
        return this._param1;
    }
    set instance(value) {
        this._param1 = value;
    }
    /**
     * Cycle count.
     *
     * @min: 1
     * @increment: 1
     */
    get count() {
        return this._param2;
    }
    set count(value) {
        this._param2 = value;
    }
    /**
     * Cycle time.
     *
     * @units s
     * @min: 0
     */
    get time() {
        return this._param3;
    }
    set time(value) {
        this._param3 = value;
    }
}
exports.DoRepeatRelayCommand = DoRepeatRelayCommand;
/**
 * Set a servo to a desired PWM value.
 */
class DoSetServoCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.DO_SET_SERVO;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Servo instance number.
     *
     * @min: 0
     * @increment: 1
     */
    get instance() {
        return this._param1;
    }
    set instance(value) {
        this._param1 = value;
    }
    /**
     * Pulse Width Modulation.
     *
     * @units us
     * @min: 0
     * @increment: 1
     */
    get pwm() {
        return this._param2;
    }
    set pwm(value) {
        this._param2 = value;
    }
}
exports.DoSetServoCommand = DoSetServoCommand;
/**
 * Cycle a between its nominal setting and a desired PWM for a desired number of cycles with a desired
 * period.
 */
class DoRepeatServoCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.DO_REPEAT_SERVO;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Servo instance number.
     *
     * @min: 0
     * @increment: 1
     */
    get instance() {
        return this._param1;
    }
    set instance(value) {
        this._param1 = value;
    }
    /**
     * Pulse Width Modulation.
     *
     * @units us
     * @min: 0
     * @increment: 1
     */
    get pwm() {
        return this._param2;
    }
    set pwm(value) {
        this._param2 = value;
    }
    /**
     * Cycle count.
     *
     * @min: 1
     * @increment: 1
     */
    get count() {
        return this._param3;
    }
    set count(value) {
        this._param3 = value;
    }
    /**
     * Cycle time.
     *
     * @units s
     * @min: 0
     */
    get time() {
        return this._param4;
    }
    set time(value) {
        this._param4 = value;
    }
}
exports.DoRepeatServoCommand = DoRepeatServoCommand;
/**
 * Terminate flight immediately
 */
class DoFlightterminationCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.DO_FLIGHTTERMINATION;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Flight termination activated if > 0.5
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get terminate() {
        return this._param1;
    }
    set terminate(value) {
        this._param1 = value;
    }
}
exports.DoFlightterminationCommand = DoFlightterminationCommand;
/**
 * Change altitude set point.
 */
class DoChangeAltitudeCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.DO_CHANGE_ALTITUDE;
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
     * Frame of new altitude.
     */
    get frame() {
        return this._param2;
    }
    set frame(value) {
        this._param2 = value;
    }
}
exports.DoChangeAltitudeCommand = DoChangeAltitudeCommand;
/**
 * Mission command to perform a landing. This is used as a marker in a mission to tell the autopilot
 * where a sequence of mission items that represents a landing starts. 	 It may also be sent via a
 * COMMAND_LONG to trigger a landing, in which case the nearest (geographically) landing sequence in
 * the mission will be used. 	 The Latitude/Longitude/Altitude is optional, and may be set to 0 if not
 * needed. If specified then it will be used to help find the closest landing sequence.
 *
 * This command has location.
 */
class DoLandStartCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.DO_LAND_START;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
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
     * Altitude
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
exports.DoLandStartCommand = DoLandStartCommand;
/**
 * Mission command to perform a landing from a rally point.
 */
class DoRallyLandCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.DO_RALLY_LAND;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Break altitude
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
     * Landing speed
     *
     * @units m/s
     */
    get speed() {
        return this._param2;
    }
    set speed(value) {
        this._param2 = value;
    }
}
exports.DoRallyLandCommand = DoRallyLandCommand;
/**
 * Mission command to safely abort an autonomous landing.
 */
class DoGoAroundCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.DO_GO_AROUND;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Altitude
     *
     * @units m
     */
    get altitude() {
        return this._param1;
    }
    set altitude(value) {
        this._param1 = value;
    }
}
exports.DoGoAroundCommand = DoGoAroundCommand;
/**
 * Reposition the vehicle to a specific WGS84 global position.
 *
 * This command has location.
 * This command is destination.
 */
class DoRepositionCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.DO_REPOSITION;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Ground speed, less than 0 (-1) for default
     *
     * @units m/s
     * @min: -1
     */
    get speed() {
        return this._param1;
    }
    set speed(value) {
        this._param1 = value;
    }
    /**
     * Bitmask of option flags.
     */
    get bitmask() {
        return this._param2;
    }
    set bitmask(value) {
        this._param2 = value;
    }
    /**
     * Loiter radius for planes. Positive values only, direction is controlled by Yaw value. A value of
     * zero or NaN is ignored.
     *
     * @units m
     */
    get radius() {
        return this._param3;
    }
    set radius(value) {
        this._param3 = value;
    }
    /**
     * Yaw heading. NaN to use the current system yaw heading mode (e.g. yaw towards next waypoint, yaw to
     * home, etc.). For planes indicates loiter direction (0: clockwise, 1: counter clockwise)
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
     * Altitude
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
exports.DoRepositionCommand = DoRepositionCommand;
/**
 * If in a GPS controlled position mode, hold the current position or continue.
 */
class DoPauseContinueCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.DO_PAUSE_CONTINUE;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * 0: Pause current mission or reposition command, hold current position. 1: Continue mission. A VTOL
     * capable vehicle should enter hover mode (multicopter and VTOL planes). A plane should loiter with
     * the default loiter radius.
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get continue() {
        return this._param1;
    }
    set continue(value) {
        this._param1 = value;
    }
}
exports.DoPauseContinueCommand = DoPauseContinueCommand;
/**
 * Set moving direction to forward or reverse.
 */
class DoSetReverseCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.DO_SET_REVERSE;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Direction (0=Forward, 1=Reverse)
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get reverse() {
        return this._param1;
    }
    set reverse(value) {
        this._param1 = value;
    }
}
exports.DoSetReverseCommand = DoSetReverseCommand;
/**
 * Sets the region of interest (ROI) to a location. This can then be used by the vehicle's control
 * system to control the vehicle attitude and the attitude of various sensors such as cameras.
 *
 * This command has location.
 */
class DoSetRoiLocationCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.DO_SET_ROI_LOCATION;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Latitude of ROI location
     */
    get latitude() {
        return this._param5;
    }
    set latitude(value) {
        this._param5 = value;
    }
    /**
     * Longitude of ROI location
     */
    get longitude() {
        return this._param6;
    }
    set longitude(value) {
        this._param6 = value;
    }
    /**
     * Altitude of ROI location
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
exports.DoSetRoiLocationCommand = DoSetRoiLocationCommand;
/**
 * Sets the region of interest (ROI) to be toward next waypoint, with optional pitch/roll/yaw offset.
 * This can then be used by the vehicle's control system to control the vehicle attitude and the
 * attitude of various sensors such as cameras.
 */
class DoSetRoiWpnextOffsetCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.DO_SET_ROI_WPNEXT_OFFSET;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Pitch offset from next waypoint, positive pitching up
     */
    get pitchOffset() {
        return this._param5;
    }
    set pitchOffset(value) {
        this._param5 = value;
    }
    /**
     * Roll offset from next waypoint, positive rolling to the right
     */
    get rollOffset() {
        return this._param6;
    }
    set rollOffset(value) {
        this._param6 = value;
    }
    /**
     * Yaw offset from next waypoint, positive yawing to the right
     */
    get yawOffset() {
        return this._param7;
    }
    set yawOffset(value) {
        this._param7 = value;
    }
}
exports.DoSetRoiWpnextOffsetCommand = DoSetRoiWpnextOffsetCommand;
/**
 * Cancels any previous ROI command returning the vehicle/sensors to default flight characteristics.
 * This can then be used by the vehicle's control system to control the vehicle attitude and the
 * attitude of various sensors such as cameras.
 */
class DoSetRoiNoneCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.DO_SET_ROI_NONE;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
}
exports.DoSetRoiNoneCommand = DoSetRoiNoneCommand;
/**
 * Mount tracks system with specified system ID. Determination of target vehicle position may be done
 * with GLOBAL_POSITION_INT or any other means.
 */
class DoSetRoiSysidCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.DO_SET_ROI_SYSID;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * System ID
     *
     * @min: 1
     * @max: 255
     * @increment: 1
     */
    get systemId() {
        return this._param1;
    }
    set systemId(value) {
        this._param1 = value;
    }
}
exports.DoSetRoiSysidCommand = DoSetRoiSysidCommand;
/**
 * Control onboard camera system.
 */
class DoControlVideoCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.DO_CONTROL_VIDEO;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Camera ID (-1 for all)
     *
     * @min: -1
     * @increment: 1
     */
    get id() {
        return this._param1;
    }
    set id(value) {
        this._param1 = value;
    }
    /**
     * Transmission: 0: disabled, 1: enabled compressed, 2: enabled raw
     *
     * @min: 0
     * @max: 2
     * @increment: 1
     */
    get transmission() {
        return this._param2;
    }
    set transmission(value) {
        this._param2 = value;
    }
    /**
     * Transmission mode: 0: video stream, >0: single images every n seconds
     *
     * @units s
     * @min: 0
     */
    get interval() {
        return this._param3;
    }
    set interval(value) {
        this._param3 = value;
    }
    /**
     * Recording: 0: disabled, 1: enabled compressed, 2: enabled raw
     *
     * @min: 0
     * @max: 2
     * @increment: 1
     */
    get recording() {
        return this._param4;
    }
    set recording(value) {
        this._param4 = value;
    }
}
exports.DoControlVideoCommand = DoControlVideoCommand;
/**
 * Sets the region of interest (ROI) for a sensor set or the vehicle itself. This can then be used by
 * the vehicle's control system to control the vehicle attitude and the attitude of various sensors
 * such as cameras.
 *
 * This command has location.
 */
class DoSetRoiCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.DO_SET_ROI;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Region of interest mode.
     */
    get roiMode() {
        return this._param1;
    }
    set roiMode(value) {
        this._param1 = value;
    }
    /**
     * Waypoint index/ target ID (depends on param 1).
     *
     * @min: 0
     * @increment: 1
     */
    get wpIndex() {
        return this._param2;
    }
    set wpIndex(value) {
        this._param2 = value;
    }
    /**
     * Region of interest index. (allows a vehicle to manage multiple ROI's)
     *
     * @min: 0
     * @increment: 1
     */
    get roiIndex() {
        return this._param3;
    }
    set roiIndex(value) {
        this._param3 = value;
    }
}
exports.DoSetRoiCommand = DoSetRoiCommand;
/**
 * Configure digital camera. This is a fallback message for systems that have not yet implemented
 * PARAM_EXT_XXX messages and camera definition files (see
 * https://mavlink.io/en/services/camera_def.html ).
 */
class DoDigicamConfigureCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.DO_DIGICAM_CONFIGURE;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Modes: P, TV, AV, M, Etc.
     *
     * @min: 0
     * @increment: 1
     */
    get mode() {
        return this._param1;
    }
    set mode(value) {
        this._param1 = value;
    }
    /**
     * Shutter speed: Divisor number for one second.
     *
     * @min: 0
     * @increment: 1
     */
    get shutterSpeed() {
        return this._param2;
    }
    set shutterSpeed(value) {
        this._param2 = value;
    }
    /**
     * Aperture: F stop number.
     *
     * @min: 0
     */
    get aperture() {
        return this._param3;
    }
    set aperture(value) {
        this._param3 = value;
    }
    /**
     * ISO number e.g. 80, 100, 200, Etc.
     *
     * @min: 0
     * @increment: 1
     */
    get iso() {
        return this._param4;
    }
    set iso(value) {
        this._param4 = value;
    }
    /**
     * Exposure type enumerator.
     */
    get exposure() {
        return this._param5;
    }
    set exposure(value) {
        this._param5 = value;
    }
    /**
     * Command Identity.
     */
    get cmdIdentity() {
        return this._param6;
    }
    set cmdIdentity(value) {
        this._param6 = value;
    }
    /**
     * Main engine cut-off time before camera trigger. (0 means no cut-off)
     *
     * @units ds
     * @min: 0
     * @increment: 1
     */
    get engineCutOff() {
        return this._param7;
    }
    set engineCutOff(value) {
        this._param7 = value;
    }
}
exports.DoDigicamConfigureCommand = DoDigicamConfigureCommand;
/**
 * Control digital camera. This is a fallback message for systems that have not yet implemented
 * PARAM_EXT_XXX messages and camera definition files (see
 * https://mavlink.io/en/services/camera_def.html ).
 */
class DoDigicamControlCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.DO_DIGICAM_CONTROL;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Session control e.g. show/hide lens
     */
    get sessionControl() {
        return this._param1;
    }
    set sessionControl(value) {
        this._param1 = value;
    }
    /**
     * Zoom's absolute position
     */
    get zoomAbsolute() {
        return this._param2;
    }
    set zoomAbsolute(value) {
        this._param2 = value;
    }
    /**
     * Zooming step value to offset zoom from the current position
     */
    get zoomRelative() {
        return this._param3;
    }
    set zoomRelative(value) {
        this._param3 = value;
    }
    /**
     * Focus Locking, Unlocking or Re-locking
     */
    get focus() {
        return this._param4;
    }
    set focus(value) {
        this._param4 = value;
    }
    /**
     * Shooting Command
     */
    get shootCommand() {
        return this._param5;
    }
    set shootCommand(value) {
        this._param5 = value;
    }
    /**
     * Command Identity
     */
    get cmdIdentity() {
        return this._param6;
    }
    set cmdIdentity(value) {
        this._param6 = value;
    }
    /**
     * Test shot identifier. If set to 1, image will only be captured, but not counted towards internal
     * frame count.
     */
    get shotId() {
        return this._param7;
    }
    set shotId(value) {
        this._param7 = value;
    }
}
exports.DoDigicamControlCommand = DoDigicamControlCommand;
/**
 * Mission command to configure a camera or antenna mount
 */
class DoMountConfigureCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.DO_MOUNT_CONFIGURE;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Mount operation mode
     */
    get mode() {
        return this._param1;
    }
    set mode(value) {
        this._param1 = value;
    }
    /**
     * stabilize roll? (1 = yes, 0 = no)
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get stabilizeRoll() {
        return this._param2;
    }
    set stabilizeRoll(value) {
        this._param2 = value;
    }
    /**
     * stabilize pitch? (1 = yes, 0 = no)
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get stabilizePitch() {
        return this._param3;
    }
    set stabilizePitch(value) {
        this._param3 = value;
    }
    /**
     * stabilize yaw? (1 = yes, 0 = no)
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get stabilizeYaw() {
        return this._param4;
    }
    set stabilizeYaw(value) {
        this._param4 = value;
    }
}
exports.DoMountConfigureCommand = DoMountConfigureCommand;
/**
 * Mission command to control a camera or antenna mount
 */
class DoMountControlCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.DO_MOUNT_CONTROL;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Mount mode.
     */
    get mode() {
        return this._param7;
    }
    set mode(value) {
        this._param7 = value;
    }
}
exports.DoMountControlCommand = DoMountControlCommand;
/**
 * Mission command to set camera trigger distance for this flight. The camera is triggered each time
 * this distance is exceeded. This command can also be used to set the shutter integration time for the
 * camera.
 */
class DoSetCamTriggDistCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.DO_SET_CAM_TRIGG_DIST;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Camera trigger distance. 0 to stop triggering.
     *
     * @units m
     * @min: 0
     */
    get distance() {
        return this._param1;
    }
    set distance(value) {
        this._param1 = value;
    }
    /**
     * Camera shutter integration time. -1 or 0 to ignore
     *
     * @units ms
     * @min: -1
     * @increment: 1
     */
    get shutter() {
        return this._param2;
    }
    set shutter(value) {
        this._param2 = value;
    }
    /**
     * Trigger camera once immediately. (0 = no trigger, 1 = trigger)
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get trigger() {
        return this._param3;
    }
    set trigger(value) {
        this._param3 = value;
    }
}
exports.DoSetCamTriggDistCommand = DoSetCamTriggDistCommand;
/**
 * Mission command to enable the geofence
 */
class DoFenceEnableCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.DO_FENCE_ENABLE;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * enable? (0=disable, 1=enable, 2=disable_floor_only)
     *
     * @min: 0
     * @max: 2
     * @increment: 1
     */
    get enable() {
        return this._param1;
    }
    set enable(value) {
        this._param1 = value;
    }
    /**
     * Fence types to enable or disable as a bitmask. A value of 0 indicates that all fences should be
     * enabled or disabled. This parameter is ignored if param 1 has the value 2
     */
    get types() {
        return this._param2;
    }
    set types(value) {
        this._param2 = value;
    }
}
exports.DoFenceEnableCommand = DoFenceEnableCommand;
/**
 * Mission item/command to release a parachute or enable/disable auto release.
 */
class DoParachuteCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.DO_PARACHUTE;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Action
     */
    get action() {
        return this._param1;
    }
    set action(value) {
        this._param1 = value;
    }
}
exports.DoParachuteCommand = DoParachuteCommand;
/**
 * Mission command to perform motor test.
 */
class DoMotorTestCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.DO_MOTOR_TEST;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Motor instance number. (from 1 to max number of motors on the vehicle)
     *
     * @min: 1
     * @increment: 1
     */
    get instance() {
        return this._param1;
    }
    set instance(value) {
        this._param1 = value;
    }
    /**
     * Throttle type.
     */
    get throttleType() {
        return this._param2;
    }
    set throttleType(value) {
        this._param2 = value;
    }
    /**
     * Throttle.
     */
    get throttle() {
        return this._param3;
    }
    set throttle(value) {
        this._param3 = value;
    }
    /**
     * Timeout.
     *
     * @units s
     * @min: 0
     */
    get timeout() {
        return this._param4;
    }
    set timeout(value) {
        this._param4 = value;
    }
    /**
     * Motor count. (number of motors to test to test in sequence, waiting for the timeout above between
     * them; 0=1 motor, 1=1 motor, 2=2 motors...)
     *
     * @min: 0
     * @increment: 1
     */
    get motorCount() {
        return this._param5;
    }
    set motorCount(value) {
        this._param5 = value;
    }
    /**
     * Motor test order.
     */
    get testOrder() {
        return this._param6;
    }
    set testOrder(value) {
        this._param6 = value;
    }
}
exports.DoMotorTestCommand = DoMotorTestCommand;
/**
 * Change to/from inverted flight.
 */
class DoInvertedFlightCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.DO_INVERTED_FLIGHT;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Inverted flight. (0=normal, 1=inverted)
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get inverted() {
        return this._param1;
    }
    set inverted(value) {
        this._param1 = value;
    }
}
exports.DoInvertedFlightCommand = DoInvertedFlightCommand;
/**
 * Mission command to operate a gripper.
 */
class DoGripperCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.DO_GRIPPER;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Gripper instance number.
     *
     * @min: 1
     * @increment: 1
     */
    get instance() {
        return this._param1;
    }
    set instance(value) {
        this._param1 = value;
    }
    /**
     * Gripper action to perform.
     */
    get action() {
        return this._param2;
    }
    set action(value) {
        this._param2 = value;
    }
}
exports.DoGripperCommand = DoGripperCommand;
/**
 * Enable/disable autotune.
 */
class DoAutotuneEnableCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.DO_AUTOTUNE_ENABLE;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Enable (1: enable, 0:disable).
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get enable() {
        return this._param1;
    }
    set enable(value) {
        this._param1 = value;
    }
    /**
     * Specify which axes are autotuned. 0 indicates autopilot default settings.
     */
    get axis() {
        return this._param2;
    }
    set axis(value) {
        this._param2 = value;
    }
}
exports.DoAutotuneEnableCommand = DoAutotuneEnableCommand;
/**
 * Sets a desired vehicle turn angle and speed change.
 */
class NavSetYawSpeedCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.NAV_SET_YAW_SPEED;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Yaw angle to adjust steering by.
     *
     * @units deg
     */
    get yaw() {
        return this._param1;
    }
    set yaw(value) {
        this._param1 = value;
    }
    /**
     * Speed.
     *
     * @units m/s
     */
    get speed() {
        return this._param2;
    }
    set speed(value) {
        this._param2 = value;
    }
    /**
     * Final angle. (0=absolute, 1=relative)
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get angle() {
        return this._param3;
    }
    set angle(value) {
        this._param3 = value;
    }
}
exports.NavSetYawSpeedCommand = NavSetYawSpeedCommand;
/**
 * Mission command to set camera trigger interval for this flight. If triggering is enabled, the camera
 * is triggered each time this interval expires. This command can also be used to set the shutter
 * integration time for the camera.
 */
class DoSetCamTriggIntervalCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.DO_SET_CAM_TRIGG_INTERVAL;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Camera trigger cycle time. -1 or 0 to ignore.
     *
     * @units ms
     * @min: -1
     * @increment: 1
     */
    get triggerCycle() {
        return this._param1;
    }
    set triggerCycle(value) {
        this._param1 = value;
    }
    /**
     * Camera shutter integration time. Should be less than trigger cycle time. -1 or 0 to ignore.
     *
     * @units ms
     * @min: -1
     * @increment: 1
     */
    get shutterIntegration() {
        return this._param2;
    }
    set shutterIntegration(value) {
        this._param2 = value;
    }
}
exports.DoSetCamTriggIntervalCommand = DoSetCamTriggIntervalCommand;
/**
 * Mission command to control a camera or antenna mount, using a quaternion as reference.
 */
class DoMountControlQuatCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.DO_MOUNT_CONTROL_QUAT;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * quaternion param q1, w (1 in null-rotation)
     */
    get q1() {
        return this._param1;
    }
    set q1(value) {
        this._param1 = value;
    }
    /**
     * quaternion param q2, x (0 in null-rotation)
     */
    get q2() {
        return this._param2;
    }
    set q2(value) {
        this._param2 = value;
    }
    /**
     * quaternion param q3, y (0 in null-rotation)
     */
    get q3() {
        return this._param3;
    }
    set q3(value) {
        this._param3 = value;
    }
    /**
     * quaternion param q4, z (0 in null-rotation)
     */
    get q4() {
        return this._param4;
    }
    set q4(value) {
        this._param4 = value;
    }
}
exports.DoMountControlQuatCommand = DoMountControlQuatCommand;
/**
 * set id of master controller
 */
class DoGuidedMasterCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.DO_GUIDED_MASTER;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * System ID
     *
     * @min: 0
     * @max: 255
     * @increment: 1
     */
    get systemId() {
        return this._param1;
    }
    set systemId(value) {
        this._param1 = value;
    }
    /**
     * Component ID
     *
     * @min: 0
     * @max: 255
     * @increment: 1
     */
    get componentId() {
        return this._param2;
    }
    set componentId(value) {
        this._param2 = value;
    }
}
exports.DoGuidedMasterCommand = DoGuidedMasterCommand;
/**
 * Set limits for external control
 */
class DoGuidedLimitsCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.DO_GUIDED_LIMITS;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Timeout - maximum time that external controller will be allowed to control vehicle. 0 means no
     * timeout.
     *
     * @units s
     * @min: 0
     */
    get timeout() {
        return this._param1;
    }
    set timeout(value) {
        this._param1 = value;
    }
    /**
     * Altitude (MSL) min - if vehicle moves below this alt, the command will be aborted and the mission
     * will continue. 0 means no lower altitude limit.
     *
     * @units m
     */
    get minAltitude() {
        return this._param2;
    }
    set minAltitude(value) {
        this._param2 = value;
    }
    /**
     * Altitude (MSL) max - if vehicle moves above this alt, the command will be aborted and the mission
     * will continue. 0 means no upper altitude limit.
     *
     * @units m
     */
    get maxAltitude() {
        return this._param3;
    }
    set maxAltitude(value) {
        this._param3 = value;
    }
    /**
     * Horizontal move limit - if vehicle moves more than this distance from its location at the moment the
     * command was executed, the command will be aborted and the mission will continue. 0 means no
     * horizontal move limit.
     *
     * @units m
     * @min: 0
     */
    get horizMoveLimit() {
        return this._param4;
    }
    set horizMoveLimit(value) {
        this._param4 = value;
    }
}
exports.DoGuidedLimitsCommand = DoGuidedLimitsCommand;
/**
 * Control vehicle engine. This is interpreted by the vehicles engine controller to change the target
 * engine state. It is intended for vehicles with internal combustion engines
 */
class DoEngineControlCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.DO_ENGINE_CONTROL;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * 0: Stop engine, 1:Start Engine
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get startEngine() {
        return this._param1;
    }
    set startEngine(value) {
        this._param1 = value;
    }
    /**
     * 0: Warm start, 1:Cold start. Controls use of choke where applicable
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get coldStart() {
        return this._param2;
    }
    set coldStart(value) {
        this._param2 = value;
    }
    /**
     * Height delay. This is for commanding engine start only after the vehicle has gained the specified
     * height. Used in VTOL vehicles during takeoff to start engine after the aircraft is off the ground.
     * Zero for no delay.
     *
     * @units m
     * @min: 0
     */
    get heightDelay() {
        return this._param3;
    }
    set heightDelay(value) {
        this._param3 = value;
    }
    /**
     * A bitmask of options for engine control
     */
    get options() {
        return this._param4;
    }
    set options(value) {
        this._param4 = value;
    }
}
exports.DoEngineControlCommand = DoEngineControlCommand;
/**
 * Set the mission item with sequence number seq as current item. This means that the MAV will continue
 * to this mission item on the shortest path (not following the mission items in-between).
 */
class DoSetMissionCurrentCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.DO_SET_MISSION_CURRENT;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Mission sequence value to set
     *
     * @min: 0
     * @increment: 1
     */
    get number() {
        return this._param1;
    }
    set number(value) {
        this._param1 = value;
    }
}
exports.DoSetMissionCurrentCommand = DoSetMissionCurrentCommand;
/**
 * NOP - This command is only used to mark the upper limit of the DO commands in the enumeration
 */
class DoLastCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.DO_LAST;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
}
exports.DoLastCommand = DoLastCommand;
/**
 * Trigger calibration. This command will be only accepted if in pre-flight mode. Except for
 * Temperature Calibration, only one sensor should be set in a single message and all others should be
 * zero.
 */
class PreflightCalibrationCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.PREFLIGHT_CALIBRATION;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * 1: gyro calibration, 3: gyro temperature calibration
     *
     * @min: 0
     * @max: 3
     * @increment: 1
     */
    get gyroTemperature() {
        return this._param1;
    }
    set gyroTemperature(value) {
        this._param1 = value;
    }
    /**
     * 1: magnetometer calibration
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get magnetometer() {
        return this._param2;
    }
    set magnetometer(value) {
        this._param2 = value;
    }
    /**
     * 1: ground pressure calibration
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get groundPressure() {
        return this._param3;
    }
    set groundPressure(value) {
        this._param3 = value;
    }
    /**
     * 1: radio RC calibration, 2: RC trim calibration
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get remoteControl() {
        return this._param4;
    }
    set remoteControl(value) {
        this._param4 = value;
    }
    /**
     * 1: accelerometer calibration, 2: board level calibration, 3: accelerometer temperature calibration,
     * 4: simple accelerometer calibration
     *
     * @min: 0
     * @max: 4
     * @increment: 1
     */
    get accelerometer() {
        return this._param5;
    }
    set accelerometer(value) {
        this._param5 = value;
    }
    /**
     * 1: APM: compass/motor interference calibration (PX4: airspeed calibration, deprecated), 2: airspeed
     * calibration
     *
     * @min: 0
     * @max: 2
     * @increment: 1
     */
    get compmotOrAirspeed() {
        return this._param6;
    }
    set compmotOrAirspeed(value) {
        this._param6 = value;
    }
    /**
     * 1: ESC calibration, 3: barometer temperature calibration
     *
     * @min: 0
     * @max: 3
     * @increment: 1
     */
    get escOrBaro() {
        return this._param7;
    }
    set escOrBaro(value) {
        this._param7 = value;
    }
}
exports.PreflightCalibrationCommand = PreflightCalibrationCommand;
/**
 * Set sensor offsets. This command will be only accepted if in pre-flight mode.
 */
class PreflightSetSensorOffsetsCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.PREFLIGHT_SET_SENSOR_OFFSETS;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Sensor to adjust the offsets for: 0: gyros, 1: accelerometer, 2: magnetometer, 3: barometer, 4:
     * optical flow, 5: second magnetometer, 6: third magnetometer
     *
     * @min: 0
     * @max: 6
     * @increment: 1
     */
    get sensorType() {
        return this._param1;
    }
    set sensorType(value) {
        this._param1 = value;
    }
    /**
     * X axis offset (or generic dimension 1), in the sensor's raw units
     */
    get xOffset() {
        return this._param2;
    }
    set xOffset(value) {
        this._param2 = value;
    }
    /**
     * Y axis offset (or generic dimension 2), in the sensor's raw units
     */
    get yOffset() {
        return this._param3;
    }
    set yOffset(value) {
        this._param3 = value;
    }
    /**
     * Z axis offset (or generic dimension 3), in the sensor's raw units
     */
    get zOffset() {
        return this._param4;
    }
    set zOffset(value) {
        this._param4 = value;
    }
    /**
     * Generic dimension 4, in the sensor's raw units
     */
    get fourthDimension() {
        return this._param5;
    }
    set fourthDimension(value) {
        this._param5 = value;
    }
    /**
     * Generic dimension 5, in the sensor's raw units
     */
    get fifthDimension() {
        return this._param6;
    }
    set fifthDimension(value) {
        this._param6 = value;
    }
    /**
     * Generic dimension 6, in the sensor's raw units
     */
    get sixthDimension() {
        return this._param7;
    }
    set sixthDimension(value) {
        this._param7 = value;
    }
}
exports.PreflightSetSensorOffsetsCommand = PreflightSetSensorOffsetsCommand;
/**
 * Trigger UAVCAN configuration (actuator ID assignment and direction mapping). Note that this maps to
 * the legacy UAVCAN v0 function UAVCAN_ENUMERATE, which is intended to be executed just once during
 * initial vehicle configuration (it is not a normal pre-flight command and has been poorly named).
 */
class PreflightUavcanCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.PREFLIGHT_UAVCAN;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * 1: Trigger actuator ID assignment and direction mapping. 0: Cancel command.
     */
    get actuatorId() {
        return this._param1;
    }
    set actuatorId(value) {
        this._param1 = value;
    }
}
exports.PreflightUavcanCommand = PreflightUavcanCommand;
/**
 * Request storage of different parameter values and logs. This command will be only accepted if in
 * pre-flight mode.
 */
class PreflightStorageCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.PREFLIGHT_STORAGE;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Parameter storage: 0: READ FROM FLASH/EEPROM, 1: WRITE CURRENT TO FLASH/EEPROM, 2: Reset to defaults
     *
     * @min: 0
     * @max: 2
     * @increment: 1
     */
    get parameterStorage() {
        return this._param1;
    }
    set parameterStorage(value) {
        this._param1 = value;
    }
    /**
     * Mission storage: 0: READ FROM FLASH/EEPROM, 1: WRITE CURRENT TO FLASH/EEPROM, 2: Reset to defaults
     *
     * @min: 0
     * @max: 2
     * @increment: 1
     */
    get missionStorage() {
        return this._param2;
    }
    set missionStorage(value) {
        this._param2 = value;
    }
    /**
     * Onboard logging: 0: Ignore, 1: Start default rate logging, -1: Stop logging, > 1: logging rate (e.g.
     * set to 1000 for 1000 Hz logging)
     *
     * @units Hz
     * @min: -1
     * @increment: 1
     */
    get loggingRate() {
        return this._param3;
    }
    set loggingRate(value) {
        this._param3 = value;
    }
}
exports.PreflightStorageCommand = PreflightStorageCommand;
/**
 * Request the reboot or shutdown of system components.
 */
class PreflightRebootShutdownCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.PREFLIGHT_REBOOT_SHUTDOWN;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * 0: Do nothing for autopilot, 1: Reboot autopilot, 2: Shutdown autopilot, 3: Reboot autopilot and
     * keep it in the bootloader until upgraded.
     *
     * @min: 0
     * @max: 3
     * @increment: 1
     */
    get autopilot() {
        return this._param1;
    }
    set autopilot(value) {
        this._param1 = value;
    }
    /**
     * 0: Do nothing for onboard computer, 1: Reboot onboard computer, 2: Shutdown onboard computer, 3:
     * Reboot onboard computer and keep it in the bootloader until upgraded.
     *
     * @min: 0
     * @max: 3
     * @increment: 1
     */
    get companion() {
        return this._param2;
    }
    set companion(value) {
        this._param2 = value;
    }
}
exports.PreflightRebootShutdownCommand = PreflightRebootShutdownCommand;
/**
 * Override current mission with command to pause mission, pause mission and move to position,
 * continue/resume mission. When param 1 indicates that the mission is paused (MAV_GOTO_DO_HOLD), param
 * 2 defines whether it holds in place or moves to another position.
 *
 * This command has location.
 * This command is destination.
 */
class OverrideGotoCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.OVERRIDE_GOTO;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * MAV_GOTO_DO_HOLD: pause mission and either hold or move to specified position (depending on param2),
     * MAV_GOTO_DO_CONTINUE: resume mission.
     */
    get continue() {
        return this._param1;
    }
    set continue(value) {
        this._param1 = value;
    }
    /**
     * MAV_GOTO_HOLD_AT_CURRENT_POSITION: hold at current position, MAV_GOTO_HOLD_AT_SPECIFIED_POSITION:
     * hold at specified position.
     */
    get position() {
        return this._param2;
    }
    set position(value) {
        this._param2 = value;
    }
    /**
     * Coordinate frame of hold point.
     */
    get frame() {
        return this._param3;
    }
    set frame(value) {
        this._param3 = value;
    }
    /**
     * Desired yaw angle.
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
     * Latitude/X position.
     */
    get latitude() {
        return this._param5;
    }
    set latitude(value) {
        this._param5 = value;
    }
    /**
     * Longitude/Y position.
     */
    get longitude() {
        return this._param6;
    }
    set longitude(value) {
        this._param6 = value;
    }
    /**
     * Altitude/Z position.
     */
    get altitude() {
        return this._param7;
    }
    set altitude(value) {
        this._param7 = value;
    }
}
exports.OverrideGotoCommand = OverrideGotoCommand;
/**
 * Mission command to set a Camera Auto Mount Pivoting Oblique Survey (Replaces CAM_TRIGG_DIST for this
 * purpose). The camera is triggered each time this distance is exceeded, then the mount moves to the
 * next position. Params 4~6 set-up the angle limits and number of positions for oblique survey, where
 * mount-enabled vehicles automatically roll the camera between shots to emulate an oblique camera
 * setup (providing an increased HFOV). This command can also be used to set the shutter integration
 * time for the camera.
 */
class ObliqueSurveyCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.OBLIQUE_SURVEY;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Camera trigger distance. 0 to stop triggering.
     *
     * @units m
     * @min: 0
     */
    get distance() {
        return this._param1;
    }
    set distance(value) {
        this._param1 = value;
    }
    /**
     * Camera shutter integration time. 0 to ignore
     *
     * @units ms
     * @min: 0
     * @increment: 1
     */
    get shutter() {
        return this._param2;
    }
    set shutter(value) {
        this._param2 = value;
    }
    /**
     * The minimum interval in which the camera is capable of taking subsequent pictures repeatedly. 0 to
     * ignore.
     *
     * @units ms
     * @min: 0
     * @max: 10000
     * @increment: 1
     */
    get minInterval() {
        return this._param3;
    }
    set minInterval(value) {
        this._param3 = value;
    }
    /**
     * Total number of roll positions at which the camera will capture photos (images captures spread
     * evenly across the limits defined by param5).
     *
     * @min: 2
     * @increment: 1
     */
    get positions() {
        return this._param4;
    }
    set positions(value) {
        this._param4 = value;
    }
    /**
     * Angle limits that the camera can be rolled to left and right of center.
     *
     * @units deg
     * @min: 0
     */
    get rollAngle() {
        return this._param5;
    }
    set rollAngle(value) {
        this._param5 = value;
    }
    /**
     * Fixed pitch angle that the camera will hold in oblique mode if the mount is actuated in the pitch
     * axis.
     *
     * @units deg
     * @min: -180
     * @max: 180
     */
    get pitchAngle() {
        return this._param6;
    }
    set pitchAngle(value) {
        this._param6 = value;
    }
}
exports.ObliqueSurveyCommand = ObliqueSurveyCommand;
/**
 * start running a mission
 */
class MissionStartCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.MISSION_START;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * first_item: the first mission item to run
     *
     * @min: 0
     * @increment: 1
     */
    get firstItem() {
        return this._param1;
    }
    set firstItem(value) {
        this._param1 = value;
    }
    /**
     * last_item: the last mission item to run (after this item is run, the mission ends)
     *
     * @min: 0
     * @increment: 1
     */
    get lastItem() {
        return this._param2;
    }
    set lastItem(value) {
        this._param2 = value;
    }
}
exports.MissionStartCommand = MissionStartCommand;
/**
 * Arms / Disarms a component
 */
class ComponentArmDisarmCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.COMPONENT_ARM_DISARM;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * 0: disarm, 1: arm
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get arm() {
        return this._param1;
    }
    set arm(value) {
        this._param1 = value;
    }
    /**
     * 0: arm-disarm unless prevented by safety checks (i.e. when landed), 21196: force arming/disarming
     * (e.g. allow arming to override preflight checks and disarming in flight)
     *
     * @min: 0
     * @max: 21196
     * @increment: 21196
     */
    get force() {
        return this._param2;
    }
    set force(value) {
        this._param2 = value;
    }
}
exports.ComponentArmDisarmCommand = ComponentArmDisarmCommand;
/**
 * Instructs system to run pre-arm checks. This command should return MAV_RESULT_TEMPORARILY_REJECTED
 * in the case the system is armed, otherwse MAV_RESULT_ACCEPTED. Note that the return value from
 * executing this command does not indicate whether the vehicle is armable or not, just whether the
 * system has successfully run/is currently running the checks. The result of the checks is reflected
 * in the SYS_STATUS message.
 */
class RunPrearmChecksCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.RUN_PREARM_CHECKS;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
}
exports.RunPrearmChecksCommand = RunPrearmChecksCommand;
/**
 * Request the home position from the vehicle.
 */
class GetHomePositionCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.GET_HOME_POSITION;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
}
exports.GetHomePositionCommand = GetHomePositionCommand;
/**
 * Starts receiver pairing.
 */
class StartRxPairCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.START_RX_PAIR;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * 0:Spektrum.
     */
    get spektrum() {
        return this._param1;
    }
    set spektrum(value) {
        this._param1 = value;
    }
    /**
     * RC type.
     */
    get rcType() {
        return this._param2;
    }
    set rcType(value) {
        this._param2 = value;
    }
}
exports.StartRxPairCommand = StartRxPairCommand;
/**
 * Request the interval between messages for a particular MAVLink message ID. The receiver should ACK
 * the command and then emit its response in a MESSAGE_INTERVAL message.
 */
class GetMessageIntervalCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.GET_MESSAGE_INTERVAL;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * The MAVLink message ID
     *
     * @min: 0
     * @max: 16777215
     * @increment: 1
     */
    get messageId() {
        return this._param1;
    }
    set messageId(value) {
        this._param1 = value;
    }
}
exports.GetMessageIntervalCommand = GetMessageIntervalCommand;
/**
 * Set the interval between messages for a particular MAVLink message ID. This interface replaces
 * REQUEST_DATA_STREAM.
 */
class SetMessageIntervalCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.SET_MESSAGE_INTERVAL;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * The MAVLink message ID
     *
     * @min: 0
     * @max: 16777215
     * @increment: 1
     */
    get messageId() {
        return this._param1;
    }
    set messageId(value) {
        this._param1 = value;
    }
    /**
     * The interval between two messages. Set to -1 to disable and 0 to request default rate.
     *
     * @units us
     * @min: -1
     * @increment: 1
     */
    get interval() {
        return this._param2;
    }
    set interval(value) {
        this._param2 = value;
    }
    /**
     * Target address of message stream (if message has target address fields). 0: Flight-stack default
     * (recommended), 1: address of requestor, 2: broadcast.
     *
     * @min: 0
     * @max: 2
     * @increment: 1
     */
    get responseTarget() {
        return this._param7;
    }
    set responseTarget(value) {
        this._param7 = value;
    }
}
exports.SetMessageIntervalCommand = SetMessageIntervalCommand;
/**
 * Request the target system(s) emit a single instance of a specified message (i.e. a "one-shot"
 * version of MAV_CMD_SET_MESSAGE_INTERVAL).
 */
class RequestMessageCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.REQUEST_MESSAGE;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * The MAVLink message ID of the requested message.
     *
     * @min: 0
     * @max: 16777215
     * @increment: 1
     */
    get messageId() {
        return this._param1;
    }
    set messageId(value) {
        this._param1 = value;
    }
    /**
     * Use for index ID, if required. Otherwise, the use of this parameter (if any) must be defined in the
     * requested message. By default assumed not used (0).
     */
    get reqParam1() {
        return this._param2;
    }
    set reqParam1(value) {
        this._param2 = value;
    }
    /**
     * The use of this parameter (if any), must be defined in the requested message. By default assumed not
     * used (0).
     */
    get reqParam2() {
        return this._param3;
    }
    set reqParam2(value) {
        this._param3 = value;
    }
    /**
     * The use of this parameter (if any), must be defined in the requested message. By default assumed not
     * used (0).
     */
    get reqParam3() {
        return this._param4;
    }
    set reqParam3(value) {
        this._param4 = value;
    }
    /**
     * The use of this parameter (if any), must be defined in the requested message. By default assumed not
     * used (0).
     */
    get reqParam4() {
        return this._param5;
    }
    set reqParam4(value) {
        this._param5 = value;
    }
    /**
     * The use of this parameter (if any), must be defined in the requested message. By default assumed not
     * used (0).
     */
    get reqParam5() {
        return this._param6;
    }
    set reqParam5(value) {
        this._param6 = value;
    }
    /**
     * Target address for requested message (if message has target address fields). 0: Flight-stack
     * default, 1: address of requestor, 2: broadcast.
     *
     * @min: 0
     * @max: 2
     * @increment: 1
     */
    get responseTarget() {
        return this._param7;
    }
    set responseTarget(value) {
        this._param7 = value;
    }
}
exports.RequestMessageCommand = RequestMessageCommand;
/**
 * Request MAVLink protocol version compatibility. All receivers should ACK the command and then emit
 * their capabilities in an PROTOCOL_VERSION message
 */
class RequestProtocolVersionCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.REQUEST_PROTOCOL_VERSION;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * 1: Request supported protocol versions by all nodes on the network
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get protocol() {
        return this._param1;
    }
    set protocol(value) {
        this._param1 = value;
    }
}
exports.RequestProtocolVersionCommand = RequestProtocolVersionCommand;
/**
 * Request autopilot capabilities. The receiver should ACK the command and then emit its capabilities
 * in an AUTOPILOT_VERSION message
 */
class RequestAutopilotCapabilitiesCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.REQUEST_AUTOPILOT_CAPABILITIES;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * 1: Request autopilot version
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get version() {
        return this._param1;
    }
    set version(value) {
        this._param1 = value;
    }
}
exports.RequestAutopilotCapabilitiesCommand = RequestAutopilotCapabilitiesCommand;
/**
 * Request camera information (CAMERA_INFORMATION).
 */
class RequestCameraInformationCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.REQUEST_CAMERA_INFORMATION;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * 0: No action 1: Request camera capabilities
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get capabilities() {
        return this._param1;
    }
    set capabilities(value) {
        this._param1 = value;
    }
}
exports.RequestCameraInformationCommand = RequestCameraInformationCommand;
/**
 * Request camera settings (CAMERA_SETTINGS).
 */
class RequestCameraSettingsCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.REQUEST_CAMERA_SETTINGS;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * 0: No Action 1: Request camera settings
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get settings() {
        return this._param1;
    }
    set settings(value) {
        this._param1 = value;
    }
}
exports.RequestCameraSettingsCommand = RequestCameraSettingsCommand;
/**
 * Request storage information (STORAGE_INFORMATION). Use the command's target_component to target a
 * specific component's storage.
 */
class RequestStorageInformationCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.REQUEST_STORAGE_INFORMATION;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Storage ID (0 for all, 1 for first, 2 for second, etc.)
     *
     * @min: 0
     * @increment: 1
     */
    get storageId() {
        return this._param1;
    }
    set storageId(value) {
        this._param1 = value;
    }
    /**
     * 0: No Action 1: Request storage information
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get information() {
        return this._param2;
    }
    set information(value) {
        this._param2 = value;
    }
}
exports.RequestStorageInformationCommand = RequestStorageInformationCommand;
/**
 * Format a storage medium. Once format is complete, a STORAGE_INFORMATION message is sent. Use the
 * command's target_component to target a specific component's storage.
 */
class StorageFormatCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.STORAGE_FORMAT;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Storage ID (1 for first, 2 for second, etc.)
     *
     * @min: 0
     * @increment: 1
     */
    get storageId() {
        return this._param1;
    }
    set storageId(value) {
        this._param1 = value;
    }
    /**
     * 0: No action 1: Format storage
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get format() {
        return this._param2;
    }
    set format(value) {
        this._param2 = value;
    }
}
exports.StorageFormatCommand = StorageFormatCommand;
/**
 * Request camera capture status (CAMERA_CAPTURE_STATUS)
 */
class RequestCameraCaptureStatusCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.REQUEST_CAMERA_CAPTURE_STATUS;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * 0: No Action 1: Request camera capture status
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get captureStatus() {
        return this._param1;
    }
    set captureStatus(value) {
        this._param1 = value;
    }
}
exports.RequestCameraCaptureStatusCommand = RequestCameraCaptureStatusCommand;
/**
 * Request flight information (FLIGHT_INFORMATION)
 */
class RequestFlightInformationCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.REQUEST_FLIGHT_INFORMATION;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * 1: Request flight information
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get flightInformation() {
        return this._param1;
    }
    set flightInformation(value) {
        this._param1 = value;
    }
}
exports.RequestFlightInformationCommand = RequestFlightInformationCommand;
/**
 * Reset all camera settings to Factory Default
 */
class ResetCameraSettingsCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.RESET_CAMERA_SETTINGS;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * 0: No Action 1: Reset all settings
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get reset() {
        return this._param1;
    }
    set reset(value) {
        this._param1 = value;
    }
}
exports.ResetCameraSettingsCommand = ResetCameraSettingsCommand;
/**
 * Set camera running mode. Use NaN for reserved values. GCS will send a
 * MAV_CMD_REQUEST_VIDEO_STREAM_STATUS command after a mode change if the camera supports video
 * streaming.
 */
class SetCameraModeCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.SET_CAMERA_MODE;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Camera mode
     */
    get cameraMode() {
        return this._param2;
    }
    set cameraMode(value) {
        this._param2 = value;
    }
}
exports.SetCameraModeCommand = SetCameraModeCommand;
/**
 * Set camera zoom. Camera must respond with a CAMERA_SETTINGS message (on success).
 */
class SetCameraZoomCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.SET_CAMERA_ZOOM;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Zoom type
     */
    get zoomType() {
        return this._param1;
    }
    set zoomType(value) {
        this._param1 = value;
    }
    /**
     * Zoom value. The range of valid values depend on the zoom type.
     */
    get zoomValue() {
        return this._param2;
    }
    set zoomValue(value) {
        this._param2 = value;
    }
}
exports.SetCameraZoomCommand = SetCameraZoomCommand;
/**
 * Set camera focus. Camera must respond with a CAMERA_SETTINGS message (on success).
 */
class SetCameraFocusCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.SET_CAMERA_FOCUS;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Focus type
     */
    get focusType() {
        return this._param1;
    }
    set focusType(value) {
        this._param1 = value;
    }
    /**
     * Focus value
     */
    get focusValue() {
        return this._param2;
    }
    set focusValue(value) {
        this._param2 = value;
    }
}
exports.SetCameraFocusCommand = SetCameraFocusCommand;
/**
 * Tagged jump target. Can be jumped to with MAV_CMD_DO_JUMP_TAG.
 */
class JumpTagCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.JUMP_TAG;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Tag.
     *
     * @min: 0
     * @increment: 1
     */
    get tag() {
        return this._param1;
    }
    set tag(value) {
        this._param1 = value;
    }
}
exports.JumpTagCommand = JumpTagCommand;
/**
 * Jump to the matching tag in the mission list. Repeat this action for the specified number of times.
 * A mission should contain a single matching tag for each jump. If this is not the case then a jump to
 * a missing tag should complete the mission, and a jump where there are multiple matching tags should
 * always select the one with the lowest mission sequence number.
 */
class DoJumpTagCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.DO_JUMP_TAG;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Target tag to jump to.
     *
     * @min: 0
     * @increment: 1
     */
    get tag() {
        return this._param1;
    }
    set tag(value) {
        this._param1 = value;
    }
    /**
     * Repeat count.
     *
     * @min: 0
     * @increment: 1
     */
    get repeat() {
        return this._param2;
    }
    set repeat(value) {
        this._param2 = value;
    }
}
exports.DoJumpTagCommand = DoJumpTagCommand;
/**
 * Set gimbal manager pitch/yaw setpoints (low rate command). It is possible to set combinations of the
 * values below. E.g. an angle as well as a desired angular rate can be used to get to this angle at a
 * certain angular rate, or an angular rate only will result in continuous turning. NaN is to be used
 * to signal unset. Note: only the gimbal manager will react to this command - it will be ignored by a
 * gimbal device. Use GIMBAL_MANAGER_SET_PITCHYAW if you need to stream pitch/yaw setpoints at higher
 * rate.
 */
class DoGimbalManagerPitchyawCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.DO_GIMBAL_MANAGER_PITCHYAW;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Pitch angle (positive to pitch up, relative to vehicle for FOLLOW mode, relative to world horizon
     * for LOCK mode).
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
     * Yaw angle (positive to yaw to the right, relative to vehicle for FOLLOW mode, absolute to North for
     * LOCK mode).
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
     * Pitch rate (positive to pitch up).
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
     * Yaw rate (positive to yaw to the right).
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
     * Gimbal manager flags to use.
     */
    get gimbalManagerFlags() {
        return this._param5;
    }
    set gimbalManagerFlags(value) {
        this._param5 = value;
    }
    /**
     * Component ID of gimbal device to address (or 1-6 for non-MAVLink gimbal), 0 for all gimbal device
     * components. Send command multiple times for more than one gimbal (but not all gimbals).
     */
    get gimbalDeviceId() {
        return this._param7;
    }
    set gimbalDeviceId(value) {
        this._param7 = value;
    }
}
exports.DoGimbalManagerPitchyawCommand = DoGimbalManagerPitchyawCommand;
/**
 * Gimbal configuration to set which sysid/compid is in primary and secondary control.
 */
class DoGimbalManagerConfigureCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.DO_GIMBAL_MANAGER_CONFIGURE;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Sysid for primary control (0: no one in control, -1: leave unchanged, -2: set itself in control (for
     * missions where the own sysid is still unknown), -3: remove control if currently in control).
     */
    get sysidPrimaryControl() {
        return this._param1;
    }
    set sysidPrimaryControl(value) {
        this._param1 = value;
    }
    /**
     * Compid for primary control (0: no one in control, -1: leave unchanged, -2: set itself in control
     * (for missions where the own sysid is still unknown), -3: remove control if currently in control).
     */
    get compidPrimaryControl() {
        return this._param2;
    }
    set compidPrimaryControl(value) {
        this._param2 = value;
    }
    /**
     * Sysid for secondary control (0: no one in control, -1: leave unchanged, -2: set itself in control
     * (for missions where the own sysid is still unknown), -3: remove control if currently in control).
     */
    get sysidSecondaryControl() {
        return this._param3;
    }
    set sysidSecondaryControl(value) {
        this._param3 = value;
    }
    /**
     * Compid for secondary control (0: no one in control, -1: leave unchanged, -2: set itself in control
     * (for missions where the own sysid is still unknown), -3: remove control if currently in control).
     */
    get compidSecondaryControl() {
        return this._param4;
    }
    set compidSecondaryControl(value) {
        this._param4 = value;
    }
    /**
     * Component ID of gimbal device to address (or 1-6 for non-MAVLink gimbal), 0 for all gimbal device
     * components. Send command multiple times for more than one gimbal (but not all gimbals).
     */
    get gimbalDeviceId() {
        return this._param7;
    }
    set gimbalDeviceId(value) {
        this._param7 = value;
    }
}
exports.DoGimbalManagerConfigureCommand = DoGimbalManagerConfigureCommand;
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
class ImageStartCaptureCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.IMAGE_START_CAPTURE;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
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
    get id() {
        return this._param1;
    }
    set id(value) {
        this._param1 = value;
    }
    /**
     * Desired elapsed time between two consecutive pictures (in seconds). Minimum values depend on
     * hardware (typically greater than 2 seconds).
     *
     * @units s
     * @min: 0
     */
    get interval() {
        return this._param2;
    }
    set interval(value) {
        this._param2 = value;
    }
    /**
     * Total number of images to capture. 0 to capture forever/until MAV_CMD_IMAGE_STOP_CAPTURE.
     *
     * @min: 0
     * @increment: 1
     */
    get totalImages() {
        return this._param3;
    }
    set totalImages(value) {
        this._param3 = value;
    }
    /**
     * Capture sequence number starting from 1. This is only valid for single-capture (param3 == 1),
     * otherwise set to 0. Increment the capture ID for each capture command to prevent double captures
     * when a command is re-transmitted.
     *
     * @min: 1
     * @increment: 1
     */
    get sequenceNumber() {
        return this._param4;
    }
    set sequenceNumber(value) {
        this._param4 = value;
    }
}
exports.ImageStartCaptureCommand = ImageStartCaptureCommand;
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
class ImageStopCaptureCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.IMAGE_STOP_CAPTURE;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
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
    get id() {
        return this._param1;
    }
    set id(value) {
        this._param1 = value;
    }
}
exports.ImageStopCaptureCommand = ImageStopCaptureCommand;
/**
 * Enable or disable on-board camera triggering system.
 */
class DoTriggerControlCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.DO_TRIGGER_CONTROL;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Trigger enable/disable (0 for disable, 1 for start), -1 to ignore
     *
     * @min: -1
     * @max: 1
     * @increment: 1
     */
    get enable() {
        return this._param1;
    }
    set enable(value) {
        this._param1 = value;
    }
    /**
     * 1 to reset the trigger sequence, -1 or 0 to ignore
     *
     * @min: -1
     * @max: 1
     * @increment: 1
     */
    get reset() {
        return this._param2;
    }
    set reset(value) {
        this._param2 = value;
    }
    /**
     * 1 to pause triggering, but without switching the camera off or retracting it. -1 to ignore
     *
     * @min: -1
     * @max: 1
     * @increment: 2
     */
    get pause() {
        return this._param3;
    }
    set pause(value) {
        this._param3 = value;
    }
}
exports.DoTriggerControlCommand = DoTriggerControlCommand;
/**
 * If the camera supports point visual tracking (CAMERA_CAP_FLAGS_HAS_TRACKING_POINT is set), this
 * command allows to initiate the tracking.
 */
class CameraTrackPointCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.CAMERA_TRACK_POINT;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Point to track x value (normalized 0..1, 0 is left, 1 is right).
     *
     * @min: 0
     * @max: 1
     */
    get pointX() {
        return this._param1;
    }
    set pointX(value) {
        this._param1 = value;
    }
    /**
     * Point to track y value (normalized 0..1, 0 is top, 1 is bottom).
     *
     * @min: 0
     * @max: 1
     */
    get pointY() {
        return this._param2;
    }
    set pointY(value) {
        this._param2 = value;
    }
    /**
     * Point radius (normalized 0..1, 0 is image left, 1 is image right).
     *
     * @min: 0
     * @max: 1
     */
    get radius() {
        return this._param3;
    }
    set radius(value) {
        this._param3 = value;
    }
}
exports.CameraTrackPointCommand = CameraTrackPointCommand;
/**
 * If the camera supports rectangle visual tracking (CAMERA_CAP_FLAGS_HAS_TRACKING_RECTANGLE is set),
 * this command allows to initiate the tracking.
 */
class CameraTrackRectangleCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.CAMERA_TRACK_RECTANGLE;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Top left corner of rectangle x value (normalized 0..1, 0 is left, 1 is right).
     *
     * @min: 0
     * @max: 1
     */
    get topLeftCornerX() {
        return this._param1;
    }
    set topLeftCornerX(value) {
        this._param1 = value;
    }
    /**
     * Top left corner of rectangle y value (normalized 0..1, 0 is top, 1 is bottom).
     *
     * @min: 0
     * @max: 1
     */
    get topLeftCornerY() {
        return this._param2;
    }
    set topLeftCornerY(value) {
        this._param2 = value;
    }
    /**
     * Bottom right corner of rectangle x value (normalized 0..1, 0 is left, 1 is right).
     *
     * @min: 0
     * @max: 1
     */
    get bottomRightCornerX() {
        return this._param3;
    }
    set bottomRightCornerX(value) {
        this._param3 = value;
    }
    /**
     * Bottom right corner of rectangle y value (normalized 0..1, 0 is top, 1 is bottom).
     *
     * @min: 0
     * @max: 1
     */
    get bottomRightCornerY() {
        return this._param4;
    }
    set bottomRightCornerY(value) {
        this._param4 = value;
    }
}
exports.CameraTrackRectangleCommand = CameraTrackRectangleCommand;
/**
 * Stops ongoing tracking.
 */
class CameraStopTrackingCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.CAMERA_STOP_TRACKING;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
}
exports.CameraStopTrackingCommand = CameraStopTrackingCommand;
/**
 * Starts video capture (recording).
 */
class VideoStartCaptureCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.VIDEO_START_CAPTURE;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Video Stream ID (0 for all streams)
     *
     * @min: 0
     * @increment: 1
     */
    get streamId() {
        return this._param1;
    }
    set streamId(value) {
        this._param1 = value;
    }
    /**
     * Frequency CAMERA_CAPTURE_STATUS messages should be sent while recording (0 for no messages,
     * otherwise frequency)
     *
     * @units Hz
     * @min: 0
     */
    get statusFrequency() {
        return this._param2;
    }
    set statusFrequency(value) {
        this._param2 = value;
    }
}
exports.VideoStartCaptureCommand = VideoStartCaptureCommand;
/**
 * Stop the current video capture (recording).
 */
class VideoStopCaptureCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.VIDEO_STOP_CAPTURE;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Video Stream ID (0 for all streams)
     *
     * @min: 0
     * @increment: 1
     */
    get streamId() {
        return this._param1;
    }
    set streamId(value) {
        this._param1 = value;
    }
}
exports.VideoStopCaptureCommand = VideoStopCaptureCommand;
/**
 * Start video streaming
 */
class VideoStartStreamingCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.VIDEO_START_STREAMING;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Video Stream ID (0 for all streams, 1 for first, 2 for second, etc.)
     *
     * @min: 0
     * @increment: 1
     */
    get streamId() {
        return this._param1;
    }
    set streamId(value) {
        this._param1 = value;
    }
}
exports.VideoStartStreamingCommand = VideoStartStreamingCommand;
/**
 * Stop the given video stream
 */
class VideoStopStreamingCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.VIDEO_STOP_STREAMING;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Video Stream ID (0 for all streams, 1 for first, 2 for second, etc.)
     *
     * @min: 0
     * @increment: 1
     */
    get streamId() {
        return this._param1;
    }
    set streamId(value) {
        this._param1 = value;
    }
}
exports.VideoStopStreamingCommand = VideoStopStreamingCommand;
/**
 * Request video stream information (VIDEO_STREAM_INFORMATION)
 */
class RequestVideoStreamInformationCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.REQUEST_VIDEO_STREAM_INFORMATION;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Video Stream ID (0 for all streams, 1 for first, 2 for second, etc.)
     *
     * @min: 0
     * @increment: 1
     */
    get streamId() {
        return this._param1;
    }
    set streamId(value) {
        this._param1 = value;
    }
}
exports.RequestVideoStreamInformationCommand = RequestVideoStreamInformationCommand;
/**
 * Request video stream status (VIDEO_STREAM_STATUS)
 */
class RequestVideoStreamStatusCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.REQUEST_VIDEO_STREAM_STATUS;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Video Stream ID (0 for all streams, 1 for first, 2 for second, etc.)
     *
     * @min: 0
     * @increment: 1
     */
    get streamId() {
        return this._param1;
    }
    set streamId(value) {
        this._param1 = value;
    }
}
exports.RequestVideoStreamStatusCommand = RequestVideoStreamStatusCommand;
/**
 * Request to start streaming logging data over MAVLink (see also LOGGING_DATA message)
 */
class LoggingStartCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.LOGGING_START;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Format: 0: ULog
     *
     * @min: 0
     * @increment: 1
     */
    get format() {
        return this._param1;
    }
    set format(value) {
        this._param1 = value;
    }
}
exports.LoggingStartCommand = LoggingStartCommand;
/**
 * Request to stop streaming log data over MAVLink
 */
class LoggingStopCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.LOGGING_STOP;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
}
exports.LoggingStopCommand = LoggingStopCommand;
/**
 */
class AirframeConfigurationCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.AIRFRAME_CONFIGURATION;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Landing gear ID (default: 0, -1 for all)
     *
     * @min: -1
     * @increment: 1
     */
    get landingGearId() {
        return this._param1;
    }
    set landingGearId(value) {
        this._param1 = value;
    }
    /**
     * Landing gear position (Down: 0, Up: 1, NaN for no change)
     */
    get landingGearPosition() {
        return this._param2;
    }
    set landingGearPosition(value) {
        this._param2 = value;
    }
}
exports.AirframeConfigurationCommand = AirframeConfigurationCommand;
/**
 * Request to start/stop transmitting over the high latency telemetry
 */
class ControlHighLatencyCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.CONTROL_HIGH_LATENCY;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Control transmission over high latency telemetry (0: stop, 1: start)
     *
     * @min: 0
     * @max: 1
     * @increment: 1
     */
    get enable() {
        return this._param1;
    }
    set enable(value) {
        this._param1 = value;
    }
}
exports.ControlHighLatencyCommand = ControlHighLatencyCommand;
/**
 * Create a panorama at the current position
 */
class PanoramaCreateCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.PANORAMA_CREATE;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Viewing angle horizontal of the panorama (+- 0.5 the total angle)
     *
     * @units deg
     */
    get horizontalAngle() {
        return this._param1;
    }
    set horizontalAngle(value) {
        this._param1 = value;
    }
    /**
     * Viewing angle vertical of panorama.
     *
     * @units deg
     */
    get verticalAngle() {
        return this._param2;
    }
    set verticalAngle(value) {
        this._param2 = value;
    }
    /**
     * Speed of the horizontal rotation.
     *
     * @units deg/s
     */
    get horizontalSpeed() {
        return this._param3;
    }
    set horizontalSpeed(value) {
        this._param3 = value;
    }
    /**
     * Speed of the vertical rotation.
     *
     * @units deg/s
     */
    get verticalSpeed() {
        return this._param4;
    }
    set verticalSpeed(value) {
        this._param4 = value;
    }
}
exports.PanoramaCreateCommand = PanoramaCreateCommand;
/**
 * Request VTOL transition
 */
class DoVtolTransitionCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.DO_VTOL_TRANSITION;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * The target VTOL state. Only MAV_VTOL_STATE_MC and MAV_VTOL_STATE_FW can be used.
     */
    get state() {
        return this._param1;
    }
    set state(value) {
        this._param1 = value;
    }
}
exports.DoVtolTransitionCommand = DoVtolTransitionCommand;
/**
 * Request authorization to arm the vehicle to a external entity, the arm authorizer is responsible to
 * request all data that is needs from the vehicle before authorize or deny the request. If approved
 * the progress of command_ack message should be set with period of time that this authorization is
 * valid in seconds or in case it was denied it should be set with one of the reasons in
 * ARM_AUTH_DENIED_REASON.
 */
class ArmAuthorizationRequestCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.ARM_AUTHORIZATION_REQUEST;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Vehicle system id, this way ground station can request arm authorization on behalf of any vehicle
     *
     * @min: 0
     * @max: 255
     * @increment: 1
     */
    get systemId() {
        return this._param1;
    }
    set systemId(value) {
        this._param1 = value;
    }
}
exports.ArmAuthorizationRequestCommand = ArmAuthorizationRequestCommand;
/**
 * This command sets the submode to standard guided when vehicle is in guided mode. The vehicle holds
 * position and altitude and the user can input the desired velocities along all three axes.
 */
class SetGuidedSubmodeStandardCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.SET_GUIDED_SUBMODE_STANDARD;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
}
exports.SetGuidedSubmodeStandardCommand = SetGuidedSubmodeStandardCommand;
/**
 * This command sets submode circle when vehicle is in guided mode. Vehicle flies along a circle facing
 * the center of the circle. The user can input the velocity along the circle and change the radius. If
 * no input is given the vehicle will hold position.
 *
 * This command has location.
 */
class SetGuidedSubmodeCircleCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.SET_GUIDED_SUBMODE_CIRCLE;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Radius of desired circle in CIRCLE_MODE
     *
     * @units m
     */
    get radius() {
        return this._param1;
    }
    set radius(value) {
        this._param1 = value;
    }
    /**
     * Target latitude of center of circle in CIRCLE_MODE
     */
    get latitude() {
        return this._param5;
    }
    set latitude(value) {
        this._param5 = value;
    }
    /**
     * Target longitude of center of circle in CIRCLE_MODE
     */
    get longitude() {
        return this._param6;
    }
    set longitude(value) {
        this._param6 = value;
    }
}
exports.SetGuidedSubmodeCircleCommand = SetGuidedSubmodeCircleCommand;
/**
 * Fence return point (there can only be one such point in a geofence definition). If rally points are
 * supported they should be used instead.
 *
 * This command has location.
 * This command is destination.
 */
class NavFenceReturnPointCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.NAV_FENCE_RETURN_POINT;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
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
     * Altitude
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
exports.NavFenceReturnPointCommand = NavFenceReturnPointCommand;
/**
 * Fence vertex for an inclusion polygon (the polygon must not be self-intersecting). The vehicle must
 * stay within this area. Minimum of 3 vertices required.
 *
 * This command has location.
 */
class NavFencePolygonVertexInclusionCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.NAV_FENCE_POLYGON_VERTEX_INCLUSION;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Polygon vertex count
     *
     * @min: 3
     * @increment: 1
     */
    get vertexCount() {
        return this._param1;
    }
    set vertexCount(value) {
        this._param1 = value;
    }
    /**
     * Vehicle must be inside ALL inclusion zones in a single group, vehicle must be inside at least one
     * group, must be the same for all points in each polygon
     *
     * @min: 0
     * @increment: 1
     */
    get inclusionGroup() {
        return this._param2;
    }
    set inclusionGroup(value) {
        this._param2 = value;
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
}
exports.NavFencePolygonVertexInclusionCommand = NavFencePolygonVertexInclusionCommand;
/**
 * Fence vertex for an exclusion polygon (the polygon must not be self-intersecting). The vehicle must
 * stay outside this area. Minimum of 3 vertices required.
 *
 * This command has location.
 */
class NavFencePolygonVertexExclusionCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.NAV_FENCE_POLYGON_VERTEX_EXCLUSION;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Polygon vertex count
     *
     * @min: 3
     * @increment: 1
     */
    get vertexCount() {
        return this._param1;
    }
    set vertexCount(value) {
        this._param1 = value;
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
}
exports.NavFencePolygonVertexExclusionCommand = NavFencePolygonVertexExclusionCommand;
/**
 * Circular fence area. The vehicle must stay inside this area.
 *
 * This command has location.
 */
class NavFenceCircleInclusionCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.NAV_FENCE_CIRCLE_INCLUSION;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Radius.
     *
     * @units m
     */
    get radius() {
        return this._param1;
    }
    set radius(value) {
        this._param1 = value;
    }
    /**
     * Vehicle must be inside ALL inclusion zones in a single group, vehicle must be inside at least one
     * group
     *
     * @min: 0
     * @increment: 1
     */
    get inclusionGroup() {
        return this._param2;
    }
    set inclusionGroup(value) {
        this._param2 = value;
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
}
exports.NavFenceCircleInclusionCommand = NavFenceCircleInclusionCommand;
/**
 * Circular fence area. The vehicle must stay outside this area.
 *
 * This command has location.
 */
class NavFenceCircleExclusionCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.NAV_FENCE_CIRCLE_EXCLUSION;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Radius.
     *
     * @units m
     */
    get radius() {
        return this._param1;
    }
    set radius(value) {
        this._param1 = value;
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
}
exports.NavFenceCircleExclusionCommand = NavFenceCircleExclusionCommand;
/**
 * Rally point. You can have multiple rally points defined.
 *
 * This command has location.
 */
class NavRallyPointCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.NAV_RALLY_POINT;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
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
     * Altitude
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
exports.NavRallyPointCommand = NavRallyPointCommand;
/**
 * Swarm vertex for an inclusion polygon
 *
 * This command has location.
 */
class NavSwarmRoiPolygonVertexInclusionCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.NAV_SWARM_ROI_POLYGON_VERTEX_INCLUSION;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
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
}
exports.NavSwarmRoiPolygonVertexInclusionCommand = NavSwarmRoiPolygonVertexInclusionCommand;
/**
 * Commands the vehicle to respond with a sequence of messages UAVCAN_NODE_INFO, one message per every
 * UAVCAN node that is online. Note that some of the response messages can be lost, which the receiver
 * can detect easily by checking whether every received UAVCAN_NODE_STATUS has a matching message
 * UAVCAN_NODE_INFO received earlier; if not, this command should be sent again in order to request
 * re-transmission of the node information messages.
 */
class UavcanGetNodeInfoCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.UAVCAN_GET_NODE_INFO;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
}
exports.UavcanGetNodeInfoCommand = UavcanGetNodeInfoCommand;
/**
 * Change state of safety switch.
 */
class DoSetSafetySwitchStateCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.DO_SET_SAFETY_SWITCH_STATE;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * New safety switch state.
     */
    get desiredState() {
        return this._param1;
    }
    set desiredState(value) {
        this._param1 = value;
    }
}
exports.DoSetSafetySwitchStateCommand = DoSetSafetySwitchStateCommand;
/**
 * Trigger the start of an ADSB-out IDENT. This should only be used when requested to do so by an Air
 * Traffic Controller in controlled airspace. This starts the IDENT which is then typically held for 18
 * seconds by the hardware per the Mode A, C, and S transponder spec.
 */
class DoAdsbOutIdentCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.DO_ADSB_OUT_IDENT;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
}
exports.DoAdsbOutIdentCommand = DoAdsbOutIdentCommand;
/**
 * Deploy payload on a Lat / Lon / Alt position. This includes the navigation to reach the required
 * release position and velocity.
 *
 * This command has location.
 * This command is destination.
 */
class PayloadPrepareDeployCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.PAYLOAD_PREPARE_DEPLOY;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Operation mode. 0: prepare single payload deploy (overwriting previous requests), but do not execute
     * it. 1: execute payload deploy immediately (rejecting further deploy commands during execution, but
     * allowing abort). 2: add payload deploy to existing deployment list.
     *
     * @min: 0
     * @max: 2
     * @increment: 1
     */
    get operationMode() {
        return this._param1;
    }
    set operationMode(value) {
        this._param1 = value;
    }
    /**
     * Desired approach vector in compass heading. A negative value indicates the system can define the
     * approach vector at will.
     *
     * @units deg
     * @min: -1
     * @max: 360
     */
    get approachVector() {
        return this._param2;
    }
    set approachVector(value) {
        this._param2 = value;
    }
    /**
     * Desired ground speed at release time. This can be overridden by the airframe in case it needs to
     * meet minimum airspeed. A negative value indicates the system can define the ground speed at will.
     *
     * @min: -1
     */
    get groundSpeed() {
        return this._param3;
    }
    set groundSpeed(value) {
        this._param3 = value;
    }
    /**
     * Minimum altitude clearance to the release position. A negative value indicates the system can define
     * the clearance at will.
     *
     * @units m
     * @min: -1
     */
    get altitudeClearance() {
        return this._param4;
    }
    set altitudeClearance(value) {
        this._param4 = value;
    }
    /**
     * Latitude. Note, if used in MISSION_ITEM (deprecated) the units are degrees (unscaled)
     *
     * @units degE7
     */
    get latitude() {
        return this._param5;
    }
    set latitude(value) {
        this._param5 = value;
    }
    /**
     * Longitude. Note, if used in MISSION_ITEM (deprecated) the units are degrees (unscaled)
     *
     * @units degE7
     */
    get longitude() {
        return this._param6;
    }
    set longitude(value) {
        this._param6 = value;
    }
    /**
     * Altitude (MSL)
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
exports.PayloadPrepareDeployCommand = PayloadPrepareDeployCommand;
/**
 * Control the payload deployment.
 */
class PayloadControlDeployCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.PAYLOAD_CONTROL_DEPLOY;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Operation mode. 0: Abort deployment, continue normal mission. 1: switch to payload deployment mode.
     * 100: delete first payload deployment request. 101: delete all payload deployment requests.
     *
     * @min: 0
     * @max: 101
     * @increment: 1
     */
    get operationMode() {
        return this._param1;
    }
    set operationMode(value) {
        this._param1 = value;
    }
}
exports.PayloadControlDeployCommand = PayloadControlDeployCommand;
/**
 * Magnetometer calibration based on provided known yaw. This allows for fast calibration using WMM
 * field tables in the vehicle, given only the known yaw of the vehicle. If Latitude and longitude are
 * both zero then use the current vehicle location.
 *
 * This command has location.
 */
class FixedMagCalYawCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.FIXED_MAG_CAL_YAW;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Yaw of vehicle in earth frame.
     *
     * @units deg
     */
    get yaw() {
        return this._param1;
    }
    set yaw(value) {
        this._param1 = value;
    }
    /**
     * CompassMask, 0 for all.
     */
    get compassmask() {
        return this._param2;
    }
    set compassmask(value) {
        this._param2 = value;
    }
    /**
     * Latitude.
     *
     * @units deg
     */
    get latitude() {
        return this._param3;
    }
    set latitude(value) {
        this._param3 = value;
    }
    /**
     * Longitude.
     *
     * @units deg
     */
    get longitude() {
        return this._param4;
    }
    set longitude(value) {
        this._param4 = value;
    }
}
exports.FixedMagCalYawCommand = FixedMagCalYawCommand;
/**
 * Command to operate winch.
 */
class DoWinchCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.DO_WINCH;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Winch instance number.
     *
     * @min: 1
     * @increment: 1
     */
    get instance() {
        return this._param1;
    }
    set instance(value) {
        this._param1 = value;
    }
    /**
     * Action to perform.
     */
    get action() {
        return this._param2;
    }
    set action(value) {
        this._param2 = value;
    }
    /**
     * Length of cable to release (negative to wind).
     *
     * @units m
     */
    get length() {
        return this._param3;
    }
    set length(value) {
        this._param3 = value;
    }
    /**
     * Release rate (negative to wind).
     *
     * @units m/s
     */
    get rate() {
        return this._param4;
    }
    set rate(value) {
        this._param4 = value;
    }
}
exports.DoWinchCommand = DoWinchCommand;
/**
 * User defined waypoint item. Ground Station will show the Vehicle as flying through this item.
 *
 * This command has location.
 * This command is destination.
 */
class WaypointUser1Command extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.WAYPOINT_USER_1;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Latitude unscaled
     */
    get latitude() {
        return this._param5;
    }
    set latitude(value) {
        this._param5 = value;
    }
    /**
     * Longitude unscaled
     */
    get longitude() {
        return this._param6;
    }
    set longitude(value) {
        this._param6 = value;
    }
    /**
     * Altitude (MSL)
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
exports.WaypointUser1Command = WaypointUser1Command;
/**
 * User defined waypoint item. Ground Station will show the Vehicle as flying through this item.
 *
 * This command has location.
 * This command is destination.
 */
class WaypointUser2Command extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.WAYPOINT_USER_2;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Latitude unscaled
     */
    get latitude() {
        return this._param5;
    }
    set latitude(value) {
        this._param5 = value;
    }
    /**
     * Longitude unscaled
     */
    get longitude() {
        return this._param6;
    }
    set longitude(value) {
        this._param6 = value;
    }
    /**
     * Altitude (MSL)
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
exports.WaypointUser2Command = WaypointUser2Command;
/**
 * User defined waypoint item. Ground Station will show the Vehicle as flying through this item.
 *
 * This command has location.
 * This command is destination.
 */
class WaypointUser3Command extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.WAYPOINT_USER_3;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Latitude unscaled
     */
    get latitude() {
        return this._param5;
    }
    set latitude(value) {
        this._param5 = value;
    }
    /**
     * Longitude unscaled
     */
    get longitude() {
        return this._param6;
    }
    set longitude(value) {
        this._param6 = value;
    }
    /**
     * Altitude (MSL)
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
exports.WaypointUser3Command = WaypointUser3Command;
/**
 * User defined waypoint item. Ground Station will show the Vehicle as flying through this item.
 *
 * This command has location.
 * This command is destination.
 */
class WaypointUser4Command extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.WAYPOINT_USER_4;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Latitude unscaled
     */
    get latitude() {
        return this._param5;
    }
    set latitude(value) {
        this._param5 = value;
    }
    /**
     * Longitude unscaled
     */
    get longitude() {
        return this._param6;
    }
    set longitude(value) {
        this._param6 = value;
    }
    /**
     * Altitude (MSL)
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
exports.WaypointUser4Command = WaypointUser4Command;
/**
 * User defined waypoint item. Ground Station will show the Vehicle as flying through this item.
 *
 * This command has location.
 * This command is destination.
 */
class WaypointUser5Command extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.WAYPOINT_USER_5;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Latitude unscaled
     */
    get latitude() {
        return this._param5;
    }
    set latitude(value) {
        this._param5 = value;
    }
    /**
     * Longitude unscaled
     */
    get longitude() {
        return this._param6;
    }
    set longitude(value) {
        this._param6 = value;
    }
    /**
     * Altitude (MSL)
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
exports.WaypointUser5Command = WaypointUser5Command;
/**
 * User defined spatial item. Ground Station will not show the Vehicle as flying through this item.
 * Example: ROI item.
 *
 * This command has location.
 */
class SpatialUser1Command extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.SPATIAL_USER_1;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Latitude unscaled
     */
    get latitude() {
        return this._param5;
    }
    set latitude(value) {
        this._param5 = value;
    }
    /**
     * Longitude unscaled
     */
    get longitude() {
        return this._param6;
    }
    set longitude(value) {
        this._param6 = value;
    }
    /**
     * Altitude (MSL)
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
exports.SpatialUser1Command = SpatialUser1Command;
/**
 * User defined spatial item. Ground Station will not show the Vehicle as flying through this item.
 * Example: ROI item.
 *
 * This command has location.
 */
class SpatialUser2Command extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.SPATIAL_USER_2;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Latitude unscaled
     */
    get latitude() {
        return this._param5;
    }
    set latitude(value) {
        this._param5 = value;
    }
    /**
     * Longitude unscaled
     */
    get longitude() {
        return this._param6;
    }
    set longitude(value) {
        this._param6 = value;
    }
    /**
     * Altitude (MSL)
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
exports.SpatialUser2Command = SpatialUser2Command;
/**
 * User defined spatial item. Ground Station will not show the Vehicle as flying through this item.
 * Example: ROI item.
 *
 * This command has location.
 */
class SpatialUser3Command extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.SPATIAL_USER_3;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Latitude unscaled
     */
    get latitude() {
        return this._param5;
    }
    set latitude(value) {
        this._param5 = value;
    }
    /**
     * Longitude unscaled
     */
    get longitude() {
        return this._param6;
    }
    set longitude(value) {
        this._param6 = value;
    }
    /**
     * Altitude (MSL)
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
exports.SpatialUser3Command = SpatialUser3Command;
/**
 * User defined spatial item. Ground Station will not show the Vehicle as flying through this item.
 * Example: ROI item.
 *
 * This command has location.
 */
class SpatialUser4Command extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.SPATIAL_USER_4;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Latitude unscaled
     */
    get latitude() {
        return this._param5;
    }
    set latitude(value) {
        this._param5 = value;
    }
    /**
     * Longitude unscaled
     */
    get longitude() {
        return this._param6;
    }
    set longitude(value) {
        this._param6 = value;
    }
    /**
     * Altitude (MSL)
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
exports.SpatialUser4Command = SpatialUser4Command;
/**
 * User defined spatial item. Ground Station will not show the Vehicle as flying through this item.
 * Example: ROI item.
 *
 * This command has location.
 */
class SpatialUser5Command extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.SPATIAL_USER_5;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Latitude unscaled
     */
    get latitude() {
        return this._param5;
    }
    set latitude(value) {
        this._param5 = value;
    }
    /**
     * Longitude unscaled
     */
    get longitude() {
        return this._param6;
    }
    set longitude(value) {
        this._param6 = value;
    }
    /**
     * Altitude (MSL)
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
exports.SpatialUser5Command = SpatialUser5Command;
/**
 * User defined command. Ground Station will not show the Vehicle as flying through this item. Example:
 * MAV_CMD_DO_SET_PARAMETER item.
 */
class User1Command extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.USER_1;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
}
exports.User1Command = User1Command;
/**
 * User defined command. Ground Station will not show the Vehicle as flying through this item. Example:
 * MAV_CMD_DO_SET_PARAMETER item.
 */
class User2Command extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.USER_2;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
}
exports.User2Command = User2Command;
/**
 * User defined command. Ground Station will not show the Vehicle as flying through this item. Example:
 * MAV_CMD_DO_SET_PARAMETER item.
 */
class User3Command extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.USER_3;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
}
exports.User3Command = User3Command;
/**
 * User defined command. Ground Station will not show the Vehicle as flying through this item. Example:
 * MAV_CMD_DO_SET_PARAMETER item.
 */
class User4Command extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.USER_4;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
}
exports.User4Command = User4Command;
/**
 * User defined command. Ground Station will not show the Vehicle as flying through this item. Example:
 * MAV_CMD_DO_SET_PARAMETER item.
 */
class User5Command extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.USER_5;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
}
exports.User5Command = User5Command;
/**
 * Request forwarding of CAN packets from the given CAN bus to this interface. CAN Frames are sent
 * using CAN_FRAME and CANFD_FRAME messages
 */
class CanForwardCommand extends CommandLong {
    constructor(targetSystem = 1, targetComponent = 1) {
        super();
        this.command = MavCmd.CAN_FORWARD;
        this.targetSystem = targetSystem;
        this.targetComponent = targetComponent;
    }
    /**
     * Bus number (0 to disable forwarding, 1 for first bus, 2 for 2nd bus, 3 for 3rd bus).
     */
    get bus() {
        return this._param1;
    }
    set bus(value) {
        this._param1 = value;
    }
}
exports.CanForwardCommand = CanForwardCommand;
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
    271: CameraFovStatus,
    275: CameraTrackingImageStatus,
    276: CameraTrackingGeoStatus,
    280: GimbalManagerInformation,
    281: GimbalManagerStatus,
    282: GimbalManagerSetAttitude,
    283: GimbalDeviceInformation,
    284: GimbalDeviceSetAttitude,
    285: GimbalDeviceAttitudeStatus,
    286: AutopilotStateForGimbalDevice,
    287: GimbalManagerSetPitchyaw,
    288: GimbalManagerSetManualControl,
    299: WifiConfigAp,
    301: AisVessel,
    310: UavcanNodeStatus,
    311: UavcanNodeInfo,
    330: ObstacleDistance,
    331: Odometry,
    335: IsbdLinkStatus,
    340: UtmGlobalPosition,
    350: DebugFloatArray,
    370: SmartBatteryInfo,
    373: GeneratorStatus,
    375: ActuatorOutputStatus,
    2820: SwarmVehicle,
    2821: SwarmVehicleSlow,
    2822: SwarmVehicleRoi,
    376: RelayStatus,
    385: Tunnel,
    386: CanFrame,
    387: CanfdFrame,
    388: CanFilterModify,
    9000: WheelDistance,
    12918: OpenDroneIdArmStatus,
    12919: OpenDroneIdSystemUpdate,
    12920: HygrometerSensor,
};
exports.COMMANDS = {
    [MavCmd.NAV_WAYPOINT]: NavWaypointCommand,
    [MavCmd.NAV_LOITER_UNLIM]: NavLoiterUnlimCommand,
    [MavCmd.NAV_LOITER_TURNS]: NavLoiterTurnsCommand,
    [MavCmd.NAV_LOITER_TIME]: NavLoiterTimeCommand,
    [MavCmd.NAV_RETURN_TO_LAUNCH]: NavReturnToLaunchCommand,
    [MavCmd.NAV_LAND]: NavLandCommand,
    [MavCmd.NAV_TAKEOFF]: NavTakeoffCommand,
    [MavCmd.NAV_LAND_LOCAL]: NavLandLocalCommand,
    [MavCmd.NAV_TAKEOFF_LOCAL]: NavTakeoffLocalCommand,
    [MavCmd.NAV_FOLLOW]: NavFollowCommand,
    [MavCmd.NAV_CONTINUE_AND_CHANGE_ALT]: NavContinueAndChangeAltCommand,
    [MavCmd.NAV_LOITER_TO_ALT]: NavLoiterToAltCommand,
    [MavCmd.DO_FOLLOW]: DoFollowCommand,
    [MavCmd.DO_FOLLOW_REPOSITION]: DoFollowRepositionCommand,
    [MavCmd.NAV_ROI]: NavRoiCommand,
    [MavCmd.NAV_PATHPLANNING]: NavPathplanningCommand,
    [MavCmd.NAV_SPLINE_WAYPOINT]: NavSplineWaypointCommand,
    [MavCmd.NAV_VTOL_TAKEOFF]: NavVtolTakeoffCommand,
    [MavCmd.NAV_VTOL_LAND]: NavVtolLandCommand,
    [MavCmd.NAV_GUIDED_ENABLE]: NavGuidedEnableCommand,
    [MavCmd.NAV_DELAY]: NavDelayCommand,
    [MavCmd.NAV_PAYLOAD_PLACE]: NavPayloadPlaceCommand,
    [MavCmd.NAV_LAST]: NavLastCommand,
    [MavCmd.CONDITION_DELAY]: ConditionDelayCommand,
    [MavCmd.CONDITION_CHANGE_ALT]: ConditionChangeAltCommand,
    [MavCmd.CONDITION_DISTANCE]: ConditionDistanceCommand,
    [MavCmd.CONDITION_YAW]: ConditionYawCommand,
    [MavCmd.CONDITION_LAST]: ConditionLastCommand,
    [MavCmd.DO_SET_MODE]: DoSetModeCommand,
    [MavCmd.DO_JUMP]: DoJumpCommand,
    [MavCmd.DO_CHANGE_SPEED]: DoChangeSpeedCommand,
    [MavCmd.DO_SET_HOME]: DoSetHomeCommand,
    [MavCmd.DO_SET_PARAMETER]: DoSetParameterCommand,
    [MavCmd.DO_SET_RELAY]: DoSetRelayCommand,
    [MavCmd.DO_REPEAT_RELAY]: DoRepeatRelayCommand,
    [MavCmd.DO_SET_SERVO]: DoSetServoCommand,
    [MavCmd.DO_REPEAT_SERVO]: DoRepeatServoCommand,
    [MavCmd.DO_FLIGHTTERMINATION]: DoFlightterminationCommand,
    [MavCmd.DO_CHANGE_ALTITUDE]: DoChangeAltitudeCommand,
    [MavCmd.DO_LAND_START]: DoLandStartCommand,
    [MavCmd.DO_RALLY_LAND]: DoRallyLandCommand,
    [MavCmd.DO_GO_AROUND]: DoGoAroundCommand,
    [MavCmd.DO_REPOSITION]: DoRepositionCommand,
    [MavCmd.DO_PAUSE_CONTINUE]: DoPauseContinueCommand,
    [MavCmd.DO_SET_REVERSE]: DoSetReverseCommand,
    [MavCmd.DO_SET_ROI_LOCATION]: DoSetRoiLocationCommand,
    [MavCmd.DO_SET_ROI_WPNEXT_OFFSET]: DoSetRoiWpnextOffsetCommand,
    [MavCmd.DO_SET_ROI_NONE]: DoSetRoiNoneCommand,
    [MavCmd.DO_SET_ROI_SYSID]: DoSetRoiSysidCommand,
    [MavCmd.DO_CONTROL_VIDEO]: DoControlVideoCommand,
    [MavCmd.DO_SET_ROI]: DoSetRoiCommand,
    [MavCmd.DO_DIGICAM_CONFIGURE]: DoDigicamConfigureCommand,
    [MavCmd.DO_DIGICAM_CONTROL]: DoDigicamControlCommand,
    [MavCmd.DO_MOUNT_CONFIGURE]: DoMountConfigureCommand,
    [MavCmd.DO_MOUNT_CONTROL]: DoMountControlCommand,
    [MavCmd.DO_SET_CAM_TRIGG_DIST]: DoSetCamTriggDistCommand,
    [MavCmd.DO_FENCE_ENABLE]: DoFenceEnableCommand,
    [MavCmd.DO_PARACHUTE]: DoParachuteCommand,
    [MavCmd.DO_MOTOR_TEST]: DoMotorTestCommand,
    [MavCmd.DO_INVERTED_FLIGHT]: DoInvertedFlightCommand,
    [MavCmd.DO_GRIPPER]: DoGripperCommand,
    [MavCmd.DO_AUTOTUNE_ENABLE]: DoAutotuneEnableCommand,
    [MavCmd.NAV_SET_YAW_SPEED]: NavSetYawSpeedCommand,
    [MavCmd.DO_SET_CAM_TRIGG_INTERVAL]: DoSetCamTriggIntervalCommand,
    [MavCmd.DO_MOUNT_CONTROL_QUAT]: DoMountControlQuatCommand,
    [MavCmd.DO_GUIDED_MASTER]: DoGuidedMasterCommand,
    [MavCmd.DO_GUIDED_LIMITS]: DoGuidedLimitsCommand,
    [MavCmd.DO_ENGINE_CONTROL]: DoEngineControlCommand,
    [MavCmd.DO_SET_MISSION_CURRENT]: DoSetMissionCurrentCommand,
    [MavCmd.DO_LAST]: DoLastCommand,
    [MavCmd.PREFLIGHT_CALIBRATION]: PreflightCalibrationCommand,
    [MavCmd.PREFLIGHT_SET_SENSOR_OFFSETS]: PreflightSetSensorOffsetsCommand,
    [MavCmd.PREFLIGHT_UAVCAN]: PreflightUavcanCommand,
    [MavCmd.PREFLIGHT_STORAGE]: PreflightStorageCommand,
    [MavCmd.PREFLIGHT_REBOOT_SHUTDOWN]: PreflightRebootShutdownCommand,
    [MavCmd.OVERRIDE_GOTO]: OverrideGotoCommand,
    [MavCmd.OBLIQUE_SURVEY]: ObliqueSurveyCommand,
    [MavCmd.MISSION_START]: MissionStartCommand,
    [MavCmd.COMPONENT_ARM_DISARM]: ComponentArmDisarmCommand,
    [MavCmd.RUN_PREARM_CHECKS]: RunPrearmChecksCommand,
    [MavCmd.GET_HOME_POSITION]: GetHomePositionCommand,
    [MavCmd.START_RX_PAIR]: StartRxPairCommand,
    [MavCmd.GET_MESSAGE_INTERVAL]: GetMessageIntervalCommand,
    [MavCmd.SET_MESSAGE_INTERVAL]: SetMessageIntervalCommand,
    [MavCmd.REQUEST_MESSAGE]: RequestMessageCommand,
    [MavCmd.REQUEST_PROTOCOL_VERSION]: RequestProtocolVersionCommand,
    [MavCmd.REQUEST_AUTOPILOT_CAPABILITIES]: RequestAutopilotCapabilitiesCommand,
    [MavCmd.REQUEST_CAMERA_INFORMATION]: RequestCameraInformationCommand,
    [MavCmd.REQUEST_CAMERA_SETTINGS]: RequestCameraSettingsCommand,
    [MavCmd.REQUEST_STORAGE_INFORMATION]: RequestStorageInformationCommand,
    [MavCmd.STORAGE_FORMAT]: StorageFormatCommand,
    [MavCmd.REQUEST_CAMERA_CAPTURE_STATUS]: RequestCameraCaptureStatusCommand,
    [MavCmd.REQUEST_FLIGHT_INFORMATION]: RequestFlightInformationCommand,
    [MavCmd.RESET_CAMERA_SETTINGS]: ResetCameraSettingsCommand,
    [MavCmd.SET_CAMERA_MODE]: SetCameraModeCommand,
    [MavCmd.SET_CAMERA_ZOOM]: SetCameraZoomCommand,
    [MavCmd.SET_CAMERA_FOCUS]: SetCameraFocusCommand,
    [MavCmd.JUMP_TAG]: JumpTagCommand,
    [MavCmd.DO_JUMP_TAG]: DoJumpTagCommand,
    [MavCmd.DO_GIMBAL_MANAGER_PITCHYAW]: DoGimbalManagerPitchyawCommand,
    [MavCmd.DO_GIMBAL_MANAGER_CONFIGURE]: DoGimbalManagerConfigureCommand,
    [MavCmd.IMAGE_START_CAPTURE]: ImageStartCaptureCommand,
    [MavCmd.IMAGE_STOP_CAPTURE]: ImageStopCaptureCommand,
    [MavCmd.DO_TRIGGER_CONTROL]: DoTriggerControlCommand,
    [MavCmd.CAMERA_TRACK_POINT]: CameraTrackPointCommand,
    [MavCmd.CAMERA_TRACK_RECTANGLE]: CameraTrackRectangleCommand,
    [MavCmd.CAMERA_STOP_TRACKING]: CameraStopTrackingCommand,
    [MavCmd.VIDEO_START_CAPTURE]: VideoStartCaptureCommand,
    [MavCmd.VIDEO_STOP_CAPTURE]: VideoStopCaptureCommand,
    [MavCmd.VIDEO_START_STREAMING]: VideoStartStreamingCommand,
    [MavCmd.VIDEO_STOP_STREAMING]: VideoStopStreamingCommand,
    [MavCmd.REQUEST_VIDEO_STREAM_INFORMATION]: RequestVideoStreamInformationCommand,
    [MavCmd.REQUEST_VIDEO_STREAM_STATUS]: RequestVideoStreamStatusCommand,
    [MavCmd.LOGGING_START]: LoggingStartCommand,
    [MavCmd.LOGGING_STOP]: LoggingStopCommand,
    [MavCmd.AIRFRAME_CONFIGURATION]: AirframeConfigurationCommand,
    [MavCmd.CONTROL_HIGH_LATENCY]: ControlHighLatencyCommand,
    [MavCmd.PANORAMA_CREATE]: PanoramaCreateCommand,
    [MavCmd.DO_VTOL_TRANSITION]: DoVtolTransitionCommand,
    [MavCmd.ARM_AUTHORIZATION_REQUEST]: ArmAuthorizationRequestCommand,
    [MavCmd.SET_GUIDED_SUBMODE_STANDARD]: SetGuidedSubmodeStandardCommand,
    [MavCmd.SET_GUIDED_SUBMODE_CIRCLE]: SetGuidedSubmodeCircleCommand,
    [MavCmd.NAV_FENCE_RETURN_POINT]: NavFenceReturnPointCommand,
    [MavCmd.NAV_FENCE_POLYGON_VERTEX_INCLUSION]: NavFencePolygonVertexInclusionCommand,
    [MavCmd.NAV_FENCE_POLYGON_VERTEX_EXCLUSION]: NavFencePolygonVertexExclusionCommand,
    [MavCmd.NAV_FENCE_CIRCLE_INCLUSION]: NavFenceCircleInclusionCommand,
    [MavCmd.NAV_FENCE_CIRCLE_EXCLUSION]: NavFenceCircleExclusionCommand,
    [MavCmd.NAV_RALLY_POINT]: NavRallyPointCommand,
    [MavCmd.NAV_SWARM_ROI_POLYGON_VERTEX_INCLUSION]: NavSwarmRoiPolygonVertexInclusionCommand,
    [MavCmd.UAVCAN_GET_NODE_INFO]: UavcanGetNodeInfoCommand,
    [MavCmd.DO_SET_SAFETY_SWITCH_STATE]: DoSetSafetySwitchStateCommand,
    [MavCmd.DO_ADSB_OUT_IDENT]: DoAdsbOutIdentCommand,
    [MavCmd.PAYLOAD_PREPARE_DEPLOY]: PayloadPrepareDeployCommand,
    [MavCmd.PAYLOAD_CONTROL_DEPLOY]: PayloadControlDeployCommand,
    [MavCmd.FIXED_MAG_CAL_YAW]: FixedMagCalYawCommand,
    [MavCmd.DO_WINCH]: DoWinchCommand,
    [MavCmd.WAYPOINT_USER_1]: WaypointUser1Command,
    [MavCmd.WAYPOINT_USER_2]: WaypointUser2Command,
    [MavCmd.WAYPOINT_USER_3]: WaypointUser3Command,
    [MavCmd.WAYPOINT_USER_4]: WaypointUser4Command,
    [MavCmd.WAYPOINT_USER_5]: WaypointUser5Command,
    [MavCmd.SPATIAL_USER_1]: SpatialUser1Command,
    [MavCmd.SPATIAL_USER_2]: SpatialUser2Command,
    [MavCmd.SPATIAL_USER_3]: SpatialUser3Command,
    [MavCmd.SPATIAL_USER_4]: SpatialUser4Command,
    [MavCmd.SPATIAL_USER_5]: SpatialUser5Command,
    [MavCmd.USER_1]: User1Command,
    [MavCmd.USER_2]: User2Command,
    [MavCmd.USER_3]: User3Command,
    [MavCmd.USER_4]: User4Command,
    [MavCmd.USER_5]: User5Command,
    [MavCmd.CAN_FORWARD]: CanForwardCommand,
};
//# sourceMappingURL=common.js.map