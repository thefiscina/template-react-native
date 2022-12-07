import React, { useEffect, useState } from 'react';
import {
    Keyboard, Platform, TouchableWithoutFeedback,
    KeyboardAvoidingView
} from 'react-native';
import { useDispatch } from 'react-redux';
import { Button, Texto } from '../assets/style';
import AlertModal from '../components/Alert';
import { POST } from '../service';



const HomeScreen = ({ navigation }) => {
    const dispatch = useDispatch();

    const [nome, setNome] = useState();
    const [modalAtivo, setModalAtivo] = useState(false);

    useEffect(() => {
        setNome(``);
    }, []);



    async function loginUser(obj) {
        Keyboard.dismiss();
        try {
            POST(`auth`, obj).then((res)=>{

            }).catch((res)=>{

            })
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
                <Texto>essa tela é a home</Texto>
                <Texto>Bem-vindo {nome}</Texto>
                <Button borderView={`10px`}
                    onPress={() => {
                        setNome('fulano');
                        setModalAtivo(true)
                    }}
                >
                    <Texto fontSize={`25px`}>CLIQUE AQUI</Texto>
                </Button>

                <Button borderView={`20px`}
                    onPress={() => {
                        navigation.navigate('Login');
                    }}
                >
                    <Texto fontSize={`25px`}>VOLTAR</Texto>
                </Button>
                {
                    modalAtivo ?
                        <AlertModal
                            title={`isso é um modal`}
                            modalVisible={modalAtivo}
                            onPress={() => {
                                setModalAtivo(false);
                            }}
                        />
                        : null
                }
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
};
export default HomeScreen;

