import React, { useCallback, useRef, useState } from "react";
import { withRouter } from "react-router-dom"
import Card from "@/components/card/index";
import { headerContext } from '@/contexts/headerContext'
import Input from "@/components/Input";
import VideoPlayer from "@/components/videoPlayer/index";
import "./index.less"
function Sample(props) {
    console.log("sample", props);
    const [title, setTitle] = useState('title1');
    const inputRef = useRef(null);
    const [playState, setPlayState] = useState(false);
    const [videoSrc] = useState('https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4')
    console.log("---sample render---");

    const handleInput = useCallback(() => {
        console.log("inputRef", inputRef);
        inputRef.current.focus();
    }, [])
    const changePlay = () => {
        setPlayState(!playState)
    }
    const onPlay = useCallback(() => {
        console.log("onPlay");
        setPlayState(true)
    })
    const onPause = useCallback(() => {
        console.log("onPause");
        setPlayState(false)
    })
    return (
        <div>
            sample-title-{title}
            <button onClick={() => setTitle('title2')}>
                修改标题
            </button>
            <div className="out">
                <div className="inner">
                    <div className="inner-1">1</div>
                    <div className="inner-1">2</div>
                    <div className="inner-1">3</div>
                </div>
            </div>
            <headerContext.Provider value={title} a="1">
                <Card setTitle={setTitle}>
                    <div>
                        <Input ref={inputRef} />
                        <button onClick={() => handleInput()}>focus</button>
                    </div>
                </Card>
                <VideoPlayer playState={playState} src={videoSrc} onPlay={onPlay} onPause={onPause} />
                <Card setTitle={setTitle}>
                    <div>
                        <VideoPlayer playState={playState} src={videoSrc} onPlay={onPlay} onPause={onPause} />
                        <div>
                            <button onClick={() => changePlay()}>{playState ? '暂停' : '播放'}</button>
                        </div>
                    </div>

                </Card>


            </headerContext.Provider>
        </div>
    )
}
export default withRouter(Sample)