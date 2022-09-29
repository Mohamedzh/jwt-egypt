import { IoMdColorWand } from 'react-icons/io'
export default {
    name: 'siteTheme',
    title: 'Website Theme',
    icon: IoMdColorWand,
    type: 'document',
    __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
    fields: [
        {
            name: 'firstColor',
            title: 'First color',
            type: 'reference',
            to: [{ type: 'color' }],
            description: "Choose the first gradient color for the website. (Edit-only field). To change the color, click on the 3-dots menu on the right and choose 'Replace'.",
            validation: (field) => field.required()
        },
        {
            name: 'secondColor',
            title: 'Second color',
            type: 'reference',
            to: [{ type: 'color' }],
            description: "Choose the second gradient color for the website. (Edit-only field).  To change the color, click on the 3-dots menu on the right and choose 'Replace'",
            validation: (field) => field.required()
        },
        {
            name: 'quotesSectionColor',
            title: 'Quotes section color',
            type: 'reference',
            to: [{ type: 'color' }],
            description: "Choose the background color of the quotes section of the website. (Edit-only field).  To change the color, click on the 3-dots menu on the right and choose 'Replace'",
            validation: (field) => field.required()
        },
        {
            name: 'videoSectionColor',
            title: 'Video section color',
            type: 'reference',
            to: [{ type: 'color' }],
            description: "Choose the background color of the video section of the website. (Edit-only field).  To change the color, click on the 3-dots menu on the right and choose 'Replace'",
            validation: (field) => field.required()
        },
        {
            name: 'storiesSectionColor',
            title: 'Stories section color',
            type: 'reference',
            to: [{ type: 'color' }],
            description: "Choose the background color of the stories section of the website. (Edit-only field).  To change the color, click on the 3-dots menu on the right and choose 'Replace'",
            validation: (field) => field.required()
        },
        {
            name: 'internSectionColor',
            title: 'Interns section color',
            type: 'reference',
            to: [{ type: 'color' }],
            description: "Choose the background color of the Interns section of the website. (Edit-only field).  To change the color, click on the 3-dots menu on the right and choose 'Replace'",
            validation: (field) => field.required()
        },
        {
            name: 'careerSectionColor',
            title: 'Career section color',
            type: 'reference',
            to: [{ type: 'color' }],
            description: "Choose the background color of the career section of the website. (Edit-only field).  To change the color, click on the 3-dots menu on the right and choose 'Replace'",
            validation: (field) => field.required()
        },
    ]
}
