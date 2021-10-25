/**
 * This file contains authentication parameters. Contents of this file
 * is roughly the same across other MSAL.js libraries. These parameters
 * are used to initialize Angular and MSAL Angular configurations in
 * in app.module.ts file.
 */


 import { LogLevel, Configuration, BrowserCacheLocation } from '@azure/msal-browser';

 const isIE = window.navigator.userAgent.indexOf("MSIE ") > -1 || window.navigator.userAgent.indexOf("Trident/") > -1;
 
 /**
  * Enter here the user flows and custom policies for your B2C application,
  * To learn more about user flows, visit https://docs.microsoft.com/en-us/azure/active-directory-b2c/user-flow-overview
  * To learn more about custom policies, visit https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-overview
  */
 export const b2cPolicies = {
    names: {
        signUpSignIn: "B2C_1_Apex_POC"
    },
    authorities: {
        signUpSignIn: {
            authority: "https://apexbrasilb2c.b2clogin.com/apexbrasilb2c.onmicrosoft.com/B2C_1_Apex_POC",
        }
    },
    authorityDomain: "apexbrasilb2c.b2clogin.com"
 };
 
 /**
  * Configuration object to be passed to MSAL instance on creation. 
  * For a full list of MSAL.js configuration parameters, visit:
  * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md 
  */
 
  export const msalConfig: Configuration = {
     auth: {
         clientId: '0f21269f-3c84-4d21-8858-d0d36dd5180e', 
         authority: b2cPolicies.authorities.signUpSignIn.authority,
         knownAuthorities: [b2cPolicies.authorityDomain],
         redirectUri: '/',
     },
     cache: {
         cacheLocation: BrowserCacheLocation.LocalStorage,
         storeAuthStateInCookie: isIE,
     },
     system: {
         loggerOptions: {
             loggerCallback(logLevel: LogLevel, message: string) {
                 console.log(message);
             },
             logLevel: LogLevel.Verbose,
             piiLoggingEnabled: false
         }
     }
 }

/**
 * Add here the endpoints and scopes when obtaining an access token for protected web APIs. For more information, see:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/resources-and-scopes.md
 */
export const protectedResources = {
    courseListApi: {
    endpoint: "https://webapi-poc-apexbrasil.azurewebsites.net/api/course",
    scopes: ["https://apexbrasilb2c.onmicrosoft.com/api/access/demo.read"],
  },
}

/**
 * Scopes you add here will be prompted for user consent during sign-in.
 * By default, MSAL.js will add OIDC scopes (openid, profile, email) to any login request.
 * For more information about OIDC scopes, visit: 
 * https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
 */
export const loginRequest = {
  scopes: []
};