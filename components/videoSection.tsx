import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

const VideoPlayer = () => {
    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }

    const opts: YouTubeProps['opts'] = {
        // height: '100%',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    return (
        <div className='flex w-full'>
            <div className='aspect-video min-h-full md:w-96 min-w-full place-items-center'>
                <YouTube videoId={'currentExercise.videoUrl'} opts={opts} onReady={onPlayerReady} />
            </div>
            {/* <div className='mx-10'>
                <p className='text-2xl font-black'>{'currentExercise.name'}</p>
                <p className='my-3'>{'setArray'} Sets X 6. Reps</p>
                <p>{'currentExercise'}</p>
            </div> */}
        </div>
    );
}
export default VideoPlayer