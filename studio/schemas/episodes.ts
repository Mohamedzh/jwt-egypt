import { FaMicrophoneAlt } from 'react-icons/fa'

export default {
    name: 'episodes',
    title: 'Episodes',
    icon: FaMicrophoneAlt,
    type: 'document',
    fields: [
        {
            name: 'media',
            title: 'Media',
            type: 'file',
            // accept: 'audio/*',
            description: 'audio or video file',
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
        {
            name: 'type',
            title: 'Episode type (audio or video)',
            type: 'string',
            description: 'Episode title',
            options: {
                list: [
                    { title: 'Audio', value: 'audio' },
                    { title: 'Video', value: 'video' }
                ],
                layout: 'radio' // <-- defaults to 'dropdown'
            },
            validation: rule => rule.required()
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: rule => rule.required()
        },
    ],
}
