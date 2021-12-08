import React, { useState, useEffect, useRef } from 'react';
import Swal from 'sweetalert2';
import Input from '../input/Input';
import Label from '../input/Lable';
import "./createAccount.css";


const CreateAccount = () => {

    //get inputs value
    const [inputValues, setInputValues] = useState({
        fullName: "",
        email: "",
        password: "",
        repeatPassword: "",
        isChecked: false
    });


    const handleChange = event => {
        const { name, value } = event.target;
        setInputValues({ ...inputValues, [name]: value });
    };


    const inRef = useRef(null)
    useEffect(() => { inRef.current.focus() }, [])



    //show password
    const [showPass, setShowPass] = useState(true)

    const toggle = React.useCallback(() => {
        setShowPass(e => !e);
    }, []);


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(inputValues.fullName);
        console.log(inputValues.email);
        console.log(inputValues.password);
        console.log(inputValues.repeatPassword);
        Swal.fire(
            'Good job!',
            'You Successfully Create an account, Please Confirm Your Email',
            'success'
        )
    }
    
    return (
        <>
            <section className="createAccount">
                <form onSubmit={(e) => handleSubmit(e)} className="createAccount-form">
                    <p className="bg-warning text">Create account and get 10% off for all purchases</p>
                    <div className="mb-3">
                        <Label
                            HtmlFor="exampleInputFullName"
                            className="form-label"
                            name="Full Name"
                        />
                        <Input
                            onChange={handleChange}
                            name="fullName"
                            type="text"
                            className="form-control"
                            id="exampleInputFullName"
                            refer={inRef}
                        />
                    </div>
                    <div className="mb-3">
                        <Label
                            HtmlFor="exampleInputEmail1"
                            className="form-label"
                            name="Email"
                        />
                        <Input
                            onChange={handleChange}
                            name="email"
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria="emailHelp"
                        />
                    </div>
                    <div className="mb-3">
                        <Label
                            HtmlFor="exampleInputPassword1"
                            className="form-label"
                            name="Password"
                        />
                        <div style={{ "display": "flex" }}>
                            <Input
                                onChange={handleChange}
                                name="password"
                                type={showPass ? "password" : "text"}
                                className="form-control"
                                id="exampleInputPassword1"
                            /><i
                                onClick={toggle}
                                id="togglePassword"
                                className={showPass ? "fas fa-eye-slash" : "fas fa-eye"}
                                style={{ "margin-left": "-30px", "margin-top": "9px", "cursor": "pointer" }}></i>
                        </div>
                    </div>
                    <div className="mb-3">
                        <Label
                            HtmlFor="exampleInputPassword1"
                            className="form-label"
                            name="Repeat Password"
                        />
                        <Input
                            onChange={handleChange}
                            name="repeatPassword"
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                        />
                        {(inputValues.password === "") ? null : <p>{(inputValues.password === inputValues.repeatPassword) ? <span style={{ "color": "green" }}>The password is ok</span> : <span style={{ "color": "red" }}>The password is not same</span>}</p>}
                    </div>
                    <button type="submit" className="btn btn-warning">Submit</button>

                </form>
            </section>
        </>

    );
}

export default CreateAccount;