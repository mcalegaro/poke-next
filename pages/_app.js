import '../styles/globals.css'
import Head from 'next/head'
import PokeMenu from '../components/PokeMenu/PokeMenu'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>PokeNext</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <PokeMenu />
        <div className="article">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  )
}

export default MyApp
