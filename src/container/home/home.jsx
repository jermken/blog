import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
const Aa = () => {
    return <div>this is aa</div>
}
const Bb = () => {
    return <div>this is bb</div>
}
export default class Home extends Component {

    render() {
        return <div className="dev-waiting">
            首页-努力开发中...
            </div>
    }
}