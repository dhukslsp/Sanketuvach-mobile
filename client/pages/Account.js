import React, { useState } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import LottieView from 'lottie-react-native';

import { Image } from 'expo-image';
import { NavigationContainer } from '@react-navigation/native';

const Account = ({ navigation,width }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    setLoading(true);

    // Simulate authentication process (replace this with API call)
    setTimeout(() => {
      setLoading(false);
      if (email === 'test@example.com' && password === 'password123') {
        Alert.alert('Success', 'Login Successful');
        // Navigate to another screen, e.g., Home
        navigation.navigate('HomeScreen');
      } else {
        Alert.alert('Error', 'Invalid credentials.');
      }
    }, 1000);
  };
  // const { width, height } = Dimensions.get('window'); 
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/heading.png')}
        style={{ width: width * 0.6, height: 100 }}
        contentFit="contain"
      />
      <Text style={styles.title}>Login</Text>
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        mode="outlined"
        style={styles.input}
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        mode="outlined"
        style={styles.input}
        secureTextEntry
      />
      <Button
        mode="contained"
        onPress={handleLogin}
        loading={loading}
        style={styles.button}
      >
        Login
      </Button>
      <Button
        mode="text"
        onPress={() => navigation.navigate('SignupScreen')}
        style={styles.link}
      >
        Don't have an account? Sign Up
      </Button>
      <Button
        mode="contained"
        onPress={()=>{navigation.navigate('Signup')}}
        loading={loading}
        style={styles.button}
      >
        SignUp
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    marginBottom: 15,
  },
  button: {
    marginVertical: 10,
  },
  link: {
    alignSelf: 'center',
    marginTop: 10,
  },
});

export default Account;
