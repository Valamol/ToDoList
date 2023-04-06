import * as React from 'react';
import {Pressable, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';
import {useEffect, useState} from "react";
import Icon from 'react-native-vector-icons/Ionicons';


export function Menu({setPage, user, userID}) {
    const [taches, setTache] = useState([]);

    useEffect(() => {
        const fetchTacheByUser = async () => {
            try {
                const reponse = await axios.get(`http://192.168.43.246:8080/public/taches/byUser/` + userID);
                setTache(reponse.data);
                console.log(reponse.data);
            } catch (error) {
                console.error("Erreur lors de la récupération des tâches :", error);
            }
        };

        fetchTacheByUser();
    }, [user]);


    /*const deleteTaches = async (TachesID) => {
        try {
            const test = await axios.delete(`http://192.168.43.246:8080/public/taches/` + TachesID);
        } catch (error) {
            console.error("Erreur lors de la récupération des tâches :", error);
        }
    };
*/

    const renderItem = ({ item }) => (
        <View style={[styles.listItem, {
            flexDirection: "column", elevation: 20,
        }]}>
            <View style={[styles.listItem, {
                flexDirection: "row"
            }]}>
                <Text style={[styles.title, {flex: 10}]}>{item.name}</Text>
                <Text style={[styles.date, {flex: 10}]}>{item.date}</Text>

            </View>
            <Text style={styles.description}>{item.description}</Text>
            <TouchableOpacity onPress={console.log(item.id)}>
                <Icon style={styles.delete} name="trash-outline" />
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={[styles.menucontainer, {
            flexDirection: "column"
        }]}>
            <View style={{ flex: 5, backgroundColor: "#e21616", width: '100%' }} >
            </View>
            <View style={{flexDirection: "row", alignItems: 'center', flex: 5, backgroundColor: "#e21616", width: '100%' }} >
                <Text style={{flex: 1, fontSize: 20, color: '#ffffff', padding: 5 }}>ToDoList</Text>
                <Text style={{flex: 1, fontSize: 10, color: '#ffffff', textAlign: "right", padding: 5 }}>{user}</Text>
            </View>
            <View style={{ flex: 1, width: '100%' }} >
            </View>
            <View style={{ flex: 7, width: '100%', justifyContent : 'center', }} >
                <Pressable style={[styles.button]}
                           onPress={() => setPage('liste')}>
                    <Text >Ajouter une tâche</Text>
                </Pressable>
            </View>
            <View style={{ flex: 92, width: '100%'}} >
                <View >
                    <FlatList
                        data={taches}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id.toString()}
                    />
                </View>
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
    listItem: {
        backgroundColor: '#303030',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: "left",
    },
    date: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: "right",
    },
    description: {
        fontSize: 14,
    },
    delete: {
        fontSize: 30,
        color: "#FF0000",
        textAlign: "center",
        padding: 5,
    },
});