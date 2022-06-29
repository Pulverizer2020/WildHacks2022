import { Schema } from '../schema';
import { Error } from './error';
import { Subscription } from './subscription';
/**
 * Defines fields that are included in a
 * [CancelSubscription]($e/Subscriptions/CancelSubscription) response.
 */
export interface CancelSubscriptionResponse {
    /** Information about errors encountered during the request. */
    errors?: Error[];
    /**
     * Represents a customer subscription to a subscription plan.
     * For an overview of the `Subscription` type, see
     * [Subscription object](https://developer.squareup.com/docs/subscriptions-api/overview#subscription-object-overview).
     */
    subscription?: Subscription;
}
export declare const cancelSubscriptionResponseSchema: Schema<CancelSubscriptionResponse>;
