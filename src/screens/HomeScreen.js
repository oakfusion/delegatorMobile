import React, { Component } from 'react';
import { Text, View, TouchableNativeFeedback, Image, PixelRatio, ScrollView } from 'react-native';
import { moderateScale, verticalScale } from '../helpers/scaling';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Button from '../components/Button';
import FieldHolder from '../components/FieldHolder';

const Container = styled.View`
    flex: 1;
    background-color: #6b686d;
`;

const ContainerInner = styled.View`
    padding-vertical: 15;
    padding-horizontal: 15;
`;

const IconsContainer = styled.View`
    flex: 1;
    flex-direction: row;
    margin-vertical: ${PixelRatio.getPixelSizeForLayoutSize(15)};
    align-content: space-between;
    align-items: center;
`;

const RegularText = styled.Text`
    color: #fff;
    text-align: center;
    margin-bottom: 10;
`;

const ButtonsContainer = styled.View`
    margin-vertical: 20;
`;

const ImageIcon = styled.Image`
    flex: 1;
    width: ${PixelRatio.getPixelSizeForLayoutSize(20)};
    height: ${PixelRatio.getPixelSizeForLayoutSize(20)};
    resize-mode: contain;
`;

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Rozliczenie Delegacji'
    };

    render() {
        return (
            <Container>
                <ScrollView>
                    <ContainerInner>
                        <IconsContainer>
                            <ImageIcon source={require('../images/plane.png')} />
                            <Icon name="keyboard-arrow-right" size={40} color="#fff" />
                            <ImageIcon source={require('../images/fill.png')} />
                            <Icon name="keyboard-arrow-right" size={40} color="#fff" />
                            <ImageIcon source={require('../images/done.png')} />
                        </IconsContainer>

                        <View>
                            <RegularText>Rozlicz swoją delegację szybciej niż myślisz.</RegularText>
                            <RegularText>Przytłacza Cię ilość pytań w formularzach? Nie wiesz, jaka wysokość diety Ci przysługuje oraz jak ją poprawnie wyliczyć? Nie szkodzi, zrobimy to za Ciebie. W zależności od Twoich potrzeb, Delegator ograniczy się tylko do niezbędnego minimum wymaganych informacji a na koniec wygeneruje dokument z rozliczeniem Twojej podróży służbowej.</RegularText>
                            <RegularText>Sprawdź jakie to proste! </RegularText>
                        </View>
                        
                        <ButtonsContainer>
                            <Button title="Rozlicz delegację krajową" upper first onPress={() => this.props.navigation.navigate('Domestic')} />
                            <Button title="Rozlicz delegację zagraniczną" upper onPress={() => this.props.navigation.navigate('Abroad')} />                   
                        </ButtonsContainer>
                    </ContainerInner>
                </ScrollView>
            </Container>
        );
    }
}
