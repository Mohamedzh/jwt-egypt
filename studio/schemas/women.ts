import { UserIcon } from '@sanity/icons'

export default {
    name: 'person',
    title: 'Person',
    icon: UserIcon,
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'job_title',
            title: 'Job_title',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
    ],
}
