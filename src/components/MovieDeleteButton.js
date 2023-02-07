import "../css/MovieDeleteButton.css"

const MovieDeleteButton = (props) => {
    return(
        <button className="movie-delete-button" onClick={props.deleteOneMovie}>Vymazať film</button>
    )
}

export default MovieDeleteButton