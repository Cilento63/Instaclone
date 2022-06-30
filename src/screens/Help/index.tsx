import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View, Image, TextInput, FlatList, Touchable, Linking } from "react-native";
import { styles } from "./stylesHelp";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Routes } from '../../routes';
import logoFacebook from "../../assets/icons/facebookIcon.webp"

type StackParamList = {
    Login: undefined;
    Help: undefined;
}


export const Help = () => {
    return (
        <View style={styles.container}>

            <Text style={[styles.texto, { margin: 10, marginLeft: -15, }]}>Ajuda para login</Text>


            <View style={{ paddingTop: 60, }}>
                <View style={{ paddingTop: 75 }}>
                    <Text style={[styles.texto, { textAlign: "center", }]}>Encontre sua conta</Text>
                    <Text style={{ margin: 5, textAlign: "center", color: "#000" }}>Insira o nome de usuário, email ou telefone vinculado á sua conta.</Text>
                </View>

                <TextInput placeholderTextColor={"#aaa"} placeholder="Usuário" style={styles.input} />
                <TouchableOpacity style={styles.buttonLogin} >
                    <Text style={styles.textLogin} >Avançar</Text>
                </TouchableOpacity>
                <Text style={styles.textOr}>━━━━━━━━━━━━━ OU ━━━━━━━━━━━━</Text>
                <View style={{ borderColor: "#9d9f9f", borderWidth: 1, flexDirection: "row" }}>
                    <Image style={styles.logoFacebook} source={logoFacebook} />
                    <Text style={[styles.logoFacebookText,{color: "#000"}]} onPress={() => Linking.openURL("https://facebook.com")} >Entrar com o Facebook</Text>

                </View>

                <Text style={{ paddingTop: 180, textAlign: "center", color: "#0195f7" }} >Não consegue redefinir sua senha?</Text>

            </View >
        </View>

    )
}
