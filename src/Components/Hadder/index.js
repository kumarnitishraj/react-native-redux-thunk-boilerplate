import React, { Component } from "react";
import {
    View,
    StyleSheet,
    Text
} from 'react-native';

import { Colors, FontSize } from '../../config'

const Hadder = ({text}) => {
    return(
        
        <View style = {styles.container} >
            <View style = {styles.textView} >
                <Text style ={styles.text} >
                    {text?text:'Header'}
                </Text>
            </View>
        </View>
    
    )
}
const styles = StyleSheet.create({
    container: {
        height:50,
        width:'100%',
        backgroundColor: Colors.HEADER_COLOR,
        justifyContent:'center',
        flexDirection:'row',
    },
    textView: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    text: {
        fontSize: FontSize.HEADDER,
        fontWeight:'bold',
        color:'#FFFFFF'
    },
});

export default Hadder;