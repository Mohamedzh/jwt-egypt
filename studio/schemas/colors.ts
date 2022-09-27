import { IoColorPalette } from 'react-icons/io5'

export default {
    name: 'color',
    title: 'Color',
    icon: IoColorPalette,
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            description: 'The name to assign the color to e.g. WT White',
            validation: rule => rule.required()
        },
        {
            name: 'color_code',
            title: 'Color code',
            type: 'string',
            description: 'The color code in HEX',
            validation: rule => rule.required()
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
