import React, { useEffect, useRef } from "react"
// import cssStyles from "./index.css"
export default function VideoPlayer({ src, playState, onPlay, onPause }) {
    const ref = useRef(null)
    const cssStyles = {
        width: "500px"
    }
    console.log("---video player---");
    useEffect(() => {
        console.log("---playState---", playState);
        if (playState) {
            console.log("---play---", playState);
            ref.current.play()
        } else {
            console.log("---pause---", playState);
            ref.current.pause()
        }
    }, [playState])
    return <video className="video-player" style={cssStyles} ref={ref} controls src={src} onPlay={() => onPlay()} onPause={onPause}></video>
}