import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import {useEffect, useState} from 'react';
import axios from 'axios'


export function Recherche({setPage}) {

    const [pseudo, setRechercheUtilisateur] = useState('');
    const [data, setData] = useState([]);

    const login = async () => {
        try {
            const response = await axios.post('http://192.168.43.246:8080/public/users/Recherche', {
                RechercheUtilisateur,
            });

            if (response.data.status === 'success') {
                console.log('User list:', response.data.user);
                //() => setPage('menu');
            } else {
                console.error('User unfindable');
            }
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    const Valid = (f1, f2) => {
        return () => {
            f1();
            f2();
        };
    };

    return (
        <View style={[styles.Recherchecontainer, {
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
                    value={RechercheUtilisateur}
                    onChangeText={setRechercheUtilisateur}
                    placeholder="Recherche utilisateur"
                />
            </View>
            <View style={{ flex: 2,  width: '100%'}} >
            </View>
            <View style={{ flex: 7, width: '100%', alignItems: 'center', }} >
                <TouchableOpacity style={styles.button} onPress={() => setPage('adduser')}>
                    <Text style={styles.buttonText}>Lancer la recherche</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 78,  width: '100%'}} >
            </View>
    );
}

const styles = StyleSheet.create({
    recherchecontainer: {
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
