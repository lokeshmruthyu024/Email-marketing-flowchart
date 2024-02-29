import { Typography } from '@mui/material'
import React from 'react';
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <div style={{
      display: "flex",
      marginRight: "auto",
      alignItems: "center",
      gap: "8px"
    }}>
      <Link to={"/"}>

      </Link>
      <img src="icon.png" alt="icon" width={'50px'} height={'50px'} className='image-inverted' />
      <Typography sx={{ display: { md: "block", sm: "none", xs: "none" }, mr: "auto", fontWeight: "800", fontSize: "30px", textShadow: "2px" }}>
        Email Marketing App
      </Typography>
    </div>
  )
}

export default Logo
