import styles from './PokeMenu.module.css'
import Link from 'next/link'
import { LOADING } from '../../components/PbLoading'

export default function PokeMenu() {
    return (
        <div className={styles.pokeMenu}>
            <Link href="/">
                <a>
                    <div>
                        <h1 className="a">P
                        <img
                                // src='/pokeload2.gif' 
                                src={LOADING}
                                className={styles.pokeBall} />
                        keNext</h1>
                    </div>
                </a>
            </Link>
        </div>
    )
}