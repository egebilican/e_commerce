import React, { Component } from 'react';
import Header from './header';
import ButikBox from './butikBox';
import { connect } from 'react-redux';
import CheckBox from './checkBox';

const styles = {
  butikContainerStyle: {
    display: 'flex',
    flexWrap: 'wrap'
  }
};

class Butikler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedCats: ['shoes','sport', 'jean']
    }
  }

  renderButiks(butik) {
    //if exists in the category array   
    if(this.state.checkedCats.indexOf(butik.category) >= 0 ) {
    return <ButikBox butik={butik} key={butik.id}/>;    
    }
  }

  changeCatStatus(cat) {
    const ind = this.state.checkedCats.indexOf(cat);
    if (ind >= 0 ) {
      const newCats = this.state.checkedCats.filter(category => category != cat);
      console.log(newCats);
      this.setState({checkedCats: newCats});
      console.log(this.state.checkedCats);      
    } else {
      console.log(cat)
      this.setState({checkedCats:[...this.state.checkedCats, cat]})
    }
  }

  render() {
    console.log(this.state.checkedCats)
    return (
      <div>
        <Header />
        <CheckBox category='jean' onClick={event => this.changeCatStatus('jean')}/>
        <CheckBox category='sport' onClick={event => this.changeCatStatus('sport')}/>
        <CheckBox category='shoes' onClick={event => this.changeCatStatus('shoes')}/>
        <div style={styles.butikContainerStyle}>
          {this.props.butiks.map( butik => this.renderButiks(butik))}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
      return { butiks: state.butiks };
}

export default connect(mapStateToProps, {})(Butikler);


