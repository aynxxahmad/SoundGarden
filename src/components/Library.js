import React from "react";

import LibrarySong from "./LibrarySong";

const Library = ({openLibrary,songs,setSongs,setCurrentSong,isPlaying,audioRef,currentSong}) => {
    //hoooks

    //functions and handlers

    //JSX
    return(
        <div className={`Library ${openLibrary ? "active-library" : ""}`}>
            <h1>Library</h1>
            {songs.map(song => 
                <LibrarySong song={song} songs={songs} setSongs={setSongs} currentSong={currentSong} key={song.id} setCurrentSong={setCurrentSong} isPlaying={isPlaying} audioRef={audioRef} />
            )}
        </div>
    )
}

export default Library;