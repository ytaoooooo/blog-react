import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import {
    HeaderWrapper,
    HeaderContainer,
    
} from './style'


class Header extends Component {
    constructor(props){
        super(props)
        this.state={
            login: false
        }
    }
    render() {
        return (
            <HeaderWrapper>
                <HeaderContainer>
                    
                    <div className="iconfont-container">
                    <Link to="/">
                        <i className="iconfont icon">&#xea66;</i>
                        </Link>
                    </div>
                    
                    <div className="font-container">
                        <div className="font-item">~</div>
                        <div className="font-item">هيلث ›</div>
                    </div>

                    <div className="login-container">
                        {this.state.login? 
                        <i className="iconfont login">&#xe6e4;</i>:
                        <Link to="/login">
                        <i className="iconfont login">&#xe63a;</i>
                        </Link>
                        } 
                    </div>
                </HeaderContainer>
            </HeaderWrapper >
        )
    }
}

export default Header