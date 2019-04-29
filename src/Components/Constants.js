import {Constants} from 'expo'
import {Dimensions} from 'react-native'

export const STATUS_BAR_HEIGHT = Constants.statusBarHeight
export const HEIGHT = Dimensions.get('window').height
export const WIDTH = Dimensions.get('window').width

export const timeDifference = (previous) => {
  var msPerMinute = 60 * 1000
  var msPerHour = msPerMinute * 60
  var msPerDay = msPerHour * 24
  var msPerMonth = msPerDay * 30
  var msPerYear = msPerDay * 365

  var elapsed = Date.now() - previous

  if (elapsed < msPerMinute) {
    return Math.round(elapsed / 1000) + ' seconds ago'
  } else if (elapsed < msPerHour) {
    return Math.round(elapsed / msPerMinute) + ' minutes ago'
  } else if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHour) + ' hours ago'
  } else if (elapsed < msPerMonth) {
    return 'about ' + Math.round(elapsed / msPerDay) + ' days ago'
  } else if (elapsed < msPerYear) {
    return 'about ' + Math.round(elapsed / msPerMonth) + ' months ago'
  } else {
    return 'about ' + Math.round(elapsed / msPerYear) + ' years ago'
  }
}