
import React from 'react';
// eslint-disable-next-line no-unused-vars
import {FaCross, FaPen, FaRegCircle, FaTimes} from 'react-icons/fa';

//  properties is passed into it
const Icon = ({name}) =>{
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
export default Icon;