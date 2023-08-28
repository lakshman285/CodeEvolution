import {Dimensions, Linking, Platform} from 'react-native';
import {LOG} from '../helpers/LoggingConfig';
import NetInfo from '@react-native-community/netinfo';

export default class Utils {
  static openLink = async (url: String) => {
    const canBeOpen = await Linking.canOpenURL(url);
    if (!canBeOpen) {
      LOG.error('Failed to open ', url);
    }

    await Linking.openURL(url);
  };

  static isEmpty(val: any): boolean {
    return (
      val === null ||
      val === undefined ||
      val === '' ||
      (Array.isArray(val) && val.length === 0) ||
      (Object.keys(val).length === 0 && val.constructor === Object)
    );
  }

  static getDeviceDimension() {
    return {
      deviceWidth: Dimensions.get('window').width,
      deviceHeight: Dimensions.get('window').height,
    };
  }

  static isIOS(): boolean {
    return Platform.OS === 'ios';
  }

  static isAndroid() {
    return Platform.OS === 'android';
  }

  static async isNetworkAvailable() {
    const {isConnected} = await NetInfo.fetch();
    return isConnected;
  }
}
