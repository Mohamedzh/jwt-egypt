import { FaMicrophoneAlt } from 'react-icons/fa'

export default {
    name: 'podcast',
    title: 'Podcast',
    icon: FaMicrophoneAlt,
    type: 'document',
    fields: [
        {
            name: 'audio',
            title: 'audio',
            type: 'file',
            accept: 'audio/*',
            description: 'audio file',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
            description: 'a brief description'
        },
    ],
}
