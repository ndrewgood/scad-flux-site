export default {
    name: 'aboutSettings',
    type: 'document',
    title: 'About Settings',
    __experimental_actions: [
      // 'create',
      'update',
      // 'delete',
      'publish'
    ],
    fields: [
      {
          title: "About Body",
          name: "body",
          type: 'contentPortableText'
      }
    ]
  }
  