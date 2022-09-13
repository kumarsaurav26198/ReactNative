import React, { useEffect, useState, useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import PayCheckout from '../../components/PayCheckout';
import { CartContext } from '../../services/CartContext';

export default function ShoppingCartScreen() {

    const { items, getItemsCount, getTotalPrice } = useContext(CartContext);

    function Totals() {
        let [total, setTotal] = useState(0);
        useEffect(() => {
            setTotal(getTotalPrice());
        });
        return (
            <View style={styles.cartLineTotal}>
                <Text style={[styles.lineLeft, styles.lineTotal]}>Total</Text>
                <Text style={styles.lineRight}>₹ {total} </Text>
            </View>
        );
    }
    function renderItem({ item }) {
        return (
            <View style={styles.cartLine}>
                <Text style={styles.lineLeft}>{item.product.name} x {item.qty}</Text>
                <Text style={styles.lineRight}>₹ {item.totalPrice}</Text>
            </View>
        );
    }
    return (
        <>
            <FlatList
                style={styles.itemsList}
                contentContainerStyle={styles.itemsListContainer}
                data={items}
                renderItem={renderItem}
                keyExtractor={(item) => item.product.id.toString()}
                ListFooterComponent={Totals}

            />
            <View styles={styles.paymentButton}>
                {/* <CustomButton title={"GO FOR PAYMENT"} onPress={() => navigation.navigate("Payment")} /> */}
                <PayCheckout />
            </View>

        </>
    );
}

const styles = StyleSheet.create({

    cartLine: {
        flexDirection: 'row',
    },
    cartLineTotal: {
        flexDirection: 'row',
        borderTopColor: '#dddddd',
        borderTopWidth: 1
    },
    lineTotal: {
        fontWeight: 'bold',
    },
    lineLeft: {
        fontSize: 20,
        lineHeight: 40,
        color: '#333333'
    },
    lineRight: {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
        lineHeight: 40,
        color: '#333333',
        textAlign: 'right',
    },
    itemsList: {
        backgroundColor: '#eeeeee',
    },
    itemsListContainer: {
        backgroundColor: '#eeeeee',
        paddingVertical: 8,
        marginHorizontal: 8,
    },
    paymentButton: {
        position: "relative",
        marginBottom: "100px"

    }
});