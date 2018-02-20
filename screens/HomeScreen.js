import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Rozliczenie Delegacji'
    };

    render() {
      return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button
                title="Domestic"
                onPress={() => this.props.navigation.navigate('Domestic')}
            />
            <Button
                title="Abroad"
                onPress={() => this.props.navigation.navigate('Abroad')}
            />
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#737075',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

