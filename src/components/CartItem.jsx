import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { IconButton } from "react-native-paper";
import GlobalContext from "../context/globalContext";

const CartItem = ({ item }) => {
    const { increaseQuantity, decreaseQuantity } = useContext(GlobalContext)
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>Price: {item.price} €</Text>
            <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
            <View style={styles.quantityButtons}>

                <IconButton
                    animated={true}
                    icon={'plus'}
                    mode='outlined'
                    iconColor={'green'}
                    size={20}
                    onPress={() => increaseQuantity(item._id)}
                />
                <IconButton

                    animated={true}
                    icon={'minus'}
                    mode='outlined'
                    iconColor={'red'}
                    size={20}
                    onPress={() => decreaseQuantity(item._id)}
                />

            </View>
        </View>
    )
}

export default CartItem;

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
    },
});