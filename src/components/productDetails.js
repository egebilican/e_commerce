import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './header';
import Swiper from 'react-id-swiper';

const styles = {
  productContainer: {
    display:'flex', 
    justifyContent: 'center',
    alignItems:'center',
    flexDirection: 'column' ,
  },
  imgStyle: {
    height: 'auto',
    width: '100%',
  },
  textStyle: {
    flex:1,
  },
  swiperContainer : {
    flex:1,
    width: '80vw',
  }
};

class ProductDetails extends Component {
  render() {
    const { title, price, picUrl, picUrl2, picUrl3 } = this.props.product;
    const params = {
      spaceBetween: 30,
      centeredSlides: true,      
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    };
    return (
      <div>
      <Header back="true" goBack={()=> this.props.history.goBack()}/>        
      <div style={styles.productContainer}>
        <div style={styles.swiperContainer}>
        
          <Swiper {...params}>
            <div>
              <img 
                src={picUrl} 
                alt="product" 
                style={styles.imgStyle} />
            </div>
            <div>
              <img
                src={picUrl2}
                alt="product"
                style={styles.imgStyle}
              />
            </div>
            <div>
              <img
                src={picUrl3}
                alt="product"
                style={styles.imgStyle}
              />
            </div>
          </Swiper>  
          </div>      
        <div style={styles.textStyle}>{title}</div>
        <div style={styles.textStyle}>{price}</div>
        
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  //filter produc
  return {
    product: state.products.filter(
      prod => prod.prodId == ownProps.match.params.id
    )[0]
  };
}

export default connect(mapStateToProps, {})(ProductDetails);
