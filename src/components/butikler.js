import React, { Component } from 'react';
import Header from './header';
import ButikBox from './butikBox';
import { connect } from 'react-redux';

const styles = {
  butikContainerStyle: {
    display: 'flex',
    flexWrap: 'wrap'
  }
};

class Butikler extends Component {
  renderButiks(butik) {
    return <ButikBox butik={butik} key={butik.id}/>;
  }

  render() {
    return (
      <div>
        <Header />
        <div style={styles.butikContainerStyle}>
          {this.props.butiks.map(this.renderButiks)}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { butiks: state.butiks };
}

export default connect(mapStateToProps, {})(Butikler);
