import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import SkipNextIcon from '@mui/icons-material/SkipNext'
import CardActionArea from '@mui/material/CardActionArea'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import MuiPlayer from './MuiPlayer'
import ReactAudioPlayer from 'react-audio-player'
import Link from 'next/link'
import { ImArrowRight } from 'react-icons/im'
import { useDispatch } from 'react-redux';
import { getPosition } from '../redux/positionSlice'



export default function MediaControlCard({ data }) {
  const { episodes, audioEpisodes } = data
  const theme = useTheme()
  const dispatch = useDispatch()

  return (
    <div className=" mx-auto w-full mb-20 lg:mb-10 scroll-mt-28"
      style={{ backgroundColor: `${data.themeColors[0].videoSectionColor.color_code}`, height: '95vh' }}
      id="media"
    >
      <p
        style={{ color: `${data.themeColors[0].sectionTitleColor.color_code}` }}
        className="text-3xl font-bold tracking-tight text-center">
        Podcasts
      </p>
      <div className="container mx-auto grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 p-4 lg:p-12">
        <div>
          <div className="">
            <p className='text-2xl font-semibold text-center m-2'>{episodes[0].podcast.title}</p>
            <p className='text-lg font-semibold text-center m-2'>{episodes[0].title}</p>
            <video
              id=""
              className="video-js aspect-video w-full md:h-64 lg:h-64"
              controls
              preload="auto"
              poster=""
              data-setup="{}"
            >
              <source src={`${episodes[0].url}`}></source>
            </video>
          </div>

        </div>

        <div>
          <Card sx={{ display: 'flex', justifyContent: 'center' }}>
            <div className='flex flex-col place-items-center'>
              <p className='text-2xl font-semibold text-center m-2'>{audioEpisodes[0].podcast.title}</p>
              <p className='text-lg font-semibold text-center m-2'>{audioEpisodes[0].title}</p>
              <img
                className='md:w-32 lg:w-32 w-12 '
                src={audioEpisodes[0].imgUrl}></img>
              <ReactAudioPlayer
                className='md:w-96 lg:md:w-96 m-5 my-7 md:my-4'
                src={`${audioEpisodes[0].url}`}
                autoPlay={false}
                controls
              />
            </div>
          </Card>
        </div>
      </div>
      <Link href='/podcasts'>
        <a
          onClick={() => dispatch(getPosition(document.body.getBoundingClientRect().top))}
          className='m-3 ml-20 text-xl font-semibold text-wtMediumRuby flex'>
          Explore our podcasts
          <ImArrowRight className="mt-1.5 ml-2" />
        </a>
      </Link>
    </div>
  )
}
