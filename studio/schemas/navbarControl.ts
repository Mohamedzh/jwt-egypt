import { BsCardHeading } from 'react-icons/bs'

export default {
    name: 'navbarTheme',
    type: 'document',
    title: 'Navbar',
    icon: BsCardHeading,
    fields: [
        {
            name: 'buttonText',
            title: 'Button Text',
            type: 'string',
            description: 'The navbar button text',
            validation: rule => rule.required()
        },
        {
            name: 'logo',
            title: 'Logo',
            type: 'image',
            description: "The logo image. To change it. click on the 3-dots menu on the right and choose'upload'",
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
            name: 'textColor',
            title: 'Logo text color',
            type: 'reference',
            to: [{ type: 'color' }],
            description: 'The navbar button text',
        },
    ],
}
