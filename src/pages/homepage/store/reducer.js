import {fromJS} from 'immutable'
import * as actionType from './actionType'

const defaultState = fromJS({
    niceArticleList: []
})


export default (state=defaultState, action)=>{
    switch (action.type) {
        case actionType.GET_NICE_ARTICLE_LIST:
            return state.set('niceArticleList',action.niceArticleList)
        default:
            return state
    }
}