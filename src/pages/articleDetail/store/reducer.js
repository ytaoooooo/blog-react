import {fromJS} from 'immutable'
import * as actionType from './actionType'

const defaultState = fromJS({
    content: ''
})


export default (state=defaultState, action)=>{
    switch (action.type) {
        case actionType.GET_ARTICLE_DETAIL_CONTENT:
            return state.set('content',action.content)
        default:
            return state
    }
}