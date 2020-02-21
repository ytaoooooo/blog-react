import React, { useState } from 'react'
import {
    HomepageContainer,
    DesktopHeader,
    DesktopContent,
    ContentNav,
    Content,
    ArticleContainer
} from './style'
import { Link } from 'react-router-dom'

function Homepage() {
    const [select, setSelect] = useState(0);
    return (
        <HomepageContainer>
            <Link to="/">
                <i className="iconfont back">&#xe9da;</i>
            </Link>
            <DesktopHeader>
                <section className="left-container">
                    <img src="https://www.yangicheng.cn/static/image/cover.jpg" alt="avatar" />
                    <div className="info-container">
                        <span className="name">Towle</span>
                        <span className="other">never say die</span>
                    </div>
                </section>
                <section className="right-container">
                    <i className="iconfont icon">&#xea66;</i>
                </section>
            </DesktopHeader>
            <DesktopContent>
                <ContentNav>
                    <nav className={select === 0 ? "nav-item nav-select" : "nav-item"}
                        onClick={() => setSelect(0)}>
                        <i className="iconfont icon">&#xe6e4;</i>
                        <div>精选文章</div>
                    </nav>
                    <nav className={select === 1 ? "nav-item nav-select" : "nav-item"}
                        onClick={() => setSelect(1)}>
                        <i className="iconfont icon">&#xe6e4;</i>
                        <div>精选笔记</div>
                    </nav>
                    <nav className={select === 2 ? "nav-item nav-select" : "nav-item"}
                        onClick={() => setSelect(2)}>
                        <i className="iconfont icon">&#xe6e4;</i>
                        <div>我的仓库</div>
                    </nav>
                    <nav className={select === 3 ? "nav-item nav-select" : "nav-item"}
                        onClick={() => setSelect(3)}>
                        <i className="iconfont icon">&#xe6e4;</i>
                        <div>我的兴趣</div>
                    </nav>
                </ContentNav>

                {(() => {
                    switch (select) {
                        case 1:
                            return (<Content>笔记</Content>)
                        case 2:
                            return (<Content>仓库</Content>)
                        case 3:
                            return (<Content>兴趣</Content>)
                        default:
                            return (
                                <Content>
                                    <ArticleContainer>
                                        <div className="article-item">
                                            <img src="https://yangicheng.cn/static/image/blog-summary/javascript.png" alt="" />
                                            <div className="article-content">
                                                <div className="article-title">关于网站,关于博客</div>
                                                <div className="article-summary">
                                                    <div className="label-container">
                                                        <div className="label">asd</div>
                                                    </div>
                                                    <div className="date">2.21</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="article-item">
                                            <img src="https://yangicheng.cn/static/image/blog-summary/javascript.png" alt="" />
                                            <div className="article-content">
                                                <div className="article-title">关于网站,关于博客</div>
                                                <div className="article-summary">
                                                    <div className="label-container">
                                                        <div className="label">心路历程</div>
                                                        <div className="label">闲谈</div>
                                                    </div>
                                                    <div className="date">2.21</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="article-item">
                                            <img src="https://yangicheng.cn/static/image/blog-summary/javascript.png" alt="" />
                                            <div className="article-content">
                                                <div className="article-title">关于网站,关于博客</div>
                                                <div className="article-summary">
                                                    <div className="label-container">
                                                        <div className="label">心路历程</div>
                                                        <div className="label">闲谈</div>
                                                    </div>
                                                    <div className="date">2.21</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="article-item">
                                            <img src="https://yangicheng.cn/static/image/blog-summary/javascript.png" alt="" />
                                            <div className="article-content">
                                                <div className="article-title">关于网站,关于博客</div>
                                                <div className="article-summary">
                                                    <div className="label-container">
                                                        <div className="label">心路历程</div>
                                                        <div className="label">闲谈</div>
                                                    </div>
                                                    <div className="date">2.21</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="article-item">
                                            <img src="https://yangicheng.cn/static/image/blog-summary/javascript.png" alt="" />
                                            <div className="article-content">
                                                <div className="article-title">关于网站,关于博客</div>
                                                <div className="article-summary">
                                                    <div className="label-container">
                                                        <div className="label">心路历程</div>
                                                        <div className="label">闲谈</div>
                                                    </div>
                                                    <div className="date">2.21</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="article-item">
                                            <img src="https://yangicheng.cn/static/image/blog-summary/javascript.png" alt="" />
                                            <div className="article-content">
                                                <div className="article-title">关于网站,关于博客</div>
                                                <div className="article-summary">
                                                    <div className="label-container">
                                                        <div className="label">心路历程</div>
                                                        <div className="label">闲谈</div>
                                                    </div>
                                                    <div className="date">2.21</div>
                                                </div>
                                            </div>
                                        </div>
                                    </ArticleContainer>
                                </Content>
                            )
                    }
                })()
                }
            </DesktopContent>
        </HomepageContainer >
    )

};


export default Homepage
