import React from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const GradientBackground = ({ children }) => {
    return (
        <LinearGradient
            // You can change the colors array to use different colors
            colors={['#4c669f', '#3b5998', '#192f6a']}
            style={styles.background}
        >
            {children}
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: 50,
        alignItems: 'center',
    },
});

export default GradientBackground;
