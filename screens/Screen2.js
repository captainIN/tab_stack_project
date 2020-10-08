import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const Screen2 = ({navigation}) => {
    return (
        <View>
            <Text style={styles.myText}>Hi I am Screen 2</Text>
            <TouchableOpacity style={styles.Button} onPress={()=>navigation.navigate("NestedScreen", {msg: "I came From Screen2"})}>
                <Text style={styles.ButtonText}>Click Me!</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Screen2

const styles = StyleSheet.create({
    myText:{
        color:'tomato',
        textAlign: 'center',
        fontSize:18
    },
    Button:{
        backgroundColor:'green',
        paddingHorizontal: 10,
        paddingVertical: 6,
        width:'50%',
        
    },
    ButtonText:{
        textAlign:'center',
        fontSize:18,
        color:'#fff'
    }
})
