import React from 'react';
import { AppBar, Box } from '@material-ui/core';
import Link from '../Link/Link';
import useStyles from './styles';

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
            <Link style={{fontSize : 60,}} />
        </AppBar>
    )
}

export default Header