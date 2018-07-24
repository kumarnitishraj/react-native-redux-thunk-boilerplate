import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

import { Colors, FontSize } from '../../config';

export default ({data}) => {

    return (
        
        <View style = {styles.card} >
            <Text style={styles.heading} >title</Text>
            <Text style={styles.content}>{data.title}</Text>
            <Text style={styles.heading} >body </Text>
            <Text style={styles.content}>{data.body}</Text>
        </View>
        
    );

}

const styles = StyleSheet.create({
    content: {
        fontSize: 16,
        fontWeight: '400',
        color: Colors.GENERIC_TEXT
    },
    heading:{
        color: Colors.HEADER_COLOR_TEXT,
        fontSize: 17,
        fontWeight: '400'
    },
    card: {
        marginTop:10,
        padding:5,
        backgroundColor: Colors.SCREEN_BACKGROUND_COLOR,
        borderRadius: 2,
        shadowColor: Colors.GENERIC_TEXT,
        shadowOpacity: 0.4,
        shadowRadius: 1,
        shadowOffset: {
            height: 1,
            width: 0.3,
        }
    }
});
