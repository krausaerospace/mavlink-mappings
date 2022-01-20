import { int16_t, uint8_t, uint16_t, uint32_t, uint64_t, float } from './types';
import { MavLinkPacketRegistry, MavLinkPacketField, MavLinkData } from './mavlink';
import { MavMissionType, MavParamType, ParamAck } from './common';
import { MavComponent } from './minimal';
/**
 * WiFi wireless security protocols.
 */
export declare enum WifiNetworkSecurity {
    'UNDEFINED' = 0,
    'OPEN' = 1,
    'WEP' = 2,
    'WPA1' = 3,
    'WPA2' = 4,
    'WPA3' = 5
}
/**
 * Types of airspeed sensor/data. May be be used in AIRSPEED message to estimate accuracy of indicated
 * speed.
 */
export declare enum AirspeedSensorType {
    'UNKNOWN' = 0,
    'DIFFERENTIAL' = 1,
    'MASS_FLOW' = 2,
    'WINDVANE' = 3,
    'SYNTHETIC' = 4
}
/**
 * Possible transport layers to set and get parameters via mavlink during a parameter transaction.
 */
export declare enum ParamTransactionTransport {
    'PARAM' = 0,
    'PARAM_EXT' = 1
}
/**
 * Possible parameter transaction actions.
 */
export declare enum ParamTransactionAction {
    'START' = 0,
    'COMMIT' = 1,
    'CANCEL' = 2
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
     * Request to start or end a parameter transaction. Multiple kinds of transport layers can be used to
     * exchange parameters in the transaction (param, param_ext and mavftp). The command response can
     * either be a success/failure or an in progress in case the receiving side takes some time to apply
     * the parameters.
     */
    'PARAM_TRANSACTION' = 900,
    /**
     * Sets the action on geofence breach. If sent using the command protocol this sets the system-default
     * geofence action. As part of a mission protocol plan it sets the fence action for the next complete
     * geofence definition *after* the command. Note: A fence action defined in a plan will override the
     * default system setting (even if the system-default is `FENCE_ACTION_NONE`). Note: Every geofence in
     * a plan can have its own action; if no fence action is defined for a particular fence the
     * system-default will be used. Note: The flight stack should reject a plan or command that uses a
     * geofence action that it does not support and send a STATUSTEXT with the reason.
     */
    'SET_FENCE_BREACH_ACTION' = 5010
}
/**
 * MAV_CMD
 */
export declare enum MavCmd {
    /**
     * Request a target system to start an upgrade of one (or all) of its components. For example, the
     * command might be sent to a companion computer to cause it to upgrade a connected flight controller.
     * The system doing the upgrade will report progress using the normal command protocol sequence for a
     * long running operation. Command protocol information: https://mavlink.io/en/services/command.html.
     */
    'DO_UPGRADE' = 247,
    /**
     * Define start of a group of mission items. When control reaches this command a GROUP_START message is
     * emitted. The end of a group is marked using MAV_CMD_GROUP_END with the same group id. Group ids are
     * expected, but not required, to iterate sequentially. Groups can be nested.
     */
    'GROUP_START' = 301,
    /**
     * Define end of a group of mission items. When control reaches this command a GROUP_END message is
     * emitted. The start of the group is marked is marked using MAV_CMD_GROUP_START with the same group
     * id. Group ids are expected, but not required, to iterate sequentially. Groups can be nested.
     */
    'GROUP_END' = 302
}
/**
 * Component capability flags 1 (Bitmap)
 */
export declare enum ComponentCapFlags1 {
    'PARAM' = 1,
    'PARAM_EXT' = 2,
    'COMPONENT_INFORMATION' = 4,
    'GIMBAL_V2' = 8,
    'MAVLINK_FTP' = 16,
    'EVENTS_INTERFACE' = 32,
    'CAMERA' = 64,
    'CAMERA_V2' = 128
}
/**
 * Response from a PARAM_SET message when it is used in a transaction.
 */
export declare class ParamAckTransaction extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Id of system that sent PARAM_SET message.
     */
    targetSystem: uint8_t;
    /**
     * Id of system that sent PARAM_SET message.
     */
    targetComponent: uint8_t;
    /**
     * Parameter id, terminated by NULL if the length is less than 16 human-readable chars and WITHOUT null
     * termination (NULL) byte if the length is exactly 16 chars - applications have to provide 16+1 bytes
     * storage if the ID is stored as string
     */
    paramId: string;
    /**
     * Parameter value (new value if PARAM_ACCEPTED, current value otherwise)
     */
    paramValue: float;
    /**
     * Parameter type.
     */
    paramType: MavParamType;
    /**
     * Result code.
     */
    paramResult: ParamAck;
}
/**
 * A broadcast message to notify any ground station or SDK if a mission, geofence or safe points have
 * changed on the vehicle.
 */
export declare class MissionChanged extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Start index for partial mission change (-1 for all items).
     */
    startIndex: int16_t;
    /**
     * End index of a partial mission change. -1 is a synonym for the last mission item (i.e. selects all
     * items from start_index). Ignore field if start_index=-1.
     */
    endIndex: int16_t;
    /**
     * System ID of the author of the new mission.
     */
    originSysid: uint8_t;
    /**
     * Compnent ID of the author of the new mission.
     */
    originCompid: MavComponent;
    /**
     * Mission type.
     */
    missionType: MavMissionType;
}
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
export declare class MissionChecksum extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Mission type.
     */
    missionType: MavMissionType;
    /**
     * CRC32 checksum of current plan for specified type.
     */
    checksum: uint32_t;
}
/**
 * Airspeed information from a sensor.
 */
export declare class Airspeed extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Sensor ID.
     */
    id: uint8_t;
    /**
     * Calibrated airspeed (CAS) if available, otherwise indicated airspeed (IAS).
     * Units: m/s
     */
    airspeed: float;
    /**
     * Temperature. INT16_MAX for value unknown/not supplied.
     * Units: cdegC
     */
    temperature: int16_t;
    /**
     * Differential pressure. NaN for value unknown/not supplied.
     * Units: hPa
     */
    pressDiff: float;
    /**
     * Static pressure. NaN for value unknown/not supplied.
     * Units: hPa
     */
    pressStatic: float;
    /**
     * Error/accuracy. NaN for value unknown/not supplied.
     * Units: m/s
     */
    error: float;
    /**
     * Airspeed sensor type. NaN for value unknown/not supplied. Used to estimate accuracy (i.e. as an
     * alternative to using the error field).
     */
    type: AirspeedSensorType;
}
/**
 * Detected WiFi network status information. This message is sent per each WiFi network detected in
 * range with known SSID and general status parameters.
 */
export declare class WifiNetworkInfo extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Name of Wi-Fi network (SSID).
     */
    ssid: string;
    /**
     * WiFi network operating channel ID. Set to 0 if unknown or unidentified.
     */
    channelId: uint8_t;
    /**
     * WiFi network signal quality.
     * Units: %
     */
    signalQuality: uint8_t;
    /**
     * WiFi network data rate. Set to UINT16_MAX if data_rate information is not supplied.
     * Units: MiB/s
     */
    dataRate: uint16_t;
    /**
     * WiFi network security type.
     */
    security: WifiNetworkSecurity;
}
/**
 * Basic component information data.
 */
export declare class ComponentInformationBasic extends MavLinkData {
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
     * Name of the component vendor
     */
    vendorName: uint8_t[];
    /**
     * Name of the component model
     */
    modelName: uint8_t[];
    /**
     * Sofware version. The version format can be custom, recommended is SEMVER 'major.minor.patch'.
     */
    softwareVersion: string;
    /**
     * Hardware version. The version format can be custom, recommended is SEMVER 'major.minor.patch'.
     */
    hardwareVersion: string;
    /**
     * Component capability flags 1 (this is called 1, so that number 2 could be added in the future).
     */
    componentCapFlags1: ComponentCapFlags1;
}
/**
 * Emitted during mission execution when control reaches MAV_CMD_GROUP_START.
 */
export declare class GroupStart extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Mission-unique group id (from MAV_CMD_GROUP_START).
     */
    groupId: uint32_t;
    /**
     * CRC32 checksum of current plan for MAV_MISSION_TYPE_ALL. As defined in MISSION_CHECKSUM message.
     */
    missionChecksum: uint32_t;
    /**
     * Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format
     * (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
     * Units: us
     */
    timeUsec: uint64_t;
}
/**
 * Emitted during mission execution when control reaches MAV_CMD_GROUP_END.
 */
export declare class GroupEnd extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    /**
     * Mission-unique group id (from MAV_CMD_GROUP_END).
     */
    groupId: uint32_t;
    /**
     * CRC32 checksum of current plan for MAV_MISSION_TYPE_ALL. As defined in MISSION_CHECKSUM message.
     */
    missionChecksum: uint32_t;
    /**
     * Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format
     * (since 1.1.1970 or since system boot) by checking for the magnitude of the number.
     * Units: us
     */
    timeUsec: uint64_t;
}
export declare const REGISTRY: MavLinkPacketRegistry;
