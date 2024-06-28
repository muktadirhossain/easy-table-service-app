import { RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Layout from '../layout/MainLayout'
import useGetApiResponse from '../hooks/useGetApiResponse'
import API, { currency } from '../assets/API'
import { Button, Card } from 'react-native-paper'
import { calculateTotalAmount } from '../utils/utils'
import { useNavigation } from '@react-navigation/native'

const Analytics = () => {
    const navigation = useNavigation()
    const { data, loading, refetchData } = useGetApiResponse(API.ANALYTICS)
    const { orders = [], pendingOrders = [], paidOrders = [], canceledOrders = [] } = data ?? {};

    const totalOrderAmount = calculateTotalAmount(orders);
    const pendingOrderAmount = calculateTotalAmount(pendingOrders);
    const paidOrderAmount = calculateTotalAmount(paidOrders);
    const canceledOrderAmount = calculateTotalAmount(canceledOrders);


    return (
        <Layout>
            <ScrollView
                refreshControl={
                    <RefreshControl refreshing={loading} onRefresh={refetchData} />
                }
            >
                <Text className="text-3xl font-bold text-center text-green-500">Analytics</Text>
                <Card className="bg-green-50 m-2">
                    <Card.Content>
                        <Text className="text-xl font-bold text-green-500" >
                            Total Orders: {data?.orders?.length}</Text>
                        <Text className="text-lg">Total Amount: {totalOrderAmount} {currency}</Text>
                    </Card.Content>
                    {/* <Card.Actions>
                        <Button mode='contained'
                            onPress={() =>
                                navigation.navigate("OrderList",
                                    { data: JSON.stringify(data?.orders) })}
                        >See Details</Button>
                    </Card.Actions> */}
                </Card>
                <Card className="bg-green-50 m-2">
                    <Card.Content>
                        <Text className="text-xl font-bold text-green-500" >Pending Orders: {data?.pendingOrders?.length}</Text>
                        <Text className="text-lg">Total Amount: {pendingOrderAmount} {currency}</Text>
                    </Card.Content>
                    <Card.Actions>
                        <Button mode='contained'
                            onPress={() =>
                                navigation.navigate("OrderList",
                                    { data: JSON.stringify(data?.pendingOrders) })}
                        >See Details</Button>
                    </Card.Actions>
                </Card>

                <Card className="bg-green-50 m-2">
                    <Card.Content>
                        <Text className="text-xl font-bold text-green-500" >Paid Orders: {data?.paidOrders?.length}</Text>
                        <Text className="text-lg">Total Amount: {paidOrderAmount} {currency}</Text>
                    </Card.Content>
                    <Card.Actions>
                        <Button mode='contained'
                            onPress={() =>
                                navigation.navigate("OrderList",
                                    { data: JSON.stringify(data?.paidOrders) })}
                        >See Details</Button>
                    </Card.Actions>
                </Card>

                <Card className="bg-green-50 m-2">
                    <Card.Content>
                        <Text className="text-xl font-bold text-rose-500" >Canceled Orders: {data?.canceledOrders?.length}</Text>
                        <Text className="text-lg">Total Amount: {canceledOrderAmount} {currency}</Text>
                    </Card.Content>
                    <Card.Actions>
                        <Button
                            onPress={() =>
                                navigation.navigate("OrderList",
                                    { data: JSON.stringify(data?.canceledOrders) })}
                            mode='contained'>See Details</Button>
                    </Card.Actions>
                </Card>
            </ScrollView>
        </Layout>
    )
}

export default Analytics

const styles = StyleSheet.create({})