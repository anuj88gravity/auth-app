import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/features/auth/authSlice';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //hooks
    const dispatch = useDispatch();
    const { userData, isLoading } = useSelector(state => state.auth);
    console.log('login=============== user data ', userData);



    //functions
    const handlingLogin = () => {
        const params = {
            username: email,
            password: password,
        };
        console.log('param: ', params);
        dispatch(login(params));
    };



    return (
        <View>
            <Text>Login</Text>
            <TextInput
                value={email}
                placeholder='Enter Email'
                onChangeText={setEmail}
                placeholderTextColor="grey"
                autoCapitalize='none'

            />
            <TextInput
                value={password}
                placeholder='Enter Password'
                onChangeText={setPassword}
                placeholderTextColor="grey"
                autoCapitalize='none'
            />
            <Button
                isLoading={isLoading}
                title='Login'
                onPress={handlingLogin}
            />

        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({})