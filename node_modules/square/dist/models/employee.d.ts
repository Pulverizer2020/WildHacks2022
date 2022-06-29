import { Schema } from '../schema';
/** An employee object that is used by the external API. */
export interface Employee {
    /** UUID for this object. */
    id?: string;
    /** The employee's first name. */
    firstName?: string;
    /** The employee's last name. */
    lastName?: string;
    /** The employee's email address */
    email?: string;
    /** The employee's phone number in E.164 format, i.e. "+12125554250" */
    phoneNumber?: string;
    /** A list of location IDs where this employee has access to. */
    locationIds?: string[];
    /** The status of the Employee being retrieved. */
    status?: string;
    /**
     * Whether this employee is the owner of the merchant. Each merchant
     * has one owner employee, and that employee has full authority over
     * the account.
     */
    isOwner?: boolean;
    /** A read-only timestamp in RFC 3339 format. */
    createdAt?: string;
    /** A read-only timestamp in RFC 3339 format. */
    updatedAt?: string;
}
export declare const employeeSchema: Schema<Employee>;
