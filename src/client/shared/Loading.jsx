import React from 'react';
import ReactLoading from "react-loading";

const Loading = () => {
    return (
      <div className= { styles.gears }>
        <img src="https://svgshare.com/i/CpJ.svg" className="gears" />
      </div>
    );
  }

const styles = {
  gears: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '50%',
    textAlign: 'center',
  }
}

export default Loading;