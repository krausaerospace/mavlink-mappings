"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REGISTRY = exports.RadioRcChannels = exports.Airspeed = exports.MissionChecksum = exports.RadioRcChannelsFlags = exports.AirspeedSensorFlags = void 0;
const mavlink_1 = require("./mavlink");
const common_1 = require("./common");
/**
 * Airspeed sensor flags
 */
var AirspeedSensorFlags;
(function (AirspeedSensorFlags) {
    /**
     * Airspeed sensor is unhealthy
     */
    AirspeedSensorFlags[AirspeedSensorFlags["UNHEALTHY"] = 0] = "UNHEALTHY";
    /**
     * True if the data from this sensor is being actively used by the flight controller for guidance,
     * navigation or control.
     */
    AirspeedSensorFlags[AirspeedSensorFlags["USING"] = 1] = "USING";
})(AirspeedSensorFlags = exports.AirspeedSensorFlags || (exports.AirspeedSensorFlags = {}));
/**
 * RADIO_RC_CHANNELS flags (bitmask).
 */
var RadioRcChannelsFlags;
(function (RadioRcChannelsFlags) {
    /**
     * Failsafe is active. The content of the RC channels data in the RADIO_RC_CHANNELS message is
     * implementation dependent.
     */
    RadioRcChannelsFlags[RadioRcChannelsFlags["FAILSAFE"] = 1] = "FAILSAFE";
    /**
     * Channel data may be out of date. This is set when the receiver is unable to validate incoming data
     * from the transmitter and has therefore resent the last valid data it received.
     */
    RadioRcChannelsFlags[RadioRcChannelsFlags["OUTDATED"] = 2] = "OUTDATED";
})(RadioRcChannelsFlags = exports.RadioRcChannelsFlags || (exports.RadioRcChannelsFlags = {}));
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
    constructor() {
        super();
        this.missionType = common_1.MavMissionType[Object.keys(common_1.MavMissionType)[0]];
        this.checksum = 0;
    }
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
    constructor() {
        super();
        this.id = 0;
        this.airspeed = 0;
        this.temperature = 0;
        this.rawPress = 0;
        this.flags = AirspeedSensorFlags[Object.keys(AirspeedSensorFlags)[0]];
    }
}
exports.Airspeed = Airspeed;
Airspeed.MSG_ID = 295;
Airspeed.MSG_NAME = 'AIRSPEED';
Airspeed.PAYLOAD_LENGTH = 12;
Airspeed.MAGIC_NUMBER = 234;
Airspeed.FIELDS = [
    new mavlink_1.MavLinkPacketField('airspeed', 'airspeed', 0, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('raw_press', 'rawPress', 4, false, 4, 'float', 'hPa'),
    new mavlink_1.MavLinkPacketField('temperature', 'temperature', 8, false, 2, 'int16_t', 'cdegC'),
    new mavlink_1.MavLinkPacketField('id', 'id', 10, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('flags', 'flags', 11, false, 1, 'uint8_t', ''),
];
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
class RadioRcChannels extends mavlink_1.MavLinkData {
    constructor() {
        super();
        this.targetSystem = 0;
        this.targetComponent = 0;
        this.timeLastUpdateMs = 0;
        this.flags = RadioRcChannelsFlags[Object.keys(RadioRcChannelsFlags)[0]];
        this.count = 0;
        this.channels = [];
    }
}
exports.RadioRcChannels = RadioRcChannels;
RadioRcChannels.MSG_ID = 420;
RadioRcChannels.MSG_NAME = 'RADIO_RC_CHANNELS';
RadioRcChannels.PAYLOAD_LENGTH = 73;
RadioRcChannels.MAGIC_NUMBER = 20;
RadioRcChannels.FIELDS = [
    new mavlink_1.MavLinkPacketField('time_last_update_ms', 'timeLastUpdateMs', 0, false, 4, 'uint32_t', 'ms'),
    new mavlink_1.MavLinkPacketField('flags', 'flags', 4, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 6, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 7, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('count', 'count', 8, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('channels', 'channels', 9, true, 2, 'int16_t[]', '', 32),
];
exports.REGISTRY = {
    53: MissionChecksum,
    295: Airspeed,
    420: RadioRcChannels,
};
//# sourceMappingURL=development.js.map