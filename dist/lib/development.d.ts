import { int16_t, uint8_t, uint32_t, float } from './types';
import { MavLinkPacketRegistry, MavLinkPacketField, MavLinkData } from './mavlink';
import { MavMissionType } from './common';
/**
 * Airspeed sensor flags
 */
export declare enum AirspeedSensorFlags {
    /**
     * Airspeed sensor is unhealthy
     */
    'UNHEALTHY' = 0,
    /**
     * True if the data from this sensor is being actively used by the flight controller for guidance,
     * navigation or control.
     */
    'USING' = 1
}
/**
 * RADIO_RC_CHANNELS flags (bitmask).
 */
export declare enum RadioRcChannelsFlags {
    /**
     * Failsafe is active. The content of the RC channels data in the RADIO_RC_CHANNELS message is
     * implementation dependent.
     */
    'FAILSAFE' = 1,
    /**
     * Channel data may be out of date. This is set when the receiver is unable to validate incoming data
     * from the transmitter and has therefore resent the last valid data it received.
     */
    'OUTDATED' = 2
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
    constructor();
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
    constructor();
    /**
     * Sensor ID.
     */
    id: uint8_t;
    /**
     * Calibrated airspeed (CAS).
     * Units: m/s
     */
    airspeed: float;
    /**
     * Temperature. INT16_MAX for value unknown/not supplied.
     * Units: cdegC
     */
    temperature: int16_t;
    /**
     * Raw differential pressure. NaN for value unknown/not supplied.
     * Units: hPa
     */
    rawPress: float;
    /**
     * Airspeed sensor flags.
     */
    flags: AirspeedSensorFlags;
}
/**
 * RC channel outputs from a MAVLink RC receiver for input to a flight controller or other components
 * (allows an RC receiver to connect via MAVLink instead of some other protocol such as PPM-Sum or
 * S.BUS). Note that this is not intended to be an over-the-air format, and does not replace
 * RC_CHANNELS and similar messages reported by the flight controller. The target_system field should
 * normally be set to the system id of the system to control, typically the flight controller. The
 * target_component field can normally be set to 0, so that all components of the system can receive
 * the message. The channels array field can publish up to 32 channels; the number of channel items
 * used in the array is specified in the count field. The time_last_update_ms field contains the
 * timestamp of the last received valid channels data in the receiver's time domain. The count field
 * indicates the first index of the channel array that is not used for channel data (this and later
 * indexes are zero-filled). The RADIO_RC_CHANNELS_FLAGS_OUTDATED flag is set by the receiver if the
 * channels data is not up-to-date (for example, if new data from the transmitter could not be
 * validated so the last valid data is resent). The RADIO_RC_CHANNELS_FLAGS_FAILSAFE failsafe flag is
 * set by the receiver if the receiver's failsafe condition is met (implementation dependent, e.g.,
 * connection to the RC radio is lost). In this case time_last_update_ms still contains the timestamp
 * of the last valid channels data, but the content of the channels data is not defined by the protocol
 * (it is up to the implementation of the receiver). For instance, the channels data could contain
 * failsafe values configured in the receiver; the default is to carry the last valid data. Note: The
 * RC channels fields are extensions to ensure that they are located at the end of the serialized
 * payload and subject to MAVLink's trailing-zero trimming.
 */
export declare class RadioRcChannels extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    constructor();
    /**
     * System ID (ID of target system, normally flight controller).
     */
    targetSystem: uint8_t;
    /**
     * Component ID (normally 0 for broadcast).
     */
    targetComponent: uint8_t;
    /**
     * Time when the data in the channels field were last updated (time since boot in the receiver's time
     * domain).
     * Units: ms
     */
    timeLastUpdateMs: uint32_t;
    /**
     * Radio RC channels status flags.
     */
    flags: RadioRcChannelsFlags;
    /**
     * Total number of RC channels being received. This can be larger than 32, indicating that more
     * channels are available but not given in this message.
     */
    count: uint8_t;
    /**
     * RC channels. Channel values are in centered 13 bit format. Range is -4096 to 4096, center is 0.
     * Conversion to PWM is x * 5/32 + 1500. Channels with indexes equal or above count should be set to 0,
     * to benefit from MAVLink's trailing-zero trimming.
     */
    channels: int16_t[];
}
export declare const REGISTRY: MavLinkPacketRegistry;
