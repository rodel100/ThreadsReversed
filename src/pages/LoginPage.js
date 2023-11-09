import * as React from 'react'
import {View} from "react-native";

export default function LoginPage(){
    return(
        <View>
            <text style={styles.container}></text>
            <text>Login to your Instagram</text>
            <input type="text" placeholder={"Username, phone or email"}/>
            <input type="text" placeholder={"Password"}/>
            <button>Log In</button>
            <button>Forgot password?</button>
            <button>Continue with Instagram</button>
            <text>&copy</text>
            <text>Threads terms</text>
            <text>Privacy policy</text>
            <text>Cookies</text>
            <text>Report a problem</text>
        </View>
    )
}