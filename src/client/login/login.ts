import {BASE_URL} from '@env';
import axios from 'axios';

const loginSubmission = async () => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    };
    const data = {
      email: 'user@test.io',
      password: 'Test123.',
    };
    const url = BASE_URL + `/login`;
    return await axios.post(url, data, config);
  } catch (error) {
    return error;
  }
};
export default loginSubmission;
