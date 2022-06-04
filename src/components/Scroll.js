import React from "react";


const Scroll = (props) => {
    return (
        
        <div style={{ overflowY: 'scroll', border: '1px solid black', height: '750px' }} className='my-4'>
            {props.children}
        </div>
    );
}
export default Scroll;