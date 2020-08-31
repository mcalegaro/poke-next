import Link from 'next/link'

export default function Home() {
    return <>
        <Link href="/search/PokeSearch">
            <a>
                <div className="card">
                    Search your Pokémon
                </div>
            </a>
        </Link>
        <Link href="/list/1">
            <a>
                <div className="card">
                    PokéList
                </div>
            </a>
        </Link>
    </>
}