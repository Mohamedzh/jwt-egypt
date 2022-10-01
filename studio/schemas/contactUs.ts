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
      description: 'Edit JWT currently displayed address. (Edit-only field)',
      validation: (field) => field.required()
    },
    {
      name: 'governorate',
      title: 'Governorate',
      type: 'string',
      description: '(Edit-only field)',
      validation: (field) => field.required()

    },
    {
      name: 'postalCode',
      title: 'PostalCode',
      type: 'string',
      description: '(Edit-only field)',
      validation: (field) => field.required()

    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
      description: '(Edit-only field)',
      validation: (field) => field.required()

    },
    {
      name: 'email',
      title: 'email',
      type: 'email',
      description: 'Edit JWT currently displayed email. (Edit-only field)',
      validation: (field) => field.required()

    },
    {
      name: 'facebook',
      title: 'facebook',
      type: 'url',
      description: 'Enter a valid URL. (Edit-only field)',
      validation: (field) => field.required()

    },
    {
      name: 'instagram',
      title: 'instagram',
      type: 'url',
      description: 'Enter a valid URL. (Edit-only field)',
      validation: (field) => field.required()

    },
    {
      name: 'twitter',
      title: 'twitter',
      type: 'url',
      description: 'Enter a valid URL. (Edit-only field)',
      validation: (field) => field.required()

    },
    {
      name: 'textColor',
      title: 'Text color',
      type: 'reference',
      to: [{ type: 'color' }],
      description: 'Choose the text color',
      validation: (field) => field.required()
    },
  ],
}
