export function x25crc(
  buffer: Buffer,
  start = 0,
  trim = 0,
  magic: number | null = null
) {
  let crc = 0xffff;

  const digest = (byte: number) => {
    let tmp = (byte & 0xff) ^ (crc & 0xff);
    tmp ^= tmp << 4;
    tmp &= 0xff;
    crc = (crc >> 8) ^ (tmp << 8) ^ (tmp << 3) ^ (tmp >> 4);
    crc &= 0xffff;
  };

  for (let i = start; i < buffer.length - trim; i++) {
    digest(buffer[i]);
  }

  if (magic !== null) {
    digest(magic);
  }

  return crc;
}

export * from "./lib/types";
export * from "./lib/mavlink";
export * from "./lib/magic-numbers";
export * as minimal from "./lib/minimal";
export * as common from "./lib/common";
export * as ardupilotmega from "./lib/ardupilotmega";
export * as uavionix from "./lib/uavionix";
export * as icarous from "./lib/icarous";
export * as asluav from "./lib/asluav";
export * as development from "./lib/development";
export * as ualberta from "./lib/ualberta";
export * as storm32 from "./lib/storm32";
