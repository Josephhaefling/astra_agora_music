import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
    item: {
        alignItems: 'center',
        borderBottom: '1px solid black',
        display: 'flex',
        flexDirection: 'row',
        height: '50vh',
        justifyContent: 'space-between',
        width: '60vw',
    },
    albumCover: {
        boxShadow: '1px 2px 5px 2px rgba(45, 46, 46, .3)',
        height: '45vh',
        width: '30vw',
    }, 
    productInfo: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        height: '15vh',
        justifyContent: 'space-around',
        width: '30vw',
    },
    orderInfo: {
        alignItems: 'center',
        display: 'flex',
        height: '15vh',
        justifyContent: 'space-around',
        width: '30vw',
    },
    dropDown: {
        height: '5vh',
        width: '5vw',
    },
    totalContainer: {
        height: '5vh',
        width: '5vw',
    }, 
    description: {
        padding: '1.5vw',
    }
}))