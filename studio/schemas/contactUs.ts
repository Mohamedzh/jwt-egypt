import { FaLocationArrow } from 'react-icons/fa'
export default {
  name: 'contactUs',
  title: 'Contact Us',
  icon: FaLocationArrow,
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'address',
      title: 'Address(st, city)',
      type: 'string',
      description: 'Ensure that there are no other Addresses saved.',
    },
    {
      name: 'governorate',
      title: 'Governorate',
      type: 'string',
    },
    {
      name: 'postalCode',
      title: 'PostalCode',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
    },
    {
      name: 'email',
      title: 'email',
      type: 'email',
    },
    {
      name: 'facebook',
      title: 'facebook',
      type: 'url',
      description: 'Enter a valid URL.',
    },
    {
      name: 'instagram',
      title: 'instagram',
      type: 'url',
      description: 'Enter a valid URL.',
    },
    {
      name: 'twitter',
      title: 'twitter',
      type: 'url',
      description: 'Enter a valid URL.',
    },
  ],
}
