import { FaMicrophoneAlt } from 'react-icons/fa'

export default {
    name: 'episodes',
    title: 'Episodes',
    icon: FaMicrophoneAlt,
    type: 'document',
    fields: [
        {
            name: 'audio',
            title: 'Audio',
            type: 'file',
            accept: 'audio/*',
            description: 'audio file',
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
