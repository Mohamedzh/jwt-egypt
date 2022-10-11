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

export default function MediaControlCard({ data }) {
  const { episodes } = data
  const theme = useTheme()

  return (
    <div className="container mx-auto grid w-full grid-cols-2 gap-8 p-4 lg:p-12">
      <div>
          <div className="">
            {/* <p className="my-5 text-left text-xl md:mx-10 lg:mx-10">
          Explore our podcasts
        </p> */}
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
        <Card sx={{ display: 'flex' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h5">
                Live From Space
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Mac Miller
              </Typography>
            </CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
              <IconButton aria-label="previous">
                {theme.direction === 'rtl' ? (
                  <SkipNextIcon />
                ) : (
                  <SkipPreviousIcon />
                )}
              </IconButton>
              <IconButton aria-label="play/pause">
                <PlayArrowIcon sx={{ height: 38, width: 38 }} />
              </IconButton>
              <IconButton aria-label="next">
                {theme.direction === 'rtl' ? (
                  <SkipPreviousIcon />
                ) : (
                  <SkipNextIcon />
                )}
              </IconButton>
            </Box>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 390 }}
            image="/assets/media-audio.webp"
            alt="Live from space album cover"
          />
        </Card>
      </div>
    </div>
  )
}
