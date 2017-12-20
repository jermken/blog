import React, { Component } from 'react';
import SearchBar from 'antd-mobile/lib/search-bar';
import Tabs from 'antd-mobile/lib/tabs';
import './allContent.css';
import { All, FrontEnd, Security, Tool, Programmer } from './tabs/index.js';

export default class AllContent extends Component {
    componentDidMount() {

    }

    changeTab(e) {
        //console.log(e);
    }

    render() {
        const tabs = [
            { title: '全部', sub: 'all' },
            { title: '前端', sub: 'frontend' },
            { title: '安全', sub: 'security' },
            { title: '工具', sub: 'tool' },
            { title: '程序员', sub: 'programmer' }
        ];
        return <div>
            <div className="all-content" ref="allWrap">
                <div className="all-search">
                    <SearchBar placeholder="搜索文章" />
                </div>
                <Tabs tabs={tabs} animated={false} onChange={this.changeTab}>
                    <All className="d-p-f">content1</All>
                    <FrontEnd className="d-p-f">content2</FrontEnd>
                    <Security className="d-p-f">content3</Security>
                    <Tool className="d-p-f">content4</Tool>
                    <Programmer className="d-p-f">content5</Programmer>
                </Tabs>
            </div>
        </div>
    }
}