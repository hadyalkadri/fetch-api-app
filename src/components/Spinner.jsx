import React from 'react';
import BounceLoader from "react-spinners/BounceLoader";

function Spinner () {
    const style ={
        display: 'flex',
        justifyContent: "center",
        marginTop: '150px'  
    }
  return (
    <div style={style}>
        <BounceLoader />
    </div>
  )
}

export default Spinner;
