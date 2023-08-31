import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const LoginPage = () => {
  return (
    <LinearGradient
      colors={['#0E6CBE', '#C6C6C6']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          {/* <Image source={require('./logo.png')} style={styles.logo} /> */}
        </View>
        <View style={styles.welcomeText}>
          <Text>Welcome to OpenIM</Text>
        </View>
        <View style={styles.signInText}>
          <Text style={styles.signInTitle}>Sign in</Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputBox}>
            <Text>Enter your mobile number</Text>
            <View style={styles.phoneNumberContainer}>
              <TextInput style={styles.areaCodeInput} placeholder="+1" />
              <TextInput style={styles.mobileInput} placeholder="Mobile Number" />
            </View>
          </View>
          <View style={styles.inputBox}>
            <Text>Enter your password</Text>
            <TextInput style={styles.passwordInput} placeholder="Password" secureTextEntry={true} />
            <TouchableOpacity>
              <Text style={styles.forgetPasswordText}>Forgot Password</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.verificationLoginButton}>
              <Text style={styles.verificationLoginText}>Verification Login</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.signInButton}>
            <Text style={styles.signInButtonText}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signUpText}>
          <Text>Don't have an account yet? Sign Up</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  welcomeText: {
    marginBottom: 20,
  },
  signInText: {
    marginBottom: 20,
  },
  signInTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  inputContainer: {
    width: '100%',
  },
  inputBox: {
    marginBottom: 10,
  },
  phoneNumberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  areaCodeInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  mobileInput: {
    flex: 3,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
  },
  passwordInput: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  forgetPasswordText: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginBottom: 10,
  },
  verificationLoginButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  verificationLoginText: {
    color: 'white',
  },
  signInButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  signInButtonText: {
    color: 'white',
  },
  signUpText: {
    marginTop: 20,
    textDecorationLine: 'underline',
    color: 'blue',
  },
});

export default LoginPage;
