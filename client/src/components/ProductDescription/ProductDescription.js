import React from 'react';
import { Box, Typography, Select, MenuItem } from '@material-ui/core';
import useStyles from './styles';

const ProductDescription = (props) => {
    const styles = useStyles()
    const { item, albumCover, orderInfo, dropDown, totalContainer, productInfo, description } = styles
    const { albumInfo, total, setTotal, setNum, unitCost, num } = props
    const { albumArt, albumDescription } = albumInfo

    const handleChange = (event) => {
        setNum(event.target.value)
        setTotal(unitCost * event.target.value)
    } 

    return (
        <Box className={item} component='div'>
            <img className={albumCover} src={albumArt} alt='Asta Agora album cover' /> 
            <Box className={productInfo} component='div'>
                <Box className={orderInfo} component='div'> 
                    <Select 
                        className={dropDown}
                        label='number' 
                        value={num} 
                        onChange={handleChange
                        }>
                        <MenuItem value='1'>1</MenuItem>
                        <MenuItem value='2'>2</MenuItem>
                        <MenuItem value='3'>3</MenuItem>
                        <MenuItem value='4'>4</MenuItem>
                        <MenuItem value='5'>5</MenuItem>
                        <MenuItem value='6'>6</MenuItem>
                        <MenuItem value='7'>7</MenuItem>
                        <MenuItem value='8'>8</MenuItem>
                        <MenuItem value='9'>9</MenuItem>
                    </Select>
                    <Typography className={total} element='h6' >{`$${total}.00`}</Typography>
                </Box>
                <Typography className={description} element='p'>{albumDescription}</Typography>
            </Box>
        </Box>
    )
}

export default ProductDescription