import { BsCameraVideo } from 'react-icons/bs'

export default {
    name: 'video',
    type: 'document',
    title: 'Video',
    icon: BsCameraVideo,
    fields: [
        {
            name: 'videoName',
            title: 'Video Name',
            type: 'string',
            description: 'The name of the video shown on the website.',
            validation: rule => rule.required()
        },
        {
            name: 'videoId',
            title: 'Video id from youtube',
            type: 'string',
            description: 'The id of the video from its url on youtube, for example: a video with url = "https://www.youtube.com/watch?v=9JEtoyeH9fU" its id starts after the "=" sign so it will be "9JEtoyeH9fU"',
            validation: rule => rule.required()
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
            description: 'A quick description of the video. (optional)',
        }
    ],
}
