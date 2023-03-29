import React from 'react';
import {ActivityIndicator, ScrollView, StyleSheet, View} from 'react-native';
import Styles from './styles';
import {Header, Category, ProductCard} from './components';
import {useProducts} from './useProducts';
const Products = () => {
  const {
    data: {category, products},
  } = useProducts();
  if (category.isLoading || products.isLoading) {
    return (
      <View
        style={StyleSheet.flatten({
          ...Styles.container,
          justifyContent: 'center',
          alignItems: 'center',
        })}>
          <ActivityIndicator size={30} color={"red"}/>
        </View>
    );
  }
  return (
    <View style={Styles.container}>
      <Header />
      <Category data={category.category} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProductCard data={products.product}/>
      </ScrollView>
    </View>
  );
};
export default Products;
