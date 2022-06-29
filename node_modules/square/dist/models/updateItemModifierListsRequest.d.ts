import { Schema } from '../schema';
export interface UpdateItemModifierListsRequest {
    /** The IDs of the catalog items associated with the CatalogModifierList objects being updated. */
    itemIds: string[];
    /** The IDs of the CatalogModifierList objects to enable for the CatalogItem. */
    modifierListsToEnable?: string[];
    /** The IDs of the CatalogModifierList objects to disable for the CatalogItem. */
    modifierListsToDisable?: string[];
}
export declare const updateItemModifierListsRequestSchema: Schema<UpdateItemModifierListsRequest>;
