import { Schema } from '../schema';
import { Error } from './error';
import { V1Money } from './v1Money';
/** V1PaymentTax */
export interface V1PaymentTax {
    /** Any errors that occurred during the request. */
    errors?: Error[];
    /** The merchant-defined name of the tax. */
    name?: string;
    appliedMoney?: V1Money;
    /** The rate of the tax, as a string representation of a decimal number. A value of 0.07 corresponds to a rate of 7%. */
    rate?: string;
    inclusionType?: string;
    /** The ID of the tax, if available. Taxes applied in older versions of Square Register might not have an ID. */
    feeId?: string;
}
export declare const v1PaymentTaxSchema: Schema<V1PaymentTax>;
