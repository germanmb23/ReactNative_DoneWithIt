import { ErrorMessage, useFormikContext } from 'formik';
import React from 'react';

import { View, StyleSheet } from 'react-native';
import ImageInputList from '../ImageInputList';

function FormaImagePicker(props) {
  const {
    errors,
    setFieldValue,
    touched,
    values,
  } = useFormikContext();

  const imageUris = imageUris;

  const handleAdd = (uri) => {
    setFieldValue(name, [...imageUris, uri]);
  };

  const handleRemove = (uri) => {
    setFieldValue(
      name,
      imageUris.filter((imageUri) => imageUri !== uri),
    );
  };

  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default FormaImagePicker;
