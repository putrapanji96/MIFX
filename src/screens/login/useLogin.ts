import loginSubmission from '../../client/login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
const useLogin = () => {
  const [token, setToken] = useState('')
  const handleLogin = async () => {
    try {
      const result: any = await loginSubmission();
      if (result && result.status === 200) {
        setToken(result.data.token)
        await AsyncStorage.setItem('amb_token', result.data.token)
      }
    } catch (err) {}
  };
  return {
    method: {handleLogin, setToken},
    data:{token, }
  };
};
export default useLogin;
