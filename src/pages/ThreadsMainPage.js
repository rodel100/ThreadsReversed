import * as React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { Pressable } from 'react-native-web';

export default function ThreadsMainPage() {
    ThreadsSampleData = {
        id: '1',
        user: {  
            id: 'u1',
            name: 'Vadim',
            imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg'
        }
    }}
    const Thread = () => {
    }

    return(
        <View>
            <Pressable><Image source={require("../../assets/threads-app-icon.webp")}></Image></Pressable>
            <FlatList
                data={threadsSampleData}
                renderItem={({ item }) => <ThreadItem thread={item} />}
                keyExtractor={(item) => item.id}
            />
        </View>
    )