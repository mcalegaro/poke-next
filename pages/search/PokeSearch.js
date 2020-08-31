import { useState, useEffect } from "react"
import styles from './PokeSearch.module.css'
import { BASE_URL } from "../../constants/ApiConstants"
import PokeCard from "../../components/PokeCard/PokeCard"
import PokeListComp from "../../components/PokeList/PokeListComp"
export default function PokeSearch() {

    const [key, setKey] = useState("")
    const [loading, setLoading] = useState(false)
    const [result, setResult] = useState()

    const handleChange = (ev) => {
        setLoading(true)
        ev.preventDefault()
        setKey(ev.target.value)
    }

    useEffect(() => {
        if (key.length > 2) {
            if (loading) {
                setLoading(false)
                const searchByName = async () => {
                    const res = await fetch(BASE_URL + "?offset=0&limit=1050")
                    const data = await res.json()
                    const result = await data.results.filter(({ name }) => {
                        return name.includes(key)
                    })
                    return result
                }
                searchByName().then((res) => {
                    setResult(res)
                });
            }
        }
    })

    return <>
        <form className="subMenuFixed" style={{ height: '60px' }}>
            <div className="grid">
                <label>Search name:&nbsp;
                <input type="text" name="pokeName" onChange={handleChange}
                        value={key} className={styles.keySearch} />
                </label>
            </div>
        </form>
        <div className={["grid", styles.listGrid].join(" ")}>
            {
                loading ?
                    <div className="grid">
                        <img src='/pokeload2.gif' width='96px' height='96px' />
                    </div>
                    :
                    result && result.length > 0 ?
                        <PokeListComp list={result} />
                        :
                        "No results."
            }
        </div>
    </>
}