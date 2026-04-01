import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as yup from 'yup'
;


import { AppForm, AppFormikField, SubmitButton } from '../components/form';
import Screen from '../components/Screen';

const ValidationSchema = yup.object().shape({
    name: yup.string().min(6).required(),
    email:yup.string().email().required(),
    password:yup.string().required("Password is required")
    .min(8, "Min 8 characters")
    .matches(/[a-z]/, "1 lowercase required")
    .matches(/[A-Z]/, "1 uppercase required")
    .matches(/\d/, "1 number required")
    .matches(/[!@#$%^&*]/, "1 special char required"),
})

function RegisterScreen() {
return (
    <Screen>
    <AppForm initialValues=
        {{ name: "",
        email: "", 
        password: "" 
        }}
        onSubmit={(values) => {
        console.log("Values:", values);
}}
        validationSchema={ValidationSchema}
        >

        <AppFormikField name='name' icon='account' placeholder='Name'/>
        <AppFormikField name='email' icon='account' placeholder='Email'/>
        <AppFormikField name='password' icon='lock' placeholder='Password'/>
        <SubmitButton  title="Register"/>
    </AppForm>
    </Screen>
);
}
const styles = StyleSheet.create({
container:{},
});

export default RegisterScreen