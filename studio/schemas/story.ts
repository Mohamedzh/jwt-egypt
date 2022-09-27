import { GiSecretBook } from 'react-icons/gi'

export default {
  name: 'story',
  type: 'document',
  title: 'Story',
  icon: GiSecretBook,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'reference',
      to: [{ type: 'person' }],
    },
    {
      name: 'story',
      title: 'Story',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'contact',
      title: 'Contact',
      type: 'array',
      of: [       
        {
          title: 'Contact',
          type: 'object',
          fields: [
            {
              title: 'Name',
              name: 'name',
              type: 'string',
            },{
                title: 'URL',
                name: 'url',
                type: 'string',
              }
            
          ],
        },
      ],
    },
  ],
}
