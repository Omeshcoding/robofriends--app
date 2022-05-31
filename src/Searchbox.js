import React from "react";


const Searchbox = () => {
    return (
        <div className="text-center">
            <input type='search'
                placeholder='search robots'
            className="bg-gray-600 rounded-md text-center p-2 text-lime-500 border-0"
            />
        </div>
    );
}

export default Searchbox;