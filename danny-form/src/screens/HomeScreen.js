import React, { useEffect,useState } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import jsonServer from '../api/jsonServer';

const HomeScreen = ({navigation}) => {
    [forms,setForms] = useState([])

    useEffect(()=>{
        getForms()
        
        const listener = navigation.addListener('didFocus',() => {
            getForms();
        })

        return () => {
            listener.remove();
        }
    },[])

    const getForms = async () => {
            const response = await jsonServer.get('/forms');
            setForms(response.data)
        
    }


    return (
        <View>
            <FlatList
            data={forms}
            keyExtractor={(form) => {return JSON.stringify(form.id)}}
            renderItem={({item}) => {
                return (
                    <View style={styles.row}>
                        <Text style={styles.title}>
                        {item.fName} - {item.email}
                        </Text>
                    </View>

                );
            }}/>
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderColor: 'gray'
    },
    headerRight: {
        fontSize: 22,
        marginRight: 20
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 32,
        marginRight: 20
    }
});

export default HomeScreen;