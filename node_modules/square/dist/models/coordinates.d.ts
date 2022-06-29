import { Schema } from '../schema';
/** Latitude and longitude coordinates. */
export interface Coordinates {
    /** The latitude of the coordinate expressed in degrees. */
    latitude?: number;
    /** The longitude of the coordinate expressed in degrees. */
    longitude?: number;
}
export declare const coordinatesSchema: Schema<Coordinates>;
