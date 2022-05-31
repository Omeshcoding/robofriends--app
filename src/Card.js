import React from 'react';

const card = (props) => {
    return (
        <div className='bg-emerald-500 w-52 m-4 drop-shadow-md p-10 rounded inline-block  ease-in-out duration-300 hover:scale-105 '>
            
        <img src={`https://robohash.org/${props.id}?200 * 200`} alt='robots'></img>
            <div className='text-center my-3'> 
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    );
}
export default card
