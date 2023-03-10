import Navbar from '@/components/ui/navbar'
import { AuthProvider } from '@/context/FontContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    const use = async () => {
      ;(await require('tw-elements')).default
    }
    use()
  }, [])

  return (
    <AuthProvider>
      <div className='m-[5%] lg:my-[5%] lg:mx-[15%]'>
        <header>
          <Navbar />
        </header>

        <Component {...pageProps} />
      </div>
    </AuthProvider>
  )
}

export default App
