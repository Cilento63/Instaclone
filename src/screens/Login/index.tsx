import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View, Image, TextInput, FlatList, Touchable, Linking } from "react-native";
import { styles } from "./stylesLogin";
import Instagram from "../../assets/images/instagram.webp"
import logoFacebook from "../../assets/icons/facebookIcon.webp"
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Routes } from '../../routes';
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Models";
import screen from "../../assets/images/screen.png"


export const Splash = () => {
    const navigation = useNavigation<propsStack>()
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Login")
        }, 3000);
    }, []);
    return (
        <View  >
            <Image  style={{ width: '100%', height: '100%' }} source={screen} />
        </View>
    );
};

export function Login() {


    const [password, setPassword] = useState('');
    const navigation = useNavigation<propsStack>()

    return (
        <View style={styles.container} >
            <Text style={{ paddingLeft: 110, marginTop: -25, color: "#000" }}>portugês(Brasil)
                <Text > ▽ </Text></Text>
            <Image style={styles.Image} source={Instagram} />
            <TextInput placeholderTextColor={"#aaa"} placeholder="Telefone, nome de usuário ou email" style={styles.input} ></TextInput>
            <TextInput
                placeholderTextColor={"#aaa"}
                style={styles.input}
                placeholder="Senha"
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="newPassword"
                secureTextEntry
                value={password}
                enablesReturnKeyAutomatically
                onChangeText={text => setPassword(text)}
            />
            <TouchableOpacity style={styles.buttonLogin} >
                <Text onPress={() => navigation.push('Post')} style={styles.textLogin} >Entrar</Text>
            </TouchableOpacity>

            <Text style={{ margin: 8, textAlign: "center", color: "#000" }}>Esqueceu seus dados de login?
                <Text onPress={() => navigation.push('Help')} style={{ color: "#02023d", fontWeight: "bold" }} > Obtenha ajuda para entrar.</Text>
            </Text>

            <Text style={styles.textOr}>━━━━━━━━━━━━━ OU ━━━━━━━━━━━━</Text>

            <View style={{ flexDirection: "row" }}>
                <Image style={styles.logoFacebook} source={logoFacebook} />
                <Text style={styles.logoFacebookText} onPress={() => Linking.openURL("https://facebook.com")} >Entrar com o Facebook</Text>
            </View>
            <View style={styles.separacao}>
                <Text style={{ margin: 12, textAlign: "center", marginLeft: -80, color: "#000" }} >Não tem uma conta?
                    <Text style={{ color: "#02023d", fontWeight: "bold" }}> Cadastre-se.</Text>
                </Text>
            </View>

        </View>

    )
}





