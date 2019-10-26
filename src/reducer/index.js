import { combineReducers } from 'redux'

import user from './user/index'
import distrito from './distrito'
import side from './sidebar/index'

const reducers = combineReducers({
  user,
  distrito,
  side,
})

export default reducers
