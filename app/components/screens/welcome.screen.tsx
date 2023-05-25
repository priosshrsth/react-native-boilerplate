import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import { Image, ImageStyle, ScrollView, TextStyle, View, ViewStyle } from 'react-native';
import { Text } from 'components/common/Text';
import { isRTL } from 'app/i18n';
import { colors, spacing } from 'src/theme';
import { useSafeAreaInsetsStyle } from 'src/hooks/useSafeAreaInsetsStyle';
import { type AppStackScreenProps } from 'app/navigators';
import GoogleLoginButton from 'components/features/auth/google.login.btn';
import { StatusBar } from 'expo-status-bar';

const welcomeLogo = require('assets/images/logo.png');
const welcomeFace = require('assets/images/welcome-face.png');

interface WelcomeScreenProps extends AppStackScreenProps<'Welcome'> {}

export const WelcomeScreen: FC<WelcomeScreenProps> = observer(function WelcomeScreen() {
  const $bottomContainerInsets = useSafeAreaInsetsStyle(['bottom']);

  return (
    <ScrollView style={$container}>
      <StatusBar />
      <View className="flex bg-gray-300 pt-4 pb-20" style={$topContainer}>
        <Image style={$welcomeLogo} source={welcomeLogo} resizeMode="contain" />
        <Text testID="welcome-heading" style={$welcomeHeading} tx="welcomeScreen.readyForLaunch" preset="heading" />
        <Text tx="welcomeScreen.exciting" preset="subheading" />
        <Image style={$welcomeFace} source={welcomeFace} resizeMode="contain" />
      </View>

      <View>
        <GoogleLoginButton />
      </View>

      <View style={[]}>
        <Text className="text-blue-500 font-bold" tx="welcomeScreen.postscript" size="md" />
      </View>
    </ScrollView>
  );
});

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background,
};

const $topContainer: ViewStyle = {
  flexShrink: 1,
  flexGrow: 1,
  flexBasis: '57%',
  justifyContent: 'center',
  paddingHorizontal: spacing.large,
  position: 'relative',
};

const $bottomContainer: ViewStyle = {
  flexShrink: 1,
  flexGrow: 0,
  flexBasis: '43%',
  backgroundColor: colors.palette.neutral100,
  borderTopLeftRadius: 16,
  borderTopRightRadius: 16,
  paddingHorizontal: spacing.large,
  justifyContent: 'space-around',
};
const $welcomeLogo: ImageStyle = {
  height: 88,
  width: '100%',
  marginBottom: spacing.huge,
};

const $welcomeFace: ImageStyle = {
  height: 169,
  width: 269,
  position: 'absolute',
  bottom: -0,
  right: -70,
  transform: [{ scaleX: isRTL ? -1 : 1 }],
};

const $welcomeHeading: TextStyle = {
  marginBottom: spacing.medium,
};
