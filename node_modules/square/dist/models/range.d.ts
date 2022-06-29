import { Schema } from '../schema';
/** The range of a number value between the specified lower and upper bounds. */
export interface Range {
    /** The lower bound of the number range. */
    min?: string;
    /** The upper bound of the number range. */
    max?: string;
}
export declare const rangeSchema: Schema<Range>;
