import React, { useEffect, useState } from 'react';
import * as Permissions from 'expo-permissions';

import Screen from './app/components/Screen';
import { Button, Image } from 'react-native';
import ImageIput from './app/components/ImageIput';

export default function App() {
  const [imageUri, setImageUri] = useState();

  const requestPermission = async () => {
    //const await = await  Permissions.askAsync(Permissions.CAMERA_ROLL, Permissions.LOCATION)
    //result.granted
    //true is the user accept all permissions

    const result = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!result.granted) alert('You need to enabke permission acess');
  };

  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <Screen>
      <ImageIput
        imageUri={imageUri}
        onChangeImage={(uri) => setImageUri(uri)}
      />
    </Screen>
  );
}
