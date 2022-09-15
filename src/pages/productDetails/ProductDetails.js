import React, { useEffect, useState, useContext } from 'react';
import {
    Text,
    Image,
    View,
    ScrollView,
    SafeAreaView,
    Button,
    StyleSheet
} from 'react-native';
import CustomButton from '../../components/common/CustomButton.js';
import { getProduct } from '../../services/ProductsService.js';
import { CartContext } from '../../services/CartContext';
export default function ProductDetails({ route, navigation }) {

    const { productId } = route.params;
    const [product, setProduct] = useState({});

    const { addItemToCart } = useContext(CartContext);

    useEffect(() => {
        setProduct(getProduct(productId));
    });

    function onAddToCart() {
        addItemToCart(product.id);
    }
    function setLoaction() {
        navigation.navigate('LoactionScreen');
    }
    return (
        <SafeAreaView>
            <ScrollView>
                <Image
                    style={styles.image}
                    source={product.image}
                />
                <View style={styles.infoContainer}>
                    <Text style={styles.name}>{product.name}</Text>
                    <Text style={styles.price}>Rs..  {product.price} ₹</Text>
                    <Text style={styles.description}>{product.description}</Text>
                    <View style={styles.loginContainer}>
                        <CustomButton title={"Add Too cart"} onPress={onAddToCart} />
                    </View>
                    <View style={styles.locationContainer}>
                        <CustomButton title={" set Loaction"} onPress={setLoaction} />
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 16,
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowColor: 'black',
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 1,
        marginVertical: 20,
    },
    image: {
        height: 300,
        width: '100%'
    },
    infoContainer: {
        padding: 16,
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8,
    },
    description: {
        fontSize: 16,
        fontWeight: '400',
        color: '#787878',
        marginBottom: 16,
    },
    loginContainer: {
        backgroundColor: "#ff5a66",
        borderRadius: 25,
        padding: 10,
        marginTop: 30,
        width: "100%"
    },
    locationContainer: {
        backgroundColor: "#3293fe",
        borderRadius: 25,
        padding: 10,
        marginTop: 30,
        width: "100%"
    }
});