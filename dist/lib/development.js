"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REGISTRY = exports.GroupEnd = exports.GroupStart = exports.ComponentInformationBasic = exports.WifiNetworkInfo = exports.Airspeed = exports.MissionChecksum = exports.MissionChanged = exports.ParamAckTransaction = exports.ComponentCapFlags1 = exports.MavCmd = exports.ParamTransactionAction = exports.ParamTransactionTransport = exports.AirspeedSensorType = exports.WifiNetworkSecurity = void 0;
const mavlink_1 = require("./mavlink");
/**
 * WiFi wireless security protocols.
 */
var WifiNetworkSecurity;
(function (WifiNetworkSecurity) {
    WifiNetworkSecurity[WifiNetworkSecurity["UNDEFINED"] = 0] = "UNDEFINED";
    WifiNetworkSecurity[WifiNetworkSecurity["OPEN"] = 1] = "OPEN";
    WifiNetworkSecurity[WifiNetworkSecurity["WEP"] = 2] = "WEP";
    WifiNetworkSecurity[WifiNetworkSecurity["WPA1"] = 3] = "WPA1";
    WifiNetworkSecurity[WifiNetworkSecurity["WPA2"] = 4] = "WPA2";
    WifiNetworkSecurity[WifiNetworkSecurity["WPA3"] = 5] = "WPA3";
})(WifiNetworkSecurity = exports.WifiNetworkSecurity || (exports.WifiNetworkSecurity = {}));
/**
 * Types of airspeed sensor/data. May be be used in AIRSPEED message to estimate accuracy of indicated
 * speed.
 */
var AirspeedSensorType;
(function (AirspeedSensorType) {
    AirspeedSensorType[AirspeedSensorType["UNKNOWN"] = 0] = "UNKNOWN";
    AirspeedSensorType[AirspeedSensorType["DIFFERENTIAL"] = 1] = "DIFFERENTIAL";
    AirspeedSensorType[AirspeedSensorType["MASS_FLOW"] = 2] = "MASS_FLOW";
    AirspeedSensorType[AirspeedSensorType["WINDVANE"] = 3] = "WINDVANE";
    AirspeedSensorType[AirspeedSensorType["SYNTHETIC"] = 4] = "SYNTHETIC";
})(AirspeedSensorType = exports.AirspeedSensorType || (exports.AirspeedSensorType = {}));
/**
 * Possible transport layers to set and get parameters via mavlink during a parameter transaction.
 */
var ParamTransactionTransport;
(function (ParamTransactionTransport) {
    ParamTransactionTransport[ParamTransactionTransport["PARAM"] = 0] = "PARAM";
    ParamTransactionTransport[ParamTransactionTransport["PARAM_EXT"] = 1] = "PARAM_EXT";
})(ParamTransactionTransport = exports.ParamTransactionTransport || (exports.ParamTransactionTransport = {}));
/**
 * Possible parameter transaction actions.
 */
var ParamTransactionAction;
(function (ParamTransactionAction) {
    ParamTransactionAction[ParamTransactionAction["START"] = 0] = "START";
    ParamTransactionAction[ParamTransactionAction["COMMIT"] = 1] = "COMMIT";
    ParamTransactionAction[ParamTransactionAction["CANCEL"] = 2] = "CANCEL";
})(ParamTransactionAction = exports.ParamTransactionAction || (exports.ParamTransactionAction = {}));
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
     * Request to start or end a parameter transaction. Multiple kinds of transport layers can be used to
     * exchange parameters in the transaction (param, param_ext and mavftp). The command response can
     * either be a success/failure or an in progress in case the receiving side takes some time to apply
     * the parameters.
     */
    MavCmd[MavCmd["PARAM_TRANSACTION"] = 900] = "PARAM_TRANSACTION";
    /**
     * Sets the action on geofence breach. If sent using the command protocol this sets the system-default
     * geofence action. As part of a mission protocol plan it sets the fence action for the next complete
     * geofence definition *after* the command. Note: A fence action defined in a plan will override the
     * default system setting (even if the system-default is `FENCE_ACTION_NONE`). Note: Every geofence in
     * a plan can have its own action; if no fence action is defined for a particular fence the
     * system-default will be used. Note: The flight stack should reject a plan or command that uses a
     * geofence action that it does not support and send a STATUSTEXT with the reason.
     */
    MavCmd[MavCmd["SET_FENCE_BREACH_ACTION"] = 5010] = "SET_FENCE_BREACH_ACTION";
})(MavCmd = exports.MavCmd || (exports.MavCmd = {}));
/**
 * MAV_CMD
 */
(function (MavCmd) {
    /**
     * Request a target system to start an upgrade of one (or all) of its components. For example, the
     * command might be sent to a companion computer to cause it to upgrade a connected flight controller.
     * The system doing the upgrade will report progress using the normal command protocol sequence for a
     * long running operation. Command protocol information: https://mavlink.io/en/services/command.html.
     */
    MavCmd[MavCmd["DO_UPGRADE"] = 247] = "DO_UPGRADE";
    /**
     * Define start of a group of mission items. When control reaches this command a GROUP_START message is
     * emitted. The end of a group is marked using MAV_CMD_GROUP_END with the same group id. Group ids are
     * expected, but not required, to iterate sequentially. Groups can be nested.
     */
    MavCmd[MavCmd["GROUP_START"] = 301] = "GROUP_START";
    /**
     * Define end of a group of mission items. When control reaches this command a GROUP_END message is
     * emitted. The start of the group is marked is marked using MAV_CMD_GROUP_START with the same group
     * id. Group ids are expected, but not required, to iterate sequentially. Groups can be nested.
     */
    MavCmd[MavCmd["GROUP_END"] = 302] = "GROUP_END";
})(MavCmd = exports.MavCmd || (exports.MavCmd = {}));
/**
 * Component capability flags 1 (Bitmap)
 */
var ComponentCapFlags1;
(function (ComponentCapFlags1) {
    ComponentCapFlags1[ComponentCapFlags1["PARAM"] = 1] = "PARAM";
    ComponentCapFlags1[ComponentCapFlags1["PARAM_EXT"] = 2] = "PARAM_EXT";
    ComponentCapFlags1[ComponentCapFlags1["COMPONENT_INFORMATION"] = 4] = "COMPONENT_INFORMATION";
    ComponentCapFlags1[ComponentCapFlags1["GIMBAL_V2"] = 8] = "GIMBAL_V2";
    ComponentCapFlags1[ComponentCapFlags1["MAVLINK_FTP"] = 16] = "MAVLINK_FTP";
    ComponentCapFlags1[ComponentCapFlags1["EVENTS_INTERFACE"] = 32] = "EVENTS_INTERFACE";
    ComponentCapFlags1[ComponentCapFlags1["CAMERA"] = 64] = "CAMERA";
    ComponentCapFlags1[ComponentCapFlags1["CAMERA_V2"] = 128] = "CAMERA_V2";
})(ComponentCapFlags1 = exports.ComponentCapFlags1 || (exports.ComponentCapFlags1 = {}));
/**
 * Response from a PARAM_SET message when it is used in a transaction.
 */
class ParamAckTransaction extends mavlink_1.MavLinkData {
}
exports.ParamAckTransaction = ParamAckTransaction;
ParamAckTransaction.MSG_ID = 19;
ParamAckTransaction.MSG_NAME = 'PARAM_ACK_TRANSACTION';
ParamAckTransaction.PAYLOAD_LENGTH = 24;
ParamAckTransaction.MAGIC_NUMBER = 137;
ParamAckTransaction.FIELDS = [
    new mavlink_1.MavLinkPacketField('param_value', 'paramValue', 0, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 4, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 5, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('param_id', 'paramId', 6, false, 1, 'char[]', '', 16),
    new mavlink_1.MavLinkPacketField('param_type', 'paramType', 22, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('param_result', 'paramResult', 23, false, 1, 'uint8_t', ''),
];
/**
 * A broadcast message to notify any ground station or SDK if a mission, geofence or safe points have
 * changed on the vehicle.
 */
class MissionChanged extends mavlink_1.MavLinkData {
}
exports.MissionChanged = MissionChanged;
MissionChanged.MSG_ID = 52;
MissionChanged.MSG_NAME = 'MISSION_CHANGED';
MissionChanged.PAYLOAD_LENGTH = 7;
MissionChanged.MAGIC_NUMBER = 132;
MissionChanged.FIELDS = [
    new mavlink_1.MavLinkPacketField('start_index', 'startIndex', 0, false, 2, 'int16_t', ''),
    new mavlink_1.MavLinkPacketField('end_index', 'endIndex', 2, false, 2, 'int16_t', ''),
    new mavlink_1.MavLinkPacketField('origin_sysid', 'originSysid', 4, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('origin_compid', 'originCompid', 5, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('mission_type', 'missionType', 6, false, 1, 'uint8_t', ''),
];
/**
 * Checksum for the current mission, rally point or geofence plan, or for the "combined" plan (a GCS
 * can use these checksums to determine if it has matching plans). This message must be broadcast with
 * the appropriate checksum following any change to a mission, geofence or rally point definition
 * (immediately after the MISSION_ACK that completes the upload sequence). It may also be requested
 * using MAV_CMD_REQUEST_MESSAGE, where param 2 indicates the plan type for which the checksum is
 * required. The checksum must be calculated on the autopilot, but may also be calculated by the GCS.
 * The checksum uses the same CRC32 algorithm as MAVLink FTP
 * (https://mavlink.io/en/services/ftp.html#crc32-implementation). The checksum for a mission, geofence
 * or rally point definition is run over each item in the plan in seq order (excluding the home
 * location if present in the plan), and covers the following fields (in order): frame, command,
 * autocontinue, param1, param2, param3, param4, param5, param6, param7. The checksum for the whole
 * plan (MAV_MISSION_TYPE_ALL) is calculated using the same approach, running over each sub-plan in the
 * following order: mission, geofence then rally point.
 */
class MissionChecksum extends mavlink_1.MavLinkData {
}
exports.MissionChecksum = MissionChecksum;
MissionChecksum.MSG_ID = 53;
MissionChecksum.MSG_NAME = 'MISSION_CHECKSUM';
MissionChecksum.PAYLOAD_LENGTH = 5;
MissionChecksum.MAGIC_NUMBER = 3;
MissionChecksum.FIELDS = [
    new mavlink_1.MavLinkPacketField('checksum', 'checksum', 0, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('mission_type', 'missionType', 4, false, 1, 'uint8_t', ''),
];
/**
 * Airspeed information from a sensor.
 */
class Airspeed extends mavlink_1.MavLinkData {
}
exports.Airspeed = Airspeed;
Airspeed.MSG_ID = 295;
Airspeed.MSG_NAME = 'AIRSPEED';
Airspeed.PAYLOAD_LENGTH = 20;
Airspeed.MAGIC_NUMBER = 41;
Airspeed.FIELDS = [
    new mavlink_1.MavLinkPacketField('airspeed', 'airspeed', 0, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('press_diff', 'pressDiff', 4, false, 4, 'float', 'hPa'),
    new mavlink_1.MavLinkPacketField('press_static', 'pressStatic', 8, false, 4, 'float', 'hPa'),
    new mavlink_1.MavLinkPacketField('error', 'error', 12, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('temperature', 'temperature', 16, false, 2, 'int16_t', 'cdegC'),
    new mavlink_1.MavLinkPacketField('id', 'id', 18, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('type', 'type', 19, false, 1, 'uint8_t', ''),
];
/**
 * Detected WiFi network status information. This message is sent per each WiFi network detected in
 * range with known SSID and general status parameters.
 */
class WifiNetworkInfo extends mavlink_1.MavLinkData {
}
exports.WifiNetworkInfo = WifiNetworkInfo;
WifiNetworkInfo.MSG_ID = 298;
WifiNetworkInfo.MSG_NAME = 'WIFI_NETWORK_INFO';
WifiNetworkInfo.PAYLOAD_LENGTH = 37;
WifiNetworkInfo.MAGIC_NUMBER = 237;
WifiNetworkInfo.FIELDS = [
    new mavlink_1.MavLinkPacketField('data_rate', 'dataRate', 0, false, 2, 'uint16_t', 'MiB/s'),
    new mavlink_1.MavLinkPacketField('ssid', 'ssid', 2, false, 1, 'char[]', '', 32),
    new mavlink_1.MavLinkPacketField('channel_id', 'channelId', 34, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('signal_quality', 'signalQuality', 35, false, 1, 'uint8_t', '%'),
    new mavlink_1.MavLinkPacketField('security', 'security', 36, false, 1, 'uint8_t', ''),
];
/**
 * Basic component information data.
 */
class ComponentInformationBasic extends mavlink_1.MavLinkData {
}
exports.ComponentInformationBasic = ComponentInformationBasic;
ComponentInformationBasic.MSG_ID = 396;
ComponentInformationBasic.MSG_NAME = 'COMPONENT_INFORMATION_BASIC';
ComponentInformationBasic.PAYLOAD_LENGTH = 124;
ComponentInformationBasic.MAGIC_NUMBER = 45;
ComponentInformationBasic.FIELDS = [
    new mavlink_1.MavLinkPacketField('component_cap_flags1', 'componentCapFlags1', 0, false, 8, 'uint64_t', ''),
    new mavlink_1.MavLinkPacketField('time_boot_ms', 'timeBootMs', 8, false, 4, 'uint32_t', 'ms'),
    new mavlink_1.MavLinkPacketField('vendor_name', 'vendorName', 12, false, 1, 'uint8_t[]', '', 32),
    new mavlink_1.MavLinkPacketField('model_name', 'modelName', 44, false, 1, 'uint8_t[]', '', 32),
    new mavlink_1.MavLinkPacketField('software_version', 'softwareVersion', 76, false, 1, 'char[]', '', 24),
    new mavlink_1.MavLinkPacketField('hardware_version', 'hardwareVersion', 100, false, 1, 'char[]', '', 24),
];
/**
 * Emitted during mission execution when control reaches MAV_CMD_GROUP_START.
 */
class GroupStart extends mavlink_1.MavLinkData {
}
exports.GroupStart = GroupStart;
GroupStart.MSG_ID = 414;
GroupStart.MSG_NAME = 'GROUP_START';
GroupStart.PAYLOAD_LENGTH = 16;
GroupStart.MAGIC_NUMBER = 109;
GroupStart.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_usec', 'timeUsec', 0, false, 8, 'uint64_t', 'us'),
    new mavlink_1.MavLinkPacketField('group_id', 'groupId', 8, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('mission_checksum', 'missionChecksum', 12, false, 4, 'uint32_t', ''),
];
/**
 * Emitted during mission execution when control reaches MAV_CMD_GROUP_END.
 */
class GroupEnd extends mavlink_1.MavLinkData {
}
exports.GroupEnd = GroupEnd;
GroupEnd.MSG_ID = 415;
GroupEnd.MSG_NAME = 'GROUP_END';
GroupEnd.PAYLOAD_LENGTH = 16;
GroupEnd.MAGIC_NUMBER = 161;
GroupEnd.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_usec', 'timeUsec', 0, false, 8, 'uint64_t', 'us'),
    new mavlink_1.MavLinkPacketField('group_id', 'groupId', 8, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('mission_checksum', 'missionChecksum', 12, false, 4, 'uint32_t', ''),
];
exports.REGISTRY = {
    19: ParamAckTransaction,
    52: MissionChanged,
    53: MissionChecksum,
    295: Airspeed,
    298: WifiNetworkInfo,
    396: ComponentInformationBasic,
    414: GroupStart,
    415: GroupEnd,
};
