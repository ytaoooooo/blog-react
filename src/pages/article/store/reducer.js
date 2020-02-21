import {fromJS} from 'immutable'
import * as actionType from './actionType'


const defaultState = fromJS({
    articleList:[]
})


export default (state=defaultState, action)=>{
    switch (action.type) {
        case actionType.GET_ARTICLE_LIST:
            return state.set('articleList',action.articleList)
        default:
            return state
    }
}