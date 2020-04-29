import React, {useState, useEffect} from 'react'
import { useDispatch } from "react-redux";
import {removeCity} from '../../../../redux/actions/cityActions.js'
import closeIcon from './icons/close.svg';

const DeselectCityButton = ({city}) => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(removeCity(city["_id"]))
    }
    return (
        <div style={{
            'display': 'flex',
            'cursor' : 'pointer',
            'alignItems' : 'center',
            'justifyContent' : 'spaceAround',
            'background' : 'white',
            'width': '1.4rem',
            'justifyContent': 'space-around', 
            'borderRadius': '0.3rem',
            'margin': '0 0.3rem',
            'margin-right': '0.6rem'
        }}>
        <img style={{
            'width': '100%'}} src={closeIcon} class="deselect-city-button" onClick={handleClick}/>
        </div>
    )
}
export default DeselectCityButton