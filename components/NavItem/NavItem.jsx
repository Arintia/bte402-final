import {StyleSheet, View, Image, Text} from 'react-native';

const NavItem = (props) => {

    return (
        <View style={styles.itemContainer}>
            <Image 
                source={props.itemUrl}
                style={styles.itemImg}
            />
            <Text style={props.active ? styles.itemActive : styles.itemTxt}>{props.itemText}</Text>
        </View>
    );
};



const styles = StyleSheet.create({
    itemContainer: {
        display: "flex",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    itemUrl: {
        width: 30,
        height: 30
    },
    itemText: {
        color: "black",
        fontSize: 14
    },
    itemActive: {
        color: "#4B0082",
        fontSize: 14,
        fontWeight: "bold"
    }
});

export default NavItem;