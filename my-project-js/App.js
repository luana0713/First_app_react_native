import { StatusBar } from 'react-native';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Army app</Text>
      <StatusBar style="auto" />
      <Text>Army app</Text>
    </View>
    //<View>
     //   <Button title="hi" onPress={() => alert('pr!')} />
     // </View>
  //  </View>
 
    

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
