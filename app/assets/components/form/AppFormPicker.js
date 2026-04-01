import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useFormikContext } from "formik";
import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";

export default function AppFormPicker({ items, name, numberOfColumns=1, PickerItemComponent, placeholder, width }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        width= {width} // width directly goes to AppPicker which we are Reciving From ListEditScreen
        items={items} // All the data we want to show
        PickerItemComponent={PickerItemComponent} // who component reciving From ListEditScreen
        numberOfColumns={numberOfColumns} // number of Columns
        onSelectItem={(item) => {
          setFieldValue(name, item); // When Item is Selected, name which is Category and value null, 
        }}                           // set to Category: {Object Data}
        placeholder={placeholder}
        selectedItem={values[name]} // selectedItem = null; here intially it has null beacuse
        //  we have defined it null AppForm that contains Formik and Formik intialValues
      />

      {/* shows Error if erros[name] == erros[category] has Error */}
      <ErrorMessage error={errors[name]} visible={touched[name]} /> 
    </>
  );
}

const styles = StyleSheet.create({});
