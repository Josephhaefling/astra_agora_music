import React from 'react';
import { AppBar, Box } from '@material-ui/core';
import useStyles from './styles';
import Button from '../Button/Button';

//images
import astraAgoraLogo from '../../images/Astra_Black_2021_Lo_Qual-9151855.jpg';

const Header = () => {

    const styles = useStyles()
    const { appBar, logo, icon } = styles

    return (
        <AppBar
            className={appBar}
            position='static'
            color='inherit'
        >
            <img className={logo} src={astraAgoraLogo} />
            <Button style={{fontSize : 60,}} />
        </AppBar>
    )
}

export default Header