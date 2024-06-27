import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Button, Card } from 'react-native-paper';
import API from '../assets/API';
import GlobalContext from '../context/globalContext';

function MenuCard({ item }) {
    const { addToCart } = useContext(GlobalContext)
    const myNavigation = useNavigation();
    return (
        <Card className="my-2 mx-3 bg-green-50"

        >
            <Card.Cover source={{ uri: API?.BASE + item?.image }} />
            <Card.Content className="mt-2">
                <Text className="font-extrabold capitalize text-green-600 text-2xl">{item.title}</Text>
                <Text className="font-semibold capitalize text-green-600 text-xl">{`Price: ${item?.price} € `}</Text>
                <Text className="my-1 font-semibold capitalize">Code: {item.itemCode}</Text>
                <Text className="mb-2 font-semibold capitalize text-md">category: {item?.category?.categoryName}</Text>
            </Card.Content>
            <Card.Actions >
                <View className="w-full flex-row justify-evenly items-center">
                    <Button
                        className="bg-teal-600"
                        icon="arrow-top-right"
                        mode="contained"
                        onPress={() => myNavigation.navigate("MenuDetails", { data: JSON.stringify(item) })}>
                        See Details
                    </Button>
                    <Button
                        icon="cart-plus"
                        mode="contained"
                        onPress={() => addToCart(item)}>
                        Add to Cart
                    </Button>
                </View>
            </Card.Actions>
        </Card>
    );
};


export default MenuCard

const styles = StyleSheet.create({})