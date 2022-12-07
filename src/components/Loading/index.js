import React from 'react';
import { ActivityIndicator } from 'react-native';
import { StyleSheet, View, Image } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
const Loading = ({ status = false }) => (
  status ?
    <View style={{ flex: 1, position: 'absolute', zIndex: 9999, width: '100%', height: '120%', backgroundColor: 'transparent' }}>
      <Spinner
        style={styles.spinnerStyle}
        visible={status}
        textContent={''}
        overlayColor="rgba(0, 0, 0, 0.25)"
        color="white"
        size="large"
        textStyle={styles.spinner}
      />
    </View>
    : null


);

const styles = StyleSheet.create({
  spinnerStyle: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  spinner: {
    color: '#ffffff',
  },
  containerLogo: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: -100,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconLogo: {
    width: 220, height: 70
  },
  sectionLoading: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%', bottom: '10%', backgroundColor: '#182e67' }
});

export default Loading;
