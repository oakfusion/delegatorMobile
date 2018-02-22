import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

export default class AboutScreen extends React.Component {
  static navigationOptions = {
    title: 'O Aplikacji'
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
          <Text style={styles.text}>Celem Delegatora jest szybkie rozliczenie kosztów podróży służbowej bez znajomości przepisów prawa polskiego</Text>
          <Text style={styles.text}>Użytkownik może w prosty i intuicyjny sposób rozliczyć własną podróż służbową lub podróź swojego pracownika</Text>
          <Text style={styles.text}>Aplikacja posiada przyjazny dla Użytkownika interfejs</Text>
          <Text style={styles.text}>W przypadku rozliczeń delegacji zagranicznych, aplikacja sama pobierze odpowiedni kurs waluty</Text>
          <Text style={styles.text}>Formularze dopasowane są do potrzeb Użytkownika i ograniczają się do zbierania jedynie kluczowych informacji</Text>
          <Text style={styles.text}>Na podstawie wprowadzonych danych, system wygeneruje dokument niezbędny do rozliczeń księgowych zgodny z przepisami prawa polskiego (Rozporządzenie Ministra Pracy i Polityki Społecznej z dnia 29.01.2013 r.)</Text>
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
    padding: 15
  },
  text: {
    color: '#fff',
    marginBottom: 10
  }
});

