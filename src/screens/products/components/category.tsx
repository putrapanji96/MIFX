import React from 'react';
import {View, Text, FlatList} from 'react-native';
import { ICategory } from '../types';
import Styles from './styles';
const Category = ({data}:{data: ICategory[]}) => {
  return (
    <View style={Styles.catergoryWrapper}>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <View key={index} style={Styles.categoryList}>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};
export default Category;
