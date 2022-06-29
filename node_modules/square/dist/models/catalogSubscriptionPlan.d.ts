import { Schema } from '../schema';
import { SubscriptionPhase } from './subscriptionPhase';
/**
 * Describes a subscription plan. For more information, see
 * [Set Up and Manage a Subscription Plan](https://developer.squareup.com/docs/subscriptions-api/setup-plan).
 */
export interface CatalogSubscriptionPlan {
    /** The name of the plan. */
    name: string;
    /** A list of SubscriptionPhase containing the [SubscriptionPhase]($m/SubscriptionPhase) for this plan. */
    phases: SubscriptionPhase[];
}
export declare const catalogSubscriptionPlanSchema: Schema<CatalogSubscriptionPlan>;
