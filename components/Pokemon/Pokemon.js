import Head from 'next/head'
import styles from './Pokemon.module.css'
import Loading from '../Loading/Loading'
import { useState } from 'react'

export default function Detail({ data }) {

    const [frontDefault, setFrontDefault] = useState('/pokeload2.gif')

    const renderSprites = () => {
        let sprites = []
        for (const key in data.sprites) {
            if (data.sprites.hasOwnProperty(key)) {
                const sprite = data.sprites[key];
                sprites.push({
                    key: key,
                    sprite: sprite
                })
            }
        }
        return sprites
    }

    const renderDetails = () => {
        return <div className={[styles.card, "card"].join(" ")}>
            <h2 className={styles.detailTitle}>
                {data.name}
            </h2>
            <div className={styles.divImgFront}>
                <img src={
                    data.sprites.other['official-artwork'].front_default ?
                        data.sprites.other['official-artwork'].front_default :
                        data.sprites.front_default ? data.sprites.front_default :
                            '/pokeload.gif'
                }
                    className={styles.imgFront} style={{ maxWidth: '200px' }} />
            </div>
            <div className="grid">
                <span><b>Abilities:&nbsp;</b></span>
                {
                    data.abilities.map(({ ability: i }) => {
                        return <span key={i.name} >
                            {i.name};&nbsp;
                        </span>
                    })
                }
                <span><b>Types:&nbsp;</b></span>
                {
                    data.types.map(({ type: i }) => {
                        return <span key={i.name} >
                            {i.name};&nbsp;
                        </span>
                    })
                }
            </div>

            <div style={{ marginTop: '10px' }}>
                <b>Stats</b>
            </div>
            <div className={[styles.content].join(" ")}>
                {/* <div className={styles.row}>
                    <div className={[styles.cell].join(" ")}>
                        <b>Stats</b>
                    </div>
                </div> */}
                {
                    data.stats.map((s) => {
                        return <div key={s.stat.name} className={styles.row}>
                            <div className={[styles.cell].join(" ")}>
                                {s.stat.name}
                            </div>
                            <div className={[styles.cell].join(" ")}>
                                {s.base_stat}
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    }

    return <>
        <Head>
            {
                data !== undefined ?
                    <title>PokéNext - {data.name.charAt(0).toUpperCase() + data.name.slice(1)}</title>
                    :
                    ''
            }
        </Head>
        <div className={styles.detailGrid}>
            {
                data !== undefined ?
                    renderDetails()
                    :
                    <Loading />
            }
        </div>
    </>
}