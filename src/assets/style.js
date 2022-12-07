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

export const LogoImg = styled.Image`  
width: ${props => (props.width ? props.width : `${windowWidth}%`)};
height: ${props => (props.height ? props.height : `${windowHeight}px`)};
margin: ${props => (props.marginView ? props.marginView : '0px')};
resize-mode: ${props => (props.resizeModeView ? props.resizeModeView : 'contain')};
border-radius:  ${props => props.borderView ? props.borderView : '0px'};

`;

export const Texto = styled.Text`
color:${props => props.color ? props.color : colors.white};
font-size:${props => props.fontSize ? props.fontSize : '16px'};
margin:${props => props.marginView ? props.marginView : '5px'};
text-align:${props => props.textAlign ? props.textAlign : 'justify'};
font-weight:${props => props.fontWeight ? props.fontWeight : '400'};
padding-left:${props => (props.paddingLeft ? props.paddingLeft : '0px')};  
padding-right:${props => (props.paddingRight ? props.paddingRight : '0px')};  
align-self:${props => (props.alignSelf ? props.alignSelf : 'auto')};  
padding:${props => (props.paddingView ? props.paddingView : '0px')}; 
font-style:${props => (props.fontStyleView ? props.fontStyleView : 'normal')}; 
width: ${props => (props.width ? props.width : 'auto')};
`;

export const ContainerFlex = styled.View`
  width: ${props => (props.width ? props.width : '100%')};
  flex: ${props => (props.flexView ? props.flexView : '1')};  
  background-color:${props => (props.backgroundColor ? props.backgroundColor : '')}; 
  padding:${props => (props.paddingView ? props.paddingView : '0px')}; 
  flex-direction:${props => (props.flexDirection ? props.flexDirection : 'row')};
  aling-items:${props => (props.alingItems ? props.alingItems : 'center')};
  justify-content:${props => (props.justifyContentView ? props.justifyContentView : 'space-between')}; 
  padding-bottom:${props => props.paddingBottomView ? props.paddingBottomView : '0px'};
  padding-top:${props => props.paddingTopView ? props.paddingTopView : '0px'};
  height:  ${props => (props.height ? props.height : 'auto')};
  position:  ${props => (props.positionView ? props.positionView : 'relative')};
  top:  ${props => (props.topView ? props.topView : '0px')};
  bottom:  ${props => (props.bottomView ? props.bottomView : '0px')};
  left:  ${props => (props.leftView ? props.leftView : '0px')};
`;

export const Container = styled.View`
  width: ${props => (props.width ? props.width : '100%')};
  background-color:${props => (props.backgroundColor ? props.backgroundColor : 'transparent')}; 
  padding:${props => (props.paddingView ? props.paddingView : '0px')}; 
  flex-direction:${props => (props.flexDirection ? props.flexDirection : 'column')};
  aling-items:${props => (props.alingItems ? props.alingItems : 'center')};
  justify-content:${props => (props.justifyContentView ? props.justifyContentView : 'center')}; 
  height:${props => (props.height ? props.height : 'auto')};
  padding-bottom:${props => props.paddingBottomView ? props.paddingBottomView : '0px'};
  margin:${props => props.marginView ? props.marginView : '0px'};
  position:  ${props => (props.positionView ? props.positionView : 'relative')};
  border-radius:  ${props => props.borderView ? props.borderView : '0px'};
`;

//LOGIN
export const HeaderLogin = styled.View`
  width: ${props => (props.width ? props.width : '100%')};
  background-color:${props => (props.backgroundColor ? props.backgroundColor : '')}; 
  padding:${props => (props.paddingView ? props.paddingView : '0px')}; 
  flex-direction:${props => (props.flexDirection ? props.flexDirection : 'column')};
  aling-items:${props => (props.alingItems ? props.alingItems : 'center')};
  justify-content:${props => (props.justifyContentView ? props.justifyContentView : 'center')}; 
  height:  ${props => (props.height ? props.height : 'auto')};
  padding-bottom:${props => props.paddingBottomView ? props.paddingBottomView : '0px'};
`;

export const ContainerInput = styled.View`  
width: ${props => (props.width ? props.width : '100%')};
border: ${props => props.borderWidth ? props.borderWidth : "1px"};
border-color:${props => props.borderColor ? props.borderColor : "#000"};
margin:${props => props.marginView ? props.marginView : '0px'};
border-radius:  ${props => props.borderView ? props.borderView : '3px'};
flex-direction:${props => (props.flexDirection ? props.flexDirection : 'row')};   
align-items: ${props => (props.alignItems ? props.alignItems : 'center')}; 
background-color:${props => (props.backgroundColor ? props.backgroundColor : '#fff')};  
padding-left:${props => (props.paddingLeft ? props.paddingLeft : '0px')};  
padding-right:${props => (props.paddingRight ? props.paddingRight : '0px')};  
margin-left:${props => (props.marginLeft ? props.marginLeft : '0px')};  
margin-right:${props => (props.marginRight ? props.marginRight : '0px')};  
padding-bottom:${props => props.paddingBottomView ? props.paddingBottomView : '0px'};
height: ${props => (props.height ? props.height : '50px')};
`;


export const Input = styled.TextInput.attrs({

})`
width: ${props => (props.width ? props.width : '100%')};
background-color:${props => (props.backgroundColor ? props.backgroundColor : 'transparent')}; 
color:${props => (props.color ? props.color : '#000')}; 
height:  ${props => (props.height ? props.height : '50px')};
`;


export const ButtonLink = styled.TouchableOpacity`
background-color:${props => (props.backgroundColor ? props.backgroundColor : 'transparent')}; 
`;


//INTERNO APP

export const Header = styled.View`
width: ${props => (props.width ? props.width : '100%')};
background-color:${props => (props.backgroundColor ? props.backgroundColor : 'transparent')}; 
padding:${props => (props.paddingView ? props.paddingView : '0px')}; 
height:  ${props => (props.height ? props.height : '100%')};
flex-direction:${props => (props.flexDirection ? props.flexDirection : 'column')};
aling-items:${props => (props.alingItems ? props.alingItems : 'center')};
justify-content:${props => (props.justifyContentView ? props.justifyContentView : 'center')}; 
height:  ${props => (props.height ? props.height : 'auto')};
padding-bottom:${props => props.paddingBottomView ? props.paddingBottomView : '0px'};
z-index:1;
`;



export const BodyContent = styled.View`
  width: ${props => (props.width ? props.width : '100%')};
  height:  ${props => (props.height ? props.height : '100%')};
  background-color:${props => (props.backgroundColor ? props.backgroundColor : '')}; 
  flex-direction:${props => (props.flexDirection ? props.flexDirection : 'column')};
  padding-bottom:${props => props.paddingBottomView ? props.paddingBottomView : '0px'};
  padding-top:${props => props.paddingTopView ? props.paddingTopView : '0px'};
`;

export const Button = styled.TouchableOpacity`
  width: ${props => (props.width ? props.width : '100%')};
  height:  ${props => (props.height ? props.height : '60px')};
  background-color: ${props => props.backgroundColor ? props.backgroundColor : ''};
  border-radius:  ${props => props.borderView ? props.borderView : '10px'};
  justify-content: ${props => props.justifyView ? props.justifyView : 'center'};
  align-items: ${props => props.alingView ? props.alingView : 'center'};
  align-self: ${props => props.alingSelfView ? props.alingSelfView : 'center'};
  margin:${props => props.marginView ? props.marginView : '0px'};
  opacity:${props => props.opacityView ? props.opacityView : '1'};
  padding:${props => (props.paddingView ? props.paddingView : '0px')}; 
`;


export const CardButton = styled.TouchableOpacity`
  width: ${props => (props.width ? props.width : '100%')};
  background-color:${props => (props.backgroundColor ? props.backgroundColor : 'transparent')}; 
  padding:${props => (props.paddingView ? props.paddingView : '0px')}; 
  flex-direction:${props => (props.flexDirection ? props.flexDirection : 'column')};
  aling-items:${props => (props.alingItems ? props.alingItems : 'center')};
  justify-content:${props => (props.justifyContentView ? props.justifyContentView : 'center')}; 
  border-width: ${props => props.borderWidthView ? props.borderWidthView : '1px'};
  border-radius:  ${props => props.borderView ? props.borderView : '1px'};
  border-color:  ${props => props.borderColorView ? props.borderColorView : '#ddd'};
  margin:${props => props.marginView ? props.marginView : '0px'};
  height:  ${props => (props.height ? props.height : '99px')};
  padding-left:${props => (props.paddingLeft ? props.paddingLeft : '0px')};  
`;


export const ContainerScroll = styled.ScrollView`
  width: ${props => (props.width ? props.width : '100%')};
  background-color:${props => (props.backgroundColor ? props.backgroundColor : '')}; 
  padding:${props => (props.paddingView ? props.paddingView : '0px')}; 
  flex-direction:${props => (props.flexDirection ? props.flexDirection : 'column')};
  aling-items:${props => (props.alingItems ? props.alingItems : 'center')};
  margin-bottom:${props => props.marginBottomView ? props.marginBottomView : '0px'};
  padding-bottom:${props => props.paddingBottomView ? props.paddingBottomView : '0px'};
  height:  ${props => (props.height ? props.height : 'auto')};
`;

export const CardButtonOperations = styled.TouchableOpacity`
  width: ${props => (props.width ? props.width : '100%')};
  background-color:${props => (props.backgroundColor ? props.backgroundColor : 'transparent')}; 
  padding:${props => (props.paddingView ? props.paddingView : '0px')}; 
  flex-direction:${props => (props.flexDirection ? props.flexDirection : 'column')};
  aling-items:${props => (props.alingItems ? props.alingItems : 'center')};
  justify-content:${props => (props.justifyContentView ? props.justifyContentView : 'center')}; 
  border-width: ${props => props.borderWidthView ? props.borderWidthView : '1px'};
  border-radius:  ${props => props.borderView ? props.borderView : '1px'};
  border-color:  ${props => props.borderColorView ? props.borderColorView : 'transparent'};
  margin:${props => props.marginView ? props.marginView : '0px'};
`;

export const ButtonContainer = styled.TouchableOpacity`
width: ${props => (props.width ? props.width : '100%')};
background-color:${props => (props.backgroundColor ? props.backgroundColor : '')}; 
padding:${props => (props.paddingView ? props.paddingView : '0px')}; 
flex-direction:${props => (props.flexDirection ? props.flexDirection : 'row')};
aling-items::${props => (props.alingItems ? props.alingItems : 'center')};
justify-content:${props => (props.justifyContentView ? props.justifyContentView : 'space-between')}; 
padding-bottom:${props => props.paddingBottomView ? props.paddingBottomView : '0px'};
height:  ${props => (props.height ? props.height : 'auto')};
position:  ${props => (props.positionView ? props.positionView : 'relative')};
top:  ${props => (props.topView ? props.topView : '0px')};
bottom:  ${props => (props.bottomView ? props.bottomView : '0px')};
left:  ${props => (props.leftView ? props.leftView : '0px')};
z-index:2;
`;

export const ContainerInputValue = styled.View`  
width: ${props => (props.width ? props.width : '100%')};
border-color:${props => props.borderColor ? props.borderColor : "#000"};
margin:${props => props.marginView ? props.marginView : '0px'};
border-radius:  ${props => props.borderView ? props.borderView : '3px'};
flex-direction:${props => (props.flexDirection ? props.flexDirection : 'row')};   
align-items: ${props => (props.alignItems ? props.alignItems : 'center')}; 
background-color:${props => (props.backgroundColor ? props.backgroundColor : '#fff')};  
padding-left:${props => (props.paddingLeft ? props.paddingLeft : '0px')};  
margin-left:${props => (props.marginLeft ? props.marginLeft : '0px')};  
margin-right:${props => (props.marginRight ? props.marginRight : '0px')};
border-bottom-color: ${props => props.borderColor ? props.borderColor : "#000"};
border-bottom-width: 1px;
`;

export const ContainerPad = styled.View`
  width: ${props => (props.width ? props.width : '100%')};
  background-color:${props => (props.backgroundColor ? props.backgroundColor : '')}; 
  padding:${props => (props.paddingView ? props.paddingView : '0px')}; 
  flex-direction:${props => (props.flexDirection ? props.flexDirection : 'column')};
  aling-items:${props => (props.alingItems ? props.alingItems : 'center')};
  justify-content:${props => (props.justifyContentView ? props.justifyContentView : 'center')}; 
  height:  ${props => (props.height ? props.height : 'auto')};
  padding-bottom:${props => props.paddingBottomView ? props.paddingBottomView : '0px'};
`;

export const ButtonPad = styled.TouchableOpacity`
width: ${props => (props.width ? props.width : '100%')};
background-color:${props => (props.backgroundColor ? props.backgroundColor : 'transparent')}; 
padding:${props => (props.paddingView ? props.paddingView : '0px')}; 
flex-direction:${props => (props.flexDirection ? props.flexDirection : 'row')};
aling-items:${props => (props.alingItems ? props.alingItems : 'center')};
justify-content:${props => (props.justifyContentView ? props.justifyContentView : 'space-between')}; 
padding-bottom:${props => props.paddingBottomView ? props.paddingBottomView : '0px'};
height:  ${props => (props.height ? props.height : 'auto')};
position:  ${props => (props.positionView ? props.positionView : 'relative')};
top:  ${props => (props.topView ? props.topView : '0px')};
bottom:  ${props => (props.bottomView ? props.bottomView : '0px')};
left:  ${props => (props.leftView ? props.leftView : '0px')};
border-radius:  ${props => props.borderView ? props.borderView : '0px'};
margin:${props => props.marginView ? props.marginView : '0px'};
`;

export const CheckboxBtn = styled.TouchableOpacity`
  width: ${props => (props.width ? props.width : '100%')};
  background-color:${props => (props.backgroundColor ? props.backgroundColor : '')}; 
  padding:${props => (props.paddingView ? props.paddingView : '0px')}; 
  flex-direction:${props => (props.flexDirection ? props.flexDirection : 'column')};
  aling-items:${props => (props.alingItems ? props.alingItems : 'center')};
  justify-content:${props => (props.justifyContentView ? props.justifyContentView : 'center')}; 
  height:  ${props => (props.height ? props.height : 'auto')};
  padding-bottom:${props => props.paddingBottomView ? props.paddingBottomView : '0px'};
  border-radius:  ${props => props.borderView ? props.borderView : '3px'};
  margin:${props => props.marginView ? props.marginView : '0px'};
`;


export const ModalBodyContent = styled.View`
  flex:1;
  justify-content:${props => (props.justifyContentView ? props.justifyContentView : 'center')}; 
  aling-items:${props => (props.alingItems ? props.alingItems : 'center')};
  background-color:${props => (props.backgroundColor ? props.backgroundColor : '#fff')}; 
`;

export const ContainerModal = styled.View`
  width: ${props => (props.width ? props.width : '100%')};
  flex: ${props => (props.flexView ? props.flexView : '1')};  
  background-color:${props => (props.backgroundColor ? props.backgroundColor : '')}; 
  padding:${props => (props.paddingView ? props.paddingView : '0px')}; 
  flex-direction:${props => (props.flexDirection ? props.flexDirection : 'row')};
  aling-items::${props => (props.alingItems ? props.alingItems : 'center')};
  justify-content:${props => (props.justifyContentView ? props.justifyContentView : 'space-between')}; 
  padding-bottom:${props => props.paddingBottomView ? props.paddingBottomView : '0px'};
  height:  ${props => (props.height ? props.height : 'auto')};
  position:  ${props => (props.positionView ? props.positionView : 'relative')};
`;


export const ModalView = styled.View`

`;

export const ContainerAbsolute = styled.View`    
  width: ${props => (props.width ? props.width : '100%')};
  height:  ${props => (props.height ? props.height : 'auto')};
  position:  ${props => (props.positionView ? props.positionView : 'relative')};
  top:  ${props => (props.topView ? props.topView : '0px')};
  bottom:  ${props => (props.bottomView ? props.bottomView : '0px')};
  right:  ${props => (props.rightView ? props.rightView : '0px')};
`;



export const ButtonMoreRows = styled.TouchableOpacity`
  width: ${props => (props.width ? props.width : '100%')};
  background-color:${props => (props.backgroundColor ? props.backgroundColor : 'transparent')}; 
  padding:${props => (props.paddingView ? props.paddingView : '0px')}; 
  flex-direction:${props => (props.flexDirection ? props.flexDirection : 'column')};
  aling-items:${props => (props.alingItems ? props.alingItems : 'center')};
  justify-content:${props => (props.justifyContentView ? props.justifyContentView : 'center')}; 
  border-width: ${props => props.borderWidthView ? props.borderWidthView : '1px'};
  border-radius:  ${props => props.borderView ? props.borderView : '1px'};
  border-color:  ${props => props.borderColorView ? props.borderColorView : '#ddd'};
  margin:${props => props.marginView ? props.marginView : '0px'};
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