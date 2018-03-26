import React from 'react';
import { StyleSheet, Dimensions, View, TouchableNativeFeedback, TouchableOpacity, Platform, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Pdf from 'react-native-pdf';
import RNFetchBlob from 'react-native-fetch-blob'


const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

const url = 'https://delegator.oakfusion.pl/report/print?uuid=';

function downloadFile (src) {
    return new Promise((resolve, reject) => {
        RNFetchBlob
        .fetch('GET', src)
        .then( res => {
            let base64Str = res.data;
            let pdfLocation = `storage/sdcard0/delegations/delegation-${new Date().toISOString()}.pdf`;
            RNFetchBlob.fs.writeFile(pdfLocation, base64Str, 'base64');
            alert('Raport zapisany w ' + pdfLocation);
            resolve(pdfLocation);
        })
    }).catch((error) => {
        console.log("Error", error)
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
                    <View style={{padding: 15}}>
                        <Icon name="file-download" size={25} color="#fff" />
                    </View>
                </Touchable>
            ),
        }
      };

    render() {

        const source = {uri: this.state.link, cache:true};
 
        return (
            <View style={styles.container}>
                <Pdf source={source} style={styles.pdf}/>
            </View>
        )
  }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
    }
});