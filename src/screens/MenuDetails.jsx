import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import Layout from '../layout/MainLayout'
import { Button, Card } from 'react-native-paper'
import API from '../assets/API'
import GlobalContext from '../context/globalContext'

const MenuDetails = ({ route: { params } }) => {
    const {addToCart} = useContext(GlobalContext)
    const item = JSON.parse(params?.data)

    return (
        <Layout>
            <Card className="my-2 mx-3 bg-green-50"
            >
                <Card.Cover source={{ uri: API?.BASE + item?.image }} />
                <Card.Content className="mt-2">
                    <Text className="font-extrabold capitalize text-green-600 text-2xl">{item.title}</Text>
                    <Text className="font-semibold capitalize text-green-600 text-xl">{`Price: ${item?.price} € `}</Text>
                    <Text className="my-1 font-semibold capitalize dark:text-black">Code: {item.itemCode}</Text>
                    <Text className="mb-2 font-semibold capitalize text-md dark:text-black">category: {item?.category?.categoryName}</Text>
                    <Text className="mb-2 font-semibold capitalize text-md dark:text-black">{item?.description}</Text>
                </Card.Content>
                <Card.Actions>
                    <Button
                        icon="cart-plus"
                        mode="contained"
                        onPress={() => addToCart(item)}>
                        Add to Cart
                    </Button>
                </Card.Actions>
            </Card>

        </Layout>
    )
}

export default MenuDetails

const styles = StyleSheet.create({})