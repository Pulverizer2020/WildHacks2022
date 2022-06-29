import { Schema } from '../schema';
import { SubscriptionEventInfo } from './subscriptionEventInfo';
/** Describes changes to subscription and billing states. */
export interface SubscriptionEvent {
    /** The ID of the subscription event. */
    id: string;
    /** The possible subscription event types. */
    subscriptionEventType: string;
    /**
     * The date, in YYYY-MM-DD format (for
     * example, 2013-01-15), when the subscription event went into effect.
     */
    effectiveDate: string;
    /** The ID of the subscription plan associated with the subscription. */
    planId: string;
    /** Provides information about the subscription event. */
    info?: SubscriptionEventInfo;
}
export declare const subscriptionEventSchema: Schema<SubscriptionEvent>;
