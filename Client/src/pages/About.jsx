import { useSelector } from "react-redux";

const About = () => {

    const {currentUser} = useSelector(state=>state.user)

    return (
        <div className="mt-10 text-center">
            <h1 className="text-[1.5vw]">About <span className="text-[blue] text-lg uppercase">{currentUser.username}</span></h1>
           <img src={currentUser.profilePicture} alt="" className=' rounded-full mx-auto mt-5'/>
           <p className="text-[2vw] w-[60%] text-center mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque consequuntur quasi fugit a aut debitis incidunt cupiditate dolorem rerum facere!
           </p>
        </div>
    );
};

export default About;