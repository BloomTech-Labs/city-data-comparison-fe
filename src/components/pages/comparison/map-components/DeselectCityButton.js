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
        <img src={closeIcon} class="deselect-city-button" onClick={handleClick}/>
    )
}