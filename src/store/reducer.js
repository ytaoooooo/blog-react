import { combineReducers } from 'redux-immutable'
// import { reducer as headerReducer} from '../common/header/store'
import { reducer as articleDetailReducer} from '../pages/articleDetail/store'
import { reducer as homeReducer } from '../pages/home/store'
import { reducer as summaryReducer } from '../pages/summary/store'
import { reducer as articleReducer } from '../pages/article/store'

export default combineReducers({
    article: articleReducer,
    home: homeReducer,
    summary: summaryReducer,
    articleDetail: articleDetailReducer,
})