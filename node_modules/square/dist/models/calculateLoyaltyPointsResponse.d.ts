import { Schema } from '../schema';
import { Error } from './error';
/**
 * A response that includes the points that the buyer can earn from
 * a specified purchase.
 */
export interface CalculateLoyaltyPointsResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
    /** The points that the buyer can earn from a specified purchase. */
    points?: number;
}
export declare const calculateLoyaltyPointsResponseSchema: Schema<CalculateLoyaltyPointsResponse>;
