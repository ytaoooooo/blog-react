import {fromJS} from 'immutable'
// import * as actionType from './actionType'


const defaultState = fromJS({
    articleList:[
        {
            id:0,
            articleImg: "https://yangicheng.cn/static/image/blog-summary/javascript.png",
            articleHeader: "关于网站，关于博客",
            articleLabel: ['心路历程','闲谈'],
            articleDate:'2.17'
        },
        {
            id:1,
            articleImg: "https://yangicheng.cn/static/image/blog-summary/javascript.png",
            articleHeader: "关于网站，关于博客",
            articleLabel: ['心路历程','闲谈'],
            articleDate:'2.18'
        }
    ]
})


export default (state=defaultState, action)=>{
    switch (action.type) {
        // case actionType.GET_RECOMMEND_DATA:
        //     return state.set('recommendList',action.list)
        default:
            return state
    }
}