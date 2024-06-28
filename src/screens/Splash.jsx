import { Image, StyleSheet, Text, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import Layout from '../layout/MainLayout';
import img from '../assets/img/splash_img.png'
import { useEffect } from 'react';

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      // navigation.navigate('Login')
      // navigation.navigate('BottomNavigation');
    }, 2000)
  }, [navigation])
  return (
    <Layout>
      <View className="min-h-screen items-center justify-center">
        <Image className="self-center" source={img} />
        <ActivityIndicator className="mt-20" size={'large'} />
      </View>
    </Layout>
  );
};

export default Splash;

const styles = StyleSheet.create({});
