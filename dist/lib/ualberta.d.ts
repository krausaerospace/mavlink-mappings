import { uint8_t, uint16_t, uint64_t, float } from './types';
import { MavLinkPacketRegistry, MavLinkPacketField, MavLinkData } from './mavlink';
/**
 * Available autopilot modes for ualberta uav
 */
export declare enum UalbertaAutopilotMode {
    /**
     * Raw input pulse widts sent to output
     */
    'MANUAL_DIRECT' = 1,
    /**
     * Inputs are normalized using calibration, the converted back to raw pulse widths for output
     */
    'MANUAL_SCALED' = 2,
    /**
     * dfsdfs
     */
    'AUTO_PID_ATT' = 3,
    /**
     * dfsfds
     */
    'AUTO_PID_VEL' = 4,
    /**
     * dfsdfsdfs
     */
    'AUTO_PID_POS' = 5
}
/**
 * Navigation filter mode
 */
export declare enum UalbertaNavMode {
    'AHRS_INIT' = 1,
    /**
     * AHRS mode
     */
    'AHRS' = 2,
    /**
     * INS/GPS initialization mode
     */
    'INS_GPS_INIT' = 3,
    /**
     * INS/GPS mode
     */
    'INS_GPS' = 4
}
/**
 * Mode currently commanded by pilot
 */
export declare enum UalbertaPilotMode {
    /**
     * sdf
     */
    'MANUAL' = 1,
    /**
     * dfs
     */
    'AUTO' = 2,
    /**
     * Rotomotion mode
     */
    'ROTO' = 3
}
/**
 * Accelerometer and Gyro biases from the navigation filter
 */
export declare class NavFilterBias extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    constructor();
    /**
     * Timestamp (microseconds)
     */
    usec: uint64_t;
    /**
     * b_f[0]
     */
    accel0: float;
    /**
     * b_f[1]
     */
    accel1: float;
    /**
     * b_f[2]
     */
    accel2: float;
    /**
     * b_f[0]
     */
    gyro0: float;
    /**
     * b_f[1]
     */
    gyro1: float;
    /**
     * b_f[2]
     */
    gyro2: float;
}
/**
 * Complete set of calibration parameters for the radio
 */
export declare class RadioCalibration extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    constructor();
    /**
     * Aileron setpoints: left, center, right
     */
    aileron: uint16_t[];
    /**
     * Elevator setpoints: nose down, center, nose up
     */
    elevator: uint16_t[];
    /**
     * Rudder setpoints: nose left, center, nose right
     */
    rudder: uint16_t[];
    /**
     * Tail gyro mode/gain setpoints: heading hold, rate mode
     */
    gyro: uint16_t[];
    /**
     * Pitch curve setpoints (every 25%)
     */
    pitch: uint16_t[];
    /**
     * Throttle curve setpoints (every 25%)
     */
    throttle: uint16_t[];
}
/**
 * System status specific to ualberta uav
 */
export declare class UalbertaSysStatus extends MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
    constructor();
    /**
     * System mode, see UALBERTA_AUTOPILOT_MODE ENUM
     */
    mode: uint8_t;
    /**
     * Navigation mode, see UALBERTA_NAV_MODE ENUM
     */
    navMode: uint8_t;
    /**
     * Pilot mode, see UALBERTA_PILOT_MODE
     */
    pilot: uint8_t;
}
export declare const REGISTRY: MavLinkPacketRegistry;
