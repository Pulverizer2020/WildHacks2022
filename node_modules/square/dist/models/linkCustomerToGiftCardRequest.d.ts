import { Schema } from '../schema';
/** A request to link a customer to a gift card */
export interface LinkCustomerToGiftCardRequest {
    /** The ID of the customer to be linked. */
    customerId: string;
}
export declare const linkCustomerToGiftCardRequestSchema: Schema<LinkCustomerToGiftCardRequest>;
