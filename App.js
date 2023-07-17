import React, {useState} from 'react';
import StartScreen from './screens/StartScreen';
import ConfirmScreen from './screens/ConfirmScreen';
import FinishScreen from './screens/FinishScreen';
import GradientBackground from './components/GradientBackground';
import {KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, StyleSheet} from 'react-native';

export default function App() {
    const [screen, setScreen] = useState('start');
    const [userData, setUserData] = useState({email: '', phone: ''});

    const handleDataSubmit = (data) => {
        setUserData(data);
        setScreen('confirm');
    };

    const handleNavigation = (choice) => {
        if (choice === 'goBack') {
            setScreen('start');
        } else if (choice === 'confirm') {
            setScreen('finish');
        } else if (choice === 'later') {
            setScreen('finishLater');
        }
    };

    const resetProcess = () => {
        setScreen('start');
        setUserData({email: '', phone: ''});
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.container}
            >
                <GradientBackground>
                    {screen === 'start' && <StartScreen onSubmit={handleDataSubmit}/>}
                    {screen === 'confirm' && (
                        <ConfirmScreen userData={userData} onConfirm={handleNavigation}/>
                    )}
                    {(screen === 'finish' || screen === 'finishLater') && (
                        <FinishScreen
                            userData={userData}
                            status={screen}
                            onFinish={resetProcess}
                        />
                    )}
                </GradientBackground>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
