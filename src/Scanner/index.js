import React, { useEffect, useState } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Alert,
  PermissionsAndroid,
  BackHandler
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import {check, PERMISSIONS, openSettings, RESULTS} from 'react-native-permissions';
import { styles } from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Scanner = ({ navigation }) => {
  const [isFlash, setIsFlash] = useState(false);
  const [isBackCamera, setIsBackCamera] = useState(true);
  PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CAMERA).then(response => { console.log('hhh', response);})

  const onSuccess = e => {
    console.log({ e });
    if (e?.data) {
      if (e?.type == 'QR_CODE') {
        navigation.navigate('ScannerDetails', { scanUrl: e?.data });
      } else {
        navigation.navigate('ScannerDetails', { scanUrl: 'It not a QR code, please scan valid QR code.', isDisable: true });
      }
    }
  };

  return (
    <QRCodeScanner
      onRead={onSuccess}
      flashMode={isFlash ? RNCamera.Constants.FlashMode.torch : RNCamera.Constants.FlashMode.off}
      showMarker={true}
      reactivate={true}
      cameraType={isBackCamera ? 'back' : 'front'}
      permissionDialogTitle={'Camera'}
      permissionDialogMessage={'This application cannot run because it does not have the camera permission required for scanning. Please enable the permission.'}
      topContent={
        <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
          <Text style={styles.centerText}>Scan the QR code.</Text>
        </View>
      }
      cameraContainerStyle={{color: 'black', backgroundColor: 'gray'}}
      topViewStyle={{justifyContent: 'center', alignItems:'center', paddingBottom:30}}
      bottomViewStyle={{justifyContent: 'center', alignItems:'center', paddingTop:30}}
      bottomContent={
        <View style={{flexDirection: 'row', marginTop: 20}}>
        <TouchableOpacity style={{ marginTop: 10 }} onPress={() => setIsFlash(!isFlash)}>
          <MaterialIcons name={isFlash ? 'flash-on' : 'flash-off'} size={40} color="#000" />
        </TouchableOpacity><TouchableOpacity style={{ marginTop: 10, marginLeft: 50 }} onPress={() => setIsBackCamera(!isBackCamera)}>
          <Ionicons name={'camera-reverse'} size={40} color="#000" />
          </TouchableOpacity>
        </View>
      }
    />
  );
}

export default Scanner;