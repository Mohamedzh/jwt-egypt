import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

const VideoPlayer = ({url}:{url:string}) => {
    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }

    const opts: YouTubeProps['opts'] = {
        // height: '100%',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
        },
    };

    return (
        <div className='flex w-full'>
            <div className='aspect-video min-h-full md:w-96 min-w-full place-items-center'>
                <YouTube videoId={url} opts={opts} onReady={onPlayerReady} />
            </div>
            
        </div>
    );
}
export default VideoPlayer