import styles from './PokeMenu.module.css'
import Link from 'next/link'

export default function PokeMenu() {
    return (
        <div className={styles.pokeMenu}>
            <Link href="/">
                <a>
                    <div>
                        <h1 className="a">P
                        <img src='/pokeload2.gif' className={styles.pokeBall} />
                        kéNext</h1>
                    </div>
                </a>
            </Link>
        </div>
    )
}