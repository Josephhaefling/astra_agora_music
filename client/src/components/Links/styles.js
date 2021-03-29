import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
    header: {
        fontSize: 36,
        textAlign: 'center',
        width: '80vw',
    },
    linksContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        height: '80vh',
        justifyContent: 'space-around',
        marginTop: 20,
        width: '80vw'
    }
}))