import { Schema } from '../schema';
import { GiftCardActivity } from './giftCardActivity';
/** A request to create a gift card activity. */
export interface CreateGiftCardActivityRequest {
    /** A unique string that identifies the `CreateGiftCardActivity` request. */
    idempotencyKey: string;
    /** Represents an action performed on a gift card that affects its state or balance. */
    giftCardActivity: GiftCardActivity;
}
export declare const createGiftCardActivityRequestSchema: Schema<CreateGiftCardActivityRequest>;
