import React from 'react';

const Modal = (props) => {
    const { id, name, img } = props.data
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label onClick={() => props.setModaldata(null)} htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{id}</h3>
                    <img className='w-full h-64' src={img} alt="Gun" />
                    <h3 className="text-lg font-bold">{name}</h3>
                </div>
            </div>
        </div>
    );
};

export default Modal;