import React, { createContext } from 'react';
import Dad from '../dad/Dad';
import Uncle from '../uncle/Uncle';
import Aunty from '../aunty/Aunty';
export const AssetContext = createContext('golden');

const Grandpa = () => {
    return (
        <div className='border-2 border-yellow-300 rounded-md text-2xl font-bold  p-5 '>
            <h2>Grandpa</h2>
            <AssetContext.Provider value='gold'>
                <div className='flex text-xl font-bold justify-between py-3'>
                    <Dad></Dad>
                    <Uncle></Uncle>
                    <Aunty></Aunty>
                </div>
            </AssetContext.Provider>
        </div>
    );
};

export default Grandpa;