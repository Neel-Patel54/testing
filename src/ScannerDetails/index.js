import React from 'react';
import { Linking, Text, TouchableOpacity, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { styles } from './styles';

const ScannerDetails = ({ navigation, route }) => {
  const { scanUrl, isDisable } = route.params;
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{color: 'black', fontSize: 22, marginBottom: 5}}>Qr link: click and visit</Text>
      <TouchableOpacity style={{marginHorizontal: 10}} onPress={() => Linking.openURL(scanUrl)} disabled={isDisable}>
        <Text style={{ color: 'black', textAlign: 'center' }}>{scanUrl}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Scanner')} style={{borderWidth:1, marginVertical: 10, backgroundColor: 'black', borderRadius: 8, padding: 10}}>
        <Text style={{ color: 'white', textAlign: 'center', fontSize: 18 }}>Scan again</Text>
      </TouchableOpacity>
      <QRCode
        value={scanUrl}
      />
    </View>
  );
}

export default ScannerDetails;

// const openPermissionBox = () => {
//   console.log('777');
//   PermissionsAndroid.request(
//     PermissionsAndroid.PERMISSIONS.CAMERA)
//   // request(PERMISSIONS.ANDROID.CAMERA)
//   .then((result) => {
//     console.log('123', result);
//     if ('granted' === PermissionsAndroid.RESULTS.GRANTED) {
//       setShow(false);
//       console.log("You can use the camera");
//     } else {
//       setShow(true);
//       console.log("Camera permission denied");
//     }
//   })
//   .catch((error) => {
//     setShow(true);
//     console.log({error});
//   });
// }

// useEffect(() => {
//   PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CAMERA).then(response => { 
//     console.log('99999', response);
//     if(!response) {
//       setShow(true);
//       console.log('5555555');
//       Alert.alert(
//         'Camera',
//         'This application cannot run because it does not have the camera permission required for scanning. Please enable the permission.',
//         [
//           {
//             text: "Cancel", onPress: () => BackHandler.exitApp()
//           },
//           {
//             text: "OK", onPress: () => openPermissionBox()
//           }
//         ]
//       );
//     }
//   });
// }, [true]);