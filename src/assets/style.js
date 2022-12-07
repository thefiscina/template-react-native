import styled from 'styled-components';
import colors from './colors';
import { Dimensions, StyleSheet } from 'react-native';
const windowWidth = Dimensions.get('window').width / 6;
const windowHeight = Dimensions.get('window').height / 15;

export const SafeAreaView = styled.SafeAreaView`
  flex:1;
  width: ${props => (props.width ? props.width : '100%')};
  background-color:${props => (props.backgroundColor ? props.backgroundColor : '')}; 
  height: ${props => (props.height ? props.height : '100%')};
`;

export const ViewArea = styled.View`
flex-direction: ${props => (props.displayView ? props.displayView : 'row')}; 
width: ${props => (props.width ? props.width : '100%')};
justify-content: ${props => (props.justifyView ? props.justifyView : 'center')}; 
padding:${props => (props.paddingView ? props.paddingView : '0px')}; 
`;

export const Texto = styled.Text`
color: ${props => (props.color ? props.color : '#000')};
font-size :${props => (props.fontSize ? props.fontSize : '50px')};
text-align: ${props => (props.textAlign ? props.textAlign : 'center')};
`;


export const Button = styled.TouchableOpacity`
background-color:${props => (props.backgroundColor ? props.backgroundColor : '#fff')}; 
border-radius:${props => (props.borderView ? props.borderView : '10px')};
width: ${props => (props.width ? props.width : '100%')};
height: ${props => (props.height ? props.height : '50px')};
`;




export const styles_ = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 13
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
    marginVertical: 10,
  },
  elevation: {
    elevation: 10,
    shadowColor: '#515151',
  },
});