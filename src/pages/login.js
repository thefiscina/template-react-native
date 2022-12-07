import React, { useEffect, useState } from 'react';
import {
    Keyboard, Platform, TouchableWithoutFeedback,
    KeyboardAvoidingView,
    Text
} from 'react-native';
import { useDispatch } from 'react-redux';



const LoginScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const [cnpj, setCnpj] = useState('');
    useEffect(() => {

    }, []);



    async function loginUser(obj) {
        Keyboard.dismiss();
        try {


        } catch (err) {
            console.log(err);

        }
    }


    return (
        <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            enabled={Platform.OS === 'ios'}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : null}
                style={{ flex: 1 }}>
                <Text>login</Text>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
};
export default LoginScreen;

