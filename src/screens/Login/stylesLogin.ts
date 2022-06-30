import { Platform, StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 60,
        paddingHorizontal: 30,
    },
    Image: {

        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center",
        width: 260,
        height: 95,
        margin: 15,


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
        borderRadius: 10,
        tintColor: "#379cf3"
    },
    logoFacebookText: {
        color: "#379cf3",
        margin: 10,
        marginLeft: 1,
        fontWeight: "bold",
    },

    separacao: {
        borderColor: "#D0d0d0",
        borderTopWidth: 1,
        width: 500,
        margin: 130,
        marginLeft: -30,
        position: "relative"

    }
})