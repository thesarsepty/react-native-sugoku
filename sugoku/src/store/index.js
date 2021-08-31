import { createStore, applyMiddleware } from 'redux'
import { SET_SUGOKU, SET_VALIDATE, SET_AUTO_SOLVED, SET_LOADING} from './constants/actionTypes'
import ReduxThunk from 'redux-thunk'

const initialState = {
  sugoku: [],
  status: 'unsolved',
  solved: [],
  loading: false
}

function reducer (state = initialState, action){

    switch (action.type) {
      case SET_SUGOKU:
        return { ...state, sugoku: action.payload }
      
      case SET_VALIDATE:
        return { ...state, status: action.payload } 
        
      case SET_AUTO_SOLVED:
        return { ...state, solved: action.payload.solved, status: action.payload.status }  

      case SET_LOADING:
        return { ...state, loading: action.payload }   
        
      default:
        return state
    }
}

const middleware = applyMiddleware(ReduxThunk)
const store = createStore(reducer, middleware)

export default store