import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import instagram from '../../assets/images/instagram.png'
import add from '../../assets/icons/add.png'
import heart from '../../assets/icons/heart.png'
import direct from '../../assets/icons/direct.png'
import ProfileIcon from '../../assets/icons/storyProfile.png'
import story2 from '../../assets/icons/story2.png'
import story3 from '../../assets/icons/story3.png'
import story4 from '../../assets/icons/story4.png'
import story5 from '../../assets/icons/story5.png'
import { styles } from "./styles";


export const Header = () =>{
    return(
        
        <View style={styles.container1}>
            <Image style={{ marginRight: 160, margin: 5 }} source={instagram} />
            <Image style={styles.image} source={add} />
            <Image style={styles.image} source={heart} />
            <Image style={styles.image} source={direct} />
        </View>
        
    )
}