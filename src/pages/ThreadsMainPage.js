import * as React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {Dimensions, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import Svg, {Line, Path, Polygon} from "react-native-svg";

export default function ThreadsMainPage() {
    const dataThreadsSampleData = require('../../assets/sampleData/threadsSampleData.json')

    const ThreadItem = ({thread}) => (
        <View style={styled.outerLayer}>
            <Image style={styled.threadsUserImage} source={{uri: thread.user.avatarImage}}/>
            <View style={styled.InnerLayer}>
                <Text>{thread.user.username}</Text>
                <Text>{thread.threadMessage}</Text>
                {thread.threadImage && <Image style={styled.mainImage} source={{uri: thread.threadImage}}/>}
                <View style={{flexDirection: "row"}}>
                    <Pressable>
                        <Svg style={styled.heartIcon} width={20} height={20} viewBox="0 0 24 24" fill="none"
                             stroke="#000000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                            <Path
                                d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"/>
                        </Svg>
                    </Pressable>
                    <Pressable>
                        <Svg width={20} height={20} fill="none" stroke="black" stroke-linejoin="round" stroke-width="2">
                            <Path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"/>
                        </Svg>
                    </Pressable>
                    <Pressable>
                        <Svg fill="currentColor" height={20} viewBox="0 0 24 24" width={20}>
                            <Path
                                d="M19.998 9.497a1 1 0 0 0-1 1v4.228a3.274 3.274 0 0 1-3.27 3.27h-5.313l1.791-1.787a1 1 0 0 0-1.412-1.416L7.29 18.287a1.004 1.004 0 0 0-.294.707v.001c0 .023.012.042.013.065a.923.923 0 0 0 .281.643l3.502 3.504a1 1 0 0 0 1.414-1.414l-1.797-1.798h5.318a5.276 5.276 0 0 0 5.27-5.27v-4.228a1 1 0 0 0-1-1Zm-6.41-3.496-1.795 1.795a1 1 0 1 0 1.414 1.414l3.5-3.5a1.003 1.003 0 0 0 0-1.417l-3.5-3.5a1 1 0 0 0-1.414 1.414l1.794 1.794H8.27A5.277 5.277 0 0 0 3 9.271V13.5a1 1 0 0 0 2 0V9.271a3.275 3.275 0 0 1 3.271-3.27Z"/>
                        </Svg>
                    </Pressable>
                    <Pressable>
                        <Svg width={20} height={20} fill="none" stroke="black" stroke-linejoin="round" stroke-width="2">
                            <Line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22"
                                  x2="9.218" y1="3" y2="10.083"/>
                            <Polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                                     stroke="currentColor" stroke-linejoin="round" stroke-width="2"/>
                        </Svg>
                    </Pressable>
                </View>
                <View>
                    {thread.threadsComments && <Text>{thread.threadComments} Replies</Text>}
                    {thread.threadLikes && <Text>{thread.threadLikes} Likes</Text>}
                </View>
            </View>
        </View>
    );
    return (
        <View style={styled.screenLayer}>
            <Pressable><Image style={styled.logoImage}
                              source={require("../../assets/threads-app-icon.webp")}></Image></Pressable>
            <FlatList
                data={dataThreadsSampleData}
                renderItem={({item}) => <ThreadItem thread={item}/>}
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
