import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
    appBar: {
        alignItems: 'center',
        backgroundColor: '#FEFEFE',
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'row',
        height: '20vh',
        justifyContent: 'space-between',
    },
    logo: {
        height: '100%',
        width: '20%',
    }, 
}))