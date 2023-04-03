import * as React from 'react';
import {Pressable, StyleSheet, Text, View } from 'react-native';


export function Menu({setPage}, {user}) {
    console.log('test', user)
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
            <View style={{ flex: 1, width: '100%' }} >
            </View>
            <View style={{ flex: 7, width: '100%', alignItems: 'center', }} >

            </View>
            <View style={{ flex: 84, width: '100%' }} >
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