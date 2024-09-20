import './classSelect.css'

//This component will give users ability to choose which class they want to see on the rankings.
function classSelect () {
    return (
        <>
        <div className="classSelectContainer">
            <div className="classSelection">
                <h1>Warriors</h1>
                <div className="classes">
                <button>Berserker</button>
                <button>Destroyer</button>
                <button>Gunlancer</button>
                <button>Paladin</button>
                <button>Slayer</button>
                </div>

                <h1>Mages</h1>
                <div className="classes">
                <button>Arcanist</button>
                <button>Bard</button>
                <button>Sorceress</button>
                <button>Summoner</button>
                </div>

                <h1>Fighters</h1>
                <div className="classes">
                <button>Glaivier</button>
                <button>Scrapper</button>
                <button>Soulfist</button>
                <button>Wardancer</button>
                <button>Striker</button>
                <button>Breaker</button>
                </div>

                <h1>Gunners</h1>
                <div className="classes">
                <button>Artillerist</button>
                <button>Deadeye</button>
                <button>Gunslinger</button>
                <button>Machinist</button>
                <button>Sharpshooter</button>
                </div>

                <h1>Assassins</h1>
                <div className="classes">
                <button>Deathblade</button>
                <button>Reaper</button>
                <button>Shadowhunter</button>
                <button>Souleater</button>
                </div>

                <h1>Specialists</h1>
                <div className="classes">
                <button>Aeromancer</button>
                <button>Artist</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default classSelect