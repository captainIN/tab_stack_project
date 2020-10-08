import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const NestedScreen = ({route}) => {
    return (
        <View>
            <Text style={styles.myText}>{route.params.msg}</Text>
        </View>
    )
}

export default NestedScreen

const styles = StyleSheet.create({
    myText:{
        color:'black',
        fontSize:25,
        textAlign:'center'
    }
})
