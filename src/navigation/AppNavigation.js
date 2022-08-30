import * as React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../pages/homeScreen/HomeScreen ';
import ProfileScreen from '../pages/profileScreen/ProfileScreen';



const Stack = createNativeStackNavigator();

function SplashScreenImage({ navigation }) {
    setTimeout(() => {
        navigation.replace('Home');
    }, 5000);
    return (
        <ImageBackground style={{ flex: 1 }} source={require("../assets/splash.png")} >
        </ImageBackground>
    );
}

function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="SplashScreenImage" component={SplashScreenImage} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation;