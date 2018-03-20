import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import { ScrollView, Text, View, StyleSheet, PixelRatio, TouchableOpacity, Alert } from 'react-native';
import Mailer from 'react-native-mail';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { moderateScale } from '../helpers/scaling';

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
    console.log(Mailer);
    Mailer.mail({
      subject: 'need help',
      recipients: ['support@example.com'],
      ccRecipients: ['supportCC@example.com'],
      bccRecipients: ['supportBCC@example.com'],
      body: '<b>A Bold Body</b>',
      isHTML: true,
      attachment: {
        path: '',  // The absolute path of the file from which to read data.
        type: '',   // Mime Type: jpg, png, doc, ppt, html, pdf
        name: '',   // Optional: Custom filename for attachment
      }
    }, (error, event) => {
      Alert.alert(
        error,
        event,
        [
          {text: 'Ok', onPress: () => console.log('OK: Email Error Response')},
          {text: 'Cancel', onPress: () => console.log('CANCEL: Email Error Response')}
        ],
        { cancelable: true }
      )
    });
  }

  render () {
    const currentItem = this.props.activeItemKey;

    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.topSection}>
            <Text style={styles.topSectionText}>DELEGATOR</Text>
          </View>
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

        <View style={styles.footerContainer}>
          <Text style={styles.footerContainerText}>&copy; {new Date().getFullYear()} Oakfusion</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    topSection: {
      paddingTop: 60,
      paddingBottom: 60,
      backgroundColor: 'lightgrey'
    },
    topSectionText: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: moderateScale(35)
    },
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
    },
    footerContainer: {
      padding: 10,
      backgroundColor: 'lightgrey'
    },
    footerContainerText: {
      textAlign: 'center',
      fontSize: moderateScale(10)
    }
});

export default SideNav;