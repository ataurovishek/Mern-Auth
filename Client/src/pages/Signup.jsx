import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom'
const Signup = () => {

    const Navigate = useNavigate()

    const usernameElement = useRef()
    const emailElement = useRef()
    const PasswordElement = useRef()


    const HandleSubmit = (e) => {
        e.preventDefault();

        const username = usernameElement.current.value;
        const email = emailElement.current.value;
        const Password = PasswordElement.current.value;

        usernameElement.current.value = ''
        emailElement.current.value = ''
        PasswordElement.current.value = ''


        fetch('http://localhost:8080/api/auth/signup', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username, email, Password
            })
        }).then(res => res.json()).then()
        Navigate('/sign-in')

    }



    return (
        <div className="flex flex-col max-w-lg mx-auto p-5">
            <h1 className="text-center mt-10 font-bold text-[3vw] mb-5">Sign Up</h1>

            <form className="flex flex-col gap-5" onSubmit={HandleSubmit}>
                <input type="text" placeholder="username" ref={usernameElement} id="username" className="outline-none text-slate-700 bg-slate-100 p-3 rounded-md" />
                <input type="email" placeholder="email" ref={emailElement} id="email" className="outline-none bg-slate-100 p-3 rounded-md" />
                <input type="password" placeholder="password" ref={PasswordElement} id="password" className="outline-none bg-slate-100 p-3 rounded-md" />
                <button className=" bg-slate-700  rounded-lg p-3 text-white uppercase hover:opacity-95"  >Signup</button>
            </form>

            <div className='mt-3'>
                <p className=' text-[17px]'>Have an account? <Link to='/sign-in' className='text-blue-900'>Sign in</Link></p>
            </div>

        </div>
    );
};

export default Signup;