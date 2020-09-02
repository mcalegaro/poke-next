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
        <meta name="description" content="Find your Pokémon!" />
        <meta name="author" content="Mário Calegaro" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemprop="name" content="PokéNext" />
        <meta itemprop="description" content="Find your Pokémon!" />
        <meta itemprop="image" content="http://pokenext.s3-website-sa-east-1.amazonaws.com/logo.png" />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="http://pokenext.s3-website-sa-east-1.amazonaws.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="PokéNext" />
        <meta property="og:description" content="Find your Pokémon!" />
        <meta property="og:image" content="http://pokenext.s3-website-sa-east-1.amazonaws.com/logo.png" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PokéNext" />
        <meta name="twitter:description" content="Find your Pokémon!" />
        <meta name="twitter:image" content="http://pokenext.s3-website-sa-east-1.amazonaws.com/logo.png" />
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
