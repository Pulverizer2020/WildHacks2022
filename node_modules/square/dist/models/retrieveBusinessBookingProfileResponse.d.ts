import { Schema } from '../schema';
import { BusinessBookingProfile } from './businessBookingProfile';
import { Error } from './error';
export interface RetrieveBusinessBookingProfileResponse {
    businessBookingProfile?: BusinessBookingProfile;
    /** Any errors that occurred during the request. */
    errors?: Error[];
}
export declare const retrieveBusinessBookingProfileResponseSchema: Schema<RetrieveBusinessBookingProfileResponse>;
