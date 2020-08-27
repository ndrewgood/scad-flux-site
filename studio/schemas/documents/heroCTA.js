export default {
    name: 'heroCTA',
    type: 'document',
    title: 'Hero CTA',
    __experimental_actions: [
      // 'create',
      'update',
      // 'delete',
      'publish'
    ],
    fields: [
      {
          name: 'ctaList',
          type: 'array',
          title: 'List of CTA',
          description: 'No more than 3 CTAs at one time.',
          of: [{type: 'cta'}]
      }
    ]
  }
  