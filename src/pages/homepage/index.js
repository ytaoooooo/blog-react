import React, { useState, useEffect } from 'react'
import {
    HomepageContainer,
    DesktopHeader,
    DesktopContent,
    ContentNav,
    Content,
    ArticleContainer
} from './style'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { actionCreator } from './store'

function Homepage(props) {
    const [select, setSelect] = useState(0);
    useEffect(() => {
        props.getNiceArticleList()
    }, [])

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
                                        {
                                            props.niceArticleList.toJS().map((item) => {
                                                return (
                                                    <div className="article-item" key={item.id}>
                                                        <img src={item.articleImg} alt="" />
                                                        <div className="article-content">
                                                            <Link to={'/article/articleDetail/' + item.id}>
                                                                <div className="article-title">{item.articleTitle}</div>
                                                            </Link>
                                                            <div className="article-summary">
                                                                <div className="label-container">
                                                                    {
                                                                        item.articleLabel.map((item, index) => {
                                                                            return (
                                                                                <div className="label" key={index}>{item}</div>
                                                                            )
                                                                        })
                                                                    }

                                                                </div>
                                                                <div className="date">{item.articleDate}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </ArticleContainer>
                                </Content>
                            )
                    }
                })()
                }
            </DesktopContent>
        </HomepageContainer>
    )

};



const mapState = (state) => ({
    niceArticleList: state.getIn(["homepage", "niceArticleList"])
})

const mapDispatch = (dispatch) => ({
    getNiceArticleList: () => {
        dispatch(actionCreator.getNiceArticleList())
    }
})

export default connect(mapState, mapDispatch)(Homepage)
