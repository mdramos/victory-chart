import React from 'react';
import ReactDOM from 'react-dom';
import Ecology from 'ecology';
import Radium, { Style } from 'radium';
import {VictoryAxis} from 'victory-axis'
import {VictoryBar} from 'victory-bar'
import {VictoryLine} from 'victory-line'
import {VictoryScatter} from 'victory-scatter'

import theme from './theme';

@Radium
class Docs extends React.Component {
  render() {
    return (
      <div className="Container">
        <div className="Copy">
          <Ecology
            overview={require('!!raw!./ecology.md')}
            source={require('json!./victory-chart.json')}
            scope={{
              React,
              ReactDOM,
              VictoryScatter,
              VictoryLine,
              VictoryAxis,
              VictoryBar,
              VictoryChart: require('../src/components/victory-chart')}}
            playgroundtheme='elegant' />
          <Style rules={theme}/>
        </div>
      </div>
    )
  }
}

if (typeof document !== "undefined") {
  const content = document.getElementById("content");
  ReactDOM.render(<Docs/>, content);
}

export default Docs;