import { Schema } from '../schema';
import { DisputeEvidenceCreatedWebhookData } from './disputeEvidenceCreatedWebhookData';
/**
 * Published when evidence is added to a [Dispute]($m/Dispute)
 * from the Disputes Dashboard in the Seller Dashboard, the Square Point of Sale app,
 * or by calling either [CreateDisputeEvidenceFile]($e/Disputes/CreateDisputeEvidenceFile) or [CreateDisputeEvidenceText]($e/Disputes/CreateDisputeEvidenceText).
 */
export interface DisputeEvidenceCreatedWebhook {
    /** The ID of the target merchant associated with the event. */
    merchantId?: string;
    /** The ID of the target location associated with the event. */
    locationId?: string;
    /** The type of event this represents. */
    type?: string;
    /** A unique ID for the webhook event. */
    eventId?: string;
    /** Timestamp of when the webhook event was created, in RFC 3339 format. */
    createdAt?: string;
    data?: DisputeEvidenceCreatedWebhookData;
}
export declare const disputeEvidenceCreatedWebhookSchema: Schema<DisputeEvidenceCreatedWebhook>;
