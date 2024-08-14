//import debounce from 'lodash.debounce';
import React, { /*useEffect,*/ useState, useRef } from 'react'
import Footer from './FooterLeft'
import FooterRight from './FooterRight'
import './Video.css'
import { Waypoint } from 'react-waypoint';

export default function Video(props) {
	const { url, channel, description, song, likes, shares, messages, uniqueId } = props
	const [playing, setPlaying] = useState(false);
	const [playingList, setPlayingList] = useState([]);
	const videoRef = useRef(null)

	console.log("playingList: ", playingList);
	// useEffect(() => {
	// 	window.addEventListener('scroll', debounce(handleScroll, 1000));
		
	// 	return () => {
	// 	  window.removeEventListener('scroll', handleScroll);
	// 	};
	// })
		
	// const handleScroll = () => {
	// 	if (playing) {
    //         videoRef.current.pause();
	// 		setPlaying(false)
    //     }
	// }

	const handleEnterViewport = () => {
		console.log("11111");
		handleScroll(true)
		setPlaying(true)
	}
		
	const handleExitViewport = () => {
		console.log("22222222");
		handleScroll(false);
		setPlaying(false)
	}

	const handleScroll = (isViewport) => {
		if(isViewport) {
			videoRef.current.pause();
		} else {
			videoRef.current.play();
		}
	}

	const onVideoPress = (uId) => {
		if (playing) {
            videoRef.current.pause();
			setPlaying(false)
        } else {
            videoRef.current.play()
			setPlaying(true);
        }
		setPlayingList(list => {return [...list, {uniqueId: uId, playing: playing}]})
	}

	return (
		<div className="video">
			<Waypoint onEnter={handleEnterViewport} onLeave={handleExitViewport}>
				<video
					className="player"
					onClick={() => onVideoPress(uniqueId)}
					muted
					ref={videoRef}
					loop
					src={url}
				></video>
			</Waypoint>
			<div className="bottom-controls">
				<Footer channel={channel} description={description} song={song} />
				<FooterRight likes={likes} shares={shares} messages={messages} />
			</div>
		</div>
	)
}
