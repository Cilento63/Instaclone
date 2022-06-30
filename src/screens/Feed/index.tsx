import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import instagram from '../../assets/images/instagram.png'
import add from '../../assets/icons/add.png'
import heart from '../../assets/icons/heart.png'
import direct from '../../assets/icons/direct.png'
import { styles } from "./styles";
import { Storys } from "../../components/Storys";
import { Header } from "../../components/Header";
import { Posts } from "../../components/Posts";


export const Feed = () => {
    return (
        <View>

            <Header />

            <Storys />

            <Posts />
        </View>




    )
}