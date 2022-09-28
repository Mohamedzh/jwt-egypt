import { AiOutlineApartment } from 'react-icons/ai'

export default {
    name: 'department',
    title: 'Department',
    icon: AiOutlineApartment,
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'Department name',
            validation: rule => rule.required()
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
            description: 'a brief description about the department'
        },
    ],
}
