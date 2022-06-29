import { Schema } from '../schema';
import { SearchSubscriptionsFilter } from './searchSubscriptionsFilter';
/** Represents a query (including filtering criteria) used to search for subscriptions. */
export interface SearchSubscriptionsQuery {
    /** Represents a set of SearchSubscriptionsQuery filters used to limit the set of Subscriptions returned by SearchSubscriptions. */
    filter?: SearchSubscriptionsFilter;
}
export declare const searchSubscriptionsQuerySchema: Schema<SearchSubscriptionsQuery>;
