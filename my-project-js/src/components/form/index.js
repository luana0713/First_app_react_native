import React from "react";
//import { View, Text } from "react-native";
import { View, Text, TextInput } from "react-native";
import { Button } from "react-native";

export default function Form(){
    return (
        <View>
             <View>

                <Text>Altura</Text>
                <TextInput
                placeholder="ex. 9.76"
                keyboardType="numeric"/>
            
                <Text>Peso</Text>
                <TextInput
                 placeholder="ex. 77.366"
                 keyboardType="numeric"/>
               
                 <Button title="here"/>

             </View>
        </View>
    )
}