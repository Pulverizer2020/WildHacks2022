import { Schema } from '../schema';
import { AppointmentSegment } from './appointmentSegment';
/** Describes a slot available for booking, encapsulating appointment segments, the location and starting time. */
export interface Availability {
    /** The RFC 3339 timestamp specifying the beginning time of the slot available for booking. */
    startAt?: string;
    /** The ID of the location available for booking. */
    locationId?: string;
    /** The list of appointment segments available for booking */
    appointmentSegments?: AppointmentSegment[];
}
export declare const availabilitySchema: Schema<Availability>;
