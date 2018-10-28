import React from 'react'
import { Card , Carousel } from 'antd'
import './ui.less'

export default class Carousels extends React.Component{

    render() {
        return(
            <div>
                <Card className="card-wrap" title="文字背景轮播">
                        <Carousel autoplay effect="fade">
                            <div><h3>Ant Motion Banner - React</h3></div>
                            <div><h3>Ant Motion Banner - Vue</h3></div>
                            <div><h3>Ant Motion Banner - Angular</h3></div>
                        </Carousel>
                </Card>
                <Card className="card-wrap" title="图片背景轮播">
                        <Carousel autoplay effect="fade">
                            <div>
                                <img src=""/>
                            </div>
                            <div><h3>Ant Motion Banner - Vue</h3></div>
                            <div><h3>Ant Motion Banner - Angular</h3></div>
                        </Carousel>
                </Card>
            </div>
        );
    }
}