import React from 'react';
import { StyleSheet, Dimensions, View, TouchableNativeFeedback, TouchableOpacity, Platform, Alert, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Pdf from 'react-native-pdf';
import RNFetchBlob from 'react-native-fetch-blob'
import networkCheck from '../helpers/network';
import styled from 'styled-components';
import DrawerButton from '../components/DrawerButton';


const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

const url = 'https://delegator.oakfusion.pl/report/print?uuid=';

const Container = styled.View`
    flex: 1;
    justify-content: flex-start;
    align-items: center;
    margin-top: 25;
`;

const ButtonWrapper = styled.View`
    padding-horizontal: 15;
    padding-vertical: 15;
`;

function downloadFile (src) {
    networkCheck(() => {
        return new Promise((resolve, reject) => {
            RNFetchBlob
            .fetch('GET', src)
            .then( res => {
                let base64Str = res.data;
                let pdfLocation = `storage/sdcard0/delegations/delegation-pdf.pdf`;
                RNFetchBlob.fs.writeFile(pdfLocation, base64Str, 'base64');
                Alert.alert(
                    'Raport został zapisany', 
                    'Raport zapisany w ' + pdfLocation
                );
                resolve(pdfLocation);
            })
        }).catch((error) => {
            console.log("Error", error)
        });
    });
}

export default class PDFScreen extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            link: `${url}${this.props.navigation.state.params.uuid || null}`
        }
    }

    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        
        return {
            headerRight: (
                <Touchable onPress={() => downloadFile(`${url}${params.uuid}`)} background={TouchableNativeFeedback.Ripple('rgba(0, 0, 0, .32)', true)}>
                    <ButtonWrapper>
                        <Icon name="file-download" size={25} color="#fff" />
                    </ButtonWrapper>
                </Touchable>
            ),
        }
      };

    render() {
        const source = {uri: this.state.link, cache:true};
 
        return (
            <Container>
                <Pdf source={source} style={styles.pdf}/>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    pdf: {
        flex: 1,
        width: Dimensions.get('window').width,
    }
});