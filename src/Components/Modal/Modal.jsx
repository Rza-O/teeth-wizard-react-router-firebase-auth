import React from 'react';

const Modal = () => {
    return (
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <form action="" className='space-y-2'>
                    <div>
                        First Name
                        <input
                            type="text"
                            name='fname'
                            placeholder="Type here"
                            className="input input-bordered input-primary w-full " />
                    </div>
                    <div>
                        Last Name
                        <input
                            type="text"
                            name='lname'
                            placeholder="Type here"
                            className="input input-bordered input-primary w-full" />
                    </div>
                    <div>
                        Email
                        <input
                            type="email"
                            name='email'
                            placeholder="Type here"
                            className="input input-bordered input-primary w-full" />
                    </div>
                    <div>
                        Phone Number
                        <input
                            type="number"
                            name='phoneNumber'
                            placeholder="Type here"
                            className="input input-bordered input-primary w-full " />
                    </div>
                    <div>
                        Appointment Date
                        <input
                            type="date"
                            name='date'
                            placeholder="Type here"
                            className="input input-bordered input-primary w-full " />
                    </div>
                    <div>
                        Address
                        <input
                            type="text"
                            name='address'
                            placeholder="Type here"
                            className="input input-bordered input-primary w-full" />
                    </div>
                </form>
                <div className="modal-action">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                    </form>
                </div>
            </div>
        </dialog>
    );
};

export default Modal;