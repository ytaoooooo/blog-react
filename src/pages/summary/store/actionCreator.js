// import axios from 'axios'
import { fromJS } from 'immutable'
import * as actionType from './actionType'

// const getRecommendList = (list) => ({
//     type: actionType.GET_RECOMMEND_DATA,
//     list: fromJS(list)
// })

export const setSideBarItemSelect = (index)=>({
    type: actionType.SET_SIDEBAR_ITEM_SELECT,
    index: fromJS(index)
    
})
