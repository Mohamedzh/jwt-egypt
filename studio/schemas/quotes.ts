import { CommentIcon } from '@sanity/icons'

export default {
    name: 'quote',
    type: 'document',
    title: 'Quote',
    icon: CommentIcon,
    fields: [
        {
            name: 'body',
            title: 'Body',
            type: 'string',
            description: 'The quote text',
            validation: rule => rule.required()
        },
        {
            name: 'person',
            title: 'Person',
            type: 'reference',
            to: [{ type: 'person' }],
            validation: rule => rule.required()
        },
    ],
}
