import React from 'react';
import { Route } from 'react-router-dom';
//import { Layout, Home, AllContent, My } from './../container/index.js';
import Layout from './../container/layout/layout';
import Home from './../container/home/home';
import AllContent from './../container/allContent/allContent';
import My from './../container/my/my';
const Mys = ({location}) => {
    return <My location={location}/>
}
const Layouts = ({location}) => {
    return <Layout location={location}/>
}
const Homes = ({location}) => {
    return <Home location={location}/>
}
const AllContents = ({location}) => {
    return <AllContent location={location}/>
}
const routes = (
    <Route>
        <Route path="/" component={Layouts}>
            <Route path="home" component={Homes}></Route>
            <Route path="allContent" component={AllContents}></Route>
            <Route path="my" component={Mys}></Route>
        </Route>
    </Route>
)

export default routes;
