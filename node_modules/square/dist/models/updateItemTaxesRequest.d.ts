import { Schema } from '../schema';
export interface UpdateItemTaxesRequest {
    /** IDs for the CatalogItems associated with the CatalogTax objects being updated. */
    itemIds: string[];
    /** IDs of the CatalogTax objects to enable. */
    taxesToEnable?: string[];
    /** IDs of the CatalogTax objects to disable. */
    taxesToDisable?: string[];
}
export declare const updateItemTaxesRequestSchema: Schema<UpdateItemTaxesRequest>;
