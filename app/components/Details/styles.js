import { StyleSheet, Dimensions } from 'react-native';
var width = Dimensions.get("window").width;

const styles = StyleSheet.create({
    detail : {
        // padding: 10,
        // marginTop: 0,
        margin: 5,
        borderColor: "#B1B1B1",
        // borderRightWidth : 2,
        // borderLeftWidth : 2,
        // height : 100,
        //  width: "80%",
        // maxWidth:"100%",
        // borderBottomWidth : 2,
        borderTopWidth : 1,
        borderBottomWidth:1,
        borderLeftWidth:1,
        borderRightWidth:1,
        // marginLeft: 20,
        // marginTop: 20,
        // marginRight: 75,
        // overflow : "hidden",
        backgroundColor:"#e6e6e6",
        borderTopLeftRadius : 5,
         borderTopRightRadius : 5,
         borderBottomLeftRadius : 5,
         borderBottomRightRadius : 5,
        flexDirection : "row"

    },
    boundary : {
        borderTopWidth: 1,
        borderColor: "#B0B0B0",
        // marginTop: 0,
        // width : "50%",
        
    },
    PlusIcon : {
        width: 20,
        height: 20,
        margin:10,
    },
    textColor : {
        color: "#808080",
        fontSize: 18,
        paddingRight:"11%",
        // paddingLeft:"2%",
        // width: "50%"
       // overflow:"hidden",
        //flexWrap:"wrap",
        alignItems:"flex-start",
        //flexDirection:"row",
        justifyContent:"space-around"
    },
    headingColor :{
        color: "#000080",
        fontSize: 15,
        // width: "80%",
        paddingRight:"14%",
        paddingLeft:"2%",
        flexWrap:"wrap",
        alignItems:"flex-start",
        flexDirection:"row",
        justifyContent:"space-around"
    }
});

export default styles;