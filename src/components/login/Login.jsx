import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Input from '../input/Input';
import Label from '../input/Lable';
import "./login.css"


const Login = () => {

    const navigate = useNavigate()
    const forgetPassDirection = () => {
        navigate("/forgetPassword")
    }
    const createAccountDirection = () => {
        navigate("/createAccount")
    }

    //get input value
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")



    //show password
    const [showPass, setShowPassword] = useState(true)
    const toggle = React.useCallback(() => {
        setShowPassword(e => !e);
    }, []);

    //focus on input field
    const inputRef = useRef(null)
    useEffect(() => { inputRef.current.focus() }, [])


    const handleSubmit = (e) => {
        e.preventDefault()
        Swal.fire(
            'Good job!',
            'Enjoy Your 10% Discount!',
            'success'
        )

    }

    return (
        <>
            <section className="login">
                <form onSubmit={(e) => handleSubmit(e)} className="login-form" method="get">
                    <div className="gmail-facebook">
                        <Link to="#" className="fb btn btn-primary">
                            <i className="fab fa-facebook me-2"></i>Login with Facebook
                        </Link>
                        <Link to="#" className="google btn btn-danger">
                            <i className="fab fa-google me-2"></i>Login with Google+
                        </Link>
                    </div>
                    <div className="mb-3">
                        <Label
                            name="Email Address"
                            className="form-label"
                        />
                        <Input
                            onChange={(e) => { setEmail(e.target.value) }}
                            refer={inputRef}
                            type="email"
                            className="form-control"
                            aria="emailHelp"
                            required
                        />
                        <div id="emailHelp" className="form-text">
                            We'll never share your email with anyone else.
                        </div>
                    </div>
                    <div className="mb-3">
                        <Label
                            name="Password"
                            className="form-label"
                        />
                        <div style={{ "display": "flex" }}>
                            <Input
                                onChange={(e) => { setPassword(e.target.value) }}
                                type={showPass ? "password" : "text"}
                                className="form-control"
                                name="password"
                                required
                            />
                            <i
                                onClick={toggle}
                                id="togglePassword"
                                className={showPass ? "fas fa-eye-slash" : "fas fa-eye"}
                                style={{ "margin-left": "-30px", "margin-top": "9px", "cursor": "pointer" }}></i>
                        </div>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Save Me</label>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-warning"
                        disabled={email === "" || password === "" ? true : false}
                    >
                        Submit
                    </button>
                    <div className="forget-pass">
                        <button className="btn btn-outline-dark" onClick={forgetPassDirection}>Forget Your password?</button>
                        <button className="btn btn-outline-dark" onClick={createAccountDirection}>Don't have an account?</button>
                    </div>
                </form>
            </section>
        </>

    );
}

export default Login;