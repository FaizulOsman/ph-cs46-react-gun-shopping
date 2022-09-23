import React from 'react';
import { useState } from 'react';
import Modal from '../Modal.js/Modal';

const SingleGun = (props) => {
    const { id, name, img, action } = props.gun
    const [modalData, setModaldata] = useState({})


    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <img className='w-full h-64' src={img} alt="Gun" />
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <button className="badge">{action}</button>
                    </h2>
                    <div className="card-actions justify-end">
                        <button onClick={() => props.updataCount()} className="btn btn-sm btn-primary">ADD TO CART</button>
                        <label onClick={() => setModaldata(props.gun)} htmlFor="my-modal-3" className="btn modal-button btn-sm btn-secondary">open modal</label>
                    </div>
                </div>
            </div>
            {modalData && (<Modal data={modalData} setModaldata={setModaldata} />)}
        </div>
    );
};

export default SingleGun;