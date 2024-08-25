import React, { Component } from 'react'
import QrReader from 'react-qr-scanner'

import {findData} from './data';

class Dashboard extends Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 1000,
      result: null,
      visible: true,
    }

    this.handleScan = this.handleScan.bind(this)
  }

  handleScan(data){
    let staff = null;
    if (data && data.text) {
      staff = findData(data.text);
    }

    if (staff) {
      this.setState({
        result: staff,
        visible: false,
      });
  
      setTimeout(() => {
        this.setState({
          result: null,
          visible: true,
        });
      }, 5000)
    }
  }

  handleError(err){
    console.error(err)
  }

  render(){
    return(
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: '100vh',
          paddingLeft: 50,
          paddingRight: 50,
          paddingTop: 20,
          paddingBottom: 50
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '45%',
          }}
        >
          <QrReader
            delay={this.state.delay}
            style={{
              height: 300,
              width: 'auto',
              visibility: this.state.visible ? 'visible' : 'hidden'
            }}
            onError={this.handleError}
            onScan={this.handleScan}
          
          />
        </div>
        <div
          style={{
            width: '10%'
          }}
        >

        </div>
        <div
          style={{
            width: '45%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            alignContent: 'center',
            justifyContent: 'center',
          }}
        >
          {this.state.result ? 
            (
              <div>
                <p
                  style={{
                    textAlign: 'center',
                    fontSize: 30,
                    fontWeight: 'bold',
                  }}
                >
                  {this.state.result.grade} {this.state.result.unit} {this.state.result.name}
                </p>
                <p>
                  Timestamp: {new Date().toISOString()}
                </p>
              </div>
            ) :
            (
              <p
                style={{
                  textAlign: 'center',
                  fontSize: 30,
                  fontWeight: 'bold',
                }}
              >
                Please scan the QR
              </p>
            )
          }
        </div>
      </div>
    );
  }
}

export default Dashboard;