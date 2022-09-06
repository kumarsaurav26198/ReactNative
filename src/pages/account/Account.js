import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function Account({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Account</Text>
            {/* <View>
                <Button
                    title="Go To ProfileScreen"
                    onPress={() => navigation.navigate('ProfileScreen')}
                />
            </View>
            <View>
                <Button
                    title="Go To HomeScreen"
                    onPress={() => navigation.navigate('HomeScreen')}
                />
            </View>
            <View>
                <Button
                    title="Go To Account"
                    onPress={() => navigation.navigate('Account')}
                />
            </View>
            <View>
                <Button
                    title="Go To Social"
                    onPress={() => navigation.navigate('Social')}
                />
            </View> */}
        </View>
    );
}

const styles = StyleSheet.create({});