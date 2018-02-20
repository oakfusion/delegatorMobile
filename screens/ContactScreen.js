import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class ContactScreen extends React.Component {
  static navigationOptions = {
    title: 'Kontakt'
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Contact Screen</Text>
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

