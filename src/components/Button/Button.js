import React from 'react';
import { Link } from 'react-router-dom';
import SimpleLineIcon from 'react-simple-line-icons';
import { linkStyles } from './styles';

const Button = (props) => {
    
    return (
        <Link
            to='/store'
        >
            <SimpleLineIcon name='bag' style={linkStyles} /> 
        </Link>       
    )
}

export default Button