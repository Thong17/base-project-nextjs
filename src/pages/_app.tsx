import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import NextNProgress from 'nextjs-progressbar'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { ThemeProvider } from '@mui/material/styles'
import { lightTheme } from '@/constants/theme'
import { persistor, store } from '@/configs/redux/setup'
import '../styles/globals.css'
import Head from 'next/head'

const Layout = ({ Component, pageProps }: any) => {
  const renderLayout = () => {
    const getLayout = (Component as any).getLayout
    if (getLayout) {
      return getLayout(<Component {...pageProps} />)
    } else {
      return (
        <div>
          <Component {...pageProps} />
        </div>
      )
    }
  }

  return <>{renderLayout()}</>
}

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <ThemeProvider theme={lightTheme}>
            <NextNProgress />
            <Head>
              <title>HR Attendance</title>
            </Head>
            <Layout Component={Component} pageProps={pageProps} />
            <ToastContainer
              position="top-right"
              autoClose={2000}
              hideProgressBar={true}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
              closeButton={false}
            />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </>
  )
}

export default App
