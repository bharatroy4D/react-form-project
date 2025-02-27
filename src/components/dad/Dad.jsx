import React from 'react';
import Myself from '../myself/Myself';
import Brother from '../brother/Brother';
import Sister from '../sister/Sister';

const Dad = () => {
    return (
        <div className='border-2 border-yellow-300 rounded-md p-6'>
            <h1>Dad</h1>
            <div className='flex gap-5 '>
                <Myself></Myself>
                <Brother></Brother>
                <Sister></Sister>
            </div>
        </div>
    );
};

export default Dad;