import React from 'react';
import Cousin from '../cousin/Cousin';

const Aunty = () => {
    return (
        <div className='border-2 border-yellow-300 rounded-md p-6'>
            <h2>Aunty</h2>
            <div className='flex gap-5'>
                <Cousin name={'sahin'}></Cousin>
                <Cousin name={'billa'}></Cousin>
            </div>
        </div>
    );
};

export default Aunty;