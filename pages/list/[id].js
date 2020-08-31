import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from "react";
import Loading from '../../components/Loading/Loading';
import PokeListComp from "../../components/PokeList/PokeListComp";
import { BASE_URL, PAGE_SIZE } from "../../constants/ApiConstants";
import styles from './List.module.css';

export default function List() {

    const [loading, setLoading] = useState(true)
    const [pageNumber, setPageNumber] = useState(null)
    const [list, setList] = useState([])
    const router = useRouter()
    const { id } = router.query
    if (!isNaN(parseInt(id)) && parseInt(id) !== pageNumber) {
        const pnInt = parseInt(id);
        setLoading(false)
        setPageNumber(pnInt)
        getList(pnInt).then(data => setList(data))
    }

    const handlePageChange = (ev) => {
        let newVal = ev.target.value
        if (newVal < 0 || isNaN(newVal)) {
            newVal = 0
        } else if (newVal > list.count / PAGE_SIZE) {
            newVal = list.count / PAGE_SIZE
        }
        router.push('/list/' + newVal)
    }

    const handleNext = () => {
        if (list.next !== null) {
            // setLoading(true)
        }
    }

    const handlePrevious = () => {
        if (list.previous !== null) {
            // setLoading(true)
        }
    }

    const paging = () => {
        return <div className="subMenuFixed">
            <div id="paging" className={["", styles.paging].join(" ")}>
                <Link href='/list/[page]' as={`/list/${pageNumber - 1}`}>
                    <a
                        onClick={handlePrevious}
                    >
                        <div className={[styles.button, list.previous === null ? "disabled" : ""].join(" ")}>
                            &lt;
                        {/* <input type="button" name="btPrev">&lt;</input> */}
                        </div>
                    </a>
                </Link>
                <div>
                    <h3>
                        Page&nbsp;
                        <input type="text"
                            value={pageNumber ? pageNumber : ''}
                            onChange={handlePageChange}
                            className={styles.input}
                        />
                    </h3>
                </div>
                <Link href='/list/[page]' as={`/list/${pageNumber + 1}`}>
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