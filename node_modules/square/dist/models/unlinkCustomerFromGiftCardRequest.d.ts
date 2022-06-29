import { Schema } from '../schema';
/** A request to unlink a customer to a gift card */
export interface UnlinkCustomerFromGiftCardRequest {
    customerId: string;
}
export declare const unlinkCustomerFromGiftCardRequestSchema: Schema<UnlinkCustomerFromGiftCardRequest>;
