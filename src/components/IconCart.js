import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

export default function IconCart({ navigation }) {
    function goToCart() {
        console.warn("ActionTypes");
    }
    return (
        <TouchableOpacity onPress={goToCart}>
            <Text
                onPress={() => {
                    navigation.navigate('ShoppingCartScreen');
                    console.warn("Chaal Gya");
                }}
            >  Go to Cart</Text>
        </TouchableOpacity >
    );
}

const styles = StyleSheet.create({});