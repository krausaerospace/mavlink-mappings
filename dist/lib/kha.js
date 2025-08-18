"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REGISTRY = exports.SwarmVehicleRoi = exports.SwarmVehicleSlow = exports.SwarmVehicle = exports.SwarmNodeCapability = exports.SwarmCoverageStatus = exports.SwarmRoiStatus = exports.SwarmVehicleType = exports.SwarmVehicleState = void 0;
const mavlink_1 = require("./mavlink");
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
 * Bitmask of node swarming capabilities. If a bit is set, the node supports this capability.
 */
var SwarmNodeCapability;
(function (SwarmNodeCapability) {
    /**
     * Node supports reading SWARM_VEHICLE_ROI message
     */
    SwarmNodeCapability[SwarmNodeCapability["ROI_IN"] = 1] = "ROI_IN";
    /**
     * Node supports sending SWARM_VEHICLE_ROI message
     */
    SwarmNodeCapability[SwarmNodeCapability["ROI_OUT"] = 2] = "ROI_OUT";
    /**
     * Node supports the ability to change the position of the node by commanding it to do so
     */
    SwarmNodeCapability[SwarmNodeCapability["CAN_REPOSITION"] = 4] = "CAN_REPOSITION";
})(SwarmNodeCapability = exports.SwarmNodeCapability || (exports.SwarmNodeCapability = {}));
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
SwarmVehicle.PAYLOAD_LENGTH = 42;
SwarmVehicle.MAGIC_NUMBER = 216;
SwarmVehicle.FIELDS = [
    new mavlink_1.MavLinkPacketField('timestamp', 'timestamp', 0, false, 4, 'uint32_t', 's'),
    new mavlink_1.MavLinkPacketField('aircraft_id', 'aircraftId', 4, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('squadron_id', 'squadronId', 8, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('effective_radius', 'effectiveRadius', 12, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('lat', 'lat', 16, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('lon', 'lon', 20, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('altMSL', 'altMSL', 24, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('lat_target', 'latTarget', 28, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('lon_target', 'lonTarget', 32, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('altMSL_target', 'altMSLTarget', 36, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('state_nav', 'stateNav', 40, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('vehicle_type', 'vehicleType', 41, false, 1, 'uint8_t', ''),
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
        this.capabilities = SwarmNodeCapability[Object.keys(SwarmNodeCapability)[0]];
    }
}
exports.SwarmVehicleSlow = SwarmVehicleSlow;
SwarmVehicleSlow.MSG_ID = 2821;
SwarmVehicleSlow.MSG_NAME = 'SWARM_VEHICLE_SLOW';
SwarmVehicleSlow.PAYLOAD_LENGTH = 52;
SwarmVehicleSlow.MAGIC_NUMBER = 245;
SwarmVehicleSlow.FIELDS = [
    new mavlink_1.MavLinkPacketField('capabilities', 'capabilities', 0, false, 8, 'uint64_t', ''),
    new mavlink_1.MavLinkPacketField('timestamp', 'timestamp', 8, false, 4, 'uint32_t', 's'),
    new mavlink_1.MavLinkPacketField('aircraft_id', 'aircraftId', 12, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('squadron_id', 'squadronId', 16, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('effective_radius', 'effectiveRadius', 20, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('lat_target', 'latTarget', 24, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('lon_target', 'lonTarget', 28, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('altMSL_target', 'altMSLTarget', 32, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('ROI_crc', 'ROICrc', 36, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('ROI_timestamp', 'ROITimestamp', 40, false, 4, 'uint32_t', 's'),
    new mavlink_1.MavLinkPacketField('speed', 'speed', 44, false, 2, 'uint16_t', 'm/s'),
    new mavlink_1.MavLinkPacketField('cog', 'cog', 46, false, 2, 'uint16_t', 'cdeg'),
    new mavlink_1.MavLinkPacketField('state_nav', 'stateNav', 48, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('state_coverage', 'stateCoverage', 49, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('state_roi', 'stateRoi', 50, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('vehicle_type', 'vehicleType', 51, false, 1, 'uint8_t', ''),
];
/**
 * Region of Interest points. Array of int32_t lat/lng pairs of polygon points.
 */
class SwarmVehicleRoi extends mavlink_1.MavLinkData {
    constructor() {
        super();
        this.aircraftId = 0;
        this.squadronId = 0;
        this.crc = 0;
        this.timestampS = 0;
        this.pointCount = 0;
        this.points = [];
    }
}
exports.SwarmVehicleRoi = SwarmVehicleRoi;
SwarmVehicleRoi.MSG_ID = 2822;
SwarmVehicleRoi.MSG_NAME = 'SWARM_VEHICLE_ROI';
SwarmVehicleRoi.PAYLOAD_LENGTH = 244;
SwarmVehicleRoi.MAGIC_NUMBER = 193;
SwarmVehicleRoi.FIELDS = [
    new mavlink_1.MavLinkPacketField('aircraft_id', 'aircraftId', 0, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('squadron_id', 'squadronId', 4, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('crc', 'crc', 8, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('timestamp_s', 'timestampS', 12, false, 4, 'uint32_t', 's'),
    new mavlink_1.MavLinkPacketField('point_count', 'pointCount', 16, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('points', 'points', 20, false, 4, 'int32_t[]', 'degE7', 56),
];
exports.REGISTRY = {
    2820: SwarmVehicle,
    2821: SwarmVehicleSlow,
    2822: SwarmVehicleRoi,
};
//# sourceMappingURL=kha.js.map