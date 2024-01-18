import React, { useState } from 'react'

export default function Modal({ setIsModalOpen }) {

    const [value, setValue] = useState(0);
    function closeModal(e) {
        let id = e.target.id;

        if (id === 'modal') {
            setIsModalOpen(false)
        }
    }

    const mas = () => {
        setValue(value + 1);
    }
    const menos = () => {
        if (value > 0) {
            setValue(value - 1);
        }
    }
    return (
        <div onClick={closeModal} id='modal' className='w-full h-screen  absolute z-50 top-0' >
            <div className='w-full h-2/5  bg-white'>


                <div className='flex gap-2 text-lg'>
                    <button onClick={menos}>-</button>
                    ``
                    <span>{value}</span>

                    <button onClick={mas}>+</button>
                </div>

            </div>
        </div>
    )
}
