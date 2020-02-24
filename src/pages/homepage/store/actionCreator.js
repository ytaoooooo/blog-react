import axios from 'axios'
import { fromJS } from 'immutable'
import * as actionType from './actionType'

// const getRecommendList = (list) => ({
//     type: actionType.GET_RECOMMEND_DATA,
//     list: fromJS(list)
// })


const getNiceArticleListAction = (niceArticleList)=>({
    type: actionType.GET_NICE_ARTICLE_LIST,
    niceArticleList
})

export const getNiceArticleList = ()=>{
    return (dispatch)=>{
        axios.get("https://yangicheng.cn/node/api/v1/article/nice")
        .then((res)=>{
            const niceArticleList = fromJS(res.data.data.niceArticleList)
            dispatch(getNiceArticleListAction(niceArticleList))
        })
    }
}

const getNiceSummaryListAction = (niceSummaryList)=>({
    type: actionType.GET_NICE_SUMMARY_LIST,
    niceSummaryList
})

export const getNiceSummaryList = ()=>{
    return (dispatch)=>{
        axios.get("https://yangicheng.cn/node/api/v1/summary/nice")
        .then((res)=>{

            const niceSummaryList = fromJS(res.data.data.niceSummaryItem)
            dispatch(getNiceSummaryListAction(niceSummaryList))
        })
    }
}