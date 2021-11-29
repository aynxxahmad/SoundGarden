import React from "react";


const Song=({currentSong,isPlaying})=>{
    //JSX
    return(
        <div className="song-container">
            <div className="song-image-container">
                <img src={currentSong.cover} alt="album-art" className={`${isPlaying?"active-rotate":""}`}  />
            </div>    
            <div className="song-details">
                <h3>{currentSong.name}</h3>
                <h4>{currentSong.artist}</h4>
                <h5>{currentSong.album}</h5>
            </div>
        </div>
    )
}


export default Song;