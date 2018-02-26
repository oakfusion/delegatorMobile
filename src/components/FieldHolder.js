import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FieldHolder = (props) => (
    <View style={[styles.container, props.border ? {borderBottomWidth: 1} : {borderBottomWidth: 0}, props.small ? {paddingBottom: 0} : {paddingBottom: 14}]}>
        <Text style={styles.placeholder}>{props.placeholder}</Text>
        {props.children}
    </View>
)

const styles = StyleSheet.create({
    container: {
      width: '100%',
      borderColor: '#777',
      paddingTop: 14,
      paddingHorizontal: 20
    },
    placeholder: {
      color: '#999'
    }
  });

export default FieldHolder;