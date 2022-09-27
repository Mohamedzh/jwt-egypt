import { CommentIcon } from '@sanity/icons'

export default {
    name: 'quote',
    type: 'document',
    title: 'Quote',
    icon: CommentIcon,
    fields: [
        {
            name: 'body',
            type: 'string',
        },
        {
            name: 'person',
            type: 'reference',
            to: [{ type: 'person' }],
        },
    ],
}
