import { Schema } from '../schema';
import { SearchAvailabilityFilter } from './searchAvailabilityFilter';
/** Query conditions to search for availabilities of bookings. */
export interface SearchAvailabilityQuery {
    /** A query filter to search for availabilities by. */
    filter: SearchAvailabilityFilter;
}
export declare const searchAvailabilityQuerySchema: Schema<SearchAvailabilityQuery>;
