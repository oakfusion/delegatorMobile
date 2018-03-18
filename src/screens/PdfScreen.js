import React from 'react';
import { StyleSheet, Dimensions, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Pdf from 'react-native-pdf';
 
export default class PDFScreen extends React.Component {
    static navigationOptions = {
        headerRight: (
            <View>
                <TouchableOpacity style={{paddingLeft: 15}} onPress={() => {}}>
                    <Icon name="file_download" size={30} color="#fff" />
                </TouchableOpacity>
            </View>
        ),
      };

    render() {
        const { params } = this.props.navigation.state;
        const uuid = params ? params.uuid : null;

        const source = {uri:`https://delegator.oakfusion.pl/report/print?uuid=${JSON.stringify(uuid)}`, cache:true};
 
        return (
            <View style={styles.container}>
                <Pdf
                    source={source}
                    onLoadComplete={(numberOfPages,filePath)=>{
                        console.log(`number of pages: ${numberOfPages}`);
                    }}
                    onPageChanged={(page,numberOfPages)=>{
                        console.log(`current page: ${page}`);
                    }}
                    onError={(error)=>{
                        console.log(error);
                    }}
                    style={styles.pdf}/>
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