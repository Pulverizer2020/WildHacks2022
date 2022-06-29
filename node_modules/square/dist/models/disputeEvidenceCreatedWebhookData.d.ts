import { Schema } from '../schema';
import { DisputeEvidenceCreatedWebhookObject } from './disputeEvidenceCreatedWebhookObject';
export interface DisputeEvidenceCreatedWebhookData {
    /** Name of the affected dispute's type. */
    type?: string;
    /** ID of the affected dispute. */
    id?: string;
    object?: DisputeEvidenceCreatedWebhookObject;
}
export declare const disputeEvidenceCreatedWebhookDataSchema: Schema<DisputeEvidenceCreatedWebhookData>;
