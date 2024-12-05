import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, GoogleProvider } from './firebase/firebaseConfig';
import { useRef } from 'react';

const Register = () => {

    const email = useRef();
    const password = useRef();

    const register = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password).then(() => {
            console.log('User created successfully');
        })
    }

    const signInWithGoogle = () => {
        return signInWithPopup(auth,GoogleProvider).then(() => {
            console.log('User signed in successfully');
        })
    }

    const HandleRegister = (e) => {
        e.preventDefault();
        register(email.current.value, password.current.value);
    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={HandleRegister} >
                <label htmlFor="email">Email:</label><br />
                <input type="email" ref={email} name="email" required /><br />
                <label htmlFor="password">Password:</label><br />
                <input type="password" ref={password} name="password" required /><br />
                <input type="submit" value="Register" />
            </form>
            <button onClick={signInWithGoogle}>Google button</button>
        </div>
    )
}

export default Register