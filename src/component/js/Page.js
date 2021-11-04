import React from 'react'
import Slider from './Slider'
import Navbar from './Navbar'
import Row from './Row'

const Page = () => {
   const API_KEY = '1015bc24cd3e7930b331be222621accb'
   const base_Url = 'https://api.themoviedb.org/3'

   return (
      <>
         <Navbar />
         <Slider URL={`${base_Url}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`}/>
         <Row URL={`${base_Url}/tv/popular?api_key=${API_KEY}&language=en-US`} title="Movieflix Original" />
         <Row URL={`${base_Url}/movie/upcoming?api_key=${API_KEY}&language=en-US`} title="Upcoming Movies" />
         <Row URL={`${base_Url}/trending/all/week?api_key=${API_KEY}&language=en-US`} title="Trending" />
         <Row URL={`${base_Url}/movie/top_rated?api_key=${API_KEY}&language=en-US`} title="Top Rated Movies" />
         <Row URL={`${base_Url}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`} title="Action Movies" />
         <Row URL={`${base_Url}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=12`} title="Adventure Movies" />
         <Row URL={`${base_Url}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=18`} title="Darma" />
         <Row URL={`${base_Url}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`} title="Horror" />
         <Row URL={`${base_Url}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=878`} title="Science Fiction" />
         <Row URL={`${base_Url}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=16`} title="Animation Movies" />
         <Row URL={`${base_Url}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`} title="Comedy Movies" />
         <Row URL={`${base_Url}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=80`} title="Crime Movies" />
         <Row URL={`${base_Url}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`} title="Documentary" />
         <Row URL={`${base_Url}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=36`} title="History" />
         <Row URL={`${base_Url}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10402`} title="Music" />
         <footer>
            <p>Designed & Created by Mohamed Saleem &copy; 2021</p>
         </footer>
      </>
   )
}

export default Page