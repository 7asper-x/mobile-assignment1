import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = (props) => {
    return <View style={{...styles.card, ...props.style}}>{props.children}</View>
};

const styles = StyleSheet.create({
    card: {
        shadowColor: 'rgba(0,0,0, 0.5)', // semi-transparent black
        shadowOffset: { width: 5, height: 5 }, // shadow to bottom
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5, // for Android shadow
        padding: 20,
        borderRadius: 15, // rounded corners
        backgroundColor: '#ffffff', // white background
        justifyContent: 'center', // center items vertically if possible
        alignItems: 'center', // center items horizontally if possible
        margin: 10, // space around the card
        width: '80%',
        height: '55%',
    },
});

export default Card;
