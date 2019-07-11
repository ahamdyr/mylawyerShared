export const timeDifference = (previous) => {
  var msPerMinute = 60 * 1000
  var msPerHour = msPerMinute * 60
  var msPerDay = msPerHour * 24
  var msPerMonth = msPerDay * 30
  var msPerYear = msPerDay * 365

  var elapsed = Date.now() - Date.parse(previous)
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
export const lockTimeLeft = (previous) => {
  var msPerMinute = 60 * 1000
  var msPerHour = msPerMinute * 60
  var msPerDay = msPerHour * 24
  var msPerMonth = msPerDay * 30
  var msPerYear = msPerDay * 365
  var refrence = msPerDay

  var elapsed = refrence - Date.now() - Date.parse(previous)
  if (elapsed < msPerMinute) {
    return Math.round(elapsed / 1000) + ' seconds'
  } else if (elapsed < msPerHour) {
    return Math.round(elapsed / msPerMinute) + ' minutes'
  } else if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHour) + ' hours'
  } else if (elapsed < msPerMonth) {
    return 'about ' + Math.round(elapsed / msPerDay) + ' days'
  } else if (elapsed < msPerYear) {
    return 'about ' + Math.round(elapsed / msPerMonth) + ' months'
  } else {
    return 'about ' + Math.round(elapsed / msPerYear) + ' years ago'
  }
}