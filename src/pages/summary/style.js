import styled from 'styled-components'


export const SummaryContainer = styled.div`
    width: 100%;
    min-height: 100%;
    background:#F2EEDF;
    @media only screen and (max-width: 30rem){
        background: #fff;
    }
    
`
export const Header = styled.header`
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width:100%;
    height: 12rem;
    @media only screen and (max-width: 30rem){
        height: 10rem;    
        background:#F2EEDF;
    }
    .title{ 
        font-family: "Lohit Devanagari", "ITF Devanagari";
        font-size: 3rem;
        font-weight: 400;
    }   
`

export const Content = styled.section`
    display: flex;
    flex-direction: row;
    width:70%;
    margin: 0 auto;
    @media only screen and (max-width: 30rem){
        display:flex;
        flex-direction: column;
        width:95%;
        margin: 0 auto;
    }
`

export const SideBar = styled.nav`
    width: 30%;
    display:flex;
    flex-direction: column;
    box-sizing: border-box;
    padding:0 .5rem;
    border: .1rem solid #dedede;
    border-radius: .2rem;
    height: 23rem;
    
    @media only screen and (max-width: 30rem){
        display:grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: auto;
        width:100%;
        border-radius: none;
        border: none;
        padding: none;
        height: auto;
    }
    .sideBar-item{
        cursor: pointer;
        display:flex;
        box-sizing: border-box;
        flex-direcition: row;            
        justify-content:space-between;
        line-height: 1.5;
        font-size:1.4rem;
        border-bottom: 1px solid #dedede;
        padding-bottom: .5rem;
        margin-top: 1rem;
        
        @media only screen and (max-width: 30rem){
            display: flex;
            flex-direction: row;
            justify-content: center;
            font-size:1.5rem;
            line-height: 2;
            padding-bottom: .2rem;
            border-bottom: none;
            margin: 1rem 0;
            border-radius: 0;
        }
        .item-name{
                padding-left: 1rem;
                color: #0366D6;
                font-family: sans-serif;
                @media only screen and (max-width: 30rem){
                    padding-left: 0rem;
                    color: rgb(120, 125, 130);
                }
        }
        .item-viewNumber{
            color: #fff;
            background-color: #6a737d;
            margin-right: .5rem;
            padding: .2rem .5rem;
            font-size: 1.2rem;
            font-weight: 600;
            line-height: 1;
            border-radius: 2rem;
            padding-top: .5rem;
            font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
            @media only screen and (max-width: 30rem){
                display:none;
            }
        }
    }
    .sideBarItemSelect{
        border-left: .3rem solid orange;
        @media only screen and (max-width: 30rem){
            border-bottom: 0.2rem solid #F2EEDF;
            border-left: none;
            background: #fff;
            color: #222222;
        }
        .item-name{
            padding-left:.7rem;
            @media only screen and (max-width: 30rem){
                padding-left: 0rem;
                color: #222222;
            }
        }
        
    }
`

export const SummaryRight = styled.div`
    width:75%;
    display:flex;
    flex-direction: column;
    padding: 0 3rem;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
    @media only screen and (max-width: 30rem){
        width: 100%;
        padding: 0;
    }
    .summaryItemHeader{
        display:flex;
        flex-direction: row;
        box-sizing: border-box;
        padding:2rem 2rem;
        border:1px solid #dedede;
        width:100%;
        height:13rem;
        align-items:center;
        @media only screen and (max-width: 30rem){
            padding: .3rem .3rem;
            border: .2rem solid #F2EEDF;
            
        }
        .summaryItemHeaderImg{
            width:7rem;
            height:7rem;
            margin-right:1rem;
            margin-bottom:1.5rem;
            @media only screen and (max-width: 30rem){
                box-sizing: border-box;
                margin-bottom: .5rem;
            }
        }
        .summaryItemHeaderContent{
            display:flex;
            flex-direction:column;
            justify-content: center;
            text-align:justify;         
            @media only screen and (max-width: 30rem){
                width:75%;
            }
            .summaryItemHeaderName{
                width:100%;
                margin-bottom:.4rem;
                font-size:2rem;
                font-weight:600;
            }
            .summaryItemheaderSummary{
                width:100%;
                box-sizing: border-box;
                padding-right: .4rem;
                margin-top:.5rem;
                margin-bottom:.5rem;
                font-size: 1.4rem;
                line-height: 1.5;
                color: #24292e;
            }
        }
    }
    .summaryItemSumContainer{
        display:flex;
        flex-direction:row;
        margin-top:2rem;
        padding-bottom:2rem;
        border-bottom: .1rem solid #dedede;
        .summaryItemSum{
            font-size:2rem;
            font-weight:600;
            line-height:1.5;
        }
        @media only screen and (max-width: 30rem){
            display: none;
        }
    }
    .summaryItemContentContainer{
        dispaly:flex;
        flex-direction: column;
        padding:0 1rem;
        margin-bottom: 3rem;
        .summaryItemContentItem{
            display:flex;
            flex-direction:row;
            height: 9rem;
            padding: 1.5rem 0 1rem 0;
            margin-bottom:.5rem;
            border-bottom:.1rem solid #dedede;
            .itemIcon{
                height:100%;
                width:2rem;
                margin-right:.4rem;        
                padding-top: .35rem;
                .iconfont{
                    font-size: 20px;
                }
            }
            .itemContentContainer{
                display:flex;
                flex-direction: column;
                width:100%;
                a:link {
                    text-decoration: none;
                }
                .summary-item-name{
                    font-size:1.6rem;
                    font-weight: 400;
                    line-height:1.5;
                    color:#0366d6;
                    margin-bottom:1rem;
                }
                .summary-item-summary{
                    font-size:1.4rem;
                    line-height:1.5;
                    margin-bottom:1rem;
                }
                .summary-item-other{
                    display:flex;
                    box-sizing:border-box;
                    flex-direction: row-reverse;
                    font-size:1.4rem;
                    line-height:1.5;
                    padding:1rem 0 .5rem 0;
                    color: #9199a1;
                }
                
            }
        }
        
    }
`