import { StyleSheet, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Product } from '../../components/Product';
import { getProducts } from '../../services/ProductsService';

const ProductScreen = ({ navigation }) => {
    function renderProduct({ item: product }) {
        return (
            <Product {...product}
                onPress={() => {
                    navigation.navigate('ProductDetails', {
                        productId: product.id,
                    });
                }}
            />
        );
    }
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(getProducts());
    });


    return (
        <FlatList
            style={styles.productsList}
            contentContainerStyle={styles.productsListContainer}
            keyExtractor={(item) => item.id.toString()}
            data={products}
            renderItem={renderProduct}
        />
    );
};

export default ProductScreen;

const styles = StyleSheet.create({
    productsList: {
        backgroundColor: '#eeeeee',
    },
    productsListContainer: {
        backgroundColor: '#eeeeee',
        paddingVertical: 8,
        marginHorizontal: 8,
    },
});