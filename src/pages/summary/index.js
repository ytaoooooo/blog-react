import React, { Component } from 'react'
import {
    SummaryWrapper,
    SummaryContainer,
    SummaryHeader,
    SummaryContent,
    SummaryLeft,
    SummaryRight
} from './style'
import { actionCreator } from './store'
import { connect } from 'react-redux'
import {Link } from 'react-router-dom'



class Summary extends Component {

    render() {
        const { sideBarItemSelect, handleSideBarItemClick, sideBarList, summaryItem, summaryItemContent } = this.props
        const { headerImg, headerName, headerSummary } = summaryItem.toJS()[sideBarItemSelect]
        const summaryContentList = summaryItemContent.toJS()[sideBarItemSelect]
        const summaryContentNumber = sideBarList.toJS()[sideBarItemSelect].number

        return (
            <SummaryWrapper>
                <Link to="/">
                    <i className="iconfont back">&#xe9da;</i>
                </Link>
                <SummaryContainer>
                    <SummaryHeader>
                        <div className="title">ملاحظات </div>
                    </SummaryHeader>
                    <SummaryContent>
                        <SummaryLeft>
                            <div className="sideBarContainer">
                                {sideBarList.toJS().map((item, index) => {
                                    return (
                                        <div className={sideBarItemSelect === index ? "sideBarItem sideBarItemSelect" : "sideBarItem"}
                                            key={item.id} onClick={() => handleSideBarItemClick(index)}>
                                            <div className="item-name">{item.name}</div>
                                            <div className="item-viewNumber">{item.number}</div>
                                        </div>
                                    )
                                })}
                            </div>
                        </SummaryLeft>
                        <SummaryRight>

                            <div className="summaryItemHeader">
                                <img src={headerImg} alt="" className="summaryItemHeaderImg" />
                                <div className="summaryItemHeaderContent">
                                    <div className="summaryItemHeaderName">{headerName}</div>
                                    <div className="summaryItemheaderSummary">{headerSummary}</div>
                                </div>
                            </div>
                            <div className="summaryItemSumContainer">
                                <div className="summaryItemSum">{summaryContentNumber} results</div>
                            </div>
                            <div className="summaryItemContentContainer">
                                {summaryContentList.map((item) => {
                                    return (
                                        <div className="summaryItemContentItem" key={item.id}>
                                            <div className="itemIcon"></div>
                                            <div className="itemContentContainer">
                                                <div className="summary-item-name">{item.contentName}</div>
                                                <div className="summary-item-summary">{item.contentSummary}</div>
                                                <div className="summary-item-other">{item.contentOther}</div>
                                            </div>
                                        </div>
                                    )
                                })}

                            </div>
                        </SummaryRight>
                    </SummaryContent>
                </SummaryContainer>
            </SummaryWrapper>
        )
    }
    componentDidMount() {

    }
}

const mapStateToProps = (state) => ({
    sideBarList: state.getIn(['summary', 'sideBarList']),
    sideBarItemSelect: state.getIn(['summary', "sideBarItemSelect"]),
    summaryItem: state.getIn(['summary', "summaryItem"]),
    summaryItemContent: state.getIn(['summary', "summaryItemContent"])

})
const mapDispatchToProps = (dispatch) => ({
    handleSideBarItemClick: (index) => {
        dispatch(actionCreator.setSideBarItemSelect(index))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Summary)