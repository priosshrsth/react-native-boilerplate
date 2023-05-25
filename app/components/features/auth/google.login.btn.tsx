import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Text } from 'components/common/Text';
import { ScrollView } from 'react-native-gesture-handler';
import { GOOGLE_OAUTH_WEB_CLIENT_ID } from '@env';

GoogleSignin.configure({
  webClientId: GOOGLE_OAUTH_WEB_CLIENT_ID,
});

export default function GoogleLoginButton() {
  const [idToken, setIdToken] = useState('');
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [error, setError] = useState('');

  const handleIfAlradySignedIn = async () => {
    setIsAuthenticating(true);
    if (await GoogleSignin.isSignedIn()) {
      const userInfo = await GoogleSignin.signInSilently().catch(() => null);
      setIdToken(userInfo?.idToken);
    }
    setIsAuthenticating(false);
  };

  useEffect(() => {
    handleIfAlradySignedIn();
  }, []);

  const signIn = async () => {
    setIsAuthenticating(true);
    const hasPlayServices = await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

    if (!hasPlayServices) {
      setError('Does not have Play Services');
    }

    const response = !hasPlayServices
      ? null
      : await GoogleSignin.signIn().catch((error) => {
          setError(error.message);
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
          } else if (error.code === statusCodes.IN_PROGRESS) {
            // operation (e.g. sign in) is in progress already
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            // play services not available or outdated
          } else {
            // some other error happened
          }
          return null;
        });

    if (!response) {
      setError('Unable to login.');
    }

    setIdToken(response?.userInfo?.idToken || '');

    setIsAuthenticating(false);
  };
  return (
    <>
      <View className="flex-1 justify-center items-center">
        {idToken ? (
          <>
            <Text className="bolder w-full heading bg-black text-white text-lg font-bold py-5 px-2">
              Please exchange the idToken with accessToken on your server. Or implement auth flow based on your
              requirements.
            </Text>
            <ScrollView className="max-h-60 bg-white px-2">
              <Text className="text-green-700 my-5">{idToken || 'Please login to get your idToken'}</Text>
            </ScrollView>
          </>
        ) : (
          <GoogleSigninButton
            style={{ width: 192, height: 48 }}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={signIn}
            disabled={isAuthenticating || !!idToken}
          />
        )}

        <Text className="text-red-400">{error}</Text>
      </View>
    </>
  );
}
