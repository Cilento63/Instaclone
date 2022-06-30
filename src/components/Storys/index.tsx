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

export const Storys = () => {
    return (
        <View style={[styles.container, { flexDirection: "row" }]}>
            <View >
                <Image source={ProfileIcon} />
                <Text style={styles.Text} >Seu Story</Text>
            </View>
            <View>
                <Image source={story2} />
                <Text style={styles.Text} >Juliana_r</Text>
            </View>
            <View>
                <Image source={story3} />
                <Text style={styles.Text} >Casal75</Text>
            </View>
            <View>
                <Image source={story4} />
                <Text style={styles.Text} >Traveler's</Text>
            </View>
            <View>
                <Image source={story5} />
                <Text style={styles.Text} >Lah_silva</Text>
            </View>

        </View>
    )
}