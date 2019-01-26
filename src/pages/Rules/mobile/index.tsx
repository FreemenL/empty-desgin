import React, { Component } from "react";
import components from '@components/load-component';

const { EcodeHighlight } = components;

class Test extends Component<any, any> {
  render() {
    return (
      <div className={"animated fadeIn emptyd-content"}>
        <h1 className="empty-title">持续更新中... </h1>
      </div>
    );
  }
}

export default Test;
