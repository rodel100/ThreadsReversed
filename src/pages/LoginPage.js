import * as React from 'react'
import { View, Button, TouchableOpacity, Pressable, Text, TextInput, ImageBackground } from "react-native";
import "../../styles.css"
import { StyleSheet } from 'react-native';

export default function LoginPage() {
    return (
        <View style={styled.flexContainer}>
            <ImageBackground style={styled.container} resizeMode="cover" imageStyle={{ height: 700 }} source={require("../../assets/jxB9GUOHTf2.webp")}>
                <Text style={styled.text}>Log in with your Instagram account</Text>
                <TextInput style={styled.textInput} type="text" placeholder={"Username, phone or email"} />
                <TextInput style={styled.textInput} type="text" placeholder={"Password"} />
                <Pressable style={styled.loginButton}><Text style={styled.loginButtonText}>Log In</Text></Pressable>
                <View style={{ flexDirection: "row" }}>
                    <Pressable style={styled.forgotPassword}><Text>Forgot password?</Text></Pressable>
                    <Pressable style={styled.forgotPassword}><Text>                          Register</Text></Pressable>
                </View>
                <Text>----------------or-------------------</Text>
                <Pressable style={styled.instagramLoginButton}><Text>Continue with Instagram</Text></Pressable>
            </ImageBackground >
            <View style={styled.footer}>
                <Text>©2023</Text>
                <Text> Threads terms</Text>
                <Text> Privacy policy</Text>
                <Text> Cookies</Text>
                <Text> Report a problem</Text>
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
        fontStyle: 'bold',
        fontSize: 20,
        padding: 10,
        fontWeight: "700",
    },
    textInput: {
        height: 40,
        padding: 10,
        borderWidth: 1,
        borderColor: "0, 0 , 0",
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
        height: 40,
        padding: 10,
        borderWidth: 1,
        borderColor: "rgba(0, 0 , 0, 0.4)",
        borderRadius: 5,
        paddingTop: 20,
        paddingBottom: 40,
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
        height: 40,
        padding: 10,
        borderWidth: 1,
        borderColor: "rgba(0, 0 , 0, 0.4)",
        borderRadius: 5,
        paddingTop: 20,
        paddingBottom: 40,
        marginTop: 20,
        marginBottom: 20,
    },
    footer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    }
});