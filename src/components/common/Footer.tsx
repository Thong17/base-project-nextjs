import { Box } from '@mui/material'
import React from 'react'

export const FOOTER_HEIGHT = 60

const Footer = () => {
  return (
    <Box
      sx={{
        height: FOOTER_HEIGHT,
        backgroundColor: 'rebeccapurple',
        opacity: 0.9,
        display: 'grid',
        placeItems: 'center',
      }}
    >
      Footer
    </Box>
  )
}

export default Footer
