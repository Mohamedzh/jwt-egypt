import React from 'react'
import YouTube, { YouTubeProps } from 'react-youtube'

const VideoPlayer = ({ url }: { url: string }) => {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo()
  }

  const opts: YouTubeProps['opts'] = {
    height: '500px',
    width: '100%',
    playerVars: {
      origin: 'http://localhost:3000',
      // https://developers.google.com/youtube/player_parameters
      host: 'https://www.youtube.com',
    },
  }

  return (
    <div id="media" className="flex w-full">
      <div className="aspect-video min-h-full min-w-full place-items-center md:w-96">
        <YouTube videoId={url} opts={opts} onReady={onPlayerReady} />
        {/* <iframe id="ytplayer" width="640" height="360"
                src={`https://www.youtube.com/embed/${url}-VE?autoplay=1&origin=http://localhost:3000`}
                frameBorder="0"></iframe> */}
      </div>
    </div>
  )
}
export default VideoPlayer
