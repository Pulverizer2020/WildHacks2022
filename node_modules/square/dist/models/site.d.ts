import { Schema } from '../schema';
/** Represents a Square Online site, which is an online store for a Square seller. */
export interface Site {
    /** The Square-assigned ID of the site. */
    id?: string;
    /** The title of the site. */
    siteTitle?: string;
    /** The domain of the site (without the protocol). For example, `mysite1.square.site`. */
    domain?: string;
    /** Indicates whether the site is published. */
    isPublished?: boolean;
    /** The timestamp of when the site was created, in RFC 3339 format. */
    createdAt?: string;
    /** The timestamp of when the site was last updated, in RFC 3339 format. */
    updatedAt?: string;
}
export declare const siteSchema: Schema<Site>;
