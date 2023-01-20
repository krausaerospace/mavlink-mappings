import {
  int16_t,
  uint8_t,
  int32_t,
  uint16_t,
  uint32_t
} from './types'

import {
  MavLinkPacketRegistry,
  MavLinkPacketField,
  MavLinkData
} from './mavlink'

import {
  AdsbEmitterType
} from './common'

/**
 * State flags for ADS-B transponder dynamic report
 */
export enum UavionixAdsbOutDynamicState {
  'INTENT_CHANGE'                                     = 1,
  'AUTOPILOT_ENABLED'                                 = 2,
  'NICBARO_CROSSCHECKED'                              = 4,
  'ON_GROUND'                                         = 8,
  'IDENT'                                             = 16,
}

/**
 * Transceiver RF control flags for ADS-B transponder dynamic reports
 */
export enum UavionixAdsbOutRfSelect {
  'STANDBY'                                           = 0,
  'RX_ENABLED'                                        = 1,
  'TX_ENABLED'                                        = 2,
}

/**
 * Status for ADS-B transponder dynamic input
 */
export enum UavionixAdsbOutDynamicGpsFix {
  'NONE_0'                                            = 0,
  'NONE_1'                                            = 1,
  'UAVIONIX_ADSB_OUT_DYNAMIC_GPS_FIX_2D'              = 2,
  'UAVIONIX_ADSB_OUT_DYNAMIC_GPS_FIX_3D'              = 3,
  'DGPS'                                              = 4,
  'RTK'                                               = 5,
}

/**
 * Status flags for ADS-B transponder dynamic output
 */
export enum UavionixAdsbRfHealth {
  'INITIALIZING'                                      = 0,
  'OK'                                                = 1,
  'FAIL_TX'                                           = 2,
  'FAIL_RX'                                           = 16,
}

/**
 * Definitions for aircraft size
 */
export enum UavionixAdsbOutCfgAircraftSize {
  'NO_DATA'                                           = 0,
  'L15M_W23M'                                         = 1,
  'L25M_W28P5M'                                       = 2,
  'L25_34M'                                           = 3,
  'L35_33M'                                           = 4,
  'L35_38M'                                           = 5,
  'L45_39P5M'                                         = 6,
  'L45_45M'                                           = 7,
  'L55_45M'                                           = 8,
  'L55_52M'                                           = 9,
  'L65_59P5M'                                         = 10,
  'L65_67M'                                           = 11,
  'L75_W72P5M'                                        = 12,
  'L75_W80M'                                          = 13,
  'L85_W80M'                                          = 14,
  'L85_W90M'                                          = 15,
}

/**
 * GPS lataral offset encoding
 */
export enum UavionixAdsbOutCfgGpsOffsetLat {
  'NO_DATA'                                           = 0,
  'LEFT_2M'                                           = 1,
  'LEFT_4M'                                           = 2,
  'LEFT_6M'                                           = 3,
  'RIGHT_0M'                                          = 4,
  'RIGHT_2M'                                          = 5,
  'RIGHT_4M'                                          = 6,
  'RIGHT_6M'                                          = 7,
}

/**
 * GPS longitudinal offset encoding
 */
export enum UavionixAdsbOutCfgGpsOffsetLon {
  'NO_DATA'                                           = 0,
  'APPLIED_BY_SENSOR'                                 = 1,
}

/**
 * Emergency status encoding
 */
export enum UavionixAdsbEmergencyStatus {
  'NO_EMERGENCY'                                      = 0,
  'GENERAL_EMERGENCY'                                 = 1,
  'LIFEGUARD_EMERGENCY'                               = 2,
  'MINIMUM_FUEL_EMERGENCY'                            = 3,
  'NO_COMM_EMERGENCY'                                 = 4,
  'UNLAWFUL_INTERFERANCE_EMERGENCY'                   = 5,
  'DOWNED_AIRCRAFT_EMERGENCY'                         = 6,
  'RESERVED'                                          = 7,
}

/**
 * State flags for ADS-B transponder dynamic report
 */
export enum UavionixAdsbOutControlState {
  'EXTERNAL_BARO_CROSSCHECKED'                        = 1,
  'ON_GROUND'                                         = 4,
  'IDENT_BUTTON_ACTIVE'                               = 8,
  'MODE_A_ENABLED'                                    = 16,
  'MODE_C_ENABLED'                                    = 32,
  'MODE_S_ENABLED'                                    = 64,
  'UAVIONIX_ADSB_OUT_CONTROL_STATE_1090ES_TX_ENABLED' = 128,
}

/**
 * State flags for X-Bit and reserved fields.
 */
export enum UavionixAdsbXbit {
  'ENABLED'                                           = 128,
}

/**
 * State flags for ADS-B transponder status report
 */
export enum UavionixAdsbOutStatusState {
  'ON_GROUND'                                         = 1,
  'INTERROGATED_SINCE_LAST'                           = 2,
  'XBIT_ENABLED'                                      = 4,
  'IDENT_ACTIVE'                                      = 8,
  'MODE_A_ENABLED'                                    = 16,
  'MODE_C_ENABLED'                                    = 32,
  'MODE_S_ENABLED'                                    = 64,
  'UAVIONIX_ADSB_OUT_STATUS_STATE_1090ES_TX_ENABLED'  = 128,
}

/**
 * State flags for ADS-B transponder status report
 */
export enum UavionixAdsbOutStatusNicNacp {
  'NIC_CR_20_NM'                                      = 1,
  'NIC_CR_8_NM'                                       = 2,
  'NIC_CR_4_NM'                                       = 3,
  'NIC_CR_2_NM'                                       = 4,
  'NIC_CR_1_NM'                                       = 5,
  'NIC_CR_0_3_NM'                                     = 6,
  'NIC_CR_0_2_NM'                                     = 7,
  'NIC_CR_0_1_NM'                                     = 8,
  'NIC_CR_75_M'                                       = 9,
  'NIC_CR_25_M'                                       = 10,
  'NIC_CR_7_5_M'                                      = 11,
  'NACP_EPU_10_NM'                                    = 16,
  'NACP_EPU_4_NM'                                     = 32,
  'NACP_EPU_2_NM'                                     = 48,
  'NACP_EPU_1_NM'                                     = 64,
  'NACP_EPU_0_5_NM'                                   = 80,
  'NACP_EPU_0_3_NM'                                   = 96,
  'NACP_EPU_0_1_NM'                                   = 112,
  'NACP_EPU_0_05_NM'                                  = 128,
  'NACP_EPU_30_M'                                     = 144,
  'NACP_EPU_10_M'                                     = 160,
  'NACP_EPU_3_M'                                      = 176,
}

/**
 * State flags for ADS-B transponder fault report
 */
export enum UavionixAdsbOutStatusFault {
  'STATUS_MESSAGE_UNAVAIL'                            = 8,
  'GPS_NO_POS'                                        = 16,
  'GPS_UNAVAIL'                                       = 32,
  'TX_SYSTEM_FAIL'                                    = 64,
  'MAINT_REQ'                                         = 128,
}

/**
 * Static data to configure the ADS-B transponder (send within 10 sec of a POR and every 10 sec
 * thereafter)
 */
export class UavionixAdsbOutCfg extends MavLinkData {
  static MSG_ID = 10001
  static MSG_NAME = 'UAVIONIX_ADSB_OUT_CFG'
  static PAYLOAD_LENGTH = 20
  static MAGIC_NUMBER = 209

  static FIELDS = [
    new MavLinkPacketField('ICAO', 'ICAO', 0, false, 4, 'uint32_t', ''),
    new MavLinkPacketField('stallSpeed', 'stallSpeed', 4, false, 2, 'uint16_t', 'cm/s'),
    new MavLinkPacketField('callsign', 'callsign', 6, false, 1, 'char[]', '', 9),
    new MavLinkPacketField('emitterType', 'emitterType', 15, false, 1, 'uint8_t', ''),
    new MavLinkPacketField('aircraftSize', 'aircraftSize', 16, false, 1, 'uint8_t', ''),
    new MavLinkPacketField('gpsOffsetLat', 'gpsOffsetLat', 17, false, 1, 'uint8_t', ''),
    new MavLinkPacketField('gpsOffsetLon', 'gpsOffsetLon', 18, false, 1, 'uint8_t', ''),
    new MavLinkPacketField('rfSelect', 'rfSelect', 19, false, 1, 'uint8_t', ''),
  ]

  /**
   * Vehicle address (24 bit)
   */
  ICAO: uint32_t
  /**
   * Vehicle identifier (8 characters, null terminated, valid characters are A-Z, 0-9, " " only)
   */
  callsign: string
  /**
   * Transmitting vehicle type. See ADSB_EMITTER_TYPE enum
   */
  emitterType: AdsbEmitterType
  /**
   * Aircraft length and width encoding (table 2-35 of DO-282B)
   */
  aircraftSize: UavionixAdsbOutCfgAircraftSize
  /**
   * GPS antenna lateral offset (table 2-36 of DO-282B)
   */
  gpsOffsetLat: UavionixAdsbOutCfgGpsOffsetLat
  /**
   * GPS antenna longitudinal offset from nose [if non-zero, take position (in meters) divide by 2 and
   * add one] (table 2-37 DO-282B)
   */
  gpsOffsetLon: UavionixAdsbOutCfgGpsOffsetLon
  /**
   * Aircraft stall speed in cm/s
   * Units: cm/s
   */
  stallSpeed: uint16_t
  /**
   * ADS-B transponder reciever and transmit enable flags
   */
  rfSelect: UavionixAdsbOutRfSelect
}

/**
 * Dynamic data used to generate ADS-B out transponder data (send at 5Hz)
 */
export class UavionixAdsbOutDynamic extends MavLinkData {
  static MSG_ID = 10002
  static MSG_NAME = 'UAVIONIX_ADSB_OUT_DYNAMIC'
  static PAYLOAD_LENGTH = 41
  static MAGIC_NUMBER = 186

  static FIELDS = [
    new MavLinkPacketField('utcTime', 'utcTime', 0, false, 4, 'uint32_t', 's'),
    new MavLinkPacketField('gpsLat', 'gpsLat', 4, false, 4, 'int32_t', 'degE7'),
    new MavLinkPacketField('gpsLon', 'gpsLon', 8, false, 4, 'int32_t', 'degE7'),
    new MavLinkPacketField('gpsAlt', 'gpsAlt', 12, false, 4, 'int32_t', 'mm'),
    new MavLinkPacketField('baroAltMSL', 'baroAltMSL', 16, false, 4, 'int32_t', 'mbar'),
    new MavLinkPacketField('accuracyHor', 'accuracyHor', 20, false, 4, 'uint32_t', 'mm'),
    new MavLinkPacketField('accuracyVert', 'accuracyVert', 24, false, 2, 'uint16_t', 'cm'),
    new MavLinkPacketField('accuracyVel', 'accuracyVel', 26, false, 2, 'uint16_t', 'mm/s'),
    new MavLinkPacketField('velVert', 'velVert', 28, false, 2, 'int16_t', 'cm/s'),
    new MavLinkPacketField('velNS', 'velNS', 30, false, 2, 'int16_t', 'cm/s'),
    new MavLinkPacketField('VelEW', 'VelEW', 32, false, 2, 'int16_t', 'cm/s'),
    new MavLinkPacketField('state', 'state', 34, false, 2, 'uint16_t', ''),
    new MavLinkPacketField('squawk', 'squawk', 36, false, 2, 'uint16_t', ''),
    new MavLinkPacketField('gpsFix', 'gpsFix', 38, false, 1, 'uint8_t', ''),
    new MavLinkPacketField('numSats', 'numSats', 39, false, 1, 'uint8_t', ''),
    new MavLinkPacketField('emergencyStatus', 'emergencyStatus', 40, false, 1, 'uint8_t', ''),
  ]

  /**
   * UTC time in seconds since GPS epoch (Jan 6, 1980). If unknown set to UINT32_MAX
   * Units: s
   */
  utcTime: uint32_t
  /**
   * Latitude WGS84 (deg * 1E7). If unknown set to INT32_MAX
   * Units: degE7
   */
  gpsLat: int32_t
  /**
   * Longitude WGS84 (deg * 1E7). If unknown set to INT32_MAX
   * Units: degE7
   */
  gpsLon: int32_t
  /**
   * Altitude (WGS84). UP +ve. If unknown set to INT32_MAX
   * Units: mm
   */
  gpsAlt: int32_t
  /**
   * 0-1: no fix, 2: 2D fix, 3: 3D fix, 4: DGPS, 5: RTK
   */
  gpsFix: UavionixAdsbOutDynamicGpsFix
  /**
   * Number of satellites visible. If unknown set to UINT8_MAX
   */
  numSats: uint8_t
  /**
   * Barometric pressure altitude (MSL) relative to a standard atmosphere of 1013.2 mBar and NOT bar
   * corrected altitude (m * 1E-3). (up +ve). If unknown set to INT32_MAX
   * Units: mbar
   */
  baroAltMSL: int32_t
  /**
   * Horizontal accuracy in mm (m * 1E-3). If unknown set to UINT32_MAX
   * Units: mm
   */
  accuracyHor: uint32_t
  /**
   * Vertical accuracy in cm. If unknown set to UINT16_MAX
   * Units: cm
   */
  accuracyVert: uint16_t
  /**
   * Velocity accuracy in mm/s (m * 1E-3). If unknown set to UINT16_MAX
   * Units: mm/s
   */
  accuracyVel: uint16_t
  /**
   * GPS vertical speed in cm/s. If unknown set to INT16_MAX
   * Units: cm/s
   */
  velVert: int16_t
  /**
   * North-South velocity over ground in cm/s North +ve. If unknown set to INT16_MAX
   * Units: cm/s
   */
  velNS: int16_t
  /**
   * East-West velocity over ground in cm/s East +ve. If unknown set to INT16_MAX
   * Units: cm/s
   */
  VelEW: int16_t
  /**
   * Emergency status
   */
  emergencyStatus: UavionixAdsbEmergencyStatus
  /**
   * ADS-B transponder dynamic input state flags
   */
  state: UavionixAdsbOutDynamicState
  /**
   * Mode A code (typically 1200 [0x04B0] for VFR)
   */
  squawk: uint16_t
}

/**
 * Transceiver heartbeat with health report (updated every 10s)
 */
export class UavionixAdsbTransceiverHealthReport extends MavLinkData {
  static MSG_ID = 10003
  static MSG_NAME = 'UAVIONIX_ADSB_TRANSCEIVER_HEALTH_REPORT'
  static PAYLOAD_LENGTH = 1
  static MAGIC_NUMBER = 4

  static FIELDS = [
    new MavLinkPacketField('rfHealth', 'rfHealth', 0, false, 1, 'uint8_t', ''),
  ]

  /**
   * ADS-B transponder messages
   */
  rfHealth: UavionixAdsbRfHealth
}

/**
 * Aircraft Registration.
 */
export class UavionixAdsbOutCfgRegistration extends MavLinkData {
  static MSG_ID = 10004
  static MSG_NAME = 'UAVIONIX_ADSB_OUT_CFG_REGISTRATION'
  static PAYLOAD_LENGTH = 9
  static MAGIC_NUMBER = 133

  static FIELDS = [
    new MavLinkPacketField('registration', 'registration', 0, false, 1, 'char[]', '', 9),
  ]

  /**
   * Aircraft Registration (ASCII string A-Z, 0-9 only), e.g. "N8644B ". Trailing spaces (0x20) only.
   * This is null-terminated.
   */
  registration: string
}

/**
 * Flight Identification for ADSB-Out vehicles.
 */
export class UavionixAdsbOutCfgFlightid extends MavLinkData {
  static MSG_ID = 10005
  static MSG_NAME = 'UAVIONIX_ADSB_OUT_CFG_FLIGHTID'
  static PAYLOAD_LENGTH = 9
  static MAGIC_NUMBER = 103

  static FIELDS = [
    new MavLinkPacketField('flight_id', 'flightId', 0, false, 1, 'char[]', '', 9),
  ]

  /**
   * Flight Identification: 8 ASCII characters, '0' through '9', 'A' through 'Z' or space. Spaces (0x20)
   * used as a trailing pad character, or when call sign is unavailable. Reflects Control message
   * setting. This is null-terminated.
   */
  flightId: string
}

/**
 * Request messages.
 */
export class UavionixAdsbGet extends MavLinkData {
  static MSG_ID = 10006
  static MSG_NAME = 'UAVIONIX_ADSB_GET'
  static PAYLOAD_LENGTH = 4
  static MAGIC_NUMBER = 193

  static FIELDS = [
    new MavLinkPacketField('ReqMessageId', 'ReqMessageId', 0, false, 4, 'uint32_t', ''),
  ]

  /**
   * Message ID to request. Supports any message in this 10000-10099 range
   */
  ReqMessageId: uint32_t
}

/**
 * Control message with all data sent in UCP control message.
 */
export class UavionixAdsbOutControl extends MavLinkData {
  static MSG_ID = 10007
  static MSG_NAME = 'UAVIONIX_ADSB_OUT_CONTROL'
  static PAYLOAD_LENGTH = 17
  static MAGIC_NUMBER = 71

  static FIELDS = [
    new MavLinkPacketField('baroAltMSL', 'baroAltMSL', 0, false, 4, 'int32_t', 'mbar'),
    new MavLinkPacketField('squawk', 'squawk', 4, false, 2, 'uint16_t', ''),
    new MavLinkPacketField('state', 'state', 6, false, 1, 'uint8_t', ''),
    new MavLinkPacketField('emergencyStatus', 'emergencyStatus', 7, false, 1, 'uint8_t', ''),
    new MavLinkPacketField('flight_id', 'flightId', 8, false, 1, 'char[]', '', 8),
    new MavLinkPacketField('x_bit', 'xBit', 16, false, 1, 'uint8_t', ''),
  ]

  /**
   * ADS-B transponder control state flags
   */
  state: UavionixAdsbOutControlState
  /**
   * Barometric pressure altitude (MSL) relative to a standard atmosphere of 1013.2 mBar and NOT bar
   * corrected altitude (m * 1E-3). (up +ve). If unknown set to INT32_MAX
   * Units: mbar
   */
  baroAltMSL: int32_t
  /**
   * Mode A code (typically 1200 [0x04B0] for VFR)
   */
  squawk: uint16_t
  /**
   * Emergency status
   */
  emergencyStatus: UavionixAdsbEmergencyStatus
  /**
   * Flight Identification: 8 ASCII characters, '0' through '9', 'A' through 'Z' or space. Spaces (0x20)
   * used as a trailing pad character, or when call sign is unavailable.
   */
  flightId: string
  /**
   * X-Bit enable (military transponders only)
   */
  xBit: UavionixAdsbXbit
}

/**
 * Status message with information from UCP Heartbeat and Status messages.
 */
export class UavionixAdsbOutStatus extends MavLinkData {
  static MSG_ID = 10008
  static MSG_NAME = 'UAVIONIX_ADSB_OUT_STATUS'
  static PAYLOAD_LENGTH = 14
  static MAGIC_NUMBER = 240

  static FIELDS = [
    new MavLinkPacketField('squawk', 'squawk', 0, false, 2, 'uint16_t', ''),
    new MavLinkPacketField('state', 'state', 2, false, 1, 'uint8_t', ''),
    new MavLinkPacketField('NIC_NACp', 'NICNACp', 3, false, 1, 'uint8_t', ''),
    new MavLinkPacketField('boardTemp', 'boardTemp', 4, false, 1, 'uint8_t', ''),
    new MavLinkPacketField('fault', 'fault', 5, false, 1, 'uint8_t', ''),
    new MavLinkPacketField('flight_id', 'flightId', 6, false, 1, 'char[]', '', 8),
  ]

  /**
   * ADS-B transponder status state flags
   */
  state: UavionixAdsbOutStatusState
  /**
   * Mode A code (typically 1200 [0x04B0] for VFR)
   */
  squawk: uint16_t
  /**
   * Integrity and Accuracy of traffic reported as a 4-bit value for each field (NACp 7:4, NIC 3:0) and
   * encoded by Containment Radius (HPL) and Estimated Position Uncertainty (HFOM), respectively
   */
  NICNACp: UavionixAdsbOutStatusNicNacp
  /**
   * Board temperature in C
   */
  boardTemp: uint8_t
  /**
   * ADS-B transponder fault flags
   */
  fault: UavionixAdsbOutStatusFault
  /**
   * Flight Identification: 8 ASCII characters, '0' through '9', 'A' through 'Z' or space. Spaces (0x20)
   * used as a trailing pad character, or when call sign is unavailable.
   */
  flightId: string
}

export const REGISTRY: MavLinkPacketRegistry = {
  10001: UavionixAdsbOutCfg,
  10002: UavionixAdsbOutDynamic,
  10003: UavionixAdsbTransceiverHealthReport,
  10004: UavionixAdsbOutCfgRegistration,
  10005: UavionixAdsbOutCfgFlightid,
  10006: UavionixAdsbGet,
  10007: UavionixAdsbOutControl,
  10008: UavionixAdsbOutStatus,
}
