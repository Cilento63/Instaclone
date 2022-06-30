import { Platform, StyleSheet } from "react-native"


export const styles = StyleSheet.create({

    container: {
        flex:1,
        backgroundColor: '#fff',
        paddingHorizontal: 30,
    },
    texto: {

        color: "#000",
        fontSize: 25,
        fontFamily: "OpenSans-Bold",
        backgroundColor: "#fff"
    },
    input: {
        backgroundColor: 'rgba(215, 212, 214, 0.12)',
        color: '#000',
        borderWidth: 1,
        borderColor: "#9d9f9f",
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7
    },
    buttonLogin: {
        backgroundColor: "#0195f7",
        padding: 10,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 20
    },
    textLogin: {
        color: "#fff",
        fontSize: 15,
        fontWeight: "bold",
    },
    textOr: {
        color: "#9d9f9f",
        fontSize: 15,
        margin: 10,

    },
    logoFacebook: {
        width: 20,
        height: 20,
        margin: 10,
        marginLeft: 80,
        borderRadius: 8,
        tintColor: "#000"
    },
    logoFacebookText: {
        tintColor: "#000",
        margin: 10,
        marginLeft: 1,
        fontWeight: "bold",
        fontFamily: "OpenSans-Bold",
    },
    separacao: {
        position: "relative"

    }

})