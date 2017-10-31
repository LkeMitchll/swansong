var getSundayEpoch = (now) => {
  var d = now
  var sunday = d.getDate() - d.getDay()
  var epoch = Math.round(new Date(d.setDate(sunday)).valueOf() / 1000)

  return epoch
}

export default getSundayEpoch
