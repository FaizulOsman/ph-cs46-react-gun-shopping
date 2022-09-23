import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SingleGun from '../SingleGun/SingleGun';

const AllGun = ({ updataCount }) => {
    const [guns, setGuns] = useState([])

    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`)
            .then(res => res.json())
            .then(data => setGuns(data))
    }, [])
    return (
        <div className='w-11/12 mx-auto'>
            <img src="" alt="" />
            <h1 className='text-3xl my-5 font-bold'>Welcome</h1>
            <div className="grid grid-cols-3 gap-4">
                {
                    guns.map(gun => <SingleGun gun={gun} key={gun.id} updataCount={updataCount}></SingleGun>)
                }
            </div>
        </div>
    );
};

export default AllGun;