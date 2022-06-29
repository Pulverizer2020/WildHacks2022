import { ApiResponse, RequestOptions } from '../core';
import { CreateLocationRequest } from '../models/createLocationRequest';
import { CreateLocationResponse } from '../models/createLocationResponse';
import { ListLocationsResponse } from '../models/listLocationsResponse';
import { RetrieveLocationResponse } from '../models/retrieveLocationResponse';
import { UpdateLocationRequest } from '../models/updateLocationRequest';
import { UpdateLocationResponse } from '../models/updateLocationResponse';
import { BaseApi } from './baseApi';
export declare class LocationsApi extends BaseApi {
    /**
     * Provides information of all locations of a business.
     *
     * Many Square API endpoints require a `location_id` parameter.
     * The `id` field of the [`Location`]($m/Location) objects returned by this
     * endpoint correspond to that `location_id` parameter.
     *
     * @return Response from the API call
     */
    listLocations(requestOptions?: RequestOptions): Promise<ApiResponse<ListLocationsResponse>>;
    /**
     * Creates a location.
     *
     * @param body An object containing the fields to POST for the request.  See the
     *                                             corresponding object definition for field details.
     * @return Response from the API call
     */
    createLocation(body: CreateLocationRequest, requestOptions?: RequestOptions): Promise<ApiResponse<CreateLocationResponse>>;
    /**
     * Retrieves details of a location. You can specify "main"
     * as the location ID to retrieve details of the
     * main location.
     *
     * @param locationId  The ID of the location to retrieve. If you specify the string "main", then the
     *                              endpoint returns the main location.
     * @return Response from the API call
     */
    retrieveLocation(locationId: string, requestOptions?: RequestOptions): Promise<ApiResponse<RetrieveLocationResponse>>;
    /**
     * Updates a location.
     *
     * @param locationId  The ID of the location to update.
     * @param body        An object containing the fields to POST for the request.  See
     *                                                    the corresponding object definition for field details.
     * @return Response from the API call
     */
    updateLocation(locationId: string, body: UpdateLocationRequest, requestOptions?: RequestOptions): Promise<ApiResponse<UpdateLocationResponse>>;
}
