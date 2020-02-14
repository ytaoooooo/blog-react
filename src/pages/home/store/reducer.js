// import {fromJS} from 'immutable'
import * as actionType from './actionType'

// const defaultState = fromJS({
//     topicList:[],
//     recommendList:[],
//     list:[],
//     showScroll: false,
//     page: 1
// })
const defaultState = {
    test: 1
}

export default (state=defaultState, action)=>{
    switch (action.type) {
        case actionType.GET_RECOMMEND_DATA:
            return state.set('recommendList',action.list)
        case actionType.GET_TOPIC_DATA:
            return state.set('topicList',action.list)
        case actionType.GET_LIST_DATA:
            return state.set('list',action.list)
        case actionType.TOGGLE_SCROLL_TOP:
            return state.set('showScroll', action.show)
        case actionType.LOAD_MORE:
            return state.set('page',action.page)
        default:
            return state
    }
}