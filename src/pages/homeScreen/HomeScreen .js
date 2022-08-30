import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Home Screen</Text>
            <View>
                <Button title='Go To ProfileScreen' onPress={() => navigation.navigate('ProfileScreen')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({});