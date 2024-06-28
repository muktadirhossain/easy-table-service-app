import { Alert, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import Layout from '../layout/MainLayout'
import GlobalContext from '../context/globalContext'
import { Button, IconButton } from 'react-native-paper'
import CartItem from '../components/CartItem'
import { useNavigation } from '@react-navigation/native'

const Cart = () => {
    const navigation = useNavigation()
    const { cartItems, decreaseQuantity, increaseQuantity } = useContext(GlobalContext)

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const goToCheckOut = () => {
        navigation.navigate("CheckOut")
    }


    return (
        <Layout>
            <ScrollView>
                <Text className="font-bold text-center text-2xl text-green-600 dark:text-green-600">Cart</Text>
                <FlatList
                    data={cartItems}
                    renderItem={({ item }) => <CartItem item={item} />}
                    keyExtractor={(item) => item._id}
                />

                <View style={styles.totalContainer}>
                    {cartItems?.length === 0 &&
                        <Text
                            className="font-bold text-center text-2xl text-slate-400 dark:text-green-600 my-20"
                        >Sorry, Cart is empty.😔
                        </Text>}
                    <View className="justify-between flex-row ">
                        <Text style={styles.totalText}>SubTotal:</Text>
                        <Text style={styles.totalText}>{totalPrice} €</Text>
                    </View>
                    <View className="justify-between flex-row my-1">
                        <Text style={styles.totalText}>VAT(10%):</Text>
                        <Text style={styles.totalText}>{(totalPrice * 0.10).toFixed(2)} €</Text>
                    </View>
                    <View className="justify-between flex-row">
                        <Text style={styles.totalText}>Total:</Text>
                        <Text style={styles.totalText}>{(totalPrice + (totalPrice * 0.10)).toFixed(2)} €</Text>
                    </View>

                    {/* <Button >Place Order</Button> */}
                    <Button
                        className="mt-10 bg-green-600"
                        disabled={cartItems?.length === 0}
                        icon="login"
                        mode="contained"
                        onPress={goToCheckOut}
                    >
                        Place Order
                    </Button>
                </View>
            </ScrollView>
        </Layout>
    )
}

export default Cart



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
        color: '#555',
    },
});