import { handleActions } from 'redux-actions'
import { SAVEUSERINFO } from '../types/user'

export default handleActions({
  [SAVEUSERINFO] (state, action) {
    return {
      ...state,
      userInfo: action.payload
    }
  }
}, {
  userInfo: {
    loginname: ''
  }
})
