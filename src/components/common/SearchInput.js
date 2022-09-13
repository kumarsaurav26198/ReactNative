import React from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native';
const SearchInput = () => {
    return (
        <>
            <View style={styles.inputFieldContainer}>
                <Image
                    style={styles.searcIcon}
                    source={require('../../assets/images/SearchIcon.png')}
                />
                <TextInput
                    placeholder="Search "
                    style={styles.root}
                    keyboardType="default"
                />
                <View style={styles.settingContainer}>
                    <TouchableOpacity>
                        <Image
                            style={styles.settingIcon}
                            source={require('../../assets/images/SettingIcon.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
};
export default SearchInput;
const styles = StyleSheet.create({
    inputFieldContainer: {
        backgroundColor: 'transparent',
        padding: 10,
        marginTop: 10,
    },
    root: {
        paddingLeft: 50,
        paddingVertical: 13,
        borderRadius: 40,
        fontSize: 16,
        borderColor: '#1E3A4F',
        backgroundColor: '#fff',
    },
    searcIcon: {
        zIndex: 1,
        position: 'absolute',
        left: 30,
        top: 30,
    },
    settingIcon: {
        position: 'absolute',
        top: 15,
        left: 15,
    },
    settingContainer: {
        width: 45,
        height: 45,
        backgroundColor: '#b8bbbf',
        borderRadius: 30,
        position: 'absolute',
        right: 15,
        top: 14,
    },
});