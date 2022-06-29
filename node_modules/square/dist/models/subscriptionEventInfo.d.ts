import { Schema } from '../schema';
/** Provides information about the subscription event. */
export interface SubscriptionEventInfo {
    /** A human-readable explanation for the event. */
    detail?: string;
    /** The possible subscription event info codes. */
    code?: string;
}
export declare const subscriptionEventInfoSchema: Schema<SubscriptionEventInfo>;
