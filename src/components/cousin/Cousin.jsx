import React from 'react';

const Cousin = ({name}) => {
    return (
        <div className='border-2 border-yellow-300 rounded-md p-6'>
            <h2>Cousin</h2>
            <p>{name}</p>
        </div>
    );
};

export default Cousin;