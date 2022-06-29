import { Schema } from '../schema';
export interface Device {
    /** The device's Square-issued ID. */
    id?: string;
    /** The device's merchant-specified name. */
    name?: string;
}
export declare const deviceSchema: Schema<Device>;
