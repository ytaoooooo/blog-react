// import axios from 'axios'
// import { fromJS } from 'immutable'
// import * as actionType from './actionType'

// const getRecommendList = (list) => ({
//     type: actionType.GET_RECOMMEND_DATA,
//     list: fromJS(list)
// })

// const getTopicList = (list)=>({
//     type: actionType.GET_TOPIC_DATA,
//     list: fromJS(list)
// })

// const getList = (list)=>({
//     type: actionType.GET_LIST_DATA,
//     list: fromJS(list)
// })

// const loadMore = (page)=>({
//     type: actionType.LOAD_MORE,
//     page
// })

// export const getRecommendListAction = () => {
//     return (dispatch) => {
//         axios.get('api/recommendList.json')
//             .then((res) => {
//                 const data = res.data
//                 dispatch(getRecommendList(data.data))
//             })
//     }
// }

// export const getTopicListAction = ()=>{
//     return (dispatch)=>{
//         axios.get('api/topicList.json')
//         .then((res)=>{
//             const data = res.data
//             dispatch(getTopicList(data.data))
//         })
//     }
// }

// export const getListAction = ()=>{
//     return (dispatch)=>{
//         axios.get('api/list.json')
//         .then((res)=>{
//             const data = res.data
//             dispatch(getList(data.data))
//         })
//     }
// }

// export const toggleTopShow = (show)=>({
//     type: actionType.TOGGLE_SCROLL_TOP,
//     show
// })

// export const loadMoreAction = (page)=>{
//     return (dispatch)=>{
//         axios.get('api/loadMore.json?page='+page)
//         .then(()=>{
//             dispatch(loadMore(page+1))
//         })
//     }
// } 