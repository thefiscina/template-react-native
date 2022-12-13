import React, { useEffect, useState } from 'react';
import {
    Keyboard, Platform, TouchableWithoutFeedback,
    KeyboardAvoidingView,
    Text,
    View,
    Image,
    ImageBackground
} from 'react-native';
import { useDispatch } from 'react-redux';
import colors from '../assets/colors';
import { Button, SafeAreaView, styles_, Texto, ViewArea } from '../assets/style';
import imgBg from '../assets/img/bg2.webp';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

const LoginScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const [cnpj, setCnpj] = useState('');
    const image = { uri: "https://reactjs.org/logo-og.png" };

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
                <ImageBackground source={imgBg} resizeMode="cover" style={styles_.image}>
                    <LinearGradient colors={['#4c669f61', '#3b599862', '#192f6a']} style={styles_.linearGradient}>
                        <SafeAreaView>
                            <ViewArea paddingView={`10px`} justifyView={`flex-end`}>
                                <Button height={'40px'} width={'40px'} borderView={`20px`}
                                    onPress={() => {
                                        navigation.navigate('Home');
                                    }}
                                >
                                    <Icon name="rocket" size={30} color="#900" />
                                </Button>
                            </ViewArea>
                            <ViewArea displayView={`column`}>
                                <Texto color={`#fff`} fontSize={`90px`}>Let`s</Texto>
                                <Texto color={`#fff`} fontSize={`120px`}> GO </Texto>
                                <Texto color={`#fff`} fontSize={`90px`} >Travel</Texto>
                            </ViewArea>
                        </SafeAreaView>
                    </LinearGradient>
                </ImageBackground>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
};
export default LoginScreen;

