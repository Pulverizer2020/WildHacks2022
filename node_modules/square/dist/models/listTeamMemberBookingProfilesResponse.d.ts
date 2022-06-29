import { Schema } from '../schema';
import { Error } from './error';
import { TeamMemberBookingProfile } from './teamMemberBookingProfile';
export interface ListTeamMemberBookingProfilesResponse {
    /** The list of team member booking profiles. */
    teamMemberBookingProfiles?: TeamMemberBookingProfile[];
    /** The cursor for paginating through the results. */
    cursor?: string;
    /** Any errors that occurred during the request. */
    errors?: Error[];
}
export declare const listTeamMemberBookingProfilesResponseSchema: Schema<ListTeamMemberBookingProfilesResponse>;
