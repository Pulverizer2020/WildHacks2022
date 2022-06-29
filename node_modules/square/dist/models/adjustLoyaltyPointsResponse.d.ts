import { Schema } from '../schema';
import { Error } from './error';
import { LoyaltyEvent } from './loyaltyEvent';
/**
 * A response that includes the loyalty event that
 * resulted from the successful API call.
 */
export interface AdjustLoyaltyPointsResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
    /**
     * Provides information about a loyalty event.
     * For more information, see [Loyalty events](https://developer.squareup.com/docs/loyalty-api/overview/#loyalty-events).
     */
    event?: LoyaltyEvent;
}
export declare const adjustLoyaltyPointsResponseSchema: Schema<AdjustLoyaltyPointsResponse>;
