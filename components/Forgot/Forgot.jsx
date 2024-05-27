import { useState } from 'react';
import {View, Image, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

const Forgot = (props) => {
    const [isLogged, setLogged] = useState(false);

    const handleLogin = () => {
        setLogged(true);
    };

    return (
        <View style={styles.pageContainer}>
            <View style={isLogged ? styles.verification : styles.hiddenVerification}>
                <Image 
                    source={require('../../Assets/Images/check-mark.png')}
                />
                <Text style={styles.verificationText}>Şifre sıfırlama bağlantısı gönderildi.</Text>
            </View>
            <View style={styles.loginContainer}>
                <Image 
                    source={require('../../Assets/Images/sosyal-kalkan-logo.png')}
                    style={styles.logoImage}
                />
                <Text style={styles.pageHeader}>Merhaba!</Text>
                <Text style={styles.pageText}>Şifreni unuttuysan hesabının e-posta adresini aşağıdaki kutuya gir.</Text>
                <View style={styles.formContainer}>
                    <Text style={styles.formLabel}>E-posta</Text>
                    <TextInput style={styles.formInput} placeholder='ornek@ornek.com' />
                </View>
                <TouchableOpacity style={styles.formBtn} onPress={() => handleLogin()}><Text style={{color: "white"}}>Şifremi sıfırla</Text></TouchableOpacity>
            </View>
            <Text style={styles.bottomText}>Şifreni hatırladın mı? <TouchableOpacity style={styles.pageRedirect} onPress={() => props.setForgot(false)}><Text style={styles.bottomTextLink}>Şimdi giriş yap.</Text></TouchableOpacity></Text>
        </View>
    );
};



const styles = StyleSheet.create({
    pageContainer: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Lato-Regular",
        color: "black",
        position: "relative"
    },
    loginContainer: {
        width: "85%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    logoImage: {
        width: 150,
        height: 143,
        marginBottom: 16
    },
    pageHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: "Lato-Black",
        marginBottom: 16,
        marginTop: 0
    },
    pageText: {
        textAlign: "center",
        marginBottom: 16,
        marginTop: 0
    },
    formInput: {
        width: "100%",
        height: 45,
        borderColor: "#E3E3E3",
        borderWidth: 1,
        borderRadius: 15,
    },
    formContainer:{
        position: "relative",
        width: "100%",
        marginBottom: 16
    },  
    formLabel: {
        position: "absolute",
        background: "white",
        fontWeight: "600",
        top: -10,
        left: 15,
        width: 75,
        zIndex: 1
    },
    formBtn: {
        backgroundColor: "#4B0082",
        width: "100%",
        height: 35,
        borderRadius: 15,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    bottomText: {
        position: "absolute",
        bottom: 20
    },
    bottomTextLink: {
        textDecorationLine: "underline"
    },
    pageRedirect: {
        margin: 0,
        fontSize: 16
    },
    hiddenVerification: {
        display: "none"
    },
    verification: {
        position: "absolute",
        bottom: 120,
        backgroundColor: "#2CA667",
        width: "85%",
        height: 50,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: 16,
        borderRadius: 15
    }, 
    verificationText: {
        color: "white",
        marginLeft: 16
    }
});

export default Forgot;