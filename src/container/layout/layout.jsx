import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import './layout.css';
import { Home, My, AllContent } from './../index.js';
import myIcon from './../../asset/image/my_icon.svg';
import myIconS from './../../asset/image/my_icon_s.svg';
import homeIcon from './../../asset/image/home_icon.svg';
import homeIconS from './../../asset/image/home_icon_s.svg';
import contentIcon from './../../asset/image/content_icon.svg';
import contentIconS from './../../asset/image/content_icon_s.svg';

class App extends Component {

    componentDidMount() {
        this.scrollListener();
    }

    scrollEvent(footerDOM) {
        if (window.scrollY > 100 && footerDOM.className !== 'footer footer-hidden') {
            footerDOM.className = 'footer footer-hidden';
        } else if (window.scrollY <= 100 && footerDOM.className !== 'footer') {
            footerDOM.className = 'footer footer-show';
        }
    }

    scrollListener() {
        let footerDOM = this.refs.footer;
        if (window.addEventListener) {
            window.addEventListener('scroll', () => this.scrollEvent(footerDOM));
        } else {
            window.atachEvent('scroll', () => this.scrollEvent(footerDOM));
        }
    }

    render() {
        const curPath = window.location.pathname;
        const homePage = /home/;
        const contentPage = /allcontent/;
        const myPage = /my/;
        return <div>
            <div className="main">
                <Route exact path="/" render={() => <Redirect to="/home" />} />
                <Route path="/home" component={Home}></Route>
                <Route path="/allcontent" component={AllContent}></Route>
                <Route path="/my" component={My}></Route>
            </div>
            <div className="footer" ref="footer">
                <ul className="footer-ul">
                    <li className="footer-li t-c">
                        <Link to="/home" className={`footer-li-link ${homePage.test(curPath) ? 'f_c1296db' : 'f_c_999'}`}>
                            <img className="nav-image" alt="首页" src={homePage.test(curPath) ? homeIconS : homeIcon} />
                            <br />首页
                        </Link>
                    </li>
                    <li className="footer-li t-c">
                        <Link to="/allcontent" className={`footer-li-link ${contentPage.test(curPath) ? 'f_c1296db' : 'f_c_999'}`}>
                            <img className="nav-image" alt="全部" src={contentPage.test(curPath) ? contentIconS : contentIcon} />
                            <br />全部
                        </Link>
                    </li>
                    <li className="footer-li t-c">
                        <Link to="/my" className={`footer-li-link ${myPage.test(curPath) ? 'f_c1296db' : 'f_c_999'}`}>
                            <img className="nav-image" alt="我的" src={myPage.test(curPath) ? myIconS : myIcon} />
                            <br />我的
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    }
}

export default App;