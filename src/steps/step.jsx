import React, { useContext } from 'react'
import { DefaultContext } from '../main';
import { useNavigate } from 'react-router-dom';

const StepComponent = ({ next = "" }) => {
    const navigate = useNavigate();

    return (
        <>
            <button onClick={() => {
                navigate(next);
            }}>{next}</button>
        </>
    )
}

export default StepComponent;