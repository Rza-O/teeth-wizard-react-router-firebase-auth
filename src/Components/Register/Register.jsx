import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/Auth/AuthProvider';

const Register = () => {
    const { handleRegister, manageProfile } = useContext(AuthContext);
    const [error, setError] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        setError('')
        const name = e.target.name.value
        const image = e.target.image.value
        const email = e.target.email.value
        const password = e.target.password.value
        const conPassword = e.target.conPassword.value
        console.log(name, image, email, password, conPassword);


        if (password.length < 6) {
            setError('Password must be six character long')
        }
        if (password !== conPassword) {
            setError('Password Did not match')
            return;
        }
        if (!/[a-z]/.test(password)) {
            setError('password must contain one letter')
            return
        }
        if (!/[A-Z]/.test(password)) {
            setError('password must contain one capital letter')
            return
        }
        handleRegister(email, password)
            .then(res => {
                manageProfile(name, image)
            })

    }


    return (
        <div className='w-[80%] mx-auto max-w-[1200] mt-7'>
            <form className='flex flex-col items-center space-y-3' onSubmit={handleSubmit}>
                <div className=''>
                    <h1>Name</h1>
                    <input
                        name='name'
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered input-primary w-full max-w-xs" />
                </div>
                <div>
                    <h1>Image</h1>
                    <input
                        name='image'
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered input-primary w-full max-w-xs" />
                </div>
                <div>
                    <h1>Email</h1>
                    <input
                        name='email'
                        type="email"
                        placeholder="Type here"
                        className="input input-bordered input-primary w-full max-w-xs" />
                </div>
                <div>
                    <h1>Password</h1>
                    <input
                        name='password'
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered input-primary w-full max-w-xs" />
                </div>
                <div>
                    <h1>Confirm Password</h1>
                    <input
                        name='conPassword'
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered input-primary w-full max-w-xs" />
                </div>
                {
                    error && <p className='text-red-500'>{error}</p>
                }
                <button className='btn btn-primary' type='submit'>Register</button>
            </form>
        </div>
    );
};

export default Register;