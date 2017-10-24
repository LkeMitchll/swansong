var base_url = "http://ws.audioscrobbler.com/2.0/"
var urlConstructor = (method, user, options) => {
  return `${base_url}?method=${method}&user=${user}&api_key=${process.env.LASTFM_API_KEY}&format=json${options}`
}

export default urlConstructor
