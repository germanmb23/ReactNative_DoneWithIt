import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import AppTextInput from './AppTextInput';
import Screen from './Screen';
import AppButton from './AppButton';

function LoginScreen(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/logo-red.png')}
      />
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="email"
        keyboartType="email-adress"
        onChangeText={(text) => setEmail(text)}
        placeholder="Email"
        textContentType="emailAdress"
      />
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="lock"
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        //textContentType="password"
      />
      <AppButton
        title="login"
        onPress={() => console.log(email, password)}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10 },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
