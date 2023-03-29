import {BASE_URL} from '@env';
import axios from 'axios';
const categoryFetch = async (token: string) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        amb_token: `${token}`,
      },
    };
    const url = BASE_URL + `/category`;
    return await axios.get(url, config);
  } catch (error) {
    return error;
  }
};
export default categoryFetch
