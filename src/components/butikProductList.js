import React, { Component } from 'react';
import Header from './header';
import { connect } from 'react-redux';
import ProductBox from './productBox';
import { changeOrder, ASC } from '../actions';

const styles = {
  productListStyle: {
    paddingTop: '10px',
    display: 'flex',
    flexWrap: 'wrap'
  },
  settingStyle: {
    borderBottom: '1px black solid',
    padding: '0 10px 10px 10px',
    display: 'flex',
    justifyContent: 'space-between'
  }
};

class ButikProductList extends Component {
  renderProducts(product) {
    return <ProductBox product={product} key={product.prodId} />;
  }

  render() {
    return (
      <div>
        <Header back="true" goBack={() => this.props.history.goBack()} />
        <div style={styles.settingStyle}>
          <p>
            {this.props.products.length} Urun gosteriliyor
          </p>
          <button onClick={event => this.props.changeOrder()}>
            Siralamayi Degistir
          </button>
        </div>
        <div style={styles.productListStyle}>
          {this.props.products.map(product => this.renderProducts(product))}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  //filter the butik
  const products = state.products
    .filter(prod => prod.brandId === ownProps.match.params.id)
    .sort((a, b) => {
      if (state.order === ASC) {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
  return { products, order: state.order };
}

export default connect(mapStateToProps, { changeOrder })(ButikProductList);
