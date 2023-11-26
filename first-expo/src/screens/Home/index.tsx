import { View, Text,Button } from "react-native";
import React from "react";
import {useNavigation} from '@react-navigation/native'
import { TabType } from "../../routes/tab";

export default function Home(){
    const navigation = useNavigation<TabType>();

    return(
        <View style={{marginTop: 60}}>
            <Text style={{textAlign: "center"}}>
                Caio Rodrigues dos Santos Silva
            </Text>
            
            {/*<Button title="Experiencia" onPress={()=>{
                navigation.navigate("Experiencia")
            }} />*/}
        </View>
    )
}