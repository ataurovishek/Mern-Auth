import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

import OAuth from '../components/OAuth';
const Signup = () => {


    const [error, Seterror] = useState(false)
    const [Loading, SetLoading] = useState(false)


    const Navigate = useNavigate()

    const usernameElement = useRef()
    const emailElement = useRef()
    const PasswordElement = useRef()


    const HandleSubmit = async (e) => {
        e.preventDefault();
        try {
            SetLoading(true)
            Seterror(false)
            const username = usernameElement.current.value;
            const email = emailElement.current.value;
            const Password = PasswordElement.current.value;

            usernameElement.current.value = ''
            emailElement.current.value = ''
            PasswordElement.current.value = ''

            const res = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/signup`, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username, email, Password
                })
            })
            const result = await res.json();
            if (result.Success === false) {
                SetLoading(false)
                Seterror(true)
                return
            }
            Navigate('/sign-in')
        } catch (err) {
            SetLoading(false)
            Seterror(true)
        }


    }



    return (
        <div className="flex flex-col max-w-lg mx-auto p-5">
            <h1 className="text-center mt-10 font-bold text-[3vw] mb-5">Sign Up</h1>

            <form className="flex flex-col gap-5" onSubmit={HandleSubmit}>
                <input type="text" placeholder="username" ref={usernameElement} id="username" className="outline-none text-slate-700 bg-slate-100 p-3 rounded-md" />
                <input type="email" placeholder="email" ref={emailElement} id="email" className="outline-none bg-slate-100 p-3 rounded-md" />
                <input type="password" placeholder="password" ref={PasswordElement} id="password" className="outline-none bg-slate-100 p-3 rounded-md" />
                <button className=" bg-slate-700  rounded-lg p-3 text-white uppercase hover:opacity-95" > {Loading ? 'Signing in' : 'Sign up'}</button>
                <OAuth />

            </form>

            <div className='mt-3'>
                <p className='text-[17px]'>Have an account? <Link to='/sign-in' className='text-blue-900'>Sign In</Link></p>
            </div>
            <p className='text-red-700 mt-5'>{error ? 'Something went wrong' : ''}</p>
        </div>
    );
};

export default Signup;