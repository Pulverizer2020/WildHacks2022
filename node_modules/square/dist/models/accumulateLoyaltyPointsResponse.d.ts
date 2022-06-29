import { Schema } from '../schema';
import { Error } from './error';
import { LoyaltyEvent } from './loyaltyEvent';
/** A response containing the resulting loyalty event. */
export interface AccumulateLoyaltyPointsResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
    /**
     * Provides information about a loyalty event.
     * For more information, see [Loyalty events](https://developer.squareup.com/docs/loyalty-api/overview/#loyalty-events).
     */
    event?: LoyaltyEvent;
}
export declare const accumulateLoyaltyPointsResponseSchema: Schema<AccumulateLoyaltyPointsResponse>;
