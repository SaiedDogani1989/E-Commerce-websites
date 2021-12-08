import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"
import "./forgetPassStyle.css"
import Input from '../input/Input';
import Label from '../input/Lable';



const ForgetPassword = () => {
    const navigate = useNavigate()

    const createAccountDirection = () => {
        navigate("/createAccount")
    }

    const [email, setEmail] = useState("")

    const handleChange = event => {
        const { name, value } = event.target;
        setEmail({ [name]: value });
    };


    const inRef = useRef(null)
    useEffect(() => {
        inRef.current.focus()
    }, [])

    return (
        <>
            <form>
                <div className="forgetPassForm">
                    <Label
                        HtmlFor="examInputEmail"
                        name="To reset your password, type your account email address."
                        className="form-label label"
                    />
                    <Input
                        onChange={handleChange}
                        name="email"
                        type="email"
                        className="form-control"
                        id="examInputEmail"
                        refer={inRef}
                    />
                    <div className="btnS">
                        <button className="btn btn-outline-dark forget-submit">Submit</button>
                        <button className="btn btn-inline-dark forget-submit" onClick={createAccountDirection} >Don't have an account?</button>
                    </div>
                </div>
            </form>
        </>
    );
}

export default ForgetPassword;