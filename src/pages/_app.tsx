import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import Topbar from '../components/Tobpar'

function MyApp({ Component, pageProps }: AppProps) {
  return <div>
      <Topbar/>
      <Component {...pageProps} />
    </div>
}

export default MyApp
