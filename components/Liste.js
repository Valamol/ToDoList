import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { useState } from 'react';
import DateTimePicker, {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import axios from 'axios'


export function Liste({setPage, user, userID}) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState(new Date());

    const setList = async () => {
        try {
            let dateF = date.toISOString().split('T')[0];
            let timeF = date.toISOString().split('T')[1].split(".")[0];
            console.log(timeF, dateF);
            let reponse = await axios.post('http://192.168.43.246:8080/public/taches/', { name, date:dateF, timeF, description, user: userID});
            setName('');
            setDescription('');
            setPage('menu');
        } catch (error) {
            console.error('Error adding tache:', error);
        }
    };

    const showMode = (currentMode) => {
        DateTimePickerAndroid.open({
            value: date,
            onChange,
            mode: currentMode,
            is24Hour: true,
        });
    };

    const onChange = (event, selectedDate) => {
        setDate(selectedDate);
    };

    return (
        <View style={[styles.listecontainer, {
            flexDirection: "column"
        }]}>
            <View style={{ flex: 5, backgroundColor: "#e21616", width: '100%'}} >
            </View>
            <View style={{flexDirection: "row", alignItems: 'center', flex: 10, backgroundColor: "#e21616", width: '100%' }} >
                <Text style={{flex: 1, fontSize: 20, color: '#ffffff', padding: 5 }}>Ajout de tache</Text>
                <Text style={{flex: 1, fontSize: 10, color: '#ffffff', textAlign: "right", padding: 5 }}>{user}</Text>
            </View>
            <View style={{ flex: 5, width: '100%'}} >
            </View>
            <View style={{width: '100%', alignItems: 'center',}}>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                    placeholder="Nom"
                />
            </View>
            <View style={{ flex: 2,  width: '100%'}} >
            </View>
            <View style={{width: '100%', alignItems: 'center',}}>
                <TextInput
                    style={styles.input}
                    value={description}
                    onChangeText={setDescription}
                    placeholder="Description"
                />
            </View>
            <View style={{ flex: 2,  width: '100%'}} >
            </View>
            <View style={{flex: 7, width: '100%', alignItems: 'center',}}>
                <TouchableOpacity style={styles.button} onPress={() => showMode('date')}>
                    <Text style={styles.buttonText}>Date</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 2,  width: '100%'}} >
            </View>
            <View style={{flex: 7, width: '100%', alignItems: 'center',}}>
                <TouchableOpacity style={styles.button} onPress={() => showMode('time')}>
                <Text style={styles.buttonText}>Heure</Text>
            </TouchableOpacity>
            </View>


            <View style={{ flex: 76, backgroundColor: "#ffffff", width: '100%'}} >
            </View>
            <View style={{ flex: 7, width: '100%', alignItems: 'center', }} >
                <TouchableOpacity style={styles.buttonValid} onPress={setList}>
                    <Text style={styles.buttonText}>Ajouter Tâche</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 2, backgroundColor: "#ffffff", width: '100%'}} >
            </View>
            <View style={{ flex: 7, width: '100%', alignItems: 'center', }} >
                <TouchableOpacity style={styles.button} onPress={() => setPage('menu')}>
                    <Text style={styles.buttonText}>Retour Menu</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    listecontainer: {
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
