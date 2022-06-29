import { Schema } from '../schema';
export interface CancelBookingRequest {
    /** A unique key to make this request an idempotent operation. */
    idempotencyKey?: string;
    /** The revision number for the booking used for optimistic concurrency. */
    bookingVersion?: number;
}
export declare const cancelBookingRequestSchema: Schema<CancelBookingRequest>;
