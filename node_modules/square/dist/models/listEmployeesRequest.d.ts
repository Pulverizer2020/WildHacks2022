import { Schema } from '../schema';
export interface ListEmployeesRequest {
    locationId?: string;
    /** The status of the Employee being retrieved. */
    status?: string;
    /** The number of employees to be returned on each page. */
    limit?: number;
    /** The token required to retrieve the specified page of results. */
    cursor?: string;
}
export declare const listEmployeesRequestSchema: Schema<ListEmployeesRequest>;
