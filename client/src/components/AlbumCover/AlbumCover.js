import React from 'react';
import { Box } from '@material-ui/core';
import useStyles from './styles';

//images
import astraCoverColor from '../../images/Astra_Cover_Color_Border_Higher_Qual-9220707.png';
import truthDefense from '../../images/Truth_Defense_Export-0269751.png';
 
const AlbumCover = () => {

    const styles =  useStyles()
    const{ albumContainer, cover, quote, quoteContainer } = styles

    return (
        <Box className={albumContainer} component='div'> 
            <Box className={quoteContainer} component='div' >
                <img className={quote} src={truthDefense} />
            </Box>
            <img className={cover} src={astraCoverColor} />
        </Box>
    )
}

export default AlbumCover