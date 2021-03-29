import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
    linkContainer: {
        height: '20vh',
        width: '30vw',
    },
    newLink: {
        borderRadius: '3px',
        boxShadow: '1px 2px 5px 2px rgba(45, 46, 46, .3)',
        display: 'inline-block',
        height: '20vh',
        width: '30vw',
        '&:hover': {
            animationName: `$pop`,
            animationDuration: '.5s',
            animationTimingFunction: 'ease',
            animationFillMode: 'forwards'
        }
    },
    image: {  
        animationName: `$shine`,
        animationDuration: '2s',
        animationTimingFunction: 'cubic-beizer(.17,.79,.96,.25);',
        animationFillMode: 'forwards',
        animationIterationCount: 'infinite',
        borderRadius: '3px',
        height: '100%',
        width: '100%',
    }, 
    '@keyframes pop': {
        '0%': {   
            boxShadow: '2px 3px 5px 3px rgba(45, 46, 46, .3)',
            height: '20.10vh',
            width: '30.10vw' 
        },
        '100%': {   
            boxShadow: '2px 3px 5px 4px rgba(45, 46, 46, .3)',
            height: '20.50vh',
            width: '30.50vw' 
        },
    },

    '@keyframes shine': {
    '0%': { 
        top: '-100px', 
        left: '-280px' 
    },
    '100%': { 
        top: '100%', 
        left: '100%' 
    }
  }
}))