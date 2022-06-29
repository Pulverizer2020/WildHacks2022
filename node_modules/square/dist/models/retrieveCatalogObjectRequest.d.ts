import { Schema } from '../schema';
export interface RetrieveCatalogObjectRequest {
    /**
     * If `true`, the response will include additional objects that are related to the
     * requested object, as follows:
     * If the `object` field of the response contains a `CatalogItem`, its associated
     * `CatalogCategory`, `CatalogTax`, `CatalogImage` and `CatalogModifierList` objects will
     * be returned in the `related_objects` field of the response. If the `object` field of
     * the response contains a `CatalogItemVariation`, its parent `CatalogItem` will be returned
     * in the `related_objects` field of the response.
     * Default value: `false`
     */
    includeRelatedObjects?: boolean;
    /**
     * Requests objects as of a specific version of the catalog. This allows you to retrieve historical
     * versions of objects. The value to retrieve a specific version of an object can be found
     * in the version field of [CatalogObject]($m/CatalogObject)s.
     */
    catalogVersion?: bigint;
}
export declare const retrieveCatalogObjectRequestSchema: Schema<RetrieveCatalogObjectRequest>;
