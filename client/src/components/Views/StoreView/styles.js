import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
    storePage: {
        display: 'flex',
        height: '100vh',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        width: '100vw',

    },
    paymentContainer: {
        boxShadow: '1px 2px 5px 2px rgba(45, 46, 46, .3)',
        display: 'flex', 
        flexDirection: 'column',
        height: 'auto',
        justifyContent: 'space-around',
        padding: '2vh',
        width: '25vw'
    },
    totalContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '1vw',
    }
}))