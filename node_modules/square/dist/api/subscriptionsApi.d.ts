import { ApiResponse, RequestOptions } from '../core';
import { CancelSubscriptionResponse } from '../models/cancelSubscriptionResponse';
import { CreateSubscriptionRequest } from '../models/createSubscriptionRequest';
import { CreateSubscriptionResponse } from '../models/createSubscriptionResponse';
import { ListSubscriptionEventsResponse } from '../models/listSubscriptionEventsResponse';
import { ResumeSubscriptionResponse } from '../models/resumeSubscriptionResponse';
import { RetrieveSubscriptionResponse } from '../models/retrieveSubscriptionResponse';
import { SearchSubscriptionsRequest } from '../models/searchSubscriptionsRequest';
import { SearchSubscriptionsResponse } from '../models/searchSubscriptionsResponse';
import { UpdateSubscriptionRequest } from '../models/updateSubscriptionRequest';
import { UpdateSubscriptionResponse } from '../models/updateSubscriptionResponse';
import { BaseApi } from './baseApi';
export declare class SubscriptionsApi extends BaseApi {
    /**
     * Creates a subscription for a customer to a subscription plan.
     *
     * If you provide a card on file in the request, Square charges the card for
     * the subscription. Otherwise, Square bills an invoice to the customer's email
     * address. The subscription starts immediately, unless the request includes
     * the optional `start_date`. Each individual subscription is associated with a particular location.
     *
     * @param body An object containing the fields to POST for the request.  See the
     *                                                 corresponding object definition for field details.
     * @return Response from the API call
     */
    createSubscription(body: CreateSubscriptionRequest, requestOptions?: RequestOptions): Promise<ApiResponse<CreateSubscriptionResponse>>;
    /**
     * Searches for subscriptions.
     * Results are ordered chronologically by subscription creation date. If
     * the request specifies more than one location ID,
     * the endpoint orders the result
     * by location ID, and then by creation date within each location. If no locations are given
     * in the query, all locations are searched.
     *
     * You can also optionally specify `customer_ids` to search by customer.
     * If left unset, all customers
     * associated with the specified locations are returned.
     * If the request specifies customer IDs, the endpoint orders results
     * first by location, within location by customer ID, and within
     * customer by subscription creation date.
     *
     * For more information, see
     * [Retrieve subscriptions](https://developer.squareup.com/docs/subscriptions-api/overview#retrieve-
     * subscriptions).
     *
     * @param body An object containing the fields to POST for the request.  See
     *                                                  the corresponding object definition for field details.
     * @return Response from the API call
     */
    searchSubscriptions(body: SearchSubscriptionsRequest, requestOptions?: RequestOptions): Promise<ApiResponse<SearchSubscriptionsResponse>>;
    /**
     * Retrieves a subscription.
     *
     * @param subscriptionId  The ID of the subscription to retrieve.
     * @return Response from the API call
     */
    retrieveSubscription(subscriptionId: string, requestOptions?: RequestOptions): Promise<ApiResponse<RetrieveSubscriptionResponse>>;
    /**
     * Updates a subscription. You can set, modify, and clear the
     * `subscription` field values.
     *
     * @param subscriptionId  The ID for the subscription to update.
     * @param body            An object containing the fields to POST for the
     *                                                            request.  See the corresponding object definition for
     *                                                            field details.
     * @return Response from the API call
     */
    updateSubscription(subscriptionId: string, body: UpdateSubscriptionRequest, requestOptions?: RequestOptions): Promise<ApiResponse<UpdateSubscriptionResponse>>;
    /**
     * Sets the `canceled_date` field to the end of the active billing period.
     * After this date, the status changes from ACTIVE to CANCELED.
     *
     * @param subscriptionId  The ID of the subscription to cancel.
     * @return Response from the API call
     */
    cancelSubscription(subscriptionId: string, requestOptions?: RequestOptions): Promise<ApiResponse<CancelSubscriptionResponse>>;
    /**
     * Lists all events for a specific subscription.
     * In the current implementation, only `START_SUBSCRIPTION` and `STOP_SUBSCRIPTION` (when the
     * subscription was canceled) events are returned.
     *
     * @param subscriptionId  The ID of the subscription to retrieve the events for.
     * @param cursor          A pagination cursor returned by a previous call to this endpoint. Provide this
     *                                  to retrieve the next set of results for the original query.  For more information,
     *                                  see [Pagination](https://developer.squareup.com/docs/working-with-
     *                                  apis/pagination).
     * @param limit           The upper limit on the number of subscription events to return in the response.
     *                                  Default: `200`
     * @return Response from the API call
     */
    listSubscriptionEvents(subscriptionId: string, cursor?: string, limit?: number, requestOptions?: RequestOptions): Promise<ApiResponse<ListSubscriptionEventsResponse>>;
    /**
     * Resumes a deactivated subscription.
     *
     * @param subscriptionId  The ID of the subscription to resume.
     * @return Response from the API call
     */
    resumeSubscription(subscriptionId: string, requestOptions?: RequestOptions): Promise<ApiResponse<ResumeSubscriptionResponse>>;
}
