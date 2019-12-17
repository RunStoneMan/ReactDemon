import * as React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';

class Button extends Component {
  render() {
    return <h1>Hello,Webpack富士康是否计算机</h1>
  }
}

render(<Button/>, window.document.getElementById('app'));