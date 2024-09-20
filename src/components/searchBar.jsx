import './searchBar.css'
import searchGlass from '/assets/maginifying glass.png'

function searchBar () {
    return (
        <>
        <div className = "searchSpace">
            <div className = "searchSpot">
                <input placeholder = "Enter Character Name you want to search for..." />
                <img src = {searchGlass} alt="maginifying glass" />
            </div>
        </div>
        </>
    )
}

export default searchBar