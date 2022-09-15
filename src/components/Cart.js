import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';


const Cart = ({ onPress, onClick }) => {

    return (
        <TouchableOpacity onPress={onPress} onClick={onClick} style={styles.appButtonContainer}>
            <Text style={styles.appButtonText} onPress={onPress}>Cart</Text>
        </TouchableOpacity>
    );
};

export default Cart;

const styles = StyleSheet.create({
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#3293fe",
        borderRadius: 50,
        paddingVertical: 7,
        paddingHorizontal: 12
    },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
});