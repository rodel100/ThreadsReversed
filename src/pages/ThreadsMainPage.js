import { message } from 'prompt';
import * as React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { Pressable } from 'react-native-web';

export default function ThreadsMainPage() {
    const dataThreadsSampleData = [
        {
            id: "1",
            user: {
                id: "u1",
                username: "Derek",
                avatarImage: "https://i.pravatar.cc/300"
            },
            threadMessage: "Hello World",
            threadImage: "https://picsum.photos/200"
        },
        {
            id: "2",
            user: {
                id: "u2",
                username: "Alice",
                avatarImage: "https://i.pravatar.cc/301"
            },
            threadMessage: "Greetings!",
            threadImage: "https://picsum.photos/201"
        },
        {
            id: "3",
            user: {
                id: "u3",
                username: "Bob",
                avatarImage: "https://i.pravatar.cc/302"
            },
            threadMessage: "Good day!",
            threadImage: "https://picsum.photos/202"
        },
        {
            id: "4",
            user: {
                id: "u4",
                username: "Eva",
                avatarImage: "https://i.pravatar.cc/303"
            },
            threadMessage: "Hey there!",
            threadImage: "https://picsum.photos/203"
        },
        {
            id: "5",
            user: {
                id: "u5",
                username: "Grace",
                avatarImage: "https://i.pravatar.cc/304"
            },
            threadMessage: "Hola!",
            threadImage: "https://picsum.photos/204"
        },
        {
            id: "6",
            user: {
                id: "u6",
                username: "James",
                avatarImage: "https://i.pravatar.cc/305"
            },
            threadMessage: "Howdy!",
            threadImage: "https://picsum.photos/205"
        },
        {
            id: "7",
            user: {
                id: "u7",
                username: "Lily",
                avatarImage: "https://i.pravatar.cc/306"
            },
            threadMessage: "Hi everyone!",
            threadImage: "https://picsum.photos/206"
        },
        {
            id: "8",
            user: {
                id: "u8",
                username: "Mike",
                avatarImage: "https://i.pravatar.cc/307"
            },
            threadMessage: "What's up?",
            threadImage: "https://picsum.photos/207"
        },
        {
            id: "9",
            user: {
                id: "u9",
                username: "Nina",
                avatarImage: "https://i.pravatar.cc/308"
            },
            threadMessage: "Greetings from Nina!",
            threadImage: "https://picsum.photos/208"
        },
        {
            id: "10",
            user: {
                id: "u10",
                username: "Oscar",
                avatarImage: "https://i.pravatar.cc/309"
            },
            threadMessage: "Hey folks!",
            threadImage: "https://picsum.photos/209"
        },
        {
            id: "11",
            user: {
                id: "u11",
                username: "Quincy",
                avatarImage: "https://i.pravatar.cc/310"
            },
            threadMessage: "Just saying hi!",
            // No threadImage for this entry
        },
        {
            id: "12",
            user: {
                id: "u12",
                username: "Rachel",
                avatarImage: "https://i.pravatar.cc/311"
            },
            threadMessage: "Greetings from Rachel!",
            // No threadImage for this entry
        }
    ];

    const TreadsItem = ({ thread }) => (
        <View>
            <Image source={{ uri: thread.user.avatarImage }} />
            <Text>{thread.user.username}</Text>
            <Text>{thread.threadMessage}</Text>
            <Image source={{ uri: thread.threadImage }} />
        </View>
    );
    return (
        <View>
            <Pressable><Image source={require("../../assets/threads-app-icon.webp")}></Image></Pressable>
            <FlatList
                data={threadsSampleData}
                renderItem={({ item }) => <ThreadItem thread={item} />}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}