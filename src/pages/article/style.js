import styled from 'styled-components'

export const ArticleWrapper = styled.div `
    background:#F2EEDF;
    .back {
        position: fixed;
        font-size: 40px;
        top: 30px;
        left : 30px;
    }
`
export const ArticleContainer = styled.div `
    display: flex;
    flex-direction: column;
    margin: 0 12%;
`
export const ArticleHeader = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100px;
    .title{
        font-family: "Lohit Devanagari", "ITF Devanagari";
        font-size:30px;
        font-weight: 400;
    }
`
export const ArticleContent = styled.div `
    display: flex;
    flex-direction: row;
    
`
export const ArticleLeft = styled.div `
    display:flex;
    width: 70%;
    box-sizing: border-box;
    padding:10px 10px;
    flex-direction: column;
    .swiper-container{
        width:100%;
        height:300px;
        .swiper-img{
            height:300px;
            width:100%;
            border-radius: 8px;
        }
    }
    .article-container{
        margin-top:20px;
        background: #fff;
        border-radius: 9px;
        box-sizing: border-box;
        padding:10px 10px;
        box-shadow: 3px 3px 3px #dedede;
        .article-item{
            display:flex;
            width:100%;
            height:100px;
            flex-direction: row;
            align-items: center;
            .article-img{
                height: 80px;
                width: 80px;
                border-radius: 10px;
                margin-right: 20px;
            }
            .article-content{
                display:flex;
                flex-direction: column;
                width:550px;
                height: 95px;
                justify-content: center;
                border-bottom: 1px solid #dedede;
                a:link {
                text-decoration: none;
                }
                .article-title{
                    font-weight: 700;
                    margin-bottom: 10px;
                    font-size: 16px;
                    color: #1c1f21;
                    line-height: 30px;
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
                            padding: 4px 12px;
                            font-size: 12px;
                            color: #545c63;
                            line-height: 16px;
                            background: rgba(84,92,99,0.1);
                            border-radius: 12px;
                            margin-right:10px;
                        }
                        
                    }
                    .date{
                        font-size: 12px;
                        color: #9199a1;
                        line-height: 18px;
                        padding-top: 3px;
                    }
                }
            }
        }
    }
`
export const ArticleRight = styled.div `
    display:flex;
    width: 30%;
    flex-direction: column;
    
`