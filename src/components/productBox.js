import React from 'react';
import { Link } from 'react-router-dom';

export default props => {
  const { picUrl, title, brandId, price, prodId } = props.product;
  return (
    <div style={styles.boxStyle}>
      <Link to={`/products/${prodId}`}>
        <img src={picUrl} style={styles.imgStyle} />
      </Link>
      <div style={{    border: '1px solid black'}}>
      <p style={styles.textStyle}>{title}</p>
      <p style={styles.textStyle}>{price} TL</p>
      </div>
    </div>
  );
};

const styles = {
  boxStyle: {
    flex: '0 1 40vw',
    margin: '10px'
  },
  imgStyle: {
    width: '100%',
    height: 'auto'
  },
  textStyle: {
    textAlign: 'center',
    
  }
};
