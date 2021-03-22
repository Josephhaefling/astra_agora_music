import React from 'react';
import { Box } from '@material-ui/core';
import AlbumCover from '../../AlbumCover/AlbumCover';
import Links from '../../Links/Links';
import useStyles from './styles';

const MainPage = () => {

    const styles = useStyles()
    const { mainPage } = styles

    return (
        <Box className={mainPage} component='div'>
            <AlbumCover />
            <Links />
        </Box>
    )
}

export default MainPage