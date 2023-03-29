import { Icons } from '../../../assets'
import React from 'react'
import {View, Text, TouchableOpacity, Image} from 'react-native'
import Styles from './styles'
const Header = () =>{
    return(
        <View style={Styles.header}>
        <View style={Styles.row}>
            <TouchableOpacity style={Styles.backButton}>
                <Image source={Icons.IcArrowLeft}/>
                </TouchableOpacity>
            <Text style={Styles.headerText}>
                Shoes
            </Text>
        </View>
        <TouchableOpacity style={Styles.filterButton}>
        <Image style={Styles.controlIcon} source={Icons.IcControl}/>
            </TouchableOpacity>
    </View>
    )
}
export default Header