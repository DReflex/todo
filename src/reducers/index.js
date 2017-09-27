import { combineReducers } from 'redux'
import todos from './reducer'
import coffieZenica from './coffie-zenica'

const todoApp = combineReducers({
  todos,
  coffieZenica
})

export default todoApp
