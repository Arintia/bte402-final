import {Text, StyleSheet, View, Image} from 'react-native';


const About = (props) => {

    return (
        <View style={styles.about}>
            <Image 
                source={props.aboutUrl}
                style={styles.aboutImg}
            />
            <Text style={styles.aboutTxt}>{props.aboutText}</Text>
        </View>
    );
};



const styles = StyleSheet.create({
    about: {
        width: "100%",
        borderColor: "#E3E3E3",
        borderWidth: 1,
        height: 75,
        padding: 16,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 24,
        borderRadius: 15
    },
    aboutImg: {
        width: 50,
        height: 50,
        marginRight: 16
    },
    aboutTxt: {
        width: "80%",
        fontSize: 17
    }
});

export default About;