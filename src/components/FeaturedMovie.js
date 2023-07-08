import React from 'react'
import "./FeaturedMovie.css"

function FeaturedMovie({ films }) {
    console.log(films)
    if (!films) {
      return null; // Or return a loading spinner, default data, etc.
    }
  
    const imageUrl = films.backdrop_path
      ? `https://image.tmdb.org/t/p/original${films.backdrop_path}`
      : ""; // Default image URL if `films.backdrop_path` doesn't exist
      console.log(imageUrl)
    console.log(imageUrl)
    let genres = films.genres
      ? films.genres.map(genre => genre.name)
      : []; // Empty genres list if `films.genres` doesn't exist
  
    return(
        <section className = "featured"
            //exception css-inline pour faire fonctionner les backgrounds
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(${imageUrl})`,
                backgroundPosition: "center",
            }}
            >
                <div className ="featured--vertical">
                    <div className ="featured--horizontal">
                        <div className ="featured--name">
                            {films.title}
                        </div>
                        <div className ="featured--info">
                            <div className ="featured--points">
                            {films.vote_average.toFixed(2)}
                            </div>
                            <div className ="featured--year">
                            {films.release_date}
                            </div>   
                        </div>
                        <div className ="featured--description">
                            {films.overview}
                        </div>
                        <div className="featured--button">
                            <a href="/" className="featured--watchbutton">Lecture</a>
                            <a href="/" className="featured--mylistbutton">+ Ma Liste</a>
                        </div>
                        <div className="featured--genres">
                        <strong>Genres :</strong>  {genres.join(",")}
                        </div>  
                    </div>
                </div>
        </section>
    )
}

export default FeaturedMovie
