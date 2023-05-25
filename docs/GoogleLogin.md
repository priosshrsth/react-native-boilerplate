Generate SHA1 key for to Get client id
```bash
cd android && ./gradlew signingReport"
```

Get SSH Key for android
```bash
cd android && keytool -keystore app/debug.keystore -list
```
> Note:- It is important to have an app with `google-console` of android type with this `SHA1` key. Otherwise, the login doesn't work.
> And We need to create a web type credential. Where redirect urls does not matter. This client id is tbe provided to our [`@react-native-google-signin/google-signin`](https://github.com/react-native-google-signin/google-signin) app


## Common Errors

### Developer error (error code 10)
- Most likely SHA1 has not been properly setup in credentials.

### Empty idToken
- Need to provide `webClientId` of web type.