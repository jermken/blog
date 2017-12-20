import React, { Component } from 'react';
import './index.css';
import { ArticalItem } from './../../../component';
import Toast from 'antd-mobile/lib/toast';
class All extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content:[]
        }
    }

    componentDidMount() {
        Toast.loading('加载中...',200);
        setTimeout(()=>{
            this.setState({content:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]},()=> Toast.hide())
        },500)
    }

    render() {
        return <div>
            <ArticalItem content={this.state.content}/>
        </div>
    }
}

export default All;