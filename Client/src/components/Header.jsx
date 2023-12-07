
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Header = () => {

    const { currentUser } = useSelector(state => state.user)

    return (
        <div className="bg-slate-200 font-mono text-xl flex justify-between items-center mx-w-6xl px-[5vw] py-5 mx-auto">
            <div className="">
                <h1 className="font-bold">Auth Mern</h1>
            </div>

            <div className="flex gap-10">
                <Link to='/'><li>Home</li></Link>
                <Link to='/about'><li>About</li></Link>
                {
                    currentUser 
                    ? <img src={currentUser.profilePicture} className="h-10 w-10 rounded-full object-cover" alt="" /> 
                    : <Link to='/sign-in'><li>Sign in</li></Link>
                }
            </div>
        </div>
    );
};

export default Header;