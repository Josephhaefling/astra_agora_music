import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
    albumContainer: {
        boxShadow: '1px 2px 5px 2px rgba(45, 46, 46, .3)',
        display: 'flex',
        flexDirection: 'column',
        height: '125vh',
        marginTop: 20,
        width: '80vw',
    },
    quoteContainer: {
        display: 'flex',
        height: '25vh',
        justifyContent: 'center',
        width: '80vw'
    },
    quote: {
        height: '25vh',
        width: '40vw',
    },
    cover: {
        height: '100vh',
        width: '80vw'
    }
}))