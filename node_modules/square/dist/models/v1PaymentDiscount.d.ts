import { Schema } from '../schema';
import { V1Money } from './v1Money';
/** V1PaymentDiscount */
export interface V1PaymentDiscount {
    /** The discount's name. */
    name?: string;
    appliedMoney?: V1Money;
    /** The ID of the applied discount, if available. Discounts applied in older versions of Square Register might not have an ID. */
    discountId?: string;
}
export declare const v1PaymentDiscountSchema: Schema<V1PaymentDiscount>;
