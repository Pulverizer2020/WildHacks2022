import { Schema } from '../schema';
export interface BatchRetrieveCatalogObjectsRequest {
    /** The IDs of the CatalogObjects to be retrieved. */
    objectIds: string[];
    /**
     * If `true`, the response will include additional objects that are related to the
     * requested objects, as follows:
     * If the `objects` field of the response contains a CatalogItem, its associated
     * CatalogCategory objects, CatalogTax objects, CatalogImage objects and
     * CatalogModifierLists will be returned in the `related_objects` field of the
     * response. If the `objects` field of the response contains a CatalogItemVariation,
     * its parent CatalogItem will be returned in the `related_objects` field of
     * the response.
     */
    includeRelatedObjects?: boolean;
    /**
     * The specific version of the catalog objects to be included in the response.
     * This allows you to retrieve historical versions of objects. The specified version value is matched against
     * the [CatalogObject]($m/CatalogObject)s' `version` attribute.
     */
    catalogVersion?: bigint;
}
export declare const batchRetrieveCatalogObjectsRequestSchema: Schema<BatchRetrieveCatalogObjectsRequest>;
