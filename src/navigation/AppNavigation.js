import * as React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigation from './BottomTabNavigation';
import ProductScreen from '../pages/productScreen/ProductScreen';
import ProductDetails from '../pages/productDetails/ProductDetails';
import ShoppingCartScreen from '../pages/shoppingCartScreen/ShoppingCartScreen';
import { CartProvider } from '../services/CartContext';
import Payment from '../pages/payment/Payment';
import Cart from '../components/Cart';
import LoactionScreen from '../pages/loactionScreen/LoactionScreen';


const Stack = createNativeStackNavigator();

function SplashScreenImage({ navigation }) {
    setTimeout(() => {
        navigation.replace('ProductScreen');
    }, 3000);
    return (
        <ImageBackground style={{ flex: 1, height: "100%", width: "100%" }} source={require("../assets/splash.png")} >
        </ImageBackground>
    );
}

function AppNavigation() {

    return (
        <CartProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="SplashScreenImage" component={SplashScreenImage} options={{ headerShown: false }} />
                    <Stack.Screen
                        name="Home"
                        component={BottomTabNavigation}
                    />
                    <Stack.Screen
                        name="ProductScreen"
                        component={ProductScreen}
                        options={({ navigation }) => ({
                            title: 'Products',
                            headerTitleStyle: styles.headerTitle,
                            headerRight: () => <Cart title="Cart" onPress={() => navigation.navigate("ShoppingCartScreen")} />
                        })}
                    />
                    <Stack.Screen
                        name="ProductDetails"
                        component={ProductDetails}
                        options={({ navigation }) => ({
                            title: 'Product Details',
                            headerTitleStyle: styles.headerTitle,
                            headerRight: () => <Cart title="Cart" onPress={() => navigation.navigate("ShoppingCartScreen")} />
                        })}
                    />
                    <Stack.Screen
                        name="LoactionScreen"
                        component={LoactionScreen}
                        options={() => ({
                            title: 'Select Loaction',
                            headerTitleStyle: styles.headerTitle,
                        })}
                    />
                    <Stack.Screen
                        name="ShoppingCartScreen"
                        component={ShoppingCartScreen}
                        options={() => ({
                            title: 'My cart',
                            headerTitleStyle: styles.headerTitle,
                        })}
                    />

                    <Stack.Screen
                        name="Payment"
                        component={Payment}
                        options={() => ({
                            title: 'Payment',
                            headerTitleStyle: styles.headerTitle,
                            headerRight: () => <Cart title="Cart" />
                        })}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </CartProvider>
    );
}
export default AppNavigation;
const styles = StyleSheet.create({
    headerTitle: {
        fontSize: 20
    }
});



