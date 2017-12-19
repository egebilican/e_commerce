import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Header extends Component {
  renderLeftButton() {
    if (this.props.back) {
      return (
        <div style={styles.leftButtonStyle}>
          <img
            src="http://clipart-library.com/images/kTKnaBbKc.png"
            style={{ height: '40px', width: 'auto' }}
            onClick= {() => this.props.goBack()}
            alt='back'
          />
        </div>
      );
    } else {
      return (
        <div style={styles.leftButtonStyle}>
          <img
            src="https://visualpharm.com/assets/398/Search-595b40b85ba036ed117db03b.svg"
            style={{ height: '40px', width: 'auto' }}
            alt='Search'            
          />
        </div>
      );
    }
  }

  render() {
    return (
      <div style={styles.headerStyle}>
        <div style={styles.leftButtonStyle}>{this.renderLeftButton()}</div>
        <div style={styles.trendyolStyle}>
        <Link to='/'>
          <img
            src="https://www.trendyol.com/content/images/trendyol-online-white.png"
            style={styles.trendyolImgStyle}
            alt='Trendyol logo'
          />
          </Link>
        </div>
        <div style={{ flex: 1 }} />
      </div>
    );
  }
}

const styles = {
  headerStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 0,
    paddingLeft: '5px',
    paddingRight: '5px',
    height: '80px'
  },
  trendyolStyle: {
    flex: 3,
    display: 'flex',
    justifyContent: 'center'
  },
  trendyolImgStyle: {
    height: '50px',
    width: 'auto',
    textAlign: 'center'
  },
  leftButtonStyle: {
    flex: 1
  }
};
