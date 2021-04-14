import React from 'react';
import { useFormik, useFormikContext } from 'formik';

import AppButton from '../AppButton';

function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();

  return <AppButton text={title} onPress={handleSubmit} />;
}

export default SubmitButton;
