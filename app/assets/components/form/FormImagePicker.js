import React from 'react'
import { useFormikContext } from 'formik';


import ImageInputList from '../ImageInputList';
import ErrorMessage from './ErrorMessage';

function FormImagePicker({name}) {
     const { setFieldValue, errors, touched, values } = useFormikContext();
     const onAddImage = (uri) => {
      setFieldValue(name,[...values[name], uri])
    }

    const onRemoveImage = (uri) => {
      setFieldValue(name,values[name].filter(imageUri => imageUri!==uri))
    }

    return (
        <>
            <ImageInputList 
                imageUris={values[name]}
                onAddImage={onAddImage}
                onRemoveImage={onRemoveImage}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
);
}


export default FormImagePicker