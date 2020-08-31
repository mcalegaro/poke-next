import Link from 'next/link'

export default function Home(props) {
    return <>
        <Link href="/search/PokeSearch">
            <a>
                <div className="card">
                    Search your Pokemon
                </div>
            </a>
        </Link>
        <Link href="/list/1">
            <a>
                <div className="card">
                    PokeList
                </div>
            </a>
        </Link>
    </>
}