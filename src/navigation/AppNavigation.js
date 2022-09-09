import * as React from 'react';
import { Text, StyleSheet, ImageBackground, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigation from './BottomTabNavigation';
import ProductScreen from '../pages/productScreen/ProductScreen';
import ProductDetails from '../pages/productDetails/ProductDetails';
import ShoppingCartScreen from '../pages/shoppingCartScreen/ShoppingCartScreen';
import { CartProvider } from '../services/CartContext';
import CartIcon from '../components/CartIcon';
import IconCart from '../components/IconCart';
import Payment from '../pages/payment/Payment';
import { Button } from 'react-native-paper';
import CustomButton from '../components/common/CustomButton';
import CartButton from '../components/CartButton';





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
                        options={() => ({
                            title: 'Products',
                            headerTitleStyle: styles.headerTitle,
                            // headerRight: () => <CartIcon />
                            // headerRight: () => <Button onPress={goToCart()}>Goo Too Cart</Button>
                            // headerRight: () => <CustomButton title="Cart" onPress={() => navigate('ShoppingCartScreen')} />
                            headerRight: () => <CartButton title="Cart" />

                        })}

                    />
                    <Stack.Screen
                        name="ProductDetails"
                        component={ProductDetails}
                        options={() => ({
                            title: 'Product Details',
                            headerTitleStyle: styles.headerTitle,
                            headerRight: () => <CustomButton title="Cart" />
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
function goToCart({ navigation }) {
    navigation.navigate("ShoppingCartScreen");
}


