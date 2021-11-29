import React,{useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay,faAngleLeft,faAngleRight,faPause} from "@fortawesome/free-solid-svg-icons";

const Player = ({isPlaying,setIsPlaying,audioRef,songInfo,setSongInfo,currentSong,setCurrentSong,songs,setSongs}) => {

    //hooks


    //functions and event handlers
    const playSongHandler = async () => {
        if(isPlaying===false){
           await audioRef.current.play();
            setIsPlaying(true);
        }
        else if(isPlaying===true){
            await audioRef.current.pause();
            setIsPlaying(false);
        }
    }


    const timeFormatter = (time) => {
        return(
            Math.floor(time/60) + ":" + ("0" + Math.floor(time%60)).slice(-2)
        )
    }

    const dragHandler = (e) => {
        setSongInfo({...songInfo,currentTime:e.target.value});
        audioRef.current.currentTime = e.target.value;
    }

    const skipSongHandler = async (skip) => {
        const currentIndex = songs.findIndex(song=>song.id===currentSong.id);
        if(skip==="skipBack"){
            if(currentIndex===0)
                await setCurrentSong(songs[songs.length-1]);
            else 
                await setCurrentSong(songs[currentIndex-1]);

        }
        else if(skip===`skipForward`){
            await setCurrentSong(songs[(currentIndex+1) % songs.length]);
        }

        if(isPlaying===true)
            audioRef.current.play();
       
    }

    //hooks
     useEffect(()=>{
        setSongs(songs.map(eachSong=>{
            if(eachSong.id===currentSong.id)
                return({...eachSong,active:true})
            else
                return({...eachSong,active:false})

            }));
    },[currentSong]);

    //styles
    const trackAnim = {
        transform: `translateX(${songInfo.animationPerc}%)`
    };


    //JSX
    return(
        <div className="player">
            <div className="time-control">
                <p>{timeFormatter(songInfo.currentTime)}</p>
                <div style={{background:`linear-gradient(to right,${currentSong.color[0]},${currentSong.color[1]})`}} className="track">    
                    <input type="range" min={0} max={songInfo.duration} value={songInfo.currentTime} onChange={dragHandler}/>
                    <div style={trackAnim} className="animate-track"></div>
                </div>
                <p>{timeFormatter(songInfo.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon onClick={()=>skipSongHandler("skipBack")} className="skip-back" icon={faAngleLeft} size="2x"/>
                <FontAwesomeIcon onClick={playSongHandler} className="play" icon={isPlaying ? faPause : faPlay} size="2x"/>
                <FontAwesomeIcon onClick={()=>skipSongHandler("skipForward")} className="skip-forward" icon={faAngleRight} size="2x"/>
            </div>
        </div>
    )
}

export default Player;