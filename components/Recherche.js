import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, TextInput, FlatList} from 'react-native';
import {useState} from 'react';
import axios from 'axios'

export function Recherche({setPage,setUser}) {

    const [EltRecherche, setEltRecherche] = useState('');
    const [taches, setTache] = useState([]);
    const [loookUserID, setLoookUserID] = useState(null);

    const searchUserID = async () => {
        try {
            const reponse = await axios.get(`http://192.168.43.246:8080/public/users/byUser/` + EltRecherche);
            setLoookUserID(reponse.data.id);
            search();
        } catch (error) {
            console.error("Erreur lors de la récupération des tâches :", error);
        }
    }
    const search = async () => {
        try {
            const reponse = await axios.get(`http://192.168.43.246:8080/public/taches/byUser/` + loookUserID);
            setTache(reponse.data);
        } catch (error) {
            console.error("Erreur lors de la récupération des tâches :", error);
        }
    };

    const renderItemSearch = ({ item }) => (
        <View style={[styles.listItem, {
            flexDirection: "column", elevation: 20,
        }]}>
            <View style={[styles.listItem, {
                flexDirection: "row"
            }]}>
                <Text style={[styles.titlelist, {flex: 10}]}>{item.name}</Text>
                <View style={{flexDirection: "column"}}>
                    <Text style={[styles.date, {flex: 10}]}>{item.date}</Text>
                    <Text style={[styles.time, {flex: 10}]}>{item.timeF}</Text>
                </View>
            </View>
            <Text style={styles.description}>{item.description}</Text>
        </View>
    );

    return (
        <View style={[styles.Recherchecontainer, {
            flexDirection: "column"
        }]}>
            <View style={{ flex: 5, backgroundColor: "#e21616", width: '100%'}} >
            </View>
            <View style={{alignItems: 'center', flex: 5, backgroundColor: "#e21616", width: '100%' }} >
                <Text style={{ fontSize: 20, color: '#ffffff' }}>Recherche</Text>
            </View>
            <View style={{ flex: 5, width: '100%'}} >
            </View>
            <View style={{width: '100%', alignItems: 'center',}}>
                <TextInput
                    style={styles.input}
                    value={EltRecherche}
                    onChangeText={setEltRecherche}
                    placeholder="Recherche"
                />
            </View>
            <View style={{ flex: 2,  width: '100%'}} >
            </View>

            <View style={{ flex: 2,  width: '100%'}} >
            </View>

            <View style={{ flex: 78,  width: '100%'}} >
                <View >
                    <FlatList
                        data={taches}
                        renderItem={renderItemSearch}
                        keyExtractor={(item) => item.id.toString()}
                    />
                </View>
            </View>
            <View style={{ flex: 7, width: '100%', alignItems: 'center', }} >
                <TouchableOpacity style={styles.buttonValid} onPress={searchUserID}>
                    <Text style={styles.buttonText}>Valider</Text>
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
    Recherchecontainer: {
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
    listItem: {
        backgroundColor: '#303030',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    titlelist: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: "left",
    },
    time: {
        fontSize: 15,
        textAlign: "right",
    },
    date: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: "right",
    },
    description: {
        fontSize: 14,
    },
});