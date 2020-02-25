import React, { useEffect } from 'react'
import {
    SummaryDetailContainer,
    Title,
    SummaryWrapper,
    Summary,
    SideBar
} from './style'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { actionCreator } from './store'

function SummaryDetail(props) {
    const {getSummaryDetailContent} = props
    const id = props.match.params.id 
    useEffect(() => {
        getSummaryDetailContent(id)
    },[getSummaryDetailContent,id])
    // const contenta = `
    //     <h1>关于网站</h1>
    //     <p>网站的是基于react框架开发，采用了响应式开发，目前兼容了小屏移动端和pc网页端，样式在慢慢改进，功能会慢慢增加。设计能力也需要加强学习</p>
    //     <p>react开发使用了hooks，路由，和redux。源码可以进入我的仓库查看</p>
    //     <p>后端暂时是用的node，只写了简单的逻辑代码</p>
    //     <p>后台管理系统还在开发中,准备使用react + antd 框架，之后有时间的话会用vue和vue好用的后台管理模板练练手</p>
    //     <p>网站的服务器是租的腾讯云的学生服务器，学生服务器挺便宜的。而且性能够用。云服务器上配置了node和nginx。nginx配置了https和node的反向代理。如果想要参照，我会在文章中贴上详细步骤</p>
    //     <h1>关于博客</h1>
    //     <p>这是我自己开发的网站，我也会好好的将它完善，将自己学习的一些经验分享给大家，踩过的一些坑也会分享给大家，在从无到有的过程中，需要注意的地方我也会详细的将细节写出来，前端在配置服务器的时候确实会有一些困难，因为没有怎么学过计算机的课程</p>
    //     <p>根据板块可以选择你喜欢的内容进行浏览，在以后添加了点赞评论功能之后希望你也能动动手指给我一点鼓励</p>
    //     <p>学习代码的动力就是看到自己的成果，希望我能一直坚持下去</p>

    // `
    

    return (
        <SummaryDetailContainer>
            <Link to="/summary">
                <i className="iconfont back">&#xe9da;</i>
            </Link>
            <Title>غرب شارع</Title>
            <SummaryWrapper>
                <Summary>
                    <header>{props.data.toJS().title}</header>
                    {/* <header>123</header> */}
                    <content dangerouslySetInnerHTML={{ __html: props.data.toJS().content }}></content>
                    {/* <content dangerouslySetInnerHTML={{ __html: contenta }}></content> */}
                    <footer></footer>
                </Summary>
                <SideBar>

                </SideBar>
            </SummaryWrapper>
        </SummaryDetailContainer>
    )
}


const mapState = (state) => ({
    data: state.getIn(['summaryDetail','data'])
})

const mapDispatch = (dispatch) => ({
    getSummaryDetailContent: (id)=>{
        dispatch(actionCreator.getSummaryDetailContent(id))
    }
})

export default connect(mapState, mapDispatch)(SummaryDetail)