import React, { useContext } from 'react';
import { AuthContext } from '../../Context/Auth/AuthProvider';


const Login = () => {
    const { handleGoogleLogin, handleLogin, handleLogOut } = useContext(AuthContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password);

        handleLogin(email, password)
    }
    return (
        <div className='w-[80%] mx-auto max-w-[1200] mt-7'>
            <form className='flex flex-col items-center space-y-3' onSubmit={handleSubmit}>


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

                <button className='btn btn-primary' type='submit'>Login</button>
                {/* <button onClick={handleLogOut} className='btn btn-primary' type='submit'>Log out</button> */}
            </form>
        </div>
    );
};

export default Login;