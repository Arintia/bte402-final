import { useState } from 'react';
import {View, Image, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

const Register = (props) => {
    const [revealPassword, setReveal] = useState(false);
    const [isLogged, setLogged] = useState(false);

    const handleLogin = () => {
        setLogged(true);
        setTimeout(() => {
            props.setCurrentPage("giris");
        }, 2000); 
    };

    return (
        <View style={styles.pageContainer}>
            <View style={isLogged ? styles.verification : styles.hiddenVerification}>
                <Image 
                    source={require('../../Assets/Images/check-mark.png')}
                />
                <Text style={styles.verificationText}>Başarıyla kayıt oldunuz, yönlendiriliyorsunuz...</Text>
            </View>
            <View style={styles.loginContainer}>
                <Image 
                    source={require('../../Assets/Images/sosyal-kalkan-logo.png')}
                    style={styles.logoImage}
                />
                <Text style={styles.pageHeader}>Aramıza Hoşgeldin!</Text>
                <Text style={styles.pageText}>Yeni bir hesap oluşturmak için aşağıya bilgilerini gir.</Text>
                <View style={styles.formContainer}>
                    <Text style={styles.formLabel}>E-posta</Text>
                    <TextInput style={styles.formInput} placeholder='ornek@ornek.com' />
                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.formLabel}>Şifre</Text>
                    <TextInput style={styles.formInput} secureTextEntry={revealPassword ? false : true} placeholder="Şifre" />
                    <TouchableOpacity style={styles.passwordReveal} onPress={() => setReveal(!revealPassword)}><Image source={require('../../Assets/Images/eye.png')} /></TouchableOpacity>
                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.formLabel}>Ad Soyad</Text>
                    <TextInput style={styles.formInput} placeholder="Ad Soyad" />
                </View>
                <TouchableOpacity style={styles.formBtn} onPress={() => handleLogin()}><Text style={{color: "white"}}>Kayıt Ol</Text></TouchableOpacity>
            </View>
            <Text style={styles.bottomText}>Zaten bir hesabın var mı? <TouchableOpacity style={styles.pageRedirect} onPress={() => props.setCurrentPage("giris")}><Text style={styles.bottomTextLink}>Giriş yap.</Text></TouchableOpacity></Text>
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
    bottomTextContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 16
    },
    rememberContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    rememberCircle: {
        width: 16,
        height: 16,
        marginRight: 5,
        border: "#E3E3E3",
        borderWidth: 1,
        borderRadius: 5
    },
    forgotPassword: {
        fontWeight: "bold"
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
    passwordReveal: {
        position: "absolute",
        right: 15,
        top: 15
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

export default Register;