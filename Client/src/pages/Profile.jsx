import { useSelector } from "react-redux";

const Profile = () => {

    const { currentUser } = useSelector(state => state.user)

    return (
        <div className="w-[40%] mx-auto text-center">
            <h1 className="text-[2vw]">Profile</h1>
            <img src={currentUser.profilePicture} alt="" className="mx-auto rounded-full mt-4" />

            <form action="" method="post" className=" mt-5 flex flex-col gap-4 w-[100%] mx-auto">
                <input type="text" id="username" className="outline-none text-slate-700 bg-slate-300 p-3 rounded-md" />
                <input type="email" id="email" className="outline-none text-slate-700 bg-slate-300 p-3 rounded-md" />
                <input type="password" id="password" className="outline-none text-slate-700 bg-slate-300 p-3 rounded-md" />
                <button className="outline-none bg-slate-700 p-3 rounded-lg text-white uppercase font-[1vw]">Update</button>
            </form>

            <div className="flex justify-between mt-5 ">
                <span className="font-[1vw] text-red-500">Delete Account</span>
                <span className="font-[1vw] text-red-500">Sign out</span>
            </div>
        </div>
    );
};

export default Profile;