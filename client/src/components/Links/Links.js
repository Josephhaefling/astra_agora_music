import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { renderLinks } from './useLinks';
import Link from '../Link/Link';
import useStyles from './styles';


const Links = () => {

    const styles = useStyles()
    const { linksContainer, header } = styles
    const links = renderLinks()

    return (
        <Box className={linksContainer} component='div'>
            <Typography className={header}>Alt Media</Typography>
            {links}
        </Box>
    )
}

export default Links