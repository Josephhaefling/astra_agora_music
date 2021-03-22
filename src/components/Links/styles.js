import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
    header: {
        textAlign: 'center',
        width: '80vw',
    },
    linksContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        height: '90vh',
        justifyContent: 'space-around',
        marginTop: 10,
        width: '80vw'
    }
}))