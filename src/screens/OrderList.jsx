import { FlatList, StyleSheet, Text, View } from 'react-native'
import Layout from '../layout/MainLayout'
import OrderCard from '../components/OrderCard'

const OrderList = ({ route: { params } }) => {
    const orders = JSON.parse(params?.data)
    // console.log(orders)

    return (
        <Layout>
            <Text className="text-3xl font-bold text-center text-green-500 capitalize" >{orders[0]?.orderStatus} Orders</Text>
            <FlatList
                data={orders}
                renderItem={({ item }) => <OrderCard data={JSON.stringify(item)} />}
                keyExtractor={(order) => order._id}
            />
        </Layout>
    )
}

export default OrderList

const styles = StyleSheet.create({})