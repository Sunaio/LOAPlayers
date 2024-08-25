
function regionCard(props) {
    return (
        //Card component used for 3 different game regions (NAW, NAE, EUC)
        //On click should route to their specific region.
        <div className="cardContainer">
            <div className="card">
                <img src = {props.imageURL} alt = '' />
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
            </div>
        </div>
    );
}

export default regionCard