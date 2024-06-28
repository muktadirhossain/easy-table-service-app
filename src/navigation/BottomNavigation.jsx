import { useContext, useState } from 'react';
import { BottomNavigation } from 'react-native-paper';
import Cart from '../screens/Cart';
import Home from '../screens/Home';
import GlobalContext from '../context/globalContext';
import Analytics from '../screens/Analytics';



const MyComponent = () => {
  const { loggedInUser } = useContext(GlobalContext)
  const [index, setIndex] = useState(0);


  const screens = loggedInUser?.role === 'admin' ? [
    { key: 'analytics', title: 'Analytics', focusedIcon: 'view-dashboard', },
    { key: 'menu', title: 'Menu', focusedIcon: 'food', },
    { key: 'cart', title: 'Cart', focusedIcon: 'cart' },
  ] : [
    // { key: 'analytics', title: 'Analytics', focusedIcon: 'view-dashboard', },//! remove this later
    { key: 'menu', title: 'Menu', focusedIcon: 'food', },
    { key: 'cart', title: 'Cart', focusedIcon: 'cart' },
  ]
  const [routes] = useState(screens);

  const renderScene = BottomNavigation.SceneMap({
    menu: Home,
    cart: Cart,
    analytics: Analytics,
    // recents: RecentsScreen,
    // notifications: NotificationsScreen,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{ backgroundColor: '#f0fdf4' }} // Change this color as needed
      activeColor="#166534" // Change the color of the active icon and text
      inactiveColor="#292524" // Change the color of the inactive icon and text
    />
  );
};

export default MyComponent;
