import React, { useContext } from 'react';
import Cousin from '../cousin/Cousin';
import { AssetContext } from '../grandpa/Grandpa';

const Uncle = () => {
    const asset = useContext(AssetContext);
    return (
        <div className=' border-2 border-yellow-300 rounded-md p-6'>
            <h2>Uncle</h2>
            <div className='flex gap-5'>
                <p>has:{asset}</p>
                <Cousin name={'asif'} asset={asset}></Cousin>
                <Cousin name={'jahid'}></Cousin>
            </div>
        </div>
    );
};

export default Uncle;