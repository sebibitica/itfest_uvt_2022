import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import React from "react";

const bg_color = '#ecf39e';
const color1 = '#90a955';
const color2 = '#4f772d';
const color3 = '#31572c';
const color4 = '#132a13';

export const Spacer = ({height = 15}) => {
    return(
        <View style={{marginTop: height}}/>
    )
}

export function TocuchO({name, goTo, navigation}) {
    return (
        <TouchableOpacity style={styles.pageButtons}
                          onPress={() => {navigation.navigate(goTo)}}
        >
            <Text style={styles.buttonText}>{name}</Text>
        </TouchableOpacity>
    )
}

export function TextBox({name, myText}) {

    const [text, onChangeText] = React.useState(null);

    return (
        <View style={styles.textBoxContainer}>
            <Text style={{fontSize: 24, color: color2}}>{name}</Text>
            <TextInput
                style={styles.textBox}
                onChangeText={onChangeText}
                placeholder={myText}
            />
        </View>
    )
}

const styles = StyleSheet.create({

    pageButtons: {
        height: 90,
            width: '60%',
            borderRadius: 25,
            backgroundColor: color4,
            alignItems: 'center',
            justifyContent: 'center',
    },

    textBoxContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
    },

    textBox: {
        height: 50,
        width: '85%',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 15,
        borderWidth: 2,
        backgroundColor: '#fff',
        borderRadius: 25,
    },

    buttonText: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#fff',
    },

});