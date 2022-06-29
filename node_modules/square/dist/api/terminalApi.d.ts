import { ApiResponse, RequestOptions } from '../core';
import { CancelTerminalCheckoutResponse } from '../models/cancelTerminalCheckoutResponse';
import { CancelTerminalRefundResponse } from '../models/cancelTerminalRefundResponse';
import { CreateTerminalCheckoutRequest } from '../models/createTerminalCheckoutRequest';
import { CreateTerminalCheckoutResponse } from '../models/createTerminalCheckoutResponse';
import { CreateTerminalRefundRequest } from '../models/createTerminalRefundRequest';
import { CreateTerminalRefundResponse } from '../models/createTerminalRefundResponse';
import { GetTerminalCheckoutResponse } from '../models/getTerminalCheckoutResponse';
import { GetTerminalRefundResponse } from '../models/getTerminalRefundResponse';
import { SearchTerminalCheckoutsRequest } from '../models/searchTerminalCheckoutsRequest';
import { SearchTerminalCheckoutsResponse } from '../models/searchTerminalCheckoutsResponse';
import { SearchTerminalRefundsRequest } from '../models/searchTerminalRefundsRequest';
import { SearchTerminalRefundsResponse } from '../models/searchTerminalRefundsResponse';
import { BaseApi } from './baseApi';
export declare class TerminalApi extends BaseApi {
    /**
     * Creates a Terminal checkout request and sends it to the specified device to take a payment
     * for the requested amount.
     *
     * @param body An object containing the fields to POST for the request.  See
     *                                                     the corresponding object definition for field details.
     * @return Response from the API call
     */
    createTerminalCheckout(body: CreateTerminalCheckoutRequest, requestOptions?: RequestOptions): Promise<ApiResponse<CreateTerminalCheckoutResponse>>;
    /**
     * Retrieves a filtered list of Terminal checkout requests created by the account making the request.
     *
     * @param body An object containing the fields to POST for the request.
     *                                                      See the corresponding object definition for field details.
     * @return Response from the API call
     */
    searchTerminalCheckouts(body: SearchTerminalCheckoutsRequest, requestOptions?: RequestOptions): Promise<ApiResponse<SearchTerminalCheckoutsResponse>>;
    /**
     * Retrieves a Terminal checkout request by `checkout_id`.
     *
     * @param checkoutId  The unique ID for the desired `TerminalCheckout`.
     * @return Response from the API call
     */
    getTerminalCheckout(checkoutId: string, requestOptions?: RequestOptions): Promise<ApiResponse<GetTerminalCheckoutResponse>>;
    /**
     * Cancels a Terminal checkout request if the status of the request permits it.
     *
     * @param checkoutId  The unique ID for the desired `TerminalCheckout`.
     * @return Response from the API call
     */
    cancelTerminalCheckout(checkoutId: string, requestOptions?: RequestOptions): Promise<ApiResponse<CancelTerminalCheckoutResponse>>;
    /**
     * Creates a request to refund an Interac payment completed on a Square Terminal.
     *
     * @param body An object containing the fields to POST for the request.  See
     *                                                   the corresponding object definition for field details.
     * @return Response from the API call
     */
    createTerminalRefund(body: CreateTerminalRefundRequest, requestOptions?: RequestOptions): Promise<ApiResponse<CreateTerminalRefundResponse>>;
    /**
     * Retrieves a filtered list of Interac Terminal refund requests created by the seller making the
     * request.
     *
     * @param body An object containing the fields to POST for the request.  See
     *                                                    the corresponding object definition for field details.
     * @return Response from the API call
     */
    searchTerminalRefunds(body: SearchTerminalRefundsRequest, requestOptions?: RequestOptions): Promise<ApiResponse<SearchTerminalRefundsResponse>>;
    /**
     * Retrieves an Interac Terminal refund object by ID.
     *
     * @param terminalRefundId   The unique ID for the desired `TerminalRefund`.
     * @return Response from the API call
     */
    getTerminalRefund(terminalRefundId: string, requestOptions?: RequestOptions): Promise<ApiResponse<GetTerminalRefundResponse>>;
    /**
     * Cancels an Interac Terminal refund request by refund request ID if the status of the request permits
     * it.
     *
     * @param terminalRefundId   The unique ID for the desired `TerminalRefund`.
     * @return Response from the API call
     */
    cancelTerminalRefund(terminalRefundId: string, requestOptions?: RequestOptions): Promise<ApiResponse<CancelTerminalRefundResponse>>;
}
