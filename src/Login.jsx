import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";
import { useRef } from "react";

const Login = () => {

    const email = useRef();
    const password = useRef();
    const login = (email, password) => {
        signInWithEmailAndPassword(auth, email, password).then(() => {
            alert('User logged successfully');
        })
    }

    const HandleSubmit = (e) => {
        e.preventDefault();
        login(email.current.value, password.current.value);
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={HandleSubmit}>
                <input type="email" ref={email} placeholder="email" />
                <input type="password" ref={password} placeholder="Password" />
                <button type="submit">Login</button>
            </form>
            <button>Logout</button>
        </div>
    )
}

export default Login