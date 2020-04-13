import React,{useState} from 'react'
import {View,StyleSheet} from 'react-native'
import {Text,Input,Button,Icon} from 'react-native-elements'
import jsonServer from '../api/jsonServer'

const FormScreen = ({navigation}) => {
    const [fName,setFName] = useState("");
    const [email,setEmail] = useState("");

    const onSubmit = async (name,email) => {
        await jsonServer.post('/forms',{fName,email})
        setFName("")
        setEmail("")
        navigation.navigate("home")
    }
   
    return (
        <View>
            <Text
            style={styles.label}>
                First Name
            </Text>
            <Input
            placeholder="enter First Name"
            value={fName}
            style={styles.input}
            onChangeText={(text) => {setFName(text)}}/>
            <Text
            style={styles.label}>
                Email
            </Text>
            <Input
            placeholder="enter Email"
            style={styles.input}
            value={email}
            onChangeText={(text) => {setEmail(text)}}/>
            <Button
            title="Submit"
            onPress={() => {onSubmit(fName,email)}}/>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 10,
        margin: 5
    },
    label: {
        fontSize: 18,
        marginBottom: 15
    }
});

export default FormScreen;