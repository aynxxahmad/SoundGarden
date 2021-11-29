import React,{useState,useRef} from "react";

//importing styles
import "./components/styles/app.scss";

//importing components
import Song from "./components/Song";
import Player from "./components/Player";
import Library from "./components/Library";
import Nav from "./components/Nav";

//importing our data
import MusicLibrary from "./MusicLibrary";

function App() {
  
  //hooks
  const [songs,setSongs] = useState(MusicLibrary());
  const [currentSong,setCurrentSong] = useState(songs[0]);
  const [isPlaying,setIsPlaying] = useState(false);
  const [songInfo,setSongInfo] = useState({
                              currentTime:0,
                              duration:0,
                              animationPerc:0
                              })
  
  const [openLibrary,setOpenLibrary] = useState(false);

   const audioRef = useRef(null);

  //functions and handlers

  const timeUpdateHandler = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;    
    //calculate percentage
    const roundedCurrent = Math.round(currentTime);
    const roundedDuration = Math.round(duration);
    const animationPerc = Math.round((roundedCurrent/roundedDuration)*100);

    setSongInfo({...songInfo,currentTime:currentTime,duration:duration,animationPerc:animationPerc});
  }

  const autoPlayNextHandler = async() => {
      if(isPlaying===true){
        const currentIndex = songs.findIndex(song=>song.id===currentSong.id);
        await setCurrentSong(songs[(currentIndex+1) % songs.length]);
          audioRef.current.play();
      }
  }
  
  //JSX
  return (
    <div className="App">
    <Nav openLibrary={openLibrary} setOpenLibrary={setOpenLibrary}/>
      <Song currentSong={currentSong} isPlaying={isPlaying} />
      <Player currentSong={currentSong} setCurrentSong={setCurrentSong} songs={songs} setSongs={setSongs} isPlaying={isPlaying} setIsPlaying={setIsPlaying} songInfo={songInfo} setSongInfo={setSongInfo} audioRef={audioRef}/>
      <Library songs={songs} setSongs={setSongs} setCurrentSong={setCurrentSong} isPlaying={isPlaying} audioRef={audioRef} currentSong={currentSong} openLibrary={openLibrary}/>
      
      <audio onLoadedMetadata={timeUpdateHandler} onTimeUpdate={timeUpdateHandler} onEnded={autoPlayNextHandler} ref={audioRef} src={currentSong.audio}></audio>
    </div>
    
  );
}

export default App;
