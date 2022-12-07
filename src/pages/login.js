import React, { useEffect, useState } from 'react';
import {
    Keyboard, Platform, TouchableWithoutFeedback,
    KeyboardAvoidingView,
    Text,
    View,
    Image
} from 'react-native';
import { useDispatch } from 'react-redux';
import colors from '../assets/colors';
import { Button, SafeAreaView, Texto, ViewArea } from '../assets/style';



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
                <SafeAreaView backgroundColor={colors.blue_light}>
                    <ViewArea paddingView={`10px`} justifyView={`flex-end`}>
                        <Button height={'40px'} width={'40px'} borderView={`20px`} 
                        onPress={()=>{
                            navigation.navigate('Home');
                        }}
                        >
                            <Texto fontSize={`25px`}>&gt;</Texto>
                        </Button>
                    </ViewArea>
                    <ViewArea displayView={`column`}>
                        <Texto color={`#fff`} fontSize={`90px`}>Let`s</Texto>
                        <Texto color={`#fff`} fontSize={`120px`}> GO </Texto>
                        <Texto color={`#fff`} fontSize={`90px`} >Travel</Texto>
                    </ViewArea>
                </SafeAreaView>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
};
export default LoginScreen;

