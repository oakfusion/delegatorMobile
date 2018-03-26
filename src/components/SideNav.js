import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import { ScrollView, Text, View, StyleSheet, PixelRatio, TouchableOpacity, Alert, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { moderateScale } from '../helpers/scaling';
import styled from 'styled-components';


const Container = styled.View`
  flex: 1;
`;

const TopSection = styled.View`
  padding-top: 60;
  padding-bottom: 60;
  background-color: lightgrey;
`;

const TopSectionText = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: ${moderateScale(35)};
`;

const Footer = styled.View`
  padding-vertical: 10;
  padding-horizontal: 10;
  background-Color: lightgrey;
`;

const FooterText = styled.Text`
  text-align: center;
  font-size: ${moderateScale(10)};
`;

const icons = [
  'flight', 'info', 'email', 'security'
];

class SideNav extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }
 
  handleEmail = () => {
    const mail = 'office@oakfusion.pl';
    const subject = 'Kontakt z Delegator mobilny';
    Linking.openURL(`mailto:${mail}?subject=${subject}`)
  }

  render () {
    const currentItem = this.props.activeItemKey;

    return (
      <Container>
        <ScrollView>
          <TopSection>
            <TopSectionText>DELEGATOR</TopSectionText>
          </TopSection>

          <View>
            {this.props.items.map((item, key) => {
              return (
                <TouchableOpacity 
                  key={key} 
                  onPress={item.routeName === 'Kontakt' ? this.handleEmail : this.navigateToScreen(item.routeName)} 
                  style={[styles.navItemButton, currentItem === item.key ? styles.navItemActiveButton : null]}>
                    <Icon style={{padding: 10}} name={icons[key]} size={20} color="#fff" />
                    <Text style={[styles.navItemStyle, currentItem === item.key ? styles.navItemActiveStyle : null]}>{item.key}</Text>
                </TouchableOpacity>
              )
            })}
          </View>
        </ScrollView>

        <Footer>
          <FooterText>&copy; {new Date().getFullYear()} Oakfusion</FooterText>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    navItemStyle: {
      flex: 1,
      padding: 10,
      color: '#fff'
    },
    navItemActiveStyle: {
      fontWeight: 'bold',
    },
    navItemButton: {
      flex: 1,
      flexDirection: 'row',
      padding: 5
    },
    navItemActiveButton: {
      backgroundColor: '#555'
    }
});

export default SideNav;