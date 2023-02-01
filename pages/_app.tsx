import Navbar from '@/components/ui/navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Component {...pageProps} />
    </>
  )
}

export default App
