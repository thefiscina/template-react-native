import React from 'react';
import { TouchableHighlight, Text, View, Modal, Alert } from 'react-native';
import styles from './styles';
const AlertModal = ({ modalVisible,title='',text = 'Sem dado', buttonCancel = false, buttonText = 'ok', onPress, onPressCancel }) => (
  <Modal
    animationType="slide"
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => {
    }}
  >
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}>{title}</Text>
        <Text style={styles.modalText}>{text}</Text>

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
          <TouchableHighlight
            style={{ ...styles.openButton, backgroundColor: buttonText == "Excluir" ? '#AD0000' : '#0d4b85' }}
            onPress={onPress}
          >
            <Text style={styles.textStyle}>
              {buttonText}
            </Text>
            
          </TouchableHighlight>
          {
            buttonCancel ?
              <TouchableHighlight
                style={{ ...styles.openButtonCancel, backgroundColor: buttonText == "Excluir" ? '#0d4b85' : '#AD0000' }}
                onPress={onPressCancel}
              >
                <Text style={styles.textStyle}>
                  Cancelar
                </Text>
              </TouchableHighlight>
              : null
          }
        </View>
      </View>
    </View>
  </Modal>
);

export default AlertModal;
