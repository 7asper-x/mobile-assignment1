import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import Card from '../components/Card';

const StartScreen = ({onSubmit}) => {
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');

    const validateEmail = (value) => {
        let error = '';
        if (value.trim() === '') {
            error = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(value)) {
            error = 'Please enter a valid email address.';
        }
        setEmailError(error);
        return error;
    };

    const validatePhoneNumber = (value) => {
        let error = '';
        if (value.trim() === '') {
            error = 'Phone number is required.';
        } else if (!/^\d{10}$/.test(value)) {
            error = 'Please enter a valid phone number.';
        }
        setPhoneNumberError(error);
        return error;
    };

    const handleSubmit = () => {
        const emailErr = validateEmail(email);
        const phoneErr = validatePhoneNumber(phoneNumber);
        if (!emailErr && !phoneErr) {
            // If both inputs are valid, navigate to the next screen
            onSubmit({email: email, phone: phoneNumber});
        }
    };

    const handleReset = () => {
        setEmail('');
        setPhoneNumber('');
        setEmailError('');
        setPhoneNumberError('');
    };

    return (
        <>
            <Text style={styles.title}>Sign Up</Text>
            <Card style={styles.card}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    onBlur={() => validateEmail(email)}
                    autoCapitalize="none"
                    keyboardType="email-address"
                />
                {emailError ? <Text style={styles.error}>{emailError}</Text> : null}

                <Text style={styles.label}>Phone Number</Text>
                <TextInput
                    style={styles.input}
                    value={phoneNumber}
                    onChangeText={(text) => setPhoneNumber(text)}
                    onBlur={() => validatePhoneNumber(phoneNumber)}
                    keyboardType="number-pad"
                />
                {phoneNumberError ? <Text style={styles.error}>{phoneNumberError}</Text> : null}

                <View style={styles.buttonContainer}>
                    <Button title="Reset" onPress={handleReset}/>
                    <Button title="Sign up" onPress={handleSubmit}/>
                </View>
            </Card>
        </>

    );
};

const styles = StyleSheet.create({
    card: {
        padding: 10,
    }, buttonContainer: {
        flexDirection: 'row', justifyContent: 'space-between', width: '100%',
    }, input: {
        height: 40, borderColor: 'gray', borderBottomWidth: 1, marginBottom: 10, width: '100%', // This will make the input take the full width of the Card
        padding: 10,
    }, error: {
        color: 'red',
    }, title: {
        fontSize: 32, fontWeight: 'bold', color: '#fff', marginBottom: 20,
    },
    label: {
        alignSelf: 'stretch',
        textAlign: 'left',
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 5,
    },
});

export default StartScreen;
