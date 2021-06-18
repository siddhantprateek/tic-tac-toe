
// eslint-disable-next-line no-unused-vars
import React from 'react';
import {FaCross, FaPen, FaRegCircle} from 'react-icons/fa';

//  properties is passed into it
export default function Icon({name}){
    switch (name) {
        case "cross":
            return<FaCross className="icons"/>
        case "circle":
            return<FaRegCircle className="icons"/>
        default:
            return<FaPen className="icons"/>;
    }
    // if place is empty pen will come or
};
