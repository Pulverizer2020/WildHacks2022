import { Schema } from '../schema';
import { Error } from './error';
import { TerminalRefund } from './terminalRefund';
export interface GetTerminalRefundResponse {
    /** Information about errors encountered during the request. */
    errors?: Error[];
    refund?: TerminalRefund;
}
export declare const getTerminalRefundResponseSchema: Schema<GetTerminalRefundResponse>;
