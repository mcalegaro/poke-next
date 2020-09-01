import Link from "next/link";
import { useEffect, useState } from "react";
import Loading from '../Loading/Loading';
import NotFound from "../NotFound/NotFound";

export default function PokeCard({ name, url }) {

    const [loading, setLoading] = useState(true)
    const [img, setImg] = useState()
    let id = url.split('/')
    id = id[id.length-2]

    useEffect(() => {
        if (loading) {
            setLoading(false)
            const load = async () => {
                const res = await fetch(url);
                const data = await res.json()
                setImg(data.sprites.front_default ? data.sprites.front_default : 'notFound')
            }
            load()
        }
    })

    return <>
        <Link href={`/detail/Detail?id=${id}`} >
            <a>
                <div className="card">
                    {
                        img === undefined ?
                            <Loading />
                            :
                            img === 'notFound' ?
                                <NotFound />
                                :
                                <img src={img} width='96px' height='96px'
                                />
                    }
                    <br />
                    {name}
                </div>
            </a>
        </Link>
    </>

}