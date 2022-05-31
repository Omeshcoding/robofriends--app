import React from 'react';

const card = (props) => {
    const {name, email}= props
    return (
        <div className='bg-emerald-500 w-60 m-4 drop-shadow-md  rounded inline-block text-center ease-in-out duration-300 hover:scale-105 '>
            
        <img src={`https://robohash.org/${props.id}? 100 * 200`} className="p-8 pb-4" alt='robots'></img>
            <div className=' my-3'> 
                <h2 className='text-xl font-semibold'>{name}</h2>
                <p className=''>{email}</p>
            </div>
        </div>
    );
}
export default card
