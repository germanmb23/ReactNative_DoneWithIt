import { Formik } from 'formik';
import React from 'react';

function AppForm({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}) {
  return (
    <Formik
      initialValues={{ initialValues }}
      onSubmit={onSubmit}
      validationSchema={valdationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
}

export default AppForm;
