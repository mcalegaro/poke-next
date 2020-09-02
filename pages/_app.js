import '../styles/globals.css'
import Head from 'next/head'
import PokeMenu from '../components/PokeMenu/PokeMenu'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>PokéNext</title>
        <link rel="icon" href="/favicon.gif" type="image/gif" />
        <meta name="keywords" content="Pokémon, Pokemon, Pokémon Search, Pokemon Search, Pokémon Stats, Pokemon Stats" />
        <meta name="description" content="Find your Pokémon" />
        <meta name="author" content="Mário Calegaro" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
