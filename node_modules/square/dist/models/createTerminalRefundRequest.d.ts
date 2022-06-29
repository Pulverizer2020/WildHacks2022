import { Schema } from '../schema';
import { TerminalRefund } from './terminalRefund';
export interface CreateTerminalRefundRequest {
    /**
     * A unique string that identifies this `CreateRefund` request. Keys can be any valid string but
     * must be unique for every `CreateRefund` request.
     * See [Idempotency keys](https://developer.squareup.com/docs/basics/api101/idempotency) for more information.
     */
    idempotencyKey: string;
    refund?: TerminalRefund;
}
export declare const createTerminalRefundRequestSchema: Schema<CreateTerminalRefundRequest>;
