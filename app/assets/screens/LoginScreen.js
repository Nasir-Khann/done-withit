import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import * as yup from 'yup';

import Screen from '../components/Screen';
import {AppForm, SubmitButton, AppFormikField} from '../components/form'

const validationSchema =yup.object().shape({
    email:yup.string().required().email().label('Email'),
    password:yup.string().required().min(4).label('Password')
})

export default function LoginScreen() {
  return (
    <Screen>
        <Image 
            style={styles.logo}
            source={require('../logoD-remove.png')}
        />
        <AppForm
            initialValues={{email:'', password:''}}
            onSubmit={values => console.log(values)}
            validationSchema={validationSchema}
        >
            <AppFormikField
                autoCapitalize='none'
                autoCorrect={false}
                keyboardType='email-address'
                icon='email'
                name='email'
                placeholder='Email'
                textContentType="emailAddress"
            />
            <AppFormikField
                autoCapitalize='none'
                autoCorrect={false}
                keyboardType='default'
                icon='lock'
                name='password'
                placeholder='Password'
                secureTextEntry={true}
                textContentType="password"
            />
            <SubmitButton title='Login' />
        </AppForm>
    </Screen>
  )
}

const styles = StyleSheet.create({
    logo:{
        width:150,
        height:150,
        marginTop:50,
        alignSelf:'center'
    },
})