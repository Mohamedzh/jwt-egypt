export default {
  name: 'internship',
  title: 'Internship',
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
      title: 'Internship Story',
      type: 'string',
      description: 'write your intern ship journey',
    },
  ],
}
