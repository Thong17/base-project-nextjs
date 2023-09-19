import { Box } from '@mui/material'
import React from 'react'
import { COLLAPSE_SIDEBAR_WIDTH, EXPANDED_SIDEBAR_WIDTH, LAYOUT_TRANSITION } from './Sidebar'
import { useAppSelector } from '@/configs/redux/hooks'
import { selectConfig } from '@/stores/config/selector'

export const NAVBAR_HEIGHT = 60
export const SIDE_PADDING = 50

const Navbar = () => {
  const { isOpenedSidebar, isAttachedSidebar } = useAppSelector(selectConfig)
  return (
    <Box
      sx={{
        height: NAVBAR_HEIGHT,
        position: 'fixed',
        width: `calc(100vw - ${(isOpenedSidebar && isAttachedSidebar) ? EXPANDED_SIDEBAR_WIDTH : COLLAPSE_SIDEBAR_WIDTH}px)`,
        display: 'flex',
        justifyContent: 'space-between',
        opacity: 0.9,
        padding: `0 ${SIDE_PADDING}px`,
        backgroundColor: 'rebeccapurple',
        transition: LAYOUT_TRANSITION
      }}
    >
      <span>Icon</span>
      <span>Action</span>
    </Box>
  )
}

export default Navbar
