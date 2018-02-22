import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import DatePicker from 'react-native-datepicker';

export default class DomesticScreen extends React.Component {
  state = {
    date:"2016-05-15"
  }

  static navigationOptions = {
    title: 'Delegacja Krajowa',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Domestic Screen</Text>

        <TouchableOpacity onPress={this._showDateTimePicker}>
          <Text>Show TimePicker</Text>
        </TouchableOpacity>
        <DatePicker
          style={{width: 200}}
          date={this.state.date}
          mode="datetime"
          placeholder="select date"
          format="YYYY-MM-DD"
          minDate="2016-05-01"
          maxDate="2016-06-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
          }}
          onDateChange={(date) => {this.setState({date: date})}}
        />
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

