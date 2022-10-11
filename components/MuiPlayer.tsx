import React from 'react'
import { AudioCard, VideoCard, SoundButton } from 'material-ui-player'


const MuiPlayer = () => {
  return (
    <div>
      <AudioCard
        src={
          'https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_1MG.mp3'
        }
      />
      <VideoCard
        src={
          'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
        }
      />
      <SoundButton
        src={
          'https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_1MG.mp3'
        }
      />
    </div>
  )
}

export default MuiPlayer
