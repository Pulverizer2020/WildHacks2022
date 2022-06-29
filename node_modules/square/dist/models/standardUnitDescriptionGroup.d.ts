import { Schema } from '../schema';
import { StandardUnitDescription } from './standardUnitDescription';
/** Group of standard measurement units. */
export interface StandardUnitDescriptionGroup {
    /** List of standard (non-custom) measurement units in this description group. */
    standardUnitDescriptions?: StandardUnitDescription[];
    /** IETF language tag. */
    languageCode?: string;
}
export declare const standardUnitDescriptionGroupSchema: Schema<StandardUnitDescriptionGroup>;
