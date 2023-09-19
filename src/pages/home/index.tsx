import { SIDE_PADDING } from '@/components/common/Navbar'
import { useAppSelector } from '@/configs/redux/hooks'
import Layout from '@/layouts/layout'
import { selectHomeContent } from '@/stores/home/home.selector'
import { Box } from '@mui/material'
import * as React from 'react'
import { useEffect } from 'react'

export default function Home() {
  const data = useAppSelector(selectHomeContent)

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <Layout>
      <Box sx={{ padding: `0 ${SIDE_PADDING}px`, display: 'flex', justifyContent: 'space-between' }}>
        <span>Hello</span>
        <span>World!</span>
      </Box>
    </Layout>
  )
}
