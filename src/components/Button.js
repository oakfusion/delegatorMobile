import React from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback, TouchableOpacity, Platform } from 'react-native';

const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

const Button = (props) => (
    <Touchable style={styles.buttonArea} onPress={props.onPress}>
        <View style={[styles.button, props.style]}>
            <Text style={styles.buttonText}>{props.upper ? props.title.toUpperCase() : props.title}</Text>
        </View>
    </Touchable>
);

const styles = StyleSheet.create({
    buttonArea: {
        flex: 1,
        flexDirection: 'row'
    },
    button: {
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 2
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: 'bold'
    }
});

export default Button;