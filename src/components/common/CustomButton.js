import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const CustomButton = ({ onPress, title, onClick }) => {
    return (
        <TouchableOpacity onPress={onPress} onClick={onClick} style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>{title}</Text>
        </TouchableOpacity>
    );
};

export default CustomButton;

const styles = StyleSheet.create({
    // appButtonContainer: {
    //     elevation: 8,
    //     backgroundColor: "#009688",
    //     borderRadius: 10,
    //     // paddingVertical: 4,
    // },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        // textTransform: "uppercase"
    }
});