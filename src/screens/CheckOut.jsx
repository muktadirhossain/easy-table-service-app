import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import Layout from '../layout/MainLayout'
import GlobalContext from '../context/globalContext'
import { Button, TextInput } from 'react-native-paper'
import axios from 'axios'
import API from '../assets/API'
import { useNavigation } from '@react-navigation/native'

const CheckOut = () => {
  const { cartItems, } = useContext(GlobalContext)
  const [customerName, setCustomerName] = useState("");
  const [customerNumber, setCustomerNumber] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpire, setCardExpire] = useState("");
  const [cvv, setCvv] = useState("");
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation()

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const orderHandler = async () => {
    setLoading(true)

    try {
      const res = await axios.post(API.POST_ORDER, {
        cartData: cartItems,
        customerName,
        customerNumber,
        cardNumber,
        cardExpire,
        cvv,
      })

      console.log(res?.data)
      if (res?.data?.statusCode === 200) {
        Alert.alert("Success!", "Your order has been placed successfully!")
        navigation.navigate("BottomNavigation")
      }
    } catch (error) {
      console.error(error)
      Alert.alert("Sorry!", error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Layout>
      <ScrollView>
        <Text className="text-3xl font-bold text-center text-green-500">Check Out</Text>
        <View style={styles.totalContainer}>
          <View className="justify-between flex-row mx-2">
            <Text style={styles.totalText}>Amount to be paid:</Text>
            <Text style={[styles.totalText, { color: 'red' }]}>{(totalPrice + (totalPrice * 0.10)).toFixed(2)} €</Text>
          </View>
          <View>
            <Text className="text-2xl font-bold text-center text-green-500 my-5">Fill these information</Text>
            <TextInput
              label="Customer's Name"
              placeholder='Enter your name...'
              value={customerName}
              mode='outlined'
              className="bg-transparent my-2"
              onChangeText={text => setCustomerName(text)}
            />
            <TextInput
              label="Customer's Number"
              placeholder='Enter your number...'
              value={customerNumber}
              mode='outlined'
              className="bg-transparent my-2"
              onChangeText={text => setCustomerNumber(text)}
            />
            <TextInput
              label="Card Number"
              placeholder='Enter your card number...'
              value={cardNumber}
              mode='outlined'
              className="bg-transparent my-2"
              onChangeText={text => setCardNumber(text)}
            />
            <TextInput
              label="Card Expire (MM/YY)"
              placeholder='MM/YY'
              value={cardExpire}
              mode='outlined'
              className="bg-transparent my-2"
              onChangeText={text => setCardExpire(text)}
            />
            <TextInput
              label="CVV"
              placeholder='___'
              value={cvv}
              mode='outlined'
              className="bg-transparent my-2"
              onChangeText={text => setCvv(text)}
            />
          </View>

          {/* <Button >Place Order</Button> */}
          <Button
            className="mt-10 bg-green-600"
            loading={loading}
            mode="contained"
            onPress={orderHandler}
          >
            Place Order
          </Button>
        </View>
      </ScrollView>
    </Layout>
  )
}

export default CheckOut

const styles = StyleSheet.create({
  itemContainer: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  quantity: {
    fontSize: 14,
    color: '#555',
  },
  quantityButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100,
  },
  totalContainer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'#555',
  },
});