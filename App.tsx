import React, { useEffect } from 'react';
import {Products, Login} from './src/screens';
import {StyleSheet, StatusBar, SafeAreaView, } from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useLogin from './src/screens/login/useLogin';


const App = () => {
  const {data:{token},method:{handleLogin, setToken}} = useLogin()
  useEffect(()=>{
    const getToken = async () =>{
      try{
        const value = await AsyncStorage.getItem('amb_token')
        if(value){
          setToken(value)
        }
      }catch(err){

      }
    }
    getToken()
  },[token])
  return (
    <SafeAreaView
      style={StyleSheet.flatten({flex: 1, backgroundColor: Colors.lighter})}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.lighter} />
      {Boolean(token)?
      <Products /> 
      :
      <Login onPress={handleLogin}/>
      }
     
   
    </SafeAreaView>
  );
};
export default App;
