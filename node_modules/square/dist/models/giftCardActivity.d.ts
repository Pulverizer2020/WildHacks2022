import { Schema } from '../schema';
import { GiftCardActivityActivate } from './giftCardActivityActivate';
import { GiftCardActivityAdjustDecrement } from './giftCardActivityAdjustDecrement';
import { GiftCardActivityAdjustIncrement } from './giftCardActivityAdjustIncrement';
import { GiftCardActivityBlock } from './giftCardActivityBlock';
import { GiftCardActivityClearBalance } from './giftCardActivityClearBalance';
import { GiftCardActivityDeactivate } from './giftCardActivityDeactivate';
import { GiftCardActivityImport } from './giftCardActivityImport';
import { GiftCardActivityImportReversal } from './giftCardActivityImportReversal';
import { GiftCardActivityLoad } from './giftCardActivityLoad';
import { GiftCardActivityRedeem } from './giftCardActivityRedeem';
import { GiftCardActivityRefund } from './giftCardActivityRefund';
import { GiftCardActivityUnblock } from './giftCardActivityUnblock';
import { GiftCardActivityUnlinkedActivityRefund } from './giftCardActivityUnlinkedActivityRefund';
import { Money } from './money';
/** Represents an action performed on a gift card that affects its state or balance. */
export interface GiftCardActivity {
    /** The unique ID of the gift card activity. */
    id?: string;
    type: string;
    /** The ID of the location at which the activity occurred. */
    locationId: string;
    /** The timestamp when the gift card activity was created, in RFC 3339 format. */
    createdAt?: string;
    /** The gift card ID. The ID is not required if a GAN is present. */
    giftCardId?: string;
    /** The gift card GAN. The GAN is not required if `gift_card_id` is present. */
    giftCardGan?: string;
    /**
     * Represents an amount of money. `Money` fields can be signed or unsigned.
     * Fields that do not explicitly define whether they are signed or unsigned are
     * considered unsigned and can only hold positive amounts. For signed fields, the
     * sign of the value indicates the purpose of the money transfer. See
     * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
     * for more information.
     */
    giftCardBalanceMoney?: Money;
    /** Present only when `GiftCardActivityType` is LOAD. */
    loadActivityDetails?: GiftCardActivityLoad;
    /** Describes a gift card activity of the ACTIVATE type. */
    activateActivityDetails?: GiftCardActivityActivate;
    /** Present only when `GiftCardActivityType` is REDEEM. */
    redeemActivityDetails?: GiftCardActivityRedeem;
    /** Describes a gift card activity of the CLEAR_BALANCE type. */
    clearBalanceActivityDetails?: GiftCardActivityClearBalance;
    /** Describes a gift card activity of the DEACTIVATE type. */
    deactivateActivityDetails?: GiftCardActivityDeactivate;
    /** Describes a gift card activity of the ADJUST_INCREMENT type. */
    adjustIncrementActivityDetails?: GiftCardActivityAdjustIncrement;
    /** Describes a gift card activity of the ADJUST_DECREMENT type. */
    adjustDecrementActivityDetails?: GiftCardActivityAdjustDecrement;
    /** Present only when `GiftCardActivityType` is REFUND. */
    refundActivityDetails?: GiftCardActivityRefund;
    /** Present only when `GiftCardActivityType` is UNLINKED_ACTIVITY_REFUND. */
    unlinkedActivityRefundActivityDetails?: GiftCardActivityUnlinkedActivityRefund;
    /**
     * Describes a gift card activity of the IMPORT type and the `GiftCardGANSource` is OTHER
     * (a third-party gift card).
     */
    importActivityDetails?: GiftCardActivityImport;
    /** Describes a gift card activity of the BLOCK type. */
    blockActivityDetails?: GiftCardActivityBlock;
    /** Present only when `GiftCardActivityType` is UNBLOCK. */
    unblockActivityDetails?: GiftCardActivityUnblock;
    /** Present only when GiftCardActivityType is IMPORT_REVERSAL and GiftCardGANSource is OTHER */
    importReversalActivityDetails?: GiftCardActivityImportReversal;
}
export declare const giftCardActivitySchema: Schema<GiftCardActivity>;
