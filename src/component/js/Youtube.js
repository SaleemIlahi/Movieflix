import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router'
import YouTube from 'react-youtube'

const Youtube = () => {

    let [respo, setRespo] = useState([])
    let location = useLocation()

    const opts = {
        height: '500',
        width: '1000',
        playerVars: {
            autoplay: 0,
        },
    }

    useEffect(() => {
        const videoFetch = async () => {
            const vidfetch = await fetch(`https://api.themoviedb.org/3/movie/${location.state}/videos?api_key=1015bc24cd3e7930b331be222621accb&language=en-US`)
            const vidresp = await vidfetch.json()

            setRespo(vidresp.results.reverse())
        }
        videoFetch()
    })
    return (
        <>
            {
                respo.map(video => {
                    return (
                        <div className="video-box">
                            {
                                video.type === "Trailer" && <div className="youtubeVideo"><h1>{video.name}</h1><YouTube videoId={video.key} opts={opts}></YouTube></div>
                            }
                        </div>
                    )
                })
            }
        </>
    )
}

export default Youtube