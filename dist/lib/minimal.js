"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REGISTRY = exports.Heartbeat = exports.MavComponent = exports.MavState = exports.MavModeFlagDecodePosition = exports.MavModeFlag = exports.MavType = exports.MavAutopilot = void 0;
const mavlink_1 = require("./mavlink");
/**
 * Micro air vehicle / autopilot classes. This identifies the individual model.
 */
var MavAutopilot;
(function (MavAutopilot) {
    /**
     * Generic autopilot, full support for everything
     */
    MavAutopilot[MavAutopilot["GENERIC"] = 0] = "GENERIC";
    /**
     * Reserved for future use.
     */
    MavAutopilot[MavAutopilot["RESERVED"] = 1] = "RESERVED";
    /**
     * SLUGS autopilot, http://slugsuav.soe.ucsc.edu
     */
    MavAutopilot[MavAutopilot["SLUGS"] = 2] = "SLUGS";
    /**
     * ArduPilot - Plane/Copter/Rover/Sub/Tracker, https://ardupilot.org
     */
    MavAutopilot[MavAutopilot["ARDUPILOTMEGA"] = 3] = "ARDUPILOTMEGA";
    /**
     * OpenPilot, http://openpilot.org
     */
    MavAutopilot[MavAutopilot["OPENPILOT"] = 4] = "OPENPILOT";
    /**
     * Generic autopilot only supporting simple waypoints
     */
    MavAutopilot[MavAutopilot["GENERIC_WAYPOINTS_ONLY"] = 5] = "GENERIC_WAYPOINTS_ONLY";
    /**
     * Generic autopilot supporting waypoints and other simple navigation commands
     */
    MavAutopilot[MavAutopilot["GENERIC_WAYPOINTS_AND_SIMPLE_NAVIGATION_ONLY"] = 6] = "GENERIC_WAYPOINTS_AND_SIMPLE_NAVIGATION_ONLY";
    /**
     * Generic autopilot supporting the full mission command set
     */
    MavAutopilot[MavAutopilot["GENERIC_MISSION_FULL"] = 7] = "GENERIC_MISSION_FULL";
    /**
     * No valid autopilot, e.g. a GCS or other MAVLink component
     */
    MavAutopilot[MavAutopilot["INVALID"] = 8] = "INVALID";
    /**
     * PPZ UAV - http://nongnu.org/paparazzi
     */
    MavAutopilot[MavAutopilot["PPZ"] = 9] = "PPZ";
    /**
     * UAV Dev Board
     */
    MavAutopilot[MavAutopilot["UDB"] = 10] = "UDB";
    /**
     * FlexiPilot
     */
    MavAutopilot[MavAutopilot["FP"] = 11] = "FP";
    /**
     * PX4 Autopilot - http://px4.io/
     */
    MavAutopilot[MavAutopilot["PX4"] = 12] = "PX4";
    /**
     * SMACCMPilot - http://smaccmpilot.org
     */
    MavAutopilot[MavAutopilot["SMACCMPILOT"] = 13] = "SMACCMPILOT";
    /**
     * AutoQuad -- http://autoquad.org
     */
    MavAutopilot[MavAutopilot["AUTOQUAD"] = 14] = "AUTOQUAD";
    /**
     * Armazila -- http://armazila.com
     */
    MavAutopilot[MavAutopilot["ARMAZILA"] = 15] = "ARMAZILA";
    /**
     * Aerob -- http://aerob.ru
     */
    MavAutopilot[MavAutopilot["AEROB"] = 16] = "AEROB";
    /**
     * ASLUAV autopilot -- http://www.asl.ethz.ch
     */
    MavAutopilot[MavAutopilot["ASLUAV"] = 17] = "ASLUAV";
    /**
     * SmartAP Autopilot - http://sky-drones.com
     */
    MavAutopilot[MavAutopilot["SMARTAP"] = 18] = "SMARTAP";
    /**
     * AirRails - http://uaventure.com
     */
    MavAutopilot[MavAutopilot["AIRRAILS"] = 19] = "AIRRAILS";
    /**
     * Fusion Reflex - https://fusion.engineering
     */
    MavAutopilot[MavAutopilot["REFLEX"] = 20] = "REFLEX";
})(MavAutopilot = exports.MavAutopilot || (exports.MavAutopilot = {}));
/**
 * MAVLINK component type reported in HEARTBEAT message. Flight controllers must report the type of the
 * vehicle on which they are mounted (e.g. MAV_TYPE_OCTOROTOR). All other components must report a
 * value appropriate for their type (e.g. a camera must use MAV_TYPE_CAMERA).
 */
var MavType;
(function (MavType) {
    /**
     * Generic micro air vehicle
     */
    MavType[MavType["GENERIC"] = 0] = "GENERIC";
    /**
     * Fixed wing aircraft.
     */
    MavType[MavType["FIXED_WING"] = 1] = "FIXED_WING";
    /**
     * Quadrotor
     */
    MavType[MavType["QUADROTOR"] = 2] = "QUADROTOR";
    /**
     * Coaxial helicopter
     */
    MavType[MavType["COAXIAL"] = 3] = "COAXIAL";
    /**
     * Normal helicopter with tail rotor.
     */
    MavType[MavType["HELICOPTER"] = 4] = "HELICOPTER";
    /**
     * Ground installation
     */
    MavType[MavType["ANTENNA_TRACKER"] = 5] = "ANTENNA_TRACKER";
    /**
     * Operator control unit / ground control station
     */
    MavType[MavType["GCS"] = 6] = "GCS";
    /**
     * Airship, controlled
     */
    MavType[MavType["AIRSHIP"] = 7] = "AIRSHIP";
    /**
     * Free balloon, uncontrolled
     */
    MavType[MavType["FREE_BALLOON"] = 8] = "FREE_BALLOON";
    /**
     * Rocket
     */
    MavType[MavType["ROCKET"] = 9] = "ROCKET";
    /**
     * Ground rover
     */
    MavType[MavType["GROUND_ROVER"] = 10] = "GROUND_ROVER";
    /**
     * Surface vessel, boat, ship
     */
    MavType[MavType["SURFACE_BOAT"] = 11] = "SURFACE_BOAT";
    /**
     * Submarine
     */
    MavType[MavType["SUBMARINE"] = 12] = "SUBMARINE";
    /**
     * Hexarotor
     */
    MavType[MavType["HEXAROTOR"] = 13] = "HEXAROTOR";
    /**
     * Octorotor
     */
    MavType[MavType["OCTOROTOR"] = 14] = "OCTOROTOR";
    /**
     * Tricopter
     */
    MavType[MavType["TRICOPTER"] = 15] = "TRICOPTER";
    /**
     * Flapping wing
     */
    MavType[MavType["FLAPPING_WING"] = 16] = "FLAPPING_WING";
    /**
     * Kite
     */
    MavType[MavType["KITE"] = 17] = "KITE";
    /**
     * Onboard companion controller
     */
    MavType[MavType["ONBOARD_CONTROLLER"] = 18] = "ONBOARD_CONTROLLER";
    /**
     * Two-rotor VTOL using control surfaces in vertical operation in addition. Tailsitter.
     */
    MavType[MavType["VTOL_DUOROTOR"] = 19] = "VTOL_DUOROTOR";
    /**
     * Quad-rotor VTOL using a V-shaped quad config in vertical operation. Tailsitter.
     */
    MavType[MavType["VTOL_QUADROTOR"] = 20] = "VTOL_QUADROTOR";
    /**
     * Tiltrotor VTOL
     */
    MavType[MavType["VTOL_TILTROTOR"] = 21] = "VTOL_TILTROTOR";
    /**
     * VTOL reserved 2
     */
    MavType[MavType["VTOL_RESERVED2"] = 22] = "VTOL_RESERVED2";
    /**
     * VTOL reserved 3
     */
    MavType[MavType["VTOL_RESERVED3"] = 23] = "VTOL_RESERVED3";
    /**
     * VTOL reserved 4
     */
    MavType[MavType["VTOL_RESERVED4"] = 24] = "VTOL_RESERVED4";
    /**
     * VTOL reserved 5
     */
    MavType[MavType["VTOL_RESERVED5"] = 25] = "VTOL_RESERVED5";
    /**
     * Gimbal
     */
    MavType[MavType["GIMBAL"] = 26] = "GIMBAL";
    /**
     * ADSB system
     */
    MavType[MavType["ADSB"] = 27] = "ADSB";
    /**
     * Steerable, nonrigid airfoil
     */
    MavType[MavType["PARAFOIL"] = 28] = "PARAFOIL";
    /**
     * Dodecarotor
     */
    MavType[MavType["DODECAROTOR"] = 29] = "DODECAROTOR";
    /**
     * Camera
     */
    MavType[MavType["CAMERA"] = 30] = "CAMERA";
    /**
     * Charging station
     */
    MavType[MavType["CHARGING_STATION"] = 31] = "CHARGING_STATION";
    /**
     * FLARM collision avoidance system
     */
    MavType[MavType["FLARM"] = 32] = "FLARM";
    /**
     * Servo
     */
    MavType[MavType["SERVO"] = 33] = "SERVO";
    /**
     * Open Drone ID. See https://mavlink.io/en/services/opendroneid.html.
     */
    MavType[MavType["ODID"] = 34] = "ODID";
    /**
     * Decarotor
     */
    MavType[MavType["DECAROTOR"] = 35] = "DECAROTOR";
    /**
     * Battery
     */
    MavType[MavType["BATTERY"] = 36] = "BATTERY";
    /**
     * Parachute
     */
    MavType[MavType["PARACHUTE"] = 37] = "PARACHUTE";
    /**
     * Log
     */
    MavType[MavType["LOG"] = 38] = "LOG";
    /**
     * OSD
     */
    MavType[MavType["OSD"] = 39] = "OSD";
    /**
     * IMU
     */
    MavType[MavType["IMU"] = 40] = "IMU";
    /**
     * GPS
     */
    MavType[MavType["GPS"] = 41] = "GPS";
    /**
     * Winch
     */
    MavType[MavType["WINCH"] = 42] = "WINCH";
})(MavType = exports.MavType || (exports.MavType = {}));
/**
 * These flags encode the MAV mode.
 */
var MavModeFlag;
(function (MavModeFlag) {
    /**
     * 0b10000000 MAV safety set to armed. Motors are enabled / running / can start. Ready to fly.
     * Additional note: this flag is to be ignore when sent in the command MAV_CMD_DO_SET_MODE and
     * MAV_CMD_COMPONENT_ARM_DISARM shall be used instead. The flag can still be used to report the armed
     * state.
     */
    MavModeFlag[MavModeFlag["SAFETY_ARMED"] = 128] = "SAFETY_ARMED";
    /**
     * 0b01000000 remote control input is enabled.
     */
    MavModeFlag[MavModeFlag["MANUAL_INPUT_ENABLED"] = 64] = "MANUAL_INPUT_ENABLED";
    /**
     * 0b00100000 hardware in the loop simulation. All motors / actuators are blocked, but internal
     * software is full operational.
     */
    MavModeFlag[MavModeFlag["HIL_ENABLED"] = 32] = "HIL_ENABLED";
    /**
     * 0b00010000 system stabilizes electronically its attitude (and optionally position). It needs however
     * further control inputs to move around.
     */
    MavModeFlag[MavModeFlag["STABILIZE_ENABLED"] = 16] = "STABILIZE_ENABLED";
    /**
     * 0b00001000 guided mode enabled, system flies waypoints / mission items.
     */
    MavModeFlag[MavModeFlag["GUIDED_ENABLED"] = 8] = "GUIDED_ENABLED";
    /**
     * 0b00000100 autonomous mode enabled, system finds its own goal positions. Guided flag can be set or
     * not, depends on the actual implementation.
     */
    MavModeFlag[MavModeFlag["AUTO_ENABLED"] = 4] = "AUTO_ENABLED";
    /**
     * 0b00000010 system has a test mode enabled. This flag is intended for temporary system tests and
     * should not be used for stable implementations.
     */
    MavModeFlag[MavModeFlag["TEST_ENABLED"] = 2] = "TEST_ENABLED";
    /**
     * 0b00000001 Reserved for future use.
     */
    MavModeFlag[MavModeFlag["CUSTOM_MODE_ENABLED"] = 1] = "CUSTOM_MODE_ENABLED";
})(MavModeFlag = exports.MavModeFlag || (exports.MavModeFlag = {}));
/**
 * These values encode the bit positions of the decode position. These values can be used to read the
 * value of a flag bit by combining the base_mode variable with AND with the flag position value. The
 * result will be either 0 or 1, depending on if the flag is set or not.
 */
var MavModeFlagDecodePosition;
(function (MavModeFlagDecodePosition) {
    /**
     * First bit: 10000000
     */
    MavModeFlagDecodePosition[MavModeFlagDecodePosition["SAFETY"] = 128] = "SAFETY";
    /**
     * Second bit: 01000000
     */
    MavModeFlagDecodePosition[MavModeFlagDecodePosition["MANUAL"] = 64] = "MANUAL";
    /**
     * Third bit: 00100000
     */
    MavModeFlagDecodePosition[MavModeFlagDecodePosition["HIL"] = 32] = "HIL";
    /**
     * Fourth bit: 00010000
     */
    MavModeFlagDecodePosition[MavModeFlagDecodePosition["STABILIZE"] = 16] = "STABILIZE";
    /**
     * Fifth bit: 00001000
     */
    MavModeFlagDecodePosition[MavModeFlagDecodePosition["GUIDED"] = 8] = "GUIDED";
    /**
     * Sixth bit: 00000100
     */
    MavModeFlagDecodePosition[MavModeFlagDecodePosition["AUTO"] = 4] = "AUTO";
    /**
     * Seventh bit: 00000010
     */
    MavModeFlagDecodePosition[MavModeFlagDecodePosition["TEST"] = 2] = "TEST";
    /**
     * Eighth bit: 00000001
     */
    MavModeFlagDecodePosition[MavModeFlagDecodePosition["CUSTOM_MODE"] = 1] = "CUSTOM_MODE";
})(MavModeFlagDecodePosition = exports.MavModeFlagDecodePosition || (exports.MavModeFlagDecodePosition = {}));
/**
 * MAV_STATE
 */
var MavState;
(function (MavState) {
    /**
     * Uninitialized system, state is unknown.
     */
    MavState[MavState["UNINIT"] = 0] = "UNINIT";
    /**
     * System is booting up.
     */
    MavState[MavState["BOOT"] = 1] = "BOOT";
    /**
     * System is calibrating and not flight-ready.
     */
    MavState[MavState["CALIBRATING"] = 2] = "CALIBRATING";
    /**
     * System is grounded and on standby. It can be launched any time.
     */
    MavState[MavState["STANDBY"] = 3] = "STANDBY";
    /**
     * System is active and might be already airborne. Motors are engaged.
     */
    MavState[MavState["ACTIVE"] = 4] = "ACTIVE";
    /**
     * System is in a non-normal flight mode. It can however still navigate.
     */
    MavState[MavState["CRITICAL"] = 5] = "CRITICAL";
    /**
     * System is in a non-normal flight mode. It lost control over parts or over the whole airframe. It is
     * in mayday and going down.
     */
    MavState[MavState["EMERGENCY"] = 6] = "EMERGENCY";
    /**
     * System just initialized its power-down sequence, will shut down now.
     */
    MavState[MavState["POWEROFF"] = 7] = "POWEROFF";
    /**
     * System is terminating itself.
     */
    MavState[MavState["FLIGHT_TERMINATION"] = 8] = "FLIGHT_TERMINATION";
})(MavState = exports.MavState || (exports.MavState = {}));
/**
 * Component ids (values) for the different types and instances of onboard hardware/software that might
 * make up a MAVLink system (autopilot, cameras, servos, GPS systems, avoidance systems etc.).
 * Components must use the appropriate ID in their source address when sending messages. Components can
 * also use IDs to determine if they are the intended recipient of an incoming message. The
 * MAV_COMP_ID_ALL value is used to indicate messages that must be processed by all components. When
 * creating new entries, components that can have multiple instances (e.g. cameras, servos etc.) should
 * be allocated sequential values. An appropriate number of values should be left free after these
 * components to allow the number of instances to be expanded.
 */
var MavComponent;
(function (MavComponent) {
    /**
     * Target id (target_component) used to broadcast messages to all components of the receiving system.
     * Components should attempt to process messages with this component ID and forward to components on
     * any other interfaces. Note: This is not a valid *source* component id for a message.
     */
    MavComponent[MavComponent["ALL"] = 0] = "ALL";
    /**
     * System flight controller component ("autopilot"). Only one autopilot is expected in a particular
     * system.
     */
    MavComponent[MavComponent["AUTOPILOT1"] = 1] = "AUTOPILOT1";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER1"] = 25] = "USER1";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER2"] = 26] = "USER2";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER3"] = 27] = "USER3";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER4"] = 28] = "USER4";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER5"] = 29] = "USER5";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER6"] = 30] = "USER6";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER7"] = 31] = "USER7";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER8"] = 32] = "USER8";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER9"] = 33] = "USER9";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER10"] = 34] = "USER10";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER11"] = 35] = "USER11";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER12"] = 36] = "USER12";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER13"] = 37] = "USER13";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER14"] = 38] = "USER14";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER15"] = 39] = "USER15";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER16"] = 40] = "USER16";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER17"] = 41] = "USER17";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER18"] = 42] = "USER18";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER19"] = 43] = "USER19";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER20"] = 44] = "USER20";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER21"] = 45] = "USER21";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER22"] = 46] = "USER22";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER23"] = 47] = "USER23";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER24"] = 48] = "USER24";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER25"] = 49] = "USER25";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER26"] = 50] = "USER26";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER27"] = 51] = "USER27";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER28"] = 52] = "USER28";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER29"] = 53] = "USER29";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER30"] = 54] = "USER30";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER31"] = 55] = "USER31";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER32"] = 56] = "USER32";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER33"] = 57] = "USER33";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER34"] = 58] = "USER34";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER35"] = 59] = "USER35";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER36"] = 60] = "USER36";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER37"] = 61] = "USER37";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER38"] = 62] = "USER38";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER39"] = 63] = "USER39";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER40"] = 64] = "USER40";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER41"] = 65] = "USER41";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER42"] = 66] = "USER42";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER43"] = 67] = "USER43";
    /**
     * Telemetry radio (e.g. SiK radio, or other component that emits RADIO_STATUS messages).
     */
    MavComponent[MavComponent["TELEMETRY_RADIO"] = 68] = "TELEMETRY_RADIO";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER45"] = 69] = "USER45";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER46"] = 70] = "USER46";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER47"] = 71] = "USER47";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER48"] = 72] = "USER48";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER49"] = 73] = "USER49";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER50"] = 74] = "USER50";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER51"] = 75] = "USER51";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER52"] = 76] = "USER52";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER53"] = 77] = "USER53";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER54"] = 78] = "USER54";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER55"] = 79] = "USER55";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER56"] = 80] = "USER56";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER57"] = 81] = "USER57";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER58"] = 82] = "USER58";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER59"] = 83] = "USER59";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER60"] = 84] = "USER60";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER61"] = 85] = "USER61";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER62"] = 86] = "USER62";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER63"] = 87] = "USER63";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER64"] = 88] = "USER64";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER65"] = 89] = "USER65";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER66"] = 90] = "USER66";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER67"] = 91] = "USER67";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER68"] = 92] = "USER68";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER69"] = 93] = "USER69";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER70"] = 94] = "USER70";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER71"] = 95] = "USER71";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER72"] = 96] = "USER72";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER73"] = 97] = "USER73";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER74"] = 98] = "USER74";
    /**
     * Id for a component on privately managed MAVLink network. Can be used for any purpose but may not be
     * published by components outside of the private network.
     */
    MavComponent[MavComponent["USER75"] = 99] = "USER75";
    /**
     * Camera #1.
     */
    MavComponent[MavComponent["CAMERA"] = 100] = "CAMERA";
    /**
     * Camera #2.
     */
    MavComponent[MavComponent["CAMERA2"] = 101] = "CAMERA2";
    /**
     * Camera #3.
     */
    MavComponent[MavComponent["CAMERA3"] = 102] = "CAMERA3";
    /**
     * Camera #4.
     */
    MavComponent[MavComponent["CAMERA4"] = 103] = "CAMERA4";
    /**
     * Camera #5.
     */
    MavComponent[MavComponent["CAMERA5"] = 104] = "CAMERA5";
    /**
     * Camera #6.
     */
    MavComponent[MavComponent["CAMERA6"] = 105] = "CAMERA6";
    /**
     * Servo #1.
     */
    MavComponent[MavComponent["SERVO1"] = 140] = "SERVO1";
    /**
     * Servo #2.
     */
    MavComponent[MavComponent["SERVO2"] = 141] = "SERVO2";
    /**
     * Servo #3.
     */
    MavComponent[MavComponent["SERVO3"] = 142] = "SERVO3";
    /**
     * Servo #4.
     */
    MavComponent[MavComponent["SERVO4"] = 143] = "SERVO4";
    /**
     * Servo #5.
     */
    MavComponent[MavComponent["SERVO5"] = 144] = "SERVO5";
    /**
     * Servo #6.
     */
    MavComponent[MavComponent["SERVO6"] = 145] = "SERVO6";
    /**
     * Servo #7.
     */
    MavComponent[MavComponent["SERVO7"] = 146] = "SERVO7";
    /**
     * Servo #8.
     */
    MavComponent[MavComponent["SERVO8"] = 147] = "SERVO8";
    /**
     * Servo #9.
     */
    MavComponent[MavComponent["SERVO9"] = 148] = "SERVO9";
    /**
     * Servo #10.
     */
    MavComponent[MavComponent["SERVO10"] = 149] = "SERVO10";
    /**
     * Servo #11.
     */
    MavComponent[MavComponent["SERVO11"] = 150] = "SERVO11";
    /**
     * Servo #12.
     */
    MavComponent[MavComponent["SERVO12"] = 151] = "SERVO12";
    /**
     * Servo #13.
     */
    MavComponent[MavComponent["SERVO13"] = 152] = "SERVO13";
    /**
     * Servo #14.
     */
    MavComponent[MavComponent["SERVO14"] = 153] = "SERVO14";
    /**
     * Gimbal #1.
     */
    MavComponent[MavComponent["GIMBAL"] = 154] = "GIMBAL";
    /**
     * Logging component.
     */
    MavComponent[MavComponent["LOG"] = 155] = "LOG";
    /**
     * Automatic Dependent Surveillance-Broadcast (ADS-B) component.
     */
    MavComponent[MavComponent["ADSB"] = 156] = "ADSB";
    /**
     * On Screen Display (OSD) devices for video links.
     */
    MavComponent[MavComponent["OSD"] = 157] = "OSD";
    /**
     * Generic autopilot peripheral component ID. Meant for devices that do not implement the parameter
     * microservice.
     */
    MavComponent[MavComponent["PERIPHERAL"] = 158] = "PERIPHERAL";
    /**
     * Gimbal ID for QX1.
     */
    MavComponent[MavComponent["QX1_GIMBAL"] = 159] = "QX1_GIMBAL";
    /**
     * FLARM collision alert component.
     */
    MavComponent[MavComponent["FLARM"] = 160] = "FLARM";
    /**
     * Parachute component.
     */
    MavComponent[MavComponent["PARACHUTE"] = 161] = "PARACHUTE";
    /**
     * Gimbal #2.
     */
    MavComponent[MavComponent["GIMBAL2"] = 171] = "GIMBAL2";
    /**
     * Gimbal #3.
     */
    MavComponent[MavComponent["GIMBAL3"] = 172] = "GIMBAL3";
    /**
     * Gimbal #4
     */
    MavComponent[MavComponent["GIMBAL4"] = 173] = "GIMBAL4";
    /**
     * Gimbal #5.
     */
    MavComponent[MavComponent["GIMBAL5"] = 174] = "GIMBAL5";
    /**
     * Gimbal #6.
     */
    MavComponent[MavComponent["GIMBAL6"] = 175] = "GIMBAL6";
    /**
     * Battery #1.
     */
    MavComponent[MavComponent["BATTERY"] = 180] = "BATTERY";
    /**
     * Battery #2.
     */
    MavComponent[MavComponent["BATTERY2"] = 181] = "BATTERY2";
    /**
     * CAN over MAVLink client.
     */
    MavComponent[MavComponent["MAVCAN"] = 189] = "MAVCAN";
    /**
     * Component that can generate/supply a mission flight plan (e.g. GCS or developer API).
     */
    MavComponent[MavComponent["MISSIONPLANNER"] = 190] = "MISSIONPLANNER";
    /**
     * Component that lives on the onboard computer (companion computer) and has some generic
     * functionalities, such as settings system parameters and monitoring the status of some processes that
     * don't directly speak mavlink and so on.
     */
    MavComponent[MavComponent["ONBOARD_COMPUTER"] = 191] = "ONBOARD_COMPUTER";
    /**
     * Component that lives on the onboard computer (companion computer) and has some generic
     * functionalities, such as settings system parameters and monitoring the status of some processes that
     * don't directly speak mavlink and so on.
     */
    MavComponent[MavComponent["ONBOARD_COMPUTER2"] = 192] = "ONBOARD_COMPUTER2";
    /**
     * Component that lives on the onboard computer (companion computer) and has some generic
     * functionalities, such as settings system parameters and monitoring the status of some processes that
     * don't directly speak mavlink and so on.
     */
    MavComponent[MavComponent["ONBOARD_COMPUTER3"] = 193] = "ONBOARD_COMPUTER3";
    /**
     * Component that lives on the onboard computer (companion computer) and has some generic
     * functionalities, such as settings system parameters and monitoring the status of some processes that
     * don't directly speak mavlink and so on.
     */
    MavComponent[MavComponent["ONBOARD_COMPUTER4"] = 194] = "ONBOARD_COMPUTER4";
    /**
     * Component that finds an optimal path between points based on a certain constraint (e.g. minimum
     * snap, shortest path, cost, etc.).
     */
    MavComponent[MavComponent["PATHPLANNER"] = 195] = "PATHPLANNER";
    /**
     * Component that plans a collision free path between two points.
     */
    MavComponent[MavComponent["OBSTACLE_AVOIDANCE"] = 196] = "OBSTACLE_AVOIDANCE";
    /**
     * Component that provides position estimates using VIO techniques.
     */
    MavComponent[MavComponent["VISUAL_INERTIAL_ODOMETRY"] = 197] = "VISUAL_INERTIAL_ODOMETRY";
    /**
     * Component that manages pairing of vehicle and GCS.
     */
    MavComponent[MavComponent["PAIRING_MANAGER"] = 198] = "PAIRING_MANAGER";
    /**
     * Inertial Measurement Unit (IMU) #1.
     */
    MavComponent[MavComponent["IMU"] = 200] = "IMU";
    /**
     * Inertial Measurement Unit (IMU) #2.
     */
    MavComponent[MavComponent["IMU_2"] = 201] = "IMU_2";
    /**
     * Inertial Measurement Unit (IMU) #3.
     */
    MavComponent[MavComponent["IMU_3"] = 202] = "IMU_3";
    /**
     * GPS #1.
     */
    MavComponent[MavComponent["GPS"] = 220] = "GPS";
    /**
     * GPS #2.
     */
    MavComponent[MavComponent["GPS2"] = 221] = "GPS2";
    /**
     * Open Drone ID transmitter/receiver (Bluetooth/WiFi/Internet).
     */
    MavComponent[MavComponent["ODID_TXRX_1"] = 236] = "ODID_TXRX_1";
    /**
     * Open Drone ID transmitter/receiver (Bluetooth/WiFi/Internet).
     */
    MavComponent[MavComponent["ODID_TXRX_2"] = 237] = "ODID_TXRX_2";
    /**
     * Open Drone ID transmitter/receiver (Bluetooth/WiFi/Internet).
     */
    MavComponent[MavComponent["ODID_TXRX_3"] = 238] = "ODID_TXRX_3";
    /**
     * Component to bridge MAVLink to UDP (i.e. from a UART).
     */
    MavComponent[MavComponent["UDP_BRIDGE"] = 240] = "UDP_BRIDGE";
    /**
     * Component to bridge to UART (i.e. from UDP).
     */
    MavComponent[MavComponent["UART_BRIDGE"] = 241] = "UART_BRIDGE";
    /**
     * Component handling TUNNEL messages (e.g. vendor specific GUI of a component).
     */
    MavComponent[MavComponent["TUNNEL_NODE"] = 242] = "TUNNEL_NODE";
    /**
     * Component for handling system messages (e.g. to ARM, takeoff, etc.).
     */
    MavComponent[MavComponent["SYSTEM_CONTROL"] = 250] = "SYSTEM_CONTROL";
})(MavComponent = exports.MavComponent || (exports.MavComponent = {}));
/**
 * The heartbeat message shows that a system or component is present and responding. The type and
 * autopilot fields (along with the message component id), allow the receiving system to treat further
 * messages from this system appropriately (e.g. by laying out the user interface based on the
 * autopilot). This microservice is documented at https://mavlink.io/en/services/heartbeat.html
 */
class Heartbeat extends mavlink_1.MavLinkData {
    constructor() {
        super();
        this.type = MavType[Object.keys(MavType)[0]];
        this.autopilot = MavAutopilot[Object.keys(MavAutopilot)[0]];
        this.baseMode = MavModeFlag[Object.keys(MavModeFlag)[0]];
        this.customMode = 0;
        this.systemStatus = MavState[Object.keys(MavState)[0]];
        this.mavlinkVersion = 0;
    }
}
exports.Heartbeat = Heartbeat;
Heartbeat.MSG_ID = 0;
Heartbeat.MSG_NAME = 'HEARTBEAT';
Heartbeat.PAYLOAD_LENGTH = 9;
Heartbeat.MAGIC_NUMBER = 50;
Heartbeat.FIELDS = [
    new mavlink_1.MavLinkPacketField('custom_mode', 'customMode', 0, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('type', 'type', 4, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('autopilot', 'autopilot', 5, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('base_mode', 'baseMode', 6, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('system_status', 'systemStatus', 7, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('mavlink_version', 'mavlinkVersion', 8, false, 1, 'uint8_t_mavlink_version', ''),
];
exports.REGISTRY = {
    0: Heartbeat,
};
//# sourceMappingURL=minimal.js.map