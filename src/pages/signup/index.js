import React, { useState } from 'react'
import {Link, Route} from "react-router-dom"
import Input from '../../component/input';
import "../signup/signup.css"
import { Button } from '../../component/button';
import Validation from '../../helper/validation';
export const Sign = () => {



    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [email, setEmail] = useState();


    const [values, setValues] = useState({


        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: ""
    });
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: ""
    });


    const handleChange = (

        name,
        e) => {

        console.log("hello", name, e)


        setValues((prevState) => {
            console.log("prev", prevState);
            return { ...prevState, [name]: e.target.value };
        });
        console.log(values);
        setErrors(Validation(values));

    };






    return (
        <div className="">

            <form className='forms'>
                <div className='flex'>
                    <div>Sign In</div>
                    
                    <Link to='./login' className='login'>Login</Link>
                    
                </div>


                <Input
                    className="inputsign"
                    name="First Name"
                    id="First Name"
                    label="First Name"
                    value={firstName}
                    onChange={(e) => {

                        handleChange("firstName", e)

                    }}
                    error={errors.firstName}
                />

                <Input
                    className="inputsign"
                    name="Last Name"
                    id="Last Name"
                    label="Last Name"
                    value={lastName}
                    onChange={(e) => {

                        handleChange("lastName", e)

                    }}
                    error={errors.lastName}
                />
                <Input
                    className="inputsign"
                    name="Email"
                    id="Email"
                    label="Email"
                    value={email}
                    onChange={(e) => {

                        handleChange("email", e)

                    }}
                    error={errors.email}

                />
                <Input
                    className="inputsign"
                    name="Password"
                    id="Password"
                    label="Password"
                    value={password}
                    onChange={(e) => {

                        handleChange("password", e)

                    }}
                    error={errors.password}


                />
                <Input
                    className="inputsign"
                    name=" Confirm Password"
                    id=" Confirm Password"
                    label=" Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => {

                        handleChange("confirmPassword", e)

                    }}
                    error={errors.confirmPassword}

                />

                <Button name=" Submit" />


            </form>

        </div>






    )
}
