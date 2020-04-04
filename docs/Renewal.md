# Refresh Renewal of Tokens

From the js sdk

 
By default, the `tokenManager` will attempt to renew expired tokens. When an expired token is requested by the `tokenManager.get()` method, a renewal request is executed to update the token. If you wish to manually control token renewal, set `autoRenew` to false to disable this feature. You can listen to  [`expired`](#tokenmanageronevent-callback-context) events to know when the token has expired.

```javascript
tokenManager: {
  autoRenew: false
}
````

## Automatic renewal

From the above, if you need a token for access to a protected resource, always call tokenManager.get() to retrieve it. Don't
store it anywhere

## References for Renewal

- <https://support.okta.com/help/s/article/How-does-the-Auto-Renewal-of-tokens-work-in-Auth-JS>
- <https://github.com/okta/okta-auth-js>
- <https://github.com/okta/okta-signin-widget/issues/1045>
