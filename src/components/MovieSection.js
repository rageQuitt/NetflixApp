import React from "react"
import "./MovieSection.css"

function MovieSection({title, items}){
    if (items && items.results){
    return (
    <div className="movieRow">
        <h2>  {title}  </h2>
        <div className ="movieRow--left">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
        </div>
        <div className ="movieRow--right">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
        </div>
        <div className="movieRow--listarea">
            <div className="movieRow--list">
            {
                items.results.length >  0 && items.results.map((item, key) => (
                    <div className = "movieRow--item" key ={key}>
                <img 

                alt="{item.original_title}"
                src={`https://image.tmdb.org/t/p/w185/${item.poster_path}`}
                key={key}/>

            </div>
      
    ))
}

        </div>

        </div>
    </div>
    )
}}

export default MovieSection
