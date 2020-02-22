import axios from 'axios'
import { fromJS } from 'immutable'
import * as actionType from './actionType'

// const getRecommendList = (list) => ({
//     type: actionType.GET_RECOMMEND_DATA,
//     list: fromJS(list)
// })
const getArticleDetailAction = (content)=>({
    type: actionType.GET_ARTICLE_DETAIL_CONTENT,
    content
})


export const getArticleDetailContent = (id) => {
    return (dispatch) => {
        axios.get(`https://yangicheng.cn/node/api/article/detail/?id=${id}`)
            .then((res) => {
                let content = fromJS(res.data.content)
                dispatch(getArticleDetailAction(content))
            })
            .catch((err)=>{
                console.log(err)
            })

    }
    // return (dispatch)=>{
    //     axios.get('https://www.yangicheng.cn/node/api/article')
    //         .then((res)=> {
    //             const articleList = fromJS(res.data.data.articleList)
    //             dispatch(initArticleListAction(articleList))
    //         })
    //         .catch((err)=> {
    //             console.log(err)
    //         })
    // }
}
