import styled from 'styled-components'


export const SummaryWrapper = styled.div `
    background:#F2EEDF;
    .back {
        position: fixed;
        font-size: 40px;
        top: 30px;
        left : 30px;
    }
`
export const SummaryContainer = styled.div `
    display: flex;
    flex-direction: column;
    margin: 0 12%;
`
export const SummaryHeader = styled.div `
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
export const SummaryContent = styled.div `
    display: flex;
    flex-direction: row;

`
export const SummaryLeft = styled.div `
    width:25%;
    .sideBarContainer{
        display:flex;
        flex-direction: column;
        box-sizing: border-box;
        padding:0 5px;
        border: 1px solid #dedede;
        border-radius: 2px;
        .sideBarItem{
            cursor: pointer;
            display:flex;
            box-sizing: border-box;
            flex-direcition: row;            
            justify-content:space-between;
            line-height: 1.5;
            font-size:14px;
            border-bottom: 1px solid #dedede;
            padding-bottom: 5px;
            margin-top: 10px;
            .item-name{
                padding-left: 10px;
                color: #0366D6;
                font-family: sans-serif;
            }
            .item-viewNumber{
                color: #fff;
                background-color: #6a737d;
                margin-right: 5px;
                padding: 2px 5px;
                font-size: 12px;
                font-weight: 600;
                line-height: 1;
                border-radius: 20px;
                padding-top: 5px;
                font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
            }
        }
        .sideBarItemSelect{
            border-left: 3px solid orange;
            .item-name{
                padding-left:7px;
            }
        }
    }
`

export const SummaryRight = styled.div `
    width:75%;
    display:flex;
    flex-direction: column;
    padding: 0 30px;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
    .summaryItemHeader{
        display:flex;
        flex-direction: row;
        box-sizing: border-box;
        padding:20px 20px;
        border:1px solid #dedede;
        width:100%;
        height:130px;
        align-items:center;
        .summaryItemHeaderImg{
            width:70px;
            height:70px;
            margin-right:10px;
            margin-bottom:15px;
        }
        .summaryItemHeaderContent{
            display:flex;
            flex-direction:column;
            justify-content: center;
            
            .summaryItemHeaderName{
                margin-bottom:4px;
                font-size:20px;
                font-weight:600;
            }
            .summaryItemheaderSummary{
                margin-top:5px;
                margin-bottom:5px;
                font-size: 14px;
                line-height: 1.5;
                color: #24292e;

            }
        }
    }
    .summaryItemSumContainer{
        display:flex;
        flex-direction:row;
        margin-top:20px;
        padding-bottom:20px;
        border-bottom: 1px solid #dedede;
        .summaryItemSum{
            font-size:20px;
            font-weight:600;
            line-height:1.5;
        }
    }
    .summaryItemContentContainer{
        dispaly:flex;
        flex-direction: column;
        padding:0 10px;
        .summaryItemContentItem{
            display:flex;
            flex-direction:row;
            height: 90px;
            padding: 15px 0 10px 0;
            margin-bottom:5px;
            border-bottom:1px solid #dedede;
            .itemIcon{
            height:100%;
            width:20px;
            background: red;
            margin-right:8px;
            }
            .itemContentContainer{
                display:flex;
                flex-direction: column;
                width:100%;
                .summary-item-name{
                    font-size:16px;
                    font-weight: 400;
                    line-height:1.5;
                    color:#0366d6;
                    margin-bottom:10px;
                }
                .summary-item-summary{
                    font-size:14px;
                    line-height:1.5;
                    margin-bottom:10px;
                }
                .summary-item-other{
                    display:flex;
                    box-sizing:border-box;
                    flex-direction: row;
                    font-size:12px;
                    line-height:1.5;
                    padding:10px 0 5px 0;
                }
                
            }
        }
        
    }
`