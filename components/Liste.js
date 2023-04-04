import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios'


export function Liste({setPage, user}) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [mode, setMode] = useState('date');
    const [value, setValue] = useState(date);
    const [show, setShow] = useState(false);
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());

    const Valid = (f1, f2) => {
        return () => {
            f1();
            f2();
        };
    };

    const setList = async () => {
        try {
            let reponse = await axios.post('http://192.168.43.246:8080/public/taches', { name, date, description, user});
            setName('');
            setDate('');
            setTime('');
            setDescription('');
        } catch (error) {
            console.error('Error adding tache:', error);
        }
    };


    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showValue = (currentValue) => {
        setValue(currentValue);
    }

    const showDatepicker = () => {
        showMode('date');
        showValue(date);
    };

    const showTimepicker = () => {
        showMode('time');
        showValue(time);
    };

    return (
        <View style={[styles.listecontainer, {
            flexDirection: "column"
        }]}>
            <View style={{ flex: 7, backgroundColor: "#e21616", width: '100%'}} >
            </View>
            <View style={{flexDirection: "row", alignItems: 'center', flex: 5, backgroundColor: "#e21616", width: '100%' }} >
                <Text style={{flex: 1, fontSize: 20, color: '#ffffff' }}>Ajout de tache</Text>
                <Text style={{flex: 1, fontSize: 10, color: '#ffffff', textAlign: "right" }}>{user}</Text>
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
                <TouchableOpacity style={styles.button} onPress={showDatepicker}>
                    <Text style={styles.buttonText}>Date</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 2,  width: '100%'}} >
            </View>
            <View style={{flex: 7, width: '100%', alignItems: 'center',}}>
                <TouchableOpacity style={styles.button} onPress={showTimepicker}>
                <Text style={styles.buttonText}>Heure</Text>
            </TouchableOpacity>
            </View>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={value}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
            <View style={{ flex: 76, backgroundColor: "#ffffff", width: '100%'}} >
            </View>
            <View style={{ flex: 7, width: '100%', alignItems: 'center', }} >
                <TouchableOpacity style={styles.buttonValid} onPress={Valid(() => setPage('menu'), setList)}>
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
