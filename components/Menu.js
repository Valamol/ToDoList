import * as React from 'react';
import {Pressable, StyleSheet, Text, View } from 'react-native';



export function Menu({setPage}) {
    return (
        <View style={[styles.menucontainer, {
            flexDirection: "column"
        }]}>
            <View style={{ flex: 5, backgroundColor: "#e21616", width: '100%' }} >
            </View>
            <View style={{alignItems: 'center', flex: 5, backgroundColor: "#e21616", width: '100%' }} >
                <Text style={{ fontSize: 20, color: '#ffffff' }}>ToDoList</Text>
            </View>
            <View style={{ flex: 1, width: '100%' }} >
            </View>
            <View style={{ flex: 7, width: '100%', alignItems: 'center', }} >
                <Pressable style={[styles.button]}
                           onPress={() => setPage('liste')}>
                    <Text>Ajouter une tâche</Text>
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