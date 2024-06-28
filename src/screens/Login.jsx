import { StyleSheet, Text, View, Image, Alert } from 'react-native'
import React, { useContext } from 'react'
import Layout from '../layout/MainLayout'
import { Button, TextInput } from 'react-native-paper';
// import { Image } from 'react-native-svg';
import login_img from '../assets/img/login_pic.png'
import API from '../assets/API';
import axios from 'axios';
import GlobalContext from '../context/globalContext';

const Login = ({navigation}) => {
  const [userName, setUserName] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const {loggedInUser, setLoggedInUser} = useContext(GlobalContext)

  const handleLogin = async () => {
    setError('')
    setLoading(true)
    try {
      const response = await axios.post(API.LOGIN, {
        username: userName,
        password: pass,
      });

      console.log('Login successful:', response.data);
      setLoggedInUser(response.data);
      navigation.navigate("BottomNavigation")
      Alert.alert('Login Successful', 'You have logged in successfully!', [{ text: 'OK' }]);
      // Handle successful login (e.g., navigate to another screen, store token, etc.)
    } catch (error) {
      console.error('Error logging in:', error);
      setError(error.message)
      Alert.alert('Login Failed', 'Failed to login. Please check your credentials.', [{ text: 'OK' }]);
    }finally{
      setLoading(false)
    }
  };
  return (
    <Layout>
      <View className="mx-5">
        <Text className="text-center text-slate-900 font-bold text-2xl">Login</Text>
        <Image
          className="self-center h-40 mt-2"
          resizeMode='contain'
          source={login_img} />
        <TextInput
          label="Email/Number"
          placeholder='Enter your email address or number'
          value={userName}
          mode='outlined'
          className="bg-transparent my-2"
          onChangeText={text => setUserName(text)}
        />
        <TextInput
          label="Password"
          placeholder='Enter your password'
          secureTextEntry={true}
          
          value={pass}
          mode='outlined'
          className="bg-transparent"
          onChangeText={text => setPass(text)}
        />
        {error ? <Text style={styles.error}>{error}</Text> : null}
        <Button
          className="mt-10 bg-green-600"
          loading={loading}
          icon="login"
          mode="contained"
          onPress={handleLogin}
        >
          Login
        </Button>
      </View>
    </Layout>
  )
}

export default Login

const styles = StyleSheet.create({
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },
})