import { Schema } from '../schema';
/** Represents a period of time during which a business location is open. */
export interface BusinessHoursPeriod {
    /** Indicates the specific day  of the week. */
    dayOfWeek?: string;
    /**
     * The start time of a business hours period, specified in local time using partial-time
     * RFC 3339 format.
     */
    startLocalTime?: string;
    /**
     * The end time of a business hours period, specified in local time using partial-time
     * RFC 3339 format.
     */
    endLocalTime?: string;
}
export declare const businessHoursPeriodSchema: Schema<BusinessHoursPeriod>;
