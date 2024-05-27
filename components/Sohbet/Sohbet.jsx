import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import NavItem from '../NavItem/NavItem';

const Sohbet = (props) => {

    return (
        <View style={styles.pageContainer}>
            <Image 
                source={require('../../Assets/Images/sosyal-kalkan-logo.png')}
                style={styles.headerLogo}
            />
            <Text>Sohbet</Text>
            <View style={styles.navbar}>
                <TouchableOpacity onPress={() => props.setCurrentPage("anasayfa")}>
                    <NavItem active={false} itemUrl={require("../../Assets/Images/anasayfa-secilmemis.png")} itemText="Ana sayfa" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.setCurrentPage("yararli belgeler")}>
                    <NavItem active={false} itemUrl={require("../../Assets/Images/yararli-belgeler.png")} itemText="Yararlı Belgeler" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.setCurrentPage("sohbet")}>
                    <NavItem active={true} itemUrl={require("../../Assets/Images/sohbet-secilmis.png")} itemText="Sohbet" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.setCurrentPage("anket")}>
                    <NavItem active={false} itemUrl={require("../../Assets/Images/anket.png")} itemText="Anket" />
                </TouchableOpacity>
            </View>
        </View>
    );
};



const styles = StyleSheet.create({
    pageContainer: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative"
    },
    headerLogo: {
        height: 75,
        width: 75,
        position: "absolute",
        top: 0,
        left: 15
    },  
    navbar: {
        width: "100%",
        height: 60,
        position: "absolute",
        bottom: 0,
        borderTopColor: "#E3E3E3",
        borderTopWidth: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly"
    }
});

export default Sohbet;