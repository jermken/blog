import React, { Component } from "react";
import List from "antd-mobile/lib/list";
import WhiteSpace from "antd-mobile/lib/white-space";
import SearchBar from "antd-mobile/lib/search-bar";
import Toast from "antd-mobile/lib/toast";
import CarouselWrap from "./carousel";
import "./home.css";
import hotIcon from "./../../asset/image/hot_icon.svg";
import collectionIcon from "./../../asset/image/collection_icon.svg";
import bookIcon from "./../../asset/image/book_icon.svg";
import videoIcon from "./../../asset/image/video_icon.svg";
import { ArticalItem } from "./../../component";
import server from "./../../server/server.js";

const Item = List.Item;

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ["", "", ""],
      dataItems: []
    };
  }
  componentWillMount() {
      this.getArticleList();
  }
  
  getArticleList() {
    let self = this;
    Toast.loading("加载中...");
    server.reqGET(
        "article_list.json",
        {
          page: 1,
          pageSize: 8,
          begin_date: 0,
          end_date: +new Date(),
          label: "",
          title: "",
          author: "",
          isMobile: 'jermken'
        },
        res => {
            if (!res.code) {
                self.setState({
                    dataItems: res.data[0]
                })
            }
        }
      );
  }

  componentDidMount() {

  }

  changeTab(e) {
    //console.log(e);
  }

  searchHander(e) {
    server.reqPOST(
      "home/search",
      {
        content: e
      },
      res => {
        console.log(res);
      }
    );
  }

  render() {
    let { dataItems } = this.state;
    return (
      <div>
        <div className="home-content">
          <div className="home-search-wrap">
            <SearchBar placeholder="搜索文章" onSubmit={this.searchHander} />
          </div>
          <div className="home-carousel-wrap">
            <CarouselWrap />
          </div>
          <ul className="d-p-f">
            <li className="title-list-nav">
              <img alt="热度" className="nav-list-img" src={hotIcon} />
              <br />
              <span className="nav-title">本周热度</span>
            </li>
            <li className="title-list-nav">
              <img alt="收藏" className="nav-list-img" src={collectionIcon} />
              <br />
              <span className="nav-title">收藏集</span>
            </li>
            <li className="title-list-nav">
              <img alt="书籍" className="nav-list-img" src={bookIcon} />
              <br />
              <span className="nav-title">书籍</span>
            </li>
            <li className="title-list-nav">
              <img alt="视频" className="nav-list-img" src={videoIcon} />
              <br />
              <span className="nav-title">视频</span>
            </li>
          </ul>
          <WhiteSpace />
          <div className="home-list-title">
            <List>
              <Item>本周热度</Item>
            </List>
          </div>
          <ArticalItem content={dataItems} />
        </div>
      </div>
    );
  }
}
