import React from 'react';
import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import Styles from './styles';
import {Icons} from '../../../assets';
import StarRating from 'react-native-star-rating';
import { IProduct } from '../types';
const ProductCard = ({data}:{data: IProduct[]}) => {
  return (
    <View style={Styles.productCardWrapper}>
      {data.map((item, index) => (
        <View style={Styles.productCardList} key={index}>
          <View
            style={StyleSheet.flatten({
              ...Styles.row,
              justifyContent: 'space-between',
            })}>
            {item.new && <Text style={Styles.newText}>New</Text>}
            {item.out_of_stock && (
              <View style={Styles.outOffStockWrapper}>
                <Text style={Styles.outOffStockText}>Out of stock</Text>
              </View>
            )}
            {!item.new && !item.out_of_stock && <View />}
            <Image
              style={Styles.loveIcon}
              source={item.isFav ? Icons.IcFavoriteOn : Icons.IcFavoriteOff}
            />
          </View>
          <Image style={Styles.productCardImage} source={{uri: item.image}} />
          <View style={Styles.starWrapper}>
            <StarRating
              halfStarEnabled
              starSize={15}
              maxStars={5}
              emptyStarColor={'#DBDBDB'}
              fullStarColor={'rgb(246,210,79)'}
              rating={item.rating}
            />
          </View>
          <Text
            ellipsizeMode="tail"
            numberOfLines={2}
            style={Styles.productTitle}>
            {item.name}
          </Text>

          <View
            style={StyleSheet.flatten({
              ...Styles.row,
              justifyContent: 'space-between',
            })}>
            <Text style={Styles.productPrice}>{item.price}</Text>
            {Boolean(item.off) && (
              <Text style={Styles.productDiscount}>{item.off}</Text>
            )}
          </View>
        </View>
      ))}
    </View>
  );
};
export default ProductCard;
