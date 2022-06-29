import { Schema } from '../schema';
import { Error } from './error';
import { TerminalRefund } from './terminalRefund';
export interface CreateTerminalRefundResponse {
    /** Information about errors encountered during the request. */
    errors?: Error[];
    refund?: TerminalRefund;
}
export declare const createTerminalRefundResponseSchema: Schema<CreateTerminalRefundResponse>;
