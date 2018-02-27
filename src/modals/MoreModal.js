import React, { Component } from 'react';
import { Text, Modal, View, ScrollView } from 'react-native';
import styled from 'styled-components';
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

export default MoreModal = (props) => (
    <Modal visible={props.visibility} animationType={'slide'} onRequestClose={() => props.handleClose()}>
        <Container>
            <ScrollView>
                {props.children}
                <FieldHolder>
                    <Button onPress={() => props.handleClose()} title="Zapisz" />
                </FieldHolder>
            </ScrollView>
        </Container>
    </Modal>
);