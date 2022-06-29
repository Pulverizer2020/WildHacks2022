import { Schema } from '../schema';
import { LoyaltyEventAdjustPoints } from './loyaltyEventAdjustPoints';
/** A request to adjust (add or subtract) points manually. */
export interface AdjustLoyaltyPointsRequest {
    /**
     * A unique string that identifies this `AdjustLoyaltyPoints` request.
     * Keys can be any valid string, but must be unique for every request.
     */
    idempotencyKey: string;
    /** Provides metadata when the event `type` is `ADJUST_POINTS`. */
    adjustPoints: LoyaltyEventAdjustPoints;
}
export declare const adjustLoyaltyPointsRequestSchema: Schema<AdjustLoyaltyPointsRequest>;
