import { Schema } from '../schema';
/** Present only when `GiftCardActivityType` is UNBLOCK. */
export interface GiftCardActivityUnblock {
    reason: string;
}
export declare const giftCardActivityUnblockSchema: Schema<GiftCardActivityUnblock>;
