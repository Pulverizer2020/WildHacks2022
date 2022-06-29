import { Schema } from '../schema';
import { Dispute } from './dispute';
export interface DisputeEvidenceCreatedWebhookObject {
    /** Represents a dispute a cardholder initiated with their bank. */
    object?: Dispute;
}
export declare const disputeEvidenceCreatedWebhookObjectSchema: Schema<DisputeEvidenceCreatedWebhookObject>;
