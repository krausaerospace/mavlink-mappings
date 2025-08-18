import { uint16_t, int32_t, uint32_t, float } from "./types";
import { MavLinkPacketRegistry, MavLinkPacketField, MavLinkData } from "./mavlink";
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
 * Bitmask of node swarming capabilities. If a bit is set, the node supports this capability.
 */
export declare enum SwarmNodeCapability {
    /**
     * Node supports reading SWARM_VEHICLE_ROI message
     */
    'ROI_IN' = 1,
    /**
     * Node supports sending SWARM_VEHICLE_ROI message
     */
    'ROI_OUT' = 2,
    /**
     * Node supports the ability to change the position of the node by commanding it to do so
     */
    'CAN_REPOSITION' = 4
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
    aircraftId: uint32_t;
    /**
     * Squadron ID
     */
    squadronId: uint32_t;
    /**
     * Status of vehicle
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
    aircraftId: uint32_t;
    /**
     * Squadron ID
     */
    squadronId: uint32_t;
    /**
     * Status of vehicle
     */
    stateNav: SwarmVehicleState;
    /**
     * Status coverage area
     */
    stateCoverage: SwarmCoverageStatus;
    /**
     * Status of vehicle's ROI
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
    /**
     * Bitmap of capabilities
     */
    capabilities: SwarmNodeCapability;
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
     * Aircraft ID. Use 0 for broadcast.
     */
    aircraftId: uint32_t;
    /**
     * Squadron ID. Use 0 for broadcast.
     */
    squadronId: uint32_t;
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
export declare const REGISTRY: MavLinkPacketRegistry;
