import React, { Component } from 'react';
import Toast from 'antd-mobile/lib/toast';
import './my.css';
import WhiteSpace from 'antd-mobile/lib/white-space';
import List from 'antd-mobile/lib/list';
import myPicture from './../../asset/image/my_picture.jpg';
import resumeIcon from './../../asset/image/resume_icon.svg';
import concatIcon from './../../asset/image/concat_icon.svg';
import interestIcon from './../../asset/image/interest_icon.svg';
import storeIcon from './../../asset/image/store_icon.svg';
const Item = List.Item;

export default class My extends Component {
    componentWillMount() {
        Toast.loading('加载中...',1);
    }
    render() {
        return <div>
            <div className="my-content">
                <div className="my-top">
                    <img className="my-top-picture" alt="头像" src={myPicture}/>
                    <div className="my-top-info">
                    <span>jermken</span><br/>
                    <a href="javascript:;">jermken@163.com</a>
                    </div>
                </div>
                <WhiteSpace size="xl"/>
                <List>
                    <Item thumb={resumeIcon} arrow="horizontal">个人简历</Item>
                    <Item thumb={concatIcon} arrow="horizontal">联系我</Item>
                </List>
                <WhiteSpace/>
                <List>
                    <Item thumb={interestIcon} arrow="horizontal">我喜欢的</Item>
                    <Item thumb={storeIcon} arrow="horizontal">我的收藏</Item>
                </List>
            </div>
        </div>
    }

}