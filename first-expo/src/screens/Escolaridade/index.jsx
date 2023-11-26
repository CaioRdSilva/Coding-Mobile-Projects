import { View, Text } from "react-native";
import React from "react";

export default function Escolaridade(){
    return(<View style={{marginTop: 60}}>
        <Text style={{textAlign: 'center', fontSize: 22, fontWeight: 'bold'}}>Escolaridade</Text>
        <Text style={{marginLeft: 20, marginTop: 50, fontWeight: 'bold', fontSize: 20}}>ADS - Fac. Senac</Text>
        <Text style={{marginLeft: 20, fontStyle: 'italic'}}>Técnologo ADS Fac. Senac | 2022.2 - Atualmente</Text>
        <Text style={{marginLeft: 20, marginTop: 50, fontWeight: 'bold', fontSize: 20}}>Téc. Redes de Computadores</Text>
        <Text style={{marginLeft: 20, fontStyle: 'italic'}}>Médio Tecnico ETE PLAP | 2019 - 2021</Text>
    </View>)
}