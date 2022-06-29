import { Schema } from '../schema';
import { SearchAvailabilityQuery } from './searchAvailabilityQuery';
export interface SearchAvailabilityRequest {
    /** Query conditions to search for availabilities of bookings. */
    query: SearchAvailabilityQuery;
}
export declare const searchAvailabilityRequestSchema: Schema<SearchAvailabilityRequest>;
