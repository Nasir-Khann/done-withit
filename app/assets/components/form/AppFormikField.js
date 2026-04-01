import {} from "react-native";
import React from "react";
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import AppTextInput from "../AppTextInput";

export default function AppFormikField({ name, width, ...otherprops }) {
  const { setFieldValue,values,handleBlur, errors, touched } = useFormikContext();
  return (
    <>
      <AppTextInput
        width={width}
        onChangeText={text => setFieldValue(name, text)}
        value={values[name]}
        onBlur={handleBlur(name)}
        {...otherprops}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
