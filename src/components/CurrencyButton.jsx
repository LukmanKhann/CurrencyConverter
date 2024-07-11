import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CurrencyButton = (props) => {
  return (
    <View style = {styles.btnContainer} >
      <Text style = {styles.flag}>{props.flag}</Text>
      <Text style = {styles.name}>{props.name}</Text>
    </View>
  )
}

export default CurrencyButton

const styles = StyleSheet.create({
    btnContainer : {
        alignItems : 'center',
    },
    flag :{
        fontSize : 26,
        color : '#ffffff',
        marginBottom : 4,     
    },
    name :{
        fontSize : 14,
        color : '#2d3436',
    }
})