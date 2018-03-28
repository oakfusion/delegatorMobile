import React, { Component } from 'react';
import ReactNative, { Text, Modal, View, ScrollView } from 'react-native';
import styled from 'styled-components';
import Button from '../components/Button';
import FieldHolder from '../components/FieldHolder';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Container = styled.View`
    flex: 1;
    background-color: #6b686d;
`;

const ContainerInner = styled.View`
    padding-vertical: 15;
    padding-horizontal: 15;
`;

export default class MoreModal extends Component {
    scrollToInput (input) {
        this.scroll.props.scrollToFocusedInput(ReactNative.findNodeHandle(input) + 10)
    }

    render () {
        return (
            <Modal visible={this.props.visibility} animationType={'slide'} onRequestClose={() => this.props.handleClose()}>
                <Container>
                    <KeyboardAwareScrollView innerRef={ref => {this.scroll = ref}}>
                        <View>
                            {this.props.children}
                            <FieldHolder>
                                <Button onPress={() => this.props.handleClose()} title="Zapisz" />
                            </FieldHolder>
                        </View>
                    </KeyboardAwareScrollView>
                </Container>
            </Modal>
        );
    }
}