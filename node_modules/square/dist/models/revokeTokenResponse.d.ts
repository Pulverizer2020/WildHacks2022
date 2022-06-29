import { Schema } from '../schema';
export interface RevokeTokenResponse {
    /** If the request is successful, this is true. */
    success?: boolean;
}
export declare const revokeTokenResponseSchema: Schema<RevokeTokenResponse>;
