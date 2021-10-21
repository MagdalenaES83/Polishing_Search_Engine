import { createStore } from 'redux'
import mainReducer from '../reducer/index.js'

export const initialState = {
    list: {
        fav:[]
     },
}

const configureStore = createStore(
    mainReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  export default configureStore