import React from 'react';
import { Link } from 'react-router-dom';

export default props => {
  const { picUrl, category, id  } = props.butik;
  return (
    <div style={styles.boxStyle}>
      <Link to={`/butik/${id}`}>      
        <img src={picUrl} style={styles.imgStyle} />
      </Link>
    </div>
  );
};

const styles = {
  boxStyle: {
    flex: '1 1 100vw',

  },
  imgStyle: {
    width: '100%',
    height: 'auto'
  }
};
