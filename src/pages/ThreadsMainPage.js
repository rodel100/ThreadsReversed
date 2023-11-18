import * as React from 'react';
import { FlatList} from 'react-native-gesture-handler';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, Pressable } from 'react-native';

export default function ThreadsMainPage() {
    const dataThreadsSampleData = require('../../assets/sampleData/threadsSampleData.json')

    const ThreadItem = ({ thread }) => (
        <View>
            <Image source={{ uri: thread.user.avatarImage }} />
            <Text>{thread.user.username}</Text>
            <Text>{thread.threadMessage}</Text>
            {thread.threadImage && <Image source={{ uri: thread.threadImage }} />}
        </View>
    );
    return (
        <View>
            <Pressable><Image source={require("../../assets/threads-app-icon.webp")}></Image></Pressable>
            <FlatList
                data={dataThreadsSampleData}
                renderItem={({ item }) => <ThreadItem thread={item} />}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}