import { combineReducers } from 'redux-immutable'
// import { reducer as headerReducer} from '../common/header/store'
import { reducer as homeReducer } from '../pages/home/store'
import { reducer as summaryReducer } from '../pages/summary/store'
// import { reducer as loginReducer } from '../pages/login/store'

export default combineReducers({
    // header: headerReducer,
    home: homeReducer,
    summary: summaryReducer,
    // login: loginReducer
})