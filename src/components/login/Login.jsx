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
                        <Link to="#" className="fb btn">
                            <i className="fab fa-facebook"></i>Login with Facebook
                        </Link>
                        <Link to="#" className="google btn">
                            <i className="fab fa-google"></i>Login with Google+
                        </Link>
                    </div>
                    <div className="mb-3">
                        <Label
                            name="Email Address"
                            HtmlFor="exampleInputEmail1"
                            className="form-label"
                        />
                        <Input
                            onChange={(e) => { setEmail(e.target.value) }}
                            refer={inputRef}
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
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
                            HtmlFor="exampleInputPassword1"
                            className="form-label"
                        />
                        <div style={{ "display": "flex" }}>
                            <Input
                                onChange={(e) => { setPassword(e.target.value) }}
                                type={showPass ? "password" : "text"}
                                className="form-control"
                                id="exampleInputPassword1"
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
                    <button type="submit" className="btn btn-warning">
                        Submit
                    </button>
                    <div className="forget-pass">
                        <button className="btn btn-inline-dark" onClick={forgetPassDirection}>Forget Your password?</button>
                        <button className="btn btn-inline-dark" onClick={createAccountDirection}>Don't have an account?</button>
                    </div>
                </form>
            </section>
        </>

    );
}

export default Login;