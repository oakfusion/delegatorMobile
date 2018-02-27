import React, { Component } from 'react';
import { StyleSheet, Text, View, Picker, TextInput } from 'react-native';
import { TextField } from 'react-native-material-textfield';

const defaultInputProps = {
  baseColor: "#c9c9c9",
  textColor: "#fff",
  tintColor: "#ffab40",
  labelHeight: 20
}

export default class PickerField extends Component {
  state = {
    selected: this.props.items[0].value
  }

  render() {
    return (
      <View style={styles.container}>
        <Picker
          style={{color: '#fff', borderBottomWidth: 1, borderBottomColor: '#fff'}}
          selectedValue={this.state.selected}
          onValueChange={(itemValue, itemIndex) => this.setState({selected: itemValue})}>
          {
            this.props.items.map((item, key) => <Picker.Item key={key} label={item.viewValue} value={item.value} />)
          }
        </Picker>

        {
          this.props.hiddenField && this.state.selected && this.state.selected !== 'COMPANIES'
          ? <TextField {...defaultInputProps} label='Liczba przejechanych kilometrów' />
          : null
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 0
  },
});
