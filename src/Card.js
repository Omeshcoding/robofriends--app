import React from 'react';

const card = () => {
    return (
        <div className='bg-emerald-500 w-52 m-8 p-10 rounded'>
            <img src='https://robohash.org/test' alt='robots'></img>
            <div>
                <h2>John Doe</h2>
                <p>john-doe@gmail.com</p>
            </div>
        </div>
    );
}
export default card
