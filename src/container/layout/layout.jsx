import React,{ Component } from 'react';
import { Route, Link, Redirect  } from 'react-router-dom';
import './layout.css';
import Home from './../home/home';
import My from './../my/my';
import AllContent from './../allContent/allContent';
import myIcon from './../../asset/image/my_icon.svg';
import myIconS from './../../asset/image/my_icon_s.svg';
import homeIcon from './../../asset/image/home_icon.svg';
import homeIconS from './../../asset/image/home_icon_s.svg';
import contentIcon from './../../asset/image/content_icon.svg';
import contentIconS from './../../asset/image/content_icon_s.svg';

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const curPath = window.location.pathname;
        const homePage = /home/;
        const contentPage = /allcontent/;
        const myPage = /my/;
        return <div>
            <div className="main">
                <Route exact path="/" render={()=> <Redirect to="/home"/>}/>
                <Route path="/home" component={Home}></Route>
                <Route path="/allcontent" component={AllContent}></Route>
                <Route path="/my" component={My}></Route>
            </div>
            <div className="footer">
                <ul className="footer-ul">
                    <li className="footer-li t-c">
                        <Link to="/home" className={`footer-li-link ${homePage.test(curPath)?'f_c_333':'f_c_999'}`}>
                            <img className="nav-image" src={homePage.test(curPath)?homeIconS:homeIcon}/>
                            <br/>首页
                        </Link>
                    </li>
                    <li className="footer-li t-c">
                        <Link to="/allcontent" className={`footer-li-link ${contentPage.test(curPath)?'f_c_333':'f_c_999'}`}>
                            <img className="nav-image" src={contentPage.test(curPath)?contentIconS:contentIcon}/>
                            <br/>全部
                        </Link>
                    </li>
                    <li className="footer-li t-c">
                        <Link to="/my" className={`footer-li-link ${myPage.test(curPath)?'f_c_333':'f_c_999'}`}>
                            <img className="nav-image" src={myPage.test(curPath)?myIconS:myIcon}/>
                            <br/>我的
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    }
}

export default App;