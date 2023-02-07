import "../css/ReloadMoviesButton.css"

const ReloadMoviesButton = (props) => {
    return (
        <button className="reload-button" onClick={props.reloadMovies}>Načítať filmy</button>
    )
}

export default ReloadMoviesButton