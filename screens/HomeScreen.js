import React from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback, Image, PixelRatio, ScrollView } from 'react-native';
import { moderateScale, verticalScale } from '../helpers/scaling';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Button from '../components/Button';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Rozliczenie Delegacji'
    };

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollContainer}>
                    <View style={styles.iconsContainer}>
                        <Image style={styles.icon} source={require('../assets/images/plane.png')} />
                        <Icon name="keyboard-arrow-right" size={40} color="#fff" />
                        <Image style={styles.icon} source={require('../assets/images/fill.png')} />
                        <Icon name="keyboard-arrow-right" size={40} color="#fff" />
                        <Image style={styles.icon} source={require('../assets/images/done.png')} />
                    </View>

                    <View>
                        <Text style={styles.text}>Rozlicz swoją delegację szybciej niż myślisz.</Text>
                        <Text style={styles.text}>Przytłacza Cię ilość pytań w formularzach? Nie wiesz, jaka wysokość diety Ci przysługuje oraz jak ją poprawnie wyliczyć? Nie szkodzi, zrobimy to za Ciebie. W zależności od Twoich potrzeb, Delegator ograniczy się tylko do niezbędnego minimum wymaganych informacji a na koniec wygeneruje dokument z rozliczeniem Twojej podróży służbowej.</Text>
                        <Text style={styles.text}>Sprawdź jakie to proste!</Text>
                    </View>
                    
                    <View style={styles.buttonsContainer}>
                        <Button style={styles.button} title="Rozlicz delegację krajową" upper onPress={() => this.props.navigation.navigate('Domestic')} />
                        <Button title="Rozlicz delegację zagraniczną" upper onPress={() => this.props.navigation.navigate('Abroad')} />                   
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6b686d',
  },
  scrollContainer: {
    padding: 10,
  },
  iconsContainer: {
      flex: 1,
      flexDirection: 'row',
      marginVertical: PixelRatio.getPixelSizeForLayoutSize(20),
      alignContent: 'space-between'
  },
  icon: {
    flex: 1,
    width: PixelRatio.getPixelSizeForLayoutSize(20),
    height: PixelRatio.getPixelSizeForLayoutSize(20),
    resizeMode: 'contain'
  },
  buttonsContainer: {
    marginVertical: 20
  },
  button: {
      marginBottom: 10
  },
  text: {
      color: '#fff',
      textAlign: 'center',
      marginBottom: 10
  }
});

