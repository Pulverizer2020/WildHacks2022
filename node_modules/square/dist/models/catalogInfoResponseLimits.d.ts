import { Schema } from '../schema';
export interface CatalogInfoResponseLimits {
    /**
     * The maximum number of objects that may appear within a single batch in a
     * `/v2/catalog/batch-upsert` request.
     */
    batchUpsertMaxObjectsPerBatch?: number;
    /**
     * The maximum number of objects that may appear across all batches in a
     * `/v2/catalog/batch-upsert` request.
     */
    batchUpsertMaxTotalObjects?: number;
    /**
     * The maximum number of object IDs that may appear in a `/v2/catalog/batch-retrieve`
     * request.
     */
    batchRetrieveMaxObjectIds?: number;
    /**
     * The maximum number of results that may be returned in a page of a
     * `/v2/catalog/search` response.
     */
    searchMaxPageLimit?: number;
    /**
     * The maximum number of object IDs that may be included in a single
     * `/v2/catalog/batch-delete` request.
     */
    batchDeleteMaxObjectIds?: number;
    /**
     * The maximum number of item IDs that may be included in a single
     * `/v2/catalog/update-item-taxes` request.
     */
    updateItemTaxesMaxItemIds?: number;
    /**
     * The maximum number of tax IDs to be enabled that may be included in a single
     * `/v2/catalog/update-item-taxes` request.
     */
    updateItemTaxesMaxTaxesToEnable?: number;
    /**
     * The maximum number of tax IDs to be disabled that may be included in a single
     * `/v2/catalog/update-item-taxes` request.
     */
    updateItemTaxesMaxTaxesToDisable?: number;
    /**
     * The maximum number of item IDs that may be included in a single
     * `/v2/catalog/update-item-modifier-lists` request.
     */
    updateItemModifierListsMaxItemIds?: number;
    /**
     * The maximum number of modifier list IDs to be enabled that may be included in
     * a single `/v2/catalog/update-item-modifier-lists` request.
     */
    updateItemModifierListsMaxModifierListsToEnable?: number;
    /**
     * The maximum number of modifier list IDs to be disabled that may be included in
     * a single `/v2/catalog/update-item-modifier-lists` request.
     */
    updateItemModifierListsMaxModifierListsToDisable?: number;
}
export declare const catalogInfoResponseLimitsSchema: Schema<CatalogInfoResponseLimits>;
