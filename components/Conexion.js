import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import {useState} from 'react';
import axios from 'axios'



export function Conexion({setPage,setUser}) {

    const [pseudo, setPseudo] = useState('');
    const [mdp, setmdp] = useState('');

    const login = async () => {
        try {
            const response = await axios.post('http://192.168.43.246:8080/public/users/login', {
                pseudo,
                mdp
            });

            if (response.data.status === 'success') {
                console.log('User authenticated:', response.data.user.pseudo);
                setUser(response.data.user.pseudo);
                setPage('menu');
            } else {
                console.error('Authentication error:', response.data.message);
            }
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    return (
        <View style={[styles.conexioncontainer, {
            flexDirection: "column"
        }]}>
            <View style={{ flex: 5, backgroundColor: "#e21616", width: '100%'}} >
            </View>
            <View style={{alignItems: 'center', flex: 5, backgroundColor: "#e21616", width: '100%' }} >
                <Text style={{ fontSize: 20, color: '#ffffff' }}>Nouvel Utilisateur</Text>
            </View>
            <View style={{ flex: 5, width: '100%'}} >
            </View>
            <View style={{width: '100%', alignItems: 'center',}}>
                <TextInput
                    style={styles.input}
                    value={pseudo}
                    onChangeText={setPseudo}
                    placeholder="Pseudo"
                />
            </View>
            <View style={{ flex: 2,  width: '100%'}} >
            </View>
            <View style={{width: '100%', alignItems: 'center',}}>
                <TextInput
                    style={styles.input}
                    value={mdp}
                    onChangeText={setmdp}
                    placeholder="Mot de passe"
                />
            </View>
            <View style={{ flex: 2,  width: '100%'}} >
            </View>
            <View style={{ flex: 7, width: '100%', alignItems: 'center', }} >
                <TouchableOpacity style={styles.button} onPress={() => setPage('adduser')}>
                    <Text style={styles.buttonText}>Nouvel Utilisateur</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 78,  width: '100%'}} >
            </View>
            <View style={{ flex: 7, width: '100%', alignItems: 'center', }} >
                <TouchableOpacity style={styles.buttonValid} onPress={login}>
                    <Text style={styles.buttonText}>Valider</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    conexioncontainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#e21616' ,
        borderRadius:10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    buttonValid: {
        backgroundColor: '#29c51d' ,
        borderRadius:10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    input: {
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        justifyContent: 'center',
    },
});
