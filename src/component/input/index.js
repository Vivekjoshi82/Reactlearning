import React from 'react';
import './index.css';

const Input = ({
    name,
    id,
    error,
    label,
    onChange,
    value,
    // wrapperClass,
    onSubmit,
    ...rest
}) => {
    return (
        <div>
            {label && (
                <label className="label" htmlFor={name}>
                    {label}
                </label>
            )}
            <div className="inputContainer">
                <input
                    // aria-invalid={error ? "true" : "false"}
                    // {...rest}
                    onChange={onChange}

                    // value={value}
                    // className={
                    //   name
                    // }
                />
            </div>

            <div className={error}>{<span className="error">{error}</span>}</div>
        </div>
    );
};
export default Input;
