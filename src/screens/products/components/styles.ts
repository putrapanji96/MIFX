import {StyleSheet} from 'react-native'

const Styles = StyleSheet.create({
    row:{
        flexDirection: "row",
        alignItems: "center"
    },
    header:{
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: "4%",
        backgroundColor: "rgb(247, 247, 247)"
    },
    headerText:{
        fontSize: 16,
        color: "black",
        marginLeft: "12%",
        fontWeight: "bold"
    },
    backButton:{
        width: 32,
        height: 32,
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
    },
    filterButton:{
        width: 32,
        height: 32,
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
    },
    controlIcon:{
        width: 16,
        height: 16,
        resizeMode: "contain",
    },
    catergoryWrapper:{
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: "4%",
        marginTop: 40,
        marginBottom: 16
    },
    categoryList:{
        paddingVertical: 12,
        paddingHorizontal: 8,
        borderWidth: 1,
        borderColor: "rgb(242,242,242)",
        borderRadius: 8,
        marginRight: 16,
        backgroundColor: "white",
    },
    catergoryListText:{
        fontSize: 14,
        color: "black",
        fontWeight: "bold"
    },
    productCardWrapper:{
        paddingHorizontal: "4%",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between"
    },
    productCardList:{
        flexBasis: "48%",
        borderWidth: 1,
        height: 220,
        borderColor: "#FEFEFE",
        borderRadius: 8,
        marginBottom: 8,
        backgroundColor: "white",
        padding: 8,
        shadowColor: '#0000000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 2,
    },
    productCardImage:{
        width: "100%",
        height: 60,
        resizeMode: "contain",
        marginBottom: 16,
        marginTop: -10
    },
    newText:{
        fontSize: 12,
        color: "black",
        fontWeight: "bold",
    },
    outOffStockWrapper:{
        backgroundColor: "rgb(233,83,78)",
        borderRadius: 8,
        paddingVertical: 4,
        paddingHorizontal: 8
    },
    outOffStockText:{
        fontSize: 12,
        color: "white",
        fontWeight: "bold"
    },
    loveIcon:{
        width: 30,
        height: 30,
    },
    starWrapper:{
        width: "40%",
        marginTop: 16
    },
    productTitle:{
        fontSize: 14,
        color: "rgb(147,146,150)",
        marginVertical: 6,
        fontWeight: "bold"
    },
    productPrice:{
        fontSize: 18,
        fontWeight: "bold",
        color: "rgb(19,19,19)"
    },
    productDiscount:{
        backgroundColor: "rgb(245,251,252)",
        fontSize: 14,
        color: "rgb(135,137,170)",
        fontWeight: "bold",
        paddingVertical: 2,
        paddingHorizontal: 4
    }

    
})
export default Styles