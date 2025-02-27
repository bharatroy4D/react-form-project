import React from 'react';

const Cousin = ({name , asset}) => {
    return (
        <div className='border-2 border-yellow-300 rounded-md p-6'>
            <h2>Cousin</h2>
            <p>{name}</p>
            <p>{asset}</p>
        </div>
    );
};

export default Cousin;