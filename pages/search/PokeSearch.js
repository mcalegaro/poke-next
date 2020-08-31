import { useEffect, useState } from "react"
import PokeListComp from "../../components/PokeList/PokeListComp"
import { BASE_URL } from "../../constants/ApiConstants"
import styles from './PokeSearch.module.css'
import { useRouter } from 'next/router'
export default function PokeSearch() {

    const [key, setKey] = useState()
    const [loading, setLoading] = useState(false)
    const [result, setResult] = useState()
    const router = useRouter()
    const { pokeName } = router.query

    if (pokeName !== undefined && key === undefined) {
        setKey(pokeName)
        setLoading(true)
    }

    const handleChange = (ev) => {
        // setLoading(true)
        // ev.preventDefault()
        setKey(ev.target.value)
    }

    useEffect(() => {
        document.getElementById('key').focus()
        if (key && key.length > 2) {
            if (loading) {
                setLoading(false)
                const searchByName = async () => {
                    const res = await fetch(BASE_URL + "?offset=0&limit=1050")
                    const data = await res.json()
                    const result = await data.results.filter(({ name }) => {
                        return name.toLowerCase().includes(key.toLowerCase())
                    })
                    return result
                }
                searchByName().then((res) => {
                    setResult(res)
                });
            }
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        if (key.length < 3) {
            alert('Type at least 3 chars.')
        } else {
            console.log(e)
            document.forms[0].submit()
        }
    }

    return <>
        <form className="subMenuFixed" style={{ height: '60px' }} onSubmit={handleSubmit}>
            <div className="grid">
                <label>Search name:&nbsp;
                <input type="text" name="pokeName" id="key"
                        onChange={handleChange} autoFocus
                        value={key} className={styles.keySearch} />
                </label>
                <input type="submit" value="OK" />
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