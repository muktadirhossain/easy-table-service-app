import axios from 'axios'
import dayjs from 'dayjs'
import { Alert, StyleSheet, View } from 'react-native'
import { Button, Card, Text } from 'react-native-paper'
import API from '../assets/API'
import { useNavigation } from '@react-navigation/native'

const OrderCard = ({ data }) => {
    const order = JSON.parse(data)
    const navigation = useNavigation()
    const cancelOrder = async () => {
        try {
            const res = await axios.post(API.ORDER_STATUS_CHANGE, {
                id: order?._id,
                orderStatus: 'canceled',
            })
            if (res.data.statusCode === 200) {
                navigation.goBack()
                Alert.alert("Success!", "Order canceled Successfully")
            }
        } catch (error) {
            console.error(error)
            Alert.alert("Sorry", error.message)
        }
    }
    const makeOrderPaid = async () => {
        try {
            const res = await axios.post(API.ORDER_STATUS_CHANGE, {
                id: order?._id,
                orderStatus: 'paid',
            })
            if (res.data.statusCode === 200) {
                navigation.goBack()
                Alert.alert("Success!", "Order paid Successfully")
            }
        } catch (error) {
            console.error(error)
            Alert.alert("Sorry", error.message)
        }
    }
    return (
        <Card className="m-2 pb-3 bg-green-50">
            <Card.Content>
                <Text className="capitalize text-xl font-bold py-1 dark:text-black">Customer: {order?.customerName}</Text>
                <Text>Order Date:{dayjs(order?.createdAt).format("DD-MM-YY")}</Text>
                <Text variant="bodyMedium">Contact No:  {order?.customerNumber}</Text>
                <Text className="capitalize dark:text-black" >Status: {order?.orderStatus}</Text>
                <Text variant="bodyMedium" className="dark:text-black">Total Order Item: {order?.orderItems?.length}</Text>
                <Text variant="bodyMedium" className="mb-1 dark:text-black">Order Items:</Text>
                <View className="flex-row justify-start gap-x-2 flex-wrap dark:text-black">
                    {
                        order?.orderItems?.map((orderItem) => <Text key={orderItem?._id} className="py-1 px-2 bg-slate-500 my-0.5 rounded-sm text-gray-300">{orderItem?.title}</Text>)
                    }
                </View>
                <Text className="capitalize mt-1" variant="titleLarge">Total: {order?.payableAmount} €</Text>

            </Card.Content>
            {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
            {
                (order?.orderStatus !== 'canceled' && order?.orderStatus !== 'paid') &&
                <Card.Actions>
                    <Button
                        onPress={cancelOrder}
                        className="bg-rose-500" textColor='white'>Cancel order</Button>
                    <Button
                        onPress={makeOrderPaid}
                    >Mark As Paid</Button>
                </Card.Actions>
            }

        </Card>
    )
}

export default OrderCard

const styles = StyleSheet.create({})