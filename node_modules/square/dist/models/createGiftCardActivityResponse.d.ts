import { Schema } from '../schema';
import { Error } from './error';
import { GiftCardActivity } from './giftCardActivity';
/**
 * A response that contains a `GiftCardActivity` that was created.
 * The response might contain a set of `Error` objects if the request resulted in errors.
 */
export interface CreateGiftCardActivityResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
    /** Represents an action performed on a gift card that affects its state or balance. */
    giftCardActivity?: GiftCardActivity;
}
export declare const createGiftCardActivityResponseSchema: Schema<CreateGiftCardActivityResponse>;
