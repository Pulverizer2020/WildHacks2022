import { Schema } from '../schema';
import { SegmentFilter } from './segmentFilter';
import { TimeRange } from './timeRange';
/** A query filter to search for availabilities by. */
export interface SearchAvailabilityFilter {
    /**
     * Represents a generic time range. The start and end values are
     * represented in RFC 3339 format. Time ranges are customized to be
     * inclusive or exclusive based on the needs of a particular endpoint.
     * Refer to the relevant endpoint-specific documentation to determine
     * how time ranges are handled.
     */
    startAtRange: TimeRange;
    /**
     * The query expression to search for availabilities matching the specified seller location IDs.
     * This query expression is not applicable when `booking_id` is present.
     */
    locationId?: string;
    /**
     * The list of segment filters to apply. A query with `n` segment filters returns availabilities with `n` segments per
     * availability. It is not applicable when `booking_id` is present.
     */
    segmentFilters?: SegmentFilter[];
    /**
     * The query expression to search for availabilities for an existing booking by matching the specified `booking_id` value.
     * This is commonly used to reschedule an appointment.
     * If this expression is specified, the `location_id` and `segment_filters` expressions are not allowed.
     */
    bookingId?: string;
}
export declare const searchAvailabilityFilterSchema: Schema<SearchAvailabilityFilter>;
