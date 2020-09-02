import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
    return <>
        <Head>
            <title>PokéNext - Home</title>
        </Head>
        <Link href="/search/PokeSearch">
            <a>
                <div className="card">
                    Search your Pokémon
                </div>
            </a>
        </Link>
        <Link href="/list/List?id=1">
            {/* <Link href='/list/[id]' as={`/list/1`} > */}
            <a>
                <div className="card">
                    PokéList
                </div>
            </a>
        </Link>
    </>
}