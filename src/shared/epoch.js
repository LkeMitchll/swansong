export const getNow = () => {
  var epoch = Math.round(new Date().getTime() / 1000)
  return epoch
}

export const getStartOfLastWeek = now => {
  var d = now
  d.setHours(0, 0, 0, 0)
  var day = d.getDate() - d.getDay() - 6
  var epoch = Math.round(new Date(d.setDate(day)).valueOf() / 1000)
  return epoch
}

export const getEndOfLastWeek = now => {
  var d = now
  d.setHours(23, 59, 59, 0)
  var day = d.getDate() - d.getDay()
  var epoch = Math.round(new Date(d.setDate(day)).valueOf() / 1000)
  return epoch
}
