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
                        <Svg width={20} height={20} fill={'none'} strokeLinejoin={"round"} strokeWidth={"2"}>
                            <Path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none"
                                  stroke="currentColor" strokeLinejoin="round" width="50"/>
                        </Svg>
                    </Pressable>
                    <Pressable>
                        <Svg fill="currentColor" height={20} viewBox="0 0 24 24" width={20}>
                            <Path
                                d="M19.998 9.497a1 1 0 0 0-1 1v4.228a3.274 3.274 0 0 1-3.27 3.27h-5.313l1.791-1.787a1 1 0 0 0-1.412-1.416L7.29 18.287a1.004 1.004 0 0 0-.294.707v.001c0 .023.012.042.013.065a.923.923 0 0 0 .281.643l3.502 3.504a1 1 0 0 0 1.414-1.414l-1.797-1.798h5.318a5.276 5.276 0 0 0 5.27-5.27v-4.228a1 1 0 0 0-1-1Zm-6.41-3.496-1.795 1.795a1 1 0 1 0 1.414 1.414l3.5-3.5a1.003 1.003 0 0 0 0-1.417l-3.5-3.5a1 1 0 0 0-1.414 1.414l1.794 1.794H8.27A5.277 5.277 0 0 0 3 9.271V13.5a1 1 0 0 0 2 0V9.271a3.275 3.275 0 0 1 3.271-3.27Z"/>
                        </Svg>
                    </Pressable>
                    <Pressable>
                        <Svg width={20} height={20} fill="none" stroke="black" strokeLinejoin="round" strokeWidth="2">
                            <Line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="22"
                                  x2="9.218" y1="3" y2="10.083"/>
                            <Polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                                     stroke="currentColor" strokeLinejoin="round" strokeWidth="2"/>
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
            <View>
                <Pressable><Image style={styled.logoImage}
                                  source={require("../../assets/threads-app-icon.webp")}></Image></Pressable>
                <View>
                    <Pressable>
                        <Svg width={20} height={20} fill="none" stroke="black" strokeLinejoin="round" strokeWidth="2">
                            <Path
                                d={"M2.25 12.8855V20.7497C2.25 21.8543 3.14543 22.7497 4.25 22.7497H8.25C8.52614 22.7497 8.75 22.5259 8.75 22.2497V17.6822V17.4997C8.75 15.1525 10.6528 13.2497 13 13.2497C15.3472 13.2497 17.25 15.1525 17.25 17.4997V17.6822V22.2497C17.25 22.5259 17.4739 22.7497 17.75 22.7497H21.75C22.8546 22.7497 23.75 21.8543 23.75 20.7497V12.8855C23.75 11.3765 23.0685 9.94815 21.8954 8.99883L16.1454 4.3454C14.3112 2.86095 11.6888 2.86095 9.85455 4.3454L4.10455 8.99883C2.93153 9.94815 2.25 11.3765 2.25 12.8855Z"}
                                fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"/>
                        </Svg>
                    </Pressable>
                    <Pressable>
                        <Svg width={20} height={20} fill="none" stroke="black" strokeLinejoin="round" strokeWidth="2">
                            <Path
                                d={"M3.5 11.5C3.5 7.08172 7.08172 3.5 11.5 3.5C15.9183 3.5 19.5 7.08172 19.5 11.5C19.5 15.9183 15.9183 19.5 11.5 19.5C7.08172 19.5 3.5 15.9183 3.5 11.5ZM11.5 1C5.70101 1 1 5.70101 1 11.5C1 17.299 5.70101 22 11.5 22C13.949 22 16.2023 21.1615 17.9883 19.756L22.3661 24.1339C22.8543 24.622 23.6457 24.622 24.1339 24.1339C24.622 23.6457 24.622 22.8543 24.1339 22.3661L19.756 17.9883C21.1615 16.2023 22 13.949 22 11.5C22 5.70101 17.299 1 11.5 1Z"}
                                fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"/>
                        </Svg>
                    </Pressable>
                    <Pressable>
                        <Svg width={20} height={20} fill="none" stroke="black" strokeLinejoin="round" strokeWidth="2">
                            <Path d={"M22.75 13L22.75 13.15C22.75 16.5103 22.75 18.1905 22.096 19.4739C21.5208 20.6029 20.6029 21.5208 19.4739 22.096C18.1905 22.75 16.5103 22.75 13.15 22.75L12.85 22.75C9.48969 22.75 7.80953 22.75 6.52606 22.096C5.39708 21.5208 4.4792 20.6029 3.90396 19.4739C3.25 18.1905 3.25 16.5103 3.25 13.15L3.25 12.85C3.25 9.48968 3.25 7.80953 3.90396 6.52606C4.4792 5.39708 5.39708 4.4792 6.52606 3.90396C7.80953 3.25 9.48968 3.25 12.85 3.25L13 3.25"}
                                    fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"/>
                        </Svg>
                    </Pressable>
                </View>
            </View>
            <FlatList
                data={dataThreadsSampleData}
                renderItem={({item}) => <ThreadItem thread={item}/>}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
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
        width: 60,
        height: 90,
        borderRadius: 10,
        marginRight: 10,
    },
    outerLayer: {
        borderRadius: 10,
        borderWidth: 1,
        flexDirection: "row",
        maxHeight: Dimensions.get('window').height - 20,
        maxWidth: Dimensions.get('window').width - 20,
        overflow: "hidden",
        width: Dimensions.get('window').width - 800,
        height: Dimensions.get('window').height - 800,
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
