import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic} from "@fortawesome/free-solid-svg-icons";


const Nav = ({openLibrary,setOpenLibrary}) => {

    //functions and handlers
    const openLibraryHandler = () => {
        setOpenLibrary(!openLibrary);
    }
    return(
        <div className="nav">
            <h1>SoundGarden</h1>
            <button onClick={openLibraryHandler} className="nav-button">
            <span>Library</span>
            <FontAwesomeIcon icon={faMusic} size="2x" className="music_icon"/>
            </button>
        </div>
    )
}


export default Nav;