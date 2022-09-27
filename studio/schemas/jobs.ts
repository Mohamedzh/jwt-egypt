import { MdWorkOutline } from 'react-icons/md'

export default {
    name: 'job',
    title: 'Job',
    icon: MdWorkOutline,
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'The job title',
            validation: (rule) => rule.required()
        },
        {
            name: 'department',
            title: 'Department',
            type: 'reference',
            to: [{ type: 'department' }],
            validation: rule => rule.required()
        },
        {
            name: 'location',
            title: 'Location',
            type: 'string',
            description: 'Remote, on-site ..etc'
        },
        {
            name: 'close_date',
            title: 'Close date',
            type: 'date',
            description: 'The date after which the job posting will be closed for applicants'
        },
        {
            name: 'details',
            title: 'Details',
            type: 'blockContent',
            description: 'The job details',
            validation: rule => rule.required()
        },
    ],
}
