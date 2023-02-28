import React,{ useState } from 'react'
import MovieCard from './MovieCard'
export default function MovieList({filterName,filterRating}) {
    const movies=[
        {
          imgSrc:'../../public/imgs/marvelEndGame.jpg',
          movieName:'Marvel Endgame',
          rating:5
        },
        {
          imgSrc:'../../public/imgs/peakyBlinders.jpg',
          movieName:'The Peakyblinders',
          rating:4
        },
        {
          imgSrc:'../../public/imgs/theFlash.jpg',
          movieName:'The Flash',
          rating:3
        },
        {
          imgSrc:'../../public/imgs/theMatrix.jpg',
          movieName:'The Matrix',
          rating:5
        },
        {
          imgSrc:'../../public/imgs/theTerminator.jpg',
          movieName:'The Terminator',
          rating:4
        }
      ]
    const [movieList,setMovieList]=useState(movies)
    const [show,setShow]=useState(false)
    const [imgSrc,setImgSrc]=useState('')
    const [movieName,setMovieName]=useState('')
    const [rating,setRating]=useState(0)
    const hundleClickShowAddMovie=()=>{
        setShow(true)
    }
    const hundleClickUnshowAddMovie=()=>{
        setShow(false)
    }
    const hundleSubmitButton=()=>{
        setMovieList([...movieList,{imgSrc:imgSrc,movieName:movieName,rating:rating}])
        setShow(false)
    }
    const onimgSrc=event=>{
        setImgSrc(event.target.value)
    }
    const onmovieName=event=>{
        setMovieName(event.target.value)
    }
    const onrating=event=>{
        setRating(event.target.value)
    }
  return (
    <div>
        <div className='movieList'>
            {filterRating==undefined?movieList.map((movie, index) => (
            <MovieCard key={index} imgSrc={movie.imgSrc} movieName={movie.movieName} rating={movie.rating} />)):movieList.filter(movie=>movie.movieName==filterName && movie.rating==filterRating).map((movie, index) => (
              <MovieCard key={index} imgSrc={movie.imgSrc} movieName={movie.movieName} rating={movie.rating}/>))
            }  
        </div>
    
        {show ? <div className='promptAdd'>
          <button onClick={hundleClickUnshowAddMovie} className='delete'>X</button>
          <div>imgSrc <input type="text" onChange={onimgSrc}/></div>
          <div>movieName <input type="text" onChange={onmovieName}/></div>
          <div>rating <input type="number" onChange={onrating}/></div>
          <button onClick={hundleSubmitButton}className='submitButtonAddMovie'>submit</button>
        </div> : null}
        <button onClick={hundleClickShowAddMovie} className='ButtonAddMovie'>+</button>
    </div>
  )
}
