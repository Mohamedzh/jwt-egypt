import { BsCardHeading } from 'react-icons/bs'

export default {
    name: 'careersPage',
    type: 'document',
    title: 'Careers Page (EDIT)',
    icon: BsCardHeading,
    __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
    fields: [
        {
            name: 'formTextColor',
            title: 'Form text color',
            type: 'reference',
            to: [{ type: 'color' }],
            description: 'The navbar logo text color',
        },
    ],
}
