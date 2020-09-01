import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Loading from '../../components/Loading/Loading'
import NotFound from '../../components/NotFound/NotFound'
import { BASE_URL } from '../../constants/ApiConstants'
import Pokemon from '../../components/Pokemon/Pokemon'

export default function Detail() {
    const router = useRouter()
    const { id } = router.query
    const [loading, setLoading] = useState(true)
    const [state, setState] = useState()

    useEffect(() => {
        const load = async () => {
            const url = BASE_URL + '/' + id + '/'
            const res = await fetch(url)
            const data = await res.json()
            console.log(data);
            setState(data)
        }
        if (id && loading) {
            setLoading(false)
            load().catch((err) => { setState('notFound') })
        }
    })

    return <>
        <div className={["grid"].join(" ")}>
            {
                loading ?
                    <Loading />
                    : state === 'notFound' ?
                    <NotFound/>
                    :
                    <Pokemon data={state} />
            }
        </div>
    </>

}