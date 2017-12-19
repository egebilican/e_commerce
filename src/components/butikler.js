import React, { Component } from 'react';
import Header from './header';
import ButikBox from './butikBox';
import { connect } from 'react-redux';
import CheckBox from './checkBox';
import Collapsible from 'react-collapsible';

const styles = {
  butikContainerStyle: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  collapsibleStyle: {
    border: '1px solid black',
    textAlign: 'center',
    marginBottom: '5px'
  }
};

class Butikler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedCats: ['Ayakkabi', 'Spor', 'Jean']
    };
  }

  renderButiks(butik) {
    //if exists in the category array
    if (this.state.checkedCats.indexOf(butik.category) >= 0) {
      return <ButikBox butik={butik} key={butik.id} />;
    }
  }

  //if the category will be shown or not
  changeCatStatus(cat) {
    const ind = this.state.checkedCats.indexOf(cat);
    if (ind >= 0) {
      const newCats = this.state.checkedCats.filter(
        category => category != cat
      );
      this.setState({ checkedCats: newCats });
    } else {
      this.setState({ checkedCats: [...this.state.checkedCats, cat] });
    }
  }

  render() {
    return (
      <div>
        <Header />
        <div style={styles.collapsibleStyle}>
        <Collapsible trigger="Kategoriler" style={{ border: '1px solid black'}}>
          <CheckBox
            category="Jean"
            onClick={event => this.changeCatStatus('Jean')}
          />
          <CheckBox
            category="Spor"
            onClick={event => this.changeCatStatus('Spor')}
          />
          <CheckBox
            category="Ayakkabi"
            onClick={event => this.changeCatStatus('Ayakkabi')}
          />
        </Collapsible>
        </div>

        <div style={styles.butikContainerStyle}>
          {this.props.butiks.map(butik => this.renderButiks(butik))}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { butiks: state.butiks };
}

export default connect(mapStateToProps, {})(Butikler);
