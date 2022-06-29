import { Schema } from '../schema';
export interface RenewTokenRequest {
    /** The token you want to renew. */
    accessToken?: string;
}
export declare const renewTokenRequestSchema: Schema<RenewTokenRequest>;
