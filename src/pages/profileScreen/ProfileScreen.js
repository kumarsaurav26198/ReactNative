import { View, Text, Button } from 'react-native';
import React from 'react';

export default function ProfileScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text style={{}}>Welcome to Profile Screen</Text>
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