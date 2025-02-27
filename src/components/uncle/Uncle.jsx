import React from 'react';
import Cousin from '../cousin/Cousin';

const Uncle = () => {
    return (
        <div className=' border-2 border-yellow-300 rounded-md p-6'>
            <h2>Uncle</h2>
            <div className='flex gap-5'>
                <Cousin name={'asif'}></Cousin>
                <Cousin name={'jahid'}></Cousin>
            </div>
        </div>
    );
};

export default Uncle;