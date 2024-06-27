import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './screens/Splash';
import Login from './screens/Login';
import Home from './screens/Home';
import BottomNavigation from './navigation/BottomNavigation';
import Toast from 'react-native-toast-message';
import MenuDetails from './screens/MenuDetails';
import CheckOut from './screens/CheckOut';
import Analytics from './screens/Analytics';
import AllOrdersList from './screens/AllOrdersList';


const Stack = createNativeStackNavigator();

const AppNavigator = () => {

  return (
    <NavigationContainer>
    <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}
    >
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="MenuDetails" component={MenuDetails} />
      <Stack.Screen name="CheckOut" component={CheckOut} />
      <Stack.Screen name="Analytics" component={Analytics} />
      <Stack.Screen name="AllOrdersList" component={AllOrdersList} />
    </Stack.Navigator>
    <Toast />
  </NavigationContainer>
  );
};

export default AppNavigator;
