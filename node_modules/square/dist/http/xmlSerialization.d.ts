export declare class XmlSerialization {
    xmlSerialize(_rootName: string, _value: unknown): string;
    xmlDeserialize(_rootName: string, _xmlString: string): Promise<any>;
}
