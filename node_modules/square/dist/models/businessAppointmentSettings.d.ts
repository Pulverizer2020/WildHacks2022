import { Schema } from '../schema';
import { Money } from './money';
/** The service appointment settings, including where and how the service is provided. */
export interface BusinessAppointmentSettings {
    /**
     * Types of the location allowed for bookings.
     * See [BusinessAppointmentSettingsBookingLocationType](#type-businessappointmentsettingsbookinglocationtype) for possible values
     */
    locationTypes?: string[];
    /** Time units of a service duration for bookings. */
    alignmentTime?: string;
    /** The minimum lead time in seconds before a service can be booked. Bookings must be created at least this far ahead of the booking's starting time. */
    minBookingLeadTimeSeconds?: number;
    /** The maximum lead time in seconds before a service can be booked. Bookings must be created at most this far ahead of the booking's starting time. */
    maxBookingLeadTimeSeconds?: number;
    /**
     * Indicates whether a customer can choose from all available time slots and have a staff member assigned
     * automatically (`true`) or not (`false`).
     */
    anyTeamMemberBookingEnabled?: boolean;
    /** Indicates whether a customer can book multiple services in a single online booking. */
    multipleServiceBookingEnabled?: boolean;
    /** Types of daily appointment limits. */
    maxAppointmentsPerDayLimitType?: string;
    /** The maximum number of daily appointments per team member or per location. */
    maxAppointmentsPerDayLimit?: number;
    /** The cut-off time in seconds for allowing clients to cancel or reschedule an appointment. */
    cancellationWindowSeconds?: number;
    /**
     * Represents an amount of money. `Money` fields can be signed or unsigned.
     * Fields that do not explicitly define whether they are signed or unsigned are
     * considered unsigned and can only hold positive amounts. For signed fields, the
     * sign of the value indicates the purpose of the money transfer. See
     * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
     * for more information.
     */
    cancellationFeeMoney?: Money;
    /** The category of the seller’s cancellation policy. */
    cancellationPolicy?: string;
    /** The free-form text of the seller's cancellation policy. */
    cancellationPolicyText?: string;
    /** Indicates whether customers has an assigned staff member (`true`) or can select s staff member of their choice (`false`). */
    skipBookingFlowStaffSelection?: boolean;
}
export declare const businessAppointmentSettingsSchema: Schema<BusinessAppointmentSettings>;
