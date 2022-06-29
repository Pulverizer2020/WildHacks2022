import { RequestBuilderFactory } from './core';
export interface ClientInterface {
    getRequestBuilderFactory(): SdkRequestBuilderFactory;
}
export declare type SdkRequestBuilderFactory = RequestBuilderFactory<Server, AuthParams>;
export declare type SdkRequestBuilder = ReturnType<SdkRequestBuilderFactory>;
export declare type Server = 'default';
export declare type AuthParams = boolean;
