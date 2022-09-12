import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
// const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;
export default function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            {/* <Card>
                <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
                <Card.Content>
                    <Title>Card title</Title>
                    <Paragraph>Card content</Paragraph>
                </Card.Content>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Actions>
                    <Button>Cancel</Button>
                    <Button>Ok</Button>
                </Card.Actions>
            </Card> */}
            <View>
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
            </View>
        </View>
    );
}

const styles = StyleSheet.create({});
