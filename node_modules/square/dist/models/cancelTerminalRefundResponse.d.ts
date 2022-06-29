import { Schema } from '../schema';
import { Error } from './error';
import { TerminalRefund } from './terminalRefund';
export interface CancelTerminalRefundResponse {
    /** Information about errors encountered during the request. */
    errors?: Error[];
    refund?: TerminalRefund;
}
export declare const cancelTerminalRefundResponseSchema: Schema<CancelTerminalRefundResponse>;
