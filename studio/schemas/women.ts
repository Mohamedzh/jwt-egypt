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
            validation: rule => rule.required()
        },
        {
            name: 'job_title',
            title: 'Job title',
            type: 'string',
            validation: rule => rule.required()
        },
        {
            name: 'department',
            title: 'Department',
            type: 'reference',
            to: [{ type: 'department' }],
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
