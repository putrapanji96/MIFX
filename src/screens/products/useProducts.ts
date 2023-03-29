import {useEffect, useState} from 'react';
import {ICategory, IProduct} from './types';
import {categoryFetch, fetchProducts} from '../../client'
import useLogin from '../login/useLogin';

export const useProducts = () => {
  const {data:{token}} = useLogin()
  const [category, setCategory] = useState<{
    isLoading: boolean;
    error: string;
    category: ICategory[];
  }>({isLoading: true, category: [], error: ''});
  const [products, setProducts] = useState<{
    isLoading: boolean;
    error: string;
    product: IProduct[];
  }>({isLoading: true, product: [], error: ''});

  const getProducts = async () => {
    setProducts(prev => ({
      ...prev,
      isLoading: true,
      error: '',
    }));
    try {
      const result: any = await fetchProducts(token);
      if (result && result.status === 200) {
        setProducts({isLoading: false, product: result.data, error: ''});
        return;
      }
    } catch (error) {
      setProducts(prev => ({
        ...prev,
        isLoading: false,
        error: `${error}`,
      }));
      return;
    }
  };
  const getCategory = async () => {
    setCategory(prev => ({
      ...prev,
      isLoading: true,
      error: '',
    }));
    try {
      const result: any = await categoryFetch(token);
      if (result && result.status === 200) {
        setCategory({isLoading: false, category: result.data, error: ''});
        return;
      }
    } catch (error) {
      setCategory(prev => ({
        ...prev,
        isLoading: false,
        error: `${error}`,
      }));
      return;
    }
  };
  useEffect(() => {
    getCategory();
    getProducts();
  }, []);
  return {
    data: {category, products},
    method: {},
  };
};
