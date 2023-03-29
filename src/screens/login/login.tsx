import React from 'react'
import { View, Text, Pressable} from 'react-native'
import Styles from './styles'
const Login = ({onPress}:{onPress:()=>void}) =>{
    return(
        <View style={Styles.container}>
            <Pressable style={Styles.loginButton} onPress={onPress}>
                <Text style={Styles.loginText}>
                    Log In
                </Text>
            </Pressable>
        </View>
    )
}
export default Login