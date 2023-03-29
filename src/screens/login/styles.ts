import {StyleSheet} from 'react-native'

const Styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
    },
    loginButton:{
        padding: 16,
        borderWidth: 1,
        borderColor: "#FEFEFE",
        borderRadius: 8,
        backgroundColor: "white",
        shadowColor: '#0000000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    loginText:{
        fontSize: 16,
        color: "black",
        fontWeight: "bold"
    }
})
export default Styles