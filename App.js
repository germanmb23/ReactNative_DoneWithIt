import React, { useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import Screen from './app/components/Screen';

export default function App() {
  const requestPermission = async () => {
    //const await = await  Permissions.askAsync(Permissions.CAMERA_ROLL, Permissions.LOCATION)
    //result.granted
    //true is the user accept all permissions

    const result = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!result.granted) alert('You need to enabke permission acess');
  };

  useEffect(() => {
    requestPermission();
  }, []);

  return <Screen></Screen>;
}
