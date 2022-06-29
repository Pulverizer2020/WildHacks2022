import { Schema } from '../schema';
/** V1PaymentItemDetail */
export interface V1PaymentItemDetail {
    /** The name of the item's merchant-defined category, if any. */
    categoryName?: string;
    /** The item's merchant-defined SKU, if any. */
    sku?: string;
    /** The unique ID of the item purchased, if any. */
    itemId?: string;
    /** The unique ID of the item variation purchased, if any. */
    itemVariationId?: string;
}
export declare const v1PaymentItemDetailSchema: Schema<V1PaymentItemDetail>;
