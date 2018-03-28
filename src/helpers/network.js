import { NetInfo, Alert } from 'react-native';

export default function networkCheck (successCallback, errorCallback) {
    NetInfo.isConnected.fetch().then(isConnected => {
        if (isConnected) {
            successCallback();
        } else {
            Alert.alert('Problem z siecią', 'Nie masz połączenia z siecią');
            if (typeof errorCallback === 'function') errorCallback();
        }
    }); 
}