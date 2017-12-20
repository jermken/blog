import React, { Component } from 'react';
import Carousel from 'antd-mobile/lib/carousel';
import air1 from './../../asset/image/air_1.jpg';
import air2 from './../../asset/image/air_2.jpg';
import air3 from './../../asset/image/air_3.jpg';
import air4 from './../../asset/image/air_4.jpg';
class CarouselWrap extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [air1, air2, air3, air4]
        }
    }

    render() {
        return <Carousel
                        autoplay={true}
                        infinite
                        selectedIndex={1}
                    >
                        {this.state.data.map(ii => (
                            <a
                                key={ii}
                                href="javascript:;"
                                style={{ display: 'inline-block', width: '100%', height: '2.5rem' }}
                            >
                                <img
                                    src={ii}
                                    alt="轮播图"
                                    style={{ width: '100%', verticalAlign: 'top', height: '100%' }}
                                />
                            </a>
                        ))}
                    </Carousel>
    }
}

export default CarouselWrap;