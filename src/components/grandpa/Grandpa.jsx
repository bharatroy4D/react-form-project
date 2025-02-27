import React from 'react';
import Dad from '../dad/Dad';
import Uncle from '../uncle/Uncle';
import Aunty from '../aunty/Aunty';

const Grandpa = () => {
    return (
        <div className='border-2 border-yellow-300 rounded-md text-2xl font-bold  p-5 '>
            <h2>Grandpa</h2>
           <div className='flex text-xl font-bold justify-between py-3'>
           <Dad></Dad>
            <Uncle></Uncle>
            <Aunty></Aunty>
           </div>
        </div>
    );
};

export default Grandpa;