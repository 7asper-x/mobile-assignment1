// FinishScreen.js
import React from 'react';
import { Text, Button, Image, StyleSheet } from 'react-native';
import Card from '../components/Card';

const FinishScreen = ({ userData, status, onFinish }) => {
    const imageUrl = status === 'finish'
        ? `https://picsum.photos/id/${userData.phone.slice(-1)}/100/100`
        : require('../assets/goodbye.png'); // Add path to your local image

    const message = status === 'finish' ? 'Thank you!' : 'Sorry!';

    return (
        <>
            <Text style={styles.title}>Finish Sign Up</Text>
            <Card>
                <Text style={styles.message}>{message}</Text>
                <Image style={styles.image} source={status === 'finish' ? { uri: imageUrl } : imageUrl} />
                <Button title="Start Over" onPress={onFinish} />
            </Card>
        </>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20,
    },
    message: {
        fontSize: 24,
        fontWeight: '600',
        marginBottom: 10,
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
});

export default FinishScreen;
