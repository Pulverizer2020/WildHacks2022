import { ApiResponse, RequestOptions } from '../core';
import { ListSitesResponse } from '../models/listSitesResponse';
import { BaseApi } from './baseApi';
export declare class SitesApi extends BaseApi {
    /**
     * Lists the Square Online sites that belong to a seller.
     *
     *
     * __Note:__ Square Online APIs are publicly available as part of an early access program. For more
     * information, see [Early access program for Square Online APIs](https://developer.squareup.
     * com/docs/online-api#early-access-program-for-square-online-apis).
     *
     * @return Response from the API call
     */
    listSites(requestOptions?: RequestOptions): Promise<ApiResponse<ListSitesResponse>>;
}
