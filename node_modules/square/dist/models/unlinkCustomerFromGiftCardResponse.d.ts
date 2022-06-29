import { Schema } from '../schema';
import { Error } from './error';
import { GiftCard } from './giftCard';
/**
 * A response that contains one `GiftCard` that was unlinked. The response might contain a set of `Error`
 * objects if the request resulted in errors.
 */
export interface UnlinkCustomerFromGiftCardResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
    /** Represents a Square gift card. */
    giftCard?: GiftCard;
}
export declare const unlinkCustomerFromGiftCardResponseSchema: Schema<UnlinkCustomerFromGiftCardResponse>;
