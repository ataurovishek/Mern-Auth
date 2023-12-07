import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { userSliceActions } from '../Redux_toolkit/userSlice';
import OAuth from '../components/OAuth';

const Signin = () => {


    //  useSelector for get slice 
    const { error, Loading } = useSelector(state => state.user)

    // dispatch method and payloads
    const dispatch = useDispatch()
    // usenavigate for navigation 
    const Navigate = useNavigate()

    // set states


    //  Dom references 
    const emailElement = useRef()
    const PasswordElement = useRef()


    const HandleSubmit = async (e) => {
        e.preventDefault();
        try {
            dispatch(userSliceActions.signInStart())

            const email = emailElement.current.value;
            const Password = PasswordElement.current.value;


            emailElement.current.value = ''
            PasswordElement.current.value = ''

            const res = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/signin`, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                credentials: 'include',
                body: JSON.stringify({
                    email,
                    Password
                })
            })
            const result = await res.json();
            if (result.Success === false) {
                dispatch(userSliceActions.signInFailure(result.message))
                return
            }
            dispatch(userSliceActions.signInSuccess(result))
            Navigate('/')
        } catch (err) {
            dispatch(userSliceActions.signInFailure(err))
        }


    }



    return (
        <div className="flex flex-col max-w-lg mx-auto p-5">
            <h1 className="text-center mt-10 font-bold text-[3vw] mb-5">Sign Up</h1>

            <form className="flex flex-col gap-5" onSubmit={HandleSubmit}>
                <input type="email" placeholder="email" ref={emailElement} id="email" className="outline-none bg-slate-100 p-3 rounded-md" />
                <input type="password" placeholder="password" ref={PasswordElement} id="password" className="outline-none bg-slate-100 p-3 rounded-md" />
                <button className=" bg-slate-700  rounded-lg p-3 text-white uppercase hover:opacity-95" > {Loading ? 'Signing in' : 'Sign in'}</button>
                <OAuth/>
            </form>

            <div className='mt-3'>
                <p className='text-[17px]'>Dont have an account? <Link to='/sign-up' className='text-blue-900'>Sign Up</Link></p>
            </div>
            <p className='text-red-700 mt-5'>{error ? error || 'Something went wrong' : ''}</p>
        </div>
    );
};

export default Signin;