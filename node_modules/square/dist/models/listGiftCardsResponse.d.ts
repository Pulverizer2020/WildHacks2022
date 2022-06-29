import { Schema } from '../schema';
import { Error } from './error';
import { GiftCard } from './giftCard';
/**
 * A response that contains one or more `GiftCard`. The response might contain a set of `Error`
 * objects if the request resulted in errors.
 */
export interface ListGiftCardsResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
    /** Gift cards retrieved. */
    giftCards?: GiftCard[];
    /**
     * When a response is truncated, it includes a cursor that you can use in a
     * subsequent request to fetch the next set of gift cards. If empty, this is
     * the final response.
     */
    cursor?: string;
}
export declare const listGiftCardsResponseSchema: Schema<ListGiftCardsResponse>;
