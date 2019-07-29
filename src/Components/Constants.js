import { Constants } from 'expo'
import { Dimensions, Platform } from 'react-native'
import { Localization } from 'expo-localization';

export const STATUS_BAR_HEIGHT = Constants.statusBarHeight
export const HEIGHT = Dimensions.get('window').height
export const WIDTH = Dimensions.get('window').width
export const MAIN_COLOR = '#0b7f7c'
export const LANGUAGE = Localization.locale.split("-")[0]
export const OS = Platform.OS