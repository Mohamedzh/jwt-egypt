import { BsCardHeading } from 'react-icons/bs'

export default {
    name: 'navbarTheme',
    type: 'document',
    title: 'Navbar (EDIT)',
    icon: BsCardHeading,
    __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
    fields: [
        {
            name: 'buttonText',
            title: 'Button Text',
            type: 'string',
            description: 'The navbar button text (Edit-only field).',
            validation: rule => rule.required()
        },
        {
            name: 'logo',
            title: 'Logo',
            type: 'image',
            description: "The logo image (Edit-only field). To change it. click on the 3-dots menu on the right and choose'upload'",
            options: {
                hotspot: true,
            },
            validation: rule => rule.required()
        },
        {
            name: 'altText',
            title: 'Alt text',
            type: 'string',
            description: 'Alternative text to display instead of the logo',
        },
        {
            name: 'logoTextColor',
            title: 'Logo text color',
            type: 'reference',
            to: [{ type: 'color' }],
            description: 'The navbar logo text color',
        },
        {
            name: 'menuTextColor',
            title: 'Menu text color',
            type: 'reference',
            to: [{ type: 'color' }],
            description: 'The navbar menu text color (Edit-only field).',
            validation: rule => rule.required()
        },
    ],
}
