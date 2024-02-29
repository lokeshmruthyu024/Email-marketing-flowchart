import React from 'react'
import { useTheme } from '@emotion/react';
const Home = () => {
  const theme = useTheme();
  return (
    <div>
      <img src="image.jpeg" alt="" style={{ width: '900px', marginLeft: '80px', marginTop: '50px' }} />
    </div>
  )
}

export default Home
