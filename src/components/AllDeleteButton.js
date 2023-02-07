import "../css/AllDeleteButton.css"

const AllDeleteButton = (props) => {
    return (
        <button className="all-delete-button" onClick={props.deleteAllMovies}>Vymazať všetko</button>
    )
}

export default AllDeleteButton