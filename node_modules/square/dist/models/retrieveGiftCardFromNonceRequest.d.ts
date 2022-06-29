import { Schema } from '../schema';
/** A request to retrieve gift cards by using nonces. */
export interface RetrieveGiftCardFromNonceRequest {
    /** The nonce of the gift card to retrieve. */
    nonce: string;
}
export declare const retrieveGiftCardFromNonceRequestSchema: Schema<RetrieveGiftCardFromNonceRequest>;
