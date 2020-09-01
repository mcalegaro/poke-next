import Link from 'next/link';
import { useEffect, useState } from "react";
import Loading from '../../components/Loading/Loading';
import PokeListComp from "../../components/PokeList/PokeListComp";
import { BASE_URL, PAGE_SIZE } from "../../constants/ApiConstants";
import styles from './List.module.css';
import { useRouter } from 'next/router';

export default function List() {

    const [prevId, setPrevId] = useState()
    const [reFetch, setReFetch] = useState(true)
    const [pageNumber, setPageNumber] = useState()
    const [list, setList] = useState([])
    const router = useRouter()

    const { id } = router.query
    if (prevId !== id) {
        setPrevId(id)
        const idInt = parseInt(id)
        setPageNumber(idInt)
        setReFetch(true)
    }

    // useEffect(() => {
    if (reFetch) {
        setReFetch(false)
        getList(id).then(data => setList(data))
    }
    // })

    const handlePageChange = (e) => {
        e.preventDefault()
        setPageNumber(e.target.value)
    }

    const handleBlur = (e) => {
        e.preventDefault()
        if (id !== pageNumber) {
            let newVal = pageNumber
            if (newVal < 1 || isNaN(newVal)) {
                newVal = 1
            } else if (newVal > list.count / PAGE_SIZE) {
                newVal = list.count / PAGE_SIZE
            }
            router.push('/list/List?id=' + newVal)
        }
    }

    const handleNext = () => {
        if (list.next === null) {
            e.preventDefault()
        }
    }

    const handlePrevious = (e) => {
        if (list.previous === null) {
            e.preventDefault()
        }
    }

    const paging = () => {
        return <div className="subMenuFixed">
            <div id="paging" className={["", styles.paging].join(" ")}>
                <Link href={`/list/List?id=${pageNumber - 1}`}>
                    <a
                        onClick={handlePrevious}
                    >
                        <div className={[styles.button, list.previous === null ? "disabled" : ""].join(" ")}>
                            &lt;
                        </div>
                    </a>
                </Link>
                <div>
                    <h3>
                        <form onSubmit={handleBlur}>
                            Page&nbsp;
                            <input type="text"
                                value={pageNumber}
                                onBlur={handleBlur}
                                onChange={handlePageChange}
                                className={styles.input}
                            />
                            <label></label>
                        </form>
                    </h3>
                </div>
                <Link href={`/list/List?id=${pageNumber + 1}`}>
                    <a
                        onClick={handleNext}
                    >
                        <div className={[styles.button, list.next === null ? "disabled" : ""].join(" ")}>
                            &gt;
                        </div>
                    </a>
                </Link>
            </div>
        </div>
    }

    return <>
        {
            list !== undefined ?
                paging() :
                ""
        }
        <div className={styles.listGrid}>
            {
                list === undefined || list.results === undefined ?
                    <div className="grid">
                        <Loading />
                    </div>
                    :
                    <PokeListComp list={list.results} />
            }
        </div>
    </>
}

async function getList(pageNumber) {
    const res = await fetch(BASE_URL + '?limit=' + PAGE_SIZE + '&offset=' + (pageNumber - 1) * PAGE_SIZE)
    return await res.json()
}