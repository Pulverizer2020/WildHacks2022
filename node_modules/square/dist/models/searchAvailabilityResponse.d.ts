import { Schema } from '../schema';
import { Availability } from './availability';
import { Error } from './error';
export interface SearchAvailabilityResponse {
    /** List of slots available for booking. */
    availabilities?: Availability[];
    /** Any errors that occurred during the request. */
    errors?: Error[];
}
export declare const searchAvailabilityResponseSchema: Schema<SearchAvailabilityResponse>;
