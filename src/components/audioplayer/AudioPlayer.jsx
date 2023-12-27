import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBackward, faPlay, faForward, faPause } from "@fortawesome/free-solid-svg-icons";
import "./AudioPlayer.scss";

library.add(faBackward, faPlay, faPause, faForward);

const Audioplayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isAlbumArtActive, setIsAlbumArtActive] = useState(false);
  const [currentSongName, setCurrentSongName] = useState(""); 

  const songs = [
    '/Song1.mp3',
    '/Song2.mp3',
    '/Song3.mp3',
    '/Song4.mp3',
  ];



  const playPause = () => {
    const audio = audioRef.current;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setIsPlaying(!isPlaying);
    setIsAlbumArtActive(!isPlaying); // Activate when playing, deactivate when paused
  };

  const playBackward = () => {
    const audio = audioRef.current;
    audio.pause();
    setCurrentSongIndex((prevIndex) => (prevIndex === 0 ? songs.length - 1 : prevIndex - 1));

    audio.oncanplay = () => {
      setIsPlaying(true);
      setIsAlbumArtActive(true);
      audio.play();
      audio.oncanplay = null;
    };
  };

  const playNext = () => {
    const audio = audioRef.current;
    audio.pause();

    setCurrentSongIndex((prevIndex) => (prevIndex === songs.length - 1 ? 0 : prevIndex + 1));

    audio.oncanplay = () => {
      setIsPlaying(true);
      setIsAlbumArtActive(true);
      audio.play();
      audio.oncanplay = null;
    };
  };

  useEffect(() => {
    setCurrentSongName(`Song ${currentSongIndex + 1}`);
    return () => {
      const audio = audioRef.current;
      audio.pause();
    };
  }, [currentSongIndex]);

  return (
    
    <div id="app-cover" className={isAlbumArtActive ? 'album-art-active' : ''}>
      <div id="bg-artwork"></div>
      <div id="musiclogo"><img src="/MusicLogo.png" alt="" /></div>
      <div id="player">
        <div id="player-track" className={isAlbumArtActive ? 'active' : ''}>
        <div id="album-name">{currentSongName}</div>
          <img id="aditya" src="https://c.tenor.com/NjavXXAMRD8AAAAC/tenor.gif" alt="" />
          <div id="track-name"></div>
          <div id="track-time">
            <div id="current-time"></div>
            <div id="track-length"></div>
          </div>
          <div id="s-area">
            <div id="ins-time"></div>
            <div id="s-hover"></div>
            <div id="seek-bar"></div>
          </div>
        </div>
        
        <div id="player-content">
          <div id="album-art" className={isAlbumArtActive ? 'active' : ''}>
            <div id="buffer-box">Buffering ...</div>
          </div>
          <div id="player-controls">
            
            <div className="control">
              <div className="button" id="play-backward" onClick={playBackward}>
                <FontAwesomeIcon icon={['fas', 'backward']} />
              </div>
            </div>
            <div className="control">
              <div className="button" id="play-pause-button" onClick={playPause}>
                <FontAwesomeIcon icon={['fas', isPlaying ? 'pause' : 'play']} />
              </div>
            </div>
            <div className="control">
              <div className="button" id="play-next" onClick={playNext}>
                <FontAwesomeIcon icon={['fas', 'forward']} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <audio ref={audioRef} src={songs[currentSongIndex]} onEnded={playNext}></audio>
    </div>
  );
};

export default Audioplayer;
