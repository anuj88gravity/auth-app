import { Button, StyleSheet, Text, TextInput, View, Alert } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/features/auth/authSlice';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // hooks
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const { userData, isLoading, error } = useSelector(state => state.auth); // add error state
    console.log('login=============== user data ', userData);

    // Function to handle login
    const handlingLogin = () => {
        const params = {
            username: email,
            password: password,
        };
        console.log('param: ', params);
        dispatch(login(params));
    };

    // Watch for login success or error
    React.useEffect(() => {
        if (userData) {
            console.log('Login Successful', userData);
            navigation.navigate('CounterScreen'); // Replace with actual screen name
        }

        if (error) {
            console.error('Login failed: ', error);
            Alert.alert('Error', error, [{ text: 'OK' }]);
        }
    }, [userData, error, navigation]);

    return (
        <View style={styles.container}>
            <Text>Login</Text>
            <TextInput
                value={email}
                placeholder='Enter Email'
                onChangeText={setEmail}
                placeholderTextColor="grey"
                autoCapitalize='none'
                style={styles.input}
            />
            <TextInput
                value={password}
                placeholder='Enter Password'
                onChangeText={setPassword}
                placeholderTextColor="grey"
                autoCapitalize='none'
                style={styles.input}
                secureTextEntry // Hide password text
            />
            <Button
                title={isLoading ? 'Loading...' : 'Login'}
                onPress={handlingLogin}
                disabled={isLoading} // Disable button when loading
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'grey',
        borderWidth: 1,
        marginBottom: 12,
        paddingLeft: 8,
    }
});

export default LoginScreen;
