import * as React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigation from './BottomTabNavigation';
import ProductScreen from '../pages/productScreen/ProductScreen';
import ProductDetails from '../pages/productDetails/ProductDetails';



const Stack = createNativeStackNavigator();

function SplashScreenImage({ navigation }) {
    setTimeout(() => {
        navigation.replace('ProductScreen');
    }, 4000);
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
                <Stack.Screen
                    name="Home"
                    component={BottomTabNavigation}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="ProductScreen"
                    component={ProductScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="ProductDetails"
                    component={ProductDetails}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation;