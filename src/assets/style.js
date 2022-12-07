import styled from 'styled-components';
import colors from './colors';
import { Dimensions, StyleSheet } from 'react-native';
const windowWidth = Dimensions.get('window').width / 6;
const windowHeight = Dimensions.get('window').height / 15;

export const SafeAreaView = styled.SafeAreaView`
  width: ${props => (props.width ? props.width : '100%')};
  background-color:${props => (props.backgroundColor ? props.backgroundColor : '')}; 
  height: ${props => (props.height ? props.height : '100%')};
`;

export const styles_ = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 13,
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