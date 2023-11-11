import * as React from 'react'
import {View, Button, TouchableOpacity, Pressable, Text, TextInput} from "react-native";
import "../../styles.css"

export default function LoginPage(){
    return(
        <View>
            <Text>Place holder for picture</Text>
            <Text>Login to your Instagram</Text>
            <TextInput type="text" placeholder={"Username, phone or email"}/>
            <TextInput type="text" placeholder={"Password"}/>
            <Pressable><Text>Log In</Text></Pressable>
            <Pressable><Text>Forgot password?</Text></Pressable>
            <Pressable><Text>Continue with Instagram</Text></Pressable>
            <Text>copy</Text>
            <Text>Threads terms</Text>
            <Text>Privacy policy</Text>
            <Text>Cookies</Text>
            <Text>Report a problem</Text>
        </View>
    )
}