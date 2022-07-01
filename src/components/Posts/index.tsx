import React from 'react';
import { Image, ScrollView, View } from 'react-native';
import post from '../../assets/images/post.png'
import post2 from '../../assets/images/post2.png'
import { styles } from './styles';

export const Posts = () => {

    return (

        <ScrollView >
            <View style={{ alignItems: 'center' }} >
                <Image style={styles.container} source={post} />
            </View>
            <View style={{ alignItems: 'center' }} >
                <Image style={styles.container1} source={post2} />
            </View>
            <View style={{ alignItems: 'center' }} >
                <Image style={styles.container} source={post} />
            </View>
            <View style={{ alignItems: 'center' }} >
                <Image style={styles.container1} source={post2} />
            </View>
        </ScrollView>
    )

}
