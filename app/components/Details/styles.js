import { StyleSheet, Dimensions } from 'react-native';
var width = Dimensions.get("window").width;

const styles = StyleSheet.create({
    detail : {
        padding: 0,
        marginTop: 0,
        margin: 10,
        borderColor: "#B1B1B1",
        // borderRightWidth : 2,
        // borderLeftWidth : 2,
        // height : 100,
         width: "80%",
        // maxWidth:"100%",
        // borderBottomWidth : 2,
        borderTopWidth : 2,
        // marginLeft: 20,
        marginTop: 20,
        // marginRight: 75,
        // overflow : "hidden",
        
        // borderBottomLeftRadius : 5,
        // borderBottomRightRadius : 5,
        flexDirection : "row"

    },
    boundary : {
        borderTopWidth: 1,
        borderColor: "#B0B0B0",
        marginTop: 0,
        width : "50%",
        
    },
    PlusIcon : {
        width: 20,
        height: 20,
    },
    textColor : {
        color: "#9E9E9E",
        fontSize: 22,
        // width: "80%",
        flexWrap:"wrap",
        alignItems:"flex-start",
        flexDirection:"row"
    }
});

export default styles;