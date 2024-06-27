import { StyleSheet, Text, View, FlatList, RefreshControl, } from 'react-native';
import React, { useContext, } from 'react';
import Layout from '../layout/MainLayout';
import API from '../assets/API';
import GlobalContext from '../context/globalContext';
import useGetApiResponse from '../hooks/useGetApiResponse';
import MenuCard from '../components/MenuCard';

const Home = () => {

    const { data, loading, refetchData } = useGetApiResponse(API.MENU_ITEMS)

    return (
        <Layout>
            <Text className="font-bold text-center text-2xl text-green-600 dark:text-green-600">Menu Items:</Text>
            <FlatList
                data={data?.data}
                renderItem={({ item }) => <MenuCard item={item} />}
                keyExtractor={(item) => item._id}
                refreshControl={
                    <RefreshControl refreshing={loading} onRefresh={refetchData} />
                }
            />
        </Layout>
    );


};

export default Home;

const styles = StyleSheet.create({
    itemContainer: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 14,
        color: '#555',
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 8,
    },
});
