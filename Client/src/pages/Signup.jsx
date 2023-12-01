import {Link} from 'react-router-dom'
const Signup = () => {
    return (
        <div className="flex flex-col max-w-lg mx-auto p-5">
            <h1 className="text-center mt-10 font-bold text-[3vw] mb-5">Sign Up</h1>

            <form action="" className="flex flex-col gap-5">
                <input type="text" placeholder="username" id="username" className="outline-none text-slate-700 bg-slate-100 p-3 rounded-md" />
                <input type="email" placeholder="email" id="email" className="outline-none bg-slate-100 p-3 rounded-md" />
                <input type="password" placeholder="password" id="password" className="outline-none bg-slate-100 p-3 rounded-md" />
                <button className=" bg-slate-700  rounded-lg p-3 text-white uppercase hover:opacity-95">Signup</button>
            </form>
        
            <div className='mt-3'>
                <p className=' text-[17px]'>Have an account? <Link to='/sign-in' className= 'text-blue-900'>Sign in</Link></p>

            </div>
          
        </div>
    );
};

export default Signup;