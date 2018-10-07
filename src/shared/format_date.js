var formatDate = uts => {
  var date = new Date(uts * 1000)
  var day = date.getDate()
  var month = date.getMonth() + 1
  var hour = date.getHours()
  var mins = date.getMinutes()
  return `${day}/${month} (${hour}:${mins})`
}

export default formatDate
