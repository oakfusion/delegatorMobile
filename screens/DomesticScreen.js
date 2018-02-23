import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Picker, TextInput } from 'react-native';
import { DrawerNavigator, StackNavigator, NavigationActions, TabNavigator, TabBarBottom } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DatePickerField from '../components/DatePickerField';
import PickerField from '../components/PickerField';
import FieldHolder from '../components/FieldHolder';

const venichles = [
  { "value": "COMPANIES", "viewValue": "Firmowy" },
  { "value": "OWN_BELOW_09", "viewValue": "Prywatny samochod (obj. silnika do 0.9l)" },
  { "value": "OWN_OVER_09", "viewValue": "Prywatny samochod (obj. silnika wopyzej 0.9l)" },
  { "value": "OWN_MOTOCYCLE", "viewValue": "Prywatny motocykl" },
  { "value": "OWN_MOTORBIKE", "viewValue": "Prywatny motorower" }
]
class Step1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <FieldHolder border placeholder="Data rozpoczęcia delegacji"><DatePickerField placeholder="Wybierz datę"/></FieldHolder>
          <FieldHolder border placeholder="Data końca delegacji"><DatePickerField placeholder="Wybierz datę"/></FieldHolder>
          <FieldHolder border placeholder="Data rozliczenia delegacji"><DatePickerField placeholder="Wybierz datę"/></FieldHolder>
          <FieldHolder placeholder="Pojazd"><PickerField items={venichles}/></FieldHolder>
        </ScrollView>
      </View>
    );
  } 
}

class Step2 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <FieldHolder small><TextInput style={{color: '#fff'}} placeholderTextColor="#c9c9c9" underlineColorAndroid="#fff" placeholder="Adres email" /></FieldHolder>
          <FieldHolder small><TextInput style={{color: '#fff'}} placeholderTextColor="#c9c9c9" underlineColorAndroid="#fff" placeholder="Imię" /></FieldHolder>
          <FieldHolder small><TextInput style={{color: '#fff'}} placeholderTextColor="#c9c9c9" underlineColorAndroid="#fff" placeholder="Nazwisko" /></FieldHolder>
          <FieldHolder small><TextInput style={{color: '#fff'}} placeholderTextColor="#c9c9c9" underlineColorAndroid="#fff" placeholder="Stanowisko" /></FieldHolder>
        </ScrollView>
      </View>
    );
  }
}

export default TabNavigator(
  {
    Step1: { screen: Step1, navigationOptions: { title: 'Czas i cel' } },
    Step2: { screen: Step2, navigationOptions: { title: 'Dane osobowe' }  },
  }, {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ _, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Step1') {
          iconName = 'access-time';
        } else if (routeName === 'Step2') {
          iconName = 'person';
        }
        return <Icon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    lazy: false,
    tabBarOptions: {
      style: {
        backgroundColor: '#3b3a3e'
      },
      activeTintColor: '#fff'
    }
  }
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6b686d'
  }
});

