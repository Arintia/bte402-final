import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import About from '../About/About';
import NavItem from '../NavItem/NavItem';

const Homepage = (props) => {

    return (
        <View style={styles.pageContainer}>
            <Image 
                source={require('../../Assets/Images/sosyal-kalkan-logo.png')}
                style={styles.headerLogo}
            />
            <Text style={styles.firstHeader}>Hak ettiğiniz destek</Text>
            <Text style={styles.secondHeader}>parmaklarınızın ucunda</Text>
            <View style={styles.aboutContainer}>
                <About aboutUrl={require("../../Assets/Images/hand.png")} aboutText="Tamamen ücretsiz bir şekilde bir psikolojik danışman bul." />
                <About aboutUrl={require("../../Assets/Images/chat.png")} aboutText="Bir psikolojik danışmanla eşleş ve konuşmaya başla." />
                <About aboutUrl={require("../../Assets/Images/ballot.png")} aboutText="Anketlerle gününün nasıl geçtiğini danışmanlarla paylaş." />
            </View>
            <TouchableOpacity style={styles.formBtn} onPress={() => props.setCurrentPage("sohbet")}><Text style={{color: "white"}}>Hadi başlayalım!</Text></TouchableOpacity>
            <View style={styles.navbar}>
                <TouchableOpacity onPress={() => props.setCurrentPage("anasayfa")}>
                    <NavItem active={true} itemUrl={require("../../Assets/Images/anasayfa.png")} itemText="Ana sayfa" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.setCurrentPage("yararli belgeler")}>
                    <NavItem active={false} itemUrl={require("../../Assets/Images/yararli-belgeler.png")} itemText="Yararlı Belgeler" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.setCurrentPage("sohbet")}>
                    <NavItem active={false} itemUrl={require("../../Assets/Images/sohbet.png")} itemText="Sohbet" />
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
    firstHeader: {
        color: "black",
        fontWeight: "bold",
        fontSize: 32,
        marginBottom: 16
    },
    secondHeader: {
        fontWeight: "bold",
        fontSize: 32,
        color: "#4B0082",
        marginBottom: 16
    },
    aboutContainer: {
        width: "90%",
        marginBottom: 8
    },
    formBtn: {
        backgroundColor: "#4B0082",
        width: "90%",
        height: 35,
        borderRadius: 15,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
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

export default Homepage;