import React, { Component } from 'react'
import {
    ArticleWrapper,
    ArticleContainer,
    ArticleHeader,
    ArticleContent,
    ArticleLeft,
    ArticleRight
} from './style'
import Swiper from 'swiper/js/swiper';
import 'swiper/css/swiper.css'

class Article extends Component {
    componentDidMount() {
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
    }
    render() {
        return (
            <ArticleWrapper>
                <ArticleContainer>
                    <ArticleHeader>
                        <div className="title"> مقالات </div>
                    </ArticleHeader>
                    <ArticleContent>
                        <ArticleLeft>
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
                                    <img src="https://www.yangicheng.cn/static/image/cover.jpg" alt="" className="article-img"/>
                                    <div className="article-content">
                                        <div className="article-title">关于个人博客</div>
                                        <div className="article-summary">
                                            <div className="label">python</div>
                                            <div className="date">2.15</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="article-item">
                                    <img src="https://www.yangicheng.cn/static/image/cover.jpg" alt="" className="article-img"/>
                                    <div className="article-content">
                                        <div className="article-title">关于个人博客</div>
                                        <div className="article-summary">
                                            <div className="label">python</div>
                                            <div className="date">2.15</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="article-item">
                                    <img src="https://www.yangicheng.cn/static/image/cover.jpg" alt="" className="article-img"/>
                                    <div className="article-content">
                                        <div className="article-title">关于个人博客</div>
                                        <div className="article-summary">
                                            <div className="label">python</div>
                                            <div className="date">2.15</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="article-item">
                                    <img src="https://www.yangicheng.cn/static/image/cover.jpg" alt="" className="article-img"/>
                                    <div className="article-content">
                                        <div className="article-title">关于个人博客</div>
                                        <div className="article-summary">
                                            <div className="label">python</div>
                                            <div className="date">2.15</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ArticleLeft>
                        <ArticleRight>
                            <div>sideBar</div>
                        </ArticleRight>
                    </ArticleContent>
                </ArticleContainer>

            </ArticleWrapper>
        )
    }
}

export default Article