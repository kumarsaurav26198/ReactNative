import { View, Text } from 'react-native';
import React from 'react';
// import { Button, Box } from "native-base";

export default function ProfileScreen() {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text style={{}}>Welcome to Profile Screen</Text>
            {/* <Box alignItems="center">
                <Button size="sm" variant={"solid"} _text={{
                    color: "#1F2937"
                }} ref={myRef} px="3">
                    Send
                </Button>
            </Box> */}
        </View>
    );
}