import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../scss/Row.scss'

const Row = ({ URL, title }) => {
    let [respo, setRespo] = useState([])
    let num = 0

    useEffect(() => {
        const Api = async () => {
            const movieFetch = await fetch(`${URL}`)
            const movieResponse = await movieFetch.json()

            setRespo(movieResponse.results)
        }

        Api()
    }, [URL])

    const Btn = (num,list) => {
        list.style.transform = `translateX(-${115 * num}px)`
    }

    const rightBtn = (e) => {
        num = num + 5
        if (num > 20) {
            num = 20
        } else {
            let list = e.target.parentElement.parentElement.querySelector(".row-list")
            Btn(num,list)
        }
    }
    const leftBtn = (e) => {
        num = num - 5
        if (num < 0) {
            num = 0
        } else {
            const list = e.target.parentElement.parentElement.querySelector(".row-list")
            Btn(num,list)
        }
    }

    return (
        <div className="row-container">
            <div className="arrow-icon">
                <i className="fas fa-chevron-left" onClick={leftBtn}></i>
                <i className="fas fa-chevron-right" onClick={rightBtn}></i>
            </div>
            <h1>{title}</h1>
            <div className="row-list">
                {
                    respo.map((repo, i) => {
                        return (
                            <Link to={{
                                pathname: "/Youtube",
                                state: repo.id 
                              }} key={i} >
                                <img src={`https://image.tmdb.org/t/p/original${repo.poster_path}`} alt="poster" loading="lazy" />
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Row