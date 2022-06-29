import { Schema } from '../schema';
export interface ListTeamMemberBookingProfilesRequest {
    /** Indicates whether to include only bookable team members in the returned result (`true`) or not (`false`). */
    bookableOnly?: boolean;
    /** The maximum number of results to return. */
    limit?: number;
    /** The cursor for paginating through the results. */
    cursor?: string;
    /** Indicates whether to include only team members enabled at the given location in the returned result. */
    locationId?: string;
}
export declare const listTeamMemberBookingProfilesRequestSchema: Schema<ListTeamMemberBookingProfilesRequest>;
