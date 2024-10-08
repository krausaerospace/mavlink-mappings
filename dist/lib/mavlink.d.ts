/**
 * Field definition
 */
export declare class MavLinkPacketField {
    readonly source: string;
    readonly name: string;
    readonly type: string;
    readonly length: number;
    readonly offset: number;
    readonly extension: boolean;
    readonly size: number;
    readonly units: string;
    /**
     * @param source original name of the field
     * @param name name of the field
     * @param offset field offset in the payload
     * @param extension true if it is an extension field, false otherwise
     * @param size size of either the field or the size of an element in the array if it is an array field
     * @param type type of the field (ends with [] if it is an array field)
     * @param units unit of the field
     * @param length for array fields this is the length of the array
     */
    constructor(source: string, name: string, offset: number, extension: boolean, size: number, type: string, units: string, length?: number);
}
/**
 * Base class for all data classes
 */
export declare abstract class MavLinkData {
    static MSG_ID: number;
    static MSG_NAME: string;
    static PAYLOAD_LENGTH: number;
    static MAGIC_NUMBER: number;
    static FIELDS: MavLinkPacketField[];
}
/**
 * Interface describing static fields of a data classes
 */
export interface MavLinkDataConstructor<T extends MavLinkData> {
    MSG_ID: number;
    MSG_NAME: string;
    PAYLOAD_LENGTH: number;
    MAGIC_NUMBER: number;
    FIELDS: MavLinkPacketField[];
    new (): T;
}
/**
 * Type describing a registry binding together all packets
 */
export type MavLinkPacketRegistry = {
    [x: number]: MavLinkDataConstructor<MavLinkData>;
};
