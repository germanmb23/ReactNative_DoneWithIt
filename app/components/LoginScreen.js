import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import AppButton from './AppButton';
import AppText from './AppText';
import AppTextInput from './AppTextInput';
import ErrorMessage from './ErrorMessage';
import Screen from './Screen';

const valdationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

function LoginScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/logo-red.png')}
      />

      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => console.log(values)}
        validationSchema={valdationSchema}
      >
        {({ handleChange, handleSubmit, errors }) => (
          <>
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboartType="email-adress"
              onChangeText={handleChange('email')}
              placeholder="Email"
              //textContentType="emailAdress"
            />
            <ErrorMessage error={errors.email} />
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              placeholder="Password"
              onChangeText={handleChange('password')}
              secureTextEntry
              //textContentType="password"
            />
            <ErrorMessage error={errors.password} />
            <AppButton title="login" onPress={handleSubmit} />
          </>
        )}
      </Formik>
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
