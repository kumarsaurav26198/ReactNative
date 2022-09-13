import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import RazorpayCheckout from 'react-native-razorpay';


export default function PayCheckout() {
    return (
        <TouchableOpacity style={styles.appButtonContainer}
            onPress={() => {
                var options = {
                    description: 'Credits towards consultation',
                    image: 'https://i.imgur.com/3g7nmJC.jpg',
                    currency: 'INR',
                    key: 'rzp_test_GNnVef5lCY1FjE',
                    amount: '100',
                    name: 'Saurav Kumar',
                    // order_id: 'order_DslnoIgkIDL8Zt',
                    //Replace this with an order_id created using Orders API.
                    prefill: {
                        email: 'kumarsaurav26198@gmail.com',
                        contact: '6202142166',
                        name: 'Saurav Kumar'
                    },
                    theme: { color: '#53a20e' }
                };
                RazorpayCheckout.open(options).then((data) => {
                    // handle success
                    alert(`Success: ${ data.razorpay_payment_id }`);
                }).catch((error) => {
                    // handle failure
                    alert(`Error: ${ error.code } | ${ error.description }`);
                });
            }}
        >
            <Text style={styles.appButtonText}>CheckOut </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#544fe3",
        borderRadius: 10,
        paddingVertical: 7,
        marginBottom: 15,
        paddingVertical: 10,
        marginHorizontal: 15,


    },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",
    }
});