import * as React from 'react';
import {Pressable, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import {useEffect, useState} from "react";


export function Menu({setPage, user}) {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasksByUser = async () => {
            try {
                const response = await axios.post(`http://192.168.43.246:8080/public/taches/byUser`, user);
                setTasks(response.data);
                console.log(response);
            } catch (error) {
                console.error("Erreur lors de la récupération des tâches :", error);
            }
        };

        fetchTasksByUser();
    }, [user]);



    return (
        <View style={[styles.menucontainer, {
            flexDirection: "column"
        }]}>
            <View style={{ flex: 5, backgroundColor: "#e21616", width: '100%' }} >
            </View>
            <View style={{flexDirection: "row", alignItems: 'center', flex: 5, backgroundColor: "#e21616", width: '100%' }} >
                <Text style={{flex: 1, fontSize: 20, color: '#ffffff' }}>ToDoList</Text>
                <Text style={{flex: 1, fontSize: 10, color: '#ffffff', textAlign: "right" }}>{user}</Text>
            </View>
            <View style={{ flex: 1, width: '100%' }} >
            </View>
            <View style={{ flex: 7, width: '100%', justifyContent : 'center', }} >
                <Pressable style={[styles.button]}
                           onPress={() => setPage('liste')}>
                    <Text >Ajouter une tâche</Text>
                </Pressable>
            </View>
            <View style={{ flex: 92, width: '100%' }} >

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    menucontainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#e21616' ,
        marginTop: '0%',
        borderRadius:10,
        width: '100%',
        height: '95%',
        alignItems: 'center',
    },
});