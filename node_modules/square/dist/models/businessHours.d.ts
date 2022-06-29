import { Schema } from '../schema';
import { BusinessHoursPeriod } from './businessHoursPeriod';
/** Represents the hours of operation for a business location. */
export interface BusinessHours {
    /**
     * The list of time periods during which the business is open. There may be at most 10
     * periods per day.
     */
    periods?: BusinessHoursPeriod[];
}
export declare const businessHoursSchema: Schema<BusinessHours>;
