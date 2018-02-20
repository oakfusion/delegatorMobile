import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class AbroadScreen extends React.Component {
  static navigationOptions = {
    title: 'Delegacja Zagranicza'
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Abroad Screen</Text>
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

