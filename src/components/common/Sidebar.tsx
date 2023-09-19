import { useAppDispatch, useAppSelector } from '@/configs/redux/hooks'
import { sideBar } from '@/constants/sidebar'
import { selectConfig } from '@/stores/config/selector'
import { Box, useTheme } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const COLLAPSE_SIDEBAR_WIDTH = 80
export const EXPANDED_SIDEBAR_WIDTH = 300
export const LAYOUT_TRANSITION = '0.3s ease'

interface ISidebarItem {
  route: string
  title: string
  icon: any
  permission?: string
  target?: string
  children?: any
}

const ToggleButton = ({ onClick, isActive = false, label }: any) => {
  return (
    <Box
      onClick={() => onClick()}
      sx={{
        backgroundColor: 'teal',
        height: 60,
        width: 80,
        boxSizing: 'border-box',
        display: 'grid',
        placeItems: 'center',
        cursor: 'pointer',
        color: isActive ? 'blue' : 'black'
      }}
    >
      {label}
    </Box>
  )
}

const SidebarItem = ({
  data,
  current,
}: {
  data: ISidebarItem
  current: string
}) => {
  const theme = useTheme()
  return (
    <Link href={data.route} target={data.target} passHref>
      <Box
        sx={{
          cursor: 'pointer',
          padding: '20px 34px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'start',
          gap: '10px',
          borderRadius: theme.shape.borderRadius,
          backgroundColor: data.route.includes(current)
            ? '#ffffff22'
            : '#ffffff00',
          color: theme.palette.text.secondary,
          '&:hover': {
            backgroundColor: '#ffffff22',
          },
        }}
      >
        <span>{data.icon}</span>
      </Box>
    </Link>
  )
}

const Sidebar = () => {
  const router = useRouter()
  const { isOpenedSidebar, isAttachedSidebar } = useAppSelector(selectConfig)
  const dispatch = useAppDispatch()

  const handleToggleSidebar = () => {
    dispatch({ type: 'config/toggleSidebar' })
  }
  const handleToggleAttach = () => {
    dispatch({ type: 'config/toggleAttach' })
  }
  return (
    <Box
      sx={{
        backgroundColor: 'darkslateblue',
        height: '100vh',
        width: `${isOpenedSidebar ? EXPANDED_SIDEBAR_WIDTH : COLLAPSE_SIDEBAR_WIDTH}px`,
        position: 'fixed',
        zIndex: 1000,
        transition: LAYOUT_TRANSITION
      }}
    >
      <ToggleButton onClick={handleToggleSidebar} label='T' />
      <ToggleButton onClick={handleToggleAttach} label='A' isActive={isAttachedSidebar} />
      {sideBar.map((nav: any, key: number) => {
        return (
          <SidebarItem
            key={key}
            data={nav}
            current={router.pathname.split('/')?.[1]}
          />
        )
      })}
    </Box>
  )
}

export default Sidebar
