import React, { useEffect } from 'react'
import { actionCreator } from './store'
import {
    ArticleContainer,
    Header,
    ContentContainer,
    Content,
    SideBar

} from './style'


import Swiper from 'swiper/js/swiper';
import 'swiper/css/swiper.css'
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


function Article(props) {
    useEffect(() => {
        new Swiper('.swiper-container', {
            loop: true, // 循环模式选项
            // autoplay: true,
            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
        
    })
    useEffect(()=>{
        props.getArticleList();
    },[])
    return (
        <ArticleContainer>
            <Header>
                <div className="title"> مقالات </div>
            </Header>
            <ContentContainer>
                <Content>
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <img className="swiper-img" src="https://www.yangicheng.cn/static/image/cover.jpg" alt="" />
                            </div>
                            <div className="swiper-slide">
                                <img className="swiper-img" src="https://www.yangicheng.cn/static/image/cover.jpg" alt="" />
                            </div>
                            <div className="swiper-slide">
                                <img className="swiper-img" src="https://www.yangicheng.cn/static/image/cover.jpg" alt="" />
                            </div>
                        </div>
                        <div className="swiper-pagination"></div>
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                    </div>
                    <div className="article-container">
                        <div className="article-item">
                            <img src="https://yangicheng.cn/static/image/blog-summary/javascript.png" alt="" className="article-img" />
                            <div className="article-content">
                                <div className="article-title">关于网站，关于博客</div>
                                <div className="article-summary">
                                    <div className="label-container">
                                        <div className="label">闲谈</div>
                                        <div className="label">心路历程</div>
                                    </div>
                                    <div className="date">2.21</div>
                                </div>
                            </div>
                        </div>
                        <div className="article-item">
                            <img src="https://yangicheng.cn/static/image/blog-summary/javascript.png" alt="" className="article-img" />
                            <div className="article-content">
                                <div className="article-title">关于网站，关于博客</div>
                                <div className="article-summary">
                                    <div className="label-container">
                                        <div className="label">闲谈</div>
                                        <div className="label">心路历程</div>
                                    </div>
                                    <div className="date">2.21</div>
                                </div>
                            </div>
                        </div>
                        <div className="article-item">
                            <img src="https://yangicheng.cn/static/image/blog-summary/javascript.png" alt="" className="article-img" />
                            <div className="article-content">
                                <div className="article-title">关于网站，关于博客</div>
                                <div className="article-summary">
                                    <div className="label-container">
                                        <div className="label">闲谈</div>
                                        <div className="label">心路历程</div>
                                    </div>
                                    <div className="date">2.21</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Content>
                <SideBar>this is sideBar</SideBar>
            </ContentContainer>

        </ArticleContainer>

    )
}



const mapState = (state) => ({
    articleList: state.getIn(["article", "articleList"])
})

const mapDispatch = (dispatch) => ({
    getArticleList: ()=>{
        dispatch(actionCreator.getArticleList(dispatch))
    }
})


export default connect(mapState, mapDispatch)(Article);