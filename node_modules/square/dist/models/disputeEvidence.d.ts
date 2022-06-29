import { Schema } from '../schema';
import { DisputeEvidenceFile } from './disputeEvidenceFile';
export interface DisputeEvidence {
    /** The Square-generated ID of the evidence. */
    evidenceId?: string;
    /** The Square-generated ID of the evidence. */
    id?: string;
    /** The ID of the dispute the evidence is associated with. */
    disputeId?: string;
    /** A file to be uploaded as dispute evidence. */
    evidenceFile?: DisputeEvidenceFile;
    /** Raw text */
    evidenceText?: string;
    /** The time when the next action is due, in RFC 3339 format. */
    uploadedAt?: string;
    /** The type of the dispute evidence. */
    evidenceType?: string;
}
export declare const disputeEvidenceSchema: Schema<DisputeEvidence>;
