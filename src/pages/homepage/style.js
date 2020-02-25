import styled from 'styled-components'

export const HomepageContainer = styled.div`
    display:flex;
    flex-direction: column;
    width: 100%;
    font-family:"PingFang SC","微软雅黑","Microsoft YaHei",Helvetica,"Helvetica Neue",Tahoma,Arial,sans-serif;
    .back {
        position: fixed;
        font-size: 40px;
        top: 30px;
        left : 30px;
        @media only screen and (max-width:30rem){
            display: none
        }
    }
`

export const DesktopHeader = styled.header`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    height: 25%;
    width: 75%;
    background: #F2EEDF;
    padding: 0 12.5%;
    @media only screen and (max-width:30rem){
        display:flex;
        flex-direction: row;
        width:100%;
        height: 10rem;
        background: #F2EEDF;
        padding: 0;
        
    }
    
    .left-container{
        display: flex;
        flex-direction:row;
        align-items: center;
        img{
            position:relative;
            top: 3rem;
            box-sizing: border-box;
            width:14rem;
            border-radius: 50%;
            border: .6rem solid red;
            @media only screen and (max-width:30rem){
                width: 7rem;
                top: 0;
                border: 0;
                margin-left: 3rem;
            }
        }
        .info-container{
            display:flex;
            position:relative;
            top: 3rem;
            flex-direction: column;
            justify-content:center;
            height:100%;
            margin-left: 2rem;
            line-height: 1.5;
            @media only screen and (max-width: 30rem){
                display:flex;
                flex-direction: column;
                justify-content:center;
                height:100%;
                top:0;
                margin-left: 2rem;
                line-height: 1.5;
            }
            .name{
                font-weight: 600;
                font-size: 3rem;
                margin-bottom: 1rem;
                @media only screen and (max-width: 30rem){
                    font-size: 2rem;
                    margin-bottom: 0;
                }
            }
            .other{
                font-size: 1.4rem;
                margin-top: 1rem;
                margin-bottom:3rem;
                padding-left: 1rem;
                @media only screen and (max-width: 30rem){
                    font-size: 1.4rem;
                    margin-top: 0 ;
                    margin-bottom:1rem;
                    padding-left: 0;
                }
            }
        }
    }
    .right-container{
        height:100%;
        @media only screen and (max-width:30rem){
            display: none;
        }
    }
`


export const DesktopContent = styled.section`
    display:flex;
    flex-direction: row;
    width: 75%;
    margin: 0 auto;
    margin-top: 5rem;
    @media only screen and (max-width: 30rem){
        display:flex;
        flex-direction: column;
        width: 95%;
        margin:0 auto;
        margin-top: 0;
    }
`

export const ContentNav = styled.nav`
    display: flex;
    flex-direction: column; 
    width: 25%;
    margin-right: 5%;

    @media only screen and (max-width: 30rem){
        display:grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: auto;
        width:100%;
    }
    .nav-item{
        display:flex;
        flex-direction: row;
        justify-content: space-around;
        font-size: 1.7rem;
        padding: 1.2rem 1.2rem;
        line-height: 1.5;
        color: #787d82;
        border-radius: 1rem;
        @media only screen and (max-width: 30rem){
            display: flex;
            flex-direction: row;
            justify-content: center;
            font-size:1.5rem;
            line-height: 2;
            padding-bottom: .2rem;
            margin: 1rem 0;
            border-radius: 0;
        }
        .icon{
            @media only screen and (max-width: 30rem){
                display: none;
            }
        }
    }
    .nav-select {
        background: rgba(240,20,20,.8);
        color: #fff;
        
        @media only screen and (max-width: 30rem){
            border-bottom: 0.2rem solid #F2EEDF;
            background: #fff;
            color: #222222;
        }
    }
`
export const Content = styled.section`
    display:flex;
    flex-direction: column;
    width: 70%;

    @media only screen and (max-width: 30rem){
        display:flex;
        flex-direction: column;
        width: 100%;
    }
`

export const ArticleContainer = styled.div`
    display:flex;
    flex-direction: column;
    width:100%;
    @media only screen and (max-width: 30rem){
        display:flex;
        flex-direction: column;
        width:100%;
    }
    .article-item{
        display:flex;
        flex-direction: row;
        width:100%;
        @media only screen and (max-width: 30rem){
            display:flex;
            flex-direction: row;
            width:100%;
        }
        img{
            width:8rem;
            height:8rem;
            border-radius: 2rem;
            margin: 1rem 3rem 1rem 0;
            @media only screen and (max-width: 30rem){
                width: 8rem;
                height: 8rem;
                border-radius: 1rem;
                margin:0.5rem 1.5rem 1rem 0 ;
            }
        }
        .article-content{
            a:link {
                text-decoration: none;
                }
            display:flex;
            flex-direction: column;
            justify-content: space-between;
            width: calc(100% - 11rem);
            @media only screen and (max-width: 30rem){
                display:flex;
                flex-direction: column;
                justify-content:space-between;
                width: calc(100% - 9.5rem);
            }
        
            .article-title{
                font-weight: 600;
                font-size:2rem;
                line-height: 1.5;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                word-break: keep-all;
                width:100%;
                margin-top:1.2rem;
                color: #222;

                @media only screen and (max-width: 30rem){
                    font-weight: 600;
                    font-size: 1.8rem;      
                    line-height: 1.5;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    word-break: keep-all;
                    width:100%;
                    margin-top:1.2rem;
                }
            }
            .article-summary{
                display:flex;
                flex-direction: row;
                justify-content: space-between;
                margin-bottom: 0.6rem;
                padding-bottom: 1.5rem;
                border-bottom: .1rem solid #F2EEDF;
                @media only screen and (max-width: 30rem){
                    display:flex;
                    flex-direction: row;
                    justify-content: space-between;
                    margin-bottom: 0.6rem;
                    padding-bottom: 1.5rem;
                    border-bottom: .1rem solid #F2EEDF;
                    
                }
                .label-container{
                    display:flex;
                    flex-direction:row;
                    @media only screen and (max-width: 30rem){
                        display:flex;
                        flex-direction:row;
                    }
                    .label{
                        display:flex;
                        flex-direction: row;
                        justify-content: center;
                        color: #545c63;
                        background: rgba(84,92,99,0.1);
                        line-height: 1.5;
                        border-radius: .8rem;
                        padding: .4rem .6rem;
                        font-size: 1.2rem;
                        margin-right: 1rem;
                        @media only screen and (max-width: 30rem){
                            display:flex;
                            flex-direction: row;
                            justify-content: center;
                            color: #545c63;
                            background: rgba(84,92,99,0.1);
                            line-height: 1.5;
                            border-radius: .6rem;
                            padding: .4rem .6rem;
                            font-size: 1.2rem;
                            margin-right: 1rem;
                        }
                    }
                }
                .date{
                    display:flex;
                    flex-direction: row;
                    justify-content:center;
                    align-items: center;
                    color: #9199a1;
                    font-size: 1.4rem;
                    margin-right: 1rem;
                    margin-top:0.2rem;
                    @media only screen and (max-width: 30rem){
                        display:flex;
                        flex-direction: row;
                        justify-content:center;
                        align-items: center;
                        color: #9199a1;
                        font-size: 1.1rem;
                        margin-right: 1rem;
                        margin-top:0.2rem;
                    }
                }
            }
        }
        
    }    
`

export const NoteContainer = styled.section `
    display:flex;
    flex-direction: column;
    width:100%;

`
export const NoteItem = styled.div `
    display:flex;
    flex-direction: row;
    height: 4rem;
    padding: .5rem 0;
    border-bottom: .1rem solid #F2EEDF;
    
    .item-icon{
        margin-right: .5rem;
        .icon{
            font-size: 2.6rem;

        }
    }
    .item-container{
        display:flex;
        flex-direction: column;
        justify-content:space-between;
        width:100%;
        a:link{
            text-decoration: none;
        }
        .title{
            font-size: 1.6rem;
            line-height: 1.5;
            color: #0366d6;
        }
        .other{
            display:flex;
            padding:.2rem 0;
            width:100%;
            flex-direction: row-reverse;
            color: #9199a1;
            font-size: 1.1rem;
            
        }
        
    }

`



