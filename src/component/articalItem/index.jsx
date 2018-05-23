import React, { Component } from 'react';
import List from 'antd-mobile/lib/list';
import commentIcon from './../../asset/image/comment_icon.svg';
import commentIconS from './../../asset/image/comment_icon_s.svg';
import praiseIcon from './../../asset/image/praise_icon.svg';
import praiseIconS from './../../asset/image/praise_icon_s.svg';
import './index.css';

const Item = List.Item;
const Brief = Item.Brief;

class ArticalItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content:[]
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({content: nextProps.content})
    }

    timeFormat(time) {

    }

    render() {
        let self = this;
        return <div>
            <List>
                { this.state.content.map( (i) => <Item key={i.title} multipleLine extra={`#${i.label}`}>
                    { i.title }
                    <Brief><span className="list-item-author">{i.author}</span><span>{self.timeFormat(i.time)}</span></Brief>
                    {/* <Brief>
                        <span><img alt="点赞" src={praiseIconS}/><span className="info-span">111</span></span>
                        <span className="mglt-span-info"><img alt="评论" src={commentIconS}/><span className="info-span">222</span></span>
                    </Brief> */}
                </Item>)}
            </List>
        </div>
    }
}

export default ArticalItem;