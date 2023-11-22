import * as React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, Pressable } from 'react-native';

export default function ThreadsMainPage() {
    const dataThreadsSampleData = require('../../assets/sampleData/threadsSampleData.json')

    const ThreadItem = ({ thread }) => (
        <View style={styled.outerLayer}>
            <Image style={styled.threadsUserImage} source={{ uri: thread.user.avatarImage }} />
            <View style={styled.InnerLayer}>
                <Text>{thread.user.username}</Text>
                <Text>{thread.threadMessage}</Text>
                {thread.threadImage && <Image style={styled.mainImage} source={{ uri: thread.threadImage }} />}
                <view style={{ flexDirection: "row" }}>
                    <Pressable><Text>Like Button</Text></Pressable>
                    <Pressable><Text>Comment Button</Text></Pressable>
                    <Pressable><Text>Repost Button</Text></Pressable>
                    <Pressable><Text>Send    Button</Text></Pressable>
                </view>
            </View>
        </View>
    );
    return (
        <View style={styled.screenLayer}>
            <Pressable><Image style={styled.logoImage} source={require("../../assets/threads-app-icon.webp")}></Image></Pressable>
            <FlatList
                data={dataThreadsSampleData}
                renderItem={({ item }) => <ThreadItem thread={item} />}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

const styled = StyleSheet.create({
    threadsImage: {
        width: 20,
        height: 20,
    },
    mainImage: {
        maxHeight: Dimensions.get('window').height,
        maxWidth: Dimensions.get('window').width + 30,
        minWidth: 300,
        minHeight: 300,
        borderRadius: 10,
        resizeMode: "contain",
        marginRight: 10,
    },
    outerLayer: {
        borderRadius: 10,
        borderWidth: 1,
        flexDirection: "row",
    },
    screenLayer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoImage: {
        width: 50,
        height: 50,
    },
    InnerLayer: {
        flex: 1,
        flexDirection: "column",
        overflow: "hidden",
    },
    threadsUserImage: {
        width: 30,
        height: 30,
        borderRadius: 50,
    },
})
