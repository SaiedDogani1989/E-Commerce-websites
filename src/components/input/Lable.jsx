import React from 'react';



const Label = ({name, className,HtmlFor}) => {
    return (
        <>
            <label
                HtmlFor={HtmlFor}
                className={className}>
                {name}
            </label>
        </>
    );
}

export default Label;