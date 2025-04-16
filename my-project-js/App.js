import { StatusBar } from 'react-native';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Title from './src/components/title';
import Main from './src/components/main';

export default function App() {
  
  return (
    <View style={styles.container}>
      <Title/>
      <Button title="hi" onPress={() => alert('pr!')} />
      <Main/>
      <Button title="hi" onPress={() => alert('pr!')} />
    </View>
    //<View>
     //   <Button title="hi" onPress={() => alert('pr!')} />
     // </View>
  //  </View>


 // isso fica no View la em cima 
  //<Text>Army app</Text>
 // <StatusBar style="auto" />
// isso fica no View la em cima

  );
}


      //eu tenho o View e dentro desse view eu uso uma Text //
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
