import React from 'react';


const Input = ({ onChange, name, type, className, id, refer, aria }) => {
    return (
        <>
            <input
                onChange={onChange}
                name={name}
                type={type}
                className={className}
                id={id}
                ref={refer}
                aria-describedby={aria}
            />
        </>
    );
}

export default Input;