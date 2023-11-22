import * as React from 'react'
import { Image, View, Button, TouchableOpacity, Pressable, Text, TextInput, ImageBackground } from "react-native";
import { StyleSheet } from 'react-native';


export default function LoginPage({navigation}) {
    return (
        <View style={styled.flexContainer}>
            <ImageBackground style={styled.container} resizeMode="contain" imageStyle={{ height: 300 }} source={require("../../assets/jxB9GUOHTf2.webp")}>
                <Text style={styled.text}>Log in with your Instagram account</Text>
                <TextInput style={styled.textInput} type="text" placeholder={"Username, phone or email"} />
                <TextInput style={styled.textInput} type="text" placeholder={"Password"} />
                <Pressable style={styled.loginButton}><Text style={styled.loginButtonText}>Log in</Text></Pressable>
                <View style={{ flexDirection: "row" }}>
                    <Pressable style={styled.forgotPassword}><Text>Forgot password?</Text></Pressable>
                    <Pressable style={styled.forgotPassword}><Text>  Register</Text></Pressable>
                </View>
                <Text>----------------or-------------------</Text>
                <Pressable style={styled.instagramLoginButton} onPress={() => navigation.navigate('ThreadsMainPage')}><Image style={styled.instagramLogoLoginIcon} source={require("../../assets/Instagram-Icon.png")} /><Text style={styled.instagramLoginText}>Continue with Instagram</Text></Pressable>
            </ImageBackground >
            <View style={styled.footer}>
                <Pressable>
                    <Text>©2023</Text>
                </Pressable>
                <Pressable>
                    <Text> Threads terms</Text>
                </Pressable>
                <Pressable>
                    <Text> Privacy policy</Text>
                </Pressable>
                <Pressable>
                    <Text> Cookies</Text>
                </Pressable>
                <Pressable>
                    <Text> Report a problem</Text>
                </Pressable>
            </View>
        </View>


    )
}

const styled = StyleSheet.create({
    flexContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        padding: 10,
        fontWeight: "700",
    },
    textInput: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "transparent",
        color: "rgb(243,245,247)",
        backgroundColor: "rgb(30, 30, 30)",
        width: 400,
        paddingTop: 30,
        paddingBottom: 30,
        marginTop: 5,
    },
    loginButton: {
        width: 400,
        padding: 10,
        borderWidth: 1,
        borderColor: "rgba(0, 0 , 0, 0.4)",
        borderRadius: 5,
        paddingTop: 20,
        paddingBottom: 20,
        marginTop: 5,
        textAlign: "center",
    },
    loginButtonText: {
        textAlign: "center"
    },
    forgotPassword: {
        color: "rgb(119,119,119)",
        marginTop: 10,
        marginBottom: 10,
        fontSize: 14,
    },
    instagramLoginButton: {
        width: 400,
        padding: 10,
        borderWidth: 1,
        borderColor: "rgba(0, 0 , 0, 0.4)",
        color: "black",
        borderRadius: 5,
        paddingTop: 20,
        paddingBottom: 20,
        marginTop: 20,
        marginBottom: 20,
        textAlign: "center",
        flexDirection: "row",
    },
    instagramLoginText: {
        flex: 3
    },
    instagramLogoLoginIcon: {
        flex: 1,
        width: 30,
        height: 20,
        resizeMode: "contain",
    },
    footer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    }
});