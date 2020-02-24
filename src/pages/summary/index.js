import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { actionCreator } from './store'
import {
    SummaryContainer,
    Header,
    Content,
    SideBar,
    SummaryRight
} from './style'
import {Link } from 'react-router-dom'

function Summary(props) {
    const [select, setSelect] = useState(0);
    const { data, getSummaryData } = props;
    const { sideBarList, summaryItem } = data.toJS()

    const { headerImg, headerName, headerSummary, number } = sideBarList[select]

    useEffect(() => {
        getSummaryData()
    }, [getSummaryData])

    return (
        <SummaryContainer>
            <Header>
                <div className="title">ملاحظات </div>
            </Header>
            <Content>
                <SideBar>
                    {sideBarList.map((item, index) => {
                        return (
                            <div className={select === item.id ? "sideBar-item sideBarItemSelect" : "sideBar-item"}
                                key={item.id} onClick={() => setSelect(index)}>
                                <div className="item-name">{item.name}</div>
                                <div className="item-viewNumber">{item.number}</div>
                            </div>
                        )
                    })}
                </SideBar>
                <SummaryRight>
                    <div className="summaryItemHeader">
                        <img src={headerImg} alt="" className="summaryItemHeaderImg" />
                        <div className="summaryItemHeaderContent">
                            <div className="summaryItemHeaderName">{headerName}</div>
                            <div className="summaryItemheaderSummary">{headerSummary}</div>
                        </div>
                    </div>
                    <div className="summaryItemSumContainer">
                        <div className="summaryItemSum"> {number} results</div>
                    </div>
                    <div className="summaryItemContentContainer">
                        {
                            summaryItem.map((item) => {
                                if (item.type === select) {
                                    return (
                                        <div className="summaryItemContentItem" key={item.id}>
                                            <div className="itemIcon">
                                                <i className="iconfont icon">&#xe76b;</i>
                                            </div>
                                            <div className="itemContentContainer">
                                                <Link to="/">
                                                    <div className="summary-item-name">{item.name}</div>
                                                </Link>
                                                <div className="summary-item-summary">{item.summary}</div>
                                                <div className="summary-item-other">{item.date}</div>
                                            </div>
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                </SummaryRight>
            </Content>
        </SummaryContainer>
    )
}

const mapState = (state) => ({
    data: state.getIn(['summary', 'data']),
})

const mapDispatch = (dispatch) => ({
    getSummaryData: () => {
        dispatch(actionCreator.getSummaryData())
    }
})

export default connect(mapState, mapDispatch)(Summary)