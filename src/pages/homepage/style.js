import styled from 'styled-components'

export const HomepageWrapper = styled.div`
    background: #F2EEDF;
`
export const HomepageContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 12%;
`
export const HomepageHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top:5%;
    .content-container{
        display:flex;
        flex-direction: row;
        jusitfy-content: center;
        align-items: center;
        .avatar{
            height:100px;
            width:100px;
            margin:10px 20px 10px 10px;
            clip-path: circle(50% at 50% 50%);
        }
        .font-container{
            display:flex;
            flex-direction: column;
            jusitfy-content: center;
            align-items: center;
            line-height:40px;
            .font-name{
                width:100%;
                font-size:30px;
                font-weight:700;
                margin-bottom:10px;
                font-family: "Arial";
            }
            .font-introduction{
                font-size:20px;
                width:100%;
                font-family: "Arial";
            }
        }
    }
    .like-container{
        display:flex;
        flex-direction: row;
        line-height:40px;
        cursor: pointer;
        position:relative;
        top:-30px;
        .like-icon{
            font-size:30px;
            margin-right:10px;
        }
        .like-number{
            font-size:15px;
            font-family: "Times new Roman";
        }
    }
`

export const HomepageContent = styled.div`
    dispaly: flex;
    flex-direction: column;
    width:100%;
    margin-top: 20px;
    .introduction{
        display:flex;
        flex-direction: column;
        box-sizing: border-box;
        padding: 10px 10px;
        width:100%;
        border: 1px solid black;
        .introduction-title{
            line-height:40px;
            font-size: 30px;
            font-weight: 400px;
        }
        .introduction-container{
            display:flex;
            flex-direction: column;
            .introduction-name{
                display:flex;
                flex-direction: row;
                line-height: 40px;
                .name-icon{
                    margin-right: 20px;
                }
                .name{
                    font-size: 20px;
                }
            }
            .introduction-hobby{
                display:flex;
                flex-direction: row;
                line-height: 40px;
                .hobby-icon{
                    margin-right: 20px;
                }
                .hobby{
                    font-size: 20px;
                }
            }
            .introduction-aboutWeb{
                display:flex;
                flex-direction: row;
                line-height: 40px;
                .web-icon{
                    margin-right: 20px;
                }
                .web{
                    font-size: 20px;
                }
            }
        }
    }

    .github-container{
        display:flex;
        margin-top: 20px;
        flex-direction: column;
        box-sizing: border-box;
        padding: 10px 10px;
        border:1px solid black;
        .github-title{
            line-height:40px;
            font-size: 30px;
            font-weight: 400px;
        }
        .github-content{
            img{
                height:400px;
                width: 400px;
            }
        }
    }
    .music-container{
        display:flex;
        margin-top: 20px;
        flex-direction: column;
        box-sizing: border-box;
        padding: 10px 10px;
        border:1px solid black;
        .music-title{
            line-height:40px;
            font-size: 30px;
            font-weight: 400px;
        }
        .music-content{
            display:flex;
            img{
                height:400px;
                width: 400px;
            }
        }
    }
    .recommend{
        display:flex;
        flex-direction: column;
        border:1px solid black;
        margin-top: 10px;
        box-sizing: border-box;
        padding: 10px 20px;
        width:100%;
        .recommend-title{
            line-height:40px;
            font-size: 30px;
            font-weight: 400px;
        }
        .recommend-course{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-template-rows   : auto;
            gap                  : 20px;
            width:100%;
            .course-container{
                display:flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                .course-img{
                    height: 100px;
                    width: 180px;
                    border-radius: 8px;
                }
                .comment{
                    font-family: "PingFang SC","Microsoft YaHei";
                }
            }
        }
    }
    
`