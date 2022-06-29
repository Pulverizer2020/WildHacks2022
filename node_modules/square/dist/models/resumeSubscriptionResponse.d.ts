import { Schema } from '../schema';
import { Error } from './error';
import { Subscription } from './subscription';
/**
 * Defines parameters in a
 * [ResumeSubscription]($e/Subscriptions/ResumeSubscription) endpoint
 * response.
 */
export interface ResumeSubscriptionResponse {
    /** Information about errors encountered during the request. */
    errors?: Error[];
    /**
     * Represents a customer subscription to a subscription plan.
     * For an overview of the `Subscription` type, see
     * [Subscription object](https://developer.squareup.com/docs/subscriptions-api/overview#subscription-object-overview).
     */
    subscription?: Subscription;
}
export declare const resumeSubscriptionResponseSchema: Schema<ResumeSubscriptionResponse>;
