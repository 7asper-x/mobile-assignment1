// ConfirmScreen.js
import React from 'react';
import { Text, Button, StyleSheet } from 'react-native';
import Card from '../components/Card';

const ConfirmScreen = ({ userData, onConfirm }) => {
    return (
        <>
            <Text style={styles.title}>Confirm Information</Text>
            <Card>
                <Text style={styles.label}>Email: {userData.email}</Text>
                <Text style={styles.label}>Phone Number: {userData.phone}</Text>

                <Button title="Go Back" onPress={() => onConfirm('goBack')} />
                <Button title="Confirm" onPress={() => onConfirm('confirm')} />
                <Button title="Finish Later" onPress={() => onConfirm('later')} />
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
    label: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 10,
    },
});

export default ConfirmScreen;
