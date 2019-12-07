import React, { Component } from 'react'
import { Echart } from './Echart'

export class EchartsUse extends Component {
  constructor(props) {
    super(props)
    this.state = {
    };
  };
  render() {
    return (
      <div style={{
        width: '100%',
        height: window.innerHeight,
        background: '#001D37',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <div style={{
          width: '500px',
          height: '300px',
          background: '#fff',
          padding: '30px',
          borderRadius: '10px'
        }}>

          <Echart
            height={'300px'}
          />
        </div>
      </div>
    )
  }
}

export default EchartsUse
