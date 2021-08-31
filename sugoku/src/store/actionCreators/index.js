import { SET_SUGOKU, SET_VALIDATE, SET_AUTO_SOLVED, SET_LOADING } from '../constants/actionTypes'
import encodeParams from '../helpers/handleContentType'

export function fetchSugoku(props){
  return (dispatch) => {
    dispatch(setLoading(true))
    fetch(`https://sugoku.herokuapp.com/board?difficulty=${props.difficult}`)
    .then(response => response.json())
    .then(sugokuNumbers => {
      // console.log(props, 'action 1');
      dispatch({
        type: SET_SUGOKU,
        payload: sugokuNumbers.board
      })
    })
    .catch(err => {
      console.log(err);
    })
    .finally((_) => {
      dispatch(setLoading(false))
    })
  }
}

export function validateSugoku(input){
  return (dispatch) => {
    dispatch(setLoading(true))
    fetch('https://sugoku.herokuapp.com/validate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: encodeParams({input})
    })
    .then(response => response.json())
    .then(validateData => {
      // console.log(validateData, 'action');
      dispatch({
        type: SET_VALIDATE,
        payload: validateData.status
      })
    })
    .catch(err => {
      console.log(err);
    })
    .finally((_) => {
      dispatch(setLoading(false))
    })
  }
}

export function autoSolve(board){
  return (dispatch) => {
    dispatch(setLoading(true))
    fetch('https://sugoku.herokuapp.com/solve', {
      method: 'POST',
      body: encodeParams({ board }),
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
    .then(response => response.json())
    .then(response => {
      // console.log(response.status, '<<<<autoooo')
      dispatch({
        type: SET_AUTO_SOLVED,
        payload:{
        solved: response.solution,
        status: response.status 
      } 
    })
  })
  .catch(console.warn)
  .finally((_) => {
    dispatch(setLoading(false))
  })
  }
}

export function setLoading(input){
  return {
    type: SET_LOADING,
    payload: input
  }
}
