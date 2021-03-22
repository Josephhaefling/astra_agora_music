import react from 'react';
import SimpleLineIcon from 'react-simple-line-icons';
import AlbumCover from '../AlbumCover/AlbumCover.js';
import { Box } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import useStyles from './styles';

const Link = (props) => {

    const styles = useStyles()
    const { linkContainer, image } = styles
    const { linkData } = props

    return (
        <Box className={linkContainer} component='div'>
            <a href={linkData && linkData.url} rel='link to The Corbett Report'>
                <img className={image} src={linkData && linkData.image} />
            </a>
        </Box>
    )
}

export default Link