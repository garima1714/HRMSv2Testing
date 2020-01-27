import { StyleSheet, Dimensions } from 'react-native';
var width = Dimensions.get("window").width;

const styles = StyleSheet.create({
    expanded : {
        borderColor: "#B1B1B1",
        borderRightWidth : 2,
        borderLeftWidth : 2,
        height : 100,
        borderBottomWidth : 2,
        marginLeft: 15,
        marginRight: 15,
        overflow : "hidden",
        borderBottomLeftRadius : 5,
        borderBottomRightRadius : 5,
        flexDirection : "row"
    },
    day : {

    },
    date : {

    }
});

export default styles;