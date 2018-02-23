import React, { Component } from 'react';
import { StyleSheet, Text, View, Picker, TextInput } from 'react-native';

export default class PickerField extends Component {
  state = {
    selected: this.props.items[0].value
  }

  render() {
    return (
      <View style={styles.container}>
        <Picker
          style={{color: '#fff'}}
          selectedValue={this.state.selected}
          onValueChange={(itemValue, itemIndex) => this.setState({selected: itemValue})}>
          {
              this.props.items.map((item, key) => <Picker.Item key={key} label={item.viewValue} value={item.value} />)
          }
        </Picker>

        {
            this.state.selected !== 'COMPANIES'
            ? <TextInput 
                style={{color: '#fff'}}
                placeholderTextColor="#c9c9c9"
                underlineColorAndroid="#fff" 
                placeholder="Liczba przejechanych kilometrów" />
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

