import React from 'react'
import Tabs from './tabs.js'
import RecentTracks from './recent_tracks.js'
import Footer from './footer.js'

import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from '../shared/reducers'

const loggerMiddleware = createLogger()
const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
)

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Provider store={store}>
          <Tabs />
        </Provider>
        <RecentTracks />
        <Footer />
      </React.Fragment>
    )
  }
}

export default App
