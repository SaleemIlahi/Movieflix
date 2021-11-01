import React, { useState, useEffect } from 'react'
import '../scss/Slider.scss'

const Slider = () => {

    let [respo, setRespo] = useState([])

    useEffect(() => {
        const Api = async () => {
            const movieFetch = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=1015bc24cd3e7930b331be222621accb&language=en-US&page=1`)
            const movieResponse = await movieFetch.json()

            setRespo(movieResponse.results)
        }

        Api()
    }, [])

    const sliderControl = (activeSlide, targetSlide) => {
        const slideRow = document.querySelector(".slider-row")

        activeSlide.classList.remove("active")
        targetSlide.classList.add("active")

        slideRow.style.transform = `translateX(-${targetSlide.style.left})`
    }

    const forwardBtn = () => {
        const activeSlide = document.querySelector(".slider-card.active")
        const nextSlide = activeSlide.nextElementSibling

        sliderControl(activeSlide, nextSlide)
    }

    const backBtn = () => {
        const activeSlide = document.querySelector(".slider-card.active")
        const prevSlide = activeSlide.previousElementSibling

        sliderControl(activeSlide, prevSlide)
    }

    return (
        <div className="slider-container">
            <div className="arrow-icon">
                <div className="backward-icon" onClick={backBtn}>
                    <i className="fas fa-arrow-left"></i>
                </div>
                <div className="forward-icon" onClick={forwardBtn}>
                    <i className="fas fa-arrow-right"></i>
                </div>
            </div>
            <div className="slider-outer">
                <div className="slider-row">
                    {
                        respo.slice(0, 5).map((repo, i) => {
                            return (
                                <div className={`slider-card ${i === 0 ? 'active' : ''}`} key={i} style={{ left: `${1200 * i}px` }}>
                                    <img src={`https://image.tmdb.org/t/p/original${repo.backdrop_path}`} alt="banner" width="1100px" />
                                    <div className="text-section">
                                        <h1 className="title">{repo.original_title}</h1>
                                        <p>{repo.overview.slice(0, 200)}...</p>
                                        <div className="btn">
                                            <button>Play</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Slider