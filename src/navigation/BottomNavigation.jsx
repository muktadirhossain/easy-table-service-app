import React, { useContext } from 'react';
import { BottomNavigation } from 'react-native-paper';
import Cart from '../screens/Cart';
import Home from '../screens/Home';
import GlobalContext from '../context/globalContext';
import Analytics from '../screens/Analytics';



const MyComponent = () => {
  const { loggedInUser } = useContext(GlobalContext)
  const [index, setIndex] = React.useState(0);
  const screens = loggedInUser?.role === 'admin' ? [
    { key: 'analytics', title: 'Analytics', focusedIcon: 'view-dashboard', },
    { key: 'home', title: 'Home', focusedIcon: 'home', },
    { key: 'cart', title: 'Cart', focusedIcon: 'cart' },
  ] : [
    { key: 'home', title: 'Home', focusedIcon: 'home', },
    { key: 'cart', title: 'Cart', focusedIcon: 'cart' },
  ]
  const [routes] = React.useState(screens);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
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
    />
  );
};

export default MyComponent;
