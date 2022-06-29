import { Schema } from '../schema';
/** V1UpdateOrderRequest */
export interface V1UpdateOrderRequest {
    action: string;
    /** The tracking number of the shipment associated with the order. Only valid if action is COMPLETE. */
    shippedTrackingNumber?: string;
    /** A merchant-specified note about the completion of the order. Only valid if action is COMPLETE. */
    completedNote?: string;
    /** A merchant-specified note about the refunding of the order. Only valid if action is REFUND. */
    refundedNote?: string;
    /** A merchant-specified note about the canceling of the order. Only valid if action is CANCEL. */
    canceledNote?: string;
}
export declare const v1UpdateOrderRequestSchema: Schema<V1UpdateOrderRequest>;
