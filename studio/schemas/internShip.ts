export default {
  name: 'internship',
  title: 'Intern Ship',
  icon: '',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'name',
      type: 'reference',
      to: [{ type: 'person' }],
      description: 'the name of the internship person',
    },
    {
      name: 'story',
      title: 'Intern Ship Story',
      type: 'string',
      description: 'write your intern ship journey',
    },
  ],
}
