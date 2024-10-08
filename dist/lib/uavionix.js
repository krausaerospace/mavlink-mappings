"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REGISTRY = exports.UavionixAdsbOutStatus = exports.UavionixAdsbOutControl = exports.UavionixAdsbGet = exports.UavionixAdsbOutCfgFlightid = exports.UavionixAdsbOutCfgRegistration = exports.UavionixAdsbTransceiverHealthReport = exports.UavionixAdsbOutDynamic = exports.UavionixAdsbOutCfg = exports.UavionixAdsbOutStatusFault = exports.UavionixAdsbOutStatusNicNacp = exports.UavionixAdsbOutStatusState = exports.UavionixAdsbXbit = exports.UavionixAdsbOutControlState = exports.UavionixAdsbEmergencyStatus = exports.UavionixAdsbOutCfgGpsOffsetLon = exports.UavionixAdsbOutCfgGpsOffsetLat = exports.UavionixAdsbOutCfgAircraftSize = exports.UavionixAdsbRfHealth = exports.UavionixAdsbOutDynamicGpsFix = exports.UavionixAdsbOutRfSelect = exports.UavionixAdsbOutDynamicState = void 0;
const mavlink_1 = require("./mavlink");
const common_1 = require("./common");
/**
 * State flags for ADS-B transponder dynamic report
 */
var UavionixAdsbOutDynamicState;
(function (UavionixAdsbOutDynamicState) {
    UavionixAdsbOutDynamicState[UavionixAdsbOutDynamicState["INTENT_CHANGE"] = 1] = "INTENT_CHANGE";
    UavionixAdsbOutDynamicState[UavionixAdsbOutDynamicState["AUTOPILOT_ENABLED"] = 2] = "AUTOPILOT_ENABLED";
    UavionixAdsbOutDynamicState[UavionixAdsbOutDynamicState["NICBARO_CROSSCHECKED"] = 4] = "NICBARO_CROSSCHECKED";
    UavionixAdsbOutDynamicState[UavionixAdsbOutDynamicState["ON_GROUND"] = 8] = "ON_GROUND";
    UavionixAdsbOutDynamicState[UavionixAdsbOutDynamicState["IDENT"] = 16] = "IDENT";
})(UavionixAdsbOutDynamicState = exports.UavionixAdsbOutDynamicState || (exports.UavionixAdsbOutDynamicState = {}));
/**
 * Transceiver RF control flags for ADS-B transponder dynamic reports
 */
var UavionixAdsbOutRfSelect;
(function (UavionixAdsbOutRfSelect) {
    UavionixAdsbOutRfSelect[UavionixAdsbOutRfSelect["STANDBY"] = 0] = "STANDBY";
    UavionixAdsbOutRfSelect[UavionixAdsbOutRfSelect["RX_ENABLED"] = 1] = "RX_ENABLED";
    UavionixAdsbOutRfSelect[UavionixAdsbOutRfSelect["TX_ENABLED"] = 2] = "TX_ENABLED";
})(UavionixAdsbOutRfSelect = exports.UavionixAdsbOutRfSelect || (exports.UavionixAdsbOutRfSelect = {}));
/**
 * Status for ADS-B transponder dynamic input
 */
var UavionixAdsbOutDynamicGpsFix;
(function (UavionixAdsbOutDynamicGpsFix) {
    UavionixAdsbOutDynamicGpsFix[UavionixAdsbOutDynamicGpsFix["NONE_0"] = 0] = "NONE_0";
    UavionixAdsbOutDynamicGpsFix[UavionixAdsbOutDynamicGpsFix["NONE_1"] = 1] = "NONE_1";
    UavionixAdsbOutDynamicGpsFix[UavionixAdsbOutDynamicGpsFix["UAVIONIX_ADSB_OUT_DYNAMIC_GPS_FIX_2D"] = 2] = "UAVIONIX_ADSB_OUT_DYNAMIC_GPS_FIX_2D";
    UavionixAdsbOutDynamicGpsFix[UavionixAdsbOutDynamicGpsFix["UAVIONIX_ADSB_OUT_DYNAMIC_GPS_FIX_3D"] = 3] = "UAVIONIX_ADSB_OUT_DYNAMIC_GPS_FIX_3D";
    UavionixAdsbOutDynamicGpsFix[UavionixAdsbOutDynamicGpsFix["DGPS"] = 4] = "DGPS";
    UavionixAdsbOutDynamicGpsFix[UavionixAdsbOutDynamicGpsFix["RTK"] = 5] = "RTK";
})(UavionixAdsbOutDynamicGpsFix = exports.UavionixAdsbOutDynamicGpsFix || (exports.UavionixAdsbOutDynamicGpsFix = {}));
/**
 * Status flags for ADS-B transponder dynamic output
 */
var UavionixAdsbRfHealth;
(function (UavionixAdsbRfHealth) {
    UavionixAdsbRfHealth[UavionixAdsbRfHealth["INITIALIZING"] = 0] = "INITIALIZING";
    UavionixAdsbRfHealth[UavionixAdsbRfHealth["OK"] = 1] = "OK";
    UavionixAdsbRfHealth[UavionixAdsbRfHealth["FAIL_TX"] = 2] = "FAIL_TX";
    UavionixAdsbRfHealth[UavionixAdsbRfHealth["FAIL_RX"] = 16] = "FAIL_RX";
})(UavionixAdsbRfHealth = exports.UavionixAdsbRfHealth || (exports.UavionixAdsbRfHealth = {}));
/**
 * Definitions for aircraft size
 */
var UavionixAdsbOutCfgAircraftSize;
(function (UavionixAdsbOutCfgAircraftSize) {
    UavionixAdsbOutCfgAircraftSize[UavionixAdsbOutCfgAircraftSize["NO_DATA"] = 0] = "NO_DATA";
    UavionixAdsbOutCfgAircraftSize[UavionixAdsbOutCfgAircraftSize["L15M_W23M"] = 1] = "L15M_W23M";
    UavionixAdsbOutCfgAircraftSize[UavionixAdsbOutCfgAircraftSize["L25M_W28P5M"] = 2] = "L25M_W28P5M";
    UavionixAdsbOutCfgAircraftSize[UavionixAdsbOutCfgAircraftSize["L25_34M"] = 3] = "L25_34M";
    UavionixAdsbOutCfgAircraftSize[UavionixAdsbOutCfgAircraftSize["L35_33M"] = 4] = "L35_33M";
    UavionixAdsbOutCfgAircraftSize[UavionixAdsbOutCfgAircraftSize["L35_38M"] = 5] = "L35_38M";
    UavionixAdsbOutCfgAircraftSize[UavionixAdsbOutCfgAircraftSize["L45_39P5M"] = 6] = "L45_39P5M";
    UavionixAdsbOutCfgAircraftSize[UavionixAdsbOutCfgAircraftSize["L45_45M"] = 7] = "L45_45M";
    UavionixAdsbOutCfgAircraftSize[UavionixAdsbOutCfgAircraftSize["L55_45M"] = 8] = "L55_45M";
    UavionixAdsbOutCfgAircraftSize[UavionixAdsbOutCfgAircraftSize["L55_52M"] = 9] = "L55_52M";
    UavionixAdsbOutCfgAircraftSize[UavionixAdsbOutCfgAircraftSize["L65_59P5M"] = 10] = "L65_59P5M";
    UavionixAdsbOutCfgAircraftSize[UavionixAdsbOutCfgAircraftSize["L65_67M"] = 11] = "L65_67M";
    UavionixAdsbOutCfgAircraftSize[UavionixAdsbOutCfgAircraftSize["L75_W72P5M"] = 12] = "L75_W72P5M";
    UavionixAdsbOutCfgAircraftSize[UavionixAdsbOutCfgAircraftSize["L75_W80M"] = 13] = "L75_W80M";
    UavionixAdsbOutCfgAircraftSize[UavionixAdsbOutCfgAircraftSize["L85_W80M"] = 14] = "L85_W80M";
    UavionixAdsbOutCfgAircraftSize[UavionixAdsbOutCfgAircraftSize["L85_W90M"] = 15] = "L85_W90M";
})(UavionixAdsbOutCfgAircraftSize = exports.UavionixAdsbOutCfgAircraftSize || (exports.UavionixAdsbOutCfgAircraftSize = {}));
/**
 * GPS lataral offset encoding
 */
var UavionixAdsbOutCfgGpsOffsetLat;
(function (UavionixAdsbOutCfgGpsOffsetLat) {
    UavionixAdsbOutCfgGpsOffsetLat[UavionixAdsbOutCfgGpsOffsetLat["NO_DATA"] = 0] = "NO_DATA";
    UavionixAdsbOutCfgGpsOffsetLat[UavionixAdsbOutCfgGpsOffsetLat["LEFT_2M"] = 1] = "LEFT_2M";
    UavionixAdsbOutCfgGpsOffsetLat[UavionixAdsbOutCfgGpsOffsetLat["LEFT_4M"] = 2] = "LEFT_4M";
    UavionixAdsbOutCfgGpsOffsetLat[UavionixAdsbOutCfgGpsOffsetLat["LEFT_6M"] = 3] = "LEFT_6M";
    UavionixAdsbOutCfgGpsOffsetLat[UavionixAdsbOutCfgGpsOffsetLat["RIGHT_0M"] = 4] = "RIGHT_0M";
    UavionixAdsbOutCfgGpsOffsetLat[UavionixAdsbOutCfgGpsOffsetLat["RIGHT_2M"] = 5] = "RIGHT_2M";
    UavionixAdsbOutCfgGpsOffsetLat[UavionixAdsbOutCfgGpsOffsetLat["RIGHT_4M"] = 6] = "RIGHT_4M";
    UavionixAdsbOutCfgGpsOffsetLat[UavionixAdsbOutCfgGpsOffsetLat["RIGHT_6M"] = 7] = "RIGHT_6M";
})(UavionixAdsbOutCfgGpsOffsetLat = exports.UavionixAdsbOutCfgGpsOffsetLat || (exports.UavionixAdsbOutCfgGpsOffsetLat = {}));
/**
 * GPS longitudinal offset encoding
 */
var UavionixAdsbOutCfgGpsOffsetLon;
(function (UavionixAdsbOutCfgGpsOffsetLon) {
    UavionixAdsbOutCfgGpsOffsetLon[UavionixAdsbOutCfgGpsOffsetLon["NO_DATA"] = 0] = "NO_DATA";
    UavionixAdsbOutCfgGpsOffsetLon[UavionixAdsbOutCfgGpsOffsetLon["APPLIED_BY_SENSOR"] = 1] = "APPLIED_BY_SENSOR";
})(UavionixAdsbOutCfgGpsOffsetLon = exports.UavionixAdsbOutCfgGpsOffsetLon || (exports.UavionixAdsbOutCfgGpsOffsetLon = {}));
/**
 * Emergency status encoding
 */
var UavionixAdsbEmergencyStatus;
(function (UavionixAdsbEmergencyStatus) {
    UavionixAdsbEmergencyStatus[UavionixAdsbEmergencyStatus["NO_EMERGENCY"] = 0] = "NO_EMERGENCY";
    UavionixAdsbEmergencyStatus[UavionixAdsbEmergencyStatus["GENERAL_EMERGENCY"] = 1] = "GENERAL_EMERGENCY";
    UavionixAdsbEmergencyStatus[UavionixAdsbEmergencyStatus["LIFEGUARD_EMERGENCY"] = 2] = "LIFEGUARD_EMERGENCY";
    UavionixAdsbEmergencyStatus[UavionixAdsbEmergencyStatus["MINIMUM_FUEL_EMERGENCY"] = 3] = "MINIMUM_FUEL_EMERGENCY";
    UavionixAdsbEmergencyStatus[UavionixAdsbEmergencyStatus["NO_COMM_EMERGENCY"] = 4] = "NO_COMM_EMERGENCY";
    UavionixAdsbEmergencyStatus[UavionixAdsbEmergencyStatus["UNLAWFUL_INTERFERANCE_EMERGENCY"] = 5] = "UNLAWFUL_INTERFERANCE_EMERGENCY";
    UavionixAdsbEmergencyStatus[UavionixAdsbEmergencyStatus["DOWNED_AIRCRAFT_EMERGENCY"] = 6] = "DOWNED_AIRCRAFT_EMERGENCY";
    UavionixAdsbEmergencyStatus[UavionixAdsbEmergencyStatus["RESERVED"] = 7] = "RESERVED";
})(UavionixAdsbEmergencyStatus = exports.UavionixAdsbEmergencyStatus || (exports.UavionixAdsbEmergencyStatus = {}));
/**
 * State flags for ADS-B transponder dynamic report
 */
var UavionixAdsbOutControlState;
(function (UavionixAdsbOutControlState) {
    UavionixAdsbOutControlState[UavionixAdsbOutControlState["EXTERNAL_BARO_CROSSCHECKED"] = 1] = "EXTERNAL_BARO_CROSSCHECKED";
    UavionixAdsbOutControlState[UavionixAdsbOutControlState["ON_GROUND"] = 4] = "ON_GROUND";
    UavionixAdsbOutControlState[UavionixAdsbOutControlState["IDENT_BUTTON_ACTIVE"] = 8] = "IDENT_BUTTON_ACTIVE";
    UavionixAdsbOutControlState[UavionixAdsbOutControlState["MODE_A_ENABLED"] = 16] = "MODE_A_ENABLED";
    UavionixAdsbOutControlState[UavionixAdsbOutControlState["MODE_C_ENABLED"] = 32] = "MODE_C_ENABLED";
    UavionixAdsbOutControlState[UavionixAdsbOutControlState["MODE_S_ENABLED"] = 64] = "MODE_S_ENABLED";
    UavionixAdsbOutControlState[UavionixAdsbOutControlState["UAVIONIX_ADSB_OUT_CONTROL_STATE_1090ES_TX_ENABLED"] = 128] = "UAVIONIX_ADSB_OUT_CONTROL_STATE_1090ES_TX_ENABLED";
})(UavionixAdsbOutControlState = exports.UavionixAdsbOutControlState || (exports.UavionixAdsbOutControlState = {}));
/**
 * State flags for X-Bit and reserved fields.
 */
var UavionixAdsbXbit;
(function (UavionixAdsbXbit) {
    UavionixAdsbXbit[UavionixAdsbXbit["ENABLED"] = 128] = "ENABLED";
})(UavionixAdsbXbit = exports.UavionixAdsbXbit || (exports.UavionixAdsbXbit = {}));
/**
 * State flags for ADS-B transponder status report
 */
var UavionixAdsbOutStatusState;
(function (UavionixAdsbOutStatusState) {
    UavionixAdsbOutStatusState[UavionixAdsbOutStatusState["ON_GROUND"] = 1] = "ON_GROUND";
    UavionixAdsbOutStatusState[UavionixAdsbOutStatusState["INTERROGATED_SINCE_LAST"] = 2] = "INTERROGATED_SINCE_LAST";
    UavionixAdsbOutStatusState[UavionixAdsbOutStatusState["XBIT_ENABLED"] = 4] = "XBIT_ENABLED";
    UavionixAdsbOutStatusState[UavionixAdsbOutStatusState["IDENT_ACTIVE"] = 8] = "IDENT_ACTIVE";
    UavionixAdsbOutStatusState[UavionixAdsbOutStatusState["MODE_A_ENABLED"] = 16] = "MODE_A_ENABLED";
    UavionixAdsbOutStatusState[UavionixAdsbOutStatusState["MODE_C_ENABLED"] = 32] = "MODE_C_ENABLED";
    UavionixAdsbOutStatusState[UavionixAdsbOutStatusState["MODE_S_ENABLED"] = 64] = "MODE_S_ENABLED";
    UavionixAdsbOutStatusState[UavionixAdsbOutStatusState["UAVIONIX_ADSB_OUT_STATUS_STATE_1090ES_TX_ENABLED"] = 128] = "UAVIONIX_ADSB_OUT_STATUS_STATE_1090ES_TX_ENABLED";
})(UavionixAdsbOutStatusState = exports.UavionixAdsbOutStatusState || (exports.UavionixAdsbOutStatusState = {}));
/**
 * State flags for ADS-B transponder status report
 */
var UavionixAdsbOutStatusNicNacp;
(function (UavionixAdsbOutStatusNicNacp) {
    UavionixAdsbOutStatusNicNacp[UavionixAdsbOutStatusNicNacp["NIC_CR_20_NM"] = 1] = "NIC_CR_20_NM";
    UavionixAdsbOutStatusNicNacp[UavionixAdsbOutStatusNicNacp["NIC_CR_8_NM"] = 2] = "NIC_CR_8_NM";
    UavionixAdsbOutStatusNicNacp[UavionixAdsbOutStatusNicNacp["NIC_CR_4_NM"] = 3] = "NIC_CR_4_NM";
    UavionixAdsbOutStatusNicNacp[UavionixAdsbOutStatusNicNacp["NIC_CR_2_NM"] = 4] = "NIC_CR_2_NM";
    UavionixAdsbOutStatusNicNacp[UavionixAdsbOutStatusNicNacp["NIC_CR_1_NM"] = 5] = "NIC_CR_1_NM";
    UavionixAdsbOutStatusNicNacp[UavionixAdsbOutStatusNicNacp["NIC_CR_0_3_NM"] = 6] = "NIC_CR_0_3_NM";
    UavionixAdsbOutStatusNicNacp[UavionixAdsbOutStatusNicNacp["NIC_CR_0_2_NM"] = 7] = "NIC_CR_0_2_NM";
    UavionixAdsbOutStatusNicNacp[UavionixAdsbOutStatusNicNacp["NIC_CR_0_1_NM"] = 8] = "NIC_CR_0_1_NM";
    UavionixAdsbOutStatusNicNacp[UavionixAdsbOutStatusNicNacp["NIC_CR_75_M"] = 9] = "NIC_CR_75_M";
    UavionixAdsbOutStatusNicNacp[UavionixAdsbOutStatusNicNacp["NIC_CR_25_M"] = 10] = "NIC_CR_25_M";
    UavionixAdsbOutStatusNicNacp[UavionixAdsbOutStatusNicNacp["NIC_CR_7_5_M"] = 11] = "NIC_CR_7_5_M";
    UavionixAdsbOutStatusNicNacp[UavionixAdsbOutStatusNicNacp["NACP_EPU_10_NM"] = 16] = "NACP_EPU_10_NM";
    UavionixAdsbOutStatusNicNacp[UavionixAdsbOutStatusNicNacp["NACP_EPU_4_NM"] = 32] = "NACP_EPU_4_NM";
    UavionixAdsbOutStatusNicNacp[UavionixAdsbOutStatusNicNacp["NACP_EPU_2_NM"] = 48] = "NACP_EPU_2_NM";
    UavionixAdsbOutStatusNicNacp[UavionixAdsbOutStatusNicNacp["NACP_EPU_1_NM"] = 64] = "NACP_EPU_1_NM";
    UavionixAdsbOutStatusNicNacp[UavionixAdsbOutStatusNicNacp["NACP_EPU_0_5_NM"] = 80] = "NACP_EPU_0_5_NM";
    UavionixAdsbOutStatusNicNacp[UavionixAdsbOutStatusNicNacp["NACP_EPU_0_3_NM"] = 96] = "NACP_EPU_0_3_NM";
    UavionixAdsbOutStatusNicNacp[UavionixAdsbOutStatusNicNacp["NACP_EPU_0_1_NM"] = 112] = "NACP_EPU_0_1_NM";
    UavionixAdsbOutStatusNicNacp[UavionixAdsbOutStatusNicNacp["NACP_EPU_0_05_NM"] = 128] = "NACP_EPU_0_05_NM";
    UavionixAdsbOutStatusNicNacp[UavionixAdsbOutStatusNicNacp["NACP_EPU_30_M"] = 144] = "NACP_EPU_30_M";
    UavionixAdsbOutStatusNicNacp[UavionixAdsbOutStatusNicNacp["NACP_EPU_10_M"] = 160] = "NACP_EPU_10_M";
    UavionixAdsbOutStatusNicNacp[UavionixAdsbOutStatusNicNacp["NACP_EPU_3_M"] = 176] = "NACP_EPU_3_M";
})(UavionixAdsbOutStatusNicNacp = exports.UavionixAdsbOutStatusNicNacp || (exports.UavionixAdsbOutStatusNicNacp = {}));
/**
 * State flags for ADS-B transponder fault report
 */
var UavionixAdsbOutStatusFault;
(function (UavionixAdsbOutStatusFault) {
    UavionixAdsbOutStatusFault[UavionixAdsbOutStatusFault["STATUS_MESSAGE_UNAVAIL"] = 8] = "STATUS_MESSAGE_UNAVAIL";
    UavionixAdsbOutStatusFault[UavionixAdsbOutStatusFault["GPS_NO_POS"] = 16] = "GPS_NO_POS";
    UavionixAdsbOutStatusFault[UavionixAdsbOutStatusFault["GPS_UNAVAIL"] = 32] = "GPS_UNAVAIL";
    UavionixAdsbOutStatusFault[UavionixAdsbOutStatusFault["TX_SYSTEM_FAIL"] = 64] = "TX_SYSTEM_FAIL";
    UavionixAdsbOutStatusFault[UavionixAdsbOutStatusFault["MAINT_REQ"] = 128] = "MAINT_REQ";
})(UavionixAdsbOutStatusFault = exports.UavionixAdsbOutStatusFault || (exports.UavionixAdsbOutStatusFault = {}));
/**
 * Static data to configure the ADS-B transponder (send within 10 sec of a POR and every 10 sec
 * thereafter)
 */
class UavionixAdsbOutCfg extends mavlink_1.MavLinkData {
    constructor() {
        super();
        this.ICAO = 0;
        this.callsign = '';
        this.emitterType = common_1.AdsbEmitterType[Object.keys(common_1.AdsbEmitterType)[0]];
        this.aircraftSize = UavionixAdsbOutCfgAircraftSize[Object.keys(UavionixAdsbOutCfgAircraftSize)[0]];
        this.gpsOffsetLat = UavionixAdsbOutCfgGpsOffsetLat[Object.keys(UavionixAdsbOutCfgGpsOffsetLat)[0]];
        this.gpsOffsetLon = UavionixAdsbOutCfgGpsOffsetLon[Object.keys(UavionixAdsbOutCfgGpsOffsetLon)[0]];
        this.stallSpeed = 0;
        this.rfSelect = UavionixAdsbOutRfSelect[Object.keys(UavionixAdsbOutRfSelect)[0]];
    }
}
exports.UavionixAdsbOutCfg = UavionixAdsbOutCfg;
UavionixAdsbOutCfg.MSG_ID = 10001;
UavionixAdsbOutCfg.MSG_NAME = 'UAVIONIX_ADSB_OUT_CFG';
UavionixAdsbOutCfg.PAYLOAD_LENGTH = 20;
UavionixAdsbOutCfg.MAGIC_NUMBER = 209;
UavionixAdsbOutCfg.FIELDS = [
    new mavlink_1.MavLinkPacketField('ICAO', 'ICAO', 0, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('stallSpeed', 'stallSpeed', 4, false, 2, 'uint16_t', 'cm/s'),
    new mavlink_1.MavLinkPacketField('callsign', 'callsign', 6, false, 1, 'char[]', '', 9),
    new mavlink_1.MavLinkPacketField('emitterType', 'emitterType', 15, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('aircraftSize', 'aircraftSize', 16, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('gpsOffsetLat', 'gpsOffsetLat', 17, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('gpsOffsetLon', 'gpsOffsetLon', 18, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('rfSelect', 'rfSelect', 19, false, 1, 'uint8_t', ''),
];
/**
 * Dynamic data used to generate ADS-B out transponder data (send at 5Hz)
 */
class UavionixAdsbOutDynamic extends mavlink_1.MavLinkData {
    constructor() {
        super();
        this.utcTime = 0;
        this.gpsLat = 0;
        this.gpsLon = 0;
        this.gpsAlt = 0;
        this.gpsFix = UavionixAdsbOutDynamicGpsFix[Object.keys(UavionixAdsbOutDynamicGpsFix)[0]];
        this.numSats = 0;
        this.baroAltMSL = 0;
        this.accuracyHor = 0;
        this.accuracyVert = 0;
        this.accuracyVel = 0;
        this.velVert = 0;
        this.velNS = 0;
        this.VelEW = 0;
        this.emergencyStatus = UavionixAdsbEmergencyStatus[Object.keys(UavionixAdsbEmergencyStatus)[0]];
        this.state = UavionixAdsbOutDynamicState[Object.keys(UavionixAdsbOutDynamicState)[0]];
        this.squawk = 0;
    }
}
exports.UavionixAdsbOutDynamic = UavionixAdsbOutDynamic;
UavionixAdsbOutDynamic.MSG_ID = 10002;
UavionixAdsbOutDynamic.MSG_NAME = 'UAVIONIX_ADSB_OUT_DYNAMIC';
UavionixAdsbOutDynamic.PAYLOAD_LENGTH = 41;
UavionixAdsbOutDynamic.MAGIC_NUMBER = 186;
UavionixAdsbOutDynamic.FIELDS = [
    new mavlink_1.MavLinkPacketField('utcTime', 'utcTime', 0, false, 4, 'uint32_t', 's'),
    new mavlink_1.MavLinkPacketField('gpsLat', 'gpsLat', 4, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('gpsLon', 'gpsLon', 8, false, 4, 'int32_t', 'degE7'),
    new mavlink_1.MavLinkPacketField('gpsAlt', 'gpsAlt', 12, false, 4, 'int32_t', 'mm'),
    new mavlink_1.MavLinkPacketField('baroAltMSL', 'baroAltMSL', 16, false, 4, 'int32_t', 'mbar'),
    new mavlink_1.MavLinkPacketField('accuracyHor', 'accuracyHor', 20, false, 4, 'uint32_t', 'mm'),
    new mavlink_1.MavLinkPacketField('accuracyVert', 'accuracyVert', 24, false, 2, 'uint16_t', 'cm'),
    new mavlink_1.MavLinkPacketField('accuracyVel', 'accuracyVel', 26, false, 2, 'uint16_t', 'mm/s'),
    new mavlink_1.MavLinkPacketField('velVert', 'velVert', 28, false, 2, 'int16_t', 'cm/s'),
    new mavlink_1.MavLinkPacketField('velNS', 'velNS', 30, false, 2, 'int16_t', 'cm/s'),
    new mavlink_1.MavLinkPacketField('VelEW', 'VelEW', 32, false, 2, 'int16_t', 'cm/s'),
    new mavlink_1.MavLinkPacketField('state', 'state', 34, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('squawk', 'squawk', 36, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('gpsFix', 'gpsFix', 38, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('numSats', 'numSats', 39, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('emergencyStatus', 'emergencyStatus', 40, false, 1, 'uint8_t', ''),
];
/**
 * Transceiver heartbeat with health report (updated every 10s)
 */
class UavionixAdsbTransceiverHealthReport extends mavlink_1.MavLinkData {
    constructor() {
        super();
        this.rfHealth = UavionixAdsbRfHealth[Object.keys(UavionixAdsbRfHealth)[0]];
    }
}
exports.UavionixAdsbTransceiverHealthReport = UavionixAdsbTransceiverHealthReport;
UavionixAdsbTransceiverHealthReport.MSG_ID = 10003;
UavionixAdsbTransceiverHealthReport.MSG_NAME = 'UAVIONIX_ADSB_TRANSCEIVER_HEALTH_REPORT';
UavionixAdsbTransceiverHealthReport.PAYLOAD_LENGTH = 1;
UavionixAdsbTransceiverHealthReport.MAGIC_NUMBER = 4;
UavionixAdsbTransceiverHealthReport.FIELDS = [
    new mavlink_1.MavLinkPacketField('rfHealth', 'rfHealth', 0, false, 1, 'uint8_t', ''),
];
/**
 * Aircraft Registration.
 */
class UavionixAdsbOutCfgRegistration extends mavlink_1.MavLinkData {
    constructor() {
        super();
        this.registration = '';
    }
}
exports.UavionixAdsbOutCfgRegistration = UavionixAdsbOutCfgRegistration;
UavionixAdsbOutCfgRegistration.MSG_ID = 10004;
UavionixAdsbOutCfgRegistration.MSG_NAME = 'UAVIONIX_ADSB_OUT_CFG_REGISTRATION';
UavionixAdsbOutCfgRegistration.PAYLOAD_LENGTH = 9;
UavionixAdsbOutCfgRegistration.MAGIC_NUMBER = 133;
UavionixAdsbOutCfgRegistration.FIELDS = [
    new mavlink_1.MavLinkPacketField('registration', 'registration', 0, false, 1, 'char[]', '', 9),
];
/**
 * Flight Identification for ADSB-Out vehicles.
 */
class UavionixAdsbOutCfgFlightid extends mavlink_1.MavLinkData {
    constructor() {
        super();
        this.flightId = '';
    }
}
exports.UavionixAdsbOutCfgFlightid = UavionixAdsbOutCfgFlightid;
UavionixAdsbOutCfgFlightid.MSG_ID = 10005;
UavionixAdsbOutCfgFlightid.MSG_NAME = 'UAVIONIX_ADSB_OUT_CFG_FLIGHTID';
UavionixAdsbOutCfgFlightid.PAYLOAD_LENGTH = 9;
UavionixAdsbOutCfgFlightid.MAGIC_NUMBER = 103;
UavionixAdsbOutCfgFlightid.FIELDS = [
    new mavlink_1.MavLinkPacketField('flight_id', 'flightId', 0, false, 1, 'char[]', '', 9),
];
/**
 * Request messages.
 */
class UavionixAdsbGet extends mavlink_1.MavLinkData {
    constructor() {
        super();
        this.ReqMessageId = 0;
    }
}
exports.UavionixAdsbGet = UavionixAdsbGet;
UavionixAdsbGet.MSG_ID = 10006;
UavionixAdsbGet.MSG_NAME = 'UAVIONIX_ADSB_GET';
UavionixAdsbGet.PAYLOAD_LENGTH = 4;
UavionixAdsbGet.MAGIC_NUMBER = 193;
UavionixAdsbGet.FIELDS = [
    new mavlink_1.MavLinkPacketField('ReqMessageId', 'ReqMessageId', 0, false, 4, 'uint32_t', ''),
];
/**
 * Control message with all data sent in UCP control message.
 */
class UavionixAdsbOutControl extends mavlink_1.MavLinkData {
    constructor() {
        super();
        this.state = UavionixAdsbOutControlState[Object.keys(UavionixAdsbOutControlState)[0]];
        this.baroAltMSL = 0;
        this.squawk = 0;
        this.emergencyStatus = UavionixAdsbEmergencyStatus[Object.keys(UavionixAdsbEmergencyStatus)[0]];
        this.flightId = '';
        this.xBit = UavionixAdsbXbit[Object.keys(UavionixAdsbXbit)[0]];
    }
}
exports.UavionixAdsbOutControl = UavionixAdsbOutControl;
UavionixAdsbOutControl.MSG_ID = 10007;
UavionixAdsbOutControl.MSG_NAME = 'UAVIONIX_ADSB_OUT_CONTROL';
UavionixAdsbOutControl.PAYLOAD_LENGTH = 17;
UavionixAdsbOutControl.MAGIC_NUMBER = 71;
UavionixAdsbOutControl.FIELDS = [
    new mavlink_1.MavLinkPacketField('baroAltMSL', 'baroAltMSL', 0, false, 4, 'int32_t', 'mbar'),
    new mavlink_1.MavLinkPacketField('squawk', 'squawk', 4, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('state', 'state', 6, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('emergencyStatus', 'emergencyStatus', 7, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('flight_id', 'flightId', 8, false, 1, 'char[]', '', 8),
    new mavlink_1.MavLinkPacketField('x_bit', 'xBit', 16, false, 1, 'uint8_t', ''),
];
/**
 * Status message with information from UCP Heartbeat and Status messages.
 */
class UavionixAdsbOutStatus extends mavlink_1.MavLinkData {
    constructor() {
        super();
        this.state = UavionixAdsbOutStatusState[Object.keys(UavionixAdsbOutStatusState)[0]];
        this.squawk = 0;
        this.NICNACp = UavionixAdsbOutStatusNicNacp[Object.keys(UavionixAdsbOutStatusNicNacp)[0]];
        this.boardTemp = 0;
        this.fault = UavionixAdsbOutStatusFault[Object.keys(UavionixAdsbOutStatusFault)[0]];
        this.flightId = '';
    }
}
exports.UavionixAdsbOutStatus = UavionixAdsbOutStatus;
UavionixAdsbOutStatus.MSG_ID = 10008;
UavionixAdsbOutStatus.MSG_NAME = 'UAVIONIX_ADSB_OUT_STATUS';
UavionixAdsbOutStatus.PAYLOAD_LENGTH = 14;
UavionixAdsbOutStatus.MAGIC_NUMBER = 240;
UavionixAdsbOutStatus.FIELDS = [
    new mavlink_1.MavLinkPacketField('squawk', 'squawk', 0, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('state', 'state', 2, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('NIC_NACp', 'NICNACp', 3, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('boardTemp', 'boardTemp', 4, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('fault', 'fault', 5, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('flight_id', 'flightId', 6, false, 1, 'char[]', '', 8),
];
exports.REGISTRY = {
    10001: UavionixAdsbOutCfg,
    10002: UavionixAdsbOutDynamic,
    10003: UavionixAdsbTransceiverHealthReport,
    10004: UavionixAdsbOutCfgRegistration,
    10005: UavionixAdsbOutCfgFlightid,
    10006: UavionixAdsbGet,
    10007: UavionixAdsbOutControl,
    10008: UavionixAdsbOutStatus,
};
//# sourceMappingURL=uavionix.js.map