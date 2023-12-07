
import { GoogleAuthProvider, signInWithPopup,getAuth } from 'firebase/auth'

import { app } from '../Redux_toolkit/fIREBASE.JS';
import {useDispatch} from 'react-redux';
import { userSliceActions } from '../Redux_toolkit/userSlice';

const OAuth = () => {

    const dispatch = useDispatch()
    const handleClick = async () => {
        try {
            const provider = new GoogleAuthProvider()
            const auth = getAuth(app)

            const result = await signInWithPopup(auth, provider)
            const res = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/google`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: 'include',
                body: JSON.stringify({
                    name: result.user.displayName,
                    email: result.user.email,
                    photo: result.user.photoURL
                })
            })
            const data = await res.json();
            console.log(data)
            dispatch(userSliceActions.signInSuccess(data))
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <button type="button" className="bg-red-700 p-3 rounded-lg text-white hover:opacity-75" onClick={handleClick}>
            Continue with google
        </button>
    );
};

export default OAuth;