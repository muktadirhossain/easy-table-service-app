import { useState } from 'react';
import GlobalContext from './globalContext';
import { Alert } from 'react-native';
import Toast from 'react-native-toast-message';

const GlobalContextProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((cartItem) => cartItem._id === item._id);
      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem._id === item._id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
    // console.log('Add to cart');
    Toast.show({
      type: 'success',
      text1: 'Item Added successfully!',
      text2: item?.title,
    });
  };

  const increaseQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item._id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.reduce((acc, item) => {
        if (item._id === itemId) {
          if (item.quantity > 1) {
            acc.push({ ...item, quantity: item.quantity - 1 });
          }
        } else {
          acc.push(item);
        }
        return acc;
      }, [])
    );
  };
  


  return (
    <GlobalContext.Provider
      value={{ loggedInUser, setLoggedInUser, cartItems, addToCart, increaseQuantity, decreaseQuantity }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
