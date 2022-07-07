import React, { useState } from 'react';
import './Index.css';
import Input from '../../component/input';
import Validation from '../../helper/validation';
import { Button } from '../../component/button';
export const Login = () => {
    const [emails, setEmail] = useState();
    const [password, setPassword] = useState();

    const [firstNameError, setfirstNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    // const [emailError, setEmailError] = useState(false);
    // const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    // console.log(Validation);
    const [values, setValues] = useState({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({
        email: '',
        password: '',
    });

    const handleChange = (name, e) => {
        console.log('hello', name, e);

        setValues((prevState) => {
            console.log('prev', prevState);
            return { ...prevState, [name]: e.target.value };
        });
        console.log(values);
        setErrors(Validation(values));
    };

    const onsubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="">

            <form className='form' onSubmit={onsubmit} >
                <h3>Login </h3>
               
                    <Input
                        id="email"
                        name="email"
                        label="Your Email"
                        onChange={(e) => handleChange('email', e)}
                        className="inputlog"
                        error={errors.email}
                        autoFocus
                    />

                    <Input
                        id="password"
                        name="password"
                        label="Your Password"
                        onChange={(e) => handleChange('password', e)}
                        error={errors.password}
                        autoFocus
                        className="inputlog"
                    />
               
              
                    <Button
                    
                        name="Submit"
                    // onsubmit={onsubmit}

                    />
                
            </form>
        </div>

    );
};
