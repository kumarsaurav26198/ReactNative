import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CustomButton from '../../components/common/CustomButton';
import { WebView } from 'react-native-webview';

const LoactionScreen = ({ navigation }) => {
    return (
        <>
            <View>
            </View>
            <View style={styles.Maplocation}>
                <WebView source={{ html: '<iframe width="100%" height="100%"  scrolling="no"  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Parkview%20Residence%20Colony,%20Sector%2066,%20Sahibzada%20Ajit%20Singh%20Nagar,%20Punjab%20160066+(Your%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/sport-gps/">swimming watch</a></iframe>' }} />
                <View style={styles.backButtonContainer}>
                    <CustomButton title={"confirm  loaction"} onPress={() => navigation.navigate("ShoppingCartScreen")} />
                </View>
            </View>
        </>
    );
};

export default LoactionScreen;

const styles = StyleSheet.create({
    Maplocation: {
        width: "100%",
        height: "100%"
    },
    backButtonContainer: {
        bottom: 4,
        marginHorizontal: 10
    },
});