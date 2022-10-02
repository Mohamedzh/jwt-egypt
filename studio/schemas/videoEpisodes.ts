import { FaMicrophoneAlt } from 'react-icons/fa'

export default {
    name: 'videoEpisodes',
    title: 'Video episodes',
    icon: FaMicrophoneAlt,
    type: 'document',
    fields: [
        {
            name: 'video',
            title: 'Video',
            type: 'file',
            accept: 'video/*',
            description: 'Video file',
            validation: rule => rule.required()
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'Episode title',
            validation: rule => rule.required()
        },
        {
            name: 'podcast',
            title: 'Podcast',
            type: 'reference',
            to: [{ type: 'podcasts' }],
            description: 'a brief description',
            validation: rule => rule.required()
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
            description: 'Episode description',
            validation: rule => rule.required()
        },
    ],
}
