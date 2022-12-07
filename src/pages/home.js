import React, { useEffect, useState } from 'react';
import {
    Keyboard, Platform, TouchableWithoutFeedback,
    KeyboardAvoidingView
} from 'react-native';
import { useDispatch } from 'react-redux';



const HomeScreen = ({ navigation }) => {
    const dispatch = useDispatch();
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

            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
};
export default HomeScreen;

