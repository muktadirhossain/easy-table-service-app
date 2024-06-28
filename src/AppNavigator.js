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
// import AllOrdersList from './screens/AllOrdersList';
import OrderList from './screens/OrderList';
import { useContext, useEffect, useState } from 'react';
import GlobalContext from './context/globalContext';


const Stack = createNativeStackNavigator();

const AppNavigator = () => {

  const [showSplash, setShowSplash] = useState(false)
  const {loggedInUser} = useContext(GlobalContext)
  useEffect(() => {
    setTimeout(() => {
      setShowSplash(true)
    }, 1500)
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        {
          !showSplash &&
          <Stack.Screen name="Splash" component={Splash} />
        }
        {
          ! loggedInUser && <Stack.Screen name="Login" component={Login} />
        }
        
        <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MenuDetails" component={MenuDetails} />
        <Stack.Screen name="CheckOut" component={CheckOut} />
        <Stack.Screen name="Analytics" component={Analytics} />
        <Stack.Screen name="OrderList" component={OrderList} />
        {/* <Stack.Screen name="AllOrdersList" component={AllOrdersList} /> */}
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  );
};

export default AppNavigator;
