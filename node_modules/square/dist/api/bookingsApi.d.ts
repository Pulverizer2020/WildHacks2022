import { ApiResponse, RequestOptions } from '../core';
import { CancelBookingRequest } from '../models/cancelBookingRequest';
import { CancelBookingResponse } from '../models/cancelBookingResponse';
import { CreateBookingRequest } from '../models/createBookingRequest';
import { CreateBookingResponse } from '../models/createBookingResponse';
import { ListTeamMemberBookingProfilesResponse } from '../models/listTeamMemberBookingProfilesResponse';
import { RetrieveBookingResponse } from '../models/retrieveBookingResponse';
import { RetrieveBusinessBookingProfileResponse } from '../models/retrieveBusinessBookingProfileResponse';
import { RetrieveTeamMemberBookingProfileResponse } from '../models/retrieveTeamMemberBookingProfileResponse';
import { SearchAvailabilityRequest } from '../models/searchAvailabilityRequest';
import { SearchAvailabilityResponse } from '../models/searchAvailabilityResponse';
import { UpdateBookingRequest } from '../models/updateBookingRequest';
import { UpdateBookingResponse } from '../models/updateBookingResponse';
import { BaseApi } from './baseApi';
export declare class BookingsApi extends BaseApi {
    /**
     * Creates a booking.
     *
     * @param body An object containing the fields to POST for the request.  See the
     *                                            corresponding object definition for field details.
     * @return Response from the API call
     */
    createBooking(body: CreateBookingRequest, requestOptions?: RequestOptions): Promise<ApiResponse<CreateBookingResponse>>;
    /**
     * Searches for availabilities for booking.
     *
     * @param body An object containing the fields to POST for the request.  See the
     *                                                 corresponding object definition for field details.
     * @return Response from the API call
     */
    searchAvailability(body: SearchAvailabilityRequest, requestOptions?: RequestOptions): Promise<ApiResponse<SearchAvailabilityResponse>>;
    /**
     * Retrieves a seller's booking profile.
     *
     * @return Response from the API call
     */
    retrieveBusinessBookingProfile(requestOptions?: RequestOptions): Promise<ApiResponse<RetrieveBusinessBookingProfileResponse>>;
    /**
     * Lists booking profiles for team members.
     *
     * @param bookableOnly  Indicates whether to include only bookable team members in the returned result
     *                                 (`true`) or not (`false`).
     * @param limit         The maximum number of results to return.
     * @param cursor        The cursor for paginating through the results.
     * @param locationId    Indicates whether to include only team members enabled at the given location in
     *                                 the returned result.
     * @return Response from the API call
     */
    listTeamMemberBookingProfiles(bookableOnly?: boolean, limit?: number, cursor?: string, locationId?: string, requestOptions?: RequestOptions): Promise<ApiResponse<ListTeamMemberBookingProfilesResponse>>;
    /**
     * Retrieves a team member's booking profile.
     *
     * @param teamMemberId   The ID of the team member to retrieve.
     * @return Response from the API call
     */
    retrieveTeamMemberBookingProfile(teamMemberId: string, requestOptions?: RequestOptions): Promise<ApiResponse<RetrieveTeamMemberBookingProfileResponse>>;
    /**
     * Retrieves a booking.
     *
     * @param bookingId  The ID of the [Booking]($m/Booking) object representing the to-be-retrieved booking.
     * @return Response from the API call
     */
    retrieveBooking(bookingId: string, requestOptions?: RequestOptions): Promise<ApiResponse<RetrieveBookingResponse>>;
    /**
     * Updates a booking.
     *
     * @param bookingId  The ID of the [Booking]($m/Booking) object representing the to-
     *                                                  be-updated booking.
     * @param body       An object containing the fields to POST for the request.  See
     *                                                  the corresponding object definition for field details.
     * @return Response from the API call
     */
    updateBooking(bookingId: string, body: UpdateBookingRequest, requestOptions?: RequestOptions): Promise<ApiResponse<UpdateBookingResponse>>;
    /**
     * Cancels an existing booking.
     *
     * @param bookingId  The ID of the [Booking]($m/Booking) object representing the to-
     *                                                  be-cancelled booking.
     * @param body       An object containing the fields to POST for the request.  See
     *                                                  the corresponding object definition for field details.
     * @return Response from the API call
     */
    cancelBooking(bookingId: string, body: CancelBookingRequest, requestOptions?: RequestOptions): Promise<ApiResponse<CancelBookingResponse>>;
}
