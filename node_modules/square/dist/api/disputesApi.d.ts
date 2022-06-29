import { ApiResponse, FileWrapper, RequestOptions } from '../core';
import { AcceptDisputeResponse } from '../models/acceptDisputeResponse';
import { CreateDisputeEvidenceFileRequest } from '../models/createDisputeEvidenceFileRequest';
import { CreateDisputeEvidenceFileResponse } from '../models/createDisputeEvidenceFileResponse';
import { CreateDisputeEvidenceTextRequest } from '../models/createDisputeEvidenceTextRequest';
import { CreateDisputeEvidenceTextResponse } from '../models/createDisputeEvidenceTextResponse';
import { DeleteDisputeEvidenceResponse } from '../models/deleteDisputeEvidenceResponse';
import { ListDisputeEvidenceResponse } from '../models/listDisputeEvidenceResponse';
import { ListDisputesResponse } from '../models/listDisputesResponse';
import { RetrieveDisputeEvidenceResponse } from '../models/retrieveDisputeEvidenceResponse';
import { RetrieveDisputeResponse } from '../models/retrieveDisputeResponse';
import { SubmitEvidenceResponse } from '../models/submitEvidenceResponse';
import { BaseApi } from './baseApi';
export declare class DisputesApi extends BaseApi {
    /**
     * Returns a list of disputes associated with a particular account.
     *
     * @param cursor      A pagination cursor returned by a previous call to this endpoint. Provide this
     *                              cursor to retrieve the next set of results for the original query. For more
     *                              information, see [Pagination](https://developer.squareup.
     *                              com/docs/basics/api101/pagination).
     * @param states      The dispute states to filter the result. If not specified, the endpoint returns all
     *                              open disputes (the dispute status is not `INQUIRY_CLOSED`, `WON`, or `LOST`).
     * @param locationId  The ID of the location for which to return a list of disputes. If not specified, the
     *                              endpoint returns all open disputes (the dispute status is not `INQUIRY_CLOSED`, `WON`,
     *                              or `LOST`) associated with all locations.
     * @return Response from the API call
     */
    listDisputes(cursor?: string, states?: string, locationId?: string, requestOptions?: RequestOptions): Promise<ApiResponse<ListDisputesResponse>>;
    /**
     * Returns details about a specific dispute.
     *
     * @param disputeId  The ID of the dispute you want more details about.
     * @return Response from the API call
     */
    retrieveDispute(disputeId: string, requestOptions?: RequestOptions): Promise<ApiResponse<RetrieveDisputeResponse>>;
    /**
     * Accepts the loss on a dispute. Square returns the disputed amount to the cardholder and
     * updates the dispute state to ACCEPTED.
     *
     * Square debits the disputed amount from the seller’s Square account. If the Square account
     * does not have sufficient funds, Square debits the associated bank account.
     *
     * @param disputeId  The ID of the dispute you want to accept.
     * @return Response from the API call
     */
    acceptDispute(disputeId: string, requestOptions?: RequestOptions): Promise<ApiResponse<AcceptDisputeResponse>>;
    /**
     * Returns a list of evidence associated with a dispute.
     *
     * @param disputeId  The ID of the dispute.
     * @param cursor     A pagination cursor returned by a previous call to this endpoint. Provide this cursor
     *                             to retrieve the next set of results for the original query. For more information, see
     *                             [Pagination](https://developer.squareup.com/docs/basics/api101/pagination).
     * @return Response from the API call
     */
    listDisputeEvidence(disputeId: string, cursor?: string, requestOptions?: RequestOptions): Promise<ApiResponse<ListDisputeEvidenceResponse>>;
    /**
     * Uploads a file to use as evidence in a dispute challenge. The endpoint accepts HTTP
     * multipart/form-data file uploads in HEIC, HEIF, JPEG, PDF, PNG, and TIFF formats.
     *
     * @param disputeId  The ID of the dispute you want to upload evidence
     *                                                              for.
     * @param request    Defines the parameters for a
     *                                                              `CreateDisputeEvidenceFile` request.
     * @param imageFile
     * @return Response from the API call
     */
    createDisputeEvidenceFile(disputeId: string, request?: CreateDisputeEvidenceFileRequest, imageFile?: FileWrapper, requestOptions?: RequestOptions): Promise<ApiResponse<CreateDisputeEvidenceFileResponse>>;
    /**
     * Uploads text to use as evidence for a dispute challenge.
     *
     * @param disputeId  The ID of the dispute you want to upload evidence
     *                                                              for.
     * @param body       An object containing the fields to POST for the
     *                                                              request.  See the corresponding object definition for
     *                                                              field details.
     * @return Response from the API call
     */
    createDisputeEvidenceText(disputeId: string, body: CreateDisputeEvidenceTextRequest, requestOptions?: RequestOptions): Promise<ApiResponse<CreateDisputeEvidenceTextResponse>>;
    /**
     * Removes specified evidence from a dispute.
     *
     * Square does not send the bank any evidence that is removed. Also, you cannot remove evidence after
     * submitting it to the bank using [SubmitEvidence]($e/Disputes/SubmitEvidence).
     *
     * @param disputeId   The ID of the dispute you want to remove evidence from.
     * @param evidenceId  The ID of the evidence you want to remove.
     * @return Response from the API call
     */
    deleteDisputeEvidence(disputeId: string, evidenceId: string, requestOptions?: RequestOptions): Promise<ApiResponse<DeleteDisputeEvidenceResponse>>;
    /**
     * Returns the evidence metadata specified by the evidence ID in the request URL path
     *
     * You must maintain a copy of the evidence you upload if you want to reference it later. You cannot
     * download the evidence after you upload it.
     *
     * @param disputeId   The ID of the dispute that you want to retrieve evidence from.
     * @param evidenceId  The ID of the evidence to retrieve.
     * @return Response from the API call
     */
    retrieveDisputeEvidence(disputeId: string, evidenceId: string, requestOptions?: RequestOptions): Promise<ApiResponse<RetrieveDisputeEvidenceResponse>>;
    /**
     * Submits evidence to the cardholder's bank.
     *
     * Before submitting evidence, Square compiles all available evidence. This includes evidence uploaded
     * using the [CreateDisputeEvidenceFile]($e/Disputes/CreateDisputeEvidenceFile) and
     * [CreateDisputeEvidenceText]($e/Disputes/CreateDisputeEvidenceText) endpoints and
     * evidence automatically provided by Square, when available.
     *
     * @param disputeId  The ID of the dispute that you want to submit evidence for.
     * @return Response from the API call
     */
    submitEvidence(disputeId: string, requestOptions?: RequestOptions): Promise<ApiResponse<SubmitEvidenceResponse>>;
}
