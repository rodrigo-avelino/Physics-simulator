import React from 'react';

import { InputContainer } from './style'

function InputWithLabel({placeholder, onChange, label}) {
    return (
        <InputContainer>
            <p>{label}</p>
            <input type="text" placeholder={placeholder} onChange={onChange}></input>
        </InputContainer>
    );
}

export default InputWithLabel;