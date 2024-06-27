import { RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Layout from '../layout/MainLayout'
import useGetApiResponse from '../hooks/useGetApiResponse'
import API, { currency } from '../assets/API'
import { Card } from 'react-native-paper'
import { calculateTotalAmount } from '../utils/utils'

const Analytics = () => {
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
                <Card className="bg-green-100 m-2">
                    <Card.Content>
                        <Text className="text-xl font-bold text-green-500" >pending Orders: {data?.pendingOrders?.length}</Text>
                        <Text className="text-lg">Total Amount: {pendingOrderAmount} {currency}</Text>
                    </Card.Content>
                </Card>
                <Card className="bg-green-100 m-2">
                    <Card.Content>
                        <Text className="text-xl font-bold text-green-500" >
                            Total Orders: {data?.orders?.length}</Text>
                        <Text className="text-lg">Total Amount: {totalOrderAmount} {currency}</Text>
                    </Card.Content>
                </Card>
                <Card className="bg-green-100 m-2">
                    <Card.Content>
                        <Text className="text-xl font-bold text-green-500" >Paid Orders: {data?.paidOrders?.length}</Text>
                        <Text className="text-lg">Total Amount: {paidOrderAmount} {currency}</Text>
                    </Card.Content>
                </Card>

                <Card className="bg-green-100 m-2">
                    <Card.Content>
                        <Text className="text-xl font-bold text-rose-500" >Canceled Orders: {data?.canceledOrders?.length}</Text>
                        <Text className="text-lg">Total Amount: {canceledOrderAmount} {currency}</Text>
                    </Card.Content>
                </Card>
            </ScrollView>
        </Layout>
    )
}

export default Analytics

const styles = StyleSheet.create({})