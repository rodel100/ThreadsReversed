import * as React from 'react'
import { View, Button, TouchableOpacity, Pressable, Text, TextInput, ImageBackground } from "react-native";
import "../../styles.css"
import { StyleSheet } from 'react-native';

export default function LoginPage() {
    return (
            <ImageBackground style={styled.container} source={require("../../assets/jxB9GUOHTf2.webp")}>
                    <Text style={styled.text}>Login to your Instagram</Text>
                    <TextInput style={styled.textInput} type="text" placeholder={"Username, phone or email"} />
                    <TextInput style={styled.textInput} type="text" placeholder={"Password"} />
                    <Pressable><Text>Log In</Text></Pressable>
                    <Pressable><Text>Forgot password?</Text></Pressable>
                    <Pressable><Text>Continue with Instagram</Text></Pressable>
                    <Text>copy</Text>
                    <Text>Threads terms</Text>
                    <Text>Privacy policy</Text>
                    <Text>Cookies</Text>
                    <Text>Report a problem</Text>
            </ImageBackground >
    )
}

const styled = StyleSheet.create({
    flexContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
    },
    text: {
        fontStyle: 'bold',
        fontSize: 20,
        padding: 10,
    },
    textInput: {
        width: 200,
        height: 40,
        padding: 10,
        borderWidth: 1,
        borderColor: "0, 0 , 0, 0.15",
        borderRadius: 5,
        borderColor: "transparent",
        color: "243, 245, 247",
        backgroundColor: "0, 0, 0, 0.15",

    }
});