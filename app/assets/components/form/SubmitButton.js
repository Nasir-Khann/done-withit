import { StyleSheet } from "react-native";
import React from "react";
import { useFormikContext } from "formik";
import AppButton from "../AppButton";

export default function SubmitButton({ title }) {
  const { handleSubmit, isSubmitting, status } = useFormikContext();
  const disabled = isSubmitting || status?.success;

  return (
    <AppButton
      onPress={handleSubmit}
      disabled={disabled}
      style={[styles.button, disabled && styles.buttonDisabled]}
    >
      {title}
    </AppButton>
  );
}

const styles = StyleSheet.create({
  button: { marginTop: 10 },
  buttonDisabled: {
    backgroundColor: "#ff525266", // disabled color
  },
});