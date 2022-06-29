import { Schema } from '../schema';
/** Defines an appointment segment of a booking. */
export interface AppointmentSegment {
    /** The time span in minutes of an appointment segment. */
    durationMinutes: number;
    /** The ID of the [CatalogItemVariation]($m/CatalogItemVariation) object representing the service booked in this segment. */
    serviceVariationId: string;
    /** The ID of the [TeamMember]($m/TeamMember) object representing the team member booked in this segment. */
    teamMemberId: string;
    /** The current version of the item variation representing the service booked in this segment. */
    serviceVariationVersion: bigint;
}
export declare const appointmentSegmentSchema: Schema<AppointmentSegment>;
