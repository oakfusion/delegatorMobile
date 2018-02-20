import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class DomesticScreen extends React.Component {
  static navigationOptions = {
    title: 'Delegacja Krajowa',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Domestic Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

