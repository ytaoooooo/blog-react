import styled from 'styled-components'

export const ArticleContainer = styled.div `
    display:flex;
    flex-direction: column;
    background-color:#F2EEDF;
    width:100%;
    min-height:100%;
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
export const Header = styled.header `
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width:100%;
    height: 12rem;
    @media only screen and (max-width: 30rem){
        height: 10rem;    
    }
    .title{ 
        font-family: "Lohit Devanagari", "ITF Devanagari";
        font-size: 3rem;
        font-weight: 400;
    }   
`
export const ContentContainer = styled.div `
    display: flex;
    flex-direction: row;
    width:70%;
    padding: 0 15%;
    background-color:#F2EEDF;
    @media only screen and (max-width: 30rem){
        width:calc(100% - 1rem);
        padding: 0 .5rem;
    }
`

export const Content = styled.div `
    display:flex;
    flex-direction: column;
    width:70%;
    padding-bottom: 2rem;
    @media only screen and (max-width: 30rem){
        width: 100%;
    }
    .swiper-container{
        width:100%;
        height: 300px;
        img{
            height: 300px;
            width: 100%;
            border-radius: 8px;
            @media only screen and (max-width: 30rem){
                height: 240px;
            }
        }
        @media only screen and (max-width: 30rem){
            height:  240px;
        }
    }
    .article-container{
        margin-top: 2rem;
        box-sizing: border-box;
        box-shadow: rgb(222, 222, 222) .3rem .3rem .3rem;
        background: rgb(255, 255, 255);
        border-radius: .9rem;
        padding: 1rem;
        overflow: hidden;
        @media only screen and (max-width: 30rem){
            margin-top: 1.4rem;
        }
        .article-item{
            display: flex;
            width: 100%;
            height: 10rem;
            flex-direction: row;
            align-items: center;    
            .article-img{
                height: 8rem;
                width: 8rem;
                border-radius: 1rem;
                margin-right: 2rem;
            }
            .article-content{
                display:flex;
                flex-direction: column;
                width:calc(100% - 10rem);
                height: 100%;
                justify-content: center;
                border-bottom: .1rem solid #dedede;
                a:link {
                text-decoration: none;
                }
                .article-title{
                    font-weight: 700;
                    margin-bottom: 1rem;
                    font-size: 1.8rem;
                    color: #1c1f21;
                    line-height: 3rem;
                    word-break: keep-all;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    width:100%;
                }
                .article-summary{
                    display: flex;
                    flex-direction:row;
                    justify-content: space-between;
                    .label-container{
                        display:flex;
                        flex-direction:row;
                        .label{
                            display:flex;
                            flex-direction:row;
                            justify-content:center;
                            width:5rem;
                            padding: .4rem 1.2rem;
                            font-size: 1.2rem;
                            color: #545c63;
                            line-height: 1.6rem;
                            background: rgba(84,92,99,0.1);
                            border-radius: 1.2rem;
                            margin-right:1rem;
                        }
                        
                    }
                    .date{
                        font-size: 1.2rem;
                        color: #9199a1;
                        line-height: 1.8rem;
                        padding-top: .3rem;
                    }
                }
            }
        }
    }

`

export const SideBar = styled.section `
    display:flex;
    flex-direction: column ;
    width:30%;
    background-color:#F2EEDF;
    @media only screen and (max-width:30rem){
        display: none;
    }
`