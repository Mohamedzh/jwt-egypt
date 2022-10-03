import { FaMicrophoneAlt } from 'react-icons/fa'

export default {
    name: 'podcasts',
    title: 'Podcasts',
    icon: FaMicrophoneAlt,
    type: 'document',
    fields: [
        // {
        //     name: 'audio',
        //     title: 'audio',
        //     type: 'file',
        //     accept: 'audio/*',
        //     description: 'audio file',
        // },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'podcast title',
            validation: rule => rule.required()

        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
            description: 'a brief description',
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
