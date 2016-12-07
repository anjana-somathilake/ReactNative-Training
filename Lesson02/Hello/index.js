import React from 'react';

import {
  Text,
  View,
  StyleSheet
} from 'react-native';





const Hello = (props) => {

  return (
    <View style={style.container}>
      <Text style={style.label}>
        Hello {props.title}
      </Text>

    </View>
  )


}

const style = StyleSheet.create({
  container:{
      backgroundColor:'grey',
      flex:1,
      paddingTop:20,
      justifyContent:'center',
      alignItems:'center',
    },
  label: {
      fontSize:50
    }
});


export default Hello;
