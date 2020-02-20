import React, { Component, Fragment } from 'react'
import {
    DesktopContainer,
    DesktopHeader,
    DesktopEntrance,
    MobileContainer,
    MobileHeader,
    MobileEntrance
} from './style'
import { Link } from 'react-router-dom';
class Home extends Component {
    render() {
        return (
            <Fragment>
                <DesktopContainer>
                    <DesktopHeader>
                        <div className="headerTitle">&nbsp;&nbsp;&nbsp;هيلث ›</div>
                    </DesktopHeader>
                    <DesktopEntrance>
                        <i className="iconfont icon-container">&#xe9d9;</i>
                        <Link to="/homepage">
                            <img src="https://www.yangicheng.cn/static/image/cover.jpg" alt="" title="主页" />
                        </Link>
                        <Link to="/article">
                            <img src="https://www.yangicheng.cn/static/image/cover.jpg" alt="" title="文章" />
                        </Link>
                        <Link to="/summary">
                            <img src="https://www.yangicheng.cn/static/image/cover.jpg" alt="" title="总结" />
                        </Link>
                        <i className="iconfont icon-container">&#xe9da;</i>
                    </DesktopEntrance>
                </DesktopContainer>
                <MobileContainer>
                    <MobileHeader>
                        <div className="headerTitle"> ديموغرافيا </div>
                    </MobileHeader>
                    <MobileEntrance>
                        <Link to="/homepage">
                            <div className="entrance entrance-homepage"></div>
                        </Link>
                        <Link to="/article">
                            <div className="entrance entrance-article"></div>
                        </Link>
                        <Link to="/summary">
                            <div className="entrance entrance-summary"></div>
                        </Link>
                    </MobileEntrance>
                </MobileContainer>
            </Fragment>

        )
    }
}


export default Home