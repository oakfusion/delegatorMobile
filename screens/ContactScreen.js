import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class ContactScreen extends React.Component {
  static navigationOptions = {
    title: 'Kontakt'
  };

  sendForm () {
    fetch('https://delegator.oakfusion.pl/mail/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'test',
        email: 'testowy@test.com',
        content: 'test message'
      })
    })
  }

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
    backgroundColor: '#6b686d',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

