import React from "react";

const LibrarySong = ({song,songs,setSongs,setCurrentSong,isPlaying,audioRef}) => {
    //hooks

    //functions and handlers
    const songChangeHandler = async () =>{
        await setCurrentSong(song);
        if(isPlaying===true)
            audioRef.current.play();
   
        //Changing the active status of a song so that we can add a little bit of different styling to active song
        setSongs(songs.map(eachSong=>{
            if(eachSong.id===song.id)
                return({...eachSong,active:true})
            else
                return({...eachSong,active:false})
        
            }));
   }

    //JSX
    return(
        <div onClick={songChangeHandler} className={`Library-song ${song.active ? "selected" : ""}`}>
            <div className="library_song-image-container">
                <img src={song.cover} alt="album-art" />
            </div>    
            <div className="library_song-details">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
                <h5>{song.album}</h5>
            </div>
        </div>
    )
}

export default LibrarySong;