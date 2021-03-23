import React from 'react';
import { Box } from '@material-ui/core';
import ReactPlayer from 'react-player';
import useStyles from './styles';

const MediaPlayer = () => {

    const styles = useStyles()
    const { playerContainer,mediaPlayer } = styles

    return (
        <Box className={playerContainer} component='div'>
            <ReactPlayer 
                url='https://soundcloud.com/joseph-haefling/parasites'
                controls={true}
                playing={false}
                style={{border: '1px solid red', width: '80vw'}}
            />
        </Box>
    )
}

export default MediaPlayer
