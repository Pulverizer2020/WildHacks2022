import { passThroughInterceptor } from './core';
import { AuthenticatorInterface } from './core';
/** None authentication provider */
export declare const noneAuthenticationProvider: () => typeof passThroughInterceptor;
export declare const accessTokenAuthenticationProvider: ({ accessToken, }: {
    accessToken: string;
}) => AuthenticatorInterface<boolean>;
