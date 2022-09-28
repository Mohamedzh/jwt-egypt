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
      name: 'facebook',
      title: 'Facebook',
      type: 'url',
    },
    {
      name: 'twitter',
      title: 'Twitter',
      type: 'url',
    },
    {
      name: 'instagram',
      title: 'Instagram',
      type: 'url',
    },
  ],
}
