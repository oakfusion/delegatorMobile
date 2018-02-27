import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import styled from 'styled-components';

const RegularText = styled.Text`
  color: #fff;
  margin-bottom: 10;
`;

const Container = styled.View`
  flex: 1;
  background-color: #6b686d;
`;

const ContainerInner = styled.View`
  padding-vertical: 15;
  padding-horizontal: 15;
`;

export default class AboutScreen extends React.Component {
  static navigationOptions = {
    title: 'O Aplikacji'
  };

  render() {
    return (
      <Container>
        <ScrollView>
          <ContainerInner>
            <RegularText>Celem Delegatora jest szybkie rozliczenie kosztów podróży służbowej bez znajomości przepisów prawa polskiego</RegularText>
            <RegularText>Użytkownik może w prosty i intuicyjny sposób rozliczyć własną podróż służbową lub podróź swojego pracownika</RegularText>
            <RegularText>Aplikacja posiada przyjazny dla Użytkownika interfejs</RegularText>
            <RegularText>W przypadku rozliczeń delegacji zagranicznych, aplikacja sama pobierze odpowiedni kurs waluty</RegularText>
            <RegularText>Formularze dopasowane są do potrzeb Użytkownika i ograniczają się do zbierania jedynie kluczowych informacji</RegularText>
            <RegularText>Na podstawie wprowadzonych danych, system wygeneruje dokument niezbędny do rozliczeń księgowych zgodny z przepisami prawa polskiego (Rozporządzenie Ministra Pracy i Polityki Społecznej z dnia 29.01.2013 r.)</RegularText>
          </ContainerInner>
        </ScrollView>
      </Container>
    );
  }
}
