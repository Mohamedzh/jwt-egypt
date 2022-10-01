import { BsCardHeading } from 'react-icons/bs'

export default {
    name: 'header',
    type: 'document',
    title: 'Header',
    icon: BsCardHeading,
    __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
    fields: [
        {
            name: 'heading',
            title: 'Heading',
            type: 'string',
            description: 'The heading text above the title',
            validation: rule => rule.required()
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'The main title',
            validation: rule => rule.required()
        },
        {
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
            description: 'The subtitle below the main title',
            validation: rule => rule.required()
        },
        {
            name: 'buttonText',
            title: 'Button Text',
            type: 'string',
            description: 'The header button text',
            validation: rule => rule.required()
        },
        {
            name: 'heroImage',
            title: 'Hero Image',
            type: 'image',
            description: "The main image in the header. To change it. click on the 3-dots menu on the right and choose'upload'",
            options: {
                hotspot: true,
            },
            validation: rule => rule.required()
        },
        {
            name: 'textColor',
            title: 'Text Color',
            type: 'reference',
            to: [{ type: 'color' }],
            description: 'The color of the text in the header',
            validation: rule => rule.required()
        },
    ],
}
