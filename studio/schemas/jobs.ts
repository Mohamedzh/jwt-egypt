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
            name: 'type',
            title: 'Type',
            type: 'string',
            description: 'Full-time / Part-time'
        }, 
        {
            name: 'job_summary',
            title: 'Job Summary',
            type: 'string',
            description: 'A brief job description'
        }, 
        {
            name: 'responsibilities',
            title: 'Responsibilities',
            type: 'blockContent',
            description: 'Add content in a list form only!'
        }, 

        {
            name: 'qualifications',
            title: 'Qualifications',
            type: 'blockContent',
            description: 'Add content in a list form only!',
        },
    ],
}
