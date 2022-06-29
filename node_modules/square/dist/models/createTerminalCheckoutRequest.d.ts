import { Schema } from '../schema';
import { TerminalCheckout } from './terminalCheckout';
export interface CreateTerminalCheckoutRequest {
    /**
     * A unique string that identifies this `CreateCheckout` request. Keys can be any valid string but
     * must be unique for every `CreateCheckout` request.
     * See [Idempotency keys](https://developer.squareup.com/docs/basics/api101/idempotency) for more information.
     */
    idempotencyKey: string;
    checkout: TerminalCheckout;
}
export declare const createTerminalCheckoutRequestSchema: Schema<CreateTerminalCheckoutRequest>;
