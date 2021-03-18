/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';

import Nav3 from './Nav3';
import Feature7 from './Feature7';
import Content3 from './Content3';
import Footer0 from './Footer0';
import Point from './Point';
import {
  Nav30DataSource,
  Feature70DataSource,
  Feature71DataSource,
  Content30DataSource,
  Footer00DataSource,
} from './data.source';
import './less/antMotionStyle.less';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location = {} } = typeof window !== 'undefined' ? window : {};

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
  }

  render() {
    const children = [
      <Nav3
        id="Nav3_0"
        key="Nav3_0"
        dataSource={Nav30DataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature7
        id="documents"
        key="documents"
        dataSource={Feature70DataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature7
        id="project"
        key="project"
        dataSource={Feature71DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content3
        id="product"
        key="product"
        dataSource={Content30DataSource}
        isMobile={this.state.isMobile}
      />,
      <Footer0
        id="Footer0_0"
        key="Footer0_0"
        dataSource={Footer00DataSource}
        isMobile={this.state.isMobile}
      />, // 导航和页尾不进入锚点区，如果需要，自行添加;
      <Point
        key="list"
        data={['documents', 'project', 'product']}
        stroke="point-stroke"
      />,
    ];
    return (
      <div
        className="templates-wrapper"
        ref={(d) => {
          this.dom = d;
        }}
      >
        {/* 如果不是 dva 2.0 替换成 {children} start */}
        { children}
        {/* 如果不是 dva 2.0 替换成 {children} end */}
      </div>
    );
  }
}
