import React from 'react';
import './index.css';
export const Button = (props) => {
    return (
        <div>
            <button 
                className="button"
                // onSubmit={onSubmit}
            >
                {props.name}
            </button>
        </div>
    );
};
