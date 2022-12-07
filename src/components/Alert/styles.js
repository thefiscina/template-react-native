import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  openButton: {
    backgroundColor: "#0d4b85",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    margin: 2
  },
  openButtonCancel: {
    backgroundColor: "#AD0000",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    margin: 2
  },
  textStyle: {
    color: '#fff',    
  },
  modalText: {
    color:'#000',
    marginBottom: 15,
    textAlign: "center",
    // fontFamily: 'Montserrat-Regular',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },

});

export default styles;
